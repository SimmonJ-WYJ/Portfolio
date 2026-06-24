import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'

// Adapted from the React Bits / shadcn "text-hover-effect" (TSX + Tailwind)
// to this project's stack: plain JSX + inline styles. Same animation logic —
// an outline that draws itself in, plus a cursor-following rainbow reveal.
export function TextHoverEffect({
  text,
  duration,
  fontSize = 56,
  strokeColor = '#262626', // faint resting color (neutral-800), matches the demo on black
  fillColor = 'transparent', // resting fill in outline mode
  filled = false, // solid letters: resting fill = strokeColor, cursor reveals the gradient fill
}) {
  const svgRef = useRef(null)
  const maskGradientRef = useRef(null)
  const animatedTextRef = useRef(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [maskPosition, setMaskPosition] = useState({ cx: '50%', cy: '50%' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        animatedTextRef.current,
        { strokeDashoffset: 1000, strokeDasharray: 1000 },
        {
          strokeDashoffset: 0,
          strokeDasharray: 1000,
          duration: 4,
          ease: 'power2.inOut',
        }
      )
    }, svgRef)
    return () => ctx.revert()
  }, [])

  const updateCursorPosition = (x, y) => {
    if (svgRef.current && x !== null && y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect()
      const cxPercentage = ((x - svgRect.left) / svgRect.width) * 100
      const cyPercentage = ((y - svgRect.top) / svgRect.height) * 100

      const newPosition = {
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      }

      setMaskPosition(newPosition)

      gsap.to(maskGradientRef.current, {
        attr: newPosition,
        duration: duration ?? 0,
        ease: 'power2.out',
      })
    }
  }

  useEffect(() => {
    updateCursorPosition(cursor.x, cursor.y)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursor, duration])

  // Track the pointer at the window level so the effect still works when other
  // cursor-driven layers (e.g. the image trail) sit on top of this SVG.
  useEffect(() => {
    const move = (clientX, clientY) => {
      setCursor({ x: clientX, y: clientY })
      const rect = svgRef.current?.getBoundingClientRect()
      if (rect) {
        const inside =
          clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom
        setHovered(inside)
      }
    }
    const onMouse = (e) => move(e.clientX, e.clientY)
    const onTouch = (e) => {
      if (e.touches.length > 0) move(e.touches[0].clientX, e.touches[0].clientY)
    }
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('touchmove', onTouch, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('touchmove', onTouch)
    }
  }, [])

  const baseTextStyle = {
    fill: 'transparent',
    fontFamily: 'Helvetica, "Schibsted Grotesk", Arial, sans-serif',
    fontWeight: 700,
  }

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ userSelect: 'none', pointerEvents: 'none' }}
    >
      <defs>
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="20%">
          {hovered && (
            <>
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>
        <linearGradient id="litGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e0249a" />
          <stop offset="20%" stopColor="#7b2ff7" />
          <stop offset="42%" stopColor="#2b6bff" />
          <stop offset="62%" stopColor="#08b9d8" />
          <stop offset="82%" stopColor="#1ed760" />
          <stop offset="100%" stopColor="#b249f8" />
        </linearGradient>
        <radialGradient
          id="revealMask"
          ref={maskGradientRef}
          gradientUnits="userSpaceOnUse"
          r="25%"
          cx={maskPosition.cx}
          cy={maskPosition.cy}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>
        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      {[0, 1, 2].map((_, idx) => {
        const isBase = idx === 0 // shown on hover
        const isDraw = idx === 1 // persistent layer (almost invisible at rest)
        const isReveal = idx === 2 // gradient that follows the cursor spotlight
        // In `filled` mode the letters are solid: resting fill = strokeColor, the
        // cursor reveal fills the gradient. Otherwise it's the original outline mode.
        const stroke = filled ? 'none' : isReveal ? 'url(#textGradient)' : strokeColor
        const fill = filled
          ? isReveal
            ? 'url(#textGradient)'
            : strokeColor
          : isDraw
            ? fillColor
            : 'transparent'
        return (
          <text
            key={idx}
            ref={isDraw ? animatedTextRef : undefined}
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            strokeWidth="0.3"
            stroke={stroke}
            mask={isReveal ? 'url(#textMask)' : undefined}
            style={{
              ...baseTextStyle,
              fill,
              fontSize,
              // fully invisible until hovered; only the cursor reveal shows it
              opacity: !hovered ? 0 : isBase ? 0.7 : 1,
            }}
          >
            {text}
          </text>
        )
      })}
    </svg>
  )
}

export default TextHoverEffect
