import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCopy } from '../i18n/LanguageContext.jsx'
import './ContactCard.css'

const EMAIL = 'simmonjmax@163.com'
const PHONE = '191 0678 7893'
const HANDLE = 'simmonjmax'

// Text-only contact sheet in a centred overlay: an eyebrow, one display-size
// line, then label / value rows separated by hairlines. Opened by the footer
// "Work together" link; closes on backdrop click or Escape.
export default function ContactCard({ open, onClose }) {
  const t = useCopy('home')
  const labels = t.contactLabels || {}

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const rows = [
    { label: labels.email, value: EMAIL, href: `mailto:${EMAIL}` },
    { label: labels.phone, value: PHONE, href: `tel:+86${PHONE.replace(/\s+/g, '')}` },
    { label: labels.social, value: `@${HANDLE}` },
  ]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="contact-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="contact-sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="contact-close" onClick={onClose} data-cursor="link" aria-label={t.contactClose}>×</button>

            <p className="contact-eyebrow">{t.contactEyebrow}</p>
            <h2 id="contact-title" className="contact-title">{t.contactTitle}</h2>

            <dl className="contact-rows">
              {rows.map((r) => (
                <div className="contact-row" key={r.label}>
                  <dt>{r.label}</dt>
                  <dd>
                    {r.href
                      ? <a href={r.href} data-cursor="link">{r.value}</a>
                      : <span>{r.value}</span>}
                  </dd>
                </div>
              ))}
            </dl>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
