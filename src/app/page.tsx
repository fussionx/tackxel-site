"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import {
  IconCustomSoftware, IconWebApp, IconMobileApp, IconDevOps, IconLegacy, IconQA,
  IconProductStrategy, IconDesign, IconMVP,
  IconAdvisory, IconConsulting, IconAIConsulting,
  IconAWS, IconIntegration, IconCommerce, IconAnalytics, IconManagedIT,
  IconAI, IconGenAI, IconAgent, IconDataScience, IconIoT, IconBlockchain,
  IconStartup, IconScaleup, IconEnterprise,
} from "@/components/Icons";
import {
  IllusFixedCost, IllusDedicatedTeam, IllusStaffAug,
} from "@/components/EngagementArt";
import {
  CaseStudyFintech, CaseStudyHealthcare, CaseStudyRetail,
} from "@/components/CaseStudyArt";
import { AboutHeroImage } from "@/components/AboutHeroImage";
import { AvatarStack } from "@/components/AvatarStack";
import Counter from "@/components/Counter";

const serviceTabs = [
  {
    id: "software-dev",
    label: "Software Development",
    services: [
      { Icon: IconCustomSoftware, name: "Custom Software Development", desc: "Enterprise-grade applications engineered to your exact specifications, with measurable business impact from day one." },
      { Icon: IconWebApp, name: "Web Application Development", desc: "High-performance web platforms built on modern frameworks — Next.js, Rails, Django — for scale and reliability." },
      { Icon: IconMobileApp, name: "Mobile App Development", desc: "Native iOS and Android applications, or cross-platform React Native and Flutter, with App Store readiness baked in." },
      { Icon: IconDevOps, name: "DevOps & Site Reliability", desc: "Automated CI/CD pipelines, infrastructure as code, observability, and 24/7 incident response from certified SREs." },
      { Icon: IconLegacy, name: "Legacy Software Modernization", desc: "Decompose monoliths, replatform onto modern stacks, and unlock product velocity without losing institutional knowledge." },
      { Icon: IconQA, name: "Quality Assurance & Testing", desc: "End-to-end test automation, performance engineering, security testing, and continuous quality gates." },
    ],
  },
  {
    id: "product-dev",
    label: "Product Development",
    services: [
      { Icon: IconProductStrategy, name: "Product Strategy", desc: "Market analysis, competitive positioning, roadmapping, and OKR alignment — grounded in evidence, not opinions." },
      { Icon: IconDesign, name: "Product & UX Design", desc: "User research, information architecture, wireframes, and high-fidelity prototypes that ship to production." },
      { Icon: IconMVP, name: "MVP & POC Development", desc: "Production-ready minimum viable products in 8 to 12 weeks, designed to validate assumptions with real users." },
      { Icon: IconDesign, name: "UI Design Systems", desc: "Scalable component libraries and brand systems that keep design and engineering in lockstep across teams." },
      { Icon: IconProductStrategy, name: "Product Growth", desc: "Experimentation frameworks, A/B testing, and growth engineering for live products at every stage." },
      { Icon: IconAdvisory, name: "Discovery Workshops", desc: "Two-week scoping engagements to align stakeholders, surface risks, and define a credible delivery plan." },
    ],
  },
  {
    id: "advisory",
    label: "Advisory & Consulting",
    services: [
      { Icon: IconAdvisory, name: "Technology Strategy", desc: "Independent assessments of your tech stack, architecture, and engineering practices — actionable, not theoretical." },
      { Icon: IconConsulting, name: "Engineering Leadership", desc: "Fractional CTO and VP Engineering services for scaling teams that need senior leadership before a full-time hire." },
      { Icon: IconAIConsulting, name: "AI Strategy & Audits", desc: "Use-case identification, feasibility studies, and ROI modeling for organizations starting their AI journey." },
      { Icon: IconConsulting, name: "Process Consulting", desc: "Delivery model audits, agile transformation, and engineering excellence programs proven at scale." },
    ],
  },
  {
    id: "tech-solutions",
    label: "Technology Solutions",
    services: [
      { Icon: IconAWS, name: "AWS Cloud Solutions", desc: "Architect, migrate, and operate workloads on AWS using Well-Architected principles and cost-optimized FinOps practices." },
      { Icon: IconIntegration, name: "Enterprise Integration", desc: "API design, system orchestration, and middleware modernization for connected enterprise architectures." },
      { Icon: IconCommerce, name: "Shopify & Commerce", desc: "Custom storefronts, headless commerce, Shopify Plus implementations, and conversion-optimized checkout flows." },
      { Icon: IconAnalytics, name: "Data & Analytics", desc: "Data warehousing, BI dashboards, and self-serve analytics built on Snowflake, dbt, and modern data stacks." },
      { Icon: IconManagedIT, name: "Managed Services", desc: "Application support, infrastructure management, and 24/7 monitoring with documented SLAs and audit trails." },
      { Icon: IconIntegration, name: "API Platforms", desc: "Developer-grade APIs with documentation, versioning, rate limiting, and analytics — built for partner ecosystems." },
    ],
  },
  {
    id: "emerging-tech",
    label: "Emerging Tech",
    services: [
      { Icon: IconAI, name: "AI & Machine Learning", desc: "Production ML systems for forecasting, classification, NLP, and computer vision — with MLOps from day one." },
      { Icon: IconGenAI, name: "Generative AI Applications", desc: "RAG architectures, fine-tuning, evaluation pipelines, and production deployment of LLM-powered features." },
      { Icon: IconAgent, name: "AI Agents & Agentic Systems", desc: "Multi-step autonomous workflows for customer service, sales operations, and internal productivity copilots." },
      { Icon: IconDataScience, name: "Data Science", desc: "Statistical modeling, experimentation, and decision intelligence that translate raw data into business outcomes." },
      { Icon: IconIoT, name: "Internet of Things", desc: "Connected device platforms, telemetry pipelines, and edge computing for industrial and consumer IoT." },
      { Icon: IconBlockchain, name: "Web3 & Blockchain", desc: "Smart contracts, token engineering, security audits, and decentralized application development across major chains." },
    ],
  },
];

const audiences = [
  { Icon: IconStartup, label: "Startups", desc: "From idea to live product in 90 days. We embed senior engineers and product designers into your founding team — helping you validate, build, and raise without the overhead of hiring a full team before product-market fit." },
  { Icon: IconScaleup, label: "Scaleups", desc: "Add senior engineering capacity that matches your existing standards. Our dedicated teams plug into your roadmap, ship against your sprints, and let your in-house team focus on the highest-leverage work." },
  { Icon: IconEnterprise, label: "Enterprises", desc: "Modernize legacy systems, accelerate digital initiatives, and meet compliance demands. We operate inside Fortune 500 governance models with full transparency and contractual SLAs." },
];

const engagements = [
  { name: "Fixed-Cost Projects", desc: "Defined deliverables, milestones, and price. Best for bounded product launches and time-sensitive initiatives where requirements are well-understood.", cta: "Scope a project", Illus: IllusFixedCost },
  { name: "Dedicated Teams", desc: "A fully managed engineering pod that ships against your roadmap. Best for ongoing product development with predictable monthly capacity.", cta: "Build your team", featured: true, Illus: IllusDedicatedTeam },
  { name: "Staff Augmentation", desc: "Pre-vetted senior engineers embedded in your existing team. Best for filling specific skill gaps without long-term commitment.", cta: "Hire engineers", Illus: IllusStaffAug },
];

const awards = [
  { platform: "Clutch", title: "Top Clutch Global Winners", year: "2025" },
  { platform: "Techimply", title: "Top Mobile App Development Company", year: "2025" },
  { platform: "GoodFirms", title: "Top Software Development Company", year: "2025" },
  { platform: "TopDevelopers", title: "Top Ruby on Rails Developers", year: "2025" },
  { platform: "DesignRush", title: "Top App Design Company", year: "2025" },
  { platform: "Firmstalk", title: "Top Custom Software Development Company", year: "2025" },
];

const hiringSteps = [
  { no: "01", title: "Requirement Discovery", desc: "Half-day workshop to define role specs, team culture fit, and engagement structure." },
  { no: "02", title: "Talent Matching", desc: "Engineers sourced from our pre-vetted senior pool, matched on stack, domain, and seniority." },
  { no: "03", title: "Technical Vetting", desc: "Live coding, system design, and behavioural interviews conducted by senior engineers." },
  { no: "04", title: "Client Interview", desc: "You interview the final shortlist directly. We coordinate scheduling and gather feedback." },
  { no: "05", title: "Onboarding", desc: "Selected engineers onboarded within two weeks — equipment, access, and ramp-up included." },
];

const capSteps = [
  { letter: "C", title: "Code", desc: "Engineering standards, peer review protocols, and architecture decision records embedded in every workflow — not bolted on after the fact." },
  { letter: "A", title: "Audit", desc: "Continuous code review, automated quality gates, security scanning, and weekly delivery audits surface risks before they become incidents." },
  { letter: "P", title: "Perform", desc: "Outcome measurement against business KPIs, monthly delivery reports, and quarterly business reviews with leadership." },
];

const caseStudies = [
  {
    Art: CaseStudyFintech,
    industry: "Financial Services",
    title: "Real-Time Lending Platform",
    desc: "Decomposed a 12-year-old Ruby monolith into 14 microservices for a top US lender, increasing deploy frequency 4.3× without downtime.",
    metric: "4.3×",
    metricLabel: "deploy frequency",
  },
  {
    Art: CaseStudyHealthcare,
    industry: "Healthcare",
    title: "HIPAA-Compliant Patient Platform",
    desc: "Built and operate a multi-region patient engagement platform serving over 7 million members with HITRUST certification.",
    metric: "99.99%",
    metricLabel: "uptime SLA",
  },
  {
    Art: CaseStudyRetail,
    industry: "Retail",
    title: "AI Demand Forecasting at Scale",
    desc: "Deployed machine learning demand forecasting across 612 store locations nationwide, reducing inventory holding costs by $14M annually.",
    metric: "22%",
    metricLabel: "inventory reduction",
  },
];

// HOW WE WORK - process timeline
const processSteps = [
  {
    no: "01",
    title: "Discover",
    desc: "Stakeholder workshops, technical discovery, and a risk-prioritized backlog. We surface unknowns before they become surprises.",
    duration: "Week 1–2",
    deliverables: ["Technical scoping document", "Risk register", "Delivery roadmap"],
  },
  {
    no: "02",
    title: "Design",
    desc: "Architecture decisions, system diagrams, and UX prototypes. Engineering and design move in lockstep from the start.",
    duration: "Week 2–4",
    deliverables: ["System architecture (C4)", "Interactive Figma prototype", "Data model & API spec"],
  },
  {
    no: "03",
    title: "Build",
    desc: "Senior engineers ship in two-week sprints with shared dashboards. Daily standups, weekly demos, written status reports.",
    duration: "Ongoing",
    deliverables: ["Production-grade code", "CI/CD pipelines", "Test coverage > 80%"],
  },
  {
    no: "04",
    title: "Ship",
    desc: "Phased rollouts with feature flags, observability, and on-call rotation. We do not hand over and disappear — we operate alongside you.",
    duration: "Launch + ongoing",
    deliverables: ["Monitoring & alerting", "Runbooks", "Incident response SLAs"],
  },
];

// CLIENT TESTIMONIALS
const testimonials = [
  {
    quote: "Tackxel rebuilt our core lending platform across nine months without a single production incident. Their senior engineers operated like an in-house team — but with the discipline of a top-tier consultancy.",
    name: "Sarah Chen",
    role: "VP Engineering",
    company: "Atlas Financial",
    companyInitial: "AF",
    rating: 5,
  },
  {
    quote: "We have worked with five development partners over the years. Tackxel is the only one we trust with our patient-facing systems. HIPAA-grade discipline without the enterprise consultancy markup.",
    name: "Marcus Williams",
    role: "Chief Technology Officer",
    company: "Vital Health Networks",
    companyInitial: "VH",
    rating: 5,
  },
  {
    quote: "The AI forecasting system Tackxel deployed has reduced our inventory holding costs by 22 percent — that is $14M annually. They delivered on every milestone, on time, on budget.",
    name: "Priya Anand",
    role: "VP Operations",
    company: "Northstar Retail Group",
    companyInitial: "NR",
    rating: 5,
  },
  {
    quote: "What sets Tackxel apart is engineering taste. Their team pushed back when our requirements would have created technical debt — and the alternative they proposed shipped faster and cheaper.",
    name: "James O'Brien",
    role: "Founder & CEO",
    company: "Loopline",
    companyInitial: "LL",
    rating: 5,
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].id);
  const [caseIndex, setCaseIndex] = useState(0);
  const activeServices = serviceTabs.find((t) => t.id === activeTab)!.services;

  return (
    <>
      {/* HERO */}
      <section className="relative hero-glow text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />

        <Parallax speed={0.15} className="absolute top-20 right-20 hidden lg:block pointer-events-none">
          <div className="w-72 h-72 rounded-full bg-brand-500/10 blur-3xl float-slow" />
        </Parallax>
        <Parallax speed={-0.1} className="absolute bottom-10 left-20 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-400/5 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="max-w-4xl">
            <Reveal delay={0}>
              <span className="badge-dark mb-8">
                <span className="dot-pulse" />
                Engineering since 2012 · Now booking Q3 2026
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">
                Senior engineering teams for ambitious software companies.
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">
                Tackxel is a custom software development firm partnering with startups, scaleups, and enterprises to design, build, and operate production systems — from first prototype to global scale.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/contact" className="btn-brand">
                  Talk to an engineer
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="btn-ghost-light">
                  Explore our services
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            {/* Build / Automate / Scale — horizontal pill */}
            <Reveal delay={500}>
              <div className="mt-12 inline-flex items-center gap-1 px-2 py-2 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur">
                {[
                  { word: "Build" },
                  { word: "Automate" },
                  { word: "Scale" },
                ].map((item, i) => (
                  <div key={item.word} className="flex items-center">
                    <span className="px-4 py-1.5 text-sm font-semibold text-white">{item.word}</span>
                    {i < 2 && <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AWARDS - reference-style grid */}
      <section className="bg-neutral-950 border-y border-neutral-800 overflow-hidden py-16 lg:py-20 relative">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <div className="text-eyebrow text-brand-300 uppercase mb-3 font-semibold tracking-widest">
                Recognized Industry Leader
              </div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-white max-w-2xl mx-auto">
                Award-winning engineering, recognized industry-wide
              </h2>
            </div>
          </Reveal>

          {/* 2x3 grid of award cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800 rounded-xl overflow-hidden max-w-5xl mx-auto">
            {awards.map((a, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-neutral-950 p-6 lg:p-7 hover:bg-neutral-900/60 transition-colors group h-full">
                  <div className="flex items-start gap-5">
                    {/* Laurel wreath icon */}
                    <div className="flex-shrink-0 mt-1">
                      <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" className="w-12 h-14 group-hover:scale-105 transition-transform">
                        {/* Left laurel */}
                        <g fill="#7E9DD7" opacity="0.85">
                          <ellipse cx="14" cy="14" rx="2.5" ry="5.5" transform="rotate(-30 14 14)" />
                          <ellipse cx="11" cy="20" rx="2.5" ry="5.5" transform="rotate(-20 11 20)" />
                          <ellipse cx="9" cy="27" rx="2.5" ry="5.5" transform="rotate(-10 9 27)" />
                          <ellipse cx="10" cy="34" rx="2.5" ry="5.5" transform="rotate(5 10 34)" />
                          <ellipse cx="13" cy="40" rx="2.5" ry="5.5" transform="rotate(20 13 40)" />
                          <ellipse cx="19" cy="46" rx="2.5" ry="5.5" transform="rotate(40 19 46)" />
                        </g>
                        {/* Right laurel */}
                        <g fill="#7E9DD7" opacity="0.85">
                          <ellipse cx="42" cy="14" rx="2.5" ry="5.5" transform="rotate(30 42 14)" />
                          <ellipse cx="45" cy="20" rx="2.5" ry="5.5" transform="rotate(20 45 20)" />
                          <ellipse cx="47" cy="27" rx="2.5" ry="5.5" transform="rotate(10 47 27)" />
                          <ellipse cx="46" cy="34" rx="2.5" ry="5.5" transform="rotate(-5 46 34)" />
                          <ellipse cx="43" cy="40" rx="2.5" ry="5.5" transform="rotate(-20 43 40)" />
                          <ellipse cx="37" cy="46" rx="2.5" ry="5.5" transform="rotate(-40 37 46)" />
                        </g>
                        {/* Star center */}
                        <g transform="translate(28, 28)">
                          <path d="M 0,-8 L 2.4,-2.4 L 8,-2.4 L 3.5,1.2 L 5.3,7 L 0,3.3 L -5.3,7 L -3.5,1.2 L -8,-2.4 L -2.4,-2.4 Z" fill="#fff" opacity="0.9" />
                        </g>
                      </svg>
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-brand-300 uppercase tracking-wider">
                          {a.platform}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-white leading-snug mb-2">
                        {a.title}
                      </h3>
                      <div className="text-xs text-neutral-500 font-mono">{a.year}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>4.9 / 5 average rating across 60+ reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>SOC 2 Type II · ISO 27001 · HIPAA</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-10 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Services</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Comprehensive engineering services, end to end
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Five integrated practice areas, coordinated by a single delivery lead. Engage one specialism or combine multiple — we structure the workflow around your business objectives.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="border-b border-neutral-200 mb-10 overflow-x-auto">
              <div className="flex gap-1 min-w-max">
                {serviceTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 text-sm font-medium border-b-2 transition-all -mb-px ${
                      activeTab === tab.id
                        ? "text-neutral-950 border-brand-500"
                        : "text-neutral-500 border-transparent hover:text-neutral-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {activeServices.map((s, i) => (
              <Reveal key={`${activeTab}-${s.name}`} delay={i * 60}>
                <div className="bg-white p-6 hover:bg-neutral-50 transition-colors group h-full">
                  <div className="icon-wrap mb-5">
                    <s.Icon className="w-14 h-14" />
                  </div>
                  <h3 className="text-h3 text-neutral-950 mb-2">{s.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex items-center gap-4">
                    <Link href="/contact" className="text-sm font-medium text-neutral-900 hover:text-brand-600 transition-colors inline-flex items-center gap-1">
                      Talk to an expert
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link href="/services" className="text-sm font-medium text-neutral-500 hover:text-brand-600 transition-colors inline-flex items-center gap-1">
                      Learn more
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Who we partner with</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                Engineering partnerships for every stage of growth
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <Reveal key={a.label} delay={i * 100}>
                <div className="bg-white border border-neutral-200 rounded-lg p-8 card-lift group h-full">
                  <div className="icon-wrap mb-6">
                    <a.Icon className="w-14 h-14" />
                  </div>
                  <h3 className="text-h3 text-neutral-950 mb-3">{a.label}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-10 flex justify-center">
              <Link href="/contact" className="btn-primary">
                Connect with our experts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ENGAGEMENT MODELS — with illustrations */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Engagement models</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Flexible ways to engage our engineering teams
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Choose the engagement structure that matches your roadmap, risk tolerance, and internal team composition. We adapt our delivery model to your business — not the other way around.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {engagements.map((e, i) => (
              <Reveal key={e.name} delay={i * 100}>
                <article className={`rounded-lg border overflow-hidden h-full card-lift flex flex-col ${
                  e.featured ? "border-neutral-950 bg-neutral-950 text-white shadow-card-dark" : "border-neutral-200 bg-white shadow-card"
                } relative`}>
                  {e.featured && (
                    <span className="absolute top-3 right-3 z-10 bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  )}
                  <e.Illus className="w-full h-44 flex-shrink-0" />
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className={`text-h3 mb-3 ${e.featured ? "text-white" : "text-neutral-950"}`}>{e.name}</h3>
                    <p className={`text-sm leading-relaxed mb-6 flex-1 ${e.featured ? "text-neutral-300" : "text-neutral-600"}`}>{e.desc}</p>
                    <Link href="/contact" className={e.featured ? "btn-brand w-full justify-center" : "btn-primary w-full justify-center"}>
                      {e.cta}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK - process timeline */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-16 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">How we work</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  A delivery process built for predictability
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Every engagement follows the same four-phase model. Transparent milestones, clear deliverables, and contractually-defined exit criteria at each stage.
              </p>
            </div>
          </Reveal>

          {/* Process timeline */}
          <div className="relative">
            {/* Connecting line - desktop */}
            <div className="hidden lg:block absolute top-[34px] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

            <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
              {processSteps.map((step, i) => (
                <Reveal key={step.no} delay={i * 120}>
                  <div className="relative group">
                    {/* Number circle */}
                    <div className="flex items-center gap-4 mb-5 relative">
                      <div className="relative z-10 w-[68px] h-[68px] rounded-full bg-white border-2 border-brand-200 flex items-center justify-center group-hover:border-brand-500 group-hover:scale-105 transition-all duration-300 shadow-sm">
                        <span className="font-mono text-sm font-bold text-brand-600">{step.no}</span>
                      </div>
                      {i < processSteps.length - 1 && (
                        <div className="hidden lg:block flex-1 h-px bg-gradient-to-r from-brand-300 to-brand-100 ml-2" />
                      )}
                    </div>

                    <div className="bg-white border border-neutral-200 rounded-lg p-6 card-lift">
                      <h3 className="text-h3 text-neutral-950 mb-1">{step.title}</h3>
                      <div className="text-xs font-mono text-brand-600 mb-3">{step.duration}</div>
                      <p className="text-sm text-neutral-600 leading-relaxed mb-5">{step.desc}</p>

                      <div className="pt-4 border-t border-neutral-100">
                        <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                          Deliverables
                        </div>
                        <ul className="space-y-1.5">
                          {step.deliverables.map((d) => (
                            <li key={d} className="text-xs text-neutral-700 flex items-start gap-2">
                              <span className="text-brand-500 mt-0.5">→</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US — proper section with team collage and counters */}
      <section className="py-20 lg:py-28 bg-white border-y border-neutral-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT — text + cards */}
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-10 bg-brand-500" />
                  <span className="text-eyebrow text-brand-600 uppercase font-bold tracking-widest">About Us</span>
                </div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-6">
                  Your trusted technology partner for scalable digital solutions
                </h2>

                {/* Tech Partners card with avatar stack */}
                <div className="bg-brand-500 text-white rounded-2xl p-6 mb-6 flex items-center justify-between gap-6 shadow-brand-glow">
                  <AvatarStack />
                  <div className="text-right">
                    <div className="font-display text-3xl lg:text-4xl font-bold tracking-display leading-none">
                      <Counter to={100} suffix="+" />
                    </div>
                    <div className="text-sm text-white/85 mt-1.5 font-medium">Tech Partners</div>
                  </div>
                </div>

                <p className="text-base text-neutral-600 leading-relaxed mb-8 max-w-xl">
                  We help businesses modernize and scale through AI, automation, and cloud-powered engineering for lasting success. Founded in 2012 and headquartered across four continents, Tackxel ships software for venture-backed startups, public companies, and Fortune 500 enterprises.
                </p>

                {/* Two stat cards row */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-neutral-950 text-white rounded-2xl p-6 card-lift">
                    <div className="w-10 h-10 rounded-lg bg-brand-500/15 border border-brand-500/30 flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-brand-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9V2h12v7" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18 9a6 6 0 1 1-12 0" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 22h6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 17v5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="font-display text-3xl font-bold tracking-display">
                      <Counter to={12} suffix="+" />
                    </div>
                    <div className="text-sm text-neutral-400 mt-1">Awards won</div>
                  </div>
                  <div className="bg-neutral-950 text-white rounded-2xl p-6 card-lift">
                    <div className="w-10 h-10 rounded-lg bg-brand-500/15 border border-brand-500/30 flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-brand-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="font-display text-3xl font-bold tracking-display">
                      <Counter to={130} suffix="+" />
                    </div>
                    <div className="text-sm text-neutral-400 mt-1">Full-time engineers</div>
                  </div>
                </div>

                <Link href="/about" className="btn-primary">
                  Learn more about us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            {/* RIGHT — premium illustrated hero image with floating 270+ badge */}
            <Reveal delay={200} direction="left">
              <div className="relative">
                {/* Frame with subtle shadow */}
                <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-neutral-200">
                  <AboutHeroImage className="w-full h-auto block" />
                </div>

                {/* Floating "270+ Projects Completed" badge — overlaid on bottom-left */}
                <div className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8">
                  <div className="bg-brand-500 text-white rounded-2xl shadow-brand-glow p-5 lg:p-6 flex items-center gap-4 border-4 border-white">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/15 border border-white/25 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 lg:w-7 lg:h-7 text-white">
                        <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.8L5.8 21L7 14L2 9.3L9 8.5L12 2Z" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-display text-2xl lg:text-3xl font-bold tracking-display leading-none">
                        <Counter to={270} suffix="+" />
                      </div>
                      <div className="text-xs lg:text-sm text-white/85 mt-1 font-medium">Projects Completed</div>
                    </div>
                  </div>
                </div>

                {/* Subtle glow behind image */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-500/10 to-transparent blur-3xl -z-10 pointer-events-none" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TECH CHALLENGES CTA */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="bg-gradient-to-br from-neutral-50 to-brand-50 border border-neutral-200 rounded-lg p-10 lg:p-12 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
              <div>
                <h2 className="font-display text-h2 text-neutral-950 mb-3">
                  Facing a technical challenge?
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Book a free 30-minute consultation with a senior engineer. Walk away with a written technical assessment, delivery estimate, and risk analysis — no pitch, no obligation.
                </p>
              </div>
              <Link href="/contact" className="btn-primary w-full lg:w-fit lg:justify-self-end justify-center">
                Schedule consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HIRING */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Hiring</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Skip the recruitment bottleneck
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Onboard senior engineers in under two weeks. Our talent-vetting process surfaces the top 3% of technical candidates — pre-screened on engineering rigor, communication, and culture alignment.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {hiringSteps.map((s, i) => (
              <Reveal key={s.no} delay={i * 80}>
                <div className="bg-white p-6 h-full hover:bg-neutral-50 transition-colors">
                  <div className="text-xs text-brand-600 font-mono font-semibold mb-3">{s.no}</div>
                  <h3 className="text-sm font-semibold text-neutral-950 mb-2 leading-snug">{s.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <div className="mt-8 flex justify-center">
              <Link href="/contact" className="btn-brand">
                Hire top engineers
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAP METHODOLOGY */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-500/10 blur-3xl" />
        </Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-300 uppercase mb-4">Methodology</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-white">
                  The CAP™ methodology
                </h2>
              </div>
              <p className="text-base text-neutral-400 leading-relaxed max-w-xl lg:justify-self-end">
                Our production engine for guaranteed quality. Three principles, embedded contractually in every engagement, measured continuously — not retrofitted at delivery.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {capSteps.map((c, i) => (
              <Reveal key={c.letter} delay={i * 120}>
                <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 card-lift h-full">
                  <div className="w-14 h-14 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-6">
                    <span className="font-display text-2xl font-bold text-brand-300">{c.letter}</span>
                  </div>
                  <h3 className="text-h3 text-white mb-3">{c.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES — carousel with case study art */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-eyebrow text-emerald-700 uppercase mb-4 font-bold tracking-widest">
                Success Stories
              </div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-4">
                Outcomes our clients took to their boards
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                Tackxel provides companies with scalable and secure IT solutions. Explore selected case studies showing how our work delivers measurable growth and efficiency across industries.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setCaseIndex((i) => Math.max(0, i - 1))}
                disabled={caseIndex === 0}
                className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:border-neutral-950 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Previous case study"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCaseIndex((i) => Math.min(caseStudies.length - 1, i + 1))}
                disabled={caseIndex >= caseStudies.length - 1}
                className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:border-neutral-950 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Next case study"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((c, i) => (
              <Reveal key={i} delay={i * 100}>
                <article className="bg-white border border-neutral-200 rounded-xl overflow-hidden card-lift h-full flex flex-col shadow-card">
                  <div className="relative h-48 overflow-hidden">
                    <c.Art className="w-full h-full" />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="text-xs text-brand-600 uppercase tracking-wider font-bold mb-3">{c.industry}</div>
                    <h3 className="text-h3 text-neutral-950 mb-3 leading-snug">{c.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-6 flex-1">{c.desc}</p>
                    <div className="pt-5 border-t border-neutral-100 flex items-center justify-between">
                      <div>
                        <div className="font-display text-2xl text-neutral-950 tracking-display font-bold">{c.metric}</div>
                        <div className="text-xs text-neutral-500">{c.metricLabel}</div>
                      </div>
                      <Link
                        href="/contact"
                        className="text-sm font-medium text-neutral-900 hover:text-brand-600 transition-colors inline-flex items-center gap-1"
                      >
                        Read case
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">What clients say</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-4">
                Trusted by founders, CTOs, and Fortune 500 engineering leaders
              </h2>
              <div className="flex items-center justify-center gap-2 mt-6">
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-neutral-900">4.9</span>
                <span className="text-sm text-neutral-500">· 60+ verified reviews</span>
              </div>
            </div>
          </Reveal>

          {/* Testimonial grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => {
              const isFeatured = i === 0;
              return (
                <Reveal key={i} delay={i * 100}>
                  <article
                    className={`relative rounded-xl border p-7 lg:p-8 h-full card-lift overflow-hidden ${
                      isFeatured
                        ? "bg-neutral-950 border-neutral-800 text-white"
                        : "bg-white border-neutral-200"
                    }`}
                  >
                    {/* Quote mark watermark */}
                    <Quote
                      className={`absolute -top-2 -right-2 w-32 h-32 ${
                        isFeatured ? "text-brand-500/10" : "text-brand-100"
                      }`}
                      strokeWidth={1}
                    />

                    <div className="relative">
                      {/* Stars */}
                      <div className="flex items-center gap-0.5 mb-5">
                        {Array.from({ length: t.rating }).map((_, s) => (
                          <Star
                            key={s}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote
                        className={`text-base lg:text-lg leading-relaxed mb-6 ${
                          isFeatured ? "text-neutral-100" : "text-neutral-800"
                        }`}
                      >
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>

                      {/* Author */}
                      <div className={`flex items-center gap-3 pt-5 border-t ${isFeatured ? "border-neutral-800" : "border-neutral-100"}`}>
                        <div
                          className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                            isFeatured
                              ? "bg-brand-500/20 text-brand-300 border border-brand-500/30"
                              : "bg-brand-50 text-brand-700 border border-brand-100"
                          }`}
                        >
                          {t.companyInitial}
                        </div>
                        <div className="min-w-0">
                          <div className={`text-sm font-semibold ${isFeatured ? "text-white" : "text-neutral-950"}`}>
                            {t.name}
                          </div>
                          <div className={`text-xs ${isFeatured ? "text-neutral-400" : "text-neutral-500"}`}>
                            {t.role} · {t.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Client logos strip */}
          <Reveal delay={400}>
            <div className="mt-16 pt-12 border-t border-neutral-200">
              <div className="text-xs text-neutral-500 uppercase tracking-widest text-center mb-8 font-semibold">
                Trusted by teams at
              </div>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                {[
                  { name: "Atlas Financial", initial: "AF" },
                  { name: "Vital Health Networks", initial: "VH" },
                  { name: "Northstar Retail", initial: "NR" },
                  { name: "Loopline", initial: "LL" },
                  { name: "Helix Logistics", initial: "HX" },
                  { name: "Quantum Capital", initial: "QC" },
                  { name: "Vertex Mobility", initial: "VM" },
                ].map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-2.5 text-neutral-400 hover:text-neutral-900 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-500 group-hover:text-neutral-900 group-hover:border-neutral-300 transition-colors">
                      {c.initial}
                    </div>
                    <span className="text-sm font-medium">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-eyebrow text-brand-300 uppercase mb-4">Get in touch</div>
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">
              Ready to find out more? Book a discovery call.
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">
              Discuss your needs with a senior engineer. You&apos;ll receive a written technical assessment within five business days — no slide decks, no sales reps.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-get-in-touch">
                <span>Let&apos;s talk</span>
                <span className="btn-arrow-wrap">
                  <ArrowRight className="w-3.5 h-3.5 btn-arrow-1" />
                  <ArrowRight className="w-3.5 h-3.5 btn-arrow-2" />
                </span>
              </Link>
              <Link href="/services" className="btn-ghost-light">
                Browse our platform
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
