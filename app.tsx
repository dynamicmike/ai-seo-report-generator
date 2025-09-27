
import React, { useState, useCallback } from 'react';
import type { SeoReport, GroundingSource } from './types';
import { generateSeoReport } from './services/geminiService';
import Header from './components/Header';
import UrlInputForm from './components/UrlInputForm';
import ReportDisplay from './components/ReportDisplay';
import LoadingIndicator from './components/LoadingIndicator';
import ErrorMessage from './components/ErrorMessage';
import Welcome from './components/Welcome';

const App: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [report, setReport] = useState<SeoReport | null>(null);
  const [sources, setSources] = useState<GroundingSource[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleReportGeneration = useCallback(async (submittedUrl: string) => {
    if (!submittedUrl) {
      setError('Please enter a valid website URL.');
      return;
    }
    
    setUrl(submittedUrl);
    setIsLoading(true);
    setError(null);
    setReport(null);
    setSources([]);

    try {
      const result = await generateSeoReport(submittedUrl);
      if (result.report) {
         setReport(result.report);
      } else {
        // Handle case where the backend returns null for the report
        throw new Error('Received an empty report from the server.');
      }
      if(result.sources) {
        setSources(result.sources);
      }
    } catch (err) {
      console.error('Error generating report:', err);
      setError('Failed to generate SEO report. The server may be busy or the requested URL could not be analyzed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-slate-400 mb-8 text-lg">
            Enter a website URL to receive an instant, AI-powered SEO analysis. Uncover key insights and actionable recommendations to boost your online presence.
          </p>
          <UrlInputForm onSubmit={handleReportGeneration} isLoading={isLoading} />
          
          <div className="mt-12">
            {isLoading && <LoadingIndicator />}
            {error && <ErrorMessage message={error} />}
            {!isLoading && !error && report && <ReportDisplay report={report} sources={sources} url={url} />}
            {!isLoading && !error && !report && <Welcome />}
          </div>
        </div>
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>Powered by Gemini API</p>
      </footer>
    </div>
  );
};

export default App;
