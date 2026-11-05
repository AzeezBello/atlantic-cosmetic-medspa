'use client';

import type { HTMLAttributes, ReactNode } from 'react';
import { useRef } from 'react';

type SpotlightCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

/**
 * Cursor-tracked radial border & surface highlight inspired by DavidHDev/react-bits.
 * Writes coordinates directly to CSS custom properties for zero React re-renders.
 */
export default function SpotlightCard({ children, className = '', ...props }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return;
    const node = cardRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    node.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
    node.style.setProperty('--spot-opacity', '1');
  };

  const handlePointerLeave = () => {
    cardRef.current?.style.setProperty('--spot-opacity', '0');
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`card spotlight-card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
