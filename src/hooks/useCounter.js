import { useEffect, useRef, useState } from 'react'

export function useCounter(target, { duration = 1800, start = false, format }) {
  const [value, setValue] = useState(0)
  const reducedRef = useRef(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
  }, [])

  useEffect(() => {
    if (!start) return
    if (reducedRef.current) {
      setValue(target)
      return
    }
    let raf
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])

  if (format === 'int') return Math.round(value).toLocaleString('en-US')
  if (format === 'zero') return String(Math.round(value)).padStart(2, '0')
  return Math.round(value).toLocaleString('en-US')
}