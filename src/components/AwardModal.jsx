import { useEffect } from 'react'
import AwardIcon from './AwardIcon'
import { Close } from './Icons'
import { Link } from 'react-router-dom'

export default function AwardModal({ award, onClose }) {
  useEffect(() => {
    if (!award) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [award, onClose])

  if (!award) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal award-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><Close /></button>
        <div className="award-modal-media">
          <img src={award.image} alt={award.title} />
          <span className="ac-year modal-year">{award.year}</span>
        </div>
        <div className="award-modal-body">
          <span className="award-modal-ribbon">DEMO / SAMPLE CONTENT</span>
          <div className="award-modal-head">
            <AwardIcon />
            <div>
              <p className="ac-category">{award.category}</p>
              <h3 className="ac-title">{award.title}</h3>
              <p className="ac-project">{award.project}</p>
            </div>
          </div>
          <p className="award-modal-desc">{award.description}</p>
          <div className="award-modal-foot">
            <span className="award-modal-year-label">Awarded {award.year}</span>
            <Link to={`/projects/${award.relatedSlug || 'the-arcadia'}`} className="text-link">
              VIEW RELATED PROJECT →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}