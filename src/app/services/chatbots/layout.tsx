import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chatbot Development Services — Tackxel",
  description:
    "Tackxel builds advanced AI chatbots that automate customer interactions — providing 24/7 support, faster query resolution, and cutting operational costs by up to 45%.",
  alternates: { canonical: "/services/chatbots" },
  openGraph: {
    title: "AI Chatbot Development — Tackxel",
    description:
      "Custom chatbots, conversational design, multilingual support, NLP, voice-enabled chatbots, and CRM/ERP integration.",
    url: "/services/chatbots",
  },
};

export default function ChatbotsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
