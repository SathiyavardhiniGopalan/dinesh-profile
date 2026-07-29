import {
  Users,
  Trophy,
  Factory,
  Volleyball,
  Languages,
  Heart,
  CheckCircle2,
} from "lucide-react";

import { activitySections } from "@/data/activities";

const icons = [
  Users,
  Trophy,
  Factory,
  Volleyball,
  Languages,
  Heart,
];

export default function Activities() {
  const leadershipCount =
    activitySections.find(
      (section) => section.title === "Leadership Roles"
    )?.items.length ?? 0;

  const trainingCount =
    activitySections.find(
      (section) => section.title === "Professional Training & Industrial Exposure"
    )?.items.length ?? 0;

  const achievementCount =
    (activitySections.find(
      (section) => section.title === "Academic & Co-Curricular Achievements"
    )?.items.length ?? 0) +
    (activitySections.find(
      (section) => section.title === "Sports & Community Activities"
    )?.items.length ?? 0);

  const hobbiesCount =
    activitySections.find(
      (section) => section.title === "Hobbies"
    )?.items.length ?? 0;

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 pt-5 pb-14">

        {/* Header */}

        <div className="mb-12">

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Activities, Leadership,Training & Personal Development
          </h1>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Beyond research, I have actively participated in leadership,
            professional training, sports, and community engagement,
            contributing to my personal and professional development.
          </p>

        </div>

        {/* Summary */}

        <div className="mb-16 grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl bg-blue-600 p-8 text-white">

            <Users size={34} />

            <h2 className="mt-4 text-4xl font-bold">
              {leadershipCount}
            </h2>

            <p className="mt-2 text-blue-100">
              Leadership Roles
            </p>

          </div>

          <div className="rounded-2xl bg-amber-500 p-8 text-white">

            <Factory size={34} />

            <h2 className="mt-4 text-4xl font-bold">
              {trainingCount}
            </h2>

            <p className="mt-2 text-amber-100">
              Industrial Training
            </p>

          </div>

          <div className="rounded-2xl bg-emerald-600 p-8 text-white">

            <Trophy size={34} />

            <h2 className="mt-4 text-4xl font-bold">
              {achievementCount}
            </h2>

            <p className="mt-2 text-emerald-100">
              Total Achievements
            </p>

          </div>

          <div className="rounded-2xl bg-indigo-600 p-8 text-white">

            <Heart size={34} />

            <h2 className="mt-4 text-4xl font-bold">
              {hobbiesCount}
            </h2>

            <p className="mt-2 text-indigo-100">
              Hobbies
            </p>

          </div>

        </div>

        {/* Activity Sections */}

        <div className="grid gap-8 md:grid-cols-2">

          {activitySections.map((section, index) => {

            const Icon = icons[index];

            return (

              <div
                key={section.id}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">

                    <Icon size={28} />

                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    {section.title}
                  </h2>

                </div>

                <div className="mt-8 space-y-4">

                  {section.items.map((item) => (

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

            );

          })}

        </div>

        {/* Closing */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-10 text-white">

          <h2 className="text-3xl font-bold">
            Beyond Research
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-100">
            My academic journey has been complemented by leadership
            responsibilities, professional industrial training, competitive
            sports, and community service. These experiences have strengthened
            my teamwork, communication, leadership, and problem-solving skills,
            enabling me to contribute effectively in multidisciplinary research
            and engineering environments.
          </p>

        </div>

      </div>
    </section>
  );
}