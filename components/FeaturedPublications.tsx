import Link from "next/link";
import { getFeaturedPublications } from "@/services/publicationService";

export default async function FeaturedPublications() {
  const publications = await getFeaturedPublications();

  return (
    <section
  id="featured-publications"
  className="scroll-mt-24 py-20"
>
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center justify-between mb-10">

          <div>
            <h2 className="text-3xl font-bold">
              Featured Publications
            </h2>

            <p className="text-gray-600 mt-2">
              Selected publications from Google Scholar.
            </p>
          </div>

          <Link
            href="/publications"
            className="text-blue-600 hover:underline"
          >
            View All →
          </Link>

        </div>

        <div className="grid gap-6">

          {publications.map((paper) => (
            <article
              key={paper.id}
              className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold leading-snug">
                {paper.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {paper.authors}
              </p>

              <p className="mt-3 text-gray-700">
                {paper.publication}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span>{paper.year}</span>
                <span>{paper.citations} Citations</span>
              </div>

              <Link
                href={paper.link}
                target="_blank"
                className="mt-4 inline-flex text-blue-600 hover:underline"
              >
                View on Google Scholar →
              </Link>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}