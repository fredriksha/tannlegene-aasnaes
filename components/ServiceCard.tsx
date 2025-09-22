import Link from 'next/link'
import type { Route } from 'next'

type Props = {
  title: string
  summary: string
  href?: Route
}

export function ServiceCard({ title, summary, href }: Props) {
  return (
    <div className="card">
      <div className="h-28 w-full rounded-lg border border-gray-200 bg-dental grid place-items-center text-gray500 mb-3">{/* TODO: Bytt med ikon/bilde */}Bilde</div>
      <h3 className="font-semibold text-gray900">{title}</h3>
      <p className="text-gray500 text-sm mt-1 mb-3">{summary}</p>
      {href && (
        <Link href={href} className="btn-outline">Les mer</Link>
      )}
    </div>
  )
}
