import {
  Brain,
  Cpu,
  Code2,
  Wrench,
  CheckCircle2,
  Award,
} from "lucide-react";

import { skills } from "@/data/skills";

const icons = {
  "Research Areas": Brain,
  "Areas of Interest": Award,
  "Simulation & Engineering Software": Cpu,
  Programming: Code2,
};

const colors = {
  "Research Areas": "bg-blue-600",
  "Areas of Interest": "bg-emerald-600",
  "Simulation & Engineering Software": "bg-purple-600",
  Programming: "bg-amber-500",
};

export default function Skills() {
  return (
  <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 pt-5 pb-14">

        {/* Header */}

        <div className="mb-12">

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Skills & Expertise
          </h1>

          <p className="mt-4 max-w-6xl text-lg leading-8 text-slate-600">
            My expertise combines mechanical engineering, computational
            modeling, artificial intelligence, and biomedical research,
            supported by extensive experience with engineering software,
            scientific programming, and interdisciplinary research.
          </p>

        </div>

        {/* Summary */}

        <div className="mb-16 grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl bg-blue-600 p-8 text-white">

            <Brain size={34} />

            <h2 className="mt-4 text-4xl font-bold">
              9
            </h2>

            <p className="mt-2 text-blue-100">
              Research Areas
            </p>

          </div>

          <div className="rounded-2xl bg-emerald-600 p-8 text-white">

            <Award size={34} />

            <h2 className="mt-4 text-4xl font-bold">
              7
            </h2>

            <p className="mt-2 text-emerald-100">
              Engineering Interests
            </p>

          </div>

          <div className="rounded-2xl bg-purple-600 p-8 text-white">

            <Cpu size={34} />

            <h2 className="mt-4 text-4xl font-bold">
              8
            </h2>

            <p className="mt-2 text-purple-100">
              Engineering Software
            </p>

          </div>

          <div className="rounded-2xl bg-amber-500 p-8 text-white">

            <Code2 size={34} />

            <h2 className="mt-4 text-4xl font-bold">
              4
            </h2>

            <p className="mt-2 text-amber-100">
              Programming Languages
            </p>

          </div>

        </div>

        {/* Categories */}

        <div className="grid gap-8 md:grid-cols-2">

          {skills.map((category) => {

            const Icon =
              icons[category.title as keyof typeof icons];

            const color =
              colors[category.title as keyof typeof colors];

            return (

              <div
                key={category.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex items-center gap-4">

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${color}`}
                  >
                    <Icon size={28} />
                  </div>

                  <div>

                    <h2 className="text-2xl font-bold text-slate-900">
                      {category.title}
                    </h2>

                    <p className="mt-1 text-slate-600">
                      {category.description}
                    </p>

                  </div>

                </div>

                <div className="mt-8 flex flex-wrap gap-3">

                  {category.skills.map((skill) => (

                    <span
                      key={skill}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-100 hover:text-blue-700"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            );

          })}

        </div>

        {/* Research Philosophy */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-10 text-white">

          <div className="flex items-start gap-4">

            <Wrench
              size={34}
              className="mt-1"
            />

            <div>

              <h2 className="text-3xl font-bold">
                Interdisciplinary Engineering Expertise
              </h2>

              <p className="mt-5 text-lg leading-8 text-blue-100">
                My technical expertise bridges mechanical engineering,
                computational modeling, intelligent microfluidics, magnetic
                microrobotics, biomedical engineering, and artificial
                intelligence. By integrating simulation tools, programming,
                and experimental research, I develop innovative engineering
                solutions for healthcare, precision medicine, and advanced
                microsystems.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">

                <div className="flex gap-3">

                  <CheckCircle2 className="mt-1 text-green-300" />

                  <span>
                    Engineering Simulation & Computational Modeling
                  </span>

                </div>

                <div className="flex gap-3">

                  <CheckCircle2 className="mt-1 text-green-300" />

                  <span>
                    Intelligent Biomedical Systems
                  </span>

                </div>

                <div className="flex gap-3">

                  <CheckCircle2 className="mt-1 text-green-300" />

                  <span>
                    AI-Assisted Scientific Research
                  </span>

                </div>

                <div className="flex gap-3">

                  <CheckCircle2 className="mt-1 text-green-300" />

                  <span>
                    Experimental & Computational Engineering
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}