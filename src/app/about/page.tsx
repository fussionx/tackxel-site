import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export const metadata: Metadata = {
  title: "About Tackxel — A boutique product engineering studio",
  description:
    "Tackxel is a small senior team founded in 2024 by Uzair Sufi after seven years leading mobile engineering on production systems across fintech, food tech, healthcare, real estate, and wearables.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Tackxel — A boutique product engineering studio",
    description:
      "Founded in 2024 by Uzair Sufi. A small senior team building mobile, web, IoT, and AI products for founders and product teams.",
    url: "/about",
    type: "website",
  },
};

const principles = [
  {
    no: "01",
    title: "Senior by default",
    desc: "No juniors hidden behind senior interviews. The people you meet on the discovery call are the ones writing the code.",
  },
  {
    no: "02",
    title: "Ship to production, not to demo",
    desc: "We don't make slideware. Every project goes live with real users — that's the only success metric we trust.",
  },
  {
    no: "03",
    title: "Honesty over hype",
    desc: "No inflated awards, no fabricated metrics, no Fortune 500 theatrics. Small senior team, real receipts.",
  },
  {
    no: "04",
    title: "Long-term over the first invoice",
    desc: "We optimize for the second project. Clients come back because the first one was worth coming back to.",
  },
];

const team = [
  { src: "/images/team/designer.jpg", role: "Product Designer", area: "Design & UX" },
  { src: "/images/team/dev-1.jpg",    role: "Senior Engineer",  area: "Engineering" },
  { src: "/images/team/dev-2.jpg",    role: "Engineer",         area: "Engineering" },
  { src: "/images/team/marketing.jpg", role: "Growth",          area: "Marketing" },
];

const priorSectors = [
  "Saudi fintech",
  "Food tech",
  "Healthcare",
  "Real estate",
  "Wearables & BLE hardware",
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 hero-glow text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <Parallax speed={0.12} className="absolute top-20 right-20 hidden lg:block pointer-events-none">
          <div className="w-80 h-80 rounded-full bg-brand-500/10 blur-3xl float-slow" />
        </Parallax>
        <Parallax speed={-0.08} className="absolute bottom-10 left-20 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-400/5 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <Reveal>
            <div className="max-w-3xl">
              <span className="badge-dark mb-6">
                <span className="dot-pulse" />
                About Tackxel
              </span>
              <h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">
                A small team of senior builders.
              </h1>
              <p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">
                Tackxel is a boutique product engineering studio. We exist because founders and product teams need real builders — not agency overhead, not junior bench, not slideware.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/contact" className="btn-brand">
                  Book a discovery call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies" className="btn-ghost-light">
                  See our work
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-brand-300" />
                Remote-first team — clients globally
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div className="relative">
                {/* PLACEHOLDER - swap with real photo at /public/images/team/uzair.jpg */}
                <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-elevated">
                  <Image
                    src="/images/team/uzair.jpg"
                    alt="Uzair Sufi, founder of Tackxel"
                    width={600}
                    height={600}
                    className="w-full h-auto block"
                    priority
                  />
                </div>
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-500/10 to-transparent blur-3xl -z-10 pointer-events-none" />
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4 font-semibold tracking-widest">Founder</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-2">
                  Uzair Sufi
                </h2>
                <div className="text-base text-neutral-500 font-medium mb-8">Founder &amp; Engineering Lead</div>

                <div className="space-y-5 text-base text-neutral-700 leading-relaxed max-w-xl">
                  <p>
                    Tackxel was founded in 2024. Before it, I spent seven years building production mobile and web systems — leading mobile engineering on shipped products across {priorSectors.slice(0, -1).join(", ")}, and {priorSectors.at(-1)?.toLowerCase()}.
                  </p>
                  <p>
                    I started Tackxel because the founders and product leaders I respected kept hitting the same wall: they needed senior engineering hands fast, but the only options were agencies with junior bench, or full-time hires that took six months to land. Neither matches how product teams actually need to move.
                  </p>
                  <p>
                    So we built the team I wished I could hire. Small. Senior. No sales layer. The person you talk to on the first call is the person on the project.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">
                    Talk to the founder
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">What we believe</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Four things we don't compromise on
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                These are the principles we'd want from a partner — so they're the ones we hold ourselves to.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {principles.map((p, i) => (
              <Reveal key={p.no} delay={i * 80}>
                <div className="bg-white p-8 h-full card-lift">
                  <div className="flex items-start gap-5">
                    <div className="font-mono text-xs font-bold text-brand-600 mt-1 flex-shrink-0">{p.no}</div>
                    <div>
                      <h3 className="text-h3 text-neutral-950 mb-3">{p.title}</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE TEAM */}
      <section className="py-20 lg:py-28 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">The team</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
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
                <article className="group">
                  {/* PLACEHOLDER - swap with real photo at /public/images/team/{slug}.jpg */}
                  <div className="relative rounded-xl overflow-hidden border border-neutral-200 mb-4 aspect-square">
                    <Image
                      src={m.src}
                      alt={`${m.role} at Tackxel`}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-base font-semibold text-neutral-950 leading-snug">{m.role}</div>
                  <div className="text-sm text-neutral-500 mt-0.5">{m.area}</div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <p className="mt-10 text-sm text-neutral-500 max-w-2xl">
              Names and photos update as the team grows. The role each person owns stays the same — one designer, two engineers, one growth lead. That's the operating shape.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRIOR EXPERIENCE */}
      <section className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Before Tackxel</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Seven years of shipping, in five sectors
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div>
                <p className="text-base text-neutral-700 leading-relaxed mb-6 max-w-2xl">
                  Before founding Tackxel, Uzair led mobile engineering on shipped products at Clustox across these sectors. This is the production background that informs how we build today — but the projects below are <span className="font-semibold text-neutral-900">not Tackxel case studies</span>. For Tackxel's own work, see the case studies page.
                </p>

                <ul className="grid sm:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden mb-6">
                  {priorSectors.map((s) => (
                    <li key={s} className="bg-white px-5 py-4 text-sm text-neutral-800 font-medium">
                      {s}
                    </li>
                  ))}
                </ul>

                <Link href="/case-studies" className="btn-secondary">
                  See Tackxel case studies
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-eyebrow text-brand-300 uppercase mb-4">Get in touch</div>
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">
              Got something to build? Book a discovery call.
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">
              A 30-minute call with the founder. No slide decks, no sales reps — just an engineer thinking through your problem with you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
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
      </section>
    </>
  );
}
