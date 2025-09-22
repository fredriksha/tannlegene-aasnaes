import Link from 'next/link'
import { SITE } from '@/lib/content'

export function Footer() {
  return (
    <footer className="border-t bg-blue text-white">
      <div className="container grid gap-10 py-16 md:grid-cols-4">
        <div>
          <div className="font-semibold text-white">Tannlegene Aasnæs AS</div>
          <p className="text-blue-100 mt-2">Liten og personlig tannklinikk i Sande sentrum.</p>
        </div>
        <div>
          <div className="font-semibold text-white">Kontakt</div>
          <ul className="mt-2 space-y-1 text-blue-100">
            <li>Adresse: <span>{SITE.address}</span></li>
            <li>Telefon: <a href={`tel:${SITE.phone}`} className="no-underline hover:text-white transition-all duration-200 hover:scale-105 hover:font-medium">{SITE.phone}</a></li>
            <li>E‑post: <a href={`mailto:${SITE.email}`} className="no-underline hover:text-white transition-all duration-200 hover:scale-105 hover:font-medium">{SITE.email}</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Åpningstider</div>
          <ul className="mt-2 space-y-1 text-blue-100">
            {SITE.hours.map((h) => (
              <li key={h.days}>{h.days}: {h.time}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Snarveier</div>
          <ul className="mt-2 space-y-1">
            <li><Link className="no-underline text-blue-100 hover:text-white transition-all duration-200 hover:scale-105 hover:font-medium" href="/">Hjem</Link></li>
            <li><Link className="no-underline text-blue-100 hover:text-white transition-all duration-200 hover:scale-105 hover:font-medium" href="/vaare-tjenester">Våre tjenester</Link></li>
            <li><Link className="no-underline text-blue-100 hover:text-white transition-all duration-200 hover:scale-105 hover:font-medium" href="/om-oss">Om oss</Link></li>
            <li><Link className="no-underline text-blue-100 hover:text-white transition-all duration-200 hover:scale-105 hover:font-medium" href="/kontakt-oss">Kontakt oss</Link></li>
            <li><Link className="no-underline text-blue-100 hover:text-white transition-all duration-200 hover:scale-105 hover:font-medium" href="/personvern">Personvern</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-blue-600">
        <div className="container py-8 text-sm text-blue-100 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Tannlegene Aasnæs AS. Org.nr: TODO</span>
          <span>Nettside: TODO</span>
        </div>
      </div>
    </footer>
  )
}
