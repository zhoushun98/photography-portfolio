# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev        # Start dev server (Turbopack)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint check
```

## Architecture

Dark, immersive photography portfolio for landscape photographer Jason. Next.js 16 App Router with four routes:

- `/` — Full-screen hero image + featured works (photos with `featured: true`)
- `/gallery` — Category-filterable photo grid with full-screen lightbox viewer
- `/about` — Photographer bio and contact info
- `/contact` — Services overview (commercial licensing, fine art prints) and contact info

**Data layer:** All photo metadata lives in `src/data/photos.ts` as a static TypeScript array. Categories: mountains, ocean, forest, starscape, sunset. To add photos: place files in `public/photos/`, add entries to the `photos` array.

**Component patterns:** Most components are client components (`"use client"`) due to Motion animations and interactive state. `ScrollReveal` wraps content for viewport-triggered fade-in animations. `Lightbox` manages keyboard navigation (ESC, arrow keys) and body scroll lock.

**Styling:** Tailwind CSS v4 with custom CSS variables defined in `globals.css`. Dark theme only — background `#0a0a0a`, accent `#c8a45c` (warm gold). Film grain overlay via CSS pseudo-element on body. Typography: Cormorant (serif headings) + Outfit (sans-serif body), loaded via `next/font/google`.

**Animation:** Uses `motion` package (Framer Motion). Key patterns: `whileInView` for scroll reveals, `AnimatePresence` for lightbox image transitions, `layoutId` for category filter indicator animation.

## Key Constraint

Next.js 16 has breaking changes from earlier versions. Always consult `node_modules/next/dist/docs/` before using Next.js APIs.
