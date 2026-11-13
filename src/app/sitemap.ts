import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/terms", "/health", "/delete-account"].map((path) => ({
    url: `https://gymify.pk${path}`,
  }));
}
