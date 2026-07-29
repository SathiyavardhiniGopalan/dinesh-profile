import {
  BookOpen,
  Presentation,
  Quote,
  TrendingUp,
  Star,
  BadgeCheck,
  Image as ImageIcon,
} from "lucide-react";

import type { ScholarData } from "@/lib/scholar";
import { reviewerData } from "@/data/reviewer";
import { coverImages } from "@/data/coverimages";

interface Props {
  scholar: ScholarData;
}

export default function PublicationStats({ scholar }: Props) {
  const stats = [
    {
      title: "Journal Publications",
      value: scholar.publications.length,
      icon: BookOpen,
      color: "bg-blue-600",
    },
    {
      title: "Conference Papers",
      value: scholar.conferences.length,
      icon: Presentation,
      color: "bg-emerald-600",
    },
    {
      title: "Total Citations",
      value: scholar.metrics.citations,
      icon: Quote,
      color: "bg-amber-500",
    },
    {
      title: "H-Index",
      value: scholar.metrics.hIndex,
      icon: TrendingUp,
      color: "bg-indigo-600",
    },
    {
      title: "i10-Index",
      value: scholar.metrics.i10Index,
      icon: Star,
      color: "bg-purple-600",
    },
    {
      title: "Reviewer Journals",
      value: reviewerData.length,
      icon: BadgeCheck,
      color: "bg-rose-600",
    },
    {
      title: "Journal Covers",
      value: coverImages.length,
      icon: ImageIcon,
      color: "bg-cyan-600",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.color} text-white`}
            >
              <Icon size={28} />
            </div>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              {item.value}
            </h2>

            <p className="mt-2 text-sm font-medium text-slate-600">
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}