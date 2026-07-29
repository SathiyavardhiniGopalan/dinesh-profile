import {
  BrainCircuit,
  Droplets,
  HeartPulse,
  Microscope,
  Waves,
} from "lucide-react";

export interface ResearchArea {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const researchAreas: ResearchArea[] = [
  {
    id: 1,
    title: "Intelligent Microfluidics",
    description:
      "Development of programmable microfluidic platforms for particle manipulation, lab-on-chip systems, and biomedical diagnostics.",
    icon: "Droplets",
  },

  {
    id: 2,
    title: "Magnetic Microrobotics",
    description:
      "Design and control of magnetic microrobots for targeted drug delivery, microscale manipulation, and precision biomedical applications.",
    icon: "Microscope",
  },

  {
    id: 3,
    title: "Biomedical Engineering",
    description:
      "Integration of engineering principles to develop intelligent healthcare technologies and biomedical microsystems.",
    icon: "HeartPulse",
  },

  {
    id: 4,
    title: "Computational Fluid Dynamics",
    description:
      "Numerical modeling and simulation of microscale flow phenomena using advanced computational methods.",
    icon: "Waves",
  },

  {
    id: 5,
    title: "Artificial Intelligence",
    description:
      "Machine learning and AI-driven approaches for autonomous flow control and intelligent biomedical systems.",
    icon: "BrainCircuit",
  },
];

export const researchHighlights = [
  {
    title: "Programmable Microfluidic Systems",
    description:
      "Design and development of intelligent lab-on-chip platforms for biomedical applications.",
  },

  {
    title: "Magnetic Microrobot Navigation",
    description:
      "Development of magnetically actuated microrobots for targeted manipulation and precision healthcare.",
  },

  {
    title: "AI-assisted Biomedical Engineering",
    description:
      "Applying Artificial Intelligence and Machine Learning for intelligent microsystem design and flow manipulation.",
  },

  {
    title: "Computational Modeling",
    description:
      "Simulation and optimization of microfluidic systems using computational fluid dynamics.",
  },
];

export const researchVision = {
  title: "Research Vision",

  description:
    "To develop intelligent microfluidic and microrobotic technologies integrated with Artificial Intelligence for next-generation biomedical diagnostics, precision medicine, and advanced healthcare systems.",
};

export const researchGoals = [
  "Advance intelligent microfluidic technologies.",
  "Develop programmable magnetic microrobots.",
  "Integrate Artificial Intelligence with biomedical engineering.",
  "Enable precision healthcare through interdisciplinary engineering.",
];