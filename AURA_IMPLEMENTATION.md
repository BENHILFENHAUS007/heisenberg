# 🌌 Aura Background Implementation Guide

## Overview

The **Interactive Aura Background** creates a premium, cursor-responsive gradient effect similar to advanced.team. This document explains how it works and how to customize it.

---

## ✨ Visual Effect

### What You'll See:
- Multiple colored gradient orbs
- Smooth following of cursor movement
- Layered depth with different speeds
- Beautiful color blending
- No hard edges or harsh transitions

### Colors Used:
1. **Purple** - Primary aura (follows closely)
2. **Blue** - Secondary layer (medium speed)
3. **Teal** - Background layer (slow)
4. **Pink** - Accent highlights
5. **Orange** - Warm undertones

---

## 🛠️ Technical Implementation

### Component Location
```
src/components/effects/AuraBackground.tsx
```

### How It Works

#### 1. Canvas Setup
```typescript
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

#### 2. Orb System
Each orb has:
- **Position**: Current x, y coordinates
- **Target**: Mouse cursor position
- **Speed**: How fast it follows (0.05 - 0.15)
- **Size**: Radius (400-600px)
- **Color**: RGBA gradient
- **Blur**: Amount of blur (80-120px)
- **Opacity**: Transparency (0.25-0.6)

#### 3. Animation Loop
```typescript
const animate = () => {
  // 1. Clear canvas
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, width, height);

  // 2. Update & draw each orb
  orbs.forEach(orb => {
    // Smooth interpolation
    orb.x += (targetX - orb.x) * orb.speed;
    orb.y += (targetY - orb.y) * orb.speed;

    // Create gradient
    const gradient = ctx.createRadialGradient(
      orb.x, orb.y, 0,
      orb.x, orb.y, orb.size
    );

    // Apply blur & blend
    ctx.filter = `blur(${orb.blur}px)`;
    ctx.globalCompositeOperation = 'screen';

    // Draw
    ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
    ctx.fill();
  });

  // 3. Next frame
  requestAnimationFrame(animate);
};
```

---

## 🎨 Customization

### Change Colors

Edit the `orbs` array in `AuraBackground.tsx`:

```typescript
const orbs: AuraOrb[] = [
  {
    // ... other properties
    color: 'rgba(YOUR_R, YOUR_G, YOUR_B, YOUR_ALPHA)',
    // Example: 'rgba(255, 0, 0, 0.5)' for red
  },
];
```

#### Recommended Color Palettes:

**Purple Dream** (current):
```typescript
'rgba(88, 28, 135, 0.4)'   // Purple
'rgba(29, 78, 216, 0.35)'  // Blue
'rgba(5, 150, 105, 0.3)'   // Teal
'rgba(219, 39, 119, 0.25)' // Pink
'rgba(234, 88, 12, 0.2)'   // Orange
```

**Fire & Ice**:
```typescript
'rgba(239, 68, 68, 0.4)'   // Red
'rgba(249, 115, 22, 0.35)' // Orange
'rgba(234, 179, 8, 0.3)'   // Yellow
'rgba(59, 130, 246, 0.25)' // Blue
'rgba(139, 92, 246, 0.2)'  // Purple
```

**Ocean Depths**:
```typescript
'rgba(6, 182, 212, 0.4)'   // Cyan
'rgba(14, 116, 144, 0.35)' // Teal
'rgba(30, 64, 175, 0.3)'   // Blue
'rgba(67, 56, 202, 0.25)'  // Indigo
'rgba(109, 40, 217, 0.2)'  // Purple
```

**Sunset Vibes**:
```typescript
'rgba(251, 146, 60, 0.4)'  // Orange
'rgba(251, 113, 133, 0.35)'// Pink
'rgba(244, 63, 94, 0.3)'   // Rose
'rgba(190, 24, 93, 0.25)'  // Pink-Red
'rgba(126, 34, 206, 0.2)'  // Purple
```

### Adjust Speed

Change the `speed` property:

```typescript
speed: 0.15  // Fast follow (0.0 - 1.0)
speed: 0.08  // Medium
speed: 0.05  // Slow, creates depth
```

**Tips**:
- Lower speed = more lag, creates depth
- Higher speed = follows closely
- Mix speeds for layered effect
- Recommended range: 0.05 - 0.20

### Change Blur Amount

```typescript
blur: 80   // Less blur, sharper
blur: 120  // More blur, softer
```

**Recommended**: 80-140px

### Adjust Size

```typescript
size: 400  // Smaller orbs
size: 600  // Larger orbs
```

**Recommended**: 350-650px

### Modify Opacity

```typescript
opacity: 0.3  // More subtle
opacity: 0.6  // More visible
```

**Recommended**: 0.2-0.7

---

## 📊 Performance Tuning

### Reduce Number of Orbs

**Current**: 5 orbs

```typescript
const orbs: AuraOrb[] = [
  // Remove some orbs for better performance
  { /* orb 1 */ },
  { /* orb 2 */ },
  { /* orb 3 */ },
  // Removed orb 4 & 5
];
```

**Impact**: Fewer orbs = better FPS on low-end devices

### Lower Canvas Resolution

```typescript
const scale = 0.75; // 75% resolution
canvas.width = window.innerWidth * scale;
canvas.height = window.innerHeight * scale;
```

**Impact**: Lower res = better performance, slightly blurrier

### Throttle Updates

```typescript
let lastUpdate = 0;
const onMouseMove = (e: MouseEvent) => {
  const now = Date.now();
  if (now - lastUpdate < 16) return; // 60fps max
  lastUpdate = now;
  // ... update logic
};
```

---

## 📱 Mobile Optimization

### Current Behavior:
- Aura is **visible** on mobile
- But **doesn't follow cursor** (no cursor on touch devices)
- Orbs stay centered on screen
- Still looks good as ambient background

### Touch Support (Optional)

Add touch tracking:

```typescript
const onTouchMove = (e: TouchEvent) => {
  const touch = e.touches[0];
  mouseX = touch.clientX;
  mouseY = touch.clientY;
  orbs.forEach(orb => {
    orb.targetX = mouseX;
    orb.targetY = mouseY;
  });
};

window.addEventListener('touchmove', onTouchMove);
```

**Note**: This can drain battery on mobile!

---

## 🔧 Advanced Customization

### Add More Gradient Stops

```typescript
const gradient = ctx.createRadialGradient(
  orb.x, orb.y, 0,
  orb.x, orb.y, orb.size
);

// More stops = smoother gradient
gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity})`);
gradient.addColorStop(0.2, `rgba(${r}, ${g}, ${b}, ${opacity * 0.8})`);
gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${opacity * 0.6})`);
gradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${opacity * 0.4})`);
gradient.addColorStop(0.8, `rgba(${r}, ${g}, ${b}, ${opacity * 0.2})`);
gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
```

### Change Blend Mode

```typescript
ctx.globalCompositeOperation = 'screen';    // Current (brighten)
ctx.globalCompositeOperation = 'multiply';  // Darken
ctx.globalCompositeOperation = 'overlay';   // Contrast
ctx.globalCompositeOperation = 'lighten';   // Light blend
```

**Recommended**: `'screen'` for bright auras

### Add Pulsing Effect

```typescript
let pulse = 0;

const drawOrb = (orb: AuraOrb) => {
  pulse += 0.02;
  const pulseFactor = 1 + Math.sin(pulse) * 0.1; // ±10%
  const size = orb.size * pulseFactor;
  // ... rest of drawing code
};
```

### Add Mouse Interaction Strength

```typescript
let velocity = 0;

const onMouseMove = (e: MouseEvent) => {
  const dx = e.movementX;
  const dy = e.movementY;
  velocity = Math.sqrt(dx * dx + dy * dy);
  
  // Larger aura on fast movement
  orbs[0].size = 600 + velocity * 2;
};
```

---

## 🛡️ Troubleshooting

### Aura Not Showing

**Check**:
1. Is component imported in `App.tsx`?
2. Is canvas z-index correct? (should be 0)
3. Are colors too transparent?
4. Is canvas size correct?

**Debug**:
```typescript
console.log('Canvas size:', canvas.width, canvas.height);
console.log('Orbs:', orbs);
```

### Poor Performance

**Solutions**:
1. Reduce number of orbs (5 → 3)
2. Lower blur amount (120 → 80)
3. Decrease canvas resolution
4. Remove touch tracking on mobile

### Aura Too Subtle

**Increase**:
- Opacity values (0.3 → 0.6)
- Orb sizes (400 → 600)
- Number of orbs (3 → 5)

### Aura Too Bright

**Decrease**:
- Opacity values (0.6 → 0.3)
- Remove brightest orbs
- Change blend mode

---

## 📝 Examples

### Minimal Aura (2 orbs, fast performance)

```typescript
const orbs: AuraOrb[] = [
  {
    x: mouseX, y: mouseY,
    targetX: mouseX, targetY: mouseY,
    size: 500,
    speed: 0.15,
    color: 'rgba(147, 51, 234, 0.5)', // Purple
    blur: 100,
    opacity: 0.5,
  },
  {
    x: mouseX, y: mouseY,
    targetX: mouseX, targetY: mouseY,
    size: 450,
    speed: 0.08,
    color: 'rgba(59, 130, 246, 0.4)', // Blue
    blur: 120,
    opacity: 0.4,
  },
];
```

### Maximum Depth (7 orbs, ultra premium)

```typescript
const orbs: AuraOrb[] = [
  // Ultra fast follow
  { size: 600, speed: 0.20, color: 'rgba(88, 28, 135, 0.5)', blur: 80, opacity: 0.5 },
  
  // Fast follow
  { size: 550, speed: 0.15, color: 'rgba(29, 78, 216, 0.4)', blur: 90, opacity: 0.4 },
  
  // Medium
  { size: 500, speed: 0.10, color: 'rgba(5, 150, 105, 0.35)', blur: 100, opacity: 0.35 },
  
  // Medium-slow
  { size: 450, speed: 0.08, color: 'rgba(219, 39, 119, 0.3)', blur: 110, opacity: 0.3 },
  
  // Slow
  { size: 480, speed: 0.06, color: 'rgba(234, 88, 12, 0.25)', blur: 120, opacity: 0.25 },
  
  // Very slow (background)
  { size: 520, speed: 0.04, color: 'rgba(168, 85, 247, 0.2)', blur: 130, opacity: 0.2 },
  
  // Ultra slow (ambient)
  { size: 550, speed: 0.02, color: 'rgba(236, 72, 153, 0.15)', blur: 140, opacity: 0.15 },
];
```

---

## 🔗 Related Files

- **Component**: `src/components/effects/AuraBackground.tsx`
- **Usage**: `src/App.tsx` (imported here)
- **Styling**: Works with all pages automatically
- **Fire Cursor**: `src/hooks/FireCursorPro.ts` (complementary effect)

---

## 💡 Tips

1. **Depth**: Use different speeds for layered effect
2. **Colors**: Limit to 3-5 colors for harmony
3. **Opacity**: Keep low (0.2-0.6) for subtlety
4. **Blur**: Higher blur = softer, more premium
5. **Size**: Larger orbs = more coverage
6. **Testing**: Test on both desktop and mobile
7. **Performance**: Monitor FPS in dev tools

---

**Need help customizing? Check the code or ask! 🚀**
