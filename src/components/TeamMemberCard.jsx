import { motion } from 'framer-motion'
import './TeamMemberCard.css'

// Adapted from the emerald-ui "team-member-card" (shadcn/Tailwind/TS) to this
// project's stack: plain JSX + CSS, inline SVG arrow (no lucide), no cn/tailwind-merge.
export default function TeamMemberCard({
  position = 'left',
  jobPosition = 'Backend Engineer',
  firstName = 'Jennie',
  lastName = 'Garcia',
  imageUrl = 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?fm=jpg&q=60',
  description = '',
  className = '',
}) {
  const fullName = `${firstName} ${lastName}`
  const right = position === 'right'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`tm ${right ? 'tm--right' : ''} ${className}`.trim()}
    >
      <motion.p
        className="tm-job"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {jobPosition}
      </motion.p>

      <div className="tm-row">
        <motion.div
          className="tm-portrait"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="tm-grain" />
          <img src={imageUrl} alt={fullName} className="tm-img" />
        </motion.div>

        <motion.div
          className="tm-info"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="tm-name">
            {firstName}
            <br />
            <span className="tm-name-last">{lastName}</span>
          </p>

          <div className="tm-details">
            <motion.div className="tm-cta" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} data-cursor="link">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="tm-arrow">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </motion.div>
            <div className="tm-bio">
              <p>{description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
