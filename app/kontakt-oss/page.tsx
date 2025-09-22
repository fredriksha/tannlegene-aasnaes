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
          
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="card text-center">
              <h3 className="font-semibold text-lg mb-4">📍 Adresse</h3>
              <p className="text-gray500 mb-4">{SITE.address}</p>
              <a className="btn-outline" href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`}>Se på kart</a>
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

      <Section title="Bildegalleri" className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray500 text-center mb-8">Se bilder fra vår klinikk og lokaler</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="card p-0 overflow-hidden">
              <img 
                src="/Images/tannlegesenter.jpg" 
                alt="Tannlegesenter i Sande" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold">Vårt tannlegesenter</h4>
                <p className="text-gray500 text-sm">Moderne lokaler i Sande sentrum</p>
              </div>
            </div>
            
            <div className="card p-0 overflow-hidden">
              <img 
                src="/Images/detaljbilde.jpg" 
                alt="Tannlegeutstyr og detaljer" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold">Moderne utstyr</h4>
                <p className="text-gray500 text-sm">Høyteknologisk tannlegeutstyr</p>
              </div>
            </div>
            
            <div className="card p-0 overflow-hidden">
              <img 
                src="/Images/tannskraping.jpg" 
                alt="Tannskraping behandling" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold">Behandlingsrom</h4>
                <p className="text-gray500 text-sm">Trygge og komfortable behandlingsrom</p>
              </div>
            </div>
            
            <div className="card p-0 overflow-hidden">
              <img 
                src="/Images/man-dentist.jpg" 
                alt="Tannlege i arbeid" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold">Erfarne tannleger</h4>
                <p className="text-gray500 text-sm">Profesjonell og trygg behandling</p>
              </div>
            </div>
            
            <div className="card p-0 overflow-hidden">
              <div className="w-full h-48 bg-dental flex items-center justify-center">
                <span className="text-gray500">TODO: Bilde av venterom</span>
              </div>
              <div className="p-4">
                <h4 className="font-semibold">Venterom</h4>
                <p className="text-gray500 text-sm">Hyggelig venterom for pasienter</p>
              </div>
            </div>
            
            <div className="card p-0 overflow-hidden">
              <div className="w-full h-48 bg-dental flex items-center justify-center">
                <span className="text-gray500">TODO: Bilde av resepsjon</span>
              </div>
              <div className="p-4">
                <h4 className="font-semibold">Resepsjon</h4>
                <p className="text-gray500 text-sm">Vennlig mottakelse og service</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
