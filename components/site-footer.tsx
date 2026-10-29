import Image from 'next/image'
import Link from 'next/link'
import { fullAddress, mapsQuery, nav, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Image src="/brand/wordmark-white.png" alt={site.name} width={632} height={317} className="h-16 w-auto" />
          <p className="mt-4 font-serif text-lg italic text-white/70">{site.tagline}</p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky">Find us</h2>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block hover:text-white"
          >
            {fullAddress}
          </a>
          {site.phone && (
            <a href={`tel:${site.phone.replace(/\D/g, '')}`} className="mt-2 block hover:text-white">
              {site.phone}
            </a>
          )}
          {site.email && (
            <a href={`mailto:${site.email}`} className="mt-2 block hover:text-white">
              {site.email}
            </a>
          )}
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 hover:text-white">
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
            </svg>
            Follow us on Facebook
          </a>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky">Explore</h2>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/50">
        © <Year /> {site.name} · {site.town}
      </div>
    </footer>
  )
}

/** Cached so the footer stays static; it refreshes with each cache revalidation. */
async function Year() {
  'use cache'
  return new Date().getFullYear()
}
