import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://tackxel.com/sitemap.xml",
    host: "https://tackxel.com",
  };
}
