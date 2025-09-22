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
    <section className="relative py-20 md:py-28 lg:py-32 min-h-[480px] md:min-h-[600px]">
      <div
        aria-label={imageAlt || 'Hero-bilde'}
        className="absolute inset-0 -z-10 bg-dental"
        style={imageSrc ? { backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
      />
      {/* overlay for contrast */}
      <div className="absolute inset-0 -z-10 bg-white/60" />

      <div className="container">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray900 mb-6">{title}</h1>
          {subtitle && <p className="text-gray900 mb-8 max-w-prose text-xl font-medium">{subtitle}</p>}
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
