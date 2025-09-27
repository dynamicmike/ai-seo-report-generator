import type { SeoReport, GroundingSource } from '../types';

// Use a relative path to call the API on the same server that serves the frontend.
const API_ENDPOINT = '/api/generate';

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