import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Factory } from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export const metadata: Metadata = {
  title: "Co-manufacturer ERP — Case study",
  description:
    "Custom ERP built end to end for a US co-manufacturer serving major retailers. Production scheduling, multi-warehouse inventory, EDI integration with major retailers at 99.5% accuracy, and a mobile shop-floor app.",
  alternates: { canonical: "/case-studies/co-manufacturer-erp" },
  openGraph: {
    title: "Co-manufacturer ERP — Tackxel case study",
    description:
      "Custom ERP from zero. Production scheduling, multi-warehouse inventory, EDI integration at 99.5% accuracy, and a mobile shop-floor app.",
    url: "/case-studies/co-manufacturer-erp",
    type: "article",
  },
};

const builtItems = [
  "Production scheduling across multiple shifts and machines with capacity-aware sequencing.",
  "Real-time inventory across multiple warehouses with movement audit trails.",
  "Quality management with compliance checkpoints, hold/release flows, and full audit history.",
  "EDI integration with major retailers (Walmart, Target, Amazon) — purchase orders, ASNs, invoices, all at 99.5% accuracy.",
  "Role-based portals for Operations, Finance, and IT — each with the views and permissions their job actually needs.",
  "Mobile warehouse app for shop-floor teams — receive, pick, pack, label, and confirm without leaving the floor.",
  "Reporting and KPI dashboards built on the underlying production and inventory data — not bolted on after the fact.",
];

const techStack = [
  "AWS ECS (Auto Scaling)", "RDS PostgreSQL", "Application Load Balancer",
  "VPC with least-privilege IAM", "GitHub Actions CI/CD", "Docker",
  "EDI (X12)", "React", "Node.js", "TypeScript",
];

export default function CoManufacturerErpPage() {
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
              <Link href="/case-studies" className="hover:text-brand-300 transition-colors">Case studies</Link>
              <span>/</span>
              <span className="text-brand-300">Co-manufacturer ERP</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="badge-dark mb-6">
                  <span className="dot-pulse" />
                  Flagship · Manufacturing · ERP
                </span>
              </Reveal>
              <Reveal delay={80}>
                <div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">
                  Custom ERP, built from zero
                </div>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">
                  A complete ERP for a US co-manufacturer serving major retailers.
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">
                  Production scheduling, multi-warehouse inventory, retailer EDI compliance, and a mobile shop-floor app — all delivered as one platform, on AWS, with engineering rigor that holds up under retailer audits.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Link href="/contact" className="btn-brand">
                    Discuss a similar project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/case-studies" className="btn-ghost-light">
                    All case studies
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={250} direction="left">
              {/* PLACEHOLDER - swap with real visual at /public/images/case-studies/erp.jpg */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-card-dark">
                <Image
                  src="/images/case-studies/erp.jpg"
                  alt="Co-manufacturer ERP system architecture illustration"
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

      {/* HEADLINE STAT */}
      <section className="py-14 bg-neutral-950 text-white border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
              <div>
                <div className="font-display text-7xl lg:text-8xl font-bold text-white tracking-display leading-none">99.5%</div>
                <div className="text-sm text-brand-300 uppercase tracking-widest font-semibold mt-3">EDI accuracy</div>
              </div>
              <p className="text-base lg:text-lg text-neutral-300 leading-relaxed max-w-2xl">
                EDI is where retailer relationships are made or broken. Our purchase-order, ASN, and invoice exchange with major retailers runs at 99.5% accuracy — well inside retailer SLA thresholds, and audited cleanly month after month.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="py-20 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">The challenge</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Off-the-shelf ERPs choke on retailer EDI
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-5 text-base text-neutral-700 leading-relaxed max-w-2xl">
                <p>
                  Co-manufacturers serving big-box retailers operate at a different bar than most factories. Walmart, Target, and Amazon all enforce strict EDI compliance — purchase orders, ASNs, and invoices have to exchange cleanly, on schedule, with auditable accuracy. A few percentage points of error costs the relationship.
                </p>
                <p>
                  Layered on top: real-time inventory across multiple warehouses, quality checkpoints with full audit trails, and shop-floor workflows that have to work for an operator with gloves on, not a desktop user. The off-the-shelf ERPs the client had evaluated either bolted EDI on as a brittle add-on, or required a 12-month implementation just to model the production process.
                </p>
                <p>
                  They needed a partner who could deliver the whole platform — production, inventory, quality, EDI, mobile, dashboards — as one system, built right the first time.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">How we approached it</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Production process first, software second
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-5 text-base text-neutral-700 leading-relaxed max-w-2xl">
                <p>
                  We started on the floor, not in the IDE. Two weeks of discovery with Operations, Finance, and IT mapping the actual production process — order intake, scheduling, raw-material flow, quality gates, shipping. The ERP had to fit the way the business already worked, then make it faster.
                </p>
                <p>
                  From there we cut a phased delivery plan: production scheduling and inventory first, EDI and retailer integration second, quality management and audit trails third, mobile shop-floor app fourth, dashboards last. Each phase shipped to production behind a feature flag — no big-bang cutover, no week-long deploys.
                </p>
                <p>
                  Infrastructure went on AWS from day one — ECS with Auto Scaling, RDS PostgreSQL with point-in-time recovery, an Application Load Balancer in front, VPC with least-privilege IAM, and GitHub Actions for CI/CD. Boring, audit-ready, operator-friendly.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILT */}
      <section className="py-20 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">What we built</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  One platform, every workflow
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Built as a single coherent platform — not seven products glued together. Roles, data, and audit trails flow through everything.
              </p>
            </div>
          </Reveal>

          <div className="bg-neutral-50 border border-neutral-200 rounded-lg overflow-hidden">
            <ul className="divide-y divide-neutral-200">
              {builtItems.map((item, i) => (
                <Reveal key={item} delay={i * 50}>
                  <li className="flex items-start gap-4 p-6 hover:bg-white transition-colors">
                    <div className="w-6 h-6 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-brand-600" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm lg:text-base text-neutral-800 leading-relaxed">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 lg:py-24 bg-neutral-950 text-white border-b border-neutral-800 relative overflow-hidden">
        <Parallax speed={0.15} className="absolute top-0 right-0 hidden lg:block pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" />
        </Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-10 items-end">
              <div>
                <div className="text-eyebrow text-brand-300 uppercase mb-4">Tech stack</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-white">
                  Boring infrastructure, on purpose
                </h2>
              </div>
              <p className="text-base text-neutral-300 leading-relaxed max-w-xl lg:justify-self-end">
                Every choice is one operators can audit, scale, and replace independently. No esoteric stack, no lock-in to one vendor.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-200 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="py-20 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">The outcome</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Live in production, audit-clean
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="max-w-2xl">
                <p className="text-base text-neutral-700 leading-relaxed mb-8">
                  The platform is live in production across the client&apos;s operations. EDI exchange with major retailers runs at 99.5% accuracy. Operations, Finance, and IT each have the portal they need. Shop-floor teams work the mobile app. Audits — internal and retailer — pass cleanly.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
                    <div className="font-display text-3xl font-bold text-neutral-950 mb-1 tracking-display">99.5%</div>
                    <div className="text-sm text-neutral-600">EDI accuracy with major retailers</div>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <Factory className="w-5 h-5 text-brand-600" />
                      <div className="font-display text-lg font-semibold text-neutral-950">In production</div>
                    </div>
                    <div className="text-sm text-neutral-600">Across operations, finance, IT, and the shop floor</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-eyebrow text-brand-300 uppercase mb-4">Build something similar</div>
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">
              Got a system this size in your head? Let&apos;s talk.
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">
              A 30-minute call with the founder. No slide decks, no sales reps — just an engineer thinking through your problem with you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-brand">
                Discuss a similar project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/case-studies" className="btn-ghost-light">
                All case studies
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
