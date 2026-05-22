"use client";

import ServiceDetail from "@/components/ServiceDetail";
import { getAiService, aiServices } from "@/lib/ai-services";

const firstSentence = (t: string) => (t.match(/^[^.]*\./)?.[0] ?? t);

const U = (id: string) => `https://images.unsplash.com/photo-${id}?w=1200&q=80`;

const heroImages: Record<string, { src: string; alt: string }> = {
  "ai-consulting": { src: U("1551288049-bebda4e38f71"), alt: "AI consulting and strategy dashboard" },
  "ai-ml-development": { src: U("1526374965328-7f61d4dc18c5"), alt: "Machine learning data visualization and code" },
  "ai-app-development": { src: U("1512941937669-90a1b58e7e9c"), alt: "AI-powered mobile app development on a smartphone" },
  "chatbot-development": { src: U("1611746872915-64382b5c76da"), alt: "AI chatbot conversational messaging interface" },
  "generative-ai": { src: U("1633356122544-f134324a6cee"), alt: "Generative AI abstract creative visualization" },
  "ai-agents": { src: U("1485827404703-89b55fcc595e"), alt: "Autonomous AI agents and automation" },
  "agentic-ai": { src: U("1620712943543-bcc4688e7485"), alt: "Agentic AI connected multi-agent systems" },
};

export default function AiServiceDetail({ slug }: { slug: string }) {
  const s = getAiService(slug)!;
  const related = aiServices
    .filter((x) => x.slug !== slug)
    .slice(0, 3)
    .map((x) => ({ name: x.name, href: `/services/${x.slug}`, desc: firstSentence(x.subhead) }));

  return (
    <ServiceDetail
      service={s}
      path={`/services/${slug}`}
      heroImage={heroImages[slug]?.src}
      heroAlt={heroImages[slug]?.alt}
      breadcrumb={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "AI Integration", href: "/services/ai-integration" },
        { name: s.name },
      ]}
      whyHeading="AI that ships, from a team that ships AI"
      stats={[
        { value: "11", suffix: "+", label: "Products shipped", counter: true },
        { value: "7", suffix: "+", label: "Years founder experience", counter: true },
        { value: "1st", label: "AI legal chatbot in Pakistan" },
      ]}
      proofSlugs={["lexa", "my-friend"]}
      related={related}
    />
  );
}
