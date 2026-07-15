# 🚀 Guide: Building & Deploying the Website to Firebase Hosting

This guide explains how to build the Next.js static files and deploy them live to Firebase Hosting.

---

## 🛠️ Prerequisites

Make sure you have the Firebase CLI installed globally and are logged in:

```bash
# Install Firebase CLI globally (if not already installed)
npm install -g firebase-tools

# Login to your Firebase account
firebase login
```

---

## 📦 Step-by-Step Deployment

Run the following commands in the **project root folder**:

### 1. Configure Environment Variables
`NEXT_PUBLIC_*` values are inlined into the static bundle at build time, so they must exist **before** building. Copy the template and fill in your own values:
```bash
cp website/.env.example website/.env.local
# then edit website/.env.local
```
> Never put the Discord webhook or any secret in `.env.local` — the site is a static export and those values ship to the browser. Handle Discord/server-side in your mail API.

### 2. Build the Website Static Assets
This compiles the Next.js project inside the `website/` directory and outputs static pre-rendered HTML files into `website/out`:
```bash
npm run build --prefix website
```

### 3. Deploy to Firebase Hosting
This uploads the built files from `website/out` to your live domain (`https://anchor-md.web.app` by default, or your connected custom domain):
```bash
firebase deploy
```

> Validate the config without publishing using: `firebase deploy --dry-run`

---

## 💻 Local Testing & Development

To preview your website changes locally before deploying them live:

```bash
# Run Next.js local development server
npm run dev --prefix website
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.
