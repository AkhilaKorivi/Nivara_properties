import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons'

export default function Button({ to, href, onClick, variant = 'solid', children, className = '', type }) {
  const classes = `btn btn-${variant} ${className}`
  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        <span className="btn-label">{children}</span>
        <span className="btn-arrow"><ArrowRight /></span>
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        <span className="btn-label">{children}</span>
        <span className="btn-arrow"><ArrowRight /></span>
      </a>
    )
  }
  return (
    <button type={type || 'button'} className={classes} onClick={onClick}>
      <span className="btn-label">{children}</span>
      <span className="btn-arrow"><ArrowRight /></span>
    </button>
  )
}

export function TextLink({ to, children, className = '' }) {
  return (
    <Link to={to} className={`text-link ${className}`}>
      <span>{children}</span>
      <span className="text-link-arrow">→</span>
    </Link>
  )
}