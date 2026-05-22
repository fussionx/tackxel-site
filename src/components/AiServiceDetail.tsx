"use client";

import ServiceDetail from "@/components/ServiceDetail";
import { getAiService } from "@/lib/ai-services";

export default function AiServiceDetail({ slug }: { slug: string }) {
  const s = getAiService(slug)!;
  return (
    <ServiceDetail
      service={s}
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
    />
  );
}
