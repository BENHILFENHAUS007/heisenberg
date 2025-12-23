# Heisenberg — Product Showcase

A modern, responsive product showcase built with React, TypeScript, and Vite. Designed for display-only catalogs with a WhatsApp enquiry flow, JSON-driven content, and optional PWA support. Deploys to GitHub Pages via GitHub Actions.

## Live site
Production:
https://benhilfenhaus007.github.io/heisenberg/

## Key features
- Display-only catalog (no prices, no cart)
- WhatsApp-only enquiry flow
- JSON-driven content (config, themes, products, FAQ, safety, gallery)
- Festival auto-themes (e.g., Diwali, Christmas)
- Search, filters, sort, and shortlist (favorites)
- Mobile-first responsive design
- Framer Motion animations and optional Lottie
- PWA-ready (manifest + service worker)
- Automatic deployment to GitHub Pages via GitHub Actions

## Tech stack
- React 18, TypeScript
- Vite 5
- React Router (HashRouter)
- Tailwind CSS
- Framer Motion, Lottie (optional)
- Lucide React icons
- Hosted on GitHub Pages; CI via GitHub Actions

## Project layout (high level)
```
heisenberg/
├── public/
│   ├── manifest.json
│   └── assets/
├── src/
│   ├── data/           # JSON config (edit here)
│   ├── components/     # layout and UI components
│   ├── hooks/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
├── .github/workflows/  # CI for deployment
├── dist/               # build output
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## JSON-driven content
Edit content and configuration under `src/data/`:
- `config.json` — site metadata, WhatsApp, GA4, PWA
- `themes.json` — theme rules and festival ranges
- `categories.json` — categories and icons
- `products.json` — product catalog
- `faq.json`, `safety.json`, `gallery.json`

Typical flow:
1. Edit JSON in `src/data/`.
2. Commit and push to `main`.
3. Wait for GitHub Actions to deploy (~2–3 minutes).
4. Hard-refresh the site (Ctrl+Shift+R) after deployment.

## Development
Install and run locally:
```bash
npm install --legacy-peer-deps
npm run dev      # http://localhost:3000
npm run build
npm run preview  # preview production build (http://localhost:4173)
```

## Deployment
Automatic (recommended):
- Push to `main`. GitHub Actions builds and deploys to GitHub Pages.

Manual (fallback):
- Build (`npm run build`) and deploy `dist/` to `gh-pages` branch.

## Vite configuration note
`vite.config.ts` sets base to `/heisenberg/` so assets load correctly on GitHub Pages. Update `base` if you rename the repository.

## Post-deploy checklist
- Home loads without a blank screen
- Navigation works across pages
- No 404 errors for JS/CSS
- Search, filters, shortlist function as expected
- WhatsApp buttons open correct number
- Current theme/date-based styles apply

## Contributing
Edits to content are typically changes to `src/data/*.json`. For code changes, open a PR with clear description and local verification.

## License
MIT