export default function About() {
  return (
    <section className="px-10 py-16">

      <div className="max-w-5xl">

        <h1 className="text-4xl font-bold text-slate-900">
          About Me
        </h1>


        <p className="mt-6 text-lg leading-8 text-gray-700">

          I am Dineshkumar Loganathan, a Ph.D. Researcher in the
          Department of Mechanical Engineering at National Cheng Kung
          University (NCKU), Taiwan.

          My research focuses on magnetic microrobotics,
          microfluidics, biomedical applications, and intelligent
          manipulation systems.

        </p>


        <p className="mt-5 text-lg leading-8 text-gray-700">

          My doctoral research involves the design, fabrication,
          and control of untethered magnetic micro and millirobots
          for flow manipulation, particle transport, and biomedical
          applications.

        </p>


        <div className="mt-10 grid md:grid-cols-2 gap-6">


          <div className="
          bg-white
          rounded-xl
          shadow-md
          p-6
          border">

            <h2 className="text-xl font-semibold text-blue-700">
              Research Interests
            </h2>


            <ul className="mt-4 space-y-2 text-gray-700">

              <li>• Magnetic Microrobotics</li>

              <li>• Microfluidics</li>

              <li>• Biomedical Engineering</li>

              <li>• Computational Fluid Dynamics</li>

              <li>• Artificial Intelligence in Engineering</li>

            </ul>

          </div>



          <div className="
          bg-white
          rounded-xl
          shadow-md
          p-6
          border">

            <h2 className="text-xl font-semibold text-blue-700">
              Research Highlights
            </h2>


            <ul className="mt-4 space-y-2 text-gray-700">

              <li>• 20+ International Journal Publications</li>

              <li>• Q1 Journal Publications</li>

              <li>• International Research Collaboration</li>

              <li>• Journal Reviewer</li>

              <li>• Funded Research Projects</li>

            </ul>

          </div>


        </div>


      </div>

    </section>
  );
}