'use client'
import { motion } from 'framer-motion'

// Inline SVG tech icons — brand-accurate shapes
function PhpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#8B5CF6" opacity="0.15" />
      <text x="4" y="22" fontFamily="monospace" fontSize="13" fontWeight="700" fill="#8B5CF6">php</text>
    </svg>
  )
}

function LaravelIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#EF4444" opacity="0.15" />
      <path d="M8 8 L20 8 L24 16 L12 16 Z" fill="#EF4444" opacity="0.8" />
      <path d="M12 16 L24 16 L20 24 L8 24 Z" fill="#EF4444" opacity="0.5" />
    </svg>
  )
}

function ReactIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#06B6D4" opacity="0.15" />
      <ellipse cx="16" cy="16" rx="4" ry="4" fill="#06B6D4" />
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#06B6D4" strokeWidth="1.5" fill="none" transform="rotate(0)" />
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#06B6D4" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#06B6D4" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)" />
    </svg>
  )
}

function NextjsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#374151" opacity="0.15" />
      <circle cx="16" cy="16" r="8" fill="#374151" opacity="0.7" />
      <path d="M13 12 L13 20 M13 12 L20 20 M20 12 L20 20" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function AwsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#F59E0B" opacity="0.15" />
      <path d="M6 20 Q16 24 26 20" stroke="#F59E0B" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M10 20 L10 14 Q16 10 22 14 L22 20" stroke="#F59E0B" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TypeScriptIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#3B82F6" />
      <rect width="32" height="32" rx="8" fill="#3B82F6" opacity="0.9" />
      <text x="4" y="22" fontFamily="monospace" fontSize="13" fontWeight="800" fill="white">TS</text>
    </svg>
  )
}

function MySQLIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#0EA5E9" opacity="0.15" />
      <ellipse cx="16" cy="11" rx="8" ry="4" stroke="#0EA5E9" strokeWidth="1.5" fill="none" />
      <path d="M8 11 L8 21 Q8 25 16 25 Q24 25 24 21 L24 11" stroke="#0EA5E9" strokeWidth="1.5" fill="none" />
      <path d="M8 16 Q12 19 16 18 Q20 17 24 16" stroke="#0EA5E9" strokeWidth="1" fill="none" />
    </svg>
  )
}

function PrismaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#1E293B" opacity="0.15" />
      <path d="M16 5 L26 24 L6 19 Z" stroke="#475569" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M16 5 L16 24" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const floatingChips = [
  {
    id: 'php',
    label: 'PHP',
    Icon: PhpIcon,
    color: '#8B5CF6',
    position: { top: '15%', left: '6%' },
    delay: 0,
    duration: 5.2,
    floatY: [-8, 4, -8],
    floatX: [0, 4, 0],
  },
  {
    id: 'laravel',
    label: 'Laravel',
    Icon: LaravelIcon,
    color: '#EF4444',
    position: { top: '28%', left: '3%' },
    delay: 0.4,
    duration: 6.1,
    floatY: [4, -10, 4],
    floatX: [0, -3, 0],
  },
  {
    id: 'react',
    label: 'React',
    Icon: ReactIcon,
    color: '#06B6D4',
    position: { top: '12%', right: '7%' },
    delay: 0.8,
    duration: 5.8,
    floatY: [-6, 8, -6],
    floatX: [0, -5, 0],
  },
  {
    id: 'nextjs',
    label: 'Next.js',
    Icon: NextjsIcon,
    color: '#374151',
    position: { top: '30%', right: '4%' },
    delay: 1.2,
    duration: 7.0,
    floatY: [6, -8, 6],
    floatX: [0, 4, 0],
  },
  {
    id: 'aws',
    label: 'AWS',
    Icon: AwsIcon,
    color: '#F59E0B',
    position: { bottom: '28%', left: '5%' },
    delay: 0.6,
    duration: 6.4,
    floatY: [-10, 6, -10],
    floatX: [0, 5, 0],
  },
  {
    id: 'ts',
    label: 'TypeScript',
    Icon: TypeScriptIcon,
    color: '#3B82F6',
    position: { bottom: '20%', right: '6%' },
    delay: 1.0,
    duration: 5.5,
    floatY: [8, -6, 8],
    floatX: [0, -4, 0],
  },
  {
    id: 'mysql',
    label: 'MySQL',
    Icon: MySQLIcon,
    color: '#0EA5E9',
    position: { bottom: '36%', left: '2%' },
    delay: 1.4,
    duration: 6.8,
    floatY: [-5, 9, -5],
    floatX: [0, 3, 0],
  },
  {
    id: 'prisma',
    label: 'Prisma',
    Icon: PrismaIcon,
    color: '#475569',
    position: { bottom: '32%', right: '3%' },
    delay: 0.2,
    duration: 7.2,
    floatY: [7, -5, 7],
    floatX: [0, -3, 0],
  },
]

export default function HeroFloatingIcons() {
  return (
    <>
      {floatingChips.map((chip) => (
        <motion.div
          key={chip.id}
          className="absolute hidden lg:flex items-center gap-2 px-3 py-2 pointer-events-none select-none"
          style={{
            ...chip.position,
            background: 'rgba(255,255,255,0.55)',
            backdropFilter: 'blur(16px) saturate(1.8)',
            WebkitBackdropFilter: 'blur(16px) saturate(1.8)',
            border: '1px solid rgba(255,255,255,0.85)',
            borderRadius: 14,
            boxShadow: `0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.6)`,
            zIndex: 2,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: chip.floatY,
            x: chip.floatX,
          }}
          transition={{
            opacity: { delay: chip.delay + 0.8, duration: 0.6 },
            scale: { delay: chip.delay + 0.8, duration: 0.6, type: 'spring', stiffness: 300, damping: 20 },
            y: {
              delay: chip.delay + 0.8,
              duration: chip.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            x: {
              delay: chip.delay + 0.8,
              duration: chip.duration * 1.3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          {/* Top highlight line — glass effect */}
          <div
            style={{
              position: 'absolute',
              top: 0, left: '15%', right: '15%',
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)',
              borderRadius: 1,
            }}
          />
          <chip.Icon />
          <span
            style={{
              fontFamily: 'var(--font-jetbrains, monospace)',
              fontSize: '11px',
              fontWeight: 600,
              color: chip.color,
              letterSpacing: '0.04em',
            }}
          >
            {chip.label}
          </span>
        </motion.div>
      ))}
    </>
  )
}
