import { Section } from '@/components/Section'
import { MapEmbed } from '@/components/MapEmbed'
import { SITE } from '@/lib/content'

export const metadata = {
  title: 'Kontakt oss | Tannlegene Aasnæs AS',
  description: 'Kontaktinformasjon og åpningstider for Tannlegene Aasnæs AS i Sande.'
}

export default function Page() {
  return (
    <>
      <Section title="Kontakt oss" intro="Ring oss for å bestille time - det er den raskeste måten å få en avtale.">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-dental p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-semibold text-gray900 mb-4">📞 Ring oss for timebestilling</h2>
              <p className="text-gray700 mb-6">Vi anbefaler å ringe for raskest mulig timebestilling</p>
              <a href={`tel:${SITE.phone}`} className="text-3xl font-bold text-blue hover:underline">{SITE.phone}</a>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <div className="card text-center">
              <h3 className="font-semibold text-lg mb-4">📍 Adresse</h3>
              <p className="text-gray500 mb-4">{SITE.address}</p>
              <a className="btn-outline" href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`}>Se på kart</a>
            </div>
            
            <div className="card text-center">
              <h3 className="font-semibold text-lg mb-4">📧 E-post</h3>
              <p className="text-gray500 mb-4">Send oss en e-post</p>
              <a className="btn-outline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            
            <div className="card text-center">
              <h3 className="font-semibold text-lg mb-4">🕒 Åpningstider</h3>
              <ul className="text-gray500 space-y-1">
                {SITE.hours.map((h) => (<li key={h.days}>{h.days}: {h.time}</li>))}
              </ul>
            </div>
          </div>
          
          <div className="card">
            <h3 className="font-semibold text-lg mb-4 text-center">📍 Finn oss</h3>
            <MapEmbed query={SITE.mapQuery} />
          </div>
        </div>
      </Section>

      <Section title="Møt Bruno" className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="split-section">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Vår søte hund Bruno</h2>
              <p className="text-gray500 mb-4 text-lg">
                Hos oss på Tannlegene Aasnæs har vi vår søte hund Bruno som en del av familien. 
                Bruno er en rolig og vennlig hund som elsker å møte nye mennesker.
              </p>
              <p className="text-gray500 mb-6 text-lg">
                Hvis du synes det er koselig, kan Bruno være med under ditt tannlegebesøk. 
                Mange av våre pasienter, spesielt barn, synes det er trøstende å ha Bruno til stede 
                under behandlingen. Han er alltid snill og rolig, og kan hjelpe til å gjøre 
                tannlegebesøket til en mer behagelig opplevelse.
              </p>
              <div className="bg-dental p-4 rounded-lg">
                <p className="text-gray700 font-medium">
                  💡 Ring oss og si fra hvis du ønsker at Bruno skal være med under behandlingen!
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/Images/bruno.png" 
                alt="Bruno, vår søte hund" 
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
