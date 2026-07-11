import { useEffect, useRef, useState } from 'react'

// Custom cursor: a small dot that lerps toward the pointer and morphs into a
// labelled disc over elements carrying a data-cursor attribute.
export default function Cursor() {
  const dotRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const target = useRef({ x: -100, y: -100 })
  const [variant, setVariant] = useState('') // '', 'link', 'media'
  const [label, setLabel] = useState('')
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let raf = 0
    let pointerVisible = false
    let pageVisible = !document.hidden

    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18
      pos.current.y += (target.current.y - pos.current.y) * 0.18
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`
      }
      raf = pointerVisible && pageVisible ? requestAnimationFrame(loop) : 0
    }
    const start = () => {
      if (raf === 0 && pointerVisible && pageVisible) raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      if (raf !== 0) cancelAnimationFrame(raf)
      raf = 0
    }

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
      pointerVisible = true
      setHidden(false)
      const el = e.target.closest('[data-cursor]')
      if (el) {
        setVariant(el.dataset.cursor || 'link')
        setLabel(el.dataset.cursorLabel || '')
      } else {
        setVariant('')
        setLabel('')
      }
      start()
    }
    const onLeave = () => {
      pointerVisible = false
      setHidden(true)
      stop()
    }
    const onVisibility = () => {
      pageVisible = !document.hidden
      if (pageVisible) start()
      else stop()
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
      stop()
    }
  }, [])

  return (
    <div ref={dotRef} className={`cursor ${variant} ${hidden ? 'hidden' : ''}`}>
      <span className="label">{label}</span>
    </div>
  )
}
