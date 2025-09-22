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
      <h3 className="font-semibold text-gray900">{title}</h3>
      <p className="text-gray500 text-sm mt-1">{summary}</p>
    </div>
  )
}
