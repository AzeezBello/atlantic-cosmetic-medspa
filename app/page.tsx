import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import CtaBanner from '@/components/cta-banner';
import Hero from '@/components/hero';
import ResultFigure from '@/components/result-figure';
import Reveal from '@/components/reveal';
import ScrollJourney from '@/components/scroll-journey';
import SectionHeading from '@/components/section-heading';
import SpotlightCard from '@/components/spotlight-card';
import { procedures } from '@/lib/procedures';
import { featuredResults } from '@/lib/results';

const pillars: [string, string][] = [
  [
    'Discreet entrance by design',
    'A private clinic arrival and calm architectural setting protect your confidentiality from consultation through follow-up.',
  ],
  [
    'Engineered for male proportions',
    'Surgical torso sculpting, jawline definition, and neurotoxin dosing planned specifically around masculine structure — never feminized or overdone.',
  ],
  [
    'Short-fade friendly FUE',
    'Individual follicular extraction with PRP avoids strip-harvesting incisions, leaving no linear scar across the back of the head.',
  ],
  [
    'Surgical & metabolic under one roof',
    'Combine GLP-1 weight management, IV recovery hydration, hair restoration, and body contouring inside one Roswell facility.',
  ],
];

const facts: [string, string][] = [
  ['2016', 'Practice Established'],
  ['4', 'Male Care Disciplines'],
  ['Roswell', 'Georgia Facility'],
];

const featuredSlugs = [
  'lipo-360',
  'fue-hair-transplant',
  'chin-liposuction',
  'injectable-treatments',
  'j-plasma',
  'weight-loss-and-wellness',
];

const signatureProcedures = featuredSlugs
  .map((slug) => procedures.find((item) => item.slug === slug))
  .filter((item): item is (typeof procedures)[number] => Boolean(item));

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
          <Reveal>
            <SectionHeading
              index="The Male Standard"
              title="Anatomical precision. Natural lines. Zero guesswork."
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Men approach aesthetic and surgical care with distinct priorities: sharper jawlines, athletic torso
              proportions, dense natural hairlines, and minimal visible downtime. Led by Olanrewaju Ladipo, MD —
              trained in reconstructive microsurgery, plastic surgery, and hair restoration — every treatment plan is
              tailored directly to male anatomy and long-term maintenance.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-line pt-6 sm:mt-10 sm:gap-6 sm:pt-8">
              {facts.map(([value, label]) => (
                <div key={label} className="min-w-0">
                  <p className="font-serif text-2xl leading-none sm:text-4xl">{value}</p>
                  <p className="mt-2 text-xs text-muted">{label}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="link-arrow mt-7 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-blue sm:mt-8"
            >
              Meet Dr. Ladipo &amp; the Practice <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      <ScrollJourney />

      <section className="section bg-tint">
        <div className="container">
          <Reveal>
            <SectionHeading
              index="Signature Male Procedures"
              title="Targeted treatments with clear clinical purpose."
              text="Candidacy, technique, recovery windows, and expected outcomes are reviewed one-on-one during consultation."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {signatureProcedures.map((procedure, idx) => (
              <Reveal key={procedure.slug} delay={idx * 70} className="flex">
                <SpotlightCard className="group flex w-full flex-col">
                  <p className="font-mono text-xs text-blue">{procedure.category}</p>
                  <h3 className="mt-3 text-2xl sm:mt-3.5">{procedure.name}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-6 text-muted sm:mt-3">{procedure.summary}</p>
                  <Link
                    href={`/procedures/${procedure.slug}`}
                    className="link-arrow mt-6 inline-flex min-h-10 items-center gap-2 text-xs font-semibold text-ink transition-colors group-hover:text-blue"
                  >
                    Explore {procedure.name} <ArrowRight aria-hidden="true" size={14} />
                  </Link>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <SectionHeading
              index="Why Men Choose Atlantic"
              title="Built around privacy, recovery, and lasting structure."
            />
          </Reveal>
          <div className="mt-10 grid gap-8 sm:mt-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {pillars.map(([title, text], index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="border-t border-line pt-5 sm:pt-6">
                  <h3 className="text-xl leading-snug sm:text-2xl">{title}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-muted sm:mt-3">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-tint">
        <div className="container">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                index="Male Clinical Results"
                title="Real male patients. Verified outcomes."
                text="Unretouched clinical photographs across Male Lipo 360 and FUE hair transplantation. Individual results vary."
              />
              <Link
                href="/results"
                className="link-arrow inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-blue"
              >
                View all male results <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid items-start gap-5 sm:mt-12 md:grid-cols-3">
            {featuredResults.map((result, index) => (
              <Reveal key={result.src} delay={index * 95}>
                <ResultFigure {...result} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
