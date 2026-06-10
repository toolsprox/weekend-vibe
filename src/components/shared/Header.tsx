'use client'
import Link from 'next/link'
export default function Header() {
  return (
    <header className="absolute left-0 right-0 z-50 px-4 sm:px-8 py-6 top-0">
      <div className="max-w-7xl mx-auto rounded-full bg-transparent">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex flex-col z-50">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-foreground uppercase">Masakali</span>
            <span className="text-[10px] sm:text-xs tracking-[0.2em] text-[#7CFF01] uppercase font-bold italic -mt-1">London.</span>
          </Link>
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 bg-white/50 backdrop-blur-md px-6 py-2 rounded-full border border-black/5 shadow-sm">
            <span className="text-sm font-bold tracking-widest uppercase text-[#0F0F0F] flex items-center gap-2">
              <span className="text-xl">💼</span> 💼 Priority Corporate Booking
            </span>
          </div>
          <nav className="flex items-center gap-8 z-50">
            <Link href="https://www.opentable.co.uk/r/masakali-restaurant-euston-london?corrid=41f8fc28-8609-4b5f-8750-347046547a0c&avt=eyJ2IjozLCJtIjowLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2026-06-09T19%3A00%3A00" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-full bg-[#0F0F0F] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#7CFF01] hover:text-[#0F0F0F] transition-all shadow-[0_4px_14px_rgba(6,78,59,0.3)] hover:shadow-[0_4px_20px_rgba(124,255,1,0.4)]">Book Table</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}


