import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Network } from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export const metadata: Metadata = {
  title: "Real-estate syndication — Case study",
  description:
    "Investment and syndication marketplace for a US multi-unit real estate platform. Deal discovery, investor onboarding, group syndication, and a contractor + lender network — on AWS with CloudFront and staged CI/CD.",
  alternates: { canonical: "/case-studies/real-estate-syndication" },
  openGraph: {
    title: "Real-estate syndication — Tackxel case study",
    description:
      "Marketplace coordinating investors, sponsors, and the contractor + lender network — built as one platform.",
    url: "/case-studies/real-estate-syndication",
    type: "article",
  },
};

const builtItems = [
  "Deal discovery portal with advanced filtering — geography, asset type, deal stage, return profile, and more.",
  "Investor onboarding and goal profiling — KYC-friendly intake plus investment-thesis capture.",
  "Stage-based acquisition workflow — every deal moves through clearly defined gates with owners and SLAs.",
  "Syndication interface for group investments — pooling, commitments, and distribution tracking on one screen.",
  "Contractor and lender network directory — searchable, vetted, and integrated into deal workflows.",
  "AWS deployment with CloudFront CDN, Docker Compose, and staged CI/CD for safe rollouts.",
];

const techStack = [
  "Next.js", "Node.js", "TypeScript", "AWS", "CloudFront CDN",
  "Docker Compose", "Staged CI/CD", "PostgreSQL",
];

export default function RealEstateSyndicationPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative hero-glow text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <Parallax speed={0.15} className="absolute top-20 right-20 hidden lg:block pointer-events-none">
          <div className="w-72 h-72 rounded-full bg-brand-500/10 blur-3xl float-slow" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-mono">
              <Link href="/" className="hover:text-brand-300 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/case-studies" className="hover:text-brand-300 transition-colors">Case studies</Link>
              <span>/</span>
              <span className="text-brand-300">Real-estate syndication</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="badge-dark mb-6">
                  <span className="dot-pulse" />
                  PropTech · Marketplace
                </span>
              </Reveal>
              <Reveal delay={80}>
                <div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">
                  Investment & syndication marketplace
                </div>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">
                  A marketplace coordinating investors, sponsors, and the network around them.
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">
                  Deal discovery, investor onboarding, group syndication, and a contractor + lender network — built as one platform, on AWS with CloudFront and staged CI/CD.
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
              {/* PLACEHOLDER - swap with real visual at /public/images/case-studies/syndication.jpg */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-card-dark">
                <Image
                  src="/images/case-studies/syndication.jpg"
                  alt="Real-estate syndication marketplace illustration"
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

      {/* CHALLENGE */}
      <section className="py-20 lg:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">The challenge</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  Three sides, all need first-class UX
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-5 text-base text-neutral-700 leading-relaxed max-w-2xl">
                <p>
                  Real estate syndication has to coordinate three parties at once: investors, deal sponsors, and the contractor and lender network that turns a deal into reality. Most existing platforms pick one side and underserve the other two.
                </p>
                <p>
                  The client wanted to launch with the full network from day one — discovery, onboarding, syndication, and the contractor + lender directory all available at launch, not staged across six quarters.
                </p>
                <p>
                  That meant a marketplace topology more complex than a typical SaaS, with workflows that reach across roles cleanly.
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
                  Topology, then workflows, then UX
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-5 text-base text-neutral-700 leading-relaxed max-w-2xl">
                <p>
                  Discovery focused on the marketplace topology: who can see what, who can act on what, what state lives at the deal level vs. the investor level vs. the network. Getting that right up front saved months of authorization re-work later.
                </p>
                <p>
                  Acquisition workflows were modelled as explicit stage machines with owners and SLAs — sponsors and investors always know whose move it is. Deal discovery was CDN-first via CloudFront so listings load fast for browse-mode users.
                </p>
                <p>
                  Staged CI/CD with Docker Compose meant every feature shipped through a staging environment that looked like prod before it hit prod.
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
                  The whole marketplace, day one
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Investors, sponsors, contractors, and lenders all on the same platform from launch.
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
                  AWS with a CDN-first front end
                </h2>
              </div>
              <p className="text-base text-neutral-300 leading-relaxed max-w-xl lg:justify-self-end">
                Browse mode and signed-in workflows both fast. Staged deploys mean every feature gets a dry run.
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
                  Live, with the full network in place
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="max-w-2xl">
                <p className="text-base text-neutral-700 leading-relaxed mb-8">
                  The marketplace is live in production. Investors, sponsors, and the contractor + lender network are all on the same platform from day one — no quarter-by-quarter rollout of missing sides.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <Network className="w-5 h-5 text-brand-600" />
                      <div className="font-display text-lg font-semibold text-neutral-950">Full network live</div>
                    </div>
                    <div className="text-sm text-neutral-600">Investors, sponsors, contractors, and lenders — together from launch</div>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
                    <div className="font-display text-lg font-semibold text-neutral-950 mb-1">Staged CI/CD</div>
                    <div className="text-sm text-neutral-600">Every release rehearsed in staging before it hits prod</div>
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
              Got a marketplace with multiple sides? Let&apos;s talk.
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
