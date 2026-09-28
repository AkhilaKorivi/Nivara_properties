import Breadcrumb from './Breadcrumb'
import Reveal from './Reveal'

export default function PageHeader({ eyebrow, title, sub, image, children }) {
  return (
    <header className="page-header">
      {image && (
        <div className="page-header-media">
          <img src={image} alt="" />
          <div className="page-header-shade" />
        </div>
      )}
      <div className="container page-header-inner">
        <Breadcrumb />
        {eyebrow && (
          <Reveal variant="fade" className="section-eyebrow page-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">{eyebrow}</span>
          </Reveal>
        )}
        <Reveal variant="up"><h1 className="page-title">{title}</h1></Reveal>
        {sub && <Reveal variant="up" delay={120}><p className="page-sub">{sub}</p></Reveal>}
        {children}
      </div>
    </header>
  )
}