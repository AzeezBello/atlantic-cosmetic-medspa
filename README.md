# Atlantic Men's Surgery & MedSpa

Next.js website for Atlantic Men's Surgery & MedSpa in Roswell, Georgia — focused exclusively on male cosmetic surgery, FUE hair restoration, masculine facial aesthetics, and physician-guided metabolic wellness.

## Stack & Design System
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 tokenized via [`DESIGN.md`](./DESIGN.md) (`google-labs-code/design.md` specification)
- GSAP + `@gsap/react` (`useGSAP` + `ScrollTrigger`) scroll-scrubbed stage architecture
- WebGL topographic shader backdrop (`components/canvas-atmosphere.tsx`) & spotlight micro-interactions (`components/spotlight-card.tsx`)
- Lucide React icons

## Run locally
```sh
npm install
npm run dev
```

## Before production
- Publish patient before/after images only with verified clinical consent.
- Verify medical copy, claims, credentials, contact details, privacy language, and regulatory requirements.
