'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
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

const timeline = [
  {
    date: 'Sept 2023 – Sept 2025',
    company: 'Connectwith360',
    location: 'Remote',
    role: 'PHP Developer — Backend Focused',
    bullets: [
      'Healthcare SaaS · 40+ API endpoints · AWS infrastructure',
      'Full GDPR compliance, field encryption, immutable audit logging',
    ],
  },
  {
    date: 'Jan 2023 – Jan 2024',
    company: 'TechnoVerse',
    location: 'Pakistan',
    role: 'Full Stack Developer',
    bullets: [
      'SaaS delivery as sole developer · 60s → 3s API optimisation',
      '3 junior developers mentored',
    ],
  },
]

const education = [
  {
    degree: 'MSc Computer Science',
    spec: 'AI & Data Science',
    uni: 'Ulster University, Birmingham',
    date: 'Sept 2025',
  },
  {
    degree: 'BSc Software Engineering',
    spec: 'Computer Science',
    uni: 'University of Lahore',
    date: '2022',
  },
]

const values = [
  'Ship it. Then improve it. But ship it.',
  'Security is a feature. GDPR is a feature. Performance is a feature.',
  'One abstraction that handles five cases beats five cases handled separately.',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Bio */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="mb-20">
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ fontFamily: 'var(--font-jetbrains, monospace)', color: 'var(--accent)' }}
          >
            About
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-black mb-10"
            style={{
              fontFamily: 'var(--font-jakarta, sans-serif)',
              fontSize: 'var(--text-hero)',
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              lineHeight: '1.08',
            }}
          >
            Syed Muhammad
            <br />
            Taqi
          </motion.h1>
          <motion.div variants={fadeUp} className="glass-card p-8 space-y-5">
            <p
              style={{
                fontFamily: 'var(--font-dm, sans-serif)',
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                lineHeight: '1.75',
              }}
            >
              I&apos;m a Full Stack Developer based in Birmingham, UK, specialising in PHP / Laravel
              and React / Next.js. I build production SaaS platforms — from database schema to cloud
              deployment — and I&apos;m comfortable owning every layer of the stack.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm, sans-serif)',
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                lineHeight: '1.75',
              }}
            >
              I have a habit of doing things properly: application state machines instead of bare
              string fields, SHA-256-hashed token primitives instead of five separate token tables,
              velocity-based gap analysis instead of a progress bar. The architecture decisions that
              don&apos;t show up in screenshots but define whether a system is maintainable two years
              later.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm, sans-serif)',
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                lineHeight: '1.75',
              }}
            >
              MSc Computer Science (AI &amp; Data Science) from Ulster University, Birmingham,
              graduated September 2025. BSc Software Engineering from the University of Lahore. UK
              Graduate Visa — full right to work, no sponsorship required.
            </p>
          </motion.div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
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
            Experience
          </motion.h2>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.08 }}
                className="glass-card p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-56 flex-shrink-0">
                    <p
                      className="text-xs font-semibold"
                      style={{
                        fontFamily: 'var(--font-jetbrains, monospace)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {item.date}
                    </p>
                    <p
                      className="font-bold mt-1"
                      style={{
                        fontFamily: 'var(--font-jakarta, sans-serif)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {item.company}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-dm, sans-serif)',
                      }}
                    >
                      {item.location}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p
                      className="font-semibold mb-3"
                      style={{
                        fontFamily: 'var(--font-dm, sans-serif)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {item.role}
                    </p>
                    <ul className="space-y-2">
                      {item.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm"
                          style={{
                            color: 'var(--text-secondary)',
                            fontFamily: 'var(--font-dm, sans-serif)',
                          }}
                        >
                          <span style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }}>
                            →
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
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
            Education
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.08 }}
                className="glass-card p-6"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse 60% 40% at 0% 0%, rgba(37,99,235,0.06) 0%, transparent 60%)',
                }}
              >
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{
                    fontFamily: 'var(--font-jetbrains, monospace)',
                    color: 'var(--accent)',
                  }}
                >
                  {edu.date}
                </p>
                <p
                  className="font-bold mb-1"
                  style={{
                    fontFamily: 'var(--font-jakarta, sans-serif)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {edu.degree}
                </p>
                <p
                  className="text-sm mb-2"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-dm, sans-serif)',
                  }}
                >
                  {edu.spec}
                </p>
                <p
                  className="text-xs"
                  style={{
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-dm, sans-serif)',
                  }}
                >
                  {edu.uni}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
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
            Principles
          </motion.h2>
          <div className="space-y-3">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.08 }}
                className="glass-card px-6 py-4 flex items-center gap-4"
              >
                <span style={{ color: 'var(--accent)', fontSize: 18, flexShrink: 0 }}>✦</span>
                <p
                  className="font-medium"
                  style={{
                    fontFamily: 'var(--font-dm, sans-serif)',
                    color: 'var(--text-primary)',
                    fontSize: 'var(--text-base)',
                  }}
                >
                  {v}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold"
            style={{
              background: 'var(--accent)',
              fontFamily: 'var(--font-jakarta, sans-serif)',
              boxShadow: '0 4px 20px rgba(37,99,235,0.35)',
            }}
          >
            Let&apos;s Talk <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
