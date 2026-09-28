import Reveal from './Reveal'
import { useReducedMotion } from '../hooks/useReveal'

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = 'left',
  dark = false,
  titleAs: Tag = 'h2',
  customEnd
}) {
  const reduced = useReducedMotion()
  return (
    <div className={`section-head section-head-${align} ${dark ? 'is-dark' : ''}`}>
      <div className="section-head-main">
        {eyebrow && (
          <Reveal variant="fade" className="section-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">{eyebrow}</span>
          </Reveal>
        )}
        {title && (
          <Reveal variant="up" className="section-title-wrap">
            <Tag className="section-title">{title}</Tag>
          </Reveal>
        )}
        {sub && (
          <Reveal variant="up" delay={reduced ? 0 : 120} className="section-sub">
            <p>{sub}</p>
          </Reveal>
        )}
      </div>
      {customEnd && (
        <Reveal variant="up" delay={reduced ? 0 : 200} className="section-head-end">
          {customEnd}
        </Reveal>
      )}
    </div>
  )
}