import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ServiceTimes } from '@/components/service-times'
import { fullAddress, mapsQuery, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Plan a Visit',
  description: `Service times, directions, and what to expect at ${site.name}.`,
}

const expect = [
  {
    q: 'What should I wear?',
    a: "Whatever you're comfortable in. You'll see everything from Sunday best to jeans.",
  },
  {
    q: 'What is a service like?',
    a: 'We sing hymns and songs together, pray, and hear preaching straight from the Bible. A Sunday morning service runs about an hour.',
  },
  {
    q: 'What about my kids?',
    a: 'Children are always welcome in the service. Ask a greeter about Sunday School classes for every age.',
  },
  {
    q: 'Will I be singled out?',
    a: "No. We're glad you came, and we'll say hello — but you won't be asked to stand up or speak.",
  },
]

export default function VisitPage() {
  return (
    <>
      <PageHeader eyebrow="Plan a Visit" title="We'd love to meet you">
        <p>Here&apos;s everything you need to know before your first Sunday at Hope.</p>
      </PageHeader>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-navy">When</h2>
          <div className="mt-6">
            <ServiceTimes />
          </div>

          <h2 className="mt-12 text-2xl font-semibold text-navy">Where</h2>
          <p className="mt-3 text-lg">{fullAddress}</p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full bg-navy px-6 py-3 font-medium text-white transition hover:bg-sky"
          >
            Get directions
          </a>
          {(site.phone || site.email) && (
            <p className="mt-6 text-muted">
              Questions? {site.phone && <>Call <a className="text-sky underline" href={`tel:${site.phone.replace(/\D/g, '')}`}>{site.phone}</a></>}
              {site.phone && site.email && ' or '}
              {site.email && <>email <a className="text-sky underline" href={`mailto:${site.email}`}>{site.email}</a></>}.
            </p>
          )}
        </div>

        <div className="overflow-hidden rounded-3xl ring-1 ring-line">
          <iframe
            title={`Map to ${site.name}`}
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            className="h-full min-h-96 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-semibold text-navy sm:text-3xl">What to expect</h2>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {expect.map((item) => (
              <div key={item.q} className="rounded-3xl bg-white p-7 ring-1 ring-line">
                <dt className="font-semibold text-navy">{item.q}</dt>
                <dd className="mt-2 text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
