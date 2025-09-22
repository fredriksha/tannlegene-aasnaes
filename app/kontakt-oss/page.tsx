import Link from 'next/link'
import { Section } from '@/components/Section'
import { ContactForm } from '@/components/ContactForm'
import { MapEmbed } from '@/components/MapEmbed'
import { SITE } from '@/lib/content'

export const metadata = {
  title: 'Kontakt oss | Tannlegene Aasnæs AS',
  description: 'Kontaktinformasjon, åpningstider og skjema for Tannlegene Aasnæs AS i Sande.'
}

export default function Page() {
  return (
    <>
      <Section title="Kontakt oss" intro="Ring, send en e‑post eller bruk skjemaet. Vi svarer så raskt vi kan.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <div className="font-semibold">Kontaktinformasjon</div>
            <ul className="text-gray500 mt-2 space-y-1">
              <li>Adresse: {SITE.address} <a className="underline" href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`}>Se kart</a></li>
              <li>Telefon: <a className="no-underline" href={`tel:${SITE.phone}`}>{SITE.phone}</a></li>
              <li>E‑post: <a className="no-underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            </ul>
            <div className="font-semibold mt-4">Åpningstider</div>
            <ul className="text-gray500 mt-1">
              {SITE.hours.map((h) => (<li key={h.days}>{h.days}: {h.time}</li>))}
            </ul>
            <div className="mt-4"><MapEmbed query={SITE.mapQuery} /></div>
          </div>
          <div className="card">
            <div className="font-semibold mb-2">Send en melding</div>
            <ContactForm />
            <p className="text-xs text-gray500 mt-2">{/* GDPR */}Vi bruker opplysningene kun for å følge opp henvendelsen. <Link href="/personvern" className="underline">Les mer</Link>.</p>
          </div>
        </div>
      </Section>
    </>
  )
}
