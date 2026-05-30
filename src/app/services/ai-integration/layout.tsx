import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Integration Services UK | LLM & Chatbot Development | Tackxel",
  description:
    "Production AI integration services in the UK. We ship LLM features, chatbots, and AI agents. Built Pakistan's first AI legal chatbot. Book a call.",
  keywords: [
    "AI integration services UK",
    "LLM integration consultancy",
    "AI integration agency UK",
    "AI chatbot development",
    "RAG implementation UK",
    "GPT integration",
    "AI agent development",
    "AI development company UK",
  ],
  alternates: { canonical: "/services/ai-integration" },
  openGraph: {
    title: "AI Integration Services UK — Tackxel",
    description:
      "Production AI integration services in the UK. LLM features, chatbots, and AI agents — shipped, not demoed.",
    url: "/services/ai-integration",
    type: "website",
  },
};

export default function AiIntegrationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
