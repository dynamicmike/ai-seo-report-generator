
export interface SeoSection {
  title: string;
  score: number;
  summary: string;
  recommendations: string[];
}

export interface SeoReport {
  onPageSeo: SeoSection;
  technicalSeo: SeoSection;
  contentAnalysis: SeoSection;
  aiOpportunities: SeoSection;
}

export interface GroundingSource {
  web: {
    uri: string;
    title: string;
  };
}
