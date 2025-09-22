import { ReactNode } from 'react'

export function Section({ title, intro, children }: { title?: string; intro?: string; children: ReactNode }) {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        {title && <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">{title}</h2>}
        {intro && <p className="text-gray500 mb-5 md:mb-6 max-w-prose">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
