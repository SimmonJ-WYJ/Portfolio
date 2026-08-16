import { useState } from 'react'
import ContactCard from './ContactCard.jsx'
import { HorizontalShowcase } from './HorizontalShowcase.jsx'
import LogoCloud from './LogoCloud.jsx'
import StudioManifesto from './StudioManifesto.jsx'
import WavePath from './WavePath.jsx'
import { cases } from '../data.js'
import { useCopy } from '../i18n/LanguageContext.jsx'

function Work({ coverItems }) {
  const t = useCopy('home')
  return (
    <HorizontalShowcase
      title={t.reelTitle}
      subtitle={t.reelHint}
      items={coverItems.length ? coverItems : cases}
    />
  )
}

function Footer({ logoItems }) {
  const [contact, setContact] = useState(false)
  const t = useCopy('home')
  const c = useCopy('common')
  return (
    <footer className="footer" id="contact">
      <ContactCard open={contact} onClose={() => setContact(false)} />
      <div className="container">
        <h2 className="cta-big reveal">
          <a
            href="#contact"
            data-cursor="link"
            data-cursor-label={c.contact || 'Contact'}
            onClick={(event) => { event.preventDefault(); setContact((open) => !open) }}
          >
            {t.footerTitle}
            <span className="cta-arrow">
              <svg width="0.7em" height="0.7em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8" /></svg>
            </span>
          </a>
        </h2>
      </div>
      <div className="footer-art">
        <WavePath className="footer-art-wave" />
        <div className="footer-art-text">
          <p className="footer-art-label">{t.footerLabel}</p>
          <p className="footer-art-desc">
            {t.footerDesc}
          </p>
        </div>
      </div>
      <div className="footer-logos">
        <LogoCloud items={logoItems} />
      </div>
    </footer>
  )
}

export default function HomeContent({ coverItems, logoItems }) {
  return (
    <div className="after-hero">
      <StudioManifesto covers={coverItems} />
      <Work coverItems={coverItems} />
      <Footer logoItems={logoItems} />
    </div>
  )
}
