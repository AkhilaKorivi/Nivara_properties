import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons'
import { useReducedMotion } from '../hooks/useReveal'

export default function ProjectCard({ project, large = false, index = 0 }) {
  const reduced = useReducedMotion()
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`project-card ${large ? 'is-large' : ''}`}
      style={{ ['--card-index']: index }}
    >
      <div className="pc-media">
        <img src={project.heroImage} alt={`${project.name} — ${project.city}`} loading="lazy" />
        <div className="pc-shade" />
        {project.status === 'Ongoing' && <span className="pc-progress">{project.progress}% complete</span>}
        {project.status === 'Upcoming' && <span className="pc-concept">CONCEPT VISUAL</span>}
        <div className="pc-top">
          <span className="pc-category">{project.category}</span>
          <span className={`pc-status status-${project.status.toLowerCase()}`}>
            {project.status === 'Completed' ? 'DELIVERED' : project.status.toUpperCase()}
          </span>
        </div>
      </div>
      <div className="pc-body">
        <div className="pc-body-top">
          <div>
            <h3 className="pc-name">{project.name}</h3>
            <p className="pc-meta">{project.city} · {project.status} · {project.year}</p>
          </div>
          <span className="pc-arrow"><ArrowRight /></span>
        </div>
        <p className="pc-desc">{project.description}</p>
        <span className="pc-cta">VIEW PROJECT <span>→</span></span>
      </div>
      <div className="pc-frame" />
    </Link>
  )
}