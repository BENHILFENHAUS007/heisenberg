# 🚀 React Bits - Quick Reference

## Installation (1 minute)

```bash
# Paste into VS Code terminal:
bash SETUP_INSTALLATION.sh
```

---

## Components Overview

| Component | Location | Page | Effect |
|-----------|----------|------|--------|
| **ElectricBorder** | `src/components/ui/ElectricBorder.tsx` | Products | Pulsing electric glow ⚡ |
| **GooeyNav** | `src/components/ui/GooeyNav.tsx` | All | Stretches on scroll 🫧 |
| **LightningBackground** | `src/components/ui/LightningBackground.tsx` | Safety | Dynamic lightning ⚡ |
| **AnimatedList** | `src/components/ui/AnimatedList.tsx` | FAQ | Smooth accordion 📋 |
| **StackGallery** | `src/components/ui/StackGallery.tsx` | Gallery | Drag/swipe slider 🖼️ |

---

## Copy-Paste Integration Code

### 1️⃣ Products Page (ElectricBorder)

```tsx
import { ElectricBorder } from '@/components/ui';

// Product 1: Magic Peacock (Gold)
<ElectricBorder color="gold" continuous intensity="medium">
  <ProductCard name="Magic Peacock" />
</ElectricBorder>

// Product 2: Mystic Wonder Pack (Cyan)
<ElectricBorder color="cyan" continuous intensity="medium">
  <ProductCard name="Mystic Wonder Pack" />
</ElectricBorder>

// Product 3: (Purple)
<ElectricBorder color="purple" continuous intensity="medium">
  <ProductCard name="Product 3" />
</ElectricBorder>

// Product 4: (Purple)
<ElectricBorder color="purple" continuous intensity="medium">
  <ProductCard name="Product 4" />
</ElectricBorder>
```

---

### 2️⃣ Safety Page (LightningBackground)

```tsx
import { LightningBackground } from '@/components/ui';

<LightningBackground intensity="medium" animated>
  <div className="safety-container">
    <h1>Safety Guidelines</h1>
    {/* Your safety content */}
  </div>
</LightningBackground>

<!-- NO FOOTER on Contact page (already configured ✅) -->
```

---

### 3️⃣ FAQ Page (AnimatedList)

```tsx
import { AnimatedList, type AnimatedListItem } from '@/components/ui';

const faqItems: AnimatedListItem[] = [
  {
    id: 1,
    title: 'Are fireworks safe?',
    content: 'Yes, when used according to regulations...'
  },
  {
    id: 2,
    title: 'What age requirement?',
    content: 'Minimum age varies by location...'
  },
  // Add more FAQ items
];

<AnimatedList items={faqItems} defaultOpen={1} />
```

---

### 4️⃣ Gallery Page (StackGallery)

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
    title: 'Mystic Wonder',
    description: 'Complete light show'
  },
  // Add more gallery items
];

<StackGallery items={galleryItems} autoPlay={false} />
```

---

### 5️⃣ Main Layout (GooeyNav - All Pages)

```tsx
import { GooeyNav } from '@/components/ui';

// Add to your main App.tsx or Layout component:
<GooeyNav isOpen={false} />

// It automatically:
// ✅ Floats at bottom-right
// ✅ Stretches on scroll
// ✅ Has 6 navigation links
// ✅ Works on all pages
```

---

## Color Reference

```css
/* Electric Border Colors */
--gold: rgb(255, 215, 0);           /* Magic Peacock */
--cyan: rgb(0, 212, 255);           /* Mystic Wonder Pack */
--purple: rgb(168, 85, 247);        /* Products 3 & 4 */

/* Glow Effects */
--gold-glow: rgba(255, 215, 0, 0.6);
--cyan-glow: rgba(0, 212, 255, 0.6);
--purple-glow: rgba(168, 85, 247, 0.6);
```

---

## Lightning Intensity

```tsx
// Low - Subtle effect
<LightningBackground intensity="low" />

// Medium - Balanced (recommended)
<LightningBackground intensity="medium" />

// High - Dramatic effect
<LightningBackground intensity="high" />
```

---

## Customization

### Change GooeyNav Links

Edit `src/components/ui/GooeyNav.tsx` lines 92-115:

```tsx
<motion.a href="#/your-route" className="gooey-nav-item">
  Your Link Name
</motion.a>
```

### Change Electric Border Animation Speed

```tsx
<ElectricBorder 
  color="gold" 
  intensity="low"    {/* 4s animation */}
  // intensity="medium" {/* 3s animation */}
  // intensity="high"   {/* 2s animation */}
>
  Content
</ElectricBorder>
```

### Disable Auto-Play Gallery

```tsx
<StackGallery items={items} autoPlay={false} />
```

### Set FAQ Default Open Item

```tsx
<AnimatedList items={faqItems} defaultOpen={1} />
```

---

## Props Quick Reference

### ElectricBorder
```tsx
color?: 'gold' | 'cyan' | 'purple'  // Border color
continuous?: boolean                // Always animate
intensity?: 'low' | 'medium' | 'high' // Speed
className?: string                  // Extra CSS
```

### GooeyNav
```tsx
isOpen?: boolean                    // Initial state
onToggle?: (open: boolean) => void  // Callback
```

### LightningBackground
```tsx
intensity?: 'low' | 'medium' | 'high' // Effect strength
className?: string                  // Extra CSS
animated?: boolean                  // Enable animation
```

### AnimatedList
```tsx
items: AnimatedListItem[]           // FAQ items
className?: string                  // Extra CSS
defaultOpen?: string | number       // Open item ID
```

### StackGallery
```tsx
items: StackItem[]                  // Gallery items
className?: string                  // Extra CSS
autoPlay?: boolean                  // Auto-rotate
autoPlayDelay?: number              // Delay in ms
```

---

## Testing Checklist

- [ ] Run `npm run dev`
- [ ] Check ElectricBorder on products
- [ ] Scroll and watch GooeyNav morph
- [ ] Verify Lightning on Safety page
- [ ] Test FAQ accordion
- [ ] Drag/swipe gallery on mobile
- [ ] Test keyboard navigation
- [ ] Check responsive design
- [ ] Verify NO footer on Contact
- [ ] Run Lighthouse performance test

---

## Performance Tips

```tsx
// ✅ Good - Memoized components
const ProductCard = React.memo(({ item }) => (
  <ElectricBorder color="gold">
    {/* content */}
  </ElectricBorder>
));

// ✅ Good - Code splitting
const StackGallery = lazy(() => import('@/components/ui'));

// ✅ Good - Conditional rendering
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

{!prefersReducedMotion && <LightningBackground />}
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| GooeyNav not visible | Check z-index is 40+, position is fixed |
| ElectricBorder stuttering | Enable GPU acceleration, reduce animations |
| Lightning too intense | Change intensity from 'high' to 'low' |
| Accordion not opening | Verify item IDs are unique |
| Gallery not responsive | Check parent width is 100% |

---

## File Locations

```
✅ Components:
   src/components/ui/ElectricBorder.tsx
   src/components/ui/GooeyNav.tsx
   src/components/ui/LightningBackground.tsx
   src/components/ui/AnimatedList.tsx
   src/components/ui/StackGallery.tsx

✅ Styles:
   src/components/ui/electric-border.css
   src/components/ui/gooey-nav.css
   src/components/ui/lightning-bg.css
   src/components/ui/animated-list.css
   src/components/ui/stack-gallery.css

✅ Exports:
   src/components/ui/index.ts

✅ Documentation:
   REACT_BITS_UPGRADE_GUIDE.md (detailed guide)
   QUICK_REFERENCE.md (this file)
   SETUP_INSTALLATION.sh (setup script)
```

---

## Need More Help?

Check **REACT_BITS_UPGRADE_GUIDE.md** for:
- Detailed component documentation
- Performance optimization tips
- Accessibility guidelines
- Browser compatibility
- Advanced customization

---

## Summary

✅ **5 Components** - Production ready  
✅ **3 Colors** - Electric border variants  
✅ **Scroll Morphing** - Gooey nav effect  
✅ **NO Footer** - Contact page configured  
✅ **Fully Responsive** - Mobile optimized  
✅ **Complete Docs** - Everything explained  

🚀 **Ready to launch!**
