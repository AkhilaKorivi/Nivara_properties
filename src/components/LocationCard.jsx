import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from './Icons'

export default function LocationCard({ location, index = 0 }) {
  return (
    <Link
      to={`/projects?city=${location.name}`}
      className="location-card"
      style={{ ['--lc-index']: index }}
    >
      <div className="lc-media">
        <img src={location.image} alt={location.name} loading="lazy" />
        <div className="lc-shade" />
      </div>
      <div className="lc-body">
        <span className="lc-eyebrow"><MapPin />{location.tagline}</span>
        <h3 className="lc-name">{location.name}</h3>
        <p className="lc-desc">{location.description}</p>
        <div className="lc-stats">
          <span>{location.projects} Projects</span>
          <span>{location.activeProjects} Active</span>
        </div>
        <span className="pc-cta">VIEW DEVELOPMENTS <span>→</span></span>
      </div>
    </Link>
  )
}