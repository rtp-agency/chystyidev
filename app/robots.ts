import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://chystyi.dev/sitemap.xml",
    host: "https://chystyi.dev",
  };
}
