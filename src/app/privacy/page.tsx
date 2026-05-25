import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Tackxel Ltd collects, uses, retains and protects your personal data, your rights under UK GDPR, and how to contact us or request deletion of your data.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Tackxel",
    description:
      "How Tackxel Ltd collects, uses and protects your personal data, and your rights under UK GDPR.",
    url: "https://tackxel.com/privacy",
    type: "article",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="hero-warm pt-32 pb-12 border-b border-neutral-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-brand-600 uppercase mb-4">Legal</div>
          <h1 className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight leading-[1.08]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-neutral-500">Last updated: 26 May 2026</p>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose max-w-none">
            <p>
              This Privacy Policy explains how Tackxel Ltd (&ldquo;Tackxel&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo; or &ldquo;our&rdquo;) collects, uses, shares and protects your personal
              data when you visit{" "}
              <a href="https://tackxel.com">tackxel.com</a> (the &ldquo;Website&rdquo;) or contact us.
              We are committed to protecting your privacy and handling your data in line with the UK
              General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <p>
              For the purposes of data protection law, Tackxel Ltd is the <strong>data controller</strong>{" "}
              responsible for your personal data. Our details are at the end of this policy.
            </p>

            <h2>1. What data we collect</h2>
            <p>We collect the following categories of personal data:</p>
            <ul>
              <li>
                <strong>Information you give us.</strong> When you submit our contact form or email us,
                we collect the details you provide — typically your name, email address, company (if
                given), and the content of your message.
              </li>
              <li>
                <strong>Technical and usage data.</strong> When you use the Website, we and our
                providers may automatically collect limited technical information such as your IP
                address, browser type and version, device information, referring pages, and pages
                viewed. This is used to operate the site securely and to understand aggregate usage.
              </li>
              <li>
                <strong>Analytics data.</strong> We may use privacy-conscious analytics to measure
                Website traffic and performance in aggregate. We do not use this data to build
                advertising profiles, and we do not sell your data.
              </li>
            </ul>

            <h2>2. How we use your data and our lawful bases</h2>
            <p>We use your personal data to:</p>
            <ul>
              <li>respond to your enquiry and provide the information or services you request;</li>
              <li>communicate with you about a potential or existing engagement;</li>
              <li>operate, secure, maintain and improve the Website;</li>
              <li>comply with our legal and regulatory obligations.</li>
            </ul>
            <p>Our lawful bases under UK GDPR are:</p>
            <ul>
              <li>
                <strong>Legitimate interests</strong> — to respond to enquiries, run and protect our
                Website, and understand how it is used;
              </li>
              <li>
                <strong>Performance of a contract</strong> — where we are taking steps at your request
                before entering into, or performing, an agreement with you;
              </li>
              <li>
                <strong>Legal obligation</strong> — where we must process data to comply with the law;
              </li>
              <li>
                <strong>Consent</strong> — where you have given it (which you may withdraw at any time).
              </li>
            </ul>

            <h2>3. Cookies and similar technologies</h2>
            <p>
              The Website uses only the cookies and local storage necessary for it to function and to
              measure aggregate performance. We do not use third-party advertising or cross-site
              tracking cookies. You can control or delete cookies through your browser settings; doing
              so may affect how parts of the site work.
            </p>

            <h2>4. Third parties and data processors</h2>
            <p>
              We share personal data with a small number of trusted service providers who process it on
              our behalf, under contract and only on our instructions:
            </p>
            <ul>
              <li>
                <strong>Web3Forms</strong> — processes submissions from our contact form and delivers
                them to us by email.
              </li>
              <li>
                <strong>Vercel</strong> — hosts the Website and its infrastructure, and may process
                server logs and technical data for delivery, security and performance.
              </li>
              <li>
                <strong>Our email provider</strong> — used to receive and respond to your messages.
              </li>
            </ul>
            <p>
              We do not sell your personal data. We may disclose data where required by law, to protect
              our rights, or in connection with a business reorganisation.
            </p>

            <h2>5. International transfers</h2>
            <p>
              Some of our providers may store or process data outside the United Kingdom. Where personal
              data is transferred internationally, we take steps to ensure it is protected by
              appropriate safeguards, such as UK adequacy regulations or the International Data Transfer
              Agreement (or equivalent contractual protections).
            </p>

            <h2>6. Data retention</h2>
            <p>
              We keep personal data only for as long as necessary for the purposes set out in this
              policy. Contact and enquiry data is generally retained for up to 24 months from our last
              meaningful contact, unless we enter into an engagement (in which case relevant records are
              kept for the duration of that engagement and for as long as required afterwards to meet
              legal, accounting or regulatory obligations). After that, data is securely deleted or
              anonymised.
            </p>

            <h2>7. Your rights under UK GDPR</h2>
            <p>You have the right to:</p>
            <ul>
              <li>access the personal data we hold about you;</li>
              <li>request correction of inaccurate or incomplete data;</li>
              <li>request erasure of your data (the &ldquo;right to be forgotten&rdquo;);</li>
              <li>restrict or object to our processing of your data;</li>
              <li>request portability of the data you provided to us;</li>
              <li>withdraw consent at any time, where processing is based on consent.</li>
            </ul>
            <p>
              To exercise any of these rights — including requesting deletion of your data — email us at{" "}
              <a href="mailto:contact@tackxel.com">contact@tackxel.com</a>. We will respond within one
              month, as required by law. There is normally no charge.
            </p>

            <h2>8. Data security</h2>
            <p>
              We use appropriate technical and organisational measures to protect personal data against
              unauthorised access, loss, misuse or alteration. No method of transmission or storage is
              completely secure, but we work to safeguard your information and to limit access to those
              who need it.
            </p>

            <h2>9. Children&rsquo;s privacy</h2>
            <p>
              The Website is intended for business audiences and is not directed at children. We do not
              knowingly collect personal data from anyone under 16.
            </p>

            <h2>10. Complaints</h2>
            <p>
              If you have concerns about how we handle your data, please contact us first so we can put
              things right. You also have the right to complain to the UK&rsquo;s supervisory authority,
              the Information Commissioner&rsquo;s Office (ICO), at{" "}
              <a href="https://ico.org.uk" rel="noopener noreferrer" target="_blank">ico.org.uk</a>.
            </p>

            <h2>11. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The current version will always be
              posted on this page with its &ldquo;Last updated&rdquo; date.
            </p>

            <h2>12. How to contact us</h2>
            <p>
              For any privacy question or request, contact us at{" "}
              <a href="mailto:contact@tackxel.com">contact@tackxel.com</a>.
            </p>
            <p>
              <strong>Tackxel Ltd</strong>
              <br />
              19 Athol Road, Manchester, M16 8QW, United Kingdom
              <br />
              Company No. 17212854 · Registered in England &amp; Wales
            </p>

            <p className="text-sm text-neutral-500">
              See also our{" "}
              <Link href="/terms">Terms of Service</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
