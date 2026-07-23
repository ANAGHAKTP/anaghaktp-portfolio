# Anagha K T P | AI Engineer Portfolio

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?style=flat-square)](https://anaghaktp.github.io/anaghaktp-portfolio/)
[![License](https://img.shields.io/badge/License-Copyright%20%C2%A9%202026-green?style=flat-square)](#license)

A modern, responsive portfolio showcasing my work as an AI Engineer, Generative AI Developer, and Python Backend Developer. It is built completely framework-free using modern HTML5, CSS3, and JavaScript, designed to load instantly and look premium.

## Live Demo

Explore the live portfolio at:
👉 **[https://anaghaktp.github.io/anaghaktp-portfolio/](https://anaghaktp.github.io/anaghaktp-portfolio/)**

---

## Features

*   **Responsive Design**: Handcrafted grid and flexbox layouts optimized for mobile, tablet, laptop, and desktop viewports.
*   **Premium Dark UI**: Implements a curated dark color palette, neon accent glows, and smooth gradient text.
*   **AI-Inspired Hero**: Features an interactive particle/node-graph canvas overlay and a custom floating portrait.
*   **Interactive Case Studies**: In-depth case studies for DocMind and Grama Waste Tracker built into relative layout routes.
*   **GitHub API Integration**: Pulls and displays live repository statistics and tags using the public GitHub REST API.
*   **Professional Profile Section**: Highlights expertise, tech stacks, and professional certifications.
*   **Custom Cursor & Hover Effects**: Implements a custom hover-scale cursor and subtle scale-zooms on key interactive elements.
*   **Scroll Animations**: Entrance animations (`fade-in` and `slide-up`) triggered dynamically as the user scrolls.
*   **Accessibility Improvements**: Clean semantic landmarks, skiplinks, keyboard-navigable items, and visible outlines.
*   **SEO Optimized**: Custom metadata tags, JSON-LD schema, robots.txt, and sitemap.xml.
*   **GitHub Pages Ready**: Lightweight, zero-build static website.

---

## Tech Stack

*   **HTML5**: Semantic document structure.
*   **CSS3 (Vanilla)**: Grid/Flexbox layouts, Custom variables (`:root`), transitions, and keyframe animations.
*   **JavaScript (ES6)**: Canvas animations, custom cursor logic, GitHub API requests, dynamic UI rendering, and page load timers.
*   **GitHub REST API**: Asynchronous repository details retrieval.
*   **SVG**: Lightweight, scalable vector assets.
*   **Google Fonts**: Space Grotesk, Inter, and JetBrains Mono.

---

## Project Structure

```
anaghaktp-portfolio/
├── index.html                     # Homepage and main portfolio panel
├── case-study-docmind.html        # DocMind project case study page
├── case-study-waste-tracker.html  # Grama Waste Tracker project case study page
├── 404.html                       # Custom 404 page (not-found route)
├── robots.txt                     # SEO crawling configurations
├── sitemap.xml                    # Sitemap for search engine indexers
└── assets/                        # Directory for stylesheet, scripts, and static files
    ├── style.css                  # Core stylesheet (nav, hero, about, projects, forms)
    ├── interactions.js            # Custom interactive scripts (cursor, floating widgets, count-ups)
    ├── favicon.svg                # Vector site favicon
    ├── profile.webp               # Main optimized WebP portrait photo (LCP optimized)
    └── profile.png                # Fallback PNG portrait photo
```

---

## GitHub Pages Deployment

This portfolio is hosted for free using **GitHub Pages**. To deploy it:

1.  **Push to GitHub**: Push the repository files to your public GitHub repository:
    ```powershell
    git add .
    git commit -m "Update portfolio files"
    git push -u origin main
    ```
2.  **Enable GitHub Pages**:
    *   Navigate to your repository page on GitHub.
    *   Click on **Settings** > **Pages** in the left-hand sidebar.
    *   Under **Build and deployment > Source**, select **Deploy from a branch**.
    *   Under **Branch**, select **`main`** and **`/ (root)`**, then click **Save**.
3.  **Access Your Site**:
    The live site is published automatically at:
    👉 **[https://anaghaktp.github.io/anaghaktp-portfolio/](https://anaghaktp.github.io/anaghaktp-portfolio/)**

---

## Performance

*   **Optimized Images**: Eagerly serves highly-compressed WebP format (`18 KB`) in the Hero section with PNG fallback.
*   **Zero Build Overhead**: Since the project is built in native web technologies, there are no bundlers, compilation delays, or dependency bloat.
*   **Lightweight Assets**: Clean code and minimal assets ensure near-perfect Google Lighthouse performance scores.

---

## Accessibility

*   **Semantic Landmarks**: Uses standard HTML5 tags (`<main>`, `<nav>`, `<section>`, `<article>`) for screen readers.
*   **Skip Links**: Implements a "Skip to content" link for keyboard users.
*   **Keyboard Navigation**: All interactive elements have focus states and keybind listeners for `Space` and `Enter`.
*   **prefers-reduced-motion Support**: Floating photo animations and interactive canvas backgrounds are automatically disabled if the user has disabled motion in their operating system settings.

---

## Browser Support

Fully optimized for the latest stable versions of all modern browsers:
*   Google Chrome
*   Microsoft Edge
*   Mozilla Firefox
*   Apple Safari

---

## Future Improvements

*   Integrate additional Generative AI/Agentic engineering projects.
*   Add a custom technical blog.
*   Document more in-depth engineering case studies.
*   Add verification links for new cloud & AI certifications.

---

## License

Copyright © 2026 Anagha K T P.  
All rights reserved.

---

## Author

**Anagha K T P**  
AI Engineer & Generative AI Developer

*   **GitHub**: [@ANAGHAKTP](https://github.com/ANAGHAKTP)
*   **Portfolio**: [https://anaghaktp.github.io/anaghaktp-portfolio/](https://anaghaktp.github.io/anaghaktp-portfolio/)
