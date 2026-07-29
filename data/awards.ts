export interface Award {
  id: number;
  year: string;
  title: string;
  organization: string;
  description: string;
  category:
    | "Scholarship"
    | "Award"
    | "Achievement"
    | "Publication"
    | "Presentation";
}

export const awards: Award[] = [
  {
    id: 1,
    year: "2025",
    title: "CTCI Foundation Science & Technology Scholarship",
    organization: "CTCI Foundation, Taiwan",
    description:
      "Awarded the prestigious Research Scholarship for Overseas Ph.D. Students during the Ph.D. program at National Cheng Kung University (NCKU), Taiwan.",
    category: "Scholarship",
  },

  {
    id: 2,
    year: "2024–2025 & 2021–2022",
    title: "Veritas et Conscientia Scholarship (VCS)",
    organization: "National Cheng Kung University (NCKU), Taiwan",
    description:
      "Merit scholarship awarded during the Ph.D. program in recognition of excellent academic performance.",
    category: "Scholarship",
  },

  {
    id: 3,
    year: "2024–2025",
    title: "Outstanding Research Scholar",
    organization: "National Cheng Kung University (NCKU), Taiwan",
    description:
      "Recognized for outstanding research performance and scholarly contributions during the academic year 2024–2025.",
    category: "Award",
  },

  {
    id: 4,
    year: "2023–2024",
    title: "Excellent Research Scholar",
    organization: "National Cheng Kung University (NCKU), Taiwan",
    description:
      "Awarded for excellent research performance and academic excellence.",
    category: "Award",
  },

  {
    id: 5,
    year: "2023",
    title: "Stanford × Taiwan Biodesign Program",
    organization: "Stanford × Taiwan Biodesign",
    description:
      "Secured Fourth Place in the Medical Equipment Product Design Competition conducted at the end of the Medical Equipment Product Design Talent Training Course.",
    category: "Achievement",
  },

  {
    id: 6,
    year: "2022–2023",
    title: "Innovative Biodesign & Intellisoftware Development (IBID)",
    organization: "National Cheng Kung University (NCKU), Taiwan",
    description:
      "Successfully completed the 15-credit interdisciplinary IBID Program sponsored by the Ministry of Education (MOE), Taiwan.",
    category: "Achievement",
  },
];