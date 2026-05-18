"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Award, Clock, ShieldCheck,
  TrendingUp, Zap, Plus, Minus,
  Brain, Users, Bot, Workflow, Lock, Network,
  Heart, Building2, ShoppingBag, Truck, Factory, Lightbulb,
  Activity, Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";

const services = [
  {
    Icon: Brain,
    name: "Autonomous AI Agent Development",
    tagline: "Goal-driven agents that plan, reason, and act.",
    desc: "Custom autonomous AI agents engineered to plan multi-step workflows, evaluate outcomes, and execute decisions independently — reducing manual intervention across enterprise operations.",
    bullets: [
      "Build goal-driven AI agents that plan, reason, and act independently.",
      "Combine LLM-powered intelligence with structured, multi-step decision workflows.",
      "Minimize manual effort through intelligent task orchestration.",
      "Deploy agents across business systems to support scalable automation.",
      "Full ownership of agent logic, prompts, and infrastructure.",
    ],
    metric: { value: "70%", label: "Workflow automation" },
  },
  {
    Icon: Users,
    name: "Multi-Agent AI Systems",
    tagline: "Coordinated agents with shared context.",
    desc: "Multi-agent systems where specialized AI agents collaborate around shared business objectives — with distributed execution, shared memory, and orchestrated handoffs.",
    bullets: [
      "Develop coordinated AI agents aligned around shared business objectives.",
      "Enable shared memory, contextual awareness, and distributed execution.",
      "Increase workflow throughput while reducing coordination gaps.",
      "Designed for analytics, operations, and complex decision environments.",
      "Built-in agent observability and inter-agent message tracing.",
    ],
    metric: { value: "3×", label: "Throughput improvement" },
  },
  {
    Icon: Bot,
    name: "LLM-Powered Decision Intelligence",
    tagline: "GPT-class agents for business decisions.",
    desc: "Decision intelligence agents built on GPT, Claude, and Gemini — integrating reasoning, retrieval, and action-based logic for context-aware enterprise decisions.",
    bullets: [
      "Develop advanced AI agents using GPT-class and enterprise language models.",
      "Integrate reasoning, retrieval, and action-based logic for contextual responses.",
      "Support faster, data-backed decision-making with improved accuracy.",
      "Applicable across finance, operations, and business intelligence functions.",
      "Full audit trail of every decision and the reasoning behind it.",
    ],
    metric: { value: "60%", label: "Faster decision cycles" },
  },
  {
    Icon: Workflow,
    name: "Agentic AI Workflow Automation",
    tagline: "Replace manual processes with AI execution.",
    desc: "End-to-end workflow automation embedded into your ERP, CRM, and internal business platforms — designed for high-volume enterprise workflows requiring precision and speed.",
    bullets: [
      "Replace repetitive manual processes with autonomous AI execution.",
      "Embed AI agents into ERP, CRM, and internal business platforms.",
      "Improve operational efficiency through intelligent process automation.",
      "Built for high-volume enterprise workflows requiring precision and speed.",
      "Real-time monitoring with automated rollback safety.",
    ],
    metric: { value: "45%", label: "Operational cost reduction" },
  },
  {
    Icon: Lock,
    name: "Secure and Governed Agentic AI",
    tagline: "Enterprise-grade agentic AI with oversight.",
    desc: "Governance-first agentic AI with role-based access, approval workflows, audit trails, and human-in-the-loop oversight — aligned with enterprise compliance and risk policies.",
    bullets: [
      "Implement role-based access controls, approval workflows, and audit trails.",
      "Enable human-in-the-loop oversight for high-impact or sensitive actions.",
      "Align AI deployment with governance, compliance, and risk policies.",
      "Support safe and controlled adoption of autonomous AI systems.",
      "SOC 2, GDPR, and EU AI Act compliance built in from day one.",
    ],
    metric: { value: "100%", label: "Audit-ready compliance" },
  },
  {
    Icon: Network,
    name: "Agentic AI Integration & Scaling",
    tagline: "Cloud, hybrid, and on-prem deployment.",
    desc: "Production deployment of agentic AI across cloud, hybrid, and on-premise infrastructure — with scalable architecture, real-time monitoring, and continuous system refinement.",
    bullets: [
      "Integrate agentic AI into cloud, hybrid, and on-prem infrastructure.",
      "Deploy with scalable architecture and real-time performance monitoring.",
      "Support lifecycle management, retraining, and continuous system refinement.",
      "Engineered for long-term enterprise stability and business growth.",
      "Multi-region deployment with disaster recovery built in.",
    ],
    metric: { value: "99.9%", label: "Uptime SLA" },
  },
];

const process = [
  { no: "01", title: "Discovery & Agent Design",  duration: "1–2 weeks", desc: "Use-case prioritization, agent capability mapping, and orchestration architecture. We design agents around your workflows — not generic platforms forced to fit." },
  { no: "02", title: "Foundations & Tooling", duration: "1–2 weeks", desc: "LLM selection, tool inventory, integration architecture, and governance framework. Foundations built right means agents that ship — not agents stuck in PoC." },
  { no: "03", title: "Iterative Agent Build", duration: "6–14 weeks", desc: "Two-week sprints with working agentic AI at every demo. Senior engineers own end-to-end with daily standups in your time zone." },
  { no: "04", title: "Governance & Launch", duration: "1–2 weeks", desc: "Bias testing, audit trail validation, security review, and load testing. Launch with monitoring, fallback paths, and rollback safety." },
  { no: "05", title: "Operate & Evolve", duration: "Ongoing", desc: "Continuous performance monitoring, agent refinement, and quarterly reviews — tying agentic AI investment to measurable business outcomes." },
];

const useCases = [
  {
    Icon: Activity,
    title: "Predictive Maintenance and Monitoring",
    desc: "Our autonomous AI agents proactively monitor systems, detect anomalies, and predict failures — minimizing downtime and protecting business-critical infrastructure.",
  },
  {
    Icon: Workflow,
    title: "Workflow Automation and Optimization",
    desc: "We design AI agents that orchestrate tasks, manage dependencies, and optimize workflows — freeing resources and improving overall operational efficiency.",
  },
  {
    Icon: Sparkles,
    title: "Intelligent Customer Engagement",
    desc: "Tackxel builds AI agents that understand customer behavior, deliver personalized interactions, and drive satisfaction, loyalty, and measurable business growth.",
  },
];

const challenges = [
  { title: "Difficulty Integrating AI Agents", solution: "Native integration frameworks with API contracts, webhook support, and schema validation. Agents that drop into existing ERPs, CRMs, and custom platforms without rewiring workflows." },
  { title: "Lack of Autonomous Decision-Making", solution: "Goal-driven agent architectures with multi-step reasoning, tool use, and self-correction. Agents that complete tasks — not just chat about them." },
  { title: "Limited Scalability of AI Agent Workflows", solution: "Stateless serving infrastructure, autoscaling on cloud platforms, and parallel agent execution. From 100 tasks a day to 10 million — no architecture rewrite." },
  { title: "Insufficient Data Handling & Context Awareness", solution: "RAG architecture with vector databases, semantic search, and persistent memory. Agents that remember context, ground answers in verified data, and cite sources." },
  { title: "Inconsistent Monitoring and Governance", solution: "Real-time observability with agent traces, KPI dashboards, and audit logs. Full visibility into every agent decision and the reasoning behind it." },
  { title: "Security and Privacy Concerns", solution: "PII redaction, role-based access, audit trails, and on-premise deployment options. SOC 2, GDPR, HIPAA, EU AI Act compliance built in from day one." },
  { title: "Difficulty Adapting AI Agents", solution: "Model-agnostic architecture supporting GPT, Claude, Llama, and Gemini. Swap models, update tools, and refine agent behavior without code rewrites." },
  { title: "Predictive Maintenance Failures", solution: "Time-series ML combined with agentic monitoring, anomaly detection, and automated alerting. Catch issues before they cascade into downtime." },
  { title: "Inefficient Workflow Automation", solution: "Process discovery, bottleneck analysis, and targeted automation with verified outcomes. Automate what matters — not just what's easy to automate." },
  { title: "Multi-Agent Collaboration Issues", solution: "Orchestration frameworks with shared memory, message routing, and conflict resolution. Multiple agents coordinating like an experienced team — not stepping on each other." },
];

const industries = [
  { Icon: Heart, name: "Healthcare & HealthTech", desc: "HIPAA-compliant agentic AI for clinical decision support, prior authorization workflows, and care coordination — built for hospital networks and digital health platforms.", examples: ["Clinical decision support", "Prior authorization", "Care coordination", "Medical workflows"] },
  { Icon: Building2, name: "Fintech & Banking", desc: "PCI-compliant agentic AI for fraud investigation, KYC automation, loan underwriting, and compliance reporting — with full audit trails for banking regulators.", examples: ["Fraud investigation", "KYC automation", "Loan underwriting", "Compliance reporting"] },
  { Icon: ShoppingBag, name: "Retail & eCommerce", desc: "Agentic AI for inventory operations, supplier coordination, order management, and customer issue resolution — boosting operational efficiency 3× across the back office.", examples: ["Inventory operations", "Supplier coordination", "Order management", "Issue resolution"] },
  { Icon: Factory, name: "Manufacturing", desc: "Agentic AI for predictive maintenance, defect detection workflows, supply chain optimization, and quality assurance — combining IoT signals with autonomous decision-making.", examples: ["Predictive maintenance", "Defect workflows", "Supply chain AI", "Quality assurance"] },
  { Icon: Truck, name: "Logistics & Transportation", desc: "Agentic AI for route optimization, fleet coordination, warehouse intelligence, and last-mile delivery — integrating IoT, ERP, and 3PL providers seamlessly.", examples: ["Route optimization", "Fleet coordination", "Warehouse AI", "Delivery intelligence"] },
  { Icon: Lightbulb, name: "Energy & Utilities", desc: "Agentic AI for grid optimization, load forecasting, predictive maintenance, and consumption analytics — built for high-availability, mission-critical infrastructure.", examples: ["Grid optimization", "Load forecasting", "Asset monitoring", "Consumption analytics"] },
];

const advantages = [
  { no: "01", title: "Client-Focused AI Strategy",        desc: "We start with your goals, constraints, and workflows — then design agentic AI that supports how your business truly operates." },
  { no: "02", title: "Built for Real Environments",       desc: "Our AI agents are designed for production systems, real users, and constant change — not controlled demos or isolated experiments." },
  { no: "03", title: "Clear Ownership & Visibility",      desc: "You always understand what's being built, why it matters, and how it contributes value across your operations." },
  { no: "04", title: "Security by Design",                desc: "We embed security, data protection, and access controls from day one — meeting the needs of enterprise and regulated environments." },
  { no: "05", title: "Scales With Growth",                desc: "Your AI solutions evolve alongside your business — handling growing workloads, new use cases, and increased complexity smoothly." },
  { no: "06", title: "Trusted Partnership",               desc: "We work as an extension of your team, offering ongoing guidance to ensure agentic AI delivers lasting impact — not short-term wins." },
];

const techStackTabs = [
  { category: "AI & LLM Models",       techs: ["OpenAI GPT-5", "OpenAI GPT-4o", "Anthropic Claude", "Google Gemini", "Meta LLaMA 4", "Mistral AI", "Cohere Command", "Hugging Face"] },
  { category: "Agent Frameworks",      techs: ["LangChain", "LangGraph", "AutoGen", "CrewAI", "Semantic Kernel", "LlamaIndex", "Haystack", "AutoGPT", "BabyAGI"] },
  { category: "Vector Databases",      techs: ["Pinecone", "Weaviate", "ChromaDB", "Qdrant", "Milvus", "pgvector", "Redis VSS"] },
  { category: "Tool Use & Orchestration", techs: ["Function Calling", "MCP", "OpenAPI", "GraphQL", "Webhooks", "Apache Airflow", "Temporal", "n8n", "Prefect"] },
  { category: "Enterprise Integration", techs: ["Salesforce", "HubSpot", "Zendesk", "SAP", "Microsoft Dynamics", "Slack", "Teams", "Twilio"] },
  { category: "Observability",         techs: ["LangSmith", "Helicone", "Phoenix", "Weights & Biases", "Datadog", "Sentry", "OpenTelemetry"] },
];

const faqs = [
  { q: "What's the difference between an AI agent and agentic AI?", a: "An AI agent is a single autonomous program. Agentic AI is the broader engineering discipline of building systems where multiple agents reason, plan, use tools, and act on enterprise systems autonomously. We build both, but agentic AI specifically means systems that complete entire workflows without human prompts at every step." },
  { q: "How quickly can you start an agentic AI development project?", a: "Most engagements begin within two weeks. We run a technical discovery, agree on scope and team composition, sign the MSA and SOW, and onboard your dedicated AI engineers into your environments. Urgent needs can compress this to one week." },
  { q: "Can agentic AI be deployed on-premise or in our private VPC?", a: "Yes — we routinely deploy agentic AI on AWS VPC, Azure private cloud, GCP, or fully on-premise. We work with open-source models (Llama, Mistral) where data sovereignty is mandatory, and with private OpenAI/Anthropic endpoints where allowed." },
  { q: "Who owns the agentic AI system, prompts, and IP?", a: "You do — from day one. All prompts, agent logic, fine-tuned weights, training data, and outputs are licensed exclusively to you. We deliberately avoid lock-in patterns — you can take everything in-house at engagement end with zero migration cost." },
  { q: "What does an agentic AI development project typically cost?", a: "PoC agentic AI projects typically range from USD 50K to USD 120K for an 8–10 week build. Production agentic AI systems range from USD 200K to USD 600K depending on complexity, integrations, and governance requirements. Dedicated teams start at around USD 40K per month." },
  { q: "How do you handle governance, audit trails, and EU AI Act compliance?", a: "Every engagement includes a governance framework — agent documentation, decision audit trails, bias auditing, fairness metrics, and risk classification aligned with the EU AI Act, GDPR, HIPAA, and SOC 2. For high-risk applications, we provide full compliance documentation suitable for regulator review." },
];

const awards = [
  { platform: "Clutch",        title: "Top Agentic AI Developers", year: "2024" },
  { platform: "GoodFirms",     title: "Top Agentic AI Co.",        year: "2024" },
  { platform: "TopDevelopers", title: "Top AI Automation",         year: "2024" },
  { platform: "Coursera",      title: "Certified AI Developer",    year: "2024" },
  { platform: "AppFuturo",     title: "AI Innovation Leader",      year: "2024" },
  { platform: "Industry",      title: "AI Excellence Award",       year: "2025" },
];

function LaurelIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className}>
      <g fill="currentColor" opacity="0.85">
        <ellipse cx="14" cy="14" rx="2.5" ry="5.5" transform="rotate(-30 14 14)" />
        <ellipse cx="11" cy="20" rx="2.5" ry="5.5" transform="rotate(-20 11 20)" />
        <ellipse cx="9" cy="27" rx="2.5" ry="5.5" transform="rotate(-10 9 27)" />
        <ellipse cx="10" cy="34" rx="2.5" ry="5.5" transform="rotate(5 10 34)" />
        <ellipse cx="13" cy="40" rx="2.5" ry="5.5" transform="rotate(20 13 40)" />
        <ellipse cx="19" cy="46" rx="2.5" ry="5.5" transform="rotate(40 19 46)" />
      </g>
      <g fill="currentColor" opacity="0.85">
        <ellipse cx="42" cy="14" rx="2.5" ry="5.5" transform="rotate(30 42 14)" />
        <ellipse cx="45" cy="20" rx="2.5" ry="5.5" transform="rotate(20 45 20)" />
        <ellipse cx="47" cy="27" rx="2.5" ry="5.5" transform="rotate(10 47 27)" />
        <ellipse cx="46" cy="34" rx="2.5" ry="5.5" transform="rotate(-5 46 34)" />
        <ellipse cx="43" cy="40" rx="2.5" ry="5.5" transform="rotate(-20 43 40)" />
        <ellipse cx="37" cy="46" rx="2.5" ry="5.5" transform="rotate(-40 37 46)" />
      </g>
      <g transform="translate(28, 28)">
        <path d="M 0,-8 L 2.4,-2.4 L 8,-2.4 L 3.5,1.2 L 5.3,7 L 0,3.3 L -5.3,7 L -3.5,1.2 L -8,-2.4 L -2.4,-2.4 Z" fill="currentColor" />
      </g>
    </svg>
  );
}

export default function AgenticAIPage() {
  const [email, setEmail] = useState("");
  const [activeService, setActiveService] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [activeStack, setActiveStack] = useState(0);
  const [openChallenge, setOpenChallenge] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeServiceData = services[activeService];
  const activeIndustryData = industries[activeIndustry];
  const activeStackData = techStackTabs[activeStack];

  return (
    <>
      {/* HERO */}
      <section className="relative hero-glow text-white pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <Parallax speed={0.15} className="absolute top-20 right-20 hidden lg:block pointer-events-none"><div className="w-72 h-72 rounded-full bg-brand-500/10 blur-3xl float-slow" /></Parallax>
        <Parallax speed={-0.1} className="absolute bottom-10 left-20 hidden lg:block pointer-events-none"><div className="w-96 h-96 rounded-full bg-brand-400/5 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <Reveal><nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-mono"><Link href="/" className="hover:text-brand-300 transition-colors">Home</Link><span>/</span><Link href="/services" className="hover:text-brand-300 transition-colors">Services</Link><span>/</span><span className="text-brand-300">Agentic AI</span></nav></Reveal>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><span className="badge-dark mb-6"><span className="dot-pulse" />Powering innovation with AI</span></Reveal>
              <Reveal delay={80}><div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">Build · Train · Automate · Scale</div></Reveal>
              <Reveal delay={140}><h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">Custom Agentic AI Development Services Company.</h1></Reveal>
              <Reveal delay={220}><p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">Tackxel builds agentic AI systems that plan and act independently — improving process throughput, decreasing human intervention by measurable margins, and reducing manual workload.</p></Reveal>
              <Reveal delay={300}>
                <form onSubmit={(e) => { e.preventDefault(); window.location.href = `/contact?email=${encodeURIComponent(email)}`; }} className="flex flex-col sm:flex-row gap-3 mt-8 max-w-xl">
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-5 py-3 rounded-md border border-neutral-700 bg-neutral-900/60 text-white text-sm placeholder:text-neutral-500 focus:border-brand-500 focus:bg-neutral-900 outline-none transition-all" />
                  <button type="submit" className="btn-brand whitespace-nowrap"><Calendar className="w-4 h-4" />Schedule a Call</button>
                </form>
              </Reveal>
              <Reveal delay={400}><div className="mt-5 flex items-center gap-2 text-sm text-neutral-400"><ShieldCheck className="w-3.5 h-3.5 text-brand-300" />Free 30-min strategy session with experts. NDA secured.</div></Reveal>
            </div>
            <Reveal delay={300} direction="left">
              <div className="space-y-3">
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Award className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">#1 Top-Rated</div><div className="text-xs text-neutral-400">Agentic AI Development Company by Clutch</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Clock className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">U.S. Time Zone</div><div className="text-xs text-neutral-400">Senior AI engineers · 9am–5pm EST</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Brain className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">Dedicated</div><div className="text-xs text-neutral-400">AI Engineers · SOC 2 · ISO 27001</div></div></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROMISE CARDS */}
      <section className="py-14 lg:py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <Reveal>
              <div className="bg-neutral-950 text-white border border-neutral-800 rounded-lg p-7 h-full card-lift">
                <div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center mb-4"><Workflow className="w-5 h-5 text-brand-300" /></div>
                <h3 className="font-display text-h3 text-white mb-2">Multi-Step Agentic AI Systems</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">We engineer AI agents that plan, evaluate outcomes, and execute actions — helping enterprises shorten process cycles and reduce execution delays.</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white rounded-lg p-7 h-full card-lift overflow-hidden relative">
                <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-md bg-white/15 border border-white/25 flex items-center justify-center mb-4"><Bot className="w-5 h-5 text-white" /></div>
                  <h3 className="font-display text-h3 text-white mb-2">LLM-Based Decision Agents</h3>
                  <p className="text-sm text-brand-50 leading-relaxed">Our team develops AI agents powered by GPT-class models that analyze context, retrieve data, and complete tasks with consistent and auditable outputs.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-white border border-neutral-200 rounded-lg p-7 h-full">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-600 font-semibold mb-2">Your Trusted</div>
                <h3 className="font-display text-h3 text-neutral-950 mb-5">AI Development <span className="text-brand-600">Provider</span></h3>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={10} suffix="+" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Years of AI Development Expertise</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950">Top <Counter to={1} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Vetted AI Talent</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={10} suffix="+" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Industries Served</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={25} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Senior AI Engineers</div></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="bg-white py-10 lg:py-12 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {awards.map((a, i) => (<Reveal key={i} delay={i * 60}><div className="bg-white p-5 flex flex-col items-center text-center card-lift h-full"><LaurelIcon className="w-11 h-12 mb-2 text-brand-500" /><div className="text-[11px] font-bold text-brand-700 uppercase tracking-wider mb-1">{a.platform}</div><div className="text-[10px] text-neutral-600 leading-snug mb-1">{a.title}</div><div className="text-[10px] text-neutral-400 font-mono">{a.year}</div></div></Reveal>))}
          </div>
        </div>
      </section>

      {/* SERVICES TABS */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="text-center mb-14"><div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Our Agentic AI Development Services</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">Driving Autonomous Decisions <span className="text-brand-600">Across Business Workflows</span></h2><p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">Click any service below to explore the engineering depth, agent capabilities, and measurable outcomes we deliver.</p></div></Reveal>
          <Reveal>
            <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 lg:grid-cols-6 border-b border-neutral-200 bg-neutral-50">{services.map((s, i) => (<button key={s.name} onClick={() => setActiveService(i)} className={`px-4 py-4 text-left transition-all border-r border-neutral-200 last:border-r-0 ${activeService === i ? "bg-white border-b-2 border-b-brand-500 -mb-px" : "hover:bg-white/60 border-b-2 border-b-transparent"}`}><div className="flex items-center gap-2 mb-1.5"><s.Icon className={`w-7 h-7 transition-opacity ${activeService === i ? "opacity-100 text-brand-600" : "opacity-50 text-neutral-600"}`} /></div><div className={`text-xs font-semibold leading-tight ${activeService === i ? "text-brand-700" : "text-neutral-600"}`}>{s.name}</div></button>))}</div>
              <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 p-8 lg:p-10">
                <div>
                  <div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">{String(activeService + 1).padStart(2, "0")} · Service Detail</div>
                  <h3 className="font-display text-h2 text-neutral-950 mb-3">{activeServiceData.name}</h3>
                  <p className="text-base font-semibold text-neutral-700 mb-4">{activeServiceData.tagline}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">{activeServiceData.desc}</p>
                  <ul className="space-y-3">{activeServiceData.bullets.map((b) => (<li key={b} className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-3 h-3 text-brand-600" /></div><span className="text-sm text-neutral-700 leading-relaxed">{b}</span></li>))}</ul>
                  <Link href="/contact" className="btn-brand mt-8">Discuss your agentic AI project<ArrowRight className="w-4 h-4" /></Link>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-xl p-6 flex items-center justify-center aspect-square"><activeServiceData.Icon className="w-32 h-32 lg:w-40 lg:h-40 text-brand-500" strokeWidth={1.2} /></div>
                  <div className="bg-neutral-950 text-white rounded-xl p-6"><div className="text-xs font-mono text-brand-300 uppercase tracking-wider mb-2 font-semibold">Measurable Outcome</div><div className="font-display text-4xl font-bold text-white mb-1 tracking-display">{activeServiceData.metric.value}</div><div className="text-sm text-neutral-400">{activeServiceData.metric.label}</div></div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}><div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">{services.map((s, i) => (<button key={s.name} onClick={() => setActiveService(i)} className={`p-6 text-left transition-colors ${activeService === i ? "bg-brand-50" : "bg-white hover:bg-neutral-50"}`}><div className="flex items-start gap-4"><div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0"><s.Icon className="w-5 h-5 text-brand-600" /></div><div><h3 className="text-sm font-semibold text-neutral-950 mb-1">{s.name}</h3><p className="text-xs text-neutral-600 leading-relaxed">{s.tagline}</p></div></div></button>))}</div></Reveal>
          <Reveal delay={300}><div className="mt-10 flex justify-center"><Link href="/contact" className="btn-brand">Need Enterprise Agentic AI Solutions?<ArrowRight className="w-4 h-4" /></Link></div></Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Delivery Process</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">How we ship agentic AI, <span className="text-brand-600">every engagement</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-xl">A repeatable, transparent delivery process refined across 100+ AI engagements. Working agentic AI in week three — never a slide deck pretending to be progress.</p></div></Reveal>
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200" />
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-4 relative">{process.map((step, i) => (<Reveal key={step.no} delay={i * 100}><div className="relative"><div className="w-14 h-14 rounded-full bg-white border-2 border-brand-200 flex items-center justify-center mb-5 mx-auto lg:mx-0 relative z-10"><span className="font-mono text-sm font-bold text-brand-700">{step.no}</span></div><div className="bg-white border border-neutral-200 rounded-lg p-5 h-full card-lift"><div className="text-[10px] font-mono text-brand-600 uppercase tracking-wider font-semibold mb-1">{step.duration}</div><h3 className="text-sm font-semibold text-neutral-950 mb-2">{step.title}</h3><p className="text-xs text-neutral-600 leading-relaxed">{step.desc}</p></div></div></Reveal>))}</div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/30 via-neutral-950 to-neutral-950" />
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none"><div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4">Agentic AI Use Cases: <span className="text-brand-300">Transforming Enterprise Performance</span></h2><p className="text-base text-neutral-300 leading-relaxed mb-8 max-w-lg">Tackxel builds custom agentic AI systems that optimize processes, monitor systems, and provide actionable insights for growth.</p></Reveal>
              <div className="space-y-4">{useCases.map((t, i) => (<Reveal key={t.title} delay={i * 100}><div className="bg-neutral-900/70 backdrop-blur border border-neutral-800 rounded-lg p-6 card-lift"><div className="flex items-start gap-4"><div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center flex-shrink-0"><t.Icon className="w-6 h-6 text-brand-300" /></div><div><h3 className="text-base font-semibold text-white mb-1.5">{t.title}</h3><p className="text-sm text-neutral-400 leading-relaxed">{t.desc}</p></div></div></div></Reveal>))}</div>
              <Reveal delay={400}><Link href="/contact" className="btn-brand mt-8">Interested in Autonomous Decision-Making?<ArrowRight className="w-4 h-4" /></Link></Reveal>
            </div>
            <Reveal delay={300} direction="left">
              <div className="relative bg-neutral-900/40 backdrop-blur border border-neutral-800 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <svg viewBox="0 0 320 320" className="w-full h-full">
                  <defs><radialGradient id="coreGlowAgentic" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#5278C2" stopOpacity="0.5" /><stop offset="100%" stopColor="#3159A5" stopOpacity="0" /></radialGradient></defs>
                  <circle cx="160" cy="160" r="60" fill="url(#coreGlowAgentic)" />
                  <circle cx="160" cy="160" r="130" fill="none" stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 4" />
                  <circle cx="160" cy="160" r="100" fill="none" stroke="#3159A5" strokeOpacity="0.25" strokeWidth="1.2" />
                  <circle cx="160" cy="160" r="70" fill="none" stroke="#3159A5" strokeOpacity="0.35" strokeWidth="1.2" />
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => { const rad = (deg * Math.PI) / 180; const x = 160 + Math.cos(rad) * 130; const y = 160 + Math.sin(rad) * 130; return (<g key={i}><line x1="160" y1="160" x2={x} y2={y} stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1" /><circle cx={x} cy={y} r="6" fill="#5278C2" /><circle cx={x} cy={y} r="10" fill="none" stroke="#5278C2" strokeOpacity="0.3" /></g>); })}
                  <circle cx="160" cy="160" r="32" fill="#3159A5" />
                  <text x="160" y="167" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="Geist">AGENTIC</text>
                  {[{ label: "PLAN", x: 290, y: 160 }, { label: "REASON", x: 220, y: 47 }, { label: "ACT", x: 95, y: 47 }, { label: "MEMORY", x: 30, y: 160 }, { label: "TOOLS", x: 95, y: 273 }, { label: "ORCH", x: 225, y: 273 }].map((t) => (<g key={t.label}><rect x={t.x - 32} y={t.y - 11} width="64" height="22" rx="4" fill="#1D376A" stroke="#3159A5" strokeOpacity="0.4" /><text x={t.x} y={t.y + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill="#7E9DD7" fontFamily="Geist">{t.label}</text></g>))}
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-end mb-12"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Common Challenges</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-3">Primary Agentic AI Development Challenges And How Tackxel Ensures Results</h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Click any challenge to reveal exactly how we solve it.</p></div></Reveal>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-12">
            <Reveal>
              <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100">
                {challenges.map((c, i) => { const open = openChallenge === i; return (<button key={c.title} onClick={() => setOpenChallenge(open ? null : i)} className="w-full text-left hover:bg-neutral-50 transition-colors block"><div className="flex items-center justify-between gap-6 px-6 py-4"><div className="flex items-start gap-4 flex-1"><span className="font-mono text-xs font-semibold text-brand-600 pt-1 w-6">{String(i + 1).padStart(2, "0")}</span><span className="text-sm font-semibold text-neutral-900 leading-snug">{c.title}</span></div><span className={`w-7 h-7 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}>{open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}</span></div>{open && (<div className="px-6 pb-5 pl-16"><div className="border-l-2 border-brand-300 pl-4"><div className="text-[10px] font-mono uppercase tracking-wider text-brand-600 font-semibold mb-1.5">How we solve it</div><p className="text-sm text-neutral-700 leading-relaxed">{c.solution}</p></div></div>)}</button>); })}
              </div>
            </Reveal>
            <Reveal delay={200} direction="left">
              <div className="lg:sticky lg:top-28 lg:self-start space-y-4">
                <div className="bg-neutral-950 text-white rounded-lg p-7"><div className="text-xs text-brand-300 uppercase tracking-wider font-semibold mb-3">The Pattern</div><p className="text-base text-neutral-200 leading-relaxed">Many enterprises struggle to connect AI agents to legacy applications and workflows seamlessly.</p></div>
                <div className="bg-white border border-neutral-200 rounded-lg p-7">
                  <div className="text-xs text-brand-600 uppercase tracking-wider font-semibold mb-3">Our Approach</div>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">Tackxel integrates agentic AI with enterprise systems — ensuring smooth operations and full interoperability.</p>
                  <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><Zap className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">70%</div><div className="text-xs text-neutral-500 mt-0.5">Faster System Integration</div></div>
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><TrendingUp className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">45%</div><div className="text-xs text-neutral-500 mt-0.5">Fewer Manual Errors</div></div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BLUE CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="relative bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 rounded-2xl p-10 lg:p-12 overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
              <Parallax speed={0.15} className="absolute -top-20 -right-20 hidden lg:block pointer-events-none"><div className="w-80 h-80 rounded-full bg-white/10 blur-3xl" /></Parallax>
              <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
                <div><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-3">Want To Eliminate Repetitive Tasks And Maximize AI&apos;s Potential?</h2><p className="text-base text-brand-50 leading-relaxed max-w-xl">Tackxel delivers autonomous AI agents that reduce manual work, improve accuracy, and deliver significant operational savings.</p></div>
                <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2 w-fit lg:justify-self-end">Request Agentic AI Assessment<ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Industries We Serve</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">Custom Agentic AI Solutions <span className="text-brand-600">For Every Industry</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Tackxel delivers intelligent and autonomous AI solutions across industries — helping businesses improve efficiency, comply with regulations, and achieve measurable results with industry-specific expertise.</p></div></Reveal>
          <Reveal delay={150}>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-10">
              <ul className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100 h-fit">
                {industries.map((ind, i) => (<li key={ind.name}><button onClick={() => setActiveIndustry(i)} className={`w-full text-left flex items-center justify-between gap-4 px-6 py-4 transition-colors ${activeIndustry === i ? "bg-brand-50" : "hover:bg-neutral-50"}`}><div className="flex items-center gap-4"><div className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${activeIndustry === i ? "bg-brand-500 border-brand-500" : "bg-brand-50 border-brand-100"}`}><ind.Icon className={`w-4 h-4 ${activeIndustry === i ? "text-white" : "text-brand-600"}`} /></div><span className={`text-base font-semibold ${activeIndustry === i ? "text-brand-700" : "text-neutral-900"}`}>{ind.name}</span></div><ArrowRight className={`w-4 h-4 transition-all ${activeIndustry === i ? "text-brand-600 translate-x-1" : "text-neutral-300"}`} /></button></li>))}
              </ul>
              <div className="bg-white border border-neutral-200 rounded-lg p-8 lg:p-10 self-start">
                <div className="flex items-start gap-5 mb-6"><div className="w-16 h-16 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center flex-shrink-0"><activeIndustryData.Icon className="w-7 h-7 text-brand-600" /></div><div><div className="text-eyebrow text-brand-600 uppercase mb-2 font-semibold tracking-widest">Industry Focus</div><h3 className="font-display text-h2 text-neutral-950 leading-tight">{activeIndustryData.name}</h3></div></div>
                <p className="text-base text-neutral-700 leading-relaxed mb-6">{activeIndustryData.desc}</p>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden mb-6">{activeIndustryData.examples.map((ex) => (<div key={ex} className="bg-white p-4 flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" /><span className="text-sm text-neutral-800 font-medium">{ex}</span></div>))}</div>
                <Link href="/contact" className="btn-brand">Discover How AI Can Transform Your Industry<ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ADVANTAGE */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-700/30 via-neutral-950 to-neutral-950" />
        <Parallax speed={0.15} className="absolute bottom-0 right-0 hidden lg:block pointer-events-none"><div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tackxel Advantage</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">What Makes Tackxel <span className="text-brand-300">A Reliable Agentic AI Development Partner?</span></h2></div><p className="text-base text-neutral-300 leading-relaxed lg:justify-self-end max-w-xl">We deliver autonomous AI solutions that solve your toughest challenges — improving efficiency and driving measurable outcomes for your business.</p></div></Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800 rounded-lg overflow-hidden">
            {advantages.map((a, i) => (<Reveal key={a.no} delay={i * 80}><div className="bg-neutral-950 p-7 hover:bg-neutral-900/60 transition-colors h-full card-lift"><div className="flex items-start gap-4 mb-3"><div className="w-10 h-10 rounded-md bg-brand-500/15 border border-brand-500/25 flex items-center justify-center flex-shrink-0"><span className="font-mono text-xs font-bold text-brand-300">{a.no}</span></div><h3 className="text-base font-semibold text-white pt-2 leading-snug">{a.title}</h3></div><p className="text-sm text-neutral-400 leading-relaxed pl-14">{a.desc}</p></div></Reveal>))}
          </div>
        </div>
      </section>

      {/* RECOGNIZED BY */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="text-center mb-12"><div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Recognition</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">We Are <span className="text-brand-600">Recognized By</span></h2></div></Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {awards.map((a, i) => (<Reveal key={i} delay={i * 60}><div className="bg-white p-5 flex flex-col items-center text-center card-lift h-full"><LaurelIcon className="w-12 h-14 mb-3 text-brand-500" /><div className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-1">{a.platform}</div><div className="text-[11px] text-neutral-600 leading-snug mb-1">{a.title}</div><div className="text-[10px] text-neutral-400 font-mono">{a.year}</div></div></Reveal>))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 lg:py-24 bg-neutral-950 text-white relative overflow-hidden">
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none"><div className="w-96 h-96 rounded-full bg-brand-500/10 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tech Stack</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">Our Agentic AI Technology Stack</h2></div><p className="text-base text-neutral-400 leading-relaxed max-w-xl lg:justify-self-end">We build agentic AI systems using trusted frameworks, models, and infrastructure that support autonomy, scalability, observability, and secure deployment across enterprise environments.</p></div></Reveal>
          <Reveal delay={100}>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
              <div className="flex flex-wrap gap-px bg-neutral-800 border-b border-neutral-800">{techStackTabs.map((t, i) => (<button key={t.category} onClick={() => setActiveStack(i)} className={`flex-1 min-w-[120px] px-4 lg:px-6 py-4 text-sm font-medium transition-all ${activeStack === i ? "bg-brand-600 text-white border-b-2 border-b-brand-300" : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800/60 hover:text-white"}`}><div className="text-xs font-mono mb-1 opacity-70">{String(i + 1).padStart(2, "0")}</div>{t.category}</button>))}</div>
              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
                  <div><div className="text-eyebrow text-brand-300 uppercase mb-3 font-semibold tracking-widest">{String(activeStack + 1).padStart(2, "0")} · Tech Category</div><h3 className="font-display text-h2 text-white mb-3">{activeStackData.category}</h3><p className="text-sm text-neutral-400 leading-relaxed">{activeStackData.techs.length} production-grade technologies for agentic AI development.</p></div>
                  <div className="flex flex-wrap gap-2.5">{activeStackData.techs.map((tech) => (<span key={tech} className="inline-flex items-center px-4 py-2.5 rounded-md border border-neutral-700 bg-neutral-950 text-sm text-neutral-200 hover:border-brand-500 hover:text-white transition-colors">{tech}</span>))}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-16">
            <Reveal><div className="lg:sticky lg:top-28 lg:self-start"><div className="text-eyebrow text-brand-600 uppercase mb-4">FAQ</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-4">Common questions <span className="text-brand-600">before we start</span></h2><p className="text-base text-neutral-600 leading-relaxed mb-6">Everything procurement, engineering, and finance teams typically ask before signing.</p><Link href="/contact" className="btn-secondary">Ask a different question<ArrowRight className="w-4 h-4" /></Link></div></Reveal>
            <Reveal delay={200}>
              <div className="border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-200">
                {faqs.map((f, i) => { const open = openFaq === i; return (<button key={f.q} onClick={() => setOpenFaq(open ? null : i)} className="w-full text-left px-6 lg:px-7 py-5 hover:bg-neutral-50 transition-colors block"><div className="flex items-center justify-between gap-6"><div className="flex items-start gap-4"><span className="font-mono text-xs font-bold text-brand-600 mt-1">{String(i + 1).padStart(2, "0")}</span><span className="text-base font-semibold text-neutral-900 leading-snug">{f.q}</span></div><span className={`w-7 h-7 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}>{open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}</span></div>{open && (<p className="text-sm text-neutral-600 leading-relaxed mt-4 pl-10">{f.a}</p>)}</button>); })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-neutral-950 text-white border-t border-neutral-800 relative overflow-hidden">
        <Parallax speed={0.15} className="absolute top-0 right-0 hidden lg:block pointer-events-none"><div className="w-80 h-80 rounded-full bg-brand-500/10 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-eyebrow text-brand-300 uppercase mb-4">Get in touch</div>
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">Ready to deploy production agentic AI?</h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">Free 30-minute agentic AI strategy session with a senior engineer. No slide decks, no sales reps.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-brand">Talk to an AI engineer<ArrowRight className="w-4 h-4" /></Link>
              <Link href="/services" className="btn-ghost-light">Back to all services<ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
