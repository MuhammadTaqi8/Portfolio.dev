'use client'
import { motion } from 'framer-motion'
import {
  type LucideProps,
  ExternalLink,
  ArrowLeft,
  Layers,
  Server,
  RefreshCw,
  ShoppingCart,
  Shield,
  Cloud,
  Key,
  GitBranch,
  Brain,
  Lock,
  Activity,
  Link2,
  TrendingUp,
  Zap,
  RotateCcw,
  EyeOff,
  Trash2,
  Share2,
  Camera,
  CreditCard,
  Globe,
} from 'lucide-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import Link from 'next/link'
import TechBadge from '@/components/ui/TechBadge'
import type { Project } from '@/data/projects'

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Server,
  RefreshCw,
  ShoppingCart,
  Shield,
  Cloud,
  Key,
  GitBranch,
  Brain,
  Lock,
  Activity,
  LinkIcon: Link2,
  TrendingUp,
  Zap,
  RotateCcw,
  EyeOff,
  Trash2,
  Share2,
  Instagram: Camera,
  CreditCard,
  Globe,
}

interface Props {
  project: Project
  prev: Project | null
  next: Project | null
}

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, stiffness: 300, damping: 24 },
  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export default function ProjectCaseStudy({ project, prev, next }: Props) {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="mb-16">
          <motion.div variants={fadeUp} className="mb-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              style={{
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-dm, sans-serif)',
              }}
            >
              <ArrowLeft size={14} /> All Projects
            </Link>
          </motion.div>

          <motion.span
            variants={fadeUp}
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ fontFamily: 'var(--font-jetbrains, monospace)', color: 'var(--accent)' }}
          >
            {project.number}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-black mb-3"
            style={{
              fontFamily: 'var(--font-jakarta, sans-serif)',
              fontSize: 'var(--text-hero)',
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              lineHeight: '1.08',
            }}
          >
            {project.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-medium mb-5"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-dm, sans-serif)',
            }}
          >
            {project.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <TechBadge key={t.key} name={t.name} techKey={t.key} />
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold glass-card"
              style={{
                color: 'var(--accent)',
                border: '1px solid rgba(37,99,235,0.20)',
                fontFamily: 'var(--font-dm, sans-serif)',
              }}
            >
              <ExternalLink size={14} />
              {project.liveUrl.replace('https://', '')}
            </a>
          </motion.div>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="glass-card p-8 mb-6"
          style={{
            backgroundImage: `radial-gradient(ellipse 60% 40% at 0% 0%, ${project.accentColor} 0%, transparent 60%)`,
          }}
        >
          <h2
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ fontFamily: 'var(--font-jetbrains, monospace)', color: 'var(--accent)' }}
          >
            Overview
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm, sans-serif)',
              fontSize: 'var(--text-base)',
              color: 'var(--text-secondary)',
              lineHeight: '1.75',
            }}
          >
            {project.overview}
          </p>
        </motion.div>

        {/* Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="glass-card p-8 mb-6"
        >
          <h2
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ fontFamily: 'var(--font-jetbrains, monospace)', color: 'var(--accent)' }}
          >
            The Challenge
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm, sans-serif)',
              fontSize: 'var(--text-base)',
              color: 'var(--text-secondary)',
              lineHeight: '1.75',
            }}
          >
            {project.challenge}
          </p>
        </motion.div>

        {/* Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="glass-card p-8 mb-14"
        >
          <h2
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ fontFamily: 'var(--font-jetbrains, monospace)', color: 'var(--accent)' }}
          >
            Architecture
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm, sans-serif)',
              fontSize: 'var(--text-base)',
              color: 'var(--text-secondary)',
              lineHeight: '1.75',
            }}
          >
            {project.architecture}
          </p>
        </motion.div>

        {/* Technical Highlights */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="font-black mb-8"
          style={{
            fontFamily: 'var(--font-jakarta, sans-serif)',
            fontSize: 'var(--text-2xl)',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
          }}
        >
          Technical Highlights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          {project.highlights.map((h, i) => {
            const Icon = iconMap[h.icon] ?? Shield
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    whileHover={{ scale: 1.18 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: project.accentColor,
                      border: `1px solid ${project.accentTint}30`,
                    }}
                  >
                    <Icon size={17} style={{ color: project.accentTint }} />
                  </motion.div>
                  <h3
                    className="font-semibold text-sm"
                    style={{
                      fontFamily: 'var(--font-jakarta, sans-serif)',
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {h.title}
                  </h3>
                </div>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: 'var(--font-dm, sans-serif)',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.65',
                  }}
                >
                  {h.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Outcome */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="glass-card p-8 mb-16"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 0%, ${project.accentColor} 0%, transparent 60%)`,
          }}
        >
          <h2
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ fontFamily: 'var(--font-jetbrains, monospace)', color: 'var(--accent)' }}
          >
            Outcome
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm, sans-serif)',
              fontSize: 'var(--text-base)',
              color: 'var(--text-secondary)',
              lineHeight: '1.75',
            }}
          >
            {project.outcome}
          </p>
        </motion.div>

        {/* Prev/Next navigation */}
        <div className="flex flex-col sm:flex-row gap-4">
          {prev ? (
            <Link href={`/projects/${prev.slug}`} className="flex-1 glass-card p-6 block">
              <p
                className="text-xs mb-2"
                style={{ fontFamily: 'var(--font-jetbrains, monospace)', color: 'var(--text-muted)' }}
              >
                ← Previous
              </p>
              <p
                className="font-semibold"
                style={{ fontFamily: 'var(--font-jakarta, sans-serif)', color: 'var(--text-primary)' }}
              >
                {prev.name}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {next && (
            <Link href={`/projects/${next.slug}`} className="flex-1 glass-card p-6 text-right block">
              <p
                className="text-xs mb-2"
                style={{ fontFamily: 'var(--font-jetbrains, monospace)', color: 'var(--text-muted)' }}
              >
                Next →
              </p>
              <p
                className="font-semibold"
                style={{ fontFamily: 'var(--font-jakarta, sans-serif)', color: 'var(--text-primary)' }}
              >
                {next.name}
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
