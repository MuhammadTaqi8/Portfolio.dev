import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import FeaturedProject from '@/components/sections/FeaturedProject'
import ProjectsGrid from '@/components/sections/ProjectsGrid'
import Skills from '@/components/sections/Skills'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Syed Muhammad Taqi — Full Stack Developer',
  description:
    'Full Stack Developer specialising in PHP/Laravel and React/Next.js. Building production SaaS platforms from database schema to cloud deployment.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <ProjectsGrid />
      <Skills />
      <CTABanner />
    </>
  )
}
