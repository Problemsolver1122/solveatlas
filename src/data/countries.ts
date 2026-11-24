import { CountryInfo } from "./types";

export const countries: CountryInfo[] = [
  {
    code: "us",
    slug: "united-states",
    name: "United States",
    flag: "🇺🇸",
    adjective: "American",
    description: "Verified problem-solving guides for US federal and state systems, personal finance, consumer rights, housing, and healthcare bureaucracy.",
    keyAgencies: [
      { name: "Consumer Financial Protection Bureau (CFPB)", url: "https://www.consumerfinance.gov", purpose: "Consumer finance dispute support" },
      { name: "Centers for Medicare & Medicaid Services (CMS)", url: "https://www.cms.gov/nosurprises", purpose: "No Surprises Act and medical billing rights" },
      { name: "Department of Housing and Urban Development (HUD)", url: "https://www.hud.gov", purpose: "Rental assistance and housing rights" },
      { name: "Federal Trade Commission (FTC)", url: "https://reportfraud.ftc.gov", purpose: "Identity theft and fraud reporting" }
    ]
  },
  {
    code: "uk",
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    adjective: "British",
    description: "Clear solutions for UK council tax appeals, energy rights, tenant disputes, NHS navigation, HMRC tax questions, and employment regulations.",
    keyAgencies: [
      { name: "GOV.UK", url: "https://www.gov.uk", purpose: "Central gateway for UK public services" },
      { name: "Citizens Advice", url: "https://www.citizensadvice.org.uk", purpose: "Independent confidential consumer and legal guidance" },
      { name: "Financial Ombudsman Service", url: "https://www.financial-ombudsman.org.uk", purpose: "Banking, loan, and insurance complaint resolution" },
      { name: "Valuation Office Agency (VOA)", url: "https://www.gov.uk/government/organisations/valuation-office-agency", purpose: "Council tax band valuations and appeals" }
    ]
  },
  {
    code: "ca",
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    adjective: "Canadian",
    description: "Step-by-step guidance for Canadian provincial tenant boards, CRA tax filings, passport services, consumer protection, and employment standards.",
    keyAgencies: [
      { name: "Canada.ca (Service Canada)", url: "https://www.canada.ca", purpose: "Federal government services, passports, and EI" },
      { name: "Canada Revenue Agency (CRA)", url: "https://www.canada.ca/en/revenue-agency.html", purpose: "Tax administration and family benefit programs" },
      { name: "Ontario Landlord and Tenant Board (LTB)", url: "https://tribunalsontario.ca/ltb/", purpose: "Residential tenancy dispute resolution" },
      { name: "Canadian Anti-Fraud Centre", url: "https://antifraudcentre-centreantifraude.ca", purpose: "Reporting identity theft and consumer scams" }
    ]
  },
  {
    code: "au",
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    adjective: "Australian",
    description: "Practical guides for navigating Centrelink appeals, Australian Taxation Office (ATO) superannuation recovery, fair work disputes, and consumer law.",
    keyAgencies: [
      { name: "Services Australia (Centrelink / Medicare)", url: "https://www.servicesaustralia.gov.au", purpose: "Social security and healthcare claims" },
      { name: "Australian Taxation Office (ATO)", url: "https://www.ato.gov.au", purpose: "Superannuation and tax compliance" },
      { name: "Fair Work Ombudsman", url: "https://www.fairwork.gov.au", purpose: "Workplace rights, unpaid wages, and awards" },
      { name: "Scamwatch (ACCC)", url: "https://www.scamwatch.gov.au", purpose: "National scam alerts and reporting portal" }
    ]
  },
  {
    code: "pk",
    slug: "pakistan",
    name: "Pakistan",
    flag: "🇵🇰",
    adjective: "Pakistani",
    description: "Actionable solutions for NADRA card corrections, passport processing, FBR tax filing, State Bank of Pakistan freelance payment setups, and consumer issues.",
    keyAgencies: [
      { name: "NADRA Pak-Identity", url: "https://id.nadra.gov.pk", purpose: "Online CNIC, NICOP, and family registration services" },
      { name: "Federal Board of Revenue (FBR)", url: "https://fbr.gov.pk", purpose: "Taxpayer registration and Active Taxpayer List (ATL)" },
      { name: "State Bank of Pakistan (SBP)", url: "https://www.sbp.org.pk", purpose: "Freelancer foreign remittance regulations" },
      { name: "Federal Investigation Agency (FIA) Cybercrime", url: "https://complaint.fia.gov.pk", purpose: "Online harassment, banking fraud, and cybercrime" }
    ]
  },
  {
    code: "in",
    slug: "india",
    name: "India",
    flag: "🇮🇳",
    adjective: "Indian",
    description: "Trustworthy step-by-step roadmaps for Aadhaar updates, National Cyber Crime portal reporting, PAN-Aadhaar linking, consumer forum filings, and EPFO claims.",
    keyAgencies: [
      { name: "Unique Identification Authority of India (UIDAI)", url: "https://myaadhaar.uidai.gov.in", purpose: "Aadhaar authentication and details update" },
      { name: "National Cyber Crime Reporting Portal", url: "https://cybercrime.gov.in", purpose: "Reporting cyber fraud and immediate 1930 helpline" },
      { name: "Employees' Provident Fund Organisation (EPFO)", url: "https://unifiedportal-mem.epfindia.gov.in", purpose: "PF balance withdrawal and transfer" },
      { name: "National Consumer Helpline (NCH)", url: "https://consumerhelpline.gov.in", purpose: "Consumer dispute resolution and company mediation" }
    ]
  },
  {
    code: "global",
    slug: "global-solutions",
    name: "Global Solutions",
    flag: "🌐",
    adjective: "International",
    description: "Universal guides for digital account security, ATS resume optimization, generative AI workflow automation, international freelancing, and device troubleshooting.",
    keyAgencies: [
      { name: "Have I Been Pwned", url: "https://haveibeenpwned.com", purpose: "Data breach checking and credential security" },
      { name: "Meta Security Center", url: "https://www.instagram.com/hacked", purpose: "Compromised social account recovery" },
      { name: "Microsoft Support & Sysinternals", url: "https://support.microsoft.com", purpose: "Operating system diagnostics and clean boot utilities" },
      { name: "Internet Crime Complaint Center (IC3)", url: "https://www.ic3.gov", purpose: "Cross-border internet fraud reporting" }
    ]
  }
];

export function getCountryByCode(code: string): CountryInfo | undefined {
  return countries.find((c) => c.code.toLowerCase() === code.toLowerCase());
}

export function getCountryBySlug(slug: string): CountryInfo | undefined {
  return countries.find((c) => c.slug.toLowerCase() === slug.toLowerCase() || c.code.toLowerCase() === slug.toLowerCase());
}
