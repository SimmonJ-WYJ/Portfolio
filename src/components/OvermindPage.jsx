import { useEffect } from 'react'
import { useCopy } from '../i18n/LanguageContext.jsx'
import LangToggle from './LangToggle.jsx'
import './OvermindPage.css'

// Design sections exported from Figma, ordered by filename (s01…s35).
const sectionModules = import.meta.glob('../assets/overmind/s*.webp', { eager: true, import: 'default' })
const sectionImages = Object.keys(sectionModules).sort().map((key) => sectionModules[key])

// Placeholder background shown while each image loads. Positional: TONES[i]
// pairs with sectionImages[i] and with the alt text at overmind.alts[i].
const TONES = [
  'blue', 'light', 'light', 'dark', 'light', 'dark', 'light', 'light',
  'light', 'light', 'light', 'light', 'light', 'light', 'light', 'light',
  'light', 'blue', 'light', 'blue', 'blue', 'light', 'light', 'light',
]

export default function OvermindPage() {
  const c = useCopy('common')
  const t = useCopy('overmind')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const items = Array.from(document.querySelectorAll('.om-sec:not(:first-of-type)'))
    items.forEach((el) => el.classList.add('om-anim'))
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('om-anim-in'); io.unobserve(e.target) } })
    }, { threshold: 0.08 })
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main className="om">
      <LangToggle variant="float" />
      <a href="/" className="case-back" data-cursor="link" data-cursor-label={c.home}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        <span>{c.back}</span>
      </a>

      {TONES.map((tone, i) => (
        <section className={`om-sec om-${tone}`} key={i}>
          <img
            src={sectionImages[i]}
            alt={t.alts?.[i] || ''}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            fetchpriority={i === 0 ? 'high' : undefined}
          />
        </section>
      ))}
    </main>
  )
}
