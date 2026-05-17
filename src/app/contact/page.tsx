"use client";

import { useState } from "react";
import { ArrowRight, Check, Mail, Phone, Calendar, Briefcase, Globe } from "lucide-react";
import Reveal from "@/components/Reveal";

const offices = [
  { country: "United States", city: "Dover, Delaware", address: "8 The Green, STE A, Dover, DE 19901" },
  { country: "Canada", city: "Toronto, Ontario", address: "1 Fore Street, Toronto, ON" },
  { country: "Australia", city: "Sydney, NSW", address: "45 Lachlan St, Liverpool NSW 2170" },
  { country: "Pakistan", city: "Lahore, Punjab", address: "30 Shah Jamal Road, Lahore" },
];

const expectations = [
  "Confidential — NDA available on request",
  "First response within 4 business hours",
  "Initial call routed to a senior engineer, not a sales rep",
  "Written technical assessment within 5 business days",
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
                  Talk to a senior engineer about your project.
                </h1>
                <p className="text-lg text-neutral-600 mt-6 max-w-xl leading-relaxed">
                  Tell us what you&apos;re building. We&apos;ll respond within 4 business hours with a senior engineer who can speak to the specifics of your stack, timeline, and goals.
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
                    <a href="mailto:sales@tackxel.com" className="flex items-center gap-3 text-sm text-neutral-900 hover:text-brand-600 transition-colors">
                      <Mail className="w-4 h-4 text-neutral-400" />
                      sales@tackxel.com
                    </a>
                    <a href="tel:+15188401004" className="flex items-center gap-3 text-sm text-neutral-900 hover:text-brand-600 transition-colors">
                      <Phone className="w-4 h-4 text-neutral-400" />
                      +1 (518) 840-1004
                    </a>
                    <a href="#" className="flex items-center gap-3 text-sm text-neutral-900 hover:text-brand-600 transition-colors">
                      <Calendar className="w-4 h-4 text-neutral-400" />
                      Schedule directly on our calendar
                    </a>
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
                          <option>Fixed-scope project</option>
                          <option>Dedicated engineering team</option>
                          <option>Staff augmentation</option>
                          <option>Technology audit / advisory</option>
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
                      A senior engineer will reach out within 4 business hours. In the meantime, you&apos;ll receive a confirmation email with a calendar link.
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Briefcase, label: "Sales & New Business", email: "sales@tackxel.com", subline: "+1 (518) 840-1004", isPhone: true },
              { Icon: Calendar, label: "Press & Media", email: "press@tackxel.com", subline: "Response within 1 business day" },
              { Icon: Globe, label: "Careers", email: "hr@tackxel.com", subline: "Open roles across all four offices" },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 100}>
                <div className="bg-white border border-neutral-200 rounded-lg p-8 card-lift h-full">
                  <c.Icon className="w-5 h-5 text-brand-600 mb-6" />
                  <div className="text-eyebrow text-neutral-500 uppercase mb-3">{c.label}</div>
                  <a href={`mailto:${c.email}`} className="block text-lg font-semibold text-neutral-950 hover:text-brand-600 transition-colors mb-2">{c.email}</a>
                  {c.isPhone ? (
                    <a href={`tel:${c.subline.replace(/\s/g, "")}`} className="text-sm text-neutral-600 hover:text-brand-600 transition-colors">{c.subline}</a>
                  ) : (
                    <p className="text-sm text-neutral-600">{c.subline}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-12">
              <div>
                <div className="text-eyebrow text-brand-600 uppercase mb-4">Office locations</div>
                <h2 className="font-display text-h2 lg:text-h2-lg text-neutral-950">Four cities. One firm.</h2>
              </div>
              <p className="text-base text-neutral-600 leading-relaxed self-end">
                Our engineering teams are distributed across four offices. Every client gets a dedicated delivery lead in their time zone — and the option to visit in person.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden">
            {offices.map((o, i) => (
              <Reveal key={o.country} delay={i * 80}>
                <div className="bg-white p-8 hover:bg-neutral-50 transition-colors h-full">
                  <div className="text-xs text-neutral-500 uppercase tracking-wider font-semibold mb-3">{o.country}</div>
                  <h3 className="text-h3 text-neutral-950 mb-2">{o.city}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{o.address}</p>
                </div>
              </Reveal>
            ))}
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
