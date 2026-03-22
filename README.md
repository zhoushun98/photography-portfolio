# Jason Photography Portfolio

A dark, immersive photography portfolio website built with Next.js, showcasing landscape and nature photography.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** — Utility-first styling with custom dark theme
- **Motion** (Framer Motion) — Scroll reveals, layout animations, lightbox transitions
- **next/image** — Automatic image optimization (WebP, lazy loading, blur-up)

## Pages

- `/` — Full-screen hero with featured works
- `/gallery` — Filterable photo grid (mountains, ocean, forest, starscape, sunset) with full-screen lightbox
- `/about` — Bio and contact info

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Managing Photos

Photos are defined in `src/data/photos.ts`. To add or replace photos:

1. Place image files in `public/photos/`
2. Add an entry to the `photos` array in `src/data/photos.ts`

## Build

```bash
npm run build
npm start
```

## Deploy

Deploy on [Vercel](https://vercel.com) for the best Next.js experience, or any platform that supports Node.js.
