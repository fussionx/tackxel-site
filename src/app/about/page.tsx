import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export const metadata: Metadata = {
  title: "About Tackxel — Senior Software Engineering Firm Since 2012",
  description: "Tackxel is an engineering-led software development firm founded in 2012. 130+ senior engineers across four continents, no sales team, no junior bench. Learn about our principles, leadership, and 14-year track record.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Tackxel — Senior Software Engineering Firm",
    description: "Engineering-led services since 2012. Senior teams, transparent delivery, long-term partnerships.",
    url: "/about",
  },
};

const principles = [
  { name: "Senior by default", desc: "Every engineer at Tackxel has at least five years of production experience. We don't hide juniors behind senior interviews — when you hire us, you get the team that does the work." },
  { name: "Transparent delivery", desc: "Shared sprint boards, live deployment dashboards, weekly written status reports. You see the same data we do. Surprises are operational failures, not management style." },
  { name: "Outcome accountability", desc: "We sign Statements of Work that codify deliverables, timelines, and success metrics. If we miss our commitments, we credit the engagement — no escalation required." },
  { name: "Long-term thinking", desc: "Our average client relationship spans 4.2 years. We optimize for the third project, not the first invoice. That's how we've grown to 130+ engineers without a sales team." },
  { name: "Continuous investment", desc: "10% of revenue is reinvested into internal R&D, training, and tooling. Every engineer gets an annual learning budget — because the technology stack you need next year doesn't exist yet." },
];

const timeline = [
  { year: "2012", title: "Tackxel founded", desc: "Founded by software engineers who had been on the wrong side of bad outsourcing engagements. Built the firm we wished we could have hired." },
  { year: "2015", title: "First Fortune 500 client", desc: "Delivered a payments platform replatform for a top US insurance carrier. The partnership continues today." },
  { year: "2018", title: "Crossed 50 engineers", desc: "Opened our second office and formalized the engineering practices we still use — pair programming, internal RFCs, post-mortems without blame." },
  { year: "2021", title: "SOC 2 Type II certified", desc: "Achieved SOC 2 Type II, ISO 27001, and HIPAA compliance — opening enterprise and regulated-industry engagements." },
  { year: "2024", title: "AI practice launched", desc: "Spun up a dedicated AI engineering team. First production agent system shipped to a logistics client in 11 weeks." },
  { year: "2026", title: "130+ engineers, four continents", desc: "Named Top Clutch Global Winner. Active engagements across six continents with no sales or marketing team." },
];

const leadership = [
  { initial: "A", name: "Founding Partner", role: "Chief Executive Officer", bio: "20+ years building software companies. Previously led engineering at two venture-backed startups acquired for a combined $400M.", accolade: "Forbes Tech Council member" },
  { initial: "M", name: "Founding Partner", role: "Chief Technology Officer", bio: "Distributed systems engineer with deep experience in fintech and healthcare. Architected platforms serving 30M+ monthly active users.", accolade: "Open-source contributor (Apache, CNCF)" },
  { initial: "S", name: "VP of Engineering", role: "Engineering & Delivery", bio: "Built and scaled engineering organizations from 5 to 100+. Specializes in turning chaotic projects into predictable delivery machines.", accolade: "Author, two technical books" },
];

const offices = [
  { country: "United States", city: "Dover, Delaware", address: "8 The Green, STE A" },
  { country: "Canada", city: "Toronto, Ontario", address: "1 Fore Street" },
  { country: "Australia", city: "Sydney, NSW", address: "45 Lachlan St" },
  { country: "Pakistan", city: "Lahore, Punjab", address: "30 Shah Jamal Road" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 hero-glow text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <Parallax speed={0.12} className="absolute top-20 right-20 hidden lg:block pointer-events-none">
          <div className="w-80 h-80 rounded-full bg-brand-500/10 blur-3xl float-slow" />
        </Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <Reveal>
            <div className="max-w-3xl">
              <span className="badge-dark mb-6">
                <span className="dot-pulse" />
                About Tackxel
              </span>
              <h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">
                The software engineering firm we always wished we could hire.
              </h1>
              <p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">
                Tackxel is an engineering-led services company. We don&apos;t have a sales team. We don&apos;t book ads. Every engagement we win comes from referrals, repeat business, or technical reputation.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/contact" className="btn-brand">Work with us<ArrowRight className="w-4 h-4" /></Link>
                <Link href="/services" className="btn-ghost-light">See what we do</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <Reveal>
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">The firm</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">Engineering as a discipline, not a function</h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-5 text-base text-neutral-700 leading-relaxed">
                <p>Tackxel was founded in 2012 by software engineers who&apos;d spent years on the wrong side of outsourcing engagements — watching projects slip, watching code quality erode, watching the engineers they trusted get reassigned without notice.</p>
                <p>We built Tackxel to be the firm we couldn&apos;t hire ourselves. Senior teams. Transparent delivery. Long-term relationships. No bench warming, no juniors hidden behind senior interviews, no surprise resource changes.</p>
                <p>Today we operate from four offices across the United States, Canada, Australia, and Pakistan. Our 130+ engineers and designers ship software for venture-backed startups, public companies, and Fortune 500 enterprises.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Principles</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">Five commitments. Every engagement. No exceptions.</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {principles.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className="bg-white p-8 hover:bg-neutral-50 transition-colors h-full">
                  <div className="font-mono text-xs text-brand-600 mb-4 font-semibold">0{i + 1}</div>
                  <h3 className="text-h3 text-neutral-950 mb-3">{p.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Timeline</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">14 years of compound engineering</h2>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[80px] top-0 bottom-0 w-px bg-neutral-200" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 80}>
                  <div className="grid grid-cols-[80px_1fr] gap-8">
                    <div className="font-display text-lg font-bold text-brand-600 tracking-display pt-0.5">{t.year}</div>
                    <div className="relative pl-8">
                      <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-brand-600 rounded-full ring-4 ring-white" />
                      <h3 className="text-h3 text-neutral-950 mb-2">{t.title}</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl">{t.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="text-eyebrow text-brand-600 uppercase mb-4">Leadership</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">Engineers who&apos;ve built and operated at scale</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((l, i) => (
              <Reveal key={l.role} delay={i * 100}>
                <div className="bg-white border border-neutral-200 rounded-lg p-8 shadow-subtle card-lift h-full">
                  <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center text-base font-semibold mb-6">{l.initial}</div>
                  <h3 className="text-h3 text-neutral-950">{l.name}</h3>
                  <p className="text-sm text-brand-600 font-semibold mb-4">{l.role}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">{l.bio}</p>
                  <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider pt-4 border-t border-neutral-100">{l.accolade}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Global presence</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">Four offices. One delivery standard.</h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed self-end">We operate as a single firm across four time zones. Every project gets a delivery lead in your time zone, a development team that overlaps your working hours, and the same engineering standards regardless of where the work happens.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {offices.map((o, i) => (
              <Reveal key={o.country} delay={i * 80}>
                <div className="bg-white p-8 hover:bg-neutral-50 transition-colors h-full">
                  <Globe className="w-5 h-5 text-brand-600 mb-6" />
                  <div className="text-xs text-neutral-500 uppercase tracking-wider font-semibold mb-2">{o.country}</div>
                  <h3 className="text-h3 text-neutral-950 mb-2">{o.city}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{o.address}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
