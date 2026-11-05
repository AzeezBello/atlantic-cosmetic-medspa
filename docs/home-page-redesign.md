# Men's Platform Redesign & Design System Notes

Architecture notes for the men-only clinical refocus and agent-native design system (`DESIGN.md`).

## Summary of Changes

- **100% Male Clinical Focus**: Removed all female-targeted procedures (`bbl`, `non-surgical-bbl`, `cellulite-treatment`), BBL-only FAQs, female-silhouette brand logos (`logo.jpg`, `All White.avif`, `app/icon.jpg`), and female lifestyle/result photographs. Refocused all 10 verified surgical, hair restoration, aesthetic, and metabolic procedures around male anatomy and proportions.
- **Canonical `DESIGN.md`**: Added root [`DESIGN.md`](../DESIGN.md) following the `google-labs-code/design.md` dual-layer YAML + Markdown specification, drawing architectural contrast from `voltagent/awesome-design-md` and composable local tokens (`nexu-io/open-design`).
- **Hallmark Anti-Slop Compliance (`nutlope/hallmark`)**: Replaced repetitive tracked-uppercase eyebrow labels with restrained monospace indices, tokenized all colors in `app/globals.css`, enforced `overflow-x: clip` and `minmax(0, 1fr)` grid tracks, removed `transition: all` and global `0.01ms` animation hacks, and kept strictly verified clinical facts with zero invented review counts or fake metrics.
- **GSAP + Scroll-World + Canvas UI + React Bits**:
  - `components/hero.tsx` + `components/canvas-atmosphere.tsx`: Nocturnal architectural hero on `mens-hero.avif` layered with a GPU WebGL topographic refraction shader behind live accessible DOM typography (`DavidHDev/canvas-ui`) and choreographed with `@gsap/react` `useGSAP` + `ScrollTrigger` (`greensock/gsap-skills`).
  - `components/scroll-journey.tsx`: Scroll-scrubbed 4-stage clinical protocol progression (`oso95/scroll-world`).
  - `components/spotlight-card.tsx`: Zero-rerender CSS-variable radial spotlight cards (`DavidHDev/react-bits`).
  - `components/brand-mark.tsx` & `app/icon.tsx`: Geometric architectural monogram crest replacing legacy female-silhouette logos.

## Active Male Imagery & Clinical Results

| Asset | Role |
| --- | --- |
| `public/images/mens-hero.avif` | Hero editorial portrait (right-anchored with left negative space) |
| `public/images/mens-jawline.avif` | Editorial masculine jawline/profile illustration (`ScrollJourney`, `/aesthetics`) |
| `public/images/mens-hair-wellness.avif` | Editorial male wellness lounge portrait (`ScrollJourney`, `/wellness`) |
| `public/images/clinic-team.png` | Dr. Olanrewaju Ladipo & Roswell medical team (`/about`, `/our-clinic`) |
| `public/images/atlantic-wellness-center.png` | Atlantic Wellness Center DNA emblem (`/wellness`) |
| `public/images/results/lipo-360-male-front.avif` | Verified male Lipo 360 before/after |
| `public/images/results/hair-transplant-1.png` | Verified male FUE hair transplant before/after (frontal hairline) |
| `public/images/results/hair-transplant-2.png` | Verified male FUE hair transplant before/after (hairline & temples) |
| `public/images/results/hair-transplant-3.png` | Verified male FUE hair transplant before/after (top hairline & crown) |
