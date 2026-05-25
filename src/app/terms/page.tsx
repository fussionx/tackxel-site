import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing use of the Tackxel Ltd website — acceptable use, intellectual property, disclaimers, limitation of liability, and governing law (England & Wales).",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | Tackxel",
    description:
      "The terms governing use of the Tackxel Ltd website, including intellectual property, liability and governing law.",
    url: "https://tackxel.com/terms",
    type: "article",
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="hero-warm pt-32 pb-12 border-b border-neutral-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-eyebrow text-brand-600 uppercase mb-4">Legal</div>
          <h1 className="font-display text-h1 lg:text-h1-lg text-neutral-950 tracking-display-tight leading-[1.08]">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-neutral-500">Last updated: 26 May 2026</p>
        </div>
      </section>

      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose max-w-none">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the website
              at <a href="https://tackxel.com">tackxel.com</a> (the &ldquo;Website&rdquo;), operated by
              Tackxel Ltd (&ldquo;Tackxel&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
              &ldquo;our&rdquo;). By accessing or using the Website, you agree to be bound by these
              Terms. If you do not agree, please do not use the Website.
            </p>
            <p>
              These Terms relate to your use of the Website only. Any engagement for our services is
              governed by a separate written agreement between you and Tackxel; nothing on the Website
              constitutes such an agreement or a binding offer.
            </p>

            <h2>1. Use of the Website</h2>
            <p>You agree to use the Website lawfully and responsibly. In particular, you must not:</p>
            <ul>
              <li>use the Website in any way that breaches applicable laws or regulations;</li>
              <li>
                attempt to gain unauthorised access to, interfere with, damage or disrupt the Website,
                its servers, or any connected systems or networks;
              </li>
              <li>
                introduce malware or any other malicious or harmful code, or conduct automated scraping
                or data extraction without our prior written consent;
              </li>
              <li>
                misuse our contact forms or communications channels, including by sending spam or
                fraudulent content.
              </li>
            </ul>
            <p>
              We may suspend, restrict or withdraw access to the Website (in whole or in part) at any
              time without notice.
            </p>

            <h2>2. Intellectual property</h2>
            <p>
              All content on the Website — including text, graphics, logos, the Tackxel name and brand,
              page layout, design, code and other materials — is owned by or licensed to Tackxel Ltd and
              is protected by intellectual property laws. You may view and print content for your own
              personal or internal business reference. You may not copy, reproduce, republish,
              distribute, modify or create derivative works from any part of the Website for commercial
              purposes without our prior written permission. All rights not expressly granted are
              reserved.
            </p>

            <h2>3. No warranty</h2>
            <p>
              The Website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis for general information only. While we take care to keep the content
              accurate and up to date, we make no representations or warranties of any kind, express or
              implied, about the completeness, accuracy, reliability or availability of the Website or
              its content. Any reliance you place on it is at your own risk.
            </p>

            <h2>4. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Tackxel Ltd will not be liable for any indirect,
              incidental, special or consequential loss, or for any loss of profits, revenue, business,
              goodwill or data, arising out of or in connection with your use of (or inability to use)
              the Website.
            </p>
            <p>
              Nothing in these Terms excludes or limits our liability where it would be unlawful to do
              so — including liability for death or personal injury caused by our negligence, or for
              fraud or fraudulent misrepresentation.
            </p>

            <h2>5. Third-party links</h2>
            <p>
              The Website may contain links to third-party websites or resources. These are provided for
              convenience only; we have no control over and accept no responsibility for the content,
              policies or practices of any third-party sites.
            </p>

            <h2>6. Privacy</h2>
            <p>
              Your use of the Website is also governed by our{" "}
              <Link href="/privacy">Privacy Policy</Link>, which explains how we collect and use personal
              data.
            </p>

            <h2>7. Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time. The current version will always be posted on
              this page with its &ldquo;Last updated&rdquo; date, and your continued use of the Website
              after any change constitutes acceptance of the revised Terms.
            </p>

            <h2>8. Governing law and jurisdiction</h2>
            <p>
              These Terms, and any dispute or claim arising out of or in connection with them or your
              use of the Website, are governed by and construed in accordance with the laws of England
              and Wales. The courts of England and Wales will have exclusive jurisdiction.
            </p>

            <h2>9. Contact</h2>
            <p>
              Questions about these Terms can be sent to{" "}
              <a href="mailto:contact@tackxel.com">contact@tackxel.com</a>.
            </p>
            <p>
              <strong>Tackxel Ltd</strong>
              <br />
              19 Athol Road, Manchester, M16 8QW, United Kingdom
              <br />
              Company No. 17212854 · Registered in England &amp; Wales
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
