"use client";

import React, { useEffect } from "react";

export type AdPosition = "header" | "in-article" | "sidebar" | "bottom-article" | "footer";

interface AdSlotProps {
  position: AdPosition;
  slotId?: string;
  className?: string;
  showPlaceholder?: boolean;
}

export const AdSlot: React.FC<AdSlotProps> = ({
  position,
  slotId,
  className = "",
  showPlaceholder = true,
}) => {
  const adClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const isEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";

  useEffect(() => {
    if (isEnabled && adClientId && typeof window !== "undefined") {
      try {
        // @ts-expect-error - adsbygoogle is dynamically attached by Google script
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense push error:", err);
      }
    }
  }, [isEnabled, adClientId]);

  // Dimension helpers for optimal Google responsive ad performance
  const getDimensionClass = () => {
    switch (position) {
      case "header":
        return "min-h-[90px] max-w-5xl mx-auto";
      case "in-article":
        return "min-h-[250px] my-8 max-w-3xl mx-auto";
      case "sidebar":
        return "min-h-[600px] w-full";
      case "bottom-article":
        return "min-h-[250px] my-8 max-w-3xl mx-auto";
      case "footer":
        return "min-h-[90px] max-w-5xl mx-auto my-6";
      default:
        return "min-h-[100px]";
    }
  };

  // If live AdSense is active and configured
  if (isEnabled && adClientId && slotId) {
    return (
      <div className={`my-4 flex flex-col items-center justify-center overflow-hidden ${className}`}>
        <span className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">Advertisement</span>
        <ins
          className={`adsbygoogle block w-full text-center ${getDimensionClass()}`}
          data-ad-client={adClientId}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Safe, compliant placeholder when AdSense is pending setup
  if (!showPlaceholder) return null;

  return (
    <aside
      aria-label="Advertisement Placeholder"
      className={`relative my-6 rounded-lg border border-dashed border-slate-200 bg-slate-50/70 p-4 text-center text-slate-400 transition-all ${getDimensionClass()} flex flex-col items-center justify-center ${className}`}
    >
      <span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
        Advertisement Space
      </span>
      <p className="mt-1 text-xs text-slate-500 font-medium">
        {position === "header" && "Top Banner Slot (728x90 / Responsive)"}
        {position === "in-article" && "In-Article Native Slot (Responsive)"}
        {position === "sidebar" && "Desktop Sidebar Slot (300x600 / Sticky)"}
        {position === "bottom-article" && "End-of-Article Slot (Matched Content / Display)"}
        {position === "footer" && "Footer Anchor Ad Slot"}
      </p>
      <span className="mt-1.5 inline-block text-[11px] text-slate-400">
        Google AdSense Ready • Configure in <code className="bg-slate-200/80 px-1 py-0.5 rounded text-[10px] text-slate-600">.env.local</code>
      </span>
    </aside>
  );
};
