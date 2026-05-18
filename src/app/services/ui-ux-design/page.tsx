"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Award, Clock, ShieldCheck,
  TrendingUp, Zap, Plus, Minus,
  Smartphone, Monitor, Layers, MousePointer2, Building, Compass,
  Heart, Building2, ShoppingBag, GraduationCap, Home, Truck,
  Sparkles, Brain, Boxes,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";

const services = [
  {
    Icon: Smartphone,
    name: "Mobile App UI/UX Design",
    tagline: "Intuitive iOS and Android interfaces.",
    desc: "Mobile-first design systems engineered for iOS and Android — combining UX best practices, responsive layouts, and NNGroup usability research to drive engagement and retention.",
    bullets: [
      "Intuitive mobile interfaces designed for iOS and Android.",
      "Improve user engagement and retention by up to 30%.",
      "Responsive layouts backed by UX best practices.",
      "Built with insights from NNGroup usability research.",
      "Full design system handoff with developer-ready specs.",
    ],
    metric: { value: "30%", label: "Engagement uplift" },
  },
  {
    Icon: Monitor,
    name: "Web App UI/UX Design",
    tagline: "Fast, accessible web experiences.",
    desc: "Web app design that improves task success rates by 47% — optimized for SaaS, portals, and eCommerce platforms with A/B testing and SEO-friendly interaction design.",
    bullets: [
      "Fast, accessible designs improve task success rates by 47%.",
      "Optimize UX for SaaS, portals, and eCommerce platforms.",
      "Tested through A/B experiments and user journey mapping.",
      "Supports SEO-friendly structure and interaction design.",
      "WCAG 2.1 AA compliance and Lighthouse 90+ performance.",
    ],
    metric: { value: "47%", label: "Task success rate" },
  },
  {
    Icon: Layers,
    name: "Product Design Services",
    tagline: "Full lifecycle product design.",
    desc: "End-to-end product design from research to delivery — using data-driven visual systems, heatmaps, analytics, and real user feedback aligned with Baymard Institute UX standards.",
    bullets: [
      "Full lifecycle product design from research to delivery.",
      "Improve satisfaction using data-driven visual design systems.",
      "Incorporate heatmaps, analytics, and real user feedback.",
      "Aligned with Baymard Institute UX standards.",
      "Continuous usability testing across every release cycle.",
    ],
    metric: { value: "42%", label: "Satisfaction lift" },
  },
  {
    Icon: MousePointer2,
    name: "Prototype Design & Testing",
    tagline: "Interactive prototypes validated by users.",
    desc: "Interactive prototypes validated through user testing sessions — reducing redesign time by 25% via early usability insights and rapid iteration on behavioral data.",
    bullets: [
      "Interactive prototypes validated through user testing sessions.",
      "Reduce redesign time by 25% using early usability insights.",
      "Conduct rapid iterations based on behavioral data.",
      "Improve stakeholder alignment through visual storytelling.",
      "Moderated and unmoderated remote testing supported.",
    ],
    metric: { value: "25%", label: "Faster redesigns" },
  },
  {
    Icon: Building,
    name: "Enterprise UI/UX Design",
    tagline: "Complex dashboards and workflows.",
    desc: "Enterprise UI/UX for complex dashboards, large-scale software ecosystems, and distributed teams — boosting productivity and adoption with WCAG-compliant accessibility.",
    bullets: [
      "Design complex enterprise dashboards and workflows.",
      "Simplify navigation for large-scale software ecosystems.",
      "Boost productivity and adoption across distributed teams.",
      "Ensure compliance with WCAG and accessibility standards.",
      "Design tokens and component libraries for engineering teams.",
    ],
    metric: { value: "3×", label: "Adoption rate" },
  },
  {
    Icon: Compass,
    name: "UI/UX Consulting Services",
    tagline: "Expert audits and design strategy.",
    desc: "UX audits identifying conversion and retention gaps, strategic UI/UX consulting for digital transformation, and scalable design systems supporting long-term product growth.",
    bullets: [
      "Expert UX audits identifying conversion and retention gaps.",
      "Strategic UI/UX consulting for digital transformation projects.",
      "Benchmark designs against industry usability data.",
      "Develop scalable design systems supporting long-term growth.",
      "Quarterly design reviews tied to business KPIs.",
    ],
    metric: { value: "10+", label: "Years of expertise" },
  },
];

const process = [
  { no: "01", title: "Research & Discovery", duration: "1–2 weeks", desc: "User interviews, competitive analysis, and behavioral research. We design from evidence — not from opinions about what users 'probably' want." },
  { no: "02", title: "Strategy & IA", duration: "1 week", desc: "Information architecture, user flows, and design principles. Foundations that survive design pivots and stakeholder feedback cycles." },
  { no: "03", title: "Design & Prototype", duration: "3–8 weeks", desc: "High-fidelity design with interactive prototypes, design system foundations, and usability testing at every milestone." },
  { no: "04", title: "Testing & Validation", duration: "1–2 weeks", desc: "Moderated user testing, A/B validation, and accessibility audits. Real users, real data — not designer assumptions." },
  { no: "05", title: "Handover & Iteration", duration: "Ongoing", desc: "Developer-ready specs, design system documentation, and continuous iteration tied to product metrics." },
];

const innovatingTech = [
  {
    Icon: Sparkles,
    title: "AI-Powered UX Optimization",
    desc: "Tackxel applies AI-driven analytics to evaluate usability patterns, identify improvement areas, and optimize product design performance with measurable business results and user satisfaction.",
  },
  {
    Icon: Brain,
    title: "Cognitive Design Approach",
    desc: "Our process combines neuroscience insights, UX heuristics, and testing to design user experiences that simplify interactions and improve digital product engagement across devices.",
  },
  {
    Icon: Boxes,
    title: "Adaptive Product Design",
    desc: "We create modular, scalable design systems customized for enterprise growth — ensuring consistency, adaptability, and effortless integration across platforms and next-generation technologies.",
  },
];

const challenges = [
  { title: "Low User Engagement", solution: "Behavioral research with heatmaps, session recordings, and engagement analytics. We redesign based on what users actually do — not what they say they do." },
  { title: "Poor Conversion Rates", solution: "Conversion rate optimization with A/B testing, funnel analysis, and friction reduction. Conversion lifts measured in real revenue, not vanity metrics." },
  { title: "Inconsistent Brand Experience", solution: "Comprehensive design systems with tokens, components, and usage guidelines. Brand consistency baked into the design infrastructure, not patched per page." },
  { title: "High Drop-Off Rates", solution: "Funnel analysis with friction mapping and progressive disclosure patterns. Drop-off causes identified, fixed, and verified through controlled testing." },
  { title: "Poor Mobile Responsiveness", solution: "Mobile-first design with responsive breakpoints, touch-optimized interactions, and real-device testing across iOS, Android, and PWA contexts." },
  { title: "Lack of User Insights", solution: "Continuous user research with interviews, diary studies, analytics, and usability testing. Insight pipelines, not one-off research reports gathering dust." },
  { title: "Confusing Information Architecture", solution: "Card sorting, tree testing, and IA validation with real users. Navigation that matches user mental models — not internal org charts." },
  { title: "Low Product Adoption", solution: "Onboarding flow design, progressive feature disclosure, and contextual education. Users learn the product by using it — not by reading manuals." },
  { title: "Accessibility Issues", solution: "WCAG 2.1 AA compliance, screen reader testing, and inclusive design practices. Accessibility built in from the start — not retrofitted under pressure." },
  { title: "Unclear Visual Hierarchy", solution: "Visual hierarchy systems with typography scales, color systems, and spacing rules. Users find what they need in seconds, not after hunting through the page." },
];

const industries = [
  { Icon: Heart, name: "Healthcare", desc: "HIPAA-compliant UI/UX for hospitals, payers, and digital health platforms — designing patient portals, clinician dashboards, and telehealth experiences.", examples: ["Patient portals", "Clinician dashboards", "Telehealth UX", "Medical workflows"] },
  { Icon: Building2, name: "Finance & Fintech", desc: "Trust-driven UI/UX for banks, fintechs, and payment platforms — designing high-stakes financial interfaces with clarity, security cues, and conversion optimization.", examples: ["Banking apps", "Trading platforms", "Payment flows", "Wealth management"] },
  { Icon: ShoppingBag, name: "eCommerce & Retail", desc: "Conversion-optimized UI/UX for eCommerce platforms — designing checkout flows, product discovery, and loyalty experiences with Baymard-grade standards.", examples: ["Checkout optimization", "Product discovery", "Loyalty programs", "Omnichannel UX"] },
  { Icon: GraduationCap, name: "Education & eLearning", desc: "Engagement-focused UI/UX for LMS platforms, online courses, and EdTech apps — designing for learners, instructors, and administrators across every device.", examples: ["LMS design", "Course interfaces", "Student portals", "Assessment UX"] },
  { Icon: Home, name: "Real Estate & PropTech", desc: "UI/UX for real estate platforms — designing property search, virtual tours, transaction flows, and agent dashboards that drive engagement and conversions.", examples: ["Property search", "Virtual tours", "Agent dashboards", "Transaction UX"] },
  { Icon: Truck, name: "Logistics & Supply Chain", desc: "Operational UI/UX for logistics platforms — designing fleet dashboards, tracking interfaces, and warehouse management tools for real-time decision-making.", examples: ["Fleet dashboards", "Tracking interfaces", "Warehouse tools", "Driver apps"] },
];

const advantages = [
  { no: "01", title: "Proven Design Expertise",        desc: "Over a decade of delivering intuitive, high-performing UI/UX solutions trusted by global enterprises and startups alike." },
  { no: "02", title: "Cross-Industry Experience",      desc: "Our design team has successfully crafted solutions for healthcare, fintech, eCommerce, and enterprise platforms across 25+ countries." },
  { no: "03", title: "Dedicated Research & Testing",   desc: "Continuous user research, A/B testing, and accessibility reviews guarantee interfaces that perform flawlessly across all touchpoints." },
  { no: "04", title: "Data-Driven Design Approach",    desc: "We apply behavioral analytics and usability testing to ensure every interaction is purposeful, efficient, and conversion-oriented." },
  { no: "05", title: "Scalable Design Systems",        desc: "We build adaptable design systems that maintain consistency, speed up development, and support future product growth." },
  { no: "06", title: "End-to-End Collaboration",       desc: "From concept to deployment, we work as your design partner — aligning every decision with your business goals." },
];

const techStackTabs = [
  { category: "Design & Prototyping", techs: ["Figma", "Adobe XD", "Sketch", "InVision Studio", "Axure RP", "Balsamiq", "Framer", "Principle"] },
  { category: "User Research",        techs: ["Maze", "UserTesting", "Lookback", "Hotjar", "FullStory", "Optimal Workshop", "Dovetail"] },
  { category: "Design Systems",       techs: ["Figma Variables", "Storybook", "Zeroheight", "Specify", "Supernova", "Design Tokens"] },
  { category: "Collaboration",        techs: ["Figma", "Miro", "FigJam", "Notion", "Jira", "Linear", "Loom", "Slack"] },
  { category: "Analytics & Testing",  techs: ["Google Analytics 4", "Mixpanel", "Amplitude", "Hotjar", "FullStory", "Crazy Egg", "Optimizely"] },
  { category: "Handoff & Dev",        techs: ["Figma Dev Mode", "Zeplin", "Avocode", "Anima", "Locofy", "Builder.io"] },
];

const faqs = [
  { q: "How long does a typical UI/UX design engagement take?", a: "Most design engagements run 6–14 weeks from research to handoff. Smaller projects (single product redesign) can complete in 4–6 weeks. Enterprise design system engagements typically run 3–6 months. We work in two-week sprints with continuous user testing." },
  { q: "What does UI/UX design typically cost?", a: "Project-based UI/UX engagements typically range from USD 30K to USD 150K depending on scope, platform count, and research depth. Dedicated designers start at USD 9K per month per designer. Enterprise design system engagements range from USD 100K to USD 400K." },
  { q: "Do you build the product after design, or just hand off?", a: "Both options are available. We can hand off developer-ready Figma specs and design systems for your engineering team, or we can build the product end-to-end with our development team. Many clients prefer the latter for tighter design-engineering integration." },
  { q: "How do you measure design success?", a: "Design success is measured against product KPIs — task completion rate, time-on-page, conversion rate, NPS, accessibility scores, and adoption. We agree on success metrics during discovery and report on them quarterly with optimization recommendations." },
  { q: "Can you work with our existing design system?", a: "Absolutely. We integrate with existing Figma libraries, design tokens, and component systems. We can also audit existing systems, identify gaps, and propose evolutions aligned with your product roadmap." },
  { q: "Do you support WCAG accessibility compliance?", a: "Yes — accessibility is built into our design process. We design to WCAG 2.1 AA standards by default, with screen reader testing, keyboard navigation validation, and color contrast verification. AAA-level engagements available for regulated industries." },
];

const awards = [
  { platform: "Clutch",        title: "Top UI/UX Design Co.",       year: "2025" },
  { platform: "GoodFirms",     title: "Top Design Agency",          year: "2024" },
  { platform: "TopDevelopers", title: "Top UI/UX Designers",        year: "2024" },
  { platform: "Awwwards",      title: "Site of the Day",            year: "2024" },
  { platform: "Expertise",     title: "Best Design Agency",         year: "2024" },
  { platform: "Industry",      title: "Design Excellence",          year: "2024" },
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

export default function UIUXDesignPage() {
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
          <Reveal><nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-mono"><Link href="/" className="hover:text-brand-300 transition-colors">Home</Link><span>/</span><Link href="/services" className="hover:text-brand-300 transition-colors">Services</Link><span>/</span><span className="text-brand-300">UI/UX Design</span></nav></Reveal>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><span className="badge-dark mb-6"><span className="dot-pulse" />Research-driven product design</span></Reveal>
              <Reveal delay={80}><div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">Design · Build · Launch · Scale</div></Reveal>
              <Reveal delay={140}><h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">UI/UX Design Services Company.</h1></Reveal>
              <Reveal delay={220}><p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">Tackxel helps brands design digital products that attract, engage, and retain users — improving satisfaction by 42% and conversion rates by up to 38% through research-driven UX practices.</p></Reveal>
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
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Award className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">#1 Top UI/UX</div><div className="text-xs text-neutral-400">Design Company by Clutch (2025)</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Clock className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">U.S. Time Zone</div><div className="text-xs text-neutral-400">Senior designers · 9am–5pm EST</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><MousePointer2 className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">Certified</div><div className="text-xs text-neutral-400">UI/UX Designers · NN/g · ISTQB</div></div></div>
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
                <div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center mb-4"><Brain className="w-5 h-5 text-brand-300" /></div>
                <h3 className="font-display text-h3 text-white mb-2">Human-Centered Product Design</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">Build designs that users love. Our UX research, persona mapping, and usability testing align every interface with real user behavior — boosting engagement by up to 47%.</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white rounded-lg p-7 h-full card-lift overflow-hidden relative">
                <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-md bg-white/15 border border-white/25 flex items-center justify-center mb-4"><Layers className="w-5 h-5 text-white" /></div>
                  <h3 className="font-display text-h3 text-white mb-2">Cross-Platform Design Excellence</h3>
                  <p className="text-sm text-brand-50 leading-relaxed">We build consistent UI/UX systems for web, SaaS, and mobile — ensuring accessible, responsive designs that outperform competitors across every device.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-white border border-neutral-200 rounded-lg p-7 h-full">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-600 font-semibold mb-2">Your Trusted</div>
                <h3 className="font-display text-h3 text-neutral-950 mb-5">UI/UX Design <span className="text-brand-600">Partner</span></h3>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={10} suffix="+" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Years of Designing</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950">Top <Counter to={1} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Design Talent</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={95} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Client Retention Score</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={30} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Senior UI/UX Designers</div></div>
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
          <Reveal><div className="text-center mb-14"><div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Our UI/UX Design Services</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">Turn Ideas Into <span className="text-brand-600">User-Loved Experiences</span></h2><p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">Click any service below to explore the design depth, capabilities, and measurable outcomes we deliver.</p></div></Reveal>
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
                  <Link href="/contact" className="btn-brand mt-8">Discuss your design project<ArrowRight className="w-4 h-4" /></Link>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-xl p-6 flex items-center justify-center aspect-square"><activeServiceData.Icon className="w-32 h-32 lg:w-40 lg:h-40 text-brand-500" strokeWidth={1.2} /></div>
                  <div className="bg-neutral-950 text-white rounded-xl p-6"><div className="text-xs font-mono text-brand-300 uppercase tracking-wider mb-2 font-semibold">Measurable Outcome</div><div className="font-display text-4xl font-bold text-white mb-1 tracking-display">{activeServiceData.metric.value}</div><div className="text-sm text-neutral-400">{activeServiceData.metric.label}</div></div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}><div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">{services.map((s, i) => (<button key={s.name} onClick={() => setActiveService(i)} className={`p-6 text-left transition-colors ${activeService === i ? "bg-brand-50" : "bg-white hover:bg-neutral-50"}`}><div className="flex items-start gap-4"><div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0"><s.Icon className="w-5 h-5 text-brand-600" /></div><div><h3 className="text-sm font-semibold text-neutral-950 mb-1">{s.name}</h3><p className="text-xs text-neutral-600 leading-relaxed">{s.tagline}</p></div></div></button>))}</div></Reveal>
          <Reveal delay={300}><div className="mt-10 flex justify-center"><Link href="/contact" className="btn-brand">Want A Product Your Users Truly Love?<ArrowRight className="w-4 h-4" /></Link></div></Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Design Process</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">How we deliver design, <span className="text-brand-600">every engagement</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-xl">A repeatable, research-driven design process refined across 200+ product launches. Real users tested every milestone — not designer assumptions.</p></div></Reveal>
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200" />
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-4 relative">{process.map((step, i) => (<Reveal key={step.no} delay={i * 100}><div className="relative"><div className="w-14 h-14 rounded-full bg-white border-2 border-brand-200 flex items-center justify-center mb-5 mx-auto lg:mx-0 relative z-10"><span className="font-mono text-sm font-bold text-brand-700">{step.no}</span></div><div className="bg-white border border-neutral-200 rounded-lg p-5 h-full card-lift"><div className="text-[10px] font-mono text-brand-600 uppercase tracking-wider font-semibold mb-1">{step.duration}</div><h3 className="text-sm font-semibold text-neutral-950 mb-2">{step.title}</h3><p className="text-xs text-neutral-600 leading-relaxed">{step.desc}</p></div></div></Reveal>))}</div>
          </div>
        </div>
      </section>

      {/* INNOVATING TECH */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/30 via-neutral-950 to-neutral-950" />
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none"><div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4">Innovating UI/UX <span className="text-brand-300">Through Data, Design, and Emerging Tech</span></h2><p className="text-base text-neutral-300 leading-relaxed mb-8 max-w-lg">Our UI/UX design services integrate data science, behavior modeling, and usability research to deliver measurable product performance.</p></Reveal>
              <div className="space-y-4">{innovatingTech.map((t, i) => (<Reveal key={t.title} delay={i * 100}><div className="bg-neutral-900/70 backdrop-blur border border-neutral-800 rounded-lg p-6 card-lift"><div className="flex items-start gap-4"><div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center flex-shrink-0"><t.Icon className="w-6 h-6 text-brand-300" /></div><div><h3 className="text-base font-semibold text-white mb-1.5">{t.title}</h3><p className="text-sm text-neutral-400 leading-relaxed">{t.desc}</p></div></div></div></Reveal>))}</div>
              <Reveal delay={400}><Link href="/contact" className="btn-brand mt-8">Build Experiences That Connect, Engage, And Convert<ArrowRight className="w-4 h-4" /></Link></Reveal>
            </div>
            <Reveal delay={300} direction="left">
              <div className="relative bg-neutral-900/40 backdrop-blur border border-neutral-800 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <svg viewBox="0 0 320 320" className="w-full h-full">
                  <defs><radialGradient id="coreGlowUIUX" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#5278C2" stopOpacity="0.5" /><stop offset="100%" stopColor="#3159A5" stopOpacity="0" /></radialGradient></defs>
                  <circle cx="160" cy="160" r="60" fill="url(#coreGlowUIUX)" />
                  <circle cx="160" cy="160" r="130" fill="none" stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 4" />
                  <circle cx="160" cy="160" r="100" fill="none" stroke="#3159A5" strokeOpacity="0.25" strokeWidth="1.2" />
                  <circle cx="160" cy="160" r="70" fill="none" stroke="#3159A5" strokeOpacity="0.35" strokeWidth="1.2" />
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => { const rad = (deg * Math.PI) / 180; const x = 160 + Math.cos(rad) * 130; const y = 160 + Math.sin(rad) * 130; return (<g key={i}><line x1="160" y1="160" x2={x} y2={y} stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1" /><circle cx={x} cy={y} r="6" fill="#5278C2" /><circle cx={x} cy={y} r="10" fill="none" stroke="#5278C2" strokeOpacity="0.3" /></g>); })}
                  <circle cx="160" cy="160" r="32" fill="#3159A5" />
                  <text x="160" y="167" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="Geist">UX</text>
                  {[{ label: "RESEARCH", x: 290, y: 160 }, { label: "PROTO", x: 225, y: 47 }, { label: "TEST", x: 95, y: 47 }, { label: "DESIGN", x: 30, y: 160 }, { label: "MOBILE", x: 80, y: 273 }, { label: "WEB", x: 240, y: 273 }].map((t) => (<g key={t.label}><rect x={t.x - 36} y={t.y - 11} width="72" height="22" rx="4" fill="#1D376A" stroke="#3159A5" strokeOpacity="0.4" /><text x={t.x} y={t.y + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill="#7E9DD7" fontFamily="Geist">{t.label}</text></g>))}
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-end mb-12"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Common Challenges</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-3">Top User Interface/User Experience Design Challenges We Solve For You</h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Click any challenge to reveal exactly how we solve it.</p></div></Reveal>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-12">
            <Reveal>
              <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100">
                {challenges.map((c, i) => { const open = openChallenge === i; return (<button key={c.title} onClick={() => setOpenChallenge(open ? null : i)} className="w-full text-left hover:bg-neutral-50 transition-colors block"><div className="flex items-center justify-between gap-6 px-6 py-4"><div className="flex items-start gap-4 flex-1"><span className="font-mono text-xs font-semibold text-brand-600 pt-1 w-6">{String(i + 1).padStart(2, "0")}</span><span className="text-sm font-semibold text-neutral-900 leading-snug">{c.title}</span></div><span className={`w-7 h-7 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}>{open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}</span></div>{open && (<div className="px-6 pb-5 pl-16"><div className="border-l-2 border-brand-300 pl-4"><div className="text-[10px] font-mono uppercase tracking-wider text-brand-600 font-semibold mb-1.5">How we solve it</div><p className="text-sm text-neutral-700 leading-relaxed">{c.solution}</p></div></div>)}</button>); })}
              </div>
            </Reveal>
            <Reveal delay={200} direction="left">
              <div className="lg:sticky lg:top-28 lg:self-start space-y-4">
                <div className="bg-neutral-950 text-white rounded-lg p-7"><div className="text-xs text-brand-300 uppercase tracking-wider font-semibold mb-3">The Pattern</div><p className="text-base text-neutral-200 leading-relaxed">Complex interfaces reduce interaction — causing users to abandon products early.</p></div>
                <div className="bg-white border border-neutral-200 rounded-lg p-7">
                  <div className="text-xs text-brand-600 uppercase tracking-wider font-semibold mb-3">Our Approach</div>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">We simplify navigation and visual hierarchy through user research and behavioral mapping.</p>
                  <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><Zap className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">38%</div><div className="text-xs text-neutral-500 mt-0.5">Higher Time-On-Page</div></div>
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><TrendingUp className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">29%</div><div className="text-xs text-neutral-500 mt-0.5">Increase In Active Sessions</div></div>
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
                <div><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-3">Struggling With Low Engagement Or Poor Usability?</h2><p className="text-base text-brand-50 leading-relaxed max-w-xl">We help fix design issues that hurt conversions and user retention. Discover how optimized experiences can drive measurable business growth.</p></div>
                <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2 w-fit lg:justify-self-end">Get Your Design Audit Now<ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Industries We Serve</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">Designing Intuitive Digital <span className="text-brand-600">Experiences Across Industries</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Tackxel provides specialized UI/UX design services for diverse industries — aligning usability and compliance standards to build trusted, high-performing digital products that drive engagement.</p></div></Reveal>
          <Reveal delay={150}>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-10">
              <ul className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100 h-fit">
                {industries.map((ind, i) => (<li key={ind.name}><button onClick={() => setActiveIndustry(i)} className={`w-full text-left flex items-center justify-between gap-4 px-6 py-4 transition-colors ${activeIndustry === i ? "bg-brand-50" : "hover:bg-neutral-50"}`}><div className="flex items-center gap-4"><div className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${activeIndustry === i ? "bg-brand-500 border-brand-500" : "bg-brand-50 border-brand-100"}`}><ind.Icon className={`w-4 h-4 ${activeIndustry === i ? "text-white" : "text-brand-600"}`} /></div><span className={`text-base font-semibold ${activeIndustry === i ? "text-brand-700" : "text-neutral-900"}`}>{ind.name}</span></div><ArrowRight className={`w-4 h-4 transition-all ${activeIndustry === i ? "text-brand-600 translate-x-1" : "text-neutral-300"}`} /></button></li>))}
              </ul>
              <div className="bg-white border border-neutral-200 rounded-lg p-8 lg:p-10 self-start">
                <div className="flex items-start gap-5 mb-6"><div className="w-16 h-16 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center flex-shrink-0"><activeIndustryData.Icon className="w-7 h-7 text-brand-600" /></div><div><div className="text-eyebrow text-brand-600 uppercase mb-2 font-semibold tracking-widest">Industry Focus</div><h3 className="font-display text-h2 text-neutral-950 leading-tight">{activeIndustryData.name}</h3></div></div>
                <p className="text-base text-neutral-700 leading-relaxed mb-6">{activeIndustryData.desc}</p>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden mb-6">{activeIndustryData.examples.map((ex) => (<div key={ex} className="bg-white p-4 flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" /><span className="text-sm text-neutral-800 font-medium">{ex}</span></div>))}</div>
                <Link href="/contact" className="btn-brand">Let&apos;s Design UI/UX for Your Industry<ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ADVANTAGE */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-700/30 via-neutral-950 to-neutral-950" />
        <Parallax speed={0.15} className="absolute bottom-0 right-0 hidden lg:block pointer-events-none"><div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tackxel Advantage</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">Why Do Businesses Choose Tackxel <span className="text-brand-300">For UI/UX Design Services?</span></h2></div><p className="text-base text-neutral-300 leading-relaxed lg:justify-self-end max-w-xl">We combine user psychology, design innovation, and engineering expertise to craft digital experiences that deliver measurable business outcomes and user satisfaction.</p></div></Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800 rounded-lg overflow-hidden">
            {advantages.map((a, i) => (<Reveal key={a.no} delay={i * 80}><div className="bg-neutral-950 p-7 hover:bg-neutral-900/60 transition-colors h-full card-lift"><div className="flex items-start gap-4 mb-3"><div className="w-10 h-10 rounded-md bg-brand-500/15 border border-brand-500/25 flex items-center justify-center flex-shrink-0"><span className="font-mono text-xs font-bold text-brand-300">{a.no}</span></div><h3 className="text-base font-semibold text-white pt-2 leading-snug">{a.title}</h3></div><p className="text-sm text-neutral-400 leading-relaxed pl-14">{a.desc}</p></div></Reveal>))}
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
          <Reveal><div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tech Stack</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">UI/UX Design Tools &amp; Technologies</h2></div><p className="text-base text-neutral-400 leading-relaxed max-w-xl lg:justify-self-end">We use industry-leading UI/UX design tools, testing frameworks, and prototyping technologies to deliver high-performance digital experiences across mobile, web, and enterprise platforms.</p></div></Reveal>
          <Reveal delay={100}>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
              <div className="flex flex-wrap gap-px bg-neutral-800 border-b border-neutral-800">{techStackTabs.map((t, i) => (<button key={t.category} onClick={() => setActiveStack(i)} className={`flex-1 min-w-[120px] px-4 lg:px-6 py-4 text-sm font-medium transition-all ${activeStack === i ? "bg-brand-600 text-white border-b-2 border-b-brand-300" : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800/60 hover:text-white"}`}><div className="text-xs font-mono mb-1 opacity-70">{String(i + 1).padStart(2, "0")}</div>{t.category}</button>))}</div>
              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
                  <div><div className="text-eyebrow text-brand-300 uppercase mb-3 font-semibold tracking-widest">{String(activeStack + 1).padStart(2, "0")} · Tech Category</div><h3 className="font-display text-h2 text-white mb-3">{activeStackData.category}</h3><p className="text-sm text-neutral-400 leading-relaxed">{activeStackData.techs.length} industry-leading tools for UI/UX design.</p></div>
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
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">Ready to design a product users love?</h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">Free 30-minute design audit with a senior UI/UX designer. No slide decks, no sales reps.</p>
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
