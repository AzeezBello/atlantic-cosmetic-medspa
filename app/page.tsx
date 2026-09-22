import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/section-heading';
import CtaBanner from '@/components/cta-banner';
import { BOOKING_URL } from '@/lib/site';

const services: [string, string, string][] = [
  ['Cosmetic Surgery', '/cosmetic-surgery', 'Lipo 360, BBL, J-Plasma, and other body and facial procedures.'],
  ['Aesthetics', '/aesthetics', 'Injectables, Kybella, non-surgical BBL, and Endolift® skin tightening.'],
  ['Hair Restoration', '/hair-restoration', 'FUE hair transplantation combined with PRP therapy.'],
  ['Wellness', '/wellness', 'Weight loss & wellness, IV hydration, and regenerative treatments.'],
];

export default function Home() {
  return (
    <>
      <section className="min-h-[92vh] pt-20">
        <div className="container grid min-h-[82vh] items-end gap-10 py-12 lg:grid-cols-[1.05fr_.95fr]">
          <div className="pb-10">
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
          </div>
          <div className="placeholder min-h-[500px] rounded-[32px] lg:min-h-[650px]" aria-hidden="true" />
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
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[.12em]"
            >
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
              <Link className="card" key={href} href={href}>
                <h3 className="text-2xl">{name}</h3>
                <p className="mt-3 leading-6 text-muted">{desc}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[.12em]">
                  Learn more <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
