import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import StickyProjectNav from '../components/StickyProjectNav'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Gallery from '../components/Gallery'
import ProgressBar from '../components/ProgressBar'
import TestimonialCard from '../components/TestimonialCard'
import VideoModal from '../components/VideoModal'
import EnquiryForm from '../components/EnquiryForm'
import ProjectCard from '../components/ProjectCard'
import Breadcrumb from '../components/Breadcrumb'
import { projects, getProject } from '../data/projects'
import { videoTestimonials, writtenTestimonials } from '../data/testimonials'
import { Play, MapPin, Check } from '../components/Icons'

export default function ProjectDetail() {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [activeVideo, setActiveVideo] = useState(null)

  useEffect(() => {
    const p = getProject(slug)
    setProject(p)
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!project) {
    return (
      <div className="container notfound-inline">
        <h1>Project not found.</h1>
        <Link to="/projects" className="btn btn-solid">BACK TO PROJECTS</Link>
      </div>
    )
  }

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2)
  const videoList = project.testimonials?.video?.map((id) => videoTestimonials.find((v) => v.id === id)).filter(Boolean) || []
  const writtenList = project.testimonials?.written?.map((id) => writtenTestimonials.find((w) => w.id === id)).filter(Boolean) || []

  return (
    <>
      {/* Cinematic hero */}
      <section className="detail-hero">
        <div className="detail-hero-media">
          <img src={project.heroImage} alt={project.name} />
          {project.video && (
            <video muted loop playsInline autoPlay preload="none" poster={project.poster} className="detail-hero-video">
              <source src={project.video} type="video/mp4" />
            </video>
          )}
          <div className="detail-hero-shade" />
        </div>
        <div className="container detail-hero-inner">
          <Breadcrumb />
          <div className="detail-hero-badges">
            <span className={`pc-status status-${project.status.toLowerCase()}`}>
              {project.status === 'Completed' ? 'DELIVERED' : project.status.toUpperCase()}
            </span>
            {project.concept && <span className="pc-concept">CONCEPT VISUAL</span>}
          </div>
          <h1 className="detail-hero-title">{project.name}</h1>
          <p className="detail-hero-meta"><MapPin /> {project.location}</p>
          <div className="detail-hero-facts">
            <div><span>CATEGORY</span><strong>{project.category}</strong></div>
            <div><span>STATUS</span><strong>{project.status}</strong></div>
            <div><span>{project.status === 'Upcoming' ? 'EXPECTED LAUNCH' : project.status === 'Completed' ? 'COMPLETED' : 'EXPECTED'}</span><strong>{project.year}</strong></div>
            <div><span>DEVELOPED AREA</span><strong>{project.area}</strong></div>
          </div>
        </div>
      </section>

      <StickyProjectNav />

      {/* OVERVIEW */}
      <section id="overview" className="section detail-overview">
        <div className="container detail-overview-grid">
          <SectionHeading eyebrow="PROJECT OVERVIEW" title={project.name} sub={project.location} />
          <div>
            <Reveal variant="up">
              {project.longDescription.map((p, i) => <p key={i} className="detail-lead">{p}</p>)}
            </Reveal>
            <Reveal variant="up" delay={100}>
              <div className="detail-config">
                <h3>Configuration</h3>
                <ul>
                  {project.configuration.map((c) => (
                    <li key={`${c.type}-${c.area}`}>
                      <span className="dc-type">{c.type}</span>
                      <span className="dc-size">{c.size}</span>
                      <span className="dc-area">{c.area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal variant="up" delay={160}>
              <div className="detail-fact-strip">
                <div><strong>{project.units}</strong><span>Units</span></div>
                <div><strong>{project.area}</strong><span>Developed</span></div>
                <div><strong>{project.year}</strong><span>{project.status === 'Upcoming' ? 'Launch' : project.status === 'Completed' ? 'Delivered' : 'Complete'}</span></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture" className="section section-dark detail-architecture">
        <div className="container">
          <SectionHeading eyebrow="ARCHITECTURE" title="The design thinking." dark align="between" />
          <div className="arch-grid">
            {project.architecture.map((a, i) => (
              <Reveal key={a.title} variant="up" delay={i * 90} className="arch-card">
                <span className="arch-num">0{i + 1}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES & SPECIFICATIONS */}
      <section id="amenities" className="section detail-amenities">
        <div className="container">
          <SectionHeading eyebrow="AMENITIES & SPECIFICATIONS" title={<>Life at<br /><em>{project.name}.</em></>} />
          <div className="amen-grid">
            <div className="amen-col">
              <h3 className="amen-col-title">AMENITIES</h3>
              <ul className="amen-list">
                {project.amenities.map((a) => <li key={a}><Check />{a}</li>)}
              </ul>
            </div>
            <div className="amen-col">
              <h3 className="amen-col-title">SPECIFICATIONS</h3>
              <ul className="amen-list">
                {project.specifications.map((s) => <li key={s}><Check />{s}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section section-dark detail-gallery">
        <div className="container">
          <SectionHeading eyebrow="MOMENTS GALLERY" title="Gallery" dark />
          <Gallery images={project.gallery} label={project.name} />
        </div>
      </section>

      {/* PROGRESS / COMPLETION */}
      {project.status === 'Ongoing' && (
        <section className="section detail-progress">
          <div className="container">
            <SectionHeading eyebrow="CONSTRUCTION UPDATE" title="Tower rising on schedule." align="between" />
            <div className="detail-progress-row">
              <ProgressBar value={project.progress} label="OVERALL CONSTRUCTION PROGRESS" active />
              <div className="detail-progress-meta">
                <span><strong>{project.expectedCompletion}</strong> Expected Completion</span>
                <span><strong>{project.area}</strong> Under Development</span>
                <p className="demo-tag">DEMO / SAMPLE PROGRESS DATA</p>
              </div>
            </div>
          </div>
        </section>
      )}
      {project.status === 'Upcoming' && (
        <section className="section detail-progress">
          <div className="container">
            <SectionHeading eyebrow="WHAT'S NEXT" title="A future address is being planned." align="between" />
            <div className="detail-progress-row">
              <div className="detail-concept-note demo-tag">
                <strong>CONCEPT VISUAL / ARTIST IMPRESSION</strong> — imagery shown is conceptual and subject to change.
              </div>
              <div className="detail-progress-meta">
                <span><strong>{project.expectedLaunch}</strong> Expected Launch</span>
                <span><strong>{project.area}</strong> Planned Development</span>
                <span><strong>{project.units}</strong> Planned Units</span>
              </div>
            </div>
          </div>
        </section>
      )}
      {project.status === 'Completed' && (
        <section className="section detail-progress">
          <div className="container">
            <SectionHeading eyebrow="DELIVERED" title="A promise kept, in stone." align="between" />
            <div className="detail-progress-row">
              <div className="detail-delivered-badge"><span>✓</span> Handover completed {project.delivered} with 100% specification match.</div>
              <div className="detail-progress-meta">
                <span><strong>{project.delivered}</strong> Year of Handover</span>
                <span><strong>{project.units}</strong> Homes & Spaces in Residence</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* LOCATION & CONNECTIVITY */}
      <section id="location" className="section section-dark detail-location">
        <div className="container">
          <div className="location-grid">
            <div className="location-content">
              <SectionHeading eyebrow="LOCATION & CONNECTIVITY" title={<>Where<br /><em>{project.name}</em> stands.</>} dark />
              <ul className="connect-list">
                {project.connectivity.map((c) => <li key={c}><MapPin />{c}</li>)}
              </ul>
            </div>
            <Reveal variant="zoom" className="location-map">
              <img src={project.gallery[1] || project.heroImage} alt={`Location of ${project.name}`} loading="lazy" />
              <span className="location-pin"><MapPin /></span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section detail-testimonials">
        <div className="container">
          <SectionHeading eyebrow="CLIENT STORIES" title={<>What residents and<br /><em>tenants say.</em></>} sub="Demo testimonials with placeholder video — not real customer claims." align="center" />
          {videoList.length > 0 && (
            <div className="video-labels">
              {videoList.map((v, i) => (
                <span key={v.id}>{`Video 0${i + 1}`} · {['Resident Experience', 'Homebuyer Experience', 'Community Experience', 'Investor Experience'][i] || 'Client Experience'}</span>
              ))}
            </div>
          )}
          <div className="testimonial-grid">
            {videoList.map((v, i) => <TestimonialCard key={v.id} testimonial={v} onPlay={setActiveVideo} index={i} />)}
          </div>
          {writtenList.length > 0 && (
            <div className="written-grid detail-written-grid">
              {writtenList.map((w, i) => (
                <Reveal key={w.id} variant="up" delay={i * 70} className="written-card">
                  <p className="written-quote">“{w.quote}”</p>
                  <p className="written-name">{w.clientName}</p>
                  <p className="written-project">{w.project}</p>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ENQUIRE */}
      <section id="enquire" className="section section-dark detail-enquire">
        <div className="container">
          <SectionHeading eyebrow="ENQUIRE" title={<>Interested in<br /><em>{project.name}?</em></>} sub="Share your details and our development team will respond within one working day." dark align="center" />
          <Reveal variant="up" delay={80} className="detail-enquire-panel">
            <EnquiryForm compact preselect={`${project.name} — ${project.city}`} />
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="section related-projects">
        <div className="container">
          <SectionHeading eyebrow="MORE DEVELOPMENTS" title={<>Continue<br /><em>exploring.</em></>} align="between" />
          <div className="featured-grid related-grid">
            {related.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
          </div>
        </div>
      </section>

      <VideoModal
        video={activeVideo?.video}
        title={activeVideo ? `${activeVideo.clientName} — ${activeVideo.project}` : null}
        onClose={() => setActiveVideo(null)}
      />
    </>
  )
}