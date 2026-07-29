export interface Experience {
  id: number;
  position: string;
  organization: string;
  department?: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,

    position: "Ph.D. Researcher",

    organization: "National Cheng Kung University (NCKU)",

    department: "Department of Mechanical Engineering",

    location: "Tainan, Taiwan",

    duration: "2021 – 2026",

    type: "Research",

    description:
      "Conducted interdisciplinary research in magnetic microrobotics, programmable microfluidics, computational fluid dynamics, and artificial intelligence for biomedical applications. Developed intelligent biomedical microsystems and published research in high-impact international journals.",

    responsibilities: [
      "Designed programmable microfluidic systems for biomedical applications.",
      "Conducted research in magnetic microrobotics and autonomous microsystems.",
      "Developed computational models using COMSOL Multiphysics and MATLAB.",
      "Applied Artificial Intelligence and Machine Learning for particle manipulation.",
      "Published research in SCI journals and international conferences.",
      "Collaborated with multidisciplinary research teams.",
      "Mentored undergraduate and graduate students in research projects.",
    ],

    technologies: [
      "Microfluidics",
      "Magnetic Microrobotics",
      "COMSOL Multiphysics",
      "MATLAB",
      "Python",
      "Machine Learning",
      "Artificial Intelligence",
      "Computational Fluid Dynamics",
    ],
  },

  {
    id: 2,

    position: "Junior Research Fellow",

    organization: "Indian Institute of Technology (IIT) Jammu",

    location: "Jammu, India",

    duration: "Jan 2020 – Sep 2021",

    type: "Research",

    description:
      "Worked as a Junior Research Fellow on sponsored research projects involving computational analysis, mechanical system development, and advanced engineering research.",

    responsibilities: [
      "Performed computational and experimental research.",
      "Designed engineering components and experimental setups.",
      "Conducted CFD simulations and engineering analysis.",
      "Prepared technical reports and research documentation.",
      "Collaborated with faculty members on funded research projects.",
    ],

    technologies: [
      "ANSYS Fluent",
      "MATLAB",
      "SolidWorks",
      "Computational Fluid Dynamics",
      "Python",
    ],
  },

  {
    id: 3,

    position: "Assistant Professor",

    organization: "Amrita School of Engineering",

    department: "Department of Mechanical Engineering",

    location: "Bengaluru, India",

    duration: "Jul 2016 – Dec 2019",

    type: "Academic",

    description:
      "Served as an Assistant Professor teaching undergraduate engineering courses while supervising student projects and participating in academic and research activities.",

    responsibilities: [
      "Taught undergraduate Mechanical Engineering courses.",
      "Guided student design and research projects.",
      "Conducted laboratory sessions and academic evaluations.",
      "Prepared course materials and curriculum content.",
      "Participated in departmental research and accreditation activities.",
    ],

    technologies: [
      "Engineering Design",
      "SolidWorks",
      "ANSYS",
      "MATLAB",
      "AutoCAD",
    ],
  },

  {
    id: 4,

    position: "Research Fellow / Master's Research Student",

    organization:
      "Universitat Politècnica de Catalunya (UPC) - CTTC (Heat and Mass Transfer Technological Center)",

    location: "Barcelona, Spain",

    duration: "Feb 2016 – Jun 2016",

    type: "International Research",

    description:
      "Completed an international research fellowship as part of the Master's program, working on advanced heat transfer and computational fluid dynamics research.",

    responsibilities: [
      "Conducted research on heat and mass transfer.",
      "Performed numerical simulations using CFD tools.",
      "Collaborated with international researchers.",
      "Completed Master's dissertation research.",
      "Presented research findings to the research group.",
    ],

    technologies: [
      "ANSYS Fluent",
      "Computational Fluid Dynamics",
      "Heat Transfer",
      "MATLAB",
      "Engineering Simulation",
    ],
  },
];