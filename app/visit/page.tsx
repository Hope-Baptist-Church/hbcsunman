import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ServiceTimes } from '@/components/service-times'
import { fullAddress, mapsQuery, phoneHref, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Plan a Visit',
  description: `${site.name}, ${fullAddress}`,
}

export default function VisitPage() {
  return (
    <>
      <PageHeader eyebrow={site.name} title="Plan a Visit" />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          {site.services.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold text-navy">Service Times</h2>
              <div className="mt-6 mb-12">
                <ServiceTimes />
              </div>
            </>
          )}

          <h2 className="text-2xl font-semibold text-navy">Address</h2>
          <p className="mt-3 text-lg">{fullAddress}</p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full bg-navy px-6 py-3 font-medium text-white transition hover:bg-sky"
          >
            Get directions
          </a>

          <h2 className="mt-12 text-2xl font-semibold text-navy">Contact</h2>
          <p className="mt-3 text-lg">{site.pastor}</p>
          <a href={phoneHref} className="mt-1 block text-lg text-sky hover:underline">
            {site.phone}
          </a>
          {site.email && (
            <a href={`mailto:${site.email}`} className="mt-1 block text-lg text-sky hover:underline">
              {site.email}
            </a>
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
    </>
  )
}
