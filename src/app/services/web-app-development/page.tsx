"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Award, Clock, ShieldCheck,
  TrendingUp, Zap, Plus, Minus,
  Building2, Heart, ShoppingBag, GraduationCap, Truck, Home as HomeIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import ServiceHeroImage from "@/components/ServiceHeroImage";
import Counter from "@/components/Counter";
import {
  IconWebApp, IconAnalytics, IconMobileApp, IconCustomSoftware, IconCommerce, IconLegacy,
  IconAI, IconAWS, IconDevOps,
} from "@/components/Icons";

// ===== DATA =====

const services = [
  {
    Icon: IconWebApp,
    name: "Custom Web Application Development",
    tagline: "Built for your business model and workflows.",
    desc: "Custom web applications engineered around your unique business logic, integrations, and compliance — not off-the-shelf platforms forced into workarounds.",
    bullets: [
      "Customized web apps built for your business model and workflows.",
      "Production-grade reliability and flexible architecture, not enterprise theatre.",
      "Built using React, Node.js, Laravel, and cloud-native frameworks.",
      "Two-week sprints, written status, demos every Friday. Ship faster without surprises.",
      "Full ownership of source code, infrastructure, and IP from day one.",
    ],
    metric: { value: "40%", label: "Faster time-to-market" },
  },
  {
    Icon: IconAnalytics,
    name: "Single-Page Applications (SPA)",
    tagline: "Lightning-fast, app-like experiences.",
    desc: "Modern single-page apps that load instantly and feel native — built with React, Vue, and Angular for sub-second interactions across every device.",
    bullets: [
      "Lightning-fast SPAs improve engagement by up to 47%.",
      "Seamless, app-like experiences across browsers and devices.",
      "Built with React, Vue.js, and Angular frameworks.",
      "Minimal load times drive higher conversions and retention rates.",
      "Optimized routing, code splitting, and Core Web Vitals tuning.",
    ],
    metric: { value: "47%", label: "Engagement uplift" },
  },
  {
    Icon: IconMobileApp,
    name: "Progressive Web Apps (PWA)",
    tagline: "Web reach with native-app performance.",
    desc: "PWAs that combine the reach of the web with the performance of native apps — offline support, push notifications, and home-screen installs without an app store.",
    bullets: [
      "PWAs that load 2.5x faster than standard mobile sites.",
      "Works offline and increases engagement by up to 60%.",
      "Cross-platform functionality with secure caching and push notifications.",
      "Ideal for retail, healthcare, and on-demand service platforms.",
      "Service worker architecture for offline-first reliability.",
    ],
    metric: { value: "2.5×", label: "Faster load times" },
  },
  {
    Icon: IconCustomSoftware,
    name: "SaaS Application Development",
    tagline: "Multi-tenant platforms for scale.",
    desc: "Multi-tenant SaaS platforms architected for startups, SMBs, and global enterprises — with subscriptions, analytics, and compliance baked in from day one.",
    bullets: [
      "Multi-tenant SaaS architectures for startups, SMBs, and global enterprises.",
      "30% lower hosting costs using AWS, Azure, and GCP.",
      "Subscription management, analytics, and API integrations built in.",
      "Fully compliant with SOC 2, GDPR, and HIPAA standards.",
      "Horizontal scaling, tenant isolation, and white-label support.",
    ],
    metric: { value: "30%", label: "Lower hosting costs" },
  },
  {
    Icon: IconCommerce,
    name: "eCommerce Web App Development",
    tagline: "Conversion-optimized commerce platforms.",
    desc: "Scalable commerce platforms — custom storefronts, headless commerce, and omnichannel inventory — engineered to handle peak traffic and convert at scale.",
    bullets: [
      "Scalable eCommerce platforms that increase conversion rates by 38%.",
      "Secure payment gateways, product catalogs, and personalized dashboards.",
      "Integrated with Shopify, WooCommerce, and headless commerce APIs.",
      "Real-time analytics for tracking orders, trends, and user behavior.",
      "PCI-compliant checkout flows with fraud detection built in.",
    ],
    metric: { value: "38%", label: "Conversion uplift" },
  },
  {
    Icon: IconLegacy,
    name: "Legacy System Modernization",
    tagline: "Modernize without disrupting operations.",
    desc: "Strangler-fig migrations that modernize legacy web apps without big-bang rewrites — ship value every sprint while gradually replacing the old system.",
    bullets: [
      "Modernize outdated systems without disrupting business operations.",
      "Reduce maintenance costs by 40% with updated architectures.",
      "Migrate to cloud-native solutions for improved scalability.",
      "Improved performance, UX, and security through modernization frameworks.",
      "Zero-downtime migrations with phased cutover and rollback safety.",
    ],
    metric: { value: "40%", label: "Maintenance cost cut" },
  },
];

const process = [
  { no: "01", title: "Discovery & UX Strategy",  duration: "1–2 weeks", desc: "User research, stakeholder workshops, and architecture decision records. We map user journeys and write a Solution Design Document before any code ships." },
  { no: "02", title: "Foundations & Design System", duration: "1 week", desc: "Design tokens, component library, CI/CD pipelines, and security baselines configured from day one — never bolted on later." },
  { no: "03", title: "Iterative Build", duration: "8–16 weeks", desc: "Two-week sprints with working web app at every demo. Senior full-stack engineers own end-to-end features with daily standups in your time zone." },
  { no: "04", title: "Hardening & Launch", duration: "1–2 weeks", desc: "Load testing, security review, accessibility audit, and Core Web Vitals tuning. We launch with a war room, runbooks, and a 24/7 on-call rotation." },
  { no: "05", title: "Operate & Evolve", duration: "Ongoing", desc: "Continuous delivery, quarterly architecture reviews, and a roadmap that ties engineering investment to measurable business outcomes." },
];

const emergingTech = [
  {
    Icon: IconAI,
    title: "Smarter Web Experiences with AI",
    desc: "Integrate predictive analytics and NLP tools to personalize user journeys, automate workflows, and simplify decision-making across your digital ecosystem.",
  },
  {
    Icon: IconAWS,
    title: "Cloud-Enabled Performance",
    desc: "Cloud-native architecture sized to your unit economics. Scale globally without the runaway AWS bill that surprises everyone in month three.",
  },
  {
    Icon: IconDevOps,
    title: "Automated Delivery Excellence",
    desc: "Adopt DevOps automation to streamline deployments, reduce human error, and shorten development cycles from months to weeks.",
  },
];

const challenges = [
  { title: "Slow Web Application Performance", solution: "Code-splitting, lazy loading, edge caching, and CDN integration cut load times by 60%+. We tune to Core Web Vitals targets enforced in CI." },
  { title: "Poor User Experience and Interface Design", solution: "User research, accessibility audits, and design systems built by senior product designers — every interaction reviewed for clarity, speed, and inclusion." },
  { title: "Scalability Limitations During Growth", solution: "Horizontal scaling, database sharding, queue-based architecture, and serverless workloads — your app handles 10× traffic without re-architecting." },
  { title: "Slow Response Speeds Under Load", solution: "Load testing with k6 and Locust against realistic production traffic. Performance budgets enforced in CI catch regressions before they reach users." },
  { title: "Legacy Systems Slowing Innovation", solution: "Incremental modernization with strangler-fig patterns — we modernize alongside your existing system without a high-risk big-bang rewrite." },
  { title: "Integration Issues Across Platforms", solution: "Contract-first API design, schema validation, and integration test suites for every external system. Vendor reliability scored before commitment." },
  { title: "High development and maintenance costs", solution: "Senior-only engineering means fewer rewrites, fewer bugs in production, and faster onboarding. Total cost drops because the work doesn&apos;t have to be redone." },
  { title: "Inconsistent Cross-Platform Performance", solution: "Responsive design system, device labs for QA, and performance testing across browsers and devices. Same UX on Chrome desktop, Safari iPhone, and Edge tablet." },
  { title: "Slow Bug Resolution and Testing Gaps", solution: "Test pyramids in CI from sprint one — automated unit, integration, and E2E coverage. Bugs caught in PR review, not customer-reported." },
  { title: "Difficulty Scaling SaaS Products Globally", solution: "Multi-region deployment, tenant isolation, and CDN routing. Compliance frameworks (SOC 2, GDPR, HIPAA) applied per market without code branches." },
];

const industries = [
  { Icon: Heart, name: "Healthcare & HealthTech", desc: "HIPAA-compliant patient portals, telehealth platforms, and clinical web apps serving millions of members across hospital networks and digital health startups.", examples: ["Patient portals", "Telehealth apps", "Clinical analytics", "EHR integrations"] },
  { Icon: Building2, name: "Fintech & Finance", desc: "PCI-compliant payment platforms, lending portals, and real-time trading interfaces. We build the regulated web infrastructure that handles billions in transactions.", examples: ["Payment platforms", "Lending portals", "Trading interfaces", "KYC/AML automation"] },
  { Icon: ShoppingBag, name: "eCommerce & Retail", desc: "Headless commerce, custom storefronts, and AI-powered personalization at enterprise scale. We've shipped omnichannel platforms processing millions of orders annually.", examples: ["Custom storefronts", "Headless commerce", "Loyalty programs", "Recommendation engines"] },
  { Icon: GraduationCap, name: "Education & EdTech", desc: "Learning management platforms, virtual classrooms, and adaptive learning web apps. Built for schools, universities, and corporate training serving millions of learners.", examples: ["LMS platforms", "Virtual classrooms", "Adaptive learning", "Certification tracking"] },
  { Icon: Truck, name: "Logistics & Supply Chain", desc: "Fleet tracking, route optimization, and warehouse management web apps. Real-time data pipelines integrating IoT, ERP, and third-party logistics providers.", examples: ["Fleet dashboards", "Route optimization", "Warehouse systems", "Supply chain visibility"] },
  { Icon: HomeIcon, name: "Real Estate & PropTech", desc: "Listing platforms, property management web apps, and tenant experience portals. CRM integrations and IoT-enabled smart-building systems for residential and commercial portfolios.", examples: ["Listing platforms", "Property management", "Tenant portals", "Smart buildings"] },
];

const advantages = [
  { no: "01", title: "Proven Engineering Expertise",   desc: "We build secure, scalable web apps using React, Node.js, and AWS — trusted by startups, SMBs, and enterprises worldwide." },
  { no: "02", title: "Industry-Aligned Development",   desc: "Solutions are built with compliance in mind — HIPAA, PCI DSS, GDPR — meeting every required standard confidently." },
  { no: "03", title: "Data-Driven Results",            desc: "Our web apps consistently reduce operational costs and improve performance metrics by up to 30%." },
  { no: "04", title: "Transparent Communication",      desc: "You stay updated through every sprint, milestone, and delivery — ensuring clarity and trust at all stages." },
  { no: "05", title: "Scalable Team Model",            desc: "Our dedicated team adapts as your project grows, ensuring steady progress and reliable delivery timelines." },
  { no: "06", title: "Long-Term Product Care",         desc: "Ongoing monitoring, maintenance, and improvements — so your web app continues to perform at its best." },
];

const techStackTabs = [
  { category: "Frontend",   techs: ["React.js", "Angular", "Vue.js", "Next.js", "Nuxt.js", "Svelte", "TypeScript", "Tailwind CSS", "Storybook", "Redux"] },
  { category: "Backend",    techs: ["Node.js", "Python (FastAPI / Django)", "Ruby on Rails", "Laravel", "Go", ".NET Core", "Express", "GraphQL", "NestJS", "PHP"] },
  { category: "Databases",  techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB", "Elasticsearch", "Firebase", "Supabase", "Cassandra", "ClickHouse"] },
  { category: "Cloud & DevOps", techs: ["AWS", "Microsoft Azure", "Google Cloud", "Vercel", "Netlify", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Datadog"] },
  { category: "Testing & QA", techs: ["Jest", "Vitest", "Playwright", "Cypress", "Storybook Tests", "Selenium", "k6", "Lighthouse CI"] },
  { category: "Architecture", techs: ["Microservices", "Serverless", "Event-Driven", "GraphQL Federation", "JAMstack", "Headless CMS", "Edge Functions", "BFF Pattern"] },
];

const faqs = [
  { q: "How quickly can you start a web app development project?", a: "Most engagements begin within two weeks. We run a brief technical discovery, agree on team composition and scope, sign the MSA and SOW, and onboard your dedicated team into your environments. Urgent needs can compress this to one week with the right preparation." },
  { q: "What's the difference between SPA, PWA, and traditional web apps?", a: "Traditional web apps reload the whole page on navigation. SPAs (Single-Page Apps) load once and update via JavaScript — feels app-like, sub-second interactions. PWAs add offline support, push notifications, and home-screen install — closest to a native app without an app store. We'll recommend the right architecture after discovery." },
  { q: "Do you provide ongoing maintenance after launch?", a: "Yes. Most clients move to a monthly retainer for ongoing feature development, security patches, performance monitoring, and infrastructure operations. We also offer fixed-scope maintenance contracts if your team plans to take ownership long-term." },
  { q: "Who owns the code, IP, and infrastructure?", a: "You do — from the first commit. All code is written into your repositories under your accounts, hosted in your cloud, and licensed to you. We deliberately avoid any lock-in patterns — when our engagement ends, your team owns everything with zero migration cost." },
  { q: "What does a typical web app project cost?", a: "Dedicated teams start at around USD 25K per month for a small squad. Fixed-scope MVPs typically range from USD 60K to USD 200K depending on complexity. Enterprise platforms can run higher. We provide a written estimate after a free 30-minute technical assessment." },
  { q: "Can you integrate with our existing engineering team?", a: "Yes. Our dedicated teams integrate via your tools (Linear, Jira, GitHub, Slack), your standups, your code review process, and your release cadence. Your engineering leadership stays in command — we extend your team, not replace it." },
];

const awards = [
  { platform: "Top Rated",     title: "SoftwareWorld",            year: "2024" },
  { platform: "GoodFirms",     title: "Top Web App Company",      year: "2024" },
  { platform: "Clutch",        title: "Top Web Developers",       year: "2024" },
  { platform: "Firmstalk",     title: "Top Web App Development",  year: "2024" },
  { platform: "TopDevelopers", title: "Recognized Company",       year: "2024" },
  { platform: "AppFuturo",     title: "Web App Alignment",        year: "2024" },
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

export default function WebAppDevelopmentPage() {
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
      {/* HERO — warm */}
      <section className="relative hero-warm pt-32 pb-20 lg:pb-24 overflow-hidden">
        <Parallax speed={0.08} className="absolute top-24 right-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[24rem] h-[24rem] rounded-full bg-orange-200/40 blur-3xl float-slow" />
        </Parallax>
        <Parallax speed={-0.06} className="absolute bottom-0 left-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[26rem] h-[26rem] rounded-full bg-brand-200/40 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-8 font-mono">
              <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
              <span className="text-neutral-300">/</span>
              <Link href="/services" className="hover:text-brand-600 transition-colors">Services</Link>
              <span className="text-neutral-300">/</span>
              <span className="text-brand-600">Web &amp; Product Engineering</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="badge mb-6">
                  <span className="dot-pulse" />
                  Next.js · React · Node · Rails
                </span>
              </Reveal>

              <Reveal delay={80}>
                <div className="text-eyebrow text-brand-600 uppercase font-semibold tracking-widest mb-4">
                  Web &amp; Product Engineering
                </div>
              </Reveal>

              <Reveal delay={140}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight leading-[1.05]">
                  Web platforms built for the team that owns them next.
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="text-lg text-neutral-700 mt-6 max-w-2xl leading-relaxed">
                  Tackxel ships production web apps on Next.js, React, Node, and Rails. Built for the team that owns it next year, not just the launch on Friday.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Link href="/contact" className="btn-brand">
                    <Calendar className="w-4 h-4" />
                    Book a discovery call
                  </Link>
                  <Link href="/contact?intent=estimate" className="btn-secondary">
                    Get a delivery estimate
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="mt-5 flex items-center gap-2 text-sm text-neutral-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                  Free 30-minute scoping call with a senior engineer. NDA on request.
                </div>
              </Reveal>
            </div>

            <ServiceHeroImage
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
              alt="Web and product engineering — code on a laptop"
            />
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
                <h3 className="font-display text-h3 text-neutral-950 mb-2">Proven Full-Stack Expertise</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Our developers master end-to-end technologies — from responsive UI/UX to secure databases and cloud APIs — ensuring every layer of your app runs seamlessly.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-brand-50 border border-brand-100 rounded-lg p-7 h-full card-lift">
                <div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-200 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="font-display text-h3 text-neutral-950 mb-2">Web Apps, SaaS, Portals — We Build It All</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  We build everything from B2B portals to enterprise SaaS — ensuring secure architecture, responsive design, and consistent performance across every user interaction.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-white border border-neutral-200 rounded-lg p-7 h-full">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-600 font-semibold mb-2">
                  Your Trusted One-Stop
                </div>
                <h3 className="font-display text-h3 text-neutral-950 mb-5">
                  Technology <span className="text-brand-600">Partner</span>
                </h3>

                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                  <div className="bg-white p-3.5">
                    <div className="font-display text-xl font-bold text-neutral-950"><Counter to={7} suffix="+" /></div>
                    <div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Years of Experience</div>
                  </div>
                  <div className="bg-white p-3.5">
                    <div className="font-display text-xl font-bold text-neutral-950">Top <Counter to={1} suffix="%" /></div>
                    <div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Vetted Talent</div>
                  </div>
                  <div className="bg-white p-3.5">
                    <div className="font-display text-xl font-bold text-neutral-950"><Counter to={95} suffix="%" /></div>
                    <div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Client Retention Score</div>
                  </div>
                  <div className="bg-white p-3.5">
                    <div className="font-display text-xl font-bold text-neutral-950"><Counter to={30} suffix="%" /></div>
                    <div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Senior Software Engineers</div>
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
                Our Web App Development Services
              </div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">
                Designed For <span className="text-brand-600">Growth, Security, and Performance</span>
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">
                Click any service below to explore the engineering depth, technology stack, and measurable outcomes we deliver.
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
                      <s.Icon className={`w-7 h-7 transition-opacity ${activeService === i ? "opacity-100" : "opacity-50"}`} />
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
                    <activeServiceData.Icon className="w-32 h-32 lg:w-40 lg:h-40" />
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
                    <div className="icon-wrap flex-shrink-0">
                      <s.Icon className="w-10 h-10" />
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
                Curious How Tackxel Can Bring Your Web Vision To Life?
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
                  How we ship web apps, <span className="text-brand-600">every engagement</span>
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-xl">
                A repeatable, transparent delivery process refined across 200+ engagements. You see working web app in week three — never a slide deck pretending to be progress.
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
                  Advancing Web Apps With <span className="text-brand-300">Modern Technology</span>
                </h2>
                <p className="text-base text-neutral-300 leading-relaxed mb-8 max-w-lg">
                  Tackxel integrates emerging technologies like AI, cloud, and automation to deliver faster, data-driven, and scalable web applications.
                </p>
              </Reveal>

              <div className="space-y-4">
                {emergingTech.map((t, i) => (
                  <Reveal key={t.title} delay={i * 100}>
                    <div className="bg-neutral-900/70 backdrop-blur border border-neutral-800 rounded-lg p-6 card-lift">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center flex-shrink-0">
                          <t.Icon className="w-6 h-6" />
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
                  Is Your Business Ready For A Smarter Web Solution?
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>

            <Reveal delay={300} direction="left">
              <div className="relative bg-neutral-900/40 backdrop-blur border border-neutral-800 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <svg viewBox="0 0 320 320" className="w-full h-full">
                  <defs>
                    <radialGradient id="coreGlowWA" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#5278C2" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#3159A5" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="160" cy="160" r="60" fill="url(#coreGlowWA)" />
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
                  <circle cx="160" cy="160" r="26" fill="#3159A5" />
                  <text x="160" y="166" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="Geist">WEB</text>
                  {[
                    { label: "REACT",  x: 220, y: 60 },
                    { label: "NODE",   x: 60,  y: 60 },
                    { label: "API",    x: 60,  y: 250 },
                    { label: "CLOUD",  x: 220, y: 250 },
                    { label: "PWA",    x: 270, y: 155 },
                  ].map((t) => (
                    <g key={t.label}>
                      <rect x={t.x - 24} y={t.y - 11} width="48" height="22" rx="4" fill="#1D376A" stroke="#3159A5" strokeOpacity="0.4" />
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
                  Top Web App Development Challenges That Cost You Growth
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">
                Click any challenge to reveal exactly how we solve it. Patterns we&apos;ve seen — and fixed — across 200+ web app engagements.
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
                    Slow development workflows increase time-to-market and limit innovation capacity for growing businesses.
                  </p>
                </div>

                <div className="bg-white border border-neutral-200 rounded-lg p-7">
                  <div className="text-xs text-brand-600 uppercase tracking-wider font-semibold mb-3">
                    Our Approach
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                    Two-week sprints, CI/CD on every commit. Releases ship faster and land cleaner because we don&apos;t skip the boring engineering work.
                  </p>

                  <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                    <div className="bg-white p-5">
                      <div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3">
                        <Zap className="w-4 h-4 text-brand-600" />
                      </div>
                      <div className="font-display text-3xl font-bold text-neutral-950 tracking-display">2.5×</div>
                      <div className="text-xs text-neutral-500 mt-0.5">Faster Development</div>
                    </div>
                    <div className="bg-white p-5">
                      <div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3">
                        <TrendingUp className="w-4 h-4 text-brand-600" />
                      </div>
                      <div className="font-display text-3xl font-bold text-neutral-950 tracking-display">40–60%</div>
                      <div className="text-xs text-neutral-500 mt-0.5">Shorter Time-to-Market</div>
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
                    Want To Fix What&apos;s Slowing Your Web App?
                  </h2>
                  <p className="text-base text-brand-50 leading-relaxed max-w-xl">
                    Every second of delay can cost conversions. We&apos;ll rebuild your web application to run more quickly, scale more easily, and deliver measurable ROI even if it has poor scalability or slow load times.
                  </p>
                </div>
                <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2 w-fit lg:justify-self-end">
                  Upgrade Your App Without Disruption
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
                  Custom Web Apps Designed <span className="text-brand-600">Around Your Industry Goals</span>
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">
                Our web app development expertise spans multiple industries — enabling businesses to meet compliance requirements, streamline operations, and maximize customer engagement with scalable, secure, high-performing solutions.
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
                  Let&apos;s Discuss Your Industry Use Case
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
                  Why Does Tackxel&apos;s Web App Expertise <span className="text-brand-300">Set Us Apart?</span>
                </h2>
              </div>
              <p className="text-base text-neutral-300 leading-relaxed lg:justify-self-end max-w-xl">
                Our approach combines deep technical expertise, agile delivery, and measurable outcomes — helping clients launch secure, scalable, and user-focused web applications faster.
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
                  Our Technology Stack For Reliable Web Apps
                </h2>
              </div>
              <p className="text-base text-neutral-400 leading-relaxed max-w-xl lg:justify-self-end">
                Each technology in our stack is chosen for reliability, scalability, and long-term value. Our approach ensures faster delivery, easier maintenance, and consistent performance across every deployment.
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
                      {String(activeStack + 1).padStart(2, "0")} · Stack Category
                    </div>
                    <h3 className="font-display text-h2 text-white mb-3">{activeStackData.category}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {activeStackData.techs.length} production-grade technologies used across our web app engagements. All selected for long-term maintainability and operational maturity.
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
              Ready to build your next web application?
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">
              Free 30-minute technical assessment with a senior engineer. No slide decks, no sales reps.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-brand">
                Talk to an engineer
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
