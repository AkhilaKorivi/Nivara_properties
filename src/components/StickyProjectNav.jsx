import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const tabs = [
  { id: 'overview', label: 'OVERVIEW' },
  { id: 'architecture', label: 'ARCHITECTURE' },
  { id: 'amenities', label: 'AMENITIES' },
  { id: 'gallery', label: 'GALLERY' },
  { id: 'location', label: 'LOCATION' },
  { id: 'testimonials', label: 'TESTIMONIALS' },
  { id: 'enquire', label: 'ENQUIRE' }
]

export default function StickyProjectNav() {
  const [active, setActive] = useState('overview')
  const location = useLocation()

  useEffect(() => {
    const sectionObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    tabs.forEach((tab) => {
      const el = document.getElementById(tab.id)
      if (el) sectionObs.observe(el)
    })
    return () => sectionObs.disconnect()
  }, [location.pathname])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <nav className="sticky-nav" aria-label="Project sections">
      {tabs.map((t) => (
        <button
          key={t.id}
          className={`sticky-link ${active === t.id ? 'is-active' : ''}`}
          onClick={() => scrollTo(t.id)}
        >
          {t.label}
        </button>
      ))}
    </nav>
  )
}