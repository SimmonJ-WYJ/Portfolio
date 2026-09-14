import Rich from '../i18n/Rich.jsx'
import { useCopy } from '../i18n/LanguageContext.jsx'
import './HomeSections.css'

// Philosophy — a two-line headline and a short column of beats; the two bold
// beats ("don't build it yet" / "what is actually worth building") are set large.
export default function Philosophy() {
  const t = useCopy('home')
  return (
    <section className="home-philosophy" aria-label={t.philosophyLabel}>
      <div className="container home-philosophy-inner">
        <p className="home-label reveal">{t.philosophyLabel}</p>
        <h2 className="home-philosophy-title reveal">
          {(t.philosophyTitle || []).map((line, i) => (
            <span key={i} className="home-philosophy-line">{line}</span>
          ))}
        </h2>
        <div className="home-philosophy-body reveal">
          {(t.philosophyLines || []).map((line, i) => (
            <p key={i} className={line.includes('**') ? 'home-philosophy-beat' : undefined}>
              <Rich text={line} />
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
