import type { MetadataRoute } from "next";
import { blogArticles } from "@/content/blogs";
import { siteUrl } from "@/content/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blogs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: now,
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
