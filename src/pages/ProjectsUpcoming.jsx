import PageHeader from '../components/PageHeader'
import StatusNav from '../components/StatusNav'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import { upcomingProjects } from '../data/projects'
import { img } from '../lib/img'

export default function ProjectsUpcoming() {
  return (
    <>
      <PageHeader
        eyebrow="PROJECT DIRECTORY · 03"
        title={<>Upcoming Projects</>}
        sub="The next chapter is taking shape."
        image={img('photo-1480714378408-67cf0d13bc1b', 1920)}
      />
      <div className="container status-nav-wrap">
        <StatusNav />
      </div>

      <section className="section upcoming-dir">
        <div className="container">
          <Reveal variant="fade" className="concept-note">
            <span className="demo-tag">CONCEPT VISUAL</span>
            <p>Imagery below is conceptual — artist impressions of designs yet to be realised. Final buildings may differ.</p>
          </Reveal>
          <div className="upcoming-grid">
            {upcomingProjects().map((p, i) => (
              <Reveal variant="up" key={p.slug} className="upcoming-cell">
                <Link to={`/projects/${p.slug}`} className="upcoming-card">
                  <div className="uc-media">
                    <img src={p.heroImage} alt={p.name} loading="lazy" />
                    <div className="uc-shade" />
                    <span className="uc-seal">CONCEPT VISUAL / ARTIST IMPRESSION</span>
                  </div>
                  <div className="uc-body">
                    <h2 className="uc-name">{p.name}</h2>
                    <p className="uc-meta">{p.location} · {p.category}</p>
                    <p className="uc-desc">{p.description}</p>
                    <div className="uc-info">
                      <div className="og-info">
                        <span className="og-label">EXPECTED LAUNCH</span>
                        <strong>{p.expectedLaunch || p.launch}</strong>
                      </div>
                      <div className="og-info">
                        <span className="og-label">STATUS</span>
                        <strong className="uc-status">UPCOMING</strong>
                      </div>
                    </div>
                    <span className="pc-cta">VIEW PROJECT <span>→</span></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}