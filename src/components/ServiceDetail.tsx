"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Plus, Minus, Check, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";
import AIVisual from "@/components/AIVisual";
import CaseStudyVisual from "@/components/CaseStudyVisual";
import TiltCard from "@/components/TiltCard";
import JsonLd from "@/components/JsonLd";
import type { AiService } from "@/lib/ai-services";
import { getCaseStudy } from "@/lib/case-studies";

export type ServiceStat = { value: string; suffix?: string; label: string; counter?: boolean };
export type Crumb = { name: string; href?: string };
export type RelatedItem = { name: string; href: string; desc: string };

const BASE = "https://tackxel.com";

// Shared detail template for every AI and Cloud Native service page.
export default function ServiceDetail({
  service: s,
  path,
  breadcrumb,
  whyHeading,
  stats,
  proofSlugs,
  related,
  proofEyebrow = "Proof in production",
}: {
  service: AiService;
  path: string;
  breadcrumb: Crumb[];
  whyHeading: string;
  stats: ServiceStat[];
  proofSlugs: string[];
  related: RelatedItem[];
  proofEyebrow?: string;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const proof = proofSlugs
    .map((slug) => getCaseStudy(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  // --- Structured data (Service + FAQPage + BreadcrumbList) ---
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.name,
      serviceType: s.name,
      description: s.subhead,
      url: `${BASE}${path}`,
      provider: { "@type": "Organization", name: "Tackxel Ltd", url: BASE },
      areaServed: ["GB", "Worldwide"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumb.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: `${BASE}${c.href ?? path}`,
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <section className="relative hero-warm pt-32 pb-20 lg:pb-28 overflow-hidden">
        <Parallax speed={0.08} className="absolute top-24 right-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[24rem] h-[24rem] rounded-full bg-orange-200/40 blur-3xl float-slow" />
        </Parallax>
        <Parallax speed={-0.06} className="absolute bottom-0 left-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[26rem] h-[26rem] rounded-full bg-brand-200/40 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <Reveal>
            <nav className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 mb-8 font-mono">
              {breadcrumb.map((c, i) => (
                <span key={c.name} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-brand-600 transition-colors">{c.name}</Link>
                  ) : (
                    <span className="text-brand-600">{c.name}</span>
                  )}
                  {i < breadcrumb.length - 1 && <span className="text-neutral-300">/</span>}
                </span>
              ))}
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="badge mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                  {s.pill}
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight leading-[1.05]">
                  {s.headline}
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-lg text-neutral-700 mt-6 max-w-2xl leading-relaxed">{s.subhead}</p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link href="/contact" className="btn-brand">
                    Book a call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/case-studies" className="btn-secondary">
                    See our work
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} direction="left">
              <div className="aspect-[4/3] rounded-3xl shadow-elevated border border-neutral-200 overflow-hidden">
                <AIVisual variant={s.heroVariant} accent={s.accent} label={s.name} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Overview</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                  {s.overviewHeading}
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-5 text-base text-neutral-700 leading-relaxed max-w-2xl">
                {s.overview.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">How we work</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Our {s.name.toLowerCase()} process
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {s.process.map((step, i) => (
              <Reveal key={step.no} delay={i * 80}>
                <article className="relative bg-white border border-neutral-200 rounded-3xl p-6 lg:p-7 h-full card-lift overflow-hidden">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-brand-600 tracking-display leading-none mb-4">
                    {step.no}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-950 mb-2 leading-snug">{step.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{step.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS — 3D tilt cards */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Benefits</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                {s.benefitsHeading}
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {s.benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 80}>
                <TiltCard className="bg-neutral-50 border border-neutral-200 rounded-3xl p-7 h-full hover:shadow-elevated">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shadow-subtle mb-5">
                    <b.Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-950 mb-2 leading-snug">{b.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{b.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Use cases</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                {s.useCasesHeading}
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {s.useCases.map((u, i) => (
              <Reveal key={u.title} delay={(i % 3) * 80}>
                <article className="group bg-white border border-neutral-200 rounded-3xl p-7 h-full card-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                      <u.Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-neutral-950 mb-1.5 leading-snug">{u.title}</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{u.desc}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Tech stack</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Tools and platforms we ship with
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mt-4 max-w-xl">
                The right tool for the job, chosen on fit and reliability — not on what we&apos;re married to.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
              {s.tech.map((t) => (
                <div key={t.name} className="group bg-white border border-neutral-200 rounded-2xl py-6 px-5 card-lift transition-all">
                  <div className="font-display text-lg font-bold text-neutral-400 group-hover:text-brand-600 transition-colors tracking-tight leading-none">
                    {t.name}
                  </div>
                  {t.sub && <div className="text-xs text-neutral-400 group-hover:text-neutral-600 transition-colors mt-1.5">{t.sub}</div>}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY TACKXEL */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Why Tackxel</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                {whyHeading}
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start">
            <Reveal delay={100}>
              <div className="space-y-5 text-base text-neutral-700 leading-relaxed max-w-2xl">
                {s.why.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div className="grid grid-cols-3 gap-4 mt-10 max-w-lg">
                {stats.map((st) => (
                  <div key={st.label} className="bg-white border border-neutral-200 rounded-2xl p-5 text-center">
                    <div className="font-display text-3xl lg:text-4xl font-bold text-brand-600 tracking-display leading-none mb-2">
                      {st.counter ? <Counter to={Number(st.value)} suffix={st.suffix} /> : st.value}
                    </div>
                    <div className="text-xs text-neutral-600 leading-snug">{st.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200} direction="left">
              <div className="space-y-3">
                <div className="text-eyebrow text-brand-600 uppercase mb-1">{proofEyebrow}</div>
                {proof.map((c) => (
                  <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group block">
                    <article className="flex items-center gap-4 bg-white border border-neutral-200 rounded-2xl p-4 card-lift">
                      <div className="relative w-20 h-16 rounded-xl overflow-hidden border border-neutral-200 flex-shrink-0">
                        <CaseStudyVisual monogram={c.monogram} accent={c.accent} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-neutral-950 group-hover:text-brand-600 transition-colors">{c.name}</div>
                        <div className="text-xs text-neutral-500 leading-snug line-clamp-2">{c.oneLiner}</div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-600 transition-colors ml-auto flex-shrink-0" />
                    </article>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">FAQ</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                {s.name} questions, answered
              </h2>
            </div>
          </Reveal>

          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {s.faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={f.q}>
                  <div>
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                      aria-expanded={open}
                    >
                      <span className="text-base lg:text-lg font-semibold text-neutral-950 group-hover:text-brand-600 transition-colors">
                        {f.q}
                      </span>
                      <span className="flex-shrink-0 w-7 h-7 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 group-hover:border-brand-300 group-hover:text-brand-600 transition-colors">
                        {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm lg:text-base text-neutral-600 leading-relaxed pb-6 pr-10">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES — internal links */}
      {related.length > 0 && (
        <section className="py-20 lg:py-24 bg-neutral-50 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal>
              <div className="max-w-3xl mb-10">
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Related services</div>
                <h2 className="font-display text-h2 text-neutral-950 tracking-display-tight leading-tight">
                  Explore what pairs with {s.name.toLowerCase()}
                </h2>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
              {related.map((r, i) => (
                <Reveal key={r.href} delay={i * 70}>
                  <Link href={r.href} className="group block bg-white border border-neutral-200 rounded-3xl p-7 card-lift h-full">
                    <h3 className="text-lg font-semibold text-neutral-950 mb-2 leading-snug group-hover:text-brand-600 transition-colors">{r.name}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-5">{r.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 group-hover:text-brand-600 transition-colors">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="relative py-20 lg:py-28 bg-neutral-950 text-white overflow-hidden">
        <Parallax speed={0.1} className="absolute -top-20 -right-20 hidden lg:block pointer-events-none">
          <div className="w-[30rem] h-[30rem] rounded-full bg-orange-500/15 blur-3xl" />
        </Parallax>
        <Parallax speed={-0.08} className="absolute -bottom-20 -left-20 hidden lg:block pointer-events-none">
          <div className="w-[28rem] h-[28rem] rounded-full bg-brand-500/20 blur-3xl" />
        </Parallax>
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur mb-8">
                <span className="dot-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">Built to ship</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-h2 lg:text-h1 text-white tracking-display-tight leading-tight">
                Ready to build with {s.name.toLowerCase()}?
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base lg:text-lg text-neutral-300 leading-relaxed mt-6 max-w-xl mx-auto">
                Tell us what you&apos;re trying to build. We&apos;ll handle the rest.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-3 mt-10 justify-center">
                <Link href="/contact" className="btn-brand">
                  Book a call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="btn-ghost-light">
                  All services
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
