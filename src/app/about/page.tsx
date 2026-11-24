import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  ShieldCheck,
  Award,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { authors } from "@/data/authors";
import { AdSlot } from "@/components/ads/AdSlot";

export const metadata: Metadata = {
  title: "About SolveAtlas - Editorial Standards & Mission",
  description:
    "Learn about SolveAtlas's mission, editorial methodology, fact-checking process, and commitment to trustworthy, human-researched problem-solving guides.",
};

export default function AboutPage() {
  const authorList = Object.values(authors);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Hero Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
          <Compass className="w-3.5 h-3.5" />
          <span>Our Purpose & Standards</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
          Democratizing Solutions to Life&apos;s Complicated Problems
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          SolveAtlas was founded with a straightforward conviction: navigating modern bureaucracy, disputing unfair bills, and asserting consumer rights should not require a law degree or thousands of dollars in consulting fees.
        </p>
      </div>

      {/* Trust Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900">100% Primary Sourcing</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            We cite official statutory acts (such as US 45 CFR § 149, UK Consumer Rights Act 2015, Australian Superannuation Guarantee Act, and SBP circulars). We never link to predatory third-party fee-charging agents.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900">Zero Fabricated Content</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            In an era of generic AI search scrapers, every guide on SolveAtlas is written, field-tested, and verified by human analysts with credentials in consumer policy, systems security, and public administration.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <DollarSign className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900">Transparent Monetization</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            To keep all guides 100% free for everyone, SolveAtlas is funded through non-intrusive contextual display advertising (such as Google AdSense). Our editorial evaluations remain completely independent.
          </p>
        </div>
      </div>

      {/* Editorial Methodology */}
      <section className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-6">
        <h2 className="text-2xl font-bold text-navy-950">
          Our Four-Stage Verification Process
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Jurisdiction Mapping</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                We clearly isolate what applies under federal law versus municipal or state legislation (e.g., distinguishing Ontario LTB from general Canadian tenancy rules).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Statutory Fact-Checking</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                We review current administrative thresholds, time limits, and fee schedules directly from official gazettes and regulatory agency websites.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              3
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Workflow Walkthrough</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                We test digital government portals (e.g. Pak-Identity, myAadhaar, myGov ATO, CMS portal) on mobile and desktop to highlight technical pitfalls.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              4
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Periodic Re-Audit</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                When laws change or online portals are overhauled, our team updates existing articles and highlights the revised revision date clearly at the top.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Placement */}
      <AdSlot position="in-article" />

      {/* Editorial Team Profiles */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-navy-950">
            Meet the Editorial & Verification Board
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Our multi-disciplinary team brings real policy, legal research, and technological expertise:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {authorList.map((author) => (
            <div
              key={author.id}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-800 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  {author.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{author.name}</h3>
                  <span className="text-xs text-emerald-700 font-semibold">{author.role}</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {author.credentials} {author.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <div className="rounded-2xl bg-navy-950 text-white p-8 text-center space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold">Help Us Expand Public Knowledge</h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          Notice a broken government link, updated statutory regulation, or a new scam tactic? Contact our research desk immediately.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
        >
          <span>Send Tip or Correction</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
