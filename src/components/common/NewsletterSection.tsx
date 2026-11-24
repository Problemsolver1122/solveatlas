"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ShieldAlert } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setMessage("Thank you! You are subscribed to SolveAtlas Weekly Solution Briefs.");
      setEmail("");
    }, 600);
  };

  return (
    <section className="my-16 rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
          <Mail className="w-3.5 h-3.5" />
          <span>SolveAtlas Problem-Solver Dispatch</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans">
          Never Get Caught Unprepared by Bureaucracy or Scams
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Join 45,000+ informed global citizens. Receive weekly actionable guides to dispute unfair charges, protect your family online, and access legitimate government benefits.
        </p>

        {status === "success" ? (
          <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-sm flex items-center justify-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{message}</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-2.5 max-w-md mx-auto pt-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="Enter your email address..."
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md shrink-0 disabled:opacity-50"
            >
              {status === "loading" ? "Subscribing..." : "Get Free Guides"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-xs text-rose-300 flex items-center justify-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5" />
            {message}
          </p>
        )}

        <p className="text-[11px] text-slate-400 pt-1">
          Strictly zero spam. Unsubscribe at any time with a single click. We never sell your contact information.
        </p>
      </div>
    </section>
  );
}
