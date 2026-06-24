import { useEffect, useLayoutEffect, useRef } from 'react'
import './StudioManifesto.css'

// Replica of svz.io's second-screen scroll interaction:
// a justified manifesto paragraph whose white connective words dissolve on
// scroll, while the red service keywords migrate (FLIP translate + scale) into
// a centered vertical stack. Labeled project tiles float upward behind it.

const KEYWORDS = ['STRATEGY', 'BRAND', 'DESIGN', 'DEVELOPMENT', 'MOTION', 'GROWTH']

const PARAGRAPH =
  "I'M SIMMONJ — A MULTIDISCIPLINARY PRODUCT DESIGNER BUILDING AI-NATIVE EXPERIENCES FROM FIRST IDEA TO LAUNCH. " +
  'STRATEGY IS WHERE I BEGIN, TURNING FUZZY PROBLEMS INTO A CLEAR PRODUCT DIRECTION. ' +
  'I SHAPE EVERY BRAND WITH PURPOSE, CRAFTING IDENTITIES THAT FEEL HONEST AND BUILT TO LAST. ' +
  'DESIGN IS MY HEARTBEAT, BREATHING LIFE INTO EVERY PIXEL AND SHAPING EXPERIENCES THAT SCALE AND INSPIRE. ' +
  'WORKING CLOSE TO DEVELOPMENT, I TURN IDEAS INTO SEAMLESS, IMMERSIVE INTERFACES. ' +
  'WITH MOTION I ADD ESSENCE AND EMOTION, GIVING EACH PRODUCT RHYTHM AND LIFE. ' +
  'AND I BUILD FOR GROWTH, HELPING PRODUCTS REACH, RESONATE, AND THRIVE AT SCALE.'

// Tokenize once: mark the first occurrence of each keyword.
const TOKENS = (() => {
  const used = new Set()
  return PARAGRAPH.split(' ').map((text) => {
    const core = text.replace(/[^A-Za-z-]/g, '').toUpperCase()
    const ki = KEYWORDS.indexOf(core)
    const isKeyword = ki !== -1 && !used.has(core)
    if (isKeyword) used.add(core)
    return { text, core, isKeyword, ki }
  })
})()

// Floating tiles: alternating left / right sides, evenly spaced vertically
// (wide gaps so they stay separated while drifting). Speeds kept close to 1
// so the spacing holds steady during scroll.
const TILE_POS = [
  { left: '2vw', top: '50vh', w: '30vw', speed: 1.0 },
  { right: '2vw', top: '78vh', w: '34vw', speed: 1.1 },
  { left: '2vw', top: '106vh', w: '28vw', speed: 0.95 },
  { right: '2vw', top: '134vh', w: '32vw', speed: 1.05 },
  { left: '2vw', top: '162vh', w: '30vw', speed: 1.0 },
]

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const smooth = (v) => v * v * (3 - 2 * v)

export default function StudioManifesto({ covers = [] }) {
  const tiles = covers.slice(0, TILE_POS.length).map((c, i) => ({ ...c, pos: TILE_POS[i] }))
  const sectionRef = useRef(null)
  const stageRef = useRef(null)
  const keywordRefs = useRef([]) // paragraph keyword nodes, indexed by ki
  const stackRefs = useRef([]) // hidden target stack nodes, indexed by ki
  const wordRefs = useRef([]) // non-keyword (white) nodes
  const tileRefs = useRef([])
  const deltas = useRef([]) // {dx, dy, scale} per keyword

  // Measure FLIP deltas from each paragraph keyword to its stacked target.
  useLayoutEffect(() => {
    const measure = () => {
      keywordRefs.current.forEach((kw, ki) => {
        const target = stackRefs.current[ki]
        if (!kw || !target) return
        kw.style.transform = 'none'
        const k = kw.getBoundingClientRect()
        const s = target.getBoundingClientRect()
        deltas.current[ki] = {
          dx: s.left + s.width / 2 - (k.left + k.width / 2),
          dy: s.top + s.height / 2 - (k.top + k.height / 2),
          scale: k.height ? s.height / k.height : 1,
        }
      })
    }
    measure()
    if (document.fonts?.ready) document.fonts.ready.then(measure)
    const t = setTimeout(measure, 600)
    window.addEventListener('resize', measure)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', measure)
    }
  }, [])

  // Scroll-linked choreography.
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0

    const render = () => {
      raf = 0
      const vh = window.innerHeight
      const total = section.offsetHeight - vh
      const p = reduced ? 1 : total > 0 ? clamp(-section.getBoundingClientRect().top / total) : 0

      // White connective words dissolve, staggered top→bottom.
      const N = TOKENS.length
      wordRefs.current.forEach((node) => {
        if (!node) return
        const j = Number(node.dataset.j)
        const start = 0.1 + (j / N) * 0.34
        const fade = smooth(clamp((p - start) / 0.14))
        node.style.opacity = String(1 - fade)
      })

      // Red keywords migrate + scale into the centered stack.
      const m = smooth(clamp((p - 0.46) / 0.4))
      keywordRefs.current.forEach((kw, ki) => {
        const d = deltas.current[ki]
        if (!kw || !d) return
        const s = 1 + (d.scale - 1) * m
        kw.style.transform = `translate(${d.dx * m}px, ${d.dy * m}px) scale(${s})`
      })

      // Project tiles drift upward (parallax) and fade at the extremes.
      tileRefs.current.forEach((tile) => {
        if (!tile) return
        const speed = Number(tile.dataset.speed)
        tile.style.transform = `translate3d(0, ${-p * vh * 1.5 * speed}px, 0)`
        tile.style.opacity = String(clamp(Math.min(p / 0.12, (1 - p) / 0.12)) * 0.9 + 0.1)
      })
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(render)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    render()
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  let wordCounter = -1

  return (
    <section className="studio-manifesto" ref={sectionRef} aria-label="Studio manifesto">
      <div className="sm-stage" ref={stageRef}>
        {/* floating project tiles */}
        <div className="sm-tiles" aria-hidden="true">
          {tiles.map((t, i) => (
            <div
              key={i}
              ref={(n) => (tileRefs.current[i] = n)}
              data-speed={t.pos.speed}
              className="sm-tile"
              style={{
                top: t.pos.top,
                width: t.pos.w,
                ...(t.pos.left ? { left: t.pos.left } : { right: t.pos.right }),
              }}
            >
              <img className="sm-tile-img" src={t.src} alt="" loading="lazy" />
            </div>
          ))}
        </div>

        {/* manifesto paragraph */}
        <p className="sm-para">
          {TOKENS.map((tok, i) => {
            if (tok.isKeyword) {
              const suffix = tok.text.slice(tok.core.length) // trailing punctuation
              wordCounter += 1
              const sj = wordCounter
              return (
                <span key={i}>
                  <span className="sm-keyword" ref={(n) => (keywordRefs.current[tok.ki] = n)}>
                    {tok.core}
                  </span>
                  {suffix && (
                    <span className="sm-word" data-j={sj} ref={(n) => (wordRefs.current[sj] = n)}>
                      {suffix}
                    </span>
                  )}{' '}
                </span>
              )
            }
            wordCounter += 1
            const j = wordCounter
            return (
              <span key={i} className="sm-word" data-j={j} ref={(n) => (wordRefs.current[j] = n)}>
                {tok.text}{' '}
              </span>
            )
          })}
        </p>

        {/* hidden target stack (measured for FLIP) */}
        <div className="sm-stack" aria-hidden="true">
          {KEYWORDS.map((w, ki) => (
            <span key={w} ref={(n) => (stackRefs.current[ki] = n)}>
              {w}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
