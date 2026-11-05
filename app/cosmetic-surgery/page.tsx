import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBanner from '@/components/cta-banner';
import ResultFigure from '@/components/result-figure';
import SectionHeading from '@/components/section-heading';
import SpotlightCard from '@/components/spotlight-card';
import { proceduresByCategory } from '@/lib/procedures';
import { resultsFor } from '@/lib/results';

export const metadata: Metadata = {
  title: "Men's Cosmetic Surgery",
  description:
    'Male Lipo 360, Chin & Jawline Liposuction, and J-Plasma® Renuvion skin tightening in Roswell, GA — surgical contouring tailored to male proportions.',
};

const surgery = proceduresByCategory('/cosmetic-surgery');
const lipoResults = resultsFor('lipo-360');

export default function CosmeticSurgeryPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHeading
            as="h1"
            index="01 / Cosmetic Surgery for Men"
            title="Surgical contouring tailored to masculine proportions."
            text="Targeted fat removal and subdermal skin contraction across the torso, abdomen, flanks, chin, and jawline. Candidacy, technique, risks, and recovery are discussed one-on-one during consultation."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {surgery.map((procedure) => (
              <SpotlightCard className="group flex flex-col" key={procedure.slug}>
                <h2 className="text-2xl">{procedure.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">{procedure.summary}</p>
                <ul role="list" className="mt-5 grid gap-1.5 border-t border-line pt-4 text-xs text-ink/80">
                  {procedure.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/procedures/${procedure.slug}`}
                  className="link-arrow mt-7 inline-flex items-center gap-2 text-xs font-semibold text-blue"
                >
                  Explore {procedure.name} <ArrowRight aria-hidden="true" size={14} />
                </Link>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {lipoResults.length > 0 && (
        <section className="section bg-tint">
          <div className="container">
            <SectionHeading
              index="02 / Surgical Outcome"
              title="Male Lipo 360 before and after."
              text="Individual results vary based on anatomy, skin elasticity, and post-operative care."
            />
            <div className="mt-10 max-w-xl">
              {lipoResults.map((result) => (
                <ResultFigure key={result.src} {...result} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
