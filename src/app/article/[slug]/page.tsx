import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
} from "lucide-react";
import {
  getAllArticles,
  getArticleBySlug,
} from "@/data/articles";
import { countries } from "@/data/countries";
import { categories } from "@/data/categories";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ShareButtons } from "@/components/common/ShareButtons";
import { ArticleFaqAccordion } from "@/components/article/ArticleFaqAccordion";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { AdSlot } from "@/components/ads/AdSlot";
import { PrintButton } from "@/components/article/PrintButton";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: "Article Not Found" };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solveatlas.com";
  const canonicalUrl = `${siteUrl}/article/${article.slug}`;

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: canonicalUrl,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authors: [article.author.name],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const countryObj = countries.find((c) => c.code === article.country);
  const categoryObj = categories.find((c) => c.id === article.category);
  const allArticles = getAllArticles();
  const relatedArticles = allArticles
    .filter(
      (a) =>
        a.slug !== article.slug &&
        (article.relatedSlugs?.includes(a.slug) ||
          a.category === article.category ||
          a.country === article.country)
    )
    .slice(0, 3);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solveatlas.com";
  const articleUrl = `${siteUrl}/article/${article.slug}`;

  // Structured Data: Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "SolveAtlas",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    keywords: article.tags.join(", "),
  };

  // Structured Data: FAQ Schema (Only for visible FAQs)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Solutions", href: "/solutions" },
          { label: categoryObj?.name || "Category", href: `/category/${categoryObj?.slug || "general"}` },
          { label: article.title },
        ]}
      />

      {/* Article Header */}
      <header className="space-y-4 max-w-4xl border-b border-slate-200 pb-8">
        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <Link
            href={`/country/${article.country}`}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
          >
            <span>{countryObj?.flag || "🌐"}</span>
            <span>{countryObj?.name || "Global"}</span>
          </Link>

          <Link
            href={`/category/${categoryObj?.slug || "general"}`}
            className="inline-flex items-center px-3 py-1 rounded-full font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors"
          >
            {categoryObj?.name || article.category}
          </Link>

          <span className="flex items-center gap-1 text-slate-500 font-medium ml-auto">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readingTimeMinutes} min read</span>
          </span>
        </div>

        {/* H1 Article Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 font-sans tracking-tight leading-tight">
          {article.title}
        </h1>

        {/* Author & Verification Meta */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-navy-800 text-white flex items-center justify-center font-bold text-sm shrink-0">
              {article.author.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-900">{article.author.name}</span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[10px] bg-emerald-100 text-emerald-800 font-semibold">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Verified Analyst
                </span>
              </div>
              <span className="text-[11px] text-slate-500">{article.author.role}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-500 text-xs">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Published: {article.publishedDate}
            </span>
            <span>•</span>
            <span className="text-emerald-700 font-medium">
              Updated: {article.updatedDate}
            </span>
          </div>
        </div>

        {/* Social Share Bar */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <ShareButtons title={article.title} url={`/article/${article.slug}`} />
        </div>
      </header>

      {/* Main Layout: Article Content + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Main Content (8 cols) */}
        <div className="lg:col-span-8 space-y-10">
          {/* Executive Problem Summary Box */}
          <div className="rounded-2xl bg-slate-50 border-l-4 border-emerald-500 p-5 sm:p-6 text-slate-800 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Executive Problem Summary
            </h2>
            <p className="text-sm sm:text-base leading-relaxed font-medium">
              {article.problemSummary}
            </p>
          </div>

          {/* Top of Article Ad Slot */}
          <AdSlot position="in-article" />

          {/* Section: The Problem Explained */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-navy-950 flex items-center gap-2">
              <span className="w-2 h-6 bg-navy-700 rounded-full" />
              <span>Understanding the Problem</span>
            </h2>
            <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
              <p>{article.theProblemExplained}</p>
            </div>
          </section>

          {/* Section: Why it Happens */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-navy-950 flex items-center gap-2">
              <span className="w-2 h-6 bg-navy-700 rounded-full" />
              <span>Why This Problem Happens</span>
            </h2>
            <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
              <p>{article.whyItHappens}</p>
            </div>
          </section>

          {/* Section: Step-by-Step Action Plan */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <span>Step-by-Step Action Plan</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Execute these verified steps in chronological order:
              </p>
            </div>

            <div className="space-y-6">
              {article.steps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs space-y-4 relative overflow-hidden"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                      {step.stepNumber}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed pl-11">
                    {step.explanation}
                  </p>

                  {/* Key Actions Checklist */}
                  <div className="pl-11 space-y-2 pt-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Specific Actions to Take:
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      {step.keyActions.map((action, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pro Tip Box if available */}
                  {step.proTip && (
                    <div className="ml-11 mt-3 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs sm:text-sm flex items-start gap-2.5">
                      <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold block">Insider Tip:</strong>
                        <span>{step.proTip}</span>
                      </div>
                    </div>
                  )}

                  {/* Caution Box if available */}
                  {step.caution && (
                    <div className="ml-11 mt-3 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold block">Important Warning:</strong>
                        <span>{step.caution}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section: Practical Real-World Example */}
          <section className="rounded-2xl bg-navy-950 text-white p-6 sm:p-8 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
              Case Study / Practical Example
            </span>
            <h3 className="text-lg font-bold text-white">
              Real-World Scenario:
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
              &quot;{article.realWorldExample.scenario}&quot;
            </p>
            <div className="pt-2 border-t border-slate-800">
              <strong className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                Verified Outcome:
              </strong>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {article.realWorldExample.outcome}
              </p>
            </div>
          </section>

          {/* Section: Official Resources */}
          <section className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl font-bold text-slate-900">
                Official Portals & Statutory Resources
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Never use unverified third-party intermediaries. Use these official government and institutional gateways:
            </p>

            <div className="space-y-3 pt-2">
              {article.officialResources.map((res, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900">{res.title}</h3>
                      {res.isOfficial && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Official
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">{res.description}</p>
                    <span className="text-[11px] font-medium text-slate-400 block">
                      Authority: {res.organization}
                    </span>
                  </div>

                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shrink-0 self-start sm:self-center"
                  >
                    <span>Open Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Jurisdiction Caveats */}
          {article.jurisdictionNotes && (
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-1">
              <strong className="text-slate-800 font-semibold block">
                Jurisdiction & Statutory Scope:
              </strong>
              <p>{article.jurisdictionNotes}</p>
            </div>
          )}

          {/* Section: Frequently Asked Questions */}
          <section className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-950">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Common edge-cases and legal clarifications:
              </p>
            </div>
            <ArticleFaqAccordion faqs={article.faqs} />
          </section>

          {/* Bottom Article Ad Slot */}
          <AdSlot position="bottom-article" />

          {/* Author Bio Card */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col sm:flex-row items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-navy-900 text-white font-bold text-lg flex items-center justify-center shrink-0">
              {article.author.name.charAt(0)}
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Author & Researcher
                </span>
                <h3 className="text-base font-bold text-slate-900">{article.author.name}</h3>
                <p className="text-xs text-emerald-700 font-semibold">{article.author.role}</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {article.author.credentials} {article.author.bio}
              </p>
              <div className="text-[11px] text-slate-400 pt-1">
                Peer-reviewed by SolveAtlas Standards Desk on {article.updatedDate}.
              </div>
            </div>
          </section>

          {/* Disclaimer within article */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-500 leading-relaxed">
            <strong>Disclaimer:</strong> This guide is compiled for informational and educational purposes using publicly verifiable statutory documentation and official portals. SolveAtlas does not provide legal, medical, or financial advice. For binding representation, please consult a licensed professional or legal aid society in your jurisdiction.
          </div>
        </div>

        {/* Desktop Sidebar (4 cols) */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Table of Contents Box */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 sticky top-24">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              In this guide
            </span>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2 hover:text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Executive Problem Summary</span>
              </li>
              <li className="flex items-center gap-2 hover:text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>The Problem Explained</span>
              </li>
              <li className="flex items-center gap-2 hover:text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Step-by-Step Action Plan ({article.steps.length} Steps)</span>
              </li>
              <li className="flex items-center gap-2 hover:text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Practical Case Study</span>
              </li>
              <li className="flex items-center gap-2 hover:text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Official Resources & Helplines</span>
              </li>
              <li className="flex items-center gap-2 hover:text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Frequently Asked Questions</span>
              </li>
            </ul>

            {/* Sidebar Ad Placement */}
            <div className="pt-4 border-t border-slate-100">
              <AdSlot position="sidebar" />
            </div>

            {/* Print Guide Button */}
            <PrintButton />
          </div>
        </aside>
      </div>

      {/* Related Guides Section */}
      {relatedArticles.length > 0 && (
        <section className="pt-12 border-t border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-navy-950">
              Related Problem-Solving Guides
            </h2>
            <Link
              href="/solutions"
              className="text-xs sm:text-sm font-semibold text-emerald-600 hover:underline"
            >
              Browse all solutions →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.slug} article={rel} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
