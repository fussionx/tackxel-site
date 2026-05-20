import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Smartphone } from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export const metadata: Metadata = {
  title: "Storage IoT — Case study",
  description:
    "Native iOS and Android apps with IoT integration for a US storage real estate operator. Remote gate access, climate control, real-time unit status, and an AWS backend, all delivered as one project.",
  alternates: { canonical: "/case-studies/storage-iot" },
  openGraph: {
    title: "Storage IoT — Tackxel case study",
    description:
      "Mobile + IoT + cloud delivered as one project: native iOS and Android with gate access, climate control, and real-time status.",
    url: "/case-studies/storage-iot",
    type: "article",
  },
};

const builtItems = [
  "Native iOS and Android apps built from scratch for tenant and admin use cases.",
  "IoT integration for remote gate access, climate control, and real-time unit status.",
  "Guest and vendor permission management — time-bounded access, audit-logged.",
  "AWS backend on EC2, S3, and RDS, Dockerized end to end with reproducible builds.",
  "CI/CD pipelines for one-tap App Store and Play Store releases.",
  "App Store and Google Play submissions, store listing assets, and review-cycle handling.",
];

const techStack = [
  "Swift (iOS)", "Kotlin (Android)", "AWS EC2", "AWS S3", "AWS RDS",
  "Docker", "IoT (BLE / cellular)", "App Store Connect", "Google Play Console", "CI/CD",
];

export default function StorageIotPage() {
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
              <span className="text-brand-300">Storage IoT</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="badge-dark mb-6">
                  <span className="dot-pulse" />
                  Real Estate · IoT · Mobile
                </span>
              </Reveal>
              <Reveal delay={80}>
                <div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">
                  Mobile + IoT for a US storage operator
                </div>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">
                  Native iOS and Android with IoT-controlled access, for a US storage operator.
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">
                  Mobile + IoT + cloud delivered as one project — gate access, climate control, and real-time unit status, all on an AWS backend with one-tap store releases.
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
              {/* PLACEHOLDER - swap with real visual at /public/images/case-studies/storage-iot.jpg */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-card-dark">
                <Image
                  src="/images/case-studies/storage-iot.jpg"
                  alt="Storage IoT mobile + cloud architecture illustration"
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
                  Mobile, IoT, and cloud — usually three teams
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-5 text-base text-neutral-700 leading-relaxed max-w-2xl">
                <p>
                  Storage operators are under pressure to digitize. Customers expect to manage their unit, gate access, and climate from their phone — including granting time-bounded access to family, movers, or contractors. That's a mobile app, an IoT layer, and a cloud backend, all moving in lockstep.
                </p>
                <p>
                  Most operators don't have any of those in-house. Stitching together three vendors — a mobile shop, a hardware integrator, a cloud consultancy — usually means three timelines, three blame circles, and a system that nobody owns end to end.
                </p>
                <p>
                  The client wanted one partner who could deliver all three as a single coherent project.
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
                  Hardware-cloud-app boundaries first
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-5 text-base text-neutral-700 leading-relaxed max-w-2xl">
                <p>
                  Discovery started where most projects get stuck: where does responsibility move between the hardware, the cloud, and the apps? We mapped every command path — unlock gate, set climate, surface status — and decided which side of each boundary owned state, retry logic, and security.
                </p>
                <p>
                  Native apps (Swift on iOS, Kotlin on Android) were the right call: BLE and cellular reliability for IoT command paths, plus access to platform-level security features tenants expect. The backend went on AWS — EC2, S3, RDS — Dockerized with reproducible builds and CI/CD wired in from week one.
                </p>
                <p>
                  Store submissions are their own discipline. We handled provisioning, certificates, review responses, and phased rollouts in-house so the client never had to learn what a TestFlight is.
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
                  One team, three layers
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed max-w-xl lg:justify-self-end">
                Every layer engineered alongside the others — no vendor handoffs, no blame loops, one team that owns the whole stack.
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
                  Native where it counts, boring where it doesn&apos;t
                </h2>
              </div>
              <p className="text-base text-neutral-300 leading-relaxed max-w-xl lg:justify-self-end">
                Platform-native for the mobile and IoT path. Boring, reproducible AWS for the backend.
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
                  Shipped to both stores, live in tenant hands
                </h2>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="max-w-2xl">
                <p className="text-base text-neutral-700 leading-relaxed mb-8">
                  The platform is live on the App Store and Google Play. Tenants manage units, gates, and climate from their phones. Operators run the admin side. Guest and vendor permissioning works the way the operations team expected it to.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <Smartphone className="w-5 h-5 text-brand-600" />
                      <div className="font-display text-lg font-semibold text-neutral-950">App Store + Play Store</div>
                    </div>
                    <div className="text-sm text-neutral-600">Live on both stores with phased rollout in place</div>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
                    <div className="font-display text-lg font-semibold text-neutral-950 mb-1">In production</div>
                    <div className="text-sm text-neutral-600">Mobile, IoT, and cloud all running as one platform</div>
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
              Got a mobile + IoT project on the table? Let&apos;s talk.
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
