import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Calculator, ShieldCheck,
  Rocket, TrendingUp, Building2,
  UserCheck, Plug, Layers, Clock, BadgeCheck, FileSignature,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export const metadata: Metadata = {
  title: "Staff Augmentation UK — Senior Engineers Embedded In Your Team",
  description:
    "UK staff augmentation. Senior engineers and product designers embedded directly in your team. Skill gaps filled fast. No agency middle layer. No junior bench.",
  keywords: [
    "staff augmentation UK",
    "senior engineers UK",
    "embedded engineers",
    "engineering team augmentation",
    "senior engineering teams UK",
    "boutique software studio UK",
  ],
  alternates: { canonical: "/services/staff-augmentation" },
  openGraph: {
    title: "Staff Augmentation UK — Tackxel",
    description:
      "Senior engineers embedded in your team. Match in days, not months. No agency middle layer.",
    url: "/services/staff-augmentation",
    type: "website",
  },
};

const customerTypes = [
  {
    Icon: Rocket,
    label: "Startup hiring slower than the roadmap",
    headline: "Skip the six-month senior hiring cycle.",
    desc: "You need senior engineering hands now, not in Q3. We embed proven builders into your team this month so the roadmap doesn't slip while you finish the search.",
    points: [
      "Match a candidate to your stack and seniority bar in days.",
      "Senior-only profiles. No graduate bench masked behind senior interviews.",
      "Monthly commitment. Extend, shrink, or close on a notice period that fits.",
    ],
  },
  {
    Icon: TrendingUp,
    label: "Scaleup with a specific skill gap",
    headline: "Plug the gap without a full-time hire.",
    desc: "You need a niche skill the team doesn't have yet — iOS, IoT, AI integration, ERP, Next.js — and you'd rather not hire permanently for it. We embed the right senior, your team owns the work.",
    points: [
      "Targeted skill match: iOS, Android, React Native, Next.js, AWS, AI, IoT.",
      "Embeds with your standards, codebase, sprint cadence, and review process.",
      "Knowledge transfer baked in so the skill stays after the engagement ends.",
    ],
  },
  {
    Icon: Building2,
    label: "Bridge to a full-time hire",
    headline: "Ship while you hire. Don't trade off either.",
    desc: "You're hiring permanently but the role takes time to fill, and the work can't wait. We bridge the gap with a senior on the same level — and hand over cleanly when your hire lands.",
    points: [
      "Senior-level coverage on day one. No ramp tax.",
      "Documented handover the day your full-time hire signs.",
      "Notice-period flexibility so the bridge doesn't outstay its welcome.",
    ],
  },
];

const deliverables = [
  {
    Icon: UserCheck,
    title: "Senior-only profiles",
    desc: "Every engineer placed has shipped production systems for 5+ years. We don't place juniors against senior briefs. Ever.",
  },
  {
    Icon: Plug,
    title: "Embedded, not outsourced",
    desc: "Your team's standup. Your codebase. Your sprint cadence. Your review process. They're a team member with a notice period, not a remote vendor.",
  },
  {
    Icon: Clock,
    title: "Match in days, not months",
    desc: "Brief on Monday. Shortlist by Thursday. Interview the week after. Productive sprints inside two weeks of close.",
  },
  {
    Icon: BadgeCheck,
    title: "Vetted on craft, not CVs",
    desc: "Every candidate is screened by the founder against your stack, your seniority bar, and the actual problem they'll work on. No agency churn.",
  },
  {
    Icon: Layers,
    title: "Full-stack range",
    desc: "iOS, Android, React Native, Next.js, Node, Rails, AWS, AI integration, IoT, ERP. If it's in our 6 services, we can place for it.",
  },
  {
    Icon: FileSignature,
    title: "Clean contracts, clean exits",
    desc: "MSA + SOW. Monthly commitment, transparent notice period. Knowledge transfer documented. Hand over the day your full-time hire lands.",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Match",
    duration: "Days 1–4",
    desc: "Brief us on the role, stack, seniority, and the actual problem. We shortlist senior profiles from our network — no résumé spray.",
    deliverables: ["Role brief", "Vetted shortlist", "Engineer profiles with shipped-work links"],
  },
  {
    no: "02",
    title: "Interview",
    duration: "Days 5–10",
    desc: "You interview the shortlist on craft, fit, and the work they'll actually do. We coordinate scheduling, brief the candidate, and gather feedback.",
    deliverables: ["Direct interviews with shortlist", "Reference checks", "Final candidate decision"],
  },
  {
    no: "03",
    title: "Onboard",
    duration: "Days 10–14",
    desc: "Equipment, access, your standards, your codebase. Senior engineers ramp in days, not months. Productive sprints from week two.",
    deliverables: ["Equipment + access", "Codebase walkthrough", "First sprint plan"],
  },
  {
    no: "04",
    title: "Operate",
    duration: "Ongoing",
    desc: "They're on your standups, your retros, your sprints. We stay in the background for engagement health checks, no project management overhead.",
    deliverables: ["Embedded contributor", "Monthly engagement check-in", "Notice-period flexibility"],
  },
];

const profiles = [
  { name: "Senior mobile", line: "iOS (Swift), Android (Kotlin), React Native, Flutter. App Store and Play Store releases handled." },
  { name: "Senior full-stack", line: "Next.js, React, Node, Rails. Production AWS deployments and CI/CD." },
  { name: "Senior AI engineer", line: "GPT, LLMs, RAG, agents. Eval pipelines and cost-aware production deployment." },
  { name: "Senior IoT", line: "BLE, NFC, cellular IoT. AWS IoT Core, MQTT, device telemetry pipelines." },
  { name: "Senior backend", line: "AWS ECS / RDS / Lambda. Node, Python, Go. EDI integrations, API platforms." },
  { name: "Product designer", line: "UX research, design systems, production UI, developer handover." },
];

export default function StaffAugmentationPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative hero-glow text-white pt-32 pb-20 overflow-hidden">
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
              <span className="text-brand-300">Staff Augmentation</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="badge-dark mb-6">
                  <span className="dot-pulse" />
                  Senior-only · Embedded · UK
                </span>
              </Reveal>
              <Reveal delay={80}>
                <div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">
                  Staff Augmentation
                </div>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">
                  Senior engineers. Embedded in your team. This month.
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">
                  Skip the six-month senior hiring cycle. Match a vetted senior to your stack in days, embed them in your team in two weeks. No agency middle layer. No junior bench.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Link href="/contact" className="btn-brand">
                    <Calendar className="w-4 h-4" />
                    Brief us on the role
                  </Link>
                  <Link href="/contact?intent=estimate" className="btn-ghost-light">
                    <Calculator className="w-4 h-4" />
                    Get a rate sheet
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="mt-5 flex items-center gap-2 text-sm text-neutral-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-300" />
                  NDA on request. Shortlist in 4 working days.
                </div>
              </Reveal>
            </div>

            <Reveal delay={300} direction="left">
              <div className="space-y-3">
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-white">4 working days</div>
                    <div className="text-xs text-neutral-400">Brief to shortlist</div>
                  </div>
                </div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-white">Senior-only</div>
                    <div className="text-xs text-neutral-400">5+ years production · No junior bench</div>
                  </div>
                </div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <Plug className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-white">Embedded</div>
                    <div className="text-xs text-neutral-400">Your standup · Your codebase · Your cadence</div>
                  </div>
                </div>
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
                Three reasons teams call us <span className="text-brand-600">for staff aug</span>
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">
                Same boutique team, different framing per use case.
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
                  Senior engineers, <span className="text-brand-600">not agency theatre</span>
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">
                Every line below is the standard, not the upsell. If something doesn&apos;t fit your shape, the scoping call is where we say so honestly.
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
                Match. Interview. Onboard. <span className="text-brand-200">Operate.</span>
              </h2>
              <p className="text-base text-brand-50 leading-relaxed max-w-3xl">
                Brief on Monday. Productive sprints by week two. No agency project manager standing between you and the work.
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

      {/* ENGINEER PROFILES */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Profiles we place</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">
                Senior roles, <span className="text-brand-600">across the six services</span>
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">
                If it&apos;s in our service mix, we can place for it. Brief us on the role and we&apos;ll come back with a shortlist.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {profiles.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <div className="bg-white p-7 h-full card-lift flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center mb-5">
                    <Sparkles className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-950 mb-2">{p.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{p.line}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
                    Got a role you can&apos;t wait six months to fill?
                  </h2>
                  <p className="text-base text-brand-50 leading-relaxed max-w-xl">
                    Brief us on Monday. Shortlist by Thursday. Productive sprints inside two weeks.
                  </p>
                </div>
                <div className="flex flex-col gap-3 lg:justify-self-end">
                  <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 justify-center">
                    <Calendar className="w-4 h-4" />
                    Brief us on the role
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact?intent=estimate" className="bg-transparent border border-white/40 hover:bg-white/10 text-white transition-colors px-6 py-3.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 justify-center">
                    <Calculator className="w-4 h-4" />
                    Get a rate sheet
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
