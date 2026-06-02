# Studio — Web Design Portfolio

A high-end web design portfolio built with **Next.js 14 + TypeScript**, featuring a dark fall colour palette (deep browns, amber, terracotta, maroon) with editorial typography and custom animations.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules + CSS Custom Properties
- **Fonts:** Playfair Display, Cormorant Garamond, DM Mono (Google Fonts)
- **Deployment:** Vercel

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        ← Root layout (fonts, metadata)
│   ├── globals.css       ← Design tokens, reset, global styles
│   ├── page.tsx          ← Homepage
│   ├── page.module.css   ← Homepage styles
│   ├── work/page.tsx     ← Work/Portfolio page
│   ├── services/page.tsx ← Services page
│   ├── about/page.tsx    ← About page
│   └── contact/page.tsx  ← Contact page
└── components/
    ├── Navbar.tsx         ← Navigation bar
    ├── Navbar.module.css
    ├── Footer.tsx         ← Footer
    ├── Footer.module.css
    └── CustomCursor.tsx   ← Animated custom cursor
```

---

## Step 1 — Push to GitHub

> You already have a blank GitHub repo. Follow these steps:

```bash
# 1. Open your terminal and navigate to this project folder
cd path/to/webdesign-portfolio

# 2. Install dependencies first (optional locally)
npm install

# 3. Initialise git and push to your existing repo
git init
git add .
git commit -m "feat: initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

---

## Step 2 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (use **Continue with GitHub**)
2. Click **"Add New Project"**
3. Click **"Import"** next to your repository
4. Vercel auto-detects Next.js — leave all settings as default
5. Click **"Deploy"**

That's it! Vercel will give you a live URL instantly (e.g. `your-repo.vercel.app`).

**Every time you push to GitHub, Vercel auto-deploys.** No extra steps needed.

---

## Step 3 — Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Customisation

### Change Your Name / Studio Name
Edit `src/app/layout.tsx` — update the `title` and `description` in `metadata`.
Edit `src/components/Navbar.tsx` — update the `Studio` logo text.

### Colours
All colours are CSS variables in `src/app/globals.css` under `:root {}`.

### Add Real Projects to Work Page
Edit `src/app/work/page.tsx` — add your actual project images and descriptions.

---

## Adding a Custom Domain (Optional)

1. In Vercel → your project → **Settings → Domains**
2. Add your domain (e.g. `yourstudio.com`)
3. Follow Vercel's DNS instructions with your domain registrar
