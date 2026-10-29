import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Give',
  description: `Give to ${site.name}`,
}

/**
 * Links out to Tithe.ly for now. When an embeddable form is set up, it goes
 * here (see thepsp.org's give page for the pattern: script afterInteractive,
 * white panel, plus a fallback link in case the script fails).
 */
export default function GivePage() {
  return (
    <>
      <PageHeader eyebrow={site.name} title="Give" />

      <section className="mx-auto flex max-w-3xl justify-center px-4 py-20 sm:px-6">
        <a
          href={site.givingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-navy px-10 py-4 text-lg font-medium text-white shadow-lg transition hover:bg-sky"
        >
          Give Online
          <span aria-hidden>↗</span>
        </a>
      </section>
    </>
  )
}
