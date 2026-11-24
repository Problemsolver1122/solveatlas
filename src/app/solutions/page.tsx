import React from "react";
import type { Metadata } from "next";
import { SolutionsClient } from "./SolutionsClient";
import { getAllArticles } from "@/data/articles";

export const metadata: Metadata = {
  title: "All Problem-Solving Guides & Solutions Library",
  description:
    "Explore our complete directory of verified, step-by-step problem-solving guides across North America, Europe, Asia, Australasia, and globally.",
};

export default function SolutionsPage() {
  const allArticles = getAllArticles();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <SolutionsClient initialArticles={allArticles} />
    </div>
  );
}
