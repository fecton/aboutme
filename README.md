# Andrii Lytvynenko - Personal Portfolio

> https://alytvynenko.net

Senior DevOps & Cloud Engineer portfolio built with Next.js 16, Tailwind CSS, and Framer Motion. Features an Apple/Telegram-inspired design with glassmorphism, bento grid layout, and dark mode.

The site is a **static export** (`output: "export"`) deployed to GitHub Pages. There is no Node server in production.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS **v3** (do not auto-upgrade to v4 — PostCSS plugin layout changed and breaks the build)
- **Animation:** Framer Motion
- **Language:** TypeScript
- **Node:** 22 (see `.nvmrc`)

## Prerequisites

- Node 22+ (match `.nvmrc`)
- npm
- For image conversion: Python 3 + Pillow (`pip install pillow`)
- For e2e: Chromium via Playwright (`npx playwright install chromium`)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`next.config.ts` sets `trailingSlash: true`, so routes look like `/resume/` rather than `/resume`.

## Scripts

| Script | What it does |
|--------|----------------|
| `npm run dev` | Next.js dev server |
| `npm run build` | Static export to `out/` |
| `npm run start` | `next start` (not used for GitHub Pages) |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run spell` | cspell on `src/**/*.{ts,tsx}` and root `*.md` |
| `npm test` | Vitest unit tests (parsers, skill lookups) |
| `npm run knip` | Unused export / dead-code check |
| `npm run e2e` | Playwright smoke + axe (expects `out/` unless you override the URL) |
| `npm run favicon` | Rebuild favicon/PWA icons from `tools/favicon-source.svg` |
| `npm run logos` | Fetch official logos from Wikimedia and write WebP assets |

## Local CI (match pull-request checks)

CI (`.github/workflows/ci.yml`) runs on pull requests to `main` and on pushes that are **not** `main` or `gh-pages`. Deploy (`.github/workflows/deploy.yml`) runs only on push to `main`.

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run build
npm run spell
npm run knip
npx playwright install --with-deps chromium   # once per machine
npm run e2e
```

Link check in CI uses [lychee](https://github.com/lycheeverse/lychee) with `lychee.toml`. It treats 403/429/999 as success (bot-blocked sites) and excludes LinkedIn, Telegram, WhatsApp, localhost, and `uodo.gov.pl`.

Dependabot opens weekly grouped PRs for npm and GitHub Actions. **Major** version bumps are ignored on purpose (Tailwind 4 and cspell 10+ need a manual migration).

## End-to-end tests

`playwright.config.ts` serves the **static export** on port 4173 (`npx serve out`). Build first:

```bash
npm run build
npm run e2e
```

To hit a running `next dev` instead:

```bash
PLAYWRIGHT_BASE_URL=http://localhost:3000 npm run e2e
```

Tests cover home visibility (hero, navbar, every bento `h2`), resume iframe + download, policy pages, diploma viewer pages, 404 chrome, axe WCAG 2 A/AA (serious/critical only), consent-first GA gating, Lite Mode persistence, and experience chip expansion. Home tests that measure layout set `localStorage.cookie-consent = "rejected"` so the banner does not overlay measurements.

Common failure: cards or hero stuck at `opacity: 0` after a Framer Motion change. The smoke test asserts computed opacity > 0.5.

## Client-side preferences and consent

No analytics load until the visitor accepts cookies. Implementation: `ConsentProvider` → `CookieConsentBanner` → GA scripts only when consent is `"accepted"`.

| `localStorage` key | Values | Owner |
|--------------------|--------|--------|
| `cookie-consent` | `accepted` \| `rejected` | `CookieConsentBanner` / `ConsentProvider` |
| `theme` | `light` \| `dark` \| `system` | `ThemeProvider` (`next-themes`) |
| `reduce-effects` | `true` \| `false` | `ReduceEffectsProvider` (Lite Mode) |

**Consent-first analytics**

- Measurement ID lives in `src/lib/analytics.ts` (`GA_MEASUREMENT_ID`).
- GTM/GA scripts inject only after accept (`strategy="afterInteractive"`).
- Reject (or no choice) → banner on first visit, no `gtag` script.
- To re-test the banner: `localStorage.removeItem("cookie-consent")` and reload.

**Lite Mode** (`ReduceEffectsProvider`)

- Navbar lightning toggle writes `reduce-effects`.
- If that key is unset, the app **auto-enables** Lite Mode when any of these is true: `prefers-reduced-motion: reduce`, `navigator.deviceMemory <= 4`, `hardwareConcurrency <= 4`, or `navigator.connection.saveData`.
- Components must gate motion with `useReduceEffects()` **and** `useReducedMotion()` (see `.cursor/rules/component-patterns.mdc`). Tailwind-only animations ignore the React toggle.

Public copy: `/privacy-policy/` and `/cookie-policy/`. If you change storage keys or when GA loads, update those pages in the same PR.

## Content and assets

**Resume PDF**

1. Edit in Google Docs → Download as PDF
2. Replace `public/pdf/resume.pdf`
3. Commit and push (served at `/resume/` and `/viewer/resume/`)

**Certifications / logos**

1. Drop PNGs in `images-before-optimization/certification/` (or `companies/`, `education/`)
2. Convert with `tools/png_to_webp.py` (copy into the folder, needs Pillow)
3. Move WebP to `public/images/...`
4. Add the filename in `src/data/certificates.ts`, `experiences.ts`, or `education.ts`

Or run `npm run logos` for Wikimedia-sourced company/university marks. See `public/images/companies/README.md` and `public/images/education/README.md`.

**Favicon / PWA icons:** edit `tools/favicon-source.svg`, then `npm run favicon`. Writes `public/images/favicon.ico`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`.

**Skill chips:** add the icon to `skillIconMap` in `src/data/skillIcons.ts`, map it in the private `skillCategoryMap`, and add a `disciplineAliases` entry if experience/education text uses a variant name. `parseDisciplineListItems` in `src/lib/discipline-segments.ts` expands `AWS (EKS, S3)` into separate chips.

## Routes

| Path | Source |
|------|--------|
| `/` | `src/app/page.tsx` — hero + bento grid |
| `/resume/` | Resume iframe + download |
| `/viewer/{resume\|diploma\|diploma-supplement}/` | Shared PDF viewer (`generateStaticParams`) |
| `/privacy-policy/`, `/cookie-policy/` | Legal pages (`robots: noindex`) |
| unknown | `src/app/not-found.tsx` (navbar + footer; required for static 404) |

## Deployment

Push to `main` runs lint → typecheck → build → `peaceiris/actions-gh-pages` publishing `./out` to the `gh-pages` branch.

**GitHub Pages setup (once):**

1. Repo **Settings** → **Pages**
2. Source: "Deploy from a branch"
3. Branch `gh-pages`, folder `/` (root)
4. Custom domain: `public/CNAME` (`alytvynenko.net`) plus empty `public/.nojekyll`

## Project structure

```
src/
├── app/           # App Router pages, layout, globals.css
├── components/    # layout, bento, hero, ui, providers
├── data/          # profile, experiences, certificates, education, skillIcons
├── lib/           # animations, analytics, discipline parsing, hooks
└── types/
public/            # images, pdf, CNAME, manifest, sitemap
tests/e2e/         # Playwright smoke + axe
tools/             # favicon, logos, PNG→WebP
.github/workflows/ # ci.yml (PR), deploy.yml (main)
```

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| `npm run e2e` fails immediately / connection refused | No `out/` directory | Run `npm run build` first |
| Hero or cards invisible but lint/types pass | Framer Motion left `opacity: 0` | Check `initial`/`animate`/`whileInView` and Lite Mode / reduced-motion branches |
| Hydration mismatch on SVG/img | Dark Reader (or similar) injects attributes | Layout already strips those attributes for ~500ms; avoid extra `style` on those nodes |
| Tailwind / PostCSS build error after a Dependabot PR | Accidental Tailwind 4 bump | Stay on `tailwindcss@^3.4`; majors are ignored, but do not force a major |
| `cspell` fails on a new name or Polish word | Word not in `cspell.json` | Add it to `words`, or ignore generated SVG paths (already ignored) |
| Lychee fails on a new external URL | Bot-blocked host or bad cert | Confirm the URL in a browser; add a narrow `exclude` in `lychee.toml` only if the site is known-good |
| Knip reports unused files | New page/tool not in `knip.json` `entry` | Add `src/app/**/page.tsx`-style entries or `tools/**/*.mjs` |
| Cookie banner never appears | Consent already stored | `localStorage.removeItem("cookie-consent")` |
| GA fires before accept | Script added outside `ConsentProvider` | Load gtag only when `consent === "accepted"` |
| Lite Mode on by default on your laptop | Auto-detect (≤4 GB / ≤4 cores / Save-Data / reduced motion) | Toggle the navbar bolt, or set `localStorage.reduce-effects = "false"` |
| Horizontal scroll at 320px | Flex child overflow | Add `min-w-0` on flex/grid children |
| 404 page missing nav/footer | `not-found.tsx` omitted chrome | Keep Navbar + Footer; e2e asserts this |

Agent-oriented patterns (bento layout, data schemas, rebuild steps) live in `.cursor/rules/`.

## License

Copyright © 2022-2026 Andrii Lytvynenko
