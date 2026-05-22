import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — AI, Mobile, Web, Product Design, IoT & ERP",
  description:
    "Tackxel services: AI integration, mobile app development, web & product engineering, product design, staff augmentation, IoT & connected devices, and enterprise platforms & ERP — delivered by a senior UK team.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Tackxel",
    description:
      "AI integration, mobile, web, product design, staff augmentation, IoT and custom ERP — one senior team, end to end.",
    url: "/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
