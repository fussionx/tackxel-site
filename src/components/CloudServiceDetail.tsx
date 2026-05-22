"use client";

import ServiceDetail from "@/components/ServiceDetail";
import { getCloudService, cloudServices } from "@/lib/cloud-services";

const firstSentence = (t: string) => (t.match(/^[^.]*\./)?.[0] ?? t);

const U = (id: string) => `https://images.unsplash.com/photo-${id}?w=1200&q=80`;

const heroImages: Record<string, { src: string; alt: string }> = {
  "cloud-native-journey": { src: U("1544197150-b99a580bb7a8"), alt: "Cloud native infrastructure and servers" },
  "devops-platform-engineering": { src: U("1460925895917-afdab827c52f"), alt: "DevOps CI/CD pipeline and monitoring dashboard" },
  "kubernetes-consultancy": { src: U("1558494949-ef010cbdcc31"), alt: "Kubernetes container orchestration in a data center" },
  "supply-chain-security": { src: U("1550751827-4bd374c3f58b"), alt: "Software supply chain security" },
  "managed-services": { src: U("1504384308090-c894fdcc538d"), alt: "Managed cloud services operations dashboard" },
  "application-modernization": { src: U("1461749280684-dccba630e2f6"), alt: "Application modernization from legacy to modern systems" },
  "cloud-migration": { src: U("1451187580459-43490279c0fa"), alt: "Cloud migration and data transfer across regions" },
};

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
      heroImage={heroImages[slug]?.src}
      heroAlt={heroImages[slug]?.alt}
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
