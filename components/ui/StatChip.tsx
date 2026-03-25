'use client'
import { motion } from 'framer-motion'

interface StatChipProps {
  label: string
  delay?: number
}

export default function StatChip({ label, delay = 0 }: StatChipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24, delay }}
      className="glass-card px-5 py-2.5"
      style={{
        fontFamily: 'var(--font-jetbrains, monospace)',
        fontSize: 'var(--text-sm)',
        fontWeight: 500,
        color: 'var(--text-secondary)',
        border: '1px solid rgba(37, 99, 235, 0.18)',
        background: 'rgba(255,255,255,0.65)',
      }}
    >
      {label}
    </motion.div>
  )
}
