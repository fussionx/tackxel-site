import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Development Agency UK — Web App Engineering",
  description:
    "UK Next.js development agency. Production web platforms on Next.js, React, Node and Rails by a senior boutique studio. Custom web apps and SaaS engineered to last.",
  keywords: [
    "Next.js development agency",
    "web app development UK",
    "React development UK",
    "Node.js development UK",
    "Rails development UK",
    "SaaS development UK",
  ],
  alternates: { canonical: "/services/web-app-development" },
  openGraph: {
    title: "Next.js Development Agency UK — Tackxel",
    description:
      "Production web platforms on Next.js, React, Node and Rails. Engineered by a senior UK boutique studio.",
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
