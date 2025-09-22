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
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <div className="h-32 w-full rounded-lg border bg-dental mb-4" aria-hidden />
            <div className="font-semibold text-lg">Elin Tandberg Aasnæs</div>
            <div className="text-sm text-gray500 mb-3">Tannlege</div>
            <p className="text-gray500 text-sm">Elin er opprinnelig fra Fortun i Sogn og Fjordane og gift med Reidulf. Hun har tannlegeeksamen fra Universitetet i Oslo i 1993. Har 25 års erfaring som allmennpraktiserende tannlege, de aller fleste av disse på klinikken i Sande.</p>
          </div>
          
          <div className="card">
            <div className="h-32 w-full rounded-lg border bg-dental mb-4" aria-hidden />
            <div className="font-semibold text-lg">Lars Resen-Fellie</div>
            <div className="text-sm text-gray500 mb-3">Tannlege</div>
            <p className="text-gray500 text-sm">Tannlege Lars Resen-Fellie er fra Holmestrand. Han har utdannelsen sin fra Universitetet i Bergen. Lars jobber Mandag til Onsdag i Sande, og resten av uken i Ski. Han har tidligere arbeidet som tannlege på Kongsberg.</p>
          </div>
          
          <div className="card">
            <div className="h-32 w-full rounded-lg border bg-dental mb-4" aria-hidden />
            <div className="font-semibold text-lg">Reidulf Aasnæs</div>
            <div className="text-sm text-gray500 mb-3">Tannlege</div>
            <p className="text-gray500 text-sm">Reidulf er født og oppvokst i Sande og har tannlegeeksamen fra Universitetet i Oslo i 1993. Fikk spesialkompetanse i Lystgass sedasjon i 1999 og ble sertifisert til å utføre implantatprotetisk behandling med trygdestønad i 2010.</p>
          </div>
        </div>
        
        <div className="mt-8">
          <div className="card">
            <div className="h-32 w-full rounded-lg border bg-dental mb-4" aria-hidden />
            <div className="font-semibold text-lg">Johanna Rykke Berstad</div>
            <div className="text-sm text-gray500 mb-3">Oralkirurg</div>
            <p className="text-gray500 text-sm">Oralkirurg Johanna Rykke Berstad er utdannet tannlege fra universitetet i Oslo i 1993, og spesialist i oral medisin og oral kirurgi fra universitetet i Oslo 2006. Johanna arbeider til daglig på tann- og kjeveklinikken ved Oslo Universitetssykehus, og i tillegg privatpraksis. Johanna utfører implantatbehandling og øvrig oralmedisinsk og oralkirurgisk behandling.</p>
          </div>
        </div>
      </Section>

      <Section title="Våre tannhelsesekretærer">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <div className="h-32 w-full rounded-lg border bg-dental mb-4" aria-hidden />
            <div className="font-semibold text-lg">Tannhelsesekretær 1</div>
            <div className="text-sm text-gray500 mb-3">Tannhelsesekretær</div>
            <p className="text-gray500 text-sm">Vår erfarne tannhelsesekretær hjelper deg med timebestilling, refusjon og praktiske spørsmål. Hun er der for å gjøre ditt besøk hos oss så enkelt som mulig.</p>
          </div>
          
          <div className="card">
            <div className="h-32 w-full rounded-lg border bg-dental mb-4" aria-hidden />
            <div className="font-semibold text-lg">Tannhelsesekretær 2</div>
            <div className="text-sm text-gray500 mb-3">Tannhelsesekretær</div>
            <p className="text-gray500 text-sm">Vår andre tannhelsesekretær har lang erfaring med pasientkontakt og hjelper deg gjerne med alle praktiske henvendelser og spørsmål om behandling.</p>
          </div>
          
          <div className="card">
            <div className="h-32 w-full rounded-lg border bg-dental mb-4" aria-hidden />
            <div className="font-semibold text-lg">Tannhelsesekretær 3</div>
            <div className="text-sm text-gray500 mb-3">Tannhelsesekretær</div>
            <p className="text-gray500 text-sm">Vår tredje tannhelsesekretær er spesielt flink til å hjelpe deg med refusjonssaker og koordinering av behandling. Hun sørger for at alt flyter smidig.</p>
          </div>
        </div>
      </Section>
    </>
  )
}
