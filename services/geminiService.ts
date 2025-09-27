
import type { SeoReport, GroundingSource } from '../types';

// IMPORTANT: Replace this URL with the URL of your deployed backend function from Render.
const API_ENDPOINT = 'https://your-render-app-name.onrender.com/api/generate';

export const generateSeoReport = async (url: string): Promise<{ report: SeoReport | null, sources: GroundingSource[] }> => {
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `Request failed with status ${response.status}`);
        }

        const data = await response.json();
        return { report: data.report, sources: data.sources };

    } catch (error) {
        console.error("API call to backend failed:", error);
        // Return a structure that the UI can handle
        return { report: null, sources: [] };
    }
};
