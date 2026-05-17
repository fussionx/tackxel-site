import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Application Development Company — Tackxel",
  description:
    "Tackxel builds high-performing web applications that reduce time-to-market by 35% and improve scalability by 50%. Custom web apps, SaaS, PWAs, SPAs, and eCommerce platforms — engineered by senior full-stack teams.",
  alternates: { canonical: "/services/web-app-development" },
  openGraph: {
    title: "Web Application Development — Tackxel",
    description:
      "Custom web apps, SaaS platforms, PWAs, and SPAs built by senior engineering teams. 99.9% uptime, enterprise-grade scalability.",
    url: "/services/web-app-development",
  },
};

export default function WebAppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
