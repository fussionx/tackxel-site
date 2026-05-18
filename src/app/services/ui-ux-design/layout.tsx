import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services Company — Tackxel",
  description:
    "Tackxel helps brands design digital products that attract, engage, and retain users — improving satisfaction by 42% and conversion rates by up to 38% through research-driven UX practices.",
  alternates: { canonical: "/services/ui-ux-design" },
  openGraph: {
    title: "UI/UX Design Services — Tackxel",
    description:
      "Mobile, web, enterprise, and product design — with prototype testing, accessibility-compliant interfaces, and consulting for digital transformation.",
    url: "/services/ui-ux-design",
  },
};

export default function UIUXDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
