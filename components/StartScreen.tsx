import React from 'react';
import { Button } from './Button';

interface StartScreenProps {
  onStart: () => void;
  questionCount: number;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart, questionCount }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 animate-fade-in-up">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg border border-indigo-50">
        <div className="mb-6 flex justify-center">
          <svg className="w-20 h-20 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 serif">
          Latinsk Grammatik
        </h1>
        <h2 className="text-xl text-indigo-600 font-medium mb-6">
          Substantiver & Verber (AM §2 & §6)
        </h2>
        
        <p className="text-slate-600 mb-8 leading-relaxed">
          Velkommen til quizzen. Du vil blive testet i de to ark fra undervisningen:
          <br/>
          <strong>1. Substantivernes bøjninger</strong> (1.-5. bøjning)
          <br/>
          <strong>2. Verbernes terminologi & former</strong> (Personendelser, mærker, tempus/modus)
          <br /><br />
          Der er i alt <strong>{questionCount}</strong> spørgsmål.
        </p>

        <Button onClick={onStart} size="lg" fullWidth>
          Start Quizzen
        </Button>
      </div>
    </div>
  );
};