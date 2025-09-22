import Link from 'next/link'
import type { Route } from 'next'

export function Hero({
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  imageAlt,
  imageSrc,
}: {
  title: string
  subtitle?: string
  primaryHref: Route
  primaryLabel: string
  secondaryHref?: Route
  secondaryLabel?: string
  imageAlt?: string
  imageSrc?: string
}) {
  return (
    <section className="relative py-16 md:py-24 min-h-[420px] md:min-h-[540px]">
      <div
        aria-label={imageAlt || 'Hero-bilde'}
        className="absolute inset-0 -z-10 bg-dental"
        style={imageSrc ? { backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
      />
      {/* overlay for contrast */}
      <div className="absolute inset-0 -z-10 bg-white/60" />

      <div className="container">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-gray900 mb-4">{title}</h1>
          {subtitle && <p className="text-gray500 mb-6 max-w-prose">{subtitle}</p>}
          <div className="flex flex-wrap gap-3">
            <Link href={primaryHref} className="btn">{primaryLabel}</Link>
            {secondaryHref && secondaryLabel && (
              <Link href={secondaryHref} className="btn-outline">{secondaryLabel}</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
