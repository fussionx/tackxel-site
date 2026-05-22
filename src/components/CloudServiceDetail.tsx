"use client";

import ServiceDetail from "@/components/ServiceDetail";
import { getCloudService, cloudServices } from "@/lib/cloud-services";

const firstSentence = (t: string) => (t.match(/^[^.]*\./)?.[0] ?? t);

export default function CloudServiceDetail({ slug }: { slug: string }) {
  const s = getCloudService(slug)!;
  const related = cloudServices
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
        { name: s.name },
      ]}
      whyHeading="Cloud engineering from a team that runs it in production"
      stats={[
        { value: "11", suffix: "+", label: "Products shipped", counter: true },
        { value: "4", suffix: "+", label: "AWS platforms shipped", counter: true },
        { value: "99.5%", label: "EDI accuracy on ShiftERP" },
      ]}
      proofSlugs={["shifterp", "luxelocker", "propmetrics"]}
      proofEyebrow="Cloud proof in production"
      related={related}
    />
  );
}
