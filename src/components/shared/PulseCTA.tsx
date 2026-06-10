'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

export default function PulseCTA({ href, children, className = "", target, rel }: { href: string, children: React.ReactNode, className?: string, target?: string, rel?: string }) {
  return (
    <div className="relative inline-block">
      {/* Clean Box Shadow Ripple (Prevents border radius distortion) */}
      <motion.div
        animate={{ 
          boxShadow: [
            "0 0 0 0px rgba(124, 255, 1, 0.6)",
            "0 0 0 25px rgba(124, 255, 1, 0)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "circOut" }}
        className="absolute inset-0 rounded-2xl z-0 pointer-events-none"
      />
      <motion.div
        animate={{ 
          boxShadow: [
            "0 0 0 0px rgba(124, 255, 1, 0.6)",
            "0 0 0 25px rgba(124, 255, 1, 0)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "circOut", delay: 1 }}
        className="absolute inset-0 rounded-2xl z-0 pointer-events-none"
      />
      
      {/* Actual Button with Tactile Squish on Tap */}
      <motion.div whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
        {href.startsWith('#') ? (
          <a href={href} className={`relative z-10 block ${className}`}>
            {children}
          </a>
        ) : (
          <Link href={href} target={target} rel={rel} className={`relative z-10 block ${className}`}>
            {children}
          </Link>
        )}
      </motion.div>
    </div>
  )
}

