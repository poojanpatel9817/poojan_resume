/**
 * ACADEMIC PORTFOLIO DATA
 * 
 * This file contains all the textual content for the website.
 * You can edit the text here to update your biography, publications, 
 * teaching history, and service records without touching the layout code.
 */

export const personalInfo = {
  name: "Poojan Patel",
  title: "Assistant Professor of Finance, Bryant University",
  tagline: "Research at the intersection of generative AI, corporate disclosures, and textual analysis in finance.",
  email: "ppatel24@bryant.edu",
  altEmail: "ppatel9817@gmail.com",
  phone: "+1 (551) 263-4625",
  linkedin: "https://www.linkedin.com/in/poojanpatel07", // Update with your real link
  github: "https://github.com/poojanpatel07", // Update with your real link
  cvUrl: "#", // Placeholder for CV PDF path
  headshot: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop", // Placeholder headshot
};

export const aboutContent = {
  prose: `I am an Assistant Professor of Finance at Bryant University. My research focuses on generative AI, corporate disclosures, natural language processing, and textual analysis applied to finance.

I hold a PhD in Business Administration (Finance) from the University of Massachusetts Boston, an MS in Financial Engineering from Stevens Institute of Technology, and an MBA in Technology Management with a Bachelor of Technology in Computer Engineering from NMIMS. This combination shapes how I bridge finance, technology, and practice in both research and teaching.`,
  
  experience: [
    {
      period: "Fall 2026 – Present",
      role: "Assistant Professor of Finance",
      institution: "Bryant University",
    },
    {
      period: "Fall 2025 – Spring 2026",
      role: "Visiting Assistant Professor of Finance",
      institution: "Bryant University",
    },
    {
      period: "Spring 2025",
      role: "Principal Instructor",
      institution: "University of Massachusetts Boston",
    },
    {
      period: "Fall 2022 – Fall 2024",
      role: "Graduate Teaching Assistant",
      institution: "University of Massachusetts Boston",
    },
  ],

  education: [
    {
      degree: "PhD, Business Administration (Finance)",
      institution: "University of Massachusetts Boston",
      period: "2022–2026",
    },
    {
      degree: "MS, Financial Engineering",
      institution: "Stevens Institute of Technology",
      period: "2021–2022",
    },
    {
      degree: "MBA, Technology Management",
      institution: "NMIMS",
      period: "2016–2021",
    },
    {
      degree: "BTech, Computer Engineering",
      institution: "NMIMS",
      period: "2016–2021",
    },
  ],

  awards: [
    "PhD Award for Overall Academic Excellence, UMass Boston (2026)",
    "Runner-up, Student Managed Fund Competition, UMass Foundation (2025, 2026)",
    "PhD Award for Academic Excellence in Finance, UMass Boston (2024)",
    "Student Spotlight, College of Management, UMass Boston (2023)",
    "Dean's Scholarship, UMass Boston (2022–2026)",
  ],

  memberships: [
    "American Finance Association",
    "Academy of Management",
    "Financial Management Association",
    "Eastern Finance Association",
    "TRI ALPHA First Gen Honors Society",
  ],
};

export const teachingContent = {
  intro: "My courses sit at the intersection of finance, data, and decision-making — emphasizing quantitative rigor alongside the applied skills (Bloomberg, Python, Excel) students need in industry.",
  
  institutions: [
    {
      name: "Bryant University",
      roles: [
        {
          title: "Assistant Professor of Finance",
          courses: [
            { code: "FIN 201", name: "Financial Management", semesters: "Fall 2026" },
            { code: "FIN 466", name: "Data Analysis for Finance", semesters: "Fall 2026" },
          ]
        },
        {
          title: "Visiting Assistant Professor of Finance",
          courses: [
            { code: "FIN 201", name: "Financial Management", semesters: "Fall 2025, Spring 2026, Summer 2026" },
            { code: "FIN 466", name: "Data Analysis for Finance", semesters: "Fall 2025, Spring 2026" },
          ]
        }
      ]
    },
    {
      name: "University of Massachusetts Boston",
      roles: [
        {
          title: "Principal Instructor",
          courses: [
            { code: "MBA AF 632", name: "Asset Management Practicum", semesters: "Spring 2025" },
          ]
        },
        {
          title: "Teaching Assistant",
          courses: [
            { code: "MBA AF 632", name: "Asset Management Practicum", semesters: "Fall 2022 through Fall 2024" },
          ]
        }
      ]
    }
  ],

  syllabi: [
    // EDIT: Add a new syllabus entry here
    // { name: "FIN 201 Syllabus", link: "/path/to/pdf" }
  ]
};

export const researchContent = {
  intro: "My research focuses on generative AI, corporate disclosures, natural language processing, and textual analysis applied to finance. I work primarily with SEC filings, large-scale text data, and HPC-based empirical pipelines.",
  
  interests: [
    "Generative AI", "Corporate Disclosures", "Natural Language Processing", 
    "Textual Analysis", "SEC Filings", "Climate Risk Disclosure"
  ],

  publications: [
    {
      authors: "Aguegboh, E. S., Onuoha, U. C., & Patel, P.",
      year: "2026",
      title: "Assessing the Relevance of Sell-Side Analyst Recommendations",
      venue: "Review of Financial Economics, 44(1), e70015",
      link: "#",
    }
  ],

  books: [
    {
      title: "Prompt Engineering for Accounting and Finance",
      authors: "With Sunil Kumar and Atreya Chakraborty",
      publisher: "Palgrave Macmillan (forthcoming)",
    }
  ],

  underReview: [],

  workingPapers: [
    {
      title: "Climate Regulation Risk Exposure and the Innovation Response of Firms",
      authors: "With Li Ai and Lucia Silva-Gao",
      notes: "Presented/scheduled: FMA Europe (2026), Global Finance Conference (2026).",
    },
    {
      title: "When Words Don't Match Deeds: The Cost of AI Washing in Corporate Lending",
      authors: "With Chi Wan",
    },
    {
      title: "Corporate Disclosure Sentiment and Crash Risk",
      authors: "With Joshua Burke, Atreya Chakraborty, and Hongang Qiu",
    },
    {
      title: "Say More, Mean Less: Voluntary Disclosure Under Economic Policy Uncertainty",
      authors: "With Ekene S. Aguegboh and Uchenna C. Onuoha",
    }
  ],

  service: [
    {
      category: "Program Committee",
      entries: ["SFA Annual Conference (2026)", "FMA Applied Finance Conference (2026)", "FMA Annual Meeting (2026)"]
    },
    {
      category: "Reviewer",
      entries: [
        "Post-Communist Economies Journal (2025)", 
        "Eastern Finance Association Annual Meeting (2025)", 
        "Journal of Entrepreneurial Finance", 
        "FMA Annual Meeting (2025)", 
        "SFA Annual Meeting (2025)", 
        "FMA Applied Finance Conference (2025)", 
        "3rd International Conference on CSR (2023)"
      ]
    },
    {
      category: "Discussant",
      entries: [
        "MRS International Risk Conference (2025)", 
        "Global Finance Conference (2025)", 
        "Gen AI Conference by Journal of Banking and Finance (2024)", 
        "UMass Boston Brown Bag Seminar (2024, 2025)"
      ]
    },
    {
      category: "Other Service",
      entries: [
        "Conference Organizing Committee: Third Conference on CSR, UMass Boston × EM Normandie (2023)",
        "Editorial Reviewer: Honors Thesis, Bryant University (2026) — Christian Stachera, 'How AI and Analytics Impact Loan Underwriting'",
        "Guest Lecturer: Center for Collaborative Leadership, UMass Boston (2025)",
        "Bloomberg Bootcamp Instructor: Chelsea High School at UMass Boston (2024); ESG-focused Bloomberg Bootcamp for Graduate Students (2024); UMass Boston Undergraduate Student Managed Fund"
      ]
    }
  ]
};
