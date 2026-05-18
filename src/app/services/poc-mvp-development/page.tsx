"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Award, Clock, ShieldCheck,
  TrendingUp, Zap, Plus, Minus,
  Lightbulb, Wrench, Compass, GitBranch, Cloud, Users,
  Building2, Heart, GraduationCap, ShoppingBag, Truck, Server,
  Rocket, ChartLine, ShieldQuestion,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";

const services = [
  {
    Icon: Lightbulb,
    name: "Proof of Concept Development",
    tagline: "Validate technical feasibility quickly.",
    desc: "Proof of concept builds that validate technical feasibility before investing in full-scale engineering — conducting deep architecture reviews, scalability tests, and API integration validation.",
    bullets: [
      "Validate technical feasibility before investing in full-scale software engineering initiatives.",
      "Conduct deep architecture reviews, ensuring scalability, security, and long-term maintainability.",
      "Test API integrations across cloud platforms, third-party tools, and legacy infrastructure.",
      "Deliver structured feasibility reports supporting confident stakeholder and investor decisions.",
      "PoC delivered in 4–6 weeks with go/no-go decision framework.",
    ],
    metric: { value: "4–6", label: "Weeks to validation" },
  },
  {
    Icon: Wrench,
    name: "Custom MVP Product Engineering",
    tagline: "Minimum viable product, maximum learning.",
    desc: "Custom MVPs built on lean methodology — moving from proof of concept to functional MVP through repeatable processes that save time and cost while accelerating validation cycles.",
    bullets: [
      "Build scalable minimum viable product solutions centered on core business value.",
      "Apply agile MVP development sprints for faster validation and iteration cycles.",
      "Design intuitive UI/UX experiences focused on early user adoption and retention.",
      "Develop a cloud architecture prepared for rapid feature expansion and growth.",
      "Production-ready MVPs typically delivered in 8–12 weeks.",
    ],
    metric: { value: "8–12", label: "Weeks to MVP launch" },
  },
  {
    Icon: Compass,
    name: "Product Discovery & Technical Strategy",
    tagline: "Structured discovery workshops.",
    desc: "Product discovery workshops aligning vision with technical execution — defining MVP feature prioritization based on product-market fit validation goals, with transparent estimates and architecture roadmaps.",
    bullets: [
      "Conduct structured product discovery workshops aligning vision with technical execution.",
      "Define MVP feature prioritization based on product-market fit validation goals.",
      "Provide transparent MVP development cost and timeline estimations.",
      "Architect scalable systems supporting future advancements and enterprise transition.",
      "RICE-scored feature prioritization tied to business outcomes.",
    ],
    metric: { value: "100%", label: "Scope clarity" },
  },
  {
    Icon: GitBranch,
    name: "DevOps & Cloud-Native MVP Architecture",
    tagline: "Production-ready from day one.",
    desc: "Cloud-native MVP architecture with serverless components, containerized deployment, and CI/CD pipelines — supporting continuous integration and rapid releases on AWS, Azure, and GCP.",
    bullets: [
      "Build serverless and microservices-based MVP applications for flexible scaling.",
      "Implement CI/CD pipelines supporting continuous integration and rapid releases.",
      "Deploy containerized applications using Docker and Kubernetes orchestration.",
      "Configure secure cloud environments across AWS, Azure, and Google Cloud.",
      "Infrastructure-as-Code with Terraform for reproducible environments.",
    ],
    metric: { value: "10×", label: "Deployment frequency" },
  },
  {
    Icon: Cloud,
    name: "AI, Data & Advanced Technology MVP",
    tagline: "AI-powered MVPs that ship.",
    desc: "AI-powered MVP platforms with machine learning, predictive models, IoT integration, and intelligent automation — built on secure multi-tenant architecture with analytics-driven product decisions.",
    bullets: [
      "Develop AI-powered MVP solutions using machine learning and predictive models.",
      "Build SaaS MVP platforms with secure multi-tenant architecture foundations.",
      "Integrate blockchain, IoT, and intelligent automation capabilities early.",
      "Engineer data pipelines enabling analytics-driven product decisions.",
      "Production AI/ML deployments with monitoring and retraining built in.",
    ],
    metric: { value: "5×", label: "Faster insight cycles" },
  },
  {
    Icon: Users,
    name: "Dedicated MVP Development Team",
    tagline: "Engineers focused on your MVP launch.",
    desc: "Dedicated MVP development teams that scale from 3 to 30 engineers — refactoring MVPs into scalable operational software, strengthening architecture, and providing ongoing engineering partnership beyond launch.",
    bullets: [
      "Refactor MVP applications into scalable and operational software systems.",
      "Strengthen architecture to support increasing users and performance demands.",
      "Improve application security, compliance readiness, and infrastructure stability.",
      "Provide an ongoing product engineering partnership beyond the MVP launch phase.",
      "Embedded engineers in your time zone with daily standups and shared Slack.",
    ],
    metric: { value: "3–30", label: "Team scale flexibility" },
  },
];

const process = [
  { no: "01", title: "Discovery Workshop", duration: "1 week", desc: "Goal setting, user research, and technical feasibility assessment. We start with what success looks like — not what's easiest to build first." },
  { no: "02", title: "Scope & Prioritization", duration: "1 week", desc: "RICE-scored feature prioritization, technical architecture, and clear MVP boundaries. We define what's in — and importantly, what's out." },
  { no: "03", title: "Iterative MVP Build", duration: "6–10 weeks", desc: "Two-week sprints with working software at every demo. Senior engineers own end-to-end with daily standups in your time zone." },
  { no: "04", title: "Validation & Launch", duration: "1–2 weeks", desc: "User testing, performance validation, and launch readiness checks. Go-live with monitoring, rollback safety, and on-call coverage." },
  { no: "05", title: "Iterate & Scale", duration: "Ongoing", desc: "Post-launch analytics, user feedback loops, and roadmap iteration. Move from MVP to scalable operational product with the same team." },
];

const outcomes = [
  {
    Icon: ShieldQuestion,
    title: "Reduce Product Launch Risk",
    desc: "Early feasibility and real user demand validation help you avoid large-scale development failures, misaligned features, and expensive rework.",
  },
  {
    Icon: Rocket,
    title: "Accelerate Time to Market",
    desc: "Launching a focused minimum viable product allows you to enter the market faster, gather feedback quickly, and iterate with confidence.",
  },
  {
    Icon: ChartLine,
    title: "Strengthen Investor & Stakeholder Confidence",
    desc: "A working MVP or structured proof of concept demonstrates execution capability — reducing skepticism and increasing funding or approval potential.",
  },
];

const challenges = [
  { title: "Unclear Product Direction", solution: "Discovery workshops with user research, competitive analysis, and value proposition validation. Clear product direction agreed in week one — not week ten." },
  { title: "Weak Idea Validation", solution: "Customer interviews, problem validation, and prototype testing before code. We validate the problem worth solving — not just whether the solution is buildable." },
  { title: "Technical Feasibility Risks", solution: "PoC builds, architecture reviews, and risk assessments before MVP commitment. Technical feasibility verified, not assumed." },
  { title: "Overbuilt First Versions", solution: "Ruthless scope discipline with RICE-scored prioritization. MVP means minimum viable — we cut everything that doesn't validate the core hypothesis." },
  { title: "Slow Time to Market", solution: "Two-week sprints, parallel workstreams, and CI/CD pipelines from day one. Working software in week three — never multi-month opaque development cycles." },
  { title: "Poor Early User Experience", solution: "UI/UX design integrated from sprint one with continuous user testing. Early users are precious — don't waste them on confusing interfaces." },
  { title: "Scaling Problems After MVP", solution: "Cloud-native architecture, containerization, and stateless services from day one. MVPs that survive contact with growth — without major rewrites." },
  { title: "Uncertain Costs and Timelines", solution: "Fixed-scope, fixed-price MVP packages with clear deliverables. Or transparent T&M with weekly burn reports — your choice, but no surprises." },
  { title: "Security Gaps in Early Builds", solution: "Security-by-design with authentication, encryption, and vulnerability scanning baked in. Security debt costs 10× more to fix after launch." },
  { title: "Handover Issues After Launch", solution: "Comprehensive documentation, runbooks, and knowledge transfer. Or stay with the same team through scaling — your choice, no lock-in." },
];

const industries = [
  { Icon: Building2, name: "Fintech & Financial Services", desc: "PCI-compliant MVPs for fintechs and financial platforms — payment apps, lending platforms, fraud detection, and compliance tooling launched in 8–12 weeks.", examples: ["Payment apps", "Lending platforms", "Fraud detection", "Compliance tooling"] },
  { Icon: Heart, name: "Healthcare & Healthtech", desc: "HIPAA-compliant MVPs for digital health startups — telehealth platforms, patient engagement, clinical workflows, and medical device software with regulatory readiness.", examples: ["Telehealth MVPs", "Patient engagement", "Clinical workflows", "Health devices"] },
  { Icon: GraduationCap, name: "EdTech & eLearning", desc: "MVPs for EdTech founders and education platforms — LMS prototypes, online assessment, adaptive learning, and student engagement tools launched fast.", examples: ["LMS prototypes", "Online assessment", "Adaptive learning", "Student tools"] },
  { Icon: Server, name: "SaaS Platforms", desc: "Multi-tenant SaaS MVPs with subscription billing, user management, and analytics — built on cloud-native architecture ready for product-market fit validation.", examples: ["B2B SaaS MVPs", "Subscription apps", "Analytics tools", "Admin dashboards"] },
  { Icon: ShoppingBag, name: "eCommerce & Marketplaces", desc: "MVPs for eCommerce founders and marketplace platforms — multi-vendor systems, niche storefronts, B2B platforms, and consumer marketplaces launched fast.", examples: ["Marketplace MVPs", "B2B platforms", "Niche storefronts", "Consumer apps"] },
  { Icon: Truck, name: "Logistics & Supply Chain", desc: "MVPs for logistics startups and supply chain platforms — fleet tracking, delivery optimization, warehouse intelligence, and 3PL integrations.", examples: ["Fleet tracking MVPs", "Delivery optimization", "Warehouse tools", "3PL integrations"] },
];

const advantages = [
  { no: "01", title: "Product Clarity First",        desc: "We help define goals, user needs, and priorities before coding — ensuring the MVP truly solves the right problem and validates the core hypothesis." },
  { no: "02", title: "Delivery Ownership",           desc: "We show real results and not just tasks — driving measurable product impact aligned with your business objectives and future roadmap." },
  { no: "03", title: "Team Integration",             desc: "Our engineers integrate into your existing workflow and tools — collaborating without disrupting current operations or project culture." },
  { no: "04", title: "Clear Documentation",          desc: "Every system and decision is recorded thoughtfully — enabling your team to maintain, extend, and evolve the product confidently after launch." },
  { no: "05", title: "Longer-Term Thinking",         desc: "We build MVPs that consider next-stage growth, integration, and scalability — reducing technical debt and accelerating future releases." },
  { no: "06", title: "Transparent Progress",         desc: "We communicate blockers, achievements, and next steps clearly — keeping stakeholders informed and minimizing surprises throughout development." },
];

const techStackTabs = [
  { category: "Frontend Development",    techs: ["React", "Next.js", "Vue.js", "Angular", "Svelte", "TypeScript", "Tailwind CSS", "Flutter", "React Native"] },
  { category: "Backend Development",     techs: ["Node.js", "NestJS", "Python (FastAPI)", "Django", "Ruby on Rails", "Go", "Java Spring Boot", ".NET Core"] },
  { category: "Mobile Development",      techs: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Ionic", "PWA"] },
  { category: "Database & Storage",      techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase", "DynamoDB", "Prisma"] },
  { category: "Cloud & DevOps",          techs: ["AWS", "Azure", "GCP", "Vercel", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  { category: "AI & Advanced Tech",      techs: ["OpenAI", "Anthropic Claude", "LangChain", "Pinecone", "TensorFlow", "Stripe", "Twilio"] },
];

const faqs = [
  { q: "What's the difference between a PoC and an MVP?", a: "A PoC validates technical feasibility — proving something can be built and integrated. An MVP validates market demand — proving people want and will use the thing. We build both, often sequentially: PoC in 4–6 weeks, MVP in 8–12 weeks after PoC validation." },
  { q: "How quickly can you launch an MVP?", a: "Most MVPs launch 8–12 weeks from kickoff. Smaller MVPs (single feature, single platform) can compress to 6 weeks. AI-powered or regulated-industry MVPs typically run 12–16 weeks. We commit to launch dates with milestone-based accountability." },
  { q: "What does a typical MVP cost?", a: "PoC builds typically range from USD 25K to USD 60K for a 4–6 week sprint. MVPs range from USD 60K to USD 180K depending on scope, AI complexity, and platform count. Fixed-scope packages available, or transparent T&M with weekly burn reports." },
  { q: "What happens after the MVP launches?", a: "Most clients continue with the same team to refactor MVP into scalable software, add features based on user feedback, and harden the architecture for growth. You can also take the MVP in-house at any point with full documentation and zero migration cost." },
  { q: "Who owns the MVP, code, and IP?", a: "You do — from day one. All code, designs, architectural decisions, and infrastructure-as-code belong to you. We deliberately avoid lock-in patterns — you can take everything in-house at engagement end with zero migration cost." },
  { q: "Can you build MVPs for regulated industries?", a: "Yes — we routinely build MVPs for fintech (PCI), healthcare (HIPAA), and other regulated spaces. We bake compliance into the MVP from day one rather than retrofitting later, and provide regulatory documentation suitable for auditor or investor due diligence." },
];

const awards = [
  { platform: "Firmstalk",     title: "Top Custom Software Dev",   year: "2024" },
  { platform: "SoftwareWorld", title: "Top Software Developers",   year: "2024" },
  { platform: "Industry",      title: "Top Rated Software Dev",    year: "2024" },
  { platform: "Clutch",        title: "Software Development Co.",  year: "2024" },
  { platform: "TopDevelopers", title: "Top App Developers",        year: "2024" },
  { platform: "GoodFirms",     title: "Top Software Developers",   year: "2024" },
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

export default function POCMVPPage() {
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
          <Reveal><nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-mono"><Link href="/" className="hover:text-brand-300 transition-colors">Home</Link><span>/</span><Link href="/services" className="hover:text-brand-300 transition-colors">Services</Link><span>/</span><span className="text-brand-300">POC/MVP Development</span></nav></Reveal>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><span className="badge-dark mb-6"><span className="dot-pulse" />Validate fast · Launch confidently</span></Reveal>
              <Reveal delay={80}><div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">Validate · Build · Launch</div></Reveal>
              <Reveal delay={140}><h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">POC & MVP Development Services Company.</h1></Reveal>
              <Reveal delay={220}><p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">Tackxel helps startups and enterprises validate ideas, de-risk product decisions, and launch adaptable MVPs through structured proof of concept and rapid MVP development.</p></Reveal>
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
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Award className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">#1 Top-Rated</div><div className="text-xs text-neutral-400">Product Development Company</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Clock className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">U.S. Time Zone</div><div className="text-xs text-neutral-400">Senior engineers · 9am–5pm EST</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Rocket className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">Certified</div><div className="text-xs text-neutral-400">Agile Development Team · SOC 2</div></div></div>
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
                <div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center mb-4"><Lightbulb className="w-5 h-5 text-brand-300" /></div>
                <h3 className="font-display text-h3 text-white mb-2">Product Validation Before Build</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">We test assumptions, validate market fit, and ensure technical feasibility before development — so your product launches with confidence and minimal risk.</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white rounded-lg p-7 h-full card-lift overflow-hidden relative">
                <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-md bg-white/15 border border-white/25 flex items-center justify-center mb-4"><Wrench className="w-5 h-5 text-white" /></div>
                  <h3 className="font-display text-h3 text-white mb-2">POC-To-MVP Framework</h3>
                  <p className="text-sm text-brand-50 leading-relaxed">Our repeatable process moves concepts from proof of concept to functional MVP — combining lean experimentation with engineering precision to save time and cost.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-white border border-neutral-200 rounded-lg p-7 h-full">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-600 font-semibold mb-2">Your Trusted</div>
                <h3 className="font-display text-h3 text-neutral-950 mb-5">Product Engineering <span className="text-brand-600">Partner</span></h3>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={10} suffix="+" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Years Product Engineering Expertise</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950">Top <Counter to={1} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Vetted Talent</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={10} suffix="+" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Industries Served</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={25} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Senior Software Engineers</div></div>
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
          <Reveal><div className="text-center mb-14"><div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Our POC And MVP Development Solutions</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">Validate Faster. <span className="text-brand-600">Launch Smarter. Scale Confidently.</span></h2><p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">Click any service below to explore the engineering depth, capabilities, and measurable outcomes we deliver.</p></div></Reveal>
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
                  <Link href="/contact" className="btn-brand mt-8">Discuss your MVP project<ArrowRight className="w-4 h-4" /></Link>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-xl p-6 flex items-center justify-center aspect-square"><activeServiceData.Icon className="w-32 h-32 lg:w-40 lg:h-40 text-brand-500" strokeWidth={1.2} /></div>
                  <div className="bg-neutral-950 text-white rounded-xl p-6"><div className="text-xs font-mono text-brand-300 uppercase tracking-wider mb-2 font-semibold">Measurable Outcome</div><div className="font-display text-4xl font-bold text-white mb-1 tracking-display">{activeServiceData.metric.value}</div><div className="text-sm text-neutral-400">{activeServiceData.metric.label}</div></div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}><div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">{services.map((s, i) => (<button key={s.name} onClick={() => setActiveService(i)} className={`p-6 text-left transition-colors ${activeService === i ? "bg-brand-50" : "bg-white hover:bg-neutral-50"}`}><div className="flex items-start gap-4"><div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0"><s.Icon className="w-5 h-5 text-brand-600" /></div><div><h3 className="text-sm font-semibold text-neutral-950 mb-1">{s.name}</h3><p className="text-xs text-neutral-600 leading-relaxed">{s.tagline}</p></div></div></button>))}</div></Reveal>
          <Reveal delay={300}><div className="mt-10 flex justify-center"><Link href="/contact" className="btn-brand">Need a Dedicated MVP Development Team?<ArrowRight className="w-4 h-4" /></Link></div></Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">MVP Process</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">How we ship MVPs, <span className="text-brand-600">every engagement</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-xl">A repeatable, transparent MVP delivery process refined across 100+ product launches. Working software in week three — never multi-month opaque sprints.</p></div></Reveal>
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200" />
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-4 relative">{process.map((step, i) => (<Reveal key={step.no} delay={i * 100}><div className="relative"><div className="w-14 h-14 rounded-full bg-white border-2 border-brand-200 flex items-center justify-center mb-5 mx-auto lg:mx-0 relative z-10"><span className="font-mono text-sm font-bold text-brand-700">{step.no}</span></div><div className="bg-white border border-neutral-200 rounded-lg p-5 h-full card-lift"><div className="text-[10px] font-mono text-brand-600 uppercase tracking-wider font-semibold mb-1">{step.duration}</div><h3 className="text-sm font-semibold text-neutral-950 mb-2">{step.title}</h3><p className="text-xs text-neutral-600 leading-relaxed">{step.desc}</p></div></div></Reveal>))}</div>
          </div>
        </div>
      </section>

      {/* BUSINESS OUTCOMES */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/30 via-neutral-950 to-neutral-950" />
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none"><div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4">What Business Outcomes <span className="text-brand-300">Can POC & MVP Deliver For You?</span></h2><p className="text-base text-neutral-300 leading-relaxed mb-8 max-w-lg">Tackxel helps you reduce uncertainty, protect investment, and move toward product-market fit with measurable, strategic product validation outcomes.</p></Reveal>
              <div className="space-y-4">{outcomes.map((t, i) => (<Reveal key={t.title} delay={i * 100}><div className="bg-neutral-900/70 backdrop-blur border border-neutral-800 rounded-lg p-6 card-lift"><div className="flex items-start gap-4"><div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center flex-shrink-0"><t.Icon className="w-6 h-6 text-brand-300" /></div><div><h3 className="text-base font-semibold text-white mb-1.5">{t.title}</h3><p className="text-sm text-neutral-400 leading-relaxed">{t.desc}</p></div></div></div></Reveal>))}</div>
              <Reveal delay={400}><Link href="/contact" className="btn-brand mt-8">Want To Test Your Idea Against The Real Market?<ArrowRight className="w-4 h-4" /></Link></Reveal>
            </div>
            <Reveal delay={300} direction="left">
              <div className="relative bg-neutral-900/40 backdrop-blur border border-neutral-800 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <svg viewBox="0 0 320 320" className="w-full h-full">
                  <defs><radialGradient id="coreGlowMVP" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#5278C2" stopOpacity="0.5" /><stop offset="100%" stopColor="#3159A5" stopOpacity="0" /></radialGradient></defs>
                  <circle cx="160" cy="160" r="60" fill="url(#coreGlowMVP)" />
                  <circle cx="160" cy="160" r="130" fill="none" stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 4" />
                  <circle cx="160" cy="160" r="100" fill="none" stroke="#3159A5" strokeOpacity="0.25" strokeWidth="1.2" />
                  <circle cx="160" cy="160" r="70" fill="none" stroke="#3159A5" strokeOpacity="0.35" strokeWidth="1.2" />
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => { const rad = (deg * Math.PI) / 180; const x = 160 + Math.cos(rad) * 130; const y = 160 + Math.sin(rad) * 130; return (<g key={i}><line x1="160" y1="160" x2={x} y2={y} stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1" /><circle cx={x} cy={y} r="6" fill="#5278C2" /><circle cx={x} cy={y} r="10" fill="none" stroke="#5278C2" strokeOpacity="0.3" /></g>); })}
                  <circle cx="160" cy="160" r="32" fill="#3159A5" />
                  <text x="160" y="167" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" fontFamily="Geist">MVP</text>
                  {[{ label: "POC", x: 290, y: 160 }, { label: "BUILD", x: 225, y: 47 }, { label: "TEST", x: 95, y: 47 }, { label: "LAUNCH", x: 30, y: 160 }, { label: "ITERATE", x: 80, y: 273 }, { label: "SCALE", x: 240, y: 273 }].map((t) => (<g key={t.label}><rect x={t.x - 36} y={t.y - 11} width="72" height="22" rx="4" fill="#1D376A" stroke="#3159A5" strokeOpacity="0.4" /><text x={t.x} y={t.y + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill="#7E9DD7" fontFamily="Geist">{t.label}</text></g>))}
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-end mb-12"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Common Challenges</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-3">Top POC & MVP Challenges Teams Face And How We Solve Them</h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Click any challenge to reveal exactly how we solve it.</p></div></Reveal>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-12">
            <Reveal>
              <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100">
                {challenges.map((c, i) => { const open = openChallenge === i; return (<button key={c.title} onClick={() => setOpenChallenge(open ? null : i)} className="w-full text-left hover:bg-neutral-50 transition-colors block"><div className="flex items-center justify-between gap-6 px-6 py-4"><div className="flex items-start gap-4 flex-1"><span className="font-mono text-xs font-semibold text-brand-600 pt-1 w-6">{String(i + 1).padStart(2, "0")}</span><span className="text-sm font-semibold text-neutral-900 leading-snug">{c.title}</span></div><span className={`w-7 h-7 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}>{open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}</span></div>{open && (<div className="px-6 pb-5 pl-16"><div className="border-l-2 border-brand-300 pl-4"><div className="text-[10px] font-mono uppercase tracking-wider text-brand-600 font-semibold mb-1.5">How we solve it</div><p className="text-sm text-neutral-700 leading-relaxed">{c.solution}</p></div></div>)}</button>); })}
              </div>
            </Reveal>
            <Reveal delay={200} direction="left">
              <div className="lg:sticky lg:top-28 lg:self-start space-y-4">
                <div className="bg-neutral-950 text-white rounded-lg p-7"><div className="text-xs text-brand-300 uppercase tracking-wider font-semibold mb-3">The Pattern</div><p className="text-base text-neutral-200 leading-relaxed">Teams start building without clarity on user needs, scope, or real business priorities.</p></div>
                <div className="bg-white border border-neutral-200 rounded-lg p-7">
                  <div className="text-xs text-brand-600 uppercase tracking-wider font-semibold mb-3">Our Approach</div>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">We run focused discovery sessions to define goals, users, and a realistic MVP scope.</p>
                  <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><Zap className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">3×</div><div className="text-xs text-neutral-500 mt-0.5">Clear Product Scope</div></div>
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><TrendingUp className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">100%</div><div className="text-xs text-neutral-500 mt-0.5">Aligned Stakeholders</div></div>
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
                <div><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-3">Struggling To Avoid Costly Product Mistakes Early On?</h2><p className="text-base text-brand-50 leading-relaxed max-w-xl">Partner with Tackxel to test assumptions early, validate ideas strategically, and avoid costly missteps for startups and enterprises before investing in full builds.</p></div>
                <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2 w-fit lg:justify-self-end">Get Product Clarity Before You Build<ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Industries We Serve</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">Custom POC & MVP Solutions <span className="text-brand-600">Across Leading Industries</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Tackxel works with founders and product teams across industries — shaping POCs and MVPs around real constraints, regulations, and user expectations.</p></div></Reveal>
          <Reveal delay={150}>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-10">
              <ul className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100 h-fit">
                {industries.map((ind, i) => (<li key={ind.name}><button onClick={() => setActiveIndustry(i)} className={`w-full text-left flex items-center justify-between gap-4 px-6 py-4 transition-colors ${activeIndustry === i ? "bg-brand-50" : "hover:bg-neutral-50"}`}><div className="flex items-center gap-4"><div className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${activeIndustry === i ? "bg-brand-500 border-brand-500" : "bg-brand-50 border-brand-100"}`}><ind.Icon className={`w-4 h-4 ${activeIndustry === i ? "text-white" : "text-brand-600"}`} /></div><span className={`text-base font-semibold ${activeIndustry === i ? "text-brand-700" : "text-neutral-900"}`}>{ind.name}</span></div><ArrowRight className={`w-4 h-4 transition-all ${activeIndustry === i ? "text-brand-600 translate-x-1" : "text-neutral-300"}`} /></button></li>))}
              </ul>
              <div className="bg-white border border-neutral-200 rounded-lg p-8 lg:p-10 self-start">
                <div className="flex items-start gap-5 mb-6"><div className="w-16 h-16 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center flex-shrink-0"><activeIndustryData.Icon className="w-7 h-7 text-brand-600" /></div><div><div className="text-eyebrow text-brand-600 uppercase mb-2 font-semibold tracking-widest">Industry Focus</div><h3 className="font-display text-h2 text-neutral-950 leading-tight">{activeIndustryData.name}</h3></div></div>
                <p className="text-base text-neutral-700 leading-relaxed mb-6">{activeIndustryData.desc}</p>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden mb-6">{activeIndustryData.examples.map((ex) => (<div key={ex} className="bg-white p-4 flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" /><span className="text-sm text-neutral-800 font-medium">{ex}</span></div>))}</div>
                <Link href="/contact" className="btn-brand">Discuss Your Industry Specific MVP<ArrowRight className="w-4 h-4" /></Link>
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
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tackxel Advantage</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">Why Do Teams Trust Tackxel <span className="text-brand-300">For POC And MVP Development?</span></h2></div><p className="text-base text-neutral-300 leading-relaxed lg:justify-self-end max-w-xl">Tackxel combines strategic insight, technical precision, and real-world experience to deliver MVPs that truly validate ideas and drive results.</p></div></Reveal>
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
          <Reveal><div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tech Stack</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">Tools &amp; Technologies We Use</h2></div><p className="text-base text-neutral-400 leading-relaxed max-w-xl lg:justify-self-end">We use modern, proven tools and technologies to build adaptable, reliable, and scalable MVPs — giving you confidence in every stage of development.</p></div></Reveal>
          <Reveal delay={100}>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
              <div className="flex flex-wrap gap-px bg-neutral-800 border-b border-neutral-800">{techStackTabs.map((t, i) => (<button key={t.category} onClick={() => setActiveStack(i)} className={`flex-1 min-w-[120px] px-4 lg:px-6 py-4 text-sm font-medium transition-all ${activeStack === i ? "bg-brand-600 text-white border-b-2 border-b-brand-300" : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800/60 hover:text-white"}`}><div className="text-xs font-mono mb-1 opacity-70">{String(i + 1).padStart(2, "0")}</div>{t.category}</button>))}</div>
              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
                  <div><div className="text-eyebrow text-brand-300 uppercase mb-3 font-semibold tracking-widest">{String(activeStack + 1).padStart(2, "0")} · Tech Category</div><h3 className="font-display text-h2 text-white mb-3">{activeStackData.category}</h3><p className="text-sm text-neutral-400 leading-relaxed">{activeStackData.techs.length} production-ready technologies for MVP development.</p></div>
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
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">Ready to validate and launch your MVP?</h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">Free 30-minute MVP strategy session with a senior product engineer. No slide decks, no sales reps.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-brand">Talk to a product engineer<ArrowRight className="w-4 h-4" /></Link>
              <Link href="/services" className="btn-ghost-light">Back to all services<ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
