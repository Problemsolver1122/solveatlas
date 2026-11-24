"use client";

import React from "react";
import { FileCheck } from "lucide-react";

export function PrintButton() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="w-full py-2 px-3 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
    >
      <FileCheck className="w-3.5 h-3.5 text-slate-500" />
      <span>Print / Save as PDF</span>
    </button>
  );
}
