import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ProfileCard from './ProfileCard.jsx'
import './ContactCard.css'

// Opens the interactive ProfileCard in a centered overlay that drops in from the
// top. Triggered by the footer "Work together" link.
export default function ContactCard({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="profile-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="profile-overlay-inner"
            initial={{ y: -90, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -70, opacity: 0, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 130, damping: 15, mass: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* glow burst on open: radiates bright, then fades to reveal the card */}
            <motion.div
              className="profile-glow"
              initial={{ opacity: 1, scale: 0.88 }}
              animate={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
              aria-hidden="true"
            />
            <button className="profile-overlay-close" onClick={onClose} data-cursor="link" aria-label="Close">×</button>
            <ProfileCard
              avatarUrl="/profile.jpg"
              miniAvatarUrl="/profile.jpg"
              iconUrl=""
              grainUrl=""
              name="SimmonJ"
              title="Full-stack Designer"
              handle="simmonjmax"
              phone="191 0678 7893"
              status="Available for work"
              contactText="Email me"
              onContactClick={() => { window.location.href = 'mailto:simmonjmax@163.com' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
