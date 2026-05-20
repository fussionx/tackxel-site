"use client";

import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Calendar, Calculator, Check, ShieldCheck, Award, Clock, Sparkles,
  Rocket, TrendingUp, Building2,
  Smartphone, AppWindow, GitBranch, BarChart3, LifeBuoy, Store,
  Layers, Code2, Apple, Bot,
  HeartPulse, Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

const customerTypes = [
  {
    Icon: Rocket,
    label: "Early-stage startup",
    headline: "MVP from zero in 10–14 weeks.",
    desc: "You need a credible v1 in users' hands to validate the thesis, raise the next round, or both. We start with discovery, ship a focused MVP, and instrument it so the next decision is evidence-based — not vibes.",
    points: [
      "Lean scope defined alongside founders, not against them.",
      "Production-grade from day one — no throwaway prototypes.",
      "Analytics and crash reporting wired in before launch.",
    ],
  },
  {
    Icon: TrendingUp,
    label: "Scaleup adding mobile",
    headline: "Native mobile that matches your web product.",
    desc: "You have a working web product and a customer base asking for mobile. We add iOS and Android without splintering your team, sharing your API contracts, design system, and release cadence.",
    points: [
      "Reuses your existing API, auth, and analytics infrastructure.",
      "Design-system-aware — your brand survives the platform jump.",
      "Embeds with your engineering team, not around it.",
    ],
  },
  {
    Icon: Building2,
    label: "Enterprise modernising legacy",
    headline: "Replace the app your users complain about.",
    desc: "Your current app is on an unmaintained framework, leaks crashes, or fails App Store review. We rebuild on a modern stack with feature parity first, then expand — without losing the institutional knowledge that lived in the old codebase.",
    points: [
      "Strangler-pattern migration: ship in slices, not big bangs.",
      "Backwards-compatible APIs so backend changes lag the rewrite.",
      "Compliance-aware (HIPAA, SOC 2, GDPR) when your data demands it.",
    ],
  },
];

const deliverables = [
  {
    Icon: Smartphone,
    title: "iOS + Android apps",
    desc: "Native (Swift / Kotlin) or cross-platform (React Native / Flutter) — chosen against your team, budget, and platform-feature needs. Not religion.",
  },
  {
    Icon: Store,
    title: "App Store + Play Store submission",
    desc: "We handle the whole submission gauntlet — provisioning, certificates, review responses, phased rollouts, and store listing copy and assets.",
  },
  {
    Icon: GitBranch,
    title: "CI/CD pipeline",
    desc: "Fastlane or EAS pipelines for automated builds, signing, TestFlight / internal track distribution, and one-tap production releases.",
  },
  {
    Icon: BarChart3,
    title: "Analytics + crash reporting",
    desc: "Product analytics (Amplitude / PostHog / Mixpanel), crash reporting (Sentry / Crashlytics), and dashboards your team can read on day one.",
  },
  {
    Icon: AppWindow,
    title: "Design system + handover docs",
    desc: "Figma component library, design tokens, engineering walkthrough, and runbooks — so the next change doesn't require us in the room.",
  },
  {
    Icon: LifeBuoy,
    title: "90-day post-launch support",
    desc: "Bug fixes, store-review pushback, and an SLA on critical issues. We don't ship and disappear — we operate alongside you through the first quarter.",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Discover",
    duration: "Week 1–2",
    desc: "Stakeholder workshops, technical discovery, and a risk-prioritized backlog. We surface unknowns before they become surprises.",
    deliverables: ["Technical scoping document", "Risk register", "Delivery roadmap"],
  },
  {
    no: "02",
    title: "Design",
    duration: "Week 2–4",
    desc: "Architecture decisions, system diagrams, and UX prototypes. Engineering and design move in lockstep from the start.",
    deliverables: ["System architecture", "Interactive Figma prototype", "Data model & API spec"],
  },
  {
    no: "03",
    title: "Build",
    duration: "Ongoing",
    desc: "Senior engineers ship in two-week sprints with shared dashboards. Daily standups, weekly demos, written status reports.",
    deliverables: ["Production-grade code", "CI/CD pipelines", "Test coverage > 80%"],
  },
  {
    no: "04",
    title: "Ship",
    duration: "Launch + ongoing",
    desc: "Phased rollouts with feature flags, observability, and on-call rotation. We do not hand over and disappear — we operate alongside you.",
    deliverables: ["Monitoring & alerting", "Runbooks", "Incident response SLAs"],
  },
];

const techStack = [
  {
    Icon: Layers,
    name: "React Native",
    line: "When you want one codebase, fast iteration, and JS/TS team fluency to carry across web and mobile.",
  },
  {
    Icon: Code2,
    name: "Flutter",
    line: "When you want pixel-perfect custom UI, strong performance, and don't mind investing in Dart for the win.",
  },
  {
    Icon: Apple,
    name: "Swift",
    line: "When iOS is the priority surface and you need the latest platform features — widgets, Live Activities, ARKit, on-device ML.",
  },
  {
    Icon: Bot,
    name: "Kotlin",
    line: "When Android is non-negotiable — Material 3, Jetpack Compose, and full access to background and hardware APIs.",
  },
];

export default function MobileAppDevelopmentPage() {
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
              <span className="text-brand-300">Mobile App Development</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="badge-dark mb-6">
                  <span className="dot-pulse" />
                  iOS · Android · React Native · Flutter
                </span>
              </Reveal>
              <Reveal delay={80}>
                <div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">
                  Mobile App Development
                </div>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">
                  Mobile apps your users keep open, and your CFO keeps funding.
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">
                  Production-grade iOS and Android apps for founders and product leaders who need to ship — not just demo. Senior engineers, App Store-ready pipelines, and 90-day post-launch support baked in from day one.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Link href="/contact" className="btn-brand">
                    <Calendar className="w-4 h-4" />
                    Book a discovery call
                  </Link>
                  <Link href="/contact?intent=estimate" className="btn-ghost-light">
                    <Calculator className="w-4 h-4" />
                    Get a delivery estimate
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="mt-5 flex items-center gap-2 text-sm text-neutral-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-300" />
                  Free 30-minute scoping call with a senior mobile engineer. NDA on request.
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
                    <div className="font-display text-base font-bold text-white">App Store-ready</div>
                    <div className="text-xs text-neutral-400">First-pass review approvals · CI/CD wired in</div>
                  </div>
                </div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-white">10–14 weeks</div>
                    <div className="text-xs text-neutral-400">Typical MVP timeline · Production-grade</div>
                  </div>
                </div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift">
                  <div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-brand-300" />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-white">90-day support</div>
                    <div className="text-xs text-neutral-400">Post-launch SLA · Bug fixes · Store-review</div>
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
                Three teams we ship for <span className="text-brand-600">again and again</span>
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">
                We tune scope, team mix, and process to where you actually are — not a generic playbook.
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
                  Concrete deliverables, <span className="text-brand-600">not slide-deck promises</span>
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">
                Every engagement ships these — they're not upsells. If something here doesn't apply to your scope, the scoping call is where we say so honestly.
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

      {/* HOW WE DELIVER — Discover / Design / Build / Ship */}
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
                The same four-phase process we run for every engagement — adapted to mobile constraints. Predictable cadence, written deliverables at each phase, no theatre.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.no} delay={i * 100}>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 h-full">
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
                We pick the stack for the job, <span className="text-brand-600">not the resume</span>
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">
                Cross-platform when speed and team economics matter. Native when the platform features or performance demand it. The scoping call is where we make the call together.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {techStack.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="bg-white p-7 h-full card-lift flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center mb-5">
                    <t.Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-950 mb-2">{t.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{t.line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY — VITAL HEALTH */}
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
                <div className="text-eyebrow text-brand-300 uppercase mb-4 font-semibold tracking-widest">Case study · Healthcare</div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-500/15 border border-brand-500/30 flex items-center justify-center">
                    <HeartPulse className="w-6 h-6 text-brand-300" />
                  </div>
                  <div className="font-display text-h3 text-white">Vital Health Networks</div>
                </div>
                <h3 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl">
                  A patient platform serving <span className="text-brand-300">7M+ users</span> across iOS and Android.
                </h3>
                <p className="text-base text-neutral-300 leading-relaxed max-w-2xl mb-6">
                  We rebuilt Vital Health's patient-facing mobile app from a brittle hybrid stack onto React Native — feature parity in 14 weeks, then expanded with telehealth, prescription refills, and HIPAA-compliant messaging. Senior engineers operated alongside the in-house team, with App Store releases moving from quarterly to fortnightly.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="font-display text-3xl font-bold text-white mb-1 tracking-display">7M+</div>
                    <div className="text-xs text-neutral-400">Patients served on the platform</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="font-display text-3xl font-bold text-white mb-1 tracking-display">14 wks</div>
                    <div className="text-xs text-neutral-400">From kickoff to feature parity</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="font-display text-3xl font-bold text-white mb-1 tracking-display">6×</div>
                    <div className="text-xs text-neutral-400">Faster store-release cadence</div>
                  </div>
                </div>
                <Link href="/contact" className="btn-brand">
                  Talk about a similar build
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <Reveal delay={200} direction="left">
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-brand-500/15 border border-brand-500/30 flex items-center justify-center">
                      <Users className="w-5 h-5 text-brand-300" />
                    </div>
                    <div className="text-sm font-semibold text-white">Marcus Williams</div>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                    "We have worked with five development partners over the years. Tackxel is the only one we trust with our patient-facing systems. HIPAA-grade discipline without the enterprise consultancy markup."
                  </p>
                  <div className="text-xs text-neutral-500">
                    Chief Technology Officer, Vital Health Networks
                  </div>
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
                    Two ways to start — pick the one that fits your week.
                  </h2>
                  <p className="text-base text-brand-50 leading-relaxed max-w-xl">
                    Discovery calls are for figuring out if we're the right fit. Estimates are for when you already know the shape of what you want to build and need numbers to bring to the table.
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
