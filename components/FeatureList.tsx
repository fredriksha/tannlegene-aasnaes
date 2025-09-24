type Feature = { title: string; description: string }

export function FeatureList({ features }: { features: Feature[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {features.map((f) => (
        <div key={f.title} className="card">
          <div className="font-semibold">{f.title}</div>
          <p className="text-gray500 mt-1 text-sm">{f.description}</p>
        </div>
      ))}
    </div>
  )
}

