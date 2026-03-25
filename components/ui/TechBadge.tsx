interface TechBadgeProps {
  name: string
  techKey: string
}

export default function TechBadge({ name, techKey }: TechBadgeProps) {
  return (
    <span className="tech-badge" data-tech={techKey}>
      {name}
    </span>
  )
}
