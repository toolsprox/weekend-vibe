'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Martini, Music, Star, Clock, UtensilsCrossed, Sparkles } from 'lucide-react'
import PulseCTA from '@/components/shared/PulseCTA'

export default function WeekendVibePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [
    "/images/user_upload_1.png",
    "/images/top_burger.png",
    "/images/top_pizza.png",
    "/images/top_noodles.png",
    "/images/top_barbecue.png"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <main className="min-h-screen bg-[#05000A] text-white relative overflow-hidden font-sans pt-32 pb-16">
      
      {/* Disco Lights (Floating Elements) - Hidden on mobile for performance */}
      <motion.div animate={{ y: [0, -40, 0], x: [0, 50, 0], scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="hidden md:block absolute top-[10%] left-[20%] w-32 h-32 rounded-full bg-fuchsia-500/40 blur-3xl pointer-events-none" />
      <motion.div animate={{ y: [0, 60, 0], x: [0, -40, 0], scale: [1, 2, 1], opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="hidden md:block absolute top-[30%] right-[10%] w-48 h-48 rounded-full bg-cyan-400/40 blur-3xl pointer-events-none" />
      <motion.div animate={{ y: [0, -80, 0], x: [0, 60, 0], scale: [1, 1.8, 1], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="hidden md:block absolute bottom-[15%] left-[30%] w-40 h-40 rounded-full bg-purple-600/40 blur-3xl pointer-events-none" />
      <motion.div animate={{ y: [0, 50, 0], x: [0, -50, 0], scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="hidden md:block absolute bottom-[30%] right-[25%] w-36 h-36 rounded-full bg-lime-400/30 blur-3xl pointer-events-none" />
      
      {/* Mini Laser Beams (Diagonal lines) */}
      <motion.div animate={{ opacity: [0, 0.5, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent -rotate-12 transform origin-left" />
      <motion.div animate={{ opacity: [0, 0.5, 0] }} transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 1 }} className="absolute top-3/4 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent -rotate-12 transform origin-right" />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-6 pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto z-10">
        
        {/* Left Column: Text & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, type: "spring" }}
          className="w-full md:w-[55%] flex flex-col justify-center text-left"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 bg-white/10 text-white rounded-full px-5 py-2 mb-8 shadow-[0_0_15px_rgba(217,70,239,0.5)] border border-fuchsia-500/50 cursor-pointer self-start backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Weekend Vibes — Thu to Sun</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 text-white leading-tight tracking-tight drop-shadow-lg">
            The Ultimate <br/>
            <span className="relative inline-block">
              <motion.span 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-fuchsia-500 relative z-10"
              >
                Weekend Vibe.
              </motion.span>
              <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 1 }} className="absolute bottom-2 left-0 right-0 h-4 bg-fuchsia-500/30 -z-10 origin-left blur-sm" />
            </span>
          </h1>
          
          <p className="text-xl text-white/80 mb-12 max-w-lg leading-relaxed font-medium">
            Elevate your Thursday to Sunday. Signature cocktails, an electric atmosphere, and the most authentic Indian sharing platters at Masakali London.
          </p>

          <div className="flex gap-6 mt-4">
            <PulseCTA href="#reserve" className="group relative bg-black text-white font-bold px-10 py-5 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.5)] border border-cyan-400/50 hover:shadow-[0_0_50px_rgba(217,70,239,0.8)] hover:border-fuchsia-500 transition-all duration-300">
              <span className="relative z-10 flex items-center">
                Secure Your Weekend Table <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-80"></div>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white font-bold z-10">
                Secure Your Weekend Table <ArrowRight className="w-5 h-5 ml-2 translate-x-1" />
              </span>
            </PulseCTA>
          </div>
          
          <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-fuchsia-300">
            <span className="flex items-center"><motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity }} className="w-2 h-2 rounded-full bg-cyan-400 mr-2 shadow-[0_0_8px_rgba(34,211,238,1)]"></motion.div> Limited tables available for this weekend</span>
          </div>
        </motion.div>

        {/* Right Column: Spinning Food (Disco Edition) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-[45%] relative flex justify-center items-center mt-12 md:mt-0"
        >
          <div className="w-full max-w-[500px] aspect-square relative flex items-center justify-center p-8 md:p-12">
              {/* Outer Neon Ring */}
              <motion.div 
                animate={{ rotate: 360, borderColor: ['rgba(34,211,238,0.8)', 'rgba(217,70,239,0.8)', 'rgba(163,230,53,0.8)', 'rgba(34,211,238,0.8)'] }} 
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-dashed pointer-events-none shadow-[0_0_50px_rgba(217,70,239,0.6)]"
              ></motion.div>
              {/* Inner Neon Ring */}
              <motion.div 
                animate={{ rotate: -360, borderColor: ['rgba(217,70,239,0.8)', 'rgba(34,211,238,0.8)', 'rgba(217,70,239,0.8)'] }} 
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute inset-6 rounded-full border-2 border-dotted pointer-events-none"
              ></motion.div>
              
              {/* Elemental Energy Aura */}
              <motion.div 
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500 via-fuchsia-500 to-lime-500 blur-3xl -z-10 mix-blend-screen"
              ></motion.div>

              {/* Beautiful Food Galaxy Animation */}
              <div className="w-full h-full relative z-10 flex items-center justify-center">
                
                {/* Central Floating Platter Slider */}
                <motion.div 
                  animate={{ y: [-15, 15, -15], rotate: [0, 5, -5, 0] }} 
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} 
                  className="w-[70%] h-[70%] relative z-20 filter drop-shadow-[0_0_30px_rgba(217,70,239,0.6)] rounded-full overflow-hidden"
                >
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      {/* We scale the image up slightly to push the baked-in black borders out of the circular clipping mask */}
                      <Image src={images[currentImageIndex]} alt="Weekend Platter" fill className="object-cover scale-[1.15]" priority />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {/* Orbiting Culinary Icons */}
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  className="absolute inset-0 z-30"
                >
                  <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-cyan-500/40 md:bg-cyan-500/20 md:backdrop-blur-md rounded-full border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]">
                    <Martini className="w-6 h-6 text-cyan-300" />
                  </motion.div>
                  <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-3 bg-fuchsia-500/40 md:bg-fuchsia-500/20 md:backdrop-blur-md rounded-full border border-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.8)]">
                    <UtensilsCrossed className="w-6 h-6 text-fuchsia-300" />
                  </motion.div>
                  <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 p-3 bg-lime-500/40 md:bg-lime-500/20 md:backdrop-blur-md rounded-full border border-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.8)]">
                    <Clock className="w-6 h-6 text-lime-300" />
                  </motion.div>
                  <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 p-3 bg-purple-500/40 md:bg-purple-500/20 md:backdrop-blur-md rounded-full border border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]">
                    <Star className="w-6 h-6 text-purple-300" />
                  </motion.div>
                </motion.div>

                {/* Pulsing Energy Background */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-fuchsia-500 to-lime-500 rounded-full blur-xl md:blur-2xl -z-10 mix-blend-normal md:mix-blend-screen opacity-50 md:opacity-100"
                ></motion.div>

              </div>
            </div>
        </motion.div>
      </section>

      {/* --- WEEKEND VIBE SHOWCASE --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-20">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Why Weekends Belong To Masakali</h2>
        
        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 text-left relative overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="snap-center shrink-0 w-[85vw] md:w-auto group bg-[#11051F] md:bg-black/40 p-12 rounded-[3rem] shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all border border-cyan-500/30 hover:border-cyan-400 relative overflow-hidden md:backdrop-blur-xl"
          >
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              <Music className="w-8 h-8 text-cyan-300" />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-4 text-white group-hover:text-cyan-300 transition-colors drop-shadow-md">Electric Atmosphere</h3>
            <p className="text-cyan-50 text-base leading-relaxed">Low lighting, curated playlists, and a buzzing dining room perfect for kicking off your Friday or Saturday night.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="snap-center shrink-0 w-[85vw] md:w-auto group bg-[#11051F] md:bg-black/40 p-12 rounded-[3rem] shadow-[0_0_20px_rgba(217,70,239,0.1)] hover:shadow-[0_0_30px_rgba(217,70,239,0.3)] transition-all border border-fuchsia-500/30 hover:border-fuchsia-400 relative overflow-hidden md:backdrop-blur-xl"
          >
            <div className="w-16 h-16 bg-fuchsia-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-fuchsia-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(217,70,239,0.5)]">
              <Martini className="w-8 h-8 text-fuchsia-300" />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-4 text-white group-hover:text-fuchsia-300 transition-colors drop-shadow-md">Signature Mixology</h3>
            <p className="text-fuchsia-50 text-base leading-relaxed">Spiced margaritas, gin infusions, and premium spirits tailored to perfectly complement Indian spices.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="snap-center shrink-0 w-[85vw] md:w-auto group bg-[#11051F] md:bg-black/40 p-12 rounded-[3rem] shadow-[0_0_20px_rgba(163,230,53,0.1)] hover:shadow-[0_0_30px_rgba(163,230,53,0.3)] transition-all border border-lime-500/30 hover:border-lime-400 relative overflow-hidden md:backdrop-blur-xl"
          >
            <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-lime-500/40 transition-all duration-300 shadow-[0_0_15px_rgba(163,230,53,0.5)]">
              <UtensilsCrossed className="w-8 h-8 text-lime-300" />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-4 text-white group-hover:text-lime-300 transition-colors drop-shadow-md">Late Night Dining</h3>
            <p className="text-lime-50 text-base leading-relaxed">Because the best weekends don't end early. Enjoy our full premium menu late into the evening.</p>
          </motion.div>
          
        </div>
      </div>

      {/* --- SOCIAL PROOF --- */}
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent relative z-10 border-y border-fuchsia-500/20 mt-12 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            {[1,2,3,4,5].map((i, index) => (
              <motion.div key={i} animate={{ y: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity, delay: index * 0.1 }}>
                <Star className="w-8 h-8 fill-cyan-400 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] mx-1" />
              </motion.div>
            ))}
          </div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-white drop-shadow-lg">"The only place we go for Friday nights out."</h3>
          <p className="text-cyan-100 italic text-lg mb-6">"Unbelievable vibe. The cocktails are insanely good, the music is perfectly pitched so you can still talk, and the food speaks for itself. Book well in advance!"</p>
          <p className="font-bold text-sm uppercase tracking-widest text-fuchsia-300">— Marcus T., Google Reviews</p>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">Don't Miss Out</h2>
        <p className="text-xl text-fuchsia-100 mb-10">Our weekend tables are our most popular. Secure your reservation now to guarantee your spot.</p>
        <Link href="#reserve" className="inline-flex items-center bg-transparent border-2 border-cyan-400 text-cyan-300 font-bold text-lg px-12 py-5 rounded-2xl hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] transition-all duration-300 group relative overflow-hidden">
          <span className="relative z-10 flex items-center">
            Book Your Weekend <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </span>
          {/* Strobe background effect on hover */}
          <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.1, repeat: Infinity }} className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 pointer-events-none" />
        </Link>
      </section>
    </main>
  )
}
