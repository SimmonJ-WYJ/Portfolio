import { useRef, useEffect } from 'react'
import './WavePath.css'

// Adapted from the shadcn/Tailwind/TS "wave-path" component to this project's
// stack: plain JSX + pure CSS (no cn, no Tailwind). An interactive horizontal
// line you can "pull" with the cursor; it springs back on mouse leave.
export function WavePath({ className = '', ...props }) {
  const path = useRef(null)
  // instance state kept in a ref so it survives across event handlers
  const s = useRef({ progress: 0, x: 0.2, time: Math.PI / 2, reqId: null, speed: 0, freq: 0.2 })

  const setPath = (progress) => {
    // draw to the actual rendered width of the host svg (so the line matches its
    // container) — falling back to 70vw if it isn't laid out yet
    const svg = path.current && path.current.ownerSVGElement
    const width = svg && svg.clientWidth ? svg.clientWidth : window.innerWidth * 0.7
    if (path.current) {
      path.current.setAttributeNS(null, 'd', `M0 100 Q${width * s.current.x} ${100 + progress * 0.35}, ${width} 100`)
    }
  }

  useEffect(() => {
    setPath(0)
    return () => { if (s.current.reqId) cancelAnimationFrame(s.current.reqId) }
  }, [])

  const lerp = (a, b, t) => a * (1 - t) + b * t

  const resetAnimation = () => {
    s.current.time = Math.PI / 2
    s.current.progress = 0
  }

  const animateOut = () => {
    const st = s.current
    const newProgress = st.progress * Math.sin(st.time)
    st.progress = lerp(st.progress, 0, 0.02)
    st.time += st.freq
    setPath(newProgress)
    if (Math.abs(st.progress) > 0.75) {
      st.reqId = requestAnimationFrame(animateOut)
    } else {
      resetAnimation()
    }
  }

  const manageMouseEnter = () => {
    if (s.current.reqId) {
      cancelAnimationFrame(s.current.reqId)
      resetAnimation()
    }
  }

  const manageMouseMove = (e) => {
    const { movementX, movementY, clientX } = e
    if (path.current) {
      const pathBound = path.current.getBoundingClientRect()
      s.current.x = (clientX - pathBound.left) / pathBound.width
      // track how fast the pointer is moving (used to set the wobble speed on exit)
      s.current.speed = Math.abs(movementX) + Math.abs(movementY)
      // clamp so a fast drag can't bend the line too far
      s.current.progress = Math.max(-130, Math.min(130, s.current.progress + movementY))
      setPath(s.current.progress)
    }
  }

  const manageMouseLeave = () => {
    // wobble speed follows how fast the pointer was moving when it left the line
    s.current.freq = Math.max(0.1, Math.min(0.5, s.current.speed * 0.012))
    animateOut()
  }

  return (
    <div className={`wave-path ${className}`.trim()} {...props}>
      <div
        className="wave-path-hit"
        onMouseEnter={manageMouseEnter}
        onMouseMove={manageMouseMove}
        onMouseLeave={manageMouseLeave}
      />
      <svg className="wave-path-svg">
        <path ref={path} strokeWidth={2} />
      </svg>
    </div>
  )
}

export default WavePath
