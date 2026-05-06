# Poojan Patel Academic Website

A modern, interactive personal academic website built with React, Vite, and Tailwind CSS. Designed specifically for academic researchers in finance and economics.

## 🚀 Quick Start (Local Development)

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run Dev Server**:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ How to Update Content

This site is designed to be easily editable without touching layout code.

### 1. Update Bio, Education, and Contact Info
Open `/src/data/about.ts`. All the text on the homepage lives here. Just change the strings and save.

### 2. Update Teaching & Syllabi
Open `/src/data/teaching.ts`. You can add new semesters to existing courses or add new institution blocks entirely.

### 3. Update Publications & Research
Open `/src/data/research.ts`. To add a new publication, copy an existing object in the `publications` array and update the fields.

### 4. Create a New Blog Post
1. Go to the `/src/content/blog/` folder.
2. Create a new file ending in `.md` (e.g., `my-new-research.md`).
3. Add the "Frontmatter" at the top (the part between the `---` lines):
   ```markdown
   ---
   title: "Your Post Title"
   date: 2026-05-06
   summary: "A short summary for the index page."
   tags: [research, ai]
   ---
   ```
4. Write your post below the second `---` using Markdown. The site will automatically detect and list it!

---

## 🌐 Deployment Instructions

### GitHub Pages (Recommended)
1. Push this code to a new GitHub repository.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to "GitHub Actions".
4. GitHub will suggest a "Static HTML" or "Vite" workflow. Choose the **Vite** or **Node.js** workflow.
5. If manually configuring, ensure the build command is `npm run build` and the directory is `dist`.

### Netlify / Vercel
1. Connect your GitHub repository to Netlify or Vercel.
2. They will auto-detect Vite.
3. Ensure:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Click Deploy.

### Custom Domain Setup
I already have `poojanpatel07.com`. 
1. In your domain provider (e.g., GoDaddy, Namecheap), find **DNS Settings**.
2. **CNAME Record**: Set `www` to point to your Netlify/Vercel/GitHub URL (e.g., `poojan-patel.netlify.app`).
3. **A Record**: Set `@` to the IP addresses provided by your host (Netlify/Vercel/GitHub).
4. In the Netlify/Vercel/GitHub dashboard, add `poojanpatel07.com` as a custom domain.

---

## 📸 Final Checklist
- [ ] Replace `src/data/about.ts` -> `headshot` path with your actual filename.
- [ ] Place your `cv.pdf` in the `/public/` folder.
- [ ] Place your headshot image in the `/public/` folder.
- [ ] Update social media links in `/src/data/about.ts`.

---
Built with craft for Poojan Patel by Google AI Studio.
