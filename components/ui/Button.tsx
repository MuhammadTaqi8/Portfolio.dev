'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost' | 'outline'
  children: React.ReactNode
  external?: boolean
  download?: boolean | string
  className?: string
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  children,
  external,
  download,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-semibold rounded-full px-6 py-3 text-sm transition-all cursor-pointer select-none'
  const variants = {
    primary: 'text-white',
    ghost: 'hover:bg-white/40',
    outline: 'glass-card',
  }

  const primaryStyle =
    variant === 'primary'
      ? {
          background: 'var(--accent)',
          boxShadow: '0 4px 20px rgba(37,99,235,0.30)',
          color: 'white',
          fontFamily: 'var(--font-jakarta, sans-serif)',
        }
      : variant === 'outline'
        ? {
            border: '1px solid var(--accent)',
            color: 'var(--accent)',
            fontFamily: 'var(--font-dm, sans-serif)',
          }
        : {
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-dm, sans-serif)',
          }

  const cls = `${base} ${variants[variant]} ${className}`
  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 20 },
  }

  if (href) {
    if (external || download) {
      return (
        <motion.a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          download={download}
          className={cls}
          style={primaryStyle}
          {...motionProps}
        >
          {children}
        </motion.a>
      )
    }
    return (
      <motion.div {...motionProps}>
        <Link href={href} className={cls} style={primaryStyle}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button onClick={onClick} className={cls} style={primaryStyle} {...motionProps}>
      {children}
    </motion.button>
  )
}
