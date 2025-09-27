
import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ExclamationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
    </svg>
);


const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-900/40 border border-red-600 text-red-200 px-4 py-3 rounded-lg relative animate-fade-in" role="alert">
        <div className="flex items-center">
            <ExclamationIcon className="h-6 w-6 mr-3"/>
            <div>
                <strong className="font-bold">An error occurred. </strong>
                <span className="block sm:inline">{message}</span>
            </div>
        </div>
    </div>
  );
};

export default ErrorMessage;
