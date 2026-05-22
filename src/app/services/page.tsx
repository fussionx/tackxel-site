import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Users, Lightbulb, Hammer, TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import {
  IconAI, IconMobileApp, IconWebApp, IconDesign, IconIoT, IconEnterprise,
} from "@/components/Icons";

const otherServices = [
  {
    Icon: IconMobileApp,
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    desc: "Native iOS, Android, React Native, and Flutter. App Store-ready pipelines and 90 days of post-launch support.",
  },
  {
    Icon: IconWebApp,
    name: "Web & Product Engineering",
    href: "/services/web-app-development",
    desc: "Production web platforms on Next.js, React, Node, and Rails. Built for the team that owns it next year.",
  },
  {
    Icon: IconDesign,
    name: "Product Design",
    href: "/services/product-design",
    desc: "UX research, design systems, production UI, and developer handover. Design that ships, not deck art.",
  },
  {
    Icon: Users,
    name: "Staff Augmentation",
    href: "/services/staff-augmentation",
    desc: "Senior engineers embedded in your team. Match in days, not months. No agency middle layer.",
  },
  {
    Icon: IconIoT,
    name: "IoT & Connected Devices",
    href: "/services/iot-and-connected-devices",
    desc: "BLE, NFC, wearables, and smart hardware — plus the mobile companion app and AWS telemetry. One team.",
  },
  {
    Icon: IconEnterprise,
    name: "Enterprise Platforms & ERP",
    href: "/services/enterprise-platforms-and-erp",
    desc: "Custom SaaS, ERP, internal tools, and EDI integrations — engineered to take real production load.",
  },
];

const howWeWork = [
  {
    no: "01",
    Icon: Lightbulb,
    title: "Discover",
    desc: "Describe the problem. We come back with research, recommendations, and a clear scope you can build from — yours to keep.",
  },
  {
    no: "02",
    Icon: Hammer,
    title: "Build",
    desc: "Senior engineers ship AI features, mobile apps, web platforms, and full products. Real code, real deployment, real users.",
  },
  {
    no: "03",
    Icon: TrendingUp,
    title: "Scale",
    desc: "Need ongoing capacity? Embed our senior engineers in your team — pre-vetted and productive in two weeks.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO — warm */}
      <section className="relative hero-warm pt-32 pb-20 lg:pb-24 overflow-hidden">
        <Parallax speed={0.08} className="absolute top-20 right-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[26rem] h-[26rem] rounded-full bg-orange-200/40 blur-3xl float-slow" />
        </Parallax>
        <Parallax speed={-0.06} className="absolute bottom-0 left-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[30rem] h-[30rem] rounded-full bg-brand-200/40 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-8 font-mono">
              <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
              <span className="text-neutral-300">/</span>
              <span className="text-brand-600">Services</span>
            </nav>
          </Reveal>

          <Reveal delay={80}>
            <div className="max-w-3xl">
              <span className="badge mb-6">
                <span className="dot-pulse" />
                What we build
              </span>
              <h1 className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight leading-[1.05]">
                Every capability your product needs. <span className="text-brand-600">One senior team.</span>
              </h1>
              <p className="text-lg text-neutral-700 mt-6 max-w-2xl leading-relaxed">
                AI, mobile, web, design, IoT, and custom enterprise software &mdash; coordinated by senior engineers from first scope to live production. No vendor handoffs, no junior bench.
              </p>
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
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES — featured AI + grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Our services</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                  Seven services. <span className="text-neutral-500">One team.</span>
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Pick one or combine them. Most projects pull in two or three &mdash; AI plus mobile, web plus design, ERP plus a shop-floor app.
              </p>
            </div>
          </Reveal>

          {/* Featured AI */}
          <Reveal>
            <Link href="/services/ai-integration" className="group block mb-5 lg:mb-6">
              <article className="relative bg-gradient-to-br from-orange-50 via-white to-brand-50 border border-neutral-200 rounded-3xl overflow-hidden card-lift">
                <span className="absolute top-5 right-5 z-10 bg-neutral-950 text-white text-[10px] font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full">
                  Most in demand
                </span>
                <div className="grid lg:grid-cols-[1.4fr_1fr] gap-0 items-stretch">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shadow-subtle">
                        <IconAI className="w-7 h-7" />
                      </div>
                      <h3 className="font-display text-h3 text-neutral-950">AI Integration</h3>
                    </div>
                    <p className="text-base lg:text-lg text-neutral-700 leading-relaxed mb-6 max-w-xl">
                      Ship AI features that hold up in production. GPT, LLMs, RAG, agents, and the eval pipelines that keep quality measurable.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-7">
                      {["GPT", "LLMs", "RAG", "Agents", "Eval pipelines"].map((t) => (
                        <span key={t} className="inline-flex items-center px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-[11px] font-medium text-neutral-700">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-950 group-hover:text-brand-600 transition-colors">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                  <div className="hidden lg:block relative border-l border-neutral-200/50">
                    <Image
                      src="/images/services/ai.jpg"
                      alt="AI integration visualisation"
                      width={1200}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </article>
            </Link>
          </Reveal>

          {/* 6 other services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {otherServices.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <Link href={s.href} className="group block bg-white border border-neutral-200 rounded-3xl p-7 card-lift h-full">
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center mb-5">
                    <s.Icon className="w-7 h-7 text-neutral-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-950 mb-2 leading-snug">{s.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 group-hover:text-brand-600 transition-colors">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK — numbered */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">How we work</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Three things we do. <span className="text-neutral-500">In order.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {howWeWork.map((c, i) => (
              <Reveal key={c.no} delay={i * 100}>
                <article className="relative bg-white border border-neutral-200 rounded-3xl p-8 lg:p-10 h-full card-lift overflow-hidden">
                  <div className="font-display text-7xl lg:text-8xl font-bold text-brand-600 tracking-display leading-none mb-6">
                    {c.no}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <c.Icon className="w-5 h-5 text-neutral-700" />
                    <h3 className="font-display text-h3 text-neutral-950">{c.title}</h3>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">{c.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
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
                Not sure which service you need?
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base lg:text-lg text-neutral-300 leading-relaxed mt-6 max-w-xl mx-auto">
                Tell us what you&apos;re trying to build. We&apos;ll point you to the right one &mdash; or combine a few.
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
