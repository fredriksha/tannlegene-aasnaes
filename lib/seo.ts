import type { Metadata } from 'next'

export function pageMeta(
  title: string, 
  description: string, 
  path: string = '/',
  image?: string
): Metadata {
  const fullTitle = `${title} | Tannlegene Aasnæs AS`
  const baseUrl = 'https://www.example.com' // TODO: Oppdater med faktisk domene
  
  return {
    title: fullTitle,
    description,
    keywords: ['tannlege', 'Sande', 'Vestfold', 'tannbehandling', 'HELFO', 'direkteoppgjør'],
    openGraph: {
      title: fullTitle,
      description,
      locale: 'nb_NO',
      type: 'website',
      url: `${baseUrl}${path}`,
      siteName: 'Tannlegene Aasnæs AS',
      images: image ? [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ] : [
        {
          url: '/Images/hero.jpg',
          width: 1200,
          height: 630,
          alt: 'Tannlegene Aasnæs AS',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: image ? [image] : ['/Images/hero.jpg'],
    },
    alternates: { 
      canonical: `${baseUrl}${path}`,
    },
  }
}


