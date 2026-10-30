# Dellakkadawala Eco Resort Website

Official premium web presence for **Dellakkadawala Eco Resort**, a quiet village-style nature retreat nestled beside a natural river in Dellawa, Neluwa, Galle, Southern Province, Sri Lanka (near the Sinharaja Rainforest region).

## Overview

- **Location:** Dellawa, Neluwa, Galle, Sri Lanka ([Google Maps Location](https://maps.app.goo.gl/cu8JCZugJVCRpT719))
- **Key Experiences:** River bathing, gentle kayaking, quiet nature walks, family day visits, and small group gatherings.
- **Design Philosophy:** Luxury dark-forest palette (`#071F1A`), soft gold accents (`#C9A84C`), clean typography (Cormorant Garamond + Manrope), subtle glassmorphism, and smooth, responsive Framer Motion animations.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (with reduced motion support and SSR hydration safety)
- **Icons:** Lucide React
- **SEO & Metadata:** Automated Sitemap (`sitemap.xml`), Robots (`robots.txt`), OpenGraph cards, JSON-LD Schema (`LodgingBusiness`).

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the website.

3. Build for production:
   ```bash
   npm run build
   ```

4. Run linter:
   ```bash
   npm run lint
   ```

## Repository Structure

```
dellakkadawalaecoresort/
├── public/
│   ├── images/
│   │   ├── destinations/     # 6 nearby tourism destinations
│   │   ├── gallery/          # Real resort photography
│   │   ├── hero/             # High-resolution hero slides
│   │   └── logo.jpg          # Official resort emblem logo
│   └── favicon.ico
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── about/
│   │   ├── api/enquiry/
│   │   ├── contact/
│   │   ├── experiences/
│   │   ├── faq/
│   │   ├── gallery/
│   │   ├── location/
│   │   ├── stay/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── contact/
│   │   ├── faq/
│   │   ├── gallery/
│   │   ├── layout/           # Navbar, Footer
│   │   ├── sections/         # Homepage sections (Hero, About, Experiences, etc.)
│   │   ├── seo/              # JSON-LD Schema
│   │   └── ui/               # Reusable UI components & animations
│   └── lib/
│       ├── images.ts         # Typed image manifest
│       └── siteConfig.ts     # Central configuration & content
└── package.json
```
