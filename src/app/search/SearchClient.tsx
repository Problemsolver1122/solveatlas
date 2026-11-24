"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, Globe, BookOpen, X } from "lucide-react";
import { Article } from "@/data/types";
import { countries } from "@/data/countries";
import { categories } from "@/data/categories";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AdSlot } from "@/components/ads/AdSlot";

interface SearchClientProps {
  initialArticles: Article[];
}

export function SearchClient({ initialArticles }: SearchClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const urlQuery = searchParams.get("q") || "";
  const urlCountry = searchParams.get("country") || "all";
  const urlCategory = searchParams.get("category") || "all";

  const [query, setQuery] = useState(urlQuery);
  const [country, setCountry] = useState(urlCountry);
  const [category, setCategory] = useState(urlCategory);

  useEffect(() => {
    setQuery(urlQuery);
    setCountry(urlCountry);
    setCategory(urlCategory);
  }, [urlQuery, urlCountry, urlCategory]);

  const updateSearch = (newQ: string, newCountry: string, newCat: string) => {
    const params = new URLSearchParams();
    if (newQ.trim()) params.set("q", newQ.trim());
    if (newCountry !== "all") params.set("country", newCountry);
    if (newCat !== "all") params.set("category", newCat);
    router.replace(`/search?${params.toString()}`);
  };

  const results = useMemo(() => {
    const cleanQ = query.toLowerCase().trim();
    return initialArticles.filter((article) => {
      if (country !== "all" && article.country !== country) return false;
      if (category !== "all" && article.category !== category) return false;

      if (!cleanQ) return true;

      const matchesTitle = article.title.toLowerCase().includes(cleanQ);
      const matchesSummary = article.problemSummary.toLowerCase().includes(cleanQ);
      const matchesTags = article.tags.some((t) => t.toLowerCase().includes(cleanQ));
      const matchesFaq = article.faqs.some(
        (f) => f.question.toLowerCase().includes(cleanQ) || f.answer.toLowerCase().includes(cleanQ)
      );
      const matchesSteps = article.steps.some(
        (s) => s.title.toLowerCase().includes(cleanQ) || s.explanation.toLowerCase().includes(cleanQ)
      );

      return matchesTitle || matchesSummary || matchesTags || matchesFaq || matchesSteps;
    });
  }, [initialArticles, query, country, category]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSearch(query, country, category);
  };

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: "Search Results" }]} />

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950">
          Find Solutions
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
          Search verified guides across official portals, dispute mechanisms, and consumer protections.
        </p>
      </div>

      {/* Main Search Bar */}
      <form
        onSubmit={handleSearchSubmit}
        className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-4"
      >
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              updateSearch(e.target.value, country, category);
            }}
            placeholder="Type your problem (e.g. medical bill, NADRA, ATS, landlord, superannuation)..."
            className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 bg-white text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-xs"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                updateSearch("", country, category);
              }}
              className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          {/* Country Selector */}
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
                updateSearch(query, e.target.value, category);
              }}
              className="bg-transparent text-slate-700 font-medium focus:outline-none cursor-pointer"
              aria-label="Filter by country"
            >
              <option value="all">🌐 All Countries</option>
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Category Selector */}
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                updateSearch(query, country, e.target.value);
              }}
              className="bg-transparent text-slate-700 font-medium focus:outline-none cursor-pointer max-w-[200px]"
              aria-label="Filter by category"
            >
              <option value="all">📁 All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {(query || country !== "all" || category !== "all") && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCountry("all");
                setCategory("all");
                updateSearch("", "all", "all");
              }}
              className="text-xs text-emerald-700 font-semibold hover:underline"
            >
              Reset All
            </button>
          )}
        </div>
      </form>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>
          Found <strong className="text-slate-900">{results.length}</strong> matching{" "}
          {results.length === 1 ? "guide" : "guides"}
          {query && (
            <span>
              {" "}
              for &quot;<span className="text-slate-900 font-bold">{query}</span>&quot;
            </span>
          )}
        </span>
      </div>

      {/* Results Grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-3">
          <p className="text-base font-semibold text-slate-800">
            No exact matches found for your search criteria.
          </p>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try checking spelling, selecting &quot;All Countries&quot;, or choosing one of our popular topics below.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-2 max-w-md mx-auto">
            {["medical bill", "NADRA CNIC", "Aadhaar", "ATS resume", "unpaid super", "Instagram 2FA"].map((topic) => (
              <button
                key={topic}
                onClick={() => {
                  setQuery(topic);
                  updateSearch(topic, country, category);
                }}
                className="text-xs px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Ad Placement */}
      <AdSlot position="in-article" />
    </div>
  );
}
