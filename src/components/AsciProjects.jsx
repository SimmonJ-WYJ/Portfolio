import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './AsciProjects.css'

// Ported from axion-studio's second screen (Projects / "核心特性").
// Original was TSX + Tailwind; adapted here to JSX + plain CSS (AsciProjects.css)
// for this Vite/JSX codebase. framer-motion is already a dependency.

const EASE = [0.22, 1, 0.36, 1]

const CASE_STUDIES = [
  { id: 'heartx', title: 'Multi-Agent Collaboration', category: 'A lead agent dispatches teammates to divide and collaborate', year: '2026', image: '/asci/cover2.png' },
  { id: 'swave', title: 'Transparent Conversation Flow', category: 'Thinking and tools fold into step groups; answers stay first-class', year: '2025', image: '/asci/cover3.png' },
  { id: 'eduspark', title: 'Multimodal & Document Parsing', category: 'PDF / Office / MD / Word documents, multimodal input', year: '2023', image: '/asci/cover4.png' },
  { id: 'greenergy', title: 'Citation-Level Sourcing, Anti-Hallucination', category: 'Every citation must resolve to its source; anything dubious is flagged', year: '2022', image: '/asci/cover5.png' },
]

const PIXEL_COLS = 12
const PIXEL_ROWS = 8

function PixelOverlay({ hovered }) {
  const blocks = []
  for (let row = 0; row < PIXEL_ROWS; row++) {
    for (let col = 0; col < PIXEL_COLS; col++) {
      const delayIn = (row + col) * 0.018
      const delayOut = (PIXEL_ROWS - row + (PIXEL_COLS - col)) * 0.012
      blocks.push(
        <motion.div
          key={`${row}-${col}`}
          className="ap-pixel"
          initial={false}
          animate={{ scale: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25, delay: hovered ? delayIn : delayOut, ease: EASE }}
          style={{
            left: `${(col * 100) / PIXEL_COLS}%`,
            top: `${(row * 100) / PIXEL_ROWS}%`,
            width: `${100 / PIXEL_COLS}%`,
            height: `${100 / PIXEL_ROWS}%`,
          }}
        />,
      )
    }
  }
  return <div className="ap-pixel-overlay">{blocks}</div>
}

function CaseCard({ study, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="ap-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: EASE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={study.image} alt={study.title} className="ap-card-img" loading="lazy" decoding="async" />

      <PixelOverlay hovered={hovered} />

      <div className="ap-card-plus">+</div>

      <div className="ap-card-plate">
        <h3 className="ap-card-title">{study.title}</h3>
        <div className="ap-card-meta">
          <span className="ap-card-cat">{study.category}</span>
          <span className="ap-card-year">{study.year}</span>
        </div>
      </div>
    </motion.div>
  )
}

const LOGOS = [
  { name: 'Codecraft_', icon: 'code' },
  { name: 'ennLabs', icon: 'dots' },
  { name: 'GlobalBank', icon: 'circle-ring' },
  { name: '45 Degrees°', icon: 'arrow' },
  { name: 'AlphaWave', icon: 'wave-circle' },
  { name: 'Biosynthesis', icon: 'lines' },
  { name: 'Boltshift', icon: 'bolt' },
  { name: 'Clandestine', icon: 'plus' },
]

function LogoIcon({ type }) {
  switch (type) {
    case 'code':
      return (
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6,4 1,9 6,14" />
          <polyline points="16,4 21,9 16,14" />
          <line x1="13" y1="2" x2="9" y2="16" />
        </svg>
      )
    case 'dots':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="black">
          {[3, 10, 17].map((cy) => [3, 10, 17].map((cx) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={2.2} />))}
        </svg>
      )
    case 'circle-ring':
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="black" strokeWidth={2}>
          <circle cx="11" cy="11" r="9" />
          <circle cx="11" cy="11" r="4" />
        </svg>
      )
    case 'arrow':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <line x1="2" y1="16" x2="16" y2="2" />
          <polyline points="7,2 16,2 16,11" />
        </svg>
      )
    case 'wave-circle':
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="black" strokeWidth={1.5}>
          <circle cx="11" cy="11" r="9" />
          <path d="M5 11Q8 7 11 11Q14 15 17 11" />
        </svg>
      )
    case 'lines':
      return (
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" stroke="black" strokeWidth={2.2} strokeLinecap="round">
          <line x1="0" y1="3" x2="24" y2="3" />
          <line x1="6" y1="9" x2="24" y2="9" />
          <line x1="0" y1="15" x2="18" y2="15" />
        </svg>
      )
    case 'bolt':
      return (
        <svg width="14" height="20" viewBox="0 0 14 20" fill="black">
          <polygon points="8,0 0,11 6,11 6,20 14,9 8,9" />
        </svg>
      )
    case 'plus':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="black">
          <rect x="7.5" y="0" width="3" height="18" />
          <rect x="0" y="7.5" width="18" height="3" />
        </svg>
      )
    default:
      return null
  }
}

export default function AsciProjects() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  const marqueeItems = [...LOGOS, ...LOGOS]

  return (
    <section id="core" className="asci-projects">
      <div className="ap-container">
        <motion.div
          ref={headerRef}
          className="ap-header"
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="ap-badge">Core Features</span>
          <h2 className="ap-heading">
            <span>Designed for the depth of research, </span>
            <br />
            <span>making every exploration </span>
            <span className="ap-heading-muted">clearer and more efficient</span>
          </h2>
        </motion.div>

        <div className="ap-grid">
          {CASE_STUDIES.map((study, i) => (
            <CaseCard key={study.id} study={study} index={i} />
          ))}
        </div>

        <div className="ap-closing">
          <div className="ap-closing-text">
            <div className="ap-closing-plus">+</div>
            <p className="ap-closing-copy">
              ASCI is an AI platform built for the depth of research, helping
              researchers integrate literature, data, and analysis workflows —
              turning complex research tasks into a clearer, more efficient, and
              more sustainable way of working.
            </p>
          </div>

          <div className="ap-marquee-wrap">
            <div className="ap-marquee-inner">
              <div className="ap-marquee">
                {marqueeItems.map((logo, i) => (
                  <div key={i} className="ap-marquee-item">
                    <LogoIcon type={logo.icon} />
                    <span className="ap-marquee-label">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
