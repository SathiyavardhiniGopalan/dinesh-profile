export interface ActivitySection {
  id: number;
  title: string;
  items: string[];
}

export const activitySections: ActivitySection[] = [
  {
    id: 1,
    title: "Leadership Roles",
    items: [
      "School People Leader (SPL) (2006–2008)",
      "Class Representative for XI and XII",
    ],
  },

  {
    id: 2,
    title: "Academic & Co-Curricular Achievements",
    items: [
      "Secured Second Rank during the academic years 2007–2010",
      "Gold Medalist – M.Tech Engineering Design, Amrita Vishwa Vidyapeetham",
    ],
  },

  {
    id: 3,
    title: "Professional Training & Industrial Exposure",
    items: [
      "In-Plant Training on Internal Combustion Engine – TNSTC, Tiruppur (2012)",
      "In-Plant Training on Paper Manufacturing Technology – TNPL, Karur (2012)",
      "In-Plant Training on Wheels & Services – ABT Mahalingam Service, Palladam (2013)",
    ],
  },

  {
    id: 4,
    title: "Sports & Community Activities",
    items: [
      "First Place – Inter Dojo Sports Karate Championship (2007)",
      "Runner-up – Zonal Level Volleyball Tournament (2010)",
      "Participated in Amala Bharatham Campaign (ABC), 2013–2014",
    ],
  },

  {
    id: 5,
    title: "Languages",
    items: [
      "English",
      "Tamil",
    ],
  },

  {
    id: 6,
    title: "Hobbies",
    items: [
      "Cooking",
      "Playing Volleyball",
      "Listening to Music",
      "Singing",
    ],
  },
];