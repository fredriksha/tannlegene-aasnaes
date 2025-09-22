import Link from 'next/link'
import { Section } from '@/components/Section'
import { ContactForm } from '@/components/ContactForm'
import { MapEmbed } from '@/components/MapEmbed'
import { SITE } from '@/lib/content'

export const metadata = {
  title: 'Kontakt oss | Tannlegene Aasnæs AS',
  description: 'Kontaktinformasjon og åpningstider for Tannlegene Aasnæs AS i Sande.'
}

export default function Page() {
  return (
    <>
      <Section title="Kontakt oss" intro="Ring oss for å bestille time - det er den raskeste måten å få en avtale. Du kan også sende e-post hvis du foretrekker det.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <div className="font-semibold text-lg mb-4">📞 Ring oss for timebestilling</div>
            <div className="bg-dental p-4 rounded-lg mb-4">
              <p className="text-gray700 font-medium mb-2">Vi anbefaler å ringe for raskest mulig timebestilling:</p>
              <a href={`tel:${SITE.phone}`} className="text-2xl font-bold text-blue hover:underline">{SITE.phone}</a>
            </div>
            
            <div className="font-semibold mb-2">Kontaktinformasjon</div>
            <ul className="text-gray500 space-y-1">
              <li>Adresse: {SITE.address} <a className="underline" href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`}>Se kart</a></li>
              <li>E‑post: <a className="no-underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            </ul>
            
            <div className="font-semibold mt-4 mb-2">Åpningstider</div>
            <ul className="text-gray500">
              {SITE.hours.map((h) => (<li key={h.days}>{h.days}: {h.time}</li>))}
            </ul>
            
            <div className="mt-4"><MapEmbed query={SITE.mapQuery} /></div>
          </div>
          
          <div className="card">
            <div className="font-semibold text-lg mb-4">📧 Eller send e-post</div>
            <p className="text-gray500 mb-4">Hvis du foretrekker å sende e-post, kan du bruke skjemaet under eller sende direkte til {SITE.email}</p>
            <ContactForm />
            <p className="text-xs text-gray500 mt-2">{/* GDPR */}Vi bruker opplysningene kun for å følge opp henvendelsen. <Link href="/personvern" className="underline">Les mer</Link>.</p>
          </div>
        </div>
      </Section>
    </>
  )
}
