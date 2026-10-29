import Image from 'next/image'
import Link from 'next/link'
import { ServiceTimes } from '@/components/service-times'
import { heroImage } from '@/lib/hero'
import { fullAddress, phoneHref, site } from '@/lib/site'

export default function Home() {
  const hasTimes = site.services.length > 0

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy">
        {heroImage ? (
          <>
            <Image src={heroImage} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deep/70 via-navy/55 to-navy-deep/85" />
          </>
        ) : (
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#0083cb55,_transparent_60%),linear-gradient(180deg,#0e125b,#080a38)]" />
        )}

        <div className="mx-auto flex min-h-[78svh] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
          <Image
            src="/brand/wordmark-white.png"
            alt={site.name}
            width={632}
            height={317}
            priority
            className="w-64 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:w-96"
          />
          <p className="mt-8 font-serif text-2xl italic text-white/90 sm:text-3xl">{site.tagline}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.35em] text-white/60">{site.town}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/visit" className="rounded-full bg-white px-7 py-3 font-medium text-navy shadow-lg transition hover:bg-sky hover:text-white">
              Plan a Visit
            </Link>
            {hasTimes && (
              <a href="#times" className="rounded-full border border-white/40 px-7 py-3 font-medium text-white transition hover:bg-white/10">
                Service Times
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Welcome — TODO: the church's own words go here. */}

      {/* Find us */}
      <section id="times" className="scroll-mt-16 bg-cream">
        <div className={`mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 ${hasTimes ? 'lg:grid-cols-[1fr_1.4fr] lg:items-center' : ''}`}>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{hasTimes ? 'Service Times' : 'Find Us'}</h2>
            <p className="mt-2 text-lg text-muted">{site.pastor}</p>
            <a
              href={site.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-start gap-2 text-lg text-ink hover:text-sky"
            >
              <svg viewBox="0 0 24 24" className="mt-1 size-5 shrink-0 text-sky" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              {fullAddress}
            </a>
            <a href={phoneHref} className="mt-3 flex items-center gap-2 text-lg text-ink hover:text-sky">
              <svg viewBox="0 0 24 24" className="size-5 shrink-0 text-sky" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
              </svg>
              {site.phone}
            </a>
          </div>
          {hasTimes && (
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-line">
              <ServiceTimes />
            </div>
          )}
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { href: '/beliefs', title: 'What We Believe' },
            { href: '/calendar', title: 'Calendar' },
            { href: '/give', title: 'Give' },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative flex items-center justify-between overflow-hidden rounded-3xl border border-line bg-white p-8 transition hover:-translate-y-1 hover:border-sky/40 hover:shadow-xl"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy to-sky opacity-0 transition group-hover:opacity-100" />
              <h3 className="text-xl font-semibold text-navy">{card.title}</h3>
              <span className="text-xl text-sky transition group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
