"use client"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(2, 'Skriv inn navnet ditt'),
  email: z.string().email('Ugyldig e‑post'),
  phone: z.string().min(6, 'Ugyldig telefon'),
  when: z.string().optional(),
  message: z.string().min(5, 'Skriv en kort melding'),
  consent: z.literal(true, { errorMap: () => ({ message: 'Du må samtykke for å sende' }) }),
})

type FormValues = z.infer<typeof schema>

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormValues) => {
    const res = await fetch('/api/lead', { method: 'POST', body: JSON.stringify(data) })
    if (res.ok) {
      reset()
      alert('Takk! Vi tar kontakt så snart vi kan.')
    } else {
      alert('Noe gikk galt. Prøv igjen senere.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
      <div>
        <label className="block text-sm font-medium">Navn</label>
        <input {...register('name')} className="mt-1 w-full rounded-lg border px-3 py-2" required aria-invalid={!!errors.name} />
        {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">E‑post</label>
          <input type="email" {...register('email')} className="mt-1 w-full rounded-lg border px-3 py-2" required aria-invalid={!!errors.email} />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Telefon</label>
          <input {...register('phone')} className="mt-1 w-full rounded-lg border px-3 py-2" required aria-invalid={!!errors.phone} />
          {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>}
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">Ønsket tidspunkt</label>
          <input type="datetime-local" {...register('when')} className="mt-1 w-full rounded-lg border px-3 py-2" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Melding</label>
        <textarea {...register('message')} className="mt-1 w-full rounded-lg border px-3 py-2" rows={4} required aria-invalid={!!errors.message} />
        {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
      </div>
      <label className="flex items-start gap-2">
        <input type="checkbox" {...register('consent')} className="mt-1" />
        <span className="text-sm">Jeg samtykker til at henvendelsen lagres for oppfølging (<a href="/personvern" className="underline">les mer</a>).</span>
      </label>
      {errors.consent && <p className="text-sm text-red-600">{errors.consent.message}</p>}
      <button className="btn" disabled={isSubmitting}>{isSubmitting ? 'Sender…' : 'Send melding'}</button>
      {isSubmitSuccessful && <p className="text-green-700">Takk! Henvendelsen er sendt.</p>}
    </form>
  )
}
