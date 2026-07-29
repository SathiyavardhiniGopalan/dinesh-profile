export interface Reviewer {
  id: number;
  journal: string;
  impactFactor?: string;
  year: string;
  reviews: string;
}

export const reviewerData: Reviewer[] = [
  {
    id: 1,
    journal: "Nature Communications",
    impactFactor: "IF: 15.7",
    year: "2026",
    reviews: "2 Reviews",
  },
  {
    id: 2,
    journal: "Scientific Reports",
    impactFactor: "IF: 3.9",
    year: "2025",
    reviews: "Reviewer",
  },
  {
    id: 3,
    journal: "Scientific Reports",
    impactFactor: "IF: 3.9",
    year: "2026",
    reviews: "Reviewer",
  },
  {
    id: 4,
    journal: "Journal of Micro and Bio Robotics",
    impactFactor: "IF: 1.1",
    year: "2026",
    reviews: "Reviewer",
  },
  {
    id: 5,
    journal: "BioNanoScience",
    impactFactor: "IF: 3.2",
    year: "2025",
    reviews: "Reviewer",
  },
  {
    id: 6,
    journal: "npj Robotics",
    year: "2025",
    reviews: "Reviewer",
  },
];