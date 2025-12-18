# 🔥 TK Fireworks – Premium 3D Fireworks Product Showcase

**A display-only, highly animated 3D-vibe fireworks product catalog website with WhatsApp enquiry integration, PWA support, and automatic festival theme switching.**

🚀 **Live Demo**: https://tkfireworks-rgb.github.io/tk-fireworks-showcase/

---

## 📋 Project Overview

**TK Fireworks** is a modern, production-ready, data-driven web application built for showcasing premium fireworks products. It features:

✅ **Display-Only**: No pricing, no cart, no login, no backend  
✅ **WhatsApp-First CTA**: Direct enquiry via WhatsApp (global + per-product)  
✅ **JSON-Driven Content**: Easily update products, themes, and config without touching code  
✅ **Festival Auto-Themes**: Diwali, Christmas, Pongal themes activate automatically by date  
✅ **PWA Ready**: "Add to Home Screen", offline shell, app-like experience  
✅ **Fully Responsive**: Mobile-first design, desktop-optimized  
✅ **Smooth Animations**: Framer Motion + Lottie for premium feel  
✅ **GitHub Pages Hosted**: Free, fast, globally distributed  
✅ **500+ Product Scalable**: JSON structure supports unlimited products  
✅ **GA4 Analytics**: Track user behavior with custom events  
✅ **Built with React 18 + Vite + TypeScript + Tailwind CSS**  

---

## 🎯 Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 18 + Vite |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Routing** | React Router (HashRouter for GitHub Pages) |
| **Animations** | Framer Motion + Lottie |
| **State Management** | React Hooks + localStorage |
| **PWA** | manifest.json + service worker |
| **Hosting** | GitHub Pages |
| **CI/CD** | GitHub Actions |
| **Data Storage** | JSON files (/src/data/) |

---

## ⚡ Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/tkfireworks-rgb/tk-fireworks-showcase.git
cd tk-fireworks-showcase

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
tk-fireworks-showcase/
├── public/
│   ├── manifest.json          # PWA configuration
│   └── service-worker.js      # Offline support + caching
├── src/
│   ├── data/                 # ⭐ ALL EDITABLE JSON CONTENT HERE
│   │   ├── config.json       # Site settings, WhatsApp, GA4
│   │   ├── themes.json       # Festival themes + auto-switching
│   │   ├── categories.json   # Product categories
│   │   ├── products.json     # Product catalog (scalable to 500+)
│   │   ├── faq.json          # FAQ content
│   │   ├── safety.json       # Safety instructions
│   │   └── gallery.json      # Gallery images
│   ├── components/           # Reusable React components
│   │   ├── layout/           # Navbar, Footer
│   │   ├── ui/               # ProductCard, SearchBox, etc.
│   │   └── common/           # Shared utilities
│   ├── pages/                # Route pages
│   ├── hooks/                # Custom React hooks
│   ├── types/                # TypeScript type definitions
│   ├── router/               # React Router configuration
│   ├── main.tsx              # React entry point
│   ├── App.tsx               # Main app component
│   └── index.css             # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions CI/CD
├── index.html                # HTML entry
├── package.json              # Dependencies
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript config
├── tailwind.config.js        # Tailwind CSS config
└── README.md                 # This file
```

---

## 📊 Data-Driven Architecture (Edit Content Here)

**All editable content lives in `/src/data/*.json`. You NEVER need to touch React code to update content.**

### 1. **config.json** – Global Configuration

```json
{
  "siteName": "TK Fireworks",
  "tagline": "🔥 3D Vibe Fireworks Display",
  "whatsappNumber": "+919876543210",
  "whatsappDefaultMessage": "Hi, I'm interested in TK Fireworks products.",
  "ga4MeasurementId": "G-XXXXXXXXXX",
  "branches": [
    {
      "id": "main",
      "name": "Store Name",
      "address": "Location",
      "phone": "+919876543210",
      "mapUrl": "https://maps.google.com/?q=..."
    }
  ],
  "pwa": {
    "enabled": true,
    "appName": "TK Fireworks"
  }
}
```

**When to edit**: Update WhatsApp number, store details, GA4 ID

### 2. **themes.json** – Festival Themes & Colors

```json
{
  "defaultTheme": "normal",
  "activeByDate": [
    { "themeId": "diwali", "from": "11-01", "to": "11-20" },
    { "themeId": "christmas", "from": "12-20", "to": "12-27" }
  ],
  "themes": {
    "normal": {
      "background": "linear-gradient(...)",
      "primaryColor": "#ff6b00",
      "accentColor": "#ffd54f"
    }
  }
}
```

**When to edit**: Change theme colors, add new festival themes, adjust date ranges

### 3. **categories.json** – Product Categories

```json
[
  { "id": "sparklers", "name": "Sparklers", "icon": "✨" },
  { "id": "rockets", "name": "Rockets", "icon": "🚀" }
]
```

**When to edit**: Add/remove product categories

### 4. **products.json** – Product Catalog (MAIN CONTENT)

```json
[
  {
    "id": "TKF-001",
    "name": "Galaxy Sparkler",
    "categoryId": "sparklers",
    "thumbnail3D": "image-url-or-data-uri",
    "videoUrl": "https://youtube.com/embed/...",
    "tags": ["kids-friendly", "low-noise"],
    "descriptionShort": "Colorful sparkler...",
    "descriptionLong": "Detailed description...",
    "effectType": "ground",
    "noiseLevel": "low",
    "durationSeconds": 45,
    "hasVideo": true,
    "isNew": true,
    "isFeatured": true,
    "displayOrder": 1
  }
]
```

**When to edit**: Add new products, update descriptions, change prices visibility

### 5. **faq.json**, **safety.json**, **gallery.json**

Simple arrays for FAQ, safety tips, and gallery images.

---

## 🎯 Core Features

### 🔍 Search & Filters
- **Real-time search** by product name, ID, category, tags
- **Multi-select filters**: Categories, effect type, noise level
- **Sort options**: A–Z, Z–A, Newest, Featured
- **Video filter**: Show products with videos only

### 📏 Product Showcase
- **Catalog grid**: Responsive cards (2-col mobile, 4-col desktop)
- **Product detail**: Large image, embedded YouTube, full description
- **Video autoplay**: Attempts auto-play; shows play button if blocked

### ♥️ Favorites & Shortlist
- **Heart icon**: Save products (stored in localStorage)
- **Shortlist page**: View saved items, share multiple items via WhatsApp

### 💬 WhatsApp Integration (Primary CTA)
- **Global floating button**: Always accessible bottom-right
- **Per-product CTA**: Pre-filled product inquiry message
- **Shortlist sharing**: Share multiple products in one message
- **Bulk/dealer pages**: WhatsApp-only contact method

### 🌟 Festival Themes
- **Auto-activate**: Themes change by date (Diwali Nov 1–20, Christmas Dec 20–27, Pongal Jan 10–20)
- **User override**: Optional manual theme toggle
- **Dynamic colors**: Themes control accent colors, gradients, animations

### 📱 PWA & Offline
- **Installable**: "Add to Home Screen" on Android/Chrome
- **Offline shell**: Browse cached products without internet
- **Service worker**: Smart caching (cache-first for assets, network-first for JSON)

### 📊 Analytics (GA4)
Custom events tracked:
- `whatsapp_click_global` – Global WhatsApp button
- `whatsapp_click_product` – Product page CTA
- `product_view` – Product detail viewed
- `search_used` – Search performed
- `filter_applied` – Filter applied
- `shortlist_toggled` – Favorite added/removed

---

## 📑 Pages & Routes

All routes use HashRouter (`/#/path`) for GitHub Pages compatibility:

| Route | Page | Purpose |
|-------|------|----------|
| `/#/` | Home | Hero + featured products + CTA |
| `/#/catalog` | Catalog | Browse with search/filter/sort |
| `/#/product/:id` | Detail | Full product view + video + WhatsApp |
| `/#/gallery` | Gallery | Image gallery (paginated) |
| `/#/faq` | FAQ | Collapsible Q&A |
| `/#/safety` | Safety | Safety guidelines + icons |
| `/#/about` | About | Company info + branches |
| `/#/contact` | Contact | WhatsApp, phone, store locations |
| `/#/shortlist` | Shortlist | Saved favorites + share |
| `/#/bulk` | Bulk Orders | Wholesale + dealer inquiries |
| `/#/diwali` | Diwali | Festival special offers |
| `/#/events` | Events | Wedding/party/corporate events |

---

## 🚀 Deployment (GitHub Pages)

### Automatic Deployment (Recommended)

GitHub Actions automatically deploys every push to `main`:

1. ✅ Automatically triggered on `git push origin main`
2. ✅ Installs dependencies
3. ✅ Runs type checks
4. ✅ Builds optimized dist/
5. ✅ Deploys to GitHub Pages in ~2-3 minutes

**Check status**: Go to repository → Actions tab

### Manual Deployment

```bash
# Build
npm run build

# Commit and push
git add dist/
git commit -m "build: production build"
git push origin main

# GitHub Pages auto-deploys from Actions workflow
```

### Enable GitHub Pages

1. Go to repository → Settings → Pages
2. Source: GitHub Actions
3. Save
4. Deploy URL: `https://tkfireworks-rgb.github.io/tk-fireworks-showcase/`

---

## 🛠 How to Manage Content

### Add New Products

1. Open `src/data/products.json`
2. Add object to array:

```json
{
  "id": "TKF-XXX",
  "name": "Product Name",
  "categoryId": "category-id",
  "thumbnail3D": "image-url",
  "videoUrl": "https://youtube.com/embed/VIDEO_ID",
  "tags": ["tag1", "tag2"],
  "descriptionShort": "Short text",
  "descriptionLong": "Detailed text",
  "effectType": "ground",
  "noiseLevel": "low",
  "durationSeconds": 45,
  "hasVideo": true,
  "isNew": true,
  "isFeatured": false,
  "displayOrder": 7
}
```

3. Save and redeploy:

```bash
git add src/data/products.json
git commit -m "feat: add new product TKF-XXX"
git push origin main
```

### Change Theme Colors

1. Open `src/data/themes.json`
2. Update color values in desired theme:

```json
"normal": {
  "primaryColor": "#ff6b00",      // Main orange
  "accentColor": "#ffd54f",       // Gold highlights
  "secondaryColor": "#ff9800"     // Lighter orange
}
```

3. Save and redeploy

### Update WhatsApp Number

1. Open `src/data/config.json`
2. Change `whatsappNumber`:

```json
"whatsappNumber": "+919876543210"
```

3. Redeploy

### Add Festival Theme

1. Open `src/data/themes.json`
2. Add to `activeByDate` array:

```json
{ "themeId": "new-festival", "from": "MM-DD", "to": "MM-DD" }
```

3. Define theme colors under `themes` object
4. Redeploy

---

## 🔝 Customization

### Change Site Name

`src/data/config.json` → `siteName`

### Change Primary Color

`src/data/themes.json` → `primaryColor` in theme

### Disable GA4

Set `ga4MeasurementId` to `"G-XXXXXXX"` (placeholder) in `src/data/config.json`

### Add New Page

1. Create `src/pages/NewPage.tsx`
2. Add route to `src/router/AppRouter.tsx`
3. Add link to navbar or footer

---

## 👋 Development Workflow

1. **Make changes** to JSON files or components
2. **Test locally**: `npm run dev` → http://localhost:3000
3. **Build**: `npm run build` (ensures no errors)
4. **Commit**: `git commit -m "description"`
5. **Push**: `git push origin main`
6. **GitHub Actions** automatically deploys to Pages (~2-3 min)
7. **Live**: Changes appear at https://tkfireworks-rgb.github.io/tk-fireworks-showcase/

---

## 👻 Troubleshooting

### Build errors?

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes not working?

Ensure `vite.config.ts` has `base: '/tk-fireworks-showcase/'`

### WhatsApp links not opening?

Verify `whatsappNumber` in `src/data/config.json` is valid (+country-code format)

### PWA not installing?

Check `public/manifest.json` is properly configured and service worker registers (check browser console)

---

## 📄 License

MIT License – Feel free to fork and customize.

---

## 🐟 Built With

- **React 18** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD

---

## 💬 Support

For questions or issues, check the [FAQ page](/#/faq) or reach out via WhatsApp (configured in config.json).

---

**Made with ❤️ for premium fireworks showcases. Ready to deploy. Pure vibe. Zero backend.🔥**
