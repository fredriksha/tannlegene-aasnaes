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
      <h3 className="text-xl font-semibold text-gray900 mb-3">{title}</h3>
      <p className="text-gray700 leading-relaxed">{summary}</p>
    </div>
  )
}
