import React from "react";
import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms and Conditions - SolveAtlas",
  description:
    "Terms of Service governing the use of SolveAtlas problem-solving guides, tools, and content.",
};

export default function TermsPage() {
  const lastUpdated = "March 12, 2026";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />

      <div className="space-y-3 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold">
          <FileText className="w-3.5 h-3.5" />
          <span>User Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950">
          Terms & Conditions
        </h1>
        <p className="text-xs text-slate-500">
          Effective Date: <strong>{lastUpdated}</strong>
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-6">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950">1. Acceptance of Terms</h2>
          <p>
            By accessing and browsing <strong>SolveAtlas</strong> (https://solveatlas.com), you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. If you disagree with any portion of these terms, your sole remedy is to cease using this website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950">2. Informational & Educational Use Only</h2>
          <p>
            All guides, checklists, sample templates, and tutorials published on SolveAtlas are provided strictly for educational, research, and general informational purposes. SolveAtlas does not offer certified legal representation, licensed accounting advice, formal medical diagnoses, or official government immigration representation.
          </p>
          <p>
            Statutory laws, agency regulations, court precedents, and government website interfaces change frequently. While our editorial team makes diligent efforts to verify procedures against primary legal sources, we cannot guarantee that information reflects statutory amendments enacted after an article&apos;s last updated date.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950">3. Intellectual Property Rights</h2>
          <p>
            The original text, structural arrangement, diagrams, and code of SolveAtlas are protected under copyright and international intellectual property laws. You may quote or link to our guides provided clear attribution with a direct hyperlink to the original SolveAtlas URL is maintained.
          </p>
          <p>
            Mass automated scraping, bulk copying of our guides into commercial datasets, or republishing our full text verbatim on mirror domains without express written permission is strictly prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950">4. Third-Party Links & Official Portals</h2>
          <p>
            SolveAtlas regularly links to third-party government websites (e.g. CMS.gov, GOV.UK, Service Canada, ATO.gov.au, NADRA, UIDAI). We do not control, operate, or assume responsibility for the content, privacy practices, or availability of external third-party servers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950">5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, SolveAtlas and its authors, editors, and contributors shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your reliance on or implementation of any guide, template, or suggestion found on this website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-navy-950">6. Modifications to Terms</h2>
          <p>
            We reserve the right to revise these Terms at any time. Material updates will be indicated by the &quot;Effective Date&quot; at the top of this document. Continued use of SolveAtlas following notice of changes constitutes acceptance of those revisions.
          </p>
        </section>
      </div>
    </div>
  );
}
