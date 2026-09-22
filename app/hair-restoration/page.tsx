import type { Metadata } from 'next';
import CtaBanner from '@/components/cta-banner';
import { BOOKING_URL } from '@/lib/site';
import { getProcedure } from '@/lib/procedures';

export const metadata: Metadata = {
  title: 'Hair Restoration',
  description:
    'FUE hair transplantation combined with PRP therapy — no linear donor scar, natural-looking growth, and results assessed individually.',
};

const fue = getProcedure('fue-hair-transplant')!;

export default function HairRestorationPage() {
  return (
    <>
      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="placeholder min-h-[480px] rounded-[30px]" aria-hidden="true" />
          <div>
            <div className="eyebrow">Hair Restoration</div>
            <h1 className="text-5xl">Restore the hairline.</h1>
            <div className="mt-6 grid gap-4 max-w-xl leading-8 text-muted">
              {fue.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
