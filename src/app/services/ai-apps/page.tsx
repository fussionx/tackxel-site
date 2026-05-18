"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Award, Clock, ShieldCheck,
  TrendingUp, Zap, Plus, Minus,
  Brain, Bot, Sparkles, Cpu, Layers, Cloud, Eye, BarChart3,
  Heart, Building2, ShoppingBag, Truck, Factory, GraduationCap,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";

const services = [
  {
    Icon: Layers,
    name: "Custom AI App Development",
    tagline: "End-to-end AI applications, built to your specs.",
    desc: "Custom AI applications engineered around your business model — integrating ML, LLMs, and cloud-native infrastructure with full ownership of code and IP from day one.",
    bullets: [
      "End-to-end AI application development customized to specific goals.",
      "Machine learning features improving personalized experiences and retention.",
      "LLM integration for dynamic chat, insights, and automation.",
      "AI apps optimized for secure and scalable enterprise deployments.",
      "Full ownership of source code, models, and infrastructure.",
    ],
    metric: { value: "40%", label: "Faster AI integration" },
  },
  {
    Icon: Cpu,
    name: "AI Model Integration & Automation",
    tagline: "Embed ML models into existing workflows.",
    desc: "Embed predictive ML models into your existing systems and automate tasks that previously required manual work — with API-first integration and continuous monitoring.",
    bullets: [
      "Embed ML models to automate tasks and reduce manual work.",
      "Real-time data insights for faster business decisions and growth.",
      "API-based integration with existing systems for smooth workflows.",
      "Improve efficiency with automated prediction and categorization features.",
      "Continuous model performance monitoring and drift detection.",
    ],
    metric: { value: "25%", label: "Fewer production errors" },
  },
  {
    Icon: Sparkles,
    name: "AI-Driven UX & Personalization",
    tagline: "Personalized experiences that convert.",
    desc: "AI-driven personalization that adapts user experiences in real time — boosting engagement, retention, and conversion through behavior analytics and smart recommendations.",
    bullets: [
      "Deliver personalized experiences, boosting engagement and retention rates.",
      "Use behavior analytics to adapt interfaces and features instantly.",
      "Smart recommendations increase conversions and customer satisfaction.",
      "Context-aware responses through integrated NLP models and logic.",
      "Real-time A/B testing of AI-driven UX variations.",
    ],
    metric: { value: "3×", label: "Engagement boost" },
  },
  {
    Icon: BarChart3,
    name: "AI-Powered Analytics & Insights",
    tagline: "Adaptive dashboards for smarter decisions.",
    desc: "AI-powered analytics that turn raw data into adaptive dashboards, forecasts, and operational alerts — surfacing insights when they matter, not buried in weekly reports.",
    bullets: [
      "Turn data into adaptive dashboards for smarter decisions at speed.",
      "Predictive analytics forecasts trends and future user behavior.",
      "Combine ML with business data for actionable insights.",
      "Enable real-time anomaly detection and operational alerts.",
      "Custom KPI tracking tied to measurable business outcomes.",
    ],
    metric: { value: "60%", label: "Faster decision-making" },
  },
  {
    Icon: ShieldCheck,
    name: "AI QA Automation & Performance Monitoring",
    tagline: "Continuous AI testing in production.",
    desc: "Continuous AI quality assurance and performance monitoring — automated testing, drift detection, and centralized dashboards that catch defects before users do.",
    bullets: [
      "Continuous AI testing to catch defects before release.",
      "Automate performance checks across web and mobile environments.",
      "Reduce error rates with intelligent test cases and predictions.",
      "Track app performance and visualize AI-driven insights centrally.",
      "Automated incident response with rollback safety built in.",
    ],
    metric: { value: "99.9%", label: "Uptime SLA" },
  },
  {
    Icon: Cloud,
    name: "Cloud AI Deployment & Scalability",
    tagline: "Cloud-native AI that scales globally.",
    desc: "Cloud-native AI deployment on AWS, Azure, or GCP — engineered for instant scale, global load distribution, and cost-optimized infrastructure with autoscaling built in.",
    bullets: [
      "Cloud-native deployment supporting instant scale and global load.",
      "Cost-optimized infrastructure in AWS, Azure, or GCP.",
      "Autoscaling handles traffic spikes and high user activity.",
      "Secure cloud ops with real-time backups and governance controls.",
      "Multi-region deployment with disaster recovery built in.",
    ],
    metric: { value: "25%", label: "Lower infra overhead" },
  },
];

const process = [
  { no: "01", title: "Discovery & AI Strategy",  duration: "1–2 weeks", desc: "Use-case prioritization, AI maturity assessment, and architecture decision records. We map business goals to AI opportunities before development begins." },
  { no: "02", title: "Data & Foundations", duration: "1–2 weeks", desc: "Data pipelines, feature engineering, cloud baseline, and CI/CD setup. Foundations done right means models that ship — not models stuck in notebooks." },
  { no: "03", title: "Iterative App Build", duration: "6–14 weeks", desc: "Two-week sprints with working AI app at every demo. Senior engineers own features end-to-end with daily standups in your time zone." },
  { no: "04", title: "QA, Security & Launch", duration: "1–2 weeks", desc: "Load testing, security review, model validation, and performance tuning. Launch with a war room, runbooks, and 24/7 on-call rotation." },
  { no: "05", title: "Operate & Evolve", duration: "Ongoing", desc: "Continuous monitoring, model retraining, and quarterly architecture reviews — tying AI investment to measurable business outcomes." },
];

const emergingTech = [
  {
    Icon: Sparkles,
    title: "Gen AI & LLMs",
    desc: "We use LLMs to create chatbots, virtual assistants, and content generation tools that improve user experiences, automate communication, and deliver actionable insights.",
  },
  {
    Icon: Bot,
    title: "Predictive Analytics & Agentic AI",
    desc: "Tackxel utilizes autonomous AI agents to monitor data, anticipate trends, and make intelligent recommendations — enabling smarter decision-making and real-time optimization.",
  },
  {
    Icon: Eye,
    title: "Multimodal AI & Computer Vision",
    desc: "Our team integrates vision, speech, and text-based AI to develop apps with image recognition, video analysis, and interactive interfaces.",
  },
];

const challenges = [
  { title: "Integrating Complex AI Models", solution: "Standardized integration frameworks, API contracts, and schema validation for every model. Smooth deployment without the wiring headaches that derail most AI app projects." },
  { title: "Handling Large-Scale Data Efficiently", solution: "Distributed data pipelines with Spark, Snowflake, and event streaming. Process billions of records per day without batch bottlenecks or data freshness issues." },
  { title: "Ensuring AI Model Accuracy", solution: "Rigorous evaluation frameworks, A/B testing, and continuous validation against production data. Models that work in dev AND in production — measured, not assumed." },
  { title: "Real-Time AI Performance", solution: "Edge deployment, model quantization, and inference optimization. Sub-100ms response times at scale, not the 3-second latency that kills user engagement." },
  { title: "Securing Sensitive Data in AI Apps", solution: "End-to-end encryption, PII redaction, role-based access, and audit trails. SOC 2, GDPR, and HIPAA compliance built in from day one — not retrofitted later." },
  { title: "Maintaining AI Application Scalability", solution: "Horizontal scaling, serverless inference, and elastic infrastructure. Your app handles 10× users without re-architecting — proven across multiple production systems." },
  { title: "Optimizing AI App Costs", solution: "Model quantization, batching, caching, and right-sized inference infrastructure. Most engagements cut compute bills 40–60% versus naive deployments." },
  { title: "Delivering Personalized Experiences at Scale", solution: "Real-time personalization engines with vector search, embedding models, and adaptive UX. Personalization that doesn't require a recommendation team of 50." },
  { title: "Monitoring AI Models in Production", solution: "Drift detection, performance dashboards, automated alerts, and retraining pipelines. Models that quietly rot in production are tracked and refreshed before they impact users." },
  { title: "Rapid Prototyping & Iteration", solution: "PoC sprints (4–6 weeks to working prototype), feature flags, and A/B testing infrastructure. Ship AI features fast without breaking production." },
];

const industries = [
  { Icon: Heart, name: "Healthcare & HealthTech", desc: "HIPAA-compliant AI apps for clinical workflows, patient engagement, medical imaging, and telehealth — built for hospital networks and digital health startups.", examples: ["Clinical apps", "Patient portals", "Medical imaging", "Telehealth platforms"] },
  { Icon: Building2, name: "Finance & Banking", desc: "PCI-compliant AI apps for fraud detection, credit scoring, trading interfaces, and AI-driven customer service. SOC 2 audited, banking-grade security.", examples: ["Fraud detection apps", "Credit scoring", "Trading platforms", "AI customer service"] },
  { Icon: ShoppingBag, name: "Retail & eCommerce", desc: "AI-powered storefronts with recommendation engines, dynamic pricing, visual search, and personalization. Driving conversion at omnichannel scale.", examples: ["Recommendation engines", "Visual search", "Dynamic pricing", "AI storefronts"] },
  { Icon: Truck, name: "Logistics & Supply Chain", desc: "AI apps for route optimization, demand forecasting, warehouse intelligence, and fleet management — integrating IoT, ERP, and 3PL providers.", examples: ["Route optimization", "Demand forecasting", "Warehouse AI", "Fleet intelligence"] },
  { Icon: Factory, name: "Manufacturing & IoT", desc: "AI apps for predictive maintenance, defect detection, quality assurance, and smart-factory operations — combining computer vision, IoT, and time-series ML.", examples: ["Predictive maintenance", "Defect detection", "Quality AI", "Smart factories"] },
  { Icon: GraduationCap, name: "Education & EdTech", desc: "Adaptive learning platforms, AI tutoring, automated grading, and content personalization — serving schools, universities, and corporate L&D programs.", examples: ["Adaptive learning", "AI tutoring", "Automated grading", "Content personalization"] },
];

const advantages = [
  { no: "01", title: "Proven AI Expertise",                desc: "Over 10+ years of AI app development experience — delivering intelligent solutions that scale and drive measurable business results." },
  { no: "02", title: "End-to-End AI Development",          desc: "From prototype to production, Tackxel manages the full AI application lifecycle — ensuring efficiency, reliability, and smooth deployment." },
  { no: "03", title: "Strong Focus on Model Quality",      desc: "Strong focus on data quality, model evaluation, and testing ensures stable predictions in real-world usage." },
  { no: "04", title: "Reliable Delivery and Transparency", desc: "Clear development processes, realistic timelines, and transparent communication reduce project risk and delivery uncertainty significantly." },
  { no: "05", title: "Measurable Outcomes & ROI",          desc: "Our AI solutions increase efficiency, reduce errors, boost engagement, and deliver quantifiable growth for clients." },
  { no: "06", title: "Continuous Optimization & Support",  desc: "Real-time monitoring, model updates, and performance optimization keep AI applications reliable, adaptive, and up to date." },
];

const techStackTabs = [
  { category: "AI & ML Frameworks", techs: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "LightGBM", "Keras", "JAX", "ONNX", "CatBoost", "OpenVINO"] },
  { category: "LLMs & Agentic AI",  techs: ["OpenAI GPT-5", "Anthropic Claude", "Llama 4", "Mistral", "Gemini", "LangChain", "LlamaIndex", "AutoGen", "CrewAI", "Hugging Face"] },
  { category: "Computer Vision",    techs: ["OpenCV", "YOLO", "Detectron2", "MediaPipe", "Segment Anything", "CLIP", "Vision Transformers", "MMDetection"] },
  { category: "Cloud AI",           techs: ["AWS SageMaker", "Azure ML", "Google Vertex AI", "Amazon Bedrock", "Azure OpenAI", "Google Gemini", "AWS Lambda", "GCP Cloud Run"] },
  { category: "MLOps",              techs: ["MLflow", "Kubeflow", "BentoML", "Ray", "Weights & Biases", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  { category: "Data & Analytics",   techs: ["Apache Spark", "Snowflake", "Databricks", "Airflow", "dbt", "Kafka", "Pandas", "Polars", "DuckDB", "ClickHouse"] },
];

const faqs = [
  { q: "How quickly can you start an AI app development project?", a: "Most engagements begin within two weeks. We run a technical discovery, agree on scope and team composition, sign the MSA and SOW, and onboard your dedicated AI engineers into your environments. Urgent needs can compress this to one week." },
  { q: "Can you integrate AI into our existing application?", a: "Yes — most engagements involve AI integration into existing apps, not greenfield builds. We work with your existing stack, integrate via APIs or embedded models, and preserve your existing UX and infrastructure." },
  { q: "Who owns the AI models, code, and data outputs?", a: "You do — from day one. All code, models trained on your data, and outputs are licensed exclusively to you. We deliberately avoid lock-in patterns — you can take everything in-house at engagement end with zero migration cost." },
  { q: "What does an AI app development project typically cost?", a: "Dedicated AI teams start at around USD 30K per month for a small squad. PoC and MVP AI apps typically range from USD 40K to USD 150K depending on complexity. Full production AI applications range from USD 150K to USD 500K." },
  { q: "How do you handle model deployment and ongoing operations?", a: "MLOps is built in from day one — automated deployment pipelines, drift monitoring, retraining workflows, and rollback safety. Most clients move to a monthly retainer for ongoing operations and feature development after launch." },
  { q: "Do you handle compliance for regulated industries?", a: "Yes. We provide governance frameworks aligned with GDPR, HIPAA, SOC 2, PCI DSS, and EU AI Act — including model documentation, bias auditing, PII redaction, and audit trails suitable for regulator review." },
];

const awards = [
  { platform: "Clutch",        title: "Top AI App Developers",     year: "2024" },
  { platform: "TrueFirms",     title: "Top AI Companies",          year: "2024" },
  { platform: "TopDevelopers", title: "Top AI Development",        year: "2024" },
  { platform: "SoftwareWorld", title: "Top AI Apps",               year: "2024" },
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

export default function AIAppsPage() {
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
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-mono">
              <Link href="/" className="hover:text-brand-300 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-brand-300 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-brand-300">AI Apps</span>
            </nav>
          </Reveal>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><span className="badge-dark mb-6"><span className="dot-pulse" />Powering innovation with AI</span></Reveal>
              <Reveal delay={80}><div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">Build · Train · Automate · Scale</div></Reveal>
              <Reveal delay={140}><h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">Leading AI Application Development Company.</h1></Reveal>
              <Reveal delay={220}><p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">Tackxel develops AI applications combining ML, LLMs, and cloud engineering — creating secure, intelligent, and high-performing web and mobile software for businesses.</p></Reveal>
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
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Award className="w-6 h-6 text-brand-300" /></div>
                  <div><div className="font-display text-base font-bold text-white">#1 Top-Rated</div><div className="text-xs text-neutral-400">AI App Development Company by Clutch</div></div>
                </div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Clock className="w-6 h-6 text-brand-300" /></div>
                  <div><div className="font-display text-base font-bold text-white">U.S. Time Zone</div><div className="text-xs text-neutral-400">Senior AI engineers available 9am–5pm EST</div></div>
                </div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Brain className="w-6 h-6 text-brand-300" /></div>
                  <div><div className="font-display text-base font-bold text-white">Dedicated</div><div className="text-xs text-neutral-400">AI Engineers · SOC 2 · ISO 27001</div></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROMISE CARDS */}
      <section className="py-14 lg:py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <Reveal><div className="bg-brand-50 border border-brand-100 rounded-lg p-7 h-full card-lift"><div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-200 flex items-center justify-center mb-4"><Zap className="w-5 h-5 text-brand-600" /></div><h3 className="font-display text-h3 text-neutral-950 mb-2">Scalable AI Solutions</h3><p className="text-sm text-neutral-700 leading-relaxed">Support millions of users with applications designed for high availability, performance monitoring, and smooth cloud integration.</p></div></Reveal>
            <Reveal delay={100}><div className="bg-brand-50 border border-brand-100 rounded-lg p-7 h-full card-lift"><div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-200 flex items-center justify-center mb-4"><Cloud className="w-5 h-5 text-brand-600" /></div><h3 className="font-display text-h3 text-neutral-950 mb-2">Multi-Cloud AI App Engineering</h3><p className="text-sm text-neutral-700 leading-relaxed">We ensure clean execution, control, and performance monitoring — reducing infrastructure overhead by up to 25% in deployed systems.</p></div></Reveal>
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
          <Reveal><div className="text-center mb-14"><div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Our AI App Development Services</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">Drive Efficiency, <span className="text-brand-600">Innovation, and Business Results</span></h2><p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">Click any service below to explore the engineering depth, AI capabilities, and measurable outcomes we deliver.</p></div></Reveal>
          <Reveal>
            <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 lg:grid-cols-6 border-b border-neutral-200 bg-neutral-50">
                {services.map((s, i) => (<button key={s.name} onClick={() => setActiveService(i)} className={`px-4 py-4 text-left transition-all border-r border-neutral-200 last:border-r-0 ${activeService === i ? "bg-white border-b-2 border-b-brand-500 -mb-px" : "hover:bg-white/60 border-b-2 border-b-transparent"}`}><div className="flex items-center gap-2 mb-1.5"><s.Icon className={`w-7 h-7 transition-opacity ${activeService === i ? "opacity-100 text-brand-600" : "opacity-50 text-neutral-600"}`} /></div><div className={`text-xs font-semibold leading-tight ${activeService === i ? "text-brand-700" : "text-neutral-600"}`}>{s.name}</div></button>))}
              </div>
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
          <Reveal delay={200}>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
              {services.map((s, i) => (<button key={s.name} onClick={() => setActiveService(i)} className={`p-6 text-left transition-colors ${activeService === i ? "bg-brand-50" : "bg-white hover:bg-neutral-50"}`}><div className="flex items-start gap-4"><div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0"><s.Icon className="w-5 h-5 text-brand-600" /></div><div><h3 className="text-sm font-semibold text-neutral-950 mb-1">{s.name}</h3><p className="text-xs text-neutral-600 leading-relaxed">{s.tagline}</p></div></div></button>))}
            </div>
          </Reveal>
          <Reveal delay={300}><div className="mt-10 flex justify-center"><Link href="/contact" className="btn-brand">Need Expert AI App Development Support?<ArrowRight className="w-4 h-4" /></Link></div></Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Delivery Process</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">How we ship AI apps, <span className="text-brand-600">every engagement</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-xl">A repeatable, transparent delivery process refined across 200+ AI app engagements. Working apps in week three — never a slide deck pretending to be progress.</p></div></Reveal>
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200" />
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-4 relative">
              {process.map((step, i) => (<Reveal key={step.no} delay={i * 100}><div className="relative"><div className="w-14 h-14 rounded-full bg-white border-2 border-brand-200 flex items-center justify-center mb-5 mx-auto lg:mx-0 relative z-10"><span className="font-mono text-sm font-bold text-brand-700">{step.no}</span></div><div className="bg-white border border-neutral-200 rounded-lg p-5 h-full card-lift"><div className="text-[10px] font-mono text-brand-600 uppercase tracking-wider font-semibold mb-1">{step.duration}</div><h3 className="text-sm font-semibold text-neutral-950 mb-2">{step.title}</h3><p className="text-xs text-neutral-600 leading-relaxed">{step.desc}</p></div></div></Reveal>))}
            </div>
          </div>
        </div>
      </section>

      {/* EMERGING TECH */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/30 via-neutral-950 to-neutral-950" />
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none"><div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4">Emerging AI Technologies <span className="text-brand-300">to Build Smarter Apps</span></h2><p className="text-base text-neutral-300 leading-relaxed mb-8 max-w-lg">We employ generative AI, agentic AI, and computer vision to build intelligent applications that drive engagement and business growth.</p></Reveal>
              <div className="space-y-4">
                {emergingTech.map((t, i) => (<Reveal key={t.title} delay={i * 100}><div className="bg-neutral-900/70 backdrop-blur border border-neutral-800 rounded-lg p-6 card-lift"><div className="flex items-start gap-4"><div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center flex-shrink-0"><t.Icon className="w-6 h-6 text-brand-300" /></div><div><h3 className="text-base font-semibold text-white mb-1.5">{t.title}</h3><p className="text-sm text-neutral-400 leading-relaxed">{t.desc}</p></div></div></div></Reveal>))}
              </div>
              <Reveal delay={400}><Link href="/contact" className="btn-brand mt-8">Interested in Next-Gen AI Apps for Your Users?<ArrowRight className="w-4 h-4" /></Link></Reveal>
            </div>
            <Reveal delay={300} direction="left">
              <div className="relative bg-neutral-900/40 backdrop-blur border border-neutral-800 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <svg viewBox="0 0 320 320" className="w-full h-full">
                  <defs><radialGradient id="coreGlowApp" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#5278C2" stopOpacity="0.5" /><stop offset="100%" stopColor="#3159A5" stopOpacity="0" /></radialGradient></defs>
                  <circle cx="160" cy="160" r="60" fill="url(#coreGlowApp)" />
                  <circle cx="160" cy="160" r="130" fill="none" stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 4" />
                  <circle cx="160" cy="160" r="100" fill="none" stroke="#3159A5" strokeOpacity="0.25" strokeWidth="1.2" />
                  <circle cx="160" cy="160" r="70" fill="none" stroke="#3159A5" strokeOpacity="0.35" strokeWidth="1.2" />
                  {[0, 72, 144, 216, 288].map((deg, i) => { const rad = (deg * Math.PI) / 180; const x = 160 + Math.cos(rad) * 130; const y = 160 + Math.sin(rad) * 130; return (<g key={i}><line x1="160" y1="160" x2={x} y2={y} stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1" /><circle cx={x} cy={y} r="6" fill="#5278C2" /><circle cx={x} cy={y} r="10" fill="none" stroke="#5278C2" strokeOpacity="0.3" /></g>); })}
                  <circle cx="160" cy="160" r="30" fill="#3159A5" />
                  <text x="160" y="167" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="Geist">APP</text>
                  {[{ label: "LLM", x: 220, y: 60 }, { label: "ML", x: 60, y: 60 }, { label: "API", x: 60, y: 250 }, { label: "CLOUD", x: 220, y: 250 }, { label: "DATA", x: 270, y: 155 }].map((t) => (<g key={t.label}><rect x={t.x - 28} y={t.y - 11} width="56" height="22" rx="4" fill="#1D376A" stroke="#3159A5" strokeOpacity="0.4" /><text x={t.x} y={t.y + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill="#7E9DD7" fontFamily="Geist">{t.label}</text></g>))}
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-end mb-12"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Common Challenges</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-3">Common AI App Development Challenges And How We Solve Them</h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Click any challenge to reveal exactly how we solve it.</p></div></Reveal>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-12">
            <Reveal>
              <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100">
                {challenges.map((c, i) => { const open = openChallenge === i; return (<button key={c.title} onClick={() => setOpenChallenge(open ? null : i)} className="w-full text-left hover:bg-neutral-50 transition-colors block"><div className="flex items-center justify-between gap-6 px-6 py-4"><div className="flex items-start gap-4 flex-1"><span className="font-mono text-xs font-semibold text-brand-600 pt-1 w-6">{String(i + 1).padStart(2, "0")}</span><span className="text-sm font-semibold text-neutral-900 leading-snug">{c.title}</span></div><span className={`w-7 h-7 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}>{open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}</span></div>{open && (<div className="px-6 pb-5 pl-16"><div className="border-l-2 border-brand-300 pl-4"><div className="text-[10px] font-mono uppercase tracking-wider text-brand-600 font-semibold mb-1.5">How we solve it</div><p className="text-sm text-neutral-700 leading-relaxed">{c.solution}</p></div></div>)}</button>); })}
              </div>
            </Reveal>
            <Reveal delay={200} direction="left">
              <div className="lg:sticky lg:top-28 lg:self-start space-y-4">
                <div className="bg-neutral-950 text-white rounded-lg p-7"><div className="text-xs text-brand-300 uppercase tracking-wider font-semibold mb-3">The Pattern</div><p className="text-base text-neutral-200 leading-relaxed">Incorporating multiple machine learning and LLM models can cause delays, errors, and compatibility issues.</p></div>
                <div className="bg-white border border-neutral-200 rounded-lg p-7">
                  <div className="text-xs text-brand-600 uppercase tracking-wider font-semibold mb-3">Our Approach</div>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">Tackxel engineers design standardized integration frameworks for smooth model deployment.</p>
                  <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><Zap className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">40%</div><div className="text-xs text-neutral-500 mt-0.5">Faster AI Integration</div></div>
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><TrendingUp className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">25%</div><div className="text-xs text-neutral-500 mt-0.5">Fewer Production Errors</div></div>
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
                <div><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-3">Struggling With AI App Latency, Accuracy, Or Integration Issues?</h2><p className="text-base text-brand-50 leading-relaxed max-w-xl">Partner with Tackxel for AI/ML solutions to overcome AI integration issues, deploy predictive analytics, and optimize AI-powered workflows efficiently.</p></div>
                <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2 w-fit lg:justify-self-end">Boost Your AI Application Success<ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Industries We Serve</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">Custom AI Application Solutions <span className="text-brand-600">Across Industries</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Tackxel delivers intelligent AI apps for diverse industries — combining predictive analytics, ML, and automation to optimize workflows, maximize outcomes, and ensure regulatory adherence.</p></div></Reveal>
          <Reveal delay={150}>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-10">
              <ul className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100 h-fit">
                {industries.map((ind, i) => (<li key={ind.name}><button onClick={() => setActiveIndustry(i)} className={`w-full text-left flex items-center justify-between gap-4 px-6 py-4 transition-colors ${activeIndustry === i ? "bg-brand-50" : "hover:bg-neutral-50"}`}><div className="flex items-center gap-4"><div className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${activeIndustry === i ? "bg-brand-500 border-brand-500" : "bg-brand-50 border-brand-100"}`}><ind.Icon className={`w-4 h-4 ${activeIndustry === i ? "text-white" : "text-brand-600"}`} /></div><span className={`text-base font-semibold ${activeIndustry === i ? "text-brand-700" : "text-neutral-900"}`}>{ind.name}</span></div><ArrowRight className={`w-4 h-4 transition-all ${activeIndustry === i ? "text-brand-600 translate-x-1" : "text-neutral-300"}`} /></button></li>))}
              </ul>
              <div className="bg-white border border-neutral-200 rounded-lg p-8 lg:p-10 self-start">
                <div className="flex items-start gap-5 mb-6"><div className="w-16 h-16 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center flex-shrink-0"><activeIndustryData.Icon className="w-7 h-7 text-brand-600" /></div><div><div className="text-eyebrow text-brand-600 uppercase mb-2 font-semibold tracking-widest">Industry Focus</div><h3 className="font-display text-h2 text-neutral-950 leading-tight">{activeIndustryData.name}</h3></div></div>
                <p className="text-base text-neutral-700 leading-relaxed mb-6">{activeIndustryData.desc}</p>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden mb-6">{activeIndustryData.examples.map((ex) => (<div key={ex} className="bg-white p-4 flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" /><span className="text-sm text-neutral-800 font-medium">{ex}</span></div>))}</div>
                <Link href="/contact" className="btn-brand">Explore AI Solutions for Your Industry<ArrowRight className="w-4 h-4" /></Link>
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
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tackxel Advantage</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">What Makes Tackxel <span className="text-brand-300">A Reliable AI App Development Partner?</span></h2></div><p className="text-base text-neutral-300 leading-relaxed lg:justify-self-end max-w-xl">Tackxel delivers production-ready AI applications using proven engineering, clear accountability, and tangible results — trusted by growing startups and enterprise teams.</p></div></Reveal>
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
          <Reveal><div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tech Stack</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">Our Tech Stack For AI Apps Development</h2></div><p className="text-base text-neutral-400 leading-relaxed max-w-xl lg:justify-self-end">Our AI engineers work with mature, production-tested technologies to design, deploy, monitor, and scale AI applications across real-world business environments.</p></div></Reveal>
          <Reveal delay={100}>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
              <div className="flex flex-wrap gap-px bg-neutral-800 border-b border-neutral-800">
                {techStackTabs.map((t, i) => (<button key={t.category} onClick={() => setActiveStack(i)} className={`flex-1 min-w-[120px] px-4 lg:px-6 py-4 text-sm font-medium transition-all ${activeStack === i ? "bg-brand-600 text-white border-b-2 border-b-brand-300" : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800/60 hover:text-white"}`}><div className="text-xs font-mono mb-1 opacity-70">{String(i + 1).padStart(2, "0")}</div>{t.category}</button>))}
              </div>
              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
                  <div><div className="text-eyebrow text-brand-300 uppercase mb-3 font-semibold tracking-widest">{String(activeStack + 1).padStart(2, "0")} · Tech Category</div><h3 className="font-display text-h2 text-white mb-3">{activeStackData.category}</h3><p className="text-sm text-neutral-400 leading-relaxed">{activeStackData.techs.length} production-grade technologies used across our AI app engagements.</p></div>
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
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">Ready to build your next AI application?</h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">Free 30-minute technical assessment with a senior AI engineer. No slide decks, no sales reps.</p>
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
