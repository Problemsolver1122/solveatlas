"use client";

import React, { useEffect } from "react";

export type AdPosition = "header" | "in-article" | "sidebar" | "bottom-article" | "footer";

interface AdSlotProps {
  position: AdPosition;
  slotId?: string;
  className?: string;
  /** @deprecated No longer used — kept for backward-compatibility only. */
  showPlaceholder?: boolean;
}

export const AdSlot: React.FC<AdSlotProps> = ({
  position,
  slotId,
  className = "",
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

  // If live AdSense is active and all credentials are configured — render the real ad unit
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

  // AdSense not configured or disabled — render nothing, no placeholder box shown
  return null;
};
