type Props = {
  title: string;
  journal: string;
  year: number;
  impactFactor?: string;
  quartile?: string;
  status: string;
  authors: string;
};


export default function PublicationCard({
  title,
  journal,
  year,
  impactFactor,
  quartile,
  status,
  authors,
}: Props) {

  return (

    <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-lg transition">


      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
        {status}
      </span>


      <h3 className="mt-4 text-xl font-semibold">
        {title}
      </h3>


      <p className="mt-3 text-gray-600 text-sm">
        {authors}
      </p>


      <p className="mt-4 text-blue-600 font-medium">
        {journal}
      </p>


      <div className="flex gap-3 mt-4 text-sm">

        <span className="bg-gray-100 px-3 py-1 rounded-full">
          {year}
        </span>


        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
          IF {impactFactor}
        </span>


        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
          {quartile}
        </span>

      </div>


    </div>

  );
}