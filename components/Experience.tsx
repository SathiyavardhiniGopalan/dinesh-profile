import {
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  ChevronRight,
} from "lucide-react";

import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-5 pb-14">
      {/* Header */}

      <div className="mb-12">
        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          Professional Experience
        </h1>

       <p className="mt-4 max-w-6xl text-lg leading-8 text-slate-600">
          My research and professional experience spans mechanical
          engineering, intelligent microfluidics, magnetic
          microrobotics, computational modeling and biomedical
          engineering.
        </p>

      </div>

      {/* Timeline */}

      <div className="relative border-l-2 border-blue-200 ml-4">

        {experiences.map((item) => (

          <div
            key={item.id}
            className="relative mb-10 ml-8"
          >

            {/* Timeline Icon */}

            <div className="absolute -left-[42px] top-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">

              <Briefcase size={18} />

            </div>

            {/* Card */}

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition">

              <div className="flex flex-wrap justify-between gap-6">

                <div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    {item.position}
                  </h2>

                  <div className="mt-3 flex items-center gap-2 text-blue-700">

                    <Building2 size={18} />

                    <span className="font-semibold">
                      {item.organization}
                    </span>

                  </div>

                  {item.department && (

                    <p className="mt-2 text-slate-600">

                      {item.department}

                    </p>

                  )}

                </div>

                <span className="h-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

                  {item.type}

                </span>

              </div>

              {/* Info */}

              <div className="mt-6 flex flex-wrap gap-6 text-slate-600">

                <div className="flex items-center gap-2">

                  <Calendar size={18} />

                  {item.duration}

                </div>

                <div className="flex items-center gap-2">

                  <MapPin size={18} />

                  {item.location}

                </div>

              </div>

              {/* Summary */}

              <p className="mt-8 leading-8 text-slate-700">

                {item.description}

              </p>

              {/* Responsibilities */}

              <div className="mt-10">

                <h3 className="text-xl font-semibold text-slate-900">

                  Key Responsibilities

                </h3>

                <div className="mt-5 space-y-3">

                  {item.responsibilities.map((task) => (

                    <div
                      key={task}
                      className="flex gap-3"
                    >

                      <ChevronRight
                        size={18}
                        className="mt-1 text-blue-600 shrink-0"
                      />

                      <span className="text-slate-700">

                        {task}

                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* Technologies */}

              <div className="mt-10">

                <h3 className="text-xl font-semibold text-slate-900">

                  Technologies

                </h3>

                <div className="mt-5 flex flex-wrap gap-3">

                  {item.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                    >

                      {tech}

                    </span>

                  ))}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}