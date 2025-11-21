import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { FeatureList } from '@/components/FeatureList'
import { ServiceCard } from '@/components/ServiceCard'
import { MapEmbed } from '@/components/MapEmbed'
import { Testimonial } from '@/components/Testimonial'
import { FEATURES, SERVICES, SITE, TESTIMONIALS } from '@/lib/content'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tannlege i Sande – Tannlegene Aasnæs AS',
  description: 'Liten og personlig tannklinikk i Sande sentrum. Erfaring, trygghet og direkteoppgjør med HELFO. Vi tilbyr alt fra undersøkelse og rens til rotfylling og implantater.',
  keywords: ['tannlege Sande', 'tannbehandling Sande', 'tannlege Vestfold', 'HELFO direkteoppgjør', 'tannlege Sande sentrum'],
  openGraph: {
    title: 'Tannlege i Sande – Tannlegene Aasnæs AS',
    description: 'Liten og personlig tannklinikk i Sande sentrum. Erfaring, trygghet og direkteoppgjør med HELFO.',
    url: '/',
    images: [
      {
        url: '/Images/illustrative/detaljbilde.jpg',
        width: 1200,
        height: 630,
        alt: 'Tannlegene Aasnæs AS i Sande',
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
}

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
        imageSrc="/Images/illustrative/close-up.jpg"
      />

      <Section>
        <div className="split-section">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray900">Velkommen til oss</h2>
              <p className="text-lg md:text-xl text-gray700 leading-relaxed">
                Vårt tannlegeteam har bred kompetanse og erfaring innen alle former for tannlegebehandling. Vi er oppdaterte på trygderefusjonsordningen og har direkte oppgjør med HELFO som sikrer rask og problemfri refusjonsordning for pasienten.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue" fill="currentColor" viewBox="0 0 640 640">
                    <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"/>
                  </svg>
                </div>
                <span className="text-base text-gray700">Moderne lokaler i Sande sentrum</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue" fill="currentColor" viewBox="0 0 640 640">
                    <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"/>
                  </svg>
                </div>
                <span className="text-base text-gray700">Kundeparkering tilgjengelig</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue" fill="currentColor" viewBox="0 0 640 640">
                    <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"/>
                  </svg>
                </div>
                <span className="text-base text-gray700">Enkelt tilgjengelig med buss og tog</span>
              </div>
            </div>
          </div>
          <div>
            <Image 
              src="/Images/illustrative/venterom.jpg" 
              alt="Tannlegeutstyr og detaljer" 
              width={600}
              height={400}
              className="w-full h-auto rounded-[1.5rem] shadow-lg"
              loading="lazy"
              quality={80}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section title="Tjenester" className="services-section">
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.slice(0, 6).map((s) => (
            <ServiceCard key={s.title} title={s.title} summary={s.summary} href="/vaare-tjenester" />
          ))}
        </div>
        <div className="mt-10">
          <a href="/vaare-tjenester" className="btn-outline">Les mer om våre tjenester</a>
        </div>
      </Section>

      <Section>
        <div className="split-section">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray900">Om klinikken</h2>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-gray700 leading-relaxed">Vi har fulgt mange familier i Sande gjennom flere år. Hos oss blir du møtt med ro, respekt og god tid.</p>
                <p className="text-lg md:text-xl text-gray700 leading-relaxed">I 2000 overtok vi praksisen til tannlege Gundesø. Siden har vi vokst jevnt og stødig med fornøyde pasienter.</p>
              </div>
            </div>
            <div>
              <a href="/om-oss" className="btn-outline">Les mer om våre ansatte</a>
            </div>
          </div>
          <div>
            <Image 
              src="/Images/illustrative/tannlegestol-3.jpg" 
              alt="Tannskraping behandling" 
              width={600}
              height={400}
              className="w-full h-auto rounded-[1.5rem] shadow-lg"
              loading="lazy"
              quality={80}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section title="Praktisk info" className="bg-gray100">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card-dental">
            <div className="text-xl font-semibold text-gray900 mb-4">Adresse</div>
            <p className="text-gray700 mb-6 leading-relaxed">{SITE.address}</p>
            <a className="btn-outline" href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`} target="_blank" rel="noopener noreferrer">Finn oss på kart</a>
          </div>
          <div className="card-dental">
            <div className="text-xl font-semibold text-gray900 mb-4">Åpningstider</div>
            <ul className="text-gray700 space-y-2 leading-relaxed">
              {SITE.hours.map((h) => (
                <li key={h.days}>{h.days}: {h.time}</li>
              ))}
            </ul>
          </div>
          <div className="card-dental">
            <div className="text-xl font-semibold text-gray900 mb-4">Kontakt</div>
            <p className="text-gray700 leading-relaxed"><a href={`tel:${SITE.phone}`} className="no-underline hover:text-blue transition-colors">Ring oss</a> eller <a href={`mailto:${SITE.email}`} className="no-underline hover:text-blue transition-colors">send e‑post</a>.</p>
          </div>
        </div>
        <div className="mt-12">
          <MapEmbed query={SITE.mapQuery} />
        </div>
      </Section>
    </>
  )
}