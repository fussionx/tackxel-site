// Single source of truth for the 7 AI sub-services under /services/ai-integration.
// Each detail page is rendered from this by AiServiceDetail. SEO strings live
// here too and are read by each route's layout.tsx. No fabricated metrics — the
// only proof used anywhere is Lexa, My Friend, and "11+ products shipped".

import type { LucideIcon } from "lucide-react";
import {
  Search, Compass, Gauge, ShieldCheck, TrendingUp, Layers, Target, Zap,
  Workflow, Bot, Sparkles, MessageSquare, Database, FileText, LineChart,
  Cpu, Eye, Network, GitBranch, Repeat, Rocket, Brain, ScanText, Headset,
  ShoppingCart, Code2, Puzzle, Boxes, Clock, Image as ImageIcon,
} from "lucide-react";
import type { Variant as AIVisualVariant } from "@/components/AIVisual";

export type AiProcessStep = { no: string; title: string; desc: string };
export type AiCard = { Icon: LucideIcon; title: string; desc: string };
export type AiFaq = { q: string; a: string };

export type AiService = {
  slug: string;
  name: string;
  navLabel: string;
  pill: string;
  headline: string;
  subhead: string;
  accent: string;
  heroVariant: AIVisualVariant;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  overviewHeading: string;
  overview: string[];
  process: AiProcessStep[];
  benefitsHeading: string;
  benefits: AiCard[];
  useCasesHeading: string;
  useCases: AiCard[];
  tech: { name: string; sub?: string }[];
  why: string[];
  faqs: AiFaq[];
};

export const aiServices: AiService[] = [
  // 1 — AI CONSULTING
  {
    slug: "ai-consulting",
    name: "AI Consulting",
    navLabel: "AI Consulting",
    pill: "AI Consulting",
    headline: "AI consulting that tells you what to build — and what to skip.",
    subhead:
      "AI strategy, roadmaps, feasibility studies, and audits for teams deciding where AI actually fits. Honest, senior advice grounded in what ships to production — not hype.",
    accent: "from-brand-100/70 via-white to-sky-50",
    heroVariant: "capabilities",
    metaTitle: "AI Consulting Services UK — AI Strategy & Roadmaps | Tackxel",
    metaDescription:
      "Enterprise AI consulting UK. AI strategy, adoption roadmaps, feasibility assessments and audits from senior engineers who ship — find where AI fits and what to build.",
    keywords: [
      "AI consulting services",
      "AI strategy consulting",
      "AI implementation consulting",
      "enterprise AI consulting UK",
      "AI adoption roadmap",
      "AI feasibility assessment",
    ],
    overviewHeading: "What is AI consulting?",
    overview: [
      "AI consulting is the work that happens before a line of model code is written: figuring out where artificial intelligence creates real value for your business, what it will cost, and whether it's feasible with the data and constraints you actually have. Done well, it saves you from the most expensive mistake in AI — building an impressive demo that never makes it to production.",
      "Our AI strategy consulting starts with your problems, not the latest model. We run feasibility assessments, audit your data readiness, map AI opportunities against business impact and effort, and produce a clear adoption roadmap you can act on. You get an honest view of what's worth building, what's premature, and what you can ship in the next quarter.",
      "Because we're senior engineers who ship AI to production — not a slideware shop — our enterprise AI consulting is grounded in delivery reality. Every recommendation comes with the architecture, risks, and rough cost of building it for real. The deliverable is yours to keep, whether or not we build it together.",
    ],
    process: [
      { no: "01", title: "Discover", desc: "We map your goals, workflows, and data. Where does AI move a real metric — and where is it a distraction?" },
      { no: "02", title: "Assess", desc: "Feasibility and data-readiness audit. We pressure-test each opportunity for accuracy, latency, cost, and compliance." },
      { no: "03", title: "Prioritise", desc: "Opportunities scored on business impact vs. effort, sequenced into a roadmap you can fund and staff." },
      { no: "04", title: "Architect", desc: "For the top bets, a target architecture, model choices, and a build plan with honest cost ranges." },
      { no: "05", title: "Enable", desc: "A written strategy and roadmap your team owns — plus optional hands-on delivery when you're ready to build." },
    ],
    benefitsHeading: "Why invest in AI consulting",
    benefits: [
      { Icon: Target, title: "Build the right thing", desc: "Spend your AI budget on the use cases that move revenue or cost — not the ones that demo well." },
      { Icon: Gauge, title: "De-risk before you spend", desc: "Feasibility and data audits surface the blockers early, before they become six-figure write-offs." },
      { Icon: Compass, title: "A roadmap you can act on", desc: "A sequenced plan with effort, impact, and cost — ready to take to your board or your team." },
      { Icon: ShieldCheck, title: "Honest, vendor-neutral advice", desc: "We're not reselling a platform. The recommendation is what's right for you, model and tooling agnostic." },
      { Icon: TrendingUp, title: "Faster time to value", desc: "Skip the research detour. We point you straight at what's shippable this quarter." },
      { Icon: Layers, title: "Production-grounded", desc: "Every recommendation is costed and architected by people who actually ship AI, not just advise on it." },
    ],
    useCasesHeading: "What AI consulting delivers",
    useCases: [
      { Icon: Search, title: "AI opportunity assessment", desc: "A structured scan of your workflows and data to find where AI creates measurable value." },
      { Icon: Gauge, title: "Feasibility studies", desc: "Can this be built accurately, affordably, and compliantly? A clear yes/no with the reasoning." },
      { Icon: Database, title: "Data-readiness audit", desc: "An honest assessment of whether your data can support the AI you want — and what to fix first." },
      { Icon: Compass, title: "AI adoption roadmap", desc: "A prioritised, sequenced plan from first pilot to scaled rollout." },
      { Icon: ShieldCheck, title: "AI risk & governance review", desc: "Hallucination, privacy, IP, and compliance risks mapped with practical guardrails." },
      { Icon: Code2, title: "Architecture & build planning", desc: "Target architecture, model selection, and a costed delivery plan for the bets worth making." },
    ],
    tech: [
      { name: "OpenAI", sub: "GPT-4/5" },
      { name: "Anthropic", sub: "Claude" },
      { name: "Google", sub: "Gemini" },
      { name: "LangChain", sub: "Orchestration" },
      { name: "Python", sub: "Prototyping" },
      { name: "Snowflake", sub: "Data" },
      { name: "dbt", sub: "Transform" },
      { name: "pgvector", sub: "Embeddings" },
    ],
    why: [
      "Most AI consultancies hand you a deck and disappear. We're a senior engineering studio that ships AI to production — so our advice is grounded in what actually works, costs, and scales. The recommendation you get is one we'd be willing to build.",
      "Our proof is live: we built Lexa, Pakistan's first AI legal chatbot, and the founder shipped My Friend, an LLM-powered companion app — part of 11+ products delivered. When we tell you a roadmap is realistic, it's because we've walked it.",
    ],
    faqs: [
      { q: "What does an AI consulting engagement look like?", a: "A focused discovery phase, a feasibility and data-readiness assessment, then a prioritised roadmap with architecture and honest cost ranges. You get a written strategy you own, whether or not we build it." },
      { q: "How is this different from a big-firm AI strategy deck?", a: "Every recommendation we make is one we could build ourselves. We cost and architect each opportunity for real delivery, so the strategy holds up when it's time to ship — not just in the boardroom." },
      { q: "Do we have to build with you afterwards?", a: "No. The roadmap and assessment are yours to keep and execute however you like. If you do want hands-on delivery, the same senior team can take it from strategy to production." },
      { q: "How long does it take?", a: "Most assessments run a few weeks, depending on scope and data access. We scope the timeline and cost up front, with no obligation to continue." },
      { q: "Is your advice tied to a specific AI vendor?", a: "No. We're model- and platform-agnostic — OpenAI, Anthropic, Google, open-source — and recommend what fits your accuracy, latency, cost, and data needs." },
      { q: "Can you assess an AI project that's already underway?", a: "Yes. We do audits of in-flight AI work — architecture, accuracy, cost, and risk — and give you a candid view of what to keep, fix, or stop." },
    ],
  },

  // 2 — AI & ML DEVELOPMENT
  {
    slug: "ai-ml-development",
    name: "AI & ML Development",
    navLabel: "AI & ML Development",
    pill: "AI & ML Development",
    headline: "Custom machine learning models, built to run in production.",
    subhead:
      "Predictive analytics, computer vision, NLP, recommendation systems, and the data pipelines behind them — engineered by senior ML and software engineers, not handed off after the notebook.",
    accent: "from-violet-100/60 via-white to-brand-50",
    heroVariant: "neural",
    metaTitle: "AI & ML Development Company UK — Custom ML Models | Tackxel",
    metaDescription:
      "Machine learning development company UK. Custom ML models, predictive analytics, computer vision and NLP development — engineered to ship to production by senior engineers.",
    keywords: [
      "AI ML development services",
      "machine learning development company",
      "custom ML models",
      "predictive analytics development",
      "computer vision development",
      "NLP development UK",
    ],
    overviewHeading: "What is AI & ML development?",
    overview: [
      "AI and machine learning development is the engineering of systems that learn patterns from data and make predictions or decisions — forecasting demand, classifying images, understanding language, or recommending what comes next. The hard part isn't training a model in a notebook; it's getting one that's accurate, reliable, and fast enough to live in your product.",
      "We build custom ML models end to end: framing the problem, engineering the data pipeline, training and evaluating the model, and deploying it behind an API with monitoring so quality stays measurable over time. Whether it's predictive analytics, computer vision, natural language processing, or a recommendation system, we treat the model as one component of a production system — not the finish line.",
      "Because the same senior team owns the data pipeline, the model, and the application around it, you avoid the classic failure mode where a data-science prototype never survives contact with real traffic. The result is machine learning that ships, holds its accuracy, and your team can maintain.",
    ],
    process: [
      { no: "01", title: "Discover", desc: "We define the prediction, the success metric, and the data you have. No model without a metric it has to move." },
      { no: "02", title: "Engineer data", desc: "Pipelines, labelling, and feature engineering — the unglamorous work that decides whether the model is any good." },
      { no: "03", title: "Train & evaluate", desc: "Model selection, training, and rigorous evaluation against held-out data and real-world edge cases." },
      { no: "04", title: "Deploy", desc: "The model ships behind an API or into your app, with the inference path engineered for latency and cost." },
      { no: "05", title: "Monitor & optimise", desc: "Drift detection, retraining, and dashboards so accuracy stays measurable and improves over time." },
    ],
    benefitsHeading: "Why custom ML development",
    benefits: [
      { Icon: LineChart, title: "Decisions from data", desc: "Forecasts, scores, and recommendations that turn your data into decisions, not dashboards nobody reads." },
      { Icon: Target, title: "Accuracy that's measured", desc: "Every model ships with an evaluation pipeline, so quality is a number you can track — not a vibe." },
      { Icon: Gauge, title: "Built for production load", desc: "Inference engineered for real latency and cost, not a notebook that falls over at scale." },
      { Icon: Repeat, title: "Stays accurate over time", desc: "Drift monitoring and retraining keep performance from quietly degrading after launch." },
      { Icon: ShieldCheck, title: "Yours to own", desc: "Clean code, documented pipelines, and no black boxes — your team can maintain and extend it." },
      { Icon: Layers, title: "One team, full stack", desc: "Data pipeline, model, and the app around it engineered together, so nothing gets lost in handoff." },
    ],
    useCasesHeading: "What we build with ML",
    useCases: [
      { Icon: LineChart, title: "Predictive analytics", desc: "Demand forecasting, churn prediction, lead scoring, and risk models tied to business KPIs." },
      { Icon: Eye, title: "Computer vision", desc: "Image classification, object detection, OCR, and quality inspection from photos or video." },
      { Icon: ScanText, title: "Natural language processing", desc: "Classification, entity extraction, sentiment, and search over your text and documents." },
      { Icon: ShoppingCart, title: "Recommendation systems", desc: "Personalised product, content, and next-best-action recommendations." },
      { Icon: Database, title: "Data pipelines", desc: "Ingestion, transformation, and feature stores that feed models reliable, fresh data." },
      { Icon: Cpu, title: "On-device & edge ML", desc: "Models that run locally on mobile or hardware for privacy, speed, and offline use." },
    ],
    tech: [
      { name: "PyTorch", sub: "Deep learning" },
      { name: "TensorFlow", sub: "Models" },
      { name: "scikit-learn", sub: "Classic ML" },
      { name: "Python", sub: "Core" },
      { name: "Hugging Face", sub: "Transformers" },
      { name: "OpenCV", sub: "Vision" },
      { name: "MLflow", sub: "Tracking" },
      { name: "AWS SageMaker", sub: "Train/serve" },
      { name: "pandas", sub: "Data" },
      { name: "pgvector", sub: "Embeddings" },
    ],
    why: [
      "Plenty of teams can train a model. Far fewer can ship one that survives production traffic, holds its accuracy, and stays maintainable. We're senior software and ML engineers who own the whole stack — data pipeline, model, and the application around it — so your ML doesn't die in a notebook.",
      "We've shipped AI in the real world: Lexa, Pakistan's first AI legal chatbot, runs on a retrieval and language pipeline in production, and the founder built on-device 3D scanning and LLM products across 11+ shipped projects.",
    ],
    faqs: [
      { q: "Do we need a huge dataset to start?", a: "Not always. Many problems are solvable with modest, well-labelled data or by fine-tuning existing models. Part of our process is honestly assessing whether your data can support the model you want — and what to fix if it can't." },
      { q: "Custom model or an existing API?", a: "Whichever is right. For some problems an LLM API is the fastest, cheapest route; for others a custom model is the only way to hit the accuracy, cost, or privacy you need. We recommend based on your constraints, not ours." },
      { q: "How do you make sure the model is accurate?", a: "Every model ships with an evaluation pipeline against held-out data and real edge cases, plus post-launch drift monitoring so accuracy stays a measurable, tracked number." },
      { q: "Can the model run on-device or offline?", a: "Yes. We build on-device and edge ML for mobile and hardware where privacy, latency, or offline operation matter — the founder shipped on-device 3D scanning on iOS." },
      { q: "Who owns the model and the code?", a: "You do — the model, pipelines, and code are yours, documented and handed over so your team can maintain and extend them." },
      { q: "Do you handle the data pipeline too?", a: "Yes. Ingestion, transformation, labelling, and feature engineering are part of the work — the model is only as good as the data feeding it." },
    ],
  },

  // 3 — AI APP DEVELOPMENT
  {
    slug: "ai-app-development",
    name: "AI App Development",
    navLabel: "AI App Development",
    pill: "AI App Development",
    headline: "AI-powered apps, built right from the ground up.",
    subhead:
      "Full mobile and web applications with AI at the core — not bolted on. Senior product engineers ship the app, the AI features, and the infrastructure as one coherent build.",
    accent: "from-orange-50 via-white to-brand-50",
    heroVariant: "modular",
    metaTitle: "AI App Development Company UK — Build AI-Powered Apps | Tackxel",
    metaDescription:
      "AI app development company UK. We build AI-powered mobile and web apps from the ground up — AI features, product, and infrastructure shipped to production by a senior team.",
    keywords: [
      "AI app development company",
      "AI mobile app development",
      "AI-powered app development",
      "build AI app",
      "AI software development UK",
    ],
    overviewHeading: "What is AI app development?",
    overview: [
      "AI app development is building a complete software product — mobile, web, or both — where artificial intelligence is a first-class part of the experience rather than a feature stapled on at the end. Think an app whose core flow is an AI assistant, a generative feature, intelligent search, or automated decisions, all wrapped in a product that feels fast and native.",
      "We design and build the whole thing: the interface, the application logic, the AI features (LLMs, RAG, vision, or custom models), and the cloud infrastructure that runs it. Because the same senior team owns the product and the AI, the intelligence feels woven into the experience — not like a chatbot widget dropped into a corner.",
      "Every AI-powered app we ship is production-grade from day one: real authentication, observability, cost controls on model usage, and the guardrails that keep AI features reliable in front of real users. You get a launched product on the App Store, Play Store, or web — not a prototype that impresses in a demo and breaks under load.",
    ],
    process: [
      { no: "01", title: "Discover", desc: "We shape the product and decide where AI genuinely improves the experience — and where it doesn't belong." },
      { no: "02", title: "Design", desc: "Product and UX design with the AI interaction designed in, so it feels native rather than bolted on." },
      { no: "03", title: "Build", desc: "App, AI features, and backend engineered together — with evals and guardrails on every AI surface." },
      { no: "04", title: "Deploy", desc: "Store submission or web launch, CI/CD, observability, and cost monitoring on model usage wired in." },
      { no: "05", title: "Optimise", desc: "Post-launch tuning of prompts, models, and UX based on real usage — plus 90-day support." },
    ],
    benefitsHeading: "Why build an AI-powered app",
    benefits: [
      { Icon: Sparkles, title: "AI woven in, not bolted on", desc: "One team builds the product and the AI, so the intelligence feels native to the experience." },
      { Icon: Rocket, title: "Production-grade from day one", desc: "Auth, observability, guardrails, and cost controls — a launched product, not a fragile demo." },
      { Icon: Layers, title: "One team, whole stack", desc: "App, AI, and infrastructure shipped together — no handoffs between a mobile shop and an AI vendor." },
      { Icon: Gauge, title: "Cost-controlled AI", desc: "Model usage monitored and capped so your AI features don't surprise you on the invoice." },
      { Icon: ShieldCheck, title: "Reliable in real hands", desc: "Evals, fallbacks, and safe-refusal behaviour keep AI features dependable in front of users." },
      { Icon: Repeat, title: "Built to evolve", desc: "Modular architecture so adding the next AI feature doesn't mean rewriting the last one." },
    ],
    useCasesHeading: "What we build",
    useCases: [
      { Icon: MessageSquare, title: "AI assistant apps", desc: "Products built around a conversational or copilot experience as the core flow." },
      { Icon: Brain, title: "AI companion & consumer apps", desc: "Emotionally aware, generative consumer experiences — like the founder's My Friend." },
      { Icon: Search, title: "Intelligent search & discovery", desc: "Semantic search, recommendations, and natural-language querying inside your app." },
      { Icon: FileText, title: "Document & data apps", desc: "Apps that ingest, understand, and act on documents, forms, and unstructured data." },
      { Icon: Workflow, title: "AI workflow tools", desc: "Internal and B2B apps that automate multi-step work with AI in the loop." },
      { Icon: Cpu, title: "AI + IoT apps", desc: "Connected-device apps with on-device or cloud AI for real-time intelligence." },
    ],
    tech: [
      { name: "Next.js", sub: "Web" },
      { name: "React Native", sub: "Mobile" },
      { name: "Flutter", sub: "Mobile" },
      { name: "Node.js", sub: "Backend" },
      { name: "Python", sub: "AI services" },
      { name: "OpenAI", sub: "GPT-4/5" },
      { name: "Anthropic", sub: "Claude" },
      { name: "Supabase", sub: "Data/auth" },
      { name: "Vercel", sub: "Hosting" },
      { name: "pgvector", sub: "Embeddings" },
    ],
    why: [
      "Bolting ChatGPT onto an app is easy and usually disappointing. Building a product where AI is genuinely part of the experience — fast, reliable, and cost-controlled — takes a team that owns both the product and the AI. That's what we are: senior product engineers who ship AI features and full apps together.",
      "We've done it for real. The founder shipped My Friend, an AI companion app built on LLMs, and we built Lexa, a production AI assistant — part of 11+ products shipped across mobile, web, and AI.",
    ],
    faqs: [
      { q: "What counts as an 'AI-powered app'?", a: "An app where AI is core to the experience — a conversational flow, a generative feature, intelligent search, or automated decisions — not a chatbot widget added as an afterthought. We design the product and the AI together." },
      { q: "Mobile, web, or both?", a: "Whatever fits. We build native iOS and Android (Swift, Kotlin, React Native, Flutter) and web (Next.js, React), and can share one backend and AI layer across them." },
      { q: "How do you keep AI features from getting expensive?", a: "We monitor and cap model usage, choose the right model per task, cache where sensible, and design fallbacks — so AI features stay reliable without surprising you on the invoice." },
      { q: "Can you add AI to our existing app?", a: "Yes. We integrate AI features into an existing codebase as well as building new products from scratch, working within your stack and release process." },
      { q: "How long to launch?", a: "Many AI apps reach a production launch in weeks to a few months depending on scope. We scope timeline and cost honestly up front." },
      { q: "Who owns the code and the prompts?", a: "You do — the app, the AI integration, the prompts, and the infrastructure are yours, with a clean handover." },
    ],
  },

  // 4 — CHATBOT DEVELOPMENT
  {
    slug: "chatbot-development",
    name: "Chatbot Development",
    navLabel: "Chatbot Development",
    pill: "Chatbot Development",
    headline: "Custom AI chatbots that answer correctly — and know their limits.",
    subhead:
      "Conversational AI for customer support, sales, and internal tools — grounded in your data so answers are accurate and traceable. We built Lexa, Pakistan's first AI legal chatbot.",
    accent: "from-brand-50 via-white to-orange-50",
    heroVariant: "chat",
    metaTitle: "Chatbot Development Company UK — Custom AI Chatbots | Tackxel",
    metaDescription:
      "AI chatbot development company UK. Custom conversational AI chatbots for support, sales and internal tools — grounded in your data. Built Lexa, Pakistan's first AI legal chatbot.",
    keywords: [
      "chatbot development company",
      "AI chatbot development",
      "custom chatbot development",
      "conversational AI development",
      "customer service chatbot",
      "chatbot development UK",
    ],
    overviewHeading: "What is AI chatbot development?",
    overview: [
      "AI chatbot development is building conversational interfaces powered by large language models that can understand a question, find the right answer in your knowledge, and respond in natural language. Modern chatbots are a world away from the rigid decision-tree bots of a few years ago — but only if they're built properly, grounded in real data and wrapped in guardrails.",
      "We build custom chatbots for customer support, sales, and internal tooling. The difference between a useful chatbot and a liability is grounding: we use retrieval-augmented generation (RAG) so the bot answers from your documentation, policies, or product data — and cites where the answer came from — instead of confidently inventing things. We add scoping, safe-refusal behaviour, and human-handoff so it knows when not to answer.",
      "Our flagship proof is Lexa, Pakistan's first AI legal chatbot, which we built to give the public sourced legal guidance grounded in real law. The same conversational AI development approach — accurate, traceable, and safe — applies whether you're deflecting support tickets, qualifying leads, or giving your team an internal assistant.",
    ],
    process: [
      { no: "01", title: "Discover", desc: "We define what the bot must answer, who it serves, and where it must hand off to a human." },
      { no: "02", title: "Ground", desc: "We connect your knowledge — docs, policies, product data — into a retrieval pipeline so answers are sourced." },
      { no: "03", title: "Build", desc: "Conversation design, prompt engineering, guardrails, and the chat UI, on the right model for the job." },
      { no: "04", title: "Deploy", desc: "Launch on your site, app, WhatsApp, or internal tools, with analytics on what users actually ask." },
      { no: "05", title: "Optimise", desc: "We tune retrieval, prompts, and answers from real conversations — accuracy improves with use." },
    ],
    benefitsHeading: "Why build an AI chatbot",
    benefits: [
      { Icon: Headset, title: "Deflect support volume", desc: "Answer the repetitive questions instantly, 24/7, so your team handles the ones that need a human." },
      { Icon: ShieldCheck, title: "Grounded, not guessing", desc: "RAG keeps answers tied to your real content and sources — far less hallucination, more trust." },
      { Icon: Clock, title: "Always on", desc: "Instant responses around the clock, in multiple languages, without growing headcount." },
      { Icon: TrendingUp, title: "Qualify and convert", desc: "Sales and onboarding bots that guide prospects to the right answer and the next step." },
      { Icon: MessageSquare, title: "On-brand and safe", desc: "Tone, scope, and safe-refusal behaviour tuned so the bot represents you well and knows its limits." },
      { Icon: LineChart, title: "Learn from real questions", desc: "Conversation analytics reveal what customers actually ask — and where your content has gaps." },
    ],
    useCasesHeading: "Chatbots we build",
    useCases: [
      { Icon: Headset, title: "Customer support chatbots", desc: "Deflect tickets with grounded answers and seamless human handoff for the hard cases." },
      { Icon: FileText, title: "Knowledge-base assistants", desc: "Let customers and staff ask your documentation in plain language and get sourced answers." },
      { Icon: ShoppingCart, title: "Sales & lead-qualification bots", desc: "Guide prospects, answer pre-sales questions, and capture qualified leads." },
      { Icon: Boxes, title: "Internal copilots", desc: "Give your team an assistant over your wiki, policies, and tools." },
      { Icon: ScanText, title: "Domain-expert chatbots", desc: "Specialist assistants grounded in a body of knowledge — like Lexa for law." },
      { Icon: MessageSquare, title: "WhatsApp & multi-channel bots", desc: "Meet customers where they are — web, app, WhatsApp, and more." },
    ],
    tech: [
      { name: "OpenAI", sub: "GPT-4/5" },
      { name: "Anthropic", sub: "Claude" },
      { name: "LangChain", sub: "Orchestration" },
      { name: "LlamaIndex", sub: "RAG" },
      { name: "Pinecone", sub: "Vector DB" },
      { name: "pgvector", sub: "Embeddings" },
      { name: "Next.js", sub: "Chat UI" },
      { name: "Twilio", sub: "WhatsApp/SMS" },
    ],
    why: [
      "We've shipped the hardest kind of chatbot there is: one that gives the public legal guidance and has to be right. Lexa, Pakistan's first AI legal chatbot, is grounded in real law via RAG so its answers trace back to actual statutes — exactly the discipline a production chatbot for your business needs.",
      "That same rigour — grounding, guardrails, and safe-refusal — goes into every conversational AI we build, backed by a senior team that has shipped 11+ products including the LLM-powered companion app My Friend.",
    ],
    faqs: [
      { q: "How do you stop the chatbot from hallucinating?", a: "We ground answers in your content using retrieval-augmented generation, so the bot responds from retrieved, sourced information rather than memory — and we add safe-refusal so it declines rather than guesses when it doesn't know." },
      { q: "Can it use our existing knowledge base and docs?", a: "Yes. We connect your documentation, policies, product data, and FAQs into the retrieval pipeline so the bot answers from your real, current content — and re-indexes as it changes." },
      { q: "Where can the chatbot live?", a: "Your website, web or mobile app, WhatsApp, and internal tools. We can deploy across multiple channels from one backend." },
      { q: "Does it hand off to a human?", a: "Yes. We design clear escalation so the bot hands off to your team — with full context — for anything outside its scope or when a customer asks." },
      { q: "Which language model do you use?", a: "Whichever fits your accuracy, latency, cost, and data needs — typically OpenAI or Anthropic, sometimes open-source. We're not locked to one provider." },
      { q: "How do you measure if it's working?", a: "Conversation analytics track deflection, resolution, and the questions users actually ask — so you can see impact and where to improve the bot or your content." },
    ],
  },

  // 5 — GENERATIVE AI
  {
    slug: "generative-ai",
    name: "Generative AI",
    navLabel: "Generative AI",
    pill: "Generative AI",
    headline: "Generative AI that produces work you can actually use.",
    subhead:
      "Content and image generation, RAG systems, document intelligence, and AI copilots — generative AI development that ships to production with the guardrails to make it dependable.",
    accent: "from-emerald-50 via-white to-brand-50",
    heroVariant: "rag",
    metaTitle: "Generative AI Development Company UK — GenAI & RAG | Tackxel",
    metaDescription:
      "Generative AI development company UK. RAG systems, LLM applications, content and document intelligence, and AI copilots — GenAI built to ship to production by senior engineers.",
    keywords: [
      "generative AI development",
      "generative AI services",
      "GenAI development company",
      "RAG development",
      "LLM application development",
      "generative AI consulting UK",
    ],
    overviewHeading: "What is generative AI development?",
    overview: [
      "Generative AI development is building systems that create new content — text, images, code, summaries, structured data — using large language and diffusion models. It's the category behind copilots, content tools, document intelligence, and the retrieval-augmented generation (RAG) systems that let AI answer from your own data. The opportunity is enormous; the risk is shipping something that's impressive once and unreliable forever.",
      "We build GenAI solutions that hold up in production. That means retrieval pipelines so output is grounded in your data, structured outputs and validation so results are usable downstream, evaluation pipelines so quality is measured, and cost controls so generation stays affordable at scale. We work across LLM application development, RAG systems, document intelligence, and content and image generation.",
      "The goal is generative AI that earns its place in a real workflow — a copilot your team trusts, a document pipeline that extracts clean data, a content system that stays on-brand. As senior engineers who ship AI to production, we build the unglamorous scaffolding around the model that turns a clever demo into a dependable product.",
    ],
    process: [
      { no: "01", title: "Discover", desc: "We find where generation creates real leverage in your workflow — and where it adds risk without value." },
      { no: "02", title: "Ground", desc: "Retrieval and data pipelines so the model generates from your knowledge, not just its training data." },
      { no: "03", title: "Build", desc: "Prompts, structured outputs, validation, and guardrails — engineered for usable, on-brand results." },
      { no: "04", title: "Evaluate", desc: "Evaluation pipelines measure quality and catch regressions before they reach users." },
      { no: "05", title: "Deploy & optimise", desc: "Ship with cost monitoring and observability, then tune from real usage." },
    ],
    benefitsHeading: "Why invest in generative AI",
    benefits: [
      { Icon: Zap, title: "Create at scale", desc: "Generate drafts, summaries, images, and structured data in seconds instead of hours." },
      { Icon: ShieldCheck, title: "Grounded and on-brand", desc: "RAG and prompt engineering keep output tied to your data, voice, and facts." },
      { Icon: FileText, title: "Turn documents into data", desc: "Extract clean, structured information from PDFs, contracts, and forms automatically." },
      { Icon: Target, title: "Quality you can measure", desc: "Evaluation pipelines make output quality a tracked number, not a hope." },
      { Icon: Gauge, title: "Cost-controlled", desc: "Model selection, caching, and monitoring keep generation affordable as usage grows." },
      { Icon: TrendingUp, title: "Real competitive edge", desc: "Ship GenAI features your competitors are still demoing — built to actually run." },
    ],
    useCasesHeading: "Generative AI we build",
    useCases: [
      { Icon: Search, title: "RAG systems", desc: "Answer and generate from your own knowledge base with grounded, traceable output." },
      { Icon: FileText, title: "Document intelligence", desc: "Extraction, classification, and summarisation across contracts, forms, and scans." },
      { Icon: Sparkles, title: "Content generation", desc: "On-brand copy, summaries, and structured content at scale, with a human in the loop." },
      { Icon: ImageIcon, title: "Image & media generation", desc: "Generative imagery and media pipelines for product, marketing, and personalisation." },
      { Icon: Bot, title: "AI copilots", desc: "In-product assistants that draft, explain, and act inside your software." },
      { Icon: Code2, title: "Structured data generation", desc: "Generate validated, schema-correct data your systems can consume directly." },
    ],
    tech: [
      { name: "OpenAI", sub: "GPT-4/5" },
      { name: "Anthropic", sub: "Claude" },
      { name: "LangChain", sub: "Orchestration" },
      { name: "LlamaIndex", sub: "Data framework" },
      { name: "Pinecone", sub: "Vector DB" },
      { name: "Weaviate", sub: "Vector DB" },
      { name: "pgvector", sub: "Embeddings" },
      { name: "Stable Diffusion", sub: "Images" },
      { name: "Python", sub: "Pipelines" },
      { name: "Next.js", sub: "App layer" },
    ],
    why: [
      "Generative AI is easy to demo and hard to ship. The gap is everything around the model: retrieval, structured outputs, evaluation, guardrails, and cost control. We build that scaffolding as a matter of course, because we're a production engineering studio — not a prompt shop.",
      "Our shipped work proves it: Lexa runs a retrieval-grounded generation pipeline in production, and the founder built My Friend on generative LLMs — part of 11+ products delivered.",
    ],
    faqs: [
      { q: "What is RAG, and do we need it?", a: "Retrieval-augmented generation grounds the model's output in your own data, so it answers from retrieved facts instead of inventing them. If you want GenAI tied to your knowledge — docs, policies, products — you almost certainly need it." },
      { q: "How do you keep generated output accurate and on-brand?", a: "A combination of retrieval grounding, prompt engineering, structured outputs with validation, and evaluation pipelines that measure quality and catch regressions before users see them." },
      { q: "Can generative AI work with our private data securely?", a: "Yes. We architect for data privacy — controlling what's sent to models, using private or self-hosted options where needed, and keeping your data out of training." },
      { q: "Will it get expensive at scale?", a: "Not if it's engineered well. We choose the right model per task, cache, and monitor usage so cost stays proportional to value as you grow." },
      { q: "Can you do image and media generation too?", a: "Yes — alongside text, we build image and media generation pipelines for product, marketing, and personalisation use cases." },
      { q: "Who owns the prompts and pipelines?", a: "You do. The prompts, retrieval pipelines, and code are yours, documented and handed over." },
    ],
  },

  // 6 — AI AGENTS
  {
    slug: "ai-agents",
    name: "AI Agents",
    navLabel: "AI Agents",
    pill: "AI Agents",
    headline: "AI agents that take action — not just answer questions.",
    subhead:
      "Autonomous agents that use your tools, call your APIs, and run multi-step work inside guardrails. Workflow automation and task agents engineered for real operations.",
    accent: "from-sky-50 via-white to-brand-50",
    heroVariant: "workflow",
    metaTitle: "AI Agent Development Company UK — Build Autonomous Agents | Tackxel",
    metaDescription:
      "AI agent development company UK. Build autonomous AI agents for workflow automation and multi-step tasks — tool-using, guardrailed agents engineered for production operations.",
    keywords: [
      "AI agent development",
      "autonomous AI agents",
      "AI agent development company",
      "build AI agents",
      "custom AI agents UK",
      "workflow automation AI",
    ],
    overviewHeading: "What is AI agent development?",
    overview: [
      "An AI agent is a system that doesn't just answer — it acts. Given a goal, it can plan steps, call tools and APIs, read and write data, and work through a multi-step task with a language model doing the reasoning. AI agent development is the engineering of these systems so they're useful and safe: capable enough to do real work, constrained enough that you can trust them with it.",
      "We build custom AI agents for workflow automation and task execution: agents that triage and route, gather information across systems, draft and take actions, and escalate to a human when they should. The craft is in the guardrails — tool permissions, validation, retries, observability, and human-in-the-loop checkpoints — so an autonomous agent is an asset, not a liability.",
      "Because we engineer agents on the same production patterns as our shipped LLM work, they're built to run in your real operations, not a sandbox. You get an agent wired into your tools and APIs, with the controls and visibility to deploy it confidently.",
    ],
    process: [
      { no: "01", title: "Discover", desc: "We map the workflow the agent will own, the tools it needs, and the boundaries it must respect." },
      { no: "02", title: "Design", desc: "Agent architecture — reasoning, tools, memory, and the human-in-the-loop checkpoints." },
      { no: "03", title: "Build", desc: "Tool and API integration, prompt and reasoning logic, validation, retries, and guardrails." },
      { no: "04", title: "Deploy", desc: "Ship into your operations with observability, permissions, and audit logging on every action." },
      { no: "05", title: "Optimise", desc: "Tune reasoning and tools from real runs, widening autonomy as the agent earns trust." },
    ],
    benefitsHeading: "Why build AI agents",
    benefits: [
      { Icon: Workflow, title: "Automate real work", desc: "Hand off multi-step tasks — triage, research, data entry, follow-ups — to an agent that does them." },
      { Icon: Clock, title: "Free your team", desc: "Take repetitive, multi-system busywork off people so they focus on judgement calls." },
      { Icon: ShieldCheck, title: "Guardrailed by design", desc: "Tool permissions, validation, and human checkpoints keep autonomy safe and auditable." },
      { Icon: Network, title: "Works across your tools", desc: "Agents call your APIs and SaaS so action happens in the systems you already use." },
      { Icon: Gauge, title: "Scales with demand", desc: "An agent handles ten or ten thousand tasks without proportional headcount." },
      { Icon: Eye, title: "Observable and accountable", desc: "Every step and action is logged, so you can see exactly what the agent did and why." },
    ],
    useCasesHeading: "Agents we build",
    useCases: [
      { Icon: Headset, title: "Support & triage agents", desc: "Classify, route, gather context, and resolve or escalate incoming requests." },
      { Icon: Search, title: "Research & enrichment agents", desc: "Gather and synthesise information across sources and systems on demand." },
      { Icon: Workflow, title: "Workflow automation agents", desc: "Run multi-step back-office processes that span several tools and APIs." },
      { Icon: FileText, title: "Document processing agents", desc: "Read documents, extract and validate data, and take the next action automatically." },
      { Icon: TrendingUp, title: "Sales & ops agents", desc: "Qualify, enrich, follow up, and update your CRM without manual data shuffling." },
      { Icon: Code2, title: "Internal tooling agents", desc: "Agents that operate your internal systems through natural-language instructions." },
    ],
    tech: [
      { name: "OpenAI", sub: "Function calling" },
      { name: "Anthropic", sub: "Tool use" },
      { name: "LangChain", sub: "Agents" },
      { name: "LangGraph", sub: "Orchestration" },
      { name: "Python", sub: "Core" },
      { name: "Pinecone", sub: "Memory" },
      { name: "pgvector", sub: "Memory" },
      { name: "Temporal", sub: "Durable runs" },
    ],
    why: [
      "Agents fail in production for boring reasons — no guardrails, no observability, no validation. We build them the way we build everything: with the unglamorous engineering that makes autonomy safe and accountable. The result is an agent you can actually deploy, not a demo you have to babysit.",
      "It's the same guardrailed, tool-using discipline behind our shipped LLM products — Lexa and My Friend among 11+ delivered — applied to systems that take real actions in your operations.",
    ],
    faqs: [
      { q: "What's the difference between an AI agent and a chatbot?", a: "A chatbot answers; an agent acts. An agent can plan steps, call tools and APIs, and complete a multi-step task — not just respond in conversation. Many products use both together." },
      { q: "How do you keep an autonomous agent safe?", a: "With layered guardrails: scoped tool permissions, input/output validation, retries and fallbacks, human-in-the-loop checkpoints for risky actions, and full audit logging of every step." },
      { q: "Can an agent work with our existing tools and APIs?", a: "Yes — that's the point. We integrate agents with your APIs, SaaS, and internal systems so actions happen where your work already lives." },
      { q: "Do agents replace people?", a: "They take the repetitive, multi-step busywork. We design human-in-the-loop checkpoints so people stay in control of judgement calls and high-stakes actions." },
      { q: "How much autonomy should an agent have?", a: "We start narrow and supervised, then widen autonomy as the agent proves reliable on real runs — with observability so you can see exactly what it's doing throughout." },
      { q: "Who owns the agent and its logic?", a: "You do — the agent, its integrations, and its logic are yours, documented and handed over." },
    ],
  },

  // 7 — AGENTIC AI
  {
    slug: "agentic-ai",
    name: "Agentic AI",
    navLabel: "Agentic AI",
    pill: "Agentic AI",
    headline: "Agentic AI: multiple agents, orchestrated to get real work done.",
    subhead:
      "Multi-agent systems, agentic workflows, and autonomous decision-making with orchestration. The advanced end of AI agents — engineered with the controls to run in production.",
    accent: "from-violet-100/60 via-white to-orange-50",
    heroVariant: "models",
    metaTitle: "Agentic AI Development UK — Multi-Agent Systems | Tackxel",
    metaDescription:
      "Agentic AI development company UK. Multi-agent systems, agentic workflows, and autonomous decision-making with orchestration — engineered for production by senior AI engineers.",
    keywords: [
      "agentic AI development",
      "agentic AI systems",
      "multi-agent systems development",
      "autonomous AI systems",
      "agentic workflow development",
      "agentic AI company UK",
    ],
    overviewHeading: "What is agentic AI?",
    overview: [
      "Agentic AI is the advanced end of AI agents: systems where multiple specialised agents collaborate, plan, and make decisions to complete complex, open-ended work. Instead of a single agent following one script, an agentic system orchestrates several — a planner, researchers, executors, a critic — each with its own role, tools, and memory, coordinating toward a goal.",
      "We build multi-agent systems and agentic workflows for problems too complex for a single prompt or a linear pipeline: autonomous decision-making, complex research and synthesis, and processes with branching, looping, and self-correction. The engineering challenge is orchestration and control — how agents hand off, share state, recover from errors, and stay within bounds — which is exactly where most agentic projects fall apart.",
      "Our approach keeps the ambition of agentic AI grounded in production reality. We design clear orchestration, strong observability across every agent and step, and human oversight at the points that matter — so an autonomous system is powerful and accountable. It's emerging technology, and we build it the way we build everything: to actually run.",
    ],
    process: [
      { no: "01", title: "Discover", desc: "We assess whether the problem genuinely needs multiple agents — or whether one well-built agent is enough." },
      { no: "02", title: "Architect", desc: "Agent roles, orchestration, shared memory, and the handoffs and oversight points between them." },
      { no: "03", title: "Build", desc: "Specialised agents, orchestration logic, tool integration, error recovery, and self-correction." },
      { no: "04", title: "Deploy", desc: "Ship with deep observability across every agent and decision, plus human-in-the-loop controls." },
      { no: "05", title: "Optimise", desc: "Refine orchestration and agent behaviour from real runs, expanding scope as reliability holds." },
    ],
    benefitsHeading: "Why agentic AI",
    benefits: [
      { Icon: Boxes, title: "Tackle complex work", desc: "Multi-agent systems handle open-ended, multi-step problems a single model can't reliably do alone." },
      { Icon: Network, title: "Specialised collaboration", desc: "Each agent does one job well — planning, research, execution, review — and they coordinate." },
      { Icon: Repeat, title: "Self-correcting", desc: "A critic-and-retry design lets the system catch and fix its own mistakes mid-task." },
      { Icon: ShieldCheck, title: "Controlled autonomy", desc: "Orchestration, bounds, and human checkpoints keep a powerful system accountable." },
      { Icon: Eye, title: "Observable end to end", desc: "Full visibility into every agent, decision, and handoff — essential when systems get complex." },
      { Icon: TrendingUp, title: "A genuine edge", desc: "Capabilities most teams can't yet ship — built by a studio that ships AI for a living." },
    ],
    useCasesHeading: "Agentic systems we build",
    useCases: [
      { Icon: Search, title: "Autonomous research systems", desc: "Multi-agent research that plans, gathers, synthesises, and reviews across many sources." },
      { Icon: Workflow, title: "Complex workflow orchestration", desc: "Branching, looping processes across many tools that a linear pipeline can't handle." },
      { Icon: Brain, title: "Autonomous decision systems", desc: "Systems that evaluate options and decide within defined bounds, with human oversight." },
      { Icon: FileText, title: "Multi-stage document pipelines", desc: "Extract, reason, cross-check, and act across large, complex document sets." },
      { Icon: GitBranch, title: "Agent orchestration platforms", desc: "Frameworks that coordinate specialised agents toward a shared goal." },
      { Icon: Puzzle, title: "Self-correcting automation", desc: "Processes with a planner-executor-critic loop that improve their own output." },
    ],
    tech: [
      { name: "LangGraph", sub: "Orchestration" },
      { name: "CrewAI", sub: "Multi-agent" },
      { name: "AutoGen", sub: "Multi-agent" },
      { name: "OpenAI", sub: "Reasoning" },
      { name: "Anthropic", sub: "Reasoning" },
      { name: "LangChain", sub: "Tools" },
      { name: "Pinecone", sub: "Shared memory" },
      { name: "Temporal", sub: "Durable runs" },
      { name: "Python", sub: "Core" },
    ],
    why: [
      "Agentic AI is where ambition outruns most teams' engineering. Multi-agent systems live or die on orchestration, observability, and control — the exact disciplines we bring to every build. We'll also tell you honestly when a single well-built agent beats a complex multi-agent system, because shipping something that works beats shipping something impressive.",
      "We ground emerging tech in production experience: 11+ shipped products including Lexa, Pakistan's first AI legal chatbot, and the LLM companion app My Friend.",
    ],
    faqs: [
      { q: "What's the difference between AI agents and agentic AI?", a: "An AI agent is a single autonomous system that acts. Agentic AI usually means multiple specialised agents collaborating and orchestrating to handle more complex, open-ended work — with a planner, executors, and often a critic." },
      { q: "Do we actually need a multi-agent system?", a: "Often not — and we'll say so. Many problems are solved better by one well-engineered agent. We recommend multi-agent only when the complexity genuinely warrants it." },
      { q: "How do you keep an autonomous, multi-agent system under control?", a: "Clear orchestration and bounds, strong observability across every agent and decision, error recovery and self-correction, and human-in-the-loop checkpoints at the high-stakes moments." },
      { q: "Is agentic AI production-ready?", a: "It's emerging, and we treat it that way — building with the controls, monitoring, and oversight to run safely, and being honest about where the technology's limits are." },
      { q: "What frameworks do you use?", a: "Tools like LangGraph, CrewAI, and AutoGen for orchestration, on OpenAI or Anthropic models — chosen to fit the problem, not for novelty." },
      { q: "Who owns the system?", a: "You do — the agents, orchestration, and integrations are yours, documented and handed over for your team to run and extend." },
    ],
  },
];

export function getAiService(slug: string): AiService | undefined {
  return aiServices.find((s) => s.slug === slug);
}

export const aiServiceSlugs = aiServices.map((s) => s.slug);
