# 🚀 React Bits Upgrade Guide

## Overview

This guide covers the complete React Bits upgrade for TK Fireworks with 5 new animation components:

1. **🎯 Gooey Navigation** - Floating bubble that stretches/gooeys when scrolling
2. **⚡ Electric Border** - Continuous electric animation on product cards (3 color variants)
3. **🔥 Lightning Background** - Safety page with dynamic lightning animation
4. **📋 Animated List** - FAQ accordion with smooth animations
5. **🖼️ Stack Gallery** - Product gallery with drag & swipe support

---

## Installation

### Quick Setup (Copy-Paste)

```bash
# Copy and paste the entire SETUP_INSTALLATION.sh into your VS Code terminal
# The script handles all dependencies automatically
```

### Manual Installation

If you prefer manual setup:

```bash
# Core dependencies
npm install framer-motion@latest lottie-react

# Dev dependencies
npm install --save-dev @types/node
```

---

## Component Usage

### 1. 🔴 Electric Border (Products Page)

**For Magic Peacock Product:**
```tsx
import { ElectricBorder } from '@/components/ui';

<ElectricBorder color="gold" continuous>
  <div className="product-card">
    {/* Product content */}
  </div>
</ElectricBorder>
```

**For Mystic Wonder Pack:**
```tsx
<ElectricBorder color="cyan" continuous>
  <div className="product-card">
    {/* Product content */}
  </div>
</ElectricBorder>
```

**For Remaining Products (3 & 4):**
```tsx
<ElectricBorder color="purple" continuous>
  <div className="product-card">
    {/* Product content */}
  </div>
</ElectricBorder>
```

#### ElectricBorder Props:
```tsx
interface ElectricBorderProps {
  children: React.ReactNode;           // Your content
  color?: 'gold' | 'cyan' | 'purple'; // Border color
  continuous?: boolean;                // Always animate?
  intensity?: 'low' | 'medium' | 'high'; // Animation speed
  className?: string;                  // Additional CSS
}
```

---

### 2. 🎯 Gooey Navigation (All Pages)

**Add to Main Layout:**
```tsx
import { GooeyNav } from '@/components/ui';

<GooeyNav 
  isOpen={false}
  onToggle={(open) => console.log('Nav:', open)}
/>
```

#### GooeyNav Props:
```tsx
interface GooeyNavProps {
  isOpen?: boolean;                    // Initial state
  onToggle?: (open: boolean) => void;  // Toggle callback
}
```

#### Features:
- ✅ Stretches/gooeys on scroll
- ✅ Morphs smoothly with scroll position
- ✅ 6 navigation links built-in
- ✅ Backdrop blur effect
- ✅ Smooth spring animations
- ✅ Mobile responsive

---

### 3. ⚡ Lightning Background (Safety Page)

**Usage:**
```tsx
import { LightningBackground } from '@/components/ui';

<LightningBackground intensity="medium" animated>
  <div className="safety-content">
    {/* Your safety content here */}
  </div>
</LightningBackground>
```

#### LightningBackground Props:
```tsx
interface LightningBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';  // Animation intensity
  className?: string;                      // Additional CSS
  animated?: boolean;                      // Enable animation?
}
```

#### Features:
- ✅ Dynamic lightning bolts
- ✅ Ambient electric glow
- ✅ Canvas-based rendering
- ✅ Smooth fade trails
- ✅ Reduced motion support
- ✅ Fully responsive

---

### 4. 📋 Animated List (FAQ Page)

**Usage:**
```tsx
import { AnimatedList, type AnimatedListItem } from '@/components/ui';

const faqItems: AnimatedListItem[] = [
  {
    id: 1,
    title: 'Are fireworks safe?',
    content: 'Yes, when used according to local regulations and safety guidelines...'
  },
  {
    id: 2,
    title: 'What age is required?',
    content: 'Minimum age varies by location. Always check local laws.'
  },
  // ... more items
];

<AnimatedList 
  items={faqItems}
  defaultOpen={1}
/>
```

#### AnimatedList Props:
```tsx
interface AnimatedListProps {
  items: AnimatedListItem[];              // Accordion items
  className?: string;                     // Additional CSS
  defaultOpen?: string | number;          // Initially open item ID
}

interface AnimatedListItem {
  id: string | number;                    // Unique identifier
  title: string;                          // Question/title
  content: string | React.ReactNode;      // Answer/content
}
```

#### Features:
- ✅ Smooth expand/collapse
- ✅ Single item open mode
- ✅ Staggered entrance animation
- ✅ Keyboard accessible
- ✅ Custom HTML content support

---

### 5. 🖼️ Stack Gallery (Gallery Page)

**Usage:**
```tsx
import { StackGallery, type StackItem } from '@/components/ui';

const galleryItems: StackItem[] = [
  {
    id: 1,
    image: '/images/peacock.jpg',
    title: 'Magic Peacock',
    description: 'Premium fireworks display'
  },
  {
    id: 2,
    image: '/images/wonder.jpg',
    title: 'Mystic Wonder Pack',
    description: 'Complete light show'
  },
  // ... more items
];

<StackGallery 
  items={galleryItems}
  autoPlay={false}
  autoPlayDelay={4000}
/>
```

#### StackGallery Props:
```tsx
interface StackGalleryProps {
  items: StackItem[];                     // Gallery items
  className?: string;                     // Additional CSS
  autoPlay?: boolean;                     // Auto-rotate?
  autoPlayDelay?: number;                 // Delay in ms
}

interface StackItem {
  id: string | number;                    // Unique identifier
  image: string;                          // Image URL
  title: string;                          // Display title
  description?: string;                   // Display description
}
```

#### Features:
- ✅ Drag and swipe support
- ✅ Auto-play with configurable delay
- ✅ Navigation buttons
- ✅ Dot indicators
- ✅ Smooth spring transitions
- ✅ Mobile optimized

---

## Color System

### Electric Border Colors:

| Color | Hex | Use Case |
|-------|-----|----------|
| **Gold** | `rgb(255, 215, 0)` | Magic Peacock |
| **Cyan** | `rgb(0, 212, 255)` | Mystic Wonder Pack |
| **Purple** | `rgb(168, 85, 247)` | Products 3 & 4 |

### CSS Variables:
```css
--border-color: rgb(255, 215, 0);     /* Primary border */
--glow-color: rgba(255, 215, 0, 0.6); /* Glow effect */
--animation-duration: 3s;             /* Animation speed */
```

---

## Customization

### Custom Electric Border Color:

```tsx
const customColor = {
  primary: 'rgb(255, 100, 200)',
  glow: 'rgba(255, 100, 200, 0.6)',
};

// Extend the component or use inline styles
<div style={{
  '--border-color': customColor.primary,
  '--glow-color': customColor.glow,
} as CSSProperties}>
  <ElectricBorder>
    {/* content */}
  </ElectricBorder>
</div>
```

### Custom GooeyNav Links:

Edit `src/components/ui/GooeyNav.tsx` lines 92-115:
```tsx
<motion.a href="#/your-route" className="gooey-nav-item">
  Your Link
</motion.a>
```

### Custom Lightning Intensity:

```tsx
// Reduce intensity for subtle effect
<LightningBackground intensity="low" />

// Increase for dramatic effect
<LightningBackground intensity="high" />
```

---

## Integration Checklist

### Catalog/Products Page:
- [ ] Import `ElectricBorder` component
- [ ] Wrap each product card with ElectricBorder
- [ ] Apply correct color (gold/cyan/purple)
- [ ] Test scroll morphing with GooeyNav
- [ ] Verify animation performance

### Safety Page:
- [ ] Import `LightningBackground` component
- [ ] Replace existing background or wrap content
- [ ] Set intensity level (low/medium/high)
- [ ] Add safety content inside
- [ ] Verify no footer on Contact page ✅ (already configured)

### FAQ Page:
- [ ] Import `AnimatedList` component
- [ ] Create FAQ items array
- [ ] Set defaultOpen ID (optional)
- [ ] Test keyboard navigation
- [ ] Verify accordion behavior

### Gallery Page:
- [ ] Import `StackGallery` component
- [ ] Prepare gallery items with images
- [ ] Configure auto-play if desired
- [ ] Test drag/swipe on mobile
- [ ] Verify image loading

### Main Layout:
- [ ] Import `GooeyNav` component
- [ ] Place in fixed position (bottom-right)
- [ ] Customize links if needed
- [ ] Test scroll behavior
- [ ] Verify z-index layering

---

## Performance Optimization

### Tips for Production:

1. **Image Optimization:**
   ```bash
   # Optimize images for gallery
   npm install sharp
   ```

2. **Code Splitting:**
   ```tsx
   const StackGallery = lazy(() => import('@/components/ui/StackGallery'));
   ```

3. **Lightning Canvas Throttling:**
   The LightningBackground already uses requestAnimationFrame for smooth 60fps

4. **Disable animations on low-end devices:**
   ```tsx
   const prefersReducedMotion = window.matchMedia(
     '(prefers-reduced-motion: reduce)'
   ).matches;
   ```

---

## Troubleshooting

### GooeyNav not appearing:
- ✅ Check z-index: should be 40 or higher
- ✅ Verify position: fixed, bottom-right
- ✅ Ensure not overflow: hidden on parent

### Electric Border animation stuttering:
- ✅ Enable GPU acceleration (CSS: `will-change: transform`)
- ✅ Reduce number of simultaneous animations
- ✅ Check for other heavy animations on same page

### Lightning Background performance issues:
- ✅ Reduce `intensity` level
- ✅ Disable on mobile (use conditional render)
- ✅ Clear canvas regularly (already implemented)

### Animated List not opening:
- ✅ Check item IDs are unique
- ✅ Verify onClick handler is firing
- ✅ Ensure Framer Motion is installed

### Gallery not responsive:
- ✅ Use correct aspect ratio in container
- ✅ Check CSS media queries
- ✅ Verify parent width is 100%

---

## Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Perfect support |
| Firefox | ✅ Full | Perfect support |
| Safari | ✅ Full | Full GPU acceleration |
| Edge | ✅ Full | Chromium-based |
| Mobile | ✅ Optimized | Touch events supported |

---

## Next Steps

1. **Run Installation Script:**
   ```bash
   bash SETUP_INSTALLATION.sh
   ```

2. **Start Development:**
   ```bash
   npm run dev
   ```

3. **Integrate Components:**
   - Add ElectricBorder to products
   - Add Lightning to safety page
   - Add AnimatedList to FAQ
   - Add StackGallery to gallery
   - GooeyNav auto-integrated

4. **Test All Pages:**
   - Scroll morphing (GooeyNav)
   - Electric borders animate
   - Lightning effects smooth
   - Accordions responsive
   - Gallery swipe working

5. **Create Pull Request:**
   ```bash
   git push origin feature/react-bits-upgrade
   ```
   Then open PR on GitHub

---

## Support & Documentation

- **Framer Motion Docs**: https://www.framer.com/motion/
- **React Best Practices**: https://react.dev
- **CSS Animations**: https://developer.mozilla.org/en-US/docs/Web/CSS/animation

---

**🎉 Ready to upgrade! Let's make TK Fireworks shine!**
