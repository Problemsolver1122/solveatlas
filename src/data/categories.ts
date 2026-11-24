import { CategoryInfo } from "./types";

export const categories: CategoryInfo[] = [
  {
    id: "money-finance",
    slug: "money-finance",
    name: "Money & Personal Finance",
    icon: "Wallet",
    description: "Practical guides to dispute inaccurate bills, eliminate hidden fees, manage debt safely, and maximize legitimate government financial relief.",
    popularSearches: ["dispute medical bill", "unpaid superannuation", "international freelance payment", "cancel high interest debt"]
  },
  {
    id: "jobs-careers",
    slug: "jobs-careers",
    name: "Jobs & Careers",
    icon: "Briefcase",
    description: "Proven strategies for beating applicant tracking systems (ATS), addressing unpaid employer contributions, negotiating contracts, and remote work.",
    popularSearches: ["ATS resume format", "unpaid superannuation ATO", "remote interview preparation", "employment contract dispute"]
  },
  {
    id: "technology-ai",
    slug: "technology-ai",
    name: "Technology & AI",
    icon: "Cpu",
    description: "Clear solutions for computer crashes, slow systems, hardware troubleshooting, and practical generative AI prompt workflows for daily tasks.",
    popularSearches: ["windows 11 high CPU interrupts", "generative AI prompts for admin", "fix slow wifi connection", "recover lost files"]
  },
  {
    id: "education",
    slug: "education",
    name: "Education",
    icon: "GraduationCap",
    description: "Navigating university credit transfers, accessing accredited free certifications, resolving student loan discrepancies, and adult reskilling.",
    popularSearches: ["free accredited certifications", "student loan dispute", "degree equivalency assessment", "scholarship applications"]
  },
  {
    id: "housing-rent",
    slug: "housing-rent",
    name: "Housing & Rent",
    icon: "Home",
    description: "Navigating tenancy laws, Section 8 housing vouchers, landlord dispute tribunals, unfair deposit deductions, and habitability standards.",
    popularSearches: ["Section 8 housing vouchers US", "Ontario LTB tenant dispute", "unlawful eviction notice", "recover rental security deposit"]
  },
  {
    id: "government-services",
    slug: "government-services",
    name: "Government & Public Services",
    icon: "Landmark",
    description: "Demystifying bureaucratic processes: updating official citizen IDs, correcting vital records, and appealing administrative benefit decisions.",
    popularSearches: ["NADRA CNIC error correction", "update Aadhaar details online", "appeal UK council tax band", "Centrelink debt appeal"]
  },
  {
    id: "consumer-rights",
    slug: "consumer-rights",
    name: "Consumer Rights",
    icon: "ShieldAlert",
    description: "Enforcing statutory warranties, canceling recurring subscription traps, issuing formal chargebacks, and filing small claims complaints.",
    popularSearches: ["cancel gym membership UK law", "credit card chargeback guide", "defective product refund rights", "airline flight delay compensation"]
  },
  {
    id: "internet-safety",
    slug: "internet-safety",
    name: "Internet & Online Safety",
    icon: "ShieldCheck",
    description: "Recovering hijacked social accounts, freezing stolen identities, reporting financial cybercrime, and securing personal digital footprints.",
    popularSearches: ["recover hacked Instagram 2FA", "report cyber financial scam 1930", "freeze credit after breach", "phishing email response"]
  },
  {
    id: "health-wellness",
    slug: "health-wellness",
    name: "Health & Everyday Wellness",
    icon: "HeartPulse",
    description: "Navigating healthcare billing disputes, understanding prescription assistance programs, insurance prior authorizations, and ergonomics.",
    popularSearches: ["No Surprises Act medical bill", "health insurance appeal denied claim", "prescription savings programs", "workplace ergonomic setup"]
  },
  {
    id: "travel-immigration",
    slug: "travel-immigration",
    name: "Travel & Immigration Information",
    icon: "Plane",
    description: "Step-by-step roadmaps for urgent lost passport replacements, visa appointment backlog navigation, and cross-border transit regulations.",
    popularSearches: ["replace lost Canadian passport urgent", "transit visa requirements", "lost passport abroad protocol", "international driving permit"]
  },
  {
    id: "small-business",
    slug: "small-business",
    name: "Small Business",
    icon: "Store",
    description: "Actionable playbooks for freelance compliance, invoicing overdue clients, setting up legal merchant processors, and low-cost digital tools.",
    popularSearches: ["freelance payment Pakistan SBP", "overdue invoice legal notice", "incorporation checklist", "small business AI workflow"]
  },
  {
    id: "daily-life",
    slug: "daily-life",
    name: "Daily Life Solutions",
    icon: "LifeBuoy",
    description: "Practical troubleshooting for domestic issues, appliance error codes, utility supplier switching, and household emergency preparedness.",
    popularSearches: ["switch energy supplier lower bills", "troubleshoot water heater error", "unclog drainage without plumber", "organize vital family documents"]
  }
];

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return categories.find((c) => c.slug.toLowerCase() === slug.toLowerCase() || c.id.toLowerCase() === slug.toLowerCase());
}
