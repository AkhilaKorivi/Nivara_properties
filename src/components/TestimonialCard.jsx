import { Play, QuoteMark } from './Icons'

export default function TestimonialCard({ testimonial, onPlay }) {
  return (
    <button className="testimonial-card" onClick={() => onPlay(testimonial)}>
      <div className="tc-media">
        <img src={testimonial.thumbnail} alt={testimonial.clientName} loading="lazy" />
        <div className="tc-shade" />
        <span className="tc-play"><Play /></span>
        <span className="tc-duration">{testimonial.duration}</span>
        <span className="tc-demo">DEMO VIDEO</span>
      </div>
      <div className="tc-body">
        <QuoteMark />
        <p className="tc-quote">“{testimonial.quote}”</p>
        <p className="tc-name">{testimonial.clientName}</p>
        <p className="tc-project">{testimonial.project}</p>
      </div>
    </button>
  )
}