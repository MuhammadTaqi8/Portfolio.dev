'use client'
import { motion } from 'framer-motion'
import TechBadge from '@/components/ui/TechBadge'

const groups = [
  {
    label: 'Backend',
    tech: [
      { name: 'PHP', key: 'php' },
      { name: 'Laravel', key: 'laravel' },
      { name: 'Express.js', key: 'express' },
      { name: 'tRPC', key: 'trpc' },
    ],
  },
  {
    label: 'Frontend',
    tech: [
      { name: 'React', key: 'react' },
      { name: 'Next.js', key: 'nextjs' },
      { name: 'TypeScript', key: 'ts' },
    ],
  },
  {
    label: 'Cloud & Infra',
    tech: [
      { name: 'AWS ECS', key: 'aws' },
      { name: 'BullMQ', key: 'bullmq' },
      { name: 'Redis', key: 'redis' },
      { name: 'Turborepo', key: 'turborepo' },
    ],
  },
  {
    label: 'Database',
    tech: [
      { name: 'MySQL', key: 'mysql' },
      { name: 'Prisma', key: 'prisma' },
      { name: 'Kysely', key: 'kysely' },
      { name: 'Meilisearch', key: 'meilisearch' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="px-6 pb-24 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="mb-10 font-black"
        style={{
          fontFamily: 'var(--font-jakarta, sans-serif)',
          fontSize: 'var(--text-3xl)',
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)',
        }}
      >
        Stack
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {groups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.08 }}
            className="glass-card p-5"
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{
                fontFamily: 'var(--font-jetbrains, monospace)',
                color: 'var(--text-muted)',
              }}
            >
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.tech.map((t) => (
                <TechBadge key={t.key} name={t.name} techKey={t.key} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
