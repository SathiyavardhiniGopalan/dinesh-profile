import {
  journalPublications,
  conferencePublications,
  coverArticles,
  reviewerJournals,
} from "@/data/publications";


export default function PublicationStats() {


  const stats = [

    {
      number: `${journalPublications.length}+`,
      title: "Journal Publications",
      color: "blue",
    },


    {
      number: `${conferencePublications.length}+`,
      title: "Conference Publications",
      color: "slate",
    },


    {
      number: `${coverArticles.length}+`,
      title: "Cover Articles",
      color: "yellow",
    },


    {
      number: `${reviewerJournals.length}+`,
      title: "Reviewer Activities",
      color: "purple",
    },


  ];



  return (

    <div

      className="
      mt-8
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-5
      "

    >


      {
        stats.map((item,index)=>(


          <div

            key={index}

            className="
            bg-white
            rounded-xl
            border
            p-6
            shadow-sm
            hover:shadow-md
            transition
            "

          >


            <h3

              className={`
              text-4xl
              font-bold

              ${
                item.color === "blue"
                ?
                "text-blue-700"
                :
                item.color === "yellow"
                ?
                "text-yellow-600"
                :
                item.color === "purple"
                ?
                "text-purple-700"
                :
                "text-slate-700"
              }

              `}

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

  );


}