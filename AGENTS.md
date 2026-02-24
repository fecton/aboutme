# AGENTS.md

## Cursor Cloud specific instructions

This is a static Next.js 16 portfolio site (no backend, no database, no external services).

### Quick reference

| Action | Command |
|---|---|
| Install deps | `npm install` |
| Dev server | `npm run dev` (serves on `localhost:3000`) |
| Lint | `npm run lint` |
| Type check | `npx tsc --noEmit` |
| Build | `npm run build` (static export to `out/`) |

- **Node version**: 20 (pinned in `.nvmrc`). Use `nvm use 20` before running commands.
- **Package manager**: npm (lockfile: `package-lock.json`).
- The project uses `output: "export"` (fully static), so `next/image` optimization is disabled and `<img>` lint warnings are expected.
- ESLint uses flat config (`eslint.config.mjs`).
- No automated test suite exists; validation is via lint + type check + build + manual browser testing.
