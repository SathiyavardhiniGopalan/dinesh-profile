import type { Metadata } from "next";
import "./globals.css";

import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Dr. Dineshkumar Loganathan",
  description:
    "Academic website of Dr. Dineshkumar Loganathan | Mechanical Engineering | Microfluidics | Magnetic Microrobotics | Biomedical Engineering",
  keywords: [
    "Dineshkumar Loganathan",
    "Mechanical Engineering",
    "Microfluidics",
    "Magnetic Microrobotics",
    "Biomedical Engineering",
    "Artificial Intelligence",
    "National Cheng Kung University",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <div className="flex min-h-screen">
          <Sidebar />

          <main className="flex-1 lg:ml-72">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}