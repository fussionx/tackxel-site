import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, Check, ExternalLink,
  Smartphone, Cloud, Database, CreditCard, ShieldCheck, Cpu, Bluetooth,
  MapPin, Bell, Activity, ScanLine, QrCode, Code2, Network, Sparkles,
  Layers, Container, Workflow, Lock, Camera, Boxes, Fingerprint,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import CaseStudyVisual from "@/components/CaseStudyVisual";
import JsonLd from "@/components/JsonLd";
import type { CaseStudy } from "@/lib/case-studies";

// Maps a tech string to a representative icon so each badge reads visually.
// Swap these for real brand logos later if desired — the badge layout stays.
function techIcon(name: string): LucideIcon {
  const n = name.toLowerCase();
  if (/(biometric|fingerprint)/.test(n)) return Fingerprint;
  if (/(jailbreak|encryption|aes|tokeniz|crypto)/.test(n)) return Lock;
  if (/(rbac|role)/.test(n)) return ShieldCheck;
  if (/(swift|ios|kotlin|android|flutter|dart|mobile|mvvm|clean architecture)/.test(n)) return Smartphone;
  if (/(aws|ec2|s3|rds|cloud|cloudfront|ecs|alb|cloudwatch)/.test(n)) return Cloud;
  if (/(postgres|database|sql)/.test(n)) return Database;
  if (/(docker|container)/.test(n)) return Container;
  if (/(ci\/cd|github actions|codemagic|pipeline)/.test(n)) return Workflow;
  if (/(stripe|cc avenue|payment)/.test(n)) return CreditCard;
  if (/(ble|bluetooth)/.test(n)) return Bluetooth;
  if (/(qr)/.test(n)) return QrCode;
  if (/(map|geofenc|tracking|location|gps)/.test(n)) return MapPin;
  if (/(push|notification)/.test(n)) return Bell;
  if (/(mixpanel|firebase|analytics)/.test(n)) return Activity;
  if (/(truedepth|camera)/.test(n)) return Camera;
  if (/(3d|point cloud|stl|ply|scan)/.test(n)) return ScanLine;
  if (/(llm|gpt|rag|generative|prompt|openai|chatgpt|conversational|\bml\b|on-device ml)/.test(n)) return Sparkles;
  if (/(edi|integration|api|crm|mls|noonlight|network)/.test(n)) return Network;
  if (/(iot|hardware|truedepth|sensor|cpu)/.test(n)) return Cpu;
  if (/(riverpod|gorouter|state)/.test(n)) return Boxes;
  if (/(next\.js|react|web|full-stack|node)/.test(n)) return Code2;
  return Layers;
}

export default function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const hasStats = study.stats.length > 0;

  const glance = [
    { label: "Industry", value: study.industry },
    { label: "Platforms", value: study.platforms },
    { label: "Status", value: study.liveUrl ? "Live in production" : "Shipped" },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://tackxel.com" },
            { "@type": "ListItem", position: 2, name: "Case studies", item: "https://tackxel.com/case-studies" },
            { "@type": "ListItem", position: 3, name: study.name, item: `https://tackxel.com/case-studies/${study.slug}` },
          ],
        }}
      />

      {/* HERO — warm, homepage style */}
      <section className="relative hero-warm pt-32 pb-20 lg:pb-28 overflow-hidden">
        <Parallax speed={0.08} className="absolute top-24 right-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[24rem] h-[24rem] rounded-full bg-orange-200/40 blur-3xl float-slow" />
        </Parallax>
        <Parallax speed={-0.06} className="absolute bottom-0 left-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[26rem] h-[26rem] rounded-full bg-brand-200/40 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-8 font-mono">
              <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
              <span className="text-neutral-300">/</span>
              <Link href="/case-studies" className="hover:text-brand-600 transition-colors">Case studies</Link>
              <span className="text-neutral-300">/</span>
              <span className="text-brand-600">{study.name}</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="badge mb-6">
                  <span className="dot-pulse" />
                  {study.industry}
                </span>
              </Reveal>
              <Reveal delay={80}>
                <div className="text-eyebrow text-brand-600 uppercase tracking-widest mb-4">
                  {study.name}
                </div>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight leading-[1.05]">
                  {study.headline}
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-lg text-neutral-700 mt-6 max-w-2xl leading-relaxed">
                  {study.tagline}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-wrap gap-3 mt-8">
                  {study.liveUrl ? (
                    <>
                      <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-brand">
                        {study.liveLabel ?? "Visit live site"}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <Link href="/contact" className="btn-secondary">
                        Discuss a similar project
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link href="/contact" className="btn-brand">
                        Discuss a similar project
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link href="/case-studies" className="btn-secondary">
                        All case studies
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </>
                  )}
                </div>
              </Reveal>
            </div>

            <Reveal delay={250} direction="left">
              {/* VISUAL PLACEHOLDER — designed gradient; swap for a real screenshot later */}
              <div className="aspect-[4/3] rounded-3xl shadow-elevated border border-neutral-200 overflow-hidden">
                {study.heroImage ? (
                  <Image
                    src={study.heroImage}
                    alt={`${study.name} — ${study.industry} live site screenshot`}
                    width={1280}
                    height={960}
                    priority
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <CaseStudyVisual monogram={study.monogram} accent={study.accent} name={study.name} />
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 divide-y divide-neutral-200 lg:divide-y-0 lg:divide-x lg:divide-neutral-200">
            {glance.map((g) => (
              <div key={g.label} className="py-6 lg:py-8 lg:px-8 first:lg:pl-0">
                <div className="text-eyebrow text-brand-600 uppercase mb-2">{g.label}</div>
                <div className="text-sm lg:text-base font-semibold text-neutral-950 leading-snug">{g.value}</div>
              </div>
            ))}
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
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                  What needed to be true
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-5 text-base text-neutral-700 leading-relaxed max-w-2xl">
                {study.challenge.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* APPROACH — numbered, homepage style */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">How we approached it</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                The approach, <span className="text-neutral-500">step by step.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {study.approach.map((step, i) => (
              <Reveal key={step.no} delay={i * 100}>
                <article className="relative bg-white border border-neutral-200 rounded-3xl p-8 lg:p-10 h-full card-lift overflow-hidden">
                  <div className="font-display text-6xl lg:text-7xl font-bold text-brand-600 tracking-display leading-none mb-6">
                    {step.no}
                  </div>
                  <h3 className="font-display text-h3 text-neutral-950 mb-3">{step.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{step.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BUILT */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">What we built</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                  Shipped, not slideware
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Every line below is built and running — the features that make {study.name} a real product, not a prototype.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
            {study.built.map((item, i) => (
              <Reveal key={item} delay={(i % 2) * 60}>
                <div className="flex items-start gap-4 bg-neutral-50 border border-neutral-200 rounded-2xl p-6 h-full card-lift">
                  <div className="w-7 h-7 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-brand-600" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm lg:text-base text-neutral-800 leading-relaxed">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK — visual badges */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Tech stack</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                  The tools behind it
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Chosen for the job, not the résumé. The stack that {study.name} actually runs on.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-wrap gap-3">
              {study.tech.map((t) => {
                const Icon = techIcon(t);
                return (
                  <span
                    key={t}
                    className="group inline-flex items-center gap-2.5 bg-white border border-neutral-200 rounded-xl pl-3 pr-4 py-2.5 shadow-subtle transition-colors hover:border-brand-200"
                  >
                    <span className="flex w-7 h-7 items-center justify-center rounded-lg bg-brand-50 border border-brand-100">
                      <Icon className="w-4 h-4 text-brand-600" />
                    </span>
                    <span className="text-sm font-medium text-neutral-800">{t}</span>
                  </span>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESULTS / IMPACT */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Results &amp; impact</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Where it landed
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed mt-5 max-w-2xl">
                {study.resultsSummary}
              </p>
            </div>
          </Reveal>

          {hasStats && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-5">
              {study.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 80}>
                  <div className="bg-gradient-to-br from-brand-50 via-white to-orange-50 border border-neutral-200 rounded-3xl p-8 h-full card-lift">
                    <div className="font-display text-5xl lg:text-6xl font-bold text-brand-600 tracking-display leading-none mb-3">
                      {s.value}
                    </div>
                    <div className="text-sm text-neutral-700 leading-relaxed">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            {study.status.map((s, i) => (
              <Reveal key={s} delay={i * 60}>
                <span className="inline-flex items-center gap-2 bg-neutral-50 border border-neutral-200 rounded-full px-4 py-2 text-sm font-medium text-neutral-800">
                  <Check className="w-4 h-4 text-brand-600" strokeWidth={2.5} />
                  {s}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — dark, homepage style */}
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
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">Build something similar</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-h2 lg:text-h1 text-white tracking-display-tight leading-tight">
                Got a project like {study.name}? Let&apos;s talk.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base lg:text-lg text-neutral-300 leading-relaxed mt-6 max-w-xl mx-auto">
                A 30-minute call with the founder — no slide decks, no sales reps, just an engineer thinking through your problem with you.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-3 mt-10 justify-center">
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
        </div>
      </section>
    </>
  );
}
