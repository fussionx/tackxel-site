"use client";

import ServiceDetail from "@/components/ServiceDetail";
import { getAiService, aiServices } from "@/lib/ai-services";

const firstSentence = (t: string) => (t.match(/^[^.]*\./)?.[0] ?? t);

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
