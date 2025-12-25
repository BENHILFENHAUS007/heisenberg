# 🎆 TK Fireworks - Premium Product Showcase

[![Live Demo](https://img.shields.io/badge/Live-Demo-orange?style=for-the-badge)](https://benhilfenhaus007.github.io/heisenberg/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

**"The spark of traditions"**

A premium, production-ready fireworks product showcase website built with React, TypeScript, and Tailwind CSS. Features stunning visual effects, advanced animations, and a fully data-driven architecture optimized for GitHub Pages deployment.

---

## ✨ Features

### 🌟 New Advanced Animations
- **⚡ Electric Border Effect** - Glowing animated borders on product cards with corner sparks
- **📚 Stack Animation** - 3D perspective gallery with smooth transitions
- **⛈️ Lightning Background** - Dynamic electrical effects for Safety page
- **📝 Animated Lists** - Staggered entry animations for FAQ and Contact pages
- **🌊 Gooey Scrollbar** - Organic, fluid scrollbar with particle effects

### 🔥 Visual Effects
- **Fire Cursor Effect** - Premium fire trail with glow and particles
- **Fireworks Background** - Realistic particle burst animations
- **Framer Motion Integration** - Smooth page transitions and scroll-triggered effects
- **Dynamic Theme System** - Unified theme across all pages (except Home & Safety)

### 📦 Core Features
- **500+ Product Support** - Scalable JSON-based catalog
- **YouTube Video Integration** - Embedded product demonstrations
- **PWA Ready** - Progressive Web App with offline support
- **GitHub Pages Optimized** - HashRouter for seamless deployment
- **Advanced Filtering** - Category, effect type, noise level filters
- **Favorites System** - LocalStorage-based wishlist
- **WhatsApp Integration** - Direct customer communication
- **Centralized Contact Data** - Single source of truth syncing footer and contact page

### 🛠️ Technical Excellence
- ✅ **TypeScript** - Full type safety
- ✅ **Modular Architecture** - Clean, reusable components
- ✅ **Data-Driven** - All content managed via JSON
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Performance Optimized** - Lazy loading, code splitting
- ✅ **Production Ready** - Zero console errors, clean builds
- ✅ **Auto-Deployment** - GitHub Actions workflow included

---

## 📚 Table of Contents

- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Animation Components](#-animation-components)
- [Content Management](#-content-management)
- [Troubleshooting](#-troubleshooting)

---

## 📦 Tech Stack

| Technology | Version | Purpose |
|------------|---------|----------|
| React | 18.3.1 | UI Framework |
| TypeScript | 5.3.3 | Type Safety |
| Vite | 5.0.8 | Build Tool |
| Tailwind CSS | 3.4.1 | Styling |
| React Router | 6.21.0 | Routing (HashRouter) |
| Framer Motion | 11.15.0 | Animations |
| Motion | 10.18.0 | Advanced Animations |
| Lottie React | 2.4.0 | Lottie Animations |
| Lucide React | 0.305.0 | Icons |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ and npm 9+
- **Git**
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

```bash
# Clone the repository
git clone https://github.com/BENHILFENHAUS007/heisenberg.git
cd heisenberg

# Checkout the feature branch
git checkout feature/final-changes-implementation

# Install all dependencies (including motion library)
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

Build output: `dist/` directory

---

## 📂 Project Structure

```
heisenberg/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment workflow
├── public/
│   ├── images/               # Static assets
│   │   ├── little-peacock.jpg
│   │   ├── coming soon.png
│   │   └── gallery*.jpg
│   └── manifest.json        # PWA manifest
├── src/
│   ├── components/
│   │   ├── ui/               # Animation components
│   │   │   ├── electric-border.tsx
│   │   │   ├── stack-animation.tsx
│   │   │   ├── lightning-background.tsx
│   │   │   ├── animated-list.tsx
│   │   │   └── gooey-scrollbar.tsx
│   │   ├── effects/          # Visual effects
│   │   ├── layout/           # Header, Footer, Nav
│   │   └── media/            # YouTube, images
│   ├── data/
│   │   ├── config.json       # Site configuration
│   │   ├── contact.json      # Centralized contact data
│   │   ├── products.json     # Product catalog
│   │   ├── categories.json   # Product categories
│   │   ├── gallery.json      # Gallery images
│   │   ├── faq.json          # FAQ content
│   │   └── safety.json       # Safety guidelines
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Page components
│   ├── types/                # TypeScript definitions
│   └── App.tsx               # Main application
├── IMPLEMENTATION_GUIDE.md  # Detailed implementation docs
├── package.json
└── vite.config.ts
```

---

## ⚙️ Configuration

### Site Configuration (`src/data/config.json`)

```json
{
  "siteName": "TK Fireworks",
  "tagline": "The spark of traditions",
  "whatsappNumber": "+919876543210",
  "whatsappDefaultMessage": "Hi, I'm interested in TK Fireworks products."
}
```

### Contact Information (`src/data/contact.json`)

Centralized contact data that syncs between home page footer and contact page:

```json
{
  "phone": "+91 98765 43210",
  "email": "info@tkfireworks.com",
  "addresses": {
    "corporate": {
      "label": "Corporate Address",
      "line1": "Lorem Ipsum Tower, Suite 200",
      "city": "Sivakasi",
      "state": "Tamil Nadu"
    }
  }
}
```

### Product Configuration (`src/data/products.json`)

```json
[
  {
    "id": "TKF-MAGIC-PEACOCK",
    "name": "Magic Peacock",
    "categoryId": "fancy",
    "thumbnail3D": "/heisenberg/images/little-peacock.jpg",
    "tags": ["trending"],
    "displayOrder": 1
  }
]
```

**Product Tags:** `trending`, `upcoming`, `surprise`, `feature`

---

## 🚀 Deployment

### Automatic Deployment (Recommended)

**GitHub Actions** automatically deploys on every push to `main` branch:

```bash
# Commit and push changes
git add .
git commit -m "Update site content"
git push origin main
```

✅ Build runs automatically  
✅ Deploys to GitHub Pages  
✅ Live at: `https://benhilfenhaus007.github.io/heisenberg/`

### Manual Deployment

```bash
# Build and deploy manually
npm run build
npm run deploy
```

### GitHub Pages Setup

1. Go to **Repository Settings** → **Pages**
2. **Source**: GitHub Actions
3. **Branch**: main (auto-deployed via workflow)
4. Save and wait 2-3 minutes

### Deployment Checklist

- ☐ Ensure `base: '/heisenberg/'` in `vite.config.ts`
- ☐ Verify all images are in `public/images/`
- ☐ Test build locally: `npm run build && npm run preview`
- ☐ Check for TypeScript errors: `npm run build`
- ☐ Confirm routing works with HashRouter

---

## 🎨 Animation Components

### 1. Electric Border (`electric-border.tsx`)

**Purpose:** Animated glowing borders for product cards

```tsx
import { ElectricBorder } from '@/components/ui/electric-border';

<ElectricBorder borderColor="#f59e0b">
  <div className="p-6">
    {/* Product card content */}
  </div>
</ElectricBorder>
```

### 2. Stack Animation (`stack-animation.tsx`)

**Purpose:** 3D gallery with perspective transitions

```tsx
import { StackAnimation } from '@/components/ui/stack-animation';

const images = [
  { src: '/images/gallery1.png', alt: 'Spectacular Show' },
  { src: '/images/gallery2.jpeg', alt: 'Night Display' }
];

<StackAnimation images={images} />
```

### 3. Lightning Background (`lightning-background.tsx`)

**Purpose:** Electrical effects for Safety page

```tsx
import { LightningBackground } from '@/components/ui/lightning-background';

<LightningBackground intensity="medium">
  <div className="content">
    {/* Safety guidelines */}
  </div>
</LightningBackground>
```

### 4. Animated List (`animated-list.tsx`)

**Purpose:** Staggered animations for FAQ and forms

```tsx
import { AnimatedList, AnimatedListItem } from '@/components/ui/animated-list';

<AnimatedList variant="slide" stagger={0.15}>
  {items.map(item => (
    <AnimatedListItem key={item.id}>
      {/* List item content */}
    </AnimatedListItem>
  ))}
</AnimatedList>
```

### 5. Gooey Scrollbar (`gooey-scrollbar.tsx`)

**Purpose:** Organic scrollbar with physics-based motion

```tsx
import { GooeyScrollbar } from '@/components/ui/gooey-scrollbar';

// In App.tsx
function App() {
  return (
    <>
      <GooeyScrollbar color="#3b82f6" />
      {/* Rest of app */}
    </>
  );
}
```

---

## 📝 Content Management

### Adding Products

1. Add product image to `public/images/`
2. Update `src/data/products.json`:

```json
{
  "id": "TKF-NEW-001",
  "name": "Your Product Name",
  "categoryId": "rockets",
  "thumbnail3D": "/heisenberg/images/your-image.jpg",
  "tags": ["trending"],
  "descriptionShort": "Brief description",
  "displayOrder": 5
}
```

### Updating Contact Information

Edit `src/data/contact.json` - changes automatically sync to:
- Home page footer
- Contact page

### Managing FAQ

Edit `src/data/faq.json`:

```json
[
  {
    "id": "faq-1",
    "question": "Your question?",
    "answer": "Your detailed answer here."
  }
]
```

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Animations Not Working

- Verify `motion` is installed: `npm list motion`
- Check browser console for errors
- Ensure GPU acceleration is enabled

### Images Not Loading

- Images must be in `public/images/`
- Use absolute paths: `/heisenberg/images/filename.jpg`
- File names are case-sensitive

### Routing Issues

- Confirm using `HashRouter` (not `BrowserRouter`)
- Check `base: '/heisenberg/'` in `vite.config.ts`
- Test locally with `npm run preview`

### Footer Not Showing/Hiding Correctly

- Footer should only appear on home page (`/` or `/#/`)
- Check conditional logic in Layout component
- Verify `useLocation()` hook is working

---

## 📚 Additional Documentation

- **[IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)** - Detailed implementation guide
- **[final-changes.pdf](./final-changes.pdf)** - Original requirements document

---

## 🛡️ Available Scripts

```bash
npm run dev       # Start development server (localhost:5173)
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
npm run deploy    # Manual deploy to GitHub Pages
```

---

## 🎯 Page-Specific Features

### Home Page
- ✅ Tagline: "The spark of traditions"
- ✅ Footer: **VISIBLE**
- ✅ Dynamic fireworks background
- ✅ Hero section with call-to-action

### Products Page
- ✅ Electric Border on all 4 cards
- ✅ Correct tag display: trending, upcoming, surprise, feature
- ✅ Category filters
- ✅ Footer: **REMOVED**

### Gallery Page
- ✅ Stack animation with 3D transitions
- ✅ No image rotation
- ✅ Navigation properly positioned
- ✅ Footer: **REMOVED**

### Safety Page
- ✅ Lightning background effect
- ✅ Reduced cursor brightness
- ✅ Stack formation guidelines
- ✅ Footer: **REMOVED**

### FAQ Page
- ✅ Animated list with stagger
- ✅ Smooth expand/collapse
- ✅ Footer: **REMOVED**

### Contact Page
- ✅ Business inquiry form
- ✅ Animated form elements
- ✅ Synced contact information
- ✅ Footer: **REMOVED**

---

## 📞 Support

For questions or issues:

1. Check [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)
2. Review this README
3. Search existing GitHub issues
4. Create new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)

---

## 📜 License

This project is private and proprietary. All rights reserved.

---

## 🎉 Acknowledgments

- React Team for the amazing framework
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- Open-source community for inspiration

---

**Made with 🔥 for TK Fireworks**

**Live Site**: [https://benhilfenhaus007.github.io/heisenberg/](https://benhilfenhaus007.github.io/heisenberg/)  
**Version**: 1.0.0  
**Last Updated**: December 25, 2025