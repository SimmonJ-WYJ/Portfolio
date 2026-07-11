import { useEffect } from 'react'
import Lenis from 'lenis'

// Momentum / smooth scrolling, the backbone of the agency feel.
export function useLenis(enabled, resetKey) {
  useEffect(() => {
    if (!enabled) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // A new route must not inherit Lenis' target position from the previous page.
    window.scrollTo(0, 0)

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })

    let raf = 0
    let pageVisible = !document.hidden
    const loop = (time) => {
      lenis.raf(time)
      raf = pageVisible ? requestAnimationFrame(loop) : 0
    }
    const start = () => {
      if (raf === 0 && pageVisible) raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      if (raf !== 0) cancelAnimationFrame(raf)
      raf = 0
    }
    const onVisibility = () => {
      pageVisible = !document.hidden
      if (pageVisible) start()
      else stop()
    }
    document.addEventListener('visibilitychange', onVisibility)
    start()

    // anchor links go through Lenis
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (id.length > 1) {
        e.preventDefault()
        lenis.scrollTo(id, { offset: 0 })
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      stop()
      document.removeEventListener('visibilitychange', onVisibility)
      document.removeEventListener('click', onClick)
      lenis.destroy()
    }
  }, [enabled, resetKey])
}
