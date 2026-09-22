'use client';

import { useState, type FormEvent } from 'react';

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: wire this up to the approved CRM/email/form provider (see README).
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card" role="status">
        <p className="text-lg leading-7">
          Thank you — we&apos;ve received your message and will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="consultation-name">
        Name
      </label>
      <input
        id="consultation-name"
        name="name"
        className="h-14 rounded-xl border border-line bg-white px-4 outline-none"
        placeholder="Name"
        autoComplete="name"
        required
      />

      <label className="sr-only" htmlFor="consultation-email">
        Email
      </label>
      <input
        id="consultation-email"
        name="email"
        className="h-14 rounded-xl border border-line bg-white px-4 outline-none"
        placeholder="Email"
        type="email"
        autoComplete="email"
        required
      />

      <label className="sr-only" htmlFor="consultation-interest">
        Interest
      </label>
      <select
        id="consultation-interest"
        name="interest"
        className="h-14 rounded-xl border border-line bg-white px-4 outline-none"
        defaultValue=""
        required
      >
        <option value="" disabled>
          Interest
        </option>
        <option>Cosmetic Surgery</option>
        <option>Aesthetics</option>
        <option>Hair Restoration</option>
        <option>Wellness</option>
      </select>

      <label className="sr-only" htmlFor="consultation-goals">
        Tell us about your goals
      </label>
      <textarea
        id="consultation-goals"
        name="goals"
        className="min-h-36 rounded-xl border border-line bg-white p-4 outline-none"
        placeholder="Tell us about your goals"
      />

      <button type="submit" className="btn btn-primary w-full sm:w-fit">
        Send Message
      </button>
    </form>
  );
}
