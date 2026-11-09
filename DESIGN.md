---
name: "Atlantic Men's Surgery & MedSpa — Architectural Clinical System"
version: "1.0.0"
description: "Agent-native design system for Atlantic Men's Surgery & MedSpa in Roswell, GA. Built on Google Labs DESIGN.md dual-layer tokens, VoltAgent architectural dark/daylight contrast, Open Design composability, and Hallmark anti-slop rules."
colors:
  canvas: "#ffffff"
  surface: "#f3f6fa"
  surfaceElevated: "#ffffff"
  obsidian: "#051120"
  navy: "#09254a"
  cobalt: "#0f5fd1"
  cobaltHover: "#0b4aa6"
  steel: "#7fb8f6"
  ink: "#0b1929"
  muted: "#4c5d70"
  line: "#d9e3ee"
  lineDark: "rgba(255, 255, 255, 0.14)"
  interactive: "{colors.cobalt}"
typography:
  fontDisplay: "Georgia, 'Times New Roman', serif"
  fontSans: "'Helvetica Neue', Arial, sans-serif"
  fontMono: "ui-monospace, SFMono-Regular, Menlo, monospace"
  scale:
    hero: "clamp(2.4rem, 7vw, 5.5rem)"
    h1: "clamp(2.5rem, 5vw, 4.25rem)"
    h2: "clamp(2rem, 3.8vw, 3.25rem)"
    h3: "1.5rem"
    bodyLg: "1.125rem"
    body: "1rem"
    meta: "0.75rem"
spacing:
  base: "4px"
  containerMax: "1200px"
  sectionMobile: "72px"
  sectionDesktop: "128px"
rounded:
  xs: "4px"
  sm: "6px"
  md: "12px"
  lg: "20px"
elevation:
  none: "none"
  cardHover: "0 20px 48px rgba(5, 17, 32, 0.08)"
  buttonPrimary: "0 10px 26px rgba(15, 95, 209, 0.22)"
  floatingFrame: "0 28px 72px rgba(0, 0, 0, 0.42)"
components:
  buttonPrimary:
    background: "{colors.interactive}"
    backgroundHover: "{colors.cobaltHover}"
    text: "{colors.canvas}"
    radius: "{rounded.sm}"
    shadow: "{elevation.buttonPrimary}"
  buttonOutline:
    background: "{colors.canvas}"
    border: "{colors.line}"
    borderHover: "{colors.interactive}"
    text: "{colors.ink}"
    radius: "{rounded.sm}"
  card:
    background: "{colors.surfaceElevated}"
    border: "{colors.line}"
    radius: "{rounded.md}"
    shadowHover: "{elevation.cardHover}"
---

# Atlantic Men's Surgery & MedSpa — DESIGN.md

## Overview

Atlantic Men's Surgery & MedSpa is a specialized surgical, aesthetic, hair restoration, and metabolic wellness practice in Roswell, Georgia led by Olanrewaju Ladipo, MD. Every surface, photograph, typographic hierarchy, and interaction is built exclusively for male patients seeking discreet, anatomically tailored care.

The visual identity pairs **nocturnal architectural depth** (`#051120` obsidian and `#09254a` deep navy) with **crisp clinical daylight** (`#ffffff` canvas and `#f3f6fa` cool slate surface). Inspired by architectural editorial systems (`voltagent/awesome-design-md`), composable local-first token workflows (`nexu-io/open-design`), and strict anti-slop craftsmanship (`nutlope/hallmark`), the interface avoids spa clichés, pastel ornamentation, and generic SaaS templates in favor of tailored masculine restraint.

## Colors

All colors flow exclusively through CSS custom properties declared in `app/globals.css` (`@theme`). Raw hex literals outside the token layer are prohibited.

```yaml
palette:
  lightSurfaces:
    canvas: "{colors.canvas}"
    surface: "{colors.surface}"
    border: "{colors.line}"
  darkSurfaces:
    obsidian: "{colors.obsidian}"
    navy: "{colors.navy}"
    borderDark: "{colors.lineDark}"
  brandAccents:
    cobalt: "{colors.cobalt}"
    steel: "{colors.steel}"
  text:
    primary: "{colors.ink}"
    secondary: "{colors.muted}"
```

- **Contrast floor**: Primary body copy (`#0b1929` on `#ffffff`) exceeds 17:1 WCAG AAA contrast; muted copy (`#4c5d70` on `#ffffff` and `#f3f6fa`) exceeds 6.2:1 WCAG AA contrast.
- **No purple/magenta gradients**: Never introduce violet, pink, or rainbow AI-slop gradients or `background-clip: text` fills.

## Typography

Editorial authority comes from pairing high-contrast serif display headings (`font-serif`) with clean grotesque body and restrained monospace section tags.

- **Display & Headings**: `Georgia, 'Times New Roman', serif`, weight `400`, tight display leading (`0.95`–`1.08`), `text-wrap: balance` on headings and `text-wrap: pretty` on body copy.
- **Hierarchy discipline**: Exactly one `<h1>` per route. Never skip heading levels (`<h1>` → `<h2>` → `<h3>`).
- **Restrained metadata**: Avoid stacking tracked-out uppercase eyebrows above every heading, numbered step prefixes (`01 /`, `Step 1`), or middle-dot-stuffed metadata strings. Use clean architectural hairline dividers and concise section tags where structural grouping is needed.

## Layout

- **Container**: `min(1200px, calc(100% - 40px))` (`calc(100% - 32px)` below `640px`).
- **Overflow safety**: Root uses `overflow-x: clip` (never `100vw` width hacks that trigger horizontal scrollbars).
- **Grid resilience**: Multi-column grids use `minmax(0, 1fr)` tracks so long procedure titles or wide media never blow out column widths.
- **Rhythm**: Alternating daylight canvas, cool slate surface, and nocturnal obsidian/navy bands (`scroll-world` stage cadence) rather than monotonous uniform card grids.

## Elevation & Depth

- **Daylight surfaces** rely on `1px solid var(--color-line)` architectural borders at rest, lifting subtly on pointer hover (`0 20px 48px rgba(5, 17, 32, 0.08)`) alongside radial cursor-tracked border illumination (`react-bits` spotlight micro-interaction).
- **Nocturnal hero** pairs a live GPU WebGL2 contour-refraction shader canvas (`canvas-ui` pattern) behind real, selectable, screen-reader-accessible DOM typography.

## Shapes

- **Controls & Buttons**: Sharp tailored `6px` radius (`{rounded.sm}`) with minimum `48px` block target height (`44px` compact nav action) exceeding WCAG 2.5.8 target size minimums.
- **Clinical Cards & Frames**: `12px`–`20px` architectural radii — never nested card-inside-card boxes or left-border stripe callouts.

## Components

- **Brand Monogram (`components/brand-mark.tsx`)**: Geometric architectural crest and wordmark (`ATLANTIC` / `MEN'S SURGERY & MEDSPA`), replacing legacy female-silhouette marks across navbar, footer, and favicon (`app/icon.tsx`).
- **Canvas Atmosphere (`components/canvas-atmosphere.tsx`)**: GPU WebGL fragment shader rendering subtle nocturnal topographic light waves behind live hero DOM elements, automatically pausing when offscreen or under `prefers-reduced-motion: reduce`.
- **Scroll Journey (`components/scroll-journey.tsx`)**: GSAP `useGSAP` + `ScrollTrigger` (`greensock/gsap-skills` + `oso95/scroll-world`) scrubbed 4-stage clinical protocol progression, scoped via container ref and `gsap.matchMedia()`.
- **Spotlight Card (`components/spotlight-card.tsx`)**: Cursor-tracked radial border & surface highlight (`DavidHDev/react-bits`) built on CSS custom properties (`--spot-x`, `--spot-y`) with zero React re-renders on pointer move.

## Do's and Don'ts

- **DO** feature exclusively male procedures, male anatomy framing, male editorial lifestyle portraits, and verified male clinical before/after photographs.
- **DO** keep real clinical facts accurate (Established 2016, Roswell GA facility, Dr. Olanrewaju Ladipo's credentials, external Symplast appointment booking). Never invent fake review quotes, star ratings, or patient counts.
- **DO** scope all GSAP animations with `useGSAP(..., { scope })` and guard motion with `gsap.matchMedia()` and `@media (prefers-reduced-motion: no-preference)` without global `animation-duration: 0.01ms !important` hacks.
- **DON'T** include female procedures (BBL, non-surgical BBL, cellulite dimpling, lip-plumping gloss showcases) or female imagery/silhouettes anywhere in code, metadata, FAQs, or assets.
- **DON'T** use `transition: all`, side-by-side competing primary filled buttons, skipped heading levels, or duplicate ambiguous `"Learn more"` accessible link names.
