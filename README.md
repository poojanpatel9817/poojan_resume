# Poojan Patel - Academic Portfolio

This is a modern, interactive, and fully responsive personal academic website built with **React**, **Vite**, and **Tailwind CSS**. It is designed specifically for academics, with a focus on clean typography, ease of content updates, and seamless deployment to static hosting platforms.

## 🚀 Quick Start (Local Development)

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

## ✍️ How to Update Content

You can update almost all the content on the site without touching the layout code.

1. Open `src/data.ts` in your text editor (VS Code recommended).
2. Edit the text within the `personalInfo`, `aboutContent`, `teachingContent`, or `researchContent` objects.
3. Save the file. The site will update immediately if you are running the development server.

**Example: Adding a New Blog Post**
1. Create a new `.md` file in `src/content/blog/` (e.g., `my-new-post.md`).
2. Add the required frontmatter at the top:
```yaml
---
title: "My New Post"
date: "2026-05-10"
summary: "A brief summary of this interesting topic."
tags: ["finance", "ai"]
---
```
3. Write your content in Markdown below the frontmatter.
4. The site automatically detects and lists the new post on the `/blog` page.

## 🌐 Deployment Instructions

This site is optimized for static hosting.

### GitHub Pages (Recommended for Academics)
1. Initialize a Git repository and push your code to GitHub.
2. Go to **Settings > Pages** in your GitHub repository.
3. Under **Build and deployment**, set Source to "GitHub Actions".
4. Create a folder `.github/workflows` and add a `deploy.yml` file (Sample templates are available in GitHub Actions tab for "Static HTML").
*Note: Alternatively, use the `gh-pages` npm package or simply connect your repo to Netlify/Vercel for zero-config deploys.*

### Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Click **Add new site** > **Import an existing project**.
3. Select your GitHub repository.
4. Set the following build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy**.

### Vercel
1. Log in to [Vercel](https://vercel.com/).
2. Click **Add New** > **Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect Vite. Click **Deploy**.

## 🔗 Custom Domain Setup

If you own `poojanpatel07.com`:

1. **In your hosting provider (Netlify/Vercel/GitHub)**:
   - Go to Domain Settings and add `poojanpatel07.com`.
2. **In your Domain Registrar (e.g., Namecheap, GoDaddy)**:
   - Add a CNAME record: `www` pointing to your deployment URL (e.g., `poojan-patel.netlify.app`).
   - Add an A record for the root domain (`@`) pointing to the IP address provided by your hosting provider.
   - Wait 1-24 hours for DNS propagation.

## 🛠 Features
- **Dark Mode**: Persists in localStorage.
- **Animations**: Smooth scroll fade-ins using `motion`.
- **Responsive**: Mobile-first design that looks great on all devices.
- **Typography**: Paired Newsreader (Serif) and Inter (Sans-serif).

---

### Project Structure
- `src/data.ts`: **Main file for content updates.**
- `src/components/`: Reusable UI elements (Nav, Footer, Section).
- `src/pages/`: Individual page layouts.
- `src/index.css`: Global styles and theme configuration.
