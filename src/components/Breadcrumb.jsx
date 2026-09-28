import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Breadcrumb() {
  const { pathname } = useLocation()
  const parts = pathname.split('/').filter(Boolean)
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {parts.map((p, i) => {
        const to = '/' + parts.slice(0, i + 1).join('/')
        const label = p.replace(/-/g, ' ')
        return <span key={to}><span className="breadcrumb-sep">/</span><Link to={to} className="is-current">{label}</Link></span>
      })}
    </nav>
  )
}