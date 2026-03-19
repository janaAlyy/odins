# ODIN Corporate Website

Production-ready multi-page corporate website for ODIN built with Next.js App Router, TypeScript, and TailwindCSS.

## Stack

- Next.js 14+ (App Router)
- TypeScript
- TailwindCSS
- Framer Motion (subtle motion)
- API Route form handling (`/api/contact`)

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Project Structure

- `app/`: routes and metadata-driven SEO pages
- `components/`: reusable UI/layout/sections
- `content/`: blog data, service data, contact submission store
- `lib/`: shared config and metadata helpers
- `public/brand/`: ODIN brand assets and placeholders

## Content Editing

- Core site copy and cards: `content/site-content.ts`
- Insights posts: `content/insights.ts`
- Contact submissions storage: `content/contact-submissions.json`
- Site metadata defaults and nav items: `lib/site.ts`

## SEO

- Per-page metadata in route files
- `app/sitemap.ts` generates sitemap.xml
- `app/robots.ts` generates robots.txt
- OpenGraph image placeholder: `public/brand/og-placeholder.svg`

## Contact Form Flow

- UI: `components/contact/contact-form.tsx`
- Backend handler: `app/api/contact/route.ts`
- Current behavior:
  - Validates required fields
  - Writes submission to `content/contact-submissions.json`
  - Logs payload to server console
  - Includes placeholder comment for email/CRM integration

## Analytics Placeholder

No tracking runs by default.

Enable placeholder script via:

```bash
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

Injected by `components/analytics-placeholder.tsx`.

## Deployment (Vercel)

1. Push repository to Git provider.
2. Import project in Vercel.
3. Set optional environment variable:
   - `NEXT_PUBLIC_ENABLE_ANALYTICS`
4. Deploy.

## Notes

- Dark-first UI is default.
- Branding assets include:
  - `public/brand/odin-eye.svg`
  - `public/brand/odin-wordmark.svg`
- 404 page and loading state include ODIN Eye motif treatment.
