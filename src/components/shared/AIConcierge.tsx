'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Sparkles, CalendarDays, Utensils, Info } from 'lucide-react'
import Link from 'next/link'

type Message = {
  id: string
  text: string
  sender: 'user' | 'ai'
}

const suggestedPrompts = [
  { text: "What's your best dish?", icon: <Utensils className="w-4 h-4" /> },
  { text: "How do I book for a birthday?", icon: <Sparkles className="w-4 h-4" /> },
  { text: "Is there parking available?", icon: <Info className="w-4 h-4" /> },
  { text: "Can I book a table?", icon: <CalendarDays className="w-4 h-4" /> },
]

export default function AIConcierge() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Hello! I'm your Masakali Concierge. How can I help you plan your evening today?", sender: 'ai' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = { id: Date.now().toString(), text, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI response focused on conversion
    const thinkDelay = Math.random() * 500 + 400; // 400-900ms thinking time
    
    setTimeout(() => {
      let aiResponse = "I'd love to help! To ensure you get the best experience, I highly recommend securing a table first."
      const lowerText = text.toLowerCase()

      // Enhanced Knowledge Base with Personality
      if (lowerText.includes('time') || lowerText.includes('open') || lowerText.includes('hour')) {
        aiResponse = "We're open for dinner Monday to Thursday (5:00 PM - 10:30 PM), and all day Friday to Sunday (12:00 PM - 11:00 PM). It gets quite busy on weekends, so should I help you grab a table?"
      } else if (lowerText.includes('menu') || lowerText.includes('food') || lowerText.includes('dish') || lowerText.includes('special')) {
        aiResponse = "Oh, you have to try our 24-hour slow-cooked Nalli Nihari! It literally melts off the bone. We also have a famous Truffle Cheese Naan. Shall I check table availability so you can taste them?"
      } else if (lowerText.includes('vegan') || lowerText.includes('vegetarian')) {
        aiResponse = "Absolutely! Our Smoked Dal Makhani and Tandoori Soya Chaap are legendary among our vegetarian guests. Would you like to reserve a spot?"
      } else if (lowerText.includes('halal') || lowerText.includes('meat')) {
        aiResponse = "Yes, 100%! All our meat is strictly certified Halal, and we source only the absolute highest quality. Let's get you booked in!"
      } else if (lowerText.includes('dress') || lowerText.includes('wear')) {
        aiResponse = "Our dress code is smart casual. Dress to impress, but most importantly, be comfortable! Can I help you with a reservation?"
      } else if (lowerText.includes('location') || lowerText.includes('where') || lowerText.includes('address')) {
        aiResponse = "We are located at 48 Stanhope St, London (NW1 3EX), right in the heart of the city. There's a handy 'Get Directions' button on our page!"
      } else if (lowerText.includes('park')) {
        aiResponse = "Good newsâ€”there is free street parking right near the restaurant after 6:30 PM! Shall I help you book a table for tonight?"
      } else if (lowerText.includes('birthday') || lowerText.includes('celebrat') || lowerText.includes('anniversary')) {
        aiResponse = "I love a good celebration! ðŸŽ‰ If you book now and mention it in the notes, our chef will prepare a complimentary signature dessert with a sparkler for you. Let's get that reserved!"
      } else if (lowerText.includes('book') || lowerText.includes('reserv') || lowerText.includes('table')) {
        aiResponse = "Perfect! You can reserve your table instantly through OpenTable by clicking the green button right below this chat."
      } else if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
        aiResponse = "Hello there! ðŸ‘‹ I am the Masakali AI Concierge. I know everything about our menu, our chefs, and our availability. What can I help you with today?"
      } else {
        aiResponse = "That's a fantastic question. The absolute best way to experience everything Masakali has to offer is to join us for a meal. Shall we secure your spot?"
      }

      // Dynamic typing delay based on message length (feels more human)
      const typingDelay = aiResponse.length * 15; 

      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now().toString(), text: aiResponse, sender: 'ai' }])
        setIsTyping(false)
      }, typingDelay)

    }, thinkDelay)
  }

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#0F0F0F] text-[#7CFF01] rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.2)] z-50 border border-[#7CFF01]/30 hover:bg-[#1a1a1a] transition-colors"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#5CB800] rounded-full animate-pulse border border-[#0F0F0F]"></span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[350px] bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-50 overflow-hidden border border-black/5 flex flex-col"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            {/* Header */}
            <div className="bg-[#0F0F0F] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7CFF01]/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#7CFF01]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Masakali Concierge</h4>
                  <p className="text-[#7CFF01] text-[10px] flex items-center gap-1 uppercase tracking-widest font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5CB800]"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#FDFBF7] flex flex-col gap-4 min-h-[300px] max-h-[400px]">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${msg.sender === 'user' ? 'bg-[#0F0F0F] text-white rounded-tr-sm' : 'bg-white border border-black/5 text-[#0F0F0F] rounded-tl-sm shadow-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-black/5 rounded-2xl rounded-tl-sm px-5 py-4 flex gap-1.5 shadow-sm items-center h-[42px]">
                    <span className="w-2 h-2 bg-[#5CB800] rounded-full animate-bounce" style={{ animationDelay: '0ms', animationDuration: '1s' }}></span>
                    <span className="w-2 h-2 bg-[#5CB800] rounded-full animate-bounce" style={{ animationDelay: '150ms', animationDuration: '1s' }}></span>
                    <span className="w-2 h-2 bg-[#5CB800] rounded-full animate-bounce" style={{ animationDelay: '300ms', animationDuration: '1s' }}></span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Prompts */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 bg-[#FDFBF7]">
                <div className="flex flex-wrap gap-2">
                  {suggestedPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(prompt.text)}
                      className="text-[11px] bg-white border border-black/10 px-3 py-1.5 rounded-full text-[#0F0F0F] hover:border-[#7CFF01] hover:bg-[#7CFF01]/5 transition-colors flex items-center gap-1 font-semibold"
                    >
                      {prompt.icon} {prompt.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Booking CTA (Always visible when AI mentions booking) */}
            {messages.length > 1 && !isTyping && (
               <div className="px-4 py-2 bg-[#FDFBF7]">
                 <a href="https://www.opentable.co.uk/r/masakali-restaurant-euston-london?corrid=41f8fc28-8609-4b5f-8750-347046547a0c&avt=eyJ2IjozLCJtIjowLCJwIjowLCJzIjowLCJuIjowfQ&p=2&sd=2026-06-09T19%3A00%3A00" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="w-full bg-[#7CFF01] text-black font-bold py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-[#68d600] transition-colors text-sm shadow-sm">
                    <CalendarDays className="w-4 h-4"/> Book a Table Now
                 </a>
               </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-black/5">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(input) }}
                className="relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-[#F5F5F5] text-[#0F0F0F] placeholder-black/40 border border-black/5 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-[#7CFF01]/50 focus:ring-1 focus:ring-[#7CFF01]/50"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0F0F0F] text-white rounded-full flex items-center justify-center hover:bg-[#7CFF01] hover:text-black transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

