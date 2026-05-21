import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import CaseStudyDetail from "@/components/CaseStudyDetail";

// All 11 case studies are statically generated from the data module.
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const url = `/case-studies/${study.slug}`;
  return {
    title: `${study.name} — ${study.industry} case study`,
    description: study.oneLiner,
    alternates: { canonical: url },
    openGraph: {
      title: `${study.name} — Tackxel case study`,
      description: study.oneLiner,
      url,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  return <CaseStudyDetail study={study} />;
}
