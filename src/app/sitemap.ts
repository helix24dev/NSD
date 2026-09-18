import type { MetadataRoute } from "next";
import { site, nav } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...nav.map((n) => ({
      url: `${site.url}${n.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: n.href === "/investors" ? 0.9 : 0.7,
    })),
  ];
}
