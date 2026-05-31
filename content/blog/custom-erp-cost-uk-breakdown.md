---
title: "Custom ERP Cost Breakdown: What You're Actually Paying For"
slug: "custom-erp-cost-uk-breakdown"
excerpt: "Custom ERP development cost in the UK — honest ranges from £8k starter module to £60k+ enterprise. From the team that built ShiftERP with 99.5% EDI accuracy."
category: "Software Dev"
date: "2026-05-18"
readTime: "10 min read"
image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
author: "Tackxel Team"
---

"How much does a custom ERP cost?" gets answered the same way regardless of industry: with a long pause and "it depends." That's true, but unhelpful. Custom ERP pricing in the UK clusters into three honest bands, and the variables that move the number are predictable if you know what to look for. Here's the version we'd give an operations director over coffee — what each tier actually buys, where the money goes, and how to read a quote sensibly.

For context, we built [ShiftERP](/case-studies/shifterp) — a production ERP for co-manufacturers, with EDI integration to retailers like Walmart, Target, and Amazon running at **99.5% accuracy**. The numbers below are calibrated against that work and the [custom ERP development](/services/enterprise-platforms-and-erp) we ship for other operators.

## Starter — from £8,000

**Who it's for:** small operators or single-team functions that need one part of an ERP done properly — inventory, orders, a quoting tool, a customer portal — without paying for the whole suite.

**What you get:** a single-module web application (typically inventory, order management, dispatch, or a customer-facing portal) running on a modern stack (Next.js + Postgres on AWS or Vercel), authentication, role-based access for one or two user types, basic dashboards, an export-to-CSV layer, and a simple admin tool. Replaces a spreadsheet, an Access database, or a noisy mix of Trello and email.

**Timeline:** 6–10 weeks from kickoff to live, depending on how clear the workflow input is on your side.

**What it isn't:** multi-module orchestration, EDI integration, multi-company accounting, or anything that touches finance close. Those move you into the next tier.

## Standard — £20,000 to £50,000

**Who it's for:** operators with custom workflows that off-the-shelf SaaS won't model — co-manufacturing, multi-step compliance, mixed B2B/B2C, niche regulated industries. This is the most common tier.

**What you get:** a multi-module ERP — orders + inventory + production + dispatch + reporting + an admin layer — with EDI integration to one or two trading partners, accounting integration (Xero, QuickBooks, NetSuite, Sage), role-based portals for different user types (operators, supervisors, customers), a real reporting layer, and a shop-floor or tablet-friendly interface where relevant. Real architecture work: multi-tenant where appropriate, audit trails for finance and compliance, and the operational scaffolding (logging, monitoring, backup, alerts) that operations actually depend on.

This is the tier ShiftERP lives in.

**Timeline:** 4–6 months from kickoff to first production cohort.

## Enterprise — from £60,000

**Who it's for:** larger operators with multiple sites, multiple operating companies, deep integration requirements (EDI across many partners, complex accounting consolidation, regulated industries), or replacing a legacy ERP at the centre of the business.

**What you get:** everything in Standard plus multi-site / multi-tenant architecture, EDI across many trading partners with reconciliation and audit, complex compliance reporting, multi-currency multi-entity finance, custom integration platforms (your CRM + ERP + WMS + accounting + BI), enterprise SSO, and the deeper devops, observability, and disaster-recovery posture an enterprise platform needs.

**Timeline:** 9–15+ months, delivered in production-ready phases — not big-bang launches.

## Ongoing / monthly maintenance

Custom ERPs need active engineering forever — partners change, OS and dependencies need upgrades, regulations shift, your operation evolves. Expect:

- **From £500/month:** essentials — dependency updates, monitoring, monthly health report, small bug fixes.
- **£1,000–£2,000/month:** production cadence — small feature work, integration upkeep, performance work, monthly EDI partner changes.
- **£2,000–£3,000+/month:** active product team — ongoing feature development, multi-site rollouts, new integrations.

For comparison: off-the-shelf SaaS (SAP Business One, NetSuite, Microsoft Dynamics) typically lands at **£40–£200 per user per month plus implementation and customisation**, which on a 30-user operation works out at **£20k–£60k/year recurring** — before customisation. Custom ERP recurring costs are usually a fraction of that at the same scale, and customisation is included rather than billed every quarter.

## What actually moves the price

- **Number of modules.** Each module (inventory, orders, dispatch, finance, HR, compliance) is real engineering work.
- **Integrations.** EDI partners, accounting systems, CRMs, WMS, banking. Each adds 1–4 weeks depending on complexity.
- **User roles and portals.** Each distinct user type (operator, supervisor, customer, supplier, finance) is its own designed interface.
- **Compliance.** Regulated industries (food, pharma, finance, government) add audit-trail, validation, and traceability work.
- **Customisation depth.** Modelling unusual workflows (co-manufacturing, multi-step batch operations, complex costing) is meaningful work — but it's why a custom ERP exists.

## Build vs buy — the honest comparison

Buy when your operation looks average. Build when it doesn't.

A typical off-the-shelf ERP (SAP Business One, NetSuite, Microsoft Dynamics, Sage 200) reaches £25k–£80k upfront in licensing + implementation, then £20k–£60k/year in subscriptions for a mid-sized operation. Add the customisation those platforms inevitably need to fit your workflow, and the three-year total cost of ownership often lands at **£100k–£250k**. A custom ERP in the same scenario is typically **£30k–£80k upfront with £6k–£24k/year recurring**.

The buy decision is right when you can run the standard configuration. The build decision is right when you'd be paying a consultant to bend the standard configuration every quarter — at which point you're already paying for customisation, just slowly and badly.

## The hidden costs nobody quotes you

- **Data migration.** Pulling years of operations data out of spreadsheets, Access, or a legacy ERP is rarely smooth. Budget 1–4 weeks.
- **Training.** Operators need real training. A great ERP that nobody uses is a worse outcome than an OK ERP that everyone uses.
- **Parallel-run cost.** Running old and new systems during cutover is normal and necessary. Budget for it.
- **Process change management.** Your team will rediscover how they actually work during the build. Plan for change conversations.
- **EDI partner onboarding fees.** Some trading partners charge for EDI setup. Not your developer's fault, but real.

## How ShiftERP was built

ShiftERP is the Standard-tier ERP we built for co-manufacturers. The work that mattered: a workflow model that fits how co-manufacturing actually runs (not how SAP imagines it should), EDI integrations with Walmart, Target, and Amazon running at 99.5% accuracy across millions of transactions, a shop-floor tablet interface for operators that works under noisy real-world conditions, and a clean separation between the back-office system and the operations surface so each can be improved on its own. It's a useful reference for what £30–£50k of custom ERP actually buys you — and we covered the underlying engineering philosophy in our [MVP to scale post](/blog/mvp-to-scale).

## FAQ

**When should I build a custom ERP vs buying SAP or NetSuite?**
Build when your workflows have specificity off-the-shelf won't model. Buy when your operation is standard. The rule of thumb: if you'd customise the off-the-shelf system into something unrecognisable, you're already paying for custom — and slower.

**Can I really get a useful ERP component for £8k?**
At the Starter tier — yes, for one module. A clean inventory tool, an order portal, a customer-facing dashboard. Single module, single user type. It's a great way to replace a costly spreadsheet without committing to a full ERP build.

**How long does a custom ERP take to build?**
Starter: 6–10 weeks. Standard: 4–6 months. Enterprise: 9–15+ months — delivered in production-ready phases, never big-bang.

**Do you handle EDI integration?**
Yes — EDI is core to most ERP work. X12, EDIFACT, AS2, SFTP. ShiftERP runs at 99.5% accuracy across major retail partners; that's the standard we aim for.

**Can you migrate us from an existing ERP?**
Yes. We audit your data, integrations, and custom logic; design a phased cutover; and run parallel during transition. Migrations succeed or fail on data quality and change management — both get explicit project attention.

---

**Costing out a custom ERP and want an honest tier read for your specific operation?** [Get a written estimate](/contact) — no sales theatre, just a clear conversation about scope and price.
