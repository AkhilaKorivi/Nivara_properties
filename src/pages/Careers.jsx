import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { img } from '../lib/img'
import { Check } from '../components/Icons'

const why = [
  ['Design-led culture', 'Sit beside architects, engineers and planners in one studio — your work shapes real cities.'],
  ['Craft over volume', 'We build fewer, better things. You get to do the work properly, not rush it.'],
  ['Four city studios', 'Mumbai, Hyderabad, Pune, Bengaluru — and two more opening. Move cities as your craft grows.'],
  ['Long horizons', 'Forty-year buildings need patient people. We invest in your growth the same way.'],
  ['Responsible building', 'Sustainability is wired into design, not a CSR slide. Be part of the solution.'],
  ['Handover pride', 'Every delivered home is a portfolio of work you can point to for decades.']
]

const roles = [
  { title: 'Senior Architect', team: 'Design Studio · Mumbai', type: 'Full-time' },
  { title: 'Project Engineer — Construction', team: 'Development · Bengaluru', type: 'Full-time' },
  { title: 'Interior Design Lead', team: 'Design Studio · Pune', type: 'Full-time' },
  { title: 'Sustainability Analyst', team: 'Innovation · Hyderabad', type: 'Full-time' },
  { title: 'Acquisitions Associate', team: 'Strategy · Mumbai', type: 'Full-time' },
  { title: 'Customer Experience Manager', team: 'Sales & Care · All Cities', type: 'Full-time' }
]

export default function Careers() {
  return (
    <>
      <PageHeader
        eyebrow="CAREERS AT NIVARA"
        title={<>Build a city.<br /><em>Make a craft of it.</em></>}
        sub="Join a company that treats development as a discipline — design-led, patient and proud of what it puts on the skyline."
        image={img('photo-1540575467063-178a50c2df87', 1920)}
      />

      <section className="section careers-intro">
        <div className="container careers-intro-grid">
          <div className="careers-intro-media">
            <Reveal variant="zoom"><img src={img('photo-1522071820081-009f0129c71c', 1400)} alt="Our people" loading="lazy" /></Reveal>
          </div>
          <div className="careers-intro-content">
            <SectionHeading
              eyebrow="COMPANY CULTURE"
              title={<>Where builders<br /><em>are designers too.</em></>}
              sub="At Nivara, the drawing board and the site talk to each other every morning. Architects walk the concrete; engineers sit in design reviews. It is the rare firm where craft and construction are one team — and that is exactly why people stay."
            />
            <div className="careers-intro-stats">
              <div><strong>120+</strong><span>Team Members</span></div>
              <div><strong>04</strong><span>City Studios</span></div>
              <div><strong>92%</strong><span>Employee Retention</span></div>
            </div>
            <span className="demo-tag">DEMO / SAMPLE COMPANY DATA</span>
          </div>
        </div>
      </section>

      <section className="section section-dark careers-why">
        <div className="container">
          <SectionHeading eyebrow="WHY WORK WITH NIVARA" title={<>The reasons people<br /><em>stay for decades.</em></>} dark align="center" />
          <div className="why-grid">
            {why.map(([t, d], i) => (
              <Reveal key={t} variant="up" delay={i * 60} className="why-card">
                <Check />
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section opportunities">
        <div className="container">
          <SectionHeading eyebrow="CAREER OPPORTUNITIES" title={<>Open roles now</>} sub="Role listings are demo content for presentation." align="between" customEnd={<Button to="/contact" variant="ghost">GENERAL APPLICATION</Button>} />
          <div className="roles-list">
            {roles.map((r, i) => (
              <Reveal key={r.title} variant="up" delay={i * 50} className="role-row">
                <div className="role-main">
                  <h3>{r.title}</h3>
                  <p>{r.team}</p>
                </div>
                <span className="role-type">{r.type}</span>
                <Button to="/contact" variant="ghost" className="btn-sm">APPLY <span className="btn-arrow">→</span></Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section careers-experience">
        <div className="container">
          <SectionHeading eyebrow="EMPLOYEE EXPERIENCE" title={<>A day at the studio,<br /><em>a decade on the skyline.</em></>} align="center" />
          <div className="experience-grid">
            {[
              [img('photo-1556761175-b413da4baf72', 1200), 'Morning design reviews'],
              [img('photo-1519389950473-47ba0277781c', 1200), 'Open-plan studio culture'],
              [img('photo-1497366216548-37526070297c', 1200), 'Learning & workshop weeks']
            ].map(([src, cap], i) => (
              <Reveal key={cap} variant="zoom" delay={i * 80} className="exp-card">
                <img src={src} alt={cap} loading="lazy" />
                <p>{cap}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark careers-final">
        <div className="container careers-final-inner">
          <Reveal variant="up">
            <h2 className="careers-final-title">Don't see your role?</h2>
            <p className="careers-final-sub">We are always looking for exceptional architects, engineers and planners. Send us your portfolio and a note on what you would build.</p>
            <div className="careers-final-actions">
              <Button to="/contact" variant="solid" className="btn-lg">SEND YOUR PORTFOLIO</Button>
              <Button to="/contact" variant="ghost" className="btn-lg">TALK TO OUR TEAM</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}