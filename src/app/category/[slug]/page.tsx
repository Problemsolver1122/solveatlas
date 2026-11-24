import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BookOpen, Sparkles, Layers } from "lucide-react";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getArticlesByCategory } from "@/data/articles";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AdSlot } from "@/components/ads/AdSlot";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) return { title: "Category Not Found" };

  return {
    title: `${cat.name} Problem-Solving Guides`,
    description: `Verified solutions and actionable checklists for ${cat.name}. ${cat.description}`,
    openGraph: {
      title: `${cat.name} - SolveAtlas Practical Guides`,
      description: cat.description,
    },
  };
}

export default function CategoryDetailPage({ params }: CategoryPageProps) {
  const cat = getCategoryBySlug(params.slug);

  if (!cat) {
    notFound();
  }

  const articles = getArticlesByCategory(cat.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      <Breadcrumbs
        items={[
          { label: "Categories", href: "/categories" },
          { label: cat.name },
        ]}
      />

      {/* Hero Header */}
      <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
          <Layers className="w-3.5 h-3.5" />
          <span>Category Knowledge Base</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
          {cat.name}
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          {cat.description}
        </p>

        {/* Popular searches in this category */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Frequently asked:
          </span>
          {cat.popularSearches.map((term, i) => (
            <Link
              key={i}
              href={`/search?q=${encodeURIComponent(term)}`}
              className="text-xs bg-slate-800 hover:bg-emerald-600/30 border border-slate-700 text-slate-300 hover:text-white px-2.5 py-1 rounded-full transition-colors"
            >
              {term}
            </Link>
          ))}
        </div>
      </div>

      {/* Mid Page Ad Placement */}
      <AdSlot position="in-article" />

      {/* Articles Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-navy-950">
            Available {cat.name} Guides ({articles.length})
          </h2>
          <Link
            href="/solutions"
            className="text-xs sm:text-sm font-semibold text-emerald-600 hover:underline"
          >
            All solutions →
          </Link>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300 p-6 space-y-2">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-sm font-semibold text-slate-800">
              New guides in {cat.name} are currently in editorial peer-review.
            </p>
            <p className="text-xs text-slate-500">
              Submit your specific question to our research desk for priority coverage.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-3 px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold"
            >
              Request a Guide in {cat.name}
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
