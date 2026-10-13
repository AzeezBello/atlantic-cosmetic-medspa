import type { Metadata } from 'next';
import SectionHeading from '@/components/section-heading';
import CtaBanner from '@/components/cta-banner';
import ResultFigure from '@/components/result-figure';
import { results } from '@/lib/results';

export const metadata: Metadata = {
  title: 'Results',
  description: 'Before and after results from Atlantic Cosmetic Surgery & MedSpa — Lipo 360, BBL, injectables, and hair transplant.',
};

export default function ResultsPage() {
  return (
    <>
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            as="h1"
            eyebrow="Results"
            title="Your story is personal."
            text="A selection of patient results across body contouring, aesthetics, and hair restoration. Individual results vary."
          />
          <div className="mt-12 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
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
