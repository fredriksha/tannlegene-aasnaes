"use client"
import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight no-underline flex items-center gap-2">
          <img src="/tooth.svg" alt="Tannlegene Aasnæs logo" className="h-5 w-5" />
          <span>Tannlegene Aasnæs AS</span>
        </Link>
        <nav aria-label="Hovedmeny" className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray500 hover:text-gray900 no-underline">Hjem</Link>
          <Link href="/vaare-tjenester" className="text-gray500 hover:text-gray900 no-underline">Våre tjenester</Link>
          <Link href="/om-oss" className="text-gray500 hover:text-gray900 no-underline">Om oss</Link>
          <Link href="/kontakt-oss" className="text-gray500 hover:text-gray900 no-underline">Kontakt oss</Link>
          <Link href="/kontakt-oss" className="btn">Bestill time</Link>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-gray900"
          aria-label="Meny"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="container py-3 flex flex-col gap-2" aria-label="Mobilmeny">
            <Link href="/" onClick={() => setOpen(false)} className="no-underline">Hjem</Link>
            <Link href="/vaare-tjenester" onClick={() => setOpen(false)} className="no-underline">Våre tjenester</Link>
            <Link href="/om-oss" onClick={() => setOpen(false)} className="no-underline">Om oss</Link>
            <Link href="/kontakt-oss" onClick={() => setOpen(false)} className="no-underline">Kontakt oss</Link>
            <Link href="/kontakt-oss" onClick={() => setOpen(false)} className="btn w-full justify-center">Bestill time</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
