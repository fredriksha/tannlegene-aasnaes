export function dentistJsonLd() {
  // TODO: Oppdater med faktisk data
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Tannlegene Aasnæs AS',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sande sentrum',
      addressLocality: 'Sande',
      postalCode: '3070',
      addressCountry: 'NO',
    },
    telephone: '+47 XX XX XX XX',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '16:00' }
    ],
    url: 'https://www.example.com',
    sameAs: [
      'https://www.facebook.com/placeholder',
      'https://maps.google.com/?q=Tannlegene+Aasnæs+AS',
    ],
  }
}
