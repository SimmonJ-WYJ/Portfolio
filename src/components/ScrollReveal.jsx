import { useTransform, motion } from 'framer-motion'
import './ScrollReveal.css'

// Adapted from React Bits "ScrollReveal" (GSAP version) for this codebase.
// The original keys GSAP ScrollTrigger to the element scrolling through the
// viewport; that doesn't work inside our pinned/sticky story section (and the
// site uses Lenis). So this variant is driven by an external `progress`
// MotionValue (0 → 1) — same effect (per-word opacity + blur stagger and a
// container rotation), using framer-motion which is already a dependency.

function Word({ children, progress, start, end, baseOpacity, blurStrength, enableBlur }) {
  const opacity = useTransform(progress, [start, end], [baseOpacity, 1])
  const blurPx = useTransform(progress, [start, end], [blurStrength, 0])
  const filter = useTransform(blurPx, (b) => (enableBlur ? `blur(${b}px)` : 'none'))
  return (
    <motion.span className="sr-word" style={{ opacity, filter }}>
      {children}
    </motion.span>
  )
}

export default function ScrollReveal({
  text,
  progress,
  baseOpacity = 0.1,
  blurStrength = 8,
  baseRotation = 4,
  enableBlur = true,
  className = '',
}) {
  const tokens = text.split(/(\s+)/)
  const wordCount = tokens.filter((t) => !/^\s+$/.test(t)).length
  // each word reveals over a 0.3-wide window, staggered across the first 70%
  // of progress so the last word finishes right at the end.
  const reveal = useTransform(progress, [0, 0.22], [baseRotation, 0])

  let wi = -1
  return (
    <motion.h2 className={`sr ${className}`.trim()} style={{ rotate: reveal, transformOrigin: '0% 50%' }}>
      <p className="sr-text">
        {tokens.map((tok, i) => {
          if (/^\s+$/.test(tok)) return <span key={i}>{tok}</span>
          wi += 1
          const start = (wi / Math.max(wordCount, 1)) * 0.7
          const end = Math.min(start + 0.3, 1)
          return (
            <Word
              key={i}
              progress={progress}
              start={start}
              end={end}
              baseOpacity={baseOpacity}
              blurStrength={blurStrength}
              enableBlur={enableBlur}
            >
              {tok}
            </Word>
          )
        })}
      </p>
    </motion.h2>
  )
}
