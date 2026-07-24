import { projects } from "@/data/projects";
import AnimatedSection from "./AnimatedSection";

export default function Projects(){

return (
<AnimatedSection>
<section
id="projects"
className="bg-gray-50 py-24"
>

<div className="max-w-6xl mx-auto px-6">


<h2 className="text-4xl font-bold text-center">
Funded Research Projects
</h2>


<p className="text-center text-gray-600 mt-3">
Research funding and project leadership experience
</p>



<div className="grid md:grid-cols-2 gap-8 mt-14">


{
projects.map((project,index)=>(

<div
key={index}
className="
bg-white
rounded-xl
border
p-8
shadow-sm
hover:shadow-lg
transition
"
>


<div className="
inline-block
bg-blue-100
text-blue-700
px-4
py-2
rounded-full
text-sm
"
>
{project.role}
</div>



<h3 className="
text-2xl
font-semibold
mt-5
">
{project.title}
</h3>



<p className="
mt-4
text-blue-600
font-medium
">
{project.fundingAgency}
</p>



<div className="
flex
gap-4
mt-5
flex-wrap
">


<span className="
bg-green-100
text-green-700
px-3
py-1
rounded-full
text-sm
">
{project.amount}
</span>


<span className="
bg-gray-100
px-3
py-1
rounded-full
text-sm
">
{project.duration}
</span>


</div>



<p className="
mt-5
text-gray-700
leading-7
">
{project.description}
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