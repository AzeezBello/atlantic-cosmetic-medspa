import BookButton from '@/components/book-button';

export default function CtaBanner() {
  return (
    <section className="section bg-navy text-white">
      <div className="container flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <div className="index-tag !text-sky">Private Consultation</div>
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
            Direct answers. Discreet planning. Tailored to your goals.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/75">
            Meet one-on-one at our Roswell clinic to review candidacy, anatomy, recovery timelines, and expected
            outcomes.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <BookButton />
          <a
            href="tel:+16786498280"
            className="inline-flex min-h-12 items-center rounded-md border border-white/25 px-5 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            Call (678) 649-8280
          </a>
        </div>
      </div>
    </section>
  );
}
