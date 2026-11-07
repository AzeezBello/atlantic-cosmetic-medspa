'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import BookButton from '@/components/book-button';
import CanvasAtmosphere from '@/components/canvas-atmosphere';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(
          '.js-hero-line',
          { yPercent: 112 },
          { yPercent: 0, duration: 0.95, stagger: 0.12 },
        ).fromTo(
          '.js-hero-fade',
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.75, stagger: 0.1 },
          '-=0.52',
        );

        gsap.fromTo(
          '.js-hero-media',
          { scale: 1.08, yPercent: 0 },
          {
            scale: 1,
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      });
    },
    { scope: heroRef },
  );

  return (
    <section ref={heroRef} className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <div className="js-hero-media relative h-full w-full will-change-transform">
          <Image
            src="/images/mens-hero.avif"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_18%] sm:object-[74%_22%]"
          />
        </div>
        <CanvasAtmosphere className="hidden mix-blend-screen opacity-45 sm:block" />
        <div className="hero-scrim" />
      </div>

      <div className="container relative flex min-h-[calc(100svh-4rem)] flex-col justify-end pb-8 pt-36 sm:min-h-[calc(100svh-5rem)] sm:justify-between sm:py-20 lg:py-24">
        <div className="max-w-xl sm:pt-4 lg:pt-8">
          <p className="js-hero-fade font-mono text-[11px] tracking-wide text-sky sm:text-xs">
            Roswell, Georgia &middot; Men&rsquo;s Surgical Practice
          </p>

          <h1
            id="hero-title"
            className="mt-3.5 text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.035em] text-white sm:mt-6"
          >
            <span className="hero-line">
              <span className="js-hero-line block">Built for men.</span>
            </span>
            <span className="hero-line">
              <span className="js-hero-line block text-sky">Engineered for restraint.</span>
            </span>
          </h1>

          <p className="js-hero-fade mt-4 max-w-lg text-sm leading-6 text-white/78 sm:mt-6 sm:text-base sm:leading-7">
            Discreet surgical contouring, FUE hair restoration, and masculine aesthetics — planned around male anatomy
            by Olanrewaju Ladipo, MD.
          </p>

          <div className="js-hero-fade mt-6 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <BookButton className="btn btn-primary w-full sm:w-auto" />
            <Link
              className="link-arrow inline-flex min-h-11 items-center justify-center gap-2 text-sm font-medium text-white/85 transition-colors hover:text-white sm:justify-start"
              href="/results"
            >
              View Male Results <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </div>

        <div className="js-hero-fade mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/12 pt-4 text-[11px] text-white/60 sm:mt-16 sm:pt-6 sm:text-xs">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 sm:gap-x-5">
            <span>Est. 2016</span>
            <span className="text-white/25" aria-hidden="true">
              /
            </span>
            <span>Private Roswell Facility</span>
            <span className="text-white/25" aria-hidden="true">
              /
            </span>
            <a href="tel:+16786498280" className="text-white/85 transition-colors hover:text-white">
              (678) 649-8280
            </a>
          </div>
          <a
            href="#protocol"
            className="hidden items-center gap-2 text-white/70 transition-colors hover:text-white sm:inline-flex"
          >
            <span>Explore protocol</span>
            <ArrowDown aria-hidden="true" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
