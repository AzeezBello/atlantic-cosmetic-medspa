import { ChevronDown } from 'lucide-react';
import type { Metadata } from 'next';
import CtaBanner from '@/components/cta-banner';
import SectionHeading from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Frequently asked questions about procedures at Atlantic Cosmetic Surgery & MedSpa.',
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Will an FUE hair transplant leave a visible linear scar if I wear a short fade?',
    answer:
      'No. Follicular Unit Extraction (FUE) harvests individual hair follicles rather than removing a strip of scalp, avoiding the horizontal linear scar associated with strip methods so hair can still be worn cropped or faded once healed.',
  },
  {
    question: 'Is Lipo 360 a weight-loss procedure?',
    answer:
      'No. Lipo 360 is a precision body-contouring procedure designed to remove stubborn fat deposits across the abdomen, obliques, flanks, and lower back for a leaner V-taper frame. Patients looking to reduce BMI before surgery can begin with our physician-guided Semaglutide or Phentermine weight-loss program.',
  },
  {
    question: 'How do I choose between Chin Liposuction and Kybella® for jawline definition?',
    answer:
      'Chin liposuction physically removes submental fat in a single procedure typically completed in under an hour under local sedation. Kybella® is a non-surgical injectable option using synthetic deoxycholic acid across a tailored series of office sessions. Dr. Ladipo evaluates skin elasticity and submental volume during consultation to recommend the right fit.',
  },
  {
    question: 'Will neurotoxins or jawline fillers look unnatural?',
    answer:
      'Injectable planning uses conservative dosing and angular placement tailored to natural bone structure — softening deep forehead lines or masseter jaw tension without freezing expression, and reinforcing chin or mandibular definition rather than adding rounded volume.',
  },
  {
    question: 'Does adding J-Plasma® (Renuvion) increase liposuction downtime?',
    answer:
      'J-Plasma® uses existing tiny liposuction entry points to deliver cold helium plasma and radiofrequency energy beneath the skin, promoting tissue contraction across the chest border, abdomen, flanks, or neck without adding extra recovery time.',
  },
];

export default function FaqsPage() {
  return (
    <>
      <section className="section">
        <div className="container max-w-3xl">
          <SectionHeading
            as="h1"
            index="Frequently Asked Questions"
            title="Clear answers before your consultation."
            text="Every patient’s anatomy and medical history are distinct; specific surgical and non-surgical recommendations are finalized one-on-one."
          />
          <div className="mt-10 grid gap-4 sm:mt-12">
            {faqs.map(({ question, answer }, idx) => (
              <details key={question} className="card group" open={idx === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-lg leading-snug text-ink marker:content-none sm:text-xl">
                  <span>{question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    size={18}
                    className="mt-1 shrink-0 text-blue transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="mt-4 border-t border-line pt-4 text-sm leading-7 text-muted sm:text-base">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
