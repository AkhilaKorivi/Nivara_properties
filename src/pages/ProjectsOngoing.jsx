import PageHeader from '../components/PageHeader'
import StatusNav from '../components/StatusNav'
import Reveal from '../components/Reveal'
import ProgressBar from '../components/ProgressBar'
import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons'
import { ongoingProjects } from '../data/projects'
import { img } from '../lib/img'

export default function ProjectsOngoing() {
  return (
    <>
      <PageHeader
        eyebrow="PROJECT DIRECTORY · 02"
        title={<>Ongoing Projects</>}
        sub="Currently taking shape."
        image={img('photo-1503387762-592deb58ef4e', 1920)}
      />
      <div className="container status-nav-wrap">
        <StatusNav />
      </div>

      <section className="section ongoing-dir">
        <div className="container">
          <div className="ongoing-list">
            {ongoingProjects().map((p, i) => (
              <Reveal variant="up" key={p.slug} className="ongoing-row">
                <Link to={`/projects/${p.slug}`} className="ongoing-card">
                  <div className="og-media">
                    <img src={p.heroImage} alt={p.name} loading="lazy" />
                    <div className="og-shade" />
                    <span className="og-status">UNDER DEVELOPMENT</span>
                  </div>
                  <div className="og-body">
                    <div className="og-head">
                      <h2 className="og-name">{p.name}</h2>
                      <p className="og-meta">{p.location} · {p.category}</p>
                    </div>
                    <p className="og-desc">{p.description}</p>
                    <div className="og-info-grid">
                      <div className="og-info">
                        <span className="og-label">EXPECTED COMPLETION</span>
                        <strong>{p.expectedCompletion || p.year}</strong>
                      </div>
                      <div className="og-info">
                        <span className="og-label">DEVELOPED AREA</span>
                        <strong>{p.area}</strong>
                      </div>
                    </div>
                    <ProgressBar value={p.progress} label="CONSTRUCTION PROGRESS" active />
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