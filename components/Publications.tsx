"use client";

import { useState } from "react";

import {
  journalPublications,
  conferencePublications,
  coverArticles,
} from "@/data/publications";

import Reviewer from "@/components/Reviewer";
import PublicationStats from "@/components/PublicationStats";


export default function Publications() {


  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [section, setSection] = useState("All");



  const searchText = search.toLowerCase();



  const filteredJournals = journalPublications.filter((paper) => {


    const searchMatch =

      paper.title.toLowerCase().includes(searchText)

      ||

      paper.journal.toLowerCase().includes(searchText);



    const filterMatch =

      filter === "All"

      ||

      paper.quartile === filter

      ||

      paper.year === filter;



    return searchMatch && filterMatch;


  });





  const filteredConferences = conferencePublications.filter((paper) => {


    return (

      paper.title.toLowerCase().includes(searchText)

      ||

      paper.conference.toLowerCase().includes(searchText)

    );


  });






  const filteredCovers = coverArticles.filter((item)=>{


    return (

      item.title.toLowerCase().includes(searchText)

      ||

      item.journal.toLowerCase().includes(searchText)

    );


  });





  return (

<section

className="
px-6
md:px-10
py-16
bg-slate-50
"

>


<h1

className="
text-4xl
font-bold
text-slate-900
"

>

Publications

</h1>



<p

className="
mt-3
text-gray-600
"

>

Research publications, conferences, cover articles and peer-review activities.

</p>




<PublicationStats />





{/* Search + Dropdown */}


<div

className="
mt-8
flex
flex-col
md:flex-row
gap-4
"

>


<input

type="text"

placeholder="Search publications..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="
w-full
md:flex-1
border
rounded-lg
px-5
py-3
bg-white
shadow
focus:ring-2
focus:ring-blue-500
"

/>





<select

value={section}

onChange={(e)=>setSection(e.target.value)}

className="
w-full
md:w-72
border
rounded-lg
px-5
py-3
bg-white
shadow
"

>


<option value="All">
All Sections
</option>


<option value="Journal">
Journal Publications
</option>


<option value="Conference">
Conference Publications
</option>


<option value="Cover">
Cover Articles
</option>


<option value="Reviewer">
Journal Reviewer
</option>


</select>



</div>





{/* Journal Filters */}
{
(section === "All" || section === "Journal") && (

<div

className="
mt-6
flex
gap-3
flex-wrap
"

>

{

[
"All",
"Q1",
"Q2",
"2026",
"2025",
"2024",
"2023"

].map((item)=>(


<button

key={item}

onClick={()=>setFilter(item)}

className={`

px-4
py-2
rounded-full
font-medium

${
filter === item
?
"bg-blue-600 text-white"
:
"bg-slate-200 text-slate-700"

}

`}

>

{item}

</button>


))

}

</div>

)

}







{/* Journal Publications */}



{
(section === "All" || section === "Journal") && (

<div

className="
mt-12
"

>


<h2

className="
text-3xl
font-bold
text-blue-700
border-b-2
border-blue-200
pb-3
"

>

Journal Publications

</h2>





<div

className="
mt-6
space-y-6
"

>


{

filteredJournals.map((paper)=>(


<div

key={paper.id}

className="
bg-white
rounded-xl
border
p-6
shadow-sm
hover:shadow-lg
transition
"

>


<div

className="
flex
justify-between
gap-5
"

>


<h3

className="
text-xl
font-bold
text-indigo-700
"

>

{paper.title}

</h3>



<span

className="
bg-blue-100
text-blue-700
px-3
py-1
rounded-full
text-sm
font-semibold
h-fit
"

>

{paper.quartile}

</span>


</div>





<p

className="
mt-4
text-lg
font-semibold
text-emerald-700
"

>

{paper.journal}

</p>




<p

className="
mt-2
text-gray-600
"

>

{paper.authors}

</p>




<div

className="
mt-4
flex
gap-3
flex-wrap
"

>


<span

className="
bg-green-100
text-green-700
px-3
py-1
rounded-full
text-sm
"

>

{paper.year}

</span>



<span

className="
bg-purple-100
text-purple-700
px-3
py-1
rounded-full
text-sm
"

>

{paper.impactFactor}

</span>


</div>




<div

className="
mt-5
flex
gap-3
flex-wrap
"

>


{

paper.link && (

<a

href={paper.link}

target="_blank"

rel="noopener noreferrer"

className="
px-4
py-2
rounded-lg
bg-blue-600
text-white
text-sm
font-medium
hover:bg-blue-700
"

>

View Paper

</a>

)

}




{

paper.doi && (

<a

href={paper.doi}

target="_blank"

rel="noopener noreferrer"

className="
px-4
py-2
rounded-lg
bg-slate-700
text-white
text-sm
font-medium
"

>

DOI

</a>

)

}


</div>


</div>


))

}


</div>


</div>

)

}







{/* Conference Publications */}


{
(section === "All" || section === "Conference") && (

<div

className="
mt-16
"

>


<h2

className="
text-3xl
font-bold
text-slate-700
border-b-2
border-slate-300
pb-3
"

>

Conference Publications

</h2>




<div

className="
mt-6
space-y-5
"

>


{

filteredConferences.map((paper)=>(


<div

key={paper.id}

className="
bg-white
border
rounded-xl
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
text-slate-800
"

>

{paper.title}

</h3>




<p

className="
mt-3
inline-block
bg-slate-100
text-slate-700
px-4
py-1
rounded-full
text-sm
font-semibold
"

>

{paper.conference}

</p>




<p

className="
mt-3
text-gray-600
"

>

{paper.location
?
`${paper.location} ${paper.year}`
:
paper.year}

</p>



</div>


))

}



</div>


</div>

)

}
{/* Cover Articles */}


{
(section === "All" || section === "Cover") && (

<div

className="
mt-16
"

>


<h2

className="
text-3xl
font-bold
text-yellow-700
border-b-2
border-yellow-200
pb-3
"

>

Cover Articles

</h2>





<div

className="
mt-6
grid
grid-cols-1
md:grid-cols-2
gap-6
"

>


{

filteredCovers.map((item)=>(


<div

key={item.id}

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
text-indigo-700
"

>

{item.title}

</h3>




<p

className="
mt-3
text-lg
font-semibold
text-emerald-700
"

>

{item.journal}

</p>




<span

className="
inline-block
mt-3
bg-yellow-100
text-yellow-700
px-4
py-1
rounded-full
text-sm
font-semibold
"

>

{item.type}

</span>




<p

className="
mt-3
text-gray-600
"

>

{item.year}

</p>




</div>


))

}


</div>


</div>

)

}







{/* Journal Reviewer */}



{
(section === "All" || section === "Reviewer") && (

<div

className="
mt-16
"

>


<h2

className="
text-3xl
font-bold
text-purple-700
border-b-2
border-purple-200
pb-3
mb-8
"

>

Journal Reviewer

</h2>





<div

className="
bg-white
rounded-xl
p-6
shadow-sm
"

>

<Reviewer />

</div>




</div>


)

}





</section>


);

}