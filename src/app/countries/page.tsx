import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Globe, ArrowRight, ShieldCheck } from "lucide-react";
import { countries } from "@/data/countries";
import { getAllArticles } from "@/data/articles";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Target Countries & Jurisdictions Directory",
  description:
    "Explore country-specific problem-solving portals for the United States, United Kingdom, Canada, Australia, Pakistan, India, and Global solutions.",
};

export default function CountriesPage() {
  const allArticles = getAllArticles();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <Breadcrumbs items={[{ label: "Countries" }]} />

      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
          <Globe className="w-3.5 h-3.5" />
          <span>Local Legal & Administrative Portals</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950">
          Target Jurisdictions & Official Resources
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Because laws, tribunals, consumer rights, and public assistance programs differ drastically across borders, SolveAtlas organizes solutions under localized legal and institutional hubs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country) => {
          const countryGuides = allArticles.filter((a) => a.country === country.code);
          return (
            <div
              key={country.code}
              className="rounded-2xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-xl hover:border-emerald-300 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{country.flag}</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {countryGuides.length} {countryGuides.length === 1 ? "guide" : "guides"}
                  </span>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {country.name}
                  </h2>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {country.description}
                  </p>
                </div>

                {/* Key official agencies list */}
                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Verified Key Agencies:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {country.keyAgencies.slice(0, 3).map((agency, i) => (
                      <li key={i} className="flex items-start gap-1.5 truncate">
                        <ShieldCheck className="w-3.5 h-3.5 text-navy-700 shrink-0 mt-0.5" />
                        <span className="truncate">{agency.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={`/country/${country.code}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-emerald-600 text-slate-800 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs"
                >
                  <span>Enter {country.name} Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
