import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dellakkadawalaecoresort.com";
  const lastModified = new Date("2026-10-30");

  const routes = [
    "",
    "/about",
    "/experiences",
    "/stay",
    "/gallery",
    "/location",
    "/contact",
    "/faq",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

