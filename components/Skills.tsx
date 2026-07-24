import {
  researchInterests,
  technicalSkills,
} from "@/data/skills";

import AnimatedSection from "./AnimatedSection";
export default function Skills(){

return (
<AnimatedSection>
<section
id="skills"
className="py-24 bg-white"
>

<div className="max-w-6xl mx-auto px-6">


<h2 className="text-4xl font-bold text-center">
Research Interests & Skills
</h2>


<p className="text-center text-gray-600 mt-3">
Research domains and technical expertise
</p>



{/* Research Interests */}

<div className="mt-14">


<h3 className="text-2xl font-semibold">
Research Areas
</h3>


<div className="flex flex-wrap gap-4 mt-6">


{
researchInterests.map((item)=>(

<span
key={item}
className="
bg-blue-100
text-blue-700
px-5
py-2
rounded-full
hover:bg-blue-200
transition
"
>

{item}

</span>

))
}


</div>


</div>





{/* Technical Skills */}

<div className="mt-16">


<h3 className="text-2xl font-semibold">
Technical Software
</h3>



<div className="
grid
md:grid-cols-3
gap-6
mt-8
">


{
technicalSkills.map((skill)=>(


<div
key={skill.name}
className="
border
rounded-xl
p-5
bg-gray-50
hover:shadow-md
transition
"
>


<h4 className="
text-xl
font-semibold
">
{skill.name}
</h4>


<p className="
text-gray-600
mt-2
">
{skill.category}
</p>


</div>


))
}


</div>


</div>


</div>


</section>
</AnimatedSection>

);

}