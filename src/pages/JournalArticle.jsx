import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Gallery from '../components/Gallery'
import ProjectCard from '../components/ProjectCard'
import JournalCard from '../components/JournalCard'
import { journal } from '../data/journal'
import { news } from '../data/news'
import { getProject } from '../data/projects'
import { Calendar } from '../components/Icons'

export default function JournalArticle() {
  const { slug } = useParams()
  const [article, setArticle] = useState(null)

  useEffect(() => {
    const a = journal.find((x) => x.slug === slug) || news.find((x) => x.slug === slug)
    setArticle(a)
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!article) {
    return (
      <div className="container notfound-inline">
        <h1>Article not found.</h1>
        <Link to="/journal" className="btn btn-solid">BACK TO JOURNAL</Link>
      </div>
    )
  }

  const relatedProjects = article.relatedProjects?.map((s) => getProject(s)).filter(Boolean) || []
  const relatedStories = journal.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <>
      <section className="article-hero">
        <div className="article-hero-media">
          <img src={article.image} alt={article.title} />
          <div className="article-hero-shade" />
        </div>
        <div className="container article-hero-inner">
          <Breadcrumb />
          <div className="article-hero-meta">
            <span className="nc-badge">{article.category}</span>
            <span className="hero-dot" />
            <span><Calendar /> {article.date}</span>
            <span className="hero-dot" />
            <span>{article.readTime} read</span>
            {article.demo && <span className="demo-tag">DEMO CONTENT</span>}
          </div>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-excerpt">{article.excerpt}</p>
        </div>
      </section>

      <article className="section article-body">
        <div className="container container-narrow">
          {article.body?.map((para, i) => (
            <Reveal key={i} variant="up" delay={40}>
              <p className={i === 0 ? 'article-first' : 'article-para'}>{para}</p>
            </Reveal>
          ))}
        </div>
      </article>

      {article.gallery?.length > 0 && (
        <section className="section section-dark article-gallery-wrap">
          <div className="container">
            <SectionHeading eyebrow="GALLERY" title="Related imagery" dark />
            <Gallery images={article.gallery} label={article.title} />
          </div>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section className="section article-projects">
          <div className="container">
            <SectionHeading eyebrow="RELATED PROJECTS" title={<>Developments<br /><em>in this story.</em></>} align="between" />
            <div className="featured-grid related-grid">
              {relatedProjects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
            </div>
          </div>
        </section>
      )}

      <section className="section section-dark related-stories">
        <div className="container">
          <SectionHeading eyebrow="KEEP READING" title="Related Stories" dark align="between" />
          <div className="journal-grid related-grid">
            {relatedStories.map((a, i) => <JournalCard key={a.slug} article={a} index={i} />)}
          </div>
        </div>
      </section>
    </>
  )
}