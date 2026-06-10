'use client'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
export default function Footer() {
  return (
    <footer className="relative mt-24 glass-floating border-t border-white/50 py-16 px-6 sm:px-12 z-10 mx-4 sm:mx-8 mb-8 rounded-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6 md:col-span-1">
          <div className="flex flex-col">
            <span className="font-serif text-3xl font-bold tracking-widest text-[#0F0F0F] uppercase">Masakali</span>
            <span className="text-[0.65rem] tracking-[0.2em] text-[#0F0F0F]/60 uppercase ml-1">London</span>
          </div>
          <p className="text-sm text-[#0F0F0F]/70 leading-relaxed max-w-xs">A modern interpretation of pan-Indian cuisine, serving authentic flavors with contemporary elegance in the heart of London.</p>
        </div>
        <div className="space-y-6">
          <h4 className="text-xs font-bold tracking-widest text-[#0F0F0F] uppercase">Contact</h4>
          <ul className="space-y-4">
            <li><a href="tel:+442074199999" className="flex items-center gap-3 text-sm text-[#0F0F0F]/70 hover:text-[#0F0F0F] transition-colors group"><div className="p-2 rounded-full bg-white/50 group-hover:bg-[#7CFF01] transition-colors"><Phone className="w-4 h-4 text-[#0F0F0F]" /></div>+44 20 7419 9999</a></li>
            <li><a href="mailto:masakalireservations@gmail.com" className="flex items-center gap-3 text-sm text-[#0F0F0F]/70 hover:text-[#0F0F0F] transition-colors group"><div className="p-2 rounded-full bg-white/50 group-hover:bg-[#7CFF01] transition-colors"><Mail className="w-4 h-4 text-[#0F0F0F]" /></div>masakalireservations@gmail.com</a></li>
            <li><a href="#" className="flex items-start gap-3 text-sm text-[#0F0F0F]/70 hover:text-[#0F0F0F] transition-colors group"><div className="p-2 rounded-full bg-white/50 group-hover:bg-[#7CFF01] transition-colors shrink-0"><MapPin className="w-4 h-4 text-[#0F0F0F]" /></div><span className="leading-relaxed">48 Stanhope St<br />London NW1 3EX<br />United Kingdom</span></a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-xs font-bold tracking-widest text-[#0F0F0F] uppercase">Hours</h4>
          <ul className="space-y-3 text-sm text-[#0F0F0F]/70"><li className="flex justify-between pb-2"><span>Monday - Sunday</span><span className="font-medium text-[#0F0F0F]">12:00 PM - 11:00 PM</span></li></ul>
          <div className="pt-4 flex gap-4"><a href="#" className="w-10 h-10 rounded-full bg-[#0F0F0F] text-white font-bold flex items-center justify-center hover:bg-[#7CFF01] hover:text-[#0F0F0F] hover:-translate-y-1 transition-all shadow-lg shadow-[#0F0F0F]/20">IG</a></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#0F0F0F]/50 tracking-widest uppercase">&copy; 2026 Masakali London. All rights reserved.</p>
        <div className="flex gap-6"><Link href="#" className="text-xs text-[#0F0F0F]/50 hover:text-[#0F0F0F] tracking-widest uppercase transition-colors">Privacy</Link><Link href="#" className="text-xs text-[#0F0F0F]/50 hover:text-[#0F0F0F] tracking-widest uppercase transition-colors">Terms</Link></div>
      </div>
    </footer>
  )
}
