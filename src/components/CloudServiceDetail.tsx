"use client";

import ServiceDetail from "@/components/ServiceDetail";
import { getCloudService } from "@/lib/cloud-services";

export default function CloudServiceDetail({ slug }: { slug: string }) {
  const s = getCloudService(slug)!;
  return (
    <ServiceDetail
      service={s}
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
    />
  );
}
