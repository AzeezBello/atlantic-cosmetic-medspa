import { ArrowUpRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/site';

/**
 * The single call to action for the site. Booking happens on the practice's external
 * appointment-request system, so this always opens in a new tab and signals that with an icon.
 */
export default function BookButton({
  className = 'btn btn-primary',
  label = 'Request an Appointment',
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
      <ArrowUpRight aria-hidden="true" size={15} className="ml-2 shrink-0" />
    </a>
  );
}
