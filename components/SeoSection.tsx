import React, { useState } from 'react';
import type { SeoSection as SeoSectionType } from '../types';

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
  </svg>
);

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);
  

interface SeoSectionProps {
  section: SeoSectionType;
}

const ScoreRing: React.FC<{ score: number }> = ({ score }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getColor = (s: number) => {
    if (s >= 80) return 'stroke-green-400';
    if (s >= 50) return 'stroke-yellow-400';
    return 'stroke-red-400';
  };

  return (
    <div className="relative h-20 w-20 flex-shrink-0">
      <svg className="transform -rotate-90" width="80" height="80" viewBox="0 0 80 80">
        <circle
          className="stroke-slate-700"
          strokeWidth="6"
          fill="transparent"
          r={radius}
          cx="40"
          cy="40"
        />
        <circle
          className={`${getColor(score)} transition-all duration-1000 ease-out`}
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="40"
          cy="40"
          style={{ transition: 'stroke-dashoffset 1s ease-out' }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-slate-100">
        {score}
      </span>
    </div>
  );
};

const SeoSection: React.FC<SeoSectionProps> = ({ section }) => {
    const [isOpen, setIsOpen] = useState(false);
    const sectionId = `section-content-${section.title.replace(/\s+/g, '-')}`;

    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg transition-all duration-300 hover:border-slate-600">
            <div
                className="flex items-center justify-between p-4 sm:p-6 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && setIsOpen(!isOpen)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={sectionId}
            >
                <h3 className="text-xl font-bold text-slate-100">{section.title}</h3>
                <div className="flex items-center gap-4">
                    <ScoreRing score={section.score} />
                    <ChevronDownIcon className={`h-6 w-6 text-slate-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
            </div>

            <div
                id={sectionId}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-4 sm:px-6 pb-6 border-t border-slate-700">
                    <p className="text-slate-400 mt-6 mb-6">{section.summary}</p>
                    <div>
                        <h4 className="font-semibold text-slate-300 mb-3">Recommendations to Optimize:</h4>
                        <ul className="space-y-3">
                            {section.recommendations.map((rec, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-300">{rec}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeoSection;