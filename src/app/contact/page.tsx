"use client";

import { useState } from "react";
import { ArrowRight, Check, Mail, Phone, AlertCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

// ─────────────────────────────────────────────────────────────────────────────
// WEB3FORMS SETUP (required for the contact form to actually send):
// 1. Go to https://web3forms.com and enter your email: contact@tackxel.com
// 2. Web3Forms emails you a free Access Key. Submissions are delivered to the
//    email you registered with (use contact@tackxel.com so they reach you).
// 3. Paste that key below, replacing YOUR_WEB3FORMS_KEY_HERE.
// No backend or server needed — this works on the static Vercel deployment.
// ─────────────────────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_KEY_HERE";

const expectations = [
  "Confidential — NDA available on request",
  "First response within one business day",
  "Initial call with the founder, not a sales rep",
  "Written follow-up summarising scope and next steps",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="relative hero-warm pt-32 pb-16 overflow-hidden border-b border-neutral-200">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div>
                <span className="badge mb-6">
                  <span className="dot-pulse" />
                  Start a conversation
                </span>
                <h1 className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight">
                  Talk to the founder.
                </h1>
                <p className="text-lg text-neutral-600 mt-6 max-w-xl leading-relaxed">
                  Tell us what you&apos;re building. The founder replies within one business day. No sales reps. No slide decks.
                </p>

                <div className="mt-10 space-y-3">
                  {expectations.map((e, i) => (
                    <Reveal key={e} delay={i * 80}>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-brand-600" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-neutral-700">{e}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-neutral-200">
                  <div className="text-eyebrow text-neutral-500 uppercase mb-4">Prefer to skip the form?</div>
                  <div className="space-y-3">
                    <a href="mailto:contact@tackxel.com" className="flex items-center gap-3 text-sm text-neutral-900 hover:text-brand-600 transition-colors">
                      <Mail className="w-4 h-4 text-neutral-400" />
                      contact@tackxel.com
                    </a>
                    <div className="flex items-center gap-3 text-sm text-neutral-500">
                      <Phone className="w-4 h-4 text-neutral-400" />
                      Phone available on request
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150} direction="left">
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 lg:p-10 shadow-card">
                {status === "success" ? (
                  <div className="py-12 text-center">
                    <div className="w-14 h-14 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-7 h-7 text-brand-600" strokeWidth={2.5} />
                    </div>
                    <h2 className="font-display text-h3 text-neutral-950 mb-3">Thanks — we&apos;ll be in touch within 24 hours.</h2>
                    <p className="text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto">
                      Your message is on its way to the founder. You&apos;ll get a reply at the email you provided.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Web3Forms hidden fields */}
                    <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                    <input type="hidden" name="subject" value="New project inquiry from tackxel.com" />
                    <input type="hidden" name="from_name" value="Tackxel Website" />
                    {/* Honeypot — bots fill this, humans never see it */}
                    <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                    <h2 className="font-display text-h3 text-neutral-950 mb-2">Project inquiry</h2>
                    <p className="text-sm text-neutral-500 mb-8">All fields except phone are required.</p>
                    <div className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <Field label="First name" name="first_name" required />
                        <Field label="Last name" name="last_name" required />
                      </div>
                      <Field label="Work email" name="email" type="email" required />
                      <Field label="Company" name="company" required />
                      <Field label="Phone (optional)" name="phone" type="tel" />
                      <div>
                        <label htmlFor="engagement" className="block text-xs font-semibold text-neutral-700 mb-2">
                          Engagement type<span className="text-brand-600">*</span>
                        </label>
                        <select id="engagement" name="engagement" required className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2.5 text-sm text-neutral-900 focus:border-brand-500 outline-none transition-colors">
                          <option value="Fixed-cost project">Fixed-cost project</option>
                          <option value="Dedicated team">Dedicated team</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 mb-2">
                          Project details<span className="text-brand-600">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-brand-500 outline-none transition-colors resize-none"
                          placeholder="What are you building, what's your timeline, and what does success look like?"
                        />
                      </div>

                      {status === "error" && (
                        <div className="flex items-start gap-2.5 rounded-md bg-red-50 border border-red-200 px-4 py-3">
                          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-red-700 leading-relaxed">
                            Something went wrong sending your message. Please try again, or email us directly at{" "}
                            <a href="mailto:contact@tackxel.com" className="font-semibold underline">contact@tackxel.com</a>.
                          </p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="btn-primary w-full justify-center mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === "loading" ? "Sending…" : "Send inquiry"}
                        {status !== "loading" && <ArrowRight className="w-4 h-4" />}
                      </button>
                      <p className="text-xs text-neutral-500 text-center">
                        By submitting, you agree to our privacy policy. We never sell or share inquiry data.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Where we&apos;re based</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">
                  UK-registered, globally remote
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed mt-6 max-w-md">
                  Tackxel Ltd is a UK-registered Private Limited Company, headquartered in Manchester. We operate as a remote-first team, serving clients globally.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="bg-white border border-neutral-200 rounded-lg p-8 shadow-card max-w-xl">
                <div className="text-xs text-neutral-500 uppercase tracking-wider font-semibold mb-4">Registered office</div>
                <address className="not-italic text-base text-neutral-900 leading-relaxed mb-6">
                  Tackxel Ltd<br />
                  19 Athol Road<br />
                  Manchester, M16 8QW<br />
                  United Kingdom
                </address>
                <div className="pt-6 border-t border-neutral-200 space-y-3 text-sm">
                  <a href="mailto:contact@tackxel.com" className="flex items-center gap-3 text-neutral-900 hover:text-brand-600 transition-colors">
                    <Mail className="w-4 h-4 text-neutral-400" />
                    contact@tackxel.com
                  </a>
                  <div className="flex items-center gap-3 text-neutral-500">
                    <Phone className="w-4 h-4 text-neutral-400" />
                    Phone available on request
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-neutral-200 text-xs text-neutral-500 font-mono">
                  Company No. 17212854 · Registered in England &amp; Wales
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold text-neutral-700 mb-2">
        {label}
        {required && <span className="text-brand-600">*</span>}
      </label>
      <input id={name} name={name} type={type} required={required} className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-brand-500 outline-none transition-colors" />
    </div>
  );
}
