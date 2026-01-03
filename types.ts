export interface MorphologyItem {
  id: string;
  suffix: string; // The answer (e.g., "-mus", "-ba-")
  description: string; // The question context (e.g., "1. person pluralis aktiv")
  category: string;
  explanation?: string;
}

export interface Question {
  id: string;
  text: string;
  correctAnswer: string;
  options: string[];
  explanation?: string;
  category: string;
}

export interface QuizState {
  questions: Question[];
  currentIndex: number;
  score: number; // Correct answers
  wrong: number; // Wrong answers
  isActive: boolean;
  isFinished: boolean;
}