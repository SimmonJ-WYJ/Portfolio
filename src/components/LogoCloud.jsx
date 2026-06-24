import { useRef, useEffect } from 'react'
import './LogoCloud.css'

// Adapted from the shadcn "logo-cloud-4" + infinite-slider + progressive-blur to
// this project's stack (JSX + pure CSS). The slider uses the project's rAF marquee
// (no react-use-measure / motion deps) and pauses off-screen. The progressive-blur
// (8 layered backdrop-filters in the original) is reduced to ONE blurred+faded
// strip per edge for the same look at a fraction of the cost.
// rendered this many times so one "set" is always wider than the viewport →
// seamless loop with no gap regardless of screen width
const COPIES = 4

export default function LogoCloud({ items = [], speed = 0.5, gap = 56, className = '' }) {
  const trackRef = useRef(null)
  const offset = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const setWidth = track.scrollWidth / COPIES // width of one copy of `items`
    let raf = 0
    let visible = true
    const loop = () => {
      offset.current -= speed
      if (offset.current <= -setWidth) offset.current += setWidth
      track.style.transform = `translate3d(${offset.current}px,0,0)`
      raf = visible ? requestAnimationFrame(loop) : 0
    }
    const start = () => { if (raf === 0 && visible) raf = requestAnimationFrame(loop) }
    start()
    const io = new IntersectionObserver(
      ([e]) => { visible = e.isIntersecting && !document.hidden; if (visible) start() },
      { threshold: 0 }
    )
    io.observe(track.parentElement || track)
    return () => { if (raf) cancelAnimationFrame(raf); io.disconnect() }
  }, [speed, items])

  const repeated = Array.from({ length: COPIES }).flatMap(() => items)
  return (
    <div className={`logo-cloud ${className}`.trim()}>
      <span className="logo-cloud-line logo-cloud-line-top" aria-hidden="true" />
      <div className="logo-cloud-viewport" style={{ '--logo-gap': `${gap}px` }}>
        <div className="logo-cloud-track" ref={trackRef}>
          {repeated.map((it, i) =>
            typeof it === 'string' ? (
              <span className="logo-cloud-word" key={i}>{it}</span>
            ) : it.name ? (
              <span className="logo-cloud-named" key={i}>
                <img className="logo-cloud-logo logo-cloud-icon" src={it.src} alt={it.alt} loading="lazy" draggable="false" />
                <span>{it.name}</span>
              </span>
            ) : (
              <img className="logo-cloud-logo" key={i} src={it.src} alt={it.alt} loading="lazy" draggable="false" />
            )
          )}
        </div>
      </div>
      <div className="logo-cloud-fade logo-cloud-fade-left" aria-hidden="true" />
      <div className="logo-cloud-fade logo-cloud-fade-right" aria-hidden="true" />
      <span className="logo-cloud-line logo-cloud-line-bottom" aria-hidden="true" />
    </div>
  )
}
