'use client'

import { useState } from 'react'
import { preconnect, prefetchDNS } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { sendGTMEvent } from '@next/third-parties/google'
import { MapPin, Phone, GraduationCap, Loader2 } from 'lucide-react'
import Image from 'next/image'

export default function BookingForm() {
  preconnect('https://www.opentable.co.uk', { crossOrigin: 'anonymous' })
  prefetchDNS('https://www.opentable.co.uk')
  
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#0F0F0F] overflow-hidden font-sans pt-20 pb-24 md:pt-32 md:pb-32 flex flex-col items-center">
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#7CFF01] rounded-full blur-[150px] opacity-[0.03] pointer-events-none z-0"></div>

      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center mb-8 md:mb-12 w-full"
        >
          <div className="inline-flex items-center gap-2 bg-[#FDFBF7] px-4 py-1.5 rounded-full shadow-[inset_2px_2px_5px_#e0deda,inset_-2px_-2px_5px_#ffffff] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7CFF01] shadow-[0_0_8px_#7CFF01] animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#0F0F0F]">Live Reservations</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-4">
            Masakali <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5CB800] to-[#7CFF01] italic">London.</span>
          </h1>
          
          <p className="text-black/60 text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-8">
            <span className="sr-only">Looking for the best Indian restaurant near me? </span>
            Experience the spirited energy of India's finest culinary traditions. Book your table directly to secure your extraordinary dining journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Masakali+48+Stanhope+St+London+NW1+3EX"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sendGTMEvent({ event: 'conversion_click', button_name: 'get_directions', location: 'london' })}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FDFBF7] text-[#0F0F0F] font-bold text-sm shadow-[5px_5px_10px_#e0deda,-5px_-5px_10px_#ffffff] hover:shadow-[inset_2px_2px_5px_#e0deda,inset_-2px_-2px_5px_#ffffff] transition-all active:scale-95"
            >
              <MapPin className="w-4 h-4 text-[#5CB800]" />
              Get Directions
            </a>
            
            <a 
              href="tel:+442074199999"
              onClick={() => sendGTMEvent({ event: 'conversion_click', button_name: 'call_now', location: 'london' })}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FDFBF7] text-[#0F0F0F] font-bold text-sm shadow-[5px_5px_10px_#e0deda,-5px_-5px_10px_#ffffff] hover:shadow-[inset_2px_2px_5px_#e0deda,inset_-2px_-2px_5px_#ffffff] transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#5CB800]" />
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Desktop Layout: Side-by-Side. Mobile Layout: Stacked Centered */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Visuals & Offers (Left on Desktop, Top on Mobile) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start justify-center space-y-8 w-full">
            
            {/* Spinning Food Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-[260px] md:max-w-[340px] aspect-square flex items-center justify-center mx-auto lg:mx-0"
            >
              
              <div className="absolute w-full h-full rounded-full border border-black/5 border-dashed animate-[spin_30s_linear_infinite]"></div>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                className="relative w-[90%] h-[90%] z-10"
              >
                <Image 
                  src="/images/hero_biryani.png" 
                  alt="Signature Dish" 
                  fill 
                  className="object-cover mix-blend-multiply"
                  style={{ clipPath: 'circle(49% at 50% 50%)' }}
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Glassmorphic Discount Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-[400px] relative p-[1px] rounded-[30px] overflow-hidden group mx-auto lg:mx-0 shadow-[10px_10px_20px_#e0deda,-10px_-10px_20px_#ffffff]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#7CFF01] to-[#5CB800] opacity-40"></div>
              <div className="relative h-full p-6 rounded-[30px] bg-[rgba(253,251,247,0.85)] backdrop-blur-xl flex items-center gap-5">
                <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-[#7CFF01]/20 to-transparent flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#5CB800]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F0F0F] text-base mb-1">Student Privilege</h4>
                  <p className="text-black/60 text-xs md:text-sm leading-relaxed">
                    Looking for the best Indian restaurant near me? Experience the spirited energy of India's finest culinary traditions right here in London. Show valid ID to unlock a <strong className="text-[#5CB800]">15% discount</strong> on your bill.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Booking Widget (Right on Desktop, Bottom on Mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 flex justify-center w-full"
          >
            <div className="relative w-full max-w-[360px]">
              {/* Outer Glowing Aura */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#7CFF01]/20 to-transparent rounded-[40px] blur-2xl opacity-60 translate-y-6"></div>

              {/* Neumorphic + Glassmorphic Tablet */}
              <div 
                className="relative w-full p-4 sm:p-6 md:p-8 rounded-[40px] flex flex-col items-center glass-card transform-style-3d hover:rotate-y-2 hover:-rotate-x-2 transition-all duration-700 hover:shadow-deep z-10 perspective-1000"
              >
                {/* Neumorphic Handle */}
                <div className="w-12 h-1.5 bg-[#e0deda] rounded-full mb-6 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]"></div>
                
                {/* Inner Bevel for iframe */}
                <div className="relative w-full h-[500px] md:h-[550px] overflow-hidden rounded-[24px] bg-white/50 backdrop-blur-sm shadow-[inset_5px_5px_10px_rgba(224,222,218,0.5),inset_-5px_-5px_10px_rgba(255,255,255,0.8)] p-2">
                  
                  {/* Loading State */}
                  <AnimatePresence>
                    {!isLoaded && (
                      <motion.div 
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md rounded-[18px]"
                      >
                        <Loader2 className="w-8 h-8 text-[#5CB800] animate-spin mb-4" />
                        <p className="text-sm font-semibold text-[#0F0F0F] tracking-wide animate-pulse">Connecting to OpenTable...</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <iframe 
                    src="https://www.opentable.co.uk/widget/reservation/mural?rid=361344&type=standard&theme=tall&color=4&dark=false&domain=couk&lang=en-GB"
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '18px', opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
                    title="OpenTable Reservation Widget"
                    className="w-full h-full bg-transparent"
                    onLoad={() => setIsLoaded(true)}
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
