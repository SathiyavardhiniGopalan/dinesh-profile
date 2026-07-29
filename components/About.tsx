import {
  Mail,
  MapPin,
  GraduationCap,
  BrainCircuit,
  Microscope,
  Cpu,
  Languages,
  ExternalLink,
} from "lucide-react";

import { profile } from "@/data/profile";
import { about } from "@/data/about";
import {
  researchAreas,
  researchVision,
} from "@/data/research";

import { skills } from "@/data/skills";

export default function About() {
  return (
   <section className="mx-auto max-w-7xl px-6 pt-5 pb-14">

      {/* Heading */}

      <div className="mb-12 max-w-6xl">
        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          {profile.fullName}
        </h1>

        <p className="mt-4 max-w-6xl text-lg leading-8 text-slate-600">
          {about.bio}
        </p>

      </div>

      {/* Basic Information */}

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="rounded-2xl border bg-white p-8 shadow-sm">

          <h2 className="text-2xl font-semibold mb-6">
            Professional Information
          </h2>

          <div className="space-y-5">

            <div className="flex gap-4">

              <GraduationCap className="text-blue-600 mt-1" />

              <div>
                <p className="font-semibold">Degree</p>
                <p className="text-gray-600">
                  {profile.degree}
                </p>
              </div>

            </div>

            <div className="flex gap-4">

              <BrainCircuit className="text-blue-600 mt-1" />

              <div>

                <p className="font-semibold">
                  Current Position
                </p>

                <p className="text-gray-600">
                  {profile.title}
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <MapPin className="text-blue-600 mt-1" />

              <div>

                <p className="font-semibold">
                  Location
                </p>

                <p className="text-gray-600">
                  {profile.location}
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <Mail className="text-blue-600 mt-1" />

              <div>

                <p className="font-semibold">
                  Email
                </p>

                <a
                  href={`mailto:${profile.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {profile.email}
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Research Vision */}

        <div className="rounded-2xl bg-blue-600 text-white p-8">

          <h2 className="text-2xl font-semibold mb-6">
            {researchVision.title}
          </h2>

          <p className="leading-8 text-blue-100">
            {researchVision.description}
          </p>

        </div>

      </div>

      {/* Research Areas */}

      <div className="mt-16">

        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Research Areas
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {researchAreas.map((item) => (

            <div
              key={item.id}
              className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-lg transition"
            >

              <Microscope
                size={32}
                className="text-blue-600"
              />

              <h3 className="mt-4 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Technical Expertise */}

<div className="mt-16">

  <h2 className="mb-8 text-3xl font-bold text-slate-900">
    Technical Expertise
  </h2>

  <div className="grid gap-8 md:grid-cols-2">

    {skills.map((category) => (

      <div
        key={category.title}
        className="rounded-xl border bg-white p-6 shadow-sm"
      >

        <div className="mb-4 flex items-center gap-3">

          <Cpu className="text-blue-600" />

          <div>

            <h3 className="text-xl font-semibold">
              {category.title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {category.description}
            </p>

          </div>

        </div>

        <div className="mt-5 flex flex-wrap gap-3">

          {category.skills.map((skill) => (

            <span
              key={skill}
              className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
            >
              {skill}
            </span>

          ))}

        </div>

      </div>

    ))}

  </div>

</div>
      {/* Languages */}

      <div className="mt-16">

        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Languages
        </h2>

        <div className="flex gap-4 flex-wrap">

          {profile.languages.map((language) => (

            <div
              key={language}
              className="flex items-center gap-2 rounded-full bg-slate-100 px-5 py-3"
            >

              <Languages size={18} />

              {language}

            </div>

          ))}

        </div>

      </div>

      {/* Professional Profiles */}

      <div className="mt-16">

        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Professional Profiles
        </h2>

        <div className="flex flex-wrap gap-4">

          <a
            href={profile.scholar}
            target="_blank"
            className="rounded-xl border px-6 py-3 hover:bg-slate-50 flex items-center gap-2"
          >
            Google Scholar
            <ExternalLink size={16} />
          </a>

          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              className="rounded-xl border px-6 py-3 hover:bg-slate-50 flex items-center gap-2"
            >
              LinkedIn
              <ExternalLink size={16} />
            </a>
          )}
        </div>

      </div>

    </section>
  );
}