"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Award, Clock, ShieldCheck,
  TrendingUp, Zap, Plus, Minus,
  Sparkles, MessageSquare, Database, GitBranch, Network, Lock,
  Heart, Building2, ShoppingBag, Factory, Cloud, Shield,
  FileText, BarChart3, Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";

const services = [
  {
    Icon: Sparkles,
    name: "Custom Generative AI Application Development",
    tagline: "Gen AI grounded in your proprietary data.",
    desc: "Custom Gen AI applications securely grounded in your business data — built for production inference at thousands of requests per minute, with multimodal output support.",
    bullets: [
      "Securely ground Gen AI applications in proprietary business data.",
      "Enable text, image, video, code, and multimodal generation in one system.",
      "Power internal tools and workflows used by real business teams.",
      "Designed for production inference at thousands of requests per minute.",
      "Full ownership of prompts, fine-tuned models, and infrastructure.",
    ],
    metric: { value: "1000+", label: "Requests per minute" },
  },
  {
    Icon: MessageSquare,
    name: "LLM Application Development",
    tagline: "GPT, Claude, Gemini, LLaMA — production-ready.",
    desc: "Production-grade LLM applications built on GPT, Claude, Gemini, and LLaMA — with private, open-source, and hybrid deployment strategies tailored to your security and cost requirements.",
    bullets: [
      "Build LLM applications using GPT, Claude, Gemini, and LLaMA models.",
      "Deliver custom LLM development aligned with business requirements.",
      "Support private, open-source, and hybrid deployment strategies.",
      "Reduce inference costs through model and pipeline optimization.",
      "A/B testing infrastructure across multiple foundation models.",
    ],
    metric: { value: "60%", label: "Inference cost reduction" },
  },
  {
    Icon: Database,
    name: "RAG Architecture and Knowledge Systems",
    tagline: "Ground AI in your verified knowledge.",
    desc: "Retrieval-augmented generation systems supporting millions of internal documents — with vector databases, embeddings, semantic search, and citation-grounded responses.",
    bullets: [
      "Implement retrieval augmented generation for private company datasets.",
      "Integrate vector databases using embeddings and semantic search.",
      "Create AI knowledge systems supporting millions of internal documents.",
      "Improve answer accuracy by grounding responses in verified sources.",
      "Citations, confidence scoring, and source attribution built in.",
    ],
    metric: { value: "10M+", label: "Documents indexed" },
  },
  {
    Icon: GitBranch,
    name: "Model Fine-Tuning and Prompt Engineering",
    tagline: "Domain-tuned models, hallucination-free outputs.",
    desc: "Fine-tuning and prompt engineering services that adapt foundation models to your domain terminology — reducing hallucinations and improving response relevance for production use cases.",
    bullets: [
      "Fine-tune models for domain-specific accuracy and terminology.",
      "Apply structured prompt frameworks to reduce hallucinations.",
      "Increase response relevance for internal use cases.",
      "Continuously evaluate performance using real business queries.",
      "LoRA, PEFT, and full fine-tuning supported across foundation models.",
    ],
    metric: { value: "85%", label: "Hallucination reduction" },
  },
  {
    Icon: Network,
    name: "Gen AI Integration and Implementation",
    tagline: "Embed Gen AI into your existing stack.",
    desc: "Seamless integration of Gen AI systems into your existing platforms — APIs across internal tools, CRM, ERP, document management, and low-latency performance at enterprise scale.",
    bullets: [
      "Integrate Gen AI systems into existing company platforms.",
      "Deploy APIs across internal tools, applications, and workflows.",
      "Connect securely with CRM, ERP, and document management systems.",
      "Maintain low-latency performance under enterprise-scale workloads.",
      "SSO, role-based access control, and audit trails built in.",
    ],
    metric: { value: "<500ms", label: "End-to-end latency" },
  },
  {
    Icon: Lock,
    name: "Secure and Responsible Gen AI Systems",
    tagline: "SOC 2, GDPR, EU AI Act compliant.",
    desc: "Generative AI engineered for regulated environments — aligned with SOC 2, GDPR, and EU AI Act, with governance controls for access, monitoring, and audit readiness.",
    bullets: [
      "Engineer secure generative AI systems for business environments.",
      "Align solutions with SOC 2, GDPR, and internal compliance standards.",
      "Implement governance controls for access, monitoring, and usage.",
      "Support explainability and audit readiness for regulated teams.",
      "PII redaction, content filtering, and bias auditing built in.",
    ],
    metric: { value: "100%", label: "Audit-ready compliance" },
  },
];

const process = [
  { no: "01", title: "Use-Case Discovery", duration: "1–2 weeks", desc: "Map business goals to Gen AI opportunities, prioritize use cases by ROI, and define success metrics. We start with what matters, not what's trendy." },
  { no: "02", title: "Data & Architecture", duration: "1–2 weeks", desc: "Data audit, RAG pipeline design, foundation model selection, and security architecture. Foundations for production scale, not just PoC magic." },
  { no: "03", title: "Iterative Gen AI Build", duration: "6–14 weeks", desc: "Two-week sprints with working Gen AI app at every demo. Prompt engineering, fine-tuning, and evaluation tracked rigorously throughout." },
  { no: "04", title: "Evaluation & Hardening", duration: "1–2 weeks", desc: "Quality evaluation, security review, bias testing, and load validation. Production launch with monitoring, fallback, and rollback safety." },
  { no: "05", title: "Operate & Evolve", duration: "Ongoing", desc: "Continuous evaluation, prompt updates, and model upgrades. Quarterly reviews tying Gen AI investment to measurable business outcomes." },
];

const useCases = [
  {
    Icon: FileText,
    title: "Automated Content Creation",
    desc: "Instantly generate marketing copy, product descriptions, and social media content — saving time, reducing costs, and maintaining consistent, on-brand messaging that engages your audience at scale.",
  },
  {
    Icon: BarChart3,
    title: "Data-Driven Insights",
    desc: "Turn raw data into predictive intelligence with AI-powered models. Make smarter decisions, forecast accurately, and optimize operations for measurable business growth backed by Gen AI.",
  },
  {
    Icon: Users,
    title: "Personalized Customer Experiences",
    desc: "Deliver customized recommendations, interactive chatbots, and dynamic experiences that boost satisfaction, loyalty, and engagement — while reducing support workload efficiently.",
  },
];

const challenges = [
  { title: "Data Quality and Availability",         solution: "Data audit, cleansing, and structured ingestion pipelines run as Phase 1. We refuse to train Gen AI on bad data — it just produces confident wrong answers at scale." },
  { title: "Model Integration Complexity",          solution: "Standardized integration frameworks with API contracts, schema validation, and orchestration layers. Smooth deployment without the wiring headaches that derail most Gen AI projects." },
  { title: "Maintaining Output Consistency",        solution: "Structured prompts, response templates, and evaluation frameworks tracking consistency across thousands of queries. Output drift is detected and corrected automatically." },
  { title: "Scalability of AI Solutions",           solution: "Stateless inference architecture, autoscaling on cloud platforms, and caching strategies. From 100 queries a day to 10 million — no architecture rewrite required." },
  { title: "AI Explainability & Trust",             solution: "Citation-grounded responses with RAG, confidence scoring, and full reasoning traces. Users see WHY the AI answered as it did, not just black-box output." },
  { title: "Rapidly Evolving AI Landscape",         solution: "Model-agnostic architecture supporting GPT, Claude, Gemini, and Llama. Swap foundation models without rewriting your application — quarterly model reviews built in." },
  { title: "Cost of AI Implementation",             solution: "Model quantization, prompt optimization, intelligent caching, and right-sized infrastructure. Most engagements cut inference costs 50–70% versus naive deployments." },
  { title: "Hallucinations and Wrong Outputs",      solution: "RAG architecture grounding answers in verified knowledge, confidence thresholds, and human-in-the-loop escalation for low-confidence responses. 85% hallucination reduction on average." },
  { title: "Security and Compliance Risks",         solution: "PII redaction, audit trails, content filtering, and on-premise/VPC deployment options. SOC 2, GDPR, HIPAA, EU AI Act compliance built in from day one." },
  { title: "Measuring Gen AI ROI",                  solution: "KPI dashboards tracking cost saved, time recovered, and revenue gained — tied to every Gen AI deployment. Quarterly ROI reports built into the engagement." },
];

const industries = [
  { Icon: Heart, name: "Healthcare & HealthTech", desc: "HIPAA-compliant Gen AI for clinical documentation, patient communication, medical content generation, and drug discovery — built for hospital networks and digital health platforms.", examples: ["Clinical documentation", "Patient communication", "Medical content", "Drug discovery"] },
  { Icon: Building2, name: "FinTech & Financial Services", desc: "Gen AI for financial advice, document analysis, regulatory reporting, and personalized banking — PCI compliant, SOC 2 audited, banking-grade security.", examples: ["Financial advice", "Document analysis", "Regulatory reporting", "Personal banking"] },
  { Icon: ShoppingBag, name: "Retail & eCommerce", desc: "Gen AI for product descriptions, personalized recommendations, conversational shopping, and content generation — driving conversion at omnichannel scale.", examples: ["Product descriptions", "Personalized recs", "Conversational shopping", "Content generation"] },
  { Icon: Factory, name: "Manufacturing", desc: "Gen AI for technical documentation, predictive maintenance insights, supply chain analysis, and operational intelligence — combining structured data with multimodal AI.", examples: ["Technical docs", "Maintenance insights", "Supply chain AI", "Operational intelligence"] },
  { Icon: Cloud, name: "SaaS & Technology", desc: "Gen AI features that turn your SaaS product into an AI-native platform — copilots, content generation, intelligent search, and automated workflows.", examples: ["AI copilots", "Content generation", "Intelligent search", "Auto workflows"] },
  { Icon: Shield, name: "Insurance & Insurtech", desc: "Gen AI for claims processing, policy analysis, underwriting support, and customer service — built for regulatory environments with audit trails.", examples: ["Claims processing", "Policy analysis", "Underwriting AI", "Customer service"] },
];

const advantages = [
  { no: "01", title: "Proven Gen AI Experience",        desc: "Proven Gen AI experience across use cases and industries — ensuring predictable delivery, repeatable patterns, and measurable outcomes." },
  { no: "02", title: "Built for Real Integration",      desc: "Solutions designed for integration with existing systems, workflows, and teams — reducing disruption and speeding adoption." },
  { no: "03", title: "Designed to Scale",               desc: "Scalable architectures that scale with data volume, user base, and complexity — without performance trade-offs over time." },
  { no: "04", title: "Security and Compliance First",   desc: "Strong focus on data governance, security, and compliance — supporting regulated environments and enterprise-grade requirements." },
  { no: "05", title: "Trustworthy AI Outputs",          desc: "Clear emphasis on accuracy, consistency, and explainability — building trust in AI-generated outputs across organizations." },
  { no: "06", title: "Transparent Delivery Model",      desc: "Transparent collaboration model with clear ownership, documentation, and communication throughout development and deployment phases globally." },
];

const techStackTabs = [
  { category: "AI Frameworks & Libraries", techs: ["TensorFlow", "PyTorch", "Keras", "Hugging Face Transformers", "JAX", "ONNX", "OpenVINO", "DeepSpeed", "Accelerate"] },
  { category: "LLMs & Foundation Models",  techs: ["OpenAI GPT-5", "Anthropic Claude", "Google Gemini", "Meta Llama 4", "Mistral", "Cohere Command", "Hugging Face Hub", "Anyscale"] },
  { category: "RAG & Vector Databases",    techs: ["Pinecone", "Weaviate", "ChromaDB", "Qdrant", "Milvus", "pgvector", "LlamaIndex", "LangChain", "Haystack"] },
  { category: "Programming Languages",     techs: ["Python", "TypeScript", "Rust", "Go", "JavaScript", "Java", "C++", "Swift", "Kotlin"] },
  { category: "Cloud Platforms & Services", techs: ["AWS Bedrock", "Azure OpenAI", "Google Vertex AI", "Anyscale", "Replicate", "Modal", "Together AI", "Anthropic API"] },
  { category: "MLOps & Evaluation",        techs: ["LangSmith", "Helicone", "Weights & Biases", "MLflow", "Promptfoo", "Ragas", "DeepEval", "OpenAI Evals"] },
];

const faqs = [
  { q: "How quickly can you start a Gen AI development project?", a: "Most engagements begin within two weeks. We run a technical discovery, agree on scope and team composition, sign the MSA and SOW, and onboard your dedicated Gen AI engineers into your environments. Urgent needs can compress this to one week." },
  { q: "Can our Gen AI app run on-premise or in our private VPC?", a: "Yes — we routinely deploy Gen AI on AWS VPC, Azure private cloud, GCP, or fully on-premise. We work with open-source models (Llama, Mistral) where data sovereignty is mandatory, and with private OpenAI/Anthropic endpoints where allowed." },
  { q: "How do you prevent hallucinations and ensure accuracy?", a: "RAG architecture grounding responses in your verified knowledge base, confidence thresholds with human-in-the-loop escalation, and continuous evaluation against ground truth datasets. Most clients see 85% hallucination reduction versus baseline LLM outputs." },
  { q: "Who owns the fine-tuned models, prompts, and IP?", a: "You do — from day one. All prompts, fine-tuned weights, training data, and outputs are licensed exclusively to you. We deliberately avoid lock-in patterns — you can take everything in-house at engagement end with zero migration cost." },
  { q: "What does a Gen AI development project typically cost?", a: "PoC Gen AI projects typically range from USD 40K to USD 100K for a 6–8 week build. Production Gen AI applications range from USD 150K to USD 500K. Dedicated Gen AI teams start at around USD 35K per month for a small squad." },
  { q: "How do you handle EU AI Act and regulatory compliance?", a: "Every engagement includes risk classification, model documentation, bias auditing, transparency reports, and audit trails — aligned with EU AI Act, GDPR, HIPAA, and SOC 2. For high-risk applications, we provide full compliance documentation suitable for regulator review." },
];

const awards = [
  { platform: "Clutch",        title: "Top Gen AI Developers",     year: "2024" },
  { platform: "GoodFirms",     title: "Top Generative AI Co.",     year: "2024" },
  { platform: "TopDevelopers", title: "Top LLM Development",       year: "2024" },
  { platform: "Firmstalk",     title: "Top AI Companies",          year: "2024" },
  { platform: "AppFuturo",     title: "Gen AI Innovation",         year: "2024" },
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

export default function GenerativeAIPage() {
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
          <Reveal><nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-mono"><Link href="/" className="hover:text-brand-300 transition-colors">Home</Link><span>/</span><Link href="/services" className="hover:text-brand-300 transition-colors">Services</Link><span>/</span><span className="text-brand-300">Generative AI</span></nav></Reveal>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><span className="badge-dark mb-6"><span className="dot-pulse" />Powering innovation with AI</span></Reveal>
              <Reveal delay={80}><div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">Build · Train · Automate · Scale</div></Reveal>
              <Reveal delay={140}><h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">Custom Gen AI Development Services Company.</h1></Reveal>
              <Reveal delay={220}><p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">Our Gen AI development solutions help businesses deploy secure LLM apps trained on proprietary data — delivering efficiency gains while meeting performance, privacy, and compliance requirements.</p></Reveal>
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
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Award className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">#1 Top-Rated</div><div className="text-xs text-neutral-400">Gen AI Development Company</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Clock className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">U.S. Time Zone</div><div className="text-xs text-neutral-400">Senior Gen AI engineers · 9am–5pm EST</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Sparkles className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">Dedicated</div><div className="text-xs text-neutral-400">Gen AI Engineers · SOC 2 · ISO 27001</div></div></div>
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
                <div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center mb-4"><Lock className="w-5 h-5 text-brand-300" /></div>
                <h3 className="font-display text-h3 text-white mb-2">Private And On-Premise Gen AI Systems</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">We deploy private Gen AI solutions on VPC or on-premise infrastructure — ensuring full data ownership, audit trails, and compliance with SOC 2 and GDPR standards.</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white rounded-lg p-7 h-full card-lift overflow-hidden relative">
                <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-md bg-white/15 border border-white/25 flex items-center justify-center mb-4"><Network className="w-5 h-5 text-white" /></div>
                  <h3 className="font-display text-h3 text-white mb-2">Enterprise Gen AI Architecture And Strategy</h3>
                  <p className="text-sm text-brand-50 leading-relaxed">We design Gen AI system architecture aligned with business goals, security policies, and scale requirements — reducing deployment risk and long-term technical debt.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-white border border-neutral-200 rounded-lg p-7 h-full">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-600 font-semibold mb-2">Your Trusted</div>
                <h3 className="font-display text-h3 text-neutral-950 mb-5">Generative AI <span className="text-brand-600">Provider</span></h3>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={10} suffix="+" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Years of AI Engineering</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950">Top <Counter to={1} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Vetted AI Talent</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={10} suffix="+" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Industries Served</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={25} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Senior Gen AI Engineers</div></div>
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
          <Reveal><div className="text-center mb-14"><div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Our Generative AI Development Services</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">Designed For <span className="text-brand-600">Production, Scale, And Control</span></h2><p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">Click any service below to explore the engineering depth, Gen AI capabilities, and measurable outcomes we deliver.</p></div></Reveal>
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
                  <Link href="/contact" className="btn-brand mt-8">Discuss your Gen AI project<ArrowRight className="w-4 h-4" /></Link>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-xl p-6 flex items-center justify-center aspect-square"><activeServiceData.Icon className="w-32 h-32 lg:w-40 lg:h-40 text-brand-500" strokeWidth={1.2} /></div>
                  <div className="bg-neutral-950 text-white rounded-xl p-6"><div className="text-xs font-mono text-brand-300 uppercase tracking-wider mb-2 font-semibold">Measurable Outcome</div><div className="font-display text-4xl font-bold text-white mb-1 tracking-display">{activeServiceData.metric.value}</div><div className="text-sm text-neutral-400">{activeServiceData.metric.label}</div></div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}><div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">{services.map((s, i) => (<button key={s.name} onClick={() => setActiveService(i)} className={`p-6 text-left transition-colors ${activeService === i ? "bg-brand-50" : "bg-white hover:bg-neutral-50"}`}><div className="flex items-start gap-4"><div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0"><s.Icon className="w-5 h-5 text-brand-600" /></div><div><h3 className="text-sm font-semibold text-neutral-950 mb-1">{s.name}</h3><p className="text-xs text-neutral-600 leading-relaxed">{s.tagline}</p></div></div></button>))}</div></Reveal>
          <Reveal delay={300}><div className="mt-10 flex justify-center"><Link href="/contact" className="btn-brand">Need Gen AI Built on Your Data?<ArrowRight className="w-4 h-4" /></Link></div></Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Delivery Process</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">How we ship Gen AI, <span className="text-brand-600">every engagement</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-xl">A repeatable, transparent delivery process refined across 100+ Gen AI engagements. Working Gen AI apps in week three — never a slide deck pretending to be progress.</p></div></Reveal>
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
              <Reveal><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4">Gen AI Use Cases: <span className="text-brand-300">Driving Real Business Results</span></h2><p className="text-base text-neutral-300 leading-relaxed mb-8 max-w-lg">With Tackxel, you can explore AI applications that streamline workflows, spark creativity, and deliver measurable impact for forward-thinking businesses.</p></Reveal>
              <div className="space-y-4">{useCases.map((t, i) => (<Reveal key={t.title} delay={i * 100}><div className="bg-neutral-900/70 backdrop-blur border border-neutral-800 rounded-lg p-6 card-lift"><div className="flex items-start gap-4"><div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center flex-shrink-0"><t.Icon className="w-6 h-6 text-brand-300" /></div><div><h3 className="text-base font-semibold text-white mb-1.5">{t.title}</h3><p className="text-sm text-neutral-400 leading-relaxed">{t.desc}</p></div></div></div></Reveal>))}</div>
              <Reveal delay={400}><Link href="/contact" className="btn-brand mt-8">Experience Smarter and Faster Business Solutions<ArrowRight className="w-4 h-4" /></Link></Reveal>
            </div>
            <Reveal delay={300} direction="left">
              <div className="relative bg-neutral-900/40 backdrop-blur border border-neutral-800 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <svg viewBox="0 0 320 320" className="w-full h-full">
                  <defs><radialGradient id="coreGlowGen" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#5278C2" stopOpacity="0.5" /><stop offset="100%" stopColor="#3159A5" stopOpacity="0" /></radialGradient></defs>
                  <circle cx="160" cy="160" r="60" fill="url(#coreGlowGen)" />
                  <circle cx="160" cy="160" r="130" fill="none" stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 4" />
                  <circle cx="160" cy="160" r="100" fill="none" stroke="#3159A5" strokeOpacity="0.25" strokeWidth="1.2" />
                  <circle cx="160" cy="160" r="70" fill="none" stroke="#3159A5" strokeOpacity="0.35" strokeWidth="1.2" />
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => { const rad = (deg * Math.PI) / 180; const x = 160 + Math.cos(rad) * 130; const y = 160 + Math.sin(rad) * 130; return (<g key={i}><line x1="160" y1="160" x2={x} y2={y} stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1" /><circle cx={x} cy={y} r="6" fill="#5278C2" /><circle cx={x} cy={y} r="10" fill="none" stroke="#5278C2" strokeOpacity="0.3" /></g>); })}
                  <circle cx="160" cy="160" r="32" fill="#3159A5" />
                  <text x="160" y="167" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" fontFamily="Geist">GEN AI</text>
                  {[{ label: "LLM", x: 290, y: 160 }, { label: "RAG", x: 225, y: 47 }, { label: "FINE-TUNE", x: 80, y: 47 }, { label: "PRIVATE", x: 30, y: 160 }, { label: "MULTIMODAL", x: 75, y: 273 }, { label: "VECTOR", x: 235, y: 273 }].map((t) => (<g key={t.label}><rect x={t.x - 36} y={t.y - 11} width="72" height="22" rx="4" fill="#1D376A" stroke="#3159A5" strokeOpacity="0.4" /><text x={t.x} y={t.y + 4} textAnchor="middle" fontSize="8" fontWeight="700" fill="#7E9DD7" fontFamily="Geist">{t.label}</text></g>))}
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-end mb-12"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Common Challenges</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-3">Top Challenges In Generative AI Development And How We Solve Them</h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Click any challenge to reveal exactly how we solve it.</p></div></Reveal>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-12">
            <Reveal>
              <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100">
                {challenges.map((c, i) => { const open = openChallenge === i; return (<button key={c.title} onClick={() => setOpenChallenge(open ? null : i)} className="w-full text-left hover:bg-neutral-50 transition-colors block"><div className="flex items-center justify-between gap-6 px-6 py-4"><div className="flex items-start gap-4 flex-1"><span className="font-mono text-xs font-semibold text-brand-600 pt-1 w-6">{String(i + 1).padStart(2, "0")}</span><span className="text-sm font-semibold text-neutral-900 leading-snug">{c.title}</span></div><span className={`w-7 h-7 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}>{open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}</span></div>{open && (<div className="px-6 pb-5 pl-16"><div className="border-l-2 border-brand-300 pl-4"><div className="text-[10px] font-mono uppercase tracking-wider text-brand-600 font-semibold mb-1.5">How we solve it</div><p className="text-sm text-neutral-700 leading-relaxed">{c.solution}</p></div></div>)}</button>); })}
              </div>
            </Reveal>
            <Reveal delay={200} direction="left">
              <div className="lg:sticky lg:top-28 lg:self-start space-y-4">
                <div className="bg-neutral-950 text-white rounded-lg p-7"><div className="text-xs text-brand-300 uppercase tracking-wider font-semibold mb-3">The Pattern</div><p className="text-base text-neutral-200 leading-relaxed">Low-quality or fragmented data limits AI model accuracy and reduces useful insights for businesses.</p></div>
                <div className="bg-white border border-neutral-200 rounded-lg p-7">
                  <div className="text-xs text-brand-600 uppercase tracking-wider font-semibold mb-3">Our Approach</div>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">We clean, structure, and augment data to ensure precise AI outputs that drive business value.</p>
                  <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><Zap className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">85%</div><div className="text-xs text-neutral-500 mt-0.5">Hallucination Reduction</div></div>
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><TrendingUp className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">60%</div><div className="text-xs text-neutral-500 mt-0.5">Faster Data Preparation</div></div>
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
                <div><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-3">Facing Gen AI Roadblocks That Slow Execution And Limit Real Results?</h2><p className="text-base text-brand-50 leading-relaxed max-w-xl">Partner with Tackxel to design, integrate, and scale Gen AI solutions that fit your workflows, improve accuracy, and deliver consistent outcomes across teams.</p></div>
                <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2 w-fit lg:justify-self-end">Make Gen AI Work for Your Business<ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Industries We Serve</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">Industries We Support <span className="text-brand-600">With Generative AI Solutions</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Tackxel, as a leading Gen AI solution partner, delivers industry-specific Gen AI solutions that solve compliance, data, and scalability challenges while improving efficiency, decision-making, and customer experiences.</p></div></Reveal>
          <Reveal delay={150}>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-10">
              <ul className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100 h-fit">
                {industries.map((ind, i) => (<li key={ind.name}><button onClick={() => setActiveIndustry(i)} className={`w-full text-left flex items-center justify-between gap-4 px-6 py-4 transition-colors ${activeIndustry === i ? "bg-brand-50" : "hover:bg-neutral-50"}`}><div className="flex items-center gap-4"><div className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${activeIndustry === i ? "bg-brand-500 border-brand-500" : "bg-brand-50 border-brand-100"}`}><ind.Icon className={`w-4 h-4 ${activeIndustry === i ? "text-white" : "text-brand-600"}`} /></div><span className={`text-base font-semibold ${activeIndustry === i ? "text-brand-700" : "text-neutral-900"}`}>{ind.name}</span></div><ArrowRight className={`w-4 h-4 transition-all ${activeIndustry === i ? "text-brand-600 translate-x-1" : "text-neutral-300"}`} /></button></li>))}
              </ul>
              <div className="bg-white border border-neutral-200 rounded-lg p-8 lg:p-10 self-start">
                <div className="flex items-start gap-5 mb-6"><div className="w-16 h-16 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center flex-shrink-0"><activeIndustryData.Icon className="w-7 h-7 text-brand-600" /></div><div><div className="text-eyebrow text-brand-600 uppercase mb-2 font-semibold tracking-widest">Industry Focus</div><h3 className="font-display text-h2 text-neutral-950 leading-tight">{activeIndustryData.name}</h3></div></div>
                <p className="text-base text-neutral-700 leading-relaxed mb-6">{activeIndustryData.desc}</p>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden mb-6">{activeIndustryData.examples.map((ex) => (<div key={ex} className="bg-white p-4 flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" /><span className="text-sm text-neutral-800 font-medium">{ex}</span></div>))}</div>
                <Link href="/contact" className="btn-brand">Discuss Your Industry-Specific Gen AI Use Case<ArrowRight className="w-4 h-4" /></Link>
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
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tackxel Advantage</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">Why Businesses Choose Tackxel <span className="text-brand-300">For Generative AI Development</span></h2></div><p className="text-base text-neutral-300 leading-relaxed lg:justify-self-end max-w-xl">Tackxel combines deep AI expertise, industry context, and delivery discipline to build reliable, scalable Gen AI solutions for businesses globally.</p></div></Reveal>
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
          <Reveal><div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tech Stack</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">Technologies &amp; Tools Driving Our Gen AI Solutions</h2></div><p className="text-base text-neutral-400 leading-relaxed max-w-xl lg:justify-self-end">We use advanced AI frameworks, models, cloud platforms, and deployment tools to deliver scalable, intelligent, and high-performance generative AI solutions for diverse industries.</p></div></Reveal>
          <Reveal delay={100}>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
              <div className="flex flex-wrap gap-px bg-neutral-800 border-b border-neutral-800">{techStackTabs.map((t, i) => (<button key={t.category} onClick={() => setActiveStack(i)} className={`flex-1 min-w-[120px] px-4 lg:px-6 py-4 text-sm font-medium transition-all ${activeStack === i ? "bg-brand-600 text-white border-b-2 border-b-brand-300" : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800/60 hover:text-white"}`}><div className="text-xs font-mono mb-1 opacity-70">{String(i + 1).padStart(2, "0")}</div>{t.category}</button>))}</div>
              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
                  <div><div className="text-eyebrow text-brand-300 uppercase mb-3 font-semibold tracking-widest">{String(activeStack + 1).padStart(2, "0")} · Tech Category</div><h3 className="font-display text-h2 text-white mb-3">{activeStackData.category}</h3><p className="text-sm text-neutral-400 leading-relaxed">{activeStackData.techs.length} production-grade technologies for Gen AI development.</p></div>
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
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">Ready to deploy production Gen AI?</h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">Free 30-minute Gen AI strategy session with a senior engineer. No slide decks, no sales reps.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-brand">Talk to a Gen AI engineer<ArrowRight className="w-4 h-4" /></Link>
              <Link href="/services" className="btn-ghost-light">Back to all services<ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
