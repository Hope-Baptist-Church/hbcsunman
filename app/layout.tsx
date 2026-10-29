import type { Metadata } from 'next'
import { Lora, Outfit } from 'next/font/google'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { site } from '@/lib/site'
import './globals.css'

// Outfit is close to the logo's geometric letters; Lora carries scripture.
const outfit = Outfit({ variable: '--font-outfit', subsets: ['latin'] })
const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.town}`,
    template: `%s | ${site.name}`,
  },
  description: `${site.name} in ${site.town}. ${site.tagline}.`,
  openGraph: {
    siteName: site.name,
    type: 'website',
    images: ['/brand/wordmark.png'],
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${outfit.variable} ${lora.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
