# Heisenberg — Product Showcase

Modern, responsive product showcase built with React, TypeScript and Vite. This repository is a JSON-driven catalog (no checkout), with an enquiry flow via WhatsApp and admin-editable content under `src/data/`.

Live demo: https://benhilfenhaus007.github.io/heisenberg/

---

## Quick Start

Requirements: Node 18+ and npm (or pnpm/yarn).

```bash
# install
npm install

# start dev server (http://localhost:3000)
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

---

## Edit site content

All site content is JSON-driven. For content changes (products, FAQ, themes, gallery), edit files in `src/data/`:

- `src/data/config.json` — site metadata, WhatsApp number, GA4 id, branches
- `src/data/products.json` — product catalog (ids, names, tags, descriptions)
- `src/data/categories.json` — category list and icons
- `src/data/themes.json` — themes and festival date ranges
- `src/data/faq.json`, `safety.json`, `gallery.json` — page content

After editing:

1. Commit and push to `main`.
2. GitHub Actions will build and deploy automatically (see Deploy section).

---

## Development notes

- Framework: React 18 + TypeScript
- Bundler: Vite
- Styling: Tailwind CSS
- Animations: Framer Motion
- Routing: HashRouter (for GitHub Pages)

Project entry points: `src/main.tsx` and `src/App.tsx`.

High-level structure:

```
src/
  data/        # JSON content editable by admins
  components/  # UI and layout components
  hooks/       # custom hooks
  pages/       # route pages
  main.tsx
```

---

## Build & Deployment

This project supports automatic deployment to GitHub Pages via GitHub Actions. The `.github/workflows/deploy.yml` workflow builds the app and publishes the `dist/` output.

If you prefer manual deployment, a helper script `deploy.sh` (at repo root) can push `dist/` to the `gh-pages` branch.

Notes:

- Ensure `vite.config.ts` has the correct `base` setting (e.g. `/heisenberg/`) when serving from a repository subpath.
- The site is a PWA (see `public/manifest.json` and `service-worker.js`).

---

## Troubleshooting

- Blank screen / 404s: check `base` in `vite.config.ts` and ensure assets are served from the correct path.
- WhatsApp links: configured via `src/data/config.json` — verify the number format.
- Build failures: run `npm run build` locally to see errors; check Node/npm versions.

---

## Contributing

Small fixes, data updates, and documentation improvements are welcome. For larger changes, open an issue first so we can discuss scope.

When contributing:

1. Fork the repo and create a feature branch.
2. Make changes and keep JSON edits minimal and validated.
3. Run `npm run build` and verify locally.
4. Open a pull request with a clear description.

---

## License

MIT — free to reuse and adapt.

---

If you want, I can also:

- add badges (build/deploy) and a short screenshot
- create a small CONTRIBUTING.md
- add a GitHub Action status badge pointing to the workflow

File updated: `README.md`
