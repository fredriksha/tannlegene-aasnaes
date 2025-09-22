import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container grid gap-6 py-8 md:grid-cols-4">
        <div>
          <div className="font-semibold">Tannlegene Aasnæs AS</div>
          <p className="text-gray500 mt-2">Liten og personlig tannklinikk i Sande sentrum.</p>
        </div>
        <div>
          <div className="font-semibold">Kontakt</div>
          <ul className="mt-2 space-y-1 text-gray500">
            <li>Adresse: <span>Sande sentrum (TODO)</span></li>
            <li>Telefon: <a href="tel:+47XXXXXXXX" className="no-underline">+47 XX XX XX XX</a></li>
            <li>E‑post: <a href="mailto:post@tannlegeneaasnaes.no" className="no-underline">post@tannlegeneaasnaes.no</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Åpningstider</div>
          <ul className="mt-2 space-y-1 text-gray500">
            <li>Man–Fre: 08:00–16:00</li>
            <li>Lør–Søn: Stengt</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Snarveier</div>
          <ul className="mt-2 space-y-1">
            <li><Link className="no-underline text-gray500 hover:text-gray900" href="/">Hjem</Link></li>
            <li><Link className="no-underline text-gray500 hover:text-gray900" href="/vaare-tjenester">Våre tjenester</Link></li>
            <li><Link className="no-underline text-gray500 hover:text-gray900" href="/om-oss">Om oss</Link></li>
            <li><Link className="no-underline text-gray500 hover:text-gray900" href="/kontakt-oss">Kontakt oss</Link></li>
            <li><Link className="no-underline text-gray500 hover:text-gray900" href="/personvern">Personvern</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-sm text-gray500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Tannlegene Aasnæs AS. Org.nr: TODO</span>
          <span>Nettside: TODO</span>
        </div>
      </div>
    </footer>
  )
}
