import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Globe, ShieldCheck, ExternalLink, BookOpen } from "lucide-react";
import { countries, getCountryByCode } from "@/data/countries";
import { getArticlesByCountry } from "@/data/articles";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AdSlot } from "@/components/ads/AdSlot";

interface CountryPageProps {
  params: {
    code: string;
  };
}

export function generateStaticParams() {
  return countries.map((c) => ({
    code: c.code,
  }));
}

export function generateMetadata({ params }: CountryPageProps): Metadata {
  const country = getCountryByCode(params.code);
  if (!country) return { title: "Country Not Found" };

  return {
    title: `${country.name} Problem-Solving Guides & Official Portals`,
    description: `Verified solutions for ${country.name}: dispute administrative fees, navigate ${country.adjective} public services, access welfare rights, and protect consumer interests.`,
    openGraph: {
      title: `${country.name} Citizen & Consumer Problem-Solving Portal`,
      description: country.description,
    },
  };
}

export default function CountryDetailPage({ params }: CountryPageProps) {
  const country = getCountryByCode(params.code);

  if (!country) {
    notFound();
  }

  const articles = getArticlesByCountry(country.code);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      <Breadcrumbs
        items={[
          { label: "Countries", href: "/countries" },
          { label: `${country.flag} ${country.name}` },
        ]}
      />

      {/* Hero Header */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-navy-950 text-white p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl sm:text-5xl">{country.flag}</span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              <Globe className="w-3.5 h-3.5" />
              <span>{country.adjective} Regulatory Jurisdiction</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
            {country.name} Problem-Solving Hub
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {country.description}
          </p>
        </div>
      </div>

      {/* Official Government Agencies Box */}
      <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Verified {country.name} Official Authorities & Gateways
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600">
          SolveAtlas cross-references all guides with these accredited statutory bodies:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {country.keyAgencies.map((agency, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-slate-900">{agency.name}</h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 shrink-0">
                    Verified
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1">{agency.purpose}</p>
              </div>

              <div className="pt-2">
                <a
                  href={agency.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
                >
                  <span>Visit Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mid Page Ad Slot */}
      <AdSlot position="in-article" />

      {/* Available Guides Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-navy-950">
              Verified Guides for {country.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Showing {articles.length} detailed step-by-step solutions
            </p>
          </div>

          <Link
            href="/solutions"
            className="text-xs sm:text-sm font-semibold text-emerald-600 hover:underline"
          >
            Browse all countries →
          </Link>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 p-6 space-y-2">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-sm font-semibold text-slate-800">
              More {country.name} guides are currently undergoing legal verification.
            </p>
            <p className="text-xs text-slate-500">
              Need immediate assistance? Submit a question to our editorial research team.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-3 px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold"
            >
              Request a {country.name} Guide
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
