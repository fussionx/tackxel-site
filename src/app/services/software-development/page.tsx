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
import Counter from "@/components/Counter";
import {
  IconCustomSoftware, IconWebApp, IconMobileApp, IconDevOps, IconLegacy, IconQA,
  IconAI, IconAWS, IconBlockchain,
} from "@/components/Icons";

// ===== DATA =====

const services = [
  {
    Icon: IconCustomSoftware,
    name: "Custom Software Development",
    tagline: "Built around your unique workflows.",
    desc: "We build enterprise-grade custom software around your specific business logic, integrations, and compliance requirements — not generic platforms with workarounds.",
    bullets: [
      "Customized applications built around your unique workflows and goals.",
      "Engineered with secure, modular, and scalable architectures.",
      "Designed for measurable ROI through reduced downtime and smarter automation.",
      "Reduces manual effort and improves ROI by up to 40%.",
      "Full ownership of source code, infrastructure, and IP from day one.",
    ],
    metric: { value: "40%", label: "ROI uplift" },
  },
  {
    Icon: IconWebApp,
    name: "Web App Development",
    tagline: "Scalable web platforms that perform.",
    desc: "From SaaS platforms to internal portals, we build responsive web applications that perform under real production load and stay maintainable long after launch.",
    bullets: [
      "Responsive, high-performing web applications across all modern frameworks.",
      "Designed for 99.9% uptime, fast response, and seamless user flow.",
      "Built using React, Angular, Node.js, and .NET technologies.",
      "Scalable solutions that evolve with your business demands.",
      "Server-side rendering, edge deployment, and Core Web Vitals optimized.",
    ],
    metric: { value: "99.9%", label: "Uptime SLA" },
  },
  {
    Icon: IconMobileApp,
    name: "Mobile App Development",
    tagline: "iOS, Android, and cross-platform.",
    desc: "Native and cross-platform mobile apps engineered for App Store and Play Store success — offline-first, battery-efficient, and tuned for App Store reviews.",
    bullets: [
      "Cross-platform and native apps for iOS and Android ecosystems.",
      "Achieved 2M+ cumulative downloads across client apps worldwide.",
      "Optimized for performance, security, and battery efficiency.",
      "Developed with Swift, Kotlin, Flutter, and React Native.",
      "App Store and Play Store launch support, including ASO optimization.",
    ],
    metric: { value: "2M+", label: "App downloads" },
  },
  {
    Icon: IconDevOps,
    name: "Cloud & DevOps Services",
    tagline: "Reliable, automated, multi-region.",
    desc: "Cloud architecture, CI/CD pipelines, and 24/7 production support across AWS, Azure, and GCP — designed for uptime, cost efficiency, and security from the first deploy.",
    bullets: [
      "Cloud architecture design using AWS, Azure, or Google Cloud.",
      "CI/CD automation reduces release cycles by up to 60%.",
      "24/7 monitoring ensures 99.99% uptime and system stability.",
      "Certified DevOps engineers ensure secure, scalable deployments.",
      "Infrastructure as code with Terraform, Pulumi, and GitOps workflows.",
    ],
    metric: { value: "60%", label: "Faster releases" },
  },
  {
    Icon: IconQA,
    name: "QA & Software Testing",
    tagline: "Tested, automated, production-ready.",
    desc: "Test pyramids built into CI from sprint one — automated unit, integration, and end-to-end coverage that catches regressions before they reach production.",
    bullets: [
      "End-to-end testing covering performance, security, and usability.",
      "30% faster issue detection through test automation.",
      "Dedicated QA engineers ensure consistent, error-free releases.",
      "Continuous integration testing improves speed and reliability.",
      "Load testing, accessibility audits, and security penetration testing.",
    ],
    metric: { value: "30%", label: "Faster QA cycles" },
  },
  {
    Icon: IconLegacy,
    name: "Legacy Software Modernization",
    tagline: "Pay down debt without rewrites.",
    desc: "Strangler-fig migrations and incremental modernization that ship value every sprint — without the risk of big-bang rewrites or extended downtime.",
    bullets: [
      "Modernize outdated systems for scalability and better performance.",
      "Upgrade infrastructure while maintaining complete data integrity.",
      "Reduce operating costs by up to 50% post-migration.",
      "Extend software life with cloud-ready and modular refactoring.",
      "Zero-downtime migrations with phased cutover and rollback safety nets.",
    ],
    metric: { value: "50%", label: "Cost reduction" },
  },
];

const process = [
  {
    no: "01",
    title: "Discovery & Architecture",
    duration: "1–2 weeks",
    desc: "Stakeholder workshops, technical discovery, and architecture decision records. We map your domain and write a Solution Design Document before any code is shipped.",
  },
  {
    no: "02",
    title: "Foundations & Setup",
    duration: "1 week",
    desc: "CI/CD pipelines, environments, observability, and security baselines configured from day one — never bolted on later.",
  },
  {
    no: "03",
    title: "Iterative Build",
    duration: "8–16 weeks",
    desc: "Two-week sprints with working software at every demo. Senior engineers own end-to-end features with daily standups in your time zone.",
  },
  {
    no: "04",
    title: "Hardening & Launch",
    duration: "1–2 weeks",
    desc: "Load testing, security review, accessibility audit, and operational readiness. We launch with a war room, runbooks, and a 24/7 on-call rotation.",
  },
  {
    no: "05",
    title: "Operate & Evolve",
    duration: "Ongoing",
    desc: "Continuous delivery, quarterly architecture reviews, and a roadmap that ties engineering investment to measurable business outcomes.",
  },
];

const emergingTech = [
  {
    Icon: IconAI,
    title: "Artificial Intelligence & Machine Learning",
    desc: "We design AI-driven systems for predictive insights, intelligent automation, and personalized user experiences — helping businesses increase accuracy, reduce errors, and make data-driven decisions faster.",
  },
  {
    Icon: IconAWS,
    title: "Cloud-Native & Serverless Architectures",
    desc: "Our engineers develop cloud-native applications that scale on demand, cut infrastructure costs by up to 40%, and deliver faster performance across AWS, Azure, and Google Cloud.",
  },
  {
    Icon: IconBlockchain,
    title: "IoT, Blockchain & Edge Computing",
    desc: "We integrate IoT sensors, blockchain security, and edge computing to enable real-time data flow, stronger traceability, and improved efficiency across connected environments.",
  },
];

const challenges = [
  {
    title: "Slow Product Development Cycles",
    solution: "We run two-week sprints with measurable demos at every iteration. Releases ship 2× faster through automated CI/CD and parallel feature development streams.",
  },
  {
    title: "Poor Cross-Team Collaboration",
    solution: "Embedded delivery leads and shared Linear/Jira boards keep engineering, product, and stakeholders aligned. Async-first updates plus weekly demos eliminate handoff friction.",
  },
  {
    title: "Outdated or Rigid Technology Stacks",
    solution: "Incremental modernization with strangler-fig patterns — we modernize alongside your existing system without a high-risk big-bang rewrite.",
  },
  {
    title: "Missed Deadlines and Budget Overruns",
    solution: "Fixed-scope SOWs with milestone-based invoicing. Senior engineers estimate work directly, and we report burn-down weekly with no surprises.",
  },
  {
    title: "Inconsistent Software Quality",
    solution: "Test pyramids enforced in CI from sprint one. Code coverage gates, automated linting, and senior-only code reviews keep quality flat across the entire team.",
  },
  {
    title: "Security Gaps Across Applications",
    solution: "OWASP-aligned reviews, dependency scanning in CI, and penetration testing before launch. SOC 2 and ISO 27001 practices applied to every engagement.",
  },
  {
    title: "Scaling Without Breaking Performance",
    solution: "Load testing with k6 and Locust against realistic production traffic. Horizontal scaling baked into architecture decisions from the first design review.",
  },
  {
    title: "Unclear Project Requirements",
    solution: "Discovery workshops convert ambiguity into a written Solution Design Document — with risk register, integration map, and milestone plan — before sprint one.",
  },
  {
    title: "Integration Issues with Third-Party Tools",
    solution: "Contract-first API design, schema validation, and integration test suites for every external system. Vendor reliability scored before we commit to integration.",
  },
  {
    title: "Inefficient Post-Launch Support",
    solution: "24/7 on-call rotation for the first six weeks post-launch. Runbooks, observability dashboards, and SLO-based alerting handed off to your team for long-term ownership.",
  },
];

const industries = [
  {
    Icon: Heart,
    name: "Healthcare & HealthTech",
    desc: "HIPAA-compliant patient platforms, EHR integrations, and clinical decision support systems serving millions of members. We work with hospital networks, telehealth providers, and digital health startups.",
    examples: ["Telehealth platforms", "EHR integrations", "Patient engagement apps", "Clinical analytics"],
  },
  {
    Icon: Building2,
    name: "Fintech & Banking",
    desc: "PCI-compliant payment systems, lending platforms, and real-time trading software. From challenger banks to credit unions, we build the regulated financial infrastructure that handles billions in transactions.",
    examples: ["Payment platforms", "Lending systems", "Trading platforms", "KYC/AML automation"],
  },
  {
    Icon: ShoppingBag,
    name: "eCommerce & Retail",
    desc: "Headless commerce, inventory orchestration, and AI-powered demand forecasting at enterprise scale. We've shipped omnichannel platforms processing millions of orders annually.",
    examples: ["Custom storefronts", "Inventory systems", "Loyalty programs", "Recommendation engines"],
  },
  {
    Icon: GraduationCap,
    name: "Education & eLearning",
    desc: "Learning management platforms, virtual classrooms, and AI-driven personalized education. Built for schools, universities, and corporate training programs serving millions of learners.",
    examples: ["LMS platforms", "Virtual classrooms", "Certification tracking", "Adaptive learning AI"],
  },
  {
    Icon: Truck,
    name: "Logistics & Supply Chain",
    desc: "Fleet tracking, route optimization, warehouse management, and supply chain visibility. Real-time data pipelines integrating IoT, ERP, and third-party logistics providers.",
    examples: ["Fleet management", "Route optimization", "Warehouse systems", "Supply chain visibility"],
  },
  {
    Icon: HomeIcon,
    name: "Real Estate & PropTech",
    desc: "Listing platforms, property management software, and IoT-enabled smart building systems. CRM integrations and tenant experience platforms for residential and commercial portfolios.",
    examples: ["Listing platforms", "Property management", "Smart buildings", "Tenant portals"],
  },
];

const advantages = [
  { no: "01", title: "Deep Domain Expertise",          desc: "10+ years of cross-industry experience helping enterprises solve real challenges through scalable and efficient software systems." },
  { no: "02", title: "Transparent Collaboration",      desc: "Agile workflows, clear reporting, and sprint-based visibility keep clients involved from day one to delivery." },
  { no: "03", title: "End-to-End Ownership",           desc: "From discovery to post-launch support, we manage the full lifecycle — ensuring accountability and measurable business results." },
  { no: "04", title: "Data-Driven Decision Making",    desc: "Every project roadmap is backed by analytics, ensuring smarter product decisions and improved time-to-market outcomes." },
  { no: "05", title: "Engineering Excellence",         desc: "Certified developers and solution architects design systems that meet performance benchmarks and reliability standards." },
  { no: "06", title: "Innovation Backed by Research",  desc: "We adopt AI, cloud, and automation strategically — not trend-driven — delivering 30% faster releases with lower maintenance overhead." },
];

const techStackTabs = [
  {
    category: "Frontend",
    techs: ["React.js", "Angular", "Vue.js", "Next.js", "HTML5", "CSS3 / SASS", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Storybook"],
  },
  {
    category: "Backend",
    techs: ["Node.js", "Python", "Ruby on Rails", "Go", "Java (Spring Boot)", ".NET Core", "Express", "GraphQL", "FastAPI", "Elixir / Phoenix"],
  },
  {
    category: "Mobile",
    techs: ["Swift", "Kotlin", "React Native", "Flutter", "Objective-C", "Ionic", "Native iOS", "Native Android", "Capacitor"],
  },
  {
    category: "Databases",
    techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB", "Elasticsearch", "Firebase", "ClickHouse", "Cassandra", "Snowflake"],
  },
  {
    category: "Cloud & DevOps",
    techs: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "CircleCI", "Datadog"],
  },
  {
    category: "AI / ML",
    techs: ["TensorFlow", "PyTorch", "OpenAI APIs", "LangChain", "Hugging Face", "Pinecone", "Anthropic Claude", "LlamaIndex", "scikit-learn"],
  },
];

const faqs = [
  {
    q: "How quickly can you start a software development engagement?",
    a: "Most engagements begin within two weeks. We run a brief technical discovery, agree on team composition and scope, sign the MSA and SOW, and onboard your dedicated team in your environments. Urgent needs can compress this to one week with the right preparation on both sides.",
  },
  {
    q: "Do you work fixed-price or time and materials?",
    a: "Both. For well-defined scope and regulatory deadlines, we deliver fixed-price with milestone-based invoicing. For long-running product engineering, dedicated teams on a monthly retainer give you flexibility to evolve the roadmap. We'll recommend the right model after discovery.",
  },
  {
    q: "Who owns the code, IP, and infrastructure?",
    a: "You do. From the first commit. All code is written into your repositories under your accounts, hosted in your cloud, and licensed to you. We deliberately avoid any lock-in patterns — when our engagement ends, your team owns everything with zero migration cost.",
  },
  {
    q: "Can you integrate with our existing engineering team?",
    a: "Yes. Our dedicated teams integrate via your tools (Linear, Jira, GitHub, Slack), your standups, your code review process, and your release cadence. Your engineering leadership stays in command — we extend your team, not replace it.",
  },
  {
    q: "What does the engagement cost typically look like?",
    a: "Dedicated teams start at around USD 25K per month for a small squad and scale up based on team size and seniority mix. Fixed-scope MVPs typically range from USD 60K to USD 250K depending on complexity. We provide a written estimate after a free 30-minute technical assessment.",
  },
  {
    q: "Do you sign NDAs before we share details?",
    a: "Yes, always. We sign mutual NDAs before any commercially sensitive discussion. Our standard NDA is available on request — most clients sign ours within a day, and we're happy to use yours if you have a preferred template.",
  },
];

const awards = [
  { platform: "Top Rated",     title: "ITreviewWorld",             year: "2024" },
  { platform: "GoodFirms",     title: "Top Software Company",      year: "2024" },
  { platform: "AWS",           title: "SysOps Administrator",      year: "2024" },
  { platform: "Firmstalk",     title: "Top Custom Software Dev",   year: "2024" },
  { platform: "TopDevelopers", title: "Recognized Company",        year: "2024" },
  { platform: "GoodFirms",     title: "Best Company to Work With", year: "2024" },
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

export default function SoftwareDevelopmentPage() {
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
              <span className="text-brand-300">Software Development</span>
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
                  Build · Automate · Scale
                </div>
              </Reveal>

              <Reveal delay={140}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">
                  Custom Software Development Services.
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">
                  Our software development services combine precision engineering, agile execution, and measurable outcomes to accelerate innovation. Our solutions help you achieve business outcomes 30% quicker while ensuring 99.9% uptime post-deployment.
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
                    <div className="text-xs text-neutral-400">Software Development Company on Clutch</div>
                  </div>
                </div>

                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-white">U.S. Time Zone</div>
                    <div className="text-xs text-neutral-400">Senior engineers available 9am–5pm EST</div>
                  </div>
                </div>

                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-white">Certified</div>
                    <div className="text-xs text-neutral-400">Full-Stack Engineers · SOC 2 · ISO 27001</div>
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
                <h3 className="font-display text-h3 text-neutral-950 mb-2">Agile Development Expertise</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  We deliver projects 25% faster through agile frameworks — ensuring flexibility, transparency, and consistent value throughout every development cycle.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-brand-50 border border-brand-100 rounded-lg p-7 h-full card-lift">
                <div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-200 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="font-display text-h3 text-neutral-950 mb-2">Results-Oriented Engineering</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Every project is guided by measurable KPIs — reducing costs by 30%, boosting efficiency, and ensuring long-term scalability for your business.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-white border border-neutral-200 rounded-lg p-7 h-full">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-600 font-semibold mb-2">
                  Your Trusted One-Stop
                </div>
                <h3 className="font-display text-h3 text-neutral-950 mb-5">
                  Software Development <span className="text-brand-600">Partner</span>
                </h3>

                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                  <div className="bg-white p-3.5">
                    <div className="font-display text-xl font-bold text-neutral-950"><Counter to={10} suffix="+" /></div>
                    <div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Years Delivering Software Excellence</div>
                  </div>
                  <div className="bg-white p-3.5">
                    <div className="font-display text-xl font-bold text-neutral-950">Top <Counter to={1} suffix="%" /></div>
                    <div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Vetted Developers &amp; Engineers</div>
                  </div>
                  <div className="bg-white p-3.5">
                    <div className="font-display text-xl font-bold text-neutral-950"><Counter to={200} suffix="+" /></div>
                    <div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Successful Projects Delivered</div>
                  </div>
                  <div className="bg-white p-3.5">
                    <div className="font-display text-xl font-bold text-neutral-950"><Counter to={100} suffix="%" /></div>
                    <div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Data Privacy &amp; NDA Compliance</div>
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

      {/* ========== SERVICES — INTERACTIVE TABS + GRID ========== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">
                Our Software Development Services
              </div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">
                Smart, Reliable, and <span className="text-brand-600">Impact-Driven Development</span>
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">
                Click any service below to explore the engineering depth, technology stack, and measurable outcomes we deliver.
              </p>
            </div>
          </Reveal>

          {/* Interactive Tabs */}
          <Reveal>
            <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
              {/* Tab row */}
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

              {/* Tab content */}
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

          {/* Grid summary below tabs */}
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
                Need Reliable Developers for Your Next Project?
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
                  How we ship software, <span className="text-brand-600">every engagement</span>
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-xl">
                A repeatable, transparent delivery process refined across 200+ engagements. You see working software in week three — never a slide deck pretending to be progress.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Connecting line */}
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
                  Engineering the Future With <span className="text-brand-300">Emerging Technologies</span>
                </h2>
                <p className="text-base text-neutral-300 leading-relaxed mb-8 max-w-lg">
                  We build software powered by intelligent technologies, designed for automation, data insight, and sustainable growth.
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
                  Want to Modernize With Intelligent Solutions?
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>

            <Reveal delay={300} direction="left">
              <div className="relative bg-neutral-900/40 backdrop-blur border border-neutral-800 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <svg viewBox="0 0 320 320" className="w-full h-full">
                  <defs>
                    <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#5278C2" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#3159A5" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="160" cy="160" r="60" fill="url(#coreGlow)" />
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
                  <text x="160" y="166" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" fontFamily="Geist">AI</text>
                  {[
                    { label: "CLOUD", x: 220, y: 60 },
                    { label: "IOT",   x: 60,  y: 60 },
                    { label: "ML",    x: 60,  y: 250 },
                    { label: "EDGE",  x: 220, y: 250 },
                    { label: "DATA",  x: 270, y: 155 },
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
                  Top Software Development Challenges Slowing Projects Down
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">
                Click any challenge to reveal exactly how we solve it. Patterns we&apos;ve seen — and fixed — across 200+ engagements.
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
                    Teams lose momentum from long release cycles, junior outsourcing, and architecture decisions that don&apos;t hold up under production load.
                  </p>
                </div>

                <div className="bg-white border border-neutral-200 rounded-lg p-7">
                  <div className="text-xs text-brand-600 uppercase tracking-wider font-semibold mb-3">
                    Our Approach
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                    Senior-only engineering pool, outcome-based delivery, and contractual SLAs tied to the metrics your CFO actually tracks.
                  </p>

                  <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                    <div className="bg-white p-5">
                      <div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3">
                        <Zap className="w-4 h-4 text-brand-600" />
                      </div>
                      <div className="font-display text-3xl font-bold text-neutral-950 tracking-display">2×</div>
                      <div className="text-xs text-neutral-500 mt-0.5">Faster Product Delivery</div>
                    </div>
                    <div className="bg-white p-5">
                      <div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3">
                        <TrendingUp className="w-4 h-4 text-brand-600" />
                      </div>
                      <div className="font-display text-3xl font-bold text-neutral-950 tracking-display">35%</div>
                      <div className="text-xs text-neutral-500 mt-0.5">Fewer Development Bottlenecks</div>
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
                    Fix What Slows Your Software Projects Down
                  </h2>
                  <p className="text-base text-brand-50 leading-relaxed max-w-xl">
                    From development delays to deployment issues, our team helps you launch faster and reduce operational costs through proven engineering practices.
                  </p>
                </div>
                <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2 w-fit lg:justify-self-end">
                  Want Faster Project Delivery?
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
                  Custom Software Solutions <span className="text-brand-600">Built For Every Industry</span>
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">
                We design, build, and maintain scalable software solutions for multiple industries — aligning with global standards, industry regulations, and performance benchmarks to deliver measurable business outcomes.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-10">
              {/* Tab list */}
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

              {/* Tab content */}
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
                  Need Software Experts in Your Domain?
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
                  Why Do Leading Brands <span className="text-brand-300">Trust Tackxel</span> for Software Development?
                </h2>
              </div>
              <p className="text-base text-neutral-300 leading-relaxed lg:justify-self-end max-w-xl">
                We combine proven expertise, transparent delivery, and measurable outcomes — helping startups and enterprises build reliable, scalable software that drives growth.
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
                  Our Technology Stack for Building Scalable Software
                </h2>
              </div>
              <p className="text-base text-neutral-400 leading-relaxed max-w-xl lg:justify-self-end">
                Click a category to explore the frameworks, languages, and platforms we ship in production every day.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
              {/* Tab row */}
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

              {/* Tab content */}
              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
                  <div>
                    <div className="text-eyebrow text-brand-300 uppercase mb-3 font-semibold tracking-widest">
                      {String(activeStack + 1).padStart(2, "0")} · Stack Category
                    </div>
                    <h3 className="font-display text-h2 text-white mb-3">{activeStackData.category}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {activeStackData.techs.length} production-grade technologies used across our engagements. All selected for long-term maintainability and operational maturity.
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
              Ready to build your next software project?
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
