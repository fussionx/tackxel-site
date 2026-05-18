import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Product Design Services Company — Tackxel",
  description:
    "Tackxel delivers innovative product design services — keeping customers hooked through valuable design decisions at every stage of the product life cycle.",
  alternates: { canonical: "/services/product-design" },
  openGraph: {
    title: "Product Design Services — Tackxel",
    description:
      "Research & prototyping, UX design, UI design, brand identity, and usability testing across web, mobile, and SaaS.",
    url: "/services/product-design",
  },
};

export default function ProductDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
