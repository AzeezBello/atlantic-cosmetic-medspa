import BookButton from '@/components/book-button';

export default function CtaBanner() {
  return (
    <section className="section bg-navy text-white">
      <div className="container flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <div className="index-tag !text-sky">Private Consultation</div>
          <h2 className="text-[clamp(1.75rem,4.5vw,2.85rem)] leading-[1.1] tracking-[-0.02em]">
            Direct answers. Discreet planning. Tailored to your goals.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/75">
            Meet one-on-one at our Roswell clinic to review candidacy, anatomy, recovery timelines, and expected
            outcomes.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <BookButton className="btn btn-primary w-full sm:w-auto" />
          <a
            href="tel:+16786498280"
            className="btn btn-ghost w-full sm:w-auto"
          >
            Call (678) 649-8280
          </a>
        </div>
      </div>
    </section>
  );
}
