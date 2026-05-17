"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Award, Clock, ShieldCheck,
  TrendingUp, Zap, Plus, Minus,
  Brain, Bot, Sparkles, Database, Cpu, FlaskConical, Rocket,
  Heart, Building2, ShoppingBag, Truck, Users, Lock,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";

// ===== DATA =====

const services = [
  {
    Icon: Sparkles,
    name: "Generative AI Consulting",
    tagline: "Custom LLM and RAG-based solutions.",
    desc: "We help you design and deploy generative AI systems using large language models, RAG pipelines, and fine-tuned domain models — built around your specific business workflows.",
    bullets: [
      "Develop custom AI models using LLMs and RAG tools.",
      "Improve content creation with AI-driven solutions.",
      "Automate workflows to improve efficiency and accuracy.",
      "Integrate AI seamlessly into business processes.",
      "Vector databases, embeddings, and prompt engineering done right.",
    ],
    metric: { value: "60%", label: "Prediction accuracy boost" },
  },
  {
    Icon: Brain,
    name: "AI & Machine Learning Consulting",
    tagline: "End-to-end ML strategy and deployment.",
    desc: "From data strategy to model deployment, our ML consultants build predictive systems that actually ship to production — with MLOps, monitoring, and continuous improvement baked in.",
    bullets: [
      "Build predictive models specific to your business needs.",
      "Implement supervised, unsupervised, and reinforcement learning.",
      "Optimize decision-making with data-driven insights.",
      "Provide end-to-end support from strategy to deployment.",
      "Feature engineering, model selection, and hyperparameter tuning.",
    ],
    metric: { value: "5×", label: "AI initiative ROI" },
  },
  {
    Icon: Bot,
    name: "AI Agents & Workflow Automation",
    tagline: "Intelligent agents that handle real work.",
    desc: "Autonomous AI agents and agentic workflows that integrate with your existing tools — handling routine tasks, escalating exceptions, and continuously learning from feedback.",
    bullets: [
      "Deploy intelligent agents to handle routine tasks.",
      "Streamline operations with AI-powered automation.",
      "Improve accuracy and reduce human error.",
      "Monitor and optimize workflows for continuous improvement.",
      "Multi-agent orchestration with tool use and memory.",
    ],
    metric: { value: "50%", label: "Manual task reduction" },
  },
  {
    Icon: ShieldCheck,
    name: "AI Integration & Cybersecurity",
    tagline: "Secure AI across your enterprise stack.",
    desc: "Integrate AI into existing enterprise systems with security, governance, and compliance built in — including AI-driven threat detection and anomaly monitoring.",
    bullets: [
      "Integrate AI solutions across your enterprise systems.",
      "Increase security with AI-driven threat detection.",
      "Ensure compliance with industry standards and regulations.",
      "Provide ongoing support and system optimization.",
      "Model governance, audit trails, and responsible AI frameworks.",
    ],
    metric: { value: "99.9%", label: "Threat detection accuracy" },
  },
  {
    Icon: Database,
    name: "AI Model Development & Analytics",
    tagline: "Custom models with MLOps from day one.",
    desc: "Bespoke AI model development for specific business objectives — built on top of clean data pipelines, with MLOps for reliable deployment, monitoring, and continuous retraining.",
    bullets: [
      "Develop custom AI models to meet specific business objectives.",
      "Analyze data to extract actionable insights.",
      "Implement MLOps for efficient model deployment and monitoring.",
      "Continuously improve models to adapt to changing business needs.",
      "Data versioning, experiment tracking, and reproducible pipelines.",
    ],
    metric: { value: "60%", label: "Faster project delivery" },
  },
  {
    Icon: Rocket,
    name: "AI PoC & MVP Development",
    tagline: "Validate AI ideas before you scale.",
    desc: "Rapid proof-of-concept and MVP development to validate AI initiatives — ship a working prototype in 4–6 weeks, then scale what works into full production systems.",
    bullets: [
      "Build proof-of-concept AI solutions to validate ideas.",
      "Develop minimum viable products for rapid market testing.",
      "Iterate quickly based on user feedback and data.",
      "Scale successful solutions into full-fledged applications.",
      "Clear go/no-go decisions backed by data and benchmarks.",
    ],
    metric: { value: "4–6 wks", label: "PoC to working prototype" },
  },
];

const process = [
  { no: "01", title: "AI Strategy & Discovery",  duration: "1–2 weeks", desc: "Stakeholder workshops, use-case prioritization, and AI maturity assessment. We map business goals to AI opportunities before any model is trained." },
  { no: "02", title: "Data Audit & Foundations", duration: "1–2 weeks", desc: "Data quality assessment, pipeline design, and governance framework. We make sure your data is ready before you spend on compute." },
  { no: "03", title: "Model Development", duration: "4–10 weeks", desc: "Experiment-driven model building with tracked metrics, version control, and iterative tuning. Senior AI engineers own each model end-to-end." },
  { no: "04", title: "Deployment & MLOps", duration: "1–2 weeks", desc: "Production deployment with monitoring, logging, drift detection, and automated retraining pipelines. Built to survive the real world." },
  { no: "05", title: "Operate & Evolve", duration: "Ongoing", desc: "Continuous performance monitoring, quarterly model reviews, and a roadmap that ties AI investment to measurable business outcomes." },
];

const emergingTech = [
  {
    Icon: Sparkles,
    title: "Generative AI & LLM Consulting",
    desc: "We advise on applying generative AI and LLMs effectively — helping you automate processes, improve decision-making, and foster innovation across your organization.",
  },
  {
    Icon: Cpu,
    title: "RAG & Edge AI Guidance",
    desc: "Our consultants guide your adoption of RAG frameworks and edge AI — ensuring real-time insights, scalable AI models, and optimized operational workflows tailored to your needs.",
  },
  {
    Icon: TrendingUp,
    title: "AI-Powered Analytics Strategy",
    desc: "We help you design predictive models and analytics strategies — empowering your team to anticipate trends, reduce risk, and achieve measurable business outcomes.",
  },
];

const challenges = [
  { title: "Lack of AI Strategy Alignment", solution: "Discovery workshops that map every AI initiative to a measurable business KPI. We refuse to build models without a clear definition of success and a route to ROI." },
  { title: "Data Silos and Inconsistent Quality", solution: "Data unification audits, schema standardization, and quality scoring pipelines. We get your data house in order before model training begins — saves months downstream." },
  { title: "Difficulty Choosing the Right AI Models", solution: "Model selection guided by benchmarks on YOUR data — not vendor pitches. We run A/B tests across candidate models with clear cost/performance trade-offs." },
  { title: "Slow Decision-Making Processes", solution: "Real-time AI dashboards, alerting, and decision-support systems that surface insights when they matter — not buried in a weekly report nobody reads." },
  { title: "Inefficient Workflows and Manual Tasks", solution: "AI agents and workflow automation that handle routine work with human-in-the-loop for edge cases. Most clients see 40–60% manual task reduction in 90 days." },
  { title: "Security and Compliance Risks", solution: "AI governance framework, model audit trails, PII redaction, and compliance documentation aligned with GDPR, HIPAA, SOC 2, and EU AI Act requirements." },
  { title: "Lack of AI Expertise In-House", solution: "Senior AI consultants embedded with your team — knowledge transfer, code reviews, and pair programming so your engineers become self-sufficient by engagement end." },
  { title: "Difficulty Scaling AI Solutions", solution: "MLOps infrastructure with model versioning, automated deployment, and elastic compute. Models that work for 10 users work for 10 million with no architecture rewrite." },
  { title: "Measuring AI ROI", solution: "KPI dashboards that tie every model output to business metrics — cost savings, revenue uplift, time saved. Quarterly ROI reports built into the engagement." },
  { title: "Rapidly Evolving AI Technologies", solution: "Quarterly tech reviews and AI radar — we keep you informed on what's worth adopting and what's hype. Strategic, not trend-chasing." },
];

const industries = [
  { Icon: Heart, name: "Healthcare", desc: "HIPAA-compliant clinical decision support, medical imaging analysis, patient risk stratification, and drug discovery acceleration. We work with hospital networks, diagnostics startups, and pharma companies.", examples: ["Clinical decision support", "Medical imaging AI", "Patient risk scoring", "Drug discovery"] },
  { Icon: Building2, name: "Financial Services & Fintech", desc: "Fraud detection, credit scoring, algorithmic trading, and AI-driven customer experience. Built to meet PCI DSS, SOC 2, and banking regulatory requirements.", examples: ["Fraud detection", "Credit scoring AI", "Algo trading models", "AML automation"] },
  { Icon: ShoppingBag, name: "eCommerce & Retail", desc: "Recommendation engines, demand forecasting, dynamic pricing, and computer-vision-powered inventory management — driving conversion and reducing waste.", examples: ["Recommendation engines", "Demand forecasting", "Dynamic pricing", "Visual search"] },
  { Icon: Truck, name: "Logistics & Supply Chain", desc: "Route optimization, demand prediction, predictive maintenance, and autonomous warehouse systems. Real-time AI integrated with IoT, ERP, and 3PL providers.", examples: ["Route optimization", "Demand prediction", "Predictive maintenance", "Warehouse automation"] },
  { Icon: Users, name: "HR & Recruitment Analytics", desc: "Resume screening, candidate matching, attrition prediction, and skills-gap analysis — with bias auditing and fairness controls built in by default.", examples: ["Resume screening", "Candidate matching", "Attrition prediction", "Skills gap analysis"] },
  { Icon: Lock, name: "Cybersecurity & Threat Detection", desc: "AI-driven anomaly detection, behavioral analysis, automated incident response, and threat intelligence. SIEM integrations and 24/7 model monitoring.", examples: ["Anomaly detection", "Behavioral analysis", "Threat intelligence", "Automated response"] },
];

const advantages = [
  { no: "01", title: "Proven Track Record",            desc: "We've successfully guided enterprises in AI adoption — delivering projects on time, within scope, and on budget." },
  { no: "02", title: "Client-Centric Approach",        desc: "We collaborate closely with your teams, understanding challenges and aligning AI strategies with your business goals." },
  { no: "03", title: "Emerging Technology Expertise",  desc: "Our consultants stay ahead in generative AI, LLMs, edge AI, and predictive analytics — to keep you competitive." },
  { no: "04", title: "Flexible Engagement Models",     desc: "On-demand consulting, dedicated teams, or long-term partnerships — personalized to your project needs." },
  { no: "05", title: "Transparent Communication",      desc: "Clarity throughout — sharing progress, insights, and performance metrics so you are always informed." },
  { no: "06", title: "Adaptive AI Solutions",          desc: "We build AI systems that evolve with your business — ensuring long-term value and operational resilience." },
];

const techStackTabs = [
  { category: "ML Frameworks",   techs: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "LightGBM", "CatBoost", "JAX", "ONNX", "OpenVINO"] },
  { category: "Generative AI / LLM", techs: ["OpenAI GPT-5", "Anthropic Claude", "Llama 4", "Mistral", "Hugging Face Transformers", "LangChain", "LlamaIndex", "Pinecone", "Weaviate", "ChromaDB"] },
  { category: "Data & Analytics", techs: ["Apache Spark", "Snowflake", "Databricks", "Airflow", "dbt", "Pandas", "NumPy", "Polars", "DuckDB", "Kafka"] },
  { category: "Cloud AI Platforms", techs: ["AWS SageMaker", "Azure ML", "Google Vertex AI", "Amazon Bedrock", "Azure OpenAI", "Google Gemini", "AWS Lambda", "GCP Cloud Run"] },
  { category: "MLOps & Deployment", techs: ["MLflow", "Kubeflow", "BentoML", "Ray", "Weights & Biases", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  { category: "Computer Vision & NLP", techs: ["OpenCV", "YOLO", "Detectron2", "spaCy", "NLTK", "Stanford NLP", "MediaPipe", "Whisper", "Stable Diffusion"] },
];

const faqs = [
  { q: "How quickly can you start an AI consulting engagement?", a: "Most engagements begin within two weeks. We run a brief discovery call, agree on scope and outcomes, sign the MSA and SOW, and onboard your dedicated AI consultants. Urgent strategy sprints can compress this to one week." },
  { q: "Do we need clean data before working with you?", a: "No — data cleanliness is part of what we fix. Our first phase always includes a data audit and pipeline design step. Most clients discover their data is messier than they thought, and we have a structured approach to fix it before model work begins." },
  { q: "What's the difference between AI consulting and AI development?", a: "Consulting focuses on strategy, model selection, governance, and integration approach — typically 4–12 weeks. Development is the actual building of AI systems, models, and infrastructure. Most clients start with consulting and transition into a development engagement once strategy is set." },
  { q: "Who owns the models, code, and data outputs?", a: "You do — from day one. All models trained on your data, all code written into your repos, all outputs licensed exclusively to you. We deliberately avoid lock-in: you can take everything in-house at the end of the engagement with zero migration cost." },
  { q: "What does an AI consulting engagement typically cost?", a: "Strategy-only engagements start at around USD 15K for a focused 4-week discovery sprint. Dedicated AI teams start at USD 35K per month and scale up based on team size and seniority. PoC and MVP projects typically range from USD 40K to USD 150K depending on complexity." },
  { q: "How do you handle AI governance and compliance?", a: "Every engagement includes a governance framework — model documentation, bias auditing, PII redaction, and audit trails. We align with GDPR, HIPAA, SOC 2, and the EU AI Act. For regulated industries, we provide compliance documentation suitable for auditor review." },
];

const awards = [
  { platform: "Top Tech",      title: "Software World",             year: "2024" },
  { platform: "GoodFirms",     title: "Best Company to Work With",  year: "2024" },
  { platform: "Clutch",        title: "Top AI Consulting",          year: "2024" },
  { platform: "Industry",      title: "AI Excellence Award",        year: "2024" },
  { platform: "TopDevelopers", title: "Top AI Company",             year: "2024" },
  { platform: "AppFuturo",     title: "AI Innovation",              year: "2024" },
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

export default function AIConsultingPage() {
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
      {/* ========== HERO ========== */}
      <section className="relative hero-glow text-white pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />

        <Parallax speed={0.15} className="absolute top-20 right-20 hidden lg:block pointer-events-none">
          <div className="w-72 h-72 rounded-full bg-brand-500/10 blur-3xl float-slow" />
        </Parallax>
        <Parallax speed={-0.1} className="absolute bottom-10 left-20 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-400/5 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-mono">
              <Link href="/" className="hover:text-brand-300 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-brand-300 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-brand-300">AI Consulting</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="badge-dark mb-6">
                  <span className="dot-pulse" />
                  Pioneering innovation with AI
                </span>
              </Reveal>

              <Reveal delay={80}>
                <div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">
                  Build · Train · Automate · Scale
                </div>
              </Reveal>

              <Reveal delay={140}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">
                  Artificial Intelligence Consulting Services Provider.
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">
                  Tackxel delivers AI consulting and machine learning services that boost prediction accuracy by up to 60%, automate key workflows, and cut manual tasks by over 50% — creating measurable business value.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = `/contact?email=${encodeURIComponent(email)}`;
                  }}
                  className="flex flex-col sm:flex-row gap-3 mt-8 max-w-xl"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3 rounded-md border border-neutral-700 bg-neutral-900/60 text-white text-sm placeholder:text-neutral-500 focus:border-brand-500 focus:bg-neutral-900 outline-none transition-all"
                  />
                  <button type="submit" className="btn-brand whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    Schedule a Call
                  </button>
                </form>
              </Reveal>

              <Reveal delay={400}>
                <div className="mt-5 flex items-center gap-2 text-sm text-neutral-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-300" />
                  Free 30-min strategy session with experts. NDA secured.
                </div>
              </Reveal>
            </div>

            <Reveal delay={300} direction="left">
              <div className="space-y-3">
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-white">#1 Recognized</div>
                    <div className="text-xs text-neutral-400">Top AI Consulting Company</div>
                  </div>
                </div>

                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-white">U.S. Time Zone</div>
                    <div className="text-xs text-neutral-400">Senior AI consultants available 9am–5pm EST</div>
                  </div>
                </div>

                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-white">Certified</div>
                    <div className="text-xs text-neutral-400">AI/ML Consultants · SOC 2 · ISO 27001</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== PROMISE CARDS + PARTNER STATS ========== */}
      <section className="py-14 lg:py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <Reveal>
              <div className="bg-brand-50 border border-brand-100 rounded-lg p-7 h-full card-lift">
                <div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-200 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="font-display text-h3 text-neutral-950 mb-2">Accelerate Decisions With AI</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Use AI-driven insights, real-time analytics, and predictive modeling to make faster, smarter decisions across operations and strategy.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-brand-50 border border-brand-100 rounded-lg p-7 h-full card-lift">
                <div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-200 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="font-display text-h3 text-neutral-950 mb-2">Emerging AI Models</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Use LLMs, RAG tools, and generative AI models to design customized AI solutions that improve predictions, automate workflows, and speed up business decisions.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-white border border-neutral-200 rounded-lg p-7 h-full">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-600 font-semibold mb-2">
                  Your Trusted One-Stop
                </div>
                <h3 className="font-display text-h3 text-neutral-950 mb-5">
                  AI &amp; ML <span className="text-brand-600">Partner</span>
                </h3>

                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                  <div className="bg-white p-3.5">
                    <div className="font-display text-xl font-bold text-neutral-950"><Counter to={10} suffix="+" /></div>
                    <div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Years of AI &amp; ML Expertise</div>
                  </div>
                  <div className="bg-white p-3.5">
                    <div className="font-display text-xl font-bold text-neutral-950">Top <Counter to={1} suffix="%" /></div>
                    <div className="text-[10px] text-neutral-500 leading-snug mt-0.5">AI Talent</div>
                  </div>
                  <div className="bg-white p-3.5">
                    <div className="font-display text-xl font-bold text-neutral-950"><Counter to={95} suffix="%" /></div>
                    <div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Client Retention Rate</div>
                  </div>
                  <div className="bg-white p-3.5">
                    <div className="font-display text-xl font-bold text-neutral-950"><Counter to={25} suffix="%" /></div>
                    <div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Senior AI/ML Engineers</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== AWARDS STRIP ========== */}
      <section className="bg-white py-10 lg:py-12 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {awards.map((a, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-white p-5 flex flex-col items-center text-center card-lift h-full">
                  <LaurelIcon className="w-11 h-12 mb-2 text-brand-500" />
                  <div className="text-[11px] font-bold text-brand-700 uppercase tracking-wider mb-1">{a.platform}</div>
                  <div className="text-[10px] text-neutral-600 leading-snug mb-1">{a.title}</div>
                  <div className="text-[10px] text-neutral-400 font-mono">{a.year}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES — INTERACTIVE TABS ========== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">
                Our AI Consulting Services
              </div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">
                Achieve Operational Excellence <span className="text-brand-600">With AI Consulting</span>
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">
                Click any service below to explore the consulting depth, AI capabilities, and measurable outcomes we deliver.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 lg:grid-cols-6 border-b border-neutral-200 bg-neutral-50">
                {services.map((s, i) => (
                  <button
                    key={s.name}
                    onClick={() => setActiveService(i)}
                    className={`px-4 py-4 text-left transition-all border-r border-neutral-200 last:border-r-0 ${
                      activeService === i
                        ? "bg-white border-b-2 border-b-brand-500 -mb-px"
                        : "hover:bg-white/60 border-b-2 border-b-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <s.Icon className={`w-7 h-7 transition-opacity ${activeService === i ? "opacity-100 text-brand-600" : "opacity-50 text-neutral-600"}`} />
                    </div>
                    <div className={`text-xs font-semibold leading-tight ${
                      activeService === i ? "text-brand-700" : "text-neutral-600"
                    }`}>{s.name}</div>
                  </button>
                ))}
              </div>

              <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 p-8 lg:p-10">
                <div>
                  <div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">
                    {String(activeService + 1).padStart(2, "0")} · Service Detail
                  </div>
                  <h3 className="font-display text-h2 text-neutral-950 mb-3">{activeServiceData.name}</h3>
                  <p className="text-base font-semibold text-neutral-700 mb-4">{activeServiceData.tagline}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">{activeServiceData.desc}</p>

                  <ul className="space-y-3">
                    {activeServiceData.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-brand-600" />
                        </div>
                        <span className="text-sm text-neutral-700 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="btn-brand mt-8">
                    Discuss your {activeServiceData.name.toLowerCase()} needs
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-xl p-6 flex items-center justify-center aspect-square">
                    <activeServiceData.Icon className="w-32 h-32 lg:w-40 lg:h-40 text-brand-500" strokeWidth={1.2} />
                  </div>

                  <div className="bg-neutral-950 text-white rounded-xl p-6">
                    <div className="text-xs font-mono text-brand-300 uppercase tracking-wider mb-2 font-semibold">
                      Measurable Outcome
                    </div>
                    <div className="font-display text-4xl font-bold text-white mb-1 tracking-display">
                      {activeServiceData.metric.value}
                    </div>
                    <div className="text-sm text-neutral-400">{activeServiceData.metric.label}</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
              {services.map((s, i) => (
                <button
                  key={s.name}
                  onClick={() => setActiveService(i)}
                  className={`p-6 text-left transition-colors ${
                    activeService === i ? "bg-brand-50" : "bg-white hover:bg-neutral-50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                      <s.Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-950 mb-1">{s.name}</h3>
                      <p className="text-xs text-neutral-600 leading-relaxed">{s.tagline}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex justify-center">
              <Link href="/contact" className="btn-brand">
                Curious How AI Can Improve Outcomes?
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== DELIVERY PROCESS ========== */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Delivery Process</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  How we deliver AI consulting, <span className="text-brand-600">every engagement</span>
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-xl">
                A repeatable, transparent delivery process refined across 100+ AI engagements. You see working models in week three — never a slide deck pretending to be progress.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200" />

            <div className="grid lg:grid-cols-5 gap-6 lg:gap-4 relative">
              {process.map((step, i) => (
                <Reveal key={step.no} delay={i * 100}>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-brand-200 flex items-center justify-center mb-5 mx-auto lg:mx-0 relative z-10">
                      <span className="font-mono text-sm font-bold text-brand-700">{step.no}</span>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-lg p-5 h-full card-lift">
                      <div className="text-[10px] font-mono text-brand-600 uppercase tracking-wider font-semibold mb-1">
                        {step.duration}
                      </div>
                      <h3 className="text-sm font-semibold text-neutral-950 mb-2">{step.title}</h3>
                      <p className="text-xs text-neutral-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== EMERGING TECHNOLOGIES ========== */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/30 via-neutral-950 to-neutral-950" />
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" />
        </Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4">
                  Intelligent AI Solutions <span className="text-brand-300">for Your Business Growth</span>
                </h2>
                <p className="text-base text-neutral-300 leading-relaxed mb-8 max-w-lg">
                  We provide expert AI consulting to guide your business in using AI technologies for smarter, data-driven decisions.
                </p>
              </Reveal>

              <div className="space-y-4">
                {emergingTech.map((t, i) => (
                  <Reveal key={t.title} delay={i * 100}>
                    <div className="bg-neutral-900/70 backdrop-blur border border-neutral-800 rounded-lg p-6 card-lift">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center flex-shrink-0">
                          <t.Icon className="w-6 h-6 text-brand-300" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-white mb-1.5">{t.title}</h3>
                          <p className="text-sm text-neutral-400 leading-relaxed">{t.desc}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={400}>
                <Link href="/contact" className="btn-brand mt-8">
                  How Will AI Accelerate Your Growth?
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>

            <Reveal delay={300} direction="left">
              <div className="relative bg-neutral-900/40 backdrop-blur border border-neutral-800 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <svg viewBox="0 0 320 320" className="w-full h-full">
                  <defs>
                    <radialGradient id="coreGlowAI" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#5278C2" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#3159A5" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="160" cy="160" r="60" fill="url(#coreGlowAI)" />
                  <circle cx="160" cy="160" r="130" fill="none" stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 4" />
                  <circle cx="160" cy="160" r="100" fill="none" stroke="#3159A5" strokeOpacity="0.25" strokeWidth="1.2" />
                  <circle cx="160" cy="160" r="70" fill="none" stroke="#3159A5" strokeOpacity="0.35" strokeWidth="1.2" />
                  {[0, 72, 144, 216, 288].map((deg, i) => {
                    const rad = (deg * Math.PI) / 180;
                    const x = 160 + Math.cos(rad) * 130;
                    const y = 160 + Math.sin(rad) * 130;
                    return (
                      <g key={i}>
                        <line x1="160" y1="160" x2={x} y2={y} stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1" />
                        <circle cx={x} cy={y} r="6" fill="#5278C2" />
                        <circle cx={x} cy={y} r="10" fill="none" stroke="#5278C2" strokeOpacity="0.3" />
                      </g>
                    );
                  })}
                  <circle cx="160" cy="160" r="30" fill="#3159A5" />
                  <text x="160" y="167" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="Geist">AI</text>
                  {[
                    { label: "LLM",    x: 220, y: 60 },
                    { label: "RAG",    x: 60,  y: 60 },
                    { label: "ML",     x: 60,  y: 250 },
                    { label: "AGENT",  x: 220, y: 250 },
                    { label: "DATA",   x: 270, y: 155 },
                  ].map((t) => (
                    <g key={t.label}>
                      <rect x={t.x - 28} y={t.y - 11} width="56" height="22" rx="4" fill="#1D376A" stroke="#3159A5" strokeOpacity="0.4" />
                      <text x={t.x} y={t.y + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill="#7E9DD7" fontFamily="Geist">{t.label}</text>
                    </g>
                  ))}
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== CHALLENGES — INTERACTIVE ACCORDION ========== */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-end mb-12">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Common Challenges</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-3">
                  AI Consulting Challenges Limiting Your Business Potential
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">
                Click any challenge to reveal exactly how we guide you to fix it. Patterns we&apos;ve seen — and solved — across 100+ AI engagements.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-12">
            <Reveal>
              <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100">
                {challenges.map((c, i) => {
                  const open = openChallenge === i;
                  return (
                    <button
                      key={c.title}
                      onClick={() => setOpenChallenge(open ? null : i)}
                      className="w-full text-left hover:bg-neutral-50 transition-colors block"
                    >
                      <div className="flex items-center justify-between gap-6 px-6 py-4">
                        <div className="flex items-start gap-4 flex-1">
                          <span className="font-mono text-xs font-semibold text-brand-600 pt-1 w-6">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm font-semibold text-neutral-900 leading-snug">{c.title}</span>
                        </div>
                        <span className={`w-7 h-7 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}>
                          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </span>
                      </div>
                      {open && (
                        <div className="px-6 pb-5 pl-16">
                          <div className="border-l-2 border-brand-300 pl-4">
                            <div className="text-[10px] font-mono uppercase tracking-wider text-brand-600 font-semibold mb-1.5">
                              How we guide you to fix it
                            </div>
                            <p className="text-sm text-neutral-700 leading-relaxed">{c.solution}</p>
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={200} direction="left">
              <div className="lg:sticky lg:top-28 lg:self-start space-y-4">
                <div className="bg-neutral-950 text-white rounded-lg p-7">
                  <div className="text-xs text-brand-300 uppercase tracking-wider font-semibold mb-3">
                    The Pattern
                  </div>
                  <p className="text-base text-neutral-200 leading-relaxed">
                    Organizations often struggle to align AI initiatives with business goals — risking low ROI and wasted resources on projects that never ship.
                  </p>
                </div>

                <div className="bg-white border border-neutral-200 rounded-lg p-7">
                  <div className="text-xs text-brand-600 uppercase tracking-wider font-semibold mb-3">
                    Our Approach
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                    We guide you in designing AI roadmaps that integrate technology with your enterprise priorities and goals.
                  </p>

                  <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                    <div className="bg-white p-5">
                      <div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3">
                        <Zap className="w-4 h-4 text-brand-600" />
                      </div>
                      <div className="font-display text-3xl font-bold text-neutral-950 tracking-display">60%</div>
                      <div className="text-xs text-neutral-500 mt-0.5">Faster Project Delivery</div>
                    </div>
                    <div className="bg-white p-5">
                      <div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3">
                        <TrendingUp className="w-4 h-4 text-brand-600" />
                      </div>
                      <div className="font-display text-3xl font-bold text-neutral-950 tracking-display">5×</div>
                      <div className="text-xs text-neutral-500 mt-0.5">Improved AI Initiative ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== BLUE CTA BANNER ========== */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="relative bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 rounded-2xl p-10 lg:p-12 overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
              <Parallax speed={0.15} className="absolute -top-20 -right-20 hidden lg:block pointer-events-none">
                <div className="w-80 h-80 rounded-full bg-white/10 blur-3xl" />
              </Parallax>
              <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
                <div>
                  <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-3">
                    Struggling To Implement AI Effectively?
                  </h2>
                  <p className="text-base text-brand-50 leading-relaxed max-w-xl">
                    Our expert consultants guide you from strategy to deployment, helping your business achieve smarter decisions and measurable results.
                  </p>
                </div>
                <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2 w-fit lg:justify-self-end">
                  Let Us Guide Your AI Strategy
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== INDUSTRIES — INTERACTIVE TABS ========== */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Industries We Serve</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Custom AI Consulting <span className="text-brand-600">Across Industries</span>
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">
                Our AI expertise empowers your business to use predictive insights, automation, and analytics across multiple industries — meeting regulatory standards while driving growth.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-10">
              <ul className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100 h-fit">
                {industries.map((ind, i) => (
                  <li key={ind.name}>
                    <button
                      onClick={() => setActiveIndustry(i)}
                      className={`w-full text-left flex items-center justify-between gap-4 px-6 py-4 transition-colors ${
                        activeIndustry === i ? "bg-brand-50" : "hover:bg-neutral-50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${
                          activeIndustry === i ? "bg-brand-500 border-brand-500" : "bg-brand-50 border-brand-100"
                        }`}>
                          <ind.Icon className={`w-4 h-4 ${activeIndustry === i ? "text-white" : "text-brand-600"}`} />
                        </div>
                        <span className={`text-base font-semibold ${
                          activeIndustry === i ? "text-brand-700" : "text-neutral-900"
                        }`}>{ind.name}</span>
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-all ${
                        activeIndustry === i ? "text-brand-600 translate-x-1" : "text-neutral-300"
                      }`} />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="bg-white border border-neutral-200 rounded-lg p-8 lg:p-10 self-start">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center flex-shrink-0">
                    <activeIndustryData.Icon className="w-7 h-7 text-brand-600" />
                  </div>
                  <div>
                    <div className="text-eyebrow text-brand-600 uppercase mb-2 font-semibold tracking-widest">
                      Industry Focus
                    </div>
                    <h3 className="font-display text-h2 text-neutral-950 leading-tight">
                      {activeIndustryData.name}
                    </h3>
                  </div>
                </div>

                <p className="text-base text-neutral-700 leading-relaxed mb-6">
                  {activeIndustryData.desc}
                </p>

                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden mb-6">
                  {activeIndustryData.examples.map((ex) => (
                    <div key={ex} className="bg-white p-4 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                      <span className="text-sm text-neutral-800 font-medium">{ex}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn-brand">
                  Get Industry Specific AI Guidance Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== TACKXEL ADVANTAGE ========== */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-700/30 via-neutral-950 to-neutral-950" />
        <Parallax speed={0.15} className="absolute bottom-0 right-0 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" />
        </Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-300 uppercase mb-4">Tackxel Advantage</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-white">
                  Why Do Global Businesses <span className="text-brand-300">Trust Tackxel</span> for AI Success?
                </h2>
              </div>
              <p className="text-base text-neutral-300 leading-relaxed lg:justify-self-end max-w-xl">
                Tackxel delivers expert AI guidance, actionable insights, and end-to-end consulting to help your business succeed confidently.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800 rounded-lg overflow-hidden">
            {advantages.map((a, i) => (
              <Reveal key={a.no} delay={i * 80}>
                <div className="bg-neutral-950 p-7 hover:bg-neutral-900/60 transition-colors h-full card-lift">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-md bg-brand-500/15 border border-brand-500/25 flex items-center justify-center flex-shrink-0">
                      <span className="font-mono text-xs font-bold text-brand-300">{a.no}</span>
                    </div>
                    <h3 className="text-base font-semibold text-white pt-2 leading-snug">{a.title}</h3>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed pl-14">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== RECOGNIZED BY ========== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">
                Recognition
              </div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                We Are <span className="text-brand-600">Recognized By</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {awards.map((a, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-white p-5 flex flex-col items-center text-center card-lift h-full">
                  <LaurelIcon className="w-12 h-14 mb-3 text-brand-500" />
                  <div className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-1">{a.platform}</div>
                  <div className="text-[11px] text-neutral-600 leading-snug mb-1">{a.title}</div>
                  <div className="text-[10px] text-neutral-400 font-mono">{a.year}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TECH STACK — INTERACTIVE TABS ========== */}
      <section className="py-20 lg:py-24 bg-neutral-950 text-white relative overflow-hidden">
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-500/10 blur-3xl" />
        </Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-300 uppercase mb-4">Tools &amp; Technology</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-white">
                  Tools And Technology We Use
                </h2>
              </div>
              <p className="text-base text-neutral-400 leading-relaxed max-w-xl lg:justify-self-end">
                We use advanced AI, ML, and data technologies to design intelligent, scalable, and secure systems that foster innovation and deliver measurable business outcomes.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
              <div className="flex flex-wrap gap-px bg-neutral-800 border-b border-neutral-800">
                {techStackTabs.map((t, i) => (
                  <button
                    key={t.category}
                    onClick={() => setActiveStack(i)}
                    className={`flex-1 min-w-[120px] px-4 lg:px-6 py-4 text-sm font-medium transition-all ${
                      activeStack === i
                        ? "bg-brand-600 text-white border-b-2 border-b-brand-300"
                        : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800/60 hover:text-white"
                    }`}
                  >
                    <div className="text-xs font-mono mb-1 opacity-70">{String(i + 1).padStart(2, "0")}</div>
                    {t.category}
                  </button>
                ))}
              </div>

              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
                  <div>
                    <div className="text-eyebrow text-brand-300 uppercase mb-3 font-semibold tracking-widest">
                      {String(activeStack + 1).padStart(2, "0")} · Tech Category
                    </div>
                    <h3 className="font-display text-h2 text-white mb-3">{activeStackData.category}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {activeStackData.techs.length} production-grade technologies used across our AI engagements. All selected for long-term maintainability and operational maturity.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {activeStackData.techs.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-4 py-2.5 rounded-md border border-neutral-700 bg-neutral-950 text-sm text-neutral-200 hover:border-brand-500 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== FAQ — INTERACTIVE ACCORDION ========== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="text-eyebrow text-brand-600 uppercase mb-4">FAQ</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-4">
                  Common questions <span className="text-brand-600">before we start</span>
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed mb-6">
                  Everything procurement, engineering, and finance teams typically ask before signing. If something isn&apos;t covered, ask us directly.
                </p>
                <Link href="/contact" className="btn-secondary">
                  Ask a different question
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-200">
                {faqs.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <button
                      key={f.q}
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full text-left px-6 lg:px-7 py-5 hover:bg-neutral-50 transition-colors block"
                    >
                      <div className="flex items-center justify-between gap-6">
                        <div className="flex items-start gap-4">
                          <span className="font-mono text-xs font-bold text-brand-600 mt-1">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-base font-semibold text-neutral-900 leading-snug">{f.q}</span>
                        </div>
                        <span className={`w-7 h-7 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}>
                          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </span>
                      </div>
                      {open && (
                        <p className="text-sm text-neutral-600 leading-relaxed mt-4 pl-10">
                          {f.a}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-20 bg-neutral-950 text-white border-t border-neutral-800 relative overflow-hidden">
        <Parallax speed={0.15} className="absolute top-0 right-0 hidden lg:block pointer-events-none">
          <div className="w-80 h-80 rounded-full bg-brand-500/10 blur-3xl" />
        </Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-eyebrow text-brand-300 uppercase mb-4">Get in touch</div>
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">
              Ready to deliver measurable AI outcomes?
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">
              Free 30-minute AI strategy session with a senior consultant. No slide decks, no sales reps.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-brand">
                Talk to an AI consultant
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-ghost-light">
                Back to all services
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
