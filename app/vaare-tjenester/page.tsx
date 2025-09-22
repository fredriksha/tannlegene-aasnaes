import { Section } from '@/components/Section'
import { ServiceCard } from '@/components/ServiceCard'
import { SERVICES } from '@/lib/content'

export const metadata = {
  title: 'Våre tjenester | Tannlegene Aasnæs AS',
  description: 'Oversikt over behandlinger ved Tannlegene Aasnæs AS i Sande.'
}

export default function Page() {
  return (
    <>
      <Section title="Våre tjenester" intro="Forebyggende og reparerende behandling. Ta kontakt dersom du lurer på hva som passer for deg.">
        <div className="grid gap-4 md:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} title={s.title} summary={s.summary} />
          ))}
        </div>
      </Section>
    </>
  )
}
