import { useEffect, useRef, useState } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let shown = false
    const show = () => {
      if (shown) return
      shown = true
      setVisible(true)
    }

    if (typeof IntersectionObserver === 'undefined') {
      show()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) show()
        })
        if (shown) io.disconnect()
      },
      {
        threshold: options.threshold ?? 0,
        rootMargin: options.rootMargin ?? '0px 0px -6% 0px'
      }
    )
    io.observe(el)

    // Reveal anything already in the viewport the moment it mounts, so the
    // page never starts with invisible content or blank gaps.
    try {
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight && r.bottom > 0) show()
    } catch {}

    // Watchdog: if the observer never fires, force-reveal content sitting in
    // or just below the viewport so sections can never remain hidden.
    const t = window.setTimeout(() => {
      try {
        const r = el.getBoundingClientRect()
        if (r.top < window.innerHeight * 1.08 && r.bottom > 0) show()
      } catch {}
    }, 600)

    return () => {
      io.disconnect()
      window.clearTimeout(t)
    }
  }, [])

  return [ref, visible]
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])
  return reduced
}