
import React from 'react';

const FeatureIcon: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-slate-700/50 rounded-lg text-blue-400">
            {icon}
        </div>
        <div>
            <h4 className="font-semibold text-slate-100">{title}</h4>
            <p className="text-slate-400">{description}</p>
        </div>
    </div>
);

const DocumentChartBarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
      <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.914 9H3.086Zm6.136 4.318a.75.75 0 0 1 1.06 0l1.445 1.444a.75.75 0 0 0 1.06 0l1.445-1.444a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);
  
const WrenchScrewdriverIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 5.25 5.25c0 1.522-.625 2.9-1.638 3.886l-2.074 2.074a.75.75 0 0 1-1.06 0l-2.074-2.074A5.226 5.226 0 0 1 6.75 12a5.25 5.25 0 0 1 5.25-5.25Zm3.344 6.092a3.726 3.726 0 0 0 1.156-2.592 3.75 3.75 0 0 0-7.5 0c0 .968.366 1.859 1.156 2.592l.278.278a.75.75 0 0 1 0 1.06l-.278.278a3.726 3.726 0 0 0-1.156 2.592 3.75 3.75 0 0 0 7.5 0c0-.968-.366-1.859-1.156-2.592l-.278-.278a.75.75 0 0 1 0-1.06l.278-.278Z" clipRule="evenodd" />
      <path d="m10.036 1.372.863-.517a1.5 1.5 0 0 1 2.142 0l.863.517a1.5 1.5 0 0 0 2.142 0l.863-.517a1.5 1.5 0 0 1 2.142 0l.863.517a1.5 1.5 0 0 0 2.142 0l.517-.863a1.5 1.5 0 0 1 0-2.142l-.517-.863a1.5 1.5 0 0 0 0-2.142l.517-.863a1.5 1.5 0 0 1 0-2.142l-.517-.863a1.5 1.5 0 0 0-2.142 0l-.863.517a1.5 1.5 0 0 1-2.142 0l-.863-.517a1.5 1.5 0 0 0-2.142 0l-.863.517a1.5 1.5 0 0 1-2.142 0l-.863-.517a1.5 1.5 0 0 0-2.142 0l-.863.517a1.5 1.5 0 0 1-2.142 0l-.517.863a1.5 1.5 0 0 0 0 2.142l.517.863a1.5 1.5 0 0 1 0 2.142l-.517.863a1.5 1.5 0 0 0 0 2.142l.517.863a1.5 1.5 0 0 1 2.142 0l.863-.517a1.5 1.5 0 0 0 2.142 0Zm-2.142 6.092a1.5 1.5 0 0 0-2.142 0l-.863.517a1.5 1.5 0 0 1-2.142 0l-.863-.517a1.5 1.5 0 0 0-2.142 0l-.863.517a1.5 1.5 0 0 1-2.142 0l-.517-.863a1.5 1.5 0 0 0 0-2.142l.517-.863a1.5 1.5 0 0 1 0-2.142l-.517-.863a1.5 1.5 0 0 0 0-2.142l.517-.863a1.5 1.5 0 0 1 2.142 0l.863.517a1.5 1.5 0 0 0 2.142 0l.863-.517a1.5 1.5 0 0 1 2.142 0l.863.517a1.5 1.5 0 0 0 2.142 0l.863-.517a1.5 1.5 0 0 1 2.142 0l.517.863a1.5 1.5 0 0 0 0 2.142l-.517.863a1.5 1.5 0 0 1 0 2.142l.517.863a1.5 1.5 0 0 0 0 2.142l-.517.863a1.5 1.5 0 0 1-2.142 0l-.863-.517a1.5 1.5 0 0 0-2.142 0l.863.517a1.5 1.5 0 0 1 2.142 0l.863.517a1.5 1.5 0 0 0 2.142 0l.863-.517a1.5 1.5 0 0 1 2.142 0Z" />
    </svg>
);
  
const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 5.88 5.88l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-5.88 5.88l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-5.88-5.88l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813a3.75 3.75 0 0 0 5.88-5.88l.813-2.846A.75.75 0 0 1 9 4.5ZM12 6.75a5.25 5.25 0 0 1 5.25 5.25c0 1.522-.625 2.9-1.638 3.886l-2.074 2.074a.75.75 0 0 1-1.06 0l-2.074-2.074A5.226 5.226 0 0 1 6.75 12a5.25 5.25 0 0 1 5.25-5.25Z" clipRule="evenodd" />
    </svg>
);

const Welcome: React.FC = () => {
  return (
    <div className="text-center p-8 bg-slate-800/50 border border-slate-700 rounded-xl animate-fade-in">
        <h2 className="text-2xl font-bold text-slate-100 mb-4">Ready to Optimize?</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Get started by entering a URL above. Our AI will perform a deep-dive analysis and generate a report with scores and actionable advice across critical SEO pillars.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            <FeatureIcon 
                icon={<DocumentChartBarIcon className="h-6 w-6"/>}
                title="On-Page & Content"
                description="Analysis of titles, metas, content quality, and keyword usage."
            />
            <FeatureIcon 
                icon={<WrenchScrewdriverIcon className="h-6 w-6"/>}
                title="Technical SEO"
                description="Checks for speed, mobile-friendliness, and site structure."
            />
            <FeatureIcon 
                icon={<SparklesIcon className="h-6 w-6"/>}
                title="AI Opportunities"
                description="Unique suggestions on leveraging AI for content and strategy."
            />
        </div>
    </div>
  );
};

export default Welcome;
