import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, MapPin, Building2,
  Rocket, UserCheck, Compass, Wrench,
  Landmark, Scale, HeartPulse, UtensilsCrossed, Server, Cpu, Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";
import {
  IconAI, IconMobileApp, IconWebApp, IconDesign, IconIoT, IconEnterprise,
} from "@/components/Icons";
import UnionJack from "@/components/UnionJack";

export const metadata: Metadata = {
  title: "About Tackxel — UK product studio shipping AI-first software",
  description:
    "Tackxel is a UK-registered product studio building AI-first mobile apps, web platforms and enterprise software. Senior engineers, real production, real outcomes. Founded 2024.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Tackxel — UK product studio",
    description:
      "Senior engineering teams that ship product. AI-first mobile, web and enterprise software across fintech, real estate, legal, healthcare and more.",
    url: "/about",
    type: "website",
  },
};

const beliefs = [
  { Icon: Rocket, title: "Ship beats pitch", desc: "Production code, not slide decks. We measure ourselves by what goes live, not what gets presented." },
  { Icon: UserCheck, title: "Senior by default", desc: "Every engagement is led by senior engineers. No junior bench, no learning on your product." },
  { Icon: Compass, title: "Honest scoping", desc: "We tell you what's worth building, not just what we can sell. The hard calls, made up front." },
  { Icon: Wrench, title: "Built to last", desc: "Code your team can own and maintain after we hand it off. No black boxes, no lock-in." },
];

const services = [
  { Icon: IconAI, name: "AI Integration", href: "/services/ai-integration" },
  { Icon: IconMobileApp, name: "Mobile App Development", href: "/services/mobile-app-development" },
  { Icon: IconWebApp, name: "Web Application Development", href: "/services/web-app-development" },
  { Icon: IconDesign, name: "Product Design", href: "/services/product-design" },
  { Icon: IconIoT, name: "IoT & Connected Devices", href: "/services/iot-and-connected-devices" },
  { Icon: IconEnterprise, name: "Enterprise Platforms & ERP", href: "/services/enterprise-platforms-and-erp" },
];

const industries = [
  { Icon: Landmark, name: "Fintech", projects: "Sukuk" },
  { Icon: Building2, name: "Real Estate", projects: "LuxeLocker · PropMetrics · MultiUnitX" },
  { Icon: Scale, name: "Legal Tech", projects: "Lexa" },
  { Icon: HeartPulse, name: "Healthcare", projects: "Kabyier" },
  { Icon: UtensilsCrossed, name: "Food Tech", projects: "YallaGrub" },
  { Icon: Server, name: "Enterprise SaaS", projects: "ShiftERP" },
  { Icon: Cpu, name: "IoT & Wearables", projects: "WearOpal · Guardspur" },
  { Icon: Sparkles, name: "AI & Consumer", projects: "My Friend" },
];

const stats = [
  { value: "11", suffix: "+", label: "Production systems shipped", counter: true },
  { value: "7", suffix: "+", label: "Years founder engineering experience", counter: true },
  { value: "9", suffix: "+", label: "Industries served", counter: true },
  { value: "2024", suffix: "", label: "Founded", counter: false },
  { value: "UK Ltd", suffix: "", label: "Companies House 17212854", counter: false },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO — warm, company visual (no founder photo) */}
      <section className="relative hero-warm pt-32 pb-20 lg:pb-28 overflow-hidden">
        <Parallax speed={0.08} className="absolute top-24 right-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[24rem] h-[24rem] rounded-full bg-orange-200/40 blur-3xl float-slow" />
        </Parallax>
        <Parallax speed={-0.06} className="absolute bottom-0 left-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[26rem] h-[26rem] rounded-full bg-brand-200/40 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="badge mb-6">
                  <span className="dot-pulse" />
                  About Tackxel
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight leading-[1.05]">
                  Senior engineering teams that <span className="text-brand-600">ship product</span>.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-lg text-neutral-700 mt-6 max-w-2xl leading-relaxed">
                  Tackxel is a UK product studio building AI-first mobile apps, web platforms, and enterprise software. Real engineers. Real production. Real outcomes.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link href="/contact" className="btn-brand">
                    Book a discovery call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/case-studies" className="btn-secondary">
                    See our work
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex items-center gap-2 text-sm text-neutral-500">
                  <MapPin className="w-3.5 h-3.5 text-brand-600" />
                  UK-registered · Remote-first · Clients globally
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} direction="left">
              <div className="relative">
                {/* PLACEHOLDER - swap with real photo when user provides */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200 shadow-elevated">
                  <Image
                    src="/images/about/office-1.jpg"
                    alt="Tackxel — a UK product studio workspace"
                    width={800}
                    height={600}
                    priority
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-500/10 to-orange-300/10 blur-3xl -z-10 pointer-events-none" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Who we are</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                  A product studio, built senior
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-5 text-base lg:text-lg text-neutral-700 leading-relaxed max-w-2xl">
                <p>
                  Tackxel builds production software for founders and product teams &mdash; AI features, mobile apps, web platforms, IoT systems, and custom enterprise tools. We take work from first scope to live deployment, with senior engineers on it the whole way.
                </p>
                <p>
                  We&apos;re a UK-registered Private Limited Company, headquartered in Manchester and operating remote-first, serving clients globally. Small team, real receipts, no agency middle layer.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">What we believe</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Four things we don&apos;t compromise on
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {beliefs.map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <article className="bg-white border border-neutral-200 rounded-3xl p-8 h-full card-lift">
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center mb-5">
                    <b.Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-display text-h3 text-neutral-950 mb-2 leading-snug">{b.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{b.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">What we do</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                  Six services, one senior team
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Pick one or combine them. Full detail lives on the services pages &mdash; here&apos;s the shape of what we build.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={i * 70}>
                <Link href={s.href} className="group flex items-center gap-4 bg-white border border-neutral-200 rounded-2xl p-5 card-lift h-full">
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center flex-shrink-0">
                    <s.Icon className="w-7 h-7" />
                  </div>
                  <span className="text-base font-semibold text-neutral-950 leading-snug flex-1">{s.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-600 transition-colors flex-shrink-0" />
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-10">
              <Link href="/services" className="btn-primary">
                Explore all services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Industries we serve</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Shipped across nine-plus industries
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mt-4 max-w-xl">
                Real projects, real domains. The breadth that informs how we build.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 70}>
                <Link href="/case-studies" className="group block bg-white border border-neutral-200 rounded-3xl p-6 lg:p-7 h-full card-lift">
                  <div className="w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center mb-4">
                    <ind.Icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="text-base font-semibold text-neutral-950 leading-snug group-hover:text-brand-600 transition-colors">{ind.name}</h3>
                  <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">{ind.projects}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">By the numbers</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Tackxel, honestly
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mt-4 max-w-xl">
                No vanity metrics &mdash; just the provable facts.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="bg-gradient-to-br from-brand-50 via-white to-orange-50 border border-neutral-200 rounded-3xl p-6 lg:p-7 h-full card-lift">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-brand-600 tracking-display leading-none mb-3">
                    {s.counter ? <Counter to={Number(s.value)} suffix={s.suffix} /> : s.value}
                  </div>
                  <div className="text-sm text-neutral-700 leading-relaxed">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE WE'RE BASED */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Where we&apos;re based</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight mb-6">
                  UK-registered, globally remote
                </h2>
                <p className="text-base text-neutral-700 leading-relaxed mb-8 max-w-xl">
                  Tackxel Ltd is a UK-registered Private Limited Company, headquartered in Manchester. We operate as a remote-first team, serving clients globally.
                </p>

                <div className="bg-white border border-neutral-200 rounded-3xl p-7 lg:p-8 shadow-card max-w-md">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-4 h-4 text-brand-600" />
                    <div className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Registered office</div>
                  </div>
                  <address className="not-italic text-sm text-neutral-800 leading-relaxed mb-4">
                    Tackxel Ltd<br />
                    19 Athol Road<br />
                    Manchester, M16 8QW<br />
                    United Kingdom
                  </address>
                  <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-500 font-mono">
                    Company No. 17212854 · Registered in England &amp; Wales
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150} direction="left">
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-sm bg-white border border-neutral-200 rounded-3xl shadow-card p-8 lg:p-10">
                  <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-subtle ring-1 ring-neutral-900/5">
                    <UnionJack className="block w-full aspect-[2/1]" />
                  </div>
                  <div className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-neutral-700">
                    <MapPin className="w-4 h-4 text-brand-600" />
                    United Kingdom
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOUNDER — brief, not a hero */}
      <section className="py-14 lg:py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-4 max-w-3xl">
              {/* PLACEHOLDER - swap with real photo when user provides */}
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-neutral-200 flex-shrink-0">
                <Image
                  src="/images/about/founder-uzair.jpg"
                  alt="Uzair Sufi, founder of Tackxel"
                  width={120}
                  height={120}
                  loading="lazy"
                  className="w-full h-full object-cover block"
                />
              </div>
              <p className="text-sm lg:text-base text-neutral-600 leading-relaxed">
                Founded by <span className="font-semibold text-neutral-900">Uzair Sufi</span>, who spent 7+ years leading mobile engineering at Clustox before starting Tackxel.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA — dark, homepage style */}
      <section className="relative py-20 lg:py-28 bg-neutral-950 text-white overflow-hidden">
        <Parallax speed={0.1} className="absolute -top-20 -right-20 hidden lg:block pointer-events-none">
          <div className="w-[30rem] h-[30rem] rounded-full bg-orange-500/15 blur-3xl" />
        </Parallax>
        <Parallax speed={-0.08} className="absolute -bottom-20 -left-20 hidden lg:block pointer-events-none">
          <div className="w-[28rem] h-[28rem] rounded-full bg-brand-500/20 blur-3xl" />
        </Parallax>
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="text-eyebrow text-brand-300 uppercase mb-4">Get in touch</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-h2 lg:text-h1 text-white tracking-display-tight leading-tight">
                Let&apos;s build something real.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base lg:text-lg text-neutral-300 leading-relaxed mt-6 max-w-xl mx-auto">
                Tell us what you&apos;re trying to build. We&apos;ll handle the rest.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-3 mt-10 justify-center">
                <Link href="/contact" className="btn-brand">
                  Book a discovery call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies" className="btn-ghost-light">
                  See our work
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
