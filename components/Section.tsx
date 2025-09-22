import { ReactNode } from 'react'

export function Section({ title, intro, children, className = "" }: { title?: string; intro?: string; children: ReactNode; className?: string }) {
  return (
    <section className={`py-12 md:py-16 lg:py-20 ${className}`}>
      <div className="container">
        {title && <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6">{title}</h2>}
        {intro && <p className="text-gray500 mb-6 md:mb-8 max-w-prose text-lg">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
