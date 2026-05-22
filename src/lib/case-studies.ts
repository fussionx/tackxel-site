// Single source of truth for every case study.
// Detail pages are generated from this via /case-studies/[slug], and the index
// + homepage strip read from it too. Add a project here and it shows up
// everywhere. Only real, verifiable stats live in `stats` — everything else is
// framed as capability or live status, never invented numbers.

export type ApproachStep = { no: string; title: string; desc: string };
export type Stat = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  name: string;
  monogram: string;
  industry: string; // display string, e.g. "Legal Tech · AI"
  categories: string[]; // filter facets (must come from FILTERS)
  builtBy: "Tackxel" | "Clustox";
  builtByLabel: string;
  liveUrl?: string;
  liveLabel?: string;
  oneLiner: string; // card + homepage description
  headline: string; // hero H1
  tagline: string; // hero sub-paragraph
  platforms: string; // at-a-glance
  accent: string; // gradient classes for the visual placeholder (keep literal for Tailwind)
  featured?: boolean; // surfaced on the homepage strip
  challenge: string[];
  approach: ApproachStep[];
  built: string[];
  tech: string[];
  resultsSummary: string;
  stats: Stat[];
  status: string[];
};

// Filter facets for the index. "All" is handled in the UI.
export const FILTERS = [
  "AI",
  "Real Estate",
  "Fintech",
  "Enterprise",
  "Mobile",
  "IoT",
  "HealthTech",
] as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "lexa",
    name: "Lexa",
    monogram: "Lx",
    industry: "Legal Tech · AI",
    categories: ["AI"],
    builtBy: "Tackxel",
    builtByLabel: "Built by Tackxel",
    liveUrl: "https://www.lexa.lawyer/",
    liveLabel: "Visit lexa.lawyer",
    oneLiner:
      "Pakistan's first AI legal chatbot — conversational legal guidance grounded in real law with LLMs and RAG.",
    headline: "Pakistan's first AI legal chatbot, grounded in real law.",
    tagline:
      "An AI assistant that turns plain-language questions into clear, sourced legal guidance — built on a retrieval pipeline so answers stay anchored to actual statutes, not model hallucinations.",
    platforms: "Web · Conversational AI",
    accent: "from-indigo-500/25 via-brand-500/15 to-sky-400/20",
    featured: true,
    challenge: [
      "Legal help in Pakistan is expensive, slow, and intimidating for ordinary people. Most never speak to a lawyer until a problem has already become a crisis, and generic chatbots are worse than useless on law — they invent confident-sounding answers with no basis in statute.",
      "The goal was a public-facing assistant people could actually trust: conversational enough for a non-lawyer, but anchored to the real legal corpus so every answer could be traced back to a source.",
    ],
    approach: [
      { no: "01", title: "Ground the model", desc: "We built a retrieval-augmented (RAG) pipeline over the legal corpus so the model answers from retrieved law, not from memory — the difference between a useful tool and a liability." },
      { no: "02", title: "Engineer the conversation", desc: "Heavy prompt engineering and guardrails keep responses scoped, cite their basis, and decline gracefully when a question needs a human lawyer." },
      { no: "03", title: "Ship a public product", desc: "A fast Next.js front end made the assistant accessible to anyone with a browser — no app install, no signup wall between a person and a first answer." },
    ],
    built: [
      "Conversational AI assistant that answers legal questions in plain language.",
      "Retrieval-augmented generation (RAG) pipeline grounding answers in the legal corpus.",
      "Prompt-engineering layer with guardrails, scoping, and safe-refusal behaviour.",
      "Source-aware responses so guidance can be traced back to its legal basis.",
      "Fast, responsive Next.js web front end — no install, instant access.",
      "Designed for a general audience, not lawyers — readable, calm, approachable.",
    ],
    tech: ["LLM", "GPT", "Prompt Engineering", "RAG", "Conversational AI", "Next.js", "Python"],
    resultsSummary:
      "Lexa is live at lexa.lawyer as Pakistan's first AI legal chatbot — putting first-pass legal guidance in front of anyone with a browser, grounded in real law rather than guesswork.",
    stats: [],
    status: ["Live at lexa.lawyer", "Pakistan's first AI legal chatbot", "RAG-grounded answers"],
  },
  {
    slug: "luxelocker",
    name: "LuxeLocker",
    monogram: "LL",
    industry: "PropTech · IoT · Mobile",
    categories: ["Real Estate", "IoT", "Mobile"],
    builtBy: "Tackxel",
    builtByLabel: "Built by Tackxel",
    liveUrl: "https://luxelocker.com",
    liveLabel: "Visit luxelocker.com",
    oneLiner:
      "Native iOS and Android with IoT-controlled access for a US luxury storage operator — mobile, hardware, and cloud as one build.",
    headline: "Native mobile + IoT access for a US storage operator.",
    tagline:
      "Tenants manage their unit, gate access, and climate from their phone — including time-bounded access for family and contractors — on a Dockerized AWS backend with one-tap store releases.",
    platforms: "iOS (Swift) · Android (Kotlin) · AWS",
    accent: "from-amber-400/25 via-orange-400/15 to-brand-500/20",
    featured: true,
    challenge: [
      "Storage operators are under pressure to digitise. Customers expect to manage their unit, gate access, and climate from their phone — and to grant time-bounded access to movers or family. That's a mobile app, an IoT layer, and a cloud backend, all moving in lockstep.",
      "Most operators have none of those in-house. Stitching together a mobile shop, a hardware integrator, and a cloud consultancy usually means three timelines and a system nobody owns end to end.",
      "LuxeLocker wanted one partner to deliver all three as a single coherent product.",
    ],
    approach: [
      { no: "01", title: "Map the boundaries", desc: "We mapped every command path — unlock gate, set climate, surface status — and decided which side of the hardware/cloud/app boundary owned state, retries, and security." },
      { no: "02", title: "Go native where it counts", desc: "Swift on iOS and Kotlin on Android for BLE and cellular reliability on IoT command paths, plus the platform security features tenants expect." },
      { no: "03", title: "Own the release pipeline", desc: "A Dockerized AWS backend with CI/CD wired in from week one, and full App Store / Play Store submission handled in-house." },
    ],
    built: [
      "Native iOS and Android apps for tenant and admin use cases, built from scratch.",
      "IoT integration for remote gate access, climate control, and real-time unit status.",
      "Time-bounded guest and vendor permissions, audit-logged.",
      "AWS backend on EC2, S3, and RDS — Dockerized with reproducible builds.",
      "CI/CD pipelines for one-tap App Store and Play Store releases.",
      "Push notifications and store submissions handled end to end.",
    ],
    tech: ["Swift", "Kotlin", "AWS EC2", "AWS S3", "AWS RDS", "Docker", "CI/CD", "IoT"],
    resultsSummary:
      "The platform is live on both app stores. Tenants manage units, gates, and climate from their phones; operators run the admin side; mobile, IoT, and cloud all run as one platform owned by a single team.",
    stats: [],
    status: ["Live on App Store & Google Play", "Mobile + IoT + cloud in production", "One team, one platform"],
  },
  {
    slug: "propmetrics",
    name: "PropMetrics",
    monogram: "PM",
    industry: "Real Estate · SaaS",
    categories: ["Real Estate"],
    builtBy: "Tackxel",
    builtByLabel: "Built by Tackxel",
    liveUrl: "https://propmetrics.io",
    liveLabel: "Visit propmetrics.io",
    oneLiner:
      "Investor SaaS for real estate agents — live MLS data, analytics, and role-based access on a Dockerized AWS stack.",
    headline: "Investor-grade analytics SaaS for real estate agents.",
    tagline:
      "A web platform that pulls live MLS data, runs the numbers agents care about, and serves it through role-based access with full observability — Dockerized on AWS and built to scale.",
    platforms: "Web · AWS",
    accent: "from-emerald-400/25 via-teal-400/15 to-brand-500/20",
    featured: true,
    challenge: [
      "Real estate agents serving investors live in spreadsheets. The data they need — MLS listings, ROI, deal comparisons — sits in different systems and goes stale the moment it's exported.",
      "PropMetrics needed a single platform that pulls live market data, runs investor analytics, and is locked down properly per role — without an in-house engineering team to build and operate it.",
    ],
    approach: [
      { no: "01", title: "Integrate the data", desc: "We built a resilient MLS API integration so listing and market data flows in live, and stays current instead of being a one-off export." },
      { no: "02", title: "Lock down access", desc: "Role-based access control from the start — agents, investors, and admins see exactly what they should, nothing more." },
      { no: "03", title: "Make it operable", desc: "Dockerized on AWS with CloudWatch observability, so the team can see what's happening in production and trust the numbers users see." },
    ],
    built: [
      "Full-stack web platform for investor-focused real estate analytics.",
      "Live MLS API integration for current listing and market data.",
      "ROI and deal-analysis tooling built around how investors actually evaluate.",
      "Role-based access control across agents, investors, and admins.",
      "AWS infrastructure on EC2, RDS, and S3, Dockerized end to end.",
      "CloudWatch observability and CI/CD for safe, repeatable deploys.",
    ],
    tech: ["React", "Node.js", "AWS EC2", "AWS RDS", "AWS S3", "Docker", "CI/CD", "CloudWatch", "MLS API"],
    resultsSummary:
      "PropMetrics is live in production with live MLS data, role-based access, and full observability — giving agents investor-grade analytics without standing up an engineering team of their own.",
    stats: [],
    status: ["Live at propmetrics.io", "Live MLS data integration", "Role-based access + observability"],
  },
  {
    slug: "multiunitx",
    name: "MultiUnitX",
    monogram: "MX",
    industry: "Real Estate · Investment",
    categories: ["Real Estate", "Fintech"],
    builtBy: "Tackxel",
    builtByLabel: "Built by Tackxel",
    liveUrl: "https://www.multiunitx.com",
    liveLabel: "Visit multiunitx.com",
    oneLiner:
      "A real estate syndication platform connecting investors, deals, and CRM in one place — on AWS with CloudFront and staged CI/CD.",
    headline: "A syndication platform for multi-unit real estate investing.",
    tagline:
      "Deal discovery, investor onboarding, and group syndication in one platform — with CRM integration and a global edge, built on AWS to handle real deals from day one.",
    platforms: "Web · AWS",
    accent: "from-sky-400/25 via-brand-400/15 to-indigo-500/20",
    challenge: [
      "Real estate syndication is coordination-heavy: sponsors, investors, deals, documents, and follow-ups, usually spread across email, spreadsheets, and a disconnected CRM.",
      "MultiUnitX wanted that whole flow — discovery, onboarding, and group syndication — in one platform that felt fast and trustworthy to investors putting real money in.",
    ],
    approach: [
      { no: "01", title: "Model the deal flow", desc: "We modelled the full syndication lifecycle — discovery, onboarding, commitment, and ongoing relationship — so the product matched how deals actually close." },
      { no: "02", title: "Connect the CRM", desc: "CRM integration so investor relationships and pipeline live in the tools the team already uses, instead of becoming a second silo." },
      { no: "03", title: "Build for trust at the edge", desc: "AWS with CloudFront for a fast global experience, Docker Compose for reproducible environments, and staged CI/CD for safe releases." },
    ],
    built: [
      "Full-stack web platform for real estate deal discovery and syndication.",
      "Investor onboarding flows built for clarity and trust.",
      "Group syndication tooling for pooling investors around a deal.",
      "CRM integration so pipeline and relationships stay in sync.",
      "AWS infrastructure (EC2, RDS, S3) with CloudFront edge delivery.",
      "Docker Compose environments and staged CI/CD pipelines.",
    ],
    tech: ["React", "Node.js", "AWS EC2", "AWS RDS", "AWS S3", "CloudFront", "Docker Compose", "CI/CD"],
    resultsSummary:
      "MultiUnitX is live with the full syndication flow — discovery, onboarding, and group investing — connected to CRM and served globally over CloudFront.",
    stats: [],
    status: ["Live at multiunitx.com", "Full syndication flow in production", "CRM-connected"],
  },
  {
    slug: "shifterp",
    name: "ShiftERP",
    monogram: "SE",
    industry: "Enterprise SaaS · Manufacturing",
    categories: ["Enterprise"],
    builtBy: "Tackxel",
    builtByLabel: "Built by Tackxel",
    liveUrl: "https://shifterp.com",
    liveLabel: "Visit shifterp.com",
    oneLiner:
      "Enterprise ERP for co-manufacturers with EDI to Walmart, Target, and Amazon at 99.5% accuracy — built from zero on AWS.",
    headline: "A from-scratch ERP for co-manufacturers, trading at retail scale.",
    tagline:
      "Production scheduling, multi-warehouse inventory, and EDI integration with Walmart, Target, and Amazon at 99.5% accuracy — running on auto-scaling AWS infrastructure built to take real load.",
    platforms: "Web · AWS (ECS, Auto Scaling)",
    accent: "from-brand-500/25 via-brand-400/15 to-orange-400/20",
    featured: true,
    challenge: [
      "Co-manufacturers run on margins where a single EDI rejection from a major retailer can mean chargebacks, missed ship windows, and lost shelf space. Most run on a patchwork of legacy tools that don't talk to each other.",
      "ShiftERP needed a single system — production, inventory, and retail integration — reliable enough to trade with Walmart, Target, and Amazon, and built to scale as volume grew.",
    ],
    approach: [
      { no: "01", title: "Build the core ERP", desc: "Production scheduling and multi-warehouse inventory designed around how a co-manufacturer actually runs a floor, not a generic template." },
      { no: "02", title: "Get EDI right", desc: "EDI integration with major retailers tuned to 99.5% accuracy — because at retail scale, the last half-percent is the difference between getting paid and eating chargebacks." },
      { no: "03", title: "Engineer for load", desc: "AWS with EC2 Auto Scaling, RDS PostgreSQL, ALB, ECS, and CloudWatch — infrastructure that absorbs peak volume instead of buckling under it." },
    ],
    built: [
      "End-to-end ERP built from zero — no legacy template.",
      "Production scheduling and multi-warehouse inventory management.",
      "EDI integration with Walmart, Target, and Amazon at 99.5% accuracy.",
      "Auto-scaling AWS infrastructure: EC2 Auto Scaling, ECS, ALB, RDS PostgreSQL, S3.",
      "GitHub Actions CI/CD for repeatable, safe deployments.",
      "CloudWatch observability across the stack.",
    ],
    tech: ["AWS EC2 Auto Scaling", "RDS PostgreSQL", "AWS S3", "AWS ALB", "AWS ECS", "Docker", "GitHub Actions", "EDI", "CloudWatch"],
    resultsSummary:
      "ShiftERP is live in production, trading EDI with three of the largest retailers in the world at 99.5% accuracy on infrastructure built to scale with volume.",
    stats: [
      { value: "99.5%", label: "EDI accuracy across Walmart, Target & Amazon" },
      { value: "3", label: "Major retailers integrated via EDI" },
    ],
    status: ["Live at shifterp.com", "Auto-scaling AWS in production"],
  },
  {
    slug: "sukuk",
    name: "Sukuk",
    monogram: "Sk",
    industry: "Fintech · Investment",
    categories: ["Fintech", "Mobile"],
    builtBy: "Clustox",
    builtByLabel: "Founder's prior work at Clustox",
    oneLiner:
      "A Saudi fintech investment app that distributed 160M+ riyals to investors — bank-grade security on Flutter.",
    headline: "A Saudi fintech investment app that moved 160M+ riyals.",
    tagline:
      "A cross-platform investment app with bank-grade security — biometrics, jailbreak detection, AES encryption, and tokenized payments — that distributed over 160 million riyals to investors.",
    platforms: "iOS · Android (Flutter)",
    accent: "from-emerald-500/25 via-teal-400/15 to-brand-500/20",
    challenge: [
      "Investment apps in the Gulf carry a high trust bar: users are moving serious money, and regulators and customers both expect the security to be airtight.",
      "Sukuk needed a single cross-platform app that felt premium and instant, while meeting fintech-grade security and payment requirements — and it had to scale to real money flowing through it.",
    ],
    approach: [
      { no: "01", title: "Security as the foundation", desc: "Biometric auth, jailbreak/root detection, AES encryption, and tokenization built in from the start — security as architecture, not an afterthought." },
      { no: "02", title: "One codebase, native feel", desc: "Flutter with RiverPod and GoRouter for a fast, maintainable app that ships to iOS and Android from one codebase without feeling generic." },
      { no: "03", title: "Instrument and automate", desc: "CC Avenue payment integration, Mixpanel and Firebase analytics, and Codemagic CI/CD for confident, repeatable releases." },
    ],
    built: [
      "Cross-platform investment app for iOS and Android in Flutter.",
      "Bank-grade security: biometrics, jailbreak detection, AES encryption, tokenization.",
      "CC Avenue payment gateway integration.",
      "RiverPod state management and GoRouter navigation.",
      "Mixpanel and Firebase analytics for product and reliability insight.",
      "Codemagic CI/CD pipeline for automated releases.",
    ],
    tech: ["Flutter", "Dart", "Firebase", "RiverPod", "GoRouter", "Stripe", "CC Avenue", "AES Encryption", "Codemagic CI/CD", "Mixpanel"],
    resultsSummary:
      "Built by the founder at Clustox, Sukuk shipped to both stores and distributed more than 160 million riyals to investors on bank-grade security foundations.",
    stats: [
      { value: "160M+", label: "Riyals distributed to investors" },
    ],
    status: ["Shipped to iOS & Android", "Bank-grade security"],
  },
  {
    slug: "yallagrub",
    name: "YallaGrub",
    monogram: "YG",
    industry: "Food Tech · Mobile",
    categories: ["Mobile"],
    builtBy: "Clustox",
    builtByLabel: "Founder's prior work at Clustox",
    liveUrl: "https://apps.apple.com/us/app/yallagrub/id6450997385",
    liveLabel: "View on the App Store",
    oneLiner:
      "A cross-platform food-tech app with real-time order tracking and table management — delivered by a team of six.",
    headline: "A food-tech app with real-time tracking, built clean.",
    tagline:
      "A cross-platform ordering app with live order tracking, table management, and custom animations — built on MVVM + Clean Architecture and delivered by a team of six mobile engineers.",
    platforms: "iOS · Android (Flutter)",
    accent: "from-orange-400/25 via-rose-400/15 to-amber-400/20",
    challenge: [
      "Food apps live or die on the moment-to-moment experience: how fast it feels, how clearly you can track an order, how smoothly a restaurant manages tables in real time.",
      "YallaGrub needed all of that across iOS and Android, built on an architecture clean enough for a multi-engineer team to move quickly without stepping on each other.",
    ],
    approach: [
      { no: "01", title: "Architect for a team", desc: "MVVM and Clean Architecture so a team of six could work in parallel on a single codebase without it turning to spaghetti." },
      { no: "02", title: "Make it feel alive", desc: "Real-time order tracking, table management, and custom animations to make the app feel responsive and premium, not transactional." },
      { no: "03", title: "Integrate the essentials", desc: "Stripe for payments and Google Maps for location and tracking — the integrations a food app can't ship without." },
    ],
    built: [
      "Cross-platform food-tech app for iOS and Android in Flutter.",
      "Real-time order tracking from kitchen to customer.",
      "Table management for restaurant operations.",
      "Stripe payment integration.",
      "Google Maps integration for location and live tracking.",
      "Custom animations and a polished, responsive UI.",
    ],
    tech: ["Flutter", "MVVM", "Clean Architecture", "Stripe", "Google Maps"],
    resultsSummary:
      "Built by the founder leading a team of six mobile engineers at Clustox, YallaGrub shipped to the App Store with real-time tracking and table management on a clean, scalable architecture.",
    stats: [
      { value: "6", label: "Mobile engineers led on delivery" },
    ],
    status: ["Live on the App Store", "MVVM + Clean Architecture"],
  },
  {
    slug: "kintec-footscanner",
    name: "Kintec FootScanner SDK",
    monogram: "KF",
    industry: "HealthTech · 3D Scanning",
    categories: ["HealthTech", "Mobile"],
    builtBy: "Clustox",
    builtByLabel: "Founder's prior work at Clustox",
    oneLiner:
      "An iOS SDK turning the TrueDepth camera into a 3D foot scanner — point-cloud capture to printable STL/PLY models.",
    headline: "Turning an iPhone into a clinical-grade 3D foot scanner.",
    tagline:
      "A native iOS SDK that uses the Apple TrueDepth camera to capture a foot as a 3D point cloud and generate STL/PLY models — with on-device ML, no specialist hardware required.",
    platforms: "iOS (Swift) · TrueDepth",
    accent: "from-cyan-400/25 via-sky-400/15 to-brand-500/20",
    challenge: [
      "3D foot scanning normally means dedicated, expensive hardware. Kintec wanted clinical-grade capture from a device the customer already owns — an iPhone.",
      "That means turning raw TrueDepth camera data into a clean, watertight 3D model suitable for downstream manufacturing — a hard signal-processing and ML problem, packaged as a reusable SDK.",
    ],
    approach: [
      { no: "01", title: "Capture the depth", desc: "We tapped the Apple TrueDepth camera to capture the foot as a dense 3D point cloud, handling the realities of hand-held scanning." },
      { no: "02", title: "Process on device", desc: "On-device ML and point-cloud processing to clean, align, and reconstruct the scan into a usable model — no round-trip to a server." },
      { no: "03", title: "Ship a reusable SDK", desc: "Packaged as an SDK that outputs standard STL/PLY 3D models, so it drops into a product pipeline rather than being a one-off demo." },
    ],
    built: [
      "Native iOS SDK in Swift for 3D foot scanning.",
      "Apple TrueDepth camera capture into a 3D point cloud.",
      "Point-cloud processing: cleaning, alignment, reconstruction.",
      "STL and PLY 3D model generation for downstream manufacturing.",
      "On-device ML — capture and processing run locally.",
      "Designed as a reusable SDK for integration into products.",
    ],
    tech: ["Swift", "TrueDepth Camera", "3D Point Cloud", "On-device ML"],
    resultsSummary:
      "Built by the founder at Clustox, the FootScanner SDK turns a standard iPhone's TrueDepth camera into a 3D scanning tool that outputs manufacturing-ready models — no dedicated hardware required.",
    stats: [],
    status: ["Native iOS SDK", "TrueDepth 3D capture", "On-device ML"],
  },
  {
    slug: "guardspur",
    name: "Guardspur",
    monogram: "GS",
    industry: "Security · Mobile",
    categories: ["Mobile"],
    builtBy: "Clustox",
    builtByLabel: "Founder's prior work at Clustox",
    liveUrl: "https://play.google.com/store/apps/details?id=com.guardspur.mobile.guardspur_flutter",
    liveLabel: "View on Google Play",
    oneLiner:
      "A security-guard app with QR patrols, geofencing, and real-time incident reporting — live on Google Play.",
    headline: "Proof-of-presence and live reporting for security teams.",
    tagline:
      "A field app for security guards — QR-scanned patrol checkpoints, geofenced sites, real-time location tracking, and instant incident reporting — so operations can see what's happening as it happens.",
    platforms: "iOS · Android (Flutter)",
    accent: "from-brand-600/25 via-brand-500/15 to-sky-500/20",
    challenge: [
      "Security operations need proof that patrols actually happened and a fast way to capture incidents in the field — not a paper logbook reconstructed after the fact.",
      "Guardspur needed a reliable mobile app that works on the move, ties guards to real checkpoints and sites, and pushes incidents to operations in real time.",
    ],
    approach: [
      { no: "01", title: "Prove presence", desc: "QR-scanned checkpoints plus geofencing tie a guard to a real place at a real time — verifiable patrol evidence, not trust-me logs." },
      { no: "02", title: "Report in the moment", desc: "Real-time incident reporting and tracking so operations sees events as they happen and can respond, not read about them later." },
      { no: "03", title: "Keep teams in the loop", desc: "Push notifications keep guards and supervisors coordinated across shifts and sites." },
    ],
    built: [
      "Cross-platform security-guard app for iOS and Android in Flutter.",
      "QR scanning for patrol checkpoint verification.",
      "Geofencing to bind guards to assigned sites.",
      "Real-time location tracking during shifts.",
      "Incident reporting from the field, in the moment.",
      "Push notifications for guard and supervisor coordination.",
    ],
    tech: ["Flutter", "Dart", "Geofencing", "QR Scanning", "Push Notifications"],
    resultsSummary:
      "Built by the founder at Clustox, Guardspur is live on Google Play, giving security teams verifiable patrols and real-time incident visibility in the field.",
    stats: [],
    status: ["Live on Google Play", "QR + geofenced patrols", "Real-time incident reporting"],
  },
  {
    slug: "wearopal",
    name: "WearOpal",
    monogram: "WO",
    industry: "Wearables · IoT · Safety",
    categories: ["IoT", "Mobile"],
    builtBy: "Clustox",
    builtByLabel: "Founder's prior work at Clustox",
    oneLiner:
      "A smart-ring companion app with a custom BLE SDK and Noonlight emergency integration — safety on your hand.",
    headline: "A smart-ring companion app that can call for help.",
    tagline:
      "A SwiftUI companion app for a safety smart ring — driven by a custom-engineered BLE protocol and wired into the Noonlight emergency API so a discreet gesture can summon real help.",
    platforms: "iOS (Swift · SwiftUI)",
    accent: "from-violet-500/25 via-fuchsia-400/15 to-rose-400/20",
    challenge: [
      "A safety wearable is only as good as the moment it's needed. The ring had to pair reliably, stay connected, and trigger a real emergency response — instantly and discreetly.",
      "WearOpal needed a companion app built directly against a custom BLE protocol for the ring, integrated with a real emergency-dispatch service rather than a simulated one.",
    ],
    approach: [
      { no: "01", title: "Engineer the BLE layer", desc: "We built a custom BLE SDK and protocol to talk to the ring reliably — pairing, connection stability, and the command path that matters in an emergency." },
      { no: "02", title: "Wire in real help", desc: "Noonlight emergency API integration so a trigger reaches a real dispatch service, not a placeholder." },
      { no: "03", title: "Build a calm, native UI", desc: "SwiftUI for a clean, responsive iOS experience, with Firebase backing the app's data and messaging." },
    ],
    built: [
      "Native iOS companion app in Swift and SwiftUI.",
      "Custom BLE SDK and protocol engineering for the smart ring.",
      "Noonlight emergency API integration for real dispatch.",
      "Reliable pairing and connection management for the wearable.",
      "Firebase backend for data and messaging.",
      "Discreet, fast safety-trigger experience.",
    ],
    tech: ["Swift", "SwiftUI", "Custom BLE SDK", "Noonlight API", "Firebase"],
    resultsSummary:
      "Built by the founder at Clustox, WearOpal pairs a safety smart ring with a SwiftUI app over a custom BLE stack and a real emergency-dispatch integration — turning a gesture into help.",
    stats: [],
    status: ["Native iOS (SwiftUI)", "Custom BLE protocol", "Noonlight emergency integration"],
  },
  {
    slug: "my-friend",
    name: "My Friend",
    monogram: "MF",
    industry: "Mental Health · AI",
    categories: ["AI", "Mobile"],
    builtBy: "Clustox",
    builtByLabel: "Founder's prior work at Clustox",
    oneLiner:
      "An AI emotional-companion app built on GPT, with trusted family integration for moments that matter.",
    headline: "An AI companion that listens — and knows when to involve family.",
    tagline:
      "A cross-platform emotional-companion app powered by GPT and large language models, with trusted user and family integration so support isn't just a chatbot in isolation.",
    platforms: "iOS · Android (Flutter)",
    accent: "from-rose-400/25 via-violet-400/15 to-brand-500/20",
    challenge: [
      "An emotional-support app carries real responsibility. It has to feel genuinely present and warm in conversation, while staying safe and connected to the people who matter when it counts.",
      "My Friend needed a generative-AI companion that's available any time, paired with a trusted-family layer so the experience extends beyond a solo chat window.",
    ],
    approach: [
      { no: "01", title: "Make the AI feel present", desc: "Built on the OpenAI/ChatGPT API and large language models, tuned for warm, supportive, emotionally aware conversation." },
      { no: "02", title: "Connect trusted people", desc: "Trusted user and family integration so the companion sits inside a real support network, not in isolation." },
      { no: "03", title: "Ship cross-platform", desc: "Flutter for a single, consistent experience across iOS and Android." },
    ],
    built: [
      "Cross-platform AI companion app for iOS and Android in Flutter.",
      "Conversational AI powered by the ChatGPT / OpenAI API.",
      "Generative-AI experience tuned for emotional support.",
      "Trusted user and family integration.",
      "Consistent, warm UI across both platforms.",
    ],
    tech: ["Flutter", "ChatGPT / OpenAI", "Generative AI", "LLM"],
    resultsSummary:
      "Built by the founder at Clustox, My Friend pairs an LLM-powered companion with a trusted-family layer — an AI that's available any time, inside a real support network.",
    stats: [],
    status: ["Cross-platform (Flutter)", "GPT-powered companion", "Trusted-family integration"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
