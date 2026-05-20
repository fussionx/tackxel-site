"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import {
  IconMobileApp, IconWebApp, IconCustomSoftware, IconAI, IconIoT,
  IconStartup, IconScaleup, IconEnterprise,
} from "@/components/Icons";
import {
  IllusFixedCost, IllusDedicatedTeam,
} from "@/components/EngagementArt";

const services = [
  {
    Icon: IconMobileApp,
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    desc: "Native iOS and Android, or cross-platform React Native and Flutter. App Store-ready pipelines and 90-day post-launch support baked in.",
  },
  {
    Icon: IconWebApp,
    name: "Web Application Development",
    href: "/services/web-app-development",
    desc: "Production web platforms on Next.js, React, Node, and Rails — engineered for speed today and the team that maintains them next year.",
  },
  {
    Icon: IconIoT,
    name: "IoT & Connected Devices",
    href: "/services/iot-and-connected-devices",
    desc: "BLE, NFC, wearables, and smart hardware paired with mobile companion apps and cloud telemetry — one team, end to end.",
  },
  {
    Icon: IconAI,
    name: "AI Integration",
    href: "/services/ai-integration",
    desc: "GPT, LLMs, and generative AI integrated into products that already ship. RAG, custom workflows, and evaluation pipelines that don't break.",
  },
  {
    Icon: IconCustomSoftware,
    name: "Enterprise Platforms & ERP",
    href: "/services/enterprise-platforms-and-erp",
    desc: "Custom SaaS, ERP systems, and internal tools built end to end — role-based portals, EDI integrations, and operations-grade reliability.",
  },
];

const audiences = [
  {
    Icon: IconStartup,
    label: "Founders & early-stage startups",
    desc: "A senior team that can take you from idea to a credible v1 in users' hands. We start with discovery, ship a focused MVP, and instrument it so your next decision is evidence-based.",
  },
  {
    Icon: IconScaleup,
    label: "Scaleups adding capacity",
    desc: "Extra senior engineering and product hands that plug into your existing standards, codebase, and cadence. No agency overhead, no junior bench — just builders who match your bar.",
  },
  {
    Icon: IconEnterprise,
    label: "Operations & enterprise teams",
    desc: "Custom platforms, ERPs, and internal tools for businesses that have outgrown spreadsheets and SaaS templates. We build the system, then hand over clean.",
  },
];

const engagements = [
  {
    name: "Fixed-Cost Projects",
    desc: "Defined deliverables, milestones, and price. Best for bounded product launches and time-sensitive initiatives where requirements are well-understood.",
    cta: "Scope a project",
    Illus: IllusFixedCost,
  },
  {
    name: "Dedicated Teams",
    desc: "A small senior pod that ships against your roadmap. Best for ongoing product development with predictable monthly capacity.",
    cta: "Build your team",
    featured: true,
    Illus: IllusDedicatedTeam,
  },
];

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
];

const processSteps = [
  {
    no: "01",
    title: "Discover",
    desc: "Stakeholder workshops, technical discovery, and a risk-prioritized backlog. We surface unknowns before they become surprises.",
    duration: "Week 1–2",
    deliverables: ["Technical scoping document", "Risk register", "Delivery roadmap"],
  },
  {
    no: "02",
    title: "Design",
    desc: "Architecture decisions, system diagrams, and UX prototypes. Engineering and design move in lockstep from the start.",
    duration: "Week 2–4",
    deliverables: ["System architecture", "Interactive Figma prototype", "Data model & API spec"],
  },
  {
    no: "03",
    title: "Build",
    desc: "Senior engineers ship in two-week sprints with shared dashboards. Daily standups, weekly demos, written status reports.",
    duration: "Ongoing",
    deliverables: ["Production-grade code", "CI/CD pipelines", "Test coverage where it counts"],
  },
  {
    no: "04",
    title: "Ship",
    desc: "Phased rollouts with feature flags, observability, and a real handover. We don't hand over and disappear — we operate alongside you.",
    duration: "Launch + ongoing",
    deliverables: ["Monitoring & alerting", "Runbooks", "Post-launch support"],
  },
];

const selectedClients = [
  "US storage real estate operator",
  "US co-manufacturer serving major retailers",
  "US real estate investor SaaS",
  "US multi-unit real estate investment platform",
  "Saudi fintech investment platform",
  "Cross-platform food tech startup",
  "Australian freight platform",
];

const stats = [
  { value: "11+", label: "Production systems shipped" },
  { value: "4", label: "Industries served" },
  { value: "5", label: "Core services" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative hero-glow text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />

        <Parallax speed={0.15} className="absolute top-20 right-20 hidden lg:block pointer-events-none">
          <div className="w-72 h-72 rounded-full bg-brand-500/10 blur-3xl float-slow" />
        </Parallax>
        <Parallax speed={-0.1} className="absolute bottom-10 left-20 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-400/5 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="max-w-4xl">
            <Reveal delay={0}>
              <span className="badge-dark mb-8">
                <span className="dot-pulse" />
                Boutique product engineering studio
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">
                Engineering teams that ship product.
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">
                Tackxel is a UK-based boutique product studio building mobile apps, web platforms, IoT systems, and AI-powered products for founders and product teams globally.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/contact" className="btn-brand">
                  Book a discovery call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies" className="btn-ghost-light">
                  See our work
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="mt-12 inline-flex items-center gap-1 px-2 py-2 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur">
                {[
                  { word: "Mobile" },
                  { word: "Web" },
                  { word: "IoT" },
                  { word: "AI" },
                ].map((item, i, arr) => (
                  <div key={item.word} className="flex items-center">
                    <span className="px-4 py-1.5 text-sm font-semibold text-white">{item.word}</span>
                    {i < arr.length - 1 && <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES — flat 5-card grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">What we build</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Five practices, one senior team
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Engage one practice or combine them. Most of our projects pull in two or three — mobile plus IoT, web plus AI, ERP plus mobile shop-floor apps.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <Link href={s.href} className="block bg-white p-7 hover:bg-neutral-50 transition-colors group h-full">
                  <div className="icon-wrap mb-5">
                    <s.Icon className="w-14 h-14" />
                  </div>
                  <h3 className="text-h3 text-neutral-950 mb-2">{s.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">{s.desc}</p>
                  <span className="text-sm font-medium text-neutral-900 group-hover:text-brand-600 transition-colors inline-flex items-center gap-1">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Who we partner with</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                Teams that need real builders, not an agency
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <Reveal key={a.label} delay={i * 100}>
                <div className="bg-white border border-neutral-200 rounded-lg p-8 card-lift group h-full">
                  <div className="icon-wrap mb-6">
                    <a.Icon className="w-14 h-14" />
                  </div>
                  <h3 className="text-h3 text-neutral-950 mb-3">{a.label}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-10 flex justify-center">
              <Link href="/contact" className="btn-primary">
                Talk to the founder
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Engagement models</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Two ways to engage
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Pick the shape that matches what you're building. Both put senior builders on your project from day one.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {engagements.map((e, i) => (
              <Reveal key={e.name} delay={i * 100}>
                <article className={`rounded-lg border overflow-hidden h-full card-lift flex flex-col ${
                  e.featured ? "border-neutral-950 bg-neutral-950 text-white shadow-card-dark" : "border-neutral-200 bg-white shadow-card"
                } relative`}>
                  {e.featured && (
                    <span className="absolute top-3 right-3 z-10 bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  )}
                  <e.Illus className="w-full h-44 flex-shrink-0" />
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className={`text-h3 mb-3 ${e.featured ? "text-white" : "text-neutral-950"}`}>{e.name}</h3>
                    <p className={`text-sm leading-relaxed mb-6 flex-1 ${e.featured ? "text-neutral-300" : "text-neutral-600"}`}>{e.desc}</p>
                    <Link href="/contact" className={e.featured ? "btn-brand w-full justify-center" : "btn-primary w-full justify-center"}>
                      {e.cta}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK - process timeline */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-16 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">How we work</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Discover. Design. Build. Ship.
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Every engagement follows the same four-phase model. Predictable cadence, written deliverables at each phase, no theatre.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <div className="hidden lg:block absolute top-[34px] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

            <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
              {processSteps.map((step, i) => (
                <Reveal key={step.no} delay={i * 120}>
                  <div className="relative group">
                    <div className="flex items-center gap-4 mb-5 relative">
                      <div className="relative z-10 w-[68px] h-[68px] rounded-full bg-white border-2 border-brand-200 flex items-center justify-center group-hover:border-brand-500 group-hover:scale-105 transition-all duration-300 shadow-sm">
                        <span className="font-mono text-sm font-bold text-brand-600">{step.no}</span>
                      </div>
                      {i < processSteps.length - 1 && (
                        <div className="hidden lg:block flex-1 h-px bg-gradient-to-r from-brand-300 to-brand-100 ml-2" />
                      )}
                    </div>

                    <div className="bg-white border border-neutral-200 rounded-lg p-6 card-lift">
                      <h3 className="text-h3 text-neutral-950 mb-1">{step.title}</h3>
                      <div className="text-xs font-mono text-brand-600 mb-3">{step.duration}</div>
                      <p className="text-sm text-neutral-600 leading-relaxed mb-5">{step.desc}</p>

                      <div className="pt-4 border-t border-neutral-100">
                        <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                          Deliverables
                        </div>
                        <ul className="space-y-1.5">
                          {step.deliverables.map((d) => (
                            <li key={d} className="text-xs text-neutral-700 flex items-start gap-2">
                              <span className="text-brand-500 mt-0.5">→</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Selected work</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Real systems, shipped
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Clients anonymized by request. Every project below is live in production — no decks, no concept art.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <Link href={c.href} className="block group">
                  <article className={`rounded-xl border overflow-hidden h-full card-lift flex flex-col ${
                    c.flagship ? "bg-neutral-950 border-neutral-800 text-white shadow-card-dark" : "bg-white border-neutral-200 shadow-card"
                  } relative`}>
                    {c.flagship && (
                      <span className="absolute top-3 right-3 z-10 bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Flagship
                      </span>
                    )}
                    <div className={`h-44 flex items-center justify-center ${
                      c.flagship ? "bg-gradient-to-br from-brand-600/30 via-brand-500/10 to-transparent border-b border-neutral-800" : "bg-gradient-to-br from-brand-50 to-white border-b border-neutral-100"
                    }`}>
                      <c.Icon className="w-20 h-20" />
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <div className={`text-xs uppercase tracking-wider font-bold mb-3 ${c.flagship ? "text-brand-300" : "text-brand-600"}`}>{c.industry}</div>
                      <h3 className={`text-h3 mb-3 leading-snug ${c.flagship ? "text-white" : "text-neutral-950"}`}>{c.title}</h3>
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

          <Reveal delay={300}>
            <div className="mt-10 flex justify-center">
              <Link href="/case-studies" className="btn-primary">
                All case studies
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SELECTED CLIENTS — anonymized strip */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-xs text-neutral-500 uppercase tracking-widest text-center mb-8 font-semibold">
              Selected clients
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 max-w-4xl mx-auto">
              {selectedClients.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-neutral-200 text-sm text-neutral-700 font-medium"
                >
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-10 bg-brand-500" />
                  <span className="text-eyebrow text-brand-600 uppercase font-bold tracking-widest">About</span>
                </div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-6">
                  A small senior team that builds, not pitches.
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed mb-5 max-w-xl">
                  Tackxel was founded in 2024 by Uzair Sufi after seven years leading mobile engineering at Clustox. We're a boutique studio — founder, product designer, developers, and marketing — built to give founders and product teams real engineering hands without agency overhead.
                </p>
                <p className="text-base text-neutral-600 leading-relaxed mb-8 max-w-xl">
                  No bench, no sales team, no juniors hidden behind senior interviews. The people you meet on the discovery call are the ones doing the work.
                </p>

                <Link href="/about" className="btn-primary">
                  More about us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={200} direction="left">
              <div className="grid sm:grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-neutral-950 text-white rounded-2xl p-6 card-lift">
                    <div className="font-display text-4xl font-bold tracking-display mb-2">{s.value}</div>
                    <div className="text-sm text-neutral-400 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-eyebrow text-brand-300 uppercase mb-4">Get in touch</div>
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">
              Ready to ship something? Book a discovery call.
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">
              A 30-minute call with the founder. No slide decks, no sales reps — just a senior engineer thinking through your problem with you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-brand">
                Book a discovery call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/case-studies" className="btn-ghost-light">
                See our work
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
