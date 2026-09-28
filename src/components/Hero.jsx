import { Link } from 'react-router-dom'
import { IMAGES, VIDEOS } from '../lib/img'
import VideoBg from './VideoBg'
import { ArrowDown } from './Icons'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <VideoBg src={VIDEOS.hero} poster={IMAGES.heroPoster} />
        <div className="hero-shade" />
        <div className="hero-vignette" />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">PREMIUM REAL-ESTATE DEVELOPER</p>
        <h1 className="hero-title">
          <span className="hero-title-line">NIVARA</span>
          <span className="hero-title-line">PROPERTIES</span>
        </h1>
        <p className="hero-statement">
          CRAFTING LANDMARKS.<br />
          <span className="hero-statement-gold">SHAPING TOMORROW.</span>
        </p>
        <div className="hero-cta">
          <Link to="/projects" className="btn btn-solid btn-lg">EXPLORE PROJECTS <span className="btn-arrow">→</span></Link>
          <Link to="/about" className="btn btn-ghost btn-lg">DISCOVER NIVARA <span className="btn-arrow">→</span></Link>
        </div>
      </div>

      <div className="hero-foot">
        <div className="hero-foot-meta">
          <span>MUMBAI</span><span className="hero-dot" /><span>HYDERABAD</span><span className="hero-dot" /><span>PUNE</span><span className="hero-dot" /><span>BENGALURU</span>
        </div>
        <span className="hero-scroll"><ArrowDown /> SCROLL</span>
      </div>
    </section>
  )
}