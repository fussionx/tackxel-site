import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legacy System Modernization Services Company — Tackxel",
  description:
    "Tackxel provides legacy modernization services to upgrade outdated systems, reduce technical debt, and build cloud-native platforms — helping enterprise leaders accelerate innovation while securing operations.",
  alternates: { canonical: "/services/legacy-modernization" },
  openGraph: {
    title: "Legacy Software Modernization — Tackxel",
    description:
      "Application reengineering, cloud migration, API integration, database modernization, and security & compliance modernization.",
    url: "/services/legacy-modernization",
  },
};

export default function LegacyModernizationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
