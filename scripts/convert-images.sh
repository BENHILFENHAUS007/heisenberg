#!/bin/bash

# Image Conversion Script
# Converts PNG gallery images to JPEG format
# Usage: bash scripts/convert-images.sh

set -e

echo "🎨 Starting image conversion..."
echo ""

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "⚠️  ImageMagick not found. Installing..."
    sudo apt-get update -qq
    sudo apt-get install -y -qq imagemagick
fi

echo "✅ ImageMagick ready"
echo ""

# Convert gallery2.png to gallery2.jpeg
if [ -f "public/images/gallery2.png" ]; then
    echo "🔄 Converting gallery2.png to gallery2.jpeg..."
    convert public/images/gallery2.png \
        -quality 85 \
        -strip \
        -resize 1920x1080\> \
        public/images/gallery2.jpeg
    
    SIZE_BEFORE=$(du -h public/images/gallery2.png | cut -f1)
    SIZE_AFTER=$(du -h public/images/gallery2.jpeg | cut -f1)
    echo "   Before: $SIZE_BEFORE (PNG)"
    echo "   After:  $SIZE_AFTER (JPEG)"
    echo "   ✅ gallery2.jpeg created"
    echo ""
else
    echo "❌ gallery2.png not found"
    echo ""
fi

# Convert gallery3.png to gallery3.jpeg
if [ -f "public/images/gallery3.png" ]; then
    echo "🔄 Converting gallery3.png to gallery3.jpeg..."
    convert public/images/gallery3.png \
        -quality 85 \
        -strip \
        -resize 1920x1080\> \
        public/images/gallery3.jpeg
    
    SIZE_BEFORE=$(du -h public/images/gallery3.png | cut -f1)
    SIZE_AFTER=$(du -h public/images/gallery3.jpeg | cut -f1)
    echo "   Before: $SIZE_BEFORE (PNG)"
    echo "   After:  $SIZE_AFTER (JPEG)"
    echo "   ✅ gallery3.jpeg created"
    echo ""
else
    echo "❌ gallery3.png not found"
    echo ""
fi

echo "✨ Conversion complete!"
echo ""
echo "📊 Final Summary:"
ls -lh public/images/gallery*.jpeg 2>/dev/null || echo "   No JPEG files found"
