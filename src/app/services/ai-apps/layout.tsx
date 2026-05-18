import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Application Development Company — Tackxel",
  description:
    "Tackxel builds AI applications combining ML, LLMs, and cloud engineering — creating secure, intelligent, high-performing web and mobile software for businesses.",
  alternates: { canonical: "/services/ai-apps" },
  openGraph: {
    title: "AI App Development — Tackxel",
    description:
      "Custom AI apps, ML integration, AI-driven UX, predictive analytics, and cloud AI deployment by senior engineers.",
    url: "/services/ai-apps",
  },
};

export default function AIAppsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
