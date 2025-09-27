
import React from 'react';

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
  </svg>
);


const Header: React.FC = () => {
  return (
    <header className="py-6 border-b border-slate-700/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-3">
           <div className="p-2 bg-blue-500 rounded-lg">
                <SearchIcon className="h-6 w-6 text-white" />
           </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight">
            AI SEO Report Generator
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
