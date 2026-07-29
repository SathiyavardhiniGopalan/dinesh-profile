export interface JournalHighlight {
  id: number;
  year: string;
  journal: string;
  type: "Front Cover" | "Back Cover";
  title: string;
}

export interface Presentation {
  id: number;
  year: string;
  conference: string;
  location: string;
  title: string;
}

export const journalHighlights: JournalHighlight[] = [
  {
    id: 1,
    year: "2026",
    journal: "Advanced Materials Technologies",
    type: "Front Cover",
    title:
      "Untethered Magnetic Microswimmers for Targeted Particle Transport and Flow Manipulation",
  },

  {
    id: 2,
    year: "2023",
    journal: "Lab on a Chip",
    type: "Back Cover",
    title:
      "Behavioural Responses of Zebrafish with Sound Stimuli in Microfluidics",
  },

  {
    id: 3,
    year: "2023",
    journal: "Advanced Materials Technologies",
    type: "Back Cover",
    title:
      "An On-Demand Microrobot with Building Block Design for Flow Manipulation",
  },
];

export const presentations: Presentation[] = [
  {
    id: 1,
    year: "2022",
    conference: "Taiwan Zebrafish Symposium",
    location: "NHRI, Taiwan",
    title:
      "Acoustically Assisted Spatial Habituation of Zebrafish Larvae in Microfluidics",
  },
];