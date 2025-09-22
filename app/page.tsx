import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { FeatureList } from '@/components/FeatureList'
import { ServiceCard } from '@/components/ServiceCard'
import { MapEmbed } from '@/components/MapEmbed'
import { Testimonial } from '@/components/Testimonial'
import { FEATURES, SERVICES, SITE, TESTIMONIALS } from '@/lib/content'

export default function Page() {
  return (
    <>
      <Hero
        title="Din tannlege i Sande"
        subtitle="Liten og personlig tannklinikk i Sande sentrum. Erfaring, trygghet og direkteoppgjør med HELFO."
        primaryHref="/kontakt-oss"
        primaryLabel="Ring oss"
        secondaryHref="/om-oss"
        secondaryLabel="Om oss"
        imageAlt="Klinikk – illustrasjonsbilde"
        imageSrc="/Images/hero.jpg"
      />

      <Section>
        <div className="split-section">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">Velkommen til oss</h2>
            <p className="text-gray500 mb-6">
              Vårt tannlegeteam har bred kompetanse og erfaring innen alle former for tannlegebehandling. Vi er oppdaterte på trygderefusjonsordningen og har direkte oppgjør med HELFO som sikrer rask og problemfri refusjonsordning for pasienten.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded border-2 border-blue-500 bg-blue-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-gray700">Moderne lokaler i Sande sentrum</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded border-2 border-blue-500 bg-blue-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-gray700">Kundeparkering tilgjengelig</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded border-2 border-blue-500 bg-blue-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-gray700">Enkelt tilgjengelig med buss og tog</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="/Images/detaljbilde.jpg" 
              alt="Tannlegeutstyr og detaljer" 
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="split-section">
          <div className="card">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">Om klinikken</h2>
            <p className="text-gray500 mb-4">Vi har fulgt mange familier i Sande gjennom flere år. Hos oss blir du møtt med ro, respekt og god tid.</p>
            <p className="text-gray500">I 2000 overtok vi praksisen til tannlege Gundesø. Siden har vi vokst jevnt og stødig med fornøyde pasienter. {/* Kilde: om-oss */}</p>
            <div className="mt-3">
              <a href="/om-oss" className="btn-outline">Møt oss</a>
            </div>
          </div>
          <div className="card">
            <div className="h-40 w-full rounded-lg border grid place-items-center text-gray500">{/* TODO: Bytt med ekte bilde */}Bilde – klinikken</div>
          </div>
        </div>
      </Section>

      <Section title="Tjenester">
        <div className="grid gap-4 md:grid-cols-3">
          {SERVICES.slice(0, 6).map((s) => (
            <ServiceCard key={s.title} title={s.title} summary={s.summary} href="/vaare-tjenester" />
          ))}
        </div>
        <div className="mt-4">
          <a href="/vaare-tjenester" className="btn-outline">Se alle tjenester</a>
        </div>
      </Section>

      <Section title="Praktisk info">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card">
            <div className="font-semibold">Adresse</div>
            <p className="text-gray500 mt-1">{SITE.address}</p>
            <a className="btn-outline mt-2" href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`}>Finn oss på kart</a>
          </div>
          <div className="card">
            <div className="font-semibold">Åpningstider</div>
            <ul className="text-gray500 mt-1">
              {SITE.hours.map((h) => (
                <li key={h.days}>{h.days}: {h.time}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <div className="font-semibold">Kontakt</div>
            <p className="text-gray500 mt-1"><a href={`tel:${SITE.phone}`} className="no-underline">Ring oss</a> eller <a href={`mailto:${SITE.email}`} className="no-underline">send e‑post</a>.</p>
          </div>
        </div>
        <div className="mt-4">
          <MapEmbed query={SITE.mapQuery} />
        </div>
      </Section>
    </>
  )
}