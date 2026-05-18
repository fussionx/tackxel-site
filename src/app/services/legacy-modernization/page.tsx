"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Award, Clock, ShieldCheck,
  TrendingUp, Zap, Plus, Minus,
  RefreshCw, ClipboardCheck, Cloud, Link2, Database, Lock,
  Heart, Building2, Shield, ShoppingBag, Factory, GraduationCap,
  Boxes, Server, Cpu,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";

const services = [
  {
    Icon: RefreshCw,
    name: "Legacy Application Reengineering",
    tagline: "Rebuild legacy apps for high performance.",
    desc: "Rebuild legacy applications to deliver high performance and measurable business impact — refactoring outdated codebases for maintainability while reducing accumulated technical debt.",
    bullets: [
      "Rebuild legacy applications to deliver high performance and measurable business impact.",
      "Refactor outdated codebases to improve maintainability, speed, and operational efficiency.",
      "Reduce accumulated technical debt while aligning systems with modern enterprise needs.",
      "Improve reliability through architecture redesign that supports growth and scalability.",
      "Strangler-pattern migration with zero downtime guarantees.",
    ],
    metric: { value: "60%", label: "Technical debt reduction" },
  },
  {
    Icon: ClipboardCheck,
    name: "Legacy System Assessment & Roadmap",
    tagline: "Comprehensive audits and phased roadmaps.",
    desc: "Comprehensive legacy system audits that uncover hidden performance bottlenecks, identify compliance risks, and produce phased modernization roadmaps with measurable milestones aligned to long-term business goals.",
    bullets: [
      "Conduct comprehensive audits to uncover hidden performance bottlenecks and security gaps.",
      "Identify compliance risks and prioritize modernization steps with measurable milestones.",
      "Map a phased roadmap aligning legacy modernization with long-term business goals.",
      "Provide actionable insights to guide decision-making for CTOs and IT leaders.",
      "ROI-prioritized initiatives tied to measurable revenue outcomes.",
    ],
    metric: { value: "100%", label: "Roadmap clarity" },
  },
  {
    Icon: Cloud,
    name: "Cloud Migration & Application Replatforming",
    tagline: "Move legacy workloads to AWS, Azure, GCP.",
    desc: "Move legacy workloads to AWS, Azure, or Google Cloud securely and efficiently — replatforming applications into containerized, cloud-native environments for improved resilience and agile scaling.",
    bullets: [
      "Move legacy workloads to AWS, Azure, or Google Cloud securely and efficiently.",
      "Replatform applications into containerized, cloud-native environments for improved resilience.",
      "Deploy Kubernetes and Docker solutions for agile scaling and workload orchestration.",
      "Increase system uptime and performance while reducing infrastructure complexity.",
      "Multi-cloud and hybrid deployment options for sovereignty needs.",
    ],
    metric: { value: "40%", label: "Infrastructure cost cut" },
  },
  {
    Icon: Link2,
    name: "Legacy API & System Integration",
    tagline: "Connect legacy with modern enterprise apps.",
    desc: "Enable simple connectivity between legacy and modern enterprise applications — breaking down data silos, implementing secure API strategies, and ensuring interoperability across business processes.",
    bullets: [
      "Enable simple connectivity between legacy and modern enterprise applications.",
      "Break down data silos for accurate, real-time information flow across platforms.",
      "Implement secure API strategies to support digital transformation initiatives.",
      "Ensure interoperability that strengthens business processes and customer-facing systems.",
      "API-first architecture with versioning, governance, and developer portals.",
    ],
    metric: { value: "70%", label: "Faster system integration" },
  },
  {
    Icon: Database,
    name: "Legacy Database & Infrastructure Modernization",
    tagline: "Upgrade outdated databases for scale.",
    desc: "Upgrade outdated databases to improve speed and scalability — replacing legacy infrastructure with cloud-ready, resilient, and secure environments while consolidating fragmented data systems.",
    bullets: [
      "Upgrade outdated databases to improve speed, reliability, and scalability.",
      "Replace legacy infrastructure with cloud-ready, resilient, and secure environments.",
      "Consolidate fragmented data systems to enable unified enterprise insights.",
      "Build scalable infrastructure that supports growth and reduces operational risk.",
      "Zero-downtime database migration with parallel-run validation.",
    ],
    metric: { value: "3×", label: "Database performance" },
  },
  {
    Icon: Lock,
    name: "Security & Compliance Modernization",
    tagline: "Enterprise-grade security frameworks.",
    desc: "Address vulnerabilities in legacy systems with enterprise-grade security frameworks — implementing governance, regulatory controls, and identity management for risk management and compliance.",
    bullets: [
      "Address vulnerabilities in legacy systems with enterprise-grade security frameworks.",
      "Implement governance and regulatory controls for risk management and compliance.",
      "Strengthen identity management, encryption, and access policies for data safety.",
      "Reduce operational risk with structured modernization and proactive monitoring strategies.",
      "SOC 2, GDPR, HIPAA, PCI DSS compliance built in from day one.",
    ],
    metric: { value: "100%", label: "Audit-ready compliance" },
  },
];

const process = [
  { no: "01", title: "Legacy Assessment", duration: "2–3 weeks", desc: "Architecture audit, dependency mapping, technical debt analysis, and risk profiling. We diagnose what to modernize first — not what's easiest to demo." },
  { no: "02", title: "Modernization Roadmap", duration: "1–2 weeks", desc: "Phased modernization plan with ROI-ranked initiatives, governance framework, and risk mitigation strategy. Board-ready, not boilerplate." },
  { no: "03", title: "Iterative Modernization", duration: "12–24 weeks", desc: "Strangler-pattern migration with parallel runs, zero-downtime cutover, and continuous business KPI tracking. Working systems at every milestone." },
  { no: "04", title: "Cutover & Validation", duration: "2–4 weeks", desc: "Phased traffic migration, regression testing, and rollback safety. We cut over carefully — not dramatically." },
  { no: "05", title: "Optimize & Support", duration: "Ongoing", desc: "Continuous platform optimization, quarterly architecture reviews, and roadmap evolution tied to measurable business outcomes." },
];

const architecturalShifts = [
  {
    Icon: Boxes,
    title: "Monolithic Applications to Modular Services",
    desc: "We break down your monolithic systems into independently deployable modules — helping you release features faster, reduce risk, and stay agile as your business evolves.",
  },
  {
    Icon: Cloud,
    title: "On-Premise Infrastructure to Cloud Platforms",
    desc: "Our team migrates your infrastructure to secure, scalable cloud platforms — improving resilience, streamlining operations, and preparing your systems for enterprise-scale growth.",
  },
  {
    Icon: Server,
    title: "Traditional Servers to Serverless Architectures",
    desc: "We move workloads to serverless environments — reducing operational overhead, eliminating bottlenecks, and giving you scalable performance under unpredictable demand.",
  },
];

const challenges = [
  { title: "Outdated And Rigid System Architecture", solution: "Modular refactoring with strangler-pattern migration. Legacy systems decomposed into independently deployable services without big-bang rewrites or feature regression." },
  { title: "Escalating Maintenance And Infrastructure Costs", solution: "Cloud-native replatforming with right-sized resources, autoscaling, and managed services. Infrastructure costs typically drop 40% post-modernization." },
  { title: "Limited Scalability During Growth", solution: "Horizontal scaling architecture with serverless components and elastic resource provisioning. Platforms that grow with your business — not against it." },
  { title: "Security Vulnerabilities In Outdated Software", solution: "Security-by-design with zero-trust principles, automated vulnerability scanning, and modern encryption. SOC 2, GDPR, HIPAA, PCI DSS compliance built in." },
  { title: "Integration Difficulties Across Systems", solution: "API-first integration platform with reusable connectors, standardized message contracts, and developer portals. Integrations become composable assets." },
  { title: "Accumulated Technical Debt", solution: "Systematic debt reduction with ROI-prioritized refactoring, automated test coverage, and architectural fitness functions. Debt management, not debt panic." },
  { title: "Downtime Risks During Modernization", solution: "Zero-downtime migration with blue-green deployment, parallel-run validation, and instant rollback safety. Cutover is boring — by design." },
  { title: "Data Silos Across Departments", solution: "Enterprise data fabric with governed pipelines, semantic layers, and unified data catalogs. One source of truth across departments." },
  { title: "Poor User Experience And Interface Limitations", solution: "Modern frontend rewrites with progressive migration, accessibility compliance, and design system foundations. UX improvements measurable in satisfaction scores." },
  { title: "Unclear Modernization Strategy", solution: "Board-level roadmap with ROI prioritization, governance framework, and quarterly steering reviews. Strategy that survives contact with reality." },
];

const industries = [
  { Icon: Heart, name: "Healthcare & HealthTech", desc: "HIPAA-compliant legacy modernization for hospitals and digital health platforms — migrating EHR systems, clinical workflows, and patient portals to cloud-native architecture.", examples: ["EHR migration", "Clinical workflows", "Patient portals", "Telehealth platforms"] },
  { Icon: Building2, name: "Fintech & Financial Services", desc: "PCI-compliant modernization for banks and financial services — replatforming core banking, payment systems, and fraud detection without disrupting transactions.", examples: ["Core banking", "Payment systems", "Fraud detection", "Customer channels"] },
  { Icon: Shield, name: "Insurance & Insurtech", desc: "Modernization for insurers and insurtech platforms — refactoring policy administration, claims processing, and underwriting systems for digital-first operations.", examples: ["Policy administration", "Claims processing", "Underwriting AI", "Customer portals"] },
  { Icon: ShoppingBag, name: "Retail & eCommerce", desc: "Omnichannel modernization for retailers — migrating eCommerce platforms, inventory systems, and POS infrastructure to modern, scalable, cloud-native foundations.", examples: ["eCommerce platforms", "Inventory systems", "POS modernization", "Customer data"] },
  { Icon: Factory, name: "Manufacturing", desc: "Smart-factory modernization — migrating MES, ERP, and supply chain systems to modern architecture with IoT integration and real-time analytics.", examples: ["MES modernization", "ERP migration", "Supply chain AI", "IoT integration"] },
  { Icon: GraduationCap, name: "Education & EdTech", desc: "Modernization for schools, universities, and EdTech platforms — migrating LMS, student information systems, and digital learning experiences to scalable cloud platforms.", examples: ["LMS modernization", "SIS migration", "Digital learning", "Analytics platforms"] },
];

const advantages = [
  { no: "01", title: "Strategic Roadmaps",            desc: "Our team maps modernization plans so you understand every milestone, risk, and expected outcome before changes begin." },
  { no: "02", title: "Business-Aligned Decisions",    desc: "Every technical choice supports your business objectives — ensuring modernization drives tangible value for your organization, not just technical trends." },
  { no: "03", title: "Scalable Foundations",          desc: "We build systems that grow with your organization, helping you avoid recurring performance limitations or repeated rework." },
  { no: "04", title: "Phased System Upgrades",        desc: "We modernize systems in controlled stages, allowing your teams to continue operations while we implement meaningful improvements." },
  { no: "05", title: "Transparent Communication",     desc: "You receive regular updates, documentation, and collaborative guidance so that every decision is visible and well understood." },
  { no: "06", title: "Long-Term Support Mindset",     desc: "We plan for your future, providing maintenance strategies, upgrades, and guidance so your systems remain reliable long-term." },
];

const techStackTabs = [
  { category: "Cloud Platforms",     techs: ["AWS", "Microsoft Azure", "Google Cloud Platform", "IBM Cloud", "Oracle Cloud"] },
  { category: "Containers & Orchestration", techs: ["Kubernetes", "Docker", "OpenShift", "ECS", "AKS", "GKE", "Helm", "Istio"] },
  { category: "DevOps & CI/CD",      techs: ["Terraform", "Ansible", "Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD", "Bitbucket Pipelines"] },
  { category: "Languages & Frameworks", techs: ["Java", "Spring Boot", ".NET Core", "Node.js", "Python", "Go", "PHP", "Kotlin"] },
  { category: "Databases",           techs: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Cassandra", "Redis", "Snowflake", "Databricks"] },
  { category: "Observability",       techs: ["Datadog", "New Relic", "Splunk", "Prometheus", "Grafana", "ELK Stack", "OpenTelemetry"] },
];

const faqs = [
  { q: "How long does a typical legacy modernization project take?", a: "Most legacy modernization engagements run 6–18 months from discovery to full cutover. Smaller systems can complete in 3–6 months. We work in phased increments — every milestone delivers working capability rather than waiting for big-bang completion." },
  { q: "What's the typical cost of legacy modernization?", a: "Mid-size legacy modernization projects typically range from USD 200K to USD 1M depending on scope, complexity, and existing technical debt. Discovery and roadmap engagements start at USD 50K. Most projects deliver 40%+ cost savings within 12 months of completion." },
  { q: "Can you modernize without disrupting our operations?", a: "Yes — that's the entire point of strangler-pattern migration. We modernize alongside running systems with parallel runs, blue-green deployment, and instant rollback safety. Most cutover events are deliberately boring, not dramatic events." },
  { q: "What about our existing data, users, and integrations?", a: "Data migration is treated as a first-class workstream with parallel-run validation, integrity checks, and zero-loss guarantees. User experience is preserved through careful UI migration. Existing integrations migrate via API gateway abstraction." },
  { q: "Do we lose any features during modernization?", a: "No. Feature parity is the baseline. We document existing behavior thoroughly before modernization and validate every feature post-migration. We never sneak feature reductions in under the guise of modernization." },
  { q: "Who owns the modernized systems, code, and IP?", a: "You do — from day one. All code, architectural decisions, infrastructure-as-code, and documentation belong to you. We deliberately avoid lock-in patterns — you can take everything in-house at engagement end with zero migration cost." },
];

const awards = [
  { platform: "Clutch",        title: "Top Modernization Co.",     year: "2024" },
  { platform: "TopDevelopers", title: "Top Software Developers",   year: "2024" },
  { platform: "Firmstalk",     title: "Top Custom Software Dev",   year: "2024" },
  { platform: "SoftwareWorld", title: "Top Rated Software Dev",    year: "2024" },
  { platform: "Industry",      title: "Top Software Developers",   year: "2024" },
  { platform: "GoodFirms",     title: "Best Software Development", year: "2024" },
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

export default function LegacyModernizationPage() {
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
          <Reveal><nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-mono"><Link href="/" className="hover:text-brand-300 transition-colors">Home</Link><span>/</span><Link href="/services" className="hover:text-brand-300 transition-colors">Services</Link><span>/</span><span className="text-brand-300">Legacy Modernization</span></nav></Reveal>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><span className="badge-dark mb-6"><span className="dot-pulse" />Enterprise legacy modernization</span></Reveal>
              <Reveal delay={80}><div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">Modernize · Reengineer · Scale</div></Reveal>
              <Reveal delay={140}><h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">Legacy System Modernization Services Company.</h1></Reveal>
              <Reveal delay={220}><p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">Tackxel provides legacy modernization services to upgrade outdated systems, reduce technical debt, and build cloud-native platforms — helping enterprise leaders accelerate innovation while securing operations and increasing long-term agility.</p></Reveal>
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
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Award className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">#1 Enterprise</div><div className="text-xs text-neutral-400">Legacy Software Modernization Experts</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Clock className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">U.S. & Global</div><div className="text-xs text-neutral-400">Delivery Coverage · 24/7 support</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Cpu className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">Certified</div><div className="text-xs text-neutral-400">Cloud & Microservices Experts</div></div></div>
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
                <div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center mb-4"><RefreshCw className="w-5 h-5 text-brand-300" /></div>
                <h3 className="font-display text-h3 text-white mb-2">Legacy Application Reengineering</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">We refactor monolithic applications, modernize outdated codebases, and rebuild legacy systems into adaptable, resilient, and advanced enterprise platforms.</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white rounded-lg p-7 h-full card-lift overflow-hidden relative">
                <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-md bg-white/15 border border-white/25 flex items-center justify-center mb-4"><Cloud className="w-5 h-5 text-white" /></div>
                  <h3 className="font-display text-h3 text-white mb-2">Cloud Migration & System Upgrade</h3>
                  <p className="text-sm text-brand-50 leading-relaxed">Our team migrates legacy systems to AWS, Azure, or Google Cloud with structured modernization roadmaps that minimize risk, downtime, and operational complexity.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-white border border-neutral-200 rounded-lg p-7 h-full">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-600 font-semibold mb-2">Your Trusted</div>
                <h3 className="font-display text-h3 text-neutral-950 mb-5">Legacy Modernization <span className="text-brand-600">Partner</span></h3>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={10} suffix="+" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Years of Experience</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950">Top <Counter to={1} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Vetted Talent</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={10} suffix="+" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Industries Served</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950">Specialists</div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Enterprise Modernization</div></div>
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
          <Reveal><div className="text-center mb-14"><div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Our Legacy System Modernization Solutions</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">Build Resilient Systems <span className="text-brand-600">That Support Business Expansion</span></h2><p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">Click any service below to explore the engineering depth, capabilities, and measurable outcomes we deliver.</p></div></Reveal>
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
                  <Link href="/contact" className="btn-brand mt-8">Discuss your modernization project<ArrowRight className="w-4 h-4" /></Link>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-xl p-6 flex items-center justify-center aspect-square"><activeServiceData.Icon className="w-32 h-32 lg:w-40 lg:h-40 text-brand-500" strokeWidth={1.2} /></div>
                  <div className="bg-neutral-950 text-white rounded-xl p-6"><div className="text-xs font-mono text-brand-300 uppercase tracking-wider mb-2 font-semibold">Measurable Outcome</div><div className="font-display text-4xl font-bold text-white mb-1 tracking-display">{activeServiceData.metric.value}</div><div className="text-sm text-neutral-400">{activeServiceData.metric.label}</div></div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}><div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">{services.map((s, i) => (<button key={s.name} onClick={() => setActiveService(i)} className={`p-6 text-left transition-colors ${activeService === i ? "bg-brand-50" : "bg-white hover:bg-neutral-50"}`}><div className="flex items-start gap-4"><div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0"><s.Icon className="w-5 h-5 text-brand-600" /></div><div><h3 className="text-sm font-semibold text-neutral-950 mb-1">{s.name}</h3><p className="text-xs text-neutral-600 leading-relaxed">{s.tagline}</p></div></div></button>))}</div></Reveal>
          <Reveal delay={300}><div className="mt-10 flex justify-center"><Link href="/contact" className="btn-brand">Is It Time to Modernize Your Software?<ArrowRight className="w-4 h-4" /></Link></div></Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Delivery Process</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">How we modernize, <span className="text-brand-600">every engagement</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-xl">A repeatable, transparent delivery process refined across 100+ enterprise modernizations. Working systems at every milestone — never multi-year vapor.</p></div></Reveal>
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200" />
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-4 relative">{process.map((step, i) => (<Reveal key={step.no} delay={i * 100}><div className="relative"><div className="w-14 h-14 rounded-full bg-white border-2 border-brand-200 flex items-center justify-center mb-5 mx-auto lg:mx-0 relative z-10"><span className="font-mono text-sm font-bold text-brand-700">{step.no}</span></div><div className="bg-white border border-neutral-200 rounded-lg p-5 h-full card-lift"><div className="text-[10px] font-mono text-brand-600 uppercase tracking-wider font-semibold mb-1">{step.duration}</div><h3 className="text-sm font-semibold text-neutral-950 mb-2">{step.title}</h3><p className="text-xs text-neutral-600 leading-relaxed">{step.desc}</p></div></div></Reveal>))}</div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL SHIFTS */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/30 via-neutral-950 to-neutral-950" />
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none"><div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4">Architectural Shifts That Define <span className="text-brand-300">Real Business Modernization</span></h2><p className="text-base text-neutral-300 leading-relaxed mb-8 max-w-lg">Tackxel guides organizations through critical technology transitions that strengthen scalability, flexibility, and long-term system sustainability across enterprise environments.</p></Reveal>
              <div className="space-y-4">{architecturalShifts.map((t, i) => (<Reveal key={t.title} delay={i * 100}><div className="bg-neutral-900/70 backdrop-blur border border-neutral-800 rounded-lg p-6 card-lift"><div className="flex items-start gap-4"><div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center flex-shrink-0"><t.Icon className="w-6 h-6 text-brand-300" /></div><div><h3 className="text-base font-semibold text-white mb-1.5">{t.title}</h3><p className="text-sm text-neutral-400 leading-relaxed">{t.desc}</p></div></div></div></Reveal>))}</div>
              <Reveal delay={400}><Link href="/contact" className="btn-brand mt-8">Want to Move Beyond Legacy Limitations?<ArrowRight className="w-4 h-4" /></Link></Reveal>
            </div>
            <Reveal delay={300} direction="left">
              <div className="relative bg-neutral-900/40 backdrop-blur border border-neutral-800 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <svg viewBox="0 0 320 320" className="w-full h-full">
                  <defs><radialGradient id="coreGlowLegacy" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#5278C2" stopOpacity="0.5" /><stop offset="100%" stopColor="#3159A5" stopOpacity="0" /></radialGradient></defs>
                  <circle cx="160" cy="160" r="60" fill="url(#coreGlowLegacy)" />
                  <circle cx="160" cy="160" r="130" fill="none" stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 4" />
                  <circle cx="160" cy="160" r="100" fill="none" stroke="#3159A5" strokeOpacity="0.25" strokeWidth="1.2" />
                  <circle cx="160" cy="160" r="70" fill="none" stroke="#3159A5" strokeOpacity="0.35" strokeWidth="1.2" />
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => { const rad = (deg * Math.PI) / 180; const x = 160 + Math.cos(rad) * 130; const y = 160 + Math.sin(rad) * 130; return (<g key={i}><line x1="160" y1="160" x2={x} y2={y} stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1" /><circle cx={x} cy={y} r="6" fill="#5278C2" /><circle cx={x} cy={y} r="10" fill="none" stroke="#5278C2" strokeOpacity="0.3" /></g>); })}
                  <circle cx="160" cy="160" r="32" fill="#3159A5" />
                  <text x="160" y="167" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily="Geist">MODERN</text>
                  {[{ label: "MICRO", x: 290, y: 160 }, { label: "K8S", x: 225, y: 47 }, { label: "API", x: 95, y: 47 }, { label: "DATA", x: 30, y: 160 }, { label: "DEVOPS", x: 80, y: 273 }, { label: "CLOUD", x: 240, y: 273 }].map((t) => (<g key={t.label}><rect x={t.x - 32} y={t.y - 11} width="64" height="22" rx="4" fill="#1D376A" stroke="#3159A5" strokeOpacity="0.4" /><text x={t.x} y={t.y + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill="#7E9DD7" fontFamily="Geist">{t.label}</text></g>))}
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-end mb-12"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Common Challenges</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-3">Top Legacy Software Modernization Challenges And How We Solve Them</h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Click any challenge to reveal exactly how we solve it.</p></div></Reveal>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-12">
            <Reveal>
              <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100">
                {challenges.map((c, i) => { const open = openChallenge === i; return (<button key={c.title} onClick={() => setOpenChallenge(open ? null : i)} className="w-full text-left hover:bg-neutral-50 transition-colors block"><div className="flex items-center justify-between gap-6 px-6 py-4"><div className="flex items-start gap-4 flex-1"><span className="font-mono text-xs font-semibold text-brand-600 pt-1 w-6">{String(i + 1).padStart(2, "0")}</span><span className="text-sm font-semibold text-neutral-900 leading-snug">{c.title}</span></div><span className={`w-7 h-7 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}>{open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}</span></div>{open && (<div className="px-6 pb-5 pl-16"><div className="border-l-2 border-brand-300 pl-4"><div className="text-[10px] font-mono uppercase tracking-wider text-brand-600 font-semibold mb-1.5">How we solve it</div><p className="text-sm text-neutral-700 leading-relaxed">{c.solution}</p></div></div>)}</button>); })}
              </div>
            </Reveal>
            <Reveal delay={200} direction="left">
              <div className="lg:sticky lg:top-28 lg:self-start space-y-4">
                <div className="bg-neutral-950 text-white rounded-lg p-7"><div className="text-xs text-brand-300 uppercase tracking-wider font-semibold mb-3">The Pattern</div><p className="text-base text-neutral-200 leading-relaxed">Legacy applications rely on tightly coupled architectures that restrict scalability, flexibility, and integration capabilities.</p></div>
                <div className="bg-white border border-neutral-200 rounded-lg p-7">
                  <div className="text-xs text-brand-600 uppercase tracking-wider font-semibold mb-3">Our Approach</div>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">We redesign system architecture using modular principles that support scalability, adaptability, and long-term maintainability.</p>
                  <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><Zap className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">3×</div><div className="text-xs text-neutral-500 mt-0.5">Architectural Flexibility</div></div>
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><TrendingUp className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">99.9%</div><div className="text-xs text-neutral-500 mt-0.5">Long-Term Stability</div></div>
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
                <div><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-3">Want To Fix Legacy System Risks Before They Derail Your Business?</h2><p className="text-base text-brand-50 leading-relaxed max-w-xl">Tackxel helps CTOs and enterprise leaders fix hidden vulnerabilities, improve stability, and enable smooth integrations before they escalate into costly failures.</p></div>
                <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2 w-fit lg:justify-self-end">Request Your System Risk Assessment<ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Industries We Serve</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">Industries We Support Through <span className="text-brand-600">Our Legacy Modernization Solutions</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">We modernize critical systems across regulated and high-scale industries — aligning technical upgrades with operational realities, compliance frameworks, and long-term system reliability goals.</p></div></Reveal>
          <Reveal delay={150}>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-10">
              <ul className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100 h-fit">
                {industries.map((ind, i) => (<li key={ind.name}><button onClick={() => setActiveIndustry(i)} className={`w-full text-left flex items-center justify-between gap-4 px-6 py-4 transition-colors ${activeIndustry === i ? "bg-brand-50" : "hover:bg-neutral-50"}`}><div className="flex items-center gap-4"><div className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${activeIndustry === i ? "bg-brand-500 border-brand-500" : "bg-brand-50 border-brand-100"}`}><ind.Icon className={`w-4 h-4 ${activeIndustry === i ? "text-white" : "text-brand-600"}`} /></div><span className={`text-base font-semibold ${activeIndustry === i ? "text-brand-700" : "text-neutral-900"}`}>{ind.name}</span></div><ArrowRight className={`w-4 h-4 transition-all ${activeIndustry === i ? "text-brand-600 translate-x-1" : "text-neutral-300"}`} /></button></li>))}
              </ul>
              <div className="bg-white border border-neutral-200 rounded-lg p-8 lg:p-10 self-start">
                <div className="flex items-start gap-5 mb-6"><div className="w-16 h-16 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center flex-shrink-0"><activeIndustryData.Icon className="w-7 h-7 text-brand-600" /></div><div><div className="text-eyebrow text-brand-600 uppercase mb-2 font-semibold tracking-widest">Industry Focus</div><h3 className="font-display text-h2 text-neutral-950 leading-tight">{activeIndustryData.name}</h3></div></div>
                <p className="text-base text-neutral-700 leading-relaxed mb-6">{activeIndustryData.desc}</p>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden mb-6">{activeIndustryData.examples.map((ex) => (<div key={ex} className="bg-white p-4 flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" /><span className="text-sm text-neutral-800 font-medium">{ex}</span></div>))}</div>
                <Link href="/contact" className="btn-brand">Get Industry Specific Modernization Plan<ArrowRight className="w-4 h-4" /></Link>
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
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tackxel Advantage</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">Why Do Leading Businesses Trust Tackxel For <span className="text-brand-300">Legacy Application Modernization?</span></h2></div><p className="text-base text-neutral-300 leading-relaxed lg:justify-self-end max-w-xl">We focus on practical modernization that fits your systems, timelines, and business priorities — without disrupting daily operations.</p></div></Reveal>
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
          <Reveal><div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tech Stack</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">Our Legacy Modernization Tech Stack</h2></div><p className="text-base text-neutral-400 leading-relaxed max-w-xl lg:justify-self-end">We use proven tools and platforms to refactor, replatform, and modernize legacy applications — ensuring smoother migrations, integration, and system performance across enterprise environments.</p></div></Reveal>
          <Reveal delay={100}>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
              <div className="flex flex-wrap gap-px bg-neutral-800 border-b border-neutral-800">{techStackTabs.map((t, i) => (<button key={t.category} onClick={() => setActiveStack(i)} className={`flex-1 min-w-[120px] px-4 lg:px-6 py-4 text-sm font-medium transition-all ${activeStack === i ? "bg-brand-600 text-white border-b-2 border-b-brand-300" : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800/60 hover:text-white"}`}><div className="text-xs font-mono mb-1 opacity-70">{String(i + 1).padStart(2, "0")}</div>{t.category}</button>))}</div>
              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
                  <div><div className="text-eyebrow text-brand-300 uppercase mb-3 font-semibold tracking-widest">{String(activeStack + 1).padStart(2, "0")} · Tech Category</div><h3 className="font-display text-h2 text-white mb-3">{activeStackData.category}</h3><p className="text-sm text-neutral-400 leading-relaxed">{activeStackData.techs.length} production-grade technologies for legacy modernization.</p></div>
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
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">Ready to modernize your legacy systems?</h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">Free 30-minute consultation with a senior enterprise architect. No slide decks, no sales reps.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-brand">Talk to a modernization expert<ArrowRight className="w-4 h-4" /></Link>
              <Link href="/services" className="btn-ghost-light">Back to all services<ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
