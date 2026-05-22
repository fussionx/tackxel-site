import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Calculator, ShieldCheck,
  Building2, Factory, Network,
  Boxes, Users, GitBranch, FileCheck, Smartphone, BarChart3,
  Sparkles, Clock, Award,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export const metadata: Metadata = {
  title: "Custom ERP Development UK — Enterprise Platforms & SaaS",
  description:
    "UK custom ERP development. Enterprise platforms, internal SaaS, role-based portals and EDI integrations on AWS by a senior boutique studio. Operations-grade reliability.",
  keywords: [
    "custom ERP development UK",
    "enterprise software development UK",
    "internal tools development UK",
    "SaaS development UK",
    "AWS development UK",
    "EDI integration UK",
  ],
  alternates: { canonical: "/services/enterprise-platforms-and-erp" },
  openGraph: {
    title: "Custom ERP Development UK — Tackxel",
    description:
      "Custom ERPs, internal SaaS, role-based portals and EDI integrations on AWS. By a UK boutique studio with operations-grade reliability.",
    url: "/services/enterprise-platforms-and-erp",
    type: "website",
  },
};

const customerTypes = [
  {
    Icon: Factory,
    label: "Operators with custom workflows",
    headline: "Off-the-shelf SaaS doesn't model what you actually do.",
    desc: "Manufacturers, co-packers, logistics operators, specialised services teams — your workflows have rules that no horizontal SaaS will ever fit. We model your process first, then build the platform that fits it.",
    points: [
      "Discovery on the floor, not in the IDE — we map the actual workflow before architecting.",
      "Production scheduling, inventory, quality, and audit trails as first-class concerns.",
      "Mobile companion apps for floor and field teams, designed for gloves-on use.",
    ],
  },
  {
    Icon: Building2,
    label: "Companies on spreadsheets and SaaS sprawl",
    headline: "Replace the patchwork with one platform you can audit.",
    desc: "You're running operations on a stack of spreadsheets, three SaaS tools, and a Slack channel. It worked at 10 staff; it's leaking at 50. We replace the patchwork with one platform that fits the next decade of growth.",
    points: [
      "Unified data model across the workflows currently split across tools.",
      "Migration plan that doesn't require a 12-month freeze — phased cutovers.",
      "Reports and dashboards built on the underlying data, not bolted on after.",
    ],
  },
  {
    Icon: Network,
    label: "Multi-stakeholder operations",
    headline: "Role-aware portals for Operations, Finance, and IT.",
    desc: "Your platform has three audiences with different needs — operations needs speed, finance needs auditability, IT needs control. We build role-aware portals that give each role the views and permissions their job actually requires.",
    points: [
      "Separate portals per role, sharing the same backend and audit trail.",
      "Permissions scoped to the workflow, not just the data.",
      "Audit trails and compliance checkpoints designed in, not retrofitted.",
    ],
  },
];

const deliverables = [
  {
    Icon: Boxes,
    title: "Custom ERP and operations platforms",
    desc: "Production scheduling, multi-warehouse inventory, quality management, and the unglamorous workflow plumbing that actually runs the business.",
  },
  {
    Icon: Users,
    title: "Role-based portals",
    desc: "Separate, role-aware portals for Operations, Finance, IT, and external partners — each with views and permissions tuned to their work.",
  },
  {
    Icon: GitBranch,
    title: "EDI and partner integrations",
    desc: "EDI (X12) with retailers, REST APIs with suppliers and partners, batch and event-driven integration patterns — audit-clean by design.",
  },
  {
    Icon: FileCheck,
    title: "Audit trails and compliance",
    desc: "Every state change logged, every quality check captured, every approval flow traced — audits (internal and external) pass cleanly.",
  },
  {
    Icon: Smartphone,
    title: "Mobile companion apps",
    desc: "Shop-floor, field, and warehouse mobile apps for teams that work in gloves and aren't sitting at a desk. Built native or cross-platform.",
  },
  {
    Icon: BarChart3,
    title: "Reporting and dashboards",
    desc: "KPI dashboards built on the underlying operations data — not a separate BI stack pretending to be the source of truth.",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Discover",
    duration: "Week 1–2",
    desc: "Walk the floor, sit with each role, map the workflow as it actually runs. The platform has to fit the business, not the other way around.",
    deliverables: ["Workflow map", "Role / portal plan", "Phased delivery roadmap"],
  },
  {
    no: "02",
    title: "Design",
    duration: "Week 2–4",
    desc: "Data model, system architecture, role and permission design, integration design. Written down, reviewed with the team — not assumed.",
    deliverables: ["Data model", "System architecture (AWS)", "Role and integration spec"],
  },
  {
    no: "03",
    title: "Build",
    duration: "Ongoing",
    desc: "Senior engineers ship in two-week sprints. Each module hits production behind a feature flag — no week-long deploys, no big-bang cutover.",
    deliverables: ["Production-grade code", "CI/CD via GitHub Actions", "Phased rollout plan"],
  },
  {
    no: "04",
    title: "Ship",
    duration: "Launch + ongoing",
    desc: "Phased migration off legacy tools. Audits pass cleanly. Mobile apps land on the floor. We don't hand over and disappear.",
    deliverables: ["Monitoring & alerting", "Runbooks", "Audit-ready documentation"],
  },
];

const techStack = [
  {
    name: "AWS ECS + RDS",
    line: "Auto-scaling containers on ECS, PostgreSQL on RDS with point-in-time recovery, ALB in front, VPC with least-privilege IAM.",
  },
  {
    name: "Node.js + TypeScript",
    line: "Type-safe backend with shared types across portals and integrations — the kind of code the next engineer can hold in their head.",
  },
  {
    name: "React + Next.js",
    line: "Role-aware portals with server-rendered UX where it matters, client-side interactivity where it pays off.",
  },
  {
    name: "GitHub Actions CI/CD",
    line: "Boring, reproducible, audit-friendly deployments. The kind of pipeline that doesn't need a dedicated DevOps engineer to babysit.",
  },
];

export default function EnterprisePlatformsErpPage() {
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
              <span className="text-brand-600">Enterprise Platforms &amp; ERP</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="badge mb-6">
                  <span className="dot-pulse" />
                  ERP · SaaS · Internal tools · Integrations
                </span>
              </Reveal>
              <Reveal delay={80}>
                <div className="text-eyebrow text-brand-600 uppercase font-semibold tracking-widest mb-4">
                  Enterprise Platforms &amp; ERP
                </div>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight leading-[1.05]">
                  Custom systems for the workflows your business actually has.
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-lg text-neutral-700 mt-6 max-w-2xl leading-relaxed">
                  Custom ERPs, internal SaaS, role-based portals, and integration platforms — built end to end on AWS for operations-grade reliability. The whole platform from one team, not seven products glued together.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Link href="/contact" className="btn-brand">
                    <Calendar className="w-4 h-4" />
                    Book a discovery call
                  </Link>
                  <Link href="/contact?intent=estimate" className="btn-secondary">
                    <Calculator className="w-4 h-4" />
                    Get a delivery estimate
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="mt-5 flex items-center gap-2 text-sm text-neutral-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                  Free 30-minute scoping call with the founder. NDA on request.
                </div>
              </Reveal>
            </div>

            <Reveal delay={250} direction="left">
              {/* PLACEHOLDER - swap with real visual at /public/images/services/enterprise.jpg */}
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200 shadow-elevated">
                <Image
                  src="/images/services/enterprise.jpg"
                  alt="Enterprise platforms and ERP architecture illustration"
                  width={1200}
                  height={800}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Who this is for</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">
                Three shapes of platform work <span className="text-brand-600">we keep being asked for</span>
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">
                Different starting points, same approach — model the business first, then build the platform that fits.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-6">
            {customerTypes.map((t, i) => (
              <Reveal key={t.label} delay={i * 100}>
                <div className="bg-white border border-neutral-200 rounded-xl p-7 h-full card-lift flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                      <t.Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <div className="text-eyebrow text-brand-600 uppercase mb-1.5 font-semibold tracking-widest">{t.label}</div>
                      <h3 className="font-display text-h3 text-neutral-950 leading-snug">{t.headline}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">{t.desc}</p>
                  <ul className="space-y-2.5 mt-auto">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-brand-600" />
                        </div>
                        <span className="text-sm text-neutral-700 leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4 font-semibold tracking-widest">What you get</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  One platform, <span className="text-brand-600">every workflow</span>
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">
                Built as a single coherent platform, not seven products glued together. Roles, data, and audit trails flow through everything.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {deliverables.map((d, i) => (
              <Reveal key={d.title} delay={i * 60}>
                <div className="bg-white p-7 h-full card-lift">
                  <div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-4">
                    <d.Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="text-base font-semibold text-neutral-950 mb-2 leading-snug">{d.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DELIVER */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        </Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="mb-14">
              <div className="text-eyebrow text-brand-100 uppercase mb-3 font-semibold tracking-widest">How we deliver</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4">
                Discover. Design. Build. <span className="text-brand-200">Ship.</span>
              </h2>
              <p className="text-base text-brand-50 leading-relaxed max-w-3xl">
                The same four-phase model — adapted to platform work's particular hazards: scope creep, integration surprise, and the gap between what stakeholders say they need and what the workflow actually requires.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.no} delay={i * 100}>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 h-full card-lift">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white text-brand-700 flex items-center justify-center font-mono text-sm font-bold">
                      {step.no}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-brand-200 uppercase tracking-wider font-semibold">{step.duration}</div>
                      <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-brand-50 leading-relaxed mb-5">{step.desc}</p>
                  <ul className="space-y-2 pt-4 border-t border-white/15">
                    {step.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs text-brand-50">
                        <Check className="w-3 h-3 text-brand-200 flex-shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Tech stack</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">
                Boring infrastructure, <span className="text-brand-600">on purpose</span>
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">
                Every choice is one operators and auditors can scrutinize, scale, and replace independently. No esoteric stack, no lock-in to one vendor.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {techStack.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="bg-white p-7 h-full card-lift flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center mb-5">
                    <Sparkles className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-950 mb-2">{t.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{t.line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY — CO-MANUFACTURER ERP (FLAGSHIP) */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden border-y border-neutral-800">
        <Parallax speed={0.15} className="absolute top-0 right-0 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" />
        </Parallax>
        <Parallax speed={-0.1} className="absolute bottom-0 left-0 hidden lg:block pointer-events-none">
          <div className="w-80 h-80 rounded-full bg-brand-400/10 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest">Flagship case study · Manufacturing · ERP</div>
                </div>
                <h3 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl">
                  Custom ERP for a US co-manufacturer serving major retailers.
                </h3>
                <p className="text-base text-neutral-300 leading-relaxed max-w-2xl mb-6">
                  End-to-end ERP from zero — production scheduling, multi-warehouse inventory, retailer EDI compliance, role-based portals for Operations, Finance, and IT, and a mobile shop-floor app. All on AWS with engineering rigor that holds up under retailer audits.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="font-display text-3xl font-bold text-white mb-1 tracking-display">99.5%</div>
                    <div className="text-xs text-neutral-400">EDI accuracy with major retailers</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="font-display text-lg font-bold text-white mb-1">Built from zero</div>
                    <div className="text-xs text-neutral-400">No off-the-shelf ERP under the hood</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="font-display text-lg font-bold text-white mb-1">In production</div>
                    <div className="text-xs text-neutral-400">Ops, finance, IT, shop floor</div>
                  </div>
                </div>
                <Link href="/case-studies/shifterp" className="btn-brand">
                  Read the case study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <Reveal delay={200} direction="left">
                {/* PLACEHOLDER - swap with real visual at /public/images/case-studies/erp.jpg */}
                <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-card-dark">
                  <Image
                    src="/images/case-studies/erp.jpg"
                    alt="Co-manufacturer ERP case study visual"
                    width={1200}
                    height={800}
                    className="w-full h-auto block"
                  />
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white rounded-2xl p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
              <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
                <div>
                  <div className="text-eyebrow text-brand-100 uppercase mb-3 font-semibold tracking-widest">Ready when you are</div>
                  <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl">
                    Got a platform you need built right the first time?
                  </h2>
                  <p className="text-base text-brand-50 leading-relaxed max-w-xl">
                    Discovery calls are for mapping the workflow honestly. Estimates are for when the scope is clear and you need numbers to bring to the table.
                  </p>
                </div>
                <div className="flex flex-col gap-3 lg:justify-self-end">
                  <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 justify-center">
                    <Calendar className="w-4 h-4" />
                    Book a discovery call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact?intent=estimate" className="bg-transparent border border-white/40 hover:bg-white/10 text-white transition-colors px-6 py-3.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 justify-center">
                    <Calculator className="w-4 h-4" />
                    Get a delivery estimate
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
