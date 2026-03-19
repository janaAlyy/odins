import type { MetadataRoute } from "next";

import { insightPosts } from "@/content/insights";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/services",
    "/solutions",
    "/industries",
    "/case-studies/aviation-academy",
    "/about",
    "/contact",
    "/insights",
    "/privacy",
    "/terms"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8
    })),
    ...insightPosts.map((post) => ({
      url: `${base}/insights/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
