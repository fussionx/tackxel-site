import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, MapPin, Building2,
  UserCheck, Rocket, ShieldCheck, Repeat,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "About Tackxel — UK boutique software studio founded 2024",
  description:
    "Tackxel Ltd is a UK-registered boutique software studio founded 2024 by Uzair Sufi. A senior team building mobile, web, AI, IoT and custom ERP products globally.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Tackxel — UK boutique software studio",
    description:
      "Founded in 2024 by Uzair Sufi after 7 years leading mobile engineering. A senior boutique team — designer, engineers, growth — building product end to end.",
    url: "/about",
    type: "website",
  },
};

const principles = [
  {
    no: "01",
    Icon: UserCheck,
    title: "Senior by default",
    desc: "No juniors hidden behind senior interviews. The people you meet on the discovery call are the ones writing the code.",
  },
  {
    no: "02",
    Icon: Rocket,
    title: "Ship to production",
    desc: "We don't make slideware. Every project goes live with real users — that's the only success metric we trust.",
  },
  {
    no: "03",
    Icon: ShieldCheck,
    title: "Honesty over hype",
    desc: "No inflated awards, no fabricated metrics, no Fortune 500 theatrics. Small senior team, real receipts.",
  },
  {
    no: "04",
    Icon: Repeat,
    title: "Long-term over the first invoice",
    desc: "We optimise for the second project. Clients come back because the first one was worth coming back to.",
  },
];

const team = [
  { src: "/images/team/designer.jpg",  role: "Product Designer", area: "Design & UX" },
  { src: "/images/team/dev-1.jpg",     role: "Senior Engineer",  area: "Engineering" },
  { src: "/images/team/dev-2.jpg",     role: "Engineer",         area: "Engineering" },
  { src: "/images/team/marketing.jpg", role: "Growth",           area: "Marketing" },
];

const stats = [
  { value: "2024", suffix: "", label: "Founded", counter: false },
  { value: "11", suffix: "+", label: "Products shipped", counter: true },
  { value: "7", suffix: "+", label: "Years founder experience", counter: true },
  { value: "UK Ltd", suffix: "", label: "Registered in England & Wales", counter: false },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO — warm, founder photo right */}
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
                  A small team of <span className="text-brand-600">senior builders</span>.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-lg text-neutral-700 mt-6 max-w-2xl leading-relaxed">
                  Tackxel is a UK boutique product engineering studio. We ship product for founders and product leaders who need senior hands fast &mdash; not agency overhead, a junior bench, or slideware.
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
                  Remote-first team — clients globally
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} direction="left">
              <div className="relative">
                {/* PLACEHOLDER - swap with real photo when user provides */}
                <div className="relative aspect-square rounded-3xl overflow-hidden border border-neutral-200 shadow-elevated">
                  <Image
                    src="/images/about/founder-uzair.jpg"
                    alt="Uzair Sufi, founder of Tackxel"
                    width={600}
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

      {/* OUR STORY */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
            <Reveal>
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Our story</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight mb-2">
                  Founded by an engineer, for product teams
                </h2>
                <div className="text-base text-neutral-500 font-medium mb-8">Uzair Sufi · Founder &amp; Engineering Lead</div>

                <div className="space-y-5 text-base text-neutral-700 leading-relaxed max-w-xl">
                  <p>
                    Tackxel was founded in 2024. Before it, our founder spent seven years shipping production mobile and web systems &mdash; Lexa, My Friend, a Saudi fintech investment app, BLE-connected wearables, an iOS 3D scanning SDK &mdash; across fintech, food tech, healthcare, real estate, and wearables.
                  </p>
                  <p>
                    Tackxel exists because the founders and product leaders we respected kept hitting the same wall. They needed senior engineering hands fast. The only options were agencies running a junior bench, or full-time hires that took six months to land. Neither matches how product teams actually move.
                  </p>
                  <p>
                    So we built the team we wished we could hire. Small. Senior. No sales layer. The person you talk to on the first call is the person on the project.
                  </p>
                </div>

                <div className="mt-8">
                  <Link href="/contact" className="btn-primary">
                    Talk to the founder
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150} direction="left">
              <div className="relative">
                {/* PLACEHOLDER - swap with real photo when user provides */}
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-neutral-200 shadow-elevated">
                  <Image
                    src="/images/about/hero-team.jpg"
                    alt="The Tackxel team"
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW WE WORK — numbered + icons */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">How we work</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                  Four things we don&apos;t compromise on
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                These are the principles we&apos;d want from a partner &mdash; so they&apos;re the ones we hold ourselves to.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {principles.map((p, i) => (
              <Reveal key={p.no} delay={i * 90}>
                <article className="relative bg-white border border-neutral-200 rounded-3xl p-8 h-full card-lift overflow-hidden">
                  <div className="font-display text-5xl lg:text-6xl font-bold text-brand-600 tracking-display leading-none mb-6">
                    {p.no}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <p.Icon className="w-5 h-5 text-neutral-700" />
                    <h3 className="font-display text-h3 text-neutral-950 leading-snug">{p.title}</h3>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Meet the team</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                  Hands on every project
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                A focused senior team across design, engineering, and growth. No bench, no offshore handoff, no juniors learning on your product.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {team.map((m, i) => (
              <Reveal key={m.role} delay={i * 80}>
                <article className="group bg-white border border-neutral-200 rounded-3xl overflow-hidden card-lift h-full">
                  {/* PLACEHOLDER - swap with real photo when user provides */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={m.src}
                      alt={`${m.role} at Tackxel`}
                      width={600}
                      height={600}
                      loading="lazy"
                      className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-base font-semibold text-neutral-950 leading-snug">{m.role}</div>
                    <div className="text-sm text-neutral-500 mt-0.5">{m.area}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <p className="mt-10 text-sm text-neutral-500 max-w-2xl">
              Names and photos update as the team grows. The role each person owns stays the same &mdash; one designer, two engineers, one growth lead. That&apos;s the operating shape.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHERE WE WORK — office gallery */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Where we work</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                Remote-first, Manchester-rooted
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mt-4 max-w-xl">
                We meet to think, then build from wherever we work best. A look at the spaces in between.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            <Reveal className="sm:col-span-2">
              {/* PLACEHOLDER - swap with real photo when user provides */}
              <div className="relative aspect-[2/1] rounded-3xl overflow-hidden border border-neutral-200 shadow-card">
                <Image
                  src="/images/about/team-collab.jpg"
                  alt="The Tackxel team collaborating"
                  width={1200}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover block"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              {/* PLACEHOLDER - swap with real photo when user provides */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200 shadow-card">
                <Image
                  src="/images/about/office-1.jpg"
                  alt="Tackxel workspace"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover block"
                />
              </div>
            </Reveal>
            <Reveal delay={180}>
              {/* PLACEHOLDER - swap with real photo when user provides */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200 shadow-card">
                <Image
                  src="/images/about/office-2.jpg"
                  alt="Tackxel meeting space"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover block"
                />
              </div>
            </Reveal>
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
                No vanity metrics. Just the facts about who we are and what we&apos;ve shipped.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="bg-gradient-to-br from-brand-50 via-white to-orange-50 border border-neutral-200 rounded-3xl p-7 lg:p-8 h-full card-lift">
                  <div className="font-display text-4xl lg:text-5xl font-bold text-brand-600 tracking-display leading-none mb-3">
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
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Where we&apos;re based</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 tracking-display-tight leading-tight">
                  UK-registered, globally remote
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="max-w-2xl">
                <p className="text-base text-neutral-700 leading-relaxed mb-8">
                  Tackxel Ltd is a UK-registered Private Limited Company, headquartered in Manchester. We operate as a remote-first team, serving clients globally.
                </p>

                <div className="bg-white border border-neutral-200 rounded-3xl p-7 lg:p-8 shadow-card">
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
                Got something to ship? Let&apos;s scope it.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base lg:text-lg text-neutral-300 leading-relaxed mt-6 max-w-xl mx-auto">
                30 minutes with the founder. No deck, no sales rep &mdash; just a senior engineer thinking through your problem with you.
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
