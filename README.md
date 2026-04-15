# Clavyy — Your Personal AI Study Companion

Clavyy is a high-fidelity interactive web application designed to transform dense academic material into actionable insights. Using a **Socratic approach** to learning, Clavyy doesn't just give answers—it guides students to discover them through critical thinking and adaptive tutoring.

## 🌟 Key Features

### 1. Interactive Bento Learning
A dynamic dashboard that adapts to your study material. Drop in a PDF, a photo of handwritten notes, or raw text to generate interactive modules, summaries, and expected exam questions.

### 2. Socratic AI Tutor
Our AI "Socratic Scholar" engages you in active dialogue. It identifies your weak points and asks guiding questions to help you build true conceptual understanding rather than rote memorization.

### 3. Tactile Knowledge Maps
Visualize how concepts connect across different subjects. Clavyy builds a living knowledge graph that helps you see the "big picture" of your curriculum.

### 4. Progress & Retention Tracking
Integrated spaced-repetition logic identifies when your retention of a topic is dropping and resurfaces it at the optimal moment to ensure long-term mastery.

## 🎨 Design Identity: "The Tactile Scholar"

Clavyy is built on a custom design system that blends professional academic structure with modern, tactile UI:
- **Claymorphic Surfaces**: Depth and shadow systems that make elements feel physical and approachable.
- **Glassmorphic Navigation**: A blur-heavy navigation system for a premium, lightweight feel.
- **Interactive Border Glow**: Real-time cursor tracking that highlights card edges with Brand Blue and Cyan mesh gradients.

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3 (Modern Variable System)
- **Logic**: Vanilla JavaScript
- **Physics & Animation**: GSAP (GreenSock Animation Platform)
- **Typography**: Plus Jakarta Sans, Be Vietnam Pro, Press Start 2P (Material Symbol Integration)

## 🚀 Getting Started

Since Clavyy is built as a static experience, you can run it directly:
1. Clone the repository.
2. Open `index.html` in any modern browser.
3. Ensure you have an internet connection to load the Google Fonts and GSAP CDN.
# Clavyy — Master Anything with AI 🧠

> **Your personal AI study companion. Master anything — one Socratic question at a time.**

Clavyy is an AI-powered EdTech platform that transforms dense textbooks, PDFs, and handwritten notes into interactive, Socratic learning experiences. This repository contains the marketing landing page (`index.html`) — a fully self-contained, zero-dependency HTML file with embedded CSS and vanilla JavaScript.

---

## Table of Contents

- [Overview](#overview)
- [Live Sections](#live-sections)
- [Features Showcased](#features-showcased)
- [Tech Stack](#tech-stack)
- [File Structure](#file-structure)
- [Code Architecture](#code-architecture)
  - [Design Tokens](#design-tokens)
  - [Component System](#component-system)
  - [JavaScript Modules](#javascript-modules)
  - [Animations](#animations)
  - [Dark Mode](#dark-mode)
  - [Responsive Design](#responsive-design)
- [Getting Started](#getting-started)
- [Customisation Guide](#customisation-guide)
- [Known Patterns & Conventions](#known-patterns--conventions)
- [Roadmap / TODOs](#roadmap--todos)

---

## Overview

The `index.html` is the public-facing marketing page for Clavyy. It is intentionally a **single HTML file** — no build tools, no npm, no frameworks. Everything is inline: CSS in `<style>`, JavaScript in `<script>`, and layout in semantic HTML. The only external dependencies are Google Fonts (loaded via CDN) and GSAP 3 (for the blob cursor animation).

---

## Live Sections

The page is structured as a vertical scroll journey through these sections:

| # | Section ID | What It Does |
|---|------------|--------------|
| 1 | *(hero)* | Full-viewport hero with headline, CTA buttons, animated chat mockup, floating UI cards, and social proof avatars |
| 2 | `#features` | Bento-grid feature showcase (AI Summaries, Socratic Tutor, Exam Predictions, Group Study, Listen Mode, Offline Cache, Progress Tracker) |
| 3 | `#how` | 3-step "How It Works" cards: Upload → Learn → Master |
| 4 | `#demo` | Live Demo panel — scanned note on the left, AI explanation + Socratic prompt on the right |
| 5 | *(features)* | 4-column feature card grid (Interactive Summaries, Fast Track Mode, Socratic Tutoring, Knowledge Maps) |
| 6 | *(bigstats)* | Focus Mode highlight + stat bento ("Better Grade Results", "Faster Retention") |
| 7 | *(cta)* | Full-bleed CTA banner with gradient background, tagline, and "Get Started for Free" button |
| 8 | *(footer)* | Three-column footer: brand tagline, Navigate links, Company links |

Navigation links route internally via smooth-scroll (`#features`, `#how`, `#demo`) or externally to `onboarding.html` and `login.html`.

---

## Features Showcased

These are the product features the landing page communicates to visitors:

- **AI Summaries** — Upload PDFs, photos, or text; AI generates structured summaries
- **Socratic Tutor** — AI asks guiding questions instead of giving direct answers
- **Exam Prediction** — AI generates expected exam questions from your scanned material
- **Group Study Sync** — Real-time room codes for collaborative sessions
- **Listen Mode** — Text-to-speech voiceover of any explanation
- **Offline Cache** — Last 5 sessions always available without WiFi
- **Progress Tracker** — AI identifies weak areas, uses spaced repetition
- **Fast Track Mode** — Skips content the user already knows
- **Knowledge Maps** — Visual mind maps auto-generated across subjects
- **Focus Mode** — Distraction-free deep-work reading environment

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | Semantic HTML5 |
| Styling | Pure CSS3 (custom properties, CSS Grid, Flexbox, `@keyframes`, `@media`) |
| Scripting | Vanilla JavaScript (ES6, IIFEs, IntersectionObserver, GSAP) |
| Fonts | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans), [Be Vietnam Pro](https://fonts.google.com/specimen/Be+Vietnam+Pro), [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) (footer easter egg) |
| Icons | [Google Material Symbols Outlined](https://fonts.google.com/icons) (variable font, fill/weight controlled inline) |
| Animation | [GSAP 3.12.2](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js) (blob cursor only) |

**No frameworks. No build step. No package.json.** Open `index.html` in a browser and it works.

---

## File Structure

```
clavyy/
├── index.html           ← This file (entire landing page)
├── onboarding.html      ← Linked from CTAs (not in this repo)
├── login.html           ← Linked from nav (not in this repo)
└── assets/
    └── Clavyy_logo.png  ← Brand logo used in nav + footer
```

> **Note:** The logo at `assets/Clavyy_logo.png` must exist for the navbar and footer to render correctly. If missing, the brand name text is the fallback.

---

## Code Architecture

### Design Tokens

All colours, shadows, and surface values are defined as CSS custom properties on `:root` at the very top of the `<style>` block. This is the **single source of truth** for the entire visual system:

```css
:root {
  --blue: #2979FF;
  --blue-dim: #1A5FD4;
  --blue-dark: #0D47A1;
  --blue-container: #BEDAFF;
  --blue-pale: #E8F1FF;
  --teal: #00BCD4;
  --teal-light: #B2EBF2;
  --teal-container: #E0F7FA;
  --bg: #F2F7FF;
  --surface: #F2F7FF;
  --surface-low: #E4EEFF;
  --surface-lowest: #FFFFFF;
  --on-surface: #0D1B2A;
  --on-variant: #455A72;
  --outline: #8AA0BC;
  --outline-dim: rgba(138, 160, 188, 0.18);
  --shadow-blue: rgba(41, 121, 255, 0.22);
  --shadow-blue-lg: rgba(41, 121, 255, 0.35);
}
```

All dark mode overrides live inside `@media (prefers-color-scheme: dark)` and simply redefine the same tokens — so every component adapts automatically.

---

### Component System

The page uses a class-based, BEM-lite naming convention. Key reusable classes:

| Class | Description |
|-------|-------------|
| `.btn-p` | Primary CTA button — gradient blue, pill shape, hover lift + glow |
| `.btn-s` | Secondary button — neumorphic clay surface, blue text |
| `.card-nm` | Neumorphic card base — white bg with asymmetric shadow |
| `.bc` | Bento card base — used in the features grid |
| `.bc-a` through `.bc-d` | Individual bento cards with unique backgrounds and layouts |
| `.bc-strip` | Full-width row-3 strip card in the bento grid |
| `.hiw-card` | "How It Works" step card with watermark number |
| `.feat-card` | 4-column feature card |
| `.reveal` | Scroll-in animation trigger (starts invisible, `.in-view` makes it visible) |
| `.fu` + `.fu-1`–`.fu-5` | Float-up entrance animation with staggered delays (hero elements) |
| `.sec-label` | Uppercase eyebrow label above section headings |
| `.sec-title` | Large section heading with optional `<span>` in brand blue |
| `.border-glow-card` | Advanced border glow effect applied dynamically by JS to all `.bc` elements |

---

### JavaScript Modules

All JS is wrapped in IIFEs (Immediately Invoked Function Expressions) to avoid polluting the global scope. There are 6 modules:

#### 1. Blob Cursor (`GSAP`)
- Creates a 3-blob trailing cursor using `div` elements appended to `.blob-main`
- GSAP `gsap.to()` animates each blob to follow the mouse/touch position
- First blob is fast (`0.05s, power3.out`), trailing blobs are slower (`0.25s, power1.out`) for a fluid drag effect
- Blobs are hidden until the first `mousemove` event fires
- Auto-hides on `mouseleave`, reappears on `mouseenter`

#### 2. Border Glow Integration
- Queries all `.bc` elements and adds the `.border-glow-card` class
- Appends an `.edge-light` `<span>` child to each card
- On `pointermove`, calculates the cursor's angle and proximity to the card's edge
- Updates `--edge-proximity` and `--cursor-angle` CSS variables live — pure CSS does the rest
- Brand colors used: `#2979FF`, `#00BCD4`, `#6a5acd`
- Adapts to OS dark mode via `matchMedia`

#### 3. Retractable Nav
- Listens to `window.scroll` (passive)
- Adds `nav-hidden` class (CSS `transform: translateY(-100%)`) when scrolling down past 120px
- Removes it when scrolling up — classic "smart hide" pattern

#### 4. Scroll Reveal
- `IntersectionObserver` watches all `.reveal` elements
- When 8% of the element is in the viewport (with `-28px` bottom margin), adds `.in-view`
- Staggered delay: `(i % 4) * 0.08s` so groups of 4 elements cascade in
- Unobserves after triggering (fires once only)

#### 5. Stats Bar Animation
- Watches the `.sec-stats` section with `IntersectionObserver` (threshold 15%)
- When visible, sets `width` on all `.stats-bar-fill` elements to their `data-w` attribute value
- Also animates the SVG gauge arc (`#gauge-arc`) via `stroke-dashoffset` to 82% fill

#### 6. Smooth Scroll
- Applies `scrollIntoView({ behavior: 'smooth' })` to all `a[href^="#"]` links
- Prevents default jump behaviour

---

### Animations

All animations are pure CSS `@keyframes`. Key ones:

| Name | Used On | What It Does |
|------|---------|--------------|
| `floatUp` | `.fu` hero elements | Fades in + translates up 28px on load |
| `blobDrift` | Ambient background blobs | Slow, looping position + scale drift |
| `floatA` / `floatB` | Hero mockup, floating cards | Gentle up/down oscillation (opposite phase) |
| `shimmer` | `.prog-fill::before` | Moving highlight shimmer on progress bars |
| `pulseRing` | Badge dots, pulse indicators | Expanding ring box-shadow pulse |
| `typeDot` | `.td` typing indicator | Scale + opacity bounce for chat "typing..." dots |
| `scanBeam` | `.scan-beam` in bento card A | Top-to-bottom scanning laser beam |
| `barLoad` | `.demo-bar-fill` | Demo scan bar fills then resets in a loop |
| `ringDraw` | `.ring-fill` SVG | Draws the progress ring arc from 0 on load |
| `revealUp` | Used in CTA section | Fade + slide up |
| `shake` | Available utility | Horizontal shake (for error states, etc.) |
| `ticker` | Available utility | Width-expanding ticker bar |
| `spinSlow` | Available utility | Continuous 360° rotation |

---

### Dark Mode

Dark mode is fully automatic — it follows the OS `prefers-color-scheme` media query. The implementation:

1. **Token overrides** — `:root` variables are redefined in `@media (prefers-color-scheme: dark)` to a deep navy palette
2. **Component overrides** — Specific cards (`.bc`, `.hiw-card`, `.demo-card`, etc.) get explicit `background` and `box-shadow` overrides with `!important` because some cards have hardcoded `background: #fff` inline
3. **JS sync** — The border glow JS module listens to `matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ...)` to update `--card-bg` live without a page reload

---

### Responsive Design

Single breakpoint at `max-width: 900px`:

- `.hero-inner` switches from 2-column grid → single column; `.hero-mockup` is hidden entirely
- `.bento-grid`, `.hiw-steps`, `.test-grid`, `.features-grid`, `.bigstats-grid` all become `display: block`
- `.hiw-arrow` connectors between steps are hidden
- `.demo-card` switches from row flex → column flex
- All section padding reduces from `100px 56px` → `60px 24px`
- Footer grid switches from 4-col to 2-col
- Nav links (`.nav-links`) are hidden on mobile (no hamburger menu currently implemented)

---

## Getting Started

No build step required. Just open it:

```bash
# Clone or download the repo
git clone https://github.com/your-org/clavyy-landing.git
cd clavyy-landing

# Open directly in browser
open index.html

# Or serve locally (optional, avoids any CORS quirks)
npx serve .
# or
python3 -m http.server 3000
```

Make sure `assets/Clavyy_logo.png` exists before opening, or the logo image will be broken.

---

## Customisation Guide

### Change brand colours
Edit the `:root` block at the top of `<style>`. The `--blue` and `--teal` variables cascade everywhere.

### Update hero headline
Find the `.hero-text` block in the HTML and edit the `.h1-main` / `.h1-blue` spans.

### Update CTA destination
Both primary CTAs and the "Get Started" button use:
```html
onclick="window.location.href='onboarding.html'"
```
Replace `'onboarding.html'` with your actual signup URL.

### Add a new bento feature card
Copy any `.bc` card in the `#features` section, change the `.bc-*` modifier class, update the badge text, headline, and body, and add it to the `.bento-grid`.

### Adjust scroll reveal speed
Find `.reveal` in the CSS and change the `transition` duration. Currently `0.7s cubic-bezier(0.22, 1, 0.36, 1)`.

### Replace the blob cursor with a standard pointer
Remove `* { cursor: none !important; }` from the CSS and delete the blob cursor IIFE from `<script>`.

---

## Known Patterns & Conventions

- **Material Symbols** are always rendered as `<span class="material-symbols-outlined">icon_name</span>` with inline `font-variation-settings` to control fill and weight per icon
- **Neumorphic shadows** follow a consistent pattern: `12px 12px 32px rgba(blue, 0.09), -8px -8px 24px rgba(white, 0.90)` — outer drop shadow (lower-right, blue-tinted) + inner highlight (upper-left, near-white)
- **All section wrappers** use `max-width: 1100px; margin: 0 auto` to constrain content width
- **`.reveal` + `.fu`** are complementary: `.fu` is for above-the-fold elements that animate on initial page load, `.reveal` is for below-the-fold elements that animate on scroll
- **Inline styles** are used intentionally for one-off tweaks that don't warrant a new class (e.g. specific icon colours, per-element font-size overrides inside cards)
- **Copyright line** in footer uses `'Press Start 2P'` monospace for a subtle retro easter egg

---

## Roadmap / TODOs

- [ ] Add mobile hamburger menu (nav links hidden on `< 900px`)
- [ ] Implement actual Socratic chat demo (currently static HTML mockup)
- [ ] Add testimonials section (`.sec-testimonials` referenced in CSS but not in HTML)
- [ ] Add stats section with animated bars (`.sec-stats`, `.stats-bar-fill` classes defined but section absent)
- [ ] Connect CTA buttons to real `onboarding.html` flow
- [ ] Add `og:image` and Twitter card meta tags for social sharing
- [ ] Accessibility audit: add `aria-label` to icon-only buttons, ensure scroll-reveal doesn't break `prefers-reduced-motion`
- [ ] Consider lazy-loading Google Fonts to improve LCP on slow connections

---

*© 2026 Clavyy AI Systems. Built with 💙 for every scholar.*
---
*Built with ❤️ for every curious mind.*
