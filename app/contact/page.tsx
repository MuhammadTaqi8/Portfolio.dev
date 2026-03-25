'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, CheckCircle, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcon'

type FormType = 'Role' | 'Freelance Project' | 'Other'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [type, setType] = useState<FormType>('Role')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [shake, setShake] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) {
      setShake(true)
      setError('Please fill in all required fields.')
      setTimeout(() => setShake(false), 600)
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, type, message }),
      })
      if (res.ok) {
        setSent(true)
      } else {
        setError('Something went wrong. Please try again or email me directly.')
      }
    } catch {
      setError('Something went wrong. Please try again or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  const contacts = [
    { icon: Mail, label: 'taqi0413@gmail.com', href: 'mailto:taqi0413@gmail.com' },
    { icon: Phone, label: '07555 861851', href: 'tel:+447555861851' },
    { icon: GithubIcon, label: 'MuhammadTaqi8', href: 'https://github.com/MuhammadTaqi8' },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/syed-muhammad-taqi-b82182164/',
    },
  ]

  const inputBase =
    'w-full px-4 py-3 rounded-2xl text-sm outline-none transition-all focus:ring-2 focus:ring-[#2563EB]/30'
  const inputStyle = {
    background: 'rgba(255,255,255,0.65)',
    border: '1px solid rgba(255,255,255,0.85)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-dm, sans-serif)',
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          className="mb-12 text-center"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ fontFamily: 'var(--font-jetbrains, monospace)', color: 'var(--accent)' }}
          >
            Contact
          </p>
          <h1
            className="font-black mb-4"
            style={{
              fontFamily: 'var(--font-jakarta, sans-serif)',
              fontSize: 'var(--text-3xl)',
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
            }}
          >
            Let&apos;s work together.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-dm, sans-serif)',
              fontSize: 'var(--text-base)',
              color: 'var(--text-secondary)',
              lineHeight: '1.65',
            }}
          >
            I&apos;m open to Full Stack Developer roles — remote, hybrid, or Birmingham-based.
            <br />
            Also available for freelance SaaS builds.
          </p>
        </motion.div>

        {/* Contact chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24, delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="glass-card inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium hover:scale-105 transition-transform"
              style={{
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-dm, sans-serif)',
              }}
            >
              <c.icon size={15} style={{ color: 'var(--accent)' }} />
              {c.label}
            </a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24, delay: 0.15 }}
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="glass-card p-14 text-center"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37,99,235,0.09) 0%, transparent 60%)',
                }}
              >
                <CheckCircle size={52} className="mx-auto mb-5" style={{ color: '#10B981' }} />
                <h2
                  className="font-bold text-xl mb-2"
                  style={{
                    fontFamily: 'var(--font-jakarta, sans-serif)',
                    color: 'var(--text-primary)',
                  }}
                >
                  Message sent!
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm, sans-serif)' }}>
                  I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                animate={shake ? { x: [-8, 8, -6, 6, -4, 4, 0] } : { x: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 space-y-5"
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-semibold mb-2 tracking-wide"
                      style={{
                        fontFamily: 'var(--font-jetbrains, monospace)',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Name *
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className={inputBase}
                      style={{
                        ...inputStyle,
                        borderColor: shake && !name ? '#EF4444' : 'rgba(255,255,255,0.85)',
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold mb-2 tracking-wide"
                      style={{
                        fontFamily: 'var(--font-jetbrains, monospace)',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className={inputBase}
                      style={{
                        ...inputStyle,
                        borderColor: shake && !email ? '#EF4444' : 'rgba(255,255,255,0.85)',
                      }}
                    />
                  </div>
                </div>

                {/* Segmented control */}
                <div>
                  <label
                    className="block text-xs font-semibold mb-2 tracking-wide"
                    style={{
                      fontFamily: 'var(--font-jetbrains, monospace)',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    What are you looking for?
                  </label>
                  <div
                    className="flex rounded-2xl p-1"
                    style={{
                      background: 'rgba(255,255,255,0.55)',
                      border: '1px solid rgba(255,255,255,0.85)',
                    }}
                  >
                    {(['Role', 'Freelance Project', 'Other'] as FormType[]).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setType(t)}
                        className="flex-1 py-2 text-xs font-semibold rounded-xl transition-all"
                        style={{
                          background: type === t ? 'var(--accent)' : 'transparent',
                          color: type === t ? 'white' : 'var(--text-muted)',
                          fontFamily: 'var(--font-dm, sans-serif)',
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-xs font-semibold mb-2 tracking-wide"
                    style={{
                      fontFamily: 'var(--font-jetbrains, monospace)',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Tell me about the role or project..."
                    className={inputBase}
                    style={{
                      ...inputStyle,
                      resize: 'none',
                      borderColor: shake && !message ? '#EF4444' : 'rgba(255,255,255,0.85)',
                    }}
                  />
                </div>

                {error && (
                  <p
                    className="text-xs"
                    style={{ color: '#EF4444', fontFamily: 'var(--font-dm, sans-serif)' }}
                  >
                    {error}
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-2xl font-semibold text-sm text-white flex items-center justify-center gap-2"
                  style={{
                    background: 'var(--accent)',
                    boxShadow: '0 4px 20px rgba(37,99,235,0.30)',
                    fontFamily: 'var(--font-jakarta, sans-serif)',
                    opacity: loading ? 0.75 : 1,
                  }}
                >
                  {loading ? (
                    <span className="flex items-center gap-1">
                      Sending
                      <motion.span
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                      >
                        ...
                      </motion.span>
                    </span>
                  ) : (
                    <>
                      <Send size={15} /> Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
