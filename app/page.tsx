import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/section-heading';
import CtaBanner from '@/components/cta-banner';
import ResultFigure from '@/components/result-figure';
import { BOOKING_URL } from '@/lib/site';
import { results } from '@/lib/results';

const services: [string, string, string][] = [
  ['Cosmetic Surgery', '/cosmetic-surgery', 'Lipo 360, BBL, J-Plasma, and other body and facial procedures.'],
  ['Aesthetics', '/aesthetics', 'Injectables, Kybella, non-surgical BBL, and Endolift® skin tightening.'],
  ['Hair Restoration', '/hair-restoration', 'FUE hair transplantation combined with PRP therapy.'],
  ['Wellness', '/wellness', 'Weight loss & wellness, IV hydration, and regenerative treatments.'],
];

export default function Home() {
  return (
    <>
      <section>
        <div className="container grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-16">
          <div>
            <div className="eyebrow">Cosmetic Surgery · Aesthetics · Wellness</div>
            <h1 className="max-w-3xl text-6xl leading-[.98] md:text-8xl">
              Confidence,
              <br />
              refined.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted">
              Be healthy, beautiful, and happy — a modern cosmetic surgery and MedSpa experience led by Dr.
              Olanrewaju Ladipo, centered on individualized care and thoughtful treatment planning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a Consultation
              </a>
              <Link className="btn btn-outline" href="/cosmetic-surgery">
                Explore Treatments
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[.12em] text-muted">
              <span>Roswell, GA</span>
              <span>Established 2016</span>
              <a href="tel:+16786498280">(678) 649-8280</a>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-tint">
            <Image
              src="/images/dr-ladipo-portrait.png"
              alt="Dr. Olanrewaju Ladipo smiling in the Atlantic Cosmetic Surgery & MedSpa clinic"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[58%_40%]"
            />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/85 px-5 py-4 backdrop-blur">
              <p className="text-sm">Olanrewaju Ladipo, MD</p>
              <p className="mt-1 text-xs text-muted">Atlantic Cosmetic Surgery & MedSpa</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="The Atlantic Approach"
            title="Personalized care. Modern techniques. Thoughtful results."
          />
          <div>
            <p className="text-lg leading-8 text-muted">
              Every treatment begins with understanding what you want to change and why. Our approach combines
              aesthetic planning with individualized consultation so your care can be tailored to your anatomy,
              preferences, and goals.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[.12em]">
              Meet Dr. Ladipo <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Explore Our Services"
            title="Care across surgery, aesthetics, and wellness."
            text="Candidacy, technique, risks, recovery, and expected outcomes are discussed during consultation."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([name, href, desc]) => (
              <Link className="card flex flex-col" key={href} href={href}>
                <h3 className="text-2xl">{name}</h3>
                <p className="mt-3 flex-1 leading-6 text-muted">{desc}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[.12em]">
                  Learn more <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Results" title="Real patients. Real outcomes." text="Individual results vary." />
            <Link href="/results" className="inline-flex items-center gap-2 text-xs uppercase tracking-[.12em]">
              View all results <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {results.slice(0, 3).map((result) => (
              <ResultFigure key={result.src} {...result} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
