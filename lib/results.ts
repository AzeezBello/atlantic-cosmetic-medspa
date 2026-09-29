export type Result = {
  src: string;
  alt: string;
  label: string;
  procedure: string;
};

export const results: Result[] = [
  {
    src: '/images/results/hair-transplant-1.png',
    alt: 'Before and after FUE hair transplant, front view showing restored hairline',
    label: 'FUE Hair Transplant',
    procedure: 'fue-hair-transplant',
  },
  {
    src: '/images/results/lipo-360-front.png',
    alt: 'Before and after Lipo 360, front view of the abdomen and waist',
    label: 'Lipo 360',
    procedure: 'lipo-360',
  },
  {
    src: '/images/results/bbl-back.png',
    alt: 'Before and after BBL, back view showing improved shape and projection',
    label: 'BBL',
    procedure: 'bbl',
  },
  {
    src: '/images/results/hair-transplant-2.png',
    alt: 'Before and after FUE hair transplant, front view of the hairline and temples',
    label: 'FUE Hair Transplant',
    procedure: 'fue-hair-transplant',
  },
  {
    src: '/images/results/lipo-360-side.png',
    alt: 'Before and after Lipo 360, side profile',
    label: 'Lipo 360',
    procedure: 'lipo-360',
  },
  {
    src: '/images/results/hair-transplant-3.png',
    alt: 'Before and after FUE hair transplant, top view of the crown and hairline',
    label: 'FUE Hair Transplant',
    procedure: 'fue-hair-transplant',
  },
];

export function resultsFor(procedure: string) {
  return results.filter((result) => result.procedure === procedure);
}
