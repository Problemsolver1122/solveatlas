import React, { Suspense } from "react";
import type { Metadata } from "next";
import { SearchClient } from "./SearchClient";
import { getAllArticles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Search Problem-Solving Solutions",
  description:
    "Search thousands of verified guides across consumer rights, financial bureaucracy, account recovery, and citizen public services.",
};

export default function SearchPage() {
  const allArticles = getAllArticles();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <Suspense fallback={<div className="py-20 text-center text-sm text-slate-500">Loading search engine...</div>}>
        <SearchClient initialArticles={allArticles} />
      </Suspense>
    </div>
  );
}
