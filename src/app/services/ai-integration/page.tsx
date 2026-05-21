"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, ExternalLink, Plus, Minus, Check,
  Zap, ShieldCheck, Bot, Sparkles, MessageSquare, Database, FileText,
  Building2, TrendingUp,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";
import AIVisual from "@/components/AIVisual";
import CaseStudyVisual from "@/components/CaseStudyVisual";
import { getCaseStudy } from "@/lib/case-studies";

const lexa = getCaseStudy("lexa")!;
const myFriend = getCaseStudy("my-friend")!;

const pillars = [
  {
    Icon: Zap,
    title: "Fast",
    desc: "Production-ready in weeks, not quarters. Senior engineers ship AI features without the typical research-paper detour.",
  },
  {
    Icon: ShieldCheck,
    title: "Trusted",
    desc: "Built-in guardrails for prompt injection, hallucination control, cost monitoring, and compliance. Every AI feature ships with safety nets.",
  },
  {
    Icon: Bot,
    title: "Autonomous",
    desc: "AI agents that take action, not just chat. Workflow automation, RAG systems, autonomous decision-making — built for real ops.",
  },
];

const rows = [
  {
    title: "Built for your product, whatever it does",
    desc: "We learn your codebase, your data, your customers. AI features that feel native to your product — not a chatbot bolted on.",
    variant: "neural" as const,
    accent: "from-brand-100/70 via-white to-sky-50",
    label: "Native to your product",
    imageLeft: true,
  },
  {
    title: "Your AI essentials, built by senior engineers",
    desc: "LLM integration, RAG systems, conversational interfaces, AI agents, document intelligence. The capabilities your buyers want — delivered by people who've shipped them before.",
    variant: "capabilities" as const,
    accent: "from-orange-50 via-white to-brand-50",
    label: "Core capabilities",
    imageLeft: false,
  },
  {
    title: "Stay true to your brand and your stack",
    desc: "We work in your stack — Next.js, React Native, Python, Node. With your models — OpenAI, Anthropic, Google, open-source. No forced platform lock-in.",
    variant: "models" as const,
    accent: "from-violet-100/60 via-white to-brand-50",
    label: "Your models, your stack",
    imageLeft: true,
  },
  {
    title: "Scale without rebuilding",
    desc: "Start with one AI feature. Add more as you grow. Built on modular architecture so adding capability #2 doesn't mean rewriting #1.",
    variant: "modular" as const,
    accent: "from-emerald-50 via-white to-brand-50",
    label: "Modular by design",
    imageLeft: false,
  },
];

const tabs = [
  {
    key: "llm",
    label: "LLM Integration",
    Icon: Sparkles,
    variant: "neural" as const,
    accent: "from-brand-100/70 via-white to-sky-50",
    desc: "We wire large language models into your product the right way — structured prompts, output validation, streaming, retries, and cost controls. Not a raw API call wrapped in hope.",
    example: "We built Lexa on a tuned LLM pipeline — Pakistan's first AI legal chatbot, live at lexa.lawyer.",
    useCases: ["Drafting & summarisation", "Classification & routing", "Structured data extraction", "Natural-language search"],
  },
  {
    key: "rag",
    label: "RAG Systems",
    Icon: Database,
    variant: "rag" as const,
    accent: "from-emerald-50 via-white to-brand-50",
    desc: "Retrieval-augmented generation so answers come from your data, not the model's imagination. Embeddings, vector search, chunking strategy, and grounding that keeps responses traceable.",
    example: "Lexa's answers are grounded in a real legal corpus via RAG — so guidance traces back to actual law.",
    useCases: ["Knowledge-base assistants", "Document Q&A", "Support deflection", "Grounded, cited answers"],
  },
  {
    key: "agents",
    label: "AI Agents",
    Icon: Bot,
    variant: "workflow" as const,
    accent: "from-orange-50 via-white to-brand-50",
    desc: "Agents that take action — call tools, hit your APIs, run multi-step workflows, and make decisions inside guardrails. Built on the same production patterns as our shipped LLM work.",
    example: "The guardrailed, tool-using patterns behind our production assistants — applied to your operations.",
    useCases: ["Workflow automation", "Tool & API orchestration", "Multi-step task agents", "Autonomous decisioning"],
  },
  {
    key: "conversational",
    label: "Conversational AI",
    Icon: MessageSquare,
    variant: "chat" as const,
    accent: "from-brand-50 via-white to-orange-50",
    desc: "Chat and voice interfaces that feel human and stay on-brand — context handling, memory, safe-refusal behaviour, and a UI your users actually want to talk to.",
    example: "Lexa (legal) and My Friend (emotional companion) are both conversational AI built to feel present, not robotic.",
    useCases: ["Customer-facing assistants", "In-app copilots", "Onboarding & guidance", "Companion experiences"],
  },
  {
    key: "document",
    label: "Document Intelligence",
    Icon: FileText,
    variant: "document" as const,
    accent: "from-sky-50 via-white to-brand-50",
    desc: "Turn unstructured documents into structured data — extraction, classification, and validation across PDFs, contracts, forms, and scans, with confidence scoring you can act on.",
    example: "Built on the same extraction and validation patterns we ship for production LLM features.",
    useCases: ["Invoice & contract parsing", "Form data capture", "Compliance review", "Bulk classification"],
  },
];

const techStack = [
  { name: "OpenAI", sub: "GPT-4/5" },
  { name: "Anthropic", sub: "Claude" },
  { name: "Google", sub: "Gemini" },
  { name: "Meta", sub: "Llama" },
  { name: "Mistral", sub: "Open models" },
  { name: "LangChain", sub: "Orchestration" },
  { name: "LlamaIndex", sub: "Data framework" },
  { name: "Pinecone", sub: "Vector DB" },
  { name: "Weaviate", sub: "Vector DB" },
  { name: "Supabase", sub: "pgvector" },
  { name: "Next.js", sub: "App layer" },
  { name: "Python", sub: "ML & backends" },
];

const audience = [
  {
    Icon: Sparkles,
    title: "Founders adding AI features",
    desc: "You have a product and a roadmap. You need AI features that ship and hold up in production — fast.",
  },
  {
    Icon: Building2,
    title: "Companies who can't hire for it",
    desc: "You need senior AI integration but can't justify a full-time hire or wait six months to land one.",
  },
  {
    Icon: ShieldCheck,
    title: "Teams who want the real thing",
    desc: "You want production-grade AI with guardrails and observability — not a weekend demo that breaks under load.",
  },
];

const faqs = [
  {
    q: "What is AI Integration?",
    a: "Building AI capabilities directly into your product — LLMs, RAG, agents, conversational and document intelligence — wired into your codebase, data, and workflows so they run in production with real users, not just in a demo.",
  },
  {
    q: "How is this different from using ChatGPT?",
    a: "ChatGPT is a general assistant in a separate tab. We build AI into your product: grounded in your data, scoped to your use case, with validation, guardrails, cost controls, and a UX that fits your app. It's the difference between a tool your team opens and a feature your users rely on.",
  },
  {
    q: "How fast can you ship?",
    a: "Most first AI features go to production in weeks, not quarters. We're senior engineers who've shipped this before, so we skip the research-paper detour and build the version that runs.",
  },
  {
    q: "Do you only use OpenAI?",
    a: "No. We work with OpenAI, Anthropic, Google, Mistral, and open-source models like Llama — and pick per use case on quality, latency, cost, and data requirements. No forced lock-in to one provider.",
  },
  {
    q: "How do you handle hallucinations and accuracy?",
    a: "Grounding (RAG) so answers come from your data, output validation and structured formats, evaluation pipelines to measure quality, and safe-refusal behaviour so the system declines rather than guesses. Accuracy is engineered and measured, not assumed.",
  },
  {
    q: "Who owns the IP and the prompts?",
    a: "You do. The code, the prompts, the pipelines, and the data are yours. We hand over a system your team can own and maintain — no black boxes, no dependency on us to keep the lights on.",
  },
  {
    q: "Do you do staff augmentation for AI?",
    a: "Yes. We can embed senior AI engineers directly into your team on your sprint cadence — or deliver a feature end to end. Whichever fits how you work.",
  },
  {
    q: "What does it cost?",
    a: "It depends on scope, but we scope honestly up front with clear ranges before any commitment. A discovery call gets you a written assessment and estimate — no obligation, no sales theatre.",
  },
];

export default function AiIntegrationPage() {
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tab = tabs.find((t) => t.key === activeTab)!;

  return (
    <>
      {/* HERO — warm, animated chat mockup */}
      <section className="relative hero-warm pt-32 pb-20 lg:pb-28 overflow-hidden">
        <Parallax speed={0.08} className="absolute top-24 right-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[24rem] h-[24rem] rounded-full bg-orange-200/40 blur-3xl float-slow" />
        </Parallax>
        <Parallax speed={-0.06} className="absolute bottom-0 left-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[26rem] h-[26rem] rounded-full bg-brand-200/40 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="badge mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                  AI Integration
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight leading-[1.05]">
                  AI features your users <span className="text-brand-600">actually use</span>.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-lg text-neutral-700 mt-6 max-w-2xl leading-relaxed">
                  Most teams ship AI demos. We ship AI products in production. From LLM integration to autonomous agents — built to run, not to impress.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link href="/contact" className="btn-brand">
                    Book an AI strategy call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/case-studies" className="btn-secondary">
                    See AI case studies
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-600">
                  <span className="inline-flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-600" strokeWidth={2.5} />
                    <span><Counter to={11} suffix="+" /> production systems shipped</span>
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-600" strokeWidth={2.5} />
                    Pakistan&apos;s first AI legal chatbot built
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="dot-pulse" />
                    Live in production
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Animated AI conversation mockup */}
            <Reveal delay={200} direction="left">
              <div className="relative rounded-3xl border border-neutral-200 shadow-elevated bg-white overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-neutral-100 bg-neutral-50/60">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                  <span className="ml-2 text-xs font-mono text-neutral-500">AI assistant · in production</span>
                </div>
                <div className="relative p-5 sm:p-6 space-y-4 bg-gradient-to-br from-brand-50/50 via-white to-orange-50/50 min-h-[320px]">
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex justify-end"
                  >
                    <div className="max-w-[80%] rounded-2xl rounded-br-md bg-brand-500 text-white px-4 py-3 text-sm leading-relaxed shadow-subtle">
                      Can my landlord evict me without notice?
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-2.5"
                  >
                    <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0 shadow-subtle">
                      <Sparkles className="w-4 h-4 text-brand-600" />
                    </div>
                    <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-white border border-neutral-200 px-4 py-3 text-sm text-neutral-800 leading-relaxed shadow-subtle">
                      No. They must give written notice and follow due process. Here&apos;s what the law requires, with the relevant sections cited&hellip;
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2.5"
                  >
                    <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0 shadow-subtle">
                      <Sparkles className="w-4 h-4 text-brand-400" />
                    </div>
                    <div className="rounded-2xl rounded-tl-md bg-white border border-neutral-200 px-4 py-3.5 shadow-subtle">
                      <div className="flex items-center gap-1.5">
                        {[0, 1, 2].map((i) => (
                          <motion.span
                            key={i}
                            className="w-2 h-2 rounded-full bg-brand-300"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.2, repeat: Infinity, delay: 1.8 + i * 0.2 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <div className="absolute bottom-4 left-5 right-5">
                    <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 shadow-subtle">
                      <span className="text-sm text-neutral-400 flex-1">Ask anything&hellip;</span>
                      <span className="w-7 h-7 rounded-full bg-brand-500 flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Why teams ship AI with us</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Fast. Trusted. <span className="text-neutral-500">Autonomous.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="relative bg-neutral-50 border border-neutral-200 rounded-3xl p-8 lg:p-10 h-full card-lift overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shadow-subtle mb-6">
                    <p.Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-display text-h3 text-neutral-950 mb-3">{p.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FROM ZERO TO AI HERO — alternating rows */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">From zero to AI hero</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                AI that fits your product, <span className="text-neutral-500">not the other way round.</span>
              </h2>
            </div>
          </Reveal>

          <div className="space-y-12 lg:space-y-20">
            {rows.map((row, i) => (
              <div key={row.title} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <Reveal
                  className={row.imageLeft ? "lg:order-1" : "lg:order-2"}
                  direction={row.imageLeft ? "right" : "left"}
                >
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200 shadow-card">
                    <AIVisual variant={row.variant} accent={row.accent} label={row.label} />
                  </div>
                </Reveal>
                <Reveal className={row.imageLeft ? "lg:order-2" : "lg:order-1"} delay={120}>
                  <div className="max-w-xl">
                    <div className="font-mono text-xs font-bold text-brand-600 mb-4">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="font-display text-h2 text-neutral-950 tracking-display-tight leading-tight mb-4">
                      {row.title}
                    </h3>
                    <p className="text-base lg:text-lg text-neutral-700 leading-relaxed">{row.desc}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD — tabbed capabilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">What we build</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Five AI capabilities, <span className="text-neutral-500">production-ready.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex flex-wrap gap-2 mb-10">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={`relative inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-full transition-colors ${
                    activeTab === t.key ? "text-white" : "text-neutral-700 hover:text-neutral-950 bg-neutral-50 border border-neutral-200"
                  }`}
                >
                  {activeTab === t.key && (
                    <motion.span
                      layoutId="ai-tab-active"
                      className="absolute inset-0 bg-neutral-950 rounded-full"
                      transition={{ type: "spring", duration: 0.4, bounce: 0.18 }}
                    />
                  )}
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <t.Icon className="w-4 h-4" />
                    {t.label}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="grid lg:grid-cols-[1.2fr_1fr] gap-0 items-stretch"
              >
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shadow-subtle">
                      <tab.Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <h3 className="font-display text-h3 text-neutral-950">{tab.label}</h3>
                  </div>
                  <p className="text-base text-neutral-700 leading-relaxed mb-6">{tab.desc}</p>

                  <div className="flex items-start gap-3 bg-white border border-neutral-200 rounded-2xl p-5 mb-7">
                    <div className="w-6 h-6 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-brand-600" strokeWidth={2.5} />
                    </div>
                    <p className="text-sm text-neutral-800 leading-relaxed">{tab.example}</p>
                  </div>

                  <div className="text-eyebrow text-brand-600 uppercase mb-3">Typical use cases</div>
                  <div className="flex flex-wrap gap-2">
                    {tab.useCases.map((u) => (
                      <span key={u} className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-700">
                        {u}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[260px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-neutral-200">
                  <AIVisual variant={tab.variant} accent={tab.accent} label={tab.label} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* PROOF — AI IN PRODUCTION */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Proof — AI in production</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Shipped, live, and in real hands.
              </h2>
            </div>
          </Reveal>

          {/* Featured — Lexa */}
          <Reveal>
            <article className="bg-white border border-neutral-200 rounded-3xl overflow-hidden card-lift mb-6">
              <div className="grid lg:grid-cols-[1fr_1fr] items-stretch">
                <div className="relative min-h-[280px] lg:min-h-0">
                  <CaseStudyVisual monogram={lexa.monogram} accent={lexa.accent} name={lexa.name} />
                  <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-neutral-950/85 px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-widest text-white backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Live
                  </span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col">
                  <div className="text-eyebrow text-brand-600 uppercase mb-4">Featured · Legal Tech</div>
                  <h3 className="font-display text-h2 text-neutral-950 tracking-display-tight leading-tight mb-3">
                    Pakistan&apos;s first AI legal chatbot
                  </h3>
                  <p className="text-base text-neutral-700 leading-relaxed mb-5">
                    Built by Tackxel — live at lexa.lawyer. Conversational legal guidance grounded in real law with an LLM + RAG pipeline.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {["LLM", "Prompt Engineering", "Conversational AI", "Legal Domain", "Next.js"].map((t) => (
                      <span key={t} className="inline-flex items-center px-3 py-1.5 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-3">
                    <a href={lexa.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-brand">
                      Visit lexa.lawyer
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <Link href="/case-studies/lexa" className="btn-secondary">
                      Read the case study
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Secondary — My Friend */}
          <Reveal delay={120}>
            <Link href="/case-studies/my-friend" className="group block">
              <article className="bg-white border border-neutral-200 rounded-3xl overflow-hidden card-lift">
                <div className="grid sm:grid-cols-[260px_1fr] items-stretch">
                  <div className="relative min-h-[180px]">
                    <CaseStudyVisual monogram={myFriend.monogram} accent={myFriend.accent} name={myFriend.name} />
                  </div>
                  <div className="p-7 lg:p-8 flex flex-col">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-2">Founder&apos;s prior work · Clustox</div>
                    <h3 className="font-display text-h3 text-neutral-950 mb-2">AI emotional companion app</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                      An LLM-powered companion built on GPT, with trusted user and family integration.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["ChatGPT", "Generative AI", "LLM", "Flutter"].map((t) => (
                        <span key={t} className="inline-flex items-center px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-[11px] font-medium text-neutral-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">The stack</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Models and tools we ship with
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mt-4 max-w-xl">
                The right model for the job, not the one we&apos;re married to. These are the ones we reach for most.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
              {techStack.map((t) => (
                <div
                  key={t.name}
                  className="group bg-white border border-neutral-200 rounded-2xl py-6 px-5 card-lift transition-all"
                >
                  <div className="font-display text-lg font-bold text-neutral-400 group-hover:text-brand-600 transition-colors tracking-tight leading-none">
                    {t.name}
                  </div>
                  <div className="text-xs text-neutral-400 group-hover:text-neutral-600 transition-colors mt-1.5">{t.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Who we work with</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Built for teams who need it to work
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {audience.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <article className="bg-white border border-neutral-200 rounded-3xl p-8 h-full card-lift">
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center mb-5">
                    <a.Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-950 mb-2 leading-snug">{a.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{a.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">FAQ</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Questions, answered straight
              </h2>
            </div>
          </Reveal>

          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {faqs.map((f, i) => {
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
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">AI that ships</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-h2 lg:text-h1 text-white tracking-display-tight leading-tight">
                Ready to ship AI that actually works?
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
                  Book an AI strategy call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies" className="btn-ghost-light">
                  See AI case studies
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
