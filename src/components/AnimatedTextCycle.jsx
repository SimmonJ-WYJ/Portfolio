import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Adapted from the React Bits "animated-text-cycle" component to JSX + inline
// styles (no Tailwind). Cycles through `words` with a blur/slide transition and
// animates its width to the current word so surrounding text re-centers.
export default function AnimatedTextCycle({ words, interval = 2500, className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState('auto')
  const measureRef = useRef(null)

  // Width of the current word (measured from the hidden copies).
  useEffect(() => {
    if (measureRef.current) {
      const els = measureRef.current.children
      if (els.length > currentIndex) {
        setWidth(`${els[currentIndex].getBoundingClientRect().width}px`)
      }
    }
  }, [currentIndex, words])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, interval)
    return () => clearInterval(timer)
  }, [interval, words.length])

  const variants = {
    hidden: { y: -20, opacity: 0, filter: 'blur(8px)' },
    visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { y: 20, opacity: 0, filter: 'blur(8px)', transition: { duration: 0.3, ease: 'easeIn' } },
  }

  return (
    <>
      {/* hidden measurement copies (inherit the same font as the visible word) */}
      <div
        ref={measureRef}
        aria-hidden="true"
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', visibility: 'hidden' }}
      >
        {words.map((word, i) => (
          <span key={i} className={className} style={{ whiteSpace: 'nowrap' }}>
            {word}
          </span>
        ))}
      </div>

      <motion.span
        style={{ position: 'relative', display: 'inline-block' }}
        animate={{ width, transition: { type: 'spring', stiffness: 150, damping: 15, mass: 1.2 } }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={className}
            style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  )
}
