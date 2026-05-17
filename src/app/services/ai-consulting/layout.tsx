import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Consulting Services Provider — Tackxel",
  description:
    "Tackxel delivers AI consulting and machine learning services that boost prediction accuracy by up to 60%, automate key workflows, and cut manual tasks by over 50% — creating measurable business value.",
  alternates: { canonical: "/services/ai-consulting" },
  openGraph: {
    title: "AI Consulting Services — Tackxel",
    description:
      "Expert AI consulting from strategy to deployment. Generative AI, LLMs, ML, AI agents, and integration — engineered by senior AI consultants.",
    url: "/services/ai-consulting",
  },
};

export default function AIConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
