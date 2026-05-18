import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Product Strategy Consulting Company — Tackxel",
  description:
    "Tackxel delivers product strategy consulting services that reduce product failure rates and accelerate time-to-market using structured validation, data-driven roadmapping, and KPI alignment.",
  alternates: { canonical: "/services/product-strategy" },
  openGraph: {
    title: "Product Strategy Consulting — Tackxel",
    description:
      "Product discovery, roadmap strategy, go-to-market, product-led growth, MVP strategy, and KPI governance for SaaS and enterprise products.",
    url: "/services/product-strategy",
  },
};

export default function ProductStrategyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
