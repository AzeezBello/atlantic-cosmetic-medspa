type BrandMarkProps = {
  tone?: 'dark' | 'light';
  className?: string;
};

export default function BrandMark({ tone = 'dark', className = '' }: BrandMarkProps) {
  const isLight = tone === 'light';
  const primaryText = isLight ? 'text-white' : 'text-ink';
  const secondaryText = isLight ? 'text-white/70' : 'text-muted';
  const crestBg = isLight ? 'bg-white/10 border-white/25' : 'bg-deep border-deep';

  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3.5 ${className}`}>
      <span
        aria-hidden="true"
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border sm:h-10 sm:w-10 ${crestBg}`}
      >
        <svg viewBox="0 0 32 32" className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true">
          <path
            d="M16 5L6.5 27h3.9l2.1-5.1h7l2.1 5.1h3.9L16 5zm-2.2 13.6L16 12.9l2.2 5.7h-4.4z"
            fill="#ffffff"
          />
          <rect x="11" y="24.5" width="10" height="2" fill="#0f5fd1" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-lg tracking-tight sm:text-xl ${primaryText}`}>Atlantic</span>
        <span className={`mt-1 text-[10px] font-medium sm:text-[11px] ${secondaryText}`}>
          Cosmetic Surgery &amp; MedSpa
        </span>
      </span>
    </span>
  );
}
