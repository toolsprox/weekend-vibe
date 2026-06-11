'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Users, CalendarDays, Clock, ArrowRight } from 'lucide-react'

export default function ReservationModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [partySize, setPartySize] = useState('2')
  
  // Default to next Friday or today if it's weekend
  const [date, setDate] = useState(() => {
    const d = new Date()
    return d.toISOString().split('T')[0]
  })
  const [time, setTime] = useState('19:00')

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#reserve') {
        setIsOpen(true)
        document.body.style.overflow = 'hidden'
      } else {
        setIsOpen(false)
        document.body.style.overflow = ''
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const closeModal = () => {
    window.location.hash = ''
    setIsOpen(false)
  }

  const handleFindTable = () => {
    // Construct the OpenTable URL with the selected dynamic parameters
    const formattedDateTime = `${date}T${time}:00`
    const openTableUrl = `https://www.opentable.co.uk/r/masakali-restaurant-euston-london?corrid=41f8fc28-8609-4b5f-8750-347046547a0c&avt=eyJ2IjozLCJtIjowLCJwIjowLCJzIjowLCJuIjowfQ&p=${partySize}&sd=${encodeURIComponent(formattedDateTime)}`
    
    window.open(openTableUrl, '_blank', 'noopener,noreferrer')
    closeModal()
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
            className="relative w-full max-w-2xl bg-gradient-to-br from-indigo-950 to-fuchsia-950 border border-cyan-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.2)] flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-black/50">
              <span className="font-serif font-bold tracking-widest uppercase text-white flex items-center gap-3 text-xl">
                <span className="text-2xl">🪩</span> Book Your Weekend
              </span>
              <button onClick={closeModal} className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/10">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="flex-grow w-full relative bg-transparent flex flex-col items-center justify-center p-8 md:p-12 text-center">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-lime-500/10 blur-3xl pointer-events-none"></div>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative z-10 w-full flex flex-col items-center"
              >
                <p className="text-cyan-100 mb-8 max-w-md mx-auto leading-relaxed font-medium">
                  Select your details below. You will be securely transferred to OpenTable to confirm your reservation.
                </p>
                
                <div className="w-full max-w-md space-y-6 bg-black/40 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
                  
                  {/* Party Size */}
                  <div className="flex flex-col text-left">
                    <label className="text-fuchsia-300 text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" /> Party Size
                    </label>
                    <select 
                      value={partySize}
                      onChange={(e) => setPartySize(e.target.value)}
                      className="w-full bg-[#05000A] border border-cyan-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all appearance-none cursor-pointer"
                    >
                      {[1,2,3,4,5,6,7,8,9,10,11,12].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                      <option value="13">13+ People (Large Group)</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div className="flex flex-col text-left">
                    <label className="text-fuchsia-300 text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                      <CalendarDays className="w-4 h-4" /> Date
                    </label>
                    <input 
                      type="date" 
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-[#05000A] border border-cyan-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all cursor-pointer [color-scheme:dark]"
                    />
                  </div>

                  {/* Time */}
                  <div className="flex flex-col text-left">
                    <label className="text-fuchsia-300 text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Time
                    </label>
                    <select 
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-[#05000A] border border-cyan-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all appearance-none cursor-pointer"
                    >
                      {['12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00'].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                </div>
                
                <button 
                  onClick={handleFindTable}
                  className="mt-8 w-full max-w-md px-8 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white font-bold tracking-widest uppercase hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(217,70,239,0.5)] flex items-center justify-center gap-3 text-lg"
                >
                  Find Table
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
