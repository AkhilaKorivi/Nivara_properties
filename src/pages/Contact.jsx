import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import EnquiryForm from '../components/EnquiryForm'
import { img } from '../lib/img'
import { Phone, Mail, MapPin, Instagram, Facebook, LinkedIn, YouTube } from '../components/Icons'

const offices = [
  { city: 'Mumbai — Headquarters', line: 'Nivara House, 21 Sea View Road, Worli, Mumbai 400018' },
  { city: 'Hyderabad Studio', line: '4th Floor, Pearl Arcade, Gachibowli, Hyderabad 500032' },
  { city: 'Pune Studio', line: 'Level 3, Aurelia Court, Baner Road, Pune 411045' },
  { city: 'Bengaluru Studio', line: 'Tower C, Nivara Campus, Outer Ring Road, Bengaluru 560103' }
]

const socials = [
  { Icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { Icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { Icon: LinkedIn, label: 'LinkedIn', href: 'https://linkedin.com' },
  { Icon: YouTube, label: 'YouTube', href: 'https://youtube.com' }
]

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT NIVARA"
        title={<>Let's create<br /><em>what's next.</em></>}
        sub="Start a conversation about our developments, land opportunities or partnerships."
        image={img('photo-1497366754035-f200968a6e72', 1920)}
      />

      <section className="section contact-page">
        <div className="container contact-grid">
          <aside className="contact-aside">
            <SectionHeading eyebrow="OFFICE INFORMATION" title={<>Reach our<br /><em>development team.</em></>} />
            <div className="contact-lines">
              <div className="contact-line"><Phone /><div><span>PHONE</span><a href="tel:+919876543210">+91 98765 43210</a></div></div>
              <div className="contact-line"><Mail /><div><span>EMAIL</span><a href="mailto:sales@nivara.properties">sales@nivara.properties</a></div></div>
              <div className="contact-line"><MapPin /><div><span>REGISTERED OFFICE</span><p>Nivara House, 21 Sea View Road, Worli, Mumbai 400018</p></div></div>
            </div>
            <SectionHeading eyebrow="OFFICES" />
            <div className="office-list">
              {offices.map((o) => (
                <div key={o.city} className="office">
                  <p className="office-city">{o.city}</p>
                  <p className="office-line">{o.line}</p>
                </div>
              ))}
            </div>
            <div className="contact-social">
              <p>FOLLOW NIVARA</p>
              <div className="footer-social">
                {socials.map(({ Icon, label, href }) => (
                  <a key={label} href={href} aria-label={label} className="social-link" target="_blank" rel="noreferrer">
                    <Icon width={18} height={18} />
                  </a>
                ))}
              </div>
              <span className="demo-tag">Demo links — not real social profiles</span>
            </div>
          </aside>

          <div className="contact-form-col">
            <SectionHeading eyebrow="ENQUIRY FORM" title={<>Tell us about<br /><em>your requirement.</em></>} />
            <Reveal variant="up" delay={80}>
              <EnquiryForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section contact-map-section">
        <div className="container">
          <SectionHeading eyebrow="LOCATION MAP" title={<>Find us<br /><em>in the city.</em></>} align="center" />
          <Reveal variant="zoom" className="contact-map">
            <img src={img('photo-1486325212027-8081e485255e', 1600)} alt="Office location" loading="lazy" />
            <div className="contact-map-overlay">
              <span className="location-pin"><MapPin /></span>
              <p>Nivara House · Worli Sea Face · Mumbai</p>
              <span className="demo-tag">DEMO MAP</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}