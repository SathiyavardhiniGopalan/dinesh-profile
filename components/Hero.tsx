import Link from "next/link";
import { fetchScholarData } from "@/lib/scholar";
import { reviewerData } from "@/data/reviewer";

export default async function Hero() {
  const scholar = await fetchScholarData();

  const stats = [
    {
      value: scholar.publications.length,
      label: "Research Outputs",
    },
    {
      value: scholar.metrics.citations,
      label: "Citations",
    },
    {
      value: scholar.metrics.hIndex,
      label: "h-index",
    },
    {
      value: reviewerData.length,
      label: "Journal Reviews",
    },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Background */}
      <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-blue-100 opacity-40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-indigo-100 opacity-40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">
        <div className="max-w-5xl">
          {/* Name */}

          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 lg:text-6xl">
            Dr.{scholar.profile.name}
          </h1>

          {/* Position */}

          <p className="mt-4 text-xl font-semibold text-blue-700">
            Research Scientist • National Cheng Kung University, Taiwan
          </p>

          {/* Introduction */}

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600">
            My research focuses on programmable microfluidics, magnetic
            microrobotics, intelligent biomedical systems, computational fluid
            dynamics, and artificial intelligence for next-generation
            healthcare applications. My work integrates robotics, biomedical
            engineering, and machine learning to develop intelligent
            microsystems for precision medicine and advanced healthcare.
          </p>

          {/* Research Interests */}

          <div className="mt-8">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
              Research Interests
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Microfluidics",
                "Magnetic Microrobotics",
                "Biomedical Engineering",
                "Artificial Intelligence",
                "Computational Fluid Dynamics",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/publications"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Publications
            </Link>

            <Link
              href="/research"
              className="rounded-xl border border-blue-600 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Research
            </Link>

            <a
              href="/Dineshkumar_Loganathan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Download CV
            </a>

            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-black"
            >
              Contact
            </Link>
          </div>

          {/* Statistics */}

          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-white p-5 text-center shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-3xl font-bold text-blue-700">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}