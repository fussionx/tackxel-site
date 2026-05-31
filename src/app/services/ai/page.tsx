"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Plus, Minus, Check, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";
import AIVisual from "@/components/AIVisual";
import ServiceHeroImage from "@/components/ServiceHeroImage";
import CaseStudyVisual from "@/components/CaseStudyVisual";
import JsonLd from "@/components/JsonLd";
import { aiServices } from "@/lib/ai-services";
import { getCaseStudy } from "@/lib/case-studies";

const BASE = "https://www.tackxel.com";
const lexa = getCaseStudy("lexa")!;
const myFriend = getCaseStudy("my-friend")!;

const firstSentence = (t: string) => (t.match(/^[^.]*\./)?.[0] ?? t);

const marquee = [
  "OpenAI", "Anthropic", "Google Gemini", "Meta Llama", "Mistral", "LangChain",
  "LlamaIndex", "Pinecone", "Weaviate", "pgvector", "PyTorch", "Next.js", "Python",
];

const faqs = [
  { q: "What does an AI development company do?", a: "An AI development company designs and builds artificial-intelligence features and products — LLM integration, machine learning models, chatbots, generative AI, RAG systems, and autonomous agents — and ships them into real software. We do the strategy, the engineering, and the production hardening end to end." },
  { q: "What AI development services do you offer?", a: "Seven, end to end: AI consulting, AI & ML development, AI app development, chatbot development, generative AI, AI agents, and agentic AI. Most projects combine a few — and we'll tell you honestly which you actually need." },
  { q: "Do you work with UK and international companies?", a: "Yes. Tackxel is a UK-registered company (Companies House 17212854) and we work remote-first with founders and product teams in the UK and globally." },
  { q: "Which AI models and tools do you use?", a: "We're model-agnostic — OpenAI (GPT), Anthropic (Claude), Google (Gemini), Meta (Llama), Mistral, and open-source — plus LangChain, vector databases, and the rest of the modern AI stack. We pick on accuracy, latency, cost, and data needs." },
  { q: "How fast can you ship an AI product?", a: "Most first AI features reach production in weeks, not quarters. We're senior engineers who've shipped AI before, so we skip the research-paper detour and build the version that runs." },
  { q: "What makes Tackxel different from other AI companies?", a: "We ship AI to production, not demos. Our proof is live: Lexa, Pakistan's first AI legal chatbot, plus the LLM companion app My Friend — part of 11+ products delivered by senior engineers." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Development Services",
    serviceType: "Artificial Intelligence Development",
    description: "AI development company in the UK: AI integration, machine learning, LLM and generative AI development, chatbots, and AI agents — shipped to production.",
    url: `${BASE}/services/ai`,
    provider: { "@type": "Organization", name: "Tackxel Ltd", url: BASE },
    areaServed: ["GB", "Worldwide"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
      { "@type": "ListItem", position: 3, name: "AI Development", item: `${BASE}/services/ai` },
    ],
  },
];

export default function AiPillarPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
            <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-8 font-mono">
              <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
              <span className="text-neutral-300">/</span>
              <Link href="/services" className="hover:text-brand-600 transition-colors">Services</Link>
              <span className="text-neutral-300">/</span>
              <span className="text-brand-600">AI Development</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="badge mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                  AI Development Company
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight leading-[1.05]">
                  AI development company in the UK, building AI that ships.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-lg text-neutral-700 mt-6 max-w-2xl leading-relaxed">
                  From AI strategy to production: AI integration, machine learning, LLM and generative AI development, chatbots, and autonomous agents — engineered by senior engineers who ship, not demo.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link href="/contact" className="btn-brand">Book a call<ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/case-studies" className="btn-secondary">See AI work<ArrowUpRight className="w-4 h-4" /></Link>
                </div>
              </Reveal>
            </div>
            <ServiceHeroImage
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
              alt="AI development company UK — neural network and circuitry"
            />
          </div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <section className="py-8 bg-white border-b border-neutral-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-4">
          <div className="text-center text-[10px] font-mono uppercase tracking-widest text-neutral-400">
            Models &amp; tools we ship with
          </div>
        </div>
        <div className="marquee-pause relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex gap-10 animate-marquee w-max items-center">
            {[...marquee, ...marquee].map((t, i) => (
              <span key={i} className="font-display text-lg font-bold text-neutral-300 tracking-tight whitespace-nowrap">
                {t}
              </span>
            ))}
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
                  AI development services, end to end
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-5 text-base text-neutral-700 leading-relaxed max-w-2xl">
                <p>
                  Tackxel is an AI development company that builds artificial-intelligence features and products and ships them into production. We cover the full spectrum of AI software development — from the first feasibility study to a live, monitored system in front of real users.
                </p>
                <p>
                  Our AI integration services bring large language models, retrieval-augmented generation (RAG), and machine learning into your product the right way: grounded in your data, wrapped in guardrails, and engineered for accuracy, latency, and cost. Whether you need LLM development services, custom ML models, a conversational AI chatbot, generative AI, or autonomous AI agents, the same senior team owns it end to end.
                </p>
                <p>
                  Most AI projects never make it past the demo. Ours don&apos;t stop there — we build the unglamorous scaffolding (retrieval, evaluation, monitoring, cost control) that turns a clever prototype into a dependable product. That&apos;s the difference between an AI company that presents and one that ships.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE 7 AI SERVICES */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">AI services</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                  Seven AI capabilities, production-ready
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Start with the capability you need. Each is a full service in its own right — and the{" "}
                <Link href="/services/ai-integration" className="text-brand-600 font-medium hover:underline">AI Integration hub</Link>{" "}
                ties them together.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {aiServices.map((x, i) => (
              <Reveal key={x.slug} delay={(i % 3) * 70}>
                <Link href={`/services/${x.slug}`} className="group block bg-white border border-neutral-200 rounded-3xl p-7 card-lift h-full">
                  <h3 className="text-lg font-semibold text-neutral-950 mb-2 leading-snug group-hover:text-brand-600 transition-colors">{x.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">{firstSentence(x.subhead)}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 group-hover:text-brand-600 transition-colors">
                    Explore
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY + PROOF */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Why Tackxel</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                A UK AI company with shipped, live proof
              </h2>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start">
            <Reveal delay={100}>
              <div className="space-y-5 text-base text-neutral-700 leading-relaxed max-w-2xl">
                <p>
                  Plenty of companies talk about AI. We have it running in production. Lexa, which we built, is Pakistan&apos;s first AI legal chatbot — grounded in real law with an LLM and RAG pipeline. The founder shipped My Friend, an LLM-powered companion app. That&apos;s real AI software development, not slideware.
                </p>
                <p>
                  We&apos;re senior engineers first, so every AI build comes with the production discipline — evaluation, guardrails, observability, and cost control — that keeps AI dependable once real users arrive. Honest scoping included: we&apos;ll tell you what&apos;s worth building and what isn&apos;t.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-10 max-w-lg">
                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 text-center">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-brand-600 tracking-display leading-none mb-2"><Counter to={11} suffix="+" /></div>
                  <div className="text-xs text-neutral-600 leading-snug">Products shipped</div>
                </div>
                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 text-center">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-brand-600 tracking-display leading-none mb-2"><Counter to={7} suffix="+" /></div>
                  <div className="text-xs text-neutral-600 leading-snug">Years founder experience</div>
                </div>
                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 text-center">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-brand-600 tracking-display leading-none mb-2">1st</div>
                  <div className="text-xs text-neutral-600 leading-snug">AI legal chatbot in Pakistan</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200} direction="left">
              <div className="space-y-3">
                <div className="text-eyebrow text-brand-600 uppercase mb-1">Proof in production</div>
                {[lexa, myFriend].map((c) => (
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
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">FAQ</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                AI development, answered
              </h2>
            </div>
          </Reveal>
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={f.q}>
                  <div>
                    <button onClick={() => setOpenFaq(open ? null : i)} className="w-full flex items-center justify-between gap-4 py-5 text-left group" aria-expanded={open}>
                      <span className="text-base lg:text-lg font-semibold text-neutral-950 group-hover:text-brand-600 transition-colors">{f.q}</span>
                      <span className="flex-shrink-0 w-7 h-7 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 group-hover:border-brand-300 group-hover:text-brand-600 transition-colors">
                        {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
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
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">AI that ships</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-h2 lg:text-h1 text-white tracking-display-tight leading-tight">
                Looking for an AI development company that ships?
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base lg:text-lg text-neutral-300 leading-relaxed mt-6 max-w-xl mx-auto">
                Tell us what you&apos;re trying to build. We&apos;ll handle the rest.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-3 mt-10 justify-center">
                <Link href="/contact" className="btn-brand">Book a call<ArrowRight className="w-4 h-4" /></Link>
                <Link href="/services/ai-integration" className="btn-ghost-light">AI Integration hub<ArrowUpRight className="w-4 h-4" /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
