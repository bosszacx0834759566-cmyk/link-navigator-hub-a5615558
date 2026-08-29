'use client';

import logoUrl from '@/assets/logo.png';

/** Slim brand strip. Scenario simulation tabs live in the left system rail. */
export function SystemHeader() {
  return (
    <header className="pointer-events-auto absolute inset-x-0 top-0 z-40 flex h-12 items-center justify-center border-b border-white/[0.06] bg-black/65 px-4 backdrop-blur-xl">
      <img src={logoUrl} alt="OloLink logo" className="h-6 w-auto" />
    </header>
  );
}
