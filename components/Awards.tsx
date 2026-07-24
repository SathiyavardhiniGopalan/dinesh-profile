import { awards } from "@/data/awards";
import AnimatedSection from "./AnimatedSection";


export default function Awards() {

  return (
<AnimatedSection>
    <section
      id="awards"
      className="py-24 bg-white"
    >

      <div className="max-w-6xl mx-auto px-6">


        <h2 className="text-4xl font-bold text-center">
          Awards & Achievements
        </h2>


        <p className="text-center text-gray-600 mt-3">
          Scholarships, recognitions and academic achievements
        </p>



        <div className="mt-14 space-y-8">


          {
            awards.map((award,index)=>(

              <div
                key={index}
                className="
                border-l-4
                border-blue-600
                bg-gray-50
                p-6
                rounded-xl
                shadow-sm
                hover:shadow-md
                transition
                "
              >

                <div className="flex flex-col md:flex-row md:justify-between">


                  <h3 className="text-xl font-semibold">
                    {award.title}
                  </h3>


                  <span className="
                    text-blue-600
                    font-medium
                    mt-2
                    md:mt-0
                  ">
                    {award.year}
                  </span>


                </div>


                <p className="mt-3 text-blue-700">
                  {award.organization}
                </p>


                <p className="mt-3 text-gray-700 leading-7">
                  {award.description}
                </p>


              </div>

            ))
          }


        </div>


      </div>


    </section>
    </AnimatedSection>

  );
}