import { Section } from '@/components/Section'
import { HeroBackground } from '@/components/HeroBackground'

export const metadata = {
  title: 'Personvern | Tannlegene Aasnæs AS',
  description: 'Informasjon om personvern og behandling av personopplysninger.'
}

export default function Page() {
  return (
    <>
      <HeroBackground 
        imageSrc="/Images/tannlegesenter.jpg" 
        alt="Personvern og personopplysninger"
        className="py-8 md:py-12 lg:py-16 min-h-[200px] md:min-h-[240px]"
      >
        <div className="container flex items-center min-h-[200px] md:min-h-[240px]">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray900 mb-4">Personvern</h1>
          </div>
        </div>
      </HeroBackground>

      <Section intro="Behandling av personopplysninger hos Tannlegene Aasnæs.">
        <div className="card space-y-6">
        <p>Når du er i kontakt med oss som pasient, eller på annen måte, vil vi behandle personopplysninger om deg. Nedenfor finner du informasjon om personopplysninger som samles inn, hvorfor vi gjør dette og dine rettigheter knyttet til behandlingen av personopplysningene.</p>
        <h3 className="font-semibold">Behandlingsansvarlig</h3>
        <p>Behandlingsansvarlig for personopplysningene vi behandler er Tannlegene Aasnæs AS. Du kan kontakte oss på følgende:</p>
        <ul className="list-disc pl-5 text-gray500">
          <li>Adresse: Fila 6, 3070 Sande i Vestfold</li>
          <li>E‑post: {/* TODO: Verifiser korrekt e‑postadresse */}post@tannlegeneaasnaes.no</li>
          <li>Telefon: 33 77 62 92</li>
          <li>Organisasjonsnr.: 889 026 812</li>
        </ul>
        <p>For spørsmål du måtte ha om vår behandling av dine personopplysninger kan du kontakte ovennevnte.</p>

        <h3 className="font-semibold">1. Hvorfor samler vi inn personopplysninger og hva slags informasjon samler vi inn</h3>
        <p>Vi samler inn og bruker dine personopplysninger til ulike formål avhengig av hvem du er og hvordan vi kommer i kontakt med deg. Vi samler inn følgende personopplysninger til formålene angitt her:</p>
        <p className="font-medium">1) I forbindelse med at vi behandler pasienter.</p>
        <p>I denne forbindelse behandler vi personopplysninger ved å opprette journal i vårt elektroniske journalsystem. Behandlingen skjer da som følge av avtale med pasienten, i henhold til plikter vi er pålagt om behandling av helseopplysninger, bl.a. helsepersonelloven, pasientjournalloven og pasient‑ og brukerrettighetsloven.</p>
        <p className="font-medium">2) Besvare henvendelser som kommer inn til oss.</p>
        <p>Navn, telefonnummer, e‑postadresse og eventuelle personopplysninger som måtte følge av henvendelsen. Behandlingen av personopplysninger skjer på grunnlag av en interesseavveining. Vi har vurdert det slik at dette ofte er nødvendig for å hjelpe deg med det du lurer på.</p>
        <p className="font-medium">3) For å få informasjon om bruk av våre nettsider benytter vi informasjonskapsler (cookies).</p>
        <p>Vi behandler personopplysninger på grunnlag av en interesseavveining. Vi har vurdert det slik at det er nødvendig for oss for å tilpasse nettsiden til våre brukere. Vi ivaretar imidlertid ditt personvern ved at vi kun bruker opplysningene til statistikk. I denne statistikken er det ikke mulig å identifisere deg som enkeltperson. Videre slettes personopplysningene som samles inn via nettsiden daglig.</p>

        <h3 className="font-semibold">2. Utlevering av personopplysninger til andre</h3>
        <p>Vi gir ikke personopplysningene dine videre til andre med mindre det foreligger et lovlig grunnlag for slik utlevering. Eksempler på slikt grunnlag vil typisk være en avtale med deg (f.eks. henvisning til spesialistbehandling), ved refusjonskrav til HELFO, eller et lovgrunnlag som pålegger oss å gi ut informasjonen.</p>
        <p>Vi benytter oss i enkelte tilfeller av databehandlere til å samle inn, lagre eller på annen måte behandle personopplysninger på våre vegne. I slike tilfeller har vi inngått avtaler for å ivareta informasjonssikkerheten i alle ledd av behandlingen. All behandling av personopplysninger som vi foretar skjer innenfor EU/EØS‑området.</p>

        <h3 className="font-semibold">3. Lagringstid</h3>
        <p>Helseopplysninger skal oppbevares til det av hensyn til helsehjelpens karakter ikke lenger antas å bli bruk for dem. Hvis ikke opplysningene deretter skal bevares etter arkivloven eller annen lovgivning, skal de slettes, jf. pasientjournalloven § 25. Se også helsepersonelloven § 43 og journalforskriften § 14.</p>
        <p>Vi lagrer for øvrig dine personopplysninger hos oss så lenge det er nødvendig for det formål personopplysningene ble samlet inn for. Dette betyr for eksempel at personopplysninger som vi behandler på grunnlag av ditt samtykke slettes hvis du trekker ditt samtykke. Personopplysninger vi behandler for å oppfylle en avtale med deg slettes når avtalen er oppfylt og alle plikter som følger av avtaleforholdet er oppfylt, med mindre annet følger av særregler i helselovgivningen, f.eks. om oppbevaring av pasientjournal.</p>

        <h3 className="font-semibold">4. Dine rettigheter</h3>
        <p>Pasienter har rett til å kreve innsyn eller kopi av journal, jf. pasient‑ og brukerrettighetsloven § 5‑1. Det er særregler for retting eller endring av pasientjournal i helsepersonelloven §§ 42‑44, jf. journalforskriften § 14.</p>
        <p>For øvrig har du rett til å kreve innsyn, retting eller sletting av personopplysningene vi behandler om deg. Du har videre rett til å kreve begrenset behandling, rette innsigelse mot behandlingen og kreve dataportabilitet. Du kan lese mer om disse rettighetene på Datatilsynet: <a className="underline" href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer">www.datatilsynet.no</a>.</p>
        <p>For å ta i bruk dine rettigheter må du kontakte oss (se kontaktopplysninger ovenfor). Vi vil svare så fort som mulig, og senest innen 30 dager. Vi kan be deg bekrefte identiteten din eller oppgi ytterligere informasjon for å sikre at vi kun gir tilgang til dine opplysninger til deg.</p>
        <p>Du kan til enhver tid trekke tilbake ditt samtykke for behandling av personopplysninger hos oss. Den enkleste måten er å kontakte oss.</p>

        <h3 className="font-semibold">5. Klager</h3>
        <p>Dersom du mener at vår behandling av personopplysninger ikke stemmer med det vi har beskrevet her eller at vi på andre måter bryter personvernlovgivningen, kan du klage til Datatilsynet. Du finner informasjon på <a className="underline" href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer">www.datatilsynet.no</a>.</p>

        <h3 className="font-semibold">6. Endringer</h3>
        <p>Hvis det skjer endringer i våre tjenester eller i regelverket, kan det medføre endring i informasjonen du er gitt her. Hvis vi har dine kontaktopplysninger vil vi gjøre deg oppmerksom på slike endringer. Ellers vil oppdatert informasjon alltid finnes på våre nettsider.</p>
        <p className="text-gray500 text-sm">Oppdatert oktober 2024</p>
        </div>
      </Section>
    </>
  )
}
