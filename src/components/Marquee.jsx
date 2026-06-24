import { useEffect, useRef } from 'react'

// Infinite marquee whose speed/direction is nudged by scroll velocity.
export default function Marquee({ items, speed = 0.6, separator = '✦' }) {
  const trackRef = useRef(null)
  const offset = useRef(0)
  const dir = useRef(1)
  const lastScroll = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const half = track.scrollWidth / 2

    let raf = 0
    let visible = true
    const loop = () => {
      offset.current -= speed * dir.current
      if (offset.current <= -half) offset.current += half
      if (offset.current > 0) offset.current -= half
      track.style.transform = `translate3d(${offset.current}px,0,0)`
      raf = visible ? requestAnimationFrame(loop) : 0
    }
    const start = () => { if (raf === 0 && visible) raf = requestAnimationFrame(loop) }
    start()

    const onScroll = () => {
      const y = window.scrollY
      dir.current = y >= lastScroll.current ? 1 : -1
      lastScroll.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Pause the rAF while the marquee is off-screen.
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting && !document.hidden
      if (visible) start()
    }, { threshold: 0 })
    io.observe(track.parentElement || track)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [speed])

  const doubled = [...items, ...items]
  return (
    <div className="marquee">
      <div className="marquee-track" ref={trackRef}>
        {doubled.map((it, i) => (
          <span key={i}>
            {it}
            <span className="star" style={{ marginLeft: 48 }}>{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
