'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    index: '01',
    title: 'Torso & Jawline Surgery',
    subtitle: 'Athletic body & profile sculpting',
    description:
      'Male Lipo 360, submental chin liposuction under local sedation, and Renuvion J-Plasma® skin contraction engineered around straighter, defined masculine lines.',
    procedures: ['Male Lipo 360', 'Chin & Jawline Liposuction', 'J-Plasma® Tightening'],
    href: '/cosmetic-surgery',
    cta: 'Explore Cosmetic Surgery',
    image: '/images/results/lipo-360-male-front.avif',
    imageAlt: 'Male Lipo 360 before and after torso contouring result',
    caption: 'Clinical Outcome — Male Lipo 360',
  },
  {
    index: '02',
    title: 'FUE Hair Restoration',
    subtitle: 'Natural density, zero linear strip scar',
    description:
      'Individual follicular unit extraction paired with Platelet-Rich Plasma (PRP) rebuilds receding temples, frontal hairlines, and crowns so hair can still be worn faded or short.',
    procedures: ['FUE Hairline & Crown Grafts', 'PRP Follicular Support', 'Short-Fade Friendly Donor Harvesting'],
    href: '/hair-restoration',
    cta: 'Explore Hair Restoration',
    image: '/images/results/hair-transplant-1.png',
    imageAlt: 'Male FUE hair transplant before and after hairline restoration',
    caption: 'Clinical Outcome — FUE Hair Transplant',
  },
  {
    index: '03',
    title: "Men's Facial Aesthetics",
    subtitle: 'Angular structure without an overdone look',
    description:
      'Targeted mandibular and chin fillers, conservative neurotoxin dosing for forehead creases and masseter clenching, Kybella®, and Endolift® subdermal laser tightening.',
    procedures: ["Men's Injectables & Jawline Filler", 'Kybella® Submental Reduction', 'Endolift® Laser Remodeling'],
    href: '/aesthetics',
    cta: "Explore Men's Aesthetics",
    image: '/images/mens-jawline.avif',
    imageAlt: 'Editorial profile portrait illustrating masculine jawline and neck definition',
    caption: 'Editorial Focus — Jawline & Lower-Face Structure',
  },
  {
    index: '04',
    title: 'Metabolic & Recovery Wellness',
    subtitle: 'Internal performance under medical oversight',
    description:
      'Weekly GLP-1 (Semaglutide) and Phentermine protocols for visceral fat loss or pre-surgical BMI readiness, alongside IV performance hydration and biologic regenerative care.',
    procedures: ['GLP-1 Medical Weight Loss', 'IV Performance Hydration', 'Regenerative Biologic Therapy'],
    href: '/wellness',
    cta: "Explore Men's Wellness",
    image: '/images/mens-hair-wellness.avif',
    imageAlt: 'Composed male patient in a modern architectural wellness clinic lounge',
    caption: 'Editorial Focus — Physician-Guided Longevity & Recovery',
  },
] as const;

/**
 * Scroll-scrubbed multi-stage architectural journey inspired by oso95/scroll-world
 * and built with @gsap/react useGSAP + ScrollTrigger best practices.
 */
export default function ScrollJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.js-journey-progress',
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.js-journey-track',
              start: 'top center',
              end: 'bottom center',
              scrub: 0.35,
            },
          },
        );

        const cards = gsap.utils.toArray<HTMLElement>('.js-journey-stage');
        cards.forEach((card, idx) => {
          ScrollTrigger.create({
            trigger: card,
            start: 'top 58%',
            end: 'bottom 58%',
            onEnter: () => setActiveIndex(idx),
            onEnterBack: () => setActiveIndex(idx),
          });
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="protocol" ref={sectionRef} className="section bg-deep text-white scroll-mt-20">
      <div className="container">
        <div className="max-w-2xl">
          <div className="index-tag !text-sky">02 / Clinical Architecture</div>
          <h2 className="text-[clamp(1.75rem,4.5vw,2.85rem)] leading-[1.1] tracking-[-0.02em] text-white">
            Four disciplines engineered exclusively around male anatomy.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Surgery, hair restoration, facial structure, and metabolic wellness planned together under one roof in
            Roswell, Georgia.
          </p>
        </div>

        <div className="js-journey-track mt-10 grid gap-8 sm:mt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-16">
          <div className="relative lg:pl-9">
            <div aria-hidden="true" className="absolute bottom-2 left-0 top-2 hidden w-px bg-white/14 lg:block">
              <div className="js-journey-progress h-full w-full origin-top bg-sky" />
            </div>

            <div className="grid gap-6 sm:gap-8 lg:gap-20">
              {stages.map((stage, idx) => {
                const isCurrent = activeIndex === idx;
                return (
                  <article
                    key={stage.index}
                    className={`js-journey-stage rounded-xl border border-white/15 bg-white/[0.04] p-5 transition-colors duration-300 sm:p-8 ${
                      isCurrent
                        ? 'lg:border-sky/50 lg:bg-white/[0.06]'
                        : 'lg:border-white/12 lg:bg-white/[0.02] lg:hover:border-white/25'
                    }`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <span className="font-mono text-xs text-sky">
                        Stage {stage.index} / 0{stages.length}
                      </span>
                      <span className="text-xs text-white/60">{stage.subtitle}</span>
                    </div>

                    <h3 className="mt-3 text-2xl text-white sm:mt-4 sm:text-3xl">{stage.title}</h3>
                    <p className="mt-2.5 text-sm leading-6 text-white/75 sm:mt-3 sm:text-base sm:leading-7">
                      {stage.description}
                    </p>

                    <ul role="list" className="mt-5 grid gap-2 border-t border-white/12 pt-4 text-sm text-white/85">
                      {stage.procedures.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Inline stage visual on mobile/tablet so non-desktop users see every stage clearly */}
                    <div className="mt-5 overflow-hidden rounded-lg border border-white/12 bg-navy/40 lg:hidden">
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={stage.image}
                          alt={stage.imageAlt}
                          fill
                          sizes="(max-width: 1023px) 100vw, 45vw"
                          className="object-cover object-top"
                        />
                      </div>
                      <p className="px-4 py-2.5 font-mono text-[11px] text-white/70">{stage.caption}</p>
                    </div>

                    <Link
                      href={stage.href}
                      className="link-arrow mt-6 inline-flex min-h-10 items-center gap-2 text-xs font-semibold text-sky hover:text-white"
                    >
                      {stage.cta} <ArrowRight aria-hidden="true" size={15} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Sticky scroll-scrubbed stage viewport on desktop */}
          <div className="hidden lg:sticky lg:top-28 lg:block">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-navy/30 shadow-[0_28px_72px_rgba(0,0,0,0.42)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-deep">
                {stages.map((stage, idx) => {
                  const active = activeIndex === idx;
                  return (
                    <div
                      key={stage.index}
                      aria-hidden={!active}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        active ? 'opacity-100' : 'pointer-events-none opacity-0'
                      }`}
                    >
                      <Image
                        src={stage.image}
                        alt={stage.imageAlt}
                        fill
                        sizes="45vw"
                        className={`object-cover object-top transition-transform duration-700 ${
                          active ? 'scale-100' : 'scale-105'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-between border-t border-white/12 px-6 py-4 text-xs">
                <span className="font-mono text-sky">
                  {stages[activeIndex].index} — {stages[activeIndex].title}
                </span>
                <span className="text-white/65">{stages[activeIndex].caption}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
