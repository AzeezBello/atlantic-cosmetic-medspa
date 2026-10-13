import BookButton from '@/components/book-button';

export default function CtaBanner() {
  return (
    <section className="section bg-navy text-white">
      <div className="container flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[.18em] text-sky">Get started</div>
          <h2 className="mt-2 text-4xl leading-tight md:text-5xl">Let&rsquo;s talk about your goals.</h2>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <BookButton />
          <a href="tel:+16786498280" className="text-xs uppercase tracking-[.12em] hover:opacity-70">
            (678) 649-8280
          </a>
        </div>
      </div>
    </section>
  );
}
