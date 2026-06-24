import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './ScrollCards.css'

// Sticky overlay scroll: the header pins near the top and fades (1 → 0.6 → 0) while
// drifting up, as the project cards (higher z-index) rise from below and cover it.
export function ScrollCards({ title, subtitle, buttonText, buttonHref = '#work', items = [] }) {
  const firstSlideRef = useRef(null)

  // Progress 0 = first card entering from the bottom, 1 = first card reached the top
  // (i.e. covering the pinned header).
  const { scrollYProgress } = useScroll({
    target: firstSlideRef,
    offset: ['start end', 'start start'],
  })
  const headOpacity = useTransform(scrollYProgress, [0.4, 0.7, 0.95], [1, 0.6, 0])
  const headY = useTransform(scrollYProgress, [0.4, 0.95], [0, -16])

  return (
    <section className="sc" id="work">
      {title && (
        <motion.div className="sc-head container" style={{ opacity: headOpacity, y: headY }}>
          <h2 className="sc-head-title">{title}</h2>
          {subtitle && <p className="sc-head-sub">{subtitle}</p>}
          {buttonText && (
            <a href={buttonHref} className="sc-head-btn" data-cursor="link">
              <span>{buttonText}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sc-head-arrow">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          )}
        </motion.div>
      )}

      {items.map((item, i) => (
        <div className="sc-slide" key={i} ref={i === 0 ? firstSlideRef : undefined} style={{ zIndex: i + 3 }}>
          <div
            className="sc-card"
            style={item.color ? { backgroundColor: item.color } : undefined}
            data-cursor="media"
            data-cursor-label="View"
          >
            {item.src ? (
              <img className="sc-img" src={item.src} alt={item.title || `Project ${i + 1}`} loading="lazy" decoding="async" />
            ) : (
              <div className="sc-img" style={{ background: `linear-gradient(135deg, ${item.color} 0%, ${item.color2 || item.color} 100%)` }} />
            )}
            {item.title && (
              <div className="sc-text" style={{ color: item.textColor || '#fff' }}>
                <span className="sc-title">{item.title}</span>
                {item.description && <p className="sc-desc">{item.description}</p>}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}

export default ScrollCards
