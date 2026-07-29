import Publications from "@/components/Publications";
import { fetchScholarData } from "@/lib/scholar";

export default async function PublicationsPage() {
  const scholar = await fetchScholarData();

  return <Publications scholar={scholar} />;
}
export const metadata = {
  title: "Publications",
  description:
    "Journal publications, conference papers, reviewer activities and research contributions of Dr. Dineshkumar Loganathan.",
};