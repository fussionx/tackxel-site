import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Design Agency UK | SaaS UX/UI Design | Tackxel",
  description:
    "UK product design agency. UX, UI, and product discovery for SaaS and AI products. We design products that ship and convert. Book a call.",
  keywords: [
    "product design agency UK",
    "SaaS UX design agency",
    "UX design agency Manchester",
    "UI design agency UK",
    "product design Manchester",
    "AI product design UK",
    "design systems UK",
    "SaaS product designers",
  ],
  alternates: { canonical: "/services/product-design" },
  openGraph: {
    title: "Product Design Agency UK — SaaS UX/UI Design | Tackxel",
    description:
      "UK product design agency. UX, UI, and product discovery for SaaS and AI products by a senior team.",
    url: "/services/product-design",
    type: "website",
  },
};

export default function ProductDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
