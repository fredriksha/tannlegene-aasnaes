import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.example.com'), // TODO: update to real domain
  title: {
    default: 'Tannlegene Aasnæs AS – Tannlege i Sande',
    template: '%s | Tannlegene Aasnæs AS'
  },
  description: 'Moderne tannklinikk i Sande sentrum. Erfaring, trygghet og direkteoppgjør med HELFO.',
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: '/',
    siteName: 'Tannlegene Aasnæs AS',
    title: 'Tannlegene Aasnæs AS – Tannlege i Sande',
    description: 'Moderne tannklinikk i Sande sentrum. Erfaring, trygghet og direkteoppgjør med HELFO.'
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32' }
    ]
  }
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  colorScheme: 'light'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <body className="bg-background text-gray900 antialiased">
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
