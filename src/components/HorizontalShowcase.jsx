import { Fragment, useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './HorizontalShowcase.css'

// One card. Its translateY is derived from the shared track `x` motion value:
// it rises 80px → 0 over the span where the card scrolls in from the right edge
// by one card-width. That settle point IS reached by the last card right as the
// scroll ends, so every card (incl. the rightmost) lands top-aligned at y=0.
function HsCard({ item, i, x, offset, vw, width }) {
  // cardLeftInViewport = offset (its left within the track) + x (track translate).
  // Rises over ~0.85 of a card-width of scroll; the last card reaches this settle
  // point just before the scroll ends, so it lands top-aligned (y=0) with the rest.
  const y = useTransform(x, [vw - offset, vw - width * 0.85 - offset], [80, 0], { clamp: true })

  return (
    <motion.div className="hs-card" style={{ y }}>
      <a className="hs-card-media" href={item.link || '#work'} data-cursor="media" data-cursor-label="View">
        {item.src ? (
          <img src={item.src} alt={item.title || `Project ${i + 1}`} loading="lazy" decoding="async" />
        ) : (
          <div className="hs-card-fill" style={{ background: `linear-gradient(135deg, ${item.color} 0%, ${item.color2 || item.color} 100%)` }} />
        )}
      </a>
      <div className="hs-card-meta">
        <div className="hs-card-info">
          <h3 className="hs-card-title">{item.title}</h3>
          {item.description && <p className="hs-card-desc">{item.description}</p>}
        </div>
        <a className="hs-card-link" href={item.link || '#work'} data-cursor="link">
          <span>Explore project</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </div>
    </motion.div>
  )
}

export function HorizontalShowcase({ title, subtitle, buttonText, buttonHref = '#work', items = [] }) {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [range, setRange] = useState(0)
  const [offsets, setOffsets] = useState([])
  const [widths, setWidths] = useState([])
  const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280)

  useEffect(() => {
    const calc = () => {
      if (!trackRef.current) return
      setVw(window.innerWidth)
      setRange(Math.max(0, trackRef.current.scrollWidth - window.innerWidth))
      const cards = [...trackRef.current.querySelectorAll('.hs-card')]
      setOffsets(cards.map((c) => c.offsetLeft))
      setWidths(cards.map((c) => c.offsetWidth))
    }
    calc()
    const ro = new ResizeObserver(calc)
    if (trackRef.current) ro.observe(trackRef.current)
    window.addEventListener('resize', calc)
    const imgs = trackRef.current ? [...trackRef.current.querySelectorAll('img')] : []
    imgs.forEach((im) => im.complete || im.addEventListener('load', calc))
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', calc)
      imgs.forEach((im) => im.removeEventListener('load', calc))
    }
  }, [items])

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -range])

  return (
    <section className="hs" id="work" ref={sectionRef} style={{ height: `calc(100vh + ${range}px)` }}>
      <div className="hs-sticky">
        <motion.div className="hs-track" ref={trackRef} style={{ x }}>
          <div className="hs-intro">
            <h2 className="hs-title">{title}</h2>
            {subtitle && <p className="hs-sub">{subtitle}</p>}
            {buttonText && (
              <a href={buttonHref} className="hs-btn" data-cursor="link">
                <span>{buttonText}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="hs-arrow">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            )}
          </div>

          {items.map((item, i) => (
            <Fragment key={i}>
              {/* full-height stroke between every project, matching the intro divider */}
              {i > 0 && <span className="hs-divider" aria-hidden="true" />}
              <HsCard
                item={item}
                i={i}
                x={x}
                vw={vw}
                // default offset (until measured) places cards off to the right so they start low
                offset={offsets[i] ?? vw + i * 700}
                width={widths[i] ?? vw * 0.5}
              />
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HorizontalShowcase
