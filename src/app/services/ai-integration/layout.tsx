import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Integration Agency UK — GPT, LLM & AI Chatbot Development",
  description:
    "UK AI integration agency. Production-grade GPT, LLM, RAG, agent and AI chatbot development for founders and product teams. LLM integration services that ship.",
  keywords: [
    "AI integration agency UK",
    "AI development company UK",
    "LLM integration services",
    "AI chatbot development",
    "RAG implementation",
    "generative AI development",
    "GPT integration",
    "AI agent development",
  ],
  alternates: { canonical: "/services/ai-integration" },
  openGraph: {
    title: "AI Integration Agency UK — Tackxel",
    description:
      "AI that ships, not AI that demos. GPT, LLM, RAG and AI chatbot development by a senior UK boutique studio.",
    url: "/services/ai-integration",
    type: "website",
  },
};

export default function AiIntegrationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
