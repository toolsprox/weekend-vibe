'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function ReservationModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#reserve') {
        setIsOpen(true)
        // Prevent scrolling on the body when modal is open
        document.body.style.overflow = 'hidden'
      } else {
        setIsOpen(false)
        document.body.style.overflow = ''
      }
    }

    // Check initial hash
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const closeModal = () => {
    window.location.hash = ''
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={closeModal}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }} 
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl h-[85vh] bg-[#05000A] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.2)] flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-black/50">
              <span className="font-bold tracking-widest uppercase text-white flex items-center gap-2">
                <span className="text-xl">🪩</span> Reserve Your Table
              </span>
              <button onClick={closeModal} className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/10">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="flex-grow w-full relative bg-[#05000A] flex flex-col items-center justify-center p-8 text-center">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-lime-500/10 blur-3xl pointer-events-none"></div>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_30px_rgba(217,70,239,0.3)]">
                  <span className="text-4xl">🍽️</span>
                </div>
                
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Secure Your Table</h3>
                <p className="text-white/70 mb-8 max-w-md mx-auto leading-relaxed">
                  You are being securely redirected to our official OpenTable reservation system to complete your booking.
                </p>
                
                <a 
                  href="https://www.opentable.co.uk/r/masakali-restaurant-euston-london?corrid=41f8fc28-8609-4b5f-8750-347046547a0c&avt=eyJ2IjozLCJtIjowLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2026-06-09T19%3A00%3A00" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={closeModal}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white font-bold tracking-widest uppercase hover:scale-105 transition-transform shadow-[0_0_30px_rgba(217,70,239,0.5)] flex items-center gap-3"
                >
                  Continue to OpenTable
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
