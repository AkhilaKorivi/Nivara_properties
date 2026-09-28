import { useCallback, useEffect, useRef, useState } from 'react'
import { Close, Play, Pause, VolumeIcon, MuteIcon, Maximize } from './Icons'
import { useReducedMotion } from '../hooks/useReveal'

export default function VideoModal({ video, title, onClose }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const [playing, setPlaying] = useState(!reduced)
  const [muted, setMuted] = useState(true)
  const [loaded, setLoaded] = useState(false)

  const setLoadingDone = useCallback(() => setLoaded(true), [])

  const togglePlay = useCallback(() => {
    const v = ref.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true) } else { v.pause(); setPlaying(false) }
  }, [])

  const toggleMute = useCallback(() => {
    const v = ref.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }, [])

  const toggleFull = useCallback(() => {
    const wrap = ref.current?.parentElement
    if (!wrap) return
    if (document.fullscreenElement) document.exitFullscreen()
    else wrap.requestFullscreen?.()
  }, [])

  useEffect(() => {
    if (!video) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === ' ') { e.preventDefault(); togglePlay() }
      if (e.key.toLowerCase() === 'm') toggleMute()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [video, onClose, togglePlay, toggleMute])

  if (!video) return null

  return (
    <div className="modal-overlay video-overlay" onClick={onClose}>
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        <div className="video-modal-head">
          <div>
            <p className="video-modal-title">{title || 'Client Video'}</p>
            <p className="video-modal-demo">DEMO VIDEO — PLACEHOLDER CONTENT</p>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close"><Close /></button>
        </div>
        <div className="video-frame-wrap">
          <video
            ref={ref}
            className="video-frame"
            src={video}
            poster=""
            autoPlay={!reduced}
            muted
            loop
            playsInline
            controls={false}
            onClick={togglePlay}
            onCanPlay={() => { setLoadingDone() }}
          />
          {!loaded && <div className="video-loading"><span className="spin" /></div>}
        </div>
        <div className="video-controls">
          <button className="vctrl" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
            {playing ? <Pause /> : <Play />}
          </button>
          <button className="vctrl" onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
            {muted ? <MuteIcon /> : <VolumeIcon />}
          </button>
          <span className="vctrl-spacer" />
          <button className="vctrl" onClick={toggleFull} aria-label="Fullscreen"><Maximize /></button>
        </div>
      </div>
    </div>
  )
}