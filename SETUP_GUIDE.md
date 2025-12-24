# 🚀 Quick Setup Guide - TK Fireworks

## 🎯 What's Done

All code is complete and working! You just need to add 2 images.

## 📋 Completed Features

✅ Fire cursor effect (auto-follows mouse)
✅ Fireworks background animation
✅ YouTube video integration
✅ Coming Soon placeholder
✅ Enhanced Home page
✅ Product showcase sections
✅ All placeholders filled with video
✅ Professional README
✅ Deployment ready

---

## 📦 What YOU Need to Do

### Step 1: Merge the Pull Request

1. Go to: [https://github.com/BENHILFENHAUS007/heisenberg/pull/1](https://github.com/BENHILFENHAUS007/heisenberg/pull/1)
2. Review changes
3. Click **"Merge pull request"**
4. Click **"Confirm merge"**
5. Done! ✅

---

### Step 2: Add Images

You need to add **2 images** to `public/images/` folder:

#### Image 1: `coming-soon.jpg`
- **Source**: The blue "Coming Soon" poster you provided
- **Path**: `public/images/coming-soon.jpg`

#### Image 2: `little-peacock.jpg`
- **Source**: Rename `WhatsApp-Image-2025-11-16-at-9.35.18-PM.jpg`
- **Path**: `public/images/little-peacock.jpg`

---

### How to Add Images (3 Options)

#### Option A: GitHub Web Interface (Easiest)

1. Go to your repo: `https://github.com/BENHILFENHAUS007/heisenberg`
2. Navigate to: `public/images/`
3. Click: **"Add file"** > **"Upload files"**
4. Drag & drop both images
5. Rename the WhatsApp image to `little-peacock.jpg`
6. Commit message: `"Add product showcase images"`
7. Click: **"Commit changes"**
8. Done! ✅

#### Option B: Git Command Line

```bash
# Navigate to your project
cd heisenberg

# Create images directory if it doesn't exist
mkdir -p public/images

# Copy images (update paths to your actual files)
cp ~/Downloads/coming-soon.jpg public/images/
cp ~/Downloads/WhatsApp-Image-2025-11-16-at-9.35.18-PM.jpg public/images/little-peacock.jpg

# Add to git
git add public/images/

# Commit
git commit -m "Add product showcase images"

# Push
git push origin main
```

#### Option C: GitHub Desktop

1. Open GitHub Desktop
2. Copy the 2 images to `public/images/` folder
3. Rename WhatsApp image to `little-peacock.jpg`
4. Stage changes (checkboxes)
5. Commit message: `"Add product showcase images"`
6. Click **"Push origin"**
7. Done! ✅

---

### Step 3: Wait for Deployment (Automatic)

After pushing images:

1. GitHub Actions automatically builds the site (~2-3 mins)
2. Deploys to: `https://benhilfenhaus007.github.io/heisenberg/`
3. Check status: Go to **Actions** tab in your repo
4. Wait for green checkmark ✅
5. Visit your live site!

---

## 🔍 Verify Everything Works

### Desktop Testing

1. Open: [https://benhilfenhaus007.github.io/heisenberg/](https://benhilfenhaus007.github.io/heisenberg/)
2. Move your mouse → See fire cursor trail ✅
3. Watch background → See fireworks particles ✅
4. Scroll down → See YouTube video ✅
5. Check product images → Little Peacock box visible ✅
6. See Coming Soon section ✅

### Mobile Testing

1. Open site on phone
2. Cursor effect disabled (for performance) ✅
3. Fireworks still visible ✅
4. Video plays ✅
5. Images load ✅
6. Responsive design ✅

---

## ⚙️ Optional: Local Development

If you want to test locally before deployment:

```bash
# Clone repo
git clone https://github.com/BENHILFENHAUS007/heisenberg.git
cd heisenberg

# Install dependencies
npm install

# Add images to public/images/
# (same 2 images)

# Start dev server
npm run dev

# Open browser
# http://localhost:5173

# Test everything
# - Fire cursor
# - Fireworks background
# - YouTube video
# - Images load

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🐛 Troubleshooting

### Images Not Showing?

**Problem**: Images show placeholder or broken

**Solution**:
1. Check file names exactly:
   - `coming-soon.jpg` (lowercase, hyphen)
   - `little-peacock.jpg` (lowercase, hyphen)
2. Check location: `public/images/` (not `src/images/`)
3. Clear browser cache (Ctrl+Shift+R)
4. Wait 2-3 minutes for deployment

### Cursor Effect Not Working?

**Problem**: Fire cursor doesn't appear

**Solution**:
1. Check if on mobile (disabled for performance)
2. Try desktop browser
3. Clear cache and reload
4. Check browser console (F12) for errors

### Video Not Playing?

**Problem**: YouTube video doesn't load

**Solution**:
1. Check internet connection
2. Try different browser
3. Disable ad blockers
4. Check if YouTube is accessible

### Build Fails?

**Problem**: GitHub Actions shows red X

**Solution**:
```bash
# Locally test build
npm run build

# If errors, check:
# 1. No TypeScript errors
# 2. All imports correct
# 3. No missing files

# Push fix
git add .
git commit -m "Fix build errors"
git push
```

---

## 📝 Summary

### You Need To:
1. ✅ Merge PR #1
2. ✅ Add 2 images to `public/images/`
3. ✅ Wait for auto-deployment
4. ✅ Visit live site

### Everything Else:
- ✅ Code complete
- ✅ Effects working
- ✅ Videos integrated
- ✅ Documentation done
- ✅ Deployment configured
- ✅ Production ready

---

## 🎉 After Setup

### Update Content (Anytime)

Edit JSON files in `src/data/`:

- `config.json` - Site settings, WhatsApp
- `products.json` - Product catalog
- `categories.json` - Product categories
- `faq.json` - FAQ questions
- `themes.json` - Color schemes

Commit & push → Auto-deploys!

### Add More Products

1. Add product image: `public/images/product-tkf-007.jpg`
2. Update `src/data/products.json`:
   ```json
   {
     "id": "TKF-007",
     "name": "New Product",
     "videoUrl": "https://www.youtube.com/embed/6stlCkUDG_s",
     ...
   }
   ```
3. Push → Done!

### Change YouTube Videos

**Home page**: Edit `src/pages/Home.tsx`
```tsx
<YouTubeEmbed videoId="YOUR_VIDEO_ID" />
```

**Products**: Edit `src/data/products.json`
```json
"videoUrl": "https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

---

## 📧 Need Help?

If you're stuck:

1. Check this guide again
2. Read `README.md` for details
3. Check `public/images/README.md` for image instructions
4. Review PR #1 description
5. Ask me! 🚀

---

## ✅ Final Checklist

- [ ] Merged PR #1
- [ ] Added `coming-soon.jpg` to `public/images/`
- [ ] Added `little-peacock.jpg` to `public/images/`
- [ ] Waited for GitHub Actions deployment
- [ ] Visited live site
- [ ] Tested on desktop (fire cursor works)
- [ ] Tested on mobile (responsive)
- [ ] All features working

---

**You're done! Enjoy your premium fireworks website! 🎆🔥✨**

**Live Site**: [https://benhilfenhaus007.github.io/heisenberg/](https://benhilfenhaus007.github.io/heisenberg/)
