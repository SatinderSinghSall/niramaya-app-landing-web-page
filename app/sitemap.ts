import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

const routes = [
  "",
  "/features",
  "/how-it-works",
  "/about",
  "/app",
  "/wellness",
  "/yoga",
  "/ayurveda",
  "/resources",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
