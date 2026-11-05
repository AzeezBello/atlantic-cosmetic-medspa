import type { Metadata } from 'next';
import CtaBanner from '@/components/cta-banner';
import ResultFigure from '@/components/result-figure';
import SectionHeading from '@/components/section-heading';
import { results } from '@/lib/results';

export const metadata: Metadata = {
  title: 'Male Patient Results',
  description:
    'Verified male before and after results from Atlantic Men’s Surgery & MedSpa — Male Lipo 360 torso contouring and FUE hair transplantation.',
};

export default function ResultsPage() {
  return (
    <>
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            as="h1"
            index="01 / Male Clinical Gallery"
            title="Real male patients. Verified outcomes."
            text="A curated clinical gallery of male torso sculpting and FUE hair restoration performed at our Roswell practice. Individual results vary."
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
