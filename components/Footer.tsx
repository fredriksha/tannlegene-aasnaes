import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-blue text-white">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        <div>
          <div className="font-semibold text-white">Tannlegene Aasnæs AS</div>
          <p className="text-blue-100 mt-2">Liten og personlig tannklinikk i Sande sentrum.</p>
        </div>
        <div>
          <div className="font-semibold text-white">Kontakt</div>
          <ul className="mt-2 space-y-1 text-blue-100">
            <li>Adresse: <span>Sande sentrum (TODO)</span></li>
            <li>Telefon: <a href="tel:+47XXXXXXXX" className="no-underline hover:text-white">+47 XX XX XX XX</a></li>
            <li>E‑post: <a href="mailto:post@tannlegeneaasnaes.no" className="no-underline hover:text-white">post@tannlegeneaasnaes.no</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Åpningstider</div>
          <ul className="mt-2 space-y-1 text-blue-100">
            <li>Man–Fre: 08:00–16:00</li>
            <li>Lør–Søn: Stengt</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Snarveier</div>
          <ul className="mt-2 space-y-1">
            <li><Link className="no-underline text-blue-100 hover:text-white" href="/">Hjem</Link></li>
            <li><Link className="no-underline text-blue-100 hover:text-white" href="/vaare-tjenester">Våre tjenester</Link></li>
            <li><Link className="no-underline text-blue-100 hover:text-white" href="/om-oss">Om oss</Link></li>
            <li><Link className="no-underline text-blue-100 hover:text-white" href="/kontakt-oss">Kontakt oss</Link></li>
            <li><Link className="no-underline text-blue-100 hover:text-white" href="/personvern">Personvern</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-blue-600">
        <div className="container py-6 text-sm text-blue-100 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Tannlegene Aasnæs AS. Org.nr: TODO</span>
          <span>Nettside: TODO</span>
        </div>
      </div>
    </footer>
  )
}
