"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Compass,
  Search,
  Globe,
  Menu,
  X,
  ChevronDown,
  BookOpen,
} from "lucide-react";
import { countries } from "@/data/countries";
import { categories } from "@/data/categories";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const pathname = usePathname();

  const closeAll = () => {
    setMobileMenuOpen(false);
    setCountryDropdownOpen(false);
    setCategoryDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md transition-all shadow-sm">
      {/* Top micro-banner for global announcement */}
      <div className="bg-slate-900 text-slate-300 px-4 py-1.5 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              VERIFIED GUIDES
            </span>
            <span className="hidden sm:inline">Official portals & actionable step-by-step solutions for 6+ countries</span>
            <span className="sm:hidden">Official step-by-step solutions</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/about" className="hover:text-white transition-colors">
              Editorial Standards
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Request a Guide
            </Link>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={closeAll}
          className="flex items-center gap-2.5 group shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center text-emerald-400 shadow-md group-hover:shadow-emerald-500/10 transition-all border border-navy-700/50">
            <Compass className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-navy-950 font-sans">
                Solve<span className="text-emerald-600">Atlas</span>
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-slate-600 font-semibold -mt-1">
              Global Problem Solver
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-700">
          <Link
            href="/solutions"
            className={`px-3 py-2 rounded-md transition-colors hover:text-navy-900 hover:bg-slate-100 ${
              pathname === "/solutions" ? "text-emerald-600 bg-emerald-50 font-semibold" : ""
            }`}
          >
            All Solutions
          </Link>

          {/* Countries Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setCountryDropdownOpen(!countryDropdownOpen);
                setCategoryDropdownOpen(false);
              }}
              onMouseEnter={() => setCountryDropdownOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-md hover:text-navy-900 hover:bg-slate-100 transition-colors"
            >
              <Globe className="w-4 h-4 text-emerald-600" />
              <span>Countries</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${countryDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {countryDropdownOpen && (
              <div
                onMouseLeave={() => setCountryDropdownOpen(false)}
                className="absolute left-0 mt-1 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
              >
                <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                  Select Country Portal
                </div>
                {countries.map((country) => (
                  <Link
                    key={country.code}
                    href={`/country/${country.code}`}
                    onClick={() => setCountryDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-emerald-700 rounded-lg transition-colors"
                  >
                    <span className="text-base">{country.flag}</span>
                    <span className="font-medium">{country.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setCategoryDropdownOpen(!categoryDropdownOpen);
                setCountryDropdownOpen(false);
              }}
              onMouseEnter={() => setCategoryDropdownOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-md hover:text-navy-900 hover:bg-slate-100 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-navy-700" />
              <span>Categories</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${categoryDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {categoryDropdownOpen && (
              <div
                onMouseLeave={() => setCategoryDropdownOpen(false)}
                className="absolute left-0 mt-1 w-80 rounded-xl border border-slate-200 bg-white p-2 shadow-xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150 z-50 grid grid-cols-1 gap-0.5 max-h-[420px] overflow-y-auto"
              >
                <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                  Problem Categories
                </div>
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    onClick={() => setCategoryDropdownOpen(false)}
                    className="flex items-center justify-between px-3 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 rounded-lg transition-colors"
                  >
                    <span>{cat.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="px-3 py-2 rounded-md transition-colors hover:text-navy-900 hover:bg-slate-100"
          >
            About Us
          </Link>
        </div>

        {/* Right CTA / Quick Search */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/search"
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-navy-950 rounded-full border border-slate-200/80 transition-all shadow-inner"
          >
            <Search className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Search problems...</span>
            <span className="sm:hidden">Search</span>
          </Link>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-navy-950 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
          <Link
            href="/solutions"
            onClick={closeAll}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            All Solutions
          </Link>

          <div>
            <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
              Countries
            </div>
            <div className="grid grid-cols-2 gap-1 mt-1">
              {countries.map((c) => (
                <Link
                  key={c.code}
                  href={`/country/${c.code}`}
                  onClick={closeAll}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-emerald-50 rounded-lg"
                >
                  <span>{c.flag}</span>
                  <span>{c.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
              Categories
            </div>
            <div className="grid grid-cols-1 gap-1 mt-1">
              {categories.slice(0, 8).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug}`}
                  onClick={closeAll}
                  className="px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded-lg block"
                >
                  {cat.name}
                </Link>
              ))}
              <Link
                href="/categories"
                onClick={closeAll}
                className="px-3 py-1.5 text-sm font-semibold text-emerald-600 hover:underline block"
              >
                View all 12 categories →
              </Link>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-1">
            <Link
              href="/about"
              onClick={closeAll}
              className="px-3 py-1.5 text-sm text-slate-600 hover:text-navy-950"
            >
              About Us & Fact-Checking
            </Link>
            <Link
              href="/contact"
              onClick={closeAll}
              className="px-3 py-1.5 text-sm text-slate-600 hover:text-navy-950"
            >
              Contact Support
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
