import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Hero from '@/components/hero';
import Reveal from '@/components/reveal';
import SectionHeading from '@/components/section-heading';
import CtaBanner from '@/components/cta-banner';
import ResultFigure from '@/components/result-figure';
import { featuredResults } from '@/lib/results';

const services: [string, string, string][] = [
  ['Cosmetic Surgery', '/cosmetic-surgery', 'Lipo 360, BBL, J-Plasma, and other body and facial procedures.'],
  ['Aesthetics', '/aesthetics', 'Injectables, Kybella, non-surgical BBL, and Endolift® skin tightening.'],
  ['Hair Restoration', '/hair-restoration', 'FUE hair transplantation combined with PRP therapy.'],
  ['Wellness', '/wellness', 'Weight loss & wellness, IV hydration, and regenerative treatments.'],
];

const pillars: [string, string][] = [
  ['Privacy by design', 'A discreet entrance and a warm, welcoming atmosphere protect your comfort from the moment you arrive.'],
  ['A modern facility', 'Patient rooms and operating areas equipped with the latest technology and medical equipment.'],
  ['Surgical and non-surgical, under one roof', 'Cosmetic surgery, aesthetics, hair restoration, and wellness care in a single Roswell location.'],
  ['Care from consultation to recovery', 'Safety and comfort prioritized at every stage — before, during, and after your procedure.'],
];

const facts: [string, string][] = [
  ['2016', 'Established'],
  ['4', 'Areas of care'],
  ['Roswell', 'Georgia'],
];

export default function Home() {
  return (
    <>
      <Hero />

      <section id="approach" className="section scroll-mt-20">
        <div className="container grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="The Atlantic Approach"
              title="Personalized care. Modern techniques. Thoughtful results."
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg leading-8 text-muted">
              Every treatment begins with understanding what you want to change and why. Our approach combines
              aesthetic planning with individualized consultation so your care can be tailored to your anatomy,
              preferences, and goals.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {facts.map(([value, label]) => (
                <div key={label}>
                  <p className="font-serif text-3xl leading-none sm:text-4xl">{value}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[.14em] text-muted sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="link-arrow mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[.12em]">
              About Atlantic <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section bg-tint">
        <div className="container">
          <Reveal>
            <div className="max-w-2xl">
              <div className="eyebrow">Why Atlantic</div>
              <h2 className="text-4xl leading-tight md:text-5xl">Built around your comfort and peace of mind.</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {pillars.map(([title, text], index) => (
              <Reveal key={title} delay={index * 90}>
                <article className="border-t border-line pt-6">
                  <span className="text-xs tracking-[.14em] text-blue">0{index + 1}</span>
                  <h3 className="mt-4 text-2xl leading-snug">{title}</h3>
                  <p className="mt-3 leading-6 text-muted">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title="Care across surgery, aesthetics, and wellness."
              text="Candidacy, technique, risks, recovery, and expected outcomes are discussed during consultation."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([name, href, desc], index) => (
              <Reveal key={href} delay={index * 90} className="flex">
                <Link className="card group flex w-full flex-col" href={href}>
                  <span className="text-xs tracking-[.14em] text-muted">0{index + 1}</span>
                  <h3 className="mt-5 text-2xl">{name}</h3>
                  <p className="mt-3 flex-1 leading-6 text-muted">{desc}</p>
                  <span className="link-arrow mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[.12em]">
                    Learn more <ArrowRight size={15} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading eyebrow="Results" title="Real patients. Real outcomes." text="Individual results vary." />
              <Link href="/results" className="link-arrow inline-flex items-center gap-2 text-xs uppercase tracking-[.12em]">
                View all results <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid items-start gap-5 md:grid-cols-3">
            {featuredResults.map((result, index) => (
              <Reveal key={result.src} delay={index * 110}>
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
