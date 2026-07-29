export interface Education {
  id: number;
  degree: string;
  program: string;
  institution: string;
  university: string;
  location: string;
  duration: string;
  grade: string;
  description: string;
  achievement?: string;
  worldRank?: string;
}

export const education: Education[] = [
  {
  id: 1,
  degree: "Doctor of Philosophy (Ph.D.)",
  program: "Mechanical Engineering",
  institution: "College of Engineering",
  university: "National Cheng Kung University (NCKU)",
  location: "Tainan, Taiwan",
  duration: "2021 – 2026",
  grade: "CGPA: 9.4 / 10",
  worldRank: "QS World University Ranking: 191",
  description:
    "Conducted interdisciplinary research in magnetic microrobotics, programmable microfluidics, artificial intelligence, and intelligent biomedical systems.",
},

  {
    id: 2,
    degree: "Master of Technology (M.Tech.)",
    program: "Engineering Design (Mechanical Engineering)",
    institution: "Amrita School of Engineering",
    university: "Amrita Vishwa Vidyapeetham",
    location: "Coimbatore, India",
    duration: "2014 – 2016",
    grade: "CGPA: 9.6 / 10",
    achievement: "🥇 Gold Medalist",
    description:
      "Specialized in Engineering Design with outstanding academic performance. Graduated as the University Gold Medalist for securing the highest academic achievement in the program.",
  },

  {
    id: 3,
    degree: "Bachelor of Technology (B.Tech.)",
    program: "Mechanical Engineering",
    institution: "Amrita School of Engineering",
    university: "Amrita Vishwa Vidyapeetham",
    location: "Coimbatore, India",
    duration: "2010 – 2014",
    grade: "CGPA: 7.41 / 10",
    description:
      "Established a strong foundation in mechanical engineering, manufacturing, computational analysis, and engineering design.",
  },
];