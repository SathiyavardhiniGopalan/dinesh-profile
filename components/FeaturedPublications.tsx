import Link from "next/link";

import {
  journalPublications,
} from "@/data/publications";


export default function FeaturedPublications() {


  const featured = journalPublications.slice(0, 4);



  return (

    <section
    className="
    py-16
    px-6
    md:px-10
    bg-white
    "
    >


      <div
      className="
      max-w-7xl
      mx-auto
      "
      >



        <div
        className="
        flex
        justify-between
        items-center
        "
        >


          <div>

            <h2
            className="
            text-3xl
            font-bold
            text-slate-900
            "
            >
              Featured Publications
            </h2>


            <p
            className="
            mt-2
            text-gray-600
            "
            >
              Selected research contributions.
            </p>

          </div>



          <Link

          href="/publications"

          className="
          hidden
          md:block
          bg-blue-600
          text-white
          px-5
          py-2
          rounded-lg
          hover:bg-blue-700
          transition
          "

          >

          View All

          </Link>



        </div>






        <div

        className="
        mt-8
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
        "

        >



        {
          featured.map((paper)=>(


            <div

            key={paper.id}

            className="
            bg-slate-50
            border
            rounded-xl
            p-6
            hover:shadow-md
            transition
            "

            >



              <h3

              className="
              text-lg
              font-bold
              text-indigo-700
              "

              >

              {paper.title}

              </h3>



              <p

              className="
              mt-3
              font-semibold
              text-emerald-700
              "

              >

              {paper.journal}

              </p>




              <div

              className="
              mt-4
              flex
              gap-3
              "

              >


              <span

              className="
              bg-blue-100
              text-blue-700
              px-3
              py-1
              rounded-full
              text-sm
              "

              >

              {paper.quartile}

              </span>




              <span

              className="
              bg-green-100
              text-green-700
              px-3
              py-1
              rounded-full
              text-sm
              "

              >

              {paper.year}

              </span>



              </div>



            </div>


          ))
        }



        </div>





        <Link

        href="/publications"

        className="
        mt-8
        inline-block
        md:hidden
        bg-blue-600
        text-white
        px-5
        py-2
        rounded-lg
        "

        >

        View All Publications

        </Link>



      </div>


    </section>


  );

}