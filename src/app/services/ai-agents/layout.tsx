import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agents Development Services — Tackxel",
  description:
    "Tackxel builds advanced AI agents and chatbots that automate customer interactions — providing 24/7 support, faster query resolution, and cutting operational costs by up to 45%.",
  alternates: { canonical: "/services/ai-agents" },
  openGraph: {
    title: "AI Agents Development — Tackxel",
    description:
      "Custom AI agents, chatbots, conversational AI, multilingual support, NLP, and voice-enabled agents for enterprise scale.",
    url: "/services/ai-agents",
  },
};

export default function AIAgentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
