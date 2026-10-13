import type { MetadataRoute } from "next";

const BASE = "https://agilityai.co.in";

const paths = [
  "",
  "/about",
  "/services",
  "/industries",
  "/ai-maturity-check",
  "/team",
  "/careers",
  "/contact",
  "/testimonials",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
