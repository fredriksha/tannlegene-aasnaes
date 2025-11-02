import { ReactNode } from 'react'

export function Section({ title, intro, children, className = "" }: { title?: string; intro?: string; children: ReactNode; className?: string }) {
  return (
    <section className={`py-16 md:py-20 lg:py-24 ${className}`}>
      <div className="container">
        {title && <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8 text-gray900">{title}</h2>}
        {intro && <p className="text-gray700 mb-10 md:mb-12 max-w-3xl text-lg md:text-xl leading-relaxed">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
