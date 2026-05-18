import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Digital Transformation Services Company — Tackxel",
  description:
    "Tackxel helps enterprises modernize infrastructure, implement automation, and redesign operating models to improve efficiency, agility, and customer experience.",
  alternates: { canonical: "/services/digital-transformation" },
  openGraph: {
    title: "Digital Transformation — Tackxel",
    description:
      "Strategy roadmaps, legacy modernization, cloud transformation, data & AI, business process automation, and enterprise architecture.",
    url: "/services/digital-transformation",
  },
};

export default function DigitalTransformationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
