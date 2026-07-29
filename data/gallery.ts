export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Magnetic Microrobot",
    image: "/research/microrobot.jpg",
    description:
      "Programmable magnetic microrobot developed for particle manipulation.",
  },
  {
    id: 2,
    title: "Microfluidic Platform",
    image: "/research/microfluidics.jpg",
    description:
      "Microfluidic system for flow control and biological experiments.",
  },
  {
    id: 3,
    title: "Zebrafish Platform",
    image: "/research/zebrafish.jpg",
    description:
      "Microfluidic platform for zebrafish larvae behavioural studies.",
  },
  {
    id: 4,
    title: "AI-assisted Flow Manipulation",
    image: "/research/ai-microfluidics.jpg",
    description:
      "Deep learning-enabled intelligent microfluidic control.",
  },
];