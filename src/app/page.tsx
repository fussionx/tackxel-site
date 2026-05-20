"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";
import {
  IconAI, IconMobileApp, IconWebApp, IconDesign, IconIoT, IconCustomSoftware,
  IconStartup, IconScaleup, IconEnterprise,
} from "@/components/Icons";
import {
  IllusFixedCost, IllusDedicatedTeam, IllusStaffAug,
} from "@/components/EngagementArt";

const services = [
  {
    Icon: IconAI,
    name: "AI Integration",
    href: "/services/ai-integration",
    desc: "Ship AI features that hold up in production. GPT, LLMs, RAG, agents, and the eval pipelines that keep quality measurable.",
    featured: true,
  },
  {
    Icon: IconMobileApp,
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    desc: "Native iOS, Android, React Native, and Flutter. App Store-ready pipelines. 90 days of post-launch support included.",
  },
  {
    Icon: IconWebApp,
    name: "Web Application Development",
    href: "/services/web-app-development",
    desc: "Web platforms on Next.js, React, Node, and Rails. Built for the team that owns it next year, not just today.",
  },
  {
    Icon: IconDesign,
    name: "Product Design",
    href: "/services/product-design",
    desc: "UX research, design systems, production UI, developer handover. Design that ships, not deck art.",
  },
  {
    Icon: IconIoT,
    name: "IoT & Connected Devices",
    href: "/services/iot-and-connected-devices",
    desc: "BLE, NFC, wearables, smart hardware. Plus the mobile companion app and AWS telemetry. One team, end to end.",
  },
  {
    Icon: IconCustomSoftware,
    name: "Enterprise Platforms & ERP",
    href: "/services/enterprise-platforms-and-erp",
    desc: "Custom ERPs, role-based portals, internal SaaS, EDI integrations. Built end to end on AWS for operations-grade reliability.",
  },
];

const audiences = [
  {
    Icon: IconStartup,
    label: "Founders shipping v1",
    desc: "From idea to live product in weeks, not quarters. We scope discovery sharply, ship a focused MVP, and instrument it so the next decision runs on data.",
  },
  {
    Icon: IconScaleup,
    label: "Scaleups adding capacity",
    desc: "Senior engineering and product hands that drop into your stack, codebase, and sprint cadence. No agency middle layer, no junior bench &mdash; just builders who match your bar.",
  },
  {
    Icon: IconEnterprise,
    label: "Ops teams outgrowing spreadsheets",
    desc: "Custom platforms, ERPs, and internal tools for businesses that have outgrown SaaS templates. We build it, document it, hand over clean.",
  },
];

const engagements = [
  {
    name: "Fixed-Cost Projects",
    desc: "Locked scope, locked price, locked timeline. Best when requirements are clear and you need a launch on a date.",
    cta: "Scope a project",
    Illus: IllusFixedCost,
  },
  {
    name: "Dedicated Teams",
    desc: "A small senior pod shipping against your roadmap. Predictable monthly capacity. Best for ongoing product development.",
    cta: "Build your team",
    featured: true,
    Illus: IllusDedicatedTeam,
  },
  {
    name: "Staff Augmentation",
    desc: "Senior engineers embedded directly in your team. Skill gaps filled fast, no agency middle layer, no long onboarding.",
    cta: "Augment your team",
    Illus: IllusStaffAug,
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

export default function HomePage() {
  return (
    <>
      {/* HERO — dark, AI/tech feel, two-column with floating visual */}
      <section className="relative hero-glow text-white pt-32 pb-20 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />

        <Parallax speed={0.15} className="absolute top-20 -right-10 hidden lg:block pointer-events-none">
          <div className="w-[28rem] h-[28rem] rounded-full bg-brand-500/15 blur-3xl float-slow" />
        </Parallax>
        <Parallax speed={-0.1} className="absolute bottom-10 -left-20 hidden lg:block pointer-events-none">
          <div className="w-[32rem] h-[32rem] rounded-full bg-brand-400/8 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center lg:min-h-[640px]">
            {/* LEFT — text */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="badge-dark mb-7 inline-flex"
              >
                <span className="dot-pulse" />
                AI-led product engineering · UK
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight"
              >
                Engineering teams that ship product.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed"
              >
                We engineer AI integrations, mobile apps, web platforms, IoT systems, and custom ERPs &mdash; for founders and product teams who need senior hands, fast.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-3 mt-8"
              >
                <Link href="/contact" className="btn-brand">
                  Book a discovery call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies" className="btn-ghost-light">
                  See our work
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-neutral-500 font-mono uppercase tracking-widest"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-400" />
                  11+ production systems shipped
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-400" />
                  Founded 2024
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-400" />
                  UK · Remote-first
                </span>
              </motion.div>
            </div>

            {/* RIGHT — visual element with subtle floating motion */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-2xl overflow-hidden border border-brand-500/25 shadow-card-dark"
              >
                <Image
                  src="/images/services/ai.jpg"
                  alt="AI-led product engineering visualisation"
                  width={1200}
                  height={800}
                  className="w-full h-auto block"
                  priority
                />
              </motion.div>

              {/* Floating accent card — Lead service */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-5 -right-5"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-neutral-950/95 backdrop-blur border border-brand-500/30 rounded-xl px-5 py-3 shadow-card-dark"
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-brand-300 font-semibold mb-0.5">Lead service</div>
                  <div className="text-sm font-semibold text-white">AI Integration</div>
                </motion.div>
              </motion.div>

              {/* Floating accent card — Stack */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-5 -left-5"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="bg-neutral-950/95 backdrop-blur border border-brand-500/30 rounded-xl px-5 py-3 shadow-card-dark"
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-brand-300 font-semibold mb-0.5">Stack</div>
                  <div className="text-sm font-semibold text-white">Anthropic · OpenAI · Open</div>
                </motion.div>
              </motion.div>

              {/* Subtle glow behind */}
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-brand-500/20 via-brand-500/5 to-transparent blur-3xl -z-10 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT — moved up to section #2 right after hero */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200 relative overflow-hidden">
        <Parallax speed={0.08} className="absolute -top-20 -right-20 hidden lg:block pointer-events-none">
          <div className="w-[28rem] h-[28rem] rounded-full bg-brand-500/8 blur-3xl" />
        </Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="relative">
                {/* PLACEHOLDER - swap with real team photo at /public/images/team/ */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { src: "/images/team/designer.jpg", role: "Product Designer" },
                    { src: "/images/team/dev-1.jpg",    role: "Senior Engineer" },
                    { src: "/images/team/dev-2.jpg",    role: "Engineer" },
                    { src: "/images/team/marketing.jpg", role: "Growth" },
                  ].map((m) => (
                    <div key={m.role} className="relative rounded-xl overflow-hidden border border-neutral-200 aspect-square card-lift">
                      <Image
                        src={m.src}
                        alt={`${m.role} placeholder`}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover block"
                      />
                    </div>
                  ))}
                </div>
                {/* Subtle glow behind */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-500/12 to-transparent blur-3xl -z-10 pointer-events-none" />
              </div>
            </Reveal>

            <Reveal delay={120} direction="left">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-10 bg-brand-500" />
                  <span className="text-eyebrow text-brand-600 uppercase font-bold tracking-widest">About Tackxel</span>
                </div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-6 leading-tight max-w-xl">
                  Small senior team. Builds, not pitches.
                </h2>
                <p className="text-base lg:text-lg text-neutral-600 leading-relaxed mb-5 max-w-xl">
                  Tackxel is a UK-registered boutique product engineering studio, founded 2024. Designer, engineers, growth &mdash; senior across the board. Built to give founders and product teams real engineering hands without agency overhead.
                </p>
                <p className="text-base text-neutral-600 leading-relaxed mb-8 max-w-xl">
                  No bench, no sales team, no juniors hidden behind senior interviews. The people you meet on the discovery call are the ones doing the work.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-md">
                  <div className="bg-neutral-950 text-white rounded-xl p-5 card-lift">
                    <div className="font-display text-4xl font-bold tracking-display mb-1.5">
                      <Counter to={11} suffix="+" />
                    </div>
                    <div className="text-xs text-neutral-400 leading-snug">Production systems shipped</div>
                  </div>
                  <div className="bg-neutral-950 text-white rounded-xl p-5 card-lift">
                    <div className="font-display text-4xl font-bold tracking-display mb-1.5">
                      <Counter to={6} />
                    </div>
                    <div className="text-xs text-neutral-400 leading-snug">Core services</div>
                  </div>
                </div>

                <Link href="/about" className="btn-primary">
                  More about us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES — 6-card grid, AI pinned first with "Most in demand" tag */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">What we build</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Built end to end.
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Six services. One senior team. Pick what you need — we&apos;ll scope it honestly and ship it.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <Link href={s.href} className="relative block bg-white border border-neutral-200 rounded-lg p-7 hover:border-neutral-300 transition-colors group h-full card-lift">
                  {s.featured && (
                    <span className="absolute top-3 right-3 bg-brand-100 text-brand-700 text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-1 rounded">
                      Most in demand
                    </span>
                  )}
                  <div className="icon-wrap mb-5">
                    <s.Icon className="w-14 h-14" />
                  </div>
                  <h3 className="text-h3 text-neutral-950 mb-2">{s.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">{s.desc}</p>
                  <span className="text-sm font-medium text-neutral-900 group-hover:text-brand-600 transition-colors inline-flex items-center gap-1">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
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
                Real builders. Not an agency.
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
                  Three ways to engage.
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Pick the shape that fits the project. All three put senior builders on your work on day one. No agency middle layer. No junior bench.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
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
                Same four-phase model on every engagement. Predictable cadence, written deliverables at each gate, no theatre.
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
                  Real systems. Shipped.
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

      {/* FINAL CTA */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-eyebrow text-brand-300 uppercase mb-4">Get in touch</div>
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">
              Got something to ship? Let&apos;s scope it.
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">
              30 minutes with the founder. No deck, no sales rep. Just a senior engineer thinking through your problem with you.
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
