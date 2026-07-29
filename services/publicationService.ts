import { fetchScholarData } from "@/lib/scholar";

/**
 * Returns complete scholar data
 */
export async function getScholarData() {
  return fetchScholarData();
}

/**
 * Featured Publications (Latest + Highly Cited)
 */
export async function getFeaturedPublications() {
  const scholar = await fetchScholarData();

  return [...scholar.publications]
    .sort((a, b) => {
      if (a.year !== b.year) {
        return b.year - a.year;
      }

      return b.citations - a.citations;
    })
    .slice(0, 4);
}

/**
 * Publication Statistics
 */
export async function getPublicationStatistics() {
  const scholar = await fetchScholarData();

  return {
    totalPublications: scholar.publications.length,

    totalConferences: scholar.conferences.length,

    totalCitations: scholar.metrics.citations,

    hIndex: scholar.metrics.hIndex,

    i10Index: scholar.metrics.i10Index,

    latestYear:
      scholar.publications.length > 0
        ? Math.max(...scholar.publications.map((p) => p.year))
        : null,
  };
}

/**
 * Publications by Year
 */
export async function getPublicationsByYear(year: number) {
  const scholar = await fetchScholarData();

  return scholar.publications.filter(
    (paper) => paper.year === year
  );
}

/**
 * Conferences by Year
 */
export async function getConferencesByYear(year: number) {
  const scholar = await fetchScholarData();

  return scholar.conferences.filter(
    (paper) => paper.year === year
  );
}

/**
 * Search Publications
 */
export async function searchPublications(keyword: string) {
  const scholar = await fetchScholarData();

  const search = keyword.toLowerCase();

  return scholar.publications.filter(
    (paper) =>
      paper.title.toLowerCase().includes(search) ||
      paper.authors.toLowerCase().includes(search) ||
      paper.publication.toLowerCase().includes(search)
  );
}

/**
 * Search Conferences
 */
export async function searchConferences(keyword: string) {
  const scholar = await fetchScholarData();

  const search = keyword.toLowerCase();

  return scholar.conferences.filter(
    (paper) =>
      paper.title.toLowerCase().includes(search) ||
      paper.authors.toLowerCase().includes(search) ||
      paper.publication.toLowerCase().includes(search)
  );
}