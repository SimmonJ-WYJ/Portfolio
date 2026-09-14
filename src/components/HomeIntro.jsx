import Rich from '../i18n/Rich.jsx'
import { useCopy } from '../i18n/LanguageContext.jsx'
import './HomeSections.css'

// "How I work" — the About section. Title on the left, the working process as
// a column of short lines on the right; the bold line is the process itself.
export default function HomeIntro() {
  const t = useCopy('home')
  return (
    <section className="home-how" aria-label={t.howLabel}>
      <div className="container home-how-grid">
        <div className="home-how-head reveal">
          <p className="home-label">{t.howLabel}</p>
          <h2 className="home-how-title">{t.howTitle}</h2>
        </div>
        <div className="home-how-body reveal">
          {(t.howLines || []).map((line, i) => (
            <p key={i} className={line.includes('**') ? 'home-how-process' : undefined}>
              <Rich text={line} />
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
