import { motion } from 'framer-motion'
import './BackgroundCircles.css'

// Adapted from the KokonutUI "background-circles" (shadcn/Tailwind/TS) to this
// project's stack: plain JSX + CSS. Rendered as a decorative background (no demo
// title/description). Animated grid + pulsing concentric glow rings + radial glow.
const COLOR_VARIANTS = {
  primary: { border: ['rgba(16,185,129,0.6)', 'rgba(34,211,238,0.5)', 'rgba(71,85,105,0.3)'], glow: 'rgba(16,185,129,0.3)' },
  secondary: { border: ['rgba(139,92,246,0.6)', 'rgba(232,121,249,0.5)', 'rgba(71,85,105,0.3)'], glow: 'rgba(139,92,246,0.3)' },
  tertiary: { border: ['rgba(249,115,22,0.6)', 'rgba(250,204,21,0.5)', 'rgba(71,85,105,0.3)'], glow: 'rgba(249,115,22,0.3)' },
  quaternary: { border: ['rgba(168,85,247,0.6)', 'rgba(244,114,182,0.5)', 'rgba(71,85,105,0.3)'], glow: 'rgba(168,85,247,0.3)' },
  quinary: { border: ['rgba(239,68,68,0.6)', 'rgba(251,113,133,0.5)', 'rgba(71,85,105,0.3)'], glow: 'rgba(239,68,68,0.3)' },
  senary: { border: ['rgba(59,130,246,0.6)', 'rgba(56,189,248,0.5)', 'rgba(71,85,105,0.3)'], glow: 'rgba(59,130,246,0.3)' },
  septenary: { border: ['rgba(107,114,128,0.6)', 'rgba(156,163,175,0.5)', 'rgba(71,85,105,0.3)'], glow: 'rgba(107,114,128,0.3)' },
  octonary: { border: ['rgba(239,68,68,0.6)', 'rgba(251,113,133,0.5)', 'rgba(71,85,105,0.3)'], glow: 'rgba(239,68,68,0.3)' },
}

function AnimatedGrid() {
  return (
    <motion.div
      className="bgc-grid"
      animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
    />
  )
}

export function BackgroundCircles({ variant = 'primary', className = '' }) {
  const v = COLOR_VARIANTS[variant] || COLOR_VARIANTS.primary

  return (
    <div className={`bgc ${className}`.trim()} aria-hidden="true">
      <AnimatedGrid />
      <div className="bgc-circles">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="bgc-ring"
            style={{
              borderColor: v.border[i],
              backgroundImage: `linear-gradient(to bottom right, ${v.glow}, transparent)`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.05 + i * 0.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div
              className="bgc-ring-inner"
              style={{ background: `radial-gradient(ellipse at center, ${v.glow}, transparent 70%)` }}
            />
          </motion.div>
        ))}
      </div>
      <div className="bgc-glow" />
    </div>
  )
}

export default BackgroundCircles
