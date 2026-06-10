'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarHeart, Utensils } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show after scrolling down slightly
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="md:hidden fixed bottom-6 left-4 right-4 z-50 flex gap-3"
        >
          <Link href="https://masakali.co.uk/masakali-london-branch/?utm_source=google&utm_medium=cpc&utm_campaign=weekend-vibes-thu-sun&utm_content=sitelink-menu#london-menu" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white text-[#0F0F0F] rounded-2xl py-4 flex flex-col items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-black/5 active:scale-95 transition-transform">
            <Utensils className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Menu</span>
          </Link>
          <a href="#reserve" className="flex-[2] bg-[#0F0F0F] text-white rounded-2xl py-4 flex flex-col items-center justify-center shadow-[0_10px_40px_rgba(124,255,1,0.3)] active:scale-95 transition-transform overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5CB800] to-[#7CFF01] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CalendarHeart className="w-5 h-5 mb-1 text-[#7CFF01] group-hover:text-black relative z-10" />
            <span className="text-[10px] font-bold uppercase tracking-widest relative z-10 group-hover:text-black">Book Table</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
