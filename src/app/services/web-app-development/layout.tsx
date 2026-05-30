import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Development Agency UK | React & Node | Tackxel",
  description:
    "UK web development agency building Next.js, React, and Node.js applications. SaaS, dashboards, internal tools. Senior engineers. Book a call.",
  keywords: [
    "Next.js development agency UK",
    "React development agency UK",
    "web development agency UK",
    "Node.js development UK",
    "SaaS development UK",
    "web app development UK",
    "Next.js developers UK",
    "React developers UK",
  ],
  alternates: { canonical: "/services/web-app-development" },
  openGraph: {
    title: "Next.js Development Agency UK — React & Node | Tackxel",
    description:
      "UK web development agency building Next.js, React, and Node.js applications. SaaS, dashboards, internal tools by a senior team.",
    url: "/services/web-app-development",
    type: "website",
  },
};

export default function WebAppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
