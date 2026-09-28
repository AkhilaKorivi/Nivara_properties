import { Link } from 'react-router-dom'
import { Instagram, Facebook, LinkedIn, YouTube, Phone, Mail, MapPin } from './Icons'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/locations', label: 'Locations' },
  { to: '/journal', label: 'Journal' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' }
]

const socials = [
  { label: 'Instagram', Icon: Instagram, href: 'https://instagram.com' },
  { label: 'Facebook', Icon: Facebook, href: 'https://facebook.com' },
  { label: 'LinkedIn', Icon: LinkedIn, href: 'https://linkedin.com' },
  { label: 'YouTube', Icon: YouTube, href: 'https://youtube.com' }
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <div className="container">
          <p className="footer-cta-eyebrow">START A CONVERSATION</p>
          <h2 className="footer-cta-title">Let's create what's next.</h2>
          <p className="footer-cta-sub">Speak to our development team about residential, commercial and mixed-use opportunities.</p>
          <Link to="/contact" className="btn btn-solid btn-lg">ENQUIRE NOW →</Link>
        </div>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-brand footer-brand-logo">
              <span className="nav-mark">N</span>
              <span className="nav-word">
                <span className="nav-word-top">NIVARA</span>
                <span className="nav-word-sub">PROPERTIES</span>
              </span>
            </Link>
            <p className="footer-tagline">Crafting landmarks. Shaping tomorrow. A premium real-estate development company building with vision, restraint and permanence.</p>
            <div className="footer-social">
              {socials.map(({ label, Icon, href }) => (
                <a key={label} href={href} aria-label={label} className="social-link" target="_blank" rel="noreferrer">
                  <Icon width={18} height={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">EXPLORE</h4>
            <ul className="footer-list">
              {nav.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">DEVELOPMENTS</h4>
            <ul className="footer-list">
              <li><Link to="/projects/ongoing">Ongoing Projects</Link></li>
              <li><Link to="/projects/upcoming">Upcoming Projects</Link></li>
              <li><Link to="/projects/completed">Completed Projects</Link></li>
              <li><Link to="/projects/nivara-one">Nivara One</Link></li>
              <li><Link to="/projects/the-arcadia">The Arcadia</Link></li>
              <li><Link to="/projects/meridian-district">Meridian District</Link></li>
            </ul>
          </div>

          <div className="footer-col footer-contact-col">
            <h4 className="footer-heading">CONTACT</h4>
            <ul className="footer-list footer-contact">
              <li><MapPin /> Nivara House, 21 Sea View Road, Worli, Mumbai 400018</li>
              <li><Phone /> +91 98765 43210</li>
              <li><Mail /> sales@nivara.properties</li>
            </ul>
            <Link to="/contact" className="text-link footer-enquire">DROP AN ENQUIRY</Link>
          </div>
        </div>
      </div>

      <div className="footer-base">
        <div className="container footer-base-inner">
          <p>© {new Date().getFullYear()} Nivara Properties. All rights reserved. Demo website with sample content.</p>
          <div className="footer-legal">
            <Link to="/contact">Privacy</Link>
            <Link to="/contact">Terms</Link>
            <Link to="/contact">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}