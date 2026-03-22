# Deploy to Vercel

## Prerequisites

- A [Vercel](https://vercel.com) account (sign up with GitHub recommended)
- Project pushed to GitHub repository

## Option 1: Import via Vercel Dashboard (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select the `photography-portfolio` repository
4. Vercel auto-detects Next.js — no configuration needed
5. Click **"Deploy"**

Deployment takes about 1 minute. You'll get a URL like `photography-portfolio-xxx.vercel.app`.

## Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (run in project root)
vercel

# Deploy to production
vercel --prod
```

## Custom Domain

1. Go to your project in Vercel Dashboard → **Settings** → **Domains**
2. Add your domain (e.g. `jason.photography`)
3. Update DNS records as instructed:
   - **A record:** `76.76.21.21`
   - **CNAME:** `cname.vercel-dns.com` (for `www` subdomain)
4. SSL certificate is provisioned automatically

## Environment Notes

- **Framework Preset:** Next.js (auto-detected)
- **Build Command:** `next build` (default)
- **Output Directory:** `.next` (default)
- **Node.js Version:** 20.x (default)

No environment variables are required for this project.

## Redeployment

Every push to the `main` branch triggers an automatic production deployment. Pull requests get preview deployments with unique URLs.
