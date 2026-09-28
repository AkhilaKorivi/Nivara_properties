export default function ProgressBar({ value = 0, label, active = false }) {
  return (
    <div className={`progress-wrap ${active ? 'progress-active' : ''}`}>
      {label && <span className="progress-label">{label}</span>}
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${value}%` }} />
        <span className="progress-val">{value}%</span>
      </div>
    </div>
  )
}