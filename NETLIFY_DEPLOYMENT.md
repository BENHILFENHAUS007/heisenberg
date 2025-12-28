# 🚀 Netlify Deployment Guide - tkfireworks.com

## ✅ Prerequisites Completed

- ✅ Vite config changed from `/heisenberg/` to `/` (root path)
- ✅ `netlify.toml` created with SPA redirect rules
- ✅ All performance optimizations applied
- ✅ YouTube demo restored
- ✅ Gallery images fixed
- ✅ Build successful (`dist/` folder created)

---

## 🚀 Deploy to Netlify (Easiest Method)

### ✅ Build Completed Successfully

You already built the site:
```
✓ built in 7.24s
✓ dist/ folder ready
```

### Step 1: Go to Netlify

1. Open browser: [app.netlify.com](https://app.netlify.com)
2. Sign up or log in (GitHub, Google, or Email)

### Step 2: Deploy Site

1. Click **"Add new site"** (top right)
2. Select **"Deploy manually"**
3. **Drag & drop the `dist` folder** from VS Code into the upload area
4. Wait 30 seconds
5. ✅ **Site deployed!**

Netlify will give you a random URL like:
```
https://random-name-123456.netlify.app
```

---

## 🌐 Connect Custom Domain (tkfireworks.com)

### Step 3: Add Custom Domain in Netlify

1. In Netlify Dashboard → **Site settings**
2. Click **"Domain management"** (left sidebar)
3. Click **"Add custom domain"**
4. Enter: `tkfireworks.com`
5. Click **"Verify"**
6. Click **"Add domain"**

Netlify will show DNS configuration instructions.

---

## 📡 Configure GoDaddy DNS

### Step 4: Update DNS Records in GoDaddy

Go to your GoDaddy dashboard → **DNS Management**

#### **Delete existing A records** (the ones pointing to 75.2.60.5 and 99.83.190.102)

#### **Add Netlify A records:**

Netlify uses these IP addresses (check your Netlify DNS instructions for exact IPs):

```
Type: A
Name: @
Value: 75.2.60.5
TTL: 1 Hour
```

**Note:** Netlify might provide different IPs. Use the ones shown in your Netlify dashboard.

#### **Update CNAME for www:**

```
Type: CNAME
Name: www
Value: random-name-123456.netlify.app  (your actual Netlify URL)
TTL: 1 Hour
```

#### **Keep these DNS records unchanged:**
- ✅ NS records: `ns07.domaincontrol.com` & `ns08.domaincontrol.com`
- ✅ SOA record
- ✅ Domain Connect record

**Save changes.**

---

## ⏱️ Wait for DNS Propagation

### Step 5: DNS Takes Time

- **Minimum:** 15 minutes
- **Average:** 30-60 minutes
- **Maximum:** 48 hours (rare)

**Check DNS status:**
- [whatsmydns.net/dns](https://www.whatsmydns.net/#A/tkfireworks.com)
- [dnschecker.org](https://dnschecker.org/all-dns-records-of-domain.php?query=tkfireworks.com)

---

## 🔒 Enable HTTPS (Automatic)

### Step 6: SSL Certificate

Once DNS propagates:

1. Go to Netlify → **Site settings → Domain management → HTTPS**
2. Click **"Verify DNS configuration"**
3. Click **"Provision certificate"**
4. Wait 1-2 minutes
5. ✅ **HTTPS enabled automatically!**

---

## ✅ Quick Checklist

```bash
# Already done:
✅ npm install
✅ npm run build
✅ dist/ folder created

# Next steps:
1. ✅ Go to app.netlify.com
2. ✅ Sign up/login
3. ✅ Click "Add new site" → "Deploy manually"
4. ✅ Drag & drop dist/ folder
5. ✅ Add custom domain: tkfireworks.com
6. ✅ Configure DNS in GoDaddy:
   - A record: @ → (Netlify IP)
   - CNAME: www → your-site.netlify.app
7. ✅ Wait 30 minutes for DNS
8. ✅ Enable HTTPS in Netlify
9. ✅ Visit https://tkfireworks.com
```

---

## 🎯 What You Need

### From Your Computer:
- ✅ `dist/` folder (already built)
- ✅ Browser

### From GoDaddy:
- ✅ Domain: `tkfireworks.com`
- ✅ DNS management access

### From Netlify:
- ✅ Free account (sign up takes 1 minute)
- ✅ Drag & drop deployment

---

## 🐛 Troubleshooting

### Issue: "404 Page Not Found" on routes
**Solution:** `netlify.toml` is already in your repo. Redeploy if needed.

### Issue: Images not loading
**Solution:** Base path is already set to `/`. Should work fine.

### Issue: DNS not propagating
**Solution:** Wait 30-60 minutes. Check [whatsmydns.net](https://www.whatsmydns.net)

### Issue: Need to redeploy
**Solution:** 
1. Make changes in code
2. Run `npm run build`
3. Go to Netlify → **Deploys**
4. Drag & drop new `dist/` folder

---

## 🔄 Future Updates (Optional)

### Automatic Deployments from GitHub:

Instead of manual drag-and-drop:

1. Push code to GitHub
2. In Netlify → **Site settings → Build & deploy**
3. Click **"Link repository"**
4. Connect to `BENHILFENHAUS007/heisenberg`
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. ✅ Every push to `main` auto-deploys

---

## 📞 Support

If issues persist:
- Check Netlify build logs: **Deploys → Latest deploy → Deploy log**
- Verify DNS: [DNS Checker](https://dnschecker.org)
- Netlify support: [docs.netlify.com](https://docs.netlify.com)

---

## 🎉 Success!

Once DNS propagates:
- ✅ Visit `https://tkfireworks.com`
- ✅ All routes work (Home, Products, Gallery, Contact)
- ✅ Images load correctly
- ✅ YouTube videos embedded
- ✅ Fast CDN performance
- ✅ HTTPS/SSL enabled

**Your site is LIVE! 🚀**

---

## 📸 Visual Guide

### Netlify Deployment:
1. Go to app.netlify.com
2. Click "Add new site" → "Deploy manually"
3. Drag `dist/` folder from VS Code
4. Wait 30 seconds → Site live!

### GoDaddy DNS:
1. Go to GoDaddy → My Products → Domains
2. Click DNS next to tkfireworks.com
3. Delete old A records
4. Add new A record → @ → (Netlify IP)
5. Update CNAME → www → your-site.netlify.app
6. Save

### Add Custom Domain:
1. Netlify Dashboard → Domain management
2. Add custom domain → tkfireworks.com
3. Follow DNS instructions
4. Wait for propagation
5. Enable HTTPS

**Done! 🎊**
