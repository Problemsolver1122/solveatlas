import React from "react";
import Link from "next/link";
import {
  Globe,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  BookOpen,
  CheckCircle,
  Award,
  Clock,
  Layers,
  HelpCircle,
} from "lucide-react";
import { HeroSearch } from "@/components/common/HeroSearch";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { NewsletterSection } from "@/components/common/NewsletterSection";
import { AdSlot } from "@/components/ads/AdSlot";
import {
  getTrendingArticles,
  getPopularArticles,
  getAllArticles,
} from "@/data/articles";
import { countries } from "@/data/countries";
import { categories } from "@/data/categories";

export default function HomePage() {
  const trendingArticles = getTrendingArticles().slice(0, 4);
  const popularArticles = getPopularArticles().slice(0, 6);
  const allArticles = getAllArticles();
  const recentArticles = [...allArticles]
    .sort((a, b) => new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime())
    .slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/80 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Independent • Verified Official Resources • Free Access</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-950 font-sans leading-[1.15]">
            Real-Life Problems Solved With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Clear, Verified Steps.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            SolveAtlas helps people across the USA, UK, Canada, Australia, Pakistan, India, and worldwide dispute unfair charges, navigate government bureaucracy, recover digital accounts, and protect consumer rights.
          </p>

          {/* Hero Search Box */}
          <div className="pt-4 sm:pt-6">
            <HeroSearch />
          </div>

          {/* Key Guarantee Metrics */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-4xl mx-auto border-t border-slate-200/60 mt-10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">100% Free</span>
                <span className="text-[11px] text-slate-500">No paywalls or subscriptions</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Official Sources</span>
                <span className="text-[11px] text-slate-500">Government & statutory links</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">7 Country Hubs</span>
                <span className="text-[11px] text-slate-500">Localized jurisdictions</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Zero Filler</span>
                <span className="text-[11px] text-slate-500">Actionable step-by-step guides</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Countries Selector Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
              <Globe className="w-4 h-4" />
              <span>Country-Specific Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
              Select Your Country Jurisdiction
            </h2>
          </div>
          <Link
            href="/countries"
            className="text-xs sm:text-sm font-semibold text-emerald-600 hover:text-emerald-700 hover:underline flex items-center gap-1"
          >
            Explore all country hubs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {countries.map((country) => {
            const count = allArticles.filter((a) => a.country === country.code).length;
            return (
              <Link
                key={country.code}
                href={`/country/${country.code}`}
                className="group relative flex flex-col items-center text-center p-4 rounded-xl bg-white border border-slate-200/90 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/5 transition-all"
              >
                <span className="text-3xl sm:text-4xl mb-2 transform group-hover:scale-110 transition-transform">
                  {country.flag}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {country.name}
                </h3>
                <span className="text-[11px] text-slate-500 mt-0.5">
                  {count} {count === 1 ? "guide" : "guides"}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Trending Solutions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600">
              <TrendingUp className="w-4 h-4" />
              <span>High Search Volume & Urgent Help</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
              Trending Problem-Solving Guides
            </h2>
          </div>
          <Link
            href="/solutions"
            className="hidden sm:flex text-sm font-semibold text-emerald-600 hover:text-emerald-700 hover:underline items-center gap-1"
          >
            View all {allArticles.length} solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* Mid-Content Ad Slot */}
      <div className="max-w-5xl mx-auto px-4">
        <AdSlot position="in-article" />
      </div>

      {/* Browse by Category Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-navy-800 text-xs font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Problem Categories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
            Browse Solutions by Life Area
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Filter practical step-by-step guidance across financial disputes, employment rights, civic administration, and consumer technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const catArticles = allArticles.filter((a) => a.category === cat.id);
            return (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="group p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-emerald-50 text-slate-700 group-hover:text-emerald-700 flex items-center justify-center transition-colors mb-3">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-emerald-600">
                  <span>{catArticles.length} verified {catArticles.length === 1 ? "guide" : "guides"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popular Problems Section */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <Sparkles className="w-4 h-4" />
                <span>Most Helpful Citizen Guides</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
                Popular High-Impact Solutions
              </h2>
            </div>
            <Link
              href="/solutions"
              className="text-xs sm:text-sm font-semibold text-emerald-600 hover:text-emerald-700 hover:underline flex items-center gap-1"
            >
              Browse complete library →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Recently Published Guides */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-700">
              <Clock className="w-4 h-4" />
              <span>Latest Editorial Updates</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
              Recently Published & Updated Guides
            </h2>
          </div>
          <Link
            href="/solutions"
            className="text-xs sm:text-sm font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* Editorial Standards & Integrity Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Our Editorial Commitment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
              Why SolveAtlas is Different from Generic AI Blogs
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We do not publish automated filler or speculative claims. Every guide is researched by experienced policy analysts, verified against statutory legislation (such as the US No Surprises Act, UK Consumer Rights Act, Australian Superannuation Guarantee, and Pakistan SBP regulations), and cross-referenced with official portals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 font-medium">
                  Verified official agency URLs only
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 font-medium">
                  Step-by-step checklists with real templates
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 font-medium">
                  No deceptive affiliate lock-ins
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 font-medium">
                  Clear limitations & legal disclaimers
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Have a Complex Problem?</h3>
            <p className="text-xs text-slate-500">
              Suggest an undocumented administrative problem or request an investigation by our editorial team.
            </p>
            <Link
              href="/contact"
              className="inline-block w-full py-2.5 px-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              Request a Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterSection />
      </div>
    </div>
  );
}
