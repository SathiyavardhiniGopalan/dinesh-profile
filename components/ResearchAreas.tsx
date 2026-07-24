export default function ResearchAreas() {

  const areas = [
    "Microfluidics",
    "Magnetic Microrobotics",
    "Biomedical Engineering",
    "Computational Fluid Dynamics",
    "Artificial Intelligence",
    "Smart Materials"
  ];


  return (

    <section
    className="
    py-16
    px-6
    md:px-10
    bg-slate-50
    "
    >

      <div className="max-w-7xl mx-auto">


        <h2
        className="
        text-3xl
        font-bold
        text-slate-900
        "
        >
          Research Areas
        </h2>


        <p
        className="
        mt-3
        text-gray-600
        "
        >
          Core research domains and technical interests.
        </p>



        <div
        className="
        mt-8
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-5
        "
        >


        {
          areas.map((area,index)=>(

            <div

            key={index}

            className="
            bg-white
            border
            rounded-xl
            p-5
            shadow-sm
            hover:shadow-md
            transition
            "

            >

              <h3
              className="
              font-semibold
              text-blue-700
              "
              >
                {area}
              </h3>

            </div>

          ))
        }


        </div>


      </div>


    </section>

  );

}