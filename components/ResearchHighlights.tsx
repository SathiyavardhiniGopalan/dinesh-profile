import {
  journalPublications,
  conferencePublications,
  coverArticles,
  reviewerJournals,
} from "@/data/publications";


export default function ResearchHighlights() {


  const highlights = [

    {
      number: `${journalPublications.length}+`,
      title: "Journal Publications",
    },


    {
      number: `${conferencePublications.length}+`,
      title: "Conference Publications",
    },


    {
      number: `${coverArticles.length}+`,
      title: "Cover Articles",
    },


    {
      number: `${reviewerJournals.length}+`,
      title: "Reviewer Activities",
    },


  ];



  const researchAreas = [

    "Microfluidics",

    "Magnetic Microrobotics",

    "Computational Fluid Dynamics (CFD)",

    "Biomedical Engineering",

    "Artificial Intelligence in Microfluidics",

    "Finite Element Analysis",

  ];





  return (

    <section

      className="
      py-16
      px-6
      md:px-10
      bg-white
      "

    >


      <div className="max-w-7xl mx-auto">



        <h2

          className="
          text-3xl
          md:text-4xl
          font-bold
          text-slate-900
          "

        >

          Research Highlights

        </h2>




        <p

          className="
          mt-3
          text-gray-600
          "

        >

          Summary of research contributions, publications and expertise.

        </p>






        {/* Statistics Cards */}


        <div

          className="
          mt-8
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          "

        >



          {
            highlights.map((item,index)=>(


              <div

                key={index}

                className="
                rounded-xl
                border
                p-6
                shadow-sm
                hover:shadow-md
                transition
                bg-slate-50
                "

              >



                <h3

                  className="
                  text-4xl
                  font-bold
                  text-blue-700
                  "

                >

                  {item.number}

                </h3>




                <p

                  className="
                  mt-2
                  text-gray-700
                  font-medium
                  "

                >

                  {item.title}

                </p>



              </div>


            ))
          }



        </div>







        {/* Research Areas */}



        <div

          className="
          mt-12
          "

        >



          <h3

            className="
            text-2xl
            font-bold
            text-slate-800
            "

          >

            Research Areas

          </h3>





          <div

            className="
            mt-5
            flex
            flex-wrap
            gap-3
            "

          >




            {
              researchAreas.map((area,index)=>(


                <span

                  key={index}

                  className="
                  bg-blue-50
                  text-blue-700
                  px-4
                  py-2
                  rounded-full
                  font-medium
                  border
                  border-blue-100
                  "

                >

                  {area}

                </span>


              ))
            }



          </div>



        </div>





      </div>



    </section>


  );


}