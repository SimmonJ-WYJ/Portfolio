import { useEffect, useLayoutEffect, useRef } from 'react'
import { useCopy, useLang } from '../i18n/LanguageContext.jsx'
import './StudioManifesto.css'

// About / Core Capabilities — after svz.io's second-screen scroll interaction.
// A sticky stage shows the section title and five short capability blocks,
// each closing on its keyword. On scroll the copy dissolves (staggered top →
// bottom) while the five keywords migrate (FLIP translate + scale) into a
// centred vertical stack. Project tiles drift upward behind the copy.
//
// The stage has no ground of its own: a liquid-glass layer sits under the
// tiles and copy, starting 30% translucent so the pinned hero shows through
// it, and going solid as the section scrolls up into place.
//
// Static fallback (reduced motion, or narrow screens where the stage cannot
// stay sticky): the stage lays out in flow and nothing animates — the keywords
// simply read as the bold close of each block.

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

const STATIC_QUERY = '(prefers-reduced-motion: reduce), (max-width: 860px)'

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const smooth = (v) => v * v * (3 - 2 * v)

export default function StudioManifesto({ covers = [] }) {
  const { lang } = useLang()
  const t = useCopy('home')
  const BLOCKS = t.capabilities || []
  const KEYWORDS = BLOCKS.map((b) => b.keyword)
  const tiles = covers.slice(0, TILE_POS.length).map((c, i) => ({ ...c, pos: TILE_POS[i] }))
  const sectionRef = useRef(null)
  const glassRef = useRef(null) // full-stage liquid-glass layer between tiles and copy
  const stackRef = useRef(null) // the real stack, shown 1:1 once the flight lands
  const keywordRefs = useRef([]) // inline keyword nodes, indexed by block
  const stackRefs = useRef([]) // hidden target stack nodes, indexed by block
  const fadeRefs = useRef([]) // every non-keyword copy node, in reading order
  const tileRefs = useRef([])
  const deltas = useRef([]) // {dx, dy, scale} per keyword

  // Measure FLIP deltas from each inline keyword to its stacked target.
  // Re-runs on language change: the copy re-renders, so every delta changes.
  useLayoutEffect(() => {
    deltas.current = []
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
    const timer = setTimeout(measure, 600)
    window.addEventListener('resize', measure)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', measure)
    }
  }, [lang, BLOCKS])

  // Scroll-linked choreography.
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined
    const staticMode = window.matchMedia(STATIC_QUERY)
    let raf = 0

    const reset = () => {
      fadeRefs.current.forEach((node) => { if (node) node.style.opacity = '' })
      keywordRefs.current.forEach((kw) => { if (kw) { kw.style.transform = ''; kw.style.opacity = '' } })
      stackRef.current?.classList.remove('sm-stack--live')
      tileRefs.current.forEach((tile) => { if (tile) { tile.style.transform = ''; tile.style.opacity = '' } })
      glassRef.current?.style.removeProperty('--sm-glass-a')
    }

    const render = () => {
      raf = 0
      if (staticMode.matches) { reset(); return }
      const vh = window.innerHeight
      const top = section.getBoundingClientRect().top
      const total = section.offsetHeight - vh
      const p = total > 0 ? clamp(-top / total) : 0

      // Liquid-glass ground: the stage starts as 30% glass over the pinned
      // hero (which shows through, refracted) and turns solid as the section
      // slides up to its pinned position, where every line is on screen.
      const entry = smooth(clamp(1 - top / vh))
      glassRef.current?.style.setProperty('--sm-glass-a', String(0.3 + 0.7 * entry))

      // Copy dissolves, staggered top→bottom.
      const N = fadeRefs.current.length
      fadeRefs.current.forEach((node, j) => {
        if (!node) return
        const start = 0.1 + (j / N) * 0.34
        const fade = smooth(clamp((p - start) / 0.14))
        node.style.opacity = String(1 - fade)
      })

      // Keywords migrate + scale into the centred stack.
      // Once landed, the scaled-up inline nodes (rasterised at their small
      // size, so soft) hand over to the real stack rendered 1:1 — crisp.
      const m = smooth(clamp((p - 0.46) / 0.4))
      const landed = m >= 0.999
      keywordRefs.current.forEach((kw, ki) => {
        const d = deltas.current[ki]
        if (!kw || !d) return
        const s = 1 + (d.scale - 1) * m
        kw.style.transform = `translate(${d.dx * m}px, ${d.dy * m}px) scale(${s})`
        kw.style.opacity = landed ? '0' : ''
      })
      stackRef.current?.classList.toggle('sm-stack--live', landed)

      // Project tiles drift upward (parallax) and fade at the extremes.
      tileRefs.current.forEach((tile) => {
        if (!tile) return
        const speed = Number(tile.dataset.speed)
        tile.style.transform = `translate3d(0, ${-p * vh * 1.5 * speed}px, 0)`
        tile.style.opacity = String(clamp(Math.min(p / 0.12, (1 - p) / 0.12)) * 0.55 + 0.05)
      })
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(render)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    staticMode.addEventListener?.('change', onScroll)
    render()
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      staticMode.removeEventListener?.('change', onScroll)
    }
  }, [lang, BLOCKS])

  let fadeCounter = -1
  const fadeRef = () => {
    fadeCounter += 1
    const j = fadeCounter
    return (n) => { fadeRefs.current[j] = n }
  }
  fadeRefs.current.length = 0

  return (
    <section className="studio-manifesto" ref={sectionRef} aria-label={t.capLabel}>
      <div className="sm-stage">
        {/* floating project tiles */}
        <div className="sm-tiles" aria-hidden="true">
          {tiles.map((tile, i) => (
            <div
              key={i}
              ref={(n) => (tileRefs.current[i] = n)}
              data-speed={tile.pos.speed}
              className="sm-tile"
              style={{
                top: tile.pos.top,
                width: tile.pos.w,
                ...(tile.pos.left ? { left: tile.pos.left } : { right: tile.pos.right }),
              }}
            >
              <img className="sm-tile-img" src={tile.src} alt="" loading="lazy" />
            </div>
          ))}
        </div>

        {/* copy — keyed by language so ref arrays rebuild cleanly */}
        {/* liquid glass: SVG displacement warps the tiles behind, a sheen sits on top */}
        <svg className="sm-glass-defs" aria-hidden="true" focusable="false">
          <filter id="sm-liquid" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.006 0.01" numOctaves="2" seed="7" result="noise" />
            <feGaussianBlur in="noise" stdDeviation="3" result="soft" />
            <feDisplacementMap in="SourceGraphic" in2="soft" scale="36" xChannelSelector="R" yChannelSelector="G" result="warp" />
            <feGaussianBlur in="warp" stdDeviation="1.5" />
          </filter>
        </svg>
        <div className="sm-glass" ref={glassRef} aria-hidden="true" />

        <div className="sm-copy" key={lang} data-lang={lang}>
          <header className="sm-head">
            <p className="sm-label" ref={fadeRef()}>{t.capLabel}</p>
            <h2 className="sm-title" ref={fadeRef()}>{t.capTitle}</h2>
          </header>
          <div className="sm-grid">
            {BLOCKS.map((block, ki) => (
              <div className="sm-block" key={ki}>
                {block.lines.map((line, i) => (
                  <p className="sm-line" key={i} ref={fadeRef()}>{line}</p>
                ))}
                <p className="sm-kw-row">
                  <span className="sm-keyword" ref={(n) => (keywordRefs.current[ki] = n)}>
                    {block.keyword}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* hidden target stack (measured for FLIP) */}
        <div className="sm-stack" aria-hidden="true" ref={stackRef}>
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
