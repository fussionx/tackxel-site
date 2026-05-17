"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Award, Clock, ShieldCheck,
  TrendingUp, Users, Zap,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";
import {
  IconCustomSoftware, IconWebApp, IconMobileApp, IconDevOps, IconLegacy, IconQA,
  IconProductStrategy, IconDesign, IconMVP, IconAdvisory,
  IconAIConsulting, IconAWS, IconIntegration, IconAnalytics, IconAI, IconGenAI,
  IconAgent, IconDataScience, IconIoT, IconBlockchain,
} from "@/components/Icons";

// === DATA — ORIGINAL TACKXEL CONTENT (5 PRACTICES) ===

const services = [
  {
    Icon: IconCustomSoftware,
    name: "Engineering & Development",
    tagline: "Production software, engineered for scale.",
    bullets: [
      "End-to-end product engineering with senior teams from day one — no juniors learning on your project.",
      "Custom software, web platforms, and mobile apps built with React, Rails, Django, Phoenix, and modern stacks.",
      "Backend systems and APIs in Go, Python, Node.js with rigorous testing standards and operational maturity.",
      "Frontend engineering with TypeScript, React, and design systems built for long-term maintainability.",
    ],
  },
  {
    Icon: IconProductStrategy,
    name: "Product Development",
    tagline: "Strategy, design, and rapid product validation.",
    bullets: [
      "Discovery workshops and two-week scoping engagements to validate what to build before building it.",
      "Product strategy, market analysis, OKR alignment, and roadmapping with executive teams.",
      "UX research, wireframes, high-fidelity prototypes, and component library design systems.",
      "Production-ready MVP delivery in 8 to 12 weeks — built for users, not investor decks.",
    ],
  },
  {
    Icon: IconAWS,
    name: "Cloud & Infrastructure",
    tagline: "Reliable, secure, multi-region by design.",
    bullets: [
      "Cloud migration from lift-and-shift to refactor-and-optimize across AWS, Azure, and GCP.",
      "Platform engineering with Kubernetes, Terraform, and GitOps — infrastructure as code from day one.",
      "DevOps and CI/CD pipeline design, deployment automation, and 99.99% uptime SLAs.",
      "AWS Well-Architected reviews, FinOps optimization, and reserved capacity planning.",
    ],
  },
  {
    Icon: IconAI,
    name: "Artificial Intelligence",
    tagline: "Applied AI with measurable business outcomes.",
    bullets: [
      "AI strategy audits, use-case identification, and ROI modeling — we ship to production, not science projects.",
      "Machine learning systems for forecasting, classification, NLP, and decision intelligence.",
      "Generative AI applications with RAG architectures, fine-tuning, and evaluation pipelines.",
      "Agentic AI systems and conversational copilots tied directly to business KPIs.",
    ],
  },
  {
    Icon: IconLegacy,
    name: "Modernization & Quality",
    tagline: "Protect the roadmap. Pay down technical debt.",
    bullets: [
      "Legacy modernization, monolith decomposition, and replatforming — the work that lets your team move faster.",
      "Digital transformation through process automation and enterprise system integration.",
      "Quality engineering with test automation, performance testing, and chaos engineering.",
      "Security and compliance audits for SOC 2, ISO 27001, HIPAA, and penetration testing.",
    ],
  },
  {
    Icon: IconQA,
    name: "Engagement Models",
    tagline: "Pick what fits — dedicated, project, or hybrid.",
    bullets: [
      "Dedicated engineering teams that integrate with your existing product organization for 6+ months.",
      "Fixed-scope project delivery with defined milestones, SLAs, and contractual outcomes.",
      "Staff augmentation with senior engineers in your US time-zone for short-term capacity.",
      "Discovery and advisory engagements for strategic technical decisions and architecture reviews.",
    ],
  },
];

const emergingTech = [
  {
    Icon: IconAI,
    title: "Artificial Intelligence & Machine Learning",
    desc: "We design AI systems that ship to production — RAG architectures, fine-tuned models, and autonomous agents tied to measurable business KPIs, not benchmark scores.",
  },
  {
    Icon: IconAWS,
    title: "Cloud-Native & Serverless Architectures",
    desc: "Multi-region, auto-scaling cloud platforms on AWS, Azure, and GCP — engineered to cut infrastructure costs while maintaining 99.99% uptime under real production load.",
  },
  {
    Icon: IconBlockchain,
    title: "IoT, Blockchain & Edge Computing",
    desc: "Embedded firmware, telemetry pipelines, smart contracts, and edge compute — integrating connected devices with cloud platforms for real-time business intelligence.",
  },
];

const problems = [
  "Senior engineers leaving mid-project and breaking delivery momentum",
  "Junior outsourcing teams that need constant supervision and rework",
  "Architecture decisions that lock you into vendor or platform debt",
  "Production incidents nobody owns after the project handover",
  "Security and compliance gaps surfacing during enterprise audits",
  "Roadmaps that miss quarterly business goals by 2 to 3 months",
  "Test coverage that drops below 40% after first release",
  "Cloud bills that grow 3× the rate of revenue with no FinOps oversight",
  "Legacy monoliths blocking new feature shipping for entire quarters",
  "AI proof-of-concepts that never make it to production",
];

const industries = [
  { name: "Financial Services & Fintech", desc: "Real-time lending, payments, trading platforms, and regulatory-compliant systems for banks, lenders, and fintechs." },
  { name: "Healthcare & HealthTech", desc: "HIPAA-compliant patient platforms, EHR integrations, and clinical decision support systems serving millions of members." },
  { name: "Retail & eCommerce", desc: "Custom storefronts, inventory orchestration, AI demand forecasting, and omnichannel commerce at enterprise scale." },
  { name: "SaaS & Technology", desc: "Multi-tenant platforms, API products, developer tools, and B2B SaaS infrastructure for venture-backed scaleups." },
  { name: "Logistics & Supply Chain", desc: "Fleet tracking, route optimization, warehouse management, and supply chain visibility platforms." },
  { name: "Real Estate & PropTech", desc: "Listing platforms, property management software, CRM integrations, and IoT-enabled smart building systems." },
];

const whyChoose = [
  {
    no: "01",
    title: "Senior-Only Engineering Pool",
    desc: "Every Tackxel engineer has 8+ years of production experience. No juniors learning on your project, no graduate handoffs.",
  },
  {
    no: "02",
    title: "Outcome-Based Delivery",
    desc: "We measure success in shipped features, reduced incidents, and business KPIs — not billable hours or story points.",
  },
  {
    no: "03",
    title: "Operational Maturity",
    desc: "SOC 2 Type II, ISO 27001, and HIPAA certified. We treat your production systems with the same rigor as our own.",
  },
  {
    no: "04",
    title: "Long-Term Engineering Partner",
    desc: "Average engagement is 18 months. We're built for compounding outcomes, not transactional vendor relationships.",
  },
];

const techStack = [
  { category: "Frontend Development", techs: ["React.js", "Next.js", "TypeScript", "Vue.js", "Angular", "Tailwind CSS", "HTML5 / CSS3", "Design Systems"] },
  { category: "Backend Development", techs: ["Node.js", "Python", "Ruby on Rails", "Go", "Java (Spring)", ".NET Core", "Elixir / Phoenix", "GraphQL"] },
  { category: "Mobile Development", techs: ["Swift", "Kotlin", "React Native", "Flutter", "Objective-C", "Ionic", "Capacitor", "Native iOS / Android"] },
  { category: "Cloud & DevOps", techs: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Datadog"] },
  { category: "AI & Data", techs: ["TensorFlow", "PyTorch", "OpenAI APIs", "LangChain", "Snowflake", "dbt", "Apache Airflow", "Postgres / pgvector"] },
  { category: "Databases", techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB", "Elasticsearch", "Firebase", "Supabase"] },
];

const awards = [
  { platform: "Clutch", title: "Top Global Engineering Partner", year: "2025" },
  { platform: "Goodfirms", title: "Top Custom Software Development", year: "2025" },
  { platform: "DesignRush", title: "Top App Design Company", year: "2025" },
  { platform: "TopDevelopers", title: "Top Ruby on Rails Engineers", year: "2025" },
  { platform: "Techreviewer", title: "Top Cloud Consulting Firm", year: "2025" },
  { platform: "Firmstalk", title: "Top Mobile Engineering Team", year: "2025" },
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

export default function ServicesPage() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative hero-glow text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />

        <Parallax speed={0.15} className="absolute top-20 right-20 hidden lg:block pointer-events-none">
          <div className="w-72 h-72 rounded-full bg-brand-500/10 blur-3xl float-slow" />
        </Parallax>
        <Parallax speed={-0.1} className="absolute bottom-10 left-20 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-400/5 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">

            {/* LEFT — text + form */}
            <div>
              <Reveal>
                <span className="badge-dark mb-8">
                  <span className="dot-pulse" />
                  Engineering services since 2012
                </span>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">
                  Every engineering capability your software team needs.
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">
                  Five integrated practices — engineering, product, cloud, AI, and modernization — coordinated by a single delivery lead. No vendor handoffs. No misaligned incentives. No surprises.
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
                    placeholder="Enter your work email"
                    className="flex-1 px-5 py-3 rounded-md border border-neutral-700 bg-neutral-900/60 text-white text-sm placeholder:text-neutral-500 focus:border-brand-500 focus:bg-neutral-900 outline-none transition-all"
                  />
                  <button type="submit" className="btn-brand whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    Schedule a call
                  </button>
                </form>
              </Reveal>

              <Reveal delay={400}>
                <div className="mt-5 flex items-center gap-2 text-sm text-neutral-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-300" />
                  Free 30-minute technical assessment with a senior engineer. NDA on request.
                </div>
              </Reveal>
            </div>

            {/* RIGHT — trust badges stack */}
            <Reveal delay={300} direction="left">
              <div className="space-y-3">
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold text-white">Top 1%</div>
                    <div className="text-xs text-neutral-400 leading-tight">Senior engineering<br />talent worldwide</div>
                  </div>
                </div>

                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-white">U.S. Time Zone</div>
                    <div className="text-xs text-neutral-400">Senior engineers available 9am–5pm EST</div>
                  </div>
                </div>

                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-white">Certified</div>
                    <div className="text-xs text-neutral-400">SOC 2 Type II · ISO 27001 · HIPAA</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Stat row */}
          <Reveal delay={500}>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800 rounded-lg overflow-hidden">
              <div className="bg-neutral-950 px-6 py-5">
                <div className="flex items-center gap-2 mb-2"><TrendingUp className="w-3.5 h-3.5 text-brand-300" /><span className="text-xs text-neutral-500 font-mono uppercase tracking-wider">Engineering</span></div>
                <div className="font-display text-2xl font-bold text-white mb-1"><Counter to={12} suffix="+" /></div>
                <div className="text-xs text-neutral-500">Years shipping production software</div>
              </div>
              <div className="bg-neutral-950 px-6 py-5">
                <div className="flex items-center gap-2 mb-2"><Award className="w-3.5 h-3.5 text-brand-300" /><span className="text-xs text-neutral-500 font-mono uppercase tracking-wider">Shipped</span></div>
                <div className="font-display text-2xl font-bold text-white mb-1"><Counter to={270} suffix="+" /></div>
                <div className="text-xs text-neutral-500">Custom software projects delivered</div>
              </div>
              <div className="bg-neutral-950 px-6 py-5">
                <div className="flex items-center gap-2 mb-2"><Users className="w-3.5 h-3.5 text-brand-300" /><span className="text-xs text-neutral-500 font-mono uppercase tracking-wider">Team</span></div>
                <div className="font-display text-2xl font-bold text-white mb-1"><Counter to={130} suffix="+" /></div>
                <div className="text-xs text-neutral-500">Senior full-time engineers</div>
              </div>
              <div className="bg-neutral-950 px-6 py-5">
                <div className="flex items-center gap-2 mb-2"><ShieldCheck className="w-3.5 h-3.5 text-brand-300" /><span className="text-xs text-neutral-500 font-mono uppercase tracking-wider">SLA</span></div>
                <div className="font-display text-2xl font-bold text-white mb-1">99.99%</div>
                <div className="text-xs text-neutral-500">Production uptime guarantee</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== AWARDS STRIP ========== */}
      <section className="bg-neutral-950 border-y border-neutral-800 overflow-hidden py-12 lg:py-14 relative">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-8">
              <div className="text-eyebrow text-brand-300 uppercase mb-2 font-semibold tracking-widest">
                Recognized Industry Leader
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-neutral-800 border border-neutral-800 rounded-xl overflow-hidden">
            {awards.map((a, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-neutral-950 p-5 hover:bg-neutral-900/60 transition-colors group h-full flex flex-col items-center text-center">
                  <LaurelIcon className="w-12 h-14 mb-3 text-brand-300 group-hover:scale-105 transition-transform" />
                  <div className="text-xs font-bold text-brand-300 uppercase tracking-wider mb-1">{a.platform}</div>
                  <div className="text-[11px] text-neutral-400 leading-snug mb-1">{a.title}</div>
                  <div className="text-[10px] text-neutral-600 font-mono">{a.year}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES GRID — 6 PRACTICES ========== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">
                Engineering Capabilities
              </div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">
                Comprehensive engineering services, end to end
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <article className="bg-white p-7 hover:bg-neutral-50 transition-colors h-full">
                  <div className="icon-wrap mb-5">
                    <s.Icon className="w-14 h-14" />
                  </div>
                  <h3 className="text-h3 text-neutral-950 mb-2 leading-snug">{s.name}</h3>
                  <p className="text-sm font-semibold text-neutral-700 mb-4">{s.tagline}</p>
                  <ul className="space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-brand-500 flex-shrink-0 mt-1" />
                        <span className="text-sm text-neutral-600 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-10 flex justify-center">
              <Link href="/contact" className="btn-brand">
                Talk to an engineer about your stack
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== EMERGING TECH ========== */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-500/10 blur-3xl" />
        </Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <div className="text-eyebrow text-brand-300 uppercase mb-4">Emerging technologies</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4">
                  Production-grade engineering on the new technology frontier
                </h2>
                <p className="text-base text-neutral-400 leading-relaxed mb-8">
                  We help clients adopt AI, cloud-native, and edge technologies without falling into the science-project trap. Every engagement ties to a measurable business outcome.
                </p>
              </Reveal>

              <div className="space-y-4">
                {emergingTech.map((t, i) => (
                  <Reveal key={t.title} delay={i * 100}>
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 card-lift">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                          <t.Icon className="w-7 h-7" />
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
                  Discuss your AI or cloud roadmap
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>

            {/* RIGHT — tech orbital illustration */}
            <Reveal delay={300} direction="left">
              <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  <circle cx="150" cy="150" r="120" fill="none" stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1.5" />
                  <circle cx="150" cy="150" r="90" fill="none" stroke="#3159A5" strokeOpacity="0.3" strokeWidth="1.5" />
                  <circle cx="150" cy="150" r="60" fill="none" stroke="#3159A5" strokeOpacity="0.4" strokeWidth="1.5" />
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                    const rad = (deg * Math.PI) / 180;
                    const x = 150 + Math.cos(rad) * 120;
                    const y = 150 + Math.sin(rad) * 120;
                    return (
                      <g key={i}>
                        <line x1="150" y1="150" x2={x} y2={y} stroke="#3159A5" strokeOpacity="0.3" strokeWidth="1" />
                        <circle cx={x} cy={y} r="8" fill="#5278C2" />
                      </g>
                    );
                  })}
                  <circle cx="150" cy="150" r="22" fill="#3159A5" />
                  <text x="150" y="156" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" fontFamily="Geist">AI</text>
                  <rect x="200" y="60" width="50" height="20" rx="4" fill="#1D376A" stroke="#3159A5" strokeOpacity="0.4" />
                  <text x="225" y="74" textAnchor="middle" fontSize="9" fontWeight="700" fill="#7E9DD7" fontFamily="Geist">CLOUD</text>
                  <rect x="50" y="60" width="50" height="20" rx="4" fill="#1D376A" stroke="#3159A5" strokeOpacity="0.4" />
                  <text x="75" y="74" textAnchor="middle" fontSize="9" fontWeight="700" fill="#7E9DD7" fontFamily="Geist">IOT</text>
                  <rect x="50" y="230" width="50" height="20" rx="4" fill="#1D376A" stroke="#3159A5" strokeOpacity="0.4" />
                  <text x="75" y="244" textAnchor="middle" fontSize="9" fontWeight="700" fill="#7E9DD7" fontFamily="Geist">ML</text>
                  <rect x="200" y="230" width="50" height="20" rx="4" fill="#1D376A" stroke="#3159A5" strokeOpacity="0.4" />
                  <text x="225" y="244" textAnchor="middle" fontSize="9" fontWeight="700" fill="#7E9DD7" fontFamily="Geist">EDGE</text>
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== PROBLEMS / SOLUTIONS ========== */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">What we fix</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-3">
                The engineering problems leadership teams bring us
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed">
                Patterns we&apos;ve seen across 270+ engagements, and how we resolve them.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal>
              <ol className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100">
                {problems.map((p, i) => (
                  <li key={p} className="flex items-start gap-4 px-6 py-3.5 hover:bg-neutral-50 transition-colors">
                    <span className="font-mono text-xs font-semibold text-brand-600 w-7 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-neutral-800 font-medium">{p}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={200} direction="left">
              <div className="lg:sticky lg:top-28 lg:self-start space-y-4">
                <div className="bg-neutral-950 text-white rounded-lg p-7">
                  <div className="text-xs text-brand-300 uppercase tracking-wider font-semibold mb-3">
                    The pattern
                  </div>
                  <p className="text-base text-neutral-200 leading-relaxed">
                    Teams lose momentum from misaligned incentives, junior outsourcing, and architecture decisions that don&apos;t hold up under production load.
                  </p>
                </div>

                <div className="bg-white border border-neutral-200 rounded-lg p-7">
                  <div className="text-xs text-brand-600 uppercase tracking-wider font-semibold mb-3">
                    Our approach
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                    Senior-only engineering pool, outcome-based delivery, and contractual SLAs tied to the metrics your CFO actually tracks.
                  </p>

                  <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                    <div className="bg-white p-5">
                      <div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3">
                        <Zap className="w-4 h-4 text-brand-600" />
                      </div>
                      <div className="font-display text-3xl font-bold text-neutral-950 tracking-display">4.3×</div>
                      <div className="text-xs text-neutral-500 mt-0.5">Deployment frequency uplift</div>
                    </div>
                    <div className="bg-white p-5">
                      <div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3">
                        <TrendingUp className="w-4 h-4 text-brand-600" />
                      </div>
                      <div className="font-display text-3xl font-bold text-neutral-950 tracking-display">22%</div>
                      <div className="text-xs text-neutral-500 mt-0.5">Average incident reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== UNBLOCK CTA banner ========== */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="bg-gradient-to-br from-neutral-50 to-brand-50 border border-neutral-200 rounded-lg p-10 lg:p-12 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
              <div>
                <h2 className="font-display text-h2 text-neutral-950 mb-3">
                  Unblock your software roadmap
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Free 30-minute consultation with a senior engineer. Walk away with a written technical assessment and delivery estimate — no pitch, no obligation.
                </p>
              </div>
              <Link href="/contact" className="btn-brand w-full lg:w-fit lg:justify-self-end justify-center">
                Schedule consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== INDUSTRIES — tile collage + list ========== */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center mb-14">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Industries</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Software engineered for regulated and high-scale industries
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">
                We build for industries with stringent compliance requirements, demanding reliability standards, and complex domain logic — from fintech to healthcare to enterprise SaaS.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            {/* LEFT — 2x2 tile collage */}
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                {/* Tile 1 - Fintech */}
                <div className="aspect-square rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 p-6 flex items-center justify-center border border-brand-100">
                  <svg viewBox="0 0 100 100" className="w-2/3 h-2/3">
                    <rect x="20" y="35" width="60" height="40" rx="4" fill="#3159A5" />
                    <rect x="20" y="35" width="60" height="10" fill="#264784" />
                    <circle cx="35" cy="55" r="4" fill="#fff" />
                    <rect x="45" y="52" width="25" height="6" rx="2" fill="#fff" opacity="0.7" />
                  </svg>
                </div>
                {/* Tile 2 - Healthcare */}
                <div className="aspect-square rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 p-6 flex items-center justify-center mt-8 border border-neutral-200">
                  <svg viewBox="0 0 100 100" className="w-2/3 h-2/3">
                    <circle cx="50" cy="50" r="40" fill="#3159A5" opacity="0.15" />
                    <path d="M40,30 H60 V40 H70 V60 H60 V70 H40 V60 H30 V40 H40 Z" fill="#3159A5" />
                  </svg>
                </div>
                {/* Tile 3 - SaaS */}
                <div className="aspect-square rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 p-6 flex items-center justify-center border border-neutral-200">
                  <svg viewBox="0 0 100 100" className="w-2/3 h-2/3">
                    <rect x="20" y="25" width="60" height="40" rx="3" fill="#3159A5" />
                    <rect x="25" y="30" width="50" height="5" rx="1" fill="#5278C2" />
                    <rect x="25" y="40" width="35" height="3" rx="1" fill="#fff" opacity="0.7" />
                    <rect x="25" y="46" width="50" height="3" rx="1" fill="#fff" opacity="0.5" />
                    <rect x="25" y="52" width="30" height="3" rx="1" fill="#fff" opacity="0.5" />
                    <rect x="40" y="68" width="20" height="6" rx="1" fill="#5278C2" />
                  </svg>
                </div>
                {/* Tile 4 - Logistics */}
                <div className="aspect-square rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 p-6 flex items-center justify-center mt-8 border border-brand-100">
                  <svg viewBox="0 0 100 100" className="w-2/3 h-2/3">
                    <rect x="20" y="40" width="40" height="25" fill="#3159A5" />
                    <rect x="60" y="48" width="20" height="17" fill="#5278C2" />
                    <circle cx="32" cy="70" r="6" fill="#162954" />
                    <circle cx="70" cy="70" r="6" fill="#162954" />
                  </svg>
                </div>
              </div>
            </Reveal>

            {/* RIGHT — industry list */}
            <Reveal delay={200} direction="left">
              <div>
                <ul className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100">
                  {industries.map((ind, i) => (
                    <li key={ind.name} className="px-6 py-4 hover:bg-neutral-50 transition-colors group">
                      <div className="flex items-start gap-4">
                        <span className="w-8 h-8 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold font-mono text-brand-700">{String(i + 1).padStart(2, "0")}</span>
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-neutral-900 mb-1">{ind.name}</div>
                          <div className="text-xs text-neutral-500 leading-relaxed">{ind.desc}</div>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-brand-600 transition-colors mt-1" />
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-brand mt-6">
                  Discuss your industry-specific needs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== WHY TACKXEL ========== */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <Parallax speed={0.15} className="absolute bottom-0 left-0 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-500/10 blur-3xl" />
        </Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-300 uppercase mb-4">Why Tackxel</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-white">
                  Why senior engineering teams choose us
                </h2>
              </div>
              <p className="text-base text-neutral-400 leading-relaxed max-w-xl lg:justify-self-end">
                Proven expertise, transparent delivery, and contractual SLAs — backed by a senior engineering team that has been shipping production software since 2012.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {whyChoose.map((w, i) => (
              <Reveal key={w.no} delay={i * 100}>
                <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 card-lift h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-mono text-sm font-bold text-brand-300">{w.no}</span>
                    </div>
                    <div>
                      <h3 className="text-h3 text-white mb-3">{w.title}</h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== RECOGNIZED BY ========== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">
                Recognition
              </div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                Recognized by the industry&apos;s most trusted platforms
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

      {/* ========== TECH STACK ========== */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-500/10 blur-3xl" />
        </Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-300 uppercase mb-4">Tech stack</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-white">
                  The technologies we ship in production
                </h2>
              </div>
              <p className="text-base text-neutral-400 leading-relaxed max-w-xl lg:justify-self-end">
                A pragmatic, opinionated stack — chosen for long-term maintainability, operational maturity, and the engineering depth our team brings to every engagement.
              </p>
            </div>
          </Reveal>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
            {techStack.map((row, i) => (
              <Reveal key={row.category} delay={i * 40}>
                <div className={`grid lg:grid-cols-[1fr_3fr] gap-6 px-6 lg:px-8 py-6 ${i < techStack.length - 1 ? "border-b border-neutral-800" : ""} hover:bg-neutral-800/30 transition-colors`}>
                  <div className="flex items-center">
                    <div>
                      <div className="text-xs font-mono text-brand-300 mb-1 font-semibold">{String(i + 1).padStart(2, "0")}</div>
                      <div className="text-base font-semibold text-white">{row.category}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {row.techs.map((t) => (
                      <span key={t} className="inline-flex items-center px-3 py-1.5 rounded-md border border-neutral-700 bg-neutral-950 text-sm text-neutral-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-20 bg-neutral-950 text-white border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-eyebrow text-brand-300 uppercase mb-4">Get in touch</div>
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">
              Ready to build something exceptional?
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">
              Free technical assessment from a senior engineer within five business days. No slide decks, no sales reps.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-brand">
                Talk to an engineer
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/" className="btn-ghost-light">
                Back to home
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
