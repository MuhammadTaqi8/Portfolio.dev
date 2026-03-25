'use client'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import TechBadge from '@/components/ui/TechBadge'
import { projects } from '@/data/projects'

export default function ProjectsGrid() {
  return (
    <section className="px-6 pb-24 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="text-center mb-12 font-black"
        style={{
          fontFamily: 'var(--font-jakarta, sans-serif)',
          fontSize: 'var(--text-3xl)',
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)',
        }}
      >
        Work
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.08 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div
              className="glass-card p-6 h-full flex flex-col"
              style={{
                backgroundImage: `radial-gradient(ellipse 60% 40% at 0% 0%, ${project.accentColor} 0%, transparent 60%)`,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains, monospace)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                }}
              >
                {project.number}
              </span>
              <h3
                className="font-bold mt-3 mb-1"
                style={{
                  fontFamily: 'var(--font-jakarta, sans-serif)',
                  fontSize: 'var(--text-xl)',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                {project.name}
              </h3>
              <p
                className="text-sm mb-4"
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-dm, sans-serif)',
                  fontWeight: 500,
                }}
              >
                {project.tagline}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.slice(0, 5).map((t) => (
                  <TechBadge key={t.key} name={t.name} techKey={t.key} />
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white"
                  style={{
                    background: 'var(--accent)',
                    boxShadow: '0 2px 8px rgba(37,99,235,0.25)',
                    fontFamily: 'var(--font-dm, sans-serif)',
                  }}
                >
                  View Case Study <ArrowRight size={12} />
                </Link>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold glass-card"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-dm, sans-serif)',
                  }}
                >
                  Live <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
