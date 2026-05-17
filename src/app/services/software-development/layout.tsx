import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development Services — Tackxel",
  description:
    "End-to-end custom software development services from Tackxel: enterprise applications, SaaS platforms, web and mobile apps, APIs, and integrations. Senior-only engineering teams delivering production-grade software since 2012.",
  alternates: { canonical: "/services/software-development" },
  openGraph: {
    title: "Custom Software Development Services — Tackxel",
    description:
      "Senior engineering teams that ship production software. Custom enterprise applications, SaaS platforms, web and mobile apps, APIs, and integrations.",
    url: "/services/software-development",
  },
};

export default function SoftwareDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
