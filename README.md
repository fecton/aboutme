# Andrii Lytvynenko - Personal Portfolio

> https://alytvynenko.net

Senior DevOps & Cloud Engineer portfolio built with Next.js 14, Tailwind CSS, and Framer Motion. Features an Apple/Telegram-inspired design with glassmorphism, bento grid layout, and dark mode.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Language:** TypeScript

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static export outputs to the `out/` directory.

## Deployment

The site deploys to GitHub Pages via GitHub Actions on push to `main` or `develop` branches.

**Setup:**
1. Go to repo **Settings** → **Pages**
2. Set **Source** to "Deploy from a branch"
3. Select branch `gh-pages` and root folder
4. Save

The workflow will create the `gh-pages` branch on first run.

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # React components
├── data/         # Content data (certificates, education, etc.)
└── ...
public/            # Static assets (images, pdf, CNAME, etc.)
```

## Updating Resume

The resume PDF is hosted locally. To update:

1. Edit the document in Google Docs
2. File → Download → PDF Document (.pdf)
3. Replace `public/pdf/resume.pdf`
4. Commit and push

## License

Copyright © 2022-2026 Andrii Lytvynenko
