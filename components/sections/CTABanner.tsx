'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="px-6 pb-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div
          className="glass-card px-8 py-16 text-center"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.09) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 100% 100%, rgba(124,58,237,0.06) 0%, transparent 70%)',
          }}
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ fontFamily: 'var(--font-jetbrains, monospace)', color: 'var(--accent)' }}
          >
            Available Now
          </p>
          <h2
            className="font-black mb-3"
            style={{
              fontFamily: 'var(--font-jakarta, sans-serif)',
              fontSize: 'var(--text-2xl)',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            Currently open to Full Stack Developer roles
          </h2>
          <p
            className="mb-8 text-sm"
            style={{
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-dm, sans-serif)',
            }}
          >
            Remote · Hybrid · Birmingham · UK Relocation
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white"
              style={{
                background: 'var(--accent)',
                boxShadow: '0 4px 20px rgba(37,99,235,0.35)',
                fontFamily: 'var(--font-jakarta, sans-serif)',
              }}
            >
              Let&apos;s Talk <ArrowRight size={15} />
            </Link>
            <a
              href="/files/taqi_fullstack.dev.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold glass-card"
              style={{
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-dm, sans-serif)',
              }}
            >
              <Download size={15} />
              Download CV
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
