# Anagha K T P — Portfolio

A static, dependency-free portfolio site. No build step required — it's plain HTML/CSS/JS.

## File structure

```
portfolio/
├── index.html                     # main site
├── case-study-docmind.html        # project case study 1
├── case-study-waste-tracker.html  # project case study 2
├── 404.html                       # custom not-found page
├── robots.txt
├── sitemap.xml
└── assets/
    ├── style.css                  # all styles
    ├── interactions.js            # cursor, tilt, scroll progress, etc.
    ├── favicon.svg
    └── profile.png
```

Keep this folder structure intact — pages reference each other and the assets
folder by relative path.

## Before you deploy

1. **Replace placeholder contact info** in `index.html` — search for
   `anaghaktp.email@example.com` and the phone number placeholder.
2. **Link your real resume PDF** — in `index.html`, find `id="resume-btn"`
   and either point its `href` at a hosted PDF or remove the JS alert in
   `assets/interactions.js`/inline script that currently intercepts the click.
3. **Update the canonical/OG URLs** — every page has
   `https://anaghaktp.github.io/anaghaktp-portfolio/...` as the domain in
   `<link rel="canonical">` and Open Graph tags. Update `sitemap.xml` and
   `robots.txt` to match.
4. **Fill in certifications** — the certifications section currently has
   placeholder titles; add your real certificate names and issuers.
5. **GitHub API rate limits** — the live GitHub dashboard calls the public
   REST API unauthenticated (60 requests/hour per visitor IP). Fine for
   personal use and low traffic; if this site gets real recruiter traffic,
   consider caching the response server-side (see "Scaling up" below).

## Deploy — Vercel (recommended, free)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo.
3. Framework preset: **Other** (it's static HTML, no build command needed).
4. Deploy. Vercel will serve `index.html` at your root domain automatically.
5. Once you have your real URL (like your GitHub Pages or custom domain URL), update the
   canonical/OG URLs mentioned above and redeploy.

## Deploy — Netlify (also free, drag-and-drop option)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the whole `portfolio/` folder in. Done — no config needed.
3. For a custom domain or CI redeploys on push, connect the GitHub repo
   instead via "Add new site → Import from Git".

## Deploy — GitHub Pages (free, ties to your GitHub account)

1. Push this folder to a repo (e.g. `anaghaktp.github.io` for a root-level
   site, or any repo name + enable Pages for a project site).
2. Repo Settings → Pages → Source: deploy from the `main` branch, root folder.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

## Custom domain

All three platforms above support attaching a custom domain for free
(you only pay your domain registrar). Add the domain in the platform's
dashboard and follow their DNS instructions (usually a CNAME or A record).

## Performance & accessibility notes

- Fonts load via Google Fonts with `display=swap` so text isn't blocked
  waiting on font download.
- The hero's animated node-graph canvas and custom cursor are both
  disabled automatically for visitors with `prefers-reduced-motion`
  enabled in their OS/browser settings — this also saves CPU/battery
  for them.
- All images use `max-width:100%` and the profile photo is pre-cropped
  server-side (not resized in-browser) to avoid layout shift.
- Semantic landmarks (`<main>`, `<nav aria-label>`) and a skip-to-content
  link are in place; interactive elements have visible focus outlines
  for keyboard navigation.
- Run Lighthouse yourself after deploying (Chrome DevTools → Lighthouse)
  — scores depend partly on your hosting's TLS/CDN setup, which I can't
  control from static files alone.

## Scaling up later

If you outgrow a single static bundle — a real blog with MDX, a
server-cached GitHub dashboard, EmailJS-free server-side contact form,
Calendly embed — that's when moving to a proper Next.js project makes
sense. This static version is deliberately dependency-free so you can
either keep it as-is indefinitely or migrate it into Next.js later
without starting over on content or design.
