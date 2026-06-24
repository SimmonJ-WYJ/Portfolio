import React, { createContext, useContext } from 'react'
import { useTransform, motion } from 'framer-motion'
import './TextGradientScroll.css'

// Adapted from the shadcn "text-gradient-scroll" component for this Vite/JSX
// codebase (no Tailwind / cn). Instead of owning its own useScroll, it is
// driven by an external `progress` MotionValue (0 → 1) so the brightening can
// be choreographed against a pinned, sticky scroll section.

const GradientCtx = createContext({ textOpacity: 'soft' })

export function TextGradientScroll({
  text,
  progress,
  preLitWords = 0,
  textOpacity = 'soft',
  className,
}) {
  const words = text.split(' ')
  const litCount = Math.min(preLitWords, words.length)
  const animCount = Math.max(words.length - litCount, 1)

  return (
    <GradientCtx.Provider value={{ textOpacity }}>
      <p className={['tgs', className].filter(Boolean).join(' ')}>
        {words.map((word, i) => {
          if (i < litCount) {
            return (
              <span className="tgs-word tgs-lit" key={i}>
                {word}
              </span>
            )
          }
          const j = i - litCount
          const start = j / animCount
          const end = (j + 1) / animCount
          return (
            <Letter key={i} progress={progress} range={[start, end]}>
              {word}
            </Letter>
          )
        })}
      </p>
    </GradientCtx.Provider>
  )
}

const Letter = ({ children, progress, range }) => {
  const chars = String(children).split('')
  const span = range[1] - range[0]
  const step = span / chars.length

  return (
    <span className="tgs-word">
      {chars.map((char, i) => {
        const start = range[0] + i * step
        const end = range[0] + (i + 1) * step
        return (
          <Char key={i} progress={progress} range={[start, end]}>
            {char}
          </Char>
        )
      })}
    </span>
  )
}

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  const { textOpacity } = useContext(GradientCtx)
  const dimClass =
    textOpacity === 'none'
      ? 'tgs-dim-0'
      : textOpacity === 'medium'
        ? 'tgs-dim-30'
        : 'tgs-dim-10'

  return (
    <span className="tgs-char">
      <span className={`tgs-dim ${dimClass}`} aria-hidden="true">
        {children}
      </span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  )
}
