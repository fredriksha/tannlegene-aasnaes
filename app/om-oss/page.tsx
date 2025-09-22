import { Section } from '@/components/Section'
import { TEAM } from '@/lib/content'

export const metadata = {
  title: 'Om oss | Tannlegene Aasnæs AS',
  description: 'Bli kjent med tannlegeteamet og vår historie i Sande.'
}

export default function Page() {
  return (
    <>
      <section className="relative py-16 md:py-20 lg:py-24 min-h-[400px] md:min-h-[480px]">
        <div
          aria-label="Tannlegesenter i Sande"
          className="absolute inset-0 -z-10 bg-dental"
          style={{ backgroundImage: 'url(/Images/tannlegesenter.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        {/* overlay for contrast */}
        <div className="absolute inset-0 -z-10 bg-white/60" />

        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray900 mb-6">Om oss</h1>
            <div className="flex flex-wrap gap-3">
              <a href="/kontakt-oss" className="btn">Bestill time</a>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray500 mb-4 text-lg">I år 2000 overtok vi praksisen til anerkjente tannlege Gundesø i Sande. Siden den gang har kundemassen vært stabilt økende og vi behandler i dag mange familier som har gått hos oss i en årrekke.</p>
          <p className="text-gray500 mb-4 text-lg">Vårt tannlegeteam består av tannlegene Elin og Reidulf Aasnæs, tannlege Lars Resen - Fellie, oralkirurg Johanna Rykke Berstad og tannlege Wiktoria Ilczuk. På vårt kontor møter du også våre assistenter som alltid tar deg vel imot.</p>
          <p className="text-gray500 mb-4 text-lg">Vi har fokus på at du som pasient blir godt ivaretatt og vi tilbyr høy kvalitet på behandlingen du har behov for. Vi har bred erfaring med å håndtere pasienter som har ulike "traumer" knyttet til tannbehandling og vi er profesjonelle på å behandle så smertefritt som mulig.</p>
          <p className="text-gray500 mb-6 text-lg">Ta gjerne kontakt med oss for en timeavtale, og husk at du alltid får et skriftlig kostnadsoverslag dersom du ønsker det. Vi ønsker deg hjertelig velkommen til oss som pasient.</p>
        </div>
      </Section>

      <Section title="Teamet vårt">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="card flex flex-col">
            <div className="h-32 w-full rounded-lg border bg-dental mb-4" aria-hidden />
            <div className="font-semibold text-lg">Elin Tandberg Aasnæs</div>
            <div className="text-sm text-gray500 mb-3">Tannlege</div>
            <p className="text-gray500 text-sm flex-grow">Elin er opprinnelig fra Fortun i Sogn og Fjordane og gift med Reidulf. Hun har tannlegeeksamen fra Universitetet i Oslo i 1993. Har 25 års erfaring som allmannpraktiserende tannlege, de aller fleste av disse på klinikken i Sande.</p>
          </div>
          
          <div className="card flex flex-col">
            <div className="h-32 w-full rounded-lg border bg-dental mb-4" aria-hidden />
            <div className="font-semibold text-lg">Lars Resen-Fellie</div>
            <div className="text-sm text-gray500 mb-3">Tannlege</div>
            <p className="text-gray500 text-sm flex-grow">Tannlege Lars Resen-Fellie er fra Holmestrand. Han har utdannelsen sin fra Universitetet i Bergen. Lars jobber Mandag til Onsdag i Sande, og resten av uken i Ski. Han har tidligere arbeidet som tannlege på Kongsberg.</p>
          </div>
          
          <div className="card flex flex-col">
            <div className="h-32 w-full rounded-lg border bg-dental mb-4" aria-hidden />
            <div className="font-semibold text-lg">Reidulf Aasnæs</div>
            <div className="text-sm text-gray500 mb-3">Tannlege</div>
            <p className="text-gray500 text-sm flex-grow">Reidulf er født og oppvokst i Sande og har tannlegeeksamen fra Universitetet i Oslo i 1993. Fikk spesialkompetanse i Lystgass sedasjon i 1999 og ble sertifisert til å utføre implantatprotetisk behandling med trygdestønad i 2010.</p>
          </div>
          
          <div className="card flex flex-col">
            <div className="h-32 w-full rounded-lg border bg-dental mb-4" aria-hidden />
            <div className="font-semibold text-lg">Johanna Rykke Berstad</div>
            <div className="text-sm text-gray500 mb-3">Oralkirurg</div>
            <p className="text-gray500 text-sm flex-grow">Oralkirurg Johanna Rykke Berstad er utdannet tannlege fra universitetet i Oslo i 1993, og spesialist i oral medisin og oral kirurgi fra universitetet i Oslo 2006. Johanna arbeider til daglig på tann- og kjeveklinikken ved Oslo Universitetssykehus, og i tillegg privatpraksis. Johanna utfører implantatbehandling og øvrig oralmedisinsk og oralkirurgisk behandling.</p>
          </div>
          
          <div className="card flex flex-col">
            <div className="h-32 w-full rounded-lg border bg-dental mb-4" aria-hidden />
            <div className="font-semibold text-lg">Wiktoria Ilzcuk</div>
            <div className="text-sm text-gray500 mb-3">Tannlege</div>
            <p className="text-gray500 text-sm flex-grow">Tannlege Wiktoria Ilzcuk er oppvokst i Sande. Hun har sin utdannelse fra Jagiellonian University i Krakow og snakker flytende norsk og polsk. Hun har jobbet hos oss siden sommeren 2024. Wiktoria er opptatt av å skape en trygg og behagelig opplevelse for sine pasienter.</p>
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
