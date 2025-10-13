import type { Metadata } from 'next'

export function pageMeta(title: string, description: string): Metadata {
  const fullTitle = `${title} | Tannlegene Aasnæs AS`
  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      locale: 'nb_NO',
      type: 'website',
    },
    alternates: { canonical: '/' },
  }
}


