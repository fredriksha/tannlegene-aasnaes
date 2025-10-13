import Image from 'next/image'

interface HeroBackgroundProps {
  imageSrc: string
  alt: string
  children: React.ReactNode
  className?: string
}

export function HeroBackground({ imageSrc, alt, children, className = "" }: HeroBackgroundProps) {
  return (
    <section className={`relative ${className}`}>
      {/* Background Image with CSS fallback */}
      <div 
        className="absolute inset-0 -z-10 bg-dental"
        style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-white/60" />
      </div>
      
      {/* Content */}
      {children}
    </section>
  )
}
