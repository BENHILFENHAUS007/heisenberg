# React Bits Implementation Guide - TK Fireworks

Comprehensive documentation for custom React Bits components implementation in the TK Fireworks website.

## 📋 Table of Contents

1. [Components Overview](#components-overview)
2. [Installation Instructions](#installation-instructions)
3. [Component Usage](#component-usage)
4. [File Changes Summary](#file-changes-summary)
5. [GitHub Pages Deployment](#github-pages-deployment)
6. [Troubleshooting](#troubleshooting)

---

## Components Overview

### 1. **ElectricBorder Component** ⚡

**Purpose**: Neon electric border effects for product cards

**Features**:
- Animated electric glow effect
- Flicker animation
- Customizable border colors (cyan, purple, blue, green)
- Responsive design

**Files**:
- `src/components/animations/ElectricBorder.tsx`
- `src/components/animations/ElectricBorder.css`

**Usage**:
```tsx
import { ElectricBorder } from './components/animations/ElectricBorder';

<ElectricBorder borderColor="cyan">
  <div className="product-card">
    {/* Product content */}
  </div>
</ElectricBorder>
```

---

### 2. **StackAnimation Component** 🎴

**Purpose**: Gallery image carousel with slide transitions

**Features**:
- Stacked card animations
- Slide effect (no rotation)
- Navigation controls (prev/next buttons)
- Indicator dots for navigation
- Responsive design

**Files**:
- `src/components/animations/StackAnimation.tsx`
- `src/components/animations/StackAnimation.css`

**Usage**:
```tsx
import { StackAnimation } from './components/animations/StackAnimation';

const galleryImages = [
  { src: '/images/gallery1.png', alt: 'Gallery 1', title: 'Fireworks Display' },
  { src: '/images/gallery2.jpeg', alt: 'Gallery 2', title: 'Night Show' },
];

<StackAnimation images={galleryImages} />
```

---

### 3. **AnimatedList Component** 📋

**Purpose**: FAQ section with animated expand/collapse

**Features**:
- Staggered slide-in animation on load
- Smooth expand/collapse transitions
- Responsive design
- Accessibility features

**Files**:
- `src/components/animations/AnimatedList.tsx`
- `src/components/animations/AnimatedList.css`

**Usage**:
```tsx
import { AnimatedList } from './components/animations/AnimatedList';

const faqItems = [
  {
    id: 1,
    title: 'How to order?',
    content: 'Browse our catalog and place your order...'
  },
  // More items...
];

<AnimatedList items={faqItems} />
```

---

### 4. **LightningBackground Component** ⚡🌩️

**Purpose**: Animated lightning effect for Safety page background

**Features**:
- Animated lightning bolts
- Ambient glow effect
- Adjustable intensity (low, medium, high)
- Dimmed cursor styling
- Full-page background
- Accessibility (respects prefers-reduced-motion)

**Files**:
- `src/components/animations/LightningBackground.tsx`
- `src/components/animations/LightningBackground.css`

**Usage**:
```tsx
import { LightningBackground } from './components/animations/LightningBackground';

<LightningBackground intensity="medium">
  <div className="safety-content">
    {/* Safety guidelines content */}
  </div>
</LightningBackground>
```

---

## Installation Instructions

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager
- Git for version control

### Step 1: Clone the Repository

```bash
git clone https://github.com/BENHILFENHAUS007/heisenberg.git
cd heisenberg
```

### Step 2: Switch to Feature Branch

```bash
git checkout feat/react-bits-animations-final
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Verify Installation

```bash
npm run build
```

Should complete without errors.

### Step 5: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## Component Usage

### In Catalog Page (Products with ElectricBorder)

**File**: `src/pages/Catalog.tsx`

```tsx
import { ElectricBorder } from '../components/animations/ElectricBorder';
import productsData from '../data/products.json';

export const Catalog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {productsData.products.map((product) => (
        <ElectricBorder key={product.id} borderColor="cyan">
          <div className="product-card p-4">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            {product.tag && <span className={`tag tag-${product.tagStyle}`}>{product.tag}</span>}
          </div>
        </ElectricBorder>
      ))}
    </div>
  );
};
```

### In Gallery Page (StackAnimation)

**File**: `src/pages/Gallery.tsx`

```tsx
import { StackAnimation } from '../components/animations/StackAnimation';

export const Gallery = () => {
  const galleryImages = [
    { src: '/images/gallery1.png', alt: 'Gallery 1', title: 'Spectacular Show' },
    { src: '/images/gallery2.jpeg', alt: 'Gallery 2', title: 'Peacock Display' },
    { src: '/images/gallery3.jpeg', alt: 'Gallery 3', title: 'Mega Peacock' },
  ];

  return (
    <div className="gallery-section">
      <h1>Gallery</h1>
      <StackAnimation images={galleryImages} />
    </div>
  );
};
```

### In FAQ Page (AnimatedList)

**File**: `src/pages/FAQ.tsx`

```tsx
import { AnimatedList } from '../components/animations/AnimatedList';
import faqData from '../data/faq.json';

export const FAQ = () => {
  return (
    <div className="faq-section">
      <h1>Frequently Asked Questions</h1>
      <AnimatedList items={faqData.faqs} />
    </div>
  );
};
```

### In Safety Page (LightningBackground)

**File**: `src/pages/Safety.tsx`

```tsx
import { LightningBackground } from '../components/animations/LightningBackground';

export const Safety = () => {
  return (
    <LightningBackground intensity="medium">
      <div className="container mx-auto px-4 py-16">
        <h1>Safety Guidelines</h1>
        {/* Safety content */}
      </div>
    </LightningBackground>
  );
};
```

---

## File Changes Summary

### New Components Created

1. ✅ `src/components/animations/ElectricBorder.tsx`
2. ✅ `src/components/animations/ElectricBorder.css`
3. ✅ `src/components/animations/StackAnimation.tsx`
4. ✅ `src/components/animations/StackAnimation.css`
5. ✅ `src/components/animations/AnimatedList.tsx`
6. ✅ `src/components/animations/AnimatedList.css`
7. ✅ `src/components/animations/LightningBackground.tsx`
8. ✅ `src/components/animations/LightningBackground.css`

### Updated Data Files

1. ✅ `src/data/products.json` - Product data with featured items
2. ✅ `src/data/faq.json` - FAQ questions and answers
3. ✅ `src/data/contact.json` - Contact form and address data

### Page Updates Required

**To be updated in Pages**:
1. `src/pages/Home.tsx` - Update title, remove "Premium Showcase"
2. `src/pages/Catalog.tsx` - Integrate ElectricBorder component
3. `src/pages/Gallery.tsx` - Integrate StackAnimation component
4. `src/pages/FAQ.tsx` - Integrate AnimatedList component
5. `src/pages/Safety.tsx` - Integrate LightningBackground component
6. `src/pages/Contact.tsx` - Single contact form (used in both Contact page and Home footer)
7. `src/components/layout/Footer.tsx` - Remove footer from all pages except Home

---

## GitHub Pages Deployment

### 1. Enable GitHub Pages

```bash
# In your GitHub repository settings:
# Settings > Pages > Build and deployment
# Select: Deploy from a branch
# Select branch: gh-pages
```

### 2. Configure Vite for GitHub Pages

**File**: `vite.config.ts`

```typescript
export default {
  base: '/heisenberg/',  // Replace with your repo name
  // ... other config
}
```

### 3. Update Package.json Scripts

```json
{
  "scripts": {
    "build": "tsc && vite build",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### 4. Deploy to GitHub Pages

```bash
npm run deploy
```

Or use GitHub Actions (recommended):

**File**: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Troubleshooting

### Issue: "Module not found" errors

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: CSS not loading properly

**Solution**: Ensure CSS files are imported in TypeScript files:
```tsx
import './ElectricBorder.css';
```

### Issue: Images not displaying

**Solution**: Verify image paths are correct:
```tsx
// Correct (public folder)
<img src="/images/gallery1.png" />

// Incorrect
<img src="./images/gallery1.png" />
```

### Issue: Animations not smooth

**Solution**: Check browser hardware acceleration:
- Chrome: Settings > Advanced > System > Hardware acceleration (ON)
- Firefox: about:config > gfx.webrender.enabled (TRUE)

### Issue: GitHub Pages not updating

**Solution**:
1. Clear browser cache (Ctrl+Shift+Delete)
2. Check GitHub Actions workflow status
3. Verify `base` in `vite.config.ts` matches repo name

---

## Performance Tips

1. **Lazy Load Images**: Use `loading="lazy"` attribute
2. **Optimize Images**: Compress before adding to public/images
3. **Cache Busting**: Use version queries for assets
4. **Reduce Motion**: Respect `prefers-reduced-motion` setting

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Additional Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [GitHub Pages Docs](https://docs.github.com/pages)

---

**Last Updated**: December 26, 2025
**Version**: 1.0.0
