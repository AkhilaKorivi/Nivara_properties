import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { MenuIcon, Close } from './Icons'

const links = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT' },
  { to: '/projects', label: 'PROJECTS' },
  { to: '/locations', label: 'LOCATIONS' },
  { to: '/journal', label: 'JOURNAL' },
  { to: '/careers', label: 'CAREERS' },
  { to: '/contact', label: 'CONTACT' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled || open ? 'nav-scrolled' : ''} ${open ? 'nav-open' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-brand" onClick={() => setOpen(false)}>
            <span className="nav-mark">N</span>
            <span className="nav-word">
              <span className="nav-word-top">NIVARA</span>
              <span className="nav-word-sub">PROPERTIES</span>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <Link to="/contact" className="btn btn-solid btn-sm nav-enquire">
              <span className="btn-label">ENQUIRE NOW</span>
              <span className="btn-arrow">→</span>
            </Link>
            <button className="nav-burger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
              {open ? <Close /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <div className="mobile-menu-inner">
          <nav className="mobile-links">
            {links.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `mobile-link ${isActive ? 'is-active' : ''}`}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
              >
                <span className="mobile-index">0{i + 1}</span>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="mobile-menu-foot">
            <Link to="/contact" className="btn btn-solid">ENQUIRE NOW →</Link>
            <p className="mobile-contact">sales@nivara.properties · +91 98765 43210</p>
          </div>
        </div>
      </div>
    </>
  )
}