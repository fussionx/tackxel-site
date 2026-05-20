import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Calculator,
  Rocket, TrendingUp, Building2,
  MessageSquare, Database, Workflow, GaugeCircle, ShieldCheck, Bot,
  Sparkles, Clock, Award,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export const metadata: Metadata = {
  title: "AI Integration Agency UK — GPT, LLM & AI Chatbot Development",
  description:
    "UK AI integration agency. Production-grade GPT, LLM, RAG, agent and AI chatbot development for founders and product teams. LLM integration services that ship.",
  keywords: [
    "AI integration agency UK",
    "AI development company UK",
    "LLM integration services",
    "AI chatbot development",
    "RAG implementation",
    "generative AI development",
    "GPT integration",
    "AI agent development",
  ],
  alternates: { canonical: "/services/ai-integration" },
  openGraph: {
    title: "AI Integration Agency UK — Tackxel",
    description:
      "AI that ships, not AI that demos. GPT, LLM, RAG and AI chatbot development by a senior UK boutique studio.",
    url: "/services/ai-integration",
    type: "website",
  },
};

const customerTypes = [
  {
    Icon: TrendingUp,
    label: "Adding AI to an existing product",
    headline: "Make your product smarter without breaking it.",
    desc: "You have a working product and users who'd benefit from chat, search, summarization, or generation features. We add AI as a layer that respects the rest of the stack — auth, data, observability, and the team that maintains it.",
    points: [
      "RAG over your existing data — docs, support tickets, knowledge base.",
      "LLM-powered chat, search, classification, and content generation features.",
      "Cost and latency tracked from day one, not discovered after billing.",
    ],
  },
  {
    Icon: Rocket,
    label: "Building an AI-first product",
    headline: "Ship the AI thesis to real users in weeks, not quarters.",
    desc: "Your wedge is AI. The product is the model + the workflow around it. We start with the evaluation harness, then build the loop — prompt, retrieve, generate, evaluate — so quality is measurable before launch.",
    points: [
      "Evaluation pipeline as the foundation, not an afterthought.",
      "Multi-step prompts, structured output, tool use — modelled and tested.",
      "Production-grade infra: rate limits, fallbacks, observability, cost caps.",
    ],
  },
  {
    Icon: Building2,
    label: "AI inside internal workflows",
    headline: "Automate the workflows your ops team actually runs.",
    desc: "Document extraction, intake triage, drafting, classification, internal copilots. We build agents that do the boring 80% of a workflow with guardrails — and hand off cleanly to a human for the 20% that needs judgement.",
    points: [
      "Structured extraction from PDFs, emails, and forms with eval-backed quality.",
      "Internal copilots wired into your tools — Slack, email, ticketing, CRM.",
      "Agent workflows with explicit handoff rules, not opaque autonomy.",
    ],
  },
];

const deliverables = [
  {
    Icon: MessageSquare,
    title: "LLM-powered features in production",
    desc: "Chat, search, summarization, classification, generation — shipped behind feature flags, observable, with cost and latency dashboards from launch.",
  },
  {
    Icon: Database,
    title: "RAG over your data",
    desc: "Embedding pipelines, vector storage, retrieval evaluation, and the unglamorous chunking, deduping, and freshness work that makes RAG actually work.",
  },
  {
    Icon: Workflow,
    title: "Custom GPT and agent workflows",
    desc: "Multi-step prompt chains, tool use, structured output (JSON schemas), and agent loops with explicit handoff points — not black-box autonomy.",
  },
  {
    Icon: GaugeCircle,
    title: "Evaluation pipelines",
    desc: "Golden datasets, automated quality metrics, regression tests on every prompt change, and dashboards that catch quality drift before users do.",
  },
  {
    Icon: ShieldCheck,
    title: "Production guardrails",
    desc: "Rate limits, cost caps, prompt-injection defences, content filtering, fallback chains for model outages — all the boring stuff that keeps AI usable in production.",
  },
  {
    Icon: Bot,
    title: "Model strategy across vendors",
    desc: "We pick Anthropic, OpenAI, or open models per workload, with abstraction at the boundary so swapping later costs days, not months.",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Discover",
    duration: "Week 1–2",
    desc: "Scope the use case sharply. What does success look like? What's the eval metric? What's the data? We surface the hard parts before writing prompts.",
    deliverables: ["Use-case spec", "Eval criteria", "Data and integration plan"],
  },
  {
    no: "02",
    title: "Design",
    duration: "Week 2–4",
    desc: "Build the evaluation harness first. Then prompt design, retrieval design (if RAG), agent design (if agentic). Architecture decisions written down, not assumed.",
    deliverables: ["Eval harness with golden set", "Prompt + retrieval design", "System architecture"],
  },
  {
    no: "03",
    title: "Build",
    duration: "Ongoing",
    desc: "Senior engineers ship in two-week sprints. Every prompt change runs through the eval harness. Cost and latency are first-class metrics from day one.",
    deliverables: ["Production-grade code", "CI eval gates", "Cost + latency dashboards"],
  },
  {
    no: "04",
    title: "Ship",
    duration: "Launch + ongoing",
    desc: "Phased rollout with feature flags, prompt-versioning, and observability. We don't ship and disappear — model behaviour drifts and we plan for that.",
    deliverables: ["Monitoring & alerting", "Prompt-version tracking", "Quality regression runbook"],
  },
];

const techStack = [
  {
    name: "Anthropic Claude",
    line: "When the workload rewards careful reasoning, long context, or tool use — we lean Claude. Claude 4 family for production work.",
  },
  {
    name: "OpenAI GPT",
    line: "When the workload needs broad reliability, fast iteration, or the OpenAI ecosystem (Whisper, embeddings, image gen).",
  },
  {
    name: "Open models",
    line: "Llama, Mistral, and similar — when latency, cost, or data residency forces local hosting. Deployed via vLLM, Ollama, or AWS Bedrock.",
  },
  {
    name: "Vector + retrieval",
    line: "pgvector, Pinecone, Weaviate. The choice is driven by your existing data infra, not by hype.",
  },
];

const approachPrinciples = [
  {
    no: "01",
    title: "Evaluation first, prompts second",
    desc: "Without an eval harness, you can't tell whether a prompt change is an improvement or a regression. We build it before writing the first real prompt.",
  },
  {
    no: "02",
    title: "Boring infra around clever models",
    desc: "Models are the new dependency. We treat them like any external service — rate limits, retries, fallbacks, cost caps, observability, version pinning.",
  },
  {
    no: "03",
    title: "Honesty about what AI can't do",
    desc: "Some workflows aren't AI workflows. If the right answer is a deterministic rule engine, we'll say so — and build that instead.",
  },
];

export default function AiIntegrationPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative hero-glow text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <Parallax speed={0.15} className="absolute top-20 right-20 hidden lg:block pointer-events-none">
          <div className="w-80 h-80 rounded-full bg-brand-500/15 blur-3xl float-slow" />
        </Parallax>
        <Parallax speed={-0.1} className="absolute bottom-10 left-20 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-400/8 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-mono">
              <Link href="/" className="hover:text-brand-300 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-brand-300 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-brand-300">AI Integration</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="badge-dark mb-6">
                  <span className="dot-pulse" />
                  Lead service · AI Integration
                </span>
              </Reveal>
              <Reveal delay={80}>
                <div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">
                  Production AI engineering
                </div>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">
                  AI that ships, not AI that demos.
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">
                  GPT, LLMs, and generative AI integrated into products that already exist — or built into new ones from day one. RAG, custom workflows, agents, and the evaluation pipelines that keep them honest.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Link href="/contact" className="btn-brand">
                    <Calendar className="w-4 h-4" />
                    Book an AI scoping call
                  </Link>
                  <Link href="/contact?intent=estimate" className="btn-ghost-light">
                    <Calculator className="w-4 h-4" />
                    Get a delivery estimate
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="mt-5 flex items-center gap-2 text-sm text-neutral-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-300" />
                  Free 30-minute scoping call with the founder. NDA on request.
                </div>
              </Reveal>
            </div>

            <Reveal delay={300} direction="left">
              {/* PLACEHOLDER - swap with real visual at /public/images/services/ai.jpg */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-card-dark">
                <Image
                  src="/images/services/ai.jpg"
                  alt="AI Integration architecture illustration"
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

      {/* WHO THIS IS FOR */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Who this is for</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">
                Three shapes of AI work <span className="text-brand-600">we keep being asked for</span>
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">
                Different starting points, same boutique team. We tune scope and approach per shape — not one playbook for all AI work.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-6">
            {customerTypes.map((t, i) => (
              <Reveal key={t.label} delay={i * 100}>
                <div className="bg-white border border-neutral-200 rounded-xl p-7 h-full card-lift flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                      <t.Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <div className="text-eyebrow text-brand-600 uppercase mb-1.5 font-semibold tracking-widest">{t.label}</div>
                      <h3 className="font-display text-h3 text-neutral-950 leading-snug">{t.headline}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">{t.desc}</p>
                  <ul className="space-y-2.5 mt-auto">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-brand-600" />
                        </div>
                        <span className="text-sm text-neutral-700 leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4 font-semibold tracking-widest">What you get</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Concrete deliverables, <span className="text-brand-600">not "an AI strategy"</span>
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">
                We don't run AI workshops or print roadmaps. We engineer the parts that ship. If a deliverable here doesn't fit your scope, the scoping call is where we say so honestly.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {deliverables.map((d, i) => (
              <Reveal key={d.title} delay={i * 60}>
                <div className="bg-white p-7 h-full card-lift">
                  <div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-4">
                    <d.Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="text-base font-semibold text-neutral-950 mb-2 leading-snug">{d.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DELIVER */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        </Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="mb-14">
              <div className="text-eyebrow text-brand-100 uppercase mb-3 font-semibold tracking-widest">How we deliver</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4">
                Discover. Design. Build. <span className="text-brand-200">Ship.</span>
              </h2>
              <p className="text-base text-brand-50 leading-relaxed max-w-3xl">
                The same four-phase model we use across every engagement — adapted to AI's particular hazards: drift, eval-quality gaps, and cost runaway.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.no} delay={i * 100}>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 h-full card-lift">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white text-brand-700 flex items-center justify-center font-mono text-sm font-bold">
                      {step.no}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-brand-200 uppercase tracking-wider font-semibold">{step.duration}</div>
                      <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-brand-50 leading-relaxed mb-5">{step.desc}</p>
                  <ul className="space-y-2 pt-4 border-t border-white/15">
                    {step.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs text-brand-50">
                        <Check className="w-3 h-3 text-brand-200 flex-shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Tech stack</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">
                We pick the model for the workload, <span className="text-brand-600">not the hype cycle</span>
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">
                Frontier closed-source when the workload rewards it. Open models when latency, cost, or residency demand it. The choice gets made together, on the scoping call.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {techStack.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="bg-white p-7 h-full card-lift flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center mb-5">
                    <Sparkles className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-950 mb-2">{t.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{t.line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE APPROACH AI (in lieu of a case study — AI work isn't yet one of our anchor case studies) */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden border-y border-neutral-800">
        <Parallax speed={0.15} className="absolute top-0 right-0 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-300 uppercase mb-4">How we approach AI</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-white">
                  Three principles we won&apos;t compromise on
                </h2>
              </div>
              <p className="text-base text-neutral-300 leading-relaxed max-w-xl lg:justify-self-end">
                AI work has its own failure modes. These principles are how we avoid them — not after the fact, but baked into how we scope and build from day one.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {approachPrinciples.map((p, i) => (
              <Reveal key={p.no} delay={i * 100}>
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-7 h-full card-lift">
                  <div className="font-mono text-xs font-bold text-brand-300 mb-4">{p.no}</div>
                  <h3 className="font-display text-lg font-semibold text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white rounded-2xl p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
              <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
                <div>
                  <div className="text-eyebrow text-brand-100 uppercase mb-3 font-semibold tracking-widest">Ready when you are</div>
                  <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl">
                    Got an AI feature in mind? Let&apos;s scope it properly.
                  </h2>
                  <p className="text-base text-brand-50 leading-relaxed max-w-xl">
                    Discovery calls are for figuring out if there's a real AI problem worth solving. Estimates are for when you already know the shape and need numbers.
                  </p>
                </div>
                <div className="flex flex-col gap-3 lg:justify-self-end">
                  <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 justify-center">
                    <Calendar className="w-4 h-4" />
                    Book an AI scoping call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact?intent=estimate" className="bg-transparent border border-white/40 hover:bg-white/10 text-white transition-colors px-6 py-3.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 justify-center">
                    <Calculator className="w-4 h-4" />
                    Get a delivery estimate
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
