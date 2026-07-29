import { awards } from "@/data/awards";
import {
  Award,
  Trophy,
  Medal,
  GraduationCap,
  Calendar,
  Building2,
} from "lucide-react";

const categoryIcons = {
  Scholarship: GraduationCap,
  Award: Trophy,
  Achievement: Medal,
  Publication: Award,
  Presentation: Trophy,
};

const categoryColors = {
  Scholarship: "bg-blue-100 text-blue-700",
  Award: "bg-amber-100 text-amber-700",
  Achievement: "bg-emerald-100 text-emerald-700",
  Publication: "bg-purple-100 text-purple-700",
  Presentation: "bg-rose-100 text-rose-700",
};

export default function Awards() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-5 pb-14">
        {/* Header */}

        <div className="mb-12">
          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Awards & Honors
          </h1>

          <p className="mt-4 max-w-6xl text-lg leading-8 text-slate-600">
            Throughout my academic journey, I have been honored with
            prestigious scholarships, research awards, and international
            recognitions that reflect my commitment to research excellence,
            innovation, and interdisciplinary engineering.
          </p>

        </div>

        {/* Summary */}

        <div className="mb-14 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-blue-600 p-8 text-white">

            <Award size={34} />

            <h2 className="mt-4 text-4xl font-bold">
              {awards.length}
            </h2>

            <p className="mt-2 text-blue-100">
              Total Recognitions
            </p>

          </div>

          <div className="rounded-2xl bg-amber-500 p-8 text-white">

            <Trophy size={34} />

            <h2 className="mt-4 text-4xl font-bold">
              {awards.filter(a => a.category === "Award").length}
            </h2>

            <p className="mt-2 text-amber-100">
              Research Awards
            </p>

          </div>

          <div className="rounded-2xl bg-emerald-600 p-8 text-white">

            <GraduationCap size={34} />

            <h2 className="mt-4 text-4xl font-bold">
              {awards.filter(a => a.category === "Scholarship").length}
            </h2>

            <p className="mt-2 text-emerald-100">
              Scholarships
            </p>

          </div>

        </div>

        {/* Timeline */}

        <div className="relative border-l-2 border-blue-200 ml-4">

          {awards.map((item) => {

            const Icon = categoryIcons[item.category];

            return (

              <div
                key={item.id}
                className="relative mb-10 ml-8"
              >

                {/* Timeline Icon */}

                <div className="absolute -left-[42px] top-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">

                  <Icon size={18} />

                </div>

                {/* Card */}

                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">

                  <div className="flex flex-wrap items-start justify-between gap-4">

                    <div>

                      <h2 className="text-2xl font-bold text-slate-900">
                        {item.title}
                      </h2>

                      <div className="mt-3 flex items-center gap-2 text-blue-700">

                        <Building2 size={18} />

                        <span className="font-semibold">
                          {item.organization}
                        </span>

                      </div>

                    </div>

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${categoryColors[item.category]}`}
                    >
                      {item.category}
                    </span>

                  </div>

                  <div className="mt-6 flex items-center gap-2 text-slate-600">

                    <Calendar size={18} />

                    {item.year}

                  </div>

                  <p className="mt-6 leading-8 text-slate-700">
                    {item.description}
                  </p>

                </div>

              </div>

            );

          })}

        </div>

        {/* Closing */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-10 text-white">

          <h2 className="text-3xl font-bold">
            Commitment to Research Excellence
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-100">
            These awards and scholarships represent continuous recognition
            of my research contributions, academic excellence, and commitment
            to advancing interdisciplinary engineering and biomedical
            technologies through innovation and collaboration.
          </p>

        </div>

    </section>
  );
}