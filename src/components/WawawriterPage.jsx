import { useEffect } from 'react'
import './WawawriterPage.css'
import { useCopy } from '../i18n/LanguageContext.jsx'
import Rich from '../i18n/Rich.jsx'

// Hero (the Figma "样机" layer) + product screens
import hero from '../assets/wawa/hero.webp'
import homeBefore from '../assets/wawa/case/home-before.jpg'
import homeAfter from '../assets/wawa/case/home-after.jpg'
import homeNew from '../assets/wawa/case/home-new.jpg'
import bannerCards from '../assets/wawa/case/banner-cards.jpg'
import editorBefore from '../assets/wawa/case/editor-before.jpg'
import editorAfter from '../assets/wawa/case/editor-after.jpg'
import guide1 from '../assets/wawa/case/guide-1.jpg'
import guide2 from '../assets/wawa/case/guide-2.jpg'
import guide3 from '../assets/wawa/case/guide-3.jpg'
import guide4 from '../assets/wawa/case/guide-4.jpg'
import guide5 from '../assets/wawa/case/guide-5.jpg'
import guide6 from '../assets/wawa/case/guide-6.jpg'
import others from '../assets/wawa/case/others.jpg'

// The deck's before/after annotations dim the whole screen and leave one
// region clear. Same two clean screenshots every time; the spotlight is
// drawn in CSS from these fractions (left, top, right, bottom).
const FOCUS = {
  noticeBefore: [0, 0, 1, 0.075],
  noticeAfter: [0, 0, 1, 0.082],
  mktBefore: [0.035, 0.08, 0.965, 0.425],
  mktAfter: [0.02, 0.095, 0.98, 0.49],
  worksBefore: [0.035, 0.435, 0.99, 0.68],
  worksAfter: [0.02, 0.5, 0.98, 0.94],
}

const GUIDES = [guide1, guide2, guide3, guide4, guide5, guide6]

function Shot({ src, alt, focus }) {
  const img = <img className="ww-shot" src={src} alt={alt || ''} loading="lazy" decoding="async" />
  if (!focus) return img
  const [l, t, r, b] = focus
  const pct = (v) => `${(v * 100).toFixed(2)}%`
  return (
    <div className="ww-focus">
      {img}
      <span className="ww-focus-box" aria-hidden="true" style={{ left: pct(l), top: pct(t), width: pct(r - l), height: pct(b - t) }} />
    </div>
  )
}

function BeforeAfter({ before, after, labels }) {
  return (
    <div className="ww-stage">
      <div className="ww-compare">
        <div className="ww-compare-col">
          <div className="ww-compare-label">{labels.before}</div>
          <Shot {...before} />
        </div>
        <div className="ww-compare-arrow" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>
        <div className="ww-compare-col">
          <div className="ww-compare-label">{labels.after}</div>
          <Shot {...after} />
        </div>
      </div>
    </div>
  )
}

function Points({ title, lead, items, rich }) {
  return (
    <div className="ww-points">
      {title ? <h3 className="ww-points-title">{title}</h3> : null}
      {lead ? <p className="ww-points-lead">{lead}</p> : null}
      <ul className="ww-list">
        {(items || []).map((s, i) => <li key={i}>{rich ? <Rich text={s} /> : s}</li>)}
      </ul>
    </div>
  )
}

export default function WawawriterPage() {
  const t = useCopy('wawawriter')
  const alts = t.alts || {}
  const labels = { before: t.before, after: t.after }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="ww-page">
      <a href="/" className="case-back" data-cursor="link" data-cursor-label="Home">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        <span>{t.back}</span>
      </a>

      {/* Hero — the full-bleed mockup layer, cropped to the Solvely Plugins hero height */}
      <section className="ww-hero">
        <img className="ww-hero-img" src={hero} alt={alts.hero} loading="eager" decoding="async" fetchpriority="high" />
      </section>

      <div className="ww-main">
        <div className="ww-meta">
          {(t.meta || []).map((m) => (
            <div className="ww-meta-group" key={m.label}>
              <div className="ww-meta-label">{m.label}</div>
              <div className="ww-meta-value">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Title, lede, headline, tags, outcomes */}
        <section className="ww-intro">
          <h1 className="ww-title">{t.title}</h1>
          <div className="ww-intro-text">
            <p>{t.lede}</p>
            <p className="ww-headline"><Rich text={t.headline} /></p>
            <div className="ww-tags">
              {(t.tags || []).map((tag) => (
                <span className="ww-tag" key={tag}>
                  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" /></svg>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="ww-results">
            <div className="ww-results-header">
              <span className="ww-results-title">{t.resultsTitle}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <ul className="ww-results-list">
              {(t.results || []).map((r, i) => <li key={i}><Rich text={r} /></li>)}
            </ul>
          </div>
        </section>

        {/* Background */}
        <section className="ww-section">
          <h2 className="ww-section-title">{t.bgTitle}</h2>
          <div className="ww-cols">
            <div className="ww-col">
              <p className="ww-text">{t.bgIntro}</p>
              <Points lead={t.bgGroupsLead} items={t.bgGroups} />
            </div>
            <div className="ww-col">
              <p className="ww-text">{t.bgHistory}</p>
            </div>
          </div>
          <BeforeAfter labels={labels} before={{ src: homeBefore, alt: alts.homeBefore }} after={{ src: homeAfter, alt: alts.homeAfter }} />
        </section>

        {/* Notice bar */}
        <section className="ww-section">
          <h2 className="ww-section-title">{t.noticeTitle}</h2>
          <p className="ww-text ww-section-text">{t.noticeIntro}</p>
          <div className="ww-cols ww-cols--notice">
            <Points title={t.noticeLeftTitle} lead={t.noticeLeftLead} items={t.noticeLeftItems} rich />
            <Points title={t.noticeRightTitle} lead={t.noticeRightLead} items={t.noticeRightItems} rich />
          </div>
          <BeforeAfter
            labels={labels}
            before={{ src: homeBefore, alt: alts.noticeBefore, focus: FOCUS.noticeBefore }}
            after={{ src: homeAfter, alt: alts.noticeAfter, focus: FOCUS.noticeAfter }}
          />
        </section>

        {/* Marketing layer */}
        <section className="ww-section">
          <h2 className="ww-section-title">{t.mktTitle}</h2>
          <p className="ww-text ww-section-text">{t.mktIntro}</p>
          <div className="ww-cols">
            <Points title={t.mktLeftTitle} items={t.mktLeftItems} />
            <div className="ww-points">
              <h3 className="ww-points-title">{t.mktRightTitle}</h3>
              <div className="ww-banner-cards">
                <img src={bannerCards} alt={alts.bannerCards} loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
          <BeforeAfter
            labels={labels}
            before={{ src: homeBefore, alt: alts.mktBefore, focus: FOCUS.mktBefore }}
            after={{ src: homeAfter, alt: alts.mktAfter, focus: FOCUS.mktAfter }}
          />
        </section>

        {/* Works showcase */}
        <section className="ww-section">
          <h2 className="ww-section-title">{t.worksTitle}</h2>
          <p className="ww-text ww-section-text">{t.worksIntro}</p>
          <div className="ww-cols">
            <Points title={t.problemsTitle} items={t.worksProblems} />
            <Points title={t.solutionsTitle} items={t.worksSolutions} />
          </div>
          <BeforeAfter
            labels={labels}
            before={{ src: homeBefore, alt: alts.worksBefore, focus: FOCUS.worksBefore }}
            after={{ src: homeAfter, alt: alts.worksAfter, focus: FOCUS.worksAfter }}
          />
        </section>

        {/* Results */}
        <section className="ww-section">
          <h2 className="ww-section-title">{t.gainTitle}</h2>
          <p className="ww-text ww-section-text ww-gain"><Rich text={t.gainText} /></p>
          <div className="ww-stage">
            <Shot src={homeNew} alt={alts.homeNew} />
          </div>
        </section>

        {/* Editor */}
        <section className="ww-section">
          <h2 className="ww-section-title">{t.editorTitle}</h2>
          <p className="ww-text ww-section-text">{t.editorIntro}</p>
          <div className="ww-cols">
            <Points title={t.problemsTitle} items={t.editorProblems} />
            <Points title={t.solutionsTitle} items={t.editorSolutions} />
          </div>
          <BeforeAfter labels={labels} before={{ src: editorBefore, alt: alts.editorBefore }} after={{ src: editorAfter, alt: alts.editorAfter }} />
        </section>

        {/* Onboarding */}
        <section className="ww-section">
          <h2 className="ww-section-title">{t.guideTitle}</h2>
          <p className="ww-text ww-section-text">{t.guideIntro}</p>
          <div className="ww-stage ww-stage--tight">
            <div className="ww-guides">
              {GUIDES.map((src, i) => <Shot key={i} src={src} alt={`${alts.guide || ''} ${i + 1}`} />)}
            </div>
          </div>
        </section>

        {/* Other pages */}
        <section className="ww-section ww-section--last">
          <h2 className="ww-section-title">{t.othersTitle}</h2>
          <div className="ww-collage">
            <img src={others} alt={alts.others} loading="lazy" decoding="async" />
          </div>
        </section>
      </div>
    </div>
  )
}
