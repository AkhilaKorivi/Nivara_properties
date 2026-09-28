import { Link } from 'react-router-dom'
import { Calendar } from './Icons'

export default function NewsCard({ item, index = 0 }) {
  return (
    <Link to={`/journal/${item.slug}`} className="news-card" style={{ ['--nw-index']: index }}>
      <div className="nc-media">
        <img src={item.image} alt={item.title} loading="lazy" />
        <div className="nc-shade" />
        <span className="nc-badge">{item.category}</span>
      </div>
      <div className="nc-body">
        <p className="nc-date"><Calendar />{item.date} · {item.readTime} read</p>
        <h3 className="nc-title">{item.title}</h3>
        <p className="nc-desc">{item.description}</p>
        <span className="pc-cta nc-cta">READ MORE <span>→</span></span>
      </div>
    </Link>
  )
}