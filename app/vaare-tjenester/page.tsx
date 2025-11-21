import { Section } from '@/components/Section'
import { ServiceCard } from '@/components/ServiceCard'
import { HeroBackground } from '@/components/HeroBackground'
import { SERVICES } from '@/lib/content'
import Image from 'next/image'

export const metadata = {
  title: 'Våre tjenester | Tannlegene Aasnæs AS',
  description: 'Oversikt over behandlinger ved Tannlegene Aasnæs AS i Sande.'
}

export default function Page() {
  return (
    <>
      <HeroBackground 
        imageSrc="/Images/illustrative/tannlegestol-2.jpg" 
        alt="Tannlegebehandling i Sande"
        className="py-8 md:py-12 lg:py-16 min-h-[200px] md:min-h-[240px]"
      >
        <div className="container flex items-center min-h-[200px] md:min-h-[240px]">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray900 mb-4">Våre tjenester</h1>
          </div>
        </div>
      </HeroBackground>

      <Section>
        <p className="text-gray500 mb-4 text-lg">Vi tilbyr allmenn tannlegepraksis med et bredt spekter av behandlinger og vi har lang erfaring og kompetanse. Vi samarbeider med spesialister på ulike områder og henviser raskt ved behov for spesialistkompetanse.</p>
        <p className="text-gray500 mb-4 text-lg">Vi stiller høye krav til kvalitet på tannbehandling, og setter fokus på at du som pasient skal få en smertefri og positiv opplevelse hos oss.</p>
        <p className="text-gray500 mb-6 text-lg">Ta gjerne kontakt for å avtale tid til en undersøkelse, og husk at du alltid får et skriftlig kostnadsoverslag dersom du ønsker det.</p>
      </Section>

      <Section title="Våre behandlinger" className="services-section">
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} title={s.title} summary={s.summary} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="split-section">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">Sande Dental</h2>
            <p className="text-gray500 mb-4 text-lg">
              I vår praksis holder tanntekniker Anja Konteig ved Sande Dental til, som sikrer at vi kan levere høy kvalitet på protetiske løsninger som kroner, broer og proteser.
            </p>
            <p className="text-gray500 mb-6 text-lg">
              Med tanntekniker på plass kan vi tilby raskere leveringstider, bedre tilpasning og kontinuerlig kvalitetskontroll.
            </p>
          </div>
          <div>
            <Image 
              src="/Images/detaljbilde.jpg" 
              alt="Tanntekniker arbeider med protetiske løsninger" 
              width={600}
              height={400}
              className="w-full h-auto rounded-[1.5rem] shadow-sm"
              loading="lazy"
              quality={80}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>
    </>
  )
}

