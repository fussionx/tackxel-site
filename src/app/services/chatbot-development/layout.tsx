import type { Metadata } from "next";
import { getAiService } from "@/lib/ai-services";

const s = getAiService("chatbot-development")!;

export const metadata: Metadata = {
  title: s.metaTitle,
  description: s.metaDescription,
  keywords: s.keywords,
  alternates: { canonical: `/services/${s.slug}` },
  openGraph: { title: s.metaTitle, description: s.metaDescription, url: `/services/${s.slug}`, type: "website" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
