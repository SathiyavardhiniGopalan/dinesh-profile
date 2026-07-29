"use client";

import { useMemo, useState } from "react";

import type { ScholarData } from "@/lib/scholar";

import PublicationStats from "./PublicationStats";

import { reviewerData } from "@/data/reviewer";
import { coverImages } from "@/data/coverimages";
import Image from "next/image";

import {
  BookOpen,
  Presentation,
  BadgeCheck,
  Image as ImageIcon,
  Search,
  ExternalLink,
} from "lucide-react";

interface Props {
  scholar: ScholarData;
}

type Category =
  | "All"
  | "Publications"
  | "Conferences"
  | "Reviewer"
  | "Cover Images";

export default function Publications({ scholar }: Props) {
  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState<Category>("All");

  const [year, setYear] =
    useState("All");

  /* ------------------------------------------------ */

  /* Years */

  /* ------------------------------------------------ */

  const years = useMemo(() => {
    const publicationYears =
      scholar.publications.map((p) =>
        String(p.year)
      );

    const conferenceYears =
      scholar.conferences.map((p) =>
        String(p.year)
      );

    const reviewerYears =
      reviewerData.map((r) =>
        String(r.year)
      );

    const coverYears =
      coverImages.map((c) =>
        String(c.year)
      );

    return [
      "All",

      ...Array.from(
        new Set([
          ...publicationYears,
          ...conferenceYears,
          ...reviewerYears,
          ...coverYears,
        ])
      ).sort(
        (a, b) =>
          Number(b) - Number(a)
      ),
    ];
  }, [scholar]);

  /* ------------------------------------------------ */

  /* Journal Publications */

  /* ------------------------------------------------ */

  const publications =
    scholar.publications.filter(
      (paper) => {
        const keyword =
          search.toLowerCase();

        const matchesSearch =
          paper.title
            .toLowerCase()
            .includes(keyword) ||
          paper.authors
            .toLowerCase()
            .includes(keyword) ||
          paper.publication
            .toLowerCase()
            .includes(keyword);

        const matchesYear =
          year === "All" ||
          String(paper.year) === year;

        return (
          matchesSearch &&
          matchesYear
        );
      }
    );

  /* ------------------------------------------------ */

  /* Conferences */

  /* ------------------------------------------------ */

  const conferences =
    scholar.conferences.filter(
      (paper) => {
        const keyword =
          search.toLowerCase();

        const matchesSearch =
          paper.title
            .toLowerCase()
            .includes(keyword) ||
          paper.authors
            .toLowerCase()
            .includes(keyword) ||
          paper.publication
            .toLowerCase()
            .includes(keyword);

        const matchesYear =
          year === "All" ||
          String(paper.year) === year;

        return (
          matchesSearch &&
          matchesYear
        );
      }
    );

  /* ------------------------------------------------ */

  /* Reviewer */

  /* ------------------------------------------------ */

  const reviewers =
    reviewerData.filter(
      (item) =>
        year === "All" ||
        String(item.year) === year
    );

  /* ------------------------------------------------ */

  /* Cover Images */

  /* ------------------------------------------------ */

  const covers =
    coverImages.filter(
      (item) =>
        year === "All" ||
        String(item.year) === year
    );

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 pt-5 pb-14">

        {/* Header */}

        <div className="mb-12">

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Publications & Academic Contributions
          </h1>

          <p className="mt-4 max-w-6xl text-lg leading-8 text-slate-600">
            Browse my journal publications,
            conference papers,
            reviewer activities,
            and journal cover recognitions.
            Publication data is automatically
            synchronized from Google Scholar.
          </p>

        </div>

        {/* Statistics */}

        <PublicationStats
          scholar={scholar}
        />

        {/* Search */}

        <div className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">

          <div className="relative">

            <Search
              size={20}
              className="absolute left-4 top-4 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="Search publications..."
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500"
            />

          </div>

        </div>

        {/* Categories */}

        <div className="mt-8 flex flex-wrap gap-3">

          {[
            "All",
            "Publications",
            "Conferences",
            "Reviewer",
            "Cover Images",
          ].map((item) => (

            <button
              key={item}
              onClick={() =>
                setCategory(
                  item as Category
                )
              }
              className={`rounded-full px-5 py-3 text-sm font-semibold transition

${
category===item
?"bg-blue-600 text-white"
:"bg-white border hover:bg-blue-50"
}`}

            >
              {item}
            </button>

          ))}

        </div>

        {/* Years */}

        <div className="mt-8 flex flex-wrap gap-3">

          {years.map((item)=>(

            <button
              key={item}
              onClick={()=>setYear(item)}
              className={`rounded-full px-5 py-2 text-sm font-medium

${
year===item
?"bg-emerald-600 text-white"
:"bg-white border hover:bg-emerald-50"
}`}

            >
              {item}
            </button>

          ))}

        </div>
                {/* ========================================================= */}
        {/* JOURNAL PUBLICATIONS */}
        {/* ========================================================= */}

        {(category === "All" || category === "Publications") && (
          <div className="mt-14">

            <div className="mb-8 flex items-center justify-between">

              <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
                <BookOpen className="text-blue-600" />
                Journal Publications
              </h2>

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                {publications.length} Publications
              </span>

            </div>

            {publications.length === 0 ? (

              <div className="rounded-2xl border border-dashed bg-white py-16 text-center">

                <h3 className="text-2xl font-semibold text-slate-700">
                  No Publications Found
                </h3>

                <p className="mt-3 text-slate-500">
                  Try another year or search keyword.
                </p>

              </div>

            ) : (

              <div className="space-y-6">

                {publications.map((paper) => (

                  <div
                    key={paper.id}
                    className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >

                    <div className="flex flex-wrap items-start justify-between gap-5">

                      <div className="flex-1">

                        <h3 className="text-2xl font-bold leading-8 text-slate-900">
                          {paper.title}
                        </h3>

                        <p className="mt-3 text-slate-600">
                          {paper.authors}
                        </p>

                        <p className="mt-3 text-lg font-semibold text-blue-700">
                          {paper.publication}
                        </p>

                      </div>

                      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                        {paper.year}
                      </span>

                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">

                      <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                        {paper.citations} Citations
                      </span>

                      <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                        Journal
                      </span>

                    </div>

                    <div className="mt-6">

                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                      >
                        <ExternalLink size={18} />
                        View Publication
                      </a>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>
        )}

        {/* ========================================================= */}
        {/* CONFERENCE PAPERS */}
        {/* ========================================================= */}

        {(category === "All" || category === "Conferences") && (
          <div className="mt-20">

            <div className="mb-8 flex items-center justify-between">

              <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
                <Presentation className="text-emerald-600" />
                Conference Papers
              </h2>

              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                {conferences.length} Conferences
              </span>

            </div>

            {conferences.length === 0 ? (

              <div className="rounded-2xl border border-dashed bg-white py-16 text-center">

                <h3 className="text-2xl font-semibold text-slate-700">
                  No Conference Papers Found
                </h3>

              </div>

            ) : (

              <div className="space-y-6">

                {conferences.map((paper) => (

                  <div
                    key={paper.id}
                    className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >

                    <div className="flex flex-wrap items-start justify-between gap-5">

                      <div className="flex-1">

                        <h3 className="text-2xl font-bold leading-8 text-slate-900">
                          {paper.title}
                        </h3>

                        <p className="mt-3 text-slate-600">
                          {paper.authors}
                        </p>

                        <p className="mt-3 text-lg font-semibold text-emerald-700">
                          {paper.publication}
                        </p>

                      </div>

                      <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                        {paper.year}
                      </span>

                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">

                      <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                        Conference
                      </span>

                    </div>

                    {paper.link && (
                      <div className="mt-6">

                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700"
                        >
                          <ExternalLink size={18} />
                          View Paper
                        </a>

                      </div>
                    )}

                  </div>

                ))}

              </div>

            )}

          </div>
        )}
                {/* ========================================================= */}
        {/* REVIEWER */}
        {/* ========================================================= */}

        {(category === "All" || category === "Reviewer") && (
          <div className="mt-20">

            <div className="mb-8 flex items-center justify-between">

              <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
                <BadgeCheck className="text-purple-600" />
                Journal Reviewer
              </h2>

              <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
                {reviewers.length} Journals
              </span>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {reviewers.map((item) => (

                <div
                   key={`${item.journal}-${item.year}`}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <h3 className="text-xl font-bold text-slate-900">
                    {item.journal}
                  </h3>

                  {item.impactFactor && (
                    <p className="mt-3 font-medium text-blue-700">
                      {item.impactFactor}
                    </p>
                  )}

                  <div className="mt-5 flex flex-wrap gap-3">

                    <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
                      {item.year}
                    </span>

                    <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                      {item.reviews}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* COVER IMAGES */}
        {/* ========================================================= */}

        {(category === "All" || category === "Cover Images") && (
          <div className="mt-20">

            <div className="mb-8 flex items-center justify-between">

              <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
                <ImageIcon className="text-amber-600" />
                Featured Journal Covers
              </h2>

              <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                {covers.length} Covers
              </span>

            </div>

            <div className="grid gap-6 md:grid-cols-3">

              {covers.map((cover) => (

                <div
  key={cover.title}
  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
>
  <div className="relative h-72 w-full">
    <Image
      src={cover.image}
      alt={cover.title}
      fill
      className="object-cover"
    />
  </div>

  <div className="p-6">
    <span
      className={`rounded-full px-3 py-1 text-sm font-semibold ${
        cover.type === "Front Cover"
          ? "bg-blue-100 text-blue-700"
          : "bg-purple-100 text-purple-700"
      }`}
    >
      {cover.type}
    </span>

    <h3 className="mt-4 text-xl font-bold text-slate-900">
      {cover.journal}
    </h3>

    <p className="mt-3 leading-7 text-slate-600">
      {cover.title}
    </p>

    <span className="mt-5 inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-medium">
      {cover.year}
    </span>
  </div>
</div>

              ))}

            </div>

          </div>
        )}

      </div>
    </section>
  );
}