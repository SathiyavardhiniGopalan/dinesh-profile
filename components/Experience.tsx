const experienceData = [

  {
    period: "2021 - Present",
    role: "Ph.D. Research Scholar",
    institution:
      "National Cheng Kung University (NCKU), Tainan, Taiwan",
    type: "Doctoral Research Experience",
    description:
      "Conducting doctoral research in Mechanical Engineering focusing on magnetic microrobotics, microfluidics, intelligent flow manipulation, biomedical applications, and data-driven engineering systems.",
  },


  {
    period: "Jan 2020 - Sep 2021",
    role: "Junior Research Fellow",
    institution:
      "Indian Institute of Technology (IIT) Jammu, India",
    type: "Research Experience",
    description:
      "Worked on research activities involving computational analysis, numerical simulations, and engineering research projects.",
  },


  {
    period: "July 2016 - Dec 2019",
    role: "Assistant Professor",
    institution:
      "Amrita School of Engineering, Bangalore, India",
    type: "Teaching Experience",
    description:
      "Taught Mechanical Engineering courses, guided undergraduate projects, and contributed to academic research activities.",
  },


  {
    period: "Feb 2016 - June 2016",
    role: "Research Fellow / Master Student",
    institution:
      "Universitat Politècnica de Catalunya (CTTC), Barcelona, Spain",
    type: "International Research Experience",
    description:
      "Worked at Heat and Mass Transfer Technological Centre (CTTC) on engineering research involving computational studies and heat transfer analysis.",
  },

];


export default function Experience() {

  return (

    <section className="px-10 py-16">


      <h1 className="text-4xl font-bold text-slate-900">
        Experience
      </h1>



      <div className="mt-10 space-y-10">


        {experienceData.map((exp,index)=>(

          <div
            key={index}
            className="
            relative
            border-l-4
            border-blue-600
            pl-8
            "
          >


            <div
              className="
              absolute
              -left-3
              top-0
              w-6
              h-6
              rounded-full
              bg-blue-600
              "
            />


            <p className="text-blue-600 font-semibold">
              {exp.period}
            </p>


            <h2 className="mt-2 text-2xl font-bold">
              {exp.role}
            </h2>


            <h3 className="mt-1 text-lg text-gray-700">
              {exp.institution}
            </h3>


            <span
 className={`
 inline-block
 mt-3
 px-4
 py-1
 rounded-full
 font-medium
 ${
   exp.type === "Doctoral Research Experience"
   ? "bg-purple-100 text-purple-700 border border-purple-300"
   : "bg-green-100 text-green-700"
 }
 `}
>
 {exp.type}
</span>


            <p className="mt-4 text-gray-600 leading-7">
              {exp.description}
            </p>


          </div>


        ))}


      </div>


    </section>

  );
}