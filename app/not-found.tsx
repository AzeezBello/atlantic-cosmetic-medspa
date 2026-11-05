import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import BookButton from '@/components/book-button';

const helpfulLinks = [
  ['Cosmetic Surgery', '/cosmetic-surgery'],
  ['Hair Restoration', '/hair-restoration'],
  ["Men's Aesthetics", '/aesthetics'],
  ['Wellness', '/wellness'],
];

export default function NotFound() {
  return (
    <section className="section flex min-h-[calc(78svh-5rem)] items-center">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-white px-6 py-12 text-center sm:px-12 sm:py-16 md:px-16 md:py-20">
          <p aria-hidden="true" className="font-serif text-[clamp(6rem,20vw,12rem)] leading-[.8] tracking-[-.06em] text-blue/25">
            404
          </p>
          <h1 className="mt-6 text-3xl leading-tight sm:text-5xl">This page isn&rsquo;t here.</h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
            The route may have moved as we focused our catalog exclusively on male procedures and clinical care.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn btn-primary w-full sm:w-auto">
              <ArrowLeft aria-hidden="true" size={16} />
              Back to home
            </Link>
            <BookButton className="btn btn-outline w-full sm:w-auto" />
          </div>

          <nav aria-label="Explore male services" className="mt-10 border-t border-line pt-6">
            <p className="font-mono text-xs text-muted">Explore Men&rsquo;s Services</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3">
              {helpfulLinks.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-blue"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
