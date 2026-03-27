import type { MetadataRoute } from "next";

import { localizedPath, pagePaths, serviceSlugs, siteUrl } from "@/lib/site";

const staticPages = Object.values(pagePaths);

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticPages.flatMap((path) =>
    (["ru", "en", "es"] as const).map((locale) => ({
      url: `${siteUrl}${localizedPath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.8,
    })),
  );

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.flatMap((service) =>
    (["ru", "en", "es"] as const).map((locale) => ({
      url: `${siteUrl}${localizedPath(locale, `${pagePaths.services}/${service}`)}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.76,
    })),
  );

  return [...pages, ...servicePages];
}
