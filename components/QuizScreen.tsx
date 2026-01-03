import React, { useState, useEffect, useRef } from 'react';
import { Question } from '../types';
import { Button } from './Button';
import JSConfetti from 'js-confetti';

interface QuizScreenProps {
  question: Question;
  currentNumber: number;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  onAnswer: (isCorrect: boolean) => void;
  onEndQuiz: () => void;
}

const MOTIVATING_PHRASES = [
  "Det er okay, vi øver os bare!",
  "Kom igen, du skal nok lære det!",
  "Op på hesten igen!",
  "Godt kæmpet, selvom det ikke var helt rigtigt.",
  "Fejl er vejen til ny viden!",
  "Ikke helt, men godt forsøgt!",
  "Næsten! Prøv at se forklaringen her:",
  "Det er svært stof, men du bliver bedre!"
];

export const QuizScreen: React.FC<QuizScreenProps> = ({ 
  question, 
  currentNumber, 
  totalQuestions, 
  correctCount, 
  wrongCount,
  onAnswer,
  onEndQuiz
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [feedbackTitle, setFeedbackTitle] = useState('');
  
  const jsConfettiRef = useRef<JSConfetti | null>(null);

  useEffect(() => {
    jsConfettiRef.current = new JSConfetti();
  }, []);

  // Reset state when question changes
  useEffect(() => {
    setSelectedOption(null);
    setIsRevealed(false);
    setFeedbackTitle('');
  }, [question]);

  const handleOptionClick = (option: string) => {
    if (isRevealed) return;
    setSelectedOption(option);
    setIsRevealed(true);

    if (option === question.correctAnswer) {
      setFeedbackTitle('Korrekt!');
      // Trigger Danish flags and hearts
      jsConfettiRef.current?.addConfetti({
        emojis: ['🇩🇰', '❤️'],
        emojiSize: 50,
        confettiNumber: 40,
      });
    } else {
      const randomPhrase = MOTIVATING_PHRASES[Math.floor(Math.random() * MOTIVATING_PHRASES.length)];
      setFeedbackTitle(randomPhrase);
    }
  };

  const handleNext = () => {
    onAnswer(selectedOption === question.correctAnswer);
  };

  const progressPercentage = ((currentNumber - 1) / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* Header with Stats and End Button */}
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex justify-between items-center">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Spørgsmål {currentNumber} af {totalQuestions}
            </div>
            <button 
                onClick={onEndQuiz}
                className="text-xs font-semibold text-red-600 hover:text-red-800 hover:underline px-2 py-1"
            >
                Afslut
            </button>
        </div>
        
        <div className="flex justify-end gap-3">
            <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                <span>✓</span>
                <span>{correctCount}</span>
            </div>
            <div className="flex items-center space-x-1 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                <span>✕</span>
                <span>{wrongCount}</span>
            </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 h-2 bg-slate-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-indigo-500 transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden mb-6">
        <div className="p-6 md:p-8 bg-indigo-50/50 border-b border-indigo-100 text-center">
            <span className="inline-block mb-2 px-3 py-1 bg-white/60 text-indigo-600 rounded-full text-xs font-semibold uppercase tracking-wide">
                {question.category}
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 serif leading-snug">
                {question.text}
            </h2>
        </div>

        <div className="p-6 space-y-3">
          {question.options.map((option, idx) => {
            let variant: 'outline' | 'success' | 'danger' | 'primary' = 'outline';
            let opacity = 'opacity-100';

            if (isRevealed) {
              if (option === question.correctAnswer) {
                variant = 'success';
              } else if (option === selectedOption) {
                variant = 'danger';
              } else {
                opacity = 'opacity-50';
              }
            } else if (selectedOption === option) {
                variant = 'primary'; // Temporarily highlighted
            }

            return (
              <Button
                key={idx}
                variant={variant}
                fullWidth
                onClick={() => handleOptionClick(option)}
                className={`text-left justify-start h-auto min-h-[3.5rem] ${opacity} ${isRevealed ? 'cursor-default' : ''}`}
                disabled={isRevealed}
              >
                <span className="mr-3 font-mono text-indigo-300 select-none">
                  {String.fromCharCode(65 + idx)}.
                </span>
                {option}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Feedback / Next Button Area */}
      <div className={`transition-all duration-300 ease-in-out transform ${isRevealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
        {isRevealed && (
          <div className={`rounded-xl p-4 md:p-6 mb-20 shadow-sm border flex flex-col gap-6 ${selectedOption === question.correctAnswer ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
            
            {/* Standard Feedback Text */}
            <div className="text-center md:text-left">
              <div className={`font-bold text-lg mb-1 ${selectedOption === question.correctAnswer ? 'text-green-800' : 'text-red-800'}`}>
                {feedbackTitle}
              </div>
              <div className="text-slate-700 text-sm md:text-base">
                {question.explanation}
              </div>
            </div>

            <Button onClick={handleNext} size="md" className="shrink-0 whitespace-nowrap w-full">
              Næste Spørgsmål →
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};