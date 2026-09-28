import { useState } from 'react'
import { Close, Plus } from './Icons'

export default function Gallery({ images, label = 'Gallery' }) {
  const [active, setActive] = useState(null)

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {images.slice(0, 4).map((src, i) => (
          <button
            key={i}
            className={`gallery-item ${i === 0 ? 'gallery-item-primary' : ''}`}
            onClick={() => setActive(i)}
          >
            <img src={src} alt={`${label} ${i + 1}`} loading="lazy" />
            <span className="gallery-zoom"><Plus /></span>
          </button>
        ))}
      </div>
      {images.length > 4 && (
        <p className="gallery-more">+ {images.length - 4} further frames in moments gallery</p>
      )}

      {active !== null && (
        <div className="modal-overlay gallery-overlay" onClick={() => setActive(null)}>
          <div className="gallery-lightbox" onClick={(e) => e.stopPropagation()}>
            <img src={images[active]} alt={`${label} ${active + 1}`} />
            <button className="modal-close" onClick={() => setActive(null)} aria-label="Close"><Close /></button>
            <div className="gallery-lightbox-foot">
              <span>{label} — frame {String(active + 1).padStart(2, '0')}</span>
              <div className="gallery-lightbox-nav">
                <button onClick={() => setActive((active + images.length - 1) % images.length)}>← PREV</button>
                <button onClick={() => setActive((active + 1) % images.length)}>NEXT →</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}