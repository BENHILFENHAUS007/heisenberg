# 🚀 React Bits Upgrade Guide - TK Fireworks

**Status**: Work in Progress  
**Branch**: `feature/react-bits-upgrade`  
**Date**: December 25, 2025  

---

## 📋 OVERVIEW

This guide documents the migration of the TK Fireworks website to incorporate advanced React Bits components with animations:

1. **@react-bits/ElectricBorder-JS-CSS** - Electric border effects on product cards
2. **@react-bits/Stack-JS-CSS** - Gallery image stack animation
3. **@react-bits/AnimatedList-JS-CSS** - FAQ accordion with animations
4. **@react-bits/Lightning** - Lightning background effect on Safety page
5. **Gooey Navigation** - Floating bubble nav with scroll effects (Framer Motion)

---

## 🔧 INSTALLATION SCRIPT

Run this in your terminal from the project root:

```bash
#!/bin/bash
# React Bits Upgrade Installation Script

echo "🚀 Installing React Bits Components..."

# Install react-bits components
npm install @react-bits/core
npm install @react-bits/electric-border
npm install @react-bits/stack
npm install @react-bits/animated-list
npm install @react-bits/lightning

# Additional animation dependencies (if needed)
npm install framer-motion --save
npm install lottie-react --save

echo "✅ Installation complete!"
echo "📝 Next steps:"
echo "  1. Review src/components/ui/electric-border.tsx"
echo "  2. Update product cards with ElectricBorder component"
echo "  3. Test animations locally: npm run dev"
```

**OR** Copy-paste this single command:

```bash
npm install @react-bits/core @react-bits/electric-border @react-bits/stack @react-bits/animated-list @react-bits/lightning framer-motion lottie-react && echo "✅ All dependencies installed!"
```

---

## 📦 COMPONENT SPECIFICATIONS

### 1. ⚡ ELECTRIC BORDER - Product Cards

**Location**: `src/components/ProductCard.tsx` (to be updated)  
**File Reference**: `src/components/ui/electric-border.tsx` (to be created)

#### Implementation:
```typescript
import { ElectricBorder } from '@/components/ui/electric-border';

interface ProductCardProps {
  name: string;
  image: string;
  tag?: string;
  borderColor: 'gold' | 'cyan' | 'purple';
}

export const ProductCard = ({ name, image, tag, borderColor }: ProductCardProps) => (
  <ElectricBorder color={borderColor} continuous>
    <div className="product-card">
      <img src={image} alt={name} />
      {tag && <span className="tag">{tag}</span>}
      <h3>{name}</h3>
    </div>
  </ElectricBorder>
);
```

#### Color Scheme:
- **Product 1: Magic Peacock** → `#FFD700` (Gold/Yellow - "spark" theme)
- **Product 2: Mystic Wonder Pack** → `#00D4FF` (Cyan/Turquoise)
- **Product 3 & 4: Coming Soon** → `#A855F7` (Purple/Violet)

---

### 2. 🎞️ STACK ANIMATION - Gallery

**Location**: `src/pages/Gallery.tsx` (to be updated)  
**File Reference**: `src/components/ui/stack-gallery.tsx` (to be created)

#### Implementation:
```typescript
import { Stack } from '@react-bits/stack';

export const GalleryStack = () => (
  <Stack>
    {galleryImages.map((img, idx) => (
      <div key={idx} className="gallery-item">
        <img src={img.url} alt={img.title} />
      </div>
    ))}
  </Stack>
);
```

**Key Requirements**:
- No image rotation (fixed orientation)
- Stack animation on scroll/interaction
- Remove footer from gallery page

---

### 3. 📝 ANIMATED LIST - FAQ Accordion

**Location**: `src/pages/FAQ.tsx` (to be updated)  
**File Reference**: `src/components/ui/animated-list.tsx` (to be created)

#### Implementation:
```typescript
import { AnimatedList } from '@react-bits/animated-list';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQAccordion = ({ items }: { items: FAQItem[] }) => (
  <AnimatedList>
    {items.map((item, idx) => (
      <FAQItem key={idx} question={item.question} answer={item.answer} />
    ))}
  </AnimatedList>
);
```

**Requirements**:
- Smooth expand/collapse animations
- Remove footer from FAQ page

---

### 4. ⚡ LIGHTNING BACKGROUND - Safety Page

**Location**: `src/pages/Safety.tsx` (to be updated)  
**File Reference**: `src/components/ui/lightning-bg.tsx` (to be created)

#### Implementation:
```typescript
import { LightningBackground } from '@react-bits/lightning';

export const SafetyPage = () => (
  <div className="relative">
    <LightningBackground className="absolute inset-0" />
    <div className="relative z-10">
      {/* Safety content here */}
    </div>
  </div>
);
```

**Special Requirements**:
- Lightning/electric effect animation in background
- Reduced cursor brightness
- Content layered on top (z-index handling)

---

### 5. 🎈 GOOEY NAVIGATION - Header

**Location**: `src/components/Navigation.tsx` (to be updated)  
**File Reference**: `src/components/ui/gooey-nav.tsx` (to be created)

#### Implementation (Framer Motion):
```typescript
import { motion } from 'framer-motion';

export const GooeyNav = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="floating-bubble-nav"
      animate={{
        y: scrollY * 0.5,
        pathLength: Math.min(1, scrollY / 300),
      }}
    >
      {/* Navigation items */}
    </motion.nav>
  );
};
```

**Requirements**:
- Floating bubble design
- Stretches/gooeys on scroll
- Smooth morphing transitions

---

## 📄 FILE STRUCTURE CHANGES

```
src/
├── components/
│   ├── ui/
│   │   ├── electric-border.tsx          [NEW]
│   │   ├── stack-gallery.tsx            [NEW]
│   │   ├── animated-list.tsx            [NEW]
│   │   ├── lightning-bg.tsx             [NEW]
│   │   └── gooey-nav.tsx                [NEW]
│   ├── Navigation.tsx                   [MODIFIED - add gooey effect]
│   ├── ProductCard.tsx                  [MODIFIED - add electric border]
│   └── ...
├── pages/
│   ├── Gallery.tsx                      [MODIFIED - add stack, remove footer]
│   ├── FAQ.tsx                          [MODIFIED - add animated list, remove footer]
│   ├── Safety.tsx                       [MODIFIED - add lightning bg]
│   ├── Contact.tsx                      [MODIFIED - remove footer]
│   └── ...
├── styles/
│   └── animations.css                   [NEW/UPDATED - keyframes for effects]
└── ...
```

---

## ✅ PAGE-BY-PAGE CHECKLIST

### HOME PAGE
- [x] Keep existing footer
- [x] Add gooey navigation bubble (scroll effect)
- [x] Fix browser tab title (remove "Premium Showcase")
- [x] Keep all existing components

### PRODUCTS PAGE
- [ ] Replace placeholder product data with 4 cards:
  1. Magic Peacock (TRENDING tag) - Gold electric border
  2. Mystic Wonder Pack - Cyan electric border
  3. Coming Soon (SURPRISE tag) - Purple electric border
  4. Coming Soon (FEATURE tag) - Purple electric border
- [ ] Implement continuous electric border animation
- [ ] Remove footer
- [ ] Keep category filters

### GALLERY PAGE
- [ ] Implement Stack animation for images
- [ ] Remove image rotation
- [ ] Remove footer
- [ ] Keep navigation

### SAFETY PAGE
- [ ] Add Lightning background effect
- [ ] Reduce cursor brightness
- [ ] Keep content layout
- [ ] Keep footer (on this page only besides home)

### FAQ PAGE
- [ ] Replace static list with AnimatedList accordion
- [ ] Smooth expand/collapse animations
- [ ] Remove footer

### CONTACT PAGE
- [ ] Remove footer (strictly no footer)
- [ ] Keep form layout

---

## 🚀 DEPLOYMENT WORKFLOW

1. **Local Development**:
   ```bash
   npm install  # Install all dependencies
   npm run dev  # Start development server
   ```

2. **Build & Test**:
   ```bash
   npm run build  # Build for production
   npm run preview  # Preview build locally
   ```

3. **Git Workflow**:
   ```bash
   # Already on feature/react-bits-upgrade branch
   git add .
   git commit -m "feat: implement react-bits components with animations"
   git push origin feature/react-bits-upgrade
   ```

4. **GitHub Pages Deployment**:
   ```bash
   npm run deploy  # Automatically builds and deploys to gh-pages
   ```

---

## 🧪 TESTING CHECKLIST

- [ ] All components render without errors
- [ ] Electric borders animate continuously
- [ ] Gooey nav stretches on scroll
- [ ] Stack gallery displays correctly (no rotation)
- [ ] FAQ accordion expands/collapses smoothly
- [ ] Lightning background visible on Safety page
- [ ] Footer removed from all pages except Home & Safety
- [ ] Browser tab title fixed (no "Premium Showcase")
- [ ] Build completes successfully
- [ ] GitHub Pages deployment works

---

## 🤝 PR REVIEW CHECKLIST

Before creating PR, verify:

- [ ] All new components created in `src/components/ui/`
- [ ] TypeScript types properly defined
- [ ] Tailwind CSS classes used for styling
- [ ] No breaking changes to existing functionality
- [ ] Responsive design maintained
- [ ] Animation performance optimized
- [ ] Code follows project conventions
- [ ] README.md updated with new setup

---

## 📝 NOTES

- **Electric Border Colors**: RGB hex values for consistency
- **Animation Timing**: Use Framer Motion defaults or custom easing curves
- **Footer Removal**: Use CSS `display: none` or conditional rendering
- **GitHub Pages**: Base path already configured in vite.config

---

## 🆘 TROUBLESHOOTING

### Issue: Components not importing
**Solution**: Ensure all react-bits packages are installed and tsconfig paths are configured

### Issue: Animations laggy
**Solution**: Use `will-change: transform` and `transform: translateZ(0)` for GPU acceleration

### Issue: Build fails
**Solution**: Check TypeScript compilation: `npm run build`

---

**Next Step**: Run installation script and begin component implementation! 🎉
