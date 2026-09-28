import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Button, { TextLink } from '../components/Button'
import ProjectCard from '../components/ProjectCard'
import StatusNav from '../components/StatusNav'
import Stats from '../components/Stats'
import Timeline from '../components/Timeline'
import LocationCard from '../components/LocationCard'
import AwardCard from '../components/AwardCard'
import AwardModal from '../components/AwardModal'
import NewsCard from '../components/NewsCard'
import JournalCard from '../components/JournalCard'
import TestimonialCard from '../components/TestimonialCard'
import VideoModal from '../components/VideoModal'
import EnquiryForm from '../components/EnquiryForm'
import { projects } from '../data/projects'
import { awards } from '../data/awards'
import { news } from '../data/news'
import { journal } from '../data/journal'
import { locations } from '../data/locations'
import { videoTestimonials } from '../data/testimonials'
import { values } from '../data/team'
import { img } from '../lib/img'
import { Leaf, Chip, Spark, Building, Phone, Mail, MapPin, Instagram, Facebook, LinkedIn, YouTube } from '../components/Icons'

const homeContactSocial = [
  { Icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { Icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { Icon: LinkedIn, label: 'LinkedIn', href: 'https://linkedin.com' },
  { Icon: YouTube, label: 'YouTube', href: 'https://youtube.com' }
]

const featured = ['nivara-one', 'the-arcadia', 'meridian-district', 'nivara-business-park']

const sustain = [
  { icon: Leaf, title: 'Green Architecture', text: 'Facades tuned to climate, shade, wind and light — buildings that need less energy because they are designed better.' },
  { icon: Spark, title: 'Energy Efficiency', text: 'Solar-assisted systems, district cooling and smart metering cut operating energy by up to a third versus convention.' },
  { icon: Chip, title: 'Smart Technology', text: 'Buildings instrumented with intelligence that learns occupancy, reports energy and keeps security calm and invisible.' },
  { icon: Building, title: 'Responsible Development', text: 'Water in closed loops, materials with measured carbon, and density handled with humanity at every scale.' }
]

export default function Home() {
  const [activeAward, setActiveAward] = useState(null)
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <>
      <Hero />

      {/* 1. Company Introduction */}
      <section className="section intro">
        <div className="container intro-grid">
          <div className="intro-media">
            <Reveal variant="zoom" className="intro-img-frame">
              <img src={img('photo-1487958449943-2429e8be8625', 1400)} alt="Nivara architecture" loading="lazy" />
            </Reveal>
            <Reveal variant="up" delay={200} className="intro-card">
              <p className="intro-card-num">15+</p>
              <p className="intro-card-label">Years Shaping Cities</p>
            </Reveal>
          </div>
          <div className="intro-content">
            <SectionHeading
              eyebrow="WHO WE ARE"
              title={<>A development house built on <em>architecture, quality</em> and <em>long-term value</em>.</>}
              sub="Nivara Properties is a premium real-estate development company. We design and deliver residences, workplaces and mixed-use districts across India’s leading cities — with a single conviction: that buildings should serve people for generations, not just impress them for a season."
            />
            <Reveal variant="up" delay={140}>
              <div className="value-chips">
                {values.map((v) => <span key={v.title} className="value-chip">{v.title}</span>)}
              </div>
            </Reveal>
            <Reveal variant="up" delay={220}>
              <div className="intro-links">
                <Button to="/about" variant="solid">MORE ABOUT NIVARA</Button>
                <TextLink to="/projects">OUR DEVELOPMENTS</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Animated Statistics */}
      <section className="section stats-section">
        <div className="container">
          <SectionHeading
            eyebrow="THE NUMBERS"
            title="Measured. Delivered. Enduring."
            align="center"
            sub="A track record expressed in scale — demo figures for demonstration purposes."
          />
          <Stats />
        </div>
      </section>

      {/* 3. About Nivara */}
      <section className="section about-preview">
        <div className="container about-preview-grid">
          <div className="about-preview-content">
            <SectionHeading
              eyebrow="ABOUT NIVARA"
              title={<>Building landmarks<br /><em>is our craft.</em></>}
              sub="From waterfront residences to garden districts, every Nivara development begins with the same question: how will people live here in the year 2050? The answer drives our architecture, our materials and our patient, deliberate way of building."
            />
            <Reveal variant="up" delay={160}>
              <TextLink to="/about" className="about-readmore">READ MORE</TextLink>
            </Reveal>
            <Reveal variant="up" delay={240}>
              <div className="about-preview-points">
                <div><span className="app-num">01</span><p><strong>Design-led development</strong> — in-house architecture studio from first sketch to handover.</p></div>
                <div><span className="app-num">02</span><p><strong>Buildings for decades</strong> — materials, systems and communities planned for forty-year lives.</p></div>
              </div>
            </Reveal>
          </div>
          <Reveal variant="zoom" className="about-preview-media">
            <img src={img('photo-1600585154340-be6161a56a0c', 1500)} alt="Nivara residence" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* 4. Featured Projects */}
      <section className="section section-dark featured">
        <div className="container">
          <SectionHeading
            eyebrow="SIGNATURE DEVELOPMENTS"
            title="Featured Projects"
            sub="A selection of the landmarks that define the Nivara portfolio."
            align="between"
            dark
            customEnd={<Button to="/projects" variant="ghost">ALL PROJECTS</Button>}
          />
          <div className="featured-grid">
            {featured.map((slug, i) => {
              const p = projects.find((x) => x.slug === slug)
              return p ? <ProjectCard key={slug} project={p} large={i < 2} index={i} /> : null
            })}
          </div>
        </div>
      </section>

      {/* 5. Project Status Navigation */}
      <section className="section status-strip">
        <div className="container">
          <Reveal variant="up">
            <p className="status-strip-label">EXPLORE THE PORTFOLIO BY STAGE</p>
          </Reveal>
          <StatusNav />
        </div>
      </section>

      {/* 6. Architecture / Design Philosophy */}
      <section className="section philosophy">
        <div className="container philosophy-grid">
          <div className="philosophy-media">
            <Reveal variant="zoom" className="philosophy-img-main">
              <img src={img('photo-1449824913935-59a10b8d2000', 1500)} alt="Modern architecture" loading="lazy" />
            </Reveal>
            <Reveal variant="up" delay={180} className="philosophy-img-sub">
              <img src={img('photo-1522708323590-d24dbb6b0267', 900)} alt="Premium interior" loading="lazy" />
            </Reveal>
          </div>
          <div className="philosophy-content">
            <SectionHeading
              eyebrow="ARCHITECTURE & DESIGN PHILOSOPHY"
              title={<>Modern architecture,<br /><em>designed around people.</em></>}
            />
            <Reveal variant="up" delay={80}>
              <p className="philosophy-lead">We believe architecture is a service to daily life — every facade tuned to climate, every plan shaped around light, every material chosen to age with dignity.</p>
            </Reveal>
            <div className="philosophy-list">
              {[
                ['Natural Light', 'Orientations and openings choreographed around the sun — homes that glow without lamps.'],
                ['Functional Design', 'Spatial planning around real life: work, family, rest and the in-between moments.'],
                ['Material Honesty', 'Stone, timber and metal selected on a forty-year curve of durability and grace.'],
                ['Human-Centered Spaces', 'Scale, acoustics and proportion put the person — not the plan — at the centre.']
              ].map(([t, d], i) => (
                <Reveal key={t} variant="up" delay={140 + i * 60} className="philosophy-item">
                  <span className="philosophy-num">0{i + 1}</span>
                  <div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Development Journey */}
      <section className="section journey">
        <div className="container">
          <SectionHeading
            eyebrow="OUR JOURNEY"
            title={<>Fifteen years of<br /><em>patient construction.</em></>}
            sub="From a single Mumbai project to a multi-city portfolio — the milestones that made Nivara. Demo timeline for demonstration."
            align="center"
          />
          <Timeline compact />
        </div>
      </section>

      {/* 8. Sustainability */}
      <section className="section section-dark sustainability">
        <div className="container">
          <SectionHeading
            eyebrow="SUSTAINABILITY"
            title={<>Building for the planet,<br /><em>not just the present.</em></>}
            sub="Sustainability is not a feature list at Nivara — it is the ordering principle of every design."
            dark
            align="center"
          />
          <div className="sustain-grid">
            {sustain.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} variant="up" delay={i * 70} className="sustain-card">
                <span className="sustain-icon"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal variant="up" delay={120} className="sustain-banner">
            <div className="sustain-banner-media">
              <img src={img('photo-1470770841072-f978cf4d019e', 1400)} alt="Sustainable development" loading="lazy" />
            </div>
            <div className="sustain-banner-text">
              <p className="sustain-banner-eyebrow">WATER · ENERGY · CARBON</p>
              <h3>Closed loops, published numbers.</h3>
              <p>Across our delivered portfolio we target near-net-zero urban water footprints, solar-assisted energy systems and material ledgers tracked project by project.</p>
              <Button to="/journal/building-for-the-planet" variant="ghost">READ OUR SUSTAINABILITY JOURNAL</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. Locations */}
      <section className="section locations">
        <div className="container">
          <SectionHeading
            eyebrow="WHERE WE BUILD"
            title="Locations"
            sub="Four cities today — two more under study. Each market, one address at a time."
            align="between"
            customEnd={<Button to="/locations" variant="ghost">ALL LOCATIONS</Button>}
          />
          <div className="locations-grid">
            {locations.map((l, i) => <LocationCard key={l.slug} location={l} index={i} />)}
          </div>
        </div>
      </section>

      {/* 10. Awards */}
      <section className="section section-dark awards">
        <div className="container">
          <SectionHeading
            eyebrow="DEMO / SAMPLE CONTENT"
            title="Awards & Achievements"
            sub="Recognition for the way we build. Fictional awards displayed for demonstration — not real industry honours."
            dark
            align="center"
          />
          <div className="awards-grid">
            {awards.map((a, i) => <AwardCard key={a.slug} award={a} onOpen={setActiveAward} index={i} />)}
          </div>
        </div>
        <div className="container achievements">
          <Reveal variant="fade" className="section-eyebrow achievements-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">OUR ACHIEVEMENTS</span>
          </Reveal>
          <Stats dark />
          <div className="milestone-mini">
            {['2011 Founded', '2014 First Landmark', '2017 Multi-City', '2023 12M Sq. Ft.', '2026 Next Chapter'].map((m, i) => (
              <Reveal key={m} variant="up" delay={i * 60} className="milestone-mini-item"><span>{m}</span></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Client Video Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT OUR CLIENTS SAY"
            title={<>Experiences that speak<br /><em>for themselves.</em></>}
            sub="Demo testimonials with placeholder video — shown for demonstration, not real customer claims."
            align="between"
            customEnd={<Button to="/about" variant="ghost">ALL STORIES</Button>}
          />
          <div className="testimonial-grid">
            {videoTestimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} onPlay={setActiveVideo} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 12. Latest News */}
      <section className="section section-dark news">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT'S HAPPENING AT NIVARA"
            title="Latest News"
            sub="Demo / sample news content shown for demonstration."
            dark
            align="between"
            customEnd={<Button to="/journal" variant="ghost">VIEW JOURNAL</Button>}
          />
          <div className="news-grid">
            {news.map((n, i) => <NewsCard key={n.slug} item={n} index={i} />)}
          </div>
        </div>
      </section>

      {/* 13. Journal */}
      <section className="section journal-preview">
        <div className="container">
          <SectionHeading
            eyebrow="THE NIVARA JOURNAL"
            title={<>Ideas in architecture,<br /><em>design and urban life.</em></>}
            sub="Long-form stories from our studios and sites."
            align="between"
            customEnd={<Button to="/journal" variant="ghost">VIEW ALL JOURNAL</Button>}
          />
          <div className="journal-grid">
            {journal.slice(0, 3).map((a, i) => <JournalCard key={a.slug} article={a} index={i} />)}
          </div>
        </div>
      </section>

      {/* 14. Careers */}
      <section className="section careers-cta">
        <div className="container careers-cta-grid">
          <Reveal variant="zoom" className="careers-cta-media">
            <img src={img('photo-1524758631624-e2822e304c36', 1400)} alt="Working with Nivara" loading="lazy" />
          </Reveal>
          <div className="careers-cta-content">
            <SectionHeading
              eyebrow="CAREERS"
              title={<>Build a city.<br /><em>Make a craft of it.</em></>}
              sub="Architects, engineers, planners and builders — join a company that treats development as a discipline, not a volume play."
            />
            <Reveal variant="up" delay={140}>
              <div className="careers-cta-actions">
                <Button to="/careers" variant="solid">EXPLORE CAREERS</Button>
                <span className="careers-count">35+ OPEN ROLES</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 15. Contact / Enquiry */}
      <section className="section section-dark contact-home">
        <div className="container">
          <SectionHeading
            eyebrow="CONTACT"
            title={<>Let's create what's next.</>}
            sub="Share your requirement — residential, commercial or mixed-use — and our team will respond within one working day."
            dark
            align="center"
          />
          <Reveal variant="up" delay={100}>
            <div className="contact-home-panel">
              <EnquiryForm />
              <div className="contact-home-meta">
                <div className="contact-line">
                  <Phone />
                  <div><span>PHONE</span><a href="tel:+919876543210">+91 98765 43210</a></div>
                </div>
                <div className="contact-line">
                  <Mail />
                  <div><span>EMAIL</span><a href="mailto:sales@nivara.properties">sales@nivara.properties</a></div>
                </div>
                <div className="contact-line">
                  <MapPin />
                  <div><span>HEAD OFFICE</span><p>Nivara House, 21 Sea View Road, Worli, Mumbai 400018</p></div>
                </div>
                <div className="contact-home-social">
                  <p>FOLLOW NIVARA</p>
                  <div className="footer-social">
                    {homeContactSocial.map(({ Icon, label, href }) => (
                      <a key={label} href={href} aria-label={label} className="social-link" target="_blank" rel="noreferrer">
                        <Icon width={18} height={18} />
                      </a>
                    ))}
                  </div>
                  <span className="demo-tag">Demo links — not real social profiles</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AwardModal award={activeAward} onClose={() => setActiveAward(null)} />
      <VideoModal
        video={activeVideo?.video}
        title={activeVideo ? `${activeVideo.clientName} — ${activeVideo.project}` : null}
        onClose={() => setActiveVideo(null)}
      />
    </>
  )
}