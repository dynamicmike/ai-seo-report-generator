import React from 'react';
import type { SeoReport, GroundingSource } from '../types';
import SeoSection from './SeoSection';

interface ReportDisplayProps {
  report: SeoReport;
  sources: GroundingSource[];
  url: string;
}

const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.665l3-3Z" />
        <path d="M8.603 14.463a4 4 0 0 1-5.656-5.656l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a5.5 5.5 0 0 0 7.778 7.778l3-3a5.5 5.5 0 0 0-.225-7.865.75.75 0 0 0-.977 1.138 4 4 0 0 1 .142 4.665l-3 3Z" />
    </svg>
);

const ReportDisplay: React.FC<ReportDisplayProps> = ({ report, sources, url }) => {
  const sections = Object.values(report);

  return (
    <div className="space-y-8 animate-fade-in">
       <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-100 mb-2">SEO Report for:</h2>
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 break-all text-lg flex items-center gap-2">
                {url} <ExternalLinkIcon className="h-5 w-5" />
            </a>
       </div>
      <div className="space-y-4">
        {sections.map((section, index) => (
          <SeoSection key={index} section={section} />
        ))}
      </div>
      {sources.length > 0 && (
        <div className="mt-10 p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 text-slate-200 flex items-center gap-2">
            <ExternalLinkIcon className="h-6 w-6"/>
            Data Sources
          </h3>
          <ul className="space-y-2">
            {sources.map((source, index) => (
              <li key={index} className="flex items-start">
                <span className="text-slate-400 mr-2 mt-1">&#8226;</span>
                <a 
                  href={source.web.uri} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:underline hover:text-blue-300 break-all"
                  title={source.web.title}
                >
                  {source.web.title || source.web.uri}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ReportDisplay;