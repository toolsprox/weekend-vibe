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
            <div className="flex-grow w-full relative bg-white">
              <iframe 
                src="https://www.opentable.co.uk/r/masakali-restaurant-euston-london?corrid=41f8fc28-8609-4b5f-8750-347046547a0c&avt=eyJ2IjozLCJtIjowLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2026-06-09T19%3A00%3A00" 
                className="w-full h-full border-none"
                title="OpenTable Reservation"
              ></iframe>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
