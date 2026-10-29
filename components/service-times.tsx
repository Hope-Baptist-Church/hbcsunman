import { site } from '@/lib/site'

/** The weekly schedule, grouped by day. */
export function ServiceTimes({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const days = [...new Set(site.services.map((s) => s.day))]
  const dark = tone === 'dark'

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {days.map((day) => (
        <div key={day}>
          <h3 className={`text-xs font-semibold uppercase tracking-[0.25em] ${dark ? 'text-sky' : 'text-sky'}`}>
            {day}
          </h3>
          <ul className="mt-3 space-y-2">
            {site.services
              .filter((s) => s.day === day)
              .map((s) => (
                <li
                  key={s.name}
                  className={`flex items-baseline justify-between gap-4 border-b pb-2 ${dark ? 'border-white/15' : 'border-line'}`}
                >
                  <span className={dark ? 'text-white/85' : 'text-ink'}>{s.name}</span>
                  <span className={`font-semibold tabular-nums ${dark ? 'text-white' : 'text-navy'}`}>{s.time}</span>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
