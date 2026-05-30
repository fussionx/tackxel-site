"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Award, Clock, ShieldCheck,
  TrendingUp, Zap, Plus, Minus,
  SearchCheck, Layout, Palette, Sparkles, BeakerIcon, ScanLine,
  ShoppingBag, Building2, HeartPulse, GraduationCap,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import ServiceHeroImage from "@/components/ServiceHeroImage";
import Counter from "@/components/Counter";
import ServiceSeoTail from "@/components/ServiceSeoTail";

const services = [
  {
    Icon: SearchCheck,
    name: "Research & Prototyping",
    tagline: "Validate hypotheses before crafting prototypes.",
    desc: "Our team of experts conducts in-depth research on potential markets, users, and competitors — carefully validating design hypotheses before crafting prototypes that scale.",
    bullets: [
      "In-depth research on potential markets, users, and competitors.",
      "Carefully validate design hypotheses before crafting prototypes.",
      "Quantitative and qualitative user research combined for confident decisions.",
      "Low-fidelity to high-fidelity prototypes for stakeholder validation.",
      "Rapid prototype iteration informed by real user behavior.",
    ],
    metric: { value: "60%", label: "Faster validation" },
  },
  {
    Icon: Layout,
    name: "UX Design",
    tagline: "Optimal user experiences that are easy to use.",
    desc: "We help you develop an optimal user experience for your digital product — creating appealing designs utilizing best UX practices that are easy to use and understand.",
    bullets: [
      "Develop optimal user experiences for your digital product.",
      "Create appealing designs utilizing best UX practices.",
      "Designs that are easy to use and understand from first interaction.",
      "Information architecture and user journey mapping built in.",
      "Accessibility-first UX following WCAG 2.2 AA standards.",
    ],
    metric: { value: "47%", label: "Engagement lift" },
  },
  {
    Icon: Palette,
    name: "UI Design",
    tagline: "Consistent design language that communicates.",
    desc: "We use tried-and-true practices combined with the latest trends — applying industry benchmarks to deliver design with a consistent language that communicates with your customers.",
    bullets: [
      "Tried-and-true practices combined with the latest design trends.",
      "Industry benchmarks applied for production-grade design quality.",
      "Consistent design language that communicates with your customers.",
      "Design systems and component libraries built in Figma.",
      "Pixel-perfect designs ready for developer handover.",
    ],
    metric: { value: "38%", label: "Conversion uplift" },
  },
  {
    Icon: Sparkles,
    name: "Brand Identity",
    tagline: "Strong, unique brand identities that empower buying.",
    desc: "Our industry experts help you build a strong and unique brand identity for your digital product — empowering your customer buying journey by clearly defining your audience.",
    bullets: [
      "Build strong, unique brand identities for your digital product.",
      "Empower customer buying journeys with clear brand definitions.",
      "Quickly define target audience and success metrics.",
      "Brand guidelines and visual identity systems delivered.",
      "Brand consistency across web, mobile, and marketing collateral.",
    ],
    metric: { value: "2×", label: "Brand recall" },
  },
  {
    Icon: ScanLine,
    name: "Usability Testing",
    tagline: "Thorough market research and design validation.",
    desc: "We conduct thorough market research and test your design in real time with users to ensure it reaches the maximum number of potential customers effectively.",
    bullets: [
      "Conduct thorough market research before launch.",
      "Test designs in real time with real users.",
      "Ensure design reaches maximum potential customers effectively.",
      "Moderated and unmoderated remote usability studies.",
      "Quantitative metrics combined with qualitative behavioral insights.",
    ],
    metric: { value: "29%", label: "Increased adoption" },
  },
];

const process = [
  { no: "01", title: "Project Setup",         duration: "1 week",    desc: "Stakeholder kickoff, goal alignment, and design environment provisioning. We start with shared context — not assumptions." },
  { no: "02", title: "Research & Concept",    duration: "1–2 weeks", desc: "User research, competitive analysis, and concept ideation. Design hypotheses validated before pixel-pushing begins." },
  { no: "03", title: "Wireframing",           duration: "1–2 weeks", desc: "Information architecture, user flows, and low-fidelity wireframes. Structure before style." },
  { no: "04", title: "Testing & Validation",  duration: "1 week",    desc: "Prototype testing with real users, iteration based on behavioral data, and stakeholder alignment review." },
  { no: "05", title: "Visual Design",         duration: "2–3 weeks", desc: "High-fidelity visual design, brand integration, and design system creation. Pixel-perfect output ready for development." },
  { no: "06", title: "Development Handover",  duration: "1 week",    desc: "Design specs, component documentation, and engineering walkthrough. Clean handover with no back-and-forth surprises." },
];

const advantages = [
  { no: "01", title: "Expert Team Of Designers",  desc: "Leverage our team of out-of-the-box design strategists to connect with your target audience through a human-centered lens and the power of eye-catching visual language." },
  { no: "02", title: "Wide Range Of Services",    desc: "Get end-to-end services that let you stay ahead of competitors — tackling every step of product design, from initial idea to final product release." },
  { no: "03", title: "Transparency",              desc: "Keep track of your product design and development cycle with frequent, transparent updates on all the details of your project — no surprises." },
  { no: "04", title: "Client-Centered Approach",  desc: "Experience flexibility and scalability in our product design services — specifically tailored to your custom business needs for a true client-first approach." },
  { no: "05", title: "Senior-only design",        desc: "Every designer placed has shipped to production for 5+ years. Vetted on portfolio, craft, problem-solving, and collaboration. No junior bench." },
  { no: "06", title: "Production-tested craft",   desc: "Shipped product design across SaaS, eCommerce, fintech, healthcare, and enterprise platforms. The founder's seven-year mobile background is the floor, not the ceiling." },
];

const industries = [
  { Icon: ShoppingBag, name: "Retail & eCommerce", desc: "Product design for omnichannel retail platforms, marketplaces, and DTC brands — focused on conversion optimization and seamless checkout experiences.", examples: ["Marketplaces", "DTC brands", "Checkout flows", "Loyalty platforms"] },
  { Icon: Building2, name: "Finance & Banking", desc: "Product design for fintechs, neobanks, and banking platforms — balancing trust, compliance, and approachable user experiences for diverse audiences.", examples: ["Neobanking apps", "Trading platforms", "Lending products", "Wealth management"] },
  { Icon: HeartPulse, name: "Health & Fitness", desc: "Product design for digital health platforms, telehealth apps, and fitness products — built around clinical safety and behavior-change frameworks.", examples: ["Telehealth", "Fitness apps", "Mental wellness", "Medical devices"] },
  { Icon: GraduationCap, name: "Education & Learning", desc: "Product design for EdTech, LMS platforms, and corporate training — designed around learner engagement, retention, and accessibility for all age groups.", examples: ["EdTech apps", "LMS platforms", "Corporate training", "Adaptive learning"] },
];

const faqs = [
  {
    q: "What does your product design process look like?",
    a: "We work in three loose phases: discover (stakeholder interviews, user research, problem framing), design (information architecture, wireframes, high-fidelity UI, prototypes, usability tests), and ship (developer handover, design QA, post-launch iteration). The phases overlap — we don't disappear for six weeks to come back with a deck. Design happens alongside engineering, weekly, with real users in the loop.",
  },
  {
    q: "Do you design AND develop, or just design?",
    a: "Both. We're a small senior team that designs and engineers, so we can take a product from discovery through to a shipped, running app — or just do the design layer and hand over to your engineers. Product design isn't separated from engineering here; designers and engineers work in the same Figma file and the same standup.",
  },
  {
    q: "How much does product design cost?",
    a: "Rough ranges: a focused design sprint on one feature or flow is £12k–£35k; a full V1 product design engagement (research, IA, UI, system, handover) is £40k–£120k; embedded design teams are typically £10k–£20k per month per senior designer. We scope honestly after a 30-minute call, with a written range before any commitment.",
  },
  {
    q: "Can you redesign an existing product?",
    a: "Yes — redesigns are a big part of what we do. We start with a quick design audit: what's working, what's costing conversion or retention, what users actually do versus what the team assumes. From there we plan a redesign that ships in phases without a six-month freeze on the product. Often the right move is a targeted overhaul of two or three flows rather than a full rebuild.",
  },
  {
    q: "Do you create design systems?",
    a: "Yes — for any product that's beyond V1, a design system pays back in a few sprints. We build right-sized systems (not over-engineered): a tight set of components, tokens, and patterns that match how your team actually works, documented in Figma and ready to map 1:1 to your engineering components (React, React Native, etc.).",
  },
  {
    q: "How do you handle user research?",
    a: "Pragmatically. For most products that's 6–10 user interviews up front to frame the problem, lightweight prototype tests through the build, and a steady rhythm of 30-minute sessions on the live product after launch. We don't run year-long research phases — research is most useful when it feeds the build that's happening right now.",
  },
  {
    q: "What tools do you use (Figma, etc.)?",
    a: "Figma is the default — for files, prototyping, design systems, and handover. We also use FigJam for workshops, Maze or Lookback for usability testing, and Linear/Jira inside the team workflow. All files live in your account, with you as the owner — no lock-in.",
  },
];

const awards = [
  { platform: "Clutch",        title: "Top Design Company",      year: "2024" },
  { platform: "TopDevelopers", title: "Top Design Studios",      year: "2024" },
  { platform: "Firmstalk",     title: "Top Design Agency",       year: "2024" },
  { platform: "SoftwareWorld", title: "Top Rated Designers",     year: "2024" },
  { platform: "Industry",      title: "Best Product Design",     year: "2024" },
  { platform: "GoodFirms",     title: "Top Design Partner",      year: "2024" },
];

function LaurelIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className}>
      <g fill="currentColor" opacity="0.85">
        <ellipse cx="14" cy="14" rx="2.5" ry="5.5" transform="rotate(-30 14 14)" />
        <ellipse cx="11" cy="20" rx="2.5" ry="5.5" transform="rotate(-20 11 20)" />
        <ellipse cx="9" cy="27" rx="2.5" ry="5.5" transform="rotate(-10 9 27)" />
        <ellipse cx="10" cy="34" rx="2.5" ry="5.5" transform="rotate(5 10 34)" />
        <ellipse cx="13" cy="40" rx="2.5" ry="5.5" transform="rotate(20 13 40)" />
        <ellipse cx="19" cy="46" rx="2.5" ry="5.5" transform="rotate(40 19 46)" />
      </g>
      <g fill="currentColor" opacity="0.85">
        <ellipse cx="42" cy="14" rx="2.5" ry="5.5" transform="rotate(30 42 14)" />
        <ellipse cx="45" cy="20" rx="2.5" ry="5.5" transform="rotate(20 45 20)" />
        <ellipse cx="47" cy="27" rx="2.5" ry="5.5" transform="rotate(10 47 27)" />
        <ellipse cx="46" cy="34" rx="2.5" ry="5.5" transform="rotate(-5 46 34)" />
        <ellipse cx="43" cy="40" rx="2.5" ry="5.5" transform="rotate(-20 43 40)" />
        <ellipse cx="37" cy="46" rx="2.5" ry="5.5" transform="rotate(-40 37 46)" />
      </g>
      <g transform="translate(28, 28)">
        <path d="M 0,-8 L 2.4,-2.4 L 8,-2.4 L 3.5,1.2 L 5.3,7 L 0,3.3 L -5.3,7 L -3.5,1.2 L -8,-2.4 L -2.4,-2.4 Z" fill="currentColor" />
      </g>
    </svg>
  );
}

export default function ProductDesignPage() {
  const [activeService, setActiveService] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeServiceData = services[activeService];
  const activeIndustryData = industries[activeIndustry];

  return (
    <>
      {/* HERO — warm */}
      <section className="relative hero-warm pt-32 pb-20 lg:pb-24 overflow-hidden">
        <Parallax speed={0.08} className="absolute top-24 right-10 hidden lg:block pointer-events-none z-0"><div className="w-[24rem] h-[24rem] rounded-full bg-orange-200/40 blur-3xl float-slow" /></Parallax>
        <Parallax speed={-0.06} className="absolute bottom-0 left-10 hidden lg:block pointer-events-none z-0"><div className="w-[26rem] h-[26rem] rounded-full bg-brand-200/40 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <Reveal><nav className="flex items-center gap-2 text-xs text-neutral-500 mb-8 font-mono"><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link><span className="text-neutral-300">/</span><Link href="/services" className="hover:text-brand-600 transition-colors">Services</Link><span className="text-neutral-300">/</span><span className="text-brand-600">Product Design</span></nav></Reveal>
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><span className="badge mb-6"><span className="dot-pulse" />UX research · UI · Design systems · Handover</span></Reveal>
              <Reveal delay={80}><div className="text-eyebrow text-brand-600 uppercase font-semibold tracking-widest mb-4">Product Design</div></Reveal>
              <Reveal delay={140}><h1 className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight leading-[1.05]">Product Design Agency UK <span className="text-brand-600">— UX, UI &amp; Product Discovery for SaaS</span></h1></Reveal>
              <Reveal delay={220}><p className="text-lg text-neutral-700 mt-6 max-w-2xl leading-relaxed">Tackxel is a UK product design agency for SaaS and AI products — UX research, UI design, product discovery, and design systems that ship and convert. The product design behind <Link href="/case-studies/propmetrics" className="text-brand-700 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-500 transition-colors">PropMetrics</Link>, <Link href="/case-studies/multiunitx" className="text-brand-700 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-500 transition-colors">MultiUnitX</Link>, and <Link href="/case-studies/lexa" className="text-brand-700 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-500 transition-colors">Lexa</Link>.</p></Reveal>
              <Reveal delay={260}><p className="text-base text-neutral-600 mt-4 max-w-2xl leading-relaxed">SaaS UX design, UI design, design systems, and developer handover — design decisions that hold up from first concept through scale.</p></Reveal>
              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Link href="/contact" className="btn-brand"><Calendar className="w-4 h-4" />Book a discovery call</Link>
                  <Link href="/contact?intent=estimate" className="btn-secondary">Get a design audit<ArrowUpRight className="w-4 h-4" /></Link>
                </div>
              </Reveal>
              <Reveal delay={400}><div className="mt-5 flex items-center gap-2 text-sm text-neutral-500"><ShieldCheck className="w-3.5 h-3.5 text-brand-600" />Free 30-minute design audit with a senior product designer. NDA on request.</div></Reveal>
            </div>
            <ServiceHeroImage
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80"
              alt="Product design — UI and UX mockups"
            />
          </div>
        </div>
      </section>

      {/* SERVICES TABS */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="text-center mb-14"><div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Our Digital Product Design Services</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">Ensure Smooth Experience With <span className="text-brand-600">Digital Product Design Services</span></h2><p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">From idea to validation, we handle every design challenge in our innovative one-stop-shop product lab.</p></div></Reveal>
          <Reveal>
            <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 lg:grid-cols-5 border-b border-neutral-200 bg-neutral-50">{services.map((s, i) => (<button key={s.name} onClick={() => setActiveService(i)} className={`px-4 py-4 text-left transition-all border-r border-neutral-200 last:border-r-0 ${activeService === i ? "bg-white border-b-2 border-b-brand-500 -mb-px" : "hover:bg-white/60 border-b-2 border-b-transparent"}`}><div className="flex items-center gap-2 mb-1.5"><s.Icon className={`w-7 h-7 transition-opacity ${activeService === i ? "opacity-100 text-brand-600" : "opacity-50 text-neutral-600"}`} /></div><div className={`text-xs font-semibold leading-tight ${activeService === i ? "text-brand-700" : "text-neutral-600"}`}>{s.name}</div></button>))}</div>
              <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 p-8 lg:p-10">
                <div>
                  <div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">{String(activeService + 1).padStart(2, "0")} · Service Detail</div>
                  <h3 className="font-display text-h2 text-neutral-950 mb-3">{activeServiceData.name}</h3>
                  <p className="text-base font-semibold text-neutral-700 mb-4">{activeServiceData.tagline}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">{activeServiceData.desc}</p>
                  <ul className="space-y-3">{activeServiceData.bullets.map((b) => (<li key={b} className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-3 h-3 text-brand-600" /></div><span className="text-sm text-neutral-700 leading-relaxed">{b}</span></li>))}</ul>
                  <Link href="/contact" className="btn-brand mt-8">Discuss your design project<ArrowRight className="w-4 h-4" /></Link>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-xl p-6 flex items-center justify-center aspect-square"><activeServiceData.Icon className="w-32 h-32 lg:w-40 lg:h-40 text-brand-500" strokeWidth={1.2} /></div>
                  <div className="bg-neutral-950 text-white rounded-xl p-6"><div className="text-xs font-mono text-brand-300 uppercase tracking-wider mb-2 font-semibold">Measurable Outcome</div><div className="font-display text-4xl font-bold text-white mb-1 tracking-display">{activeServiceData.metric.value}</div><div className="text-sm text-neutral-400">{activeServiceData.metric.label}</div></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISIONARY DESIGN PROCESS - BLUE SECTION */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none"><div className="w-96 h-96 rounded-full bg-white/10 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="mb-14"><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4">Maximize The Outcome With <span className="text-brand-200">Visionary Design Process</span></h2><p className="text-base text-brand-50 leading-relaxed max-w-3xl">Get product design solutions crafted to help you achieve your tailored goals efficiently with the right tools and methodologies. Our experts validate ideas, optimize processes, and successfully bring new digital products to the market.</p></div></Reveal>
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-white/30" />
            <div className="grid lg:grid-cols-6 gap-4 lg:gap-3 relative">{process.map((step, i) => (<Reveal key={step.no} delay={i * 80}><div className="relative"><div className="w-14 h-14 rounded-full bg-white border-2 border-white flex items-center justify-center mb-5 mx-auto lg:mx-0 relative z-10"><span className="font-mono text-sm font-bold text-brand-700">{String(i + 1).padStart(2, "0")}</span></div><div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-4 h-full"><div className="text-[10px] font-mono text-brand-200 uppercase tracking-wider font-semibold mb-1">{step.duration}</div><h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3><p className="text-xs text-brand-50 leading-relaxed">{step.desc}</p></div></div></Reveal>))}</div>
          </div>
          <Reveal delay={400}>
            <div className="mt-14 bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 lg:p-10 grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
              <div><h3 className="font-display text-h3 lg:text-h2 text-white mb-3">Leverage The Expertise Of Our Team To Accelerate Your Product Design & Development</h3></div>
              <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2 w-fit lg:justify-self-end">Book a Consultation<ArrowRight className="w-4 h-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT TACKXEL BRINGS - PROMISE CARDS */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="text-center mb-14"><div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Why Tackxel</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">What Tackxel Brings To The Table <span className="text-brand-600">For You!</span></h2><p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">Get innovative product design and development support — our seasoned experts understand the importance of collaboration toward developing a stellar product.</p></div></Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {advantages.map((a, i) => (<Reveal key={a.no} delay={i * 80}><div className="bg-white p-7 hover:bg-neutral-50 transition-colors h-full card-lift"><div className="flex items-start gap-4 mb-3"><div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0"><span className="font-mono text-xs font-bold text-brand-700">{a.no}</span></div><h3 className="text-base font-semibold text-neutral-950 pt-2 leading-snug">{a.title}</h3></div><p className="text-sm text-neutral-600 leading-relaxed pl-14">{a.desc}</p></div></Reveal>))}
          </div>
        </div>
      </section>

      {/* TRUSTED PARTNER STRIP */}
      <section className="py-14 bg-neutral-950 text-white border-y border-neutral-800 relative overflow-hidden">
        <Parallax speed={0.15} className="absolute top-0 right-0 hidden lg:block pointer-events-none"><div className="w-80 h-80 rounded-full bg-brand-500/15 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center">
              <div>
                <div className="text-eyebrow text-brand-300 uppercase mb-3 font-semibold tracking-widest">Your Trusted Partner</div>
                <h3 className="font-display text-h2 text-white mb-3">Teaming up with an experienced product design partner</h3>
                <p className="text-base text-neutral-300 leading-relaxed max-w-xl">Teaming up with an experienced product design services provider guarantees high proficiency, personalized solutions, efficient projects, proactive problem-solving, and robust technical support.</p>
              </div>
              <Link href="/contact" className="btn-brand lg:justify-self-end w-fit">Request a free 15-minutes consultation<ArrowRight className="w-4 h-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Industries We Serve</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">Custom Product Design Services <span className="text-brand-600">For Different Industries</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Our custom product design services cater to diverse industries, addressing specific needs. We focus on crafting user-friendly, high-performance designs that align with industry standards.</p></div></Reveal>
          <Reveal delay={150}>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-10">
              <ul className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100 h-fit">
                {industries.map((ind, i) => (<li key={ind.name}><button onClick={() => setActiveIndustry(i)} className={`w-full text-left flex items-center justify-between gap-4 px-6 py-4 transition-colors ${activeIndustry === i ? "bg-brand-50" : "hover:bg-neutral-50"}`}><div className="flex items-center gap-4"><div className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${activeIndustry === i ? "bg-brand-500 border-brand-500" : "bg-brand-50 border-brand-100"}`}><ind.Icon className={`w-4 h-4 ${activeIndustry === i ? "text-white" : "text-brand-600"}`} /></div><span className={`text-base font-semibold ${activeIndustry === i ? "text-brand-700" : "text-neutral-900"}`}>{ind.name}</span></div><ArrowRight className={`w-4 h-4 transition-all ${activeIndustry === i ? "text-brand-600 translate-x-1" : "text-neutral-300"}`} /></button></li>))}
              </ul>
              <div className="bg-white border border-neutral-200 rounded-lg p-8 lg:p-10 self-start">
                <div className="flex items-start gap-5 mb-6"><div className="w-16 h-16 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center flex-shrink-0"><activeIndustryData.Icon className="w-7 h-7 text-brand-600" /></div><div><div className="text-eyebrow text-brand-600 uppercase mb-2 font-semibold tracking-widest">Industry Focus</div><h3 className="font-display text-h2 text-neutral-950 leading-tight">{activeIndustryData.name}</h3></div></div>
                <p className="text-base text-neutral-700 leading-relaxed mb-6">{activeIndustryData.desc}</p>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden mb-6">{activeIndustryData.examples.map((ex) => (<div key={ex} className="bg-white p-4 flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" /><span className="text-sm text-neutral-800 font-medium">{ex}</span></div>))}</div>
                <Link href="/contact" className="btn-brand">Let&apos;s Build Your Solution<ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RECOGNIZED BY */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="text-center mb-12"><div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Recognition</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">We Are <span className="text-brand-600">Recognized By</span></h2></div></Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {awards.map((a, i) => (<Reveal key={i} delay={i * 60}><div className="bg-white p-5 flex flex-col items-center text-center card-lift h-full"><LaurelIcon className="w-12 h-14 mb-3 text-brand-500" /><div className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-1">{a.platform}</div><div className="text-[11px] text-neutral-600 leading-snug mb-1">{a.title}</div><div className="text-[10px] text-neutral-400 font-mono">{a.year}</div></div></Reveal>))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-16">
            <Reveal><div className="lg:sticky lg:top-28 lg:self-start"><div className="text-eyebrow text-brand-600 uppercase mb-4">FAQ</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-4">Common questions <span className="text-brand-600">before we start</span></h2><p className="text-base text-neutral-600 leading-relaxed mb-6">Everything procurement, engineering, and finance teams typically ask before signing.</p><Link href="/contact" className="btn-secondary">Ask a different question<ArrowRight className="w-4 h-4" /></Link></div></Reveal>
            <Reveal delay={200}>
              <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-200">
                {faqs.map((f, i) => { const open = openFaq === i; return (<button key={f.q} onClick={() => setOpenFaq(open ? null : i)} className="w-full text-left px-6 lg:px-7 py-5 hover:bg-neutral-50 transition-colors block"><div className="flex items-center justify-between gap-6"><div className="flex items-start gap-4"><span className="font-mono text-xs font-bold text-brand-600 mt-1">{String(i + 1).padStart(2, "0")}</span><span className="text-base font-semibold text-neutral-900 leading-snug">{f.q}</span></div><span className={`w-7 h-7 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}>{open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}</span></div>{open && (<p className="text-sm text-neutral-600 leading-relaxed mt-4 pl-10">{f.a}</p>)}</button>); })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ServiceSeoTail
        serviceName="Product Design"
        servicePath="/services/product-design"
        renderFaq={false}
        service={{
          name: "Product Design",
          description:
            "UK product design agency. UX, UI, and product discovery for SaaS and AI products by a senior team that designs and engineers together.",
          serviceType: "Product Design",
        }}
        caseStudies={[
          { href: "/case-studies/propmetrics", title: "PropMetrics — property analytics platform", meta: "SaaS dashboard · IA · UI · design system" },
          { href: "/case-studies/lexa", title: "Lexa — Pakistan's first AI legal chatbot", meta: "Conversational UX · trust design · accessibility" },
        ]}
        insights={[
          { href: "/blog/great-product-design-process", title: "What Makes a Great Product Design Process" },
          { href: "/blog/designing-for-trust-ai-ux", title: "Designing for Trust: UX Principles for AI-Powered Apps" },
        ]}
        faqs={faqs}
      />

      {/* FINAL CTA */}
      <section className="py-20 bg-neutral-950 text-white border-t border-neutral-800 relative overflow-hidden">
        <Parallax speed={0.15} className="absolute top-0 right-0 hidden lg:block pointer-events-none"><div className="w-80 h-80 rounded-full bg-brand-500/10 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-eyebrow text-brand-300 uppercase mb-4">Get in touch</div>
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">Ready to design a product users love?</h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">Free 30-minute design audit with a senior product designer. No slide decks, no sales reps.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-brand">Talk to a designer<ArrowRight className="w-4 h-4" /></Link>
              <Link href="/services" className="btn-ghost-light">Back to all services<ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
