import { SITE } from './content'

export function dentistJsonLd() {
  const baseUrl = 'https://www.example.com' // TODO: Oppdater med faktisk domene
  
  // Parse address
  const addressParts = SITE.address.split(', ')
  const streetAddress = addressParts[0] || 'Fila 6'
  const localityParts = addressParts[1]?.split(' ') || []
  const postalCode = localityParts[0] || '3070'
  const addressLocality = localityParts.slice(1).join(' ') || 'Sande i Vestfold'
  
  // Parse opening hours
  const openingHours = SITE.hours
    .filter(h => h.time !== 'Stengt')
    .map(h => {
      const [opens, closes] = h.time.split('–')
      const days = h.days.includes('–') 
        ? h.days.split('–').map(d => d.trim())
        : [h.days.trim()]
      
      // Convert Norwegian day abbreviations to English
      const dayMap: Record<string, string> = {
        'Man': 'Monday',
        'Tir': 'Tuesday',
        'Ons': 'Wednesday',
        'Tor': 'Thursday',
        'Fre': 'Friday',
        'Lør': 'Saturday',
        'Søn': 'Sunday',
      }
      
      return days.map(day => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dayMap[day] || day,
        opens: opens?.trim(),
        closes: closes?.trim(),
      }))
    })
    .flat()

  return {
    '@context': 'https://schema.org',
    '@type': 'DentalClinic',
    name: SITE.name,
    image: `${baseUrl}/Images/hero.jpg`,
    '@id': `${baseUrl}/#dentist`,
    url: baseUrl,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: streetAddress,
      addressLocality: addressLocality,
      postalCode: postalCode,
      addressRegion: 'Vestfold',
      addressCountry: 'NO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // TODO: Legg til faktiske koordinater hvis tilgjengelig
      // latitude: 59.6,
      // longitude: 10.2,
    },
    openingHoursSpecification: openingHours.length > 0 ? openingHours : [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '16:00',
      }
    ],
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Insurance',
    currenciesAccepted: 'NOK',
    areaServed: {
      '@type': 'City',
      name: 'Sande',
    },
    medicalSpecialty: 'Dentistry',
    description: 'Moderne tannklinikk i Sande sentrum. Erfaring, trygghet og direkteoppgjør med HELFO.',
    aggregateRating: {
      '@type': 'AggregateRating',
      // TODO: Legg til faktiske ratings hvis tilgjengelig
      // ratingValue: '4.8',
      // reviewCount: '127',
    },
    sameAs: [
      // TODO: Legg til sosiale medier lenker hvis tilgjengelig
      // 'https://www.facebook.com/tannlegeneaasnes',
      `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`,
    ],
  }
}


