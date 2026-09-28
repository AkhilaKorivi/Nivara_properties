import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container notfound">
      <p className="section-eyebrow"><span className="eyebrow-line" /><span className="eyebrow-text">404</span></p>
      <h1 className="page-title">This landmark<br />doesn't exist.</h1>
      <p className="page-sub">The page you were looking for has been moved, renamed, or never built.</p>
      <div className="notfound-actions">
        <Link to="/" className="btn btn-solid">BACK TO HOME</Link>
        <Link to="/projects" className="btn btn-ghost">VIEW PROJECTS</Link>
      </div>
    </div>
  )
}