# 🔥 TK Fireworks - Premium Product Showcase

[![Live Demo](https://img.shields.io/badge/Live-Demo-orange?style=for-the-badge)](https://benhilfenhaus007.github.io/heisenberg/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A premium, production-ready fireworks product showcase website built with React, TypeScript, and Tailwind CSS. Features stunning visual effects, smooth animations, and a fully data-driven architecture.

## ✨ Features

### Visual Effects
- 🔥 **Fire Cursor Effect** - Premium fire trail that follows your mouse with glow and particle effects
- 🎆 **Fireworks Background** - Animated particle system with realistic firework bursts
- ✨ **Framer Motion Animations** - Smooth page transitions and scroll-triggered animations
- 🎨 **Dynamic Theme System** - JSON-configurable color schemes

### Core Features
- 📋 **500+ Product Support** - Scalable JSON-based product catalog
- 🎬 **YouTube Video Integration** - Embedded product videos with responsive design
- 📱 **PWA Ready** - Progressive Web App with offline support
- 🚀 **GitHub Pages Optimized** - HashRouter for seamless deployment
- 📦 **Catalog Management** - Advanced filtering, sorting, and search
- ⭐ **Favorites System** - LocalStorage-based wishlist
- 📊 **Google Analytics** - Built-in GA4 tracking
- 💬 **WhatsApp Integration** - Quick customer contact

### Technical Excellence
- ✅ **TypeScript** - Full type safety
- ✅ **Modular Architecture** - Clean, reusable components
- ✅ **Data-Driven** - All content managed via JSON
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Performance Optimized** - Lazy loading, code splitting
- ✅ **Production Ready** - No console errors, clean builds

## 📦 Tech Stack

| Technology | Version | Purpose |
|------------|---------|----------|
| React | 18.3.1 | UI Framework |
| TypeScript | 5.3.3 | Type Safety |
| Vite | 5.0.8 | Build Tool |
| Tailwind CSS | 3.4.1 | Styling |
| React Router | 6.21.0 | Routing (HashRouter) |
| Framer Motion | 11.15.0 | Animations |
| Lottie React | 2.4.0 | Lottie Animations |
| Lucide React | 0.305.0 | Icons |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/BENHILFENHAUS007/heisenberg.git
cd heisenberg

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Adding Your Content

### 1. Add Product Images

1. Place your images in `public/images/`:
   - `coming-soon.jpg` - "Coming Soon" promotional poster
   - `little-peacock.jpg` - Little Peacock product box

2. For new products:
   ```bash
   public/images/
   ├── product-tkf-001.jpg
   ├── product-tkf-002.jpg
   └── banner-diwali-2025.jpg
   ```

### 2. Update Site Content

All content is managed via JSON files in `src/data/`:

#### Global Configuration (`config.json`)
```json
{
  "siteName": "TK Fireworks",
  "whatsappNumber": "919876543210",
  "whatsappDefaultMessage": "Hi! I'm interested in your fireworks."
}
```

#### Products (`products.json`)
```json
[
  {
    "id": "TKF-001",
    "name": "Galaxy Sparkler",
    "categoryId": "sparklers",
    "videoUrl": "https://www.youtube.com/embed/6stlCkUDG_s",
    "descriptionShort": "Colorful sparkler...",
    "tags": ["kids-friendly", "low-noise"],
    "isNew": true,
    "isFeatured": true
  }
]
```

#### Categories (`categories.json`)
```json
[
  {
    "id": "sparklers",
    "name": "Sparklers",
    "icon": "✨",
    "description": "Safe and colorful sparklers"
  }
]
```

#### Other Data Files
- `themes.json` - Color schemes and styling
- `faq.json` - Frequently asked questions
- `safety.json` - Safety guidelines
- `gallery.json` - Gallery images

### 3. Customize YouTube Videos

Update video IDs in:
1. **Home Page**: `src/pages/Home.tsx`
   ```tsx
   <YouTubeEmbed videoId="6stlCkUDG_s" />
   ```

2. **Products**: `src/data/products.json`
   ```json
   "videoUrl": "https://www.youtube.com/embed/YOUR_VIDEO_ID"
   ```

## 🌐 Deployment

### Automatic Deployment (GitHub Actions)

Push to `main` branch triggers automatic deployment:

```bash
git add .
git commit -m "Update content"
git push origin main
```

Site deploys to: `https://benhilfenhaus007.github.io/heisenberg/`

### Manual Deployment

```bash
# Build and deploy
npm run build
npm run deploy
```

### GitHub Pages Setup

1. Go to repository **Settings** > **Pages**
2. Source: Deploy from branch
3. Branch: `gh-pages` / `root`
4. Save

## 🛠️ Development Guide

### Project Structure

```
heisenberg/
├── public/
│   ├── images/          # Static images
│   └── manifest.json    # PWA manifest
├── src/
│   ├── components/
│   │   ├── effects/     # Visual effects components
│   │   ├── layout/      # Header, Footer, Nav
│   │   └── media/       # YouTube, placeholders
│   ├── data/            # JSON content files
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── types/           # TypeScript types
│   └── App.tsx          # Main app component
├── .github/
│   └── workflows/       # GitHub Actions
└── package.json
```

### Available Scripts

```bash
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
npm run deploy    # Deploy to GitHub Pages
```

### Creating New Components

1. **Effect Components** (`src/components/effects/`)
   - Visual effects like particles, animations
   - Example: `FireworksBackground.tsx`

2. **Media Components** (`src/components/media/`)
   - YouTube embeds, image galleries
   - Example: `YouTubeEmbed.tsx`

3. **Page Components** (`src/pages/`)
   - Full page views
   - Example: `Home.tsx`, `Catalog.tsx`

### Custom Hooks

- `useFireCursorPro()` - Fire cursor effect
- `useTheme()` - Theme management
- `useFavorites()` - Wishlist functionality
- `useProducts()` - Product filtering and sorting
- `useGA4()` - Google Analytics tracking

## ⚙️ Configuration

### Environment Variables

Create `.env` file for custom configuration:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_WHATSAPP_NUMBER=919876543210
```

### Vite Configuration

`vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/heisenberg/',  // GitHub repo name
});
```

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Routing Issues on GitHub Pages

- Ensure using `HashRouter` (not `BrowserRouter`)
- Check `vite.config.ts` has correct `base` path

### Images Not Loading

- Images must be in `public/images/`
- Use `/images/filename.jpg` (absolute path)
- Check file names match exactly (case-sensitive)

## 📝 License

This project is private and proprietary. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and inquiries:
- 💬 WhatsApp: [+91 98765 43210](https://wa.me/919876543210)
- 📧 Email: contact@tkfireworks.com

## 🎉 Acknowledgments

- React Team for amazing framework
- Tailwind CSS for utility-first CSS
- Framer Motion for smooth animations
- Community for open-source contributions

---

**Made with 🔥 by TK Fireworks Team**

**Live Site**: [https://benhilfenhaus007.github.io/heisenberg/](https://benhilfenhaus007.github.io/heisenberg/)
