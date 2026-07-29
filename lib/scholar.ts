import axios from "axios";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export interface ScholarPublication {
  id: string;
  title: string;
  authors: string;
  publication: string;
  year: number;
  citations: number;
  link: string;
  snippet?: string;
  type: "Journal" | "Conference";
}

export interface ScholarProfile {
  name: string;
  affiliations: string;
  email: string;
  thumbnail: string;
  interests: {
    title: string;
    link: string;
    serpapi_link?: string;
  }[];
}

export interface ScholarMetrics {
  citations: number;
  hIndex: number;
  i10Index: number;
}

export interface ScholarData {
  profile: ScholarProfile;
  metrics: ScholarMetrics;

  publications: ScholarPublication[];
  conferences: ScholarPublication[];
}

/* -------------------------------------------------------------------------- */
/*                           CONFERENCE IDENTIFIER                            */
/* -------------------------------------------------------------------------- */

const conferenceKeywords = [
  "conference",
  "symposium",
  "proceedings",
  "workshop",
  "congress",
  "ieee",
  "aip",
  "mems",
  "icra",
  "iros",
  "icme",
  "icc",
  "iccas",
  "icrae",
  "conference on",
];

function isConference(publication: string) {
  const text = publication.toLowerCase();

  return conferenceKeywords.some((item) =>
    text.includes(item.toLowerCase())
  );
}

/* -------------------------------------------------------------------------- */
/*                              PARSE ARTICLE                                 */
/* -------------------------------------------------------------------------- */

function parseArticle(article: any): ScholarPublication {
  const publication = article.publication ?? "";

  return {
    id: article.citation_id ?? crypto.randomUUID(),

    title: article.title ?? "",

    authors: article.authors ?? "",

    publication,

    year: Number(article.year ?? 0),

    citations: article.cited_by?.value ?? 0,

    link: article.link ?? "",

    snippet: article.snippet,

    type: isConference(publication)
      ? "Conference"
      : "Journal",
  };
}
/* -------------------------------------------------------------------------- */
/*                          FETCH GOOGLE SCHOLAR DATA                         */
/* -------------------------------------------------------------------------- */

export async function fetchScholarData(): Promise<ScholarData> {
  let url = "https://serpapi.com/search.json";

  const journalPublications: ScholarPublication[] = [];
  const conferencePublications: ScholarPublication[] = [];

  let author: any = null;
  let citedBy: any = null;

  try {
    while (url) {
      const response = await axios.get(url, {
        params: url.includes("search.json")
          ? {
              engine: "google_scholar_author",
              author_id: process.env.SCHOLAR_ID,
              api_key: process.env.SERPAPI_KEY,
            }
          : {},
      });

      const data = response.data;

      if (!author) author = data.author;
      if (!citedBy) citedBy = data.cited_by;

      const articles = data.articles ?? [];

      for (const article of articles) {
        const parsed = parseArticle(article);

        if (parsed.type === "Conference") {
          conferencePublications.push(parsed);
        } else {
          journalPublications.push(parsed);
        }
      }

      url = data.serpapi_pagination?.next ?? null;

      if (url && !url.includes("api_key=")) {
        url += `${url.includes("?") ? "&" : "?"}api_key=${
          process.env.SERPAPI_KEY
        }`;
      }
    }

    journalPublications.sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      return b.citations - a.citations;
    });

    conferencePublications.sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      return b.citations - a.citations;
    });

    return {
      profile: {
        name: author?.name ?? "",
        affiliations: author?.affiliations ?? "",
        email: author?.email ?? "",
        thumbnail: author?.thumbnail ?? "",
        interests: author?.interests ?? [],
      },

      metrics: {
        citations:
          Number(citedBy?.table?.[0]?.citations?.all) || 0,

        hIndex:
          Number(citedBy?.table?.[1]?.h_index?.all) || 0,

        i10Index:
          Number(citedBy?.table?.[2]?.i10_index?.all) || 0,
      },

      publications: journalPublications,

      conferences: conferencePublications,
    };
  } catch (error) {
    console.error("Error fetching Google Scholar data:", error);

    return {
      profile: {
        name: "",
        affiliations: "",
        email: "",
        thumbnail: "",
        interests: [],
      },

      metrics: {
        citations: 0,
        hIndex: 0,
        i10Index: 0,
      },

      publications: [],

      conferences: [],
    };
  }
}