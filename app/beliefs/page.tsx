import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'What We Believe',
  description: `The statement of faith of ${site.name}.`,
}

/**
 * DRAFT — a common Baptist statement of faith, written as a starting point.
 * The pastor should replace or approve every article before launch; the
 * church's own wording, if it has one, wins.
 */
const articles = [
  {
    title: 'The Scriptures',
    body: 'We believe the Holy Bible was written by men divinely inspired, and is the inerrant, infallible Word of God. It is our final authority for faith and practice.',
    refs: '2 Timothy 3:16–17; 2 Peter 1:20–21',
  },
  {
    title: 'The True God',
    body: 'We believe there is one, and only one, living and true God, eternally existing in three persons — the Father, the Son, and the Holy Spirit — equal in every divine perfection.',
    refs: 'Deuteronomy 6:4; Matthew 28:19; 2 Corinthians 13:14',
  },
  {
    title: 'The Lord Jesus Christ',
    body: 'We believe in the deity of Jesus Christ, His virgin birth, sinless life, substitutionary death on the cross, bodily resurrection, ascension to the right hand of the Father, and His personal return.',
    refs: 'John 1:1–14; Isaiah 7:14; 1 Corinthians 15:3–4; Acts 1:11',
  },
  {
    title: 'The Holy Spirit',
    body: 'We believe the Holy Spirit convicts the world of sin, regenerates, indwells, and seals every believer, and guides them into all truth.',
    refs: 'John 16:8–13; Romans 8:9; Ephesians 1:13–14',
  },
  {
    title: 'Mankind and Sin',
    body: 'We believe man was created in the image of God, but by voluntary transgression fell from that holy state. All people are sinners by nature and by choice, and are in need of a Savior.',
    refs: 'Genesis 1:27; Romans 3:23; Romans 5:12',
  },
  {
    title: 'Salvation',
    body: 'We believe salvation is wholly by grace, through faith in the finished work of Jesus Christ, and not of works. All who truly receive Christ are kept secure by the power of God.',
    refs: 'Ephesians 2:8–9; John 3:16; John 10:28–29',
  },
  {
    title: 'The Church',
    body: 'We believe a New Testament church is a local, autonomous congregation of baptized believers, gathered for worship, fellowship, teaching, and to carry the gospel to the world.',
    refs: 'Acts 2:41–47; Matthew 28:19–20',
  },
  {
    title: 'The Ordinances',
    body: "We believe Christ gave the church two ordinances: believer's baptism by immersion, picturing our death to sin and new life in Christ, and the Lord's Supper, in remembrance of His death until He comes.",
    refs: 'Romans 6:3–5; 1 Corinthians 11:23–26',
  },
  {
    title: 'Last Things',
    body: 'We believe in the bodily resurrection of the dead, the eternal joy of the righteous with the Lord, and the eternal judgment of the unbelieving.',
    refs: 'John 5:28–29; Revelation 20:11–15; 1 Thessalonians 4:16–17',
  },
]

export default function BeliefsPage() {
  return (
    <>
      <PageHeader eyebrow="Statement of Faith" title="What We Believe">
        <p>The Bible is the foundation of everything we teach and everything we do.</p>
      </PageHeader>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <ol className="space-y-12">
          {articles.map((a, i) => (
            <li key={a.title} className="grid gap-4 sm:grid-cols-[3rem_1fr]">
              <span className="text-3xl font-light tabular-nums text-sky/70">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="text-2xl font-semibold text-navy">{a.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-ink/85">{a.body}</p>
                <p className="mt-3 font-serif text-sm italic text-muted">{a.refs}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
