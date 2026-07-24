import Link from "next/link";


export default function FeaturedProjects() {


  const projects = [

    {
      title: "Magnetic Microrobot-Based Microfluidic Systems",
      description:
      "Development of programmable magnetic microrobots for biomedical and microfluidic applications.",
      technologies:
      "Microfluidics | Magnetic Actuation | Robotics",
    },


    {
      title: "AI-Assisted Microfluidic Flow Optimization",
      description:
      "Machine learning approaches for prediction and optimization of complex fluid flow behavior.",
      technologies:
      "Artificial Intelligence | CFD | Deep Learning",
    },


    {
      title: "Biomedical Lab-on-Chip Platforms",
      description:
      "Design and fabrication of miniaturized systems for biomedical applications.",
      technologies:
      "MEMS | Microfabrication | Biomedical Engineering",
    },


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

      Featured Projects

      </h2>



      <p

      className="
      mt-2
      text-gray-600
      "

      >

      Selected research and development projects.

      </p>



      </div>





      <Link

      href="/projects"

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
      md:grid-cols-3
      gap-6
      "

      >



      {
        projects.map((project,index)=>(


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

          className="
          text-xl
          font-bold
          text-blue-700
          "

          >

          {project.title}

          </h3>




          <p

          className="
          mt-3
          text-gray-600
          "

          >

          {project.description}

          </p>




          <p

          className="
          mt-4
          text-sm
          font-medium
          text-purple-700
          "

          >

         {project.technologies}

          </p>



          </div>


        ))
      }



      </div>





      <Link

      href="/projects"

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

      View All Projects

      </Link>



      </div>


    </section>


  );

}