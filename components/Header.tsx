"use client"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import clsx from 'clsx'

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
        <Link href="/" className="font-medium text-lg tracking-tight no-underline flex items-center gap-3 transition-colors hover:text-blue">
          <Image src="/logo.png" alt="Tannlegene Aasnæs logo" width={287} height={413} className="h-10 w-auto" priority unoptimized />
          <span className="text-gray900">Tannlegene Aasnæs AS</span>
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
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-300 p-3 text-gray900 hover:bg-gray100 transition-colors"
          aria-label="Meny"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={clsx(
                'absolute left-0 top-0 h-[2px] w-full bg-gray900 transition-transform duration-300',
                open ? 'translate-y-[6px] rotate-45' : ''
              )}
            />
            <span
              className={clsx(
                'absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-gray900 transition-opacity duration-300',
                open ? 'opacity-0' : 'opacity-100'
              )}
            />
            <span
              className={clsx(
                'absolute left-0 bottom-0 h-[2px] w-full bg-gray900 transition-transform duration-300',
                open ? '-translate-y-[6px] -rotate-45' : ''
              )}
            />
          </span>
        </button>
      </div>
      <div
        className={clsx(
          'md:hidden overflow-hidden transition-[max-height] duration-300 ease-out bg-white border-t',
          open ? 'max-h-96 border-gray-200' : 'max-h-0 border-transparent'
        )}
        aria-hidden={!open}
      >
        <nav
          className={clsx(
            'container flex flex-col gap-2 transition-[padding] duration-300',
            open ? 'py-4' : 'py-0'
          )}
          aria-label="Mobilmeny"
        >
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
    </header>
  )
}
