import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/common/CookieConsent";
import { AdSenseScript } from "@/components/ads/AdSenseScript";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { AdSlot } from "@/components/ads/AdSlot";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://solveatlas.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SolveAtlas - Practical Global Problem-Solving Guides",
    template: "%s | SolveAtlas",
  },
  description:
    "SolveAtlas helps people across the USA, UK, Canada, Australia, Pakistan, India, and worldwide resolve real-life financial, bureaucratic, digital, housing, and consumer problems through clear, verified guides.",
  keywords: [
    "problem solving guides",
    "dispute medical bill USA",
    "NADRA CNIC error correction",
    "beat ATS resume",
    "update Aadhaar online",
    "appeal UK council tax band",
    "recover unpaid super Australia",
    "recover hacked Instagram",
    "Ontario tenant rights LTB",
    "freelance payment Pakistan SBP",
    "consumer rights advice",
  ],
  authors: [{ name: "SolveAtlas Editorial Team", url: `${siteUrl}/about` }],
  creator: "SolveAtlas",
  publisher: "SolveAtlas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "SolveAtlas",
    title: "SolveAtlas - Practical Global Problem-Solving Guides",
    description:
      "Actionable, trustworthy solutions to real-life challenges for citizens and workers across North America, Europe, Asia, and Australasia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SolveAtlas - Global Problem-Solving Knowledge Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SolveAtlas - Practical Global Problem-Solving Guides",
    description:
      "Actionable, trustworthy solutions to real-life challenges across 6+ countries.",
    creator: "@solveatlas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SolveAtlas",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Independent problem-solving portal delivering verified procedural guides for consumer rights, public administration, and technology troubleshooting.",
    sameAs: [
      "https://twitter.com/solveatlas",
      "https://linkedin.com/company/solveatlas",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support & Corrections",
      url: `${siteUrl}/contact`,
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <AdSenseScript />
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased`}
      >
        <Navbar />

        {/* Global Header Ad Slot (Top of Page Banner) */}
        <div className="w-full bg-slate-50/50 border-b border-slate-100 py-2">
          <div className="max-w-7xl mx-auto px-4">
            <AdSlot position="header" />
          </div>
        </div>

        <main className="flex-1 w-full">{children}</main>

        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
