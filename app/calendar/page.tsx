import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ServiceTimes } from '@/components/service-times'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Calendar',
  description: `Upcoming events at ${site.name}.`,
}

/** Google's embed, recoloured to the logo blue and trimmed of its chrome. */
function calendarSrc(id: string, mode: 'MONTH' | 'AGENDA') {
  const params = new URLSearchParams({
    src: id,
    ctz: 'America/Indiana/Indianapolis',
    mode,
    color: '#0083cb',
    showTitle: '0',
    showPrint: '0',
    showCalendars: '0',
    showTz: '0',
  })
  return `https://calendar.google.com/calendar/embed?${params}`
}

export default function CalendarPage() {
  const id = site.googleCalendarId

  return (
    <>
      <PageHeader eyebrow="Calendar" title="What's Coming Up">
        <p>Services, Bible studies, fellowship, and special events.</p>
      </PageHeader>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {id ? (
          <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-line">
            {/* Month grid is unreadable on a phone; the agenda list is not. */}
            <iframe title="Church calendar" src={calendarSrc(id, 'MONTH')} className="hidden h-[720px] w-full md:block" loading="lazy" />
            <iframe title="Church calendar" src={calendarSrc(id, 'AGENDA')} className="h-[600px] w-full md:hidden" loading="lazy" />
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-sky/40 bg-sky-soft/50 p-10 text-center">
            <p className="text-lg text-navy">Our full events calendar is coming soon.</p>
            <p className="mt-2 text-muted">
              In the meantime, follow{' '}
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="text-sky underline">
                our Facebook page
              </a>{' '}
              for announcements.
            </p>
          </div>
        )}

        <div className="mt-16 rounded-3xl bg-cream p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-navy">Every week</h2>
          <div className="mt-6">
            <ServiceTimes />
          </div>
        </div>
      </section>
    </>
  )
}
