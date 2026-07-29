import About from "@/components/About";
import type { Metadata } from "next";

export default function AboutPage() {
  return <About />;
}

export const metadata: Metadata = {
  title: "About",

  description:
    "Learn about Dr. Dineshkumar Loganathan, his academic background, research vision, technical expertise, and interdisciplinary work in Mechanical and Biomedical Engineering.",
};