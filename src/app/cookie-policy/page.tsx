"use client";

import React, { useState } from "react";
import { Cookie, RefreshCw } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export default function CookiePolicyPage() {
  const [resetMessage, setResetMessage] = useState(false);

  const handleResetConsent = () => {
    try {
      localStorage.removeItem("solveatlas_cookie_consent");
      setResetMessage(true);
      setTimeout(() => {
        window.location.reload();
      }, 800);
    } catch {
      // ignore
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      <Breadcrumbs items={[{ label: "Cookie Policy" }]} />

      <div className="space-y-3 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
          <Cookie className="w-3.5 h-3.5" />
          <span>Cookies & Tracking Technologies</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950">
          Cookie Policy
        </h1>
        <p className="text-xs text-slate-500">
          Last Updated: <strong>March 12, 2026</strong>
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-6">
        <p>
          This Cookie Policy explains what cookies are, how <strong>SolveAtlas</strong> uses cookies and similar technologies, and how you can control your preferences when visiting our website.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your computer or mobile device when you browse websites. They are widely used to make websites work efficiently, remember user preferences, and provide anonymous reporting data to site operators.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-navy-950">2. Categories of Cookies We Use</h2>

          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900">A. Strictly Essential Cookies</h3>
              <p className="text-xs text-slate-600 mt-1">
                These cookies are necessary for the website to function properly (for example, recording whether you have accepted our cookie consent banner so we do not bother you on every page refresh). They do not collect any personal data.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900">B. Anonymous Analytics Cookies</h3>
              <p className="text-xs text-slate-600 mt-1">
                We use Google Analytics to measure aggregate metrics (such as how many visitors view our Medical Bill Dispute guide vs. our Council Tax guide). This data is completely anonymized and helps us prioritize which guides need updates.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900">C. Google AdSense Advertising Cookies (DoubleClick DART)</h3>
              <p className="text-xs text-slate-600 mt-1">
                Google, as a third-party vendor, uses cookies to serve contextual and interest-based advertisements on SolveAtlas. The DART cookie enables Google and its partners to serve ads based on your visit to SolveAtlas and other websites across the web. You can opt out of personalized advertising by visiting{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 underline font-medium"
                >
                  Google Ads Settings
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950">3. How to Manage or Delete Cookies</h2>
          <p>
            Most modern web browsers allow you to manage your cookie preferences through their settings:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li>
              <strong>Google Chrome:</strong> Settings &gt; Privacy and security &gt; Third-party cookies
            </li>
            <li>
              <strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data
            </li>
            <li>
              <strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data
            </li>
            <li>
              <strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions
            </li>
          </ul>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-200">
          <h2 className="text-xl font-bold text-navy-950">4. Reset Your SolveAtlas Consent Choices</h2>
          <p>
            If you wish to change your previously selected cookie consent preferences on SolveAtlas, click the button below to clear stored consent and bring back the preferences banner:
          </p>

          <div className="pt-2">
            <button
              onClick={handleResetConsent}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Cookie Preferences</span>
            </button>
            {resetMessage && (
              <p className="text-xs text-emerald-600 mt-2 font-medium">
                Consent reset. Reloading preferences...
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
