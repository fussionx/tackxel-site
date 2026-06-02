---
title: "Designing Products With AI: A Modern Design Process"
slug: "designing-products-with-ai-modern-design-process"
excerpt: "How to design AI products that ship — research, UX strategy, interaction patterns, error and trust design. Lessons from building real AI products."
category: "Product Design"
date: "2026-04-15"
readTime: "12 min read"
image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&q=80"
author: "Tackxel Team"
---

A surprising number of AI products fail at the design layer, not the model layer. The underlying technology works fine. The wrapping — the moment a user encounters AI inside the product, the way uncertainty is communicated, what happens when the AI can't help, how trust is built or broken in the first five seconds — is where the work falls down. Design discipline matters more in AI than in almost any other product category because the surface area for confusion, mistrust, and frustration is bigger. The "model said something useful" path is straightforward; everything else needs explicit design.

This is the practical design process we use when [designing AI products](/services/product-design) at Tackxel, distilled from real shipped work — including [Lexa](/case-studies/lexa) — and the patterns we've found genuinely separate AI features users come back to from ones they try once and never open again.

## The fundamental shift: designing for non-deterministic output

Traditional product design assumes you control the output. A button does what the button says. A form submits what was filled in. The system's behaviour is predictable; the designer's job is to make the right behaviour findable.

AI breaks this. The output is partly the user's input, partly the model's interpretation, sometimes the underlying data, often the rough edge between all three. Two identical questions can produce different answers. The model can refuse, hedge, mislead, surprise. None of that is a bug — it's the nature of generative systems — but it changes what good design looks like.

The shift, in one line: in classical product design you design *the response*; in AI product design you design *the experience around possible responses*.

Three concrete consequences:

- **You can't design a single happy path.** You have to design for the range of plausible outputs, including the ones that go wrong.
- **Failure UX is the product.** What happens when the AI can't or shouldn't answer is as important as what happens when it can.
- **Trust is the deliverable.** A good AI product teaches users *when to lean on it and when to second-guess it*. The interface earns or loses that trust constantly.

This isn't an exotic philosophy; it's the practical foundation of every AI design choice that follows. (We dug into the trust design side in more depth in [designing for trust](/blog/designing-for-trust-ai-ux).)

## The five-stage process

We work in five overlapping phases. They're not gates — they run alongside engineering rather than sequentially. But the shape is consistent.

### 1. Discovery — find the right AI use case

Most AI design briefs start with "we want to add AI." Resist that frame. The right discovery question is "where in this product is a user spending time on a task AI could do better — and where would AI obviously not help?"

What "discovery" looks like in practice:

- **Workflow mapping.** Where does the user currently spend disproportionate time? Drafting? Searching? Filing? Triaging?
- **User research focused on friction.** Where do users mentally check out? Where do they ask colleagues for help? Where do they paste content into ChatGPT today because the product doesn't handle it?
- **Honest "where does AI not fit" mapping.** The cases where the user genuinely wants to do the work themselves, or where the consequences of a wrong answer are too high for AI, or where the input is so unstructured that even good models will struggle. Marking these explicitly prevents over-applying AI later.

The discovery deliverable is a shortlist of candidate AI use cases ranked by user value, model feasibility, and risk. The first feature shipped should come from the top of that list, not the loudest stakeholder request.

### 2. UX strategy — when to surface AI vs hide it

An under-appreciated design decision: should the AI be visible *as* AI, or just a faster version of an existing feature?

- **Surface AI when** the user needs to know they're interacting with a generative system — anything that involves judgement, drafting, or content the user might want to verify.
- **Hide AI when** the model is just powering a smarter version of an obvious feature — better search, smarter autocomplete, an improved classifier. Users don't need to know "AI" is involved.

Surfacing AI inappropriately makes the product feel gimmicky and adds cognitive load. Hiding AI inappropriately erodes trust the moment the user realises they were talking to a model. The right answer is per-feature, not per-product.

### 3. Interaction patterns — picking the right UX shape

A small set of patterns covers most AI features. Picking the right one for the use case is one of the highest-leverage design decisions:

- **Conversation.** Open chat. Right for narrow knowledge bases, customer-facing assistants, exploration. Wrong for tasks where a button would be faster.
- **Suggestion.** AI proposes, user accepts/edits/rejects. The dominant pattern for drafting and content tasks — preserves user agency and makes the AI feel like help rather than automation.
- **Autocomplete.** Inline completion as the user types. Excellent for writing-heavy tools. Invisible when it's working.
- **Agent.** Multi-step automation behind a clear permission boundary. Reserve for cases where it's genuinely the right pattern. (See [building production AI agents](/blog/building-production-ai-agents).)
- **Background AI.** AI doing work the user never directly sees — better routing, smarter categorisation, faster search. Best UX for a lot of real value.

A useful rule: when in doubt, pick the *least conversational* pattern that meets the use case. Chat is rarely the right answer; a focused button or suggestion is usually better.

### 4. Error and edge case design

This is where most AI products quietly fall apart, and where good design makes the biggest difference.

What needs to be designed, not improvised:

- **The "I don't know" state.** When the AI can't or shouldn't answer, what happens? A graceful refusal with a clear next step beats a confident wrong answer every time.
- **The "low confidence" state.** When the AI thinks it might be wrong — hedging in language, signalling uncertainty in the UI.
- **The "system can't currently respond" state.** Network failures, rate limits, model downtime. Mobile users see these regularly.
- **The "user pushed too hard" state.** Long prompts, repeated reformulations, prompt-injection attempts. The system should fail safe, not in confusing ways.
- **The "wrong answer caught downstream" state.** When the user (or your validation layer) flags an answer as wrong, what's the recovery?

A serious AI product treats these as first-class designed states, not edge cases to handle once and forget.

### 5. Trust and transparency

Trust is built and lost in the small moments. The design moves that consistently earn it:

- **Show your work.** Citations, retrieved sources, the model's reasoning, the answer's basis. Most users don't click; the option matters anyway.
- **Be honest about confidence.** Hedge when the system has reason to. Don't fake precision.
- **Make the human the decider.** For consequential outputs, design accepts the AI as a draft and the user as the editor, not the other way around.
- **Authorship clarity.** Make it visible what was written by the model, by the user, or co-edited. Especially important for outbound content.
- **Memory with control.** If the AI remembers context across sessions, give the user a clear, one-click way to see and clear it.

These principles consistently outperform technical sophistication. A less capable AI with good trust design beats a more capable AI without it, every time.

## A concrete example: Lexa's conversational UX

[Lexa](/case-studies/lexa) is Pakistan's first AI legal chatbot. Its users are non-lawyers, often under stress, often non-technical. The design choices that mattered:

- **Plain language.** Every response avoids jargon by default, surfaces the legal text it's drawing on as a citation, and is structured for someone reading it on a phone in a moment of worry.
- **A calm, patient tone.** No exclamation marks, no marketing voice, no "Great question!" The product takes the user's question as seriously as they do.
- **Visible refusal, not silent.** When Lexa shouldn't answer specifically (a particular case, a particular dispute), it says so clearly and offers a useful next step — general information plus a clear path to find a qualified lawyer.
- **Citations as trust scaffolding.** Most users don't click them. They matter because they're there.
- **Fast.** A slow legal AI feels untrustworthy in a way that a fast one doesn't, regardless of accuracy. The front end was engineered for sub-second response feel.

That's the level of detail that separates a chatbot users return to from one they try once.

## Designing for AI uncertainty

Three specific design problems uniquely AI:

**Loading states.** Long AI responses (multi-second generation) make blank wait time painful. Streaming the response while showing progressively-completed UI is usually right. Skeletons feel honest if you've designed them; "Thinking…" feels generic.

**Partial answers.** When the AI can answer part of the question but not all of it, the UI should make that visible — "here's what I can tell you about X; for Y, here's where to go."

**Refusal UX.** A refusal is a designed moment. "I can't help with that" is a failure; "Here's what I can tell you, here's what you might want to do next" is a feature. Every refusal in a serious AI product should be designed.

## Common AI design mistakes

A short pattern-level list:

- **Chat for everything.** Not every AI feature is a conversation. A button is often a better UI than a sentence.
- **"Send to AI" as the CTA.** Vague, scary, low-trust. Specific, scoped CTAs ("Summarise this", "Draft a response") consistently outperform.
- **Hiding citations behind a click.** If you have them, show them by default. The interface earns the trust to hide them later.
- **Treating the AI as deterministic in the UI.** Showing the same loading shape regardless of how long the model is taking; showing the same response shape regardless of confidence. The interface should reflect the underlying non-determinism.
- **Not designing the wrong-answer recovery.** Sooner or later the AI is wrong in front of a user. The recovery experience defines whether the product survives that.

The general principle is the same one in [our product design process post](/blog/great-product-design-process): great products are designed for what *can* go wrong, not just for what *should* go right. AI products take that further.

## Tools we actually use

A short, honest map of the tools that show up in our AI design work:

- **Figma + FigJam.** For everything visual and collaborative.
- **Prompt prototyping in shipped tools.** Many AI design decisions are most usefully tested in a real LLM playground (Claude, ChatGPT, Anthropic console) before they enter Figma.
- **Lightweight working prototypes** in a sandbox before committing to engineering — often a no-code or low-code shim with a real LLM call so we can feel the system.
- **Eval-driven design.** Tying eval pipelines to design decisions — when we change a prompt, the eval set tells us whether the change is an improvement.

The tools matter less than the rhythm: design moves alongside engineering, prototypes hit real models early, eval signal informs design choices.

## FAQ

**Do AI products need different designers?**
Not necessarily different *people*, but different *discipline*. Good product designers can adapt; they need to internalise the shift from designing responses to designing experiences around non-deterministic responses.

**Should AI features be visible as AI in the UI?**
Per-feature, not per-product. Surface where the user needs to know; hide where AI is just a faster version of an existing feature.

**How do you design for AI that gets the answer wrong?**
By making it a first-class designed state. Visible "I'm not sure" / "I don't know" UX, easy editing, easy correction, clear escalation. Refusal is the feature, not the gap.

**How do you test AI design before shipping?**
The same way you test any design — with real users on real prototypes — but with the AI playing through, not mocked. Mocked AI gives misleading feedback. The model's actual behaviour shapes the experience.

**How is this different from your general product design process?**
The general process (research → design → ship → iterate) is unchanged. What changes is how each phase is conducted — earlier prototypes, eval-informed design choices, much more attention to failure UX. We covered the general process in [what makes a great product design process](/blog/great-product-design-process).

---

**Designing an AI product and want a designer + engineer team that knows how to ship one?** [Book a 30-minute call](/contact) — honest read on the design challenges in your specific product, before you commit.
