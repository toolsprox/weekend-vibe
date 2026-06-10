'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function AmbientAura() {
  const { scrollY } = useScroll()
  
  // The aura slowly moves down as the user scrolls, but at a delayed rate (parallax)
  const yPos = useSpring(useTransform(scrollY, value => value * 0.6), { 
    stiffness: 40, 
    damping: 20 
  })

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        style={{ y: yPos }}
        animate={{ 
          x: ["-20vw", "40vw", "-10vw", "-20vw"],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -top-[20%] left-[10%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#7CFF01] to-[#5CB800] rounded-full blur-[120px] opacity-15"
      />
      
      <motion.div
        style={{ y: useSpring(useTransform(scrollY, value => value * 0.9), { stiffness: 30, damping: 20 }) }}
        animate={{ 
          x: ["40vw", "-10vw", "20vw", "40vw"],
          scale: [0.8, 1.1, 1, 0.8]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-[40%] right-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#7CFF01] rounded-full blur-[100px] opacity-[0.08]"
      />
    </div>
  )
}
