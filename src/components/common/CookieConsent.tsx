"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);
  const [adConsent, setAdConsent] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("solveatlas_cookie_consent");
      if (!stored) {
        // Small delay so it animates in smoothly without layout shift
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage unavailable
    }
  }, []);

  const savePreferences = (essential: boolean, analytics: boolean, ads: boolean) => {
    try {
      localStorage.setItem(
        "solveatlas_cookie_consent",
        JSON.stringify({
          essential: true,
          analytics,
          ads,
          date: new Date().toISOString(),
        })
      );
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    savePreferences(true, true, true);
  };

  const handleRejectNonEssential = () => {
    savePreferences(true, false, false);
  };

  const handleSaveCustom = () => {
    savePreferences(true, analyticsConsent, adConsent);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-slate-900/95 backdrop-blur-md text-white border-t border-slate-800 shadow-2xl transition-all animate-in fade-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="text-sm text-slate-300 leading-relaxed">
            <span className="font-semibold text-white block mb-0.5">We respect your privacy and data autonomy</span>
            SolveAtlas uses essential cookies for site functionality and optional cookies for anonymous traffic analytics and Google AdSense optimization. You can adjust your consent at any time. Read our{" "}
            <Link href="/privacy-policy" className="text-emerald-400 underline hover:text-emerald-300">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/cookie-policy" className="text-emerald-400 underline hover:text-emerald-300">
              Cookie Policy
            </Link>.
          </div>
        </div>

        {showPreferences ? (
          <div className="w-full md:w-auto flex flex-col gap-3 bg-slate-800 p-4 rounded-lg border border-slate-700 text-xs text-slate-300">
            <div className="flex items-center justify-between gap-4">
              <span>Strictly Essential (Required)</span>
              <span className="text-emerald-400 font-medium">Always Active</span>
            </div>
            <label className="flex items-center justify-between gap-4 cursor-pointer">
              <span>Analytics & Performance</span>
              <input
                type="checkbox"
                checked={analyticsConsent}
                onChange={(e) => setAnalyticsConsent(e.target.checked)}
                className="rounded border-slate-600 text-emerald-500 focus:ring-emerald-400 h-4 w-4"
              />
            </label>
            <label className="flex items-center justify-between gap-4 cursor-pointer">
              <span>Advertising & AdSense Personalization</span>
              <input
                type="checkbox"
                checked={adConsent}
                onChange={(e) => setAdConsent(e.target.checked)}
                className="rounded border-slate-600 text-emerald-500 focus:ring-emerald-400 h-4 w-4"
              />
            </label>
            <div className="flex items-center gap-2 pt-2 border-t border-slate-700">
              <button
                onClick={handleSaveCustom}
                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-medium transition-colors"
              >
                Save Choices
              </button>
              <button
                onClick={() => setShowPreferences(false)}
                className="px-3 py-1.5 text-slate-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto shrink-0 justify-end">
            <button
              onClick={() => setShowPreferences(true)}
              className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 rounded-md hover:bg-slate-800 transition-colors"
            >
              Preferences
            </button>
            <button
              onClick={handleRejectNonEssential}
              className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 rounded-md hover:bg-slate-800 transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-md shadow-sm transition-colors"
            >
              Accept All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
