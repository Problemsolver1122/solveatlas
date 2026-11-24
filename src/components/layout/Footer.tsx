import React from "react";
import Link from "next/link";
import { Compass, ShieldCheck } from "lucide-react";
import { countries } from "@/data/countries";
import { categories } from "@/data/categories";
import { AdSlot } from "../ads/AdSlot";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Footer Ad Placement */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <AdSlot position="footer" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Mission column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group inline-block">
              <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-emerald-400 border border-slate-800">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                Solve<span className="text-emerald-400">Atlas</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              SolveAtlas empowers everyday citizens and workers across the United States, United Kingdom, Canada, Australia, Pakistan, India, and internationally to overcome bureaucratic, consumer, digital, and financial obstacles through clear, verified, step-by-step guides.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                Zero Fake Information Guarantee
              </span>
            </div>
          </div>

          {/* Target Countries Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Country Hubs
            </h3>
            <ul className="space-y-2 text-sm">
              {countries.map((c) => (
                <li key={c.code}>
                  <Link
                    href={`/country/${c.code}`}
                    className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/countries"
                  className="text-xs text-emerald-400 hover:underline pt-1 inline-block"
                >
                  Explore all countries →
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Key Categories
            </h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-slate-400 hover:text-emerald-400 transition-colors block truncate"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/categories"
                  className="text-xs text-emerald-400 hover:underline pt-1 inline-block"
                >
                  View all 12 categories →
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal, Trust & Transparency */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Trust & Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  About SolveAtlas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Contact & Corrections
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Legal & Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Cookie Policy & Consent
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Editorial Notice */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-xs text-slate-400 leading-relaxed space-y-3">
          <p>
            <strong className="text-slate-300">Editorial & Compliance Disclosure:</strong> SolveAtlas is an independent research publication providing educational guides to navigate public administration, digital platforms, and consumer rights. We are not affiliated with, endorsed by, or a representative of any government agency (including HUD, CMS, IRS, GOV.UK, Service Canada, ATO, NADRA, or UIDAI). All trademarks and registered names belong to their respective owners. Content on SolveAtlas does not constitute formal legal, financial, or medical advice; readers facing high-stakes disputes should always consult a licensed attorney, CPA, or medical practitioner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900/80 text-slate-400">
            <div>
              © {currentYear} SolveAtlas. All rights reserved. Built for clarity, fairness, and universal access.
            </div>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/privacy-policy" className="hover:text-slate-300">Privacy</Link>
              <Link href="/terms" className="hover:text-slate-300">Terms</Link>
              <Link href="/disclaimer" className="hover:text-slate-300">Disclaimer</Link>
              <Link href="/contact" className="hover:text-slate-300">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
