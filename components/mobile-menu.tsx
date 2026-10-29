'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { nav } from '@/lib/site'

/**
 * A <details> menu, so it opens without waiting on JS. Keyed by path so it
 * closes itself after a link is tapped — the header persists across pages.
 */
export function MobileMenu() {
  const pathname = usePathname()

  return (
    <details key={pathname} className="group relative md:hidden">
      <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full text-navy hover:bg-sky-soft [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Menu</span>
        <svg viewBox="0 0 24 24" className="size-6 group-open:hidden" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg viewBox="0 0 24 24" className="hidden size-6 group-open:block" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </summary>
      <div className="absolute right-0 top-12 w-56 rounded-2xl border border-line bg-white p-2 shadow-xl">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-xl px-4 py-3 font-medium text-ink hover:bg-sky-soft hover:text-navy"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  )
}
