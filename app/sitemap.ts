import type { MetadataRoute } from "next";
import { cases } from "@/lib/cases";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://chystyi.dev";
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/agencies`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${base}/audit`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${base}/work`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${base}/blog`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...cases.map((c) => ({
      url: `${base}/work/${c.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // Posts carry their own publish date rather than the build time, so
    // lastmod stays honest and does not churn on every deploy.
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date((p.updated ?? p.date) + "T00:00:00Z"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
