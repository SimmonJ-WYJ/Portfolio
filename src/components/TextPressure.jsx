// Component ported from https://codepen.io/JuanFuentes/full/rgXKGQ
import { useEffect, useRef, useState, useMemo, useCallback } from 'react'
// Self-hosted original Compressa variable font (recovered via the Wayback Machine,
// since its Cloudinary CDN was removed). Personal/non-commercial use per the owner.
import variableFontUrl from '../assets/fonts/Compressa.woff2'

const dist = (a, b) => {
  const dx = b.x - a.x
  const dy = b.y - a.y
  return Math.sqrt(dx * dx + dy * dy)
}

const getAttr = (distance, maxDist, minVal, maxVal) => {
  const val = maxVal - Math.abs((maxVal * distance) / maxDist)
  return Math.max(minVal, val + minVal)
}

const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

const TextPressure = ({
  text = 'Compressa',
  fontFamily = 'Compressa VF',
  fontUrl = variableFontUrl,

  width = true,
  weight = true,
  italic = true,
  alpha = false,

  flex = true,
  stroke = false,
  scale = false,

  textColor = '#FFFFFF',
  strokeColor = '#FF0000',
  className = '',

  minFontSize = 24,
}) => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const spansRef = useRef([])

  const mouseRef = useRef({ x: 0, y: 0 })
  const cursorRef = useRef({ x: 0, y: 0 })

  const [fontSize, setFontSize] = useState(minFontSize)
  const [scaleY, setScaleY] = useState(1)
  const [lineHeight, setLineHeight] = useState(1)

  const chars = text.split('')

  // Pointer tracking + the variable-font animation loop, merged into one effect.
  //
  // Perf: character centers are MEASURED into a cache (one batched read on mount /
  // resize / scroll) instead of calling getBoundingClientRect() on every span every
  // frame — that per-frame reflow was the hero's biggest cost. The rAF loop also
  // idles itself out when the pointer settles, and pauses entirely once the hero is
  // scrolled away or the tab is hidden, so it isn't burning frames off-screen.
  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const { left, top, width: w, height: h } = container.getBoundingClientRect()
      mouseRef.current = { x: left + w / 2, y: top + h / 2 }
      cursorRef.current = { x: left + w / 2, y: top + h / 2 }
    }

    let centers = []
    let maxDist = 1
    let measureQueued = false
    const measure = () => {
      measureQueued = false
      if (!titleRef.current) return
      maxDist = titleRef.current.getBoundingClientRect().width / 2 || 1
      centers = spansRef.current.map((s) => {
        if (!s) return null
        const r = s.getBoundingClientRect()
        return { x: r.x + r.width / 2, y: r.y + r.height / 2 }
      })
    }
    const queueMeasure = () => {
      if (measureQueued) return
      measureQueued = true
      requestAnimationFrame(measure)
    }

    let rafId = 0
    let active = true
    let lastMove = performance.now()

    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15

      for (let i = 0; i < centers.length; i++) {
        const c = centers[i]
        const span = spansRef.current[i]
        if (!c || !span) continue
        const d = dist(mouseRef.current, c)
        const wdth = width ? Math.floor(getAttr(d, maxDist, 5, 200)) : 100
        const wght = weight ? Math.floor(getAttr(d, maxDist, 320, 900)) : 400
        const italVal = italic ? getAttr(d, maxDist, 0, 1).toFixed(2) : 0
        const settings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`
        if (span.style.fontVariationSettings !== settings) span.style.fontVariationSettings = settings
        if (alpha) {
          const a = getAttr(d, maxDist, 0, 1).toFixed(2)
          if (span.style.opacity !== a) span.style.opacity = a
        }
      }

      const settled =
        Math.abs(cursorRef.current.x - mouseRef.current.x) < 0.4 &&
        Math.abs(cursorRef.current.y - mouseRef.current.y) < 0.4
      const idle = performance.now() - lastMove > 600
      if (active && !(settled && idle)) {
        rafId = requestAnimationFrame(animate)
      } else {
        rafId = 0
      }
    }
    const start = () => {
      if (rafId === 0 && active) rafId = requestAnimationFrame(animate)
    }

    const onMove = (e) => {
      cursorRef.current.x = e.clientX
      cursorRef.current.y = e.clientY
      lastMove = performance.now()
      start()
    }
    const onTouch = (e) => {
      const t = e.touches[0]
      cursorRef.current.x = t.clientX
      cursorRef.current.y = t.clientY
      lastMove = performance.now()
      start()
    }
    // Hero is position:sticky, so gate on scroll position rather than an observer.
    const onScroll = () => {
      const wasActive = active
      active = window.scrollY < window.innerHeight * 0.85 && !document.hidden
      queueMeasure()
      if (active && !wasActive) start()
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onTouch, { passive: true })
    window.addEventListener('resize', queueMeasure)
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('visibilitychange', onScroll)

    queueMeasure()
    start()

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onTouch)
      window.removeEventListener('resize', queueMeasure)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('visibilitychange', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [width, weight, italic, alpha])

  const setSize = useCallback(() => {
    if (!containerRef.current || !titleRef.current) return

    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect()

    let newFontSize = containerW / (chars.length / 2)
    newFontSize = Math.max(newFontSize, minFontSize)

    setFontSize(newFontSize)
    setScaleY(1)
    setLineHeight(1)

    requestAnimationFrame(() => {
      if (!titleRef.current) return
      const textRect = titleRef.current.getBoundingClientRect()

      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height
        setScaleY(yRatio)
        setLineHeight(yRatio)
      }
    })
  }, [chars.length, minFontSize, scale])

  useEffect(() => {
    const debouncedSetSize = debounce(setSize, 100)
    debouncedSetSize()
    window.addEventListener('resize', debouncedSetSize)
    return () => window.removeEventListener('resize', debouncedSetSize)
  }, [setSize])

  const styleElement = useMemo(() => {
    return (
      <style>{`
        @font-face {
          font-family: '${fontFamily}';
          src: url('${fontUrl}');
          font-style: normal;
        }

        .tp-flex {
          display: flex;
          justify-content: space-between;
        }

        .tp-stroke span {
          position: relative;
          color: ${textColor};
        }
        .tp-stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: ${strokeColor};
        }

        .text-pressure-title {
          color: ${textColor};
        }
      `}</style>
    )
  }, [fontFamily, fontUrl, textColor, strokeColor])

  const dynamicClassName = [className, flex ? 'tp-flex' : '', stroke ? 'tp-stroke' : ''].filter(Boolean).join(' ')

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'transparent',
      }}
    >
      {styleElement}
      <h1
        ref={titleRef}
        className={`text-pressure-title ${dynamicClassName}`}
        style={{
          // fall back to the site sans instead of an ugly serif if the
          // variable font fails to load
          fontFamily: `'${fontFamily}', 'Inter', sans-serif`,
          textTransform: 'uppercase',
          fontSize: fontSize,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: 'center top',
          margin: 0,
          textAlign: 'center',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          fontWeight: 320,
          width: '100%',
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={el => (spansRef.current[i] = el)}
            data-char={char}
            style={{
              display: 'inline-block',
              color: stroke ? undefined : textColor,
            }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  )
}

export default TextPressure
