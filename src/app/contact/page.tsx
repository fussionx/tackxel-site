"use client";

import { useState } from "react";
import { ArrowRight, Check, Mail, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";

const expectations = [
  "Confidential — NDA available on request",
  "First response within one business day",
  "Initial call with the founder, not a sales rep",
  "Written follow-up summarising scope and next steps",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-16 bg-white border-b border-neutral-200">
        <div className="absolute inset-0 grid-bg-light" />
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
              <div className="bg-white border border-neutral-200 rounded-lg p-8 lg:p-10 shadow-card">
                {!submitted ? (
                  <>
                    <h2 className="font-display text-h3 text-neutral-950 mb-2">Project inquiry</h2>
                    <p className="text-sm text-neutral-500 mb-8">All fields except phone are required.</p>
                    <div className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <Field label="First name" name="firstName" required />
                        <Field label="Last name" name="lastName" required />
                      </div>
                      <Field label="Work email" name="email" type="email" required />
                      <Field label="Company" name="company" required />
                      <Field label="Phone (optional)" name="phone" type="tel" />
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-2">
                          Engagement type<span className="text-brand-600">*</span>
                        </label>
                        <select className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2.5 text-sm text-neutral-900 focus:border-brand-500 outline-none transition-colors">
                          <option>Fixed-cost project</option>
                          <option>Dedicated team</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-2">
                          Project details<span className="text-brand-600">*</span>
                        </label>
                        <textarea
                          rows={4}
                          className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-brand-500 outline-none transition-colors resize-none"
                          placeholder="What are you building, what's your timeline, and what does success look like?"
                        />
                      </div>
                      <button onClick={() => setSubmitted(true)} className="btn-primary w-full justify-center mt-4">
                        Send inquiry
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <p className="text-xs text-neutral-500 text-center">
                        By submitting, you agree to our privacy policy. We never sell or share inquiry data.
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="py-12 text-center">
                    <div className="w-14 h-14 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-7 h-7 text-brand-600" strokeWidth={2.5} />
                    </div>
                    <h2 className="font-display text-h3 text-neutral-950 mb-3">Inquiry received.</h2>
                    <p className="text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto">
                      The founder will reach out within one business day. In the meantime, you&apos;ll receive a confirmation email at the address you provided.
                    </p>
                  </div>
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
      <input id={name} name={name} type={type} className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-brand-500 outline-none transition-colors" />
    </div>
  );
}
