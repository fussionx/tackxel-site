import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Development Company UK — AI Integration & ML | Tackxel",
  description:
    "AI development company UK. AI integration, machine learning, LLM & generative AI development, chatbots and AI agents — shipped to production by senior engineers.",
  keywords: [
    "AI development company UK",
    "AI integration services",
    "AI software development company",
    "LLM development services",
    "machine learning development UK",
    "generative AI development",
    "AI consulting UK",
  ],
  alternates: { canonical: "/services/ai" },
  openGraph: {
    title: "AI Development Company UK — Tackxel",
    description:
      "AI integration, ML, LLM & generative AI development, chatbots and agents — shipped to production by a senior UK team.",
    url: "/services/ai",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
