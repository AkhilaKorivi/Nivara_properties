import AwardIcon from './AwardIcon'

export default function AwardCard({ award, onOpen, index = 0 }) {
  return (
    <button
      className="award-card"
      onClick={() => onOpen(award)}
      style={{ ['--aw-index']: index }}
    >
      <div className="ac-media">
        <img src={award.image} alt={award.title} loading="lazy" />
        <div className="ac-shade" />
        <span className="ac-year">{award.year}</span>
        <span className="ac-view">VIEW <span>→</span></span>
      </div>
      <div className="ac-body">
        <AwardIcon />
        <div className="ac-text">
          <p className="ac-category">{award.category}</p>
          <h3 className="ac-title">{award.title}</h3>
          <p className="ac-project">{award.project}</p>
        </div>
      </div>
      <div className="ac-frame" />
    </button>
  )
}