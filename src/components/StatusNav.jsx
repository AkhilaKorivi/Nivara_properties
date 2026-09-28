import { NavLink } from 'react-router-dom'
import { projects } from '../data/projects'

const items = [
  { to: '/projects', label: 'ALL PROJECTS', count: projects.length },
  { to: '/projects/ongoing', label: 'ONGOING PROJECTS', count: projects.filter((p) => p.status === 'Ongoing').length },
  { to: '/projects/upcoming', label: 'UPCOMING PROJECTS', count: projects.filter((p) => p.status === 'Upcoming').length },
  { to: '/projects/completed', label: 'COMPLETED PROJECTS', count: projects.filter((p) => p.status === 'Completed').length }
]

export default function StatusNav() {
  return (
    <nav className="status-nav" aria-label="Project status">
      {items.map((it) => (
        <NavLink
          key={it.to}
          to={it.to}
          end={it.to === '/projects'}
          className={({ isActive }) => `status-link ${isActive ? 'is-active' : ''}`}
        >
          <span className="status-label">{it.label}</span>
          <span className="status-count">{String(it.count).padStart(2, '0')}</span>
        </NavLink>
      ))}
    </nav>
  )
}