import Link from 'next/link'
import { SITE } from '@/lib/content'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-blueDark text-white">
      <div className="container grid gap-12 py-16 md:grid-cols-5">
        <div>
          <div className="text-xl font-semibold text-white mb-3">Tannlegene Aasnæs AS</div>
          <p className="text-blueLight leading-relaxed">Liten og personlig tannklinikk i Sande sentrum.</p>
        </div>
        <div className="md:col-span-2">
          <div className="text-lg font-semibold text-white mb-4">Kontakt</div>
          <ul className="space-y-3 text-blueLight leading-relaxed">
            <li>Adresse: <span className="whitespace-nowrap">{SITE.address}</span></li>
            <li>Telefon: <a href={`tel:${SITE.phone}`} className="no-underline hover:text-white transition-colors whitespace-nowrap">{SITE.phone}</a></li>
            <li>E‑post: <a href={`mailto:${SITE.email}`} className="no-underline hover:text-white transition-colors break-all">{SITE.email}</a></li>
          </ul>
        </div>
        <div>
          <div className="text-lg font-semibold text-white mb-4">Åpningstider</div>
          <ul className="space-y-2 text-blueLight leading-relaxed">
            {SITE.hours.map((h) => (
              <li key={h.days}>{h.days}: {h.time}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-lg font-semibold text-white mb-4">Snarveier</div>
          <ul className="space-y-2">
            <li><Link className="no-underline text-blueLight hover:text-white transition-colors" href="/">Hjem</Link></li>
            <li><Link className="no-underline text-blueLight hover:text-white transition-colors" href="/vaare-tjenester">Våre tjenester</Link></li>
            <li><Link className="no-underline text-blueLight hover:text-white transition-colors" href="/om-oss">Om oss</Link></li>
            <li><Link className="no-underline text-blueLight hover:text-white transition-colors" href="/kontakt-oss">Kontakt oss</Link></li>
            <li><Link className="no-underline text-blueLight hover:text-white transition-colors" href="/personvern">Personvern</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-blue">
        <div className="container py-6 text-sm text-blueLight flex flex-col md:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Tannlegene Aasnæs AS. Org.nr: TODO</span>
          <span>Nettside: TODO</span>
        </div>
      </div>
    </footer>
  )
}
