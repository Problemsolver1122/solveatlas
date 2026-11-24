import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy - SolveAtlas",
  description:
    "SolveAtlas Privacy Policy explaining data collection, Google AdSense cookies, Google Analytics, GDPR, CCPA rights, and user privacy protections.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 12, 2026";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <div className="space-y-3 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Privacy & Data Protection</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">
          Last Updated & Effective Date: <strong>{lastUpdated}</strong>
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-6">
        <p>
          At <strong>SolveAtlas</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), accessible from{" "}
          <Link href="/" className="text-emerald-700 underline font-medium">
            https://solveatlas.com
          </Link>
          , one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that is collected and recorded by SolveAtlas and how we use it, in strict accordance with the European Union General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA/CPRA), and Google AdSense publisher policies.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950">1. Information We Do Not Collect</h2>
          <p>
            SolveAtlas does not require user accounts, user logins, credit card numbers, or social security / national ID numbers to read our problem-solving guides. All articles, checklists, and calculators are accessible 100% free without creating a profile.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950">2. Information We Collect Automatically (Log Files)</h2>
          <p>
            Like almost all standard web servers, SolveAtlas uses log files. These files merely log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information for security audits.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950">3. Google AdSense & DoubleClick DART Cookies</h2>
          <p>
            Google is a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to SolveAtlas and other sites on the internet.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>
              Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to your website or other websites.
            </li>
            <li>
              Google&apos;s use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 underline"
              >
                Google Ads Settings
              </a>
              . Alternatively, users can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{" "}
              <a
                href="https://www.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 underline"
              >
                aboutads.info
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950">4. Google Analytics</h2>
          <p>
            We may use Google Analytics 4 (GA4) to understand audience volume, geographic regions (country-level), and which problem-solving articles are most helpful to visitors. GA4 collects anonymized IP data and engagement metrics. You can prevent Google Analytics from recognizing you on return visits by disabling cookies on your browser.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950">5. Newsletter & Contact Form Submissions</h2>
          <p>
            If you voluntarily subscribe to our SolveAtlas Problem-Solver Dispatch newsletter or submit an inquiry through our Contact page, we collect your name and email address. We use this information solely to deliver the requested email newsletter or reply directly to your inquiry. We never sell, rent, or lease our subscriber database to third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950">6. CCPA / CPRA Privacy Rights (For California Residents)</h2>
          <p>Under the CCPA, California consumers have the right to:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li>Request disclosure of the categories and specific pieces of personal data collected.</li>
            <li>Request deletion of any personal data collected.</li>
            <li>Opt-out of the sale or sharing of personal data (SolveAtlas does NOT sell personal data).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950">7. GDPR Privacy Rights (For European Economic Area & UK)</h2>
          <p>Every EEA and UK user is entitled to the following:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li>The right to access – You have the right to request copies of your personal data.</li>
            <li>The right to rectification – You have the right to request correction of inaccurate data.</li>
            <li>The right to erasure – You have the right to request that we erase your personal data.</li>
            <li>The right to restrict or object to processing under certain conditions.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950">8. Contact Us Regarding Your Privacy</h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact our Data Protection Officer at:{" "}
            <a href="mailto:privacy@solveatlas.com" className="text-emerald-700 underline font-semibold">
              privacy@solveatlas.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
