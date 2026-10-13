# Home page redesign and new imagery

Notes for the October 2026 home page refresh. Written for whoever maintains the site next.

## What changed

- **Hero** is now a full-bleed cinematic section built on `public/images/hero.avif` (the pre-darkened poolside portrait), following the AnimatedWebs hero pattern: full-bleed media with a slow zoom, a gradient scrim for legible text, oversized two-line headline with a masked rise, one primary action, and a calm fallback for `prefers-reduced-motion`. Two drifting light glows add movement without a video file.
- **Portrait cards** in the hero use the two new model photos. On desktop they float as tilted, gently bobbing cards linking to Aesthetics and Body Contouring. On mobile they sit in a two-up row under the copy.
- **Sections below the hero** keep the same copy but gain a dark "Why Atlantic" band, numbered service cards, a facts strip, and scroll-in reveals (`components/reveal.tsx`). Reveals are disabled under reduced motion and forced visible with `<noscript>` in the layout.
- **Results** now use the seven new before/after AVIF files first. Result cards render at each image's own aspect ratio instead of a square crop, so no before/after pair is cut off.
- **Our Clinic** previously pointed at two deleted PNGs. It now shows the team photo plus a details card.

## Direction applied after the first pass

- **Minimal and airy.** Plain white backgrounds, section padding raised to 96px on mobile and 140px on desktop, flat bordered lists instead of boxed cards, and no decorative pills anywhere (buttons are 6px radius, the hero badge is plain text, the navbar shows the colour logo with no background block).
- **Blue as the brand colour.** `--color-blue` (#0f5fd1) drives buttons, links, focus rings, and selection. `--color-navy` (#0a3f8f) is the footer and call-to-action band. The pale `--color-sky` remains as a highlight for the second headline line and small labels.
- **No Consultation page.** `app/consultation` and the form component were removed. Every call to action now goes through `components/book-button.tsx`, which opens the external appointment-request system in a new tab and is labelled "Request an Appointment" (short form "Book Online" in the navbar and footer). The call-to-action band offers the phone number as the secondary contact.

## Image renames

Files were renamed with `git mv` so URLs contain no spaces or parentheses.

| Original file | New file | Where used |
| --- | --- | --- |
| `images/1.avif` | `images/portrait-studio.avif` | Hero card (Aesthetics) |
| `images/2.avif` | `images/portrait-beach.avif` | Hero card (Body Contouring) |
| `results/Injectable Treatments.avif` | `results/injectables-lips.avif` | Results, Injectables page |
| `results/Lipo 360 (1).avif` | `results/lipo-360-male-front.avif` | Results, Lipo 360 page |
| `results/Lipo 360.avif` | `results/lipo-360-back.avif` | Home, Results, Lipo 360 page |
| `results/Lipo 360 BBL (1).avif` | `results/lipo-360-bbl-back.avif` | Home, Results, BBL page |
| `results/Lipo 360 BBL.avif` | `results/lipo-360-bbl-side.avif` | Home, Results, BBL page |
| `results/Non-surgical buttock augmentation.avif` | `results/non-surgical-bbl.avif` | Results, Non-Surgical BBL page |
| `results/035728_f2e06accafbb448c80a3c520f8af6480~mv2.avif` | `results/neck-jawline-profile.avif` | Results page only |

## Please confirm

- The neck and jawline before/after had no procedure in its filename. It is labelled "Neck & Jawline" and is not attached to a procedure page. If it is chin liposuction, Kybella, or Endolift, set `procedure` on that entry in `lib/results.ts` and it will appear on that page automatically.
- The two portrait photos are presented as lifestyle imagery, not as patient results.
- The AnimatedWebs MCP server was not authorized in the session that made these changes, so its template and background catalogue could not be browsed. The hero follows the skill's written method instead. To browse its templates later, authorize the `animatedwebs` server via `claude mcp` or `/mcp` in an interactive session.
