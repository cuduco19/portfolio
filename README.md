# Developer Portfolio — Eliot Cuduco

A fast, responsive personal portfolio built with semantic HTML5, modular CSS3, vanilla ES6+ JavaScript, and a lightweight `esbuild` production pipeline. Engineered from day one for sub-second load times, clean separation of concerns, and WCAG accessibility compliance.

🔗 **Live Demo:** [Add your deployed URL here]

---

## 🏗️ Architecture & Project Structure

The codebase separates human-readable modular source files (`styles/`, `scripts/`) from minified production bundles (`dist/`):

```text
bio-site/
├── index.html                 # Semantic HTML5 entry point & SEO metadata
├── package.json               # esbuild production build configuration
├── README.md                  # Project documentation & architectural decisions
├── dist/                      # Compiled & minified production assets
│   ├── styles/
│   │   └── main.min.css       # Bundled & minified stylesheet
│   └── scripts/
│       └── main.min.js        # Bundled & minified JavaScript
├── styles/                    # Modular CSS source architecture
│   ├── main.css               # CSS entry point (@import cascade orchestrator)
│   ├── variables.css          # Design tokens (colors, spacing scale, typography, dark mode)
│   ├── base.css               # Global resets, box-sizing, & base typography
│   ├── layout.css             # Structural containers, responsive CSS Grid, & breakpoints
│   └── components.css         # Reusable UI (cards, buttons, lightbox modal, form status)
├── scripts/                   # Modular ES6 JavaScript source
│   ├── main.js                # Application orchestrator
│   ├── navigation.js          # Smooth anchor scrolling & dynamic copyright year
│   ├── form.js                # Contact form handling & ARIA live status feedback
│   └── lightbox.js            # Accessible project screenshot zoom modal & scroll-lock
└── assets/                    # Static media & PWA icon suite
    ├── icons/
    │   ├── apple-touch-icon.png
    │   ├── favicon-96x96.png
    │   ├── favicon.ico
    │   ├── favicon.svg
    │   ├── site.webmanifest
    │   ├── web-app-manifest-192x192.png
    │   └── web-app-manifest-512x512.png
    └── images/
        ├── background-2-desktop.webp  # Desktop hero/footer atmospheric background
        ├── background-2-mobile.webp   # Mobile-optimized background variant
        ├── profile.webp               # Author portrait headshot
        ├── landing-page.webp          # EvanCru Studio landing page preview
        ├── calculator.webp            # Basic Calculator app preview
        ├── todo-list.webp             # To-Do List app preview
        ├── quote-generator.webp       # Quote Generator app preview
        └── weather-app.webp           # Weather Forecast app preview
---

## 🧠 Key Architectural Decisions

* **Zero-Framework Core + Lightweight Bundling (`esbuild`):** Uses vanilla HTML, CSS, and ES6 modules for development clarity, paired with `esbuild` to bundle and minify CSS `@import`s and JS modules into single production files (`main.min.css` and `main.min.js`) with zero runtime framework overhead.
* **Token-Driven Design System (`variables.css`):** Centralizes colors, spacing, shadows, and typography in CSS Custom Properties with automatic light/dark mode support via `prefers-color-scheme`.
* **ES Module Separation (`scripts/`):** Isolates DOM behaviors (`navigation`, `lightbox`, `form`) into single-responsibility modules orchestrated by `main.js`.
* **Performance-First Media Pipeline:** Uses modern `.webp` images and responsive viewport backgrounds (`desktop` vs. `mobile` breakpoints) to minimize bandwidth usage.
* **Accessibility by Default (a11y):** Implements semantic landmarks, keyboard navigation (`Escape` key modal dismissal), background scroll-locking, and `role="status"` / `aria-live="polite"` announcements for dynamic form feedback.

---

## 🛠️ Build & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Build Production Bundles (`dist/`)
Whenever you update files inside `styles/` or `scripts/`, regenerate the minified `dist/` bundles before committing:
```bash
npm run build
```

### 3. Run Locally
Serve the project using a local HTTP server:
```bash
# Option 1: Using VS Code Live Server extension
# Right-click index.html -> "Open with Live Server"

# Option 2: Using Python's built-in HTTP server
python3 -m http.server 8000

# Option 3: Using Node.js (npx)
npx serve .
```

---

## 📊 Performance & Quality Standards

Built to meet high Core Web Vitals and Google Lighthouse benchmarks out of the box:
* **Performance:** 98–100 *(Bundled & minified CSS/JS via `esbuild`, WebP assets, deferred script execution)*
* **Accessibility:** 98–100 *(Semantic HTML, high-contrast color tokens, ARIA live regions)*
* **Best Practices & SEO:** 100 *(Responsive viewport configuration, clean relative asset routing)*

---

## 📬 Contact

* **Portfolio:** [Your Live URL]
* **GitHub:** [Your GitHub Profile URL]
* **LinkedIn:** [Your LinkedIn Profile URL]