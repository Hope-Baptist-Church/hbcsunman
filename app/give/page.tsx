import type { Metadata } from 'next'
import Script from 'next/script'
import { PageHeader } from '@/components/page-header'
import { fullAddress, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Give',
  description: `Support the ministry of ${site.name}.`,
}

/**
 * Online giving through Breeze (part of Tithe.ly) — the same embed thepsp.org
 * uses. The form and the payment live in Breeze; we only host the page.
 * Until site.breezeSubdomain is set, only the offline ways to give show.
 */
export default function GivePage() {
  const subdomain = site.breezeSubdomain
  const breezeUrl = `https://${subdomain}.breezechms.com/give/online`

  return (
    <>
      <PageHeader eyebrow="Give" title="Thank you for your generosity">
        <p>Your gifts support the worship, teaching, and outreach of Hope Baptist Church.</p>
      </PageHeader>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        {subdomain ? (
          <>
            {/*
              Always a white panel: Breeze reads its colours once, so the form
              can't follow any theme around it.
            */}
            <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-sm ring-1 ring-line sm:p-6">
              <div
                id="breeze_giving_embed"
                data-subdomain={subdomain}
                data-width="100%"
                data-background_color="ffffff"
                data-text_color="1b1d2e"
                data-donate_button_background_color="0e125b"
                data-donate_button_text_color="ffffff"
                data-fund_id=""
                data-frequency=""
                data-amount=""
              />
              <noscript>
                <p className="p-4 text-center text-sm">
                  Our giving form needs JavaScript.{' '}
                  <a href={breezeUrl} className="font-semibold underline">
                    Give on our secure Breeze page instead
                  </a>
                  .
                </p>
              </noscript>
            </div>
            <p className="mt-3 text-center text-sm text-muted">
              If the form does not appear,{' '}
              <a href={breezeUrl} target="_blank" rel="noopener noreferrer" className="text-sky underline">
                give here instead
              </a>
              .
            </p>
            {/* afterInteractive so the rest of the page renders even if Breeze is slow. */}
            <Script src="https://app.breezechms.com/js/give.js" strategy="afterInteractive" />
          </>
        ) : (
          <div className="rounded-3xl border border-dashed border-sky/40 bg-sky-soft/50 p-10 text-center">
            <p className="text-lg text-navy">Online giving is coming soon.</p>
          </div>
        )}

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl bg-cream p-7">
            <h2 className="font-semibold text-navy">In person</h2>
            <p className="mt-2 text-muted">Place your gift in the offering during any service.</p>
          </div>
          <div className="rounded-3xl bg-cream p-7">
            <h2 className="font-semibold text-navy">By mail</h2>
            <p className="mt-2 text-muted">
              Make checks payable to {site.name} and mail to:
            </p>
            <address className="mt-2 not-italic text-ink">
              {site.name}
              <br />
              {fullAddress}
            </address>
          </div>
        </div>

        <blockquote className="mt-14 border-l-2 border-sky/60 pl-5 font-serif text-lg italic text-muted">
          &ldquo;Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity:
          for God loveth a cheerful giver.&rdquo;
          <footer className="mt-2 font-sans text-sm not-italic">2 Corinthians 9:7</footer>
        </blockquote>
      </section>
    </>
  )
}
