import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReveal'

export default function VideoBg({ src, poster, className = '' }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const v = ref.current
    if (!v) return
    if (reduced) { v.pause(); return }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause() },
      { threshold: 0.2 }
    )
    io.observe(v)
    return () => io.disconnect()
  }, [reduced])

  return (
    <video
      ref={ref}
      className={`hero-video ${className}`}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
    />
  )
}