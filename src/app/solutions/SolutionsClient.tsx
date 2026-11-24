"use client";

import React, { useState, useMemo } from "react";
import { Search, Globe, SlidersHorizontal, BookOpen, X } from "lucide-react";
import { Article } from "@/data/types";
import { countries } from "@/data/countries";
import { categories } from "@/data/categories";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AdSlot } from "@/components/ads/AdSlot";

interface SolutionsClientProps {
  initialArticles: Article[];
}

export function SolutionsClient({ initialArticles }: SolutionsClientProps) {
  const [query, setQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState<"newest" | "popular" | "readingTime">("newest");

  const filteredArticles = useMemo(() => {
    return initialArticles
      .filter((article) => {
        // Country filter
        if (selectedCountry !== "all" && article.country !== selectedCountry) {
          return false;
        }

        // Category filter
        if (selectedCategory !== "all" && article.category !== selectedCategory) {
          return false;
        }

        // Search Query
        if (query.trim()) {
          const q = query.toLowerCase().trim();
          const matchesTitle = article.title.toLowerCase().includes(q);
          const matchesSummary = article.problemSummary.toLowerCase().includes(q);
          const matchesTags = article.tags.some((t) => t.toLowerCase().includes(q));
          return matchesTitle || matchesSummary || matchesTags;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "newest") {
          return new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime();
        }
        if (sortBy === "readingTime") {
          return a.readingTimeMinutes - b.readingTimeMinutes;
        }
        if (sortBy === "popular") {
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
        }
        return 0;
      });
  }, [initialArticles, query, selectedCountry, selectedCategory, sortBy]);

  const resetFilters = () => {
    setQuery("");
    setSelectedCountry("all");
    setSelectedCategory("all");
  };

  return (
    <div className="space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "All Solutions" }]} />

      {/* Header Title */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950">
          All Problem-Solving Guides
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Search and filter practical, verified roadmaps to overcome consumer fraud, public welfare hurdles, tech glitches, and bureaucratic disputes across 7 jurisdictions.
        </p>
      </div>

      {/* Filter and Control Bar */}
      <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter by keyword (e.g. medical bill, NADRA, ATS, landlord, superannuation)..."
            className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter selectors row */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            {/* Country Dropdown */}
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="bg-transparent text-slate-700 font-medium focus:outline-none cursor-pointer"
                aria-label="Filter by country"
              >
                <option value="all">All Countries</option>
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Dropdown */}
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5">
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-transparent text-slate-700 font-medium focus:outline-none cursor-pointer max-w-[200px]"
                aria-label="Filter by category"
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Button */}
            {(query || selectedCountry !== "all" || selectedCategory !== "all") && (
              <button
                onClick={resetFilters}
                className="px-2.5 py-1.5 rounded-lg text-emerald-700 hover:bg-emerald-50 font-semibold transition-colors"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "newest" | "popular" | "readingTime")}
              className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 font-medium focus:outline-none cursor-pointer"
              aria-label="Sort guides"
            >
              <option value="newest">Recently Updated</option>
              <option value="popular">Most Helpful / Popular</option>
              <option value="readingTime">Shortest Read Time</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
        <span>
          Showing <strong className="text-slate-900">{filteredArticles.length}</strong> of{" "}
          {initialArticles.length} solutions
        </span>
        {selectedCountry !== "all" && (
          <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-semibold">
            Filtered by {countries.find((c) => c.code === selectedCountry)?.name}
          </span>
        )}
      </div>

      {/* Main Grid with Sidebar Ad Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-3">
              <p className="text-base font-semibold text-slate-800">
                No solutions found matching your filters.
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try broadening your search term, resetting the country selector, or requesting an investigation.
              </p>
              <button
                onClick={resetFilters}
                className="mt-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Desktop Sidebar Ad Slot */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <AdSlot position="sidebar" />
            <div className="bg-navy-950 text-white p-5 rounded-2xl border border-slate-800 space-y-3 text-xs">
              <span className="font-bold text-emerald-400 uppercase tracking-wider block">
                Need Help?
              </span>
              <p className="text-slate-300 leading-relaxed">
                If your specific issue is not covered yet, our editorial desk accepts community requests.
              </p>
              <a
                href="/contact"
                className="inline-block w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-center rounded-lg font-semibold transition-colors"
              >
                Submit Problem
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
