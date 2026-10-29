import Image from 'next/image'
import Link from 'next/link'
import { MobileMenu } from '@/components/mobile-menu'
import { nav, site } from '@/lib/site'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <Image src="/brand/mark-h.png" alt="" width={90} height={128} className="h-9 w-auto" priority />
          <span className="leading-tight">
            <span className="block text-[15px] font-semibold tracking-wide text-navy">HOPE</span>
            <span className="block text-[10px] tracking-[0.3em] text-sky">BAPTIST CHURCH</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) =>
            item.href === '/give' ? (
              <Link
                key={item.href}
                href={item.href}
                className="ml-2 rounded-full bg-navy px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-sky"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-sky-soft hover:text-navy"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <MobileMenu />
      </div>
    </header>
  )
}
