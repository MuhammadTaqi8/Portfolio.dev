'use client'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import StatChip from '@/components/ui/StatChip'
import HeroNetwork from './HeroNetwork'
import HeroFloatingIcons from './HeroFloatingIcons'

const stats = [
  '2+ Years Experience',
  '4 Live SaaS Platforms',
  '100+ API Endpoints',
  'MSc AI & Data Science',
]

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}

const fadeUpItem = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, stiffness: 300, damping: 24 },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 text-center overflow-hidden">

      {/* Animated network graph — background layer */}
      <HeroNetwork />

      {/* Floating tech icon chips — scattered around */}
      <HeroFloatingIcons />

      {/* Main content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="max-w-4xl w-full relative z-10"
      >
        {/* Label */}
        <motion.div variants={fadeUpItem} className="inline-flex items-center gap-2 mb-6">
          <span
            className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              fontFamily: 'var(--font-jetbrains, monospace)',
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
              border: '1px solid var(--accent-glow)',
            }}
          >
            Full Stack Developer
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUpItem}
          className="font-black mb-6"
          style={{
            fontFamily: 'var(--font-jakarta, sans-serif)',
            fontSize: 'var(--text-hero)',
            lineHeight: '1.08',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
          }}
        >
          Building systems
          <br />
          that actually{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ship.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUpItem}
          className="mb-10 max-w-xl mx-auto"
          style={{
            fontFamily: 'var(--font-dm, sans-serif)',
            fontSize: 'var(--text-lg)',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
          }}
        >
          PHP · Laravel · React · Next.js · AWS
          <br />
          <span
            style={{
              color: 'var(--text-muted)',
              fontSize: 'var(--text-base)',
            }}
          >
            Birmingham, UK — available for remote &amp; hybrid roles.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUpItem}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white"
            style={{
              background: 'var(--accent)',
              boxShadow: '0 4px 20px rgba(37,99,235,0.32)',
              fontFamily: 'var(--font-jakarta, sans-serif)',
            }}
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold glass-card"
            style={{
              color: 'var(--accent)',
              border: '1px solid rgba(37,99,235,0.25)',
              fontFamily: 'var(--font-dm, sans-serif)',
            }}
          >
            Get In Touch <ArrowRight size={15} />
          </Link>
        </motion.div>

        {/* Stat chips */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {stats.map((stat, i) => (
            <StatChip key={stat} label={stat} delay={0.6 + i * 0.08} />
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} style={{ color: 'var(--text-muted)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
