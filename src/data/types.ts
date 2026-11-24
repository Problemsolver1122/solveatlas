export type CountryCode = 'us' | 'uk' | 'ca' | 'au' | 'pk' | 'in' | 'global';

export interface CountryInfo {
  code: CountryCode;
  slug: string;
  name: string;
  flag: string;
  adjective: string;
  description: string;
  keyAgencies: { name: string; url: string; purpose: string }[];
}

export interface CategoryInfo {
  id: string;
  slug: string;
  name: string;
  icon: string;
  description: string;
  popularSearches: string[];
}

export interface Author {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
}

export interface ResourceLink {
  title: string;
  organization: string;
  url: string;
  isOfficial: boolean;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SolutionStep {
  stepNumber: number;
  title: string;
  explanation: string;
  keyActions: string[];
  proTip?: string;
  caution?: string;
}

export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  country: CountryCode;
  category: string;
  publishedDate: string;
  updatedDate: string;
  readingTimeMinutes: number;
  author: Author;
  tags: string[];
  isFeatured?: boolean;
  isTrending?: boolean;
  isPopular?: boolean;
  problemSummary: string;
  theProblemExplained: string;
  whyItHappens: string;
  steps: SolutionStep[];
  realWorldExample: {
    scenario: string;
    outcome: string;
  };
  officialResources: ResourceLink[];
  jurisdictionNotes?: string;
  faqs: FAQItem[];
  relatedSlugs: string[];
}
