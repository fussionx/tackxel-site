---
title: "How Much Does It Cost to Build an AI Chatbot in 2026? An Honest UK Breakdown"
slug: "ai-chatbot-cost-uk-2026"
excerpt: "What does an AI chatbot actually cost to build in the UK in 2026? Honest pricing from £2k starter to £20k+ enterprise — from the team that built Lexa."
category: "AI"
date: "2026-05-27"
readTime: "10 min read"
image: "https://images.unsplash.com/photo-1611174743420-3d7df880ce32?w=1200&q=80"
author: "Tackxel Team"
---

AI chatbot pricing in the UK is one of the most opaque corners of software development. You'll get quotes ranging from £900 to £80,000 for what sounds like the same brief, and most agencies won't put a number on a page until you've had three calls with a sales lead. So here's the version we'd give a friend over coffee — three honest tiers, what each actually includes, what makes the number move, and the running costs nobody mentions until contract day.

For context, we built [Lexa](/case-studies/lexa) — Pakistan's first AI legal chatbot, live at lexa.lawyer — and we ship AI chatbots into other products as part of our [AI integration work](/services/ai-integration). This post is the conversation we wish more buyers had before signing.

## Starter — from £2,000

**Who it's for:** founders and small teams who need a working AI chatbot in front of users in two or three weeks. Typically a single use case — answering FAQs grounded in your existing content, qualifying leads, triaging support, or onboarding a new user.

**What you get:** an LLM-backed chat interface wired into your product (web or in-app), prompts tuned to your tone and scope, basic conversation memory within a session, one or two safe-refusal patterns for off-topic questions, and a simple admin view so you can see what users are asking. Hosted on your preferred cloud (Vercel, AWS, your existing infra) with a clean, on-brand UI.

**Timeline:** 2–3 weeks from kickoff to live, depending on how clear the content and brand input is on your side.

**What it isn't:** a full RAG pipeline over thousands of documents, multi-channel deployment (WhatsApp + web + Slack + CRM), or custom training. Those move you into the next tier — but a surprising number of "AI chatbot" needs land here cleanly.

## Standard — £5,000 to £15,000

**Who it's for:** product teams shipping AI as a real feature, not a marketing checkbox. This is the bracket most of our chatbot work lives in.

**What you get:** a production custom chatbot grounded in your data via retrieval-augmented generation (RAG) — embeddings, a vector store, a thoughtful chunking and retrieval strategy so answers come from your sources, not the model's memory. Real guardrails: input/output validation, prompt-injection defences, safe refusal for high-stakes questions, traceable citations so a user (or your legal team) can verify an answer. A custom UI that matches your product, a small ops dashboard for your team to see what's being asked, and an evaluation pipeline that catches regressions when you change a prompt or model.

This is the tier [Lexa](/case-studies/lexa) was delivered in. Read about [how we built it](/blog/building-pakistans-first-ai-legal-chatbot) for the full story.

**Timeline:** 6–10 weeks from kickoff to live.

## Enterprise — from £20,000

**Who it's for:** organisations with regulated content, multi-channel deployment, multiple languages, complex integrations, or a roadmap that goes beyond a single chatbot into agents and copilots.

**What you get:** advanced RAG (hybrid search, rerankers, query routing across multiple corpora), multi-channel deployment (web + WhatsApp + Microsoft Teams + Slack + voice), agent capabilities so the chatbot can take actions — book a meeting, raise a ticket, query a CRM — and the full evaluation, observability, and audit-trail stack required for serious production AI in regulated industries. Add-ons like custom fine-tuning, custom model hosting, or PII/data-residency controls live here too.

**Timeline:** 10–16 weeks, sometimes longer when integrations are deep.

## Ongoing / monthly maintenance

AI chatbots are not "ship and forget." The model providers change pricing and capability monthly; your content changes; your users find edge cases nobody anticipated. Expect:

- **From £250/month:** light maintenance — dependency updates, small prompt tweaks, monitoring, monthly health report.
- **£500–£1,000/month:** production cadence — eval pipeline runs, monthly retrieval-corpus refresh, security patching, small feature work.
- **£1,000+/month:** active product team — multi-channel, ongoing prompt iteration, model migrations, performance work.

Separate from this is the **inference cost** — what you pay your LLM provider per call. That's usually a small operating line for chat workloads (a few pounds per thousand conversations on hosted models), but it scales linearly with usage so plan for it.

## What actually moves the price

The variables that matter, in roughly the order they hit the budget:

- **Knowledge surface size and complexity.** A chatbot grounded in 50 pages of clean content is fundamentally cheaper than one grounded in 50,000 pages across multiple formats.
- **Integrations.** Each external system the chatbot reads from or writes to (CRM, ticketing, calendar, internal APIs) adds engineering time.
- **Channels.** Web only is the cheapest target. Every additional channel — WhatsApp, Slack, voice — is a new deployment surface to test and maintain.
- **Languages.** Multi-language adds testing and content overhead, especially for nuanced domains like legal or medical.
- **Compliance and data residency.** Regulated content, GDPR-sensitive PII flows, or audit-trail requirements add meaningful engineering work.
- **UI custom design.** A polished, animated, on-brand chat UI takes more time than an off-the-shelf widget.

## The hidden costs nobody quotes you

Three running costs that catch first-time buyers off-guard:

- **LLM inference.** Cheap on hosted models for chat, but it scales with usage and long-context retrieval can be expensive — worth modelling at expected volume.
- **Vector storage and embeddings.** Tiny at the starter tier; meaningful at enterprise scale (hundreds of thousands of documents).
- **Evaluation and prompt iteration over time.** Quality is a number you have to keep an eye on. A small monthly eval cadence is what separates a chatbot that gets better from one that quietly drifts.

## Why our starter is £2k

Because we don't run an agency middle layer. The senior engineers who scope your project are the ones who build it — no account manager, no junior-bench markup, no "discovery phase" that exists to bill hours. We've shipped this exact pattern across [11+ products](/services/ai-integration) and we know what the smallest useful version looks like. That's how we can responsibly start a custom chatbot from £2k where most agencies start at £15k.

## How Lexa was built

Lexa — Pakistan's first AI legal chatbot — sits inside the Standard tier. The work that mattered: a real RAG pipeline grounded in the actual legal corpus so answers cite their basis; safe-refusal behaviour so the system declines questions it shouldn't answer; a calm, plain-language conversation design for non-lawyers under stress; and a fast Next.js front end that makes the assistant feel instant. We wrote the [full build story here](/blog/building-pakistans-first-ai-legal-chatbot) — it's the most honest case study of what production AI chatbot work actually looks like in 2026.

## FAQ

**Why do AI chatbot quotes vary so wildly?**
Because "AI chatbot" describes everything from a £400 widget that wraps an OpenAI call to a £100,000 enterprise platform. Scope, channels, grounding, and accuracy requirements decide where you land. A clear scope is the cheapest cost-control tool you have.

**Can I really get a production-grade AI chatbot for £2k?**
At the Starter tier — yes, for the right scope. Single use case, single channel, content you already have, no deep integrations. We've delivered exactly this. What you can't get for £2k is an enterprise platform with multi-channel deployment and advanced RAG — and we'll tell you up front when your brief is bigger than the Starter tier.

**Do I need to choose a specific LLM provider?**
No. We build with a provider-agnostic layer so you're not locked into OpenAI, Anthropic, Google, or any single vendor. Model choice is a tuning decision, not a foundational one.

**How long does an AI chatbot take to build?**
Starter: 2–3 weeks. Standard: 6–10 weeks. Enterprise: 10–16 weeks. We can usually have an internal demo in your hands within the first 7–10 days regardless of tier.

**Who owns the code, the prompts, and the data?**
You do. Code in your repos, prompts and pipelines documented, data in your accounts, no licensing back to us. The engagement ends; the system stays yours.

---

**Building an AI chatbot and want a real price for your specific brief?** [Get a project quote for your AI chatbot](/contact) — you'll walk away with an honest tier recommendation and a written estimate, not a sales deck.
