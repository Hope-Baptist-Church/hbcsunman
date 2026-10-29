export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* The logo's cross, large and faint, as a quiet watermark. */}
      <svg viewBox="0 0 100 140" aria-hidden className="pointer-events-none absolute -right-6 -top-8 h-[130%] text-sky/15">
        <path d="M36 0h28v36h36v28H64v76H36V64H0V36h36z" fill="currentColor" />
      </svg>
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-lg text-white/75">{children}</div>}
      </div>
    </section>
  )
}
