# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install deps
npm run dev        # dev server → http://localhost:3000
npm run build      # static export → ./out  (output: "export" in next.config.ts)
npm run start      # serve the production build
npm run lint       # eslint (eslint-config-next)
```

There is no test suite. `npm run build` doubles as the type/integration check — run it to validate changes.

Deploy: `npx vercel --prod`. The build is a fully static export, so the `out/` directory also drops onto Cloudflare Pages / S3 / any static host.

## Architecture

Single-page Next.js 15 (App Router) portfolio, React 19, TypeScript. **Statically exported** — no server runtime, no API routes, no server components doing data fetching. Treat everything as client-side.

**Content vs. presentation are deliberately separated:**

- `src/lib/data.ts` — single source of truth for *all* site content (bio, stats, journey timeline, skills, projects, certs, social links). To change what the site says, edit this file only; do not hardcode copy in components. Most arrays are `as const`.
- `src/components/sections/*` — one component per page section (Hero, StatsBand, Journey, Stack, Quote, Projects, Certs, Contact, Footer). Each reads from `data.ts` and renders it.
- `src/app/page.tsx` — the whole page; just composes the section components in order. It is `"use client"`, which makes the entire tree client-rendered.

**Styling has no framework or CSS-in-JS dependency.** Two mechanisms only:
1. Inline `React.CSSProperties` objects defined as `const ...Style` at the bottom of each component file (this is the dominant pattern — see `Hero.tsx`).
2. `src/styles/globals.css` — CSS custom properties (the color palette: `--void`, `--pulse`, `--ember`, `--gold`, `--violet`), shared classes (`.section`, `.section-label`, `.section-headline`, `.revealEl`), keyframes, and responsive `@media` rules. Imported once in `layout.tsx`.
   Reuse the existing CSS variables for colors rather than introducing new literals.

**Animations are hand-rolled with `useEffect` + DOM APIs** (no animation library):
- `src/lib/useReveal.ts` — `IntersectionObserver` hook that adds `.visible` to elements with class `.revealEl` as they scroll into view, with a staggered delay via `data-delay`. This is the standard scroll-in reveal; add `className="revealEl"` to opt an element in.
- `Hero.tsx` shows the other in-component patterns: count-up stats (`IntersectionObserver` + `setInterval`), typewriter (`TYPEWRITER_PHRASES` + recursive `setTimeout`), and scroll parallax (`scroll` listener mutating `style.transform`).

**UI chrome** lives in `src/components/ui/` — `CosmosCanvas` (animated starfield background), `Cursor` (custom magnetic cursor, desktop/`pointer: fine` only), `NavBar` (sticky, with mobile hamburger; its own `LINKS` array). `src/components/icons/SkillIcon.tsx` holds all 18 hand-drawn SVG tool logos consumed by `Stack.tsx`.

## Conventions

- Import via the `@/*` alias (`@/components/...`, `@/lib/...`) — maps to `src/*` (tsconfig `paths`).
- Any component using hooks/browser APIs needs `"use client"` at the top.
- TypeScript is `strict`. Keep inline-style objects typed as `React.CSSProperties`.

## Notes

- There is an empty stray directory literally named `{src` at the repo root — an accidental artifact, safe to ignore or delete.
- `SITE.email` in `data.ts` is a placeholder (`ammar@example.com`).
