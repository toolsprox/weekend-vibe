'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Martini, Music, Star, Clock, UtensilsCrossed } from 'lucide-react'
import PulseCTA from '@/components/shared/PulseCTA'

export default function WeekendVibePage() {

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0F0F0F] relative overflow-hidden font-sans pt-32 pb-16">
      
      {/* Decorative floating elements */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[10%] w-6 h-6 rounded-full bg-orange-300/30 blur-sm pointer-events-none" />
      <motion.div animate={{ y: [0, 30, 0], scale: [1, 1.5, 1] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[40%] right-[15%] w-12 h-12 rounded-full bg-rose-300/20 blur-md pointer-events-none" />
      <motion.div animate={{ y: [0, -40, 0], x: [0, 20, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[20%] left-[20%] w-32 h-32 rounded-full bg-blue-300/20 blur-xl pointer-events-none" />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-6 pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto z-10">
        
        {/* Left Column: Text & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, type: "spring" }}
          className="w-full md:w-[55%] flex flex-col justify-center text-left"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 bg-white text-gray-800 rounded-full px-5 py-2 mb-8 shadow-sm border border-gray-100 cursor-pointer self-start backdrop-blur-sm"
          >
            <Martini className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest">London's Weekend Vibe</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 text-[#0F0F0F] leading-tight tracking-tight">
            The Ultimate <br/>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 relative z-10">Weekend Vibe.</span>
              <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 1 }} className="absolute bottom-2 left-0 right-0 h-4 bg-orange-400/20 -z-10 origin-left" />
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-lg leading-relaxed">
            Elevate your Friday nights and weekend brunches. Signature cocktails, an electric atmosphere, and the most authentic Indian sharing platters in London.
          </p>

          <div className="flex gap-6 mt-4">
            <PulseCTA href="https://www.opentable.co.uk/r/masakali-restaurant-euston-london?corrid=41f8fc28-8609-4b5f-8750-347046547a0c&avt=eyJ2IjozLCJtIjowLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2026-06-09T19%3A00%3A00" target="_blank" rel="noopener noreferrer" className="group relative bg-[#0F0F0F] text-white font-bold px-10 py-5 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_20px_40px_rgba(251,146,60,0.3)] transition-all">
              <span className="relative z-10 flex items-center">
                Secure Your Weekend Table <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-rose-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white font-bold z-10">
                Secure Your Weekend Table <ArrowRight className="w-5 h-5 ml-2 translate-x-1" />
              </span>
            </PulseCTA>
          </div>
          
          <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-gray-500">
            <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-orange-400 mr-2 animate-pulse"></div> Limited tables available for this weekend</span>
          </div>
        </motion.div>

        {/* Right Column: Spinning Food */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-[45%] relative flex justify-center items-center mt-12 md:mt-0"
        >
          <div className="w-full max-w-[500px] aspect-square relative flex items-center justify-center p-8 md:p-12">
              {/* Subtle Dashed Ring */}
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
                className="absolute inset-0 md:inset-4 rounded-full border-[1.5px] border-dashed border-gray-200 pointer-events-none"
              ></motion.div>
              
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 45, ease: "linear" }} 
                className="w-full h-full relative z-10 origin-center filter drop-shadow-2xl rounded-full"
              >
                <Image src="/images/user_upload_1.png" alt="Signature Weekend Platter" fill className="object-contain" priority />
              </motion.div>
            </div>
        </motion.div>
      </section>

      {/* --- WEEKEND VIBE SHOWCASE --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-20">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16 text-[#0F0F0F]">Why Weekends Belong To Masakali</h2>
        
        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 text-left relative overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="snap-center shrink-0 w-[85vw] md:w-auto group bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden backdrop-blur-sm"
          >
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-100 transition-all duration-300">
              <Music className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-4 group-hover:text-orange-500 transition-colors text-[#0F0F0F]">Electric Atmosphere</h3>
            <p className="text-gray-600 text-base leading-relaxed">Low lighting, curated playlists, and a buzzing dining room perfect for kicking off your Friday or Saturday night.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="snap-center shrink-0 w-[85vw] md:w-auto group bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden backdrop-blur-sm"
          >
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-100 transition-all duration-300">
              <Martini className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-4 group-hover:text-orange-500 transition-colors text-[#0F0F0F]">Signature Mixology</h3>
            <p className="text-gray-600 text-base leading-relaxed">Spiced margaritas, gin infusions, and premium spirits tailored to perfectly complement Indian spices.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="snap-center shrink-0 w-[85vw] md:w-auto group bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden backdrop-blur-sm"
          >
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-100 transition-all duration-300">
              <UtensilsCrossed className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-4 group-hover:text-orange-500 transition-colors text-[#0F0F0F]">Late Night Dining</h3>
            <p className="text-gray-600 text-base leading-relaxed">Because the best weekends don't end early. Enjoy our full premium menu late into the evening.</p>
          </motion.div>
          
        </div>
      </div>

      {/* --- SOCIAL PROOF --- */}
      <section className="py-20 bg-white relative z-10 border-y border-gray-100 shadow-sm mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-orange-400 text-orange-400" />)}
          </div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-[#0F0F0F]">"The only place we go for Friday nights out."</h3>
          <p className="text-gray-600 italic text-lg mb-4">"Unbelievable vibe. The cocktails are insanely good, the music is perfectly pitched so you can still talk, and the food speaks for itself. Book well in advance!"</p>
          <p className="font-bold text-sm uppercase tracking-widest text-gray-400">— Marcus T., Google Reviews</p>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#0F0F0F]">Don't Miss Out</h2>
        <p className="text-xl text-gray-600 mb-10">Our weekend tables are our most popular. Secure your reservation now to guarantee your spot.</p>
        <Link href="https://www.opentable.co.uk/r/masakali-restaurant-euston-london?corrid=41f8fc28-8609-4b5f-8750-347046547a0c&avt=eyJ2IjozLCJtIjowLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2026-06-09T19%3A00%3A00" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-orange-400 to-rose-400 text-white font-bold text-lg px-12 py-5 rounded-2xl hover:opacity-90 transition-all shadow-xl group">
          Book Your Weekend <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </main>
  )
}
