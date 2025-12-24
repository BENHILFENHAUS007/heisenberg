# Images Directory

This directory contains all static images used in the TK Fireworks website.

## Required Images

Please add the following images to this directory:

### 1. `coming-soon.jpg`
- **Source**: Provided by you
- **Description**: "Coming Soon" promotional poster with rocket and calendar graphics
- **Dimensions**: Recommended 1920x1080px (16:9 ratio)
- **Usage**: Used as placeholder for upcoming products and features

### 2. `little-peacock.jpg`
- **Source**: WhatsApp Image 2025-11-16 at 9.35.18 PM.jpeg
- **Description**: Little Peacock fireworks product box
- **Dimensions**: Original size is fine
- **Usage**: Featured product showcase on home page

## How to Add Images

### Option 1: Via GitHub Web Interface
1. Navigate to `public/images/` in your repository
2. Click "Add file" > "Upload files"
3. Drag and drop the images
4. Commit changes

### Option 2: Via Git Command Line
```bash
cd public/images
cp /path/to/coming-soon.jpg .
cp /path/to/little-peacock.jpg .
git add .
git commit -m "Add product showcase images"
git push
```

### Option 3: Via GitHub Desktop
1. Copy images to `public/images/` folder
2. Open GitHub Desktop
3. Stage changes
4. Commit and push

## Image Optimization Tips

- Use WebP format for better compression (optional)
- Compress images before uploading (use tools like TinyPNG, Squoosh)
- Keep file sizes under 500KB for faster loading
- Use descriptive filenames (kebab-case preferred)

## Future Images

As you expand the catalog, add product images here following this naming convention:
- `product-{id}.jpg` - e.g., `product-tkf-001.jpg`
- `banner-{name}.jpg` - e.g., `banner-diwali-2025.jpg`
- `gallery-{number}.jpg` - e.g., `gallery-001.jpg`
