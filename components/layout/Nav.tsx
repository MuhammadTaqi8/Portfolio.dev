'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className="nav-float"
        style={{
          boxShadow: scrolled
            ? '0 8px 32px rgba(100,120,180,0.20)'
            : '0 4px 24px rgba(100,120,180,0.12)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-sm mr-3"
          style={{
            fontFamily: 'var(--font-jakarta, sans-serif)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            fontSize: '15px',
          }}
        >
          Taqi
        </Link>

        {/* Separator */}
        <span style={{ color: 'var(--text-muted)', fontSize: '12px', margin: '0 4px' }}>·</span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 relative">
          {links.slice(1).map((link) => {
            const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors"
                style={{
                  color: active ? 'var(--accent)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-dm, sans-serif)',
                  fontSize: '14px',
                }}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'rgba(37, 99, 235, 0.10)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            )
          })}
        </div>

        {/* CV Button — desktop */}
        <a
          href="/files/taqi_fullstack.dev.pdf"
          download
          className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white ml-3"
          style={{
            background: 'var(--accent)',
            fontFamily: 'var(--font-dm, sans-serif)',
            fontSize: '13px',
            fontWeight: 600,
            boxShadow: '0 2px 12px rgba(37,99,235,0.28)',
          }}
        >
          <Download size={12} />
          CV
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-1.5 rounded-full ml-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ color: 'var(--text-primary)' }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            style={{
              background: 'rgba(242, 244, 247, 0.96)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            <button className="absolute top-6 right-6 p-2" onClick={() => setMobileOpen(false)}>
              <X size={24} style={{ color: 'var(--text-primary)' }} />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24, delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl font-black"
                    style={{
                      fontFamily: 'var(--font-jakarta, sans-serif)',
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="/files/taqi_fullstack.dev.pdf"
                download
                className="flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold text-lg mt-4"
                style={{ background: 'var(--accent)', fontFamily: 'var(--font-jakarta, sans-serif)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 }}
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
