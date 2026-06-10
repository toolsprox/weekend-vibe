'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TouchRipple() {
  const [ripples, setRipples] = useState<{ x: number, y: number, id: number }[]>([])

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    const handleInteraction = (e: MouseEvent | TouchEvent) => {
      let x, y;
      if ('touches' in e && e.touches.length > 0) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else if ('clientX' in e) {
        x = e.clientX;
        y = e.clientY;
      } else {
        return;
      }
      
      const newRipple = { x, y, id: Date.now() }
      setRipples(prev => [...prev.slice(-4), newRipple]) // Keep max 5 ripples to prevent lag
      
      // Cleanup after animation completes
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id))
      }, 800)
    }

    // Use click to capture both mouse clicks and mobile taps
    window.addEventListener('click', handleInteraction)

    return () => {
      window.removeEventListener('click', handleInteraction)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0.2, opacity: 0.8, borderWidth: "4px" }}
            animate={{ scale: 2.5, opacity: 0, borderWidth: "1px" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute w-16 h-16 rounded-full border-[#7CFF01]"
            style={{ 
              left: ripple.x - 32, 
              top: ripple.y - 32,
              boxShadow: "0 0 15px rgba(124, 255, 1, 0.4), inset 0 0 10px rgba(124, 255, 1, 0.2)"
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
