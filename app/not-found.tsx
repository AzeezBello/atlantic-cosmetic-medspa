import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import BookButton from '@/components/book-button';

const helpfulLinks = [
  ['Cosmetic surgery', '/cosmetic-surgery'],
  ['Aesthetics', '/aesthetics'],
  ['Wellness', '/wellness'],
];

export default function NotFound() {
  return (
    <section className="section flex min-h-[calc(78svh-5rem)] items-center overflow-hidden">
      <div className="container">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-line bg-white px-6 py-12 text-center shadow-[0_24px_80px_rgba(11,31,51,0.06)] sm:rounded-[36px] sm:px-12 sm:py-16 md:px-20 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-tint/80 blur-3xl"
          />
          <div className="relative">
            <p className="eyebrow mb-4">A little detour</p>
            <p aria-hidden="true" className="font-serif text-[clamp(7rem,24vw,14rem)] leading-[.78] tracking-[-.08em] text-sky/70">
              404
            </p>
            <h1 className="mt-8 text-4xl leading-tight sm:text-5xl">This page isn&rsquo;t here.</h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
              It may have moved, or the address may be mistyped. Let&rsquo;s help you find the care and information
              you came for.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/" className="btn btn-primary w-full sm:w-auto">
                <ArrowLeft aria-hidden="true" className="mr-2" size={16} />
                Back to home
              </Link>
              <BookButton className="btn btn-outline w-full sm:w-auto" />
            </div>

            <nav aria-label="Explore our services" className="mt-10 border-t border-line/80 pt-6">
              <p className="text-[10px] uppercase tracking-[.16em] text-muted">Explore our services</p>
              <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3">
                {helpfulLinks.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-sky"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
