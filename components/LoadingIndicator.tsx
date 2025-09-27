
import React from 'react';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="text-center p-8 bg-slate-800/50 border border-slate-700 rounded-xl animate-fade-in">
      <div className="flex justify-center items-center mb-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
      <p className="text-lg font-semibold text-slate-200 mb-2">Generating Your SEO Report...</p>
      <p className="text-slate-400">Our AI is analyzing the website. This might take a moment.</p>
    </div>
  );
};

export default LoadingIndicator;
