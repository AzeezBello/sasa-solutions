# SASA Solutions

SASA Solutions is a marketing site for a residential and commercial cleaning brand built with Next.js App Router, React 19, Tailwind CSS v4, and reusable UI primitives. The project is optimized around lead generation: it presents service information, builds trust with testimonials, offers an instant pricing calculator, and carries quote context into a structured contact brief.

## What this project includes

- A multi-page marketing site with `Home`, `Services`, `About`, and `Contact` routes.
- A pricing calculator that estimates a quote from service type, property size, and room count.
- A quote-request handoff that carries calculator selections into the contact brief.
- Static SEO fundamentals including metadata, sitemap, robots rules, manifest, JSON-LD, and generated Open Graph and Twitter images.
- Shared content and pricing configuration stored in code for easy updates.

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn-style UI primitives

## Project structure

```text
app/
  about/page.tsx              About page
  contact/page.tsx            Contact page and Suspense boundary
  services/page.tsx           Services page
  globals.css                 Global theme and layout styling
  layout.tsx                  Root layout and sitewide structured data
  manifest.ts                 Web app manifest
  opengraph-image.tsx         Generated social image
  robots.ts                   Crawl directives
  sitemap.ts                  XML sitemap entries
  twitter-image.tsx           Twitter image alias
components/
  ContactBriefBuilder.tsx     Quote-request builder
  PricingCalculator.tsx       Instant quote estimator
  StructuredData.tsx          JSON-LD script renderer
  ...                         Marketing sections and UI primitives
lib/
  pricing.ts                  Shared pricing and quote serialization helpers
  seo.ts                      Metadata and structured data builders
  site.ts                     Site content, services, and SEO copy
```

## Getting started

### Prerequisites

- Node.js 20 or later
- npm 10 or later

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available scripts

- `npm run dev`: start the local development server.
- `npm run build`: create a production build with Next.js defaults.
- `npm run build:webpack`: create a production build with the Webpack fallback. This is useful in restricted environments where Turbopack may not be available.
- `npm run start`: run the production server after building.
- `npm run lint`: run ESLint across the repository.

## Environment variables

Copy `.env.example` to `.env.local` and update the values for your environment.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes for production SEO | Absolute public site URL used for canonical URLs, sitemap entries, robots host, structured data, and social metadata. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional | Enables the contact brief page to open a prefilled email draft. |

### Example

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://www.your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=quotes@your-domain.com
```

## SEO setup

The project now ships with a production-ready SEO baseline:

- Canonical metadata for each route.
- Open Graph and Twitter card metadata.
- Generated social preview image routes at `/opengraph-image` and `/twitter-image`.
- `robots.txt` generated from `app/robots.ts`.
- `sitemap.xml` generated from `app/sitemap.ts`.
- `manifest.webmanifest` generated from `app/manifest.ts`.
- JSON-LD structured data for the organization, website, pages, and service catalog.

### Files responsible for SEO

- `lib/seo.ts`
  Handles metadata generation, absolute URL creation, and JSON-LD builders.
- `app/layout.tsx`
  Injects sitewide structured data for the organization and website.
- `app/page.tsx`
  Adds homepage and service-catalog structured data.
- `app/about/page.tsx`
  Adds About page structured data.
- `app/services/page.tsx`
  Adds Services page structured data and service catalog schema.
- `app/contact/page.tsx`
  Adds Contact page structured data.
- `app/sitemap.ts`
  Declares crawlable pages and priorities.
- `app/robots.ts`
  Declares indexing policy and points crawlers to the sitemap.
- `app/opengraph-image.tsx`
  Generates the default social share image.

### Important production note

`NEXT_PUBLIC_SITE_URL` should always be set in production. Without it, the project falls back to `http://localhost:3000`, which is fine for local development but not appropriate for canonical URLs or sitemaps on a live domain.

## Content and branding updates

Most site content is centralized in `lib/site.ts`.

Update this file when you want to change:

- Site name, short name, and default description
- SEO keywords
- CTA labels and URLs
- Service names, descriptions, and pricing inputs
- Testimonial themes and trust metrics
- Social image copy

### Services and pricing

The service catalog and quote estimator share the same data source.

- `lib/site.ts` stores the service titles, highlights, and base pricing inputs.
- `lib/pricing.ts` converts those values into quote ranges and builds contact-page handoff URLs.

If you change service pricing in `lib/site.ts`, the calculator and contact brief import flow will update automatically.

## Contact flow

The lead-capture flow is intentionally lightweight and code-first:

1. A visitor chooses a service and estimate in the pricing calculator.
2. The calculator sends those values to `/contact` through query parameters.
3. The contact brief page reads those parameters and includes the imported estimate in the quote summary.
4. The visitor can copy the final request brief or open it in an email client if `NEXT_PUBLIC_CONTACT_EMAIL` is configured.

This is a good interim pattern before adding a form backend, CRM, or email automation.

## Deployment checklist

Before deploying:

1. Set `NEXT_PUBLIC_SITE_URL` to the real production domain.
2. Optionally set `NEXT_PUBLIC_CONTACT_EMAIL`.
3. Run `npm run lint`.
4. Run `npm run build` or `npm run build:webpack` if your environment requires the fallback.
5. Verify these routes after deploy:
   - `/`
   - `/about`
   - `/services`
   - `/contact`
   - `/robots.txt`
   - `/sitemap.xml`
   - `/manifest.webmanifest`
   - `/opengraph-image`

## Customization guide

### Update the brand voice

Edit the shared copy in `lib/site.ts` and the section components inside `components/`.

### Add more pages to SEO

If you add a new page:

1. Export route metadata with `buildMetadata(...)`.
2. Add page-specific JSON-LD with `StructuredData` if it improves discoverability.
3. Add the route to `app/sitemap.ts`.

### Replace the generated social image

Edit `app/opengraph-image.tsx`. The Twitter image route re-exports the same generated image by default.

### Add a real submission backend

The current contact brief is UI-only. You can connect it to:

- a server action
- a route handler
- a CRM form endpoint
- an email delivery provider

The safest next step is to preserve the existing summary format and send it to your preferred backend.

## Validation

Recommended validation steps:

```bash
npm run lint
npm run build:webpack
```

Then manually verify:

- metadata in browser devtools
- `/robots.txt`
- `/sitemap.xml`
- Open Graph card previews
- contact brief import flow from the pricing calculator

## Notes

- The repository currently uses static content and does not require a CMS.
- Structured data is intentionally conservative and avoids making claims that are not explicitly represented in the codebase.
- The README assumes a single-domain deployment.
