import { Link } from 'react-router-dom'
import { Calendar } from './Icons'

export default function JournalCard({ article, index = 0, wide = false }) {
  return (
    <Link
      to={`/journal/${article.slug}`}
      className={`journal-card ${wide ? 'is-wide' : ''}`}
      style={{ ['--jr-index']: index }}
    >
      <div className="jc-media">
        <img src={article.image} alt={article.title} loading="lazy" />
        <div className="jc-shade" />
        <span className="nc-badge">{article.category}</span>
      </div>
      <div className="jc-body">
        <p className="nc-date"><Calendar />{article.date} · {article.readTime} read</p>
        <h3 className="jc-title">{article.title}</h3>
        <p className="nc-desc">{article.excerpt}</p>
        <span className="pc-cta nc-cta">READ ARTICLE <span>→</span></span>
      </div>
    </Link>
  )
}