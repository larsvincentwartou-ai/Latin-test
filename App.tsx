import React, { useState } from 'react';
import { StartScreen } from './components/StartScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { generateQuiz, getBannedIds } from './services/quizService';
import { Question } from './types';

function App() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'result'>('start');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0); // Correct answers
  const [wrong, setWrong] = useState(0); // Wrong answers
  
  // State to track questions answered incorrectly in the current session
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([]);

  // Initialize quiz
  const startQuiz = () => {
    const newQuestions = generateQuiz();
    setQuestions(newQuestions);
    setWrongQuestions([]); // Clear previous errors
    setCurrentIndex(0);
    setScore(0);
    setWrong(0);
    setGameState('playing');
    window.scrollTo(0, 0);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    } else {
      setWrong(prev => prev + 1);
      // Add the current question to the wrong list
      setWrongQuestions(prev => [...prev, questions[currentIndex]]);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setGameState('result');
    }
  };

  const handleEndQuizEarly = () => {
    setGameState('result');
  };

  const restartQuiz = () => {
    setGameState('start');
  };

  const retryWrongAnswers = () => {
    // Check for banned IDs just in case user banned them during the run
    const bannedIds = getBannedIds();
    const questionsToRetry = wrongQuestions.filter(q => !bannedIds.includes(q.id));

    if (questionsToRetry.length === 0) {
        // If all wrong answers were actually banned, just restart full quiz
        restartQuiz();
        return;
    }

    // Set the quiz to only contain the wrong questions
    setQuestions(questionsToRetry);
    // Reset the tracking for the NEW round
    setWrongQuestions([]); 
    setCurrentIndex(0);
    setScore(0);
    setWrong(0);
    setGameState('playing');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-indigo-100 font-sans text-slate-900 py-8">
      <header className="fixed top-0 left-0 right-0 p-4 z-10 bg-white/80 backdrop-blur-md border-b border-indigo-100 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
            <span className="font-bold text-indigo-900 tracking-tight serif text-lg">
              Latinsk Grammatik <span className="text-indigo-400 font-sans font-normal text-sm ml-2">AM§6 Morfologi</span>
            </span>
        </div>
      </header>

      <main className="container mx-auto pt-20 pb-8 flex items-center justify-center min-h-[calc(100vh-5rem)]">
        {gameState === 'start' && (
          <StartScreen 
            onStart={startQuiz} 
            questionCount={generateQuiz().length} 
          />
        )}
        
        {gameState === 'playing' && questions.length > 0 && (
          <QuizScreen
            question={questions[currentIndex]}
            currentNumber={currentIndex + 1}
            totalQuestions={questions.length}
            correctCount={score}
            wrongCount={wrong}
            onAnswer={handleAnswer}
            onEndQuiz={handleEndQuizEarly}
          />
        )}

        {gameState === 'result' && (
          <ResultScreen
            score={score}
            totalQuestions={questions.length}
            wrongQuestionsCount={wrongQuestions.length}
            onRestart={restartQuiz}
            onRetryWrong={retryWrongAnswers}
          />
        )}
      </main>
      
      <footer className="fixed bottom-0 left-0 right-0 p-2 text-center text-xs text-slate-400 bg-slate-50/80 backdrop-blur-sm">
        Baseret på AM §6.4 (Personendelser) og §6.8 (Mærker)
      </footer>
    </div>
  );
}

export default App;