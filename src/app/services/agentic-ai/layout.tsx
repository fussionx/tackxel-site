import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Agentic AI Development Services Company — Tackxel",
  description:
    "Tackxel builds agentic AI systems that plan and act independently — improving process throughput, decreasing human intervention by measurable margins, and reducing manual workload.",
  alternates: { canonical: "/services/agentic-ai" },
  openGraph: {
    title: "Agentic AI Development — Tackxel",
    description:
      "Autonomous AI agents, multi-agent systems, LLM-powered decision intelligence, workflow automation, and secure governed agentic systems.",
    url: "/services/agentic-ai",
  },
};

export default function AgenticAILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
