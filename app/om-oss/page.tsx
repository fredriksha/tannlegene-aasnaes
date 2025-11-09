import { Section } from '@/components/Section'
import { HeroBackground } from '@/components/HeroBackground'
import { TEAM } from '@/lib/content'
import Image from 'next/image'

export const metadata = {
  title: 'Om oss | Tannlegene Aasnæs AS',
  description: 'Bli kjent med tannlegeteamet og vår historie i Sande.'
}

export default function Page() {
  return (
    <>
      <HeroBackground 
        imageSrc="/Images/tannlegesenter.jpg" 
        alt="Tannlegesenter i Sande"
        className="py-8 md:py-12 lg:py-16 min-h-[200px] md:min-h-[240px]"
      >
        <div className="container flex items-center min-h-[200px] md:min-h-[240px]">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray900 mb-4">Om oss</h1>
          </div>
        </div>
      </HeroBackground>

      <Section>
        <p className="text-gray500 mb-4 text-lg">I år 2000 overtok vi praksisen til anerkjente tannlege Gundesø i Sande. Siden den gang har kundemassen vært stabilt økende og vi behandler i dag mange familier som har gått hos oss i en årrekke.</p>
        <p className="text-gray500 mb-4 text-lg">Vårt tannlegeteam består av tannlegene Elin og Reidulf Aasnæs, tannlege Lars Resen-Fellie, oralkirurg Johanna Rykke Berstad og tannlege Wiktoria Ilczuk. På vårt kontor møter du også våre assistenter som alltid tar deg vel imot.</p>
        <p className="text-gray500 mb-4 text-lg">Vi har fokus på at du som pasient blir godt ivaretatt og vi tilbyr høy kvalitet på behandlingen du har behov for. Vi har bred erfaring med å håndtere pasienter som har ulike &quot;traumer&quot; knyttet til tannbehandling og vi er profesjonelle på å behandle så smertefritt som mulig.</p>
        <p className="text-gray500 mb-6 text-lg">Ta gjerne kontakt med oss for en timeavtale, og husk at du alltid får et skriftlig kostnadsoverslag dersom du ønsker det. Vi ønsker deg hjertelig velkommen til oss som pasient.</p>
      </Section>

      <Section title="Våre tannleger">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card flex items-start gap-4">
            <div className="w-20 h-20 rounded-full border bg-dental flex-shrink-0" aria-hidden />
            <div>
              <div className="font-semibold text-lg">Elin Tandberg Aasnæs</div>
              <div className="text-sm text-gray500 mb-2">Tannlege</div>
              <p className="text-gray500 text-sm">Elin er opprinnelig fra Fortun i Sogn og Fjordane og gift med Reidulf. Hun har tannlegeeksamen fra Universitetet i Oslo i 1993. Har 25 års erfaring som allmannpraktiserende tannlege, de aller fleste av disse på klinikken i Sande.</p>
            </div>
          </div>
          
          <div className="card flex items-start gap-4">
            <div className="w-20 h-20 rounded-full border bg-dental flex-shrink-0" aria-hidden />
            <div>
              <div className="font-semibold text-lg">Lars Resen-Fellie</div>
              <div className="text-sm text-gray500 mb-2">Tannlege</div>
              <p className="text-gray500 text-sm">Tannlege Lars Resen-Fellie er fra Holmestrand. Han har utdannelsen sin fra Universitetet i Bergen. Lars jobber Mandag til Onsdag i Sande, og resten av uken i Ski. Han har tidligere arbeidet som tannlege på Kongsberg.</p>
            </div>
          </div>
          
          <div className="card flex items-start gap-4">
            <div className="w-20 h-20 rounded-full border bg-dental flex-shrink-0" aria-hidden />
            <div>
              <div className="font-semibold text-lg">Reidulf Aasnæs</div>
              <div className="text-sm text-gray500 mb-2">Tannlege</div>
              <p className="text-gray500 text-sm">Reidulf er født og oppvokst i Sande og har tannlegeeksamen fra Universitetet i Oslo i 1993. Fikk spesialkompetanse i Lystgass sedasjon i 1999 og ble sertifisert til å utføre implantatprotetisk behandling med trygdestønad i 2010.</p>
            </div>
          </div>
          
          <div className="card flex items-start gap-4">
            <div className="w-20 h-20 rounded-full border bg-dental flex-shrink-0" aria-hidden />
            <div>
              <div className="font-semibold text-lg">Johanna Rykke Berstad</div>
              <div className="text-sm text-gray500 mb-2">Oralkirurg</div>
              <p className="text-gray500 text-sm">Oralkirurg Johanna Rykke Berstad er utdannet tannlege fra universitetet i Oslo i 1993, og spesialist i oral medisin og oral kirurgi fra universitetet i Oslo 2006. Johanna arbeider til daglig på tann- og kjeveklinikken ved Oslo Universitetssykehus, og i tillegg privatpraksis. Johanna utfører implantatbehandling og øvrig oralmedisinsk og oralkirurgisk behandling.</p>
            </div>
          </div>
          
          <div className="card flex items-start gap-4">
            <div className="w-20 h-20 rounded-full border bg-dental flex-shrink-0" aria-hidden />
            <div>
              <div className="font-semibold text-lg">Wiktoria Ilzcuk</div>
              <div className="text-sm text-gray500 mb-2">Tannlege</div>
              <p className="text-gray500 text-sm">Tannlege Wiktoria Ilzcuk er oppvokst i Sande. Hun har sin utdannelse fra Jagiellonian University i Krakow og snakker flytende norsk og polsk. Hun har jobbet hos oss siden sommeren 2024. Wiktoria er opptatt av å skape en trygg og behagelig opplevelse for sine pasienter.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Våre tannhelsesekretærer">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card flex items-start gap-4">
            <div className="w-20 h-20 rounded-full border bg-dental flex-shrink-0" aria-hidden />
            <div>
              <div className="font-semibold text-lg">Tannhelsesekretær 1</div>
              <div className="text-sm text-gray500 mb-2">Tannhelsesekretær</div>
              <p className="text-gray500 text-sm">Vår erfarne tannhelsesekretær hjelper deg med timebestilling, refusjon og praktiske spørsmål. Hun er der for å gjøre ditt besøk hos oss så enkelt som mulig.</p>
            </div>
          </div>
          
          <div className="card flex items-start gap-4">
            <div className="w-20 h-20 rounded-full border bg-dental flex-shrink-0" aria-hidden />
            <div>
              <div className="font-semibold text-lg">Tannhelsesekretær 2</div>
              <div className="text-sm text-gray500 mb-2">Tannhelsesekretær</div>
              <p className="text-gray500 text-sm">Vår andre tannhelsesekretær har lang erfaring med pasientkontakt og hjelper deg gjerne med alle praktiske henvendelser og spørsmål om behandling.</p>
            </div>
          </div>
          
          <div className="card flex items-start gap-4">
            <div className="w-20 h-20 rounded-full border bg-dental flex-shrink-0" aria-hidden />
            <div>
              <div className="font-semibold text-lg">Tannhelsesekretær 3</div>
              <div className="text-sm text-gray500 mb-2">Tannhelsesekretær</div>
              <p className="text-gray500 text-sm">Vår tredje tannhelsesekretær er spesielt flink til å hjelpe deg med refusjonssaker og koordinering av behandling. Hun sørger for at alt flyter smidig.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="split-section">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">Vår søte assistent Bruno</h2>
            <p className="text-gray500 mb-4 text-lg">
              Hos Tannlegene Aasnæs har vi ofte vår søte hund Bruno som en del av familien. 
              Bruno er en rolig og vennlig hund som elsker å møte nye mennesker.
            </p>
            <p className="text-gray500 mb-6 text-lg">
              Hvis du synes det er koselig, kan Bruno være med under ditt tannlegebesøk. 
              Han er alltid snill og rolig, og kan hjelpe til å gjøre 
              tannlegebesøket til en mer behagelig opplevelse.
            </p>
            <div className="bg-dental p-4 rounded-lg">
              <p className="text-gray700 font-medium">
                💡 Ring oss og si fra hvis du ønsker at Bruno skal være med under behandlingen!
              </p>
            </div>
          </div>
          <div>
            <Image 
              src="/Images/bruno.png" 
              alt="Bruno, vår søte hund" 
              width={400}
              height={300}
              className="w-full h-auto rounded-lg shadow-sm"
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
