export interface About {
  name: string;
  designation: string;
  university: string;
  department: string;
  location: string;
  bio: string[];
  interests: string[];
}

export const about: About = {
  name: "Dineshkumar Loganathan",

  designation: "Ph.D. Researcher",

  university: "National Cheng Kung University (NCKU)",

  department: "Department of Mechanical Engineering",

  location: "Tainan, Taiwan",

    bio: [
    "I am Dr. Dineshkumar Loganathan, a Mechanical Engineer specializing in magnetic microrobotics, programmable microfluidics, computational fluid dynamics, and artificial intelligence. I completed my Ph.D. in Mechanical Engineering at the Department of Mechanical Engineering, National Cheng Kung University (NCKU), Taiwan.",

    "My research focuses on developing autonomous microsystems for particle manipulation, biomedical applications, and precision healthcare by integrating robotics, microfluidics, machine learning, and advanced computational modeling. I am passionate about translating interdisciplinary engineering research into innovative healthcare technologies.",
  ],

  interests: [
    "Magnetic Microrobots",
    "Microfluidics",
    "Biomedical Engineering",
    "Artificial Intelligence",
    "Flow Manipulation",
    "Zebrafish Applications",
    "Microswimmers",
    "Soft Robotics"
  ]
};