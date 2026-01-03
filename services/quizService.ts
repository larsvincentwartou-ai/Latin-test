import { Question, MorphologyItem } from '../types';
import { MORPHOLOGY_DATA } from '../constants';

const BANNED_QUESTIONS_KEY = 'latin_quiz_banned_ids';
const OVERRIDES_KEY = 'latin_quiz_overrides';

interface OverrideMap {
  [id: string]: string; // id -> newSuffix
}

// --- Banned IDs Helpers ---
export const getBannedIds = (): string[] => {
  try {
    const stored = localStorage.getItem(BANNED_QUESTIONS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Failed to read banned ids from local storage", e);
    return [];
  }
};

export const banQuestionId = (id: string) => {
  try {
    const currentBanned = getBannedIds();
    if (!currentBanned.includes(id)) {
      const updated = [...currentBanned, id];
      localStorage.setItem(BANNED_QUESTIONS_KEY, JSON.stringify(updated));
    }
  } catch (e) {
    console.error("Failed to save banned id to local storage", e);
  }
};

// --- Override Helpers ---
export const getOverrides = (): OverrideMap => {
  try {
    const stored = localStorage.getItem(OVERRIDES_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    console.error("Failed to read overrides", e);
    return {};
  }
};

export const saveOverride = (id: string, newSuffix: string) => {
  try {
    const current = getOverrides();
    current[id] = newSuffix;
    localStorage.setItem(OVERRIDES_KEY, JSON.stringify(current));
  } catch (e) {
    console.error("Failed to save override", e);
  }
};

// --- Shuffle ---
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function getRandomDistractors(correctItem: MorphologyItem, allItems: MorphologyItem[], count: number = 3): string[] {
  let pool = allItems.filter(item => item.category === correctItem.category && item.suffix !== correctItem.suffix);
  
  if (pool.length < count) {
      const remainingNeeded = count - pool.length;
      const otherPool = allItems.filter(item => item.category !== correctItem.category && item.suffix !== correctItem.suffix);
      pool = [...pool, ...shuffleArray(otherPool).slice(0, remainingNeeded)];
  }

  const shuffledPool = shuffleArray(pool);
  return shuffledPool.slice(0, count).map(i => i.suffix);
}

export const generateQuiz = (): Question[] => {
  const questions: Question[] = [];
  const bannedIds = getBannedIds();
  const overrides = getOverrides();

  // Filter out banned questions
  const activeMorphologyData = MORPHOLOGY_DATA.filter(item => !bannedIds.includes(item.id));
  const sourceData = activeMorphologyData.length > 0 ? activeMorphologyData : MORPHOLOGY_DATA;

  sourceData.forEach(item => {
    // Determine the correct answer (check for override)
    const effectiveSuffix = overrides[item.id] || item.suffix;

    // Distractors need to be generated carefully so they don't include the correct answer
    // We pass the potentially modified 'item' structure conceptually
    const distractors = getRandomDistractors({ ...item, suffix: effectiveSuffix }, MORPHOLOGY_DATA, 3);
    
    // Ensure the effective suffix is not in distractors (in case override made it equal to a distractor)
    const validDistractors = distractors.filter(d => d !== effectiveSuffix);
    
    // Fill up if we lost one
    while(validDistractors.length < 3) {
        const random = MORPHOLOGY_DATA[Math.floor(Math.random() * MORPHOLOGY_DATA.length)].suffix;
        if (random !== effectiveSuffix && !validDistractors.includes(random)) {
            validDistractors.push(random);
        }
    }

    const options = shuffleArray([effectiveSuffix, ...validDistractors]);

    questions.push({
      id: item.id,
      text: `Hvad er endelsen/mærket for: ${item.description}?`,
      correctAnswer: effectiveSuffix,
      options: options,
      category: item.category,
      explanation: `${item.explanation} (Svar: ${effectiveSuffix})`
    });
  });

  return shuffleArray(questions);
};