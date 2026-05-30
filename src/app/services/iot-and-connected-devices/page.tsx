import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Calculator, ShieldCheck,
  Rocket, HeartPulse, Factory,
  Bluetooth, Cpu, Cloud, Lock, RefreshCw, Wifi,
  Award, Clock, Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import ServiceSeoTail from "@/components/ServiceSeoTail";

export const metadata: Metadata = {
  title: "IoT App Development UK | BLE, Wearables, Connected Devices | Tackxel",
  description:
    "UK IoT app development. BLE, NFC, wearables, connected device mobile apps. Built LuxeLocker IoT-powered storage. Book a call.",
  keywords: [
    "IoT app development UK",
    "BLE app development UK",
    "NFC app development",
    "wearable app development UK",
    "connected device development UK",
    "smart hardware app UK",
    "AWS IoT development UK",
  ],
  alternates: { canonical: "/services/iot-and-connected-devices" },
  openGraph: {
    title: "IoT App Development UK — BLE, Wearables, Connected Devices | Tackxel",
    description:
      "UK IoT app development. BLE, NFC, wearables, and connected device mobile apps by a senior team. Built LuxeLocker IoT storage and WearOpal smart ring SDK.",
    url: "/services/iot-and-connected-devices",
    type: "website",
  },
};

const customerTypes = [
  {
    Icon: Rocket,
    label: "Hardware-integrated startup",
    headline: "Your product is the device and the app, not one or the other.",
    desc: "You're shipping a physical device — locks, sensors, controllers — and the experience has to land on a phone too. We deliver hardware integration, the mobile app, and the cloud as one team so the boundaries between layers don't become handoff problems.",
    points: [
      "Native iOS and Android with BLE / NFC / cellular reliability tuned to your hardware.",
      "Cloud telemetry pipeline sized to your unit economics.",
      "App Store and Play Store submissions including hardware-permission flows.",
    ],
  },
  {
    Icon: HeartPulse,
    label: "Wearables and health-tech",
    headline: "BLE-connected hardware with mobile companion and cloud data.",
    desc: "BLE wearables and health devices stand or fall on connection reliability and data integrity. We build the companion app, the sync layer, and the backend that survives flaky connections and intermittent users.",
    points: [
      "BLE protocol design tuned for reliability under real-world conditions.",
      "Offline-first sync with eventual cloud consistency, not just \"online or broken\".",
      "Data integrity and privacy aware — encrypted at rest, scoped by user, auditable.",
    ],
  },
  {
    Icon: Factory,
    label: "Industrial and property IoT",
    headline: "Fleet-grade telemetry, access control, and monitoring.",
    desc: "Gate access, climate control, monitoring, fleet telemetry — the workflows behind these are operational, not consumer. We build with the operations team in mind: audit trails, permissioning, and dashboards that actually get used.",
    points: [
      "Permission and access management with guest, vendor, and audit-log scoping.",
      "Real-time status surfaces — built for ops dashboards, not just consumer apps.",
      "Operations-grade reliability targets, designed in, not bolted on.",
    ],
  },
];

const deliverables = [
  {
    Icon: Bluetooth,
    title: "Hardware integration (BLE / NFC / cellular)",
    desc: "Protocol design, pairing flows, command paths, and reliability tuning — across BLE, NFC, and cellular IoT — by engineers who know the failure modes.",
  },
  {
    Icon: Cpu,
    title: "Native and cross-platform apps",
    desc: "Native Swift / Kotlin for hardware-heavy paths where platform reliability matters; React Native / Flutter when cross-platform wins. Chosen against your team and product, not religion.",
  },
  {
    Icon: Cloud,
    title: "AWS-based telemetry pipeline",
    desc: "IoT Core, MQTT, Kinesis, Lambda, RDS — sized to your device count and message rate. Cost-aware from day one, not after the bill lands.",
  },
  {
    Icon: Lock,
    title: "Access and permission management",
    desc: "Owner, guest, vendor, and admin scoping. Time-bounded access. Audit logs. Designed for the workflows operations teams actually run.",
  },
  {
    Icon: RefreshCw,
    title: "Offline-first sync",
    desc: "Connections drop. Apps go to background. Phones get rebooted. The sync layer handles all of it without losing data or surfacing errors to the user.",
  },
  {
    Icon: Wifi,
    title: "App Store + Play Store submission",
    desc: "Provisioning, signing, hardware-permission language for the store reviewers, phased rollouts, and review-cycle handling — we do the whole submission gauntlet.",
  },
];

const processSteps = [
  {
    no: "01",
    title: "Discover",
    duration: "Week 1–2",
    desc: "Hardware-cloud-app boundary mapping. Where does state live? Where does retry logic sit? What's the security model? We answer these before writing protocol code.",
    deliverables: ["Boundary map", "Security model", "Reliability targets"],
  },
  {
    no: "02",
    title: "Design",
    duration: "Week 2–4",
    desc: "Protocol design, telemetry schema, mobile UX, and infrastructure design move together. The hardest part of IoT is the seams — we engineer them deliberately.",
    deliverables: ["Protocol spec", "Telemetry schema", "Infra architecture"],
  },
  {
    no: "03",
    title: "Build",
    duration: "Ongoing",
    desc: "Senior engineers ship in two-week sprints across hardware integration, mobile, and cloud — without dropping balls between disciplines.",
    deliverables: ["Production-grade code", "CI/CD pipelines", "Test coverage where it counts"],
  },
  {
    no: "04",
    title: "Ship",
    duration: "Launch + ongoing",
    desc: "Phased rollouts with feature flags. Real-world reliability is monitored, not assumed. We don't hand over and disappear — IoT has long tails.",
    deliverables: ["Monitoring & alerting", "Runbooks", "Post-launch support"],
  },
];

const techStack = [
  {
    name: "Swift + Kotlin",
    line: "Native, for the BLE and cellular command paths where platform reliability is non-negotiable.",
  },
  {
    name: "React Native + Flutter",
    line: "Cross-platform, when team economics or feature parity outweigh hardware-path specifics.",
  },
  {
    name: "AWS IoT Core + MQTT",
    line: "Pub/sub telemetry, device shadows, and rules engines for fleet-scale messaging.",
  },
  {
    name: "Docker + CI/CD",
    line: "Reproducible builds across firmware-adjacent services, app pipelines, and backend.",
  },
];

export default function IotPage() {
  return (
    <>
      {/* HERO — warm */}
      <section className="relative hero-warm pt-32 pb-20 lg:pb-24 overflow-hidden">
        <Parallax speed={0.08} className="absolute top-24 right-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[24rem] h-[24rem] rounded-full bg-orange-200/40 blur-3xl float-slow" />
        </Parallax>
        <Parallax speed={-0.06} className="absolute bottom-0 left-10 hidden lg:block pointer-events-none z-0">
          <div className="w-[26rem] h-[26rem] rounded-full bg-brand-200/40 blur-3xl" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-8 font-mono">
              <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
              <span className="text-neutral-300">/</span>
              <Link href="/services" className="hover:text-brand-600 transition-colors">Services</Link>
              <span className="text-neutral-300">/</span>
              <span className="text-brand-600">IoT &amp; Connected Devices</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="badge mb-6">
                  <span className="dot-pulse" />
                  BLE · NFC · Wearables · Smart hardware
                </span>
              </Reveal>
              <Reveal delay={80}>
                <div className="text-eyebrow text-brand-600 uppercase font-semibold tracking-widest mb-4">
                  IoT &amp; Connected Devices
                </div>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight leading-[1.05]">
                  IoT App Development UK <span className="text-brand-600">— BLE, NFC, Wearables &amp; Connected Devices</span>
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-lg text-neutral-700 mt-6 max-w-2xl leading-relaxed">
                  Tackxel is a UK IoT app development team that ships BLE, NFC, wearable, and connected-device mobile apps for hardware-led products. We built <Link href="/case-studies/luxelocker" className="text-brand-700 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-500 transition-colors">LuxeLocker</Link> (IoT-enabled storage with cloud lockers) and <Link href="/case-studies/wearopal" className="text-brand-700 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-500 transition-colors">WearOpal</Link> (smart ring with a custom BLE SDK).
                </p>
              </Reveal>
              <Reveal delay={260}>
                <p className="text-base text-neutral-600 mt-4 max-w-2xl leading-relaxed">
                  One senior team across the hardware integration, the mobile app, and the AWS-based telemetry pipeline. No vendor handoffs, no blame loops, no system that nobody owns end to end.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Link href="/contact" className="btn-brand">
                    <Calendar className="w-4 h-4" />
                    Book a discovery call
                  </Link>
                  <Link href="/contact?intent=estimate" className="btn-secondary">
                    <Calculator className="w-4 h-4" />
                    Get a delivery estimate
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="mt-5 flex items-center gap-2 text-sm text-neutral-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                  Free 30-minute scoping call with the founder. NDA on request.
                </div>
              </Reveal>
            </div>

            <Reveal delay={250} direction="left">
              {/* PLACEHOLDER - swap with real visual at /public/images/services/iot.jpg */}
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200 shadow-elevated">
                <Image
                  src="/images/services/iot.jpg"
                  alt="IoT and connected devices architecture illustration"
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

      {/* WHO THIS IS FOR */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Who this is for</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">
                Three shapes of IoT work <span className="text-brand-600">we keep being asked for</span>
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">
                Different starting points, same team across hardware, app, and cloud.
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
                  Concrete deliverables, <span className="text-brand-600">across every layer</span>
                </h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">
                Hardware, app, and cloud handled in-house. Every layer engineered alongside the others — no vendor blame circles.
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
                Discover. Design. Build. <span className="text-brand-200">Ship.</span>
              </h2>
              <p className="text-base text-brand-50 leading-relaxed max-w-3xl">
                The same four-phase model adapted to IoT's particular hazards: protocol gotchas, flaky connections, and operational dashboards that have to work for people who aren't engineers.
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

      {/* TECH STACK */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Tech stack</div>
              <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">
                Native where it counts, <span className="text-brand-600">boring everywhere else</span>
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">
                Platform-native for the hardware command paths. Conventional AWS for the backend. The scoping call is where we make the call together.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {techStack.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="bg-white p-7 h-full card-lift flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center mb-5">
                    <Sparkles className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-950 mb-2">{t.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{t.line}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY — STORAGE IOT */}
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
                <div className="text-eyebrow text-brand-300 uppercase mb-4 font-semibold tracking-widest">Case study · Real Estate · IoT</div>
                <h3 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl">
                  Mobile + IoT + cloud for a US storage operator.
                </h3>
                <p className="text-base text-neutral-300 leading-relaxed max-w-2xl mb-6">
                  Native iOS and Android apps with IoT-controlled gate access, climate control, and real-time unit status. Paired with an AWS backend (EC2, S3, RDS), Dockerized, with CI/CD pipelines and App Store + Play Store releases handled in-house.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="font-display text-lg font-bold text-white mb-1">Live on stores</div>
                    <div className="text-xs text-neutral-400">App Store and Google Play</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="font-display text-lg font-bold text-white mb-1">Hardware + app + cloud</div>
                    <div className="text-xs text-neutral-400">All three by one team</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="font-display text-lg font-bold text-white mb-1">In production</div>
                    <div className="text-xs text-neutral-400">Tenants, admins, vendors</div>
                  </div>
                </div>
                <Link href="/case-studies/luxelocker" className="btn-brand">
                  Read the case study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <Reveal delay={200} direction="left">
                {/* PLACEHOLDER - swap with real visual at /public/images/case-studies/storage-iot.jpg */}
                <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-card-dark">
                  <Image
                    src="/images/case-studies/storage-iot.jpg"
                    alt="Storage IoT case study visual"
                    width={1200}
                    height={800}
                    className="w-full h-auto block"
                  />
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceSeoTail
        serviceName="IoT & Connected Devices"
        servicePath="/services/iot-and-connected-devices"
        service={{
          name: "IoT App Development",
          description:
            "UK IoT app development. BLE, NFC, wearables, and connected device mobile apps paired with AWS telemetry pipelines. One senior team across hardware, app, and cloud.",
          serviceType: "IoT App Development",
        }}
        caseStudies={[
          { href: "/case-studies/luxelocker", title: "LuxeLocker — IoT-enabled luxury storage", meta: "BLE locks · cloud lockers · React Native app" },
          { href: "/case-studies/wearopal", title: "WearOpal — smart ring with custom BLE SDK", meta: "Wearable · BLE protocol · companion app" },
        ]}
        insights={[]}
        faqs={[
          {
            q: "What is BLE (Bluetooth Low Energy) app development?",
            a: "BLE app development is building iOS and Android apps that talk to Bluetooth Low Energy hardware — sensors, wearables, locks, beacons, medical devices. Unlike classic Bluetooth, BLE is designed for short bursts of data at low power, which is why it's the default for almost every modern battery-powered IoT product. A solid BLE app is more than just a connection — it's pairing UX, reconnection logic, characteristic discovery, OTA firmware flows, and a stable protocol between app and device.",
          },
          {
            q: "Can you build apps for custom IoT hardware?",
            a: "Yes — custom hardware is the case we specialise in. We've built mobile apps for proprietary devices including the WearOpal smart ring (with a custom BLE SDK) and LuxeLocker IoT storage locks. We work directly with your firmware team (or engage one) and design the BLE/NFC/Wi-Fi protocol jointly so the app, device, and cloud all fit cleanly together.",
          },
          {
            q: "Do you build the firmware side too, or just the app?",
            a: "Primarily the app and cloud side. For firmware we either partner with your hardware team or bring in trusted firmware engineers; we co-design the protocol and ensure the app and device evolve together. If your project is a brand-new product without a hardware team yet, we can introduce vetted partners for the firmware portion.",
          },
          {
            q: "How do you handle real-time data from connected devices?",
            a: "Two layers: on-device, BLE characteristics or MQTT for low-latency streams to the phone; in the cloud, AWS IoT Core or a tuned WebSocket gateway for fan-out to dashboards and back-end services. For high-volume telemetry we typically use Kinesis or Timestream for ingestion and storage. Real-time UX in the app uses optimistic state and reconnection logic so latency doesn't break the experience.",
          },
          {
            q: "What about offline support and sync?",
            a: "Offline-first is the default for any serious IoT app. We design a local store that the device can update without a network (BLE works offline), reconcile back to the cloud when connectivity returns, and resolve conflicts predictably. This is how LuxeLocker's app keeps locker control working even when a user is in a basement carpark.",
          },
          {
            q: "How do you handle IoT security?",
            a: "End-to-end. On the device, encrypted pairing and rotating session keys. On the wire, TLS to the cloud and authenticated BLE characteristics for device commands. In the cloud, AWS IoT policies and per-device certificates. We also design OTA firmware updates with signed payloads so a compromised device can't be left in the field. Security planning starts at the protocol design stage, not retrofitted later.",
          },
          {
            q: "Can you integrate with AWS IoT or similar platforms?",
            a: "Yes — AWS IoT Core is our default cloud for connected devices, with Lambda + DynamoDB / Timestream behind it. We also work with Azure IoT Hub or Google Cloud IoT when the project's cloud choice dictates it. Whichever platform, the app/cloud split is designed so device control, telemetry, and OTA updates are independent surfaces that can scale (and be debugged) on their own.",
          },
        ]}
      />

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
                    Got a connected-device project? Let&apos;s scope it together.
                  </h2>
                  <p className="text-base text-brand-50 leading-relaxed max-w-xl">
                    Discovery calls are for the hard early decisions — protocol, platform, infra, store strategy. Estimates are for when those are settled.
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
