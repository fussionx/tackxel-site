"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, Calendar, Award, Clock, ShieldCheck,
  TrendingUp, Zap, Plus, Minus,
  ClipboardCheck, Cog, Gauge, ShieldAlert, Smartphone, RefreshCcw,
  Heart, Building2, ShoppingBag, Plane, Truck, GraduationCap,
  Sparkles, BarChart3, Bot,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";

const services = [
  {
    Icon: ClipboardCheck,
    name: "Functional Testing",
    tagline: "Validate every feature against requirements.",
    desc: "Validates every feature against requirements and user expectations — identifying bugs and errors before they reach production, ensuring consistent performance across multiple environments.",
    bullets: [
      "Validates every feature against requirements and user expectations.",
      "Identifies bugs and errors before they reach production.",
      "Ensures consistent performance across multiple environments.",
      "Increases test coverage by 60% through automated frameworks.",
      "Manual exploratory testing combined with automated regression suites.",
    ],
    metric: { value: "60%", label: "Test coverage increase" },
  },
  {
    Icon: Cog,
    name: "Automation Testing",
    tagline: "Intelligent test automation at enterprise scale.",
    desc: "Reduces regression cycles by 70% with intelligent test automation — using Selenium, Appium, and Cypress for scalability, enabling faster feedback and continuous integration.",
    bullets: [
      "Reduces regression cycles by 70% with intelligent test automation.",
      "Uses tools like Selenium, Appium, and Cypress for scalability.",
      "Enables faster feedback and continuous integration.",
      "Improves product stability with minimal manual effort.",
      "Self-healing locators and AI-assisted test maintenance built in.",
    ],
    metric: { value: "70%", label: "Regression cycle reduction" },
  },
  {
    Icon: Gauge,
    name: "Performance Testing",
    tagline: "Speed, scalability, and reliability under load.",
    desc: "Measures speed, scalability, and reliability under peak load — identifying performance bottlenecks before launch, simulating real-world user traffic for accuracy, and improving app performance by up to 35%.",
    bullets: [
      "Measures speed, scalability, and reliability under peak load.",
      "Identifies performance bottlenecks before launch.",
      "Simulates real-world user traffic for accuracy.",
      "Improves app performance by up to 35%.",
      "Load, stress, spike, and soak testing across realistic scenarios.",
    ],
    metric: { value: "35%", label: "Performance improvement" },
  },
  {
    Icon: ShieldAlert,
    name: "Security Testing",
    tagline: "OWASP and ISO 27001 compliance testing.",
    desc: "Proactive vulnerability detection with OWASP and ISO 27001 compliance testing — penetration testing, data privacy protection, and risk-based security analysis that strengthens user trust.",
    bullets: [
      "Detects vulnerabilities and security loopholes proactively.",
      "Performs penetration and compliance testing (OWASP, ISO 27001).",
      "Protects data integrity and user privacy.",
      "Strengthens trust through risk-based security analysis.",
      "PCI DSS, HIPAA, GDPR, SOC 2 audit-ready validation included.",
    ],
    metric: { value: "100%", label: "Audit-ready compliance" },
  },
  {
    Icon: Smartphone,
    name: "Mobile App Testing",
    tagline: "iOS, Android, and hybrid platform coverage.",
    desc: "Comprehensive mobile testing across iOS, Android, and hybrid platforms — testing usability, security, and cross-device functionality while improving app ratings through performance optimization.",
    bullets: [
      "Ensures app stability across iOS, Android, and hybrid platforms.",
      "Tests usability, security, and cross-device functionality.",
      "Improves app ratings through performance optimization.",
      "Detects defects before deployment to app stores.",
      "Real-device testing across 200+ device-OS combinations.",
    ],
    metric: { value: "200+", label: "Device combinations" },
  },
  {
    Icon: RefreshCcw,
    name: "Regression & Continuous Testing",
    tagline: "Real-time validation across agile sprints.",
    desc: "Continuous testing integrated with CI/CD pipelines — detecting new bugs after feature updates, maintaining product stability across agile sprints, and reducing release delays by 50% through automation.",
    bullets: [
      "Detects new bugs after feature updates.",
      "Maintains product stability across agile sprints.",
      "Integrates with CI/CD pipelines for real-time validation.",
      "Reduces release delays by 50% through automated retesting.",
      "Test result dashboards integrated with Jira, Slack, and PagerDuty.",
    ],
    metric: { value: "50%", label: "Faster release cycles" },
  },
];

const process = [
  { no: "01", title: "Discovery & QA Strategy", duration: "1 week", desc: "Product walkthrough, risk-based test prioritization, and QA strategy design tied to your release cadence. We test what matters — not what's easiest to automate." },
  { no: "02", title: "Test Plan & Tooling", duration: "1 week", desc: "Test framework selection, environment provisioning, test data strategy, and CI/CD integration plan. Foundations done right means stable, reliable test runs." },
  { no: "03", title: "Test Design & Execution", duration: "2–8 weeks", desc: "Two-week sprints with continuous test execution, defect triage, and quality reporting. Real defects caught early — not after release." },
  { no: "04", title: "Continuous Validation", duration: "Ongoing", desc: "CI/CD-integrated test runs, automated regression on every commit, and quality dashboards visible to engineering, product, and leadership." },
  { no: "05", title: "Optimize & Evolve", duration: "Ongoing", desc: "Continuous test optimization, flaky test elimination, and coverage expansion — quarterly reviews tied to release velocity and defect escape rate." },
];

const intelligentQA = [
  {
    Icon: Sparkles,
    title: "Intelligent Automation",
    desc: "Automated QA pipelines integrate seamlessly into your CI/CD workflow — accelerating delivery without compromising quality across releases.",
  },
  {
    Icon: BarChart3,
    title: "Predictive Quality Analytics",
    desc: "Data-driven insights help forecast potential performance issues — reducing production incidents and improving reliability across every deployment.",
  },
  {
    Icon: Bot,
    title: "AI-Powered Testing Lifecycle",
    desc: "Automation and intelligent algorithms streamline testing cycles — reducing regression effort by 50% for enterprise-grade solutions.",
  },
];

const challenges = [
  { title: "Inconsistent Test Coverage", solution: "Risk-based test prioritization with automated coverage tracking. Every release ships with 95%+ coverage across functional, regression, and edge cases." },
  { title: "Delayed Release Cycles", solution: "Parallel test execution, CI/CD integration, and shift-left testing. Release cycles compressed from weeks to days without sacrificing quality." },
  { title: "Flaky or Unstable Test Environments", solution: "Containerized test environments with reproducible state and isolated test data. Flaky tests get fixed or quarantined — not ignored." },
  { title: "Inefficient Manual Regression Testing", solution: "Intelligent test automation with Selenium, Cypress, and Playwright. 70%+ regression coverage automated, freeing testers for exploratory and edge-case work." },
  { title: "Lack of Test Data Management", solution: "Synthetic test data generation, PII redaction, and environment-specific data sets. Repeatable tests with realistic data — no production data leaks." },
  { title: "Poor Defect Tracking and Reporting", solution: "Integrated defect management with Jira, automated triage, and severity classification. Defects flow from detection to resolution with full traceability." },
  { title: "Integration Issues Across Tools", solution: "Unified test orchestration across Selenium, Appium, Cypress, and Playwright. Consistent reporting and result aggregation regardless of underlying tools." },
  { title: "Limited Mobile and Cross-Platform Testing", solution: "Real-device cloud testing across 200+ device-OS combinations. iOS, Android, hybrid, and PWA covered with consistent quality bars." },
  { title: "Inadequate Performance and Load Testing", solution: "Load, stress, spike, and soak testing simulating real-world traffic. Bottlenecks identified before launch, not after the support tickets pile up." },
  { title: "Security and Compliance Gaps in QA", solution: "Penetration testing, OWASP compliance, and PCI/HIPAA/GDPR/SOC 2 validation built into the QA pipeline. Compliance verified — not assumed." },
];

const industries = [
  { Icon: Heart, name: "Healthcare & Biotech", desc: "HIPAA-compliant QA for medical devices, EHR systems, telehealth platforms, and clinical trial software — with full audit trails for FDA and regulatory review.", examples: ["Medical devices", "EHR systems", "Telehealth platforms", "Clinical trials"] },
  { Icon: Building2, name: "Fintech & Banking", desc: "PCI-compliant QA for payment platforms, banking apps, fraud systems, and trading platforms — with security testing and compliance validation built into every release.", examples: ["Payment platforms", "Banking apps", "Fraud systems", "Trading platforms"] },
  { Icon: ShoppingBag, name: "eCommerce & Retail", desc: "Performance and security QA for eCommerce platforms, POS systems, and omnichannel retail — handling Black Friday-scale traffic and PCI compliance.", examples: ["eCommerce platforms", "POS systems", "Loyalty programs", "Inventory systems"] },
  { Icon: Plane, name: "Travel & Hospitality", desc: "QA for booking platforms, hotel management systems, airline apps, and customer portals — testing high-traffic transaction flows and complex payment integrations.", examples: ["Booking platforms", "Hotel systems", "Airline apps", "Customer portals"] },
  { Icon: Truck, name: "Logistics & Transportation", desc: "QA for fleet management, route optimization, warehouse systems, and tracking platforms — testing real-time data flows and IoT integration reliability.", examples: ["Fleet management", "Route optimization", "Warehouse systems", "Tracking platforms"] },
  { Icon: GraduationCap, name: "Education & eLearning", desc: "QA for LMS platforms, online assessment systems, student portals, and EdTech apps — testing scale during enrollment peaks and accessibility compliance.", examples: ["LMS platforms", "Assessment systems", "Student portals", "Accessibility compliance"] },
];

const advantages = [
  { no: "01", title: "Certified QA Engineers",               desc: "Our ISTQB-certified testers ensure global compliance and precision across automation, security, and performance testing standards." },
  { no: "02", title: "Automation-First Testing Approach",    desc: "We use AI-driven and continuous testing pipelines that reduce manual effort and speed up release cycles without sacrificing quality." },
  { no: "03", title: "End-to-End Test Coverage",             desc: "We ensure every layer — from code to UI — undergoes complete validation for functionality, security, and scalability." },
  { no: "04", title: "Data-Driven Quality Insights",         desc: "We detect hidden flaws early thanks to advanced analytics — increasing the accuracy of defect detection by more than 45%." },
  { no: "05", title: "Continuous Integration & Delivery Support", desc: "Our QA teams integrate effortlessly with CI/CD workflows to ensure flawless builds and stable deployments at any release cadence." },
  { no: "06", title: "Proven Track Record of Excellence",    desc: "Trusted by Fortune 500 companies for reliable QA processes — delivering 99.9% defect-free enterprise-grade solutions." },
];

const techStackTabs = [
  { category: "Automation Testing Tools", techs: ["Selenium", "Cypress", "Playwright", "TestComplete", "Katalon Studio", "Tosca", "Ranorex", "Appium"] },
  { category: "Performance & Load",       techs: ["JMeter", "LoadRunner", "Gatling", "k6", "BlazeMeter", "NeoLoad", "Locust", "Artillery"] },
  { category: "API Testing Tools",        techs: ["Postman", "REST Assured", "SoapUI", "Karate", "Insomnia", "Newman", "Apigee", "Hoppscotch"] },
  { category: "Security Testing",         techs: ["OWASP ZAP", "Burp Suite", "Nessus", "SonarQube", "Veracode", "Checkmarx", "Snyk", "Acunetix"] },
  { category: "Mobile Testing",           techs: ["Appium", "Espresso", "XCUITest", "BrowserStack", "Sauce Labs", "Firebase Test Lab", "Perfecto"] },
  { category: "CI/CD & Collaboration",    techs: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "Bitbucket Pipelines", "Jira", "TestRail", "Slack"] },
];

const faqs = [
  { q: "How quickly can you start a QA testing engagement?", a: "Most engagements begin within one week. We run a product walkthrough, agree on scope and team composition, sign the MSA and SOW, and onboard your dedicated QA engineers into your environments. Smaller engagements can compress to 3–4 days." },
  { q: "What does QA outsourcing typically cost?", a: "Dedicated QA engineers range from USD 8K to USD 18K per month per engineer depending on seniority and specialization (automation, security, performance). Project-based testing engagements start at USD 25K for focused scope. Annual contracts typically include 10–15% discounts." },
  { q: "Do you provide automation testing or only manual?", a: "Both — and we recommend a balanced mix. Pure manual testing is rarely cost-effective at modern release cadences; pure automation misses exploratory and usability issues. We typically aim for 70%+ automation coverage with strategic manual testing for the rest." },
  { q: "Can you integrate with our existing CI/CD pipeline?", a: "Yes — we integrate with Jenkins, GitHub Actions, GitLab CI, CircleCI, Bitbucket Pipelines, and most major CI/CD platforms. Test results flow into Jira, Slack, PagerDuty, and existing quality dashboards." },
  { q: "How do you handle test data and PII?", a: "Synthetic test data generation, environment-specific data sets, and PII redaction for any production-derived data. We're SOC 2 Type II certified and handle test data with the same rigor as production systems — GDPR, HIPAA, PCI compliant." },
  { q: "Can you support regulated industries like healthcare or fintech?", a: "Absolutely. We have deep experience with FDA, HIPAA, PCI DSS, GDPR, SOC 2, ISO 27001, and other regulatory frameworks. We provide audit-ready documentation and evidence packages for regulator review." },
];

const awards = [
  { platform: "Clutch",        title: "Top Rated QA Partner",      year: "2024" },
  { platform: "TopDevelopers", title: "Top Software Developers",   year: "2024" },
  { platform: "Firmstalk",     title: "Top Custom Software Dev",   year: "2024" },
  { platform: "SoftwareWorld", title: "Top Rated Software Dev",    year: "2024" },
  { platform: "Industry",      title: "Top Software Developers",   year: "2024" },
  { platform: "GoodFirms",     title: "Best Software Development", year: "2024" },
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

export default function QATestingPage() {
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
          <Reveal><nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-mono"><Link href="/" className="hover:text-brand-300 transition-colors">Home</Link><span>/</span><Link href="/services" className="hover:text-brand-300 transition-colors">Services</Link><span>/</span><span className="text-brand-300">QA and Testing</span></nav></Reveal>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><span className="badge-dark mb-6"><span className="dot-pulse" />Zero-defect releases at enterprise scale</span></Reveal>
              <Reveal delay={80}><div className="text-eyebrow text-brand-300 uppercase font-semibold tracking-widest mb-4">Test · Validate · Deliver</div></Reveal>
              <Reveal delay={140}><h1 className="font-display text-h1 lg:text-h1-lg text-white tracking-display-tight">Quality Assurance And Software Testing Services.</h1></Reveal>
              <Reveal delay={220}><p className="text-lg text-neutral-300 mt-6 max-w-2xl leading-relaxed">Tackxel helps brands achieve zero-defect releases to meet performance, scalability, and security benchmarks. With our QA automation, you can increase customer satisfaction by 40% while ensuring faster time to market.</p></Reveal>
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
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Award className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">#1 Top-Rated</div><div className="text-xs text-neutral-400">QA Testing Partner by Clutch</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Clock className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">U.S. Time Zone</div><div className="text-xs text-neutral-400">Senior QA engineers · 9am–5pm EST</div></div></div>
                <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg p-5 flex items-center gap-4 card-lift"><div className="w-12 h-12 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><ClipboardCheck className="w-6 h-6 text-brand-300" /></div><div><div className="font-display text-base font-bold text-white">Certified</div><div className="text-xs text-neutral-400">ISTQB QA Engineers · SOC 2 · ISO 27001</div></div></div>
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
                <div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center mb-4"><Cog className="w-5 h-5 text-brand-300" /></div>
                <h3 className="font-display text-h3 text-white mb-2">Automation, Security & Reliability</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">We design test pipelines that integrate seamlessly with your CI/CD workflows — ensuring your software meets enterprise-grade quality standards at every release.</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white rounded-lg p-7 h-full card-lift overflow-hidden relative">
                <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-md bg-white/15 border border-white/25 flex items-center justify-center mb-4"><ClipboardCheck className="w-5 h-5 text-white" /></div>
                  <h3 className="font-display text-h3 text-white mb-2">Multi-Layered Testing Strategy</h3>
                  <p className="text-sm text-brand-50 leading-relaxed">From functional to non-functional testing — we ensure performance, usability, and security are validated before your product reaches users.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-white border border-neutral-200 rounded-lg p-7 h-full">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-600 font-semibold mb-2">Your Trusted</div>
                <h3 className="font-display text-h3 text-neutral-950 mb-5">One-Stop Technology <span className="text-brand-600">Partner</span></h3>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={10} suffix="+" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Years Delivering QA Solutions</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={40} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Faster Test Cycles</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={95} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Client Retention Score</div></div>
                  <div className="bg-white p-3.5"><div className="font-display text-xl font-bold text-neutral-950"><Counter to={30} suffix="%" /></div><div className="text-[10px] text-neutral-500 leading-snug mt-0.5">Senior SQA Engineers</div></div>
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
          <Reveal><div className="text-center mb-14"><div className="text-eyebrow text-brand-600 uppercase mb-3 font-semibold tracking-widest">Our Software Testing And QA Solutions</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 max-w-3xl mx-auto">Ensuring Flawless <span className="text-brand-600">Digital Experiences</span></h2><p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto mt-4">Click any service below to explore the engineering depth, capabilities, and measurable outcomes we deliver.</p></div></Reveal>
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
                  <Link href="/contact" className="btn-brand mt-8">Discuss your QA project<ArrowRight className="w-4 h-4" /></Link>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-xl p-6 flex items-center justify-center aspect-square"><activeServiceData.Icon className="w-32 h-32 lg:w-40 lg:h-40 text-brand-500" strokeWidth={1.2} /></div>
                  <div className="bg-neutral-950 text-white rounded-xl p-6"><div className="text-xs font-mono text-brand-300 uppercase tracking-wider mb-2 font-semibold">Measurable Outcome</div><div className="font-display text-4xl font-bold text-white mb-1 tracking-display">{activeServiceData.metric.value}</div><div className="text-sm text-neutral-400">{activeServiceData.metric.label}</div></div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}><div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">{services.map((s, i) => (<button key={s.name} onClick={() => setActiveService(i)} className={`p-6 text-left transition-colors ${activeService === i ? "bg-brand-50" : "bg-white hover:bg-neutral-50"}`}><div className="flex items-start gap-4"><div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0"><s.Icon className="w-5 h-5 text-brand-600" /></div><div><h3 className="text-sm font-semibold text-neutral-950 mb-1">{s.name}</h3><p className="text-xs text-neutral-600 leading-relaxed">{s.tagline}</p></div></div></button>))}</div></Reveal>
          <Reveal delay={300}><div className="mt-10 flex justify-center"><Link href="/contact" className="btn-brand">Need Expert Testing Support for Your Product?<ArrowRight className="w-4 h-4" /></Link></div></Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Delivery Process</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">How we ship quality, <span className="text-brand-600">every engagement</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-xl">A repeatable, transparent QA delivery process refined across 200+ enterprise releases. Real defects caught early — never after release.</p></div></Reveal>
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200" />
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-4 relative">{process.map((step, i) => (<Reveal key={step.no} delay={i * 100}><div className="relative"><div className="w-14 h-14 rounded-full bg-white border-2 border-brand-200 flex items-center justify-center mb-5 mx-auto lg:mx-0 relative z-10"><span className="font-mono text-sm font-bold text-brand-700">{step.no}</span></div><div className="bg-white border border-neutral-200 rounded-lg p-5 h-full card-lift"><div className="text-[10px] font-mono text-brand-600 uppercase tracking-wider font-semibold mb-1">{step.duration}</div><h3 className="text-sm font-semibold text-neutral-950 mb-2">{step.title}</h3><p className="text-xs text-neutral-600 leading-relaxed">{step.desc}</p></div></div></Reveal>))}</div>
          </div>
        </div>
      </section>

      {/* INTELLIGENT QA */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/30 via-neutral-950 to-neutral-950" />
        <Parallax speed={0.2} className="absolute top-0 right-0 hidden lg:block pointer-events-none"><div className="w-96 h-96 rounded-full bg-brand-500/15 blur-3xl" /></Parallax>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4">Driving Software Excellence <span className="text-brand-300">Through Intelligent QA</span></h2><p className="text-base text-neutral-300 leading-relaxed mb-8 max-w-lg">As a leading software Testing and Quality Assurance Company, Tackxel provides global businesses with measurable results, faster releases, and increased reliability through AI-led testing and advanced automation.</p></Reveal>
              <div className="space-y-4">{intelligentQA.map((t, i) => (<Reveal key={t.title} delay={i * 100}><div className="bg-neutral-900/70 backdrop-blur border border-neutral-800 rounded-lg p-6 card-lift"><div className="flex items-start gap-4"><div className="w-11 h-11 rounded-md bg-brand-500/15 border border-brand-500/30 flex items-center justify-center flex-shrink-0"><t.Icon className="w-6 h-6 text-brand-300" /></div><div><h3 className="text-base font-semibold text-white mb-1.5">{t.title}</h3><p className="text-sm text-neutral-400 leading-relaxed">{t.desc}</p></div></div></div></Reveal>))}</div>
              <Reveal delay={400}><Link href="/contact" className="btn-brand mt-8">Is Your Business Ready For A Smarter Web Solution?<ArrowRight className="w-4 h-4" /></Link></Reveal>
            </div>
            <Reveal delay={300} direction="left">
              <div className="relative bg-neutral-900/40 backdrop-blur border border-neutral-800 rounded-2xl p-6 aspect-square flex items-center justify-center">
                <svg viewBox="0 0 320 320" className="w-full h-full">
                  <defs><radialGradient id="coreGlowQA" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#5278C2" stopOpacity="0.5" /><stop offset="100%" stopColor="#3159A5" stopOpacity="0" /></radialGradient></defs>
                  <circle cx="160" cy="160" r="60" fill="url(#coreGlowQA)" />
                  <circle cx="160" cy="160" r="130" fill="none" stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="4 4" />
                  <circle cx="160" cy="160" r="100" fill="none" stroke="#3159A5" strokeOpacity="0.25" strokeWidth="1.2" />
                  <circle cx="160" cy="160" r="70" fill="none" stroke="#3159A5" strokeOpacity="0.35" strokeWidth="1.2" />
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => { const rad = (deg * Math.PI) / 180; const x = 160 + Math.cos(rad) * 130; const y = 160 + Math.sin(rad) * 130; return (<g key={i}><line x1="160" y1="160" x2={x} y2={y} stroke="#3159A5" strokeOpacity="0.2" strokeWidth="1" /><circle cx={x} cy={y} r="6" fill="#5278C2" /><circle cx={x} cy={y} r="10" fill="none" stroke="#5278C2" strokeOpacity="0.3" /></g>); })}
                  <circle cx="160" cy="160" r="32" fill="#3159A5" />
                  <text x="160" y="167" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff" fontFamily="Geist">QA</text>
                  {[{ label: "FUNC", x: 290, y: 160 }, { label: "AUTO", x: 225, y: 47 }, { label: "PERF", x: 95, y: 47 }, { label: "SEC", x: 30, y: 160 }, { label: "MOBILE", x: 80, y: 273 }, { label: "REGRESS", x: 240, y: 273 }].map((t) => (<g key={t.label}><rect x={t.x - 36} y={t.y - 11} width="72" height="22" rx="4" fill="#1D376A" stroke="#3159A5" strokeOpacity="0.4" /><text x={t.x} y={t.y + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill="#7E9DD7" fontFamily="Geist">{t.label}</text></g>))}
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-end mb-12"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Common Challenges</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950 mb-3">Top QA Challenges Slowing Product Releases And How We Solve Them</h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">Click any challenge to reveal exactly how we solve it.</p></div></Reveal>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-12">
            <Reveal>
              <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100">
                {challenges.map((c, i) => { const open = openChallenge === i; return (<button key={c.title} onClick={() => setOpenChallenge(open ? null : i)} className="w-full text-left hover:bg-neutral-50 transition-colors block"><div className="flex items-center justify-between gap-6 px-6 py-4"><div className="flex items-start gap-4 flex-1"><span className="font-mono text-xs font-semibold text-brand-600 pt-1 w-6">{String(i + 1).padStart(2, "0")}</span><span className="text-sm font-semibold text-neutral-900 leading-snug">{c.title}</span></div><span className={`w-7 h-7 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}>{open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}</span></div>{open && (<div className="px-6 pb-5 pl-16"><div className="border-l-2 border-brand-300 pl-4"><div className="text-[10px] font-mono uppercase tracking-wider text-brand-600 font-semibold mb-1.5">How we solve it</div><p className="text-sm text-neutral-700 leading-relaxed">{c.solution}</p></div></div>)}</button>); })}
              </div>
            </Reveal>
            <Reveal delay={200} direction="left">
              <div className="lg:sticky lg:top-28 lg:self-start space-y-4">
                <div className="bg-neutral-950 text-white rounded-lg p-7"><div className="text-xs text-brand-300 uppercase tracking-wider font-semibold mb-3">The Pattern</div><p className="text-base text-neutral-200 leading-relaxed">Limited test coverage leaves critical bugs undetected — leading to production failures and costly rework.</p></div>
                <div className="bg-white border border-neutral-200 rounded-lg p-7">
                  <div className="text-xs text-brand-600 uppercase tracking-wider font-semibold mb-3">Our Approach</div>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">Tackxel&apos;s automated test frameworks ensure 95% coverage across functional, regression, and UI testing.</p>
                  <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><Zap className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">3×</div><div className="text-xs text-neutral-500 mt-0.5">Faster Test Execution</div></div>
                    <div className="bg-white p-5"><div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center mb-3"><TrendingUp className="w-4 h-4 text-brand-600" /></div><div className="font-display text-3xl font-bold text-neutral-950 tracking-display">40%</div><div className="text-xs text-neutral-500 mt-0.5">Reduction in Post-Release Defects</div></div>
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
                <div><h2 className="font-display text-h2 lg:text-h2-lg text-white mb-3">Turn Testing Challenges Into Success Stories</h2><p className="text-base text-brand-50 leading-relaxed max-w-xl">Tackxel helps teams eliminate costly bugs, scale faster, and boost customer satisfaction through intelligent testing automation and continuous validation.</p></div>
                <Link href="/contact" className="bg-white text-brand-700 hover:bg-neutral-100 transition-colors px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2 w-fit lg:justify-self-end">Fix Your QA Bottlenecks Now<ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 lg:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end mb-14"><div><div className="text-eyebrow text-brand-600 uppercase mb-4">Industries We Serve</div><h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">Industry-Focused QA Solutions <span className="text-brand-600">For Every Industry</span></h2></div><p className="text-base text-neutral-600 leading-relaxed lg:justify-self-end max-w-lg">We design domain-specific QA processes to help businesses meet compliance mandates, reduce defects, and accelerate delivery across regulated industries worldwide.</p></div></Reveal>
          <Reveal delay={150}>
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-10">
              <ul className="bg-white border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100 h-fit">
                {industries.map((ind, i) => (<li key={ind.name}><button onClick={() => setActiveIndustry(i)} className={`w-full text-left flex items-center justify-between gap-4 px-6 py-4 transition-colors ${activeIndustry === i ? "bg-brand-50" : "hover:bg-neutral-50"}`}><div className="flex items-center gap-4"><div className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${activeIndustry === i ? "bg-brand-500 border-brand-500" : "bg-brand-50 border-brand-100"}`}><ind.Icon className={`w-4 h-4 ${activeIndustry === i ? "text-white" : "text-brand-600"}`} /></div><span className={`text-base font-semibold ${activeIndustry === i ? "text-brand-700" : "text-neutral-900"}`}>{ind.name}</span></div><ArrowRight className={`w-4 h-4 transition-all ${activeIndustry === i ? "text-brand-600 translate-x-1" : "text-neutral-300"}`} /></button></li>))}
              </ul>
              <div className="bg-white border border-neutral-200 rounded-lg p-8 lg:p-10 self-start">
                <div className="flex items-start gap-5 mb-6"><div className="w-16 h-16 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 flex items-center justify-center flex-shrink-0"><activeIndustryData.Icon className="w-7 h-7 text-brand-600" /></div><div><div className="text-eyebrow text-brand-600 uppercase mb-2 font-semibold tracking-widest">Industry Focus</div><h3 className="font-display text-h2 text-neutral-950 leading-tight">{activeIndustryData.name}</h3></div></div>
                <p className="text-base text-neutral-700 leading-relaxed mb-6">{activeIndustryData.desc}</p>
                <div className="grid grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 rounded-md overflow-hidden mb-6">{activeIndustryData.examples.map((ex) => (<div key={ex} className="bg-white p-4 flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" /><span className="text-sm text-neutral-800 font-medium">{ex}</span></div>))}</div>
                <Link href="/contact" className="btn-brand">Discuss Your Industry QA Requirements<ArrowRight className="w-4 h-4" /></Link>
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
          <Reveal><div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tackxel Advantage</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">What Makes Tackxel <span className="text-brand-300">The Right SQA Partner For You?</span></h2></div><p className="text-base text-neutral-300 leading-relaxed lg:justify-self-end max-w-xl">Our proven QA expertise, automation-first approach, and cross-domain testing help businesses deliver flawless, secure, and compliant software at enterprise speed.</p></div></Reveal>
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
          <Reveal><div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12 items-end"><div><div className="text-eyebrow text-brand-300 uppercase mb-4">Tech Stack</div><h2 className="font-display text-h2 lg:text-h2-lg text-white">Modern QA Stack For Reliable Testing</h2></div><p className="text-base text-neutral-400 leading-relaxed max-w-xl lg:justify-self-end">Tackxel uses a proven mix of advanced testing tools, automation frameworks, and CI/CD pipelines to deliver zero-defect software quality and faster time-to-market.</p></div></Reveal>
          <Reveal delay={100}>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
              <div className="flex flex-wrap gap-px bg-neutral-800 border-b border-neutral-800">{techStackTabs.map((t, i) => (<button key={t.category} onClick={() => setActiveStack(i)} className={`flex-1 min-w-[120px] px-4 lg:px-6 py-4 text-sm font-medium transition-all ${activeStack === i ? "bg-brand-600 text-white border-b-2 border-b-brand-300" : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800/60 hover:text-white"}`}><div className="text-xs font-mono mb-1 opacity-70">{String(i + 1).padStart(2, "0")}</div>{t.category}</button>))}</div>
              <div className="p-8 lg:p-10">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
                  <div><div className="text-eyebrow text-brand-300 uppercase mb-3 font-semibold tracking-widest">{String(activeStack + 1).padStart(2, "0")} · Tech Category</div><h3 className="font-display text-h2 text-white mb-3">{activeStackData.category}</h3><p className="text-sm text-neutral-400 leading-relaxed">{activeStackData.techs.length} production-grade tools for enterprise QA.</p></div>
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
            <h2 className="font-display text-h2 lg:text-h2-lg text-white mb-4 max-w-2xl mx-auto">Ready to ship zero-defect releases?</h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">Free 30-minute QA strategy session with a senior test engineer. No slide decks, no sales reps.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-brand">Talk to a QA expert<ArrowRight className="w-4 h-4" /></Link>
              <Link href="/services" className="btn-ghost-light">Back to all services<ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
