"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle2, ShieldAlert, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { countries } from "@/data/countries";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "us",
    subject: "general",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        country: "us",
        subject: "general",
        message: "",
      });
    }, 800);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      <div className="max-w-2xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch with Our Research Desk</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
          Contact SolveAtlas
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Have an undocumented problem you want us to research? Spotted an updated government regulation or broken link? Send our editorial team a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
          {status === "success" ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Message Received</h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out to SolveAtlas. A member of our editorial standards team will review your message within 1–2 business days.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Relevant Country
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    {countries.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="general">General Feedback</option>
                    <option value="request">Request a New Problem Guide</option>
                    <option value="correction">Report a Regulatory Update / Correction</option>
                    <option value="advertising">Advertising & Partnerships (AdSense)</option>
                    <option value="press">Press & Media Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Message / Problem Details *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe the issue, specific agency, or suggested correction with any relevant links..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {status === "error" && (
                <p className="text-xs text-rose-600 flex items-center gap-1 font-medium">
                  <ShieldAlert className="w-4 h-4" />
                  Please complete all required fields.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{status === "submitting" ? "Submitting..." : "Send to Editorial Desk"}</span>
              </button>
            </form>
          )}
        </div>

        {/* Support Details Sidebar (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-4">
            <h2 className="text-base font-bold text-slate-900">Direct Inquiries</h2>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Editorial & Fact-Checking:</strong>
                  <span className="text-slate-500">editorial@solveatlas.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Corrections & Updates:</strong>
                  <span className="text-slate-500">corrections@solveatlas.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Target Response Window:</strong>
                  <span className="text-slate-500">Within 24 to 48 business hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 text-xs text-slate-500 space-y-2">
            <strong className="text-slate-900 block font-semibold">Emergency & Legal Notice:</strong>
            <p className="leading-relaxed">
              SolveAtlas is an educational publication. If you are experiencing an immediate physical emergency, severe medical distress, or active violent fraud, please contact your local emergency services (911 in US/Canada, 999 in UK, 000 in Australia, 15 in Pakistan, 112/1930 in India) immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
