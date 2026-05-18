"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Award, Clock, ShieldCheck,
  TrendingUp, Zap, Plus, Minus,
  Telescope, Map, Megaphone, Sprout, Rocket, BarChart3,
  Heart, Building2, Boxes, ShoppingBag, Factory, GraduationCap,
  Brain, Cloud, Workflow,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";

const services = [
  {
    Icon: Telescope,
    name: "Product Discovery & Market Validation",
    tagline: "Validate before you build.",
    desc: "Structured customer interviews, competitive analysis, and demand forecasting to validate product-market fit before committing full-scale development budgets.",
    bullets: [
      "Conduct structured customer interviews and in-depth competitive product analysis.",
      "Validate product-market fit before committing full-scale development budgets.",
      "Minimize product failure risk through early-stage validation and insight-driven decision-making.",
      "Build data-informed opportunity sizing and demand forecasting models.",
      "Quantitative and qualitative research combined for confident go/no-go calls.",
    ],
    metric: { value: "60%", label: "Failure-risk reduction" },
  },
  {
    Icon: Map,
    name: "Product Vision & Roadmap Strategy",
    tagline: "Roadmaps tied to revenue outcomes.",
    desc: "Define clear product vision aligned with long-term revenue and business objectives — with structured prioritization frameworks and stakeholder alignment.",
    bullets: [
      "Define a clear product vision aligned with long-term revenue and business objectives.",
      "Apply structured prioritization frameworks to strengthen roadmap efficiency and focus.",
      "Align engineering, marketing, and executive stakeholders around measurable product goals.",
      "Deliver strategic product roadmap consulting for SaaS and enterprise platforms.",
      "Quarterly roadmap reviews tied to measurable business KPIs.",
    ],
    metric: { value: "3×", label: "Faster prioritization" },
  },
  {
    Icon: Megaphone,
    name: "Go-to-Market & Monetization Strategy",
    tagline: "Pricing, positioning, and launch planning.",
    desc: "Design pricing strategies, define target segments, plan launches, and align sales enablement — strengthening early product adoption through structured execution.",
    bullets: [
      "Design pricing strategies for software products and digital platforms.",
      "Define target audience segments and differentiated value propositions.",
      "Strengthen early product adoption through structured launch planning.",
      "Align sales enablement with product positioning and go-to-market execution.",
      "Competitive pricing benchmarks across SaaS, eCommerce, and enterprise.",
    ],
    metric: { value: "45%", label: "Faster adoption" },
  },
  {
    Icon: Sprout,
    name: "Product Growth Strategy",
    tagline: "Product-led growth that compounds.",
    desc: "Product-led growth strategies for B2B and SaaS — refining onboarding, activation, and lifecycle-focused retention through experimentation roadmaps powered by analytics.",
    bullets: [
      "Implement product-led growth strategies for B2B and SaaS platforms.",
      "Refine onboarding, activation, and feature adoption journeys.",
      "Strengthen customer retention through lifecycle-focused growth initiatives.",
      "Develop experimentation roadmaps powered by product analytics insights.",
      "North-star metrics tied to compounding retention curves.",
    ],
    metric: { value: "2×", label: "Retention improvement" },
  },
  {
    Icon: Rocket,
    name: "New Product Development & MVP Strategy",
    tagline: "Lean MVP frameworks for rapid validation.",
    desc: "Lean product development with MVP frameworks that test assumptions early, shorten validation cycles, and reduce unnecessary engineering costs and technical debt.",
    bullets: [
      "Apply lean product development principles for rapid concept validation.",
      "Build MVP frameworks to test assumptions early and reduce uncertainty.",
      "Shorten validation cycles through structured experimentation.",
      "Reduce unnecessary engineering costs and long-term technical debt.",
      "Build-measure-learn cycles compressed from quarters to weeks.",
    ],
    metric: { value: "50%", label: "Less wasted build" },
  },
  {
    Icon: BarChart3,
    name: "Product Analytics, KPIs & Governance",
    tagline: "Measurable KPIs and operating models.",
    desc: "Define measurable product KPIs, establish lifecycle governance, and improve executive decision-making with performance-driven reporting — supporting sustained product growth.",
    bullets: [
      "Define measurable product KPIs aligned with strategic business outcomes.",
      "Establish product lifecycle management and governance frameworks.",
      "Improve executive decision-making with performance-driven reporting.",
      "Create scalable operating models that support sustained product growth.",
      "Real-time dashboards integrated with Mixpanel, Amplitude, and Looker.",
    ],
    metric: { value: "100%", label: "KPI visibility" },
  },
];

const process = [
  { no: "01", title: "Customer Discovery", duration: "1–2 weeks", desc: "We align your business around customer needs through interviews and research to identify high-value outcomes and opportunities. Listening first, framing second." },
  { no: "02", title: "Opportunity Mapping", duration: "1 week", desc: "We segment customers, analyze outcomes, and assess competitive positioning to identify the most promising growth opportunities for your product." },
  { no: "03", title: "Concept Ideation",    duration: "1–2 weeks", desc: "We co-create innovative solutions and improve existing offerings — adding winning products to your pipeline efficiently." },
  { no: "04", title: "Data-Driven Insights", duration: "1 week", desc: "Tackxel gathers quantitative market and user data to validate assumptions and inform strategic product decisions before commitment." },
  { no: "05", title: "Strategic Roadmapping", duration: "1–2 weeks", desc: "Our team prioritizes initiatives, designs actionable roadmaps, and aligns stakeholders for faster, measurable product impact." },
  { no: "06", title: "Validation & Scaling", duration: "Ongoing", desc: "We test MVPs, refine features based on real data, and implement governance frameworks for sustainable growth." },
];

const advancedTech = [
  {
    Icon: Brain,
    title: "Gen AI, AI Agents & Agentic Systems Strategy",
    desc: "We assess generative AI, AI agents, agentic workflows, and LLM orchestration opportunities — lowering experimentation risk through structured validation and governance models.",
  },
  {
    Icon: Cloud,
    title: "Cloud-Native, Data & Autonomous Architecture Strategy",
    desc: "Our team links cloud-native architecture, data platforms, and autonomous decision systems to product scalability goals — improving performance benchmarks across enterprise environments.",
  },
  {
    Icon: Workflow,
    title: "Innovation Architecture & Intelligent Automation",
    desc: "Tackxel designs innovation pipelines to integrate multimodal AI, predictive analytics, and intelligent automation frameworks — enabling faster validation of high-impact product initiatives.",
  },
];

const challenges = [
  { title: "Misaligned Product Roadmaps", solution: "Structured roadmap frameworks aligned to business KPIs, with executive sign-off gates and quarterly reviews. Features earn their place — not just because someone shouted loudest." },
  { title: "Poor Market Validation", solution: "Customer interview programs, behavioral analytics, and demand forecasting before commitment. We validate with real users — not just internal opinions." },
  { title: "Ineffective Go-to-Market Strategies", solution: "Segment-driven positioning, pricing experiments, and sales enablement playbooks. GTM stops being marketing's problem alone and becomes a coordinated product motion." },
  { title: "Low Customer Retention", solution: "Lifecycle-focused growth strategy with onboarding redesign, activation funnels, and engagement loops. Retention engineering — not just acquisition vanity metrics." },
  { title: "Delayed Product Launches", solution: "Scope discipline, MVP frameworks, and ruthless prioritization. Ship something real in weeks — not quarters waiting for perfect." },
  { title: "Unclear KPIs & Metrics", solution: "Outcome-based KPI frameworks with leading and lagging indicators, plus quarterly business reviews. Vanity metrics retired — north-star metrics installed." },
  { title: "Technical Debt & Overspending", solution: "Cost-aware product decisions with architecture reviews, build-vs-buy analysis, and explicit debt budgets. Engineering velocity treated as a product KPI." },
  { title: "Integrating Emerging Technologies", solution: "Structured AI, ML, and Gen AI evaluation frameworks. Adopt what's worth adopting — skip what's noise. Innovation governed, not chased." },
];

const industries = [
  { Icon: Heart, name: "Healthcare & HealthTech", desc: "Product strategy for digital health platforms, EHR vendors, and care coordination apps — built around HIPAA compliance and clinical workflow realities.", examples: ["Digital health", "EHR strategy", "Care coordination", "Clinical workflows"] },
  { Icon: Building2, name: "Finance & Fintech", desc: "Product strategy for fintechs, neobanks, and embedded finance — with PCI compliance, regulatory awareness, and competitive market mapping.", examples: ["Neobanking", "Embedded finance", "Payments", "WealthTech"] },
  { Icon: Boxes, name: "SaaS & Technology", desc: "Product-led growth strategy for B2B SaaS — covering pricing, expansion revenue, multi-product platforms, and platform-vs-product positioning.", examples: ["B2B SaaS", "Product-led growth", "Pricing strategy", "Platform expansion"] },
  { Icon: ShoppingBag, name: "eCommerce & Retail", desc: "Omnichannel product strategy for marketplaces and DTC brands — covering catalog, checkout optimization, loyalty, and unified commerce architecture.", examples: ["Marketplaces", "DTC strategy", "Catalog systems", "Loyalty platforms"] },
  { Icon: Factory, name: "Manufacturing & Industrial", desc: "Digital product strategy for manufacturers entering software markets — IoT platforms, predictive maintenance services, and connected-product business models.", examples: ["IoT platforms", "Connected products", "Service models", "Industry 4.0"] },
  { Icon: GraduationCap, name: "Education & EdTech", desc: "Product strategy for EdTech platforms, LMS providers, and corporate training — covering engagement metrics, content licensing, and B2B2C dynamics.", examples: ["EdTech platforms", "LMS strategy", "Corporate training", "Content licensing"] },
];

const techStackTabs = [
  { category: "Product Analytics & KPI Tools", techs: ["Mixpanel", "Amplitude", "Google Analytics 4", "Heap", "PostHog", "Tableau", "Looker", "Power BI"] },
  { category: "Product Roadmapping",           techs: ["Productboard", "Aha!", "ProductPlan", "Roadmunk", "Jira Product Discovery", "Notion", "Linear"] },
  { category: "Research & User Testing",       techs: ["UserTesting", "Maze", "Lookback", "Dovetail", "Hotjar", "FullStory", "Optimal Workshop"] },
  { category: "Design & Prototyping",          techs: ["Figma", "Sketch", "Adobe XD", "InVision", "Miro", "FigJam", "Whimsical"] },
  { category: "Experimentation",               techs: ["Optimizely", "VWO", "LaunchDarkly", "Statsig", "GrowthBook", "Eppo", "Split.io"] },
  { category: "Collaboration & Strategy",      techs: ["Notion", "Confluence", "Slack", "Loom", "Linear", "Asana", "Monday.com"] },
];

const faqs = [
  { q: "When is the right time to engage a product strategy consultant?", a: "The earlier the better — but most teams come to us when they're deciding what to build, when a roadmap stops delivering business outcomes, when growth has plateaued, or when investors are asking hard questions about traction. Strategy work pays for itself many times over against building the wrong thing." },
  { q: "How quickly can you start a product strategy engagement?", a: "Most engagements begin within one to two weeks. We run a discovery call, agree on scope and outcomes, sign the MSA and SOW, and onboard your strategy lead into stakeholder context. Faster starts are possible with light scope." },
  { q: "What does a product strategy engagement typically cost?", a: "Focused strategy sprints (discovery + roadmap) range from USD 30K to USD 80K. Comprehensive engagements with research, GTM, and analytics setup range from USD 100K to USD 300K. Fractional product leadership starts at USD 15K per month." },
  { q: "Do you stay on after strategy or hand it off?", a: "Both options are available. We can hand off a complete strategy package for internal execution, or stay engaged as fractional product leadership while you ramp. Many engagements blend both — strategy work upfront with ongoing advisory support." },
  { q: "How do you measure product strategy success?", a: "Success is measured against the business outcomes we agree on at the start — typically revenue, retention, activation, or adoption metrics. Every quarter we review against those baselines with the steering committee and adjust strategy based on what's working." },
  { q: "Do you work with early-stage startups or only enterprises?", a: "Both. We work with seed-stage startups validating their first product, growth-stage companies scaling toward Series B, and enterprises modernizing or launching new product lines. Engagement size and depth flex to fit the stage." },
];

const awards = [
  { platform: "Clutch",        title: "Top Product Strategy",      year: "2024" },
  { platform: "TopDevelopers", title: "Top Software Developers",   year: "2024" },
  { platform: "Firmstalk",     title: "Top Custom Software Dev",   year: "2024" },
  { platform: "SoftwareWorld", title: "Top Rated Consultants",     year: "2024" },
  { platform: "Industry",      title: "Best Product Strategy",     year: "2024" },
  { platform: "GoodFirms",     title: "Top Strategy Consultants",  year: "2024" },
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

export default function ProductStrategyPage() {
  const [email, setEmail] = useState("");
  const [activeService, setActiveService] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [activeStack, setActiveStack] = useState(0);
  const [openChallenge, setOpenChallenge] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeServiceData = services[activeService];
  const activeIndustryData = industries[activeIndustry];
  const activeStackData = techStackTabs[activeStack];

  return (
    <>
      {/* HERO */}
      <section className="relative hero-glow text-white pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <Parallax speed={0.15} className="absolute top-20 right-20 hidden lg:block pointer-events-none"><div className="w-72 h-72 rounded-full bg-brand-500/10 blur-3xl float-slow" /></Parallax>
        <Parallax speed={-0.1} className="absolute bottom-10 left-20 hidden lg:block pointer-events-none"><div className="w-96 h-96 rounded-full bg-brand-400/5 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <Reveal><nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-mono"><Link href="/" className="hover:text-brand-300 transition-colors">Home</Link><span>/</span><Link href="/services" className="hover:text-brand-300 transition-colors">Services</Link><span>/</span><span className="text-brand-300">Product Strategy</span></nav></Reveal>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><span className="badge-dark mb-6"><span className="dot-pulse" />Strategic product consulting</span></Reveal>
              <Reveal delay={80}><div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">Strategize · Build · Automate · Scale</div></Reveal>
              <Reveal delay={140}><h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">Custom Product Strategy Consulting Company.</h1></Reveal>
              <Reveal delay={220}><p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">Tackxel delivers product strategy consulting services that reduce product failure rates and accelerate time-to-market — using structured validation, data-driven roadmapping, and KPI alignment.</p></Reveal>
              <Reveal delay={300}>
                <form onSubmit={(e) => { e.preventDefault(); window.location.href = `/contact?email=${encodeURIComponent(email)}`; }} className="flex flex-col sm:flex-row gap-3 mt-8 max-w-xl">
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-5 py-3 rounded-md border border-neutral-700 bg-neutral-900/60 text-white text-sm placeholder:text-neutral-500 focus:border-brand-500 focus:bg-neutral-900 outline-none transition-all" />
                  <button type="submit" className="btn-brand whitespace-nowrap"><Calendar className="w-4 h-4" />Schedule a Call</button>
                </form>
              </Reveal>
              <Reveal delay={400}><div className="mt-5 flex items-center gap-2 text-sm text-neutral-400"><ShieldCheck className="w-3.5 h-3.5 text-brand-300" />Free 30-min strategy session with experts. NDA secured.</div></Reveal>
            </div>
            <Reveal delay={300} direction="left">
              <div className="space-y-3">
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Award className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">#1 Top-Rated</div><div className="text-xs text-neutral-400">Product Strategy Consulting Firm</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Clock className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">U.S. Time Zone</div><div className="text-xs text-neutral-400">Senior strategists · 9am–5pm EST</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Telescope className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">Cross-Functional</div><div className="text-xs text-neutral-400">Strategists · PMs · Researchers</div></div></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROMISE CARDS */}
      <section className="py-14 lg:py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <Reveal>
              <div className="bg-neutral-950 text-white border border-neutral-800 rounded-lg p-7 h-full card-lift">
                <div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center mb-4"><Map className="w-5 h-5 text-brand-300" /></div>
                <h3 className="font-display text-h3 text-white mb-2">Enterprise Product Roadmap Strategy</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">We align business goals with structured roadmaps — improving prioritization accuracy and reducing unnecessary development costs.</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white rounded-lg p-7 h-full card-lift overflow-hidden relative">
                <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-md bg-white/15 border border-white/25 flex items-center justify-center mb-4"><BarChart3 className="w-5 h-5 text-white" /></div>
                  <h3 className="font-display text-h3 text-white mb-2">Data-Driven Product Analytics Strategy</h3>
                  <p className="text-sm text-brand-50 leading-relaxed">Tackxel implements product KPIs and analytics frameworks that improve executive decision-making accuracy across SaaS and enterprise products.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-white border border-neutral-200 rounded-lg p-7 h-full">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-600 font-semibold mb-2">Your Trusted</div>
                <h3 className="font-display text-h3 text-neutral-950 mb-5">Product Strategy <span className="text-brand-600">Partner</span></h3>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={10} suffix="+" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Years of Experience</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950">Top <Counter to={1} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Vetted Talent</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={95} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Client Retention Rate</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950">Faster</div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Strategic Alignment</div></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="bg-white py-10 lg:py-12 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {awards.map((a, i) => (<Reveal key={i} delay={i * 60}><div className="bg-white p-5 flex flex-col items-center text-center card-lift h-full"><LaurelIcon className="w-11 h-12 mb-2 text-brand-500" /><div className="text-[11px] font-bold text-brand-700 uppercase tracking-wider mb-1">{a.platform}</div><div className="text-[10px] text-neutral-600 leading-snug mb-1">{a.title}</div><div className="text-[10px] text-neutral-400 font-mono">{a.year}</div></div></Reveal>))}
          </div>
        </div>
      </section>

      {/* SERVICES TABS */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="text-center mb-14"><div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Our Digital Product Strategy Solutions</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">Drive Product <span className="text-brand-600">Market Fit And Scalable Growth</span></h2><p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">Click any service below to explore the engineering depth, capabilities, and measurable outcomes we deliver.</p></div></Reveal>
          <Reveal>
            <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 lg:grid-cols-6 border-b border-neutral-200 bg-neutral-50">{services.map((s, i) => (<button key={s.name} onClick={() => setActiveService(i)} className={`px-4 py-4 text-left transition-all border-r border-neutral-200 last:border-r-0 ${activeService === i ? "bg-white border-b-2 border-b-brand-500 -mb-px" : "hover:bg-white/60 border-b-2 border-b-transparent"}`}><div className="flex items-center gap-2 mb-1.5"><s.Icon className={`w-7 h-7 transition-opacity ${activeService === i ? "opacity-100 text-brand-600" : "opacity-50 text-neutral-600"}`} /></div><div className={`text-xs font-semibold leading-tight ${activeService === i ? "text-brand-700" : "text-neutral-600"}`}>{s.name}</div></button>))}</div>
              <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 p-8 lg:p-10">
                <div>
                  <div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">{String(activeService + 1).padStart(2, "0")} · Service Detail</div>
                  <h3 className="font-display text-h2 text-neutral-950 mb-3">{activeServiceData.name}</h3>
                  <p className="text-base font-semibold text-neutral-700 mb-4">{activeServiceData.tagline}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">{activeServiceData.desc}</p>
                  <ul className="space-y-3">{activeServiceData.bullets.map((b) => (<li key={b} className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-3 h-3 text-brand-600" /></div><span className="text-sm text-neutral-700 leading-relaxed">{b}</span></li>))}</ul>
                  <Link href="/contact" className="btn-brand mt-8">Discuss your product strategy project<ArrowRight className="w-4 h-4" /></Link>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-xl p-6 flex items-center justify-center aspect-square"><activeServiceData.Icon className="w-32 h-32 lg:w-40 lg:h-40 text-brand-500" strokeWidth={1.2} /></div>
                  <div className="bg-neutral-950 text-white rounded-xl p-6"><div className="text-xs font-mono text-brand-300 uppercase tracking-wider mb-2 font-semibold">Measurable Outcome</div><div className="font-display text-4xl font-bold text-white mb-1 tracking-display">{activeServiceData.metric.value}</div><div className="text-sm text-neutral-400">{activeServiceData.metric.label}</div></div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}><div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">{services.map((s, i) => (<button key={s.name} onClick={() => setActiveService(i)} className={`p-6 text-left transition-colors ${activeService === i ? "bg-brand-50" : "bg-white hover:bg-neutral-50"}`}><div className="flex items-start gap-4"><div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0"><s.Icon className="w-5 h-5 text-brand-600" /></div><div><h3 className="text-sm font-semibold text-neutral-950 mb-1">{s.name}</h3><p className="text-xs text-neutral-600 leading-relaxed">{s.tagline}</p></div></div></button>))}</div></Reveal>
          <Reveal delay={300}><div className="mt-10 flex justify-center"><Link href="/contact" className="btn-brand">Need Expert Guidance to Improve Product ROI?<ArrowRight className="w-4 h-4" /></Link></div></Reveal>
        </div>
      </section>

      {/* ADVANCED TECH */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/30 via-neutral-950 to-neutral-950" />
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none"><div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4">Advanced Technology Strategy <span className="text-brand-300">for Intelligent Products</span></h2><p className="text-base text-neutral-300 leading-relaxed mb-8 max-w-lg">We combine emerging technologies with measurable business objectives to keep your product strategy scalable, ready for investment, and unique in the market.</p></Reveal>
              <div className="space-y-4">{advancedTech.map((t, i) => (<Reveal key={t.title} delay={i * 100}><div className="bg-neutral-900/70 backdrop-blur border border-neutral-800 rounded-lg p-6 card-lift"><div className="flex items-start gap-4"><div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center flex-shrink-0"><t.Icon className="w-6 h-6 text-brand-300" /></div><div><h3 className="text-base font-semibold text-white mb-1.5">{t.title}</h3><p className="text-sm text-neutral-400 leading-relaxed">{t.desc}</p></div></div></div></Reveal>))}</div>
              <Reveal delay={400}><Link href="/contact" className="btn-brand mt-8">Strengthen Your AI-Driven Product Strategy<ArrowRight className="w-4 h-4" /></Link></Reveal>
            </div>
            <Reveal delay={300} direction="left">
              <div className="relative bg-neutral-900/40 backdrop-blur border border-neutral-800 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <svg viewBox="0 0 320 320" className="w-full h-full">
                  <defs><radialGradient id="coreGlowPS" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#5278C2" stopOpacity="0.5" /><stop offset="100%" stopColor="#3159A5" stopOpacity="0" /></radialGradient></defs>
                  <circle cx="160" cy="160" r="60" fill="url(#coreGlowPS)" />
                  <circle cx="160" cy="160" r="130" fill="none" stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 4" />
                  <circle cx="160" cy="160" r="100" fill="none" stroke="#3159A5" strokeOpacity="0.25" strokeWidth="1.2" />
                  <circle cx="160" cy="160" r="70" fill="none" stroke="#3159A5" strokeOpacity="0.35" strokeWidth="1.2" />
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => { const rad = (deg * Math.PI) / 180; const x = 160 + Math.cos(rad) * 130; const y = 160 + Math.sin(rad) * 130; return (<g key={i}><line x1="160" y1="160" x2={x} y2={y} stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1" /><circle cx={x} cy={y} r="6" fill="#5278C2" /><circle cx={x} cy={y} r="10" fill="none" stroke="#5278C2" strokeOpacity="0.3" /></g>); })}
                  <circle cx="160" cy="160" r="32" fill="#3159A5" />
                  <text x="160" y="167" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="Geist">STRAT</text>
                  {[{ label: "AI", x: 290, y: 160 }, { label: "DATA", x: 225, y: 47 }, { label: "GROWTH", x: 85, y: 47 }, { label: "GTM", x: 30, y: 160 }, { label: "MVP", x: 95, y: 273 }, { label: "KPIs", x: 225, y: 273 }].map((t) => (<g key={t.label}><rect x={t.x - 32} y={t.y - 11} width="64" height="22" rx="4" fill="#1D376A" stroke="#3159A5" strokeOpacity="0.4" /><text x={t.x} y={t.y + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill="#7E9DD7" fontFamily="Geist">{t.label}</text></g>))}
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-end mb-12"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Common Challenges</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-3">Top Product Strategy Challenges That Can Hurt ROI</h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Click any challenge to reveal exactly how we solve it.</p></div></Reveal>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-12">
            <Reveal>
              <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100">
                {challenges.map((c, i) => { const open = openChallenge === i; return (<button key={c.title} onClick={() => setOpenChallenge(open ? null : i)} className="w-full text-left hover:bg-neutral-50 transition-colors block"><div className="flex items-center justify-between gap-6 px-6 py-4"><div className="flex items-start gap-4 flex-1"><span className="font-mono text-xs font-semibold text-brand-600 pt-1 w-6">{String(i + 1).padStart(2, "0")}</span><span className="text-sm font-semibold text-neutral-900 leading-snug">{c.title}</span></div><span className={`w-7 h-7 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}>{open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}</span></div>{open && (<div className="px-6 pb-5 pl-16"><div className="border-l-2 border-brand-300 pl-4"><div className="text-[10px] font-mono uppercase tracking-wider text-brand-600 font-semibold mb-1.5">How we solve it</div><p className="text-sm text-neutral-700 leading-relaxed">{c.solution}</p></div></div>)}</button>); })}
              </div>
            </Reveal>
            <Reveal delay={200} direction="left">
              <div className="lg:sticky lg:top-28 lg:self-start space-y-4">
                <div className="bg-neutral-950 text-white rounded-lg p-7"><div className="text-xs text-brand-300 uppercase tracking-wider font-semibold mb-3">The Pattern</div><p className="text-base text-neutral-200 leading-relaxed">Teams often work on features misaligned with business objectives — causing wasted time and resources.</p></div>
                <div className="bg-white border border-neutral-200 rounded-lg p-7">
                  <div className="text-xs text-brand-600 uppercase tracking-wider font-semibold mb-3">Our Approach</div>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">We implement structured roadmap frameworks that align product initiatives with strategic goals across all stakeholders.</p>
                  <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><Zap className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">3×</div><div className="text-xs text-neutral-500 mt-0.5">Improved Prioritization</div></div>
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><TrendingUp className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">50%</div><div className="text-xs text-neutral-500 mt-0.5">Reduced Wasted Effort</div></div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BLUE CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="relative bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 rounded-2xl p-10 lg:p-12 overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
              <Parallax speed={0.15} className="absolute -top-20 -right-20 hidden lg:block pointer-events-none"><div className="w-80 h-80 rounded-full bg-white/10 blur-3xl" /></Parallax>
              <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
                <div><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-3">Want To Reduce Product Failure And Wasted Costs?</h2><p className="text-base text-brand-50 leading-relaxed max-w-xl">Tackxel partners with your team to minimize product failure, shorten time-to-market, and deliver measurable ROI across digital products.</p></div>
                <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2 w-fit lg:justify-self-end">Reduce Product Failure Risk Now<ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Industries We Serve</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">Industries Where We Drive <span className="text-brand-600">Your Product Success</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Tackxel delivers measurable product outcomes across sectors — applying industry standards, data-driven roadmaps, and strategic guidance for scalable, market-ready digital products.</p></div></Reveal>
          <Reveal delay={150}>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-10">
              <ul className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100 h-fit">
                {industries.map((ind, i) => (<li key={ind.name}><button onClick={() => setActiveIndustry(i)} className={`w-full text-left flex items-center justify-between gap-4 px-6 py-4 transition-colors ${activeIndustry === i ? "bg-brand-50" : "hover:bg-neutral-50"}`}><div className="flex items-center gap-4"><div className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${activeIndustry === i ? "bg-brand-500 border-brand-500" : "bg-brand-50 border-brand-100"}`}><ind.Icon className={`w-4 h-4 ${activeIndustry === i ? "text-white" : "text-brand-600"}`} /></div><span className={`text-base font-semibold ${activeIndustry === i ? "text-brand-700" : "text-neutral-900"}`}>{ind.name}</span></div><ArrowRight className={`w-4 h-4 transition-all ${activeIndustry === i ? "text-brand-600 translate-x-1" : "text-neutral-300"}`} /></button></li>))}
              </ul>
              <div className="bg-white border border-neutral-200 rounded-lg p-8 lg:p-10 self-start">
                <div className="flex items-start gap-5 mb-6"><div className="w-16 h-16 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center flex-shrink-0"><activeIndustryData.Icon className="w-7 h-7 text-brand-600" /></div><div><div className="text-eyebrow text-brand-600 uppercase mb-2 font-semibold tracking-widest">Industry Focus</div><h3 className="font-display text-h2 text-neutral-950 leading-tight">{activeIndustryData.name}</h3></div></div>
                <p className="text-base text-neutral-700 leading-relaxed mb-6">{activeIndustryData.desc}</p>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden mb-6">{activeIndustryData.examples.map((ex) => (<div key={ex} className="bg-white p-4 flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" /><span className="text-sm text-neutral-800 font-medium">{ex}</span></div>))}</div>
                <Link href="/contact" className="btn-brand">Discover Solutions Customized For Your Sector<ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-700/30 via-neutral-950 to-neutral-950" />
        <Parallax speed={0.15} className="absolute bottom-0 right-0 hidden lg:block pointer-events-none"><div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Our Process</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">How Does Tackxel Deliver <span className="text-brand-300">Product Strategy That Works For You?</span></h2></div><p className="text-base text-neutral-300 leading-relaxed lg:justify-self-end max-w-xl">We guide your team from discovery to launch — aligning strategy, technology, and market insights to deliver validated and high-impact product outcomes.</p></div></Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800 rounded-lg overflow-hidden">
            {process.map((step, i) => (<Reveal key={step.no} delay={i * 80}><div className="bg-neutral-950 p-7 hover:bg-neutral-900/60 transition-colors h-full card-lift"><div className="flex items-start gap-4 mb-3"><div className="w-10 h-10 rounded-md bg-brand-500/15 border border-brand-500/25 flex items-center justify-center flex-shrink-0"><span className="font-mono text-xs font-bold text-brand-300">{String(i + 1).padStart(2, "0")}</span></div><h3 className="text-base font-semibold text-white pt-2 leading-snug">{step.title}</h3></div><p className="text-sm text-neutral-400 leading-relaxed pl-14">{step.desc}</p></div></Reveal>))}
          </div>
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

      {/* TECH STACK */}
      <section className="py-20 lg:py-24 bg-neutral-950 text-white relative overflow-hidden">
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none"><div className="w-96 h-96 rounded-full bg-brand-500/10 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tech Stack</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">Tech Stack We Use To Drive Product Strategy</h2></div><p className="text-base text-neutral-400 leading-relaxed max-w-xl lg:justify-self-end">Tackxel uses advanced tools and technologies across analytics, design, and collaboration to ensure data-driven, validated, and scalable product strategies for your business.</p></div></Reveal>
          <Reveal delay={100}>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
              <div className="flex flex-wrap gap-px bg-neutral-800 border-b border-neutral-800">{techStackTabs.map((t, i) => (<button key={t.category} onClick={() => setActiveStack(i)} className={`flex-1 min-w-[120px] px-4 lg:px-6 py-4 text-sm font-medium transition-all ${activeStack === i ? "bg-brand-600 text-white border-b-2 border-b-brand-300" : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800/60 hover:text-white"}`}><div className="text-xs font-mono mb-1 opacity-70">{String(i + 1).padStart(2, "0")}</div>{t.category}</button>))}</div>
              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
                  <div><div className="text-eyebrow text-brand-300 uppercase mb-3 font-semibold tracking-widest">{String(activeStack + 1).padStart(2, "0")} · Tech Category</div><h3 className="font-display text-h2 text-white mb-3">{activeStackData.category}</h3><p className="text-sm text-neutral-400 leading-relaxed">{activeStackData.techs.length} production-grade tools for product strategy work.</p></div>
                  <div className="flex flex-wrap gap-2.5">{activeStackData.techs.map((tech) => (<span key={tech} className="inline-flex items-center px-4 py-2.5 rounded-md border border-neutral-700 bg-neutral-950 text-sm text-neutral-200 hover:border-brand-500 hover:text-white transition-colors">{tech}</span>))}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-16">
            <Reveal><div className="lg:sticky lg:top-28 lg:self-start"><div className="text-eyebrow text-brand-600 uppercase mb-4">FAQ</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-4">Common questions <span className="text-brand-600">before we start</span></h2><p className="text-base text-neutral-600 leading-relaxed mb-6">Everything procurement, engineering, and finance teams typically ask before signing.</p><Link href="/contact" className="btn-secondary">Ask a different question<ArrowRight className="w-4 h-4" /></Link></div></Reveal>
            <Reveal delay={200}>
              <div className="border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-200">
                {faqs.map((f, i) => { const open = openFaq === i; return (<button key={f.q} onClick={() => setOpenFaq(open ? null : i)} className="w-full text-left px-6 lg:px-7 py-5 hover:bg-neutral-50 transition-colors block"><div className="flex items-center justify-between gap-6"><div className="flex items-start gap-4"><span className="font-mono text-xs font-bold text-brand-600 mt-1">{String(i + 1).padStart(2, "0")}</span><span className="text-base font-semibold text-neutral-900 leading-snug">{f.q}</span></div><span className={`w-7 h-7 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}>{open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}</span></div>{open && (<p className="text-sm text-neutral-600 leading-relaxed mt-4 pl-10">{f.a}</p>)}</button>); })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-neutral-950 text-white border-t border-neutral-800 relative overflow-hidden">
        <Parallax speed={0.15} className="absolute top-0 right-0 hidden lg:block pointer-events-none"><div className="w-80 h-80 rounded-full bg-brand-500/10 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-eyebrow text-brand-300 uppercase mb-4">Get in touch</div>
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">Ready to align product with business outcomes?</h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">Free 30-minute strategy session with a senior product consultant. No slide decks, no sales reps.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-brand">Talk to a strategy expert<ArrowRight className="w-4 h-4" /></Link>
              <Link href="/services" className="btn-ghost-light">Back to all services<ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
