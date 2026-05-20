import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import {
  IconIoT, IconCustomSoftware, IconWebApp, IconIntegration,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Case Studies — UK Boutique Engineering Work",
  description:
    "Tackxel case studies: a flagship co-manufacturer ERP, a US storage mobile + IoT platform, an investor SaaS and a real estate syndication marketplace. Real systems, shipped.",
  keywords: [
    "Tackxel case studies",
    "UK software studio case studies",
    "ERP case study",
    "IoT case study",
    "SaaS case study",
    "real estate proptech case study",
  ],
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies — Tackxel UK",
    description:
      "Real systems, shipped: ERP, mobile + IoT, investor SaaS and a syndication marketplace by a UK boutique studio.",
    url: "/case-studies",
    type: "website",
  },
};

const caseStudies = [
  {
    Icon: IconIoT,
    industry: "Real Estate · IoT",
    title: "Mobile + IoT for a US storage operator",
    desc: "Native iOS and Android apps with IoT-controlled gate access, climate control, and real-time status — paired with an AWS backend and CI/CD release pipelines.",
    outcome: "Live on App Store and Google Play",
    href: "/case-studies/storage-iot",
  },
  {
    Icon: IconCustomSoftware,
    industry: "Manufacturing · ERP",
    title: "Custom ERP for a US co-manufacturer",
    desc: "End-to-end ERP from zero — production scheduling, multi-warehouse inventory, EDI integration with major retailers, and a mobile shop-floor app, all on AWS.",
    outcome: "99.5% EDI accuracy with major retailers",
    href: "/case-studies/co-manufacturer-erp",
    flagship: true,
  },
  {
    Icon: IconWebApp,
    industry: "PropTech · SaaS",
    title: "Investor SaaS for real estate agents",
    desc: "White-label investor portal with MLS data integration, ROI calculators, off-market deal management, and an automated lead-scoring engine — Dockerized on AWS.",
    outcome: "In production with role-based access and observability",
    href: "/case-studies/investor-saas",
  },
  {
    Icon: IconIntegration,
    industry: "PropTech · Marketplace",
    title: "Real-estate investment & syndication platform",
    desc: "Deal discovery, investor onboarding, group syndication, and a contractor + lender network — built as one platform on AWS with CloudFront and staged CI/CD.",
    outcome: "Live with the full network from day one",
    href: "/case-studies/real-estate-syndication",
  },
];

export default function CaseStudiesIndexPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative hero-glow text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <Parallax speed={0.12} className="absolute top-20 right-20 hidden lg:block pointer-events-none">
          <div className="w-80 h-80 rounded-full bg-brand-500/10 blur-3xl float-slow" />
        </Parallax>
        <Parallax speed={-0.08} className="absolute bottom-10 left-20 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-400/5 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-mono">
              <Link href="/" className="hover:text-brand-300 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-300">Case studies</span>
            </nav>
          </Reveal>

          <Reveal delay={80}>
            <div className="max-w-3xl">
              <span className="badge-dark mb-6">
                <span className="dot-pulse" />
                Selected work
              </span>
              <h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">
                Real systems, shipped.
              </h1>
              <p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">
                Four anchor projects across mobile, IoT, ERP, and PropTech SaaS. Clients anonymized by request. Every project below is live in production — no concept art, no decks.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/contact" className="btn-brand">
                  Discuss your project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="btn-ghost-light">
                  See what we build
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CASE STUDY GRID */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {caseStudies.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <Link href={c.href} className="block group h-full">
                  <article className={`rounded-xl border overflow-hidden h-full card-lift flex flex-col ${
                    c.flagship ? "bg-neutral-950 border-neutral-800 text-white shadow-card-dark" : "bg-white border-neutral-200 shadow-card"
                  } relative`}>
                    {c.flagship && (
                      <span className="absolute top-3 right-3 z-10 bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Flagship
                      </span>
                    )}
                    <div className={`h-48 flex items-center justify-center ${
                      c.flagship
                        ? "bg-gradient-to-br from-brand-600/30 via-brand-500/10 to-transparent border-b border-neutral-800"
                        : "bg-gradient-to-br from-brand-50 to-white border-b border-neutral-100"
                    }`}>
                      <c.Icon className="w-24 h-24" />
                    </div>
                    <div className="p-7 lg:p-8 flex flex-col flex-1">
                      <div className={`text-xs uppercase tracking-wider font-bold mb-3 ${c.flagship ? "text-brand-300" : "text-brand-600"}`}>{c.industry}</div>
                      <h2 className={`text-h3 mb-3 leading-snug ${c.flagship ? "text-white" : "text-neutral-950"}`}>{c.title}</h2>
                      <p className={`text-sm leading-relaxed mb-6 flex-1 ${c.flagship ? "text-neutral-300" : "text-neutral-600"}`}>{c.desc}</p>
                      <div className={`pt-5 border-t flex items-center justify-between ${c.flagship ? "border-neutral-800" : "border-neutral-100"}`}>
                        <div>
                          <div className={`text-xs uppercase tracking-wider font-semibold ${c.flagship ? "text-brand-300" : "text-brand-600"}`}>Outcome</div>
                          <div className={`text-sm font-semibold mt-1 ${c.flagship ? "text-white" : "text-neutral-900"}`}>{c.outcome}</div>
                        </div>
                        <span className={`text-sm font-medium inline-flex items-center gap-1 transition-colors ${
                          c.flagship ? "text-white group-hover:text-brand-300" : "text-neutral-900 group-hover:text-brand-600"
                        }`}>
                          Read case
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-eyebrow text-brand-300 uppercase mb-4">Build something similar</div>
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">
              Got a project in your head? Let&apos;s talk.
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">
              A 30-minute call with the founder. No slide decks, no sales reps — just an engineer thinking through your problem with you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-brand">
                Book a discovery call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-ghost-light">
                See what we build
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
