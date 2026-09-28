import PageHeader from '../components/PageHeader'
import StatusNav from '../components/StatusNav'
import Reveal from '../components/Reveal'
import Gallery from '../components/Gallery'
import { Link } from 'react-router-dom'
import { completedProjects } from '../data/projects'
import { img } from '../lib/img'

export default function ProjectsCompleted() {
  return (
    <>
      <PageHeader
        eyebrow="PROJECT DIRECTORY · 04"
        title={<>Completed Projects</>}
        sub="Landmarks delivered."
        image={img('photo-1600585154340-be6161a56a0c', 1920)}
      />
      <div className="container status-nav-wrap">
        <StatusNav />
      </div>

      <section className="section completed-dir">
        <div className="container">
          <div className="completed-list">
            {completedProjects().map((p, i) => (
              <Reveal variant="up" key={p.slug} className="completed-row">
                <div className="completed-card">
                  <div className="cd-media">
                    <img src={p.heroImage} alt={p.name} loading="lazy" />
                    <div className="cd-shade" />
                    <span className="cd-delivered">DELIVERED</span>
                    <span className="cd-year">COMPLETED {p.delivered}</span>
                  </div>
                  <div className="cd-body">
                    <div className="cd-head">
                      <h2 className="cd-name">{p.name}</h2>
                      <p className="cd-meta">{p.location} · {p.category}</p>
                    </div>
                    <p className="cd-desc">{p.longDescription[0]}</p>
                    <div className="cd-facts">
                      <span>{p.area}</span>
                      <span>{p.units} Units</span>
                      <span>Completed {p.delivered}</span>
                    </div>
                    <Gallery images={p.gallery} label={p.name} />
                    <Link to={`/projects/${p.slug}`} className="pc-cta">VIEW PROJECT <span>→</span></Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}