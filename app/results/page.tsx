import type { Metadata } from 'next';
import CtaBanner from '@/components/cta-banner';
import ResultFigure from '@/components/result-figure';
import SectionHeading from '@/components/section-heading';
import { results } from '@/lib/results';

export const metadata: Metadata = {
  title: 'Patient Results',
  description:
    'Verified before and after results from Atlantic Cosmetic Surgery & MedSpa — Lipo 360 torso contouring and FUE hair transplantation.',
};

export default function ResultsPage() {
  return (
    <>
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            as="h1"
            index="Clinical Gallery"
            title="Real patients. Verified outcomes."
            text="A curated clinical gallery of torso sculpting and FUE hair restoration performed at our Roswell practice. Individual results vary."
          />
          <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
            {results.map((result) => (
              <ResultFigure key={result.src} {...result} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
