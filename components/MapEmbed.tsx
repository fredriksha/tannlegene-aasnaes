export function MapEmbed({ query }: { query: string }) {
  // TODO: Bytt ut src med ekte Google Maps embed
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
  return (
    <div className="overflow-hidden rounded-xl border" aria-label="Kart">
      <iframe title="Kart" src={src} className="h-64 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  )
}
