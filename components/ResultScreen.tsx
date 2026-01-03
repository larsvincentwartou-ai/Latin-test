import React from 'react';
import { Button } from './Button';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  wrongQuestionsCount: number;
  onRestart: () => void;
  onRetryWrong: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ 
  score, 
  totalQuestions, 
  wrongQuestionsCount,
  onRestart,
  onRetryWrong
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const hasErrors = wrongQuestionsCount > 0;
  
  let message = '';
  let subMessage = '';

  if (hasErrors) {
    message = 'Næsten i mål!';
    subMessage = `Du havde ${wrongQuestionsCount} fejl. Lad os få helt styr på dem med det samme.`;
  } else if (percentage === 100) {
    message = 'Fremragende! (Optime!)';
    subMessage = 'Du har fuldstændig styr på latinsk grammatik.';
  } else {
     // Fallback mostly for edge cases where math allows <100% but wrongQuestionsCount is 0 (unlikely with current logic)
    message = 'Godt gået!';
    subMessage = 'Du har gennemført denne runde fejlfrit.';
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 animate-fade-in-up">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full border border-indigo-50">
        <div className="mb-8">
           <div className="relative inline-flex items-center justify-center">
             <svg className={`w-32 h-32 ${hasErrors ? 'text-orange-100' : 'text-green-100'}`} viewBox="0 0 100 100">
               <circle cx="50" cy="50" r="45" fill="currentColor" />
             </svg>
             <span className={`absolute text-4xl font-bold serif ${hasErrors ? 'text-orange-600' : 'text-green-700'}`}>
               {percentage}%
             </span>
           </div>
        </div>

        <h2 className="text-3xl font-bold text-slate-800 mb-2 serif">{message}</h2>
        <p className="text-slate-600 mb-6">{subMessage}</p>

        <div className="bg-slate-50 rounded-lg p-4 mb-8 border border-slate-100">
          <div className="flex justify-between items-center text-sm md:text-base">
            <span className="text-slate-500">Korrekte svar i denne runde:</span>
            <span className="font-bold text-slate-900">{score} / {totalQuestions}</span>
          </div>
        </div>

        <div className="space-y-3">
            {hasErrors ? (
                <>
                    <Button onClick={onRetryWrong} size="lg" fullWidth className="bg-orange-600 hover:bg-orange-700 focus:ring-orange-500">
                        Prøv fejlene igen ({wrongQuestionsCount})
                    </Button>
                    <Button onClick={onRestart} variant="outline" size="md" fullWidth>
                        Start helt forfra
                    </Button>
                </>
            ) : (
                <Button onClick={onRestart} size="lg" fullWidth>
                    Start Ny Quiz
                </Button>
            )}
        </div>
      </div>
    </div>
  );
};