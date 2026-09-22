import type { Metadata } from 'next';
import SectionHeading from '@/components/section-heading';
import CtaBanner from '@/components/cta-banner';

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Frequently asked questions about procedures at Atlantic Cosmetic Surgery & MedSpa.',
};

const faqs: { question: string; answer: string | null }[] = [
  {
    question: 'How long does it take to fully recover from a BBL?',
    answer:
      'Your incisions will take two to three weeks to heal, but it will be approximately six months before you see the final results, as the transferred fat settles and swelling resolves. Proper aftercare is important to the outcome.',
  },
  { question: 'What should you not do before a BBL?', answer: null },
  { question: 'What happens to a BBL after several years?', answer: null },
];

export default function FaqsPage() {
  return (
    <>
      <section className="section">
        <div className="container max-w-3xl">
          <SectionHeading as="h1" eyebrow="FAQs" title="Frequently asked questions." />
          <div className="mt-12 grid gap-4">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="card" open={Boolean(answer)}>
                <summary className="cursor-pointer text-lg font-medium marker:content-none">{question}</summary>
                <p className="mt-4 leading-7 text-muted">
                  {answer ?? 'This is best answered for your specific situation — ask us during a consultation.'}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
