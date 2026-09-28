import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import NewsCard from '../components/NewsCard'
import JournalCard from '../components/JournalCard'
import { journal } from '../data/journal'
import { news } from '../data/news'
import { img } from '../lib/img'

const categories = ['ALL', 'NEWS', 'ARCHITECTURE', 'DESIGN', 'REAL ESTATE', 'SUSTAINABILITY']

export default function Journal() {
  const [cat, setCat] = useState('ALL')
  const items = [
    ...news.map((n) => ({ ...n, source: 'News' })),
    ...journal.map((a) => ({ ...a, source: 'Journal' }))
  ]
  const filtered = cat === 'ALL' ? items : items.filter((i) => (cat === 'NEWS' ? i.source === 'News' : i.category === cat))

  return (
    <>
      <PageHeader
        eyebrow="IDEAS & INSIGHTS"
        title={<>The Nivara Journal</>}
        sub="Long-form stories on architecture, design, real estate and sustainability from our studios and sites."
        image={img('photo-1517245386807-bb43f82c33c4', 1920)}
      />

      <section className="section journal-page">
        <div className="container">
          <div className="journal-cats">
            {categories.map((c) => (
              <button
                key={c}
                className={`journal-cat ${cat === c ? 'is-active' : ''}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="news-grid journal-grid">
            {filtered.map((item, i) =>
              item.source === 'News'
                ? <NewsCard key={item.slug} item={item} index={i} />
                : <JournalCard key={item.slug} article={item} index={i} />
            )}
          </div>
          {!filtered.length && <p className="empty-state">No articles in this category yet.</p>}

          <Reveal variant="fade" delay={120} className="journal-note">
            <p>All articles on this page are <span className="demo-tag">DEMO / SAMPLE CONTENT</span> — written for demonstration, not real editorial.</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}