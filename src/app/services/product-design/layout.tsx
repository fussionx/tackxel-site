import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Design Agency UK — UX, UI & Design Systems",
  description:
    "UK product design agency. UX research, wireframes, design systems and high-fidelity UI by a senior boutique studio. Design that ships, not deck art.",
  keywords: [
    "product design agency UK",
    "UX design UK",
    "UI design UK",
    "design systems UK",
    "design agency UK",
    "boutique design studio UK",
  ],
  alternates: { canonical: "/services/product-design" },
  openGraph: {
    title: "Product Design Agency UK — Tackxel",
    description:
      "UX research, wireframes, design systems and high-fidelity UI. By a senior UK boutique studio.",
    url: "/services/product-design",
  },
};

export default function ProductDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
