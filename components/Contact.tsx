import { contact } from "@/data/contact";

import AnimatedSection from "./AnimatedSection";
export default function Contact(){

return (
<AnimatedSection>
<section
id="contact"
className="py-24 bg-gray-50"
>

<div className="max-w-5xl mx-auto px-6 text-center">


<h2 className="text-4xl font-bold">
Contact
</h2>


<p className="mt-4 text-gray-600">
Feel free to connect for research collaborations,
academic discussions, and opportunities.
</p>



<div className="mt-10 grid md:grid-cols-2 gap-6">


<div
className="
bg-white
rounded-xl
p-6
shadow-sm
"
>

<h3 className="font-semibold text-xl">
Email
</h3>

<a
href={`mailto:${contact.email}`}
className="
text-blue-600
mt-3
block
"
>
{contact.email}
</a>


</div>



<div
className="
bg-white
rounded-xl
p-6
shadow-sm
"
>

<h3 className="font-semibold text-xl">
Affiliation
</h3>

<p className="mt-3 text-gray-700">
{contact.university}
</p>


</div>


</div>




<div className="mt-10 flex justify-center gap-5 flex-wrap">


<a
href="/Dineshkumar_Loganathan_CV.pdf"
target="_blank"
className="
bg-blue-600
text-white
px-6
py-3
rounded-full
hover:bg-blue-700
transition
"
>

Download CV

</a>



{
contact.linkedin && (

<a
href={contact.linkedin}
target="_blank"
className="
border
px-6
py-3
rounded-full
hover:bg-gray-100
"
>

LinkedIn

</a>

)
}



</div>


</div>


</section>
</AnimatedSection>

);

}