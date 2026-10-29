import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'What We Believe',
  description: `Statement of faith — ${site.name}`,
}

export default function BeliefsPage() {
  return (
    <>
      <PageHeader eyebrow="Statement of Faith" title="What We Believe" />

      {/* TODO: the church's statement of faith goes here. */}
      <section className="mx-auto min-h-48 max-w-3xl px-4 py-16 sm:px-6" />
    </>
  )
}
