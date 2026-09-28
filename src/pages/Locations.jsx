import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { locations } from '../data/locations'
import { projects } from '../data/projects'
import { img } from '../lib/img'
import { MapPin } from '../components/Icons'

export default function Locations() {
  const [active, setActive] = useState(locations[0].slug)
  const city = locations.find((l) => l.slug === active)
  const cityProjects = projects.filter((p) => p.city === city.name)

  return (
    <>
      <PageHeader
        eyebrow="WHERE WE BUILD"
        title={<>Locations</>}
        sub="Four cities today — two more under study. Each one, understood deeply before a single stone is laid."
        image={img('photo-1529253355930-ddbe423a2ac7', 1920)}
      />

      <section className="section locations-page">
        <div className="container">
          <div className="location-tabbar" role="tablist">
            {locations.map((l) => (
              <button
                key={l.slug}
                className={`location-tab ${active === l.slug ? 'is-active' : ''}`}
                onClick={() => setActive(l.slug)}
                role="tab"
                aria-selected={active === l.slug}
              >
                <span className="location-tab-name">{l.name}</span>
                <span className="location-tab-count">{l.projects}</span>
              </button>
            ))}
          </div>

          <div className="location-feature">
            <Reveal variant="zoom" className="location-feature-media">
              <img src={city.image} alt={city.name} key={city.slug} />
              <div className="location-feature-shade" />
              <span className="location-feature-tagline"><MapPin />{city.tagline}</span>
            </Reveal>
            <Reveal variant="up" className="location-feature-text" delay={100}>
              <p className="location-feature-desc">{city.description}</p>
              <div className="location-feature-facts">
                <div><strong>{city.projects}</strong><span>Projects</span></div>
                <div><strong>{city.activeProjects}</strong><span>Active Today</span></div>
                <div><strong>{cityProjects.reduce((a, p) => a + p.units, 0).toLocaleString('en-US')}</strong><span>Spaces Planned</span></div>
              </div>
            </Reveal>
          </div>

          <div className="location-projects">
            <Reveal variant="fade" className="section-eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">DEVELOPMENTS IN {city.name.toUpperCase()}</span>
            </Reveal>
            {cityProjects.length ? (
              <div className="directory-grid">
                {cityProjects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
              </div>
            ) : (
              <p className="empty-state">No developments published for this city yet. <a href="/projects">Browse all →</a></p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}