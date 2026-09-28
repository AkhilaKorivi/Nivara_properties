import Reveal from './Reveal'
import { milestones } from '../data/team'

export default function Timeline({ compact = false }) {
  return (
    <div className={`timeline ${compact ? 'timeline-compact' : ''}`}>
      {milestones.map((m, i) => (
        <div className="timeline-track" key={m.year}>
          <Reveal variant="up" className="timeline-row" style={{ ['--tl-index']: i }}>
            <span className="timeline-node" />
            <div className="timeline-meta">
              <span className="timeline-year">{m.year}</span>
              <span className="timeline-title">{m.title}</span>
            </div>
            <div className="timeline-text">
              <p>{m.text}</p>
            </div>
          </Reveal>
        </div>
      ))}
    </div>
  )
}