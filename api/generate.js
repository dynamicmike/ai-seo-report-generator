// This is a serverless function, designed to be deployed on a platform like Render or Vercel.
// It will be located in the 'api' directory.

import { GoogleGenAI } from "@google/genai";

// IMPORTANT: The API key is now securely accessed from environment variables on the server.
if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// This function handles incoming requests.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  const prompt = `
      You are a world-class SEO expert and digital strategist.
      A user has provided the following URL for analysis: ${url}
      Your task is to conduct a comprehensive SEO audit of this website. Use your internal knowledge and the provided Google Search results to inform your analysis.
      Please generate a detailed report covering four areas: On-Page SEO, Technical SEO, Content Analysis, and AI Opportunities.
      For each section, provide: a title, a score from 1-100, a concise summary, and a list of at least 3 actionable recommendations.
      Your response MUST be a single, valid JSON object without any markdown formatting. The structure should be:
      {
        "onPageSeo": { "title": "On-Page SEO", "score": number, "summary": string, "recommendations": string[] },
        "technicalSeo": { "title": "Technical SEO", "score": number, "summary": string, "recommendations": string[] },
        "contentAnalysis": { "title": "Content Analysis", "score": number, "summary": string, "recommendations": string[] },
        "aiOpportunities": { "title": "AI Opportunities", "score": number, "summary": string, "recommendations": string[] }
      }
  `;

  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            tools: [{ googleSearch: {} }],
        },
    });

    let reportText = response.text.trim();
    if (reportText.startsWith('```json')) {
        reportText = reportText.slice(7, -3).trim();
    } else if (reportText.startsWith('```')) {
        reportText = reportText.slice(3, -3).trim();
    }

    const reportJson = JSON.parse(reportText);
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = groundingChunks.map(chunk => chunk).filter(chunk => chunk.web && chunk.web.uri);

    // Send the successful response back to the frontend
    return res.status(200).json({ report: reportJson, sources });

  } catch (error) {
    console.error("Gemini API call failed on backend:", error);
    return res.status(500).json({ error: "Failed to generate SEO report on the server." });
  }
}