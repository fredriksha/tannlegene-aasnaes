export function Testimonial({ quote, author }: { quote: string; author?: string }) {
  return (
    <figure className="card">
      <blockquote className="text-gray900">“{quote}”</blockquote>
      {author && <figcaption className="text-sm text-gray500 mt-2">— {author}</figcaption>}
    </figure>
  )
}

