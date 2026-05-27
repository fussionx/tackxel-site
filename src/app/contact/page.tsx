"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const WEB3FORMS_ACCESS_KEY = "2067b320-aa6a-40b0-8e1f-90f5afc7248f";

const SUBJECTS = [
  "AI Integration",
  "Mobile App",
  "Web Development",
  "Product Design",
  "Staff Augmentation",
  "Cloud Native",
  "Other",
] as const;

type Status = "idle" | "sending" | "success" | "error";

const INPUT_CLS =
  "w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 transition-colors";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: SUBJECTS[0] as string,
    message: "",
    botcheck: "", // honeypot — must stay empty
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Honeypot — pretend success and silently drop.
    if (form.botcheck) {
      setStatus("success");
      return;
    }

    // Validation
    if (!form.name.trim() || !form.email.trim() || !form.subject || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email, subject and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("error");
      setErrorMsg("That email address doesn't look right.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          company: form.company || "(not provided)",
          subject: `[Tackxel] ${form.subject} — ${form.name}`,
          service_of_interest: form.subject,
          message: form.message,
          from_name: "Tackxel Contact Form",
          replyto: form.email,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          company: "",
          subject: SUBJECTS[0] as string,
          message: "",
          botcheck: "",
        });
      } else {
        setStatus("error");
        setErrorMsg(
          data.message ||
            "Something went wrong on our end. Please try again, or email us at contact@tackxel.com."
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Network error. Please try again, or email us directly at contact@tackxel.com."
      );
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="relative hero-warm pt-32 pb-16 lg:pb-20 overflow-hidden border-b border-neutral-200">
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-eyebrow text-brand-600 uppercase mb-4">Contact</div>
            <h1 className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight leading-[1.05]">
              Let&apos;s build something real.
            </h1>
            <p className="mt-5 text-base lg:text-lg text-neutral-700 leading-relaxed max-w-xl mx-auto">
              A 30-minute call with a senior engineer — no sales reps, no pitch deck. Tell us what
              you&apos;re trying to ship and we&apos;ll come back with a real plan.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MAIN: details (left) + form (right) — stack on mobile */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">

            {/* CONTACT DETAILS */}
            <Reveal>
              <div>
                <h2 className="font-display text-h3 text-neutral-950 mb-6 leading-snug">
                  Get in touch directly
                </h2>

                {/* Emails */}
                <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-brand-50/60 via-white to-orange-50/40 p-6 mb-5 shadow-subtle">
                  <div className="flex items-center gap-2 mb-4">
                    <Mail className="w-4 h-4 text-brand-600" />
                    <div className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-700">
                      Email
                    </div>
                  </div>
                  <a href="mailto:contact@tackxel.com" className="block group">
                    <div className="text-xs text-neutral-500 mb-0.5">General / contact</div>
                    <div className="text-base font-semibold text-neutral-950 group-hover:text-brand-600 transition-colors break-all">
                      contact@tackxel.com
                    </div>
                  </a>
                  <div className="my-4 border-t border-neutral-200/80" />
                  <a href="mailto:sale@tackxel.com" className="block group">
                    <div className="text-xs text-neutral-500 mb-0.5">Sales enquiries</div>
                    <div className="text-base font-semibold text-neutral-950 group-hover:text-brand-600 transition-colors break-all">
                      sale@tackxel.com
                    </div>
                  </a>
                </div>

                {/* Phone */}
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 mb-5 shadow-subtle">
                  <div className="flex items-center gap-2 mb-4">
                    <Phone className="w-4 h-4 text-brand-600" />
                    <div className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-700">
                      Phone (UK)
                    </div>
                  </div>
                  <a href="tel:+447862409351" className="block group">
                    <div className="text-base font-semibold text-neutral-950 group-hover:text-brand-600 transition-colors">
                      +44 7862 409351
                    </div>
                    <div className="text-xs text-neutral-500 mt-1">UK mobile · WhatsApp available</div>
                  </a>
                </div>

                {/* Address + small embedded map */}
                <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-subtle">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-brand-600" />
                      <div className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-700">
                        Registered office
                      </div>
                    </div>
                    <address className="not-italic text-sm text-neutral-800 leading-relaxed">
                      Tackxel Ltd<br />
                      19 Athol Road<br />
                      Manchester, M16 8QW<br />
                      United Kingdom
                    </address>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=19+Athol+Road%2C+Manchester+M16+8QW%2C+UK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      Open in Google Maps
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                  <iframe
                    title="Tackxel — Manchester office location (M16 8QW)"
                    src="https://www.google.com/maps?q=19+Athol+Road%2C+Manchester+M16+8QW%2C+UK&output=embed&z=14"
                    width="100%"
                    height="200"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0, display: "block" }}
                  />
                </div>

                {/* Hours / response time */}
                <div className="mt-6 flex items-start gap-2.5 text-sm text-neutral-600">
                  <Clock className="w-4 h-4 mt-0.5 text-neutral-400 flex-shrink-0" />
                  <div>
                    <div className="text-neutral-950 font-medium mb-0.5">Office hours</div>
                    Monday–Friday, 9:00 – 18:00 GMT · We respond within 24 hours.
                  </div>
                </div>
              </div>
            </Reveal>

            {/* FORM */}
            <Reveal delay={120}>
              <form
                onSubmit={onSubmit}
                className="rounded-3xl border border-neutral-200 bg-white shadow-card p-6 lg:p-9"
                noValidate
              >
                <h2 className="font-display text-h3 text-neutral-950 mb-2 leading-snug">
                  Send us a message
                </h2>
                <p className="text-sm text-neutral-600 mb-6">
                  A few lines about what you&apos;re working on is plenty — we&apos;ll come back with
                  next steps.
                </p>

                {/* honeypot — hidden from real users */}
                <input
                  type="text"
                  name="botcheck"
                  value={form.botcheck}
                  onChange={(e) => update("botcheck", e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <Field label="Your name" required>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={INPUT_CLS}
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Email" required>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={INPUT_CLS}
                      autoComplete="email"
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <Field label="Company" hint="(optional)">
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      className={INPUT_CLS}
                      autoComplete="organization"
                    />
                  </Field>
                  <Field label="Service of interest" required>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => update("subject", e.target.value)}
                      className={INPUT_CLS}
                    >
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Message" required>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="What are you trying to ship? Timeline, stage, anything specific…"
                    className={INPUT_CLS + " resize-y"}
                  />
                </Field>

                {/* status messages */}
                {status === "success" && (
                  <div
                    role="status"
                    className="mt-5 flex items-start gap-2.5 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-900"
                  >
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    Thanks — we&apos;ll be in touch within 24 hours.
                  </div>
                )}
                {status === "error" && (
                  <div
                    role="alert"
                    className="mt-5 flex items-start gap-2.5 rounded-xl bg-rose-50 border border-rose-200 px-4 py-3 text-sm text-rose-900"
                  >
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    {errorMsg || "Something went wrong. Please try again."}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-brand mt-6 w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    "Sending…"
                  ) : (
                    <>
                      Send message
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="mt-4 text-xs text-neutral-500">
                  By submitting, you agree to our{" "}
                  <Link href="/privacy" className="underline hover:text-brand-600 transition-colors">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST / FOOTER LINE */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 text-center">
          <p className="text-sm text-neutral-700">
            <strong className="text-neutral-950">Tackxel Ltd</strong> — UK Private Limited Company ·
            Company No. <span className="font-mono">17212854</span> · Registered in England &amp; Wales
          </p>
          <p className="text-xs text-neutral-500 mt-2">
            We respond within 24 hours, Monday–Friday GMT.
          </p>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-mono font-semibold uppercase tracking-widest text-neutral-700 mb-1.5">
        {label}
        {required && <span className="text-brand-600">*</span>}
        {hint && (
          <span className="ml-1.5 font-sans normal-case font-normal text-neutral-400 tracking-normal">
            {hint}
          </span>
        )}
      </span>
      {children}
    </label>
  );
}
