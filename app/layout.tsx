import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title:
    "Dineshkumar Loganathan | Ph.D. Researcher | NCKU",

  description:
    "Official academic profile of Dineshkumar Loganathan, Ph.D. Researcher at National Cheng Kung University (NCKU), Taiwan. Research areas include intelligent microfluidics, magnetic microrobotics, biomedical systems, CFD and AI-driven flow manipulation.",


  keywords: [
    "Dineshkumar Loganathan",
    "PhD Researcher",
    "National Cheng Kung University",
    "NCKU",
    "Microfluidics",
    "Magnetic Microrobotics",
    "Biomedical Engineering",
    "Computational Fluid Dynamics",
    "Artificial Intelligence",
    "Deep Learning",
  ],


  authors: [
    {
      name: "Dineshkumar Loganathan",
    },
  ],


  creator:
    "Dineshkumar Loganathan",


  openGraph: {

    title:
      "Dineshkumar Loganathan | Ph.D. Researcher",

    description:
      "Academic profile showcasing research publications, projects, awards and technical expertise.",

    type:
      "website",

  },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body className="bg-gray-100">

    <Sidebar />

    <main className="ml-72 min-h-screen">

        {children}

    </main>

</body>
    </html>
  );
}