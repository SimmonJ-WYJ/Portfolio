import { useEffect } from 'react'

export function useMediaVisibility(ref, { autoplay = false } = {}) {
  useEffect(() => {
    const media = ref.current
    if (!media || !('IntersectionObserver' in window)) return undefined

    let intersecting = false
    let shouldPlay = autoplay || !media.paused

    const syncPlayback = () => {
      if (intersecting && !document.hidden) {
        if (shouldPlay) media.play().catch(() => {})
        return
      }
      shouldPlay = shouldPlay || !media.paused
      media.pause()
    }

    const observer = new IntersectionObserver(([entry]) => {
      intersecting = entry.isIntersecting
      syncPlayback()
    }, { rootMargin: '160px 0px', threshold: 0.01 })

    observer.observe(media)
    document.addEventListener('visibilitychange', syncPlayback)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', syncPlayback)
    }
  }, [ref, autoplay])
}
