export type Result = {
  src: string;
  alt: string;
  label: string;
  detail: string;
  width: number;
  height: number;
  /** Slug of the procedure page this result belongs to. */
  procedure: string;
};

export const results: Result[] = [
  {
    src: '/images/results/lipo-360-male-front.avif',
    alt: 'Patient before and after Lipo 360, front torso view showing leaner abdomen and sculpted flanks',
    label: 'Lipo 360',
    detail: 'Abdomen & flank contouring',
    width: 600,
    height: 479,
    procedure: 'lipo-360',
  },
  {
    src: '/images/results/hair-transplant-1.png',
    alt: 'Patient before and after FUE hair transplant, front view showing restored frontal hairline density',
    label: 'FUE Hair Transplant',
    detail: 'Frontal hairline restoration',
    width: 1400,
    height: 1380,
    procedure: 'fue-hair-transplant',
  },
  {
    src: '/images/results/hair-transplant-2.png',
    alt: 'Patient before and after FUE hair transplant, front view showing reconstructed hairline and temples',
    label: 'FUE Hair Transplant',
    detail: 'Hairline & temple framing',
    width: 1400,
    height: 1380,
    procedure: 'fue-hair-transplant',
  },
  {
    src: '/images/results/hair-transplant-3.png',
    alt: 'Patient before and after FUE hair transplant, top-down view showing dense frontal hairline and crown fill',
    label: 'FUE Hair Transplant',
    detail: 'Top hairline & density',
    width: 1400,
    height: 1380,
    procedure: 'fue-hair-transplant',
  },
];

/** Featured outcomes displayed on the home page. */
export const featuredResults = results.slice(0, 3);

export function resultsFor(procedure: string) {
  return results.filter((result) => result.procedure === procedure);
}
