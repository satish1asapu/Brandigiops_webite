import type { MetadataRoute } from "next";
import { blogArticles } from "@/content/blogs";
import { siteUrl } from "@/content/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date("2026-08-10"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date("2026-08-10"),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${siteUrl}/growth-radar`,
      lastModified: new Date("2026-08-10"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blogs`,
      lastModified: new Date("2026-08-10"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...blogArticles.map((article) => ({
      url: `${siteUrl}/blogs/${article.slug}`,
      lastModified: new Date(article.dateIso),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
