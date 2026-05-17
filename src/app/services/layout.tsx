import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Services & Solutions — Custom, Mobile, AI, Cloud",
  description: "Comprehensive software engineering services from Tackxel: custom software development, mobile and web apps, AI and ML, cloud and DevOps, legacy modernization, and quality engineering. End-to-end delivery from a senior engineering team.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Software Development Services — Tackxel",
    description: "Custom software, mobile, web, AI, and cloud engineering services for startups, scaleups, and enterprises.",
    url: "/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
