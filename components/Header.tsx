"use client"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="container h-20 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight no-underline flex items-center gap-3 transition-colors hover:text-blue">
          <Image src="/logo.png" alt="Tannlegene Aasnæs logo" width={36} height={36} className="h-9 w-9" priority />
          <span className="text-gray900">Tannlegene Aasnæs</span>
        </Link>
        <nav aria-label="Hovedmeny" className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className={`text-base font-medium no-underline transition-colors ${
              isActive('/') ? 'text-blue border-b-2 border-blue pb-1' : 'text-gray700 hover:text-blue'
            }`}
          >
            Hjem
          </Link>
          <Link 
            href="/vaare-tjenester" 
            className={`text-base font-medium no-underline transition-colors ${
              isActive('/vaare-tjenester') ? 'text-blue border-b-2 border-blue pb-1' : 'text-gray700 hover:text-blue'
            }`}
          >
            Våre tjenester
          </Link>
          <Link 
            href="/om-oss" 
            className={`text-base font-medium no-underline transition-colors ${
              isActive('/om-oss') ? 'text-blue border-b-2 border-blue pb-1' : 'text-gray700 hover:text-blue'
            }`}
          >
            Om oss
          </Link>
          <Link 
            href="/kontakt-oss" 
            className={`text-base font-medium no-underline transition-colors ${
              isActive('/kontakt-oss') ? 'text-blue border-b-2 border-blue pb-1' : 'text-gray700 hover:text-blue'
            }`}
          >
            Kontakt oss
          </Link>
          <Link href="/kontakt-oss" className="btn">Bestill time</Link>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-gray900 hover:bg-gray100 transition-colors"
          aria-label="Meny"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="container py-4 flex flex-col gap-2" aria-label="Mobilmeny">
            <Link 
              href="/" 
              onClick={() => setOpen(false)} 
              className={`no-underline py-3 px-4 rounded-xl transition-colors ${
                isActive('/') ? 'bg-blueLight text-blue font-semibold' : 'text-gray700 hover:bg-gray100'
              }`}
            >
              Hjem
            </Link>
            <Link 
              href="/vaare-tjenester" 
              onClick={() => setOpen(false)} 
              className={`no-underline py-3 px-4 rounded-xl transition-colors ${
                isActive('/vaare-tjenester') ? 'bg-blueLight text-blue font-semibold' : 'text-gray700 hover:bg-gray100'
              }`}
            >
              Våre tjenester
            </Link>
            <Link 
              href="/om-oss" 
              onClick={() => setOpen(false)} 
              className={`no-underline py-3 px-4 rounded-xl transition-colors ${
                isActive('/om-oss') ? 'bg-blueLight text-blue font-semibold' : 'text-gray700 hover:bg-gray100'
              }`}
            >
              Om oss
            </Link>
            <Link 
              href="/kontakt-oss" 
              onClick={() => setOpen(false)} 
              className={`no-underline py-3 px-4 rounded-xl transition-colors ${
                isActive('/kontakt-oss') ? 'bg-blueLight text-blue font-semibold' : 'text-gray700 hover:bg-gray100'
              }`}
            >
              Kontakt oss
            </Link>
            <Link href="/kontakt-oss" onClick={() => setOpen(false)} className="btn w-full justify-center mt-2">Bestill time</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
