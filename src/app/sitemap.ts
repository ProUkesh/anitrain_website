export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://anitrain.app";
  const now = new Date();
  const languagePages = ["hi", "pt", "es", "de", "id"].map((lang) => ({
    url: `${base}/${lang}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: .78,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...languagePages,
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: .82 },
    { url: `${base}/anime-workout-app`, lastModified: now, changeFrequency: "monthly", priority: .9 },
    { url: `${base}/anime-trainer-assistant`, lastModified: now, changeFrequency: "monthly", priority: .86 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: .9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: .6 },
    { url: `${base}/advertise`, lastModified: now, changeFrequency: "monthly", priority: .58 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "monthly", priority: .45 },
    { url: `${base}/delete-account`, lastModified: now, changeFrequency: "monthly", priority: .45 },
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: .75,
    })),
  ];
}
