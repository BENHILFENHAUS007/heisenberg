# 🚀 Netlify Deployment Guide - tkfireworks.com

## ✅ Prerequisites Completed

- ✅ Vite config changed from `/heisenberg/` to `/` (root path)
- ✅ `netlify.toml` created with SPA redirect rules
- ✅ All performance optimizations applied
- ✅ YouTube demo restored
- ✅ Gallery images fixed

---

## 📋 Deployment Steps

### 1️⃣ **Download Repository as ZIP**

You mentioned you already downloaded the repo as ZIP. Perfect!

```bash
# Extract to clean directory
cd ~/Desktop
unzip heisenberg-main.zip
cd heisenberg-main
```

---

### 2️⃣ **Open in VS Code**

```bash
code .
```

---

### 3️⃣ **Install Dependencies**

```bash
npm install
```

**Expected time:** 2-3 minutes

---

### 4️⃣ **Test Locally (Optional but Recommended)**

```bash
npm run dev
```

- Opens at `http://localhost:3000`
- Verify all pages work
- Check images, videos, navigation
- Press `Ctrl+C` to stop

---

### 5️⃣ **Build for Production**

```bash
npm run build
```

- Creates optimized `dist/` folder
- Takes 30-60 seconds
- **Expected output:** `✓ built in 45s`

---

### 6️⃣ **Deploy to Netlify**

#### Option A: Netlify CLI (Recommended)

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

**Follow prompts:**
- Create new site? **Yes**
- Site name: `tkfireworks` (or leave blank for random)
- Publish directory: `dist`

#### Option B: Netlify Web UI (Drag & Drop)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **"Add new site" → "Deploy manually"**
3. Drag & drop the **`dist`** folder
4. Wait for deployment (30 seconds)

---

### 7️⃣ **Connect Custom Domain (GoDaddy)**

#### In Netlify Dashboard:

1. Go to **Site settings → Domain management**
2. Click **"Add custom domain"**
3. Enter: `tkfireworks.com`
4. Click **"Verify"**
5. Netlify will show DNS instructions

#### In GoDaddy Dashboard:

**Based on your screenshot, update these DNS records:**

##### **A Records** (Delete existing, add these):
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 1 Hour
```

##### **CNAME Record** (For www):
```
Type: CNAME
Name: www
Value: tkfireworks.netlify.app (or your Netlify URL)
TTL: 1 Hour
```

##### **Keep These (Don't touch)**:
- NS records: `ns07.domaincontrol.com` & `ns08.domaincontrol.com`
- SOA record
- Domain Connect record

#### DNS Propagation:
- Takes **15 minutes to 48 hours**
- Usually works in **30 minutes**
- Check status: [whatsmydns.net](https://www.whatsmydns.net/#A/tkfireworks.com)

---

### 8️⃣ **Enable HTTPS (Free SSL)**

Netlify automatically provides free SSL via Let's Encrypt.

1. In Netlify: **Site settings → Domain management → HTTPS**
2. Click **"Verify DNS configuration"**
3. Click **"Provision certificate"**
4. Wait 1-2 minutes
5. ✅ **HTTPS enabled!**

---

## 🔧 Environment Variables (If Needed)

If you add API keys later:

1. Netlify Dashboard → **Site settings → Environment variables**
2. Add variables (e.g., `VITE_API_KEY`)
3. Redeploy site

---

## 📁 What You Need

### From Repository:
- ✅ All source code (downloaded as ZIP)
- ✅ `package.json` with dependencies
- ✅ `vite.config.ts` (updated for Netlify)
- ✅ `netlify.toml` (SPA routing)

### From GoDaddy:
- ✅ Domain purchased: `tkfireworks.com`
- ✅ DNS management access

### Tools:
- ✅ VS Code
- ✅ Node.js v18+ (check: `node -v`)
- ✅ npm v9+ (check: `npm -v`)

---

## 🎯 Quick Checklist

```bash
# 1. Extract ZIP
cd ~/path/to/heisenberg-main

# 2. Install
npm install

# 3. Build
npm run build

# 4. Deploy
netlify deploy --prod
# OR drag dist/ to Netlify web UI

# 5. Configure DNS in GoDaddy
# A record: @ → 75.2.60.5
# CNAME: www → your-site.netlify.app

# 6. Wait for DNS (15-30 mins)

# 7. Enable HTTPS in Netlify

# ✅ Done! Visit https://tkfireworks.com
```

---

## 🐛 Troubleshooting

### Issue: "404 Page Not Found" on routes
**Solution:** Check `netlify.toml` exists with SPA redirect

### Issue: Images not loading
**Solution:** Verify base path is `/` in `vite.config.ts`

### Issue: DNS not propagating
**Solution:** Wait 30-60 minutes, check [whatsmydns.net](https://www.whatsmydns.net)

### Issue: Build fails
**Solution:** 
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📞 Support

If issues persist:
- Check Netlify build logs: **Deploys → Latest deploy → Build log**
- Verify DNS: [DNS Checker](https://dnschecker.org/all-dns-records-of-domain.php?query=tkfireworks.com)

---

## 🎉 Success!

Once DNS propagates:
- ✅ Visit `https://tkfireworks.com`
- ✅ All routes work (Home, Products, Gallery, Contact)
- ✅ Images load correctly
- ✅ YouTube videos embedded
- ✅ Fast performance
- ✅ HTTPS enabled

**Your site is LIVE! 🚀**
