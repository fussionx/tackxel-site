"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Sparkles,
  Lightbulb, Hammer, TrendingUp, Check, Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";
import {
  IconAI, IconMobileApp, IconWebApp, IconDesign, IconIoT,
} from "@/components/Icons";

const capabilities = [
  {
    no: "01",
    title: "Discover",
    tagline: "The thinking before the build.",
    desc: "Describe your problem. We come back with research, recommendations, and a clear scope. Ready to build from.",
    Icon: Lightbulb,
    tags: ["Market analysis", "Product strategy", "Tech recommendations", "Scope", "Risk assessment"],
  },
  {
    no: "02",
    title: "Build",
    tagline: "Production-grade from day one.",
    desc: "Senior engineers ship AI features, mobile apps, web platforms, and full products. Real code, real deployment, real users.",
    Icon: Hammer,
    tags: ["AI integration", "Mobile apps", "Web platforms", "APIs", "Cloud"],
  },
  {
    no: "03",
    title: "Scale",
    tagline: "Your team, augmented.",
    desc: "Need ongoing capacity? Embed our senior engineers in your team. Pre-vetted, ready in 2 weeks.",
    Icon: TrendingUp,
    tags: ["Staff augmentation", "Dedicated teams", "Fractional CTO", "Code review", "Architecture"],
  },
];

type StartingPath = "I have an idea" | "I'm ready to build" | "I need to scale";

const startingPaths: Record<StartingPath, { no: string; title: string; desc: string }[]> = {
  "I have an idea": [
    { no: "01", title: "Discovery workshop", desc: "Half-day session. We map the problem, the users, and the unknowns before anyone writes a line of code." },
    { no: "02", title: "Written scope", desc: "Technical recommendations, delivery plan, and honest cost ranges. Yours to keep, even if we don't build it together." },
    { no: "03", title: "MVP in 8-14 weeks", desc: "Two-week sprints. Weekly demos. Production-grade from sprint one, not just a clickable prototype." },
    { no: "04", title: "Launch and measure", desc: "Phased rollout, observability, and a 90-day support window. The first decision after launch runs on data, not vibes." },
  ],
  "I'm ready to build": [
    { no: "01", title: "Technical scoping call", desc: "Architecture, stack, integration risks, hosting decisions. The hard calls made up front, in writing." },
    { no: "02", title: "Sprint 0", desc: "Environments, CI/CD, observability, and the boring engineering work that lets every sprint after this one ship fast." },
    { no: "03", title: "Build sprints", desc: "Two-week cadence. Shared dashboards. Demo every Friday. Written status every Monday. No theatre, just shipped code." },
    { no: "04", title: "Phased launch", desc: "Feature flags, runbooks, and a real handover. We operate alongside you through the first quarter, not just to launch day." },
  ],
  "I need to scale": [
    { no: "01", title: "Architecture audit", desc: "Current system, real bottlenecks, the parts that will break at 10x. Written assessment in five working days." },
    { no: "02", title: "Capacity plan", desc: "Hire vs augment vs both. Where to spend headcount, where to spend our senior engineers, and what to leave alone." },
    { no: "03", title: "Embed in 2 weeks", desc: "Pre-vetted senior engineers on your standup, your codebase, your sprint cadence. Productive in week two." },
    { no: "04", title: "Hand back when stable", desc: "Knowledge transfer documented. Notice-period flexibility. We don't outstay our welcome — that's the point." },
  ],
};

const otherServices = [
  {
    Icon: IconMobileApp,
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    desc: "Native iOS, Android, React Native, and Flutter. App Store-ready pipelines. 90 days of post-launch support.",
  },
  {
    Icon: IconWebApp,
    name: "Web & Product Engineering",
    href: "/services/web-app-development",
    desc: "Production web platforms on Next.js, React, Node, and Rails. Built for the team that owns it next year.",
  },
  {
    Icon: IconDesign,
    name: "Product Design",
    href: "/services/product-design",
    desc: "UX research, design systems, production UI, developer handover. Design that ships, not deck art.",
  },
  {
    Icon: Users,
    name: "Staff Augmentation",
    href: "/services/staff-augmentation",
    desc: "Senior engineers embedded in your team. Match in days, not months. No agency middle layer.",
  },
  {
    Icon: IconIoT,
    name: "IoT & Connected Devices",
    href: "/services/iot-and-connected-devices",
    desc: "BLE, NFC, wearables, smart hardware. Plus the mobile companion app and AWS telemetry. One team.",
  },
];

const caseStudyTiles = [
  { title: "Co-manufacturer ERP", subtitle: "Manufacturing · ERP · Flagship", href: "/case-studies/co-manufacturer-erp", img: "/images/case-studies/erp.jpg" },
  { title: "Mobile + IoT for a US storage operator", subtitle: "Real Estate · IoT", href: "/case-studies/storage-iot", img: "/images/case-studies/storage-iot.jpg" },
  { title: "Investor SaaS for real estate agents", subtitle: "PropTech · SaaS", href: "/case-studies/investor-saas", img: "/images/case-studies/investor-saas.jpg" },
  { title: "Real-estate syndication marketplace", subtitle: "PropTech · Marketplace", href: "/case-studies/real-estate-syndication", img: "/images/case-studies/syndication.jpg" },
];

const techLogos = [
  "React", "Next.js", "React Native", "Flutter", "AWS",
  "OpenAI", "Anthropic", "LangChain", "Stripe", "Firebase",
];

const testimonials = [
  { industry: "CTO at US fintech", quote: "Working on it — real testimonials coming soon." },
  { industry: "Founder at US proptech", quote: "Real quotes after the next launch ships." },
  { industry: "Product lead at UK SaaS", quote: "Coming soon. We'd rather show real ones than invented ones." },
  { industry: "Operations lead at US co-manufacturer", quote: "Soon. Confidentiality NDAs lift as projects ship publicly." },
  { industry: "CTO at US storage operator", quote: "Working on it — real testimonials coming soon." },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<StartingPath>("I have an idea");

  return (
    <>
      {/* HERO — warm light gradient */}
      <section className="relative hero-warm pt-32 pb-24 lg:pb-32 overflow-hidden">
        <Parallax speed={0.08} className="absolute top-20 right-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[26rem] h-[26rem] rounded-full bg-orange-200/40 blur-3xl float-slow" />
        </Parallax>
        <Parallax speed={-0.06} className="absolute bottom-0 left-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[30rem] h-[30rem] rounded-full bg-brand-200/40 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-neutral-200 shadow-subtle mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-700">
                <Counter to={11} suffix="+" /> AI &amp; product launches shipped
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight leading-[1.05]"
            >
              Most agencies help you ship <span className="text-brand-600">faster</span>.
              <br />
              We help you <span className="text-brand-600">decide what to ship</span>.
              <br />
              And <span className="text-brand-600">win</span> after you ship it.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg lg:text-xl text-neutral-700 mt-8 max-w-2xl mx-auto leading-relaxed"
            >
              Tackxel is a UK AI-first product studio. From the first prompt to live production &mdash; research, design, build, ship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3 mt-10 justify-center"
            >
              <Link href="/contact" className="btn-brand">
                Book a call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                See our work
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAPABILITY — 01 / 02 / 03 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">How we work</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Three things we do. <span className="text-neutral-500">In order.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {capabilities.map((c, i) => (
              <Reveal key={c.no} delay={i * 100}>
                <article className="relative bg-neutral-50 border border-neutral-200 rounded-3xl p-8 lg:p-10 h-full card-lift overflow-hidden">
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-7xl lg:text-8xl font-bold text-brand-600 tracking-display leading-none mb-6"
                  >
                    {c.no}
                  </motion.div>

                  <div className="flex items-center gap-3 mb-3">
                    <c.Icon className="w-5 h-5 text-neutral-700" />
                    <h3 className="font-display text-h3 text-neutral-950">{c.title}</h3>
                  </div>
                  <p className="text-base font-semibold text-neutral-800 mb-4">{c.tagline}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-7">{c.desc}</p>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-200">
                    {c.tags.map((t) => (
                      <span key={t} className="inline-flex items-center px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-[11px] font-medium text-neutral-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STARTING POINT — tabbed */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Pick your starting point</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Where are you starting from?
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mt-4 max-w-xl">
                Different on-ramps, same senior team. Pick the path that fits your week.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="inline-flex p-1.5 rounded-full bg-white border border-neutral-200 shadow-subtle mb-10 flex-wrap">
              {(Object.keys(startingPaths) as StartingPath[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-5 py-2.5 text-sm font-semibold rounded-full transition-colors ${
                    activeTab === tab ? "text-white" : "text-neutral-700 hover:text-neutral-950"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.span
                      layoutId="active-tab"
                      className="absolute inset-0 bg-neutral-950 rounded-full"
                      transition={{ type: "spring", duration: 0.4, bounce: 0.18 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
            >
              {startingPaths[activeTab].map((step) => (
                <div key={step.no} className="bg-white border border-neutral-200 rounded-2xl p-7 card-lift h-full">
                  <div className="text-xs font-mono text-brand-600 font-bold mb-3">{step.no}</div>
                  <h3 className="text-base font-semibold text-neutral-950 mb-2 leading-snug">{step.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SERVICES — AI featured + 5-card grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">What we build</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                  Six services. <span className="text-neutral-500">One senior team.</span>
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Pick one or combine them. Most projects pull in two or three &mdash; AI plus mobile, web plus design, ERP plus a shop-floor app.
              </p>
            </div>
          </Reveal>

          {/* Featured AI card */}
          <Reveal>
            <Link href="/services/ai-integration" className="group block mb-5 lg:mb-6">
              <article className="relative bg-gradient-to-br from-orange-50 via-white to-brand-50 border border-neutral-200 rounded-3xl overflow-hidden card-lift">
                <span className="absolute top-5 right-5 z-10 bg-neutral-950 text-white text-[10px] font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full">
                  Most in demand
                </span>
                <div className="grid lg:grid-cols-[1.4fr_1fr] gap-0 items-stretch">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shadow-subtle">
                        <IconAI className="w-7 h-7" />
                      </div>
                      <h3 className="font-display text-h3 text-neutral-950">AI Integration</h3>
                    </div>
                    <p className="text-base lg:text-lg text-neutral-700 leading-relaxed mb-6 max-w-xl">
                      Ship AI features that hold up in production. GPT, LLMs, RAG, agents, and the eval pipelines that keep quality measurable.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-7">
                      {["GPT", "LLMs", "RAG", "Agents", "Eval pipelines"].map((t) => (
                        <span key={t} className="inline-flex items-center px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-[11px] font-medium text-neutral-700">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-950 group-hover:text-brand-600 transition-colors">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                  <div className="hidden lg:block relative border-l border-neutral-200/50">
                    <Image
                      src="/images/services/ai.jpg"
                      alt="AI integration visualisation"
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </article>
            </Link>
          </Reveal>

          {/* 5 other services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {otherServices.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <Link href={s.href} className="group block bg-white border border-neutral-200 rounded-3xl p-7 card-lift h-full">
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center mb-5">
                    <s.Icon className="w-7 h-7 text-neutral-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-950 mb-2 leading-snug">{s.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">{s.desc}</p>
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

      {/* CASE STUDIES STRIP */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Selected work</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                  5+ shipped products.
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Mobile, web, AI, IoT, enterprise. Clients anonymised by request. Every project is live in production.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {caseStudyTiles.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <Link href={c.href} className="group block">
                  <article className="bg-neutral-950 rounded-2xl overflow-hidden h-full card-lift">
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={c.img}
                        alt={`${c.title} case study`}
                        width={1200}
                        height={800}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-brand-300 font-semibold mb-2">{c.subtitle}</div>
                      <h3 className="text-base font-semibold text-white leading-snug">{c.title}</h3>
                      <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-300 group-hover:text-white transition-colors">
                        Read case
                        <ArrowUpRight className="w-3.5 h-3.5" />
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

      {/* TECH STACK */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">The stack</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Your stack. <span className="text-neutral-500">Our expertise.</span>
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mt-4 max-w-xl">
                We pick the right tool for the job, not the resume. These are the ones we ship most.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
              {techLogos.map((logo) => (
                <div
                  key={logo}
                  className="group bg-white border border-neutral-200 rounded-2xl py-7 px-4 text-center card-lift transition-all"
                >
                  <span className="font-display text-lg font-bold text-neutral-400 group-hover:text-brand-600 transition-colors tracking-tight">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIAL MARQUEE */}
      <section className="py-20 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <Reveal>
            <div className="text-eyebrow text-brand-600 uppercase mb-4">What clients say</div>
            <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight max-w-2xl">
              Quotes coming soon. <span className="text-neutral-500">Until then &mdash; honesty.</span>
            </h2>
          </Reveal>
        </div>

        <div className="marquee-pause relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex gap-5 animate-marquee w-max">
            {[...testimonials, ...testimonials].map((t, i) => (
              <article
                key={`${t.industry}-${i}`}
                className="flex-shrink-0 w-[320px] bg-neutral-50 border border-neutral-200 rounded-2xl p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-100 to-orange-100 border border-neutral-200 flex items-center justify-center">
                    <span className="text-xs font-mono font-bold text-brand-700">···</span>
                  </div>
                  <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{t.industry}</div>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — dark with warm accent */}
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
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">Ready when you are</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-h2 lg:text-h1 text-white tracking-display-tight leading-tight">
                The work is only as good as the team behind it.
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
        </div>
      </section>
    </>
  );
}
