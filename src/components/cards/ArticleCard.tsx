import React from "react";
import Link from "next/link";
import { Clock, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Article } from "@/data/types";
import { countries } from "@/data/countries";
import { categories } from "@/data/categories";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const countryObj = countries.find((c) => c.code === article.country);
  const categoryObj = categories.find((c) => c.id === article.category);

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-navy-950/5 hover:-translate-y-1 hover:border-emerald-300 ${
        featured ? "ring-2 ring-emerald-500/30" : ""
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200/70">
              <span>{countryObj?.flag || "🌐"}</span>
              <span>{countryObj?.name || "Global"}</span>
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/60">
              {categoryObj?.name || article.category}
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs text-slate-600 font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{article.readingTimeMinutes} min</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
          <Link href={`/article/${article.slug}`}>
            <span className="absolute inset-0 z-10" />
            {article.title}
          </Link>
        </h3>

        {/* Problem summary */}
        <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
          {article.problemSummary}
        </p>

        {/* Actionable points metadata */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-600">
          <span className="flex items-center gap-1 text-emerald-700 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            {article.steps.length} Step Guide
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-slate-600">
            <ShieldCheck className="w-3.5 h-3.5 text-navy-700" />
            {article.officialResources.length} Official Portals
          </span>
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-1.5">
          <span className="font-medium text-slate-700">{article.author.name}</span>
          <span className="text-slate-500">•</span>
          <span>Updated {article.updatedDate}</span>
        </div>

        <span className="text-emerald-600 font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
          Read Guide <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
}
