import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import './ZoomParallax.css'

// Ported from the shadcn "zoom-parallax" component to JSX + plain CSS.
// (Repo isn't Tailwind/TS; framer-motion is already installed, and Lenis
// smooth-scroll is set up globally in App.jsx so no local Lenis is needed.)
//
// Choreography:
//   progress 0 → ZOOM_END : tiles zoom out; the center tile reaches fullscreen
//   progress ZOOM_END → 1 : center holds fullscreen and the center VIDEO is
//                           scrubbed by scroll (scroll forward = play forward,
//                           scroll back = rewind).
// Zoom completes early (~350vh of scroll); the remaining ~1200vh scrubs the
// center video. Fraction = zoomScroll / (zoomScroll + scrubScroll) = 350/1550.
const ZOOM_END = 0.226

const isVideo = (src) => /\.(mp4|webm|mov)$/i.test(src)

export function ZoomParallax({ media }) {
  const container = useRef(null)
  const centerVideoRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  // Initial composition is enlarged uniformly (start scale = BASE); end targets
  // unchanged, so full zoom fills the whole screen (center 25cqw x4 = 100vw).
  const BASE = 1.5
  const scale4 = useTransform(scrollYProgress, [0, ZOOM_END], [BASE, 4])
  const scale5 = useTransform(scrollYProgress, [0, ZOOM_END], [BASE, 5])
  const scale6 = useTransform(scrollYProgress, [0, ZOOM_END], [BASE, 6])
  const scale8 = useTransform(scrollYProgress, [0, ZOOM_END], [BASE, 8])
  const scale9 = useTransform(scrollYProgress, [0, ZOOM_END], [BASE, 9])

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9]

  // Scrub the center video by scroll once it has zoomed to fullscreen.
  useEffect(() => {
    const video = centerVideoRef.current
    if (!video) return

    const apply = (p) => {
      const d = video.duration
      if (!d || Number.isNaN(d)) return
      const frac = p <= ZOOM_END ? 0 : (p - ZOOM_END) / (1 - ZOOM_END)
      const t = Math.min(Math.max(frac, 0), 1) * d
      if (Math.abs(video.currentTime - t) > 0.02) {
        try { video.currentTime = t } catch { /* seek not ready yet */ }
      }
    }

    const unsub = scrollYProgress.on('change', apply)
    const onMeta = () => apply(scrollYProgress.get())
    video.addEventListener('loadedmetadata', onMeta)
    apply(scrollYProgress.get())

    return () => {
      unsub()
      video.removeEventListener('loadedmetadata', onMeta)
    }
  }, [scrollYProgress, media])

  return (
    <div ref={container} className="zoom-parallax">
      <div className="zoom-parallax-sticky">
        <div className="zp-stage">
        {media.map(({ src, alt }, index) => {
          const scale = scales[index % scales.length]

          return (
            <motion.div key={index} style={{ scale }} className={`zp-item zp-item-${index}`}>
              <div className="zp-inner">
                {isVideo(src) ? (
                  <video
                    ref={index === 0 ? centerVideoRef : undefined}
                    src={src}
                    muted
                    playsInline
                    preload="auto"
                    aria-label={alt || `Parallax video ${index + 1}`}
                  />
                ) : (
                  <img src={src} alt={alt || `Parallax image ${index + 1}`} loading="lazy" />
                )}
              </div>
            </motion.div>
          )
        })}
        </div>
      </div>
    </div>
  )
}
