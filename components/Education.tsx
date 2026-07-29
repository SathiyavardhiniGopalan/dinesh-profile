import { GraduationCap, Award, MapPin } from "lucide-react";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-5 pb-14">
      {/* Heading */}

      <div className="mb-12">
        <h1 className="mt-0 text-4xl font-bold leading-tight text-slate-900">
          Academic Qualifications
        </h1>

        <p className="mt-4 max-w-6xl text-lg leading-8 text-slate-600">
          My academic journey reflects a strong foundation in Mechanical
          Engineering, Engineering Design, and advanced interdisciplinary
          research in intelligent biomedical systems, microfluidics, and
          magnetic microrobotics.
        </p>
      </div>

      {/* Timeline */}

      <div className="relative border-l-4 border-blue-200 pl-8">
        {education.map((item) => (
          <div key={item.id} className="relative mb-14">
            {/* Timeline Dot */}

            <div className="absolute -left-[46px] rounded-full bg-blue-600 p-3 text-white shadow-lg">
              <GraduationCap size={22} />
            </div>

            {/* Card */}

            <div className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-lg">
              <div className="flex flex-col justify-between gap-4 lg:flex-row">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {item.degree}
                  </h2>

                  <p className="mt-2 text-lg font-semibold text-blue-700">
                    {item.program}
                  </p>

                  <p className="mt-3 text-slate-700">
                    {item.institution}
                  </p>

                  <div className="mt-2">
  <p className="font-semibold text-slate-800">
    {item.university}
  </p>

  {item.worldRank && (
  <div className="mt-5 rounded-xl border-l-4 border-blue-600 bg-blue-50 p-4">
    <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
      Global Recognition
    </p>

    <p className="mt-1 text-lg font-bold text-slate-900">
      🌍 {item.worldRank}
    </p>
  </div>
)}
</div>

                  <div className="mt-3 flex items-center gap-2 text-slate-500">
                    <MapPin size={18} />
                    {item.location}
                  </div>
                </div>

                <div className="text-left lg:text-right">
                  <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
                    {item.duration}
                  </span>

                  <p className="mt-4 font-semibold text-emerald-700">
                    {item.grade}
                  </p>
                </div>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                {item.description}
              </p>

              {item.achievement && (
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-5 py-3 font-semibold text-yellow-800">
                  <Award size={18} />
                  {item.achievement}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Academic Highlights */}

      <div className="mt-20 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 text-white">
        <h2 className="text-3xl font-bold">
          Academic Highlights
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
            <div className="text-4xl">🎓</div>

            <h3 className="mt-4 text-xl font-semibold">
              Ph.D.
            </h3>

            <p className="mt-2 text-blue-100">
              National Cheng Kung University (Taiwan)
            </p>
          </div>

          <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
            <div className="text-4xl">🥇</div>

            <h3 className="mt-4 text-xl font-semibold">
              Gold Medalist
            </h3>

            <p className="mt-2 text-blue-100">
              M.Tech. Engineering Design
            </p>
          </div>

          <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
            <div className="text-4xl">⭐</div>

            <h3 className="mt-4 text-xl font-semibold">
              Academic Excellence
            </h3>

            <p className="mt-2 text-blue-100">
              Strong academic record across Bachelor's, Master's, and Doctoral studies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}