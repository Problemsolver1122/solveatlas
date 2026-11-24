import React from "react";
import type { Metadata } from "next";
import { AlertTriangle, ShieldCheck, HeartPulse, Scale, Landmark } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Legal, Financial & Medical Disclaimer - SolveAtlas",
  description:
    "Important disclaimer regarding the informational nature of SolveAtlas problem-solving guides, non-affiliation with public authorities, and professional counsel advice.",
};

export default function DisclaimerPage() {
  const lastUpdated = "March 12, 2026";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      <Breadcrumbs items={[{ label: "Disclaimer" }]} />

      <div className="space-y-3 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
          <span>Statutory Limitation Notice</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950">
          Legal, Financial & Medical Disclaimer
        </h1>
        <p className="text-xs text-slate-500">
          Last Reviewed: <strong>{lastUpdated}</strong>
        </p>
      </div>

      {/* Prominent Callout Banner */}
      <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-6 text-amber-950 text-xs sm:text-sm leading-relaxed space-y-2">
        <strong className="text-sm font-bold text-amber-950 block">
          General Informational Notice:
        </strong>
        <p>
          SolveAtlas provides educational and research guides based on publicly available statutes, administrative procedures, and official portal interfaces. SolveAtlas is an independent publisher and is <strong>NOT</strong> a law firm, accounting practice, healthcare provider, or government entity. Reading our guides does not create an attorney-client, accountant-client, or doctor-patient relationship.
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-8">
        {/* Legal Advice Disclaimer */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-navy-700" />
            <h2 className="text-xl font-bold text-navy-950">1. Legal Advice Disclaimer</h2>
          </div>
          <p>
            The legal system varies significantly by nation, state, province, and local municipality. While our articles on tenant rights (such as Ontario LTB), consumer protection (such as the UK Consumer Rights Act 2015), and debt disputes reference current statutory acts, they are designed only as informational orientations.
          </p>
          <p>
            You should never make formal legal decisions, sign binding releases, or let court filing deadlines lapse based solely on online reading. If you are facing legal action, eviction, or lawsuits, always seek counsel from a licensed barrister, solicitor, or legal aid clinic in your jurisdiction.
          </p>
        </section>

        {/* Financial & Tax Disclaimer */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <Landmark className="w-5 h-5 text-emerald-700" />
            <h2 className="text-xl font-bold text-navy-950">2. Financial, Debt & Tax Disclaimer</h2>
          </div>
          <p>
            Content addressing medical bill disputes (such as the US No Surprises Act), superannuation recovery (ATO), international freelance remittances (SBP), or council tax banding does not constitute personalized financial planning or tax advice. Financial thresholds, tax deductions, and penalty exemptions depend entirely on your personal economic circumstances. Always consult a Certified Public Accountant (CPA) or licensed financial advisor for individual financial decisions.
          </p>
        </section>

        {/* Medical & Wellness Disclaimer */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-5 h-5 text-rose-600" />
            <h2 className="text-xl font-bold text-navy-950">3. Medical & Health Disclaimer</h2>
          </div>
          <p>
            Guides that discuss healthcare bureaucracy, hospital billing negotiations, or health wellness protocols are for administrative education only. SolveAtlas does not provide medical advice, diagnosis, or treatment. In any medical emergency, call emergency services immediately or visit an emergency room.
          </p>
        </section>

        {/* Government Non-Affiliation */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-700" />
            <h2 className="text-xl font-bold text-navy-950">4. Government Non-Affiliation Statement</h2>
          </div>
          <p>
            SolveAtlas is an independent international publication. We are not owned by, affiliated with, endorsed by, or operating on behalf of any federal, provincial, state, or municipal government authority, including but not limited to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li>United States: HUD, CMS, IRS, CFPB, FTC</li>
            <li>United Kingdom: GOV.UK, HMRC, VOA, DWP</li>
            <li>Canada: Service Canada, CRA, LTB</li>
            <li>Australia: Services Australia (Centrelink), ATO, Fair Work Ombudsman</li>
            <li>Pakistan: NADRA, FBR, SBP, FIA</li>
            <li>India: UIDAI, Ministry of Home Affairs (1930), EPFO</li>
          </ul>
          <p>
            All government marks, logos, and acronyms are used strictly under fair-use editorial descriptive principles.
          </p>
        </section>
      </div>
    </div>
  );
}
