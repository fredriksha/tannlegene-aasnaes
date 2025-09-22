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
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 640 640">
                    <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray700">Moderne lokaler i Sande sentrum</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 640 640">
                    <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray700">Kundeparkering tilgjengelig</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 640 640">
                    <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"/>
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

      <Section title="Tjenester" className="services-section">
        <div className="grid gap-4 md:grid-cols-3">
          {SERVICES.slice(0, 6).map((s) => (
            <ServiceCard key={s.title} title={s.title} summary={s.summary} href="/vaare-tjenester" />
          ))}
        </div>
        <div className="mt-4">
          <a href="/vaare-tjenester" className="btn-outline">Les mer om våre tjenester</a>
        </div>
      </Section>

      <Section>
        <div className="split-section">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">Om klinikken</h2>
            <p className="text-gray500 mb-4">Vi har fulgt mange familier i Sande gjennom flere år. Hos oss blir du møtt med ro, respekt og god tid.</p>
            <p className="text-gray500 mb-6">I 2000 overtok vi praksisen til tannlege Gundesø. Siden har vi vokst jevnt og stødig med fornøyde pasienter. {/* Kilde: om-oss */}</p>
            <div>
              <a href="/om-oss" className="btn-outline">Møt oss</a>
            </div>
          </div>
          <div>
            <img 
              src="/Images/tannskraping.jpg" 
              alt="Tannskraping behandling" 
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
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