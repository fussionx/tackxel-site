"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Award, Clock, ShieldCheck,
  TrendingUp, Zap, Plus, Minus,
  Brain, Bot, Sparkles, Database, Eye, MessageSquare, Settings,
  Heart, Building2, ShoppingBag, Truck, Factory, Lightbulb,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";

// ===== DATA =====

const services = [
  {
    Icon: Brain,
    name: "Custom AI/ML Development",
    tagline: "AI systems aligned with your workflows.",
    desc: "We design and build AI systems around your specific business workflows — not generic platforms forced to fit. Built for 99% uptime, structured for long-term reliability.",
    bullets: [
      "Design AI systems aligned with unique business workflows.",
      "Build scalable machine learning solutions for real-world use.",
      "Integrate AI models into existing enterprise systems with 99% uptime.",
      "Support long-term reliability through structured model design and monitoring.",
      "Full ownership of source code, models, and IP from day one.",
    ],
    metric: { value: "99%", label: "Uptime SLA" },
  },
  {
    Icon: Sparkles,
    name: "Generative AI Solutions",
    tagline: "LLM-powered copilots and content systems.",
    desc: "Generative AI applications, copilots, and RAG-powered systems engineered for your specific use cases — built on top of OpenAI, Claude, Llama, and fine-tuned domain models.",
    bullets: [
      "Develop generative AI applications for business-specific use cases.",
      "Build AI copilots supporting internal teams with 50% faster responses.",
      "Enable knowledge retrieval and intelligent content generation at scale.",
      "Ensure model outputs align with organizational objectives and KPIs.",
      "Vector databases, embeddings, and prompt engineering done right.",
    ],
    metric: { value: "50%", label: "Faster response times" },
  },
  {
    Icon: TrendingUp,
    name: "Predictive Analytics and Forecasting",
    tagline: "Turn historical data into business foresight.",
    desc: "Predictive models for demand planning, churn forecasting, and operational optimization — built on clean data pipelines with rigorous validation and continuous retraining.",
    bullets: [
      "Transform historical data into predictive business insights.",
      "Support demand planning and operational forecasting with 95% accuracy.",
      "Improve decision quality through data-driven prediction models.",
      "Enable proactive planning across business functions and supply chains.",
      "Time-series forecasting, anomaly detection, and trend analysis.",
    ],
    metric: { value: "95%", label: "Forecast accuracy" },
  },
  {
    Icon: MessageSquare,
    name: "Natural Language Processing (NLP)",
    tagline: "Text understanding at production scale.",
    desc: "NLP systems for text classification, entity extraction, sentiment analysis, and intelligent chatbots — supporting multilingual content with domain-specific tuning.",
    bullets: [
      "Build NLP solutions for text understanding and classification.",
      "Provide chatbots, document analysis, and language processing with 90% precision.",
      "Improve information retrieval and response relevance for customer-facing systems.",
      "Support multilingual and domain-specific language requirements.",
      "Named entity recognition, intent detection, and semantic search.",
    ],
    metric: { value: "90%", label: "Language precision" },
  },
  {
    Icon: Eye,
    name: "Computer Vision Applications",
    tagline: "Image and video intelligence in production.",
    desc: "Computer vision systems for object detection, defect inspection, OCR, and real-time video analysis — deployed on cloud, edge, or hybrid infrastructure.",
    bullets: [
      "Develop computer vision systems for image and video analysis.",
      "Enable object detection and visual pattern recognition with 98% accuracy.",
      "Automate inspection and monitoring workflows, reducing manual errors by 30%.",
      "Integrate vision models into operational environments for real-time insights.",
      "YOLO, Detectron2, custom CNN architectures, and edge deployment.",
    ],
    metric: { value: "98%", label: "Detection accuracy" },
  },
  {
    Icon: Settings,
    name: "AI-Powered Process Automation",
    tagline: "Intelligent automation across business systems.",
    desc: "AI-driven workflow automation that handles routine decisions, escalates exceptions, and integrates with your existing ERP, CRM, and operational tools.",
    bullets: [
      "Automate repetitive processes using AI-driven decision logic.",
      "Improve workflow efficiency across operations and analytics by 25–30%.",
      "Reduce manual intervention through intelligent automation.",
      "Support scalable automation across business systems simultaneously.",
      "Document processing, decision automation, and intelligent routing.",
    ],
    metric: { value: "25–30%", label: "Workflow efficiency gain" },
  },
];

const process = [
  { no: "01", title: "Data Strategy & Audit",  duration: "1–2 weeks", desc: "Data quality assessment, pipeline design, and feature engineering strategy. We make data ready before any model training — this is where 60% of AI projects fail and we won't." },
  { no: "02", title: "Model Architecture",     duration: "1 week",    desc: "Model selection, baseline benchmarking, and architecture decision records. Senior ML engineers choose what fits your problem, not what's trending on Twitter." },
  { no: "03", title: "Iterative Model Build",  duration: "6–14 weeks", desc: "Experiment-driven model development with tracked metrics, version control, and weekly review cycles. Working models in 3 weeks, not slide decks." },
  { no: "04", title: "MLOps & Deployment",     duration: "1–2 weeks", desc: "Production deployment with monitoring, drift detection, automated retraining, and rollback safety. Models that survive contact with real data." },
  { no: "05", title: "Operate & Evolve",       duration: "Ongoing",   desc: "Continuous performance monitoring, quarterly model reviews, and a roadmap tying AI investment to measurable business outcomes." },
];

const emergingTech = [
  {
    Icon: Sparkles,
    title: "LLMs Applications",
    desc: "We design and deploy solutions using large language models and AI copilots — to automate knowledge workflows, extract actionable insights, and accelerate data-driven decisions across systems.",
  },
  {
    Icon: Bot,
    title: "Autonomous AI Agents",
    desc: "Tackxel develops agentic AI and autonomous agents that perform multi-step reasoning, execute complex workflows, and adapt dynamically to evolving business data.",
  },
  {
    Icon: TrendingUp,
    title: "Predictive and Prescriptive Analytics",
    desc: "Our experts create AI solutions to convert complex enterprise data into actionable intelligence — with predictive modeling and prescriptive analytics that optimize strategy, reduce risks, and maximize ROI.",
  },
];

const challenges = [
  { title: "Poor Data Quality and Availability", solution: "Data audit, cleansing, and feature engineering pipelines run as Phase 1 of every engagement. We refuse to train models on bad data — it just produces confident wrong answers." },
  { title: "Model Performance Degradation Over Time", solution: "Drift detection, automated retraining pipelines, and SLO-based monitoring. Models that quietly rot in production are tracked and refreshed before they impact decisions." },
  { title: "Difficulty Scaling Models to Production", solution: "MLOps infrastructure with model versioning, automated deployment, and elastic compute. The same model that serves 10 users serves 10 million with no architecture rewrite." },
  { title: "High Compute Costs", solution: "Cost-aware model design — quantization, distillation, batching, and right-sized inference infrastructure. Most engagements cut compute bills 40–60% versus naive deployments." },
  { title: "Lack of MLOps Maturity", solution: "Experiment tracking, model registries, CI/CD for ML, and reproducible pipelines from day one. Your engineers learn the patterns as we build them — knowledge transfer is built into every engagement." },
  { title: "Bias and Fairness Issues", solution: "Bias auditing on training data and model outputs, fairness metrics tracked alongside accuracy, and documented governance frameworks aligned with EU AI Act requirements." },
  { title: "Integration with Legacy Systems", solution: "API-first model serving, message-queue integration, and event-driven architectures that drop into existing ERPs, CRMs, and operational tools without disrupting workflows." },
  { title: "Slow Time-to-Production", solution: "Rapid PoC sprints (4–6 weeks to working prototype) with clear go/no-go gates. Production deployment in 12–16 weeks total — most clients see 60% faster delivery than their previous AI projects." },
  { title: "Measuring Model ROI", solution: "Business KPI dashboards that tie every model output to dollars — cost saved, revenue gained, time recovered. Quarterly ROI reports built into the engagement." },
  { title: "Keeping Up With Emerging Technologies", solution: "Quarterly tech reviews and AI radar — we keep you informed on what's worth adopting and what's hype. Strategic and benchmarked, not trend-chasing." },
];

const industries = [
  { Icon: Heart, name: "Healthcare", desc: "Clinical decision support, medical imaging analysis, patient risk stratification, and drug discovery. HIPAA-compliant pipelines with audit trails for clinical and regulatory review.", examples: ["Medical imaging AI", "Patient risk scoring", "Drug discovery", "Clinical NLP"] },
  { Icon: Building2, name: "Financial Services", desc: "Fraud detection, credit scoring, algorithmic trading, and AML automation. PCI-compliant, SOC 2 audited, and aligned with banking regulatory requirements.", examples: ["Fraud detection", "Credit scoring", "Algo trading", "AML automation"] },
  { Icon: ShoppingBag, name: "eCommerce & Retail", desc: "Recommendation engines, demand forecasting, dynamic pricing, and visual search. Real-time personalization that drives conversion and reduces inventory waste.", examples: ["Recommendation engines", "Demand forecasting", "Dynamic pricing", "Visual search"] },
  { Icon: Factory, name: "Manufacturing & Industrial", desc: "Predictive maintenance, defect detection, supply chain optimization, and quality assurance — combining computer vision, IoT, and time-series forecasting.", examples: ["Predictive maintenance", "Defect detection", "Quality assurance", "Process optimization"] },
  { Icon: Truck, name: "Logistics & Supply Chain", desc: "Route optimization, demand prediction, warehouse automation, and last-mile delivery intelligence. Real-time AI integrated with fleet IoT and ERP systems.", examples: ["Route optimization", "Demand prediction", "Warehouse AI", "Delivery intelligence"] },
  { Icon: Lightbulb, name: "Energy & Utilities", desc: "Load forecasting, grid optimization, predictive maintenance, and consumption analytics. AI systems built for high-availability, mission-critical infrastructure.", examples: ["Load forecasting", "Grid optimization", "Consumption analytics", "Asset monitoring"] },
];

const advantages = [
  { no: "01", title: "Data Strategy Before Models",     desc: "Most AI projects fail at the data layer. We design pipelines, feature engineering, and validation FIRST — before any model is trained on your time and budget." },
  { no: "02", title: "Production Ownership",            desc: "Most AI vendors exit after delivery. We provide post-deployment monitoring, model retraining, and performance tracking — keeping AI systems reliable as data evolves." },
  { no: "03", title: "Senior-Only AI Engineering",      desc: "Every ML engineer on your project has 8+ years building production AI systems. No graduate handoffs, no learning curves billed to you." },
  { no: "04", title: "MLOps From Day One",              desc: "Experiment tracking, versioning, CI/CD for ML, and observability baked in from the first commit — not bolted on after launch." },
  { no: "05", title: "Transparent ROI Measurement",     desc: "Every model output tied to a business KPI. Quarterly ROI reports with cost saved, revenue gained, and time recovered — measured, not estimated." },
  { no: "06", title: "Long-Term Partnership",           desc: "Quarterly model reviews, drift monitoring, and roadmap planning. We stay involved as your AI strategy evolves — not just to ship and disappear." },
];

const techStackTabs = [
  { category: "ML Frameworks",   techs: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "LightGBM", "CatBoost", "JAX", "ONNX", "OpenVINO"] },
  { category: "Generative AI / LLM", techs: ["OpenAI GPT-5", "Anthropic Claude", "Llama 4", "Mistral", "Hugging Face", "LangChain", "LlamaIndex", "Pinecone", "Weaviate", "ChromaDB"] },
  { category: "NLP",        techs: ["spaCy", "NLTK", "Stanford NLP", "BERT", "RoBERTa", "T5", "Whisper", "Transformers", "FastText", "Gensim"] },
  { category: "Computer Vision", techs: ["OpenCV", "YOLO", "Detectron2", "MediaPipe", "Segment Anything", "CLIP", "Stable Diffusion", "Vision Transformers", "MMDetection"] },
  { category: "MLOps",      techs: ["MLflow", "Kubeflow", "BentoML", "Ray", "Weights & Biases", "DVC", "Airflow", "Prefect", "Seldon Core"] },
  { category: "Cloud AI",   techs: ["AWS SageMaker", "Azure ML", "Google Vertex AI", "Amazon Bedrock", "Azure OpenAI", "Google Gemini", "AWS Lambda", "GCP Cloud Run"] },
];

const faqs = [
  { q: "How quickly can you start an AI/ML development engagement?", a: "Most engagements begin within two weeks. We run a technical discovery, agree on scope and team composition, sign the MSA and SOW, and onboard your dedicated AI/ML engineers into your environments. Urgent needs can compress this to one week." },
  { q: "Do we need clean data before working with you?", a: "No — data quality is part of what we fix. Our first phase is always a data audit, with cleansing and feature engineering pipelines as deliverables. Most clients discover their data is messier than they thought, and we have a structured approach to address it before model work begins." },
  { q: "What if our AI project fails the PoC stage?", a: "That's the point of a PoC. We run focused 4–6 week proof-of-concept sprints with clear go/no-go gates. If the data or business case doesn't support a viable model, we tell you — and you save the cost of building something that won't deliver ROI." },
  { q: "Who owns the trained models, code, and data outputs?", a: "You do — from day one. All models trained on your data, all code in your repos, all outputs licensed exclusively to you. We deliberately avoid lock-in: you can take everything in-house at the end of the engagement with zero migration cost." },
  { q: "What does an AI/ML development engagement typically cost?", a: "Dedicated AI/ML teams start at around USD 30K per month for a small squad and scale up based on team size and seniority. PoC projects typically range from USD 30K to USD 80K. Full production AI systems range from USD 100K to USD 400K depending on complexity." },
  { q: "How do you handle model governance, fairness, and compliance?", a: "Every engagement includes a governance framework — model documentation, bias auditing, fairness metrics tracked alongside accuracy, PII redaction, and audit trails. We align with GDPR, HIPAA, SOC 2, and the EU AI Act. For regulated industries, we provide documentation suitable for auditor review." },
];

const awards = [
  { platform: "GoodFirms",     title: "Top Artificial Intelligence",  year: "2024" },
  { platform: "GoodFirms",     title: "Best Company to Work With",    year: "2024" },
  { platform: "Clutch",        title: "Top Chatbot Company",          year: "2024" },
  { platform: "TrueFirms",     title: "Top AI Companies",             year: "2024" },
  { platform: "Coursera",      title: "IBM AI Developer Certified",   year: "2024" },
  { platform: "Industry",      title: "AI Excellence Award",          year: "2025" },
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

export default function AIAndMLPage() {
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
              <span className="text-brand-300">AI and ML</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="badge-dark mb-6">
                  <span className="dot-pulse" />
                  Powering innovation with AI
                </span>
              </Reveal>

              <Reveal delay={80}>
                <div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">
                  Build · Train · Automate · Scale
                </div>
              </Reveal>

              <Reveal delay={140}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">
                  Custom AI and ML Development Services Company.
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">
                  Tackxel helps companies capture value with AI and ML solutions — reducing operational costs, shortening decision latency, and minimizing revenue leakage.
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
                    <div className="font-display text-base font-bold text-white">#1 Top-Rated</div>
                    <div className="text-xs text-neutral-400">AI/ML Development Company by Clutch</div>
                  </div>
                </div>

                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-white">U.S. Time Zone</div>
                    <div className="text-xs text-neutral-400">Senior AI engineers available 9am–5pm EST</div>
                  </div>
                </div>

                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-white">Dedicated</div>
                    <div className="text-xs text-neutral-400">AI &amp; ML Engineers · SOC 2 · ISO 27001</div>
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
              <div className="bg-neutral-950 text-white border border-neutral-800 rounded-lg p-7 h-full card-lift">
                <div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center mb-4">
                  <Database className="w-5 h-5 text-brand-300" />
                </div>
                <h3 className="font-display text-h3 text-white mb-2">Data Strategy Before Model Selection</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  IBM research shows poor data quality costs businesses $3.1 trillion annually. We design data pipelines, feature engineering workflows, and validation layers before modeling.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white rounded-lg p-7 h-full card-lift overflow-hidden relative">
                <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-md bg-white/15 border border-white/25 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-h3 text-white mb-2">Production Ownership Beyond Delivery</h3>
                  <p className="text-sm text-brand-50 leading-relaxed">
                    Most AI vendors exit after delivery. Tackxel provides post-deployment monitoring, model retraining workflows, and performance tracking to keep AI systems reliable as data evolves.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-white border border-neutral-200 rounded-lg p-7 h-full">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-600 font-semibold mb-2">
                  Your Trusted
                </div>
                <h3 className="font-display text-h3 text-neutral-950 mb-5">
                  AI &amp; ML Development <span className="text-brand-600">Provider</span>
                </h3>

                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                  <div className="bg-white p-3.5">
                    <div className="font-display text-xl font-bold text-neutral-950"><Counter to={10} suffix="+" /></div>
                    <div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Years of AI Development Expertise</div>
                  </div>
                  <div className="bg-white p-3.5">
                    <div className="font-display text-xl font-bold text-neutral-950">Top <Counter to={1} suffix="%" /></div>
                    <div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Vetted AI Talent</div>
                  </div>
                  <div className="bg-white p-3.5">
                    <div className="font-display text-xl font-bold text-neutral-950"><Counter to={10} suffix="+" /></div>
                    <div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Industries Served</div>
                  </div>
                  <div className="bg-white p-3.5">
                    <div className="font-display text-xl font-bold text-neutral-950"><Counter to={25} suffix="%" /></div>
                    <div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Senior AI &amp; ML Engineers</div>
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
                Our AI/ML Development Services
              </div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">
                Driving Predictive Intelligence <span className="text-brand-600">And Operational Efficiency</span>
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">
                Click any service below to explore the engineering depth, AI capabilities, and measurable outcomes we deliver.
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
                    Discuss your {activeServiceData.name.toLowerCase()} project
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
                Curious How AI/ML Can Boost Business Outcomes?
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
                  How we ship AI/ML systems, <span className="text-brand-600">every engagement</span>
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-xl">
                A repeatable, transparent delivery process refined across 100+ AI/ML engagements. You see working models in week three — never a slide deck pretending to be progress.
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
                  Emerging AI &amp; ML Technologies <span className="text-brand-300">Driving Business Impact</span>
                </h2>
                <p className="text-base text-neutral-300 leading-relaxed mb-8 max-w-lg">
                  Tackxel capitalizes on emerging AI trends to accelerate enterprise decision-making, automate processes, and optimize business performance.
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
                  Want Advanced AI/ML Solutions Today?
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>

            <Reveal delay={300} direction="left">
              <div className="relative bg-neutral-900/40 backdrop-blur border border-neutral-800 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <svg viewBox="0 0 320 320" className="w-full h-full">
                  <defs>
                    <radialGradient id="coreGlowML" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#5278C2" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#3159A5" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="160" cy="160" r="60" fill="url(#coreGlowML)" />
                  <circle cx="160" cy="160" r="130" fill="none" stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 4" />
                  <circle cx="160" cy="160" r="100" fill="none" stroke="#3159A5" strokeOpacity="0.25" strokeWidth="1.2" />
                  <circle cx="160" cy="160" r="70" fill="none" stroke="#3159A5" strokeOpacity="0.35" strokeWidth="1.2" />
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => {
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
                  <text x="160" y="167" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="Geist">ML</text>
                  {[
                    { label: "LLM",      x: 290, y: 160 },
                    { label: "NLP",      x: 225, y: 47  },
                    { label: "VISION",   x: 95,  y: 47  },
                    { label: "PREDICT",  x: 30,  y: 160 },
                    { label: "AGENT",    x: 95,  y: 273 },
                    { label: "AUTO",     x: 225, y: 273 },
                  ].map((t) => (
                    <g key={t.label}>
                      <rect x={t.x - 30} y={t.y - 11} width="60" height="22" rx="4" fill="#1D376A" stroke="#3159A5" strokeOpacity="0.4" />
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
                  Top AI/ML Development Challenges For Businesses
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">
                Click any challenge to reveal exactly how we solve it. Patterns we&apos;ve seen — and fixed — across 100+ AI/ML engagements.
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
                              How we solve it
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
                    AI/ML projects fail at the data layer, then at deployment, then at ROI measurement — most never get past PoC.
                  </p>
                </div>

                <div className="bg-white border border-neutral-200 rounded-lg p-7">
                  <div className="text-xs text-brand-600 uppercase tracking-wider font-semibold mb-3">
                    Our Approach
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                    Data strategy first, MLOps from day one, and KPI-driven ROI reporting throughout the engagement.
                  </p>

                  <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                    <div className="bg-white p-5">
                      <div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3">
                        <Zap className="w-4 h-4 text-brand-600" />
                      </div>
                      <div className="font-display text-3xl font-bold text-neutral-950 tracking-display">60%</div>
                      <div className="text-xs text-neutral-500 mt-0.5">Faster Model Delivery</div>
                    </div>
                    <div className="bg-white p-5">
                      <div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3">
                        <TrendingUp className="w-4 h-4 text-brand-600" />
                      </div>
                      <div className="font-display text-3xl font-bold text-neutral-950 tracking-display">5×</div>
                      <div className="text-xs text-neutral-500 mt-0.5">Improved AI ROI</div>
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
                    Ready to Build AI/ML That Ships to Production?
                  </h2>
                  <p className="text-base text-brand-50 leading-relaxed max-w-xl">
                    Our senior AI engineers take you from data audit to deployed models — with MLOps, monitoring, and measurable ROI built in from day one.
                  </p>
                </div>
                <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2 w-fit lg:justify-self-end">
                  Start Your AI/ML Project
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
                  AI/ML Solutions <span className="text-brand-600">Across Industries</span>
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">
                Our AI/ML expertise empowers your business to use predictive insights, automation, and analytics across multiple industries — meeting regulatory standards while driving growth.
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
                  Discuss AI/ML for Your Industry
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
                  Why Global Businesses <span className="text-brand-300">Trust Tackxel</span> for AI/ML Success
                </h2>
              </div>
              <p className="text-base text-neutral-300 leading-relaxed lg:justify-self-end max-w-xl">
                Tackxel delivers expert AI/ML development with measurable outcomes — built on data strategy, MLOps maturity, and long-term production ownership.
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
                <div className="text-eyebrow text-brand-300 uppercase mb-4">Tech Stack</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-white">
                  Our AI/ML Technology Stack
                </h2>
              </div>
              <p className="text-base text-neutral-400 leading-relaxed max-w-xl lg:justify-self-end">
                Production-grade AI/ML frameworks, models, and platforms — chosen for long-term maintainability and operational maturity, not trend.
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
                      {activeStackData.techs.length} production-grade technologies used across our AI/ML engagements. All selected for long-term maintainability and operational maturity.
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
              Ready to build production AI/ML?
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">
              Free 30-minute AI/ML strategy session with a senior engineer. No slide decks, no sales reps.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-brand">
                Talk to an AI engineer
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
