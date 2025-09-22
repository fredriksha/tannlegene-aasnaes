import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.example.com' // TODO: oppdater
  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/vaare-tjenester`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/om-oss`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/kontakt-oss`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/personvern`, changeFrequency: 'yearly', priority: 0.5 },
  ]
}
