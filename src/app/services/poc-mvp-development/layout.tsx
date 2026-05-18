import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POC & MVP Development Services Company — Tackxel",
  description:
    "Tackxel helps startups and enterprises validate ideas, de-risk product decisions, and launch adaptable MVPs through structured proof of concept and rapid MVP development.",
  alternates: { canonical: "/services/poc-mvp-development" },
  openGraph: {
    title: "POC & MVP Development — Tackxel",
    description:
      "Proof of concept, custom MVP engineering, DevOps & cloud-native architecture, AI MVPs, and scaling support beyond launch.",
    url: "/services/poc-mvp-development",
  },
};

export default function POCMVPLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
