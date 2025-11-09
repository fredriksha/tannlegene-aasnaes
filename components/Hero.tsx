import Link from 'next/link'
import Image from 'next/image'
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
    <section className="relative py-20 md:py-28 lg:py-36 min-h-[600px] md:min-h-[700px] bg-dental overflow-hidden">
      {/* Dekorative bakgrunnselementer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-blueLight/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-64 h-64 bg-blue/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid gap-12 md:gap-16 lg:gap-24 md:grid-cols-2 items-center">
          {/* Venstre side: Tekst og knapper */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray900 leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg md:text-xl text-gray700 max-w-prose leading-relaxed">
                  {subtitle}
                </p>
              )}
              
              {/* Quick features */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray700">
                  <div className="w-2 h-2 bg-blue rounded-full"></div>
                  <span>Erfarne tannleger</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray700">
                  <div className="w-2 h-2 bg-blue rounded-full"></div>
                  <span>HELFO direkteoppgjør</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray700">
                  <div className="w-2 h-2 bg-blue rounded-full"></div>
                  <span>Sande sentrum</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href={primaryHref} className="btn text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                {primaryLabel}
              </Link>
              {secondaryHref && secondaryLabel && (
                <Link href={secondaryHref} className="btn-outline text-lg px-8 py-4 transition-all duration-300 hover:scale-105">
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
          
          {/* Høyre side: Avrundet bilde med dekorative elementer */}
          {imageSrc && (
            <div className="relative w-full aspect-square max-w-xl mx-auto md:mx-0">
              {/* Dekorativ sirkel bak bilde */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue/20 to-blueLight/40 rounded-[2rem] blur-xl -z-10 scale-110"></div>
              
              {/* Bilde med shadow */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
                <Image 
                  src={imageSrc}
                  alt={imageAlt || 'Hero-bilde'}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
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
