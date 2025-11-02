import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SITE } from '@/lib/content'
import Script from 'next/script'
import { dentistJsonLd } from '@/lib/schema'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.example.com'), // TODO: update to real domain
  title: {
    default: 'Tannlegene Aasnæs AS – Tannlege i Sande',
    template: '%s | Tannlegene Aasnæs AS'
  },
  description: 'Moderne tannklinikk i Sande sentrum. Erfaring, trygghet og direkteoppgjør med HELFO.',
  keywords: ['tannlege', 'Sande', 'Vestfold', 'tannbehandling', 'HELFO', 'direkteoppgjør', 'tannlege Sande', 'tannlege Vestfold'],
  authors: [{ name: 'Tannlegene Aasnæs AS' }],
  creator: 'Tannlegene Aasnæs AS',
  publisher: 'Tannlegene Aasnæs AS',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: '/',
    siteName: 'Tannlegene Aasnæs AS',
    title: 'Tannlegene Aasnæs AS – Tannlege i Sande',
    description: 'Moderne tannklinikk i Sande sentrum. Erfaring, trygghet og direkteoppgjør med HELFO.',
    images: [
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
    title: 'Tannlegene Aasnæs AS – Tannlege i Sande',
    description: 'Moderne tannklinikk i Sande sentrum. Erfaring, trygghet og direkteoppgjør med HELFO.',
    images: ['/Images/hero.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  verification: {
    // TODO: Legg til Google Search Console verification code
    // google: 'verification-code-here',
  }
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  colorScheme: 'light'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = dentistJsonLd()
  
  return (
    <html lang="nb">
      <body className="bg-background text-gray900 antialiased">
        <Script
          id="dentist-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#innhold" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-blue text-white px-3 py-2 rounded">Hopp til innhold</a>
        <Header />
        <main id="innhold" className="min-h-dvh">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
