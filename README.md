# Ammar Yasser — Portfolio

A Next.js 15 + TypeScript portfolio site ready for Vercel / Cloudflare Pages.

## Stack
- **Framework**: Next.js 15 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Inline styles + global CSS (zero runtime CSS-in-JS deps)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # metadata, font imports
│   └── page.tsx          # root page — composes all sections
├── components/
│   ├── ui/
│   │   ├── Cursor.tsx         # custom magnetic cursor (desktop only)
│   │   ├── CosmosCanvas.tsx   # animated starfield background
│   │   └── NavBar.tsx         # sticky nav + hamburger menu (mobile)
│   ├── sections/
│   │   ├── Hero.tsx           # typewriter, parallax, count-up stats
│   │   ├── StatsBand.tsx      # animated numbers band
│   │   ├── Journey.tsx        # timeline cards
│   │   ├── Stack.tsx          # 18 custom SVG skill pills
│   │   ├── Quote.tsx          # signature quote
│   │   ├── Projects.tsx       # project cards (OpsLens, InfraDoc, TopoForge, APEX GP)
│   │   ├── Certs.tsx          # certification roadmap with progress bars
│   │   ├── Contact.tsx        # hire-me section + contact form
│   │   └── Footer.tsx
│   └── icons/
│       └── SkillIcon.tsx      # all 18 hand-drawn SVG tool logos
├── lib/
│   ├── data.ts           # ← EDIT THIS to update all site content
│   └── useReveal.ts      # IntersectionObserver scroll-reveal hook
└── styles/
    └── globals.css       # CSS variables, keyframes, shared classes
```

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # static export → /out
```

## Deploy to Vercel (one command)

```bash
npx vercel --prod
```

## Updating Content

All text, projects, skills, and certs live in `src/lib/data.ts`.  
No component changes needed for content updates.
