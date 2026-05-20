import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export const metadata: Metadata = {
  title: "Investor SaaS — Case study",
  description:
    "White-label investor portal for a US real estate investor SaaS. MLS data integration, ROI calculators, off-market deal management, and an automated lead-scoring engine — full-stack on AWS.",
  alternates: { canonical: "/case-studies/investor-saas" },
  openGraph: {
    title: "Investor SaaS — Tackxel case study",
    description:
      "MLS-integrated portal with ROI calculators, off-market deal flow, and automated lead scoring.",
    url: "/case-studies/investor-saas",
    type: "article",
  },
};

const builtItems = [
  "White-label investor portal — every operator can ship under their own brand without code changes.",
  "MLS data integration with normalization, deduplication, and refresh scheduling tuned for accuracy over freshness.",
  "ROI calculators covering rental yield, fix-and-flip, and BRRRR — the three models real investors actually use.",
  "Off-market deal management with exclusive listings, deal status pipelines, and document storage.",
  "Lead scoring engine and automated deal-match alerts — investors get told when something fits, they don't go hunting.",
  "Full-stack on AWS, Dockerized end to end, role-based access control, CloudWatch observability.",
];

const techStack = [
  "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker",
  "MLS API", "CloudWatch", "RBAC", "CI/CD",
];

export default function InvestorSaasPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative hero-glow text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <Parallax speed={0.15} className="absolute top-20 right-20 hidden lg:block pointer-events-none">
          <div className="w-72 h-72 rounded-full bg-brand-500/10 blur-3xl float-slow" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-mono">
              <Link href="/" className="hover:text-brand-300 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/case-studies" className="hover:text-brand-300 transition-colors">Case studies</Link>
              <span>/</span>
              <span className="text-brand-300">Investor SaaS</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="badge-dark mb-6">
                  <span className="dot-pulse" />
                  PropTech · SaaS · Full-stack
                </span>
              </Reveal>
              <Reveal delay={80}>
                <div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">
                  Investor SaaS for a US real estate platform
                </div>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">
                  A white-label investor portal that earns its place in agents&apos; toolboxes.
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">
                  MLS-integrated portal with ROI calculators, off-market deal flow, and an automated lead-scoring engine — full-stack on AWS, Dockerized, with role-based access and CloudWatch observability.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Link href="/contact" className="btn-brand">
                    Discuss a similar project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/case-studies" className="btn-ghost-light">
                    All case studies
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={250} direction="left">
              {/* PLACEHOLDER - swap with real visual at /public/images/case-studies/investor-saas.jpg */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-card-dark">
                <Image
                  src="/images/case-studies/investor-saas.jpg"
                  alt="Investor SaaS dashboard illustration"
                  width={1200}
                  height={800}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="py-20 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">The challenge</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Investor SaaS lives or dies by data
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-5 text-base text-neutral-700 leading-relaxed max-w-2xl">
                <p>
                  Real estate investor tooling is a crowded market with low retention. The platforms that work share one trait: their data is clean, their calculators are right, and their off-market deal flow is actually exclusive.
                </p>
                <p>
                  The client came to us with a market-validated thesis and a clear vision: a white-label investor portal that brokerages and operators could ship under their own brand, with MLS integration, ROI math investors trust, and an alerting engine that surfaces deals before competitors see them.
                </p>
                <p>
                  They needed a partner who could execute it full-stack — not stitch together three SaaS tools.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">How we approached it</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  ROI math, then everything else
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-5 text-base text-neutral-700 leading-relaxed max-w-2xl">
                <p>
                  We started with the calculators. ROI math is where investor tools earn or lose trust — a 1% error in a fix-and-flip calculator gets surfaced fast, by people who do this for a living. We modelled rental yield, fix-and-flip, and BRRRR alongside the client&apos;s in-house analysts before writing a single screen.
                </p>
                <p>
                  MLS integration was the second piece — normalization, deduplication, refresh scheduling, and the kind of caching that lets thousands of listings load without an API quota disaster. Off-market deal management and lead scoring layered on top once the data foundation was solid.
                </p>
                <p>
                  White-label theming was baked into the architecture from day one — themes, copy, and feature flags switch on a per-tenant basis without a deploy.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILT */}
      <section className="py-20 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">What we built</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  The full investor toolkit
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Every feature investors and operators actually use, none of the ones they ignore. White-label by design.
              </p>
            </div>
          </Reveal>

          <div className="bg-neutral-50 border border-neutral-200 rounded-lg overflow-hidden">
            <ul className="divide-y divide-neutral-200">
              {builtItems.map((item, i) => (
                <Reveal key={item} delay={i * 50}>
                  <li className="flex items-start gap-4 p-6 hover:bg-white transition-colors">
                    <div className="w-6 h-6 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-brand-600" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm lg:text-base text-neutral-800 leading-relaxed">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 lg:py-24 bg-neutral-950 text-white border-b border-neutral-800 relative overflow-hidden">
        <Parallax speed={0.15} className="absolute top-0 right-0 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" />
        </Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-10 items-end">
              <div>
                <div className="text-eyebrow text-brand-300 uppercase mb-4">Tech stack</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-white">
                  Full-stack on AWS
                </h2>
              </div>
              <p className="text-base text-neutral-300 leading-relaxed max-w-xl lg:justify-self-end">
                Conventional, well-instrumented, observable. The kind of stack the next engineer on the team can hold in their head.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-200 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="py-20 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">The outcome</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Live, role-aware, instrumented
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="max-w-2xl">
                <p className="text-base text-neutral-700 leading-relaxed mb-8">
                  The platform is in production. Role-based access works the way operators expected it to. CloudWatch tracks request latency, error rates, and MLS sync health from day one.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck className="w-5 h-5 text-brand-600" />
                      <div className="font-display text-lg font-semibold text-neutral-950">Role-based access</div>
                    </div>
                    <div className="text-sm text-neutral-600">Investor, operator, and admin scoping enforced server-side</div>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
                    <div className="font-display text-lg font-semibold text-neutral-950 mb-1">CloudWatch-observed</div>
                    <div className="text-sm text-neutral-600">Latency, errors, MLS sync — all surfaced from launch</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-eyebrow text-brand-300 uppercase mb-4">Build something similar</div>
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">
              Got a SaaS that lives or dies by data? Let&apos;s talk.
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">
              A 30-minute call with the founder. No slide decks, no sales reps — just an engineer thinking through your problem with you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-brand">
                Discuss a similar project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/case-studies" className="btn-ghost-light">
                All case studies
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
