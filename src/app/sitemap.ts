import type { MetadataRoute } from "next";

const BASE = "https://tackxel.com";

// Keep in sync with Nav.tsx / Footer.tsx and the app/ route tree.
const staticRoutes = ["", "/about", "/contact", "/services", "/case-studies"];

const serviceRoutes = [
  "/services/ai-integration",
  "/services/mobile-app-development",
  "/services/web-app-development",
  "/services/product-design",
  "/services/iot-and-connected-devices",
  "/services/enterprise-platforms-and-erp",
  "/services/staff-augmentation",
];

const caseStudyRoutes = [
  "/case-studies/lexa",
  "/case-studies/luxelocker",
  "/case-studies/propmetrics",
  "/case-studies/multiunitx",
  "/case-studies/shifterp",
  "/case-studies/sukuk",
  "/case-studies/yallagrub",
  "/case-studies/kintec-footscanner",
  "/case-studies/guardspur",
  "/case-studies/wearopal",
  "/case-studies/my-friend",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  ) => ({ url: `${BASE}${path}`, lastModified: now, changeFrequency, priority });

  return [
    entry("", 1, "weekly"),
    ...staticRoutes.slice(1).map((p) => entry(p, 0.6, "monthly")),
    ...serviceRoutes.map((p) => entry(p, 0.8, "monthly")),
    ...caseStudyRoutes.map((p) => entry(p, 0.8, "monthly")),
  ];
}
