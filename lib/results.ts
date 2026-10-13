export type Result = {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
  /** Slug of the procedure page this result belongs to. Omit when the exact procedure is not documented. */
  procedure?: string;
};

export const results: Result[] = [
  {
    src: '/images/results/lipo-360-bbl-back.avif',
    alt: 'Before and after Lipo 360 with BBL, back view showing a narrower waist and fuller, rounder shape',
    label: 'Lipo 360 + BBL',
    width: 890,
    height: 710,
    procedure: 'bbl',
  },
  {
    src: '/images/results/lipo-360-back.avif',
    alt: 'Before and after Lipo 360, back view showing a slimmer waist, flanks, and back',
    label: 'Lipo 360',
    width: 890,
    height: 710,
    procedure: 'lipo-360',
  },
  {
    src: '/images/results/lipo-360-bbl-side.avif',
    alt: 'Before and after Lipo 360 with BBL, side profile showing a flatter abdomen and improved projection',
    label: 'Lipo 360 + BBL',
    width: 623,
    height: 497,
    procedure: 'bbl',
  },
  {
    src: '/images/results/lipo-360-male-front.avif',
    alt: 'Before and after Lipo 360 on a male patient, front view showing a flatter, more defined abdomen',
    label: 'Lipo 360',
    width: 600,
    height: 479,
    procedure: 'lipo-360',
  },
  {
    src: '/images/results/injectables-lips.avif',
    alt: 'Before and after lip filler, close-up showing fuller, smoother lips',
    label: 'Injectables',
    width: 890,
    height: 446,
    procedure: 'injectable-treatments',
  },
  {
    src: '/images/results/non-surgical-bbl.avif',
    alt: 'Before and after non-surgical BBL, back view showing added volume and a smoother contour',
    label: 'Non-Surgical BBL',
    width: 643,
    height: 342,
    procedure: 'non-surgical-bbl',
  },
  {
    src: '/images/results/neck-jawline-profile.avif',
    alt: 'Before and after neck and jawline contouring, side profile showing a more defined jawline',
    label: 'Neck & Jawline',
    width: 600,
    height: 394,
  },
  {
    src: '/images/results/hair-transplant-1.png',
    alt: 'Before and after FUE hair transplant, front view showing restored hairline',
    label: 'FUE Hair Transplant',
    width: 1400,
    height: 1380,
    procedure: 'fue-hair-transplant',
  },
  {
    src: '/images/results/lipo-360-front.png',
    alt: 'Before and after Lipo 360, front view of the abdomen and waist',
    label: 'Lipo 360',
    width: 1234,
    height: 1244,
    procedure: 'lipo-360',
  },
  {
    src: '/images/results/bbl-back.png',
    alt: 'Before and after BBL, back view showing improved shape and projection',
    label: 'BBL',
    width: 1462,
    height: 1446,
    procedure: 'bbl',
  },
  {
    src: '/images/results/hair-transplant-2.png',
    alt: 'Before and after FUE hair transplant, front view of the hairline and temples',
    label: 'FUE Hair Transplant',
    width: 1400,
    height: 1380,
    procedure: 'fue-hair-transplant',
  },
  {
    src: '/images/results/lipo-360-side.png',
    alt: 'Before and after Lipo 360, side profile',
    label: 'Lipo 360',
    width: 1462,
    height: 1446,
    procedure: 'lipo-360',
  },
  {
    src: '/images/results/hair-transplant-3.png',
    alt: 'Before and after FUE hair transplant, top view of the crown and hairline',
    label: 'FUE Hair Transplant',
    width: 1400,
    height: 1380,
    procedure: 'fue-hair-transplant',
  },
];

/** The three results shown on the home page. They share the same aspect ratio so the row lines up. */
export const featuredResults = results.slice(0, 3);

export function resultsFor(procedure: string) {
  return results.filter((result) => result.procedure === procedure);
}
