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
        title="Tannhelse med omtanke i Sande"
        subtitle="Liten og personlig tannklinikk i Sande sentrum. Erfaring, trygghet og direkteoppgjør med HELFO."
        primaryHref="/kontakt-oss"
        primaryLabel="Bestill time"
        secondaryHref="/vaare-tjenester"
        secondaryLabel="Se våre tjenester"
        imageAlt="Klinikk – illustrasjonsbilde"
        imageSrc="/hero.jpg" /* TODO: Bytt til endelig hero-bilde */
      />

      <Section title="Derfor velger pasienter oss">
        <FeatureList features={FEATURES} />
      </Section>

      <Section title="Om klinikken" intro="Vi har fulgt mange familier i Sande gjennom flere år. Hos oss blir du møtt med ro, respekt og god tid.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card">
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

      <Section title="Dette sier pasientene">
        <div className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Testimonial key={i} quote={t.quote} author={t.author} />
          ))}
        </div>
      </Section>
    </>
  )
}
