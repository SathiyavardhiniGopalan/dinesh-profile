export interface FundedProject {
  id: number;
  title: string;
  role: string;
  fundingAgency: string;
  fundingAmount: string;
  duration: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface ResearchDomain {
  id: number;
  title: string;
  duration: string;
  description: string;
  technologies: string[];
}

export const fundedProjects: FundedProject[] = [
  {
    id: 1,
    title: "Hybrid Solar-Based Smart Dryer for Copra Production",
    role: "Co-Principal Investigator (Co-PI)",
    fundingAgency:
      "Ministry of Food Processing Industries (MoFPI), Government of India",
    fundingAmount: "₹16,70,000",
    duration: "2 Years",
    category: "Funded Research Project",

    description:
      "Designed and developed an energy-efficient hybrid solar-based smart drying system for copra production. The project focused on improving drying efficiency, reducing energy consumption, and supporting sustainable food processing technologies.",

    highlights: [
      "Government-funded research project",
      "Renewable energy-based drying system",
      "Smart agricultural processing",
      "Improved drying efficiency",
      "Sustainable food processing technology",
    ],

    technologies: [
      "Solar Energy",
      "Thermal Engineering",
      "Mechanical Design",
      "Heat Transfer",
      "Product Development",
    ],
  },

  {
    id: 2,
    title:
      "Design and Fabrication of Micro-Combustor as the Replacement of Chemical Battery in Mobile Phones",

    role: "Principal Investigator (PI)",

    fundingAgency: "Dassault Systèmes Foundation",

    fundingAmount: "₹2,50,000",

    duration: "2 Years",

    category: "Funded Research Project",

    description:
      "Designed and fabricated a miniature micro-combustor aimed at replacing conventional chemical batteries in portable electronic devices. The project focused on micro-scale combustion, thermal management, and energy-efficient portable power generation.",

    highlights: [
      "Principal Investigator",
      "Industry-funded research",
      "Micro-combustion technology",
      "Alternative portable energy source",
      "Prototype development",
    ],

    technologies: [
      "Micro Combustion",
      "MEMS",
      "Thermal Engineering",
      "SolidWorks",
      "ANSYS",
      "Manufacturing",
    ],
  },
];

export const researchDomains: ResearchDomain[] = [
  {
    id: 1,
    title: "Magnetic Microrobotics",
    duration: "2021 – Present",

    description:
      "Development of programmable magnetic microrobots for particle manipulation, biomedical engineering, targeted transport, and intelligent microsystems.",

    technologies: [
      "Magnetic Actuation",
      "Microrobotics",
      "Biomedical Engineering",
      "MEMS",
    ],
  },

  {
    id: 2,
    title: "Programmable Microfluidics",
    duration: "2021 – Present",

    description:
      "Design and development of programmable microfluidic platforms integrated with artificial intelligence for flow manipulation and biomedical applications.",

    technologies: [
      "Microfluidics",
      "Lab-on-a-Chip",
      "Flow Control",
      "Biomedical Devices",
    ],
  },

  {
    id: 3,
    title: "Computational Fluid Dynamics (CFD)",
    duration: "2016 – Present",

    description:
      "Numerical modeling and simulation of fluid flow, heat transfer, mixing, and microscale transport phenomena using advanced computational techniques.",

    technologies: [
      "ANSYS Fluent",
      "COMSOL Multiphysics",
      "MATLAB",
      "Python",
    ],
  },

  {
    id: 4,
    title: "Artificial Intelligence for Biomedical Systems",
    duration: "2022 – Present",

    description:
      "Application of machine learning and deep learning techniques for intelligent flow prediction, particle tracking, biomedical analysis, and autonomous microsystems.",

    technologies: [
      "Machine Learning",
      "Deep Learning",
      "Python",
      "TensorFlow",
    ],
  },
];