# Heisenberg — Product Showcase (Enhanced)

This is an enhanced README with clearer quick-start instructions, editing guidelines for JSON content, deployment notes, and contribution steps. Use this as a drop-in replacement for the repository `README.md` if you want the improved version applied.

Live demo: https://benhilfenhaus007.github.io/heisenberg/

## Quick Start

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Edit site content

Edit JSON files in `src/data/` (not TypeScript) to update products, themes, FAQ, gallery, etc.

## Deploy

Automatic via GitHub Actions (`.github/workflows/deploy.yml`) or manual using `deploy.sh` to push `dist/` to `gh-pages`.

## Contributing

Fork → branch → PR. Run `npm run build` locally before opening a PR.

---

If you'd like, I can now:

- replace the existing `README.md` with this enhanced version, or
- add badges/screenshots and a `CONTRIBUTING.md`.
