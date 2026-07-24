import Link from "next/link";


export default function Hero() {


  return (

    <section

    className="
    min-h-screen
    flex
    items-center
    bg-gradient-to-br
    from-slate-50
    via-white
    to-blue-50
    px-6
    md:px-10
    "

    >


      <div

      className="
      max-w-7xl
      mx-auto
      w-full
      grid
      md:grid-cols-2
      gap-10
      items-center
      "

      >




        {/* Left Content */}


        <div>


          <p

          className="
          text-blue-600
          font-semibold
          text-lg
          "

          >

          Ph.D. Research Scholar

          </p>



          <h1

          className="
          mt-4
          text-5xl
          md:text-6xl
          font-bold
          text-slate-900
          "

          >

          Dinesh Kumar Loganathan

          </h1>



          <h2

          className="
          mt-4
          text-xl
          text-gray-600
          "

          >

          National Cheng Kung University, Taiwan

          </h2>




          <p

          className="
          mt-6
          text-gray-700
          leading-relaxed
          "

          >

          Researcher working in microfluidics,
          magnetic microrobotics, biomedical systems,
          computational fluid dynamics and artificial
          intelligence-based engineering solutions.

          </p>






          <div

          className="
          mt-8
          flex
          gap-4
          flex-wrap
          "

          >


          <Link

          href="/publications"

          className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
          hover:bg-blue-700
          transition
          "

          >

          View Publications

          </Link>




          <a

          href="/cv.pdf"

          target="_blank"

          className="
          border
          border-blue-600
          text-blue-600
          px-6
          py-3
          rounded-lg
          hover:bg-blue-50
          transition
          "

          >

          Download CV

          </a>



          </div>



        </div>








        {/* Right Image */}


        <div

        className="
        flex
        justify-center
        "

        >


          <div

          className="
          w-72
          h-72
          rounded-full
          overflow-hidden
          border-8
          border-white
          shadow-xl
          "

          >


            <img

            src="/profile.jpg"

            alt="Dinesh Kumar Loganathan"

            className="
            w-full
            h-full
            object-cover
            "

            />


          </div>



        </div>





      </div>


    </section>


  );

}