import { Section } from '@/components/Section'
import { TEAM } from '@/lib/content'

export const metadata = {
  title: 'Om oss | Tannlegene Aasnæs AS',
  description: 'Bli kjent med tannlegeteamet og vår historie i Sande.'
}

export default function Page() {
  return (
    <>
      <Section title="Velkommen til tannlegene i sentrum" intro="Tannlegene Aasnæs holder til i moderne lokaler midt i Sande sentrum. I 2000 overtok vi praksisen til tannlege Gundesø og har siden fulgt mange familier over tid.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <p className="text-gray500">Vi er opptatt av at du blir godt ivaretatt og at behandlingen er så skånsom og trygg som mulig. Vi hjelper også med refusjon via HELFO der det er aktuelt.</p>
          </div>
          <div className="card">
            <div className="h-40 rounded-lg border grid place-items-center text-gray500">{/* TODO: Bilde av klinikken/team */}Bilde</div>
          </div>
        </div>
      </Section>

      <Section title="Teamet vårt">
        <div className="grid gap-4 md:grid-cols-2">
          {TEAM.map((m) => (
            <div className="card flex gap-4 items-center" key={m.name}>
              <div className="h-20 w-20 rounded-lg border bg-dental" aria-hidden />
              <div>
                <div className="font-semibold">{m.name}</div>
                <div className="text-sm text-gray500">{m.role}</div>
                <p className="text-gray500 mt-1 text-sm">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
