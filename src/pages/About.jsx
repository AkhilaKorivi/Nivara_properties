import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Button, { TextLink } from '../components/Button'
import Timeline from '../components/Timeline'
import Stats from '../components/Stats'
import TeamCard from '../components/TeamCard'
import TestimonialCard from '../components/TestimonialCard'
import VideoModal from '../components/VideoModal'
import EnquiryForm from '../components/EnquiryForm'
import { videoTestimonials, writtenTestimonials } from '../data/testimonials'
import { team } from '../data/team'
import { awards } from '../data/awards'
import { img, VIDEOS } from '../lib/img'
import { QuoteMark } from '../components/Icons'

const pillars = [
  { title: 'Vision', text: 'Cities deserve development with restraint — landmarks that respect their sites, citizens and decades ahead. We build for the year 2050, not the quarter ahead.' },
  { title: 'Mission', text: 'To design and deliver homes, workplaces and districts of lasting quality across India — through in-house architecture, honest engineering and a handover culture our clients trust.' },
  { title: 'Philosophy', text: 'People are the plan. Light, scale, material and community come before volume. If a building will not serve its owners in forty years, we will not build it in one.' }
]

const approach = [
  ['01', 'Listen to the Land', 'Every development begins on site — measuring light, wind, trees, access and the culture of the street before architects draw a single line.'],
  ['02', 'Design in House', 'Our own architecture and design studio carries each project from first sketch to final stone, so the vision is never diluted in translation.'],
  ['03', 'Engineer for Decades', 'Weather, load and life are stress-tested in-house. Systems are chosen on a 40-year curve of durability, service and operating cost, not launch-day shine.'],
  ['04', 'Deliver the Promise', 'Handover is the moment of truth. Mock-units, documented specifications and a client care desk continue beyond possession — a culture set since our first project.']
]

export default function About() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <>
      <PageHeader
        eyebrow="ABOUT NIVARA"
        title={<>Crafting landmarks.<br /><em>Shaping tomorrow.</em></>}
        sub="A premium real-estate development company built on architecture, quality, innovation and long-term value."
        image={img('photo-1515263487990-61b07816b324', 1920)}
      />

      {/* OUR STORY */}
      <section className="section story">
        <div className="container story-grid">
          <div className="story-media">
            <Reveal variant="zoom" className="story-img">
              <img src={img('photo-1487958449943-2429e8be8625', 1400)} alt="Our story" loading="lazy" />
            </Reveal>
            <Reveal variant="up" delay={180} className="story-quote">
              <p className="story-quote-inner">“Buildings should serve people for generations, not impress them for a season.”</p>
            </Reveal>
          </div>
          <div className="story-content">
            <SectionHeading
              eyebrow="OUR STORY"
              title={<>Fifteen years, one<br /><em>conviction.</em></>}
            />
            <Reveal variant="up" delay={80}>
              <p className="story-p">Nivara Properties was founded in Mumbai in 2011 with a simple, stubborn idea: that Indian development deserved the same care as fine architecture. Where the market chased speed and square footage, Nivara would chase restraint, light and craft.</p>
            </Reveal>
            <Reveal variant="up" delay={160}>
              <p className="story-p">The first project — Aurelia Residences in Pune — set the template. Materials chosen on a forty-year curve, handover treated as the moment of truth, and a community that outlived the marketing material. From that foundation, Nivara grew to four cities, twenty-eight projects and more than twelve million square feet under management.</p>
            </Reveal>
            <Reveal variant="up" delay={220}>
              <div className="story-sign">
                <span className="story-sign-name">ARJUN MENON</span>
                <span className="story-sign-role">FOUNDER & MANAGING DIRECTOR</span>
                <span className="demo-tag">DEMO / SAMPLE CONTENT</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section section-dark who">
        <div className="container who-grid">
          <div className="who-media">
            <Reveal variant="zoom"><img src={img('photo-1460317442991-0ec209397118', 1400)} alt="Nivara community" loading="lazy" /></Reveal>
          </div>
          <div className="who-content">
            <SectionHeading
              eyebrow="WHO WE ARE"
              title={<>Developers. Designers.<br /><em>Planners.</em></>}
              sub="We are a design-led development company. Architecture, engineering, planning, landscape and construction work inside one practice, under one standard — so quality is a system, not a department."
              dark
            />
            <div className="who-stats">
              <Reveal variant="up" delay={100}><p><em>120+</em> Designers & Builders</p></Reveal>
              <Reveal variant="up" delay={160}><p><em>04</em> City Studios</p></Reveal>
              <Reveal variant="up" delay={220}><p><em>100%</em> In-House Architecture</p></Reveal>
            </div>
            <Reveal variant="up" delay={280}><span className="demo-tag">DEMO / SAMPLE COMPANY DATA</span></Reveal>
          </div>
        </div>
      </section>

      {/* OUR VISION / MISSION / PHILOSOPHY */}
      <section className="section pillars">
        <div className="container">
          <SectionHeading eyebrow="WHAT WE BELIEVE" title={<>Vision. Mission.<br /><em>Philosophy.</em></>} align="center" />
          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <Reveal key={p.title} variant="up" delay={i * 90} className="pillar">
                <span className="pillar-num">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="section journey">
        <div className="container">
          <SectionHeading eyebrow="OUR JOURNEY" title={<>A decade and a half<br /><em>in the making.</em></>} sub="Demo timeline of the company's development journey." align="center" />
          <Timeline />
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section section-dark approach">
        <div className="container">
          <SectionHeading eyebrow="OUR APPROACH" title={<>How we build,<br /><em>and why it lasts.</em></>} dark align="center" />
          <div className="approach-grid">
            {approach.map(([num, t, d], i) => (
              <Reveal key={t} variant="up" delay={i * 80} className="approach-item">
                <span className="approach-num">{num}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS & ACHIEVEMENTS */}
      <section className="section about-awards">
        <div className="container">
          <SectionHeading
            eyebrow="RECOGNITION FOR THE WAY WE BUILD"
            title={<>Awards & Achievements</>}
            sub="Fictional awards presented as demo/sample content — not real industry honours."
            align="between"
            customEnd={
              <div className="about-awards-actions">
                <Stats dark={false} />
              </div>
            }
          />
          <div className="about-awards-strip">
            {awards.map((a) => (
              <Reveal key={a.slug} variant="up" className="about-award">
                <span className="about-award-year">{a.year}</span>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.category} · {a.project}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT OUR CLIENTS SAY */}
      <section className="section testimonials">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT OUR CLIENTS SAY"
            title={<>Experiences that speak<br /><em>for themselves.</em></>}
            sub="Demo video testimonials with placeholder content — not real customer claims."
            align="center"
          />
          <div className="testimonial-grid">
            {videoTestimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} onPlay={setActiveVideo} index={i} />
            ))}
          </div>

          <div className="written-grid">
            {writtenTestimonials.map((w, i) => (
              <Reveal key={w.id} variant="up" delay={i * 70} className="written-card">
                <QuoteMark />
                <p className="written-quote">“{w.quote}”</p>
                <p className="written-name">{w.clientName}</p>
                <p className="written-project">{w.project} · {w.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP / TEAM */}
      <section className="section section-dark leadership">
        <div className="container">
          <SectionHeading
            eyebrow="LEADERSHIP & TEAM"
            title={<>The people behind<br /><em>the landmarks.</em></>}
            sub="Demo leadership profiles for presentation purposes."
            dark
            align="center"
          />
          <div className="team-grid">
            {team.map((m, i) => <TeamCard key={m.id} member={m} index={i} />)}
          </div>
        </div>
      </section>

      {/* LET'S CREATE WHAT'S NEXT */}
      <section className="section contact-home">
        <div className="container">
          <SectionHeading
            eyebrow="LET'S CREATE WHAT'S NEXT"
            title={<>Start a conversation<br /><em>with our team.</em></>}
            align="center"
          />
          <Reveal variant="up" delay={100}>
            <div className="contact-about-panel">
              <div className="about-video-card">
                <video muted loop playsInline preload="metadata" poster={img('photo-1480714378408-67cf0d13bc1b', 1200)}>
                  <source src={VIDEOS.about} type="video/mp4" />
                </video>
                <div className="about-video-shade" />
                <p className="about-video-label">THE NIVARA FILM · <span>DEMO VIDEO</span></p>
              </div>
              <EnquiryForm compact />
            </div>
          </Reveal>
          <div className="about-cta-line">
            <Reveal variant="up"><TextLink to="/careers">WORK WITH US</TextLink></Reveal>
            <Reveal variant="up" delay={80}><TextLink to="/contact">CONTACT DETAILS</TextLink></Reveal>
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