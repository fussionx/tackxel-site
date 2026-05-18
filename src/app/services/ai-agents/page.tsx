"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Award, Clock, ShieldCheck,
  TrendingUp, Zap, Plus, Minus,
  Bot, MessageSquare, Mic, Globe, Wrench, Activity,
  Heart, Building2, ShoppingBag, GraduationCap, Leaf, UtensilsCrossed,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";

const services = [
  {
    Icon: Bot,
    name: "Custom AI Agent Development",
    tagline: "AI agents built to your business needs.",
    desc: "Custom AI agents engineered to automate customer interactions, handle routine tasks, and integrate with your existing tools — enhancing engagement and operational efficiency.",
    bullets: [
      "AI agent development services customized to your business needs.",
      "Enhanced automation, customer engagement, and operational efficiency.",
      "Built on top of GPT, Claude, and other foundation models.",
      "Multi-step reasoning, tool use, and memory built in by default.",
      "Full ownership of agent logic, prompts, and integrations.",
    ],
    metric: { value: "45%", label: "Operational cost reduction" },
  },
  {
    Icon: MessageSquare,
    name: "Conversational Agent UX & Design",
    tagline: "Agents that feel natural to talk with.",
    desc: "Conversational UX and interface design that makes AI agents intuitive, on-brand, and effective — designed by senior product designers who specialize in conversational flows.",
    bullets: [
      "Expert AI agent UX/UI design and development services.",
      "Intuitive, visually appealing, and highly functional agents.",
      "Seamless user experiences across web, mobile, and messaging.",
      "Tone, voice, and response styling matched to your brand.",
      "User testing built into the design process from day one.",
    ],
    metric: { value: "3×", label: "Engagement uplift" },
  },
  {
    Icon: Globe,
    name: "Multi-Language AI Agents",
    tagline: "Engage customers in any language.",
    desc: "Multilingual AI agents that engage customers globally — delivering personalized, efficient conversations across different markets with native-quality understanding.",
    bullets: [
      "Multilingual AI agents supporting 50+ languages.",
      "Native-quality understanding, not literal translation.",
      "Localization for tone, idioms, and cultural context.",
      "Real-time language detection and switching.",
      "Compliance with regional data residency requirements.",
    ],
    metric: { value: "50+", label: "Languages supported" },
  },
  {
    Icon: Wrench,
    name: "AI Agent Integration",
    tagline: "Connect agents to your existing stack.",
    desc: "Seamless integration of AI agents into your websites, apps, CRMs, ERPs, and messaging platforms — automating workflows and improving business efficiency end-to-end.",
    bullets: [
      "Seamlessly connect AI agents with websites, apps, and CRMs.",
      "Enhanced workflow automation and business efficiency.",
      "Integrations with WhatsApp, Messenger, Slack, Teams, and email.",
      "Webhook and API support for custom enterprise systems.",
      "Single-sign-on and role-based access control built in.",
    ],
    metric: { value: "10+", label: "Platforms integrated" },
  },
  {
    Icon: Activity,
    name: "NLP & Conversational Intelligence",
    tagline: "Agents that understand context and intent.",
    desc: "NLP-driven AI agents that understand and process human language naturally — delivering intelligent, context-aware conversations that improve customer experiences.",
    bullets: [
      "NLP-driven AI agents understanding human language.",
      "Intelligent, context-aware, and natural conversations.",
      "Intent detection, entity extraction, and sentiment analysis.",
      "Multi-turn conversations with memory and personalization.",
      "Continuous learning from feedback and conversation logs.",
    ],
    metric: { value: "90%", label: "Intent recognition" },
  },
  {
    Icon: ShieldCheck,
    name: "AI Agent Maintenance & Support",
    tagline: "Keep agents running at peak performance.",
    desc: "Ongoing maintenance, regular updates, and 24/7 support — ensuring optimal agent performance and continuous improvement as user needs and business goals evolve.",
    bullets: [
      "AI agent maintenance and support services for optimal performance.",
      "Regular updates and seamless functionality.",
      "24/7 monitoring with automated alerts and rollback safety.",
      "Quarterly performance reviews and roadmap planning.",
      "SLA-backed response times and dedicated support engineers.",
    ],
    metric: { value: "24/7", label: "Support availability" },
  },
];

const process = [
  { no: "01", title: "Requirements Analysis", duration: "1 week", desc: "Discovery call and stakeholder workshops to understand your business goals, user personas, and conversation flows. We listen before we design." },
  { no: "02", title: "Project Proposal",       duration: "1 week", desc: "Detailed proposal with scope, tech stack, team composition, timeline, and pricing. Clear ownership, no hidden surprises." },
  { no: "03", title: "Design & Estimating",    duration: "1–2 weeks", desc: "Conversation flow design, persona development, and integration architecture. Final estimates with milestone-based delivery commitments." },
  { no: "04", title: "Development",            duration: "4–10 weeks", desc: "Two-week sprints with working AI agent at every demo. Senior engineers own end-to-end features with daily standups in your time zone." },
  { no: "05", title: "Supporting",             duration: "Ongoing", desc: "Launch with QA, performance tuning, and a 24/7 on-call rotation. Continuous improvement based on real user conversations and feedback." },
];

const emergingTech = [
  {
    Icon: Globe,
    title: "Multi-Platform Integration",
    desc: "Seamlessly integrate your AI agents with WhatsApp, Messenger, websites, CRM, ERP systems, and more — for consistent engagement across every customer touchpoint.",
  },
  {
    Icon: Mic,
    title: "Voice-Enabled AI Agents",
    desc: "Enable hands-free interactions with voice-powered AI agents — allowing users to communicate naturally using spoken commands across IVR, smart speakers, and voice apps.",
  },
  {
    Icon: MessageSquare,
    title: "Customizable Personality & Responses",
    desc: "Customize AI agent tone, language, and responses to match your brand voice and boost user engagement — with persona controls baked into the agent framework.",
  },
];

const challenges = [
  { title: "Agents That Don't Understand Context", solution: "Multi-turn conversation memory, intent disambiguation, and entity extraction. Agents remember the conversation, not just the last message." },
  { title: "Hallucination and Wrong Answers", solution: "RAG architecture grounding agents in your verified knowledge base. Citations, confidence scoring, and human escalation when the agent isn't sure." },
  { title: "Integration With Existing Tools", solution: "API-first design with native integrations for Salesforce, HubSpot, Zendesk, Slack, and WhatsApp. Webhooks for any custom enterprise system." },
  { title: "Inconsistent Brand Voice", solution: "Persona controls, tone calibration, and style guides applied at the prompt layer. Your agent sounds like your brand — not generic GPT." },
  { title: "Language and Localization Issues", solution: "Native multilingual training with regional dialect support. We test with native speakers in each target market — not just Google Translate." },
  { title: "Slow Response Times", solution: "Caching, prompt optimization, and streaming responses. Sub-2-second first-token latency at scale across all interactions." },
  { title: "Difficulty Handling Edge Cases", solution: "Human-in-the-loop escalation with seamless handoff to live agents. Edge cases are flagged for training data improvement automatically." },
  { title: "Compliance and Data Privacy", solution: "PII redaction, audit trails, role-based access, and conversation retention controls. GDPR, HIPAA, SOC 2 compliance built in." },
  { title: "Measuring Agent Effectiveness", solution: "Real-time analytics dashboard tracking CSAT, resolution rate, escalation rate, and conversation length — tied to business KPIs." },
  { title: "Scaling to Millions of Users", solution: "Stateless serving infrastructure, autoscaling on cloud platforms, and rate-limit protection. From 100 conversations a day to 10 million — no architecture rewrite." },
];

const industries = [
  { Icon: Heart, name: "Healthtech", desc: "HIPAA-compliant AI agents for patient triage, appointment scheduling, prescription reminders, and clinical support — built for hospitals and digital health platforms.", examples: ["Patient triage", "Appointment scheduling", "Prescription reminders", "Clinical support"] },
  { Icon: Building2, name: "Fintech", desc: "AI agents for banking support, loan applications, fraud queries, and financial advice — built with PCI compliance, KYC integration, and audit trails.", examples: ["Banking support", "Loan applications", "Fraud queries", "Financial advice"] },
  { Icon: ShoppingBag, name: "Retail & eCommerce", desc: "AI agents for product discovery, order tracking, returns, and personalized recommendations — boosting conversion 3× and reducing support workload 50%.", examples: ["Product discovery", "Order tracking", "Returns support", "Personal shoppers"] },
  { Icon: GraduationCap, name: "EdTech", desc: "AI tutoring agents, course recommendation systems, and student support — adaptive learning experiences serving schools, universities, and corporate training.", examples: ["AI tutoring", "Course recommendations", "Student support", "Assessment helpers"] },
  { Icon: Leaf, name: "GreenTech", desc: "AI agents for sustainability reporting, ESG inquiries, carbon tracking, and renewable energy customer service — supporting climate-focused businesses.", examples: ["ESG reporting", "Carbon tracking", "Energy advice", "Sustainability Q&A"] },
  { Icon: UtensilsCrossed, name: "Food & Delivery Services", desc: "AI agents for menu queries, order placement, dietary advice, and customer service — boosting AOV and reducing operational overhead for restaurants and delivery platforms.", examples: ["Order placement", "Menu queries", "Dietary advice", "Loyalty programs"] },
];

const advantages = [
  { no: "01", title: "Top AI Talent & Certified Developers", desc: "Senior AI engineers with 8+ years building production conversational AI — no graduate handoffs or learning curves billed to you." },
  { no: "02", title: "10+ Years of Proven Track Record",     desc: "Over a decade of AI development experience — delivering intelligent agents that scale and drive measurable business outcomes." },
  { no: "03", title: "CRM, ERP & API Integration",           desc: "Native integrations with Salesforce, HubSpot, Zendesk, SAP, and any custom enterprise system via webhooks and APIs." },
  { no: "04", title: "Voice & Multi-Language Support",       desc: "Voice-enabled agents with 50+ languages, native dialect support, and seamless switching mid-conversation." },
  { no: "05", title: "Advanced NLP & Machine Learning",      desc: "State-of-the-art NLP models, custom fine-tuning, and continuous learning from real conversation data." },
  { no: "06", title: "Production Ownership & Support",       desc: "We don't ship and disappear. 24/7 monitoring, quarterly reviews, and continuous improvement built into every engagement." },
];

const techStackTabs = [
  { category: "LLMs & Agent Frameworks", techs: ["OpenAI GPT-5", "Anthropic Claude", "Llama 4", "Gemini", "LangChain", "LangGraph", "AutoGen", "CrewAI", "Semantic Kernel"] },
  { category: "NLP & Conversation",      techs: ["spaCy", "NLTK", "Hugging Face", "BERT", "Whisper", "Rasa", "DialogFlow", "Watson Assistant", "Botpress"] },
  { category: "Voice & Audio",           techs: ["Whisper", "Amazon Polly", "Google Speech-to-Text", "ElevenLabs", "Azure Speech", "Deepgram", "AssemblyAI", "PlayHT"] },
  { category: "Messaging Platforms",     techs: ["WhatsApp Business API", "Messenger", "Slack", "Microsoft Teams", "Telegram", "Twilio", "Discord", "Web Widget"] },
  { category: "Cloud AI Platforms",      techs: ["AWS Bedrock", "Azure OpenAI", "Google Vertex AI", "AWS Lex", "Azure Bot Service", "Dialogflow CX", "Kore.ai"] },
  { category: "Analytics & Monitoring",  techs: ["LangSmith", "Helicone", "Phoenix", "Weights & Biases", "Datadog", "Sentry", "Mixpanel", "Amplitude"] },
];

const faqs = [
  { q: "How quickly can you build an AI agent for our business?", a: "Most engagements deliver a working AI agent prototype in 4–6 weeks and a production-ready agent in 8–12 weeks. We start with a PoC sprint to validate the use case before committing to full production scope." },
  { q: "Can we integrate the agent with our existing CRM or ERP?", a: "Yes — we have native integrations for Salesforce, HubSpot, Zendesk, SAP, Microsoft Dynamics, and most major platforms. For custom systems, we integrate via webhooks, REST APIs, or message queues." },
  { q: "Will the agent understand our industry-specific language?", a: "Yes. We fine-tune on your domain-specific terminology, product names, and customer language. Most clients see 95%+ intent recognition accuracy on their industry-specific queries after fine-tuning." },
  { q: "Who owns the agent, prompts, conversation data, and IP?", a: "You do — from day one. All prompts, fine-tuning data, agent logic, and conversation logs belong to you. We deliberately avoid lock-in: you can take everything in-house at engagement end with zero migration cost." },
  { q: "What does an AI agent project typically cost?", a: "PoC agents typically range from USD 25K to USD 60K for an 8-week build. Production AI agents range from USD 75K to USD 250K depending on integrations, languages, and complexity. Ongoing operations start at USD 8K/month." },
  { q: "How do you handle privacy, compliance, and PII?", a: "Every agent includes PII redaction, audit trails, conversation retention controls, and role-based access. We align with GDPR, HIPAA, SOC 2, and PCI DSS — providing documentation suitable for auditor review in regulated industries." },
];

const awards = [
  { platform: "Clutch",        title: "Top AI Agent Developers",   year: "2024" },
  { platform: "GoodFirms",     title: "Top Conversational AI",     year: "2024" },
  { platform: "TopDevelopers", title: "Top Chatbot Company",       year: "2024" },
  { platform: "SoftwareWorld", title: "Top AI Agent Builder",      year: "2024" },
  { platform: "AppFuturo",     title: "AI Innovation Leader",      year: "2024" },
  { platform: "TrueFirms",     title: "Top AI Companies",          year: "2024" },
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

export default function AIAgentsPage() {
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
          <Reveal><nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-mono"><Link href="/" className="hover:text-brand-300 transition-colors">Home</Link><span>/</span><Link href="/services" className="hover:text-brand-300 transition-colors">Services</Link><span>/</span><span className="text-brand-300">AI Agents</span></nav></Reveal>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><span className="badge-dark mb-6"><span className="dot-pulse" />Custom AI Agent Development</span></Reveal>
              <Reveal delay={80}><div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">Automate · Engage · Scale</div></Reveal>
              <Reveal delay={140}><h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">AI Agents That Enhance Customer Engagement.</h1></Reveal>
              <Reveal delay={220}><p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">As a leading AI agents company, we build advanced AI agents that automate customer interactions. Our solutions provide 24/7 support, resolve queries faster, improve efficiency, and cut operational costs by up to 45%.</p></Reveal>
              <Reveal delay={300}>
                <form onSubmit={(e) => { e.preventDefault(); window.location.href = `/contact?email=${encodeURIComponent(email)}`; }} className="flex flex-col sm:flex-row gap-3 mt-8 max-w-xl">
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-5 py-3 rounded-md border border-neutral-700 bg-neutral-900/60 text-white text-sm placeholder:text-neutral-500 focus:border-brand-500 focus:bg-neutral-900 outline-none transition-all" />
                  <button type="submit" className="btn-brand whitespace-nowrap"><Calendar className="w-4 h-4" />Let&apos;s Build Your AI Agent</button>
                </form>
              </Reveal>
              <Reveal delay={400}><div className="mt-5 flex items-center gap-2 text-sm text-neutral-400"><ShieldCheck className="w-3.5 h-3.5 text-brand-300" />Free 30-min strategy session with experts. NDA secured.</div></Reveal>
            </div>
            <Reveal delay={300} direction="left">
              <div className="space-y-3">
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Award className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">#1 Top-Rated</div><div className="text-xs text-neutral-400">AI Agent Development Company</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Clock className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">24/7 Operations</div><div className="text-xs text-neutral-400">AI agents never sleep · always available</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Bot className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">Certified</div><div className="text-xs text-neutral-400">AI Engineers · SOC 2 · ISO 27001</div></div></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROMISE CARDS */}
      <section className="py-14 lg:py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <Reveal><div className="bg-brand-50 border border-brand-100 rounded-lg p-7 h-full card-lift"><div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-200 flex items-center justify-center mb-4"><Zap className="w-5 h-5 text-brand-600" /></div><h3 className="font-display text-h3 text-neutral-950 mb-2">Cut Response Time by 50%</h3><p className="text-sm text-neutral-700 leading-relaxed">AI agents respond in under 2 seconds — boosting customer engagement by 3× and reducing manual workload across support teams.</p></div></Reveal>
            <Reveal delay={100}><div className="bg-brand-50 border border-brand-100 rounded-lg p-7 h-full card-lift"><div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-200 flex items-center justify-center mb-4"><Globe className="w-5 h-5 text-brand-600" /></div><h3 className="font-display text-h3 text-neutral-950 mb-2">50+ Languages, One Agent</h3><p className="text-sm text-neutral-700 leading-relaxed">Native multilingual AI agents engage customers globally with localized tone, dialect support, and cultural context — not literal translation.</p></div></Reveal>
            <Reveal delay={200}>
              <div className="bg-white border border-neutral-200 rounded-lg p-7 h-full">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-600 font-semibold mb-2">Your Trusted</div>
                <h3 className="font-display text-h3 text-neutral-950 mb-5">AI Agent <span className="text-brand-600">Partner</span></h3>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={100} suffix="+" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Agents Deployed</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={45} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Operational Cost Cut</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={3} suffix="×" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Engagement Boost</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950">24/7</div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Availability</div></div>
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
          <Reveal><div className="text-center mb-14"><div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Our AI Agent Development Services</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">Intelligent Agents Built For <span className="text-brand-600">Real Business Impact</span></h2><p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">Click any service below to explore the engineering depth, integrations, and measurable outcomes we deliver.</p></div></Reveal>
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
                  <Link href="/contact" className="btn-brand mt-8">Discuss your {activeServiceData.name.toLowerCase()} project<ArrowRight className="w-4 h-4" /></Link>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-xl p-6 flex items-center justify-center aspect-square"><activeServiceData.Icon className="w-32 h-32 lg:w-40 lg:h-40 text-brand-500" strokeWidth={1.2} /></div>
                  <div className="bg-neutral-950 text-white rounded-xl p-6"><div className="text-xs font-mono text-brand-300 uppercase tracking-wider mb-2 font-semibold">Measurable Outcome</div><div className="font-display text-4xl font-bold text-white mb-1 tracking-display">{activeServiceData.metric.value}</div><div className="text-sm text-neutral-400">{activeServiceData.metric.label}</div></div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}><div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">{services.map((s, i) => (<button key={s.name} onClick={() => setActiveService(i)} className={`p-6 text-left transition-colors ${activeService === i ? "bg-brand-50" : "bg-white hover:bg-neutral-50"}`}><div className="flex items-start gap-4"><div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0"><s.Icon className="w-5 h-5 text-brand-600" /></div><div><h3 className="text-sm font-semibold text-neutral-950 mb-1">{s.name}</h3><p className="text-xs text-neutral-600 leading-relaxed">{s.tagline}</p></div></div></button>))}</div></Reveal>
          <Reveal delay={300}><div className="mt-10 flex justify-center"><Link href="/contact" className="btn-brand">Start Your AI Agent Project Today<ArrowRight className="w-4 h-4" /></Link></div></Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Proven Approach</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">Our Proven Approach <span className="text-brand-600">To Achieve Your Objectives</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-xl">Structured planning, transparent delivery, and consistent results — refined across 100+ AI agent engagements.</p></div></Reveal>
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200" />
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-4 relative">{process.map((step, i) => (<Reveal key={step.no} delay={i * 100}><div className="relative"><div className="w-14 h-14 rounded-full bg-white border-2 border-brand-200 flex items-center justify-center mb-5 mx-auto lg:mx-0 relative z-10"><span className="font-mono text-sm font-bold text-brand-700">{step.no}</span></div><div className="bg-white border border-neutral-200 rounded-lg p-5 h-full card-lift"><div className="text-[10px] font-mono text-brand-600 uppercase tracking-wider font-semibold mb-1">{step.duration}</div><h3 className="text-sm font-semibold text-neutral-950 mb-2">{step.title}</h3><p className="text-xs text-neutral-600 leading-relaxed">{step.desc}</p></div></div></Reveal>))}</div>
          </div>
        </div>
      </section>

      {/* EMERGING TECH / ADVANCED FEATURES */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/30 via-neutral-950 to-neutral-950" />
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none"><div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4">Innovative AI Agents With <span className="text-brand-300">Advanced Features</span></h2><p className="text-base text-neutral-300 leading-relaxed mb-8 max-w-lg">Built-in capabilities that turn AI agents from simple chatbots into intelligent business operators.</p></Reveal>
              <div className="space-y-4">{emergingTech.map((t, i) => (<Reveal key={t.title} delay={i * 100}><div className="bg-neutral-900/70 backdrop-blur border border-neutral-800 rounded-lg p-6 card-lift"><div className="flex items-start gap-4"><div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center flex-shrink-0"><t.Icon className="w-6 h-6 text-brand-300" /></div><div><h3 className="text-base font-semibold text-white mb-1.5">{t.title}</h3><p className="text-sm text-neutral-400 leading-relaxed">{t.desc}</p></div></div></div></Reveal>))}</div>
              <Reveal delay={400}><Link href="/contact" className="btn-brand mt-8">Book a Call With Our Experts<ArrowRight className="w-4 h-4" /></Link></Reveal>
            </div>
            <Reveal delay={300} direction="left">
              <div className="relative bg-neutral-900/40 backdrop-blur border border-neutral-800 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <svg viewBox="0 0 320 320" className="w-full h-full">
                  <defs><radialGradient id="coreGlowAgent" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#5278C2" stopOpacity="0.5" /><stop offset="100%" stopColor="#3159A5" stopOpacity="0" /></radialGradient></defs>
                  <circle cx="160" cy="160" r="60" fill="url(#coreGlowAgent)" />
                  <circle cx="160" cy="160" r="130" fill="none" stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 4" />
                  <circle cx="160" cy="160" r="100" fill="none" stroke="#3159A5" strokeOpacity="0.25" strokeWidth="1.2" />
                  <circle cx="160" cy="160" r="70" fill="none" stroke="#3159A5" strokeOpacity="0.35" strokeWidth="1.2" />
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => { const rad = (deg * Math.PI) / 180; const x = 160 + Math.cos(rad) * 130; const y = 160 + Math.sin(rad) * 130; return (<g key={i}><line x1="160" y1="160" x2={x} y2={y} stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1" /><circle cx={x} cy={y} r="6" fill="#5278C2" /><circle cx={x} cy={y} r="10" fill="none" stroke="#5278C2" strokeOpacity="0.3" /></g>); })}
                  <circle cx="160" cy="160" r="32" fill="#3159A5" />
                  <text x="160" y="167" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" fontFamily="Geist">AGENT</text>
                  {[{ label: "VOICE", x: 290, y: 160 }, { label: "NLP", x: 225, y: 47 }, { label: "TOOLS", x: 95, y: 47 }, { label: "MEMORY", x: 30, y: 160 }, { label: "CRM", x: 95, y: 273 }, { label: "API", x: 225, y: 273 }].map((t) => (<g key={t.label}><rect x={t.x - 30} y={t.y - 11} width="60" height="22" rx="4" fill="#1D376A" stroke="#3159A5" strokeOpacity="0.4" /><text x={t.x} y={t.y + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill="#7E9DD7" fontFamily="Geist">{t.label}</text></g>))}
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-end mb-12"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Common Challenges</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-3">Why AI Agent Projects Fail — And How We Prevent It</h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Click any challenge to reveal exactly how we solve it.</p></div></Reveal>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-12">
            <Reveal>
              <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100">
                {challenges.map((c, i) => { const open = openChallenge === i; return (<button key={c.title} onClick={() => setOpenChallenge(open ? null : i)} className="w-full text-left hover:bg-neutral-50 transition-colors block"><div className="flex items-center justify-between gap-6 px-6 py-4"><div className="flex items-start gap-4 flex-1"><span className="font-mono text-xs font-semibold text-brand-600 pt-1 w-6">{String(i + 1).padStart(2, "0")}</span><span className="text-sm font-semibold text-neutral-900 leading-snug">{c.title}</span></div><span className={`w-7 h-7 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}>{open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}</span></div>{open && (<div className="px-6 pb-5 pl-16"><div className="border-l-2 border-brand-300 pl-4"><div className="text-[10px] font-mono uppercase tracking-wider text-brand-600 font-semibold mb-1.5">How we solve it</div><p className="text-sm text-neutral-700 leading-relaxed">{c.solution}</p></div></div>)}</button>); })}
              </div>
            </Reveal>
            <Reveal delay={200} direction="left">
              <div className="lg:sticky lg:top-28 lg:self-start space-y-4">
                <div className="bg-neutral-950 text-white rounded-lg p-7"><div className="text-xs text-brand-300 uppercase tracking-wider font-semibold mb-3">The Pattern</div><p className="text-base text-neutral-200 leading-relaxed">Most AI agents hallucinate, miss context, or fail to integrate — leaving customers frustrated and teams disappointed.</p></div>
                <div className="bg-white border border-neutral-200 rounded-lg p-7">
                  <div className="text-xs text-brand-600 uppercase tracking-wider font-semibold mb-3">Our Approach</div>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">Grounded in your data, integrated with your tools, and monitored 24/7 — agents that actually work in production.</p>
                  <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><Zap className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">50%</div><div className="text-xs text-neutral-500 mt-0.5">Faster Response Time</div></div>
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><TrendingUp className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">3×</div><div className="text-xs text-neutral-500 mt-0.5">Engagement Lift</div></div>
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
                <div><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-3">Want A Custom AI Agent For Your Business?</h2><p className="text-base text-brand-50 leading-relaxed max-w-xl">Our experienced AI agent developers build dynamic agents customized to fit your unique business needs — integrating effortlessly with your existing platforms.</p></div>
                <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2 w-fit lg:justify-self-end">Book a Call With Our Experts<ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Industries We Serve</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">Custom AI Agent Solutions <span className="text-brand-600">For Industry Needs</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">We offer AI agent development services for all industries — cutting response time by 50% and boosting engagement by 3× to enhance efficiency and customer experience.</p></div></Reveal>
          <Reveal delay={150}>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-10">
              <ul className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100 h-fit">
                {industries.map((ind, i) => (<li key={ind.name}><button onClick={() => setActiveIndustry(i)} className={`w-full text-left flex items-center justify-between gap-4 px-6 py-4 transition-colors ${activeIndustry === i ? "bg-brand-50" : "hover:bg-neutral-50"}`}><div className="flex items-center gap-4"><div className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${activeIndustry === i ? "bg-brand-500 border-brand-500" : "bg-brand-50 border-brand-100"}`}><ind.Icon className={`w-4 h-4 ${activeIndustry === i ? "text-white" : "text-brand-600"}`} /></div><span className={`text-base font-semibold ${activeIndustry === i ? "text-brand-700" : "text-neutral-900"}`}>{ind.name}</span></div><ArrowRight className={`w-4 h-4 transition-all ${activeIndustry === i ? "text-brand-600 translate-x-1" : "text-neutral-300"}`} /></button></li>))}
              </ul>
              <div className="bg-white border border-neutral-200 rounded-lg p-8 lg:p-10 self-start">
                <div className="flex items-start gap-5 mb-6"><div className="w-16 h-16 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center flex-shrink-0"><activeIndustryData.Icon className="w-7 h-7 text-brand-600" /></div><div><div className="text-eyebrow text-brand-600 uppercase mb-2 font-semibold tracking-widest">Industry Focus</div><h3 className="font-display text-h2 text-neutral-950 leading-tight">{activeIndustryData.name}</h3></div></div>
                <p className="text-base text-neutral-700 leading-relaxed mb-6">{activeIndustryData.desc}</p>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden mb-6">{activeIndustryData.examples.map((ex) => (<div key={ex} className="bg-white p-4 flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" /><span className="text-sm text-neutral-800 font-medium">{ex}</span></div>))}</div>
                <Link href="/contact" className="btn-brand">Start Your AI Agent Project Today<ArrowRight className="w-4 h-4" /></Link>
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
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Why Choose Tackxel</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">Why Choose Tackxel For <span className="text-brand-300">AI Agent Development?</span></h2></div><p className="text-base text-neutral-300 leading-relaxed lg:justify-self-end max-w-xl">Get modern AI agent solutions specific to your business needs that automate interactions, improve engagement, and streamline business operations.</p></div></Reveal>
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
          <Reveal><div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tech Stack</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">Technologies Powering Our AI Agents</h2></div><p className="text-base text-neutral-400 leading-relaxed max-w-xl lg:justify-self-end">Production-grade frameworks, foundation models, and integration platforms — chosen for reliability and operational maturity at enterprise scale.</p></div></Reveal>
          <Reveal delay={100}>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
              <div className="flex flex-wrap gap-px bg-neutral-800 border-b border-neutral-800">{techStackTabs.map((t, i) => (<button key={t.category} onClick={() => setActiveStack(i)} className={`flex-1 min-w-[120px] px-4 lg:px-6 py-4 text-sm font-medium transition-all ${activeStack === i ? "bg-brand-600 text-white border-b-2 border-b-brand-300" : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800/60 hover:text-white"}`}><div className="text-xs font-mono mb-1 opacity-70">{String(i + 1).padStart(2, "0")}</div>{t.category}</button>))}</div>
              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
                  <div><div className="text-eyebrow text-brand-300 uppercase mb-3 font-semibold tracking-widest">{String(activeStack + 1).padStart(2, "0")} · Tech Category</div><h3 className="font-display text-h2 text-white mb-3">{activeStackData.category}</h3><p className="text-sm text-neutral-400 leading-relaxed">{activeStackData.techs.length} production-grade technologies for AI agent development.</p></div>
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
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">Ready to deploy your first AI agent?</h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">Free 30-minute consultation with a senior AI engineer. No slide decks, no sales reps.</p>
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
