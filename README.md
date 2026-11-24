# SolveAtlas — Global Problem-Solving Knowledge Platform

SolveAtlas is a modern, high-speed, SEO-optimized web application engineered to help citizens across the **United States, United Kingdom, Canada, Australia, Pakistan, India, and worldwide** solve real-life bureaucratic, consumer, digital, housing, and financial challenges with verified, step-by-step guides.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, SolveAtlas is designed from the ground up for high organic Google Search rankings, Core Web Vitals performance, and Google AdSense monetization.

---

## Table of Contents
1. [How to Run the Website Locally](#1-how-to-run-the-website-locally)
2. [How to Edit Website Content](#2-how-to-edit-website-content)
3. [How to Add New Articles Easily](#3-how-to-add-new-articles-easily)
4. [How to Deploy for Free (Vercel)](#4-how-to-deploy-for-free-vercel)
5. [How to Connect a Custom Domain](#5-how-to-connect-a-custom-domain)
6. [How to Add & Activate Google AdSense](#6-how-to-add--activate-google-adsense)
7. [How to Connect Google Search Console](#7-how-to-connect-google-search-console)
8. [How to Configure ads.txt](#8-how-to-configure-adstxt)
9. [Architecture Overview](#9-architecture-overview)

---

## 1. How to Run the Website Locally

### Prerequisites
- Node.js 18.17+ or 20.x installed (`node -v`)
- npm 9+ or 10+ (`npm -v`)

### Steps
1. Navigate to the project root directory:
   ```bash
   cd C:\Users\RC\.gemini\antigravity\scratch\solveatlas
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Ensure your `.env.local` file exists:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_ADSENSE_ENABLED=false
   NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-0000000000000000
   NEXT_PUBLIC_GA_MEASUREMENT_ID=
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
   ```

4. Launch the local development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 2. How to Edit Website Content

The website is cleanly organized into modular data files:

- **Site Brand & Meta**: Configure titles, descriptions, and OpenGraph defaults in `src/app/layout.tsx`.
- **Target Countries**: Edit names, flags, descriptions, and verified statutory agencies in `src/data/countries.ts`.
- **Categories**: Edit category titles, descriptions, icons, and common search phrases in `src/data/categories.ts`.
- **Editorial Board & Authors**: Edit researcher names, bios, credentials, and roles in `src/data/authors.ts`.
- **Navigation Menus**: Edit top navbar links in `src/components/layout/Navbar.tsx` and footer links in `src/components/layout/Footer.tsx`.
- **Legal Policies**: Update text in `src/app/privacy-policy/page.tsx`, `src/app/terms/page.tsx`, `src/app/disclaimer/page.tsx`, and `src/app/cookie-policy/page.tsx`.

---

## 3. How to Add New Articles Easily

Adding a new article does **NOT** require writing HTML or rebuilding the whole website. Simply append a new article object to the `articles` array in `src/data/articles.ts`.

### Article Schema Template
```typescript
{
  slug: "your-article-slug-here",
  title: "How to [Solve a Specific Problem] in [Country or Global]",
  metaTitle: "SEO Optimized Title (Under 60 Characters)",
  metaDescription: "Clear meta description explaining the solution and benefits (150-160 characters).",
  country: "us", // 'us' | 'uk' | 'ca' | 'au' | 'pk' | 'in' | 'global'
  category: "money-finance", // Check src/data/categories.ts for category IDs
  publishedDate: "2026-03-15",
  updatedDate: "2026-03-15",
  readingTimeMinutes: 7,
  author: authors["marcus-vance"], // Or any author defined in src/data/authors.ts
  tags: ["keyword 1", "keyword 2", "official portal"],
  isFeatured: false,
  isTrending: true,
  isPopular: true,
  problemSummary: "Clear 2-3 sentence overview of the dilemma faced by the citizen.",
  theProblemExplained: "Detailed background explaining the friction and how ordinary people get stuck.",
  whyItHappens: "The root causes: administrative delays, automated code errors, or lack of public awareness.",
  steps: [
    {
      stepNumber: 1,
      title: "Title of First Actionable Step",
      explanation: "Detailed, clear procedural instruction written in plain human English.",
      keyActions: [
        "First specific action item to take.",
        "Second specific action item to take."
      ],
      proTip: "Optional insider tip to save time or avoid common mistakes.",
      caution: "Optional warning about common legal or financial pitfalls."
    }
  ],
  realWorldExample: {
    scenario: "Realistic scenario describing a real or composite case.",
    outcome: "How following the steps successfully resolved the issue."
  },
  officialResources: [
    {
      title: "Name of Official Government Portal",
      organization: "Statutory Authority / Agency",
      url: "https://www.official-agency.gov",
      isOfficial: true,
      description: "What the user should do on this portal."
    }
  ],
  jurisdictionNotes: "Scope of laws (e.g. Applicable in all 50 US States under CFR Title 45).",
  faqs: [
    {
      question: "Common edge case question?",
      answer: "Clear, authoritative answer clarifying the law or procedure."
    }
  ],
  relatedSlugs: ["related-article-slug-1", "related-article-slug-2"]
}
```

### What Happens Automatically When You Add an Article:
1. **Dynamic URL**: Instantly available at `/article/your-article-slug-here`.
2. **Search Index**: Instantly searchable in the Hero Search, All Solutions page, and live autocomplete.
3. **Country Hub**: Automatically listed on the country portal (e.g. `/country/us`).
4. **Category Hub**: Automatically categorized on the category archive (e.g. `/category/money-finance`).
5. **Google Sitemap**: Dynamically appended to `/sitemap.xml`.
6. **SEO Structured Data**: Auto-generates JSON-LD `Article`, `FAQPage`, and `BreadcrumbList` schemas.

---

## 4. How to Deploy for Free (Vercel)

SolveAtlas is 100% compatible with Vercel's free hobby tier.

### Option A: Using the Vercel Git Integration (Recommended)
1. Initialize a Git repository and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of SolveAtlas"
   ```
2. Push your project to GitHub, GitLab, or Bitbucket.
3. Go to [https://vercel.com](https://vercel.com) and click **"Add New Project"**.
4. Import your SolveAtlas repository.
5. In **Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-project.vercel.app` (or your custom domain)
   - `NEXT_PUBLIC_ADSENSE_ENABLED` = `false` (change to `true` once AdSense is approved)
   - `NEXT_PUBLIC_ADSENSE_CLIENT_ID` = `ca-pub-XXXXXXXXXXXXXXXX`
6. Click **Deploy**. Your site will be live worldwide on a global CDN within 90 seconds.

### Option B: Using the Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 5. How to Connect a Custom Domain

1. In your **Vercel Project Dashboard**, navigate to **Settings** > **Domains**.
2. Enter your custom domain name (e.g. `solveatlas.com`).
3. Vercel will display the required DNS records:
   - **A Record**: `@` pointing to `76.76.21.21`
   - **CNAME Record**: `www` pointing to `cname.vercel-dns.com`
4. Log into your domain registrar (Namecheap, GoDaddy, Cloudflare, Google Domains, etc.) and add those records to your DNS settings.
5. Once DNS propagates (typically 5 to 30 minutes), Vercel automatically generates a free SSL/TLS certificate (HTTPS).
6. Update your `NEXT_PUBLIC_SITE_URL` environment variable to `https://solveatlas.com`.

---

## 6. How to Add & Activate Google AdSense

SolveAtlas includes five pre-configured, responsive, and policy-compliant AdSense slots:
- **Header**: Top banner above main content
- **In-Article**: Native slot positioned between explanation and action steps
- **Sidebar**: Sticky 300x600 responsive ad unit for desktop readers
- **Bottom-of-Article**: Positioned after FAQs and before author bio
- **Footer**: Anchor ad space above the footer navigation

### Step 1: Apply to Google AdSense
1. Visit [https://adsense.google.com](https://adsense.google.com) and create an account with your custom domain (`https://solveatlas.com`).
2. Google will provide you with an AdSense Publisher ID in the format: `ca-pub-XXXXXXXXXXXXXXXX`.

### Step 2: Configure Environment Variables
In your Vercel Dashboard or local `.env.local`:
```env
NEXT_PUBLIC_ADSENSE_ENABLED=true
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
```
When `NEXT_PUBLIC_ADSENSE_ENABLED` is `true`:
- The Google AdSense script is automatically injected via `<AdSenseScript />`.
- Real responsive `<ins className="adsbygoogle" ...>` units will render in place of the placeholder boxes.

---

## 7. How to Connect Google Search Console

1. Go to [https://search.google.com/search-console](https://search.google.com/search-console).
2. Choose **URL Prefix** and enter `https://solveatlas.com` (or choose Domain verification via DNS TXT record).
3. If choosing **HTML Tag verification**, copy the verification code string (e.g. `google-site-verification=XXXXXXXXXXXXXXXXXXXX`).
4. Paste it into your `.env.local` or Vercel environment variables:
   ```env
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=XXXXXXXXXXXXXXXXXXXX
   ```
5. Click **Verify** in Search Console.
6. Under the **Sitemaps** tab in Google Search Console, submit:
   ```
   https://solveatlas.com/sitemap.xml
   ```
   Google will begin indexing your homepage, all 7 country hubs, all 12 categories, and every article automatically.

---

## 8. How to Configure ads.txt

Google AdSense requires an `ads.txt` file in the root directory to verify that you are the authorized seller of advertising on your domain.

SolveAtlas already includes `public/ads.txt`.
Open `public/ads.txt` and replace the placeholder with your actual Publisher ID:
```
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```
*(Replace `pub-XXXXXXXXXXXXXXXX` with your digits, leaving out the `ca-` prefix).*

Once deployed, verify it in your browser:
```
https://solveatlas.com/ads.txt
```

---

## 9. Architecture Overview

```
solveatlas/
├── public/
│   ├── ads.txt                # AdSense ads.txt verification
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with SEO, Schema.org, Header AdSlot
│   │   ├── page.tsx           # Modern Homepage with Search Hero & Country Grid
│   │   ├── sitemap.ts         # Dynamic XML Sitemap generator
│   │   ├── robots.ts          # Search engine crawler directives
│   │   ├── solutions/         # All Solutions directory with live filters & sort
│   │   ├── countries/         # All 7 target countries overview
│   │   ├── country/[code]/    # Dedicated country portal (US, UK, CA, AU, PK, IN, Global)
│   │   ├── categories/        # All 12 problem categories overview
│   │   ├── category/[slug]/   # Category archive page
│   │   ├── article/[slug]/    # Deep article reader with JSON-LD Article & FAQ schemas
│   │   ├── search/            # Full-featured keyword & filter search engine
│   │   ├── about/             # Editorial standards & fact-checking methodology
│   │   ├── contact/           # Responsive contact form & corrections desk
│   │   ├── privacy-policy/    # GDPR, CCPA & AdSense compliant privacy policy
│   │   ├── terms/             # Terms and Conditions
│   │   ├── disclaimer/        # Legal, Medical & Financial Disclaimer
│   │   └── cookie-policy/     # Cookie policy with consent reset mechanism
│   ├── components/
│   │   ├── ads/               # AdSlot & AdSenseScript
│   │   ├── analytics/         # GoogleAnalytics (GA4)
│   │   ├── article/           # ArticleFaqAccordion
│   │   ├── cards/             # ArticleCard
│   │   ├── common/            # HeroSearch, CookieConsent, Breadcrumbs, ShareButtons, Newsletter
│   │   └── layout/            # Navbar & Footer
│   └── data/
│       ├── types.ts           # Full TypeScript data contracts
│       ├── countries.ts       # 7 target countries metadata & official portals
│       ├── categories.ts      # 12 life problem categories
│       ├── authors.ts         # Verified researcher profiles & credentials
│       └── articles.ts        # 16 comprehensive, verified problem-solving articles
├── tailwind.config.ts         # Custom navy & emerald design tokens
└── tsconfig.json
```

---

## Editorial Guarantee
SolveAtlas strictly follows a **Zero Fake Information Policy**:
- No fabricated facts, statistics, or government agencies.
- Real phone numbers, actual statutory Acts, and direct official agency URLs.
- Clear limitations for sensitive legal, financial, and medical topics.
- Completely free access for all visitors.
