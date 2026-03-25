'use client'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import TechBadge from '@/components/ui/TechBadge'

const tech = [
  { name: 'Next.js', key: 'nextjs' },
  { name: 'tRPC', key: 'trpc' },
  { name: 'Turborepo', key: 'turborepo' },
  { name: 'Sage API', key: 'sage' },
  { name: 'AWS ECS', key: 'aws' },
  { name: 'Prisma', key: 'prisma' },
  { name: 'BullMQ', key: 'bullmq' },
]

export default function FeaturedProject() {
  return (
    <section className="px-6 pb-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div
          className="glass-card p-8 md:p-12 flex flex-col lg:flex-row gap-10 items-start"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 50% at 0% 0%, rgba(99,102,241,0.09) 0%, transparent 65%)',
          }}
        >
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-5">
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-jetbrains, monospace)', color: 'var(--accent)' }}
              >
                ✦ Featured Project
              </span>
            </div>

            <h2
              className="font-black mb-2"
              style={{
                fontFamily: 'var(--font-jakarta, sans-serif)',
                fontSize: 'var(--text-2xl)',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
              }}
            >
              Dairy Farm Product
            </h2>
            <p
              className="mb-2 font-medium"
              style={{
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-dm, sans-serif)',
              }}
            >
              Sage ERP E-Commerce Platform
            </p>
            <p
              className="mb-6 text-sm"
              style={{
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-dm, sans-serif)',
                lineHeight: '1.6',
              }}
            >
              Turborepo monorepo · 3 apps · Sage Business Cloud bi-directional sync · AWS ECS
              production
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {tech.map((t) => (
                <TechBadge key={t.key} name={t.name} techKey={t.key} />
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects/dairy-farm-product"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                style={{
                  background: 'var(--accent)',
                  boxShadow: '0 2px 14px rgba(37,99,235,0.30)',
                  fontFamily: 'var(--font-jakarta, sans-serif)',
                }}
              >
                View Case Study <ArrowRight size={14} />
              </Link>
              <a
                href="https://dairyfarmproduct.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold glass-card"
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-dm, sans-serif)',
                }}
              >
                dairyfarmproduct.co.uk <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Browser mockup */}
          <motion.div
            className="w-full lg:w-80 xl:w-96 flex-shrink-0"
            whileHover={{ rotateY: 2, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ perspective: 1000 }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(255,255,255,0.85)',
                background: 'rgba(255,255,255,0.55)',
                boxShadow: '0 12px 40px rgba(80,100,160,0.14)',
              }}
            >
              {/* Browser chrome */}
              <div
                className="flex items-center gap-1.5 px-4 py-3"
                style={{
                  background: 'rgba(242,244,247,0.9)',
                  borderBottom: '1px solid rgba(255,255,255,0.8)',
                }}
              >
                <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
                <div
                  className="flex-1 mx-3 px-3 py-1 rounded-md text-xs"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-jetbrains, monospace)',
                    fontSize: '11px',
                  }}
                >
                  dairyfarmproduct.co.uk
                </div>
              </div>
              {/* Page preview skeleton */}
              <div
                className="p-5"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(99,102,241,0.04) 0%, rgba(37,99,235,0.02) 100%)',
                  minHeight: 220,
                }}
              >
                <div
                  className="h-5 rounded-full mb-4"
                  style={{ background: 'rgba(99,102,241,0.18)', width: '55%' }}
                />
                <div
                  className="h-3 rounded-full mb-2"
                  style={{ background: 'rgba(0,0,0,0.07)', width: '80%' }}
                />
                <div
                  className="h-3 rounded-full mb-6"
                  style={{ background: 'rgba(0,0,0,0.05)', width: '65%' }}
                />
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="rounded-xl p-3"
                      style={{ background: 'rgba(255,255,255,0.75)', height: 64 }}
                    >
                      <div
                        className="h-2 rounded-full mb-2"
                        style={{ background: 'rgba(99,102,241,0.2)', width: '70%' }}
                      />
                      <div
                        className="h-2 rounded-full"
                        style={{ background: 'rgba(0,0,0,0.06)', width: '90%' }}
                      />
                    </div>
                  ))}
                </div>
                <div
                  className="h-8 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                    width: '48%',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
