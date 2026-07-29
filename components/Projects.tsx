import {
  FolderKanban,
  Calendar,
  Building2,
  IndianRupee,
  CheckCircle2,
  Star,
  FlaskConical,
} from "lucide-react";

import {
  fundedProjects,
  researchDomains,
} from "@/data/projects";

export default function Projects() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 pt-5 pb-14">

        {/* Header */}

        <div className="mb-12">
          
          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Funded Research Projects
          </h1>

          <p className="mt-4 max-w-6xl text-lg leading-8 text-slate-600">
            My research portfolio includes government and industry funded
            projects focused on renewable energy, sustainable engineering,
            portable power systems, and interdisciplinary mechanical
            engineering research. These projects demonstrate leadership in
            securing competitive funding and delivering impactful engineering
            solutions.
          </p>
        </div>

        {/* Summary */}

        <div className="mb-16 grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl bg-blue-600 p-8 text-white">
            <FolderKanban size={34} />
            <h2 className="mt-4 text-4xl font-bold">
              {fundedProjects.length}
            </h2>
            <p className="mt-2 text-blue-100">
              Funded Projects
            </p>
          </div>

          <div className="rounded-2xl bg-emerald-600 p-8 text-white">
            <IndianRupee size={34} />
            <h2 className="mt-4 text-4xl font-bold">
              ₹19.2L
            </h2>
            <p className="mt-2 text-emerald-100">
              Total Funding
            </p>
          </div>

          <div className="rounded-2xl bg-amber-500 p-8 text-white">
            <Building2 size={34} />
            <h2 className="mt-4 text-4xl font-bold">
              2
            </h2>
            <p className="mt-2 text-amber-100">
              Funding Agencies
            </p>
          </div>

          <div className="rounded-2xl bg-indigo-600 p-8 text-white">
            <Calendar size={34} />
            <h2 className="mt-4 text-4xl font-bold">
              4+
            </h2>
            <p className="mt-2 text-indigo-100">
              Project Years
            </p>
          </div>

        </div>

        {/* Funded Projects */}

        <div className="space-y-10">

          {fundedProjects.map((project) => (

            <div
              key={project.id}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex flex-wrap items-start justify-between gap-6">

                <div className="flex-1">

                  <div className="flex items-center gap-3">

                    <FolderKanban
                      size={28}
                      className="text-blue-600"
                    />

                    <h2 className="text-2xl font-bold text-slate-900">
                      {project.title}
                    </h2>

                  </div>

                  <p className="mt-4 text-lg font-semibold text-blue-700">
                    {project.role}
                  </p>

                </div>

                <span className="flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                  <Star size={16} />
                  Funded Project
                </span>

              </div>

              {/* Details */}

              <div className="mt-8 grid gap-6 md:grid-cols-3">

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Funding Agency
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    {project.fundingAgency}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Funding Amount
                  </p>

                  <p className="mt-2 font-semibold text-emerald-700">
                    {project.fundingAmount}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Duration
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    {project.duration}
                  </p>
                </div>

              </div>

              <p className="mt-8 leading-8 text-slate-700">
                {project.description}
              </p>

              {/* Technologies */}

              <div className="mt-8">

                <h3 className="text-lg font-semibold text-slate-900">
                  Technologies
                </h3>

                <div className="mt-4 flex flex-wrap gap-3">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

              {/* Highlights */}

              <div className="mt-8">

                <h3 className="text-lg font-semibold text-slate-900">
                  Project Highlights
                </h3>

                <div className="mt-4 space-y-3">

                  {project.highlights.map((item) => (

                    <div
                      key={item}
                      className="flex gap-3"
                    >

                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-green-600"
                      />

                      <span className="text-slate-700">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Research Domains */}

        <div className="mt-20">

          <h2 className="mb-10 border-b border-slate-200 pb-3 text-3xl font-bold text-slate-900">
            Research Domains
          </h2>

          <div className="grid gap-8 md:grid-cols-2">

            {researchDomains.map((domain) => (

              <div
                key={domain.id}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-center gap-3">

                  <FlaskConical
                    className="text-blue-600"
                    size={24}
                  />

                  <h3 className="text-2xl font-bold text-slate-900">
                    {domain.title}
                  </h3>

                </div>

                <p className="mt-3 text-sm font-semibold text-blue-700">
                  {domain.duration}
                </p>

                <p className="mt-6 leading-8 text-slate-700">
                  {domain.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">

                  {domain.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Research Impact */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-10 text-white">

          <h2 className="text-3xl font-bold">
            Research Impact
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-100">
            My funded research projects and interdisciplinary research domains
            demonstrate a strong commitment to addressing real-world engineering
            challenges through innovation. The outcomes contribute to renewable
            energy, intelligent biomedical systems, portable power generation,
            microfluidics, magnetic microrobotics, and next-generation
            healthcare technologies.
          </p>

        </div>

      </div>
    </section>
  );
}