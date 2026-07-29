import Hero from "@/components/Hero";
import FeaturedPublications from "@/components/FeaturedPublications";

export default function Home() {
  return (
    <main>
      <Hero />

      <FeaturedPublications />

      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white">
            Let's Collaborate
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I welcome collaborations in Microfluidics, Magnetic
            Microrobotics, Biomedical Engineering, Computational Fluid
            Dynamics, and Artificial Intelligence. Feel free to get in touch
            regarding research projects, academic collaborations, and
            interdisciplinary opportunities.
          </p>

          <div className="mt-10">
            <a
              href="/contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",

  description:
    "Official academic website of Dr. Dineshkumar Loganathan featuring research in Magnetic Microrobotics, Intelligent Microfluidics, Biomedical Engineering, Artificial Intelligence, and Computational Fluid Dynamics.",
};