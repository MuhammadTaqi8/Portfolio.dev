import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcon'

export default function Footer() {
  return (
    <footer className="pb-12 px-6">
      <div className="glass-card max-w-4xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p
            className="font-semibold text-sm"
            style={{ fontFamily: 'var(--font-jakarta, sans-serif)', color: 'var(--text-primary)' }}
          >
            Syed Muhammad Taqi
          </p>
          <p
            className="text-xs mt-0.5"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-dm, sans-serif)' }}
          >
            Full Stack Developer · Birmingham, UK
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/MuhammadTaqi8"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: 'var(--text-muted)' }}
            className="hover:text-[#2563EB] transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/syed-muhammad-taqi-b82182164/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: 'var(--text-muted)' }}
            className="hover:text-[#2563EB] transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:taqi0413@gmail.com"
            aria-label="Email"
            style={{ color: 'var(--text-muted)' }}
            className="hover:text-[#2563EB] transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
        <p
          className="text-xs"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-dm, sans-serif)' }}
        >
          © {new Date().getFullYear()} · Built with Next.js
        </p>
      </div>
    </footer>
  )
}
