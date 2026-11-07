import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CtaBanner from '@/components/cta-banner';
import SectionHeading from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'About Atlantic',
  description:
    "Atlantic Men's Surgery & MedSpa — surgeon-led male body contouring, hair restoration, facial aesthetics, and metabolic wellness in Roswell, GA, established in 2016.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-14">
          <div>
            <SectionHeading
              as="h1"
              index="01 / About Atlantic"
              title="Dedicated surgical and medical care built around men."
            />
            <div className="mt-6 grid gap-5 text-base leading-7 text-muted sm:mt-8 sm:gap-6 sm:text-lg sm:leading-8">
              <p>
                Established in Smyrna, Georgia in 2016 and now operating out of a modern private facility in Roswell,
                Atlantic Men&rsquo;s Surgery &amp; MedSpa brings surgical contouring, FUE hair restoration, masculine
                facial aesthetics, and metabolic wellness together under one roof.
              </p>
              <p>
                Men rarely want an over-styled spa experience — they want straightforward medical guidance, natural
                masculine proportions, and complete privacy. Our Roswell clinic is engineered around a discreet entrance,
                individualized anatomical planning, and attentive follow-through from consultation to recovery.
              </p>
            </div>
            <Link href="/our-clinic" className="btn btn-outline mt-7 w-full sm:mt-8 sm:w-auto">
              Tour Our Roswell Facility
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-tint sm:aspect-[3/4]">
            <Image
              src="/images/clinic-team.png"
              alt="Dr. Olanrewaju Ladipo and the Atlantic clinical team in the Roswell facility"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="section bg-tint">
        <div className="container grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-14">
          <SectionHeading index="02 / Lead Surgeon" title="Olanrewaju Ladipo, MD" />
          <div className="grid gap-5 text-base leading-7 text-muted sm:gap-6 sm:text-lg sm:leading-8">
            <p>
              Dr. Ladipo earned his MD from Lagos State University College of Medicine and completed Internal Medicine
              training at Newark Beth Israel Medical Center in Newark, NJ. He specialized in reconstructive
              microsurgery at Queen Mary University of London and completed a Plastic Surgery residency at Universidade
              Brasil in São Paulo, where he serves as a Senior Plastic Surgery Fellow. He is an associate member of the
              International Society of Hair Restoration Surgery (ISHRS).
            </p>
            <p>
              Combining internal medicine foundations with microsurgical precision, Dr. Ladipo focuses on athletic male
              torso and jawline contouring, scar-free FUE hair transplantation paired with Platelet-Rich Plasma (PRP)
              therapy, and physician-supervised metabolic care. Outside the practice, he participates in annual
              international medical missions providing reconstructive care to burn patients.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
