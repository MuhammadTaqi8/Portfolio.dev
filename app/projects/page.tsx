'use client'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import TechBadge from '@/components/ui/TechBadge'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          className="mb-16 text-center"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ fontFamily: 'var(--font-jetbrains, monospace)', color: 'var(--accent)' }}
          >
            Portfolio
          </p>
          <h1
            className="font-black mb-4"
            style={{
              fontFamily: 'var(--font-jakarta, sans-serif)',
              fontSize: 'var(--text-hero)',
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              lineHeight: '1.08',
            }}
          >
            Work
          </h1>
          <p
            className="max-w-lg mx-auto"
            style={{
              fontFamily: 'var(--font-dm, sans-serif)',
              fontSize: 'var(--text-base)',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
            }}
          >
            Production systems built from schema to cloud. Each one shipped, live, and maintained.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div
                className="glass-card p-8 h-full flex flex-col"
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
                <h2
                  className="font-bold mt-4 mb-1"
                  style={{
                    fontFamily: 'var(--font-jakarta, sans-serif)',
                    fontSize: 'var(--text-xl)',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {project.name}
                </h2>
                <p
                  className="text-sm mb-2 font-medium"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-dm, sans-serif)',
                  }}
                >
                  {project.tagline}
                </p>
                <p
                  className="text-sm mb-6"
                  style={{
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-dm, sans-serif)',
                    lineHeight: '1.6',
                  }}
                >
                  {project.overview.substring(0, 140)}...
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
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
                    Case Study <ArrowRight size={12} />
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
      </div>
    </div>
  )
}
