export interface CoverImage {
  title: string;
  journal: string;
  year: number;
  type: "Front Cover" | "Back Cover";
  image: string;
}

export const coverImages: CoverImage[] = [
  {
    title:
      "Untethered Magnetic Microswimmers for Targeted Particle Transport and Flow Manipulation",
    journal: "Advanced Materials Technologies",
    year: 2026,
    type: "Front Cover",
    image: "/covers/amt-front-2026.jpg",
  },
  {
    title:
      "Behavioural Responses of Zebrafish with Sound Stimuli in Microfluidics",
    journal: "Lab on a Chip",
    year: 2023,
    type: "Back Cover",
    image: "/covers/labchip-back-2023.jpg",
  },
  {
    title:
      "An On-Demand Microrobot with Building Block Design for Flow Manipulation",
    journal: "Advanced Materials Technologies",
    year: 2023,
    type: "Back Cover",
    image: "/covers/amt-back-2023.jpg",
  },
];