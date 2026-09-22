export type Category = 'Cosmetic Surgery' | 'Aesthetics' | 'Wellness' | 'Hair Restoration';

export type Procedure = {
  slug: string;
  name: string;
  category: Category;
  categoryHref: string;
  summary: string;
  description: string[];
};

export const procedures: Procedure[] = [
  {
    slug: 'lipo-360',
    name: 'Lipo 360',
    category: 'Cosmetic Surgery',
    categoryHref: '/cosmetic-surgery',
    summary: 'Body contouring that sculpts the abdomen, waist, flanks, and back.',
    description: [
      'Liposuction 360 sculpts and contours the body via fat removal from the abdomen, waist, flanks, and full back, working with your natural curves to create a balanced result.',
      'Ideal candidates have no health conditions that would impair healing, meet BMI requirements, and hold realistic expectations. Lipo 360 targets stubborn fat deposits for immediate visible results — it is a body-contouring treatment, not a weight-loss procedure.',
    ],
  },
  {
    slug: 'bbl',
    name: 'BBL',
    category: 'Cosmetic Surgery',
    categoryHref: '/cosmetic-surgery',
    summary: 'A personalized approach to body contouring and proportions.',
    description: [
      'A BBL, or Brazilian Butt Lift, is a fat transfer to the buttocks performed after liposuction to improve shape, projection, and a rounder appearance.',
      'The procedure combines fat transfer with body sculpting to create a proportionate silhouette. It is particularly suited for individuals seeking a more natural-looking, fuller appearance in the buttocks area.',
      'Recovery: incisions typically take two to three weeks to heal, though it takes approximately six months to see final results as the transferred fat settles and swelling resolves. Proper aftercare is important to the outcome.',
    ],
  },
  {
    slug: 'j-plasma',
    name: 'J-Plasma',
    category: 'Cosmetic Surgery',
    categoryHref: '/cosmetic-surgery',
    summary: 'Energy-based skin tightening used alongside liposuction.',
    description: [
      'J-Plasma, also known as Renuvion, is a skin-tightening device used alongside liposuction to lift, tighten, and rejuvenate skin. It works by introducing helium gas and radiofrequency energy beneath the skin through small entry points, causing controlled heating and cooling that promotes skin contraction.',
      'As an add-on to liposuction, it offers skin tightening with minimal scarring and no additional downtime, and can be applied to the arms, abdomen, flanks, back, thighs, knees, chin, and neck. A consultation determines whether you’re a suitable candidate.',
    ],
  },
  {
    slug: 'chin-liposuction',
    name: 'Chin Liposuction',
    category: 'Cosmetic Surgery',
    categoryHref: '/cosmetic-surgery',
    summary: 'Refining the appearance of the chin and neck area.',
    description: [
      'Chin liposuction removes fat from the neck and jawline to create a sharper jawline, reduce the appearance of a double chin, and give the face a slimmer profile.',
      'A double chin is generally attributed to weight gain and genetic factors. The procedure requires minimal recovery time and can typically be completed in under an hour using local sedation.',
    ],
  },
  {
    slug: 'cellulite-treatment',
    name: 'Cellulite Treatment',
    category: 'Cosmetic Surgery',
    categoryHref: '/cosmetic-surgery',
    summary: 'Treatment planning based on individual anatomy and goals.',
    description: [
      'Cellulite is the appearance of dimpled flesh that can appear on the buttocks, thighs, and hips. Treatment uses a fat-disrupter device to break down fatty tissue bands and improve circulation.',
      'Patients can expect to see full results within 3–4 weeks, with a minimum of three sessions typically recommended depending on the severity of cellulite.',
    ],
  },
  {
    slug: 'kybella',
    name: 'Kybella',
    category: 'Aesthetics',
    categoryHref: '/aesthetics',
    summary: 'A treatment option for submental fullness in appropriate candidates.',
    description: [
      'KYBELLA® is an injectable medicine used in adults to improve the appearance and profile of moderate to severe fat below the chin (submental fat), also called a “double chin.”',
      'It uses synthetic deoxycholic acid — a substance naturally found in the body that helps break down dietary fat. Injected under the chin, it destroys fat cells, leading to a noticeable reduction in fullness over a treatment plan tailored to your chin profile.',
    ],
  },
  {
    slug: 'non-surgical-bbl',
    name: 'Non-Surgical BBL',
    category: 'Aesthetics',
    categoryHref: '/aesthetics',
    summary: 'Non-surgical body contouring options selected after consultation.',
    description: [
      'A non-surgical BBL is achieved by placing fillers to increase buttock volume, soften hip dips, and reduce the appearance of cellulite, while stimulating collagen production.',
      'Results appear immediately and continue to improve over 6–8 weeks. The treatment is noninvasive, FDA-approved, safe across body types, requires no recovery time, takes about an hour, and results can last up to three years.',
      'This approach offers subtle enhancement rather than the more dramatic transformation possible with a surgical fat-transfer BBL.',
    ],
  },
  {
    slug: 'injectable-treatments',
    name: 'Injectables',
    category: 'Aesthetics',
    categoryHref: '/aesthetics',
    summary: 'Personalized aesthetic treatments designed around facial balance.',
    description: [
      'Dermal fillers and neurotoxins are a non-surgical, non-invasive option to augment facial features. Dermal fillers restore lost volume with immediate results.',
      'Neurotoxins such as Botox address fine lines, wrinkles, and teeth grinding, and can reshape the brow or improve a gummy smile, with full results appearing within two weeks. Both treatments are minimally invasive with little downtime.',
    ],
  },
  {
    slug: 'endolift',
    name: 'Endolift®',
    category: 'Aesthetics',
    categoryHref: '/aesthetics',
    summary: 'Minimally invasive laser-assisted skin tightening and contouring.',
    description: [
      'Endolift® is a minimally invasive, laser-assisted treatment that improves skin laxity and facial or body contouring through targeted energy delivered beneath the skin.',
      'It tightens and defines areas like the lower face, jawline, neck, and body through collagen remodeling, typically with less recovery time than surgical lifting. It suits mild-to-moderate laxity or contour concerns, but cannot replace a full facelift for significant skin excess or advanced laxity. A consultation determines candidacy.',
    ],
  },
  {
    slug: 'weight-loss-and-wellness',
    name: 'Weight Loss & Wellness',
    category: 'Wellness',
    categoryHref: '/wellness',
    summary: 'Medically guided weight loss support, including Semaglutide and Phentermine.',
    description: [
      'For patients whose diet and exercise efforts haven’t delivered results, the practice offers weight loss solutions including Semaglutide and Phentermine.',
      'Semaglutide is an injectable medication indicated for weight loss that helps regulate glucose levels and suppress appetite by activating GLP-1 receptors, delivered via weekly injections. Results typically appear within the first few weeks, with optimal outcomes when combined with diet and exercise.',
      'This service can suit patients looking to reduce BMI ahead of surgery, or to jumpstart a weight-loss journey when conventional methods haven’t been enough.',
    ],
  },
  {
    slug: 'iv-hydration',
    name: 'IV Hydration',
    category: 'Wellness',
    categoryHref: '/wellness',
    summary: 'Customized IV nutrient therapy for hydration and energy.',
    description: [
      'IV hydration therapy delivers a mix of essential vitamins and minerals that rehydrates the body and increases energy levels.',
      'Customized nutrient combinations can be selected to support immunity, detoxification for skin and hair health, or post-event recovery.',
    ],
  },
  {
    slug: 'stem-cell-and-regenerative-treatments',
    name: 'Regenerative Treatments',
    category: 'Wellness',
    categoryHref: '/wellness',
    summary: 'Stem cell and regenerative treatments that support skin quality and resilience.',
    description: [
      'Stem cell and regenerative treatments are an evolving area of aesthetic and wellness medicine, focused on the use of biologic materials and regenerative signaling factors to support tissue repair, skin quality, and overall rejuvenation.',
      'These therapies may be used on their own or combined with other aesthetic procedures to address skin texture, tone, and age-related concerns.',
      'Results vary considerably, and cannot guarantee particular cosmetic outcomes — the specific materials, sources, processing methods, and regulatory status are thoroughly discussed during consultation.',
    ],
  },
  {
    slug: 'fue-hair-transplant',
    name: 'FUE Hair Transplant',
    category: 'Hair Restoration',
    categoryHref: '/hair-restoration',
    summary: 'FUE hair transplantation combined with PRP therapy, with no linear donor scar.',
    description: [
      'Follicular Unit Extraction (FUE) is a minimally invasive hair-transplant technique that restores thinning or lost hair by relocating individual hair follicles from a donor area to areas experiencing hair loss.',
      'The procedure uses your own hair follicles with precise placement for natural-looking results and avoids the linear scarring associated with strip-harvesting methods, so hair can be worn short. It can restore the hairline, crown, and thinning areas, and is generally less invasive to recover from than strip harvesting.',
      'Treatments may be combined with Platelet-Rich Plasma (PRP) therapy to support healing and enhance results. Candidacy depends on hair-loss pattern, donor-hair availability, scalp condition, and overall health, and is assessed individually during consultation.',
    ],
  },
];

export function getProcedure(slug: string) {
  return procedures.find((procedure) => procedure.slug === slug);
}

export function proceduresByCategory(categoryHref: string) {
  return procedures.filter((procedure) => procedure.categoryHref === categoryHref);
}
