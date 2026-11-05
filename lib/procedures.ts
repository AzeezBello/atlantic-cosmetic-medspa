export type Category = 'Cosmetic Surgery' | 'Hair Restoration' | 'Aesthetics' | 'Wellness';

export type Procedure = {
  slug: string;
  name: string;
  category: Category;
  categoryHref: string;
  summary: string;
  highlights: string[];
  description: string[];
};

export const procedures: Procedure[] = [
  {
    slug: 'lipo-360',
    name: 'Male Lipo 360',
    category: 'Cosmetic Surgery',
    categoryHref: '/cosmetic-surgery',
    summary: 'Circumferential torso sculpting targeting the abdomen, chest border, flanks, and lower back for a leaner athletic frame.',
    highlights: ['Abdomen, love handles & lower back', 'Tailored to masculine V-taper proportions', 'Body contouring — not weight loss'],
    description: [
      'Male Lipo 360 sculpts and defines the upper and mid-torso through targeted fat removal across the abdomen, obliques, flanks (love handles), and lower back — engineered around straighter, athletic masculine lines rather than curved proportions.',
      'Ideal candidates are men in good overall health who meet BMI guidelines and want to eliminate stubborn fat pockets that resist training and nutrition. Lipo 360 delivers immediate structural definition as swelling subsides and is planned as precision body contouring rather than a substitute for weight loss.',
    ],
  },
  {
    slug: 'chin-liposuction',
    name: 'Chin & Jawline Liposuction',
    category: 'Cosmetic Surgery',
    categoryHref: '/cosmetic-surgery',
    summary: 'Submental fat removal under local sedation to eliminate a double chin and uncover a sharper mandibular angle.',
    highlights: ['Completed in under an hour', 'Local sedation with rapid recovery', 'Sharpens neck & jawline profile'],
    description: [
      'Chin and jawline liposuction removes submental fat beneath the chin and along the upper neck to create a cleaner cervicomental angle, reduce fullness, and bring out a stronger, more angular lower face.',
      'Submental fullness in men is frequently driven by genetics as much as body composition, persisting even at lean body weights. The procedure is typically completed in under an hour using local sedation with minimal downtime.',
    ],
  },
  {
    slug: 'j-plasma',
    name: 'J-Plasma® Skin Tightening',
    category: 'Cosmetic Surgery',
    categoryHref: '/cosmetic-surgery',
    summary: 'Renuvion helium-plasma and radiofrequency skin contraction paired with male liposuction for firmer torso and neck contours.',
    highlights: ['Helium plasma + RF energy', 'Minimal entry points, no extra downtime', 'Chest, abdomen, flanks, chin & neck'],
    description: [
      'J-Plasma (Renuvion) is an energy-based subdermal skin-tightening technology frequently paired with male liposuction so skin contracts cleanly over newly sculpted contours. Cold helium plasma and radiofrequency energy are delivered through tiny entry points to trigger immediate tissue contraction and ongoing collagen remodeling.',
      'Used across the chest border, abdomen, flanks, back, chin, and neck, J-Plasma adds definition with minimal scarring and without extending liposuction recovery time. Candidacy is evaluated during consultation based on skin elasticity and anatomy.',
    ],
  },
  {
    slug: 'fue-hair-transplant',
    name: 'FUE Hair Transplant',
    category: 'Hair Restoration',
    categoryHref: '/hair-restoration',
    summary: 'Individual follicular unit extraction paired with PRP therapy — natural hairline density with zero linear strip scar.',
    highlights: ['Short-fade & buzz-cut friendly', 'No linear donor scar', 'Combined with PRP therapy'],
    description: [
      'Follicular Unit Extraction (FUE) restores receding temples, frontal hairlines, and thinning crowns by harvesting individual follicles from permanent donor zones and placing them at natural masculine growth angles.',
      'Because FUE avoids strip-harvesting incisions, there is no linear scar across the back of the head — allowing men to continue wearing clean fades or cropped styles with confidence.',
      'Procedures may be paired with Platelet-Rich Plasma (PRP) therapy to support graft survival, scalp healing, and native hair caliber. Hair-loss pattern, donor density, and long-term hairline design are mapped one-on-one with Dr. Ladipo during consultation.',
    ],
  },
  {
    slug: 'injectable-treatments',
    name: "Men's Injectables",
    category: 'Aesthetics',
    categoryHref: '/aesthetics',
    summary: 'Masculine jawline and chin filler alongside tailored neurotoxins for forehead lines, brow heaviness, and jaw clenching.',
    highlights: ['Angular chin & jawline structure', 'Natural movement — never frozen', 'Masseter clenching & line relief'],
    description: [
      'Injectable treatments for men require distinct dosing and anatomical placement to preserve strong, natural facial character. Structural dermal fillers reinforce chin projection and mandibular definition with immediate results and minimal downtime.',
      'Neurotoxins such as Botox® soften deep forehead creases, glabellar frown lines, and crow’s feet while maintaining natural expression, and can also relieve masseter tension from teeth grinding. Full neurotoxin results settle within two weeks.',
    ],
  },
  {
    slug: 'kybella',
    name: 'Kybella® Jawline Contouring',
    category: 'Aesthetics',
    categoryHref: '/aesthetics',
    summary: 'Non-surgical injectable deoxycholic acid that permanently destroys submental fat cells beneath the chin.',
    highlights: ['Non-surgical office sessions', 'Targets double-chin fullness', 'Permanent fat-cell destruction'],
    description: [
      'KYBELLA® is an FDA-approved injectable treatment indicated for adults with moderate-to-severe submental fat beneath the chin who prefer a non-surgical alternative to chin liposuction.',
      'Using synthetic deoxycholic acid — a molecule naturally produced by the body to break down dietary fat — targeted injections destroy fat cells under the chin over a customized series of sessions, progressively sharpening the profile.',
    ],
  },
  {
    slug: 'endolift',
    name: 'Endolift® Laser Tightening',
    category: 'Aesthetics',
    categoryHref: '/aesthetics',
    summary: 'Minimally invasive subdermal laser remodeling to tighten lower-face, jawline, neck, and torso laxity.',
    highlights: ['Subdermal micro-optical fiber', 'Sharpens lower face & neck', 'Minimal recovery window'],
    description: [
      'Endolift® delivers targeted laser energy beneath the skin via hair-thin micro-optical fibers to stimulate deep collagen contraction and selective fat remodeling without surgical incisions.',
      'For men noticing early jowling, softening along the jawline and neck, or mild skin laxity on the abdomen, Endolift® offers measurable tightening with far less downtime than surgical lifting. Consultation determines whether laser remodeling or surgical contouring best fits your anatomy.',
    ],
  },
  {
    slug: 'weight-loss-and-wellness',
    name: 'Medical Weight Loss',
    category: 'Wellness',
    categoryHref: '/wellness',
    summary: 'Physician-guided GLP-1 (Semaglutide) and Phentermine programs for visceral fat loss and metabolic performance.',
    highlights: ['Weekly Semaglutide protocols', 'Phentermine metabolic options', 'Pre-surgery BMI optimization'],
    description: [
      'When structured training and nutrition hit a plateau, physician-directed medical weight loss provides targeted metabolic support using clinically proven medications including Semaglutide and Phentermine.',
      'Semaglutide activates GLP-1 receptors via once-weekly injections to regulate glucose response, quiet persistent appetite signals, and reduce visceral body fat steadily alongside strength training and protein-focused nutrition.',
      'Men utilize the program both for standalone body-composition goals and to reach optimal target BMI ahead of Lipo 360 or torso contouring.',
    ],
  },
  {
    slug: 'iv-hydration',
    name: 'IV Performance Hydration',
    category: 'Wellness',
    categoryHref: '/wellness',
    summary: 'Direct micronutrient, mineral, and hydration infusions engineered for stamina, recovery, and cellular resilience.',
    highlights: ['100% intravenous bioavailability', 'Athletic & travel recovery', 'Supports immunity, skin & hair'],
    description: [
      'IV hydration therapy bypasses digestive absorption limits to deliver fluids, electrolytes, essential vitamins, and minerals directly into circulation for rapid cellular replenishment.',
      'Formulations are tailored around demanding schedules — supporting intense training recovery, immune defense, travel fatigue, or foundational scalp and skin nutrition.',
    ],
  },
  {
    slug: 'stem-cell-and-regenerative-treatments',
    name: 'Regenerative Treatments',
    category: 'Wellness',
    categoryHref: '/wellness',
    summary: 'Biologic signaling factors and regenerative protocols supporting tissue repair, recovery, and skin quality.',
    highlights: ['Biologic signaling factors', 'Standalone or paired with procedures', 'Individualized clinical review'],
    description: [
      'Regenerative medicine focuses on biologic materials and cellular signaling factors that support tissue repair, structural skin quality, and post-procedure recovery.',
      'For male patients, regenerative therapies may be integrated alongside hair restoration, laser tightening, or aesthetic care to address texture, tone, and age-related tissue changes.',
      'Outcomes vary by individual biology and cannot guarantee specific cosmetic results — exact biologic sources, processing standards, and regulatory status are reviewed transparently during consultation.',
    ],
  },
];

export function getProcedure(slug: string) {
  return procedures.find((procedure) => procedure.slug === slug);
}

export function proceduresByCategory(categoryHref: string) {
  return procedures.filter((procedure) => procedure.categoryHref === categoryHref);
}
