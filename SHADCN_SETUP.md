# 🚀 Shadcn Setup Instructions

## ✅ Step 1: Install Dependencies

```bash
# Install @types/node for path resolution
npm install -D @types/node
```

## ✅ Step 2: Initialize Shadcn

```bash
npx shadcn@latest init
```

### When Prompted, Choose:
- **TypeScript**: Yes
- **Style**: Default
- **Base color**: Slate (or your preference)
- **CSS variables**: Yes
- **Import alias**: `@/*` (default)
- **React Server Components**: No
- **Components directory**: `src/components`
- **Utils directory**: `src/lib/utils`

## ✅ Step 3: Add React-Bits Components

```bash
# 1. GooeyNav for Navigation
npx shadcn@latest add @react-bits/GooeyNav-JS-CSS

# 2. ElectricBorder for Products
npx shadcn@latest add @react-bits/ElectricBorder-JS-CSS

# 3. Lightning for Gallery
npx shadcn@latest add @react-bits/Lightning-JS-CSS

# 4. SplashCursor for Contact
npx shadcn@latest add @react-bits/SplashCursor-JS-CSS
```

## ✅ Step 4: Verify Installation

Check that these files were created:
- `src/components/ui/gooey-nav.tsx`
- `src/components/ui/electric-border.tsx`
- `src/components/ui/lightning.tsx`
- `src/components/ui/splash-cursor.tsx`
- `src/lib/utils.ts`
- `components.json`

## ✅ Step 5: Test the Build

```bash
npm run build
```

If successful, you're ready to go! 🎉

## 🆘 Troubleshooting

### Issue: "No import alias found"
**Solution**: Already fixed in tsconfig.json and vite.config.ts

### Issue: "Cannot find module '@/..."
**Solution**: Restart your dev server after shadcn init

### Issue: Components not found
**Solution**: Make sure you ran `npx shadcn@latest init` first

## 📝 Next Steps

After successful installation:
1. Commit the generated files
2. Push to GitHub
3. The app will automatically use the new components
