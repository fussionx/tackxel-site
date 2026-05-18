"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Award, Clock, ShieldCheck,
  TrendingUp, Zap, Plus, Minus,
  Compass, Layers, Cloud, Database, Settings, Building,
  Heart, Building2, ShoppingBag, GraduationCap, Factory, Home,
  Wifi, Boxes, Shield,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";

const services = [
  {
    Icon: Compass,
    name: "Digital Strategy & Transformation Roadmap",
    tagline: "Board-level strategy tied to revenue outcomes.",
    desc: "Strategic digital transformation roadmaps built on legacy system audits, ROI-prioritized initiatives, and governance frameworks for disciplined, accountable execution.",
    bullets: [
      "Define a board-level digital strategy directly tied to measurable revenue outcomes.",
      "Audit legacy systems to expose hidden risk, cost, and constraints.",
      "Prioritize modernization initiatives based on impact, feasibility, and ROI.",
      "Establish governance frameworks for disciplined, accountable execution.",
      "Quarterly steering committee reviews tied to business KPIs.",
    ],
    metric: { value: "3×", label: "Faster transformation cycles" },
  },
  {
    Icon: Layers,
    name: "Legacy System Modernization",
    tagline: "Monoliths to modular cloud-native systems.",
    desc: "Replace fragile monoliths with modular, cloud-native architecture — refactoring outdated codebases into scalable microservices while eliminating technical debt that drains innovation capacity.",
    bullets: [
      "Replace fragile monoliths with modular, cloud-native architectural foundations.",
      "Refactor outdated codebases into scalable microservices built for change.",
      "Eliminate technical debt draining engineering velocity and innovation capacity.",
      "Improve resilience and maintainability for long-term enterprise stability.",
      "Strangler-pattern migration with zero downtime guarantees.",
    ],
    metric: { value: "60%", label: "Technical debt reduction" },
  },
  {
    Icon: Cloud,
    name: "Cloud Transformation & Migration",
    tagline: "Mission-critical workloads, zero disruption.",
    desc: "Cloud migration strategies grounded in business continuity planning — transitioning mission-critical workloads to AWS, Azure, or GCP without risking operational disruption.",
    bullets: [
      "Design cloud migration strategies grounded in business continuity planning.",
      "Transition mission-critical workloads without risking operational disruption.",
      "Implement containerized environments using Kubernetes for controlled scalability.",
      "Strengthen cost visibility, resilience, and infrastructure governance controls.",
      "Multi-cloud and hybrid deployment options for enterprise sovereignty needs.",
    ],
    metric: { value: "40%", label: "Infrastructure cost cut" },
  },
  {
    Icon: Database,
    name: "Data & AI-Driven Transformation",
    tagline: "Fragmented data into decision intelligence.",
    desc: "Modernize fragmented data systems into governed enterprise intelligence platforms — with AI models aligned to operational and revenue objectives, and data governance meeting regulatory standards.",
    bullets: [
      "Modernize fragmented data systems into governed enterprise intelligence platforms.",
      "Deploy AI models aligned with measurable operational and revenue objectives.",
      "Implement strict data governance to meet regulatory and compliance standards.",
      "Turn raw enterprise data into predictive, decision-ready intelligence assets.",
      "Real-time data pipelines integrated with ML and Gen AI capabilities.",
    ],
    metric: { value: "5×", label: "Faster decision cycles" },
  },
  {
    Icon: Settings,
    name: "Business Process Automation & DevOps",
    tagline: "Reengineered workflows, faster releases.",
    desc: "Reengineer operational workflows constrained by manual approvals and silos — introducing intelligent automation, CI/CD culture, and DevOps practices without compromising governance.",
    bullets: [
      "Reengineer operational workflows constrained by manual approvals and silos.",
      "Implement intelligent automation targeting measurable efficiency improvements.",
      "Introduce DevOps practices, embedding CI/CD into the engineering culture.",
      "Shorten release cycles without compromising governance, security, or reliability.",
      "End-to-end observability with SLO-driven incident response.",
    ],
    metric: { value: "10×", label: "Deployment frequency" },
  },
  {
    Icon: Building,
    name: "Enterprise Architecture & Platform Engineering",
    tagline: "Scalable platforms for long-term growth.",
    desc: "Architect scalable enterprise platforms aligned with long-term growth strategy — with API-first ecosystems, embedded cybersecurity, and engineering foundations for sustained innovation.",
    bullets: [
      "Architect scalable enterprise platforms aligned with long-term growth strategy.",
      "Develop API-first ecosystems enabling integration across distributed systems.",
      "Embed cybersecurity controls into every transformation layer.",
      "Build engineering foundations supporting sustained digital innovation initiatives.",
      "Platform engineering teams to support internal developer experience.",
    ],
    metric: { value: "99.99%", label: "Platform availability" },
  },
];

const process = [
  { no: "01", title: "Discovery & Assessment", duration: "2–3 weeks", desc: "Current-state architecture audit, business outcome mapping, and ROI prioritization. We diagnose before we prescribe — no boilerplate transformation playbooks." },
  { no: "02", title: "Strategy & Roadmap", duration: "2 weeks", desc: "Board-level transformation roadmap, governance framework, and risk mitigation plan. Executable strategies — not slide decks meant to impress committees." },
  { no: "03", title: "Iterative Transformation", duration: "12–24 weeks", desc: "Phased modernization with parallel-run validation, zero-downtime cutover, and continuous business KPI tracking. Working systems at every milestone." },
  { no: "04", title: "Adoption & Change", duration: "2–4 weeks", desc: "Training programs, runbooks, governance handover, and stakeholder enablement. Transformation that sticks — not vendor-dependent." },
  { no: "05", title: "Optimize & Evolve", duration: "Ongoing", desc: "Continuous platform optimization, quarterly architecture reviews, and roadmap evolution tied to measurable business outcomes." },
];

const useCases = [
  {
    Icon: Wifi,
    title: "IoT & Edge Computing for Digital Transformation",
    desc: "We connect devices and enterprise systems — enabling real-time analytics, predictive insights, and operational efficiency. Supporting business digital transformation services that scale across locations and operations.",
  },
  {
    Icon: Boxes,
    title: "Digital Twin & Simulation for Enterprise Modernization",
    desc: "We create virtual models of assets and processes to test, optimize, and improve systems — supporting end-to-end digital transformation and measurable business modernization outcomes.",
  },
  {
    Icon: Shield,
    title: "Blockchain & Secure Workflow Solutions",
    desc: "We implement secure, traceable, and decentralized workflows to strengthen enterprise governance, compliance, and collaboration — helping you achieve IT digital transformation services with robust data integrity.",
  },
];

const challenges = [
  { title: "Legacy System Limitations", solution: "Strangler-pattern modernization with parallel runs — legacy systems migrate to cloud-native architecture without big-bang risk or feature regression." },
  { title: "Data Silos & Fragmentation", solution: "Enterprise data fabric with governed pipelines, semantic layers, and unified data catalogs. One source of truth across departments, not 47 spreadsheets." },
  { title: "Inefficient Business Processes", solution: "Process discovery with automation candidates ranked by ROI. Reengineer what matters — automate what makes sense — leave the rest alone." },
  { title: "Cloud Migration Challenges", solution: "Phased migration with workload assessment, dependency mapping, and validation. Zero-downtime cutover plans tested in staging before production." },
  { title: "Integration Complexity", solution: "API-first integration platform with reusable connectors and standardized message contracts. Integrations become composable assets, not snowflake projects." },
  { title: "Change Management & Adoption", solution: "Embedded change management with training programs, internal champions, and adoption metrics. We measure adoption like we measure uptime." },
  { title: "Security & Compliance Risks", solution: "Security-by-design with zero-trust principles, automated compliance checks, and continuous audit trails. SOC 2, ISO 27001, GDPR, HIPAA built in." },
  { title: "Scalability Limitations", solution: "Cloud-native architecture with horizontal scaling, serverless components, and elastic resource provisioning. Platforms that grow without re-architecting." },
  { title: "Technology Alignment with Business Goals", solution: "Quarterly steering committees with business KPIs tied directly to platform metrics. Technology spend justified by outcome — not budget renewal." },
  { title: "Emerging Tech Adoption Challenges", solution: "Tech radar with structured evaluation, pilot programs, and adoption frameworks. Adopt what's worth adopting — skip what's noise." },
];

const industries = [
  { Icon: Heart, name: "Healthcare & HealthTech", desc: "HIPAA-compliant digital transformation for hospitals, payers, and digital health platforms — modernizing EHR integration, patient portals, and clinical workflows.", examples: ["EHR modernization", "Patient portals", "Clinical workflows", "Telehealth platforms"] },
  { Icon: Building2, name: "Fintech & Banking", desc: "PCI-compliant transformation for banks, fintechs, and payment platforms — modernizing core banking, fraud systems, and customer-facing channels.", examples: ["Core banking", "Payment platforms", "Fraud systems", "Customer channels"] },
  { Icon: ShoppingBag, name: "Retail & eCommerce", desc: "Omnichannel transformation for retailers — modernizing eCommerce platforms, POS systems, inventory management, and supply chain orchestration.", examples: ["eCommerce platforms", "POS modernization", "Inventory systems", "Supply chain orchestration"] },
  { Icon: GraduationCap, name: "Education & EdTech", desc: "Transformation for schools, universities, and EdTech platforms — modernizing LMS, student information systems, and digital learning experiences.", examples: ["LMS modernization", "SIS systems", "Digital learning", "Student engagement"] },
  { Icon: Factory, name: "Manufacturing & Logistics", desc: "Smart-factory and supply chain transformation — modernizing MES, WMS, IoT integration, and predictive maintenance across global operations.", examples: ["Smart factories", "MES modernization", "WMS systems", "IoT integration"] },
  { Icon: Home, name: "Insurance & Real Estate", desc: "Transformation for insurers and real estate platforms — modernizing claims processing, underwriting, property management, and customer experience.", examples: ["Claims processing", "Underwriting AI", "Property management", "Customer portals"] },
];

const advantages = [
  { no: "01", title: "Expert Team",                    desc: "We bring certified architects and industry experts to ensure reliable, secure, and scalable transformation services across every engagement." },
  { no: "02", title: "Scalable Solutions",             desc: "We build flexible architectures that grow with your enterprise — supporting long-term performance and expansion needs without re-architecting." },
  { no: "03", title: "Secure Transformation",          desc: "We integrate cybersecurity measures and regulatory-aligned frameworks to protect enterprise systems and sensitive data throughout transformation." },
  { no: "04", title: "Proven Methodology",             desc: "Our structured approach guides enterprises from assessment to execution — delivering measurable transformation results efficiently and predictably." },
  { no: "05", title: "Data-Driven Insights",           desc: "Our solutions enable actionable insights through advanced analytics — improving decision-making and operational efficiency across the enterprise." },
  { no: "06", title: "Collaborative Approach",         desc: "We work closely with your teams to ensure adoption, alignment, and successful transformation outcomes — not vendor-dependent solutions." },
];

const techStackTabs = [
  { category: "Cloud Platforms",      techs: ["AWS", "Microsoft Azure", "Google Cloud Platform", "IBM Cloud", "Oracle Cloud", "Alibaba Cloud"] },
  { category: "DevOps & CI/CD",       techs: ["Kubernetes", "Docker", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD", "Helm"] },
  { category: "Data & Analytics",     techs: ["Snowflake", "Databricks", "Apache Kafka", "Apache Spark", "Airflow", "dbt", "Looker", "Power BI", "Tableau"] },
  { category: "Microservices & APIs", techs: ["Spring Boot", "Node.js", "FastAPI", "GraphQL", "gRPC", "Kong", "Apigee", "Istio", "Linkerd"] },
  { category: "Observability",        techs: ["Datadog", "New Relic", "Splunk", "Prometheus", "Grafana", "OpenTelemetry", "Sentry", "ELK Stack"] },
  { category: "Security",             techs: ["HashiCorp Vault", "Okta", "Auth0", "AWS IAM", "Snyk", "CrowdStrike", "Wiz", "Cloudflare"] },
];

const faqs = [
  { q: "How quickly can you start a digital transformation engagement?", a: "Most engagements begin within two to three weeks. We run a current-state assessment, agree on scope and team composition, sign the MSA and SOW, and onboard your dedicated transformation team. Larger enterprise transformations often start with a 4–6 week discovery phase." },
  { q: "What does a digital transformation typically cost?", a: "Mid-size enterprise transformations typically range from USD 250K to USD 1.5M depending on scope. Discovery and roadmap phases start at USD 50K. Dedicated transformation teams range from USD 50K to USD 150K per month based on team size and seniority." },
  { q: "How do you handle change management and user adoption?", a: "Change management is embedded into every engagement — training programs, internal champions, runbooks, and adoption metrics tracked alongside technical milestones. We measure adoption like we measure uptime, with quarterly review cycles." },
  { q: "Who owns the platforms, code, and IP we build together?", a: "You do — from day one. All code, infrastructure-as-code, architectural decisions, and documentation belong to you. We deliberately avoid lock-in patterns — you can take everything in-house at engagement end with zero migration cost." },
  { q: "Do you handle compliance for regulated industries?", a: "Yes. We provide governance frameworks aligned with GDPR, HIPAA, SOC 2, PCI DSS, ISO 27001, and industry-specific regulations — including documentation suitable for auditor review and regulator submission." },
  { q: "Can you work alongside our existing IT team and vendors?", a: "Absolutely — most engagements involve close collaboration with internal teams and existing strategic vendors. We integrate into your existing governance, change management, and project delivery frameworks rather than replacing them." },
];

const awards = [
  { platform: "Clutch",        title: "Top Digital Transformation", year: "2024" },
  { platform: "TopDevelopers", title: "Top Modernization Co.",      year: "2024" },
  { platform: "Firmstalk",     title: "Top Enterprise Partner",     year: "2024" },
  { platform: "SoftwareWorld", title: "Best Software Developers",   year: "2024" },
  { platform: "Industry",      title: "Best Software Development",  year: "2025" },
  { platform: "GoodFirms",     title: "Top Custom Software Dev",    year: "2024" },
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

export default function DigitalTransformationPage() {
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
          <Reveal><nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-mono"><Link href="/" className="hover:text-brand-300 transition-colors">Home</Link><span>/</span><Link href="/services" className="hover:text-brand-300 transition-colors">Services</Link><span>/</span><span className="text-brand-300">Digital Transformation</span></nav></Reveal>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><span className="badge-dark mb-6"><span className="dot-pulse" />Enterprise modernization at scale</span></Reveal>
              <Reveal delay={80}><div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">Modernize · Automate · Scale</div></Reveal>
              <Reveal delay={140}><h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">Custom Digital Transformation Services Company.</h1></Reveal>
              <Reveal delay={220}><p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">As a digital transformation company, Tackxel helps enterprises modernize infrastructure, implement automation, and redesign operating models — to improve efficiency, agility, and customer experience.</p></Reveal>
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
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Award className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">#1 Leading</div><div className="text-xs text-neutral-400">Digital Transformation Consulting Partner</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Clock className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">EST Time Zone</div><div className="text-xs text-neutral-400">Senior architects · 9am–5pm EST</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Compass className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">CIO & CTO</div><div className="text-xs text-neutral-400">Advisory Support · SOC 2 · ISO 27001</div></div></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROMISE CARDS */}
      <section className="py-14 lg:py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <Reveal><div className="bg-brand-50 border border-brand-100 rounded-lg p-7 h-full card-lift"><div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-200 flex items-center justify-center mb-4"><Compass className="w-5 h-5 text-brand-600" /></div><h3 className="font-display text-h3 text-neutral-950 mb-2">Business Process & Technology Alignment</h3><p className="text-sm text-neutral-700 leading-relaxed">Our digital transformation consulting aligns workflows, data systems, and enterprise platforms with strategic goals — ensuring technology directly supports revenue, efficiency, and long-term scalability.</p></div></Reveal>
            <Reveal delay={100}><div className="bg-brand-50 border border-brand-100 rounded-lg p-7 h-full card-lift"><div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-200 flex items-center justify-center mb-4"><Database className="w-5 h-5 text-brand-600" /></div><h3 className="font-display text-h3 text-neutral-950 mb-2">Data, AI & Automation Integration</h3><p className="text-sm text-neutral-700 leading-relaxed">Tackxel integrates analytics, AI-driven transformation capabilities, and intelligent automation to streamline operations, improve decision-making, and strengthen competitive positioning.</p></div></Reveal>
            <Reveal delay={200}>
              <div className="bg-white border border-neutral-200 rounded-lg p-7 h-full">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-600 font-semibold mb-2">Your Trusted</div>
                <h3 className="font-display text-h3 text-neutral-950 mb-5">Digital Transformation <span className="text-brand-600">Partner</span></h3>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={10} suffix="+" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Years of Technology Consulting</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950">Top <Counter to={1} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Vetted Talent</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={10} suffix="+" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Industries Served</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={25} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Senior Migration Experts</div></div>
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
          <Reveal><div className="text-center mb-14"><div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Our Digital Transformation Expertise</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">Modernize Operations And <span className="text-brand-600">Boost Business Performance</span></h2><p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">Click any service below to explore the engineering depth, capabilities, and measurable outcomes we deliver.</p></div></Reveal>
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
                  <Link href="/contact" className="btn-brand mt-8">Discuss your transformation project<ArrowRight className="w-4 h-4" /></Link>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-xl p-6 flex items-center justify-center aspect-square"><activeServiceData.Icon className="w-32 h-32 lg:w-40 lg:h-40 text-brand-500" strokeWidth={1.2} /></div>
                  <div className="bg-neutral-950 text-white rounded-xl p-6"><div className="text-xs font-mono text-brand-300 uppercase tracking-wider mb-2 font-semibold">Measurable Outcome</div><div className="font-display text-4xl font-bold text-white mb-1 tracking-display">{activeServiceData.metric.value}</div><div className="text-sm text-neutral-400">{activeServiceData.metric.label}</div></div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}><div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">{services.map((s, i) => (<button key={s.name} onClick={() => setActiveService(i)} className={`p-6 text-left transition-colors ${activeService === i ? "bg-brand-50" : "bg-white hover:bg-neutral-50"}`}><div className="flex items-start gap-4"><div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0"><s.Icon className="w-5 h-5 text-brand-600" /></div><div><h3 className="text-sm font-semibold text-neutral-950 mb-1">{s.name}</h3><p className="text-xs text-neutral-600 leading-relaxed">{s.tagline}</p></div></div></button>))}</div></Reveal>
          <Reveal delay={300}><div className="mt-10 flex justify-center"><Link href="/contact" className="btn-brand">Want to Modernize Your Enterprise Systems?<ArrowRight className="w-4 h-4" /></Link></div></Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Delivery Process</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">How we deliver transformation, <span className="text-brand-600">every engagement</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-xl">A repeatable, transparent delivery process refined across 50+ enterprise transformations. Working systems at every milestone — never multi-year vapor.</p></div></Reveal>
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200" />
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-4 relative">{process.map((step, i) => (<Reveal key={step.no} delay={i * 100}><div className="relative"><div className="w-14 h-14 rounded-full bg-white border-2 border-brand-200 flex items-center justify-center mb-5 mx-auto lg:mx-0 relative z-10"><span className="font-mono text-sm font-bold text-brand-700">{step.no}</span></div><div className="bg-white border border-neutral-200 rounded-lg p-5 h-full card-lift"><div className="text-[10px] font-mono text-brand-600 uppercase tracking-wider font-semibold mb-1">{step.duration}</div><h3 className="text-sm font-semibold text-neutral-950 mb-2">{step.title}</h3><p className="text-xs text-neutral-600 leading-relaxed">{step.desc}</p></div></div></Reveal>))}</div>
          </div>
        </div>
      </section>

      {/* ADVANCED TECH */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/30 via-neutral-950 to-neutral-950" />
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none"><div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4">Advanced Technologies <span className="text-brand-300">for Your Digital Transformation</span></h2><p className="text-base text-neutral-300 leading-relaxed mb-8 max-w-lg">We help you explore advanced technologies that enable innovation, improve performance, and prepare your systems for tomorrow&apos;s business challenges.</p></Reveal>
              <div className="space-y-4">{useCases.map((t, i) => (<Reveal key={t.title} delay={i * 100}><div className="bg-neutral-900/70 backdrop-blur border border-neutral-800 rounded-lg p-6 card-lift"><div className="flex items-start gap-4"><div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center flex-shrink-0"><t.Icon className="w-6 h-6 text-brand-300" /></div><div><h3 className="text-base font-semibold text-white mb-1.5">{t.title}</h3><p className="text-sm text-neutral-400 leading-relaxed">{t.desc}</p></div></div></div></Reveal>))}</div>
              <Reveal delay={400}><Link href="/contact" className="btn-brand mt-8">Let&apos;s Upgrade Your Digital Transformation Strategy<ArrowRight className="w-4 h-4" /></Link></Reveal>
            </div>
            <Reveal delay={300} direction="left">
              <div className="relative bg-neutral-900/40 backdrop-blur border border-neutral-800 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <svg viewBox="0 0 320 320" className="w-full h-full">
                  <defs><radialGradient id="coreGlowDT" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#5278C2" stopOpacity="0.5" /><stop offset="100%" stopColor="#3159A5" stopOpacity="0" /></radialGradient></defs>
                  <circle cx="160" cy="160" r="60" fill="url(#coreGlowDT)" />
                  <circle cx="160" cy="160" r="130" fill="none" stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 4" />
                  <circle cx="160" cy="160" r="100" fill="none" stroke="#3159A5" strokeOpacity="0.25" strokeWidth="1.2" />
                  <circle cx="160" cy="160" r="70" fill="none" stroke="#3159A5" strokeOpacity="0.35" strokeWidth="1.2" />
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => { const rad = (deg * Math.PI) / 180; const x = 160 + Math.cos(rad) * 130; const y = 160 + Math.sin(rad) * 130; return (<g key={i}><line x1="160" y1="160" x2={x} y2={y} stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1" /><circle cx={x} cy={y} r="6" fill="#5278C2" /><circle cx={x} cy={y} r="10" fill="none" stroke="#5278C2" strokeOpacity="0.3" /></g>); })}
                  <circle cx="160" cy="160" r="32" fill="#3159A5" />
                  <text x="160" y="167" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="Geist">CLOUD</text>
                  {[{ label: "IoT", x: 290, y: 160 }, { label: "AI", x: 225, y: 47 }, { label: "API", x: 95, y: 47 }, { label: "DATA", x: 30, y: 160 }, { label: "DEVOPS", x: 80, y: 273 }, { label: "EDGE", x: 240, y: 273 }].map((t) => (<g key={t.label}><rect x={t.x - 32} y={t.y - 11} width="64" height="22" rx="4" fill="#1D376A" stroke="#3159A5" strokeOpacity="0.4" /><text x={t.x} y={t.y + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill="#7E9DD7" fontFamily="Geist">{t.label}</text></g>))}
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-end mb-12"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Common Challenges</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-3">Critical Digital Transformation Challenges And How We Solve Them</h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Click any challenge to reveal exactly how we solve it.</p></div></Reveal>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-12">
            <Reveal>
              <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100">
                {challenges.map((c, i) => { const open = openChallenge === i; return (<button key={c.title} onClick={() => setOpenChallenge(open ? null : i)} className="w-full text-left hover:bg-neutral-50 transition-colors block"><div className="flex items-center justify-between gap-6 px-6 py-4"><div className="flex items-start gap-4 flex-1"><span className="font-mono text-xs font-semibold text-brand-600 pt-1 w-6">{String(i + 1).padStart(2, "0")}</span><span className="text-sm font-semibold text-neutral-900 leading-snug">{c.title}</span></div><span className={`w-7 h-7 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}>{open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}</span></div>{open && (<div className="px-6 pb-5 pl-16"><div className="border-l-2 border-brand-300 pl-4"><div className="text-[10px] font-mono uppercase tracking-wider text-brand-600 font-semibold mb-1.5">How we solve it</div><p className="text-sm text-neutral-700 leading-relaxed">{c.solution}</p></div></div>)}</button>); })}
              </div>
            </Reveal>
            <Reveal delay={200} direction="left">
              <div className="lg:sticky lg:top-28 lg:self-start space-y-4">
                <div className="bg-neutral-950 text-white rounded-lg p-7"><div className="text-xs text-brand-300 uppercase tracking-wider font-semibold mb-3">The Pattern</div><p className="text-base text-neutral-200 leading-relaxed">Outdated IT systems hinder enterprise digital transformation and reduce agility across workflows and business operations.</p></div>
                <div className="bg-white border border-neutral-200 rounded-lg p-7">
                  <div className="text-xs text-brand-600 uppercase tracking-wider font-semibold mb-3">Our Approach</div>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">We modernize legacy applications with IT modernization services and cloud-native architecture for scalable, high-performance enterprise systems.</p>
                  <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><Zap className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">3×</div><div className="text-xs text-neutral-500 mt-0.5">Faster System Performance</div></div>
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><TrendingUp className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">60%</div><div className="text-xs text-neutral-500 mt-0.5">Reduced Operational Risks</div></div>
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
                <div><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-3">Struggling To Modernize Your Systems And Improve Operational Efficiency?</h2><p className="text-base text-brand-50 leading-relaxed max-w-xl">We help you overcome system limitations, data silos, and inefficiencies — enabling smoother operations and better business outcomes.</p></div>
                <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2 w-fit lg:justify-self-end">Modernize With Expert Guidance<ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Industries We Serve</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">Custom Digital Transformation Solutions <span className="text-brand-600">For Your Industry</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Across industries, we enable enterprise modernization and digital innovation — guiding secure, scalable transformation aligned with sector-specific regulations and governance needs.</p></div></Reveal>
          <Reveal delay={150}>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-10">
              <ul className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100 h-fit">
                {industries.map((ind, i) => (<li key={ind.name}><button onClick={() => setActiveIndustry(i)} className={`w-full text-left flex items-center justify-between gap-4 px-6 py-4 transition-colors ${activeIndustry === i ? "bg-brand-50" : "hover:bg-neutral-50"}`}><div className="flex items-center gap-4"><div className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${activeIndustry === i ? "bg-brand-500 border-brand-500" : "bg-brand-50 border-brand-100"}`}><ind.Icon className={`w-4 h-4 ${activeIndustry === i ? "text-white" : "text-brand-600"}`} /></div><span className={`text-base font-semibold ${activeIndustry === i ? "text-brand-700" : "text-neutral-900"}`}>{ind.name}</span></div><ArrowRight className={`w-4 h-4 transition-all ${activeIndustry === i ? "text-brand-600 translate-x-1" : "text-neutral-300"}`} /></button></li>))}
              </ul>
              <div className="bg-white border border-neutral-200 rounded-lg p-8 lg:p-10 self-start">
                <div className="flex items-start gap-5 mb-6"><div className="w-16 h-16 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center flex-shrink-0"><activeIndustryData.Icon className="w-7 h-7 text-brand-600" /></div><div><div className="text-eyebrow text-brand-600 uppercase mb-2 font-semibold tracking-widest">Industry Focus</div><h3 className="font-display text-h2 text-neutral-950 leading-tight">{activeIndustryData.name}</h3></div></div>
                <p className="text-base text-neutral-700 leading-relaxed mb-6">{activeIndustryData.desc}</p>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden mb-6">{activeIndustryData.examples.map((ex) => (<div key={ex} className="bg-white p-4 flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" /><span className="text-sm text-neutral-800 font-medium">{ex}</span></div>))}</div>
                <Link href="/contact" className="btn-brand">Modernize Your Industry Operations Today<ArrowRight className="w-4 h-4" /></Link>
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
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tackxel Advantage</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">What Makes Tackxel <span className="text-brand-300">The Right Digital Transformation Partner?</span></h2></div><p className="text-base text-neutral-300 leading-relaxed lg:justify-self-end max-w-xl">We combine deep technical expertise, industry knowledge, and a client-focused approach to deliver measurable results for your enterprise.</p></div></Reveal>
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
          <Reveal><div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tech Stack</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">Tools &amp; Technologies We Use</h2></div><p className="text-base text-neutral-400 leading-relaxed max-w-xl lg:justify-self-end">Our technology stack covers the latest platforms, frameworks, and tools to deliver practical, enterprise-grade digital transformation solutions for your organization.</p></div></Reveal>
          <Reveal delay={100}>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
              <div className="flex flex-wrap gap-px bg-neutral-800 border-b border-neutral-800">{techStackTabs.map((t, i) => (<button key={t.category} onClick={() => setActiveStack(i)} className={`flex-1 min-w-[120px] px-4 lg:px-6 py-4 text-sm font-medium transition-all ${activeStack === i ? "bg-brand-600 text-white border-b-2 border-b-brand-300" : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800/60 hover:text-white"}`}><div className="text-xs font-mono mb-1 opacity-70">{String(i + 1).padStart(2, "0")}</div>{t.category}</button>))}</div>
              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
                  <div><div className="text-eyebrow text-brand-300 uppercase mb-3 font-semibold tracking-widest">{String(activeStack + 1).padStart(2, "0")} · Tech Category</div><h3 className="font-display text-h2 text-white mb-3">{activeStackData.category}</h3><p className="text-sm text-neutral-400 leading-relaxed">{activeStackData.techs.length} production-grade technologies for digital transformation.</p></div>
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
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">Ready to start your digital transformation?</h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">Free 30-minute discovery call with a senior enterprise architect. No slide decks, no sales reps.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-brand">Talk to a transformation expert<ArrowRight className="w-4 h-4" /></Link>
              <Link href="/services" className="btn-ghost-light">Back to all services<ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
