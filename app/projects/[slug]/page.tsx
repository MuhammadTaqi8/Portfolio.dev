import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { projects, getProject } from '@/data/projects'
import ProjectCaseStudy from '@/components/sections/ProjectCaseStudy'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = getProject(params.slug)
  if (!project) return {}
  return {
    title: `${project.name} — Case Study`,
    description: project.overview.substring(0, 160),
    openGraph: {
      title: `${project.name} — Case Study | Syed Muhammad Taqi`,
      description: project.overview.substring(0, 160),
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === params.slug)
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return <ProjectCaseStudy project={project} prev={prev} next={next} />
}
