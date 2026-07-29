import { researchHighlights } from "@/data/researchHighlights";

export default function ResearchHighlights() {
  return (
   <section
  id="research-highlights"
  className="scroll-mt-24 ..."
>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            Research Highlights
          </h2>

          <p className="mt-3 text-gray-600">
            Major research achievements, awards, scholarships and scientific
            recognitions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchHighlights.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{item.badge}</div>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                {item.year}
              </span>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.description}
              </p>

              <div className="mt-6">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}