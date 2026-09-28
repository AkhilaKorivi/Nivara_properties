import { useRef } from 'react'
import { stats } from '../data/team'
import { useCounter } from '../hooks/useCounter'
import { useReveal } from '../hooks/useReveal'

function Stat({ stat, start, index }) {
  const value = useCounter(stat.value, { start, format: stat.format })
  return (
    <div className="stat" style={{ ['--st-index']: index }}>
      <p className="stat-value">
        {value}
        <span className="stat-suffix">{stat.suffix}</span>
      </p>
      <p className="stat-label">{stat.label}</p>
    </div>
  )
}

export default function Stats({ dark = true, showDemo = true }) {
  const [wrapRef, started] = useReveal()
  const inited = useRef(false)
  if (started && !inited.current) inited.current = true
  const trigger = inited.current

  return (
    <div className={`stats ${dark ? 'stats-dark' : ''}`} ref={wrapRef}>
      <div className="stats-grid">
        {stats.map((s, i) => (
          <Stat key={s.key} stat={s} start={trigger} index={i} />
        ))}
      </div>
      {showDemo && (
        <p className="demo-tag stats-demo">DEMO / SAMPLE COMPANY DATA — shown for demonstration only</p>
      )}
    </div>
  )
}