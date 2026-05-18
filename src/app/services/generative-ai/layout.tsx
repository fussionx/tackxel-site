import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Gen AI Development Services Company — Tackxel",
  description:
    "Tackxel's Gen AI development helps businesses deploy secure LLM apps trained on proprietary data — delivering efficiency gains while meeting performance, privacy, and compliance requirements.",
  alternates: { canonical: "/services/generative-ai" },
  openGraph: {
    title: "Generative AI Development — Tackxel",
    description:
      "Custom Gen AI apps, LLM development, RAG architecture, fine-tuning, and secure, responsible AI for enterprise.",
    url: "/services/generative-ai",
  },
};

export default function GenerativeAILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
