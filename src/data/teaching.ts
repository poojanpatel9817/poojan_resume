export const teachingData = {
  intro: "My courses sit at the intersection of finance, data, and decision-making — emphasizing quantitative rigor alongside the applied skills (Bloomberg, Python, Excel) students need in industry.",
  institutions: [
    {
      name: "BRYANT UNIVERSITY",
      roles: [
        {
          title: "Assistant Professor of Finance",
          courses: [
            { code: "FIN 201", name: "Financial Management", semesters: ["Fall 2026"] },
            { code: "FIN 466", name: "Data Analysis for Finance", semesters: ["Fall 2026"] }
          ]
        },
        {
          title: "Visiting Assistant Professor of Finance",
          courses: [
            { code: "FIN 201", name: "Financial Management", semesters: ["Fall 2025", "Spring 2026", "Summer 2026"] },
            { code: "FIN 466", name: "Data Analysis for Finance", semesters: ["Fall 2025", "Spring 2026"] }
          ]
        }
      ]
    },
    {
      name: "UNIVERSITY OF MASSACHUSETTS BOSTON",
      roles: [
        {
          title: "Principal Instructor",
          courses: [
            { code: "MBA AF 632", name: "Asset Management Practicum", semesters: ["Spring 2025"] }
          ]
        },
        {
          title: "Teaching Assistant",
          courses: [
            { code: "MBA AF 632", name: "Asset Management Practicum", semesters: ["Fall 2022 – Fall 2024"] }
          ]
        }
      ]
    }
  ],
  syllabi: [
    // EDIT: Add your syllabi links here. Leave 'path' empty if not available yet.
    { name: "Financial Management (FIN 201)", path: "" },
    { name: "Data Analysis for Finance (FIN 466)", path: "" },
    { name: "Asset Management Practicum (MBA AF 632)", path: "" }
  ]
};
