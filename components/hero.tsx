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

const pillars = [
  ['Male Lipo 360 & Jawline', '/cosmetic-surgery'],
  ['FUE Hair Restoration', '/hair-restoration'],
  ["Men's Injectables & Laser", '/aesthetics'],
  ['GLP-1 & IV Performance', '/wellness'],
] as const;

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
            className="object-cover object-[74%_22%]"
          />
        </div>
        <CanvasAtmosphere className="mix-blend-screen opacity-75" />
        <div className="hero-scrim" />
      </div>

      <div className="container relative flex min-h-[calc(100svh-5rem)] flex-col justify-between py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl pt-4 lg:pt-8">
          <p className="js-hero-fade font-mono text-xs text-sky">
            Roswell, Georgia — Men&rsquo;s Surgical &amp; Medical Practice
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[clamp(3.2rem,8.5vw,6.25rem)] leading-[.95] tracking-[-.04em] text-white"
          >
            <span className="hero-line">
              <span className="js-hero-line block">Built for men.</span>
            </span>
            <span className="hero-line">
              <span className="js-hero-line block text-sky">Engineered for restraint.</span>
            </span>
          </h1>

          <p className="js-hero-fade mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Discreet surgical contouring, FUE hair restoration, masculine jawline aesthetics, and physician-led
            metabolic care — planned around male anatomy by Olanrewaju Ladipo, MD.
          </p>

          <div className="js-hero-fade mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
            <BookButton className="btn btn-primary w-full sm:w-auto" />
            <Link className="btn btn-ghost w-full sm:w-auto" href="/results">
              View Male Results <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </div>

        <div className="js-hero-fade mt-16 border-t border-white/15 pt-7">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(([label, href], idx) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center justify-between rounded-md border border-white/12 bg-white/[0.04] px-4 py-3.5 backdrop-blur-md transition-colors hover:border-sky/60 hover:bg-white/[0.08]"
              >
                <span className="flex items-center gap-3 text-sm text-white/90">
                  <span className="font-mono text-xs text-sky">0{idx + 1}</span>
                  <span>{label}</span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  size={14}
                  className="text-white/60 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-sky"
                />
              </Link>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/60">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span>Established 2016</span>
              <span>Private Entrance Facility</span>
              <a href="tel:+16786498280" className="text-white/80 transition-colors hover:text-white">
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
      </div>
    </section>
  );
}
