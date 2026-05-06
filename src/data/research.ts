export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  abstract?: string;
  link?: string;
}

export const researchData = {
  intro: "My research focuses on generative AI, corporate disclosures, natural language processing, and textual analysis applied to finance. I work primarily with SEC filings, large-scale text data, and HPC-based empirical pipelines.",
  
  // EDIT: Add new publications here
  publications: [
    {
      title: "Assessing the Relevance of Sell-Side Analyst Recommendations",
      authors: "Aguegboh, E. S., Onuoha, U. C., & Patel, P.",
      venue: "Review of Financial Economics, 44(1), e70015",
      year: 2026,
      link: "#"
    }
  ] as Publication[],

  // EDIT: Add new books here
  books: [
    {
      title: "Prompt Engineering for Accounting and Finance",
      authors: "Sunil Kumar, Atreya Chakraborty, & Poojan Patel",
      venue: "Palgrave Macmillan",
      year: 2026, // forthcoming
      abstract: "A comprehensive guide to leveraging Large Language Models (LLMs) for financial analysis and accounting workflows."
    }
  ] as Publication[],

  interests: [
    "Generative AI",
    "Corporate Disclosures",
    "Natural Language Processing",
    "Textual Analysis",
    "SEC Filings",
    "Climate Risk Disclosure"
  ]
};
