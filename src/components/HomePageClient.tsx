"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Sparkles, Play, X,
  Lightbulb, Hammer, TrendingUp, Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";
import CaseStudyVisual from "@/components/CaseStudyVisual";
import CursorGlow from "@/components/CursorGlow";
import AIRobot from "@/components/AIRobot";
import { featuredCaseStudies } from "@/lib/case-studies";
import BlogVisual from "@/components/BlogVisual";
import BlogImage from "@/components/BlogImage";
import type { PostMeta } from "@/lib/blog-types";
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

const techLogos = [
  "React", "Next.js", "React Native", "Flutter", "AWS",
  "OpenAI", "Anthropic", "LangChain", "Stripe", "Firebase",
];

// VIDEO PLACEHOLDER — user will provide MP4 files later.
// Drop files at /public/videos/ and update `src` below; the lightbox player is wired.
const videoTestimonials = [
  {
    name: "Client Name",
    role: "Title at Company",
    quote: "A short, punchy line from the founder about working with Tackxel.",
    src: "/videos/testimonial-1.mp4",
    accent: "from-brand-500/30 via-brand-400/15 to-orange-400/25",
  },
  {
    name: "Client Name",
    role: "Title at Company",
    quote: "What changed for their team after we shipped — in their words.",
    src: "/videos/testimonial-2.mp4",
    accent: "from-orange-400/30 via-rose-400/15 to-brand-500/25",
  },
  {
    name: "Client Name",
    role: "Title at Company",
    quote: "Why they'd work with the team again on the next build.",
    src: "/videos/testimonial-3.mp4",
    accent: "from-emerald-400/30 via-teal-400/15 to-brand-500/25",
  },
];

export default function HomePage({ latestPosts }: { latestPosts: PostMeta[] }) {
  const [activeTab, setActiveTab] = useState<StartingPath>("I have an idea");
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  // Close the video lightbox on Escape.
  useEffect(() => {
    if (activeVideo === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiveVideo(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeVideo]);

  return (
    <>
      {/* HERO — warm light gradient */}
      <section className="relative hero-warm pt-32 pb-24 lg:pb-32 overflow-hidden">
        <CursorGlow />
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
                  <div className="relative flex items-center justify-center overflow-hidden border-t lg:border-t-0 lg:border-l border-neutral-200/50 bg-gradient-to-br from-brand-50 via-white to-orange-50 p-8 min-h-[240px]">
                    <div className="absolute inset-0 grid-bg-light opacity-40 pointer-events-none" />
                    <AIRobot />
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
                  11 shipped products.
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                AI, mobile, web, IoT, fintech, enterprise. Real names, real systems &mdash; every project below is live in production.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {featuredCaseStudies.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <Link href={`/case-studies/${c.slug}`} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white card-lift">
                    <div className="relative aspect-[3/2]">
                      {c.heroImage ? (
                        <Image src={c.heroImage} alt={`${c.name} live site screenshot`} width={1280} height={960} loading="lazy" className="w-full h-full object-cover object-top" />
                      ) : (
                        <CaseStudyVisual monogram={c.monogram} accent={c.accent} name={c.name} />
                      )}
                      {c.liveUrl && (
                        <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-neutral-950/85 px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-widest text-white backdrop-blur">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Live
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-brand-600 font-semibold mb-2">{c.industry}</div>
                      <h3 className="text-base font-semibold text-neutral-950 leading-snug">{c.name}</h3>
                      <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-neutral-900 group-hover:text-brand-600 transition-colors">
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
                View all 11 case studies
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

      {/* VIDEO TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Testimonials</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Hear it from our clients.
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mt-4 max-w-xl">
                Real video stories from real founders.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {videoTestimonials.map((v, i) => (
              <Reveal key={i} delay={i * 90}>
                {/* VIDEO PLACEHOLDER — gradient thumbnail until an MP4 is dropped in /public/videos/ */}
                <button
                  onClick={() => setActiveVideo(i)}
                  className="group block w-full text-left overflow-hidden rounded-3xl border border-neutral-200 bg-white card-lift"
                  aria-label={`Play video testimonial from ${v.name}`}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${v.accent}`} />
                    <div className="absolute -top-1/4 -right-1/4 w-2/3 h-2/3 rounded-full bg-white/40 blur-3xl" />
                    <div className="absolute inset-0 grid-bg-light opacity-50" />
                    <div className="relative z-10 flex h-full w-full items-center justify-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/85 shadow-elevated backdrop-blur transition-transform duration-300 group-hover:scale-110">
                        <Play className="ml-0.5 h-6 w-6 text-brand-600" fill="currentColor" />
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-neutral-700 leading-relaxed mb-5">&ldquo;{v.quote}&rdquo;</p>
                    <div className="flex items-center gap-3 pt-5 border-t border-neutral-100">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-100 to-orange-100 border border-neutral-200 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-mono font-bold text-brand-700">{v.name.split(" ").map((w) => w[0]).join("")}</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-950 leading-tight">{v.name}</div>
                        <div className="text-xs text-neutral-500 mt-0.5">{v.role}</div>
                      </div>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO LIGHTBOX — plays the selected testimonial. Wired for MP4s in /public/videos/ */}
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/80 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 inline-flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white transition-colors"
                aria-label="Close video"
              >
                Close
                <X className="w-5 h-5" />
              </button>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-card-dark">
                <video
                  key={activeVideo}
                  src={videoTestimonials[activeVideo].src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full aspect-video bg-black"
                />
              </div>
              <div className="mt-4 text-center">
                <div className="text-sm font-semibold text-white">{videoTestimonials[activeVideo].name}</div>
                <div className="text-xs text-neutral-400 mt-0.5">{videoTestimonials[activeVideo].role}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LATEST FROM THE BLOG */}
      {latestPosts.length > 0 && (
        <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal>
              <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
                <div>
                  <div className="text-eyebrow text-brand-600 uppercase mb-4">From the blog</div>
                  <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                    Latest from the blog
                  </h2>
                </div>
                <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                  Practical lessons on AI, product engineering, and shipping software that works.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {latestPosts.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <Link href={`/blog/${p.slug}`} className="group block h-full">
                    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white card-lift">
                      <div className="relative aspect-[16/10]">
                        {p.image ? (
                          <BlogImage src={p.image} alt={p.title} />
                        ) : (
                          <BlogVisual accent={p.accent} category={p.category} />
                        )}
                        <span className="absolute top-3 left-3 z-10 inline-flex items-center rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-widest text-brand-700 backdrop-blur">
                          {p.category}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-display text-h3 text-neutral-950 leading-snug mb-2 group-hover:text-brand-600 transition-colors">{p.title}</h3>
                        <p className="text-sm text-neutral-600 leading-relaxed flex-1">{p.excerpt}</p>
                        <div className="mt-4 text-xs text-neutral-500">{p.readTime}</div>
                      </div>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <div className="mt-10 flex justify-center">
                <Link href="/blog" className="btn-primary">
                  View all posts
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

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
