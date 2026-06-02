---
title: "How to Evaluate LLM Outputs in Production (Eval Pipelines That Actually Work)"
slug: "llm-evaluation-eval-pipelines"
excerpt: "How to build LLM evaluation pipelines that catch real production issues — deterministic, LLM-as-judge, human evals. Techniques from shipping real AI."
category: "AI"
date: "2026-05-28"
readTime: "12 min read"
image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80"
author: "Tackxel Team"
---

Most AI features ship without evals. The team tries it a few times, decides it "seems right," and goes live. Then they change a prompt three weeks later, something silently regresses, and nobody notices until a customer does. This is the most common — and most preventable — failure pattern in production AI. The fix is an eval pipeline, and it's not as hard or as expensive as the discourse around it suggests.

We've built and maintained eval pipelines for production AI across regulated and consumer domains, including [Lexa](/case-studies/lexa) — Pakistan's first AI legal chatbot, where the cost of a silent regression is genuinely high. This is the practical playbook: what to evaluate, how to evaluate it, what to measure, and the pragmatic eval pipeline that catches real issues before users see them.

## Why evals matter more than the discourse admits

A model in isolation is testable in the same way any deterministic function is: given input X, you expect output Y, and you can check. The moment that model is wrapped in a real product — with retrieval, structured outputs, guardrails, conversation memory, multiple users, multiple versions of multiple prompts, model migrations every few months — you've moved into a different testing regime. Manual checks don't scale. Vibes don't catch regressions. The team trying the feature on Wednesday is not going to catch the drift that started in last Friday's prompt tweak.

The eval pipeline is what turns "AI quality" from a feeling into a number. Without it: you can't tell whether your last prompt change was an improvement, you can't compare two models on your actual workload, you can't catch silent regressions, and you can't sleep well during model migrations. With it: quality becomes a tracked metric like uptime, your AI feature gets *measurably* better over time, and incidents become diagnosable rather than mysterious.

## The three types of evals

Most production AI evaluation falls into three categories. You'll almost always use a mix.

### 1. Deterministic evals

Where you can score automatically against a known-correct answer. Best for tasks with clear right/wrong outcomes: classification, structured extraction, tool selection, format adherence. Fast, cheap, deterministic — they run in CI and tell you in seconds whether your prompt change broke anything obvious. The blind spot: most generative tasks don't have one "correct" answer, so deterministic evals only cover part of the space.

### 2. LLM-as-judge evals

A separate, stronger model scores the production model's outputs against a rubric. Best for things that are hard to score deterministically: was the answer clear? Was the tone right? Was the reasoning sound? Does the response address the question? These scale well and can run in CI, but you need to be careful: judge models have biases, prompt them carefully, and validate the judge against human-rated samples periodically. Without that validation step, you're measuring whether the judge agrees with the production model, which isn't the same thing.

### 3. Human evals

Real human review of representative outputs. Slower and more expensive, but the only way to catch the subtle things — nuance, voice, harm, edge-case correctness. Used in two modes: a small recurring sample to calibrate the LLM-as-judge against real human judgement, and a periodic full review for high-stakes domains. For Lexa, this was non-negotiable — legal correctness is the kind of question only a domain expert can settle.

A mature eval pipeline uses all three. The discipline is choosing which evaluation lives in which layer based on cost, frequency, and importance.

## Building an eval dataset

This is the part most teams skip and then regret.

The eval dataset is a set of representative inputs paired with expected behaviours. Not "expected outputs" — "expected behaviours," because generative tasks rarely have a single correct output. The set should:

- **Cover the real distribution** of what users actually ask, not what the team imagines they ask.
- **Include edge cases**: off-topic questions, prompt injection attempts, malformed inputs, sensitive content, multilingual cases if you support them.
- **Be small enough to run cheaply** (50–200 examples for fast CI, larger sets for full sweeps).
- **Be versioned** — your eval set evolves with the product, and you want to track when it changed.

Sources for the initial set:

- Manually curated examples covering the use cases you care about.
- Real user interactions from a beta or staging environment (with privacy handled properly).
- Synthetic examples generated from a description of the use case, then reviewed by a human.

The eval dataset becomes one of the most valuable artefacts in the project. Treat it like code.

## Metrics that actually matter

The metrics depend on the use case, but for most LLM features in production these are the ones to track:

- **Accuracy / correctness.** Did the model produce the right answer or behaviour? Scored deterministically where possible, LLM-as-judge where not.
- **Refusal rate / safe-refusal accuracy.** Is the model correctly refusing when it should — and not refusing when it shouldn't? Easily missed and one of the most important metrics for any public-facing AI.
- **Latency.** Especially p95 and p99. Slow features feel broken even when they're correct.
- **Cost per interaction.** Token usage matters at scale, and a "smarter" prompt that costs 3× as much may not be worth it.
- **Drift over time.** Run your eval set on every commit. The trend matters as much as the absolute number.
- **Hallucination rate** for grounded systems: how often does the model assert a fact that's not in the retrieved context? For RAG systems this is the headline metric.

What's *not* useful: a single composite score. Composite scores hide regressions in one dimension behind improvements in another. Keep the metrics broken out.

## Eval pipelines that actually run in CI

The eval pipeline isn't a sophisticated tool; it's a small, well-engineered system that runs reliably on every relevant change. The shape that works:

1. **Trigger.** Every PR that touches prompts, model choice, retrieval, or tool definitions kicks off the eval pipeline.
2. **Fast tier.** A small, deterministic eval set (~50 inputs) runs in under five minutes and posts results to the PR.
3. **Full tier.** A larger set including LLM-as-judge runs nightly, with summary metrics tracked over time.
4. **Gating.** A drop below threshold on the fast tier blocks the merge. Engineers can override with a written note explaining why — that note becomes part of the audit trail.
5. **Reporting.** Eval metrics dashboards alongside your normal product analytics, so the team can see quality trends the same way they see uptime.

The point is the pipeline runs *automatically*, not when someone remembers. Eval pipelines that depend on manual runs decay within a quarter.

## A concrete example: evaluating legal AI

[Lexa](/case-studies/lexa) is a useful example because the stakes are explicit. The eval dimensions that matter:

- **Legal correctness.** Does the response accurately reflect the underlying legal text? Scored with deterministic checks against expected citations plus LLM-as-judge for substantive correctness, calibrated against periodic legal-expert human review.
- **Refusal accuracy.** Does the system refuse questions that are outside its scope or require specific legal advice? This is one of the most important categories — over-refusal makes the product unhelpful; under-refusal creates liability. We track this as its own metric.
- **Citation quality.** Are the cited sections of law actually relevant to the answer? Easy to score against the retrieval set.
- **Tone and accessibility.** Is the response readable by a non-lawyer under stress? Scored via LLM-as-judge against a rubric.
- **Drift across model updates.** Every time the underlying model is updated, the full eval set re-runs. We've caught real regressions this way — including a model update that subtly changed refusal behaviour in cases we'd specifically tuned for.

The same approach scales down to less regulated domains; the principle is the same — define the dimensions that matter, measure each one, track them over time.

## Common eval mistakes

- **One eval, one number.** Hides regressions in one dimension behind improvements in another. Keep dimensions separate.
- **Static eval set forever.** Real user behaviour evolves; your eval set should too. Update it regularly.
- **Trusting LLM-as-judge without human calibration.** Judges drift and have biases. Calibrate periodically against human ratings.
- **Running evals only when something breaks.** By then the regression has already shipped. Evals belong in CI.
- **Confusing benchmarks with evals.** Public benchmarks (MMLU, HellaSwag, etc.) tell you about the model. Your eval set tells you about *your product*. Both matter; they're not interchangeable.

For the broader engineering perspective on why this matters, see our [post on why most AI features fail in production](/blog/why-ai-features-fail-in-production) — eval pipelines are one of the highest-leverage things that separate the ones that ship from the ones that don't.

## Tooling — quick map

The eval tooling space is moving quickly. As of mid-2026, the realistic options:

- **Promptfoo** — open-source, lightweight, great for fast deterministic and judge-based evals in CI. Our default starting point.
- **LangSmith** — broader observability + eval platform, useful when you want eval and tracing on the same surface.
- **Braintrust** — strong eval-first product with good metric tracking over time.
- **Guardrails AI / Lakera / NVIDIA Garak** — adjacent space, more focused on safety eval. Worth knowing about.
- **Custom.** For production agents, you'll usually end up writing some custom evaluation harness around your specific architecture — see our [production agents guide](/blog/building-production-ai-agents) for what trajectory evaluation looks like.

There's no single right tool. The right tool is the one your team will actually use on every change. We build [AI integrations](/services/ai-integration) and ship eval pipelines around them as a normal part of the engagement — the eval set you walk away with is often the highest-leverage artefact of the whole project.

## FAQ

**How big should my eval dataset be?**
Start at 50 representative examples for the fast tier; aim for 200–500 for the nightly full tier. Beyond a few thousand, returns diminish for most product use cases.

**Can I just use the public benchmarks?**
No. Public benchmarks evaluate the underlying model. Your eval set evaluates your *product* — your prompts, your retrieval, your guardrails. Both matter; only the second predicts real production behaviour.

**How often should evals run?**
Fast tier: every PR. Full tier: nightly. Periodic human review: weekly to monthly depending on stakes.

**Who should write the eval set?**
Engineers and the domain owner together. The engineer alone will miss the nuance; the domain owner alone won't structure it usefully. The best eval sets we've shipped came from a paired session.

**Will eval set quality improve with time?**
Yes — and it should. Treat it like a living artefact. Add edge cases as they're discovered, retire stale ones, version the set, track which version produced which metric.

---

**Building an AI feature and want a real eval pipeline that catches regressions before users do?** [Book a 30-minute call](/contact) — we'll talk through your specific product and recommend the smallest eval set that does the job.
