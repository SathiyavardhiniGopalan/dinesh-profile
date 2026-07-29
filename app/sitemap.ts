import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yourdomain.com",
      priority: 1,
    },
    {
      url: "https://yourdomain.com/about",
    },
    {
      url: "https://yourdomain.com/education",
    },
    {
      url: "https://yourdomain.com/experience",
    },
    {
      url: "https://yourdomain.com/publications",
    },
    {
      url: "https://yourdomain.com/projects",
    },
    {
      url: "https://yourdomain.com/skills",
    },
    {
      url: "https://yourdomain.com/awards",
    },
    {
      url: "https://yourdomain.com/activities",
    },
    {
      url: "https://yourdomain.com/contact",
    },
  ];
}