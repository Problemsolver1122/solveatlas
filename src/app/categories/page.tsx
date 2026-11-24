import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, Layers } from "lucide-react";
import { categories } from "@/data/categories";
import { getAllArticles } from "@/data/articles";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Problem Categories Directory - SolveAtlas",
  description:
    "Explore all 12 problem-solving categories across finance, employment, technology, public services, housing, and consumer safety.",
};

export default function CategoriesPage() {
  const allArticles = getAllArticles();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <Breadcrumbs items={[{ label: "Categories" }]} />

      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>Knowledge Structure</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950">
          Browse Solutions by Category
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Access specialized procedural guides organized across 12 practical life domains. Every guide provides verified legal statutes, step-by-step checklists, and direct official agency links.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const count = allArticles.filter((a) => a.category === cat.id).length;
          return (
            <div
              key={cat.id}
              className="rounded-2xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-xl hover:border-emerald-400 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-emerald-50 text-slate-700 group-hover:text-emerald-700 flex items-center justify-center transition-colors">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {count} {count === 1 ? "guide" : "guides"}
                  </span>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Popular searches under category */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Common dilemmas:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cat.popularSearches.map((term, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-slate-50 border border-slate-200/60 rounded px-1.5 py-0.5 text-slate-600"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={`/category/${cat.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-emerald-600 text-slate-800 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Explore {cat.name}</span>
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
