import Image from 'next/image'

interface HeroBackgroundProps {
  imageSrc: string
  alt: string
  children: React.ReactNode
  className?: string
}

export function HeroBackground({ imageSrc, alt, children, className = "" }: HeroBackgroundProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          priority
          quality={80}
          sizes="100vw"
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-white/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}
