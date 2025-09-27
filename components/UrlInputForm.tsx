
import React, { useState } from 'react';

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
);

interface UrlInputFormProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

const UrlInputForm: React.FC<UrlInputFormProps> = ({ onSubmit, isLoading }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 bg-slate-800/50 p-2 rounded-lg border border-slate-700 shadow-lg">
      <div className="flex-grow w-full">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          required
          className="w-full bg-slate-800 text-slate-100 placeholder-slate-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 border-0"
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading || !url}
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 disabled:bg-slate-600 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isLoading ? 'Analyzing...' : 'Generate Report'}
        {!isLoading && <ArrowRightIcon className="h-5 w-5" />}
      </button>
    </form>
  );
};

export default UrlInputForm;
