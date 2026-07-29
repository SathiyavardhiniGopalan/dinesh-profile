import {
  Mail,
  MapPin,
  Building2,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

import { contact } from "@/data/contact";

export default function Contact() {
  return (
   <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 pt-5 pb-14">

        {/* Header */}

        <div className="mb-12">

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Get In Touch
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            I welcome opportunities for research collaboration,
            interdisciplinary projects, academic discussions, and
            professional networking in microfluidics, microrobotics,
            biomedical engineering, and artificial intelligence.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}

          <div className="rounded-3xl bg-white p-8 shadow-sm border">

            <h2 className="mb-8 text-2xl font-bold text-slate-900">
              Contact Information
            </h2>

            <div className="space-y-7">

              <div className="flex gap-4">

                <Mail className="mt-1 text-blue-600" />

                <div>

                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <a
                    href={`mailto:${contact.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {contact.email}
                  </a>

                </div>

              </div>

              <div className="flex gap-4">

                <GraduationCap className="mt-1 text-blue-600" />

                <div>

                  <h3 className="font-semibold">
                    University
                  </h3>

                  <p>
                    {contact.university}
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Building2 className="mt-1 text-blue-600" />

                <div>

                  <h3 className="font-semibold">
                    Office
                  </h3>

                  <p>
                    {contact.office}
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <MapPin className="mt-1 text-blue-600" />

                <div>

                  <h3 className="font-semibold">
                    Location
                  </h3>

                  <p>
                    {contact.location}
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Academic Profiles */}

          <div className="rounded-3xl bg-white p-8 shadow-sm border">

            <h2 className="mb-8 text-2xl font-bold text-slate-900">
              Academic Profiles
            </h2>

            <div className="space-y-4">

              <a
                href={contact.scholar}
                target="_blank"
                className="flex items-center justify-between rounded-xl border p-4 hover:bg-slate-50"
              >
                <span>Google Scholar</span>
                <ExternalLink size={18} />
              </a>
              <a
  href={contact.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-between rounded-xl border p-4 hover:bg-slate-50"
>
  <span>LinkedIn</span>
  <ExternalLink size={18} />
</a>

            </div>

          </div>

        </div>

        {/* Collaboration Section */}

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-10 text-white">

          <h2 className="text-3xl font-bold">
            Let's Collaborate
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-blue-100">
            I am interested in collaborating with researchers,
            universities, hospitals, and industry partners working in
            microfluidics, magnetic microrobotics, biomedical systems,
            computational modeling, and AI-driven healthcare technologies.
            Feel free to contact me for research collaborations,
            academic opportunities, or interdisciplinary projects.
          </p>

        </div>

      </div>
    </section>
  );
}