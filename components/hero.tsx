import { ArrowDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import BookButton from '@/components/book-button';

const portraits = [
  {
    src: '/images/portrait-studio.avif',
    alt: 'A woman with curly hair in a black dress, photographed against a warm beige backdrop',
    width: 467,
    height: 755,
    label: 'Aesthetics',
    href: '/aesthetics',
    className: 'hero-card hero-card-a',
  },
  {
    src: '/images/portrait-beach.avif',
    alt: 'A woman seated on the sand at the beach, looking back over her shoulder and smiling',
    width: 851,
    height: 1100,
    label: 'Body Contouring',
    href: '/cosmetic-surgery',
    className: 'hero-card hero-card-b',
  },
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <Image
          src="/images/hero.avif"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-bg-image object-cover object-[62%_28%]"
        />
        <div className="hero-scrim" />
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
      </div>

      <div className="container relative grid min-h-[calc(100svh-5rem)] items-center gap-16 py-20 sm:py-24 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:py-28">
        <div className="hero-copy">
          <p className="hero-rise text-[10px] uppercase tracking-[.18em] text-white/70 sm:text-[11px]">
            Roswell, GA <span aria-hidden="true">·</span> Cosmetic surgery, aesthetics &amp; wellness
          </p>

          <h1
            id="hero-title"
            className="mt-7 max-w-4xl text-[clamp(3.4rem,13vw,7.5rem)] leading-[.94] tracking-[-.045em] text-white"
          >
            <span className="hero-line">
              <span className="hero-line-inner">Confidence,</span>
            </span>
            <span className="hero-line">
              <span className="hero-line-inner hero-line-accent">refined.</span>
            </span>
          </h1>

          <p className="hero-rise hero-rise-2 mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Be healthy, beautiful, and happy. Atlantic Cosmetic Surgery &amp; MedSpa is a modern cosmetic surgery
            and MedSpa practice in Roswell, Georgia, offering surgical and non-surgical care centered on
            individualized planning and your personal goals.
          </p>

          <div className="hero-rise hero-rise-3 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <BookButton className="btn btn-primary w-full sm:w-auto" />
            <Link className="btn btn-ghost w-full sm:w-auto" href="/cosmetic-surgery">
              Explore Treatments <ArrowRight size={15} />
            </Link>
          </div>

          <div className="hero-rise hero-rise-4 mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[.12em] text-white/55 sm:text-xs">
            <span>Established 2016</span>
            <span>Surgical &amp; Non-Surgical</span>
            <a href="tel:+16786498280" className="transition-colors hover:text-white">
              (678) 649-8280
            </a>
          </div>
        </div>

        <div className="hero-cards" aria-label="Explore our care">
          {portraits.map((portrait) => (
            <Link key={portrait.src} href={portrait.href} className={portrait.className}>
              <div className="hero-card-float">
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  width={portrait.width}
                  height={portrait.height}
                  sizes="(min-width: 1024px) 22vw, 44vw"
                  className="h-full w-full object-cover"
                />
                <span className="hero-card-label">
                  {portrait.label} <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <a href="#approach" className="hero-scroll" aria-label="Scroll to learn about our approach">
        <span>Scroll</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
