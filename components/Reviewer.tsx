import { reviewerJournals } from "@/data/publications";


export default function Reviewer() {


  return (

    <div

      className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-5
      "

    >


      {
        reviewerJournals.map((item)=>(


          <div

            key={item.id}

            className="
            border
            rounded-xl
            p-5
            bg-slate-50
            hover:bg-purple-50
            transition
            "

          >


            <h3

              className="
              font-semibold
              text-purple-700
              "

            >

              {item.journal}

            </h3>


          </div>


        ))
      }


    </div>


  );

}