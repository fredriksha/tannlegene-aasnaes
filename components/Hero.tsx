import Link from 'next/link'
import Image from 'next/image'
import type { Route } from 'next'
import { SITE } from '@/lib/content'

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
    <section className="relative py-16 md:py-24 lg:py-28 bg-dental overflow-hidden min-h-[calc(100svh-5rem)]">
      {/* Dekorative bakgrunnselementer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-blueLight/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-64 h-64 bg-blue/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid gap-12 md:gap-16 lg:gap-20 md:grid-cols-2 items-center">
          {/* Venstre side: Tekst og knapper */}
          <div className="space-y-10">
            <div className="space-y-7">
              <h1 className="text-[34px] leading-[1.1] md:text-5xl lg:text-6xl font-semibold text-gray900">
                {title}
              </h1>
              {subtitle && (
                <p className="text-base md:text-lg lg:text-xl text-gray700 max-w-[52ch] leading-relaxed">
                  {subtitle}
                </p>
              )}
              {/* Åpningstider med ikon */}
              <div className="flex items-center gap-3 text-sm text-gray700">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blueLight text-blue">
                  {/* klokke-ikon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm.75 5.5a.75.75 0 0 0-1.5 0v5c0 .199.079.39.22.53l3 3a.75.75 0 1 0 1.06-1.06L12.75 12.94V7.5Z"/>
                  </svg>
                </span>
                <div>
                  <div className="text-gray900 font-medium">{SITE.hours[0]?.days}: {SITE.hours[0]?.time}</div>
                  {SITE.hours[1] && <div>{SITE.hours[1].days}: {SITE.hours[1].time}</div>}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={primaryHref} className="btn text-base md:text-lg px-6 md:px-8 py-3.5 md:py-4 shadow-sm hover:shadow-md">
                {primaryLabel}
              </Link>
              {secondaryHref && secondaryLabel && (
                <Link href={secondaryHref} className="btn-outline text-base md:text-lg px-6 md:px-8 py-3.5 md:py-4">
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
          
          {/* Høyre side: Avrundet bilde med dekorative elementer */}
          {imageSrc && (
            <div className="relative w-full max-w-xl mx-auto md:mx-0">
              {/* Svak gradient bak bildet */}
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-blue/20 to-blueLight/40 blur-2xl" />
              <div className="relative w-full aspect-[4/3] md:aspect-[5/4] overflow-hidden rounded-[1.5rem] shadow-2xl">
                <Image 
                  src={imageSrc}
                  alt={imageAlt || 'Hero-bilde'}
                  fill
                  className="object-cover"
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
