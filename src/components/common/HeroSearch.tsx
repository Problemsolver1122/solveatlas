"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, Globe, ArrowRight, Sparkles, X, ChevronRight } from "lucide-react";
import { countries } from "@/data/countries";
import { articles } from "@/data/articles";
import { Article } from "@/data/types";

const POPULAR_SEARCH_PILLS = [
  { label: "Dispute medical bill", query: "medical bill", country: "us" },
  { label: "NADRA CNIC error", query: "NADRA CNIC", country: "pk" },
  { label: "Beat ATS resume", query: "ATS resume", country: "global" },
  { label: "Aadhaar update", query: "Aadhaar update", country: "in" },
  { label: "Recover hacked Instagram", query: "hacked Instagram", country: "global" },
  { label: "Cancel UK gym membership", query: "gym membership", country: "uk" },
  { label: "Unpaid superannuation", query: "unpaid superannuation", country: "au" },
  { label: "Section 8 vouchers", query: "Section 8", country: "us" },
];

export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [suggestions, setSuggestions] = useState<Article[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trimmed = query.trim().toLowerCase();
    if (trimmed.length >= 2) {
      const matches = articles
        .filter((article) => {
          if (selectedCountry !== "all" && article.country !== selectedCountry) {
            return false;
          }
          const matchesTitle = article.title.toLowerCase().includes(trimmed);
          const matchesTags = article.tags.some((t) => t.toLowerCase().includes(trimmed));
          const matchesSummary = article.problemSummary.toLowerCase().includes(trimmed);
          return matchesTitle || matchesTags || matchesSummary;
        })
        .slice(0, 5);
      setSuggestions(matches);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query, selectedCountry]);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const params = new URLSearchParams();
    params.set("q", query.trim());
    if (selectedCountry !== "all") {
      params.set("country", selectedCountry);
    }
    router.push(`/search?${params.toString()}`);
  };

  const handlePillClick = (searchQuery: string, countryCode?: string) => {
    const params = new URLSearchParams();
    params.set("q", searchQuery);
    if (countryCode && countryCode !== "all") {
      params.set("country", countryCode);
    }
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto">
      {/* Search Input Container */}
      <form
        onSubmit={handleSearchSubmit}
        className="relative bg-white rounded-2xl shadow-xl shadow-navy-950/10 border border-slate-200/90 p-2 sm:p-2.5 flex flex-col sm:flex-row items-center gap-2 transition-all focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500"
      >
        {/* Country Selector Inside Search */}
        <div className="relative w-full sm:w-auto shrink-0 flex items-center border-b sm:border-b-0 sm:border-r border-slate-200 pb-2 sm:pb-0 sm:pr-2">
          <Globe className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full sm:w-44 pl-9 pr-8 py-2 text-xs sm:text-sm font-medium text-slate-700 bg-transparent border-none rounded-lg focus:outline-none focus:ring-0 cursor-pointer"
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

        {/* Text Input */}
        <div className="relative flex-1 w-full flex items-center">
          <Search className="w-5 h-5 text-slate-400 absolute left-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {
              if (suggestions.length > 0) setIsOpen(true);
            }}
            placeholder="What problem can we help you solve today?"
            className="w-full pl-10 pr-9 py-2.5 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 bg-transparent border-none focus:outline-none focus:ring-0"
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setIsOpen(false);
              }}
              className="absolute right-2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-semibold text-sm shadow-md hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 shrink-0"
        >
          <span>Find Solution</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      {/* Autocomplete Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="relative z-50">
          <div className="absolute top-2 left-0 right-0 bg-white rounded-xl shadow-2xl border border-slate-200/90 overflow-hidden divide-y divide-slate-100 animate-in fade-in duration-150">
            <div className="px-4 py-2 bg-slate-50 text-[11px] font-semibold text-slate-600 uppercase tracking-wider flex items-center justify-between">
              <span>Suggested Verified Guides</span>
              <span className="text-[10px] text-slate-600 lowercase">Press enter for all results</span>
            </div>
            {suggestions.map((item) => (
              <Link
                key={item.slug}
                href={`/article/${item.slug}`}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 flex items-start justify-between gap-3 hover:bg-emerald-50/60 transition-colors group"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {countries.find((c) => c.code === item.country)?.flag}{" "}
                      {countries.find((c) => c.code === item.country)?.name}
                    </span>
                    <span className="text-xs text-slate-600">{item.readingTimeMinutes} min read</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-1">
                    {item.problemSummary}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0 mt-2" />
              </Link>
            ))}
            <div className="p-2 bg-slate-50 text-center">
              <button
                type="button"
                onClick={handleSearchSubmit}
                className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
              >
                View all results for &quot;{query}&quot; →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popular Problem Search Chips */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
        <span className="text-xs font-medium text-slate-600 flex items-center gap-1 mr-1">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          Popular searches:
        </span>
        {POPULAR_SEARCH_PILLS.map((pill) => (
          <button
            key={pill.label}
            type="button"
            onClick={() => handlePillClick(pill.query, pill.country)}
            className="text-xs px-2.5 py-1 rounded-full bg-white/90 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 border border-slate-200/90 shadow-sm transition-all"
          >
            {pill.label}
          </button>
        ))}
      </div>
    </div>
  );
}
