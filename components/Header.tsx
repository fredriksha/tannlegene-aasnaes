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
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight no-underline flex items-center gap-2 transition-all duration-200 hover:scale-105">
          <Image src="/logo.png" alt="Tannlegene Aasnæs logo" width={32} height={32} className="h-8 w-8 transition-transform duration-200 hover:rotate-3" priority />
          <span>Tannlegene Aasnæs AS</span>
        </Link>
        <nav aria-label="Hovedmeny" className="hidden md:flex items-center gap-6">
          <Link 
            href="/" 
            className={`text-gray500 hover:text-gray900 no-underline relative pb-1 transition-all duration-200 hover:scale-105 ${
              isActive('/') ? 'text-gray900 border-b-2 border-blue-500' : ''
            }`}
          >
            Hjem
          </Link>
          <Link 
            href="/vaare-tjenester" 
            className={`text-gray500 hover:text-gray900 no-underline relative pb-1 transition-all duration-200 hover:scale-105 ${
              isActive('/vaare-tjenester') ? 'text-gray900 border-b-2 border-blue-500' : ''
            }`}
          >
            Våre tjenester
          </Link>
          <Link 
            href="/om-oss" 
            className={`text-gray500 hover:text-gray900 no-underline relative pb-1 transition-all duration-200 hover:scale-105 ${
              isActive('/om-oss') ? 'text-gray900 border-b-2 border-blue-500' : ''
            }`}
          >
            Om oss
          </Link>
          <Link 
            href="/kontakt-oss" 
            className={`text-gray500 hover:text-gray900 no-underline relative pb-1 transition-all duration-200 hover:scale-105 ${
              isActive('/kontakt-oss') ? 'text-gray900 border-b-2 border-blue-500' : ''
            }`}
          >
            Kontakt oss
          </Link>
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
            <Link 
              href="/" 
              onClick={() => setOpen(false)} 
              className={`no-underline py-2 px-3 rounded transition-all duration-200 ${
                isActive('/') ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-50 hover:scale-105'
              }`}
            >
              Hjem
            </Link>
            <Link 
              href="/vaare-tjenester" 
              onClick={() => setOpen(false)} 
              className={`no-underline py-2 px-3 rounded transition-all duration-200 ${
                isActive('/vaare-tjenester') ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-50 hover:scale-105'
              }`}
            >
              Våre tjenester
            </Link>
            <Link 
              href="/om-oss" 
              onClick={() => setOpen(false)} 
              className={`no-underline py-2 px-3 rounded transition-all duration-200 ${
                isActive('/om-oss') ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-50 hover:scale-105'
              }`}
            >
              Om oss
            </Link>
            <Link 
              href="/kontakt-oss" 
              onClick={() => setOpen(false)} 
              className={`no-underline py-2 px-3 rounded transition-all duration-200 ${
                isActive('/kontakt-oss') ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-50 hover:scale-105'
              }`}
            >
              Kontakt oss
            </Link>
            <Link href="/kontakt-oss" onClick={() => setOpen(false)} className="btn w-full justify-center">Bestill time</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
