import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'Syed Muhammad Taqi — Full Stack Developer',
    template: '%s | Syed Muhammad Taqi',
  },
  description:
    'Full Stack Developer specialising in PHP/Laravel and React/Next.js. Building production SaaS platforms from database schema to cloud deployment.',
  keywords: ['Full Stack Developer', 'Laravel', 'Next.js', 'PHP', 'React', 'AWS', 'Birmingham'],
  authors: [{ name: 'Syed Muhammad Taqi' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://syedtaqi.dev',
    siteName: 'Syed Muhammad Taqi',
    title: 'Syed Muhammad Taqi — Full Stack Developer',
    description: 'Building production SaaS platforms — PHP/Laravel, React/Next.js, AWS.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Muhammad Taqi — Full Stack Developer',
    description: 'Building production SaaS platforms — PHP/Laravel, React/Next.js, AWS.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://syedtaqi.dev'),
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Syed Muhammad Taqi',
  jobTitle: 'Full Stack Developer',
  url: 'https://syedtaqi.dev',
  email: 'taqi0413@gmail.com',
  telephone: '+447555861851',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Birmingham',
    addressCountry: 'GB',
  },
  sameAs: [
    'https://github.com/MuhammadTaqi8',
    'https://www.linkedin.com/in/syed-muhammad-taqi-b82182164/',
  ],
  knowsAbout: ['PHP', 'Laravel', 'React', 'Next.js', 'AWS', 'TypeScript', 'MySQL'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
