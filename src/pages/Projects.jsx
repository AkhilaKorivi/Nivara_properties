import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import StatusNav from '../components/StatusNav'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'
import { img } from '../lib/img'

export default function Projects() {
  const [params] = useSearchParams()
  const city = params.get('city')
  const filtered = city ? projects.filter((p) => p.city === city) : projects
  const cityName = city ? filtered[0]?.city : null

  return (
    <>
      <PageHeader
        eyebrow="PROJECT DIRECTORY"
        title={<>Our Developments</>}
        sub="Landmarks across cities."
        image={img('photo-1486325212027-8081e485255e', 1920)}
      />
      <div className="container status-nav-wrap">
        <StatusNav />
      </div>

      <section className="section project-directory">
        <div className="container">
          {cityName && (
            <Reveal variant="fade" className="city-filter-tag">
              Showing developments in <strong>{cityName}</strong> — <a href="/projects">VIEW ALL</a>
            </Reveal>
          )}
          <div className="directory-grid">
            {filtered.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
          </div>
          {!filtered.length && (
            <p className="empty-state">No developments found in this city yet. <a href="/projects">Browse all projects →</a></p>
          )}
        </div>
      </section>
    </>
  )
}