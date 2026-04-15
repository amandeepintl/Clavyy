# \# Clavyy Design System

#

# > \*\*Version 1.0 — Single-file implementation\*\*  

# > All tokens, components, and patterns are sourced directly from `index.html`.  

# > This document is the canonical reference for anyone building new pages, components, or extending the UI.

# 

# \---

# 

# \## Table of Contents

# 

# 1\. \[Design Philosophy](#1-design-philosophy)

# 2\. \[Color Tokens](#2-color-tokens)

# 3\. \[Typography](#3-typography)

# 4\. \[Spacing \& Layout](#4-spacing--layout)

# 5\. \[Elevation \& Shadow System](#5-elevation--shadow-system)

# 6\. \[Border Radius](#6-border-radius)

# 7\. \[Backgrounds \& Surfaces](#7-backgrounds--surfaces)

# 8\. \[Animation \& Motion](#8-animation--motion)

# 9\. \[Component Library](#9-component-library)

# &#x20;  - \[Buttons](#buttons)

# &#x20;  - \[Cards](#cards)

# &#x20;  - \[Bento Cards](#bento-cards)

# &#x20;  - \[Progress Bars](#progress-bars)

# &#x20;  - \[Badges \& Pills](#badges--pills)

# &#x20;  - \[Navigation](#navigation)

# &#x20;  - \[Border Glow Cards](#border-glow-cards)

# &#x20;  - \[Chat Bubbles](#chat-bubbles)

# &#x20;  - \[Section Headers](#section-headers)

# 10\. \[Icons](#10-icons)

# 11\. \[Dark Mode](#11-dark-mode)

# 12\. \[Responsive Breakpoints](#12-responsive-breakpoints)

# 13\. \[Scroll \& Reveal Patterns](#13-scroll--reveal-patterns)

# 14\. \[Cursor System](#14-cursor-system)

# 15\. \[Do's and Don'ts](#15-dos-and-donts)

# 

# \---

# 

# \## 1. Design Philosophy

# 

# Clavyy's visual language is built on three ideas:

# 

# \*\*Claymorphism\*\* — Cards and surfaces feel soft, dimensional, and tactile. Achieved through asymmetric neumorphic shadows (outer drop shadow in one direction, inner highlight in the opposite) rather than flat or heavy-skeuomorphic styles.

# 

# \*\*Calm Intelligence\*\* — The palette is cool blue + teal on a near-white base. Nothing screams. Motion is organic and looping — never jarring or attention-seeking. The product is smart; the UI reflects that without showing off.

# 

# \*\*Kinetic Depth\*\* — The page is never fully static. Ambient background blobs drift slowly. Hero cards float. Progress rings draw themselves in. The interface feels alive at rest, which signals to students that something is always thinking for them.

# 

# \---

# 

# \## 2. Color Tokens

# 

# All colors are defined as CSS custom properties on `:root`. \*\*Always use tokens, never hardcode hex values\*\* in new components.

# 

# \### Core Palette

# 

# ```css

# :root {

# &#x20; /\* Brand Blues \*/

# &#x20; --blue:           #2979FF;   /\* Primary interactive color — buttons, links, accents \*/

# &#x20; --blue-dim:       #1A5FD4;   /\* Hover/pressed state of primary blue \*/

# &#x20; --blue-dark:      #0D47A1;   /\* Dark variant — used in high-contrast badge text \*/

# &#x20; --blue-container: #BEDAFF;   /\* Light blue fills — icon backgrounds, card tints \*/

# &#x20; --blue-pale:      #E8F1FF;   /\* Very light blue — subtle hover backgrounds \*/

# 

# &#x20; /\* Teals \*/

# &#x20; --teal:           #00BCD4;   /\* Accent / secondary brand color \*/

# &#x20; --teal-light:     #B2EBF2;   /\* Teal container fill \*/

# &#x20; --teal-container: #E0F7FA;   /\* Very light teal — card background variant \*/

# 

# &#x20; /\* Surfaces \*/

# &#x20; --bg:             #F2F7FF;   /\* Page background \*/

# &#x20; --surface:        #F2F7FF;   /\* Same as bg — explicit surface token \*/

# &#x20; --surface-low:    #E4EEFF;   /\* Slightly darker surface — input tracks, secondary fills \*/

# &#x20; --surface-lowest: #FFFFFF;   /\* Pure white — foreground cards, modals \*/

# 

# &#x20; /\* Text \*/

# &#x20; --on-surface:     #0D1B2A;   /\* Primary text — headings, body \*/

# &#x20; --on-variant:     #455A72;   /\* Secondary text — subtitles, descriptions, placeholders \*/

# 

# &#x20; /\* Borders \*/

# &#x20; --outline:        #8AA0BC;   /\* Visible borders — dividers, outlines \*/

# &#x20; --outline-dim:    rgba(138, 160, 188, 0.18); /\* Subtle borders — card edges \*/

# 

# &#x20; /\* Shadow Tints \*/

# &#x20; --shadow-blue:    rgba(41, 121, 255, 0.22);  /\* Standard card shadow \*/

# &#x20; --shadow-blue-lg: rgba(41, 121, 255, 0.35);  /\* Large/primary button shadow \*/

# }

# ```

# 

# \### Color Usage Map

# 

# | Token | Used For |

# |-------|----------|

# | `--blue` | Primary buttons, links, active nav, icons, section labels, progress fills |

# | `--blue-dim` | Button hover gradient end, pressed states |

# | `--blue-dark` | Text on `--blue-container` backgrounds |

# | `--blue-container` | Icon badge backgrounds (e.g. blue circle behind upload icon) |

# | `--teal` | Badge pulse dot, gradient accents on progress, hero badge dot |

# | `--bg` / `--surface` | Page and section backgrounds |

# | `--surface-low` | Progress track, secondary button background, scan line fill |

# | `--surface-lowest` | Cards, modals, foreground white surfaces |

# | `--on-surface` | All primary heading and body text |

# | `--on-variant` | Caption, description, sublabel text |

# | `--outline` | `bc-foot` text, visible rule lines |

# | `--outline-dim` | Subtle card outline, divider hairlines |

# 

# \### Raw Values (for when you absolutely need to hardcode — e.g. inline SVG stroke)

# 

# | Purpose | Value |

# |---------|-------|

# | Blue (SVG stroke) | `rgba(41, 121, 255, 0.20)` |

# | Blue glow (SVG) | `rgba(41, 121, 255, 0.30)` |

# | Green pulse (live indicator) | `#4ADE80` |

# | White surface glass | `rgba(255, 255, 255, 0.88)` |

# | Dark card (group study) | `#0E1E30` (approx. `--on-surface` value) |

# 

# \---

# 

# \## 3. Typography

# 

# \### Font Families

# 

# Three typefaces are in use. Each has a specific role — do not mix them outside these contexts.

# 

# | Family | Role | Weight(s) Used |

# |--------|------|----------------|

# | \*\*Plus Jakarta Sans\*\* | Headings, display text, nav, buttons | 600, 700, 800 (italic 700, 800 for accent) |

# | \*\*Be Vietnam Pro\*\* | Body text, descriptions, UI labels | 400, 500, 600, 700 |

# | \*\*Press Start 2P\*\* | Footer copyright only (retro easter egg) | 400 |

# 

# ```html

# <!-- Always load in this exact link block -->

# <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700;1,800\&family=Be+Vietnam+Pro:wght@400;500;600;700\&family=Press+Start+2P\&display=swap" rel="stylesheet" />

# ```

# 

# \### Type Scale

# 

# | Role | Class / Usage | Font | Size (clamp) | Weight | Letter Spacing | Line Height |

# |------|--------------|------|--------------|--------|----------------|-------------|

# | Hero H1 | `.h1-main` | Plus Jakarta Sans | `clamp(46px, 5.5vw, 76px)` | 800 | -2.5px | 1.0 |

# | Section Title | `.sec-title` | Plus Jakarta Sans | `clamp(34px, 4vw, 52px)` | 800 | -1.5px | 1.08 |

# | Bento Headline | `.bc-headline` | Plus Jakarta Sans | `clamp(28px, 3vw, 40px)` | 800 | -1.5px | 1.08 |

# | HIW Card Title | `.hiw-card-title` | Plus Jakarta Sans | `21px` | 800 | -0.5px | 1.2 |

# | Feature Card Title | `.feat-title` | Plus Jakarta Sans | `18px` | 800 | -0.3px | 1.2 |

# | Strip Card Name | `.bc-strip-name` | Plus Jakarta Sans | `15px` | 800 | -0.3px | — |

# | Nav Links | `.nav-links a` | Plus Jakarta Sans | `14px` | 600 | — | — |

# | Buttons | `.btn-p`, `.btn-s` | Plus Jakarta Sans | `15px` | 700 | -0.01em | — |

# | Section Label | `.sec-label` | Be Vietnam Pro | `11px` | 800 | 0.14em | — |

# | Body / Description | `.sec-sub`, `.hiw-card-body` | Be Vietnam Pro | `15px–16px` | 400–500 | — | 1.70 |

# | Card Footer | `.bc-foot` | Be Vietnam Pro | `11px` | 700 | 0.04em | — |

# | Badge Text | `.bc-badge` | Be Vietnam Pro | `10px` | 800 | 0.1em | — |

# 

# \### Rules

# 

# \- \*\*Headings always use Plus Jakarta Sans.\*\* Never set a heading in Be Vietnam Pro.

# \- \*\*All section labels\*\* (the tiny uppercase eyebrows like "FEATURES", "HOW IT WORKS") use `font-size: 11px`, `font-weight: 800`, `letter-spacing: 0.14em`, `text-transform: uppercase`, `color: var(--blue)`.

# \- \*\*Highlight spans in titles\*\* use `color: var(--blue)` — never bold or underline.

# \- \*\*Hero headline blue highlight\*\* adds a subtle text-shadow: `text-shadow: 0 0 60px rgba(41, 121, 255, 0.22)`.

# \- \*\*`-webkit-font-smoothing: antialiased`\*\* is applied globally.

# 

# \---

# 

# \## 4. Spacing \& Layout

# 

# \### Grid System

# 

# There is no CSS grid framework. Layout is direct CSS Grid and Flexbox.

# 

# \*\*Max content width: `1100px`\*\*, centered with `margin: 0 auto`.

# 

# ```css

# /\* Standard section content wrapper \*/

# max-width: 1100px;

# margin: 0 auto;

# ```

# 

# \### Section Padding

# 

# | Context | Padding |

# |---------|---------|

# | Desktop sections | `100px 56px 110px` |

# | Mobile (`< 900px`) | `60px 24px` |

# | Hero | `72px 56px 0` (top = nav height offset) |

# | Footer | `80px 56px 0` |

# 

# \### Nav Height

# 

# `72px` — always offset the first section's top padding by this amount to avoid content hiding under the fixed nav.

# 

# \### Bento Grid

# 

# ```css

# .bento-grid {

# &#x20; display: grid;

# &#x20; grid-template-columns: 2fr 1fr;

# &#x20; grid-template-rows: auto auto auto;

# &#x20; gap: 16px;

# }

# ```

# 

# Row 3 (`.bc-strip`) spans full width: `grid-column: 1 / -1`.

# 

# \### Feature Cards Grid

# 

# ```css

# .features-grid {

# &#x20; /\* 4 equal columns \*/

# &#x20; display: grid;

# &#x20; grid-template-columns: repeat(4, 1fr);

# &#x20; gap: 20px;

# &#x20; max-width: 1100px;

# &#x20; margin: 0 auto;

# }

# ```

# 

# \### Internal Card Spacing

# 

# | Context | Value |

# |---------|-------|

# | Standard card padding | `32px` |

# | HIW card padding | `44px 36px 40px` |

# | Demo card padding | `36px 38px` |

# | Strip cell padding | `30px 34px` |

# | Badge padding | `4px 10px` |

# | Button padding (primary) | `13px 28px` |

# 

# \---

# 

# \## 5. Elevation \& Shadow System

# 

# Clavyy uses a \*\*claymorphic shadow model\*\* — each elevated surface has two shadows:

# 1\. A \*\*colored drop shadow\*\* (lower-right, blue-tinted) — creates perceived depth

# 2\. A \*\*bright highlight\*\* (upper-left, near-white) — creates the soft clay feeling

# 

# \### Shadow Levels

# 

# ```css

# /\* Level 1 — Section cards, bento cards \*/

# box-shadow:

# &#x20; 12px 12px 32px rgba(41, 121, 255, 0.08),

# &#x20; -8px -8px 24px rgba(255, 255, 255, 0.85);

# 

# /\* Level 2 — Interactive cards (hiw-card, feat-card) \*/

# box-shadow:

# &#x20; 12px 12px 32px rgba(41, 121, 255, 0.09),

# &#x20; -8px -8px 24px rgba(255, 255, 255, 0.90);

# 

# /\* Level 3 — Hero chat card, demo card \*/

# box-shadow:

# &#x20; 16px 20px 48px rgba(41, 121, 255, 0.12),

# &#x20; -8px -8px 28px rgba(255, 255, 255, 0.90);

# 

# /\* Level 4 — Hero floating clay cards (inner glow + outer glow) \*/

# box-shadow:

# &#x20; 0 0 60px 8px rgba(41, 121, 255, 0.18),

# &#x20; 12px 20px 40px rgba(41, 121, 255, 0.14),

# &#x20; inset 2px 2px 5px rgba(255, 255, 255, 0.85);

# 

# /\* Primary Button — large colored shadow \*/

# box-shadow:

# &#x20; 0 12px 30px rgba(41, 121, 255, 0.35),

# &#x20; inset 2px 2px 5px rgba(255, 255, 255, 0.25),

# &#x20; inset -2px -2px 6px rgba(0, 0, 0, 0.10);

# 

# /\* Primary Button — hover state \*/

# box-shadow:

# &#x20; 0 20px 44px rgba(41, 121, 255, 0.50),

# &#x20; inset 2px 2px 5px rgba(255, 255, 255, 0.25),

# &#x20; inset -2px -2px 6px rgba(0, 0, 0, 0.10);

# ```

# 

# \### Inset (Pressed) Shadow

# 

# Used on `.prog-track` and other recessed elements:

# 

# ```css

# box-shadow:

# &#x20; inset 4px 4px 8px rgba(41, 121, 255, 0.10),

# &#x20; inset -4px -4px 8px rgba(255, 255, 255, 0.95);

# ```

# 

# \---

# 

# \## 6. Border Radius

# 

# | Scale | Value | Used On |

# |-------|-------|---------|

# | Pill | `9999px` | Buttons, progress bars, avatar circles, badges |

# | XL | `32px` | Demo card, CTA section, border-glow card base |

# | Large | `28px` | Bento cards (`.bc`), HIW cards, strip card |

# | Medium | `20px` | Hero chat card, clay floaters, chat bubbles |

# | Small | `16px` | Hero pills, bento avatar |

# | Compact | `14px` | Feature card icon box |

# | Chip | `12px` | Bento list items, chat bubbles |

# | Tight | `10px` | Strip icons, badge number bubbles |

# | 50% | Circle | Ring cards, avatar stacks |

# 

# \---

# 

# \## 7. Backgrounds \& Surfaces

# 

# \### Page Background

# 

# ```css

# body {

# &#x20; background: var(--bg);

# &#x20; background-image: radial-gradient(circle, rgba(41, 121, 255, 0.055) 1px, transparent 1px);

# &#x20; background-size: 28px 28px;

# }

# ```

# The subtle dot grid is a key part of the brand aesthetic. Preserve it on all full-page layouts.

# 

# \### Ambient Background Blobs

# 

# Three fixed blobs sit behind all content at `z-index: 0` to create depth:

# 

# ```css

# /\* Top-left — blue \*/

# .blob-tl { width: 520px; height: 520px; top: -140px; left: -140px;

# &#x20; background: rgba(41, 121, 255, 0.10); filter: blur(110px);

# &#x20; animation: blobDrift 9s ease-in-out infinite; }

# 

# /\* Bottom-right — teal \*/

# .blob-br { width: 580px; height: 580px; bottom: -150px; right: -150px;

# &#x20; background: rgba(0, 188, 212, 0.08); filter: blur(130px);

# &#x20; animation: blobDrift 11s ease-in-out infinite reverse; }

# 

# /\* Center — pale blue \*/

# .blob-mid { width: 360px; height: 360px; top: 38%; left: 36%;

# &#x20; background: rgba(190, 218, 255, 0.10); filter: blur(90px);

# &#x20; animation: blobDrift 14s ease-in-out infinite; }

# ```

# 

# \### Glassmorphism Variant

# 

# Used on hero floating cards (`.c-streak`, `.c-xp`):

# 

# ```css

# background: rgba(255, 255, 255, 0.88);

# backdrop-filter: blur(16px);

# \-webkit-backdrop-filter: blur(16px);

# ```

# 

# \### Card Backgrounds by Type

# 

# | Card Type | Background |

# |-----------|------------|

# | Standard bento / HIW / feature | `#ffffff` (`--surface-lowest`) |

# | Bento card A (AI Summaries) | `#ffffff` |

# | Bento card B (Socratic) | `linear-gradient(135deg, #2979FF, #1A5FD4)` |

# | Bento card C (Exam Predictions) | `var(--blue-container)` = `#BEDAFF` |

# | Bento card D (Group Study) | `var(--on-surface)` = `#0D1B2A` (dark) |

# | Strip card | `#ffffff` |

# | Demo left panel | `#ffffff` |

# | Demo right panel | `var(--surface-lowest)` |

# | CTA section | `linear-gradient(135deg, #1251CC 0%, #2979FF 45%, #0097A7 100%)` |

# | Big Stats main card | gradient blue |

# 

# \---

# 

# \## 8. Animation \& Motion

# 

# \### Keyframes Reference

# 

# | Name | Duration / Timing | Effect |

# |------|------------------|--------|

# | `floatUp` | `0.65s cubic-bezier(0.22, 1, 0.36, 1)` | Fade + slide up 28px — hero entrance |

# | `blobDrift` | `9–14s ease-in-out infinite` | Ambient position + scale drift |

# | `floatA` | `6s ease-in-out infinite` | Vertical float ±12px (hero mockup) |

# | `floatB` | `4–5s ease-in-out infinite` | Vertical float ±10px (opposite phase) |

# | `shimmer` | `2s ease-in-out infinite` | Horizontal highlight sweep — progress bar gloss |

# | `ticker` | (width-based) | Bar fill from 0 → `var(--tw)` |

# | `pulseRing` | `2s ease-in-out infinite` | Box-shadow ring expand — badge pulses |

# | `typeDot` | `1.2s ease-in-out infinite` | Chat typing indicator bounce |

# | `spinSlow` | `linear infinite` | Continuous 360° rotation |

# | `scanBeam` | `2.5s ease-in-out infinite` | Top-to-bottom laser scan over documents |

# | `barLoad` | `looping` | Fill → reset analysis bar in demo |

# | `ringDraw` | `2.2s 0.5s ease-out forwards` | SVG arc draws in on load |

# | `revealUp` | `0.6s cubic-bezier(0.22, 1, 0.36, 1)` | CTA fade + slide up |

# | `shake` | `0.4s` | Horizontal shake for error feedback |

# 

# \### Hero Float-Up Entrance

# 

# Elements above the fold use staggered `.fu` classes:

# 

# ```html

# <div class="fu fu-1">...</div>   <!-- delay: 0.08s -->

# <div class="fu fu-2">...</div>   <!-- delay: 0.16s -->

# <div class="fu fu-3">...</div>   <!-- delay: 0.24s -->

# <div class="fu fu-4">...</div>   <!-- delay: 0.32s -->

# <div class="fu fu-5">...</div>   <!-- delay: 0.40s -->

# ```

# 

# \### Scroll Reveal

# 

# Add `.reveal` to any element that should animate in on scroll. The JS observer adds `.in-view` when 8% is visible:

# 

# ```css

# .reveal {

# &#x20; opacity: 0;

# &#x20; transform: translateY(32px);

# &#x20; transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),

# &#x20;             transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);

# }

# .reveal.in-view { opacity: 1; transform: translateY(0); }

# ```

# 

# \### Easing Conventions

# 

# | Use | Easing |

# |-----|--------|

# | All entrance/exit transitions | `cubic-bezier(0.22, 1, 0.36, 1)` — fast out, gentle settle |

# | Nav hide/show | `cubic-bezier(0.22, 1, 0.36, 1)` |

# | Card hover | `ease` |

# | GSAP blob (lead) | `power3.out` |

# | GSAP blob (trail) | `power1.out` |

# 

# \---

# 

# \## 9. Component Library

# 

# \### Buttons

# 

# \#### Primary Button `.btn-p`

# 

# ```html

# <button class="btn-p">

# &#x20; <span class="material-symbols-outlined" style="font-size:18px;">arrow\_forward</span>

# &#x20; Get Started Free

# </button>

# ```

# 

# ```css

# .btn-p {

# &#x20; display: inline-flex; align-items: center; justify-content: center; gap: 8px;

# &#x20; background: linear-gradient(135deg, #2979FF 0%, #1A5FD4 100%);

# &#x20; color: #fff;

# &#x20; border: none; border-radius: 9999px; padding: 13px 28px;

# &#x20; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 15px;

# &#x20; letter-spacing: -0.01em;

# &#x20; box-shadow: 0 12px 30px var(--shadow-blue-lg),

# &#x20;             inset 2px 2px 5px rgba(255,255,255,0.25),

# &#x20;             inset -2px -2px 6px rgba(0,0,0,0.10);

# &#x20; transition: transform 0.18s ease, box-shadow 0.18s ease;

# }

# /\* Hover: lift + stronger glow \*/

# /\* Active: scale(0.96) + inset shadow \*/

# ```

# 

# \#### Secondary Button `.btn-s`

# 

# ```html

# <button class="btn-s">See How It Works</button>

# ```

# 

# Neumorphic surface, blue text. Same sizing/shape as `.btn-p`.

# 

# \---

# 

# \### Cards

# 

# \#### Neumorphic Card `.card-nm`

# 

# Base card — white background, claymorphic shadow. Used for mini stat cards.

# 

# ```css

# .card-nm {

# &#x20; background: var(--surface-lowest);

# &#x20; border-radius: 2rem;

# &#x20; box-shadow: 12px 12px 32px rgba(41,121,255,0.09), -8px -8px 24px rgba(255,255,255,0.90);

# }

# ```

# 

# \#### HIW Step Card `.hiw-card`

# 

# Used in the "How It Works" section. Has a large watermark number, icon box, step label, title, and body.

# 

# ```html

# <div class="hiw-card">

# &#x20; <div class="hiw-watermark">01</div>

# &#x20; <div class="hiw-icon">

# &#x20;   <span class="material-symbols-outlined" style="font-size:26px;color:#2979FF;...">upload\_file</span>

# &#x20; </div>

# &#x20; <div class="hiw-step-label">STEP 01 — UPLOAD</div>

# &#x20; <h3 class="hiw-card-title">Upload Any Material</h3>

# &#x20; <p class="hiw-card-body">Drop in a PDF, photograph your handwritten notes...</p>

# </div>

# ```

# 

# Hover state lifts the card `-6px` and deepens the shadow.

# 

# \#### Feature Card `.feat-card`

# 

# 4-column grid card with icon, title, body, and explore link.

# 

# ```html

# <div class="feat-card">

# &#x20; <div class="feat-ic" style="background:#BEDAFF;">

# &#x20;   <span class="material-symbols-outlined" style="...">auto\_stories</span>

# &#x20; </div>

# &#x20; <h3 class="feat-title">Interactive Summaries</h3>

# &#x20; <p class="feat-body">Upload any PDF or photo...</p>

# &#x20; <div class="feat-link">

# &#x20;   <span>Explore</span>

# &#x20;   <span class="material-symbols-outlined" style="font-size:16px;">arrow\_forward</span>

# &#x20; </div>

# </div>

# ```

# 

# \---

# 

# \### Bento Cards

# 

# The bento grid uses a shared `.bc` base with variant modifiers. All `.bc` elements automatically receive the border-glow treatment from JavaScript.

# 

# ```css

# .bc {

# &#x20; border-radius: 28px; padding: 32px;

# &#x20; box-shadow: 12px 12px 32px rgba(41,121,255,0.08), -8px -8px 24px rgba(255,255,255,0.85);

# &#x20; overflow: hidden; position: relative;

# }

# ```

# 

# | Class | Background | Grid position | Notable content |

# |-------|-----------|---------------|-----------------|

# | `.bc-a` | White | col 1, row 1 | Scan animation, AI Summaries |

# | `.bc-b` | Blue gradient | col 2, row 1 | Socratic tutor quote |

# | `.bc-c` | `--blue-container` | col 1, row 2 | Exam question list |

# | `.bc-d` | Dark (`--on-surface`) | col 2, row 2 | Group study room |

# | `.bc-strip` | White | full row 3 | 3-cell feature strip |

# 

# \---

# 

# \### Progress Bars

# 

# ```html

# <div class="prog-track">

# &#x20; <div class="prog-fill" style="width: 72%;"></div>

# </div>

# ```

# 

# ```css

# .prog-track {

# &#x20; background: var(--surface-low); border-radius: 9999px; padding: 3px; height: 10px;

# &#x20; box-shadow: inset 4px 4px 8px rgba(41,121,255,0.10), inset -4px -4px 8px rgba(255,255,255,0.95);

# }

# .prog-fill {

# &#x20; height: 100%; border-radius: 9999px;

# &#x20; background: linear-gradient(90deg, #2979FF, #00BCD4);

# &#x20; /\* Shimmer animation pseudo-element applied automatically \*/

# }

# ```

# 

# For animated stat bars, use `data-w` attribute and let the JS observer trigger width on scroll:

# 

# ```html

# <div class="stats-bar-fill" data-w="82" style="width:0;"></div>

# ```

# 

# \---

# 

# \### Badges \& Pills

# 

# \#### Standard Badge `.bc-badge`

# 

# ```html

# <span class="bc-badge">AI SUMMARIES</span>

# ```

# 

# Blue text, light blue background. Uppercase, 10px, 800 weight.

# 

# \#### Inverse Badge `.bc-badge-inv`

# White-on-transparent. Used on blue gradient backgrounds (card B).

# 

# \#### Dark Badge `.bc-badge-dark`

# Blue-container text on semi-transparent blue. Used on dark card D.

# 

# \#### Hero Badge (animated)

# 

# ```html

# <div class="hero-badge">

# &#x20; <span class="hero-badge-dot"></span>  <!-- Teal pulse dot -->

# &#x20; <span>AI-Powered Study Companion</span>

# </div>

# ```

# 

# \#### CTA Live Dot

# 

# ```html

# <span class="bc-pulse"></span>  <!-- Green pulse: #4ADE80 -->

# ```

# 

# \---

# 

# \### Navigation

# 

# ```html

# <nav id="main-nav">

# &#x20; <div class="nav-inner">

# &#x20;   <a class="nav-brand" href="#">

# &#x20;     <img src="assets/Clavyy\_logo.png" alt="Clavyy" />

# &#x20;   </a>

# &#x20;   <ul class="nav-links">

# &#x20;     <li><a href="#features">Features</a></li>

# &#x20;     <li><a href="#how">How It Works</a></li>

# &#x20;     <li><a href="#demo">AI Tutor</a></li>

# &#x20;   </ul>

# &#x20;   <div class="nav-actions">

# &#x20;     <a class="nav-login" href="login.html">Log In</a>

# &#x20;     <button class="btn-p" style="font-size:13px;padding:10px 20px;">Get Started</button>

# &#x20;   </div>

# &#x20; </div>

# </nav>

# ```

# 

# \*\*Behavior:\*\* Fixed top, `backdrop-filter: blur(24px)`, auto-hides on scroll-down past 120px (`nav-hidden` class → `transform: translateY(-100%)`), reappears on scroll-up.

# 

# Active link styling:

# ```css

# .nav-links a.active {

# &#x20; color: var(--blue);

# &#x20; border-bottom: 2px solid var(--blue);

# &#x20; padding-bottom: 2px;

# }

# ```

# 

# \---

# 

# \### Border Glow Cards

# 

# The `.border-glow-card` system is applied \*\*automatically by JavaScript\*\* to all `.bc` elements. Do not add it manually in HTML.

# 

# It creates a three-layer magnetic border effect that follows the cursor's angle relative to the card edge. The effect is driven by two CSS custom properties set via JS on `pointermove`:

# 

# ```css

# \--edge-proximity  /\* 0–100, how close cursor is to the card edge \*/

# \--cursor-angle    /\* degrees, angle of cursor from card center \*/

# ```

# 

# The visual layers are:

# \- `::before` — Colored gradient border (brand blues/teal/purple) that intensifies near edges

# \- `::after` — Soft fill overlay with `mix-blend-mode: soft-light`

# \- `.edge-light > ::before` — Inset glow with multi-stop `box-shadow` in brand blue hues

# 

# \*\*To apply to a new card:\*\* just add the class `.bc` — JS handles the rest.

# 

# \---

# 

# \### Chat Bubbles

# 

# Used inside hero mockup cards and demo section.

# 

# ```html

# <!-- User message -->

# <div class="chat-b">What is osmosis?</div>

# 

# <!-- AI message -->

# <div class="chat-b ai">It's the movement of water molecules...</div>

# 

# <!-- Typing indicator -->

# <div style="display:flex;gap:4px;padding:8px 12px;background:var(--surface-low);border-radius:12px;width:fit-content;">

# &#x20; <span class="td"></span>

# &#x20; <span class="td"></span>

# &#x20; <span class="td"></span>

# </div>

# ```

# 

# \---

# 

# \### Section Headers

# 

# Standard section header pattern used before every grid/layout:

# 

# ```html

# <div class="sec-header reveal">

# &#x20; <div class="sec-label">FEATURES</div>

# &#x20; <h2 class="sec-title">Everything You Need to<br><span>Top Your Exams</span></h2>

# &#x20; <p class="sec-sub">Forget highlighted PDFs. Clavyy builds a living...</p>

# </div>

# ```

# 

# \- `.sec-label` — Uppercase eyebrow, `--blue`, 11px, 800 weight, `letter-spacing: 0.14em`

# \- `.sec-title` — Large clamp heading; `<span>` wraps the blue highlight phrase

# \- `.sec-sub` — Body description, `--on-variant`, max 520px wide

# 

# \---

# 

# \## 10. Icons

# 

# Clavyy uses \*\*Google Material Symbols Outlined\*\* — a single variable font loaded from Google CDN.

# 

# ```html

# <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1\&display=swap" rel="stylesheet" />

# ```

# 

# \### Usage Pattern

# 

# ```html

# <span class="material-symbols-outlined" style="font-size:26px;color:#2979FF;

# &#x20; font-variation-settings:'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24;">

# &#x20; upload\_file

# </span>

# ```

# 

# \*\*Always set `font-variation-settings` inline\*\* to control:

# \- `'FILL' 1` — Filled (solid) icon. `'FILL' 0` = outlined.

# \- `'wght' 400` — Stroke weight (100–700)

# \- `'GRAD' 0` — Grade (fine-tune visual weight)

# \- `'opsz' 24` — Optical size (match to font-size for crispness)

# 

# \### Icon Color Conventions

# 

# | Context | Color |

# |---------|-------|

# | On white/light card | `#2979FF` (`--blue`) |

# | On blue-container bg | `#0D47A1` (`--blue-dark`) |

# | On teal-light bg | `#006064` |

# | On teal-container bg | `#00838F` |

# | Nav/text inline | `var(--blue)` |

# | On dark card | `var(--blue-container)` |

# 

# \### Common Icons Used

# 

# | Icon name | Used for |

# |-----------|----------|

# | `upload\_file` | Upload step, scan any note pill |

# | `psychology` | AI explain / Socratic tutor |

# | `trending\_up` | Progress / master step |

# | `auto\_stories` | Interactive summaries |

# | `bolt` | Fast Track Mode |

# | `forum` | Socratic Tutoring |

# | `account\_tree` | Knowledge Maps |

# | `volume\_up` | Listen Mode |

# | `download\_done` | Offline Cache |

# | `bar\_chart` | Progress Tracker |

# | `verified` | Focus locked in mini card |

# | `arrow\_forward` | Button / link arrows |

# | `science` | Demo — Newton's Law topic badge |

# 

# \---

# 

# \## 11. Dark Mode

# 

# Dark mode is fully automatic via `@media (prefers-color-scheme: dark)`. It does \*\*not\*\* require a toggle.

# 

# \### Token Overrides (Dark)

# 

# ```css

# @media (prefers-color-scheme: dark) {

# &#x20; :root {

# &#x20;   --bg:             #080F1A;

# &#x20;   --surface:        #080F1A;

# &#x20;   --surface-low:    #0D1829;

# &#x20;   --surface-lowest: #111F36;

# &#x20;   --on-surface:     #E2EEFF;

# &#x20;   --on-variant:     #7096BC;

# &#x20;   --outline:        #5B8DB8;

# &#x20;   --outline-dim:    rgba(28, 53, 80, 0.50);

# &#x20;   --shadow-blue:    rgba(41, 121, 255, 0.45);

# &#x20;   --shadow-blue-lg: rgba(41, 121, 255, 0.60);

# &#x20;   --blue-pale:      #0D1829;

# &#x20;   --blue-container: #0E2245;

# &#x20;   --teal-container: #082530;

# &#x20;   --teal-light:     #082530;

# &#x20; }

# }

# ```

# 

# \### Card Overrides (Dark)

# 

# Cards with hardcoded `background: #fff` or light fills need explicit dark overrides — CSS tokens alone don't help them:

# 

# ```css

# .bc, .hiw-card, .feat-card, .bc-a, .bc-strip,

# .bigstat-main, .hero-chat-card, .hero-pill, .demo-card, .bsr-card {

# &#x20; background: var(--surface-lowest) !important;

# &#x20; box-shadow: 12px 12px 32px rgba(0,0,0,0.35) !important;

# }

# ```

# 

# \*\*When building new components:\*\* avoid hardcoding `background: #fff`. Always use `var(--surface-lowest)` so dark mode works without an extra override.

# 

# \### JS Dark Mode Sync

# 

# The border glow script listens for OS theme changes and updates `--card-bg` live:

# 

# ```javascript

# window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {

# &#x20; card.style.setProperty('--card-bg', e.matches ? 'var(--surface-lowest)' : '#ffffff');

# });

# ```

# 

# \---

# 

# \## 12. Responsive Breakpoints

# 

# One breakpoint only: \*\*`max-width: 900px`\*\*

# 

# ```css

# @media (max-width: 900px) {

# &#x20; /\* Hero \*/

# &#x20; .hero { padding: 72px 24px 0; }

# &#x20; .hero-inner { grid-template-columns: 1fr; gap: 36px; }

# &#x20; .hero-mockup { display: none; }

# 

# &#x20; /\* Grids → block layout \*/

# &#x20; .bento-grid, .hiw-steps, .test-grid,

# &#x20; .features-grid, .bigstats-grid { display: block !important; }

# 

# &#x20; /\* HIW arrows hidden between steps \*/

# &#x20; .hiw-arrow { display: none; }

# 

# &#x20; /\* Demo card stacks vertically \*/

# &#x20; .demo-card { flex-direction: column; }

# 

# &#x20; /\* Section padding \*/

# &#x20; .sec-bento, .sec-hiw, .sec-demo,

# &#x20; .sec-testimonials, .sec-features,

# &#x20; .sec-bigstats, .sec-cta { padding: 60px 24px; }

# 

# &#x20; /\* Footer → 2-column \*/

# &#x20; .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }

# 

# &#x20; /\* Nav links hidden (no hamburger yet) \*/

# &#x20; nav .nav-links { display: none; }

# }

# ```

# 

# > ⚠️ There is \*\*no hamburger/mobile menu\*\* implemented yet. At `< 900px` the nav links disappear — this is a known gap in the current implementation.

# 

# \---

# 

# \## 13. Scroll \& Reveal Patterns

# 

# \### Scroll-Reveal (`.reveal`)

# 

# Attach to any element to have it fade + slide up when it enters the viewport:

# 

# ```html

# <div class="reveal">

# &#x20; <!-- any content -->

# </div>

# ```

# 

# The JS observer adds `.in-view` once 8% of the element is visible. \*\*Animation fires once only\*\* (unobserved after trigger). Stagger is automatic for grouped elements — items offset `(i % 4) \* 0.08s`.

# 

# \### Smooth Scroll

# 

# Any `<a href="#sectionId">` will automatically smooth-scroll. The JS listener handles this globally for all anchor links.

# 

# \---

# 

# \## 14. Cursor System

# 

# The native cursor is hidden globally (`\* { cursor: none !important }`), replaced by a 3-blob animated trail:

# 

# | Blob index | Size | Opacity | Follow speed |

# |------------|------|---------|-------------|

# | 0 (lead) | 36px | 0.8 | `0.05s power3.out` — near-instant |

# | 1 (mid) | 56px | 0.5 | `0.25s power1.out` — relaxed |

# | 2 (tail) | 44px | 0.5 | `0.25s power1.out` — relaxed |

# 

# All blobs are `#2979FF` with a subtle drop shadow. They're hidden until the first mouse movement.

# 

# \*\*The cursor is rendered with an SVG `feColorMatrix` filter\*\* (`#blob-filter`) for a gooey blob effect when blobs overlap.

# 

# To \*\*remove the custom cursor\*\* (e.g. for a settings page or accessibility reasons), delete the `\* { cursor: none !important }` rule and the blob cursor IIFE.

# 

# \---

# 

# \## 15. Do's and Don'ts

# 

# \### ✅ Do

# 

# \- Use CSS tokens (`var(--blue)`, `var(--surface-lowest)`, etc.) for all colors

# \- Use `clamp()` for heading font sizes to maintain fluid scaling

# \- Use `.reveal` on all below-the-fold sections

# \- Use `.bc` class on bento-style cards — the border glow JS applies automatically

# \- Use `font-variation-settings` inline on every Material Symbol icon

# \- Keep section content inside a `max-width: 1100px; margin: 0 auto` wrapper

# \- Keep heading fonts as Plus Jakarta Sans, body as Be Vietnam Pro

# \- Pair every positive shadow (lower-right, blue-tinted) with a highlight shadow (upper-left, near-white)

# \- Test new components with OS dark mode enabled

# \- Use `border-radius: 9999px` for pill shapes (badges, buttons, progress bars)

# 

# \### ❌ Don't

# 

# \- Hardcode `background: #fff` or `color: #000` — use tokens

# \- Use `--blue` for body text; that's for interactive elements and accents only

# \- Add text to Be Vietnam Pro headings; use Plus Jakarta Sans

# \- Create a new animation when `floatA`, `floatB`, `shimmer`, or `pulseRing` would do

# \- Use more than one external JS library — GSAP is the only CDN script

# \- Skip `font-variation-settings` on Material Symbols — icons will use browser defaults

# \- Put section content outside the 1100px max-width wrapper

# \- Use percentage-based values for pixel-accurate layout measurements inside cards

# \- Forget to offset fixed nav height (72px) in the top padding of full-screen sections

# 

# \---

# 

# \*Clavyy Design System — Built with 💙 for every scholar.\*  

# \*© 2026 Clavyy AI Systems\*

