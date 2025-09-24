# Tannlegene Aasnæs AS – Nettside (Next.js 14)

Clean, classic og rolig nettside bygget med Next.js 14 (App Router), TypeScript og Tailwind.

## Kom i gang

1. Installer avhengigheter
```bash
npm install
```
2. Kjør utviklingsserver
```bash
npm run dev
```
3. Åpne `http://localhost:3000`

## Struktur
- `app/` – sider og ruter (App Router)
  - `layout.tsx` – global layout (Header/Footer, skip-link, metadata)
  - `page.tsx` – Hjem
  - `vaare-tjenester/page.tsx` – Våre tjenester
  - `om-oss/page.tsx` – Om oss
  - `kontakt-oss/page.tsx` – Kontakt oss (skjema)
  - `personvern/page.tsx` – Personvern
  - `api/lead/route.ts` – (POST) skjema-handler (placeholder)
  - `sitemap.ts`, `robots.ts` – SEO
- `components/` – gjenbrukbare komponenter (Header, Footer, Hero, osv.)
- `lib/` – innhold/konstanter, SEO/Schema helpers

## Tilpasning
- Farger/typografi: `tailwind.config.ts`
- Tekst og data: `lib/content.ts`
- Logo: tekstlogo i `Header.tsx` (erstatt med SVG senere)
- Åpningstider/adresse/telefon: `lib/content.ts`
- Bilder: komponenter har tydelige `TODO`-kommentarer (bytt til egne bilder)
- Domene/URL: oppdater `metadataBase` i `app/layout.tsx` og base-URL i `sitemap.ts`/`robots.ts`
- Skjema-leveranse: implementer e‑post i `app/api/lead/route.ts` (f.eks. Resend)

## Tilgjengelighet
- WCAG 2.1 AA: tydelig fokus, semantiske landemerker, riktig heading-hierarki
- Kontrast mot bakgrunn (mørk grå + blå aksent)
- Skip-to-content lenke i toppen

## SEO
- `next/metadata` per side (tittel/description)
- `sitemap.ts` og `robots.ts`
- JSON-LD: se `lib/schema.ts`

## TODOs
- [ ] Erstatt placeholder-bilder (Unsplash) og legg til alt-tekst
- [ ] Oppdater telefon, e‑post, adresse og org.nr
- [ ] Legg inn ekte kart‑embed URL
- [ ] Implementer e‑postutsendelse i `app/api/lead/route.ts`
- [ ] Oppdater `metadataBase`/sitemap/robots med endelig domene
- [ ] Faviconer (se realfavicongenerator)
- [ ] Eventuelle ekstra tjenester/undersider
# Force deployment Mon Sep 22 21:38:54 CEST 2025
# Force deployment Mon Sep 22 21:40:15 CEST 2025

