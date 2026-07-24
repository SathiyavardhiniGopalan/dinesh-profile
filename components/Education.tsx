const educationData = [
  {
    year: "2026",
    degree: "Doctor of Philosophy (Ph.D.)",
    field: "Mechanical Engineering",
    institution:
      "National Cheng Kung University (NCKU), Tainan, Taiwan",
    cgpa: "CGPA: 9.4/10",
    achievement: "Ph.D. Research Scholar",
    highlight:
      "Research on magnetic microrobotics, microfluidics, and intelligent manipulation systems",
  },

  {
    year: "2016",
    degree: "Master of Technology (M.Tech)",
    field: "Engineering Design (Mechanical Engineering)",
    institution:
      "Amrita School of Engineering, Amrita Vishwa Vidyapeetham, Coimbatore, India",
    cgpa: "CGPA: 9.6/10",
    achievement: "🏅 Gold Medalist",
    highlight:
      "Specialization in Engineering Design",
  },

  {
    year: "2014",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Mechanical Engineering",
    institution:
      "Amrita School of Engineering, Amrita Vishwa Vidyapeetham, Coimbatore, India",
    cgpa: "CGPA: 7.41/10",
    achievement: "",
    highlight:
      "Undergraduate studies in Mechanical Engineering",
  },
];

export default function Education() {

  return (

    <section className="px-10 py-16">

      <h1 className="text-4xl font-bold text-slate-900">
        Education
      </h1>


      <div className="mt-10 space-y-8">


        {educationData.map((edu,index)=>(

          <div
            key={index}
            className="
            relative
            border-l-4
            border-blue-600
            pl-8
            pb-6
            "
          >


            <div
              className="
              absolute
              -left-3
              top-0
              w-6
              h-6
              bg-blue-600
              rounded-full
              "
            />


            <p className="text-blue-600 font-semibold">
              {edu.year}
            </p>


            <h2 className="text-2xl font-bold mt-2">
              {edu.degree}
            </h2>


            <h3 className="text-lg text-gray-700 mt-1">
              {edu.field}
            </h3>


            <p className="mt-3 text-gray-600">
              {edu.institution}
            </p>


           <div className="mt-4 flex flex-wrap gap-3">


  <span
    className="
    bg-blue-100
    text-blue-700
    font-semibold
    px-4
    py-2
    rounded-full
    "
  >
    🎓 {edu.cgpa}
  </span>


  {edu.achievement && (

    <span
      className="
      bg-yellow-100
      text-yellow-700
      font-semibold
      px-4
      py-2
      rounded-full
      border
      border-yellow-300
      "
    >
      {edu.achievement}
    </span>

  )}


</div>


            <p className="mt-2 text-gray-600">
              {edu.highlight}
            </p>


          </div>

        ))}


      </div>


    </section>

  );

}