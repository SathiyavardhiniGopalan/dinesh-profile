export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "Research Areas",
    description:
      "Primary research interests in interdisciplinary mechanical and biomedical engineering.",

    skills: [
      "Magnetic Microrobotics",
      "Programmable Microfluidics",
      "Biomedical Engineering",
      "Computational Fluid Dynamics (CFD)",
      "Artificial Intelligence",
      "Machine Learning",
      "MEMS",
      "Lab-on-a-Chip",
      "Particle Manipulation",
    ],
  },

  {
    title: "Areas of Interest",
    description:
      "Engineering disciplines and research areas developed through academic and research experience.",

    skills: [
      "Fluid Mechanics",
      "Computational Fluid Dynamics (CFD)",
      "Finite Element Analysis (FEA)",
      "Internal Combustion Engine",
      "Heat Transfer",
      "Thermal Engineering",
      "Mechanical Design",
    ],
  },

  {
    title: "Simulation & Engineering Software",
    description:
      "Professional engineering software used for simulation, modeling, and design.",

    skills: [
      "ANSYS",
      "ANSYS Fluent",
      "Abaqus",
      "COMSOL Multiphysics",
      "MATLAB",
      "SolidWorks",
      "Solid Edge",
      "AutoCAD",
    ],
  },

  {
    title: "Programming",
    description:
      "Programming languages used for scientific computing and engineering applications.",

    skills: [
      "Python",
      "MATLAB",
      "C++",
      "C",
    ],
  },
];