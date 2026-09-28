import { useEffect, useState } from 'react'
import { useReducedMotion } from '../hooks/useReveal'

export default function Preloader({ onDone }) {
  const [phase, setPhase] = useState(0)
  const [gone, setGone] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), reduced ? 100 : 700)
    const t2 = setTimeout(() => setPhase(2), reduced ? 200 : 1500)
    const t3 = setTimeout(() => setGone(true), reduced ? 300 : 2200)
    const t4 = setTimeout(() => onDone(), reduced ? 400 : 2600)
    return () => { [t1, t2, t3, t4].forEach(clearTimeout) }
  }, [reduced, onDone])

  return (
    <div className={`preloader ${gone ? 'preloader-gone' : ''} ${phase === 2 ? 'preloader-exit' : ''}`} aria-hidden="true">
      <div className="preloader-line preloader-line-a" />
      <div className="preloader-line preloader-line-b" />
      <div className="preloader-inner">
        <span className={`preloader-word preloader-one ${phase >= 0 ? 'in' : ''}`}>NIVARA</span>
        <span className={`preloader-word preloader-two ${phase >= 1 ? 'in' : ''}`}>PROPERTIES</span>
        <span className={`preloader-rule ${phase >= 1 ? 'in' : ''}`} />
        <span className={`preloader-sub ${phase >= 1 ? 'in' : ''}`}>CRAFTING LANDMARKS</span>
      </div>
    </div>
  )
}