import { useEffect } from 'react'
import { Fragment } from 'react'
import { useCopy } from '../i18n/LanguageContext.jsx'
import './FreeleapsPage.css'
import heroImg from '../assets/freeleaps/hero.jpg'
import freeleapsLogo from '../assets/freeleaps/logo.svg'
import iconUx from '../assets/freeleaps/icon-ux.svg'
import iconUi from '../assets/freeleaps/icon-ui.svg'
import iconDev from '../assets/freeleaps/icon-dev.svg'
import challenge1 from '../assets/freeleaps/challenge-1.jpg'
import challenge2 from '../assets/freeleaps/challenge-2.jpg'
import viBrand from '../assets/freeleaps/vi-brand.jpg'
import coreValue from '../assets/freeleaps/core-value.png'
import endingOffice from '../assets/freeleaps/ending/office.jpg'
import endingPhone from '../assets/freeleaps/ending/phone.jpg'
import icon3dFeatured from '../assets/freeleaps/3d-featured.png'
import icon3d1 from '../assets/freeleaps/3d-1.png'
import icon3d2 from '../assets/freeleaps/3d-2.png'
import icon3d3 from '../assets/freeleaps/3d-3.png'
import icon3d4 from '../assets/freeleaps/3d-4.png'
import icon3d5 from '../assets/freeleaps/3d-5.png'
import icon3d6 from '../assets/freeleaps/3d-6.png'
import icon3d7 from '../assets/freeleaps/3d-7.png'
import icon3d8 from '../assets/freeleaps/3d-8.png'
import ComponentLibrary from './FreeleapsComponents'
import PageDisplay from './FreeleapsPageDisplay'
import ProductPages from './FreeleapsProductPages'
import OtherPages from './FreeleapsOtherPages'

const ICONS_3D = [icon3d1, icon3d2, icon3d3, icon3d4, icon3d5, icon3d6, icon3d7, icon3d8]

// Real exported icons from the design (alphabetical order = grid order)
const MONO_ICONS = Object.entries(
  import.meta.glob('../assets/freeleaps/icons/mono-*.svg', { eager: true, query: '?url', import: 'default' })
).sort(([a], [b]) => a.localeCompare(b)).map(([, url]) => url)
const DUO_ICONS = Object.entries(
  import.meta.glob('../assets/freeleaps/icons/duo-*.svg', { eager: true, query: '?url', import: 'default' })
).sort(([a], [b]) => a.localeCompare(b)).map(([, url]) => url)

// Coded 1:1 from the Figma. Phase 1 = top meta + hero + the three discipline
// cards (fully coded; only the hero scene is an exported illustration).
// Titles, hours and pills are supplied per language from copy.freeleaps.disciplines.
const DISCIPLINE_ICONS = [iconUx, iconUi, iconDev]

// staggered impact stats — big % + copy + a frosted-glass-over-bars graphic
// Title and text are supplied per language from copy.freeleaps.impacts.
const IMPACT_STATS = [
  { num: '95%', color: '#2353f8' },
  { num: '67%', color: '#9bbeff', mid: true },
  { num: '39%', color: '#3b67ff' },
]

// Colors Specification — branded swatches (hex labels kept as in the comp) + neutral ramp
const COLOR_SWATCHES = [
  { name: 'Prussian Blue', hex: '# 2353F8', bg: '#2353F8' },
  { name: 'Blue', hex: '# 9BBEFF', bg: '#9BBEFF' },
  { name: 'Orange', hex: '# FF8761', bg: '#FF8761' },
  { name: 'Orange', hex: '# FFB200', bg: '#FFB200' },
  { name: 'Orange', hex: '# 00704D', bg: '#00704D' },
]
const COLOR_RAMP = [
  '#16142a', '#2a2c3f', '#3d3f50', '#50525f', '#646571',
  '#7a7b85', '#919199', '#a8a8ae', '#c0c0c4', '#d8d8da', '#ededed',
]

function StatCard({ pill, title, text, big }) {
  return (
    <div className="fl-stat">
      <span className="fl-stat-pill">{pill}</span>
      <h3 className="fl-stat-title">{title}</h3>
      <p className="fl-stat-text">{text}</p>
      <span className="fl-stat-big" aria-hidden="true">{big}</span>
    </div>
  )
}

function Discipline({ icon, title, hours, pills }) {
  return (
    <div className="fl-disc">
      <div className="fl-disc-top">
        <span className="fl-disc-icon"><img src={icon} alt="" /></span>
        <span className="fl-disc-hours">{hours}</span>
      </div>
      <h3 className="fl-disc-title">{title}</h3>
      <div className="fl-disc-pills">
        {pills.map((p) => (
          <span className="fl-pill" key={p}>{p}</span>
        ))}
      </div>
    </div>
  )
}

export default function FreeleapsPage() {
  const t = useCopy('freeleaps')
  const alts = t.alts || {}
  const disciplines = DISCIPLINE_ICONS.map((icon, i) => ({ icon, ...(t.disciplines?.[i] || {}) }))
  const impacts = IMPACT_STATS.map((stat, i) => ({ ...stat, ...(t.impacts?.[i] || {}) }))
  const lines = (arr) => (arr || []).map((l, i) => <Fragment key={i}>{i > 0 && <br />}{l}</Fragment>)
  // scroll-reveal: fade/slide every module, image and text block in, with a
  // per-group stagger, as each enters the viewport.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const SELECTOR = [
      '.fl-hero-frame', '.fl-disc', '.fl-intro-lead', '.fl-intro-col',
      '.fl-challenges .fl-h2', '.fl-ch-row', '.fl-value-img', '.fl-impact-col',
      '.fl-font-head', '.fl-font-cats', '.fl-font-display', '.fl-font-bottom',
      '.fl-swatch', '.fl-colors-ramp', '.fl-icons-mono', '.fl-icons-duo',
      '.fl-3d-featured', '.fl-3d-grid', '.cl-col',
      '.pd-mockup', '.pd-stories', '.pd-card', '.pd-cta',
      '.pp-h', '.pp-row', '.pp-chart-row',
      '.op-shot', '.fl-vi img', '.fl-ending img',
    ].join(', ')
    const items = Array.from(document.querySelectorAll(SELECTOR))
    // stagger by order among reveal-siblings sharing the same parent
    const counts = new Map()
    items.forEach((el) => {
      el.classList.add('fl-anim')
      const p = el.parentElement
      const i = counts.get(p) || 0
      counts.set(p, i + 1)
      el.style.transitionDelay = Math.min(i, 9) * 140 + 'ms'
    })
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('fl-anim-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main className="fl">
      <a href="/" className="case-back" data-cursor="link" data-cursor-label="Home">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        <span>{t.back}</span>
      </a>

      <section className="fl-hero container">
        <div className="fl-hero-frame">
          <img className="fl-hero-img" src={heroImg} alt={alts.hero} loading="eager" decoding="async" fetchpriority="high" />
          <div className="fl-hero-bar">
            <img className="fl-logo" src={freeleapsLogo} alt={alts.logo} />
            <div className="fl-meta">
              <span className="fl-meta-desc">{t.metaDesc}</span>
              <span>{lines(t.metaBrand)}</span>
              <span>{t.metaYear}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="fl-disciplines container">
        {disciplines.map((d) => (
          <Discipline key={d.title} {...d} />
        ))}
      </section>

      <section className="fl-intro container">
        <p className="fl-intro-lead">{t.introLead}</p>
        <div className="fl-intro-meta">
          <div className="fl-intro-col">
            {(t.projectFacts || []).map((f, i) => <p key={i} className={i === 0 ? 'fl-strong' : undefined}>{f}</p>)}
          </div>
          <div className="fl-intro-col">
            <p className="fl-strong">{t.overviewTitle}</p>
            {(t.overviewFacts || []).map((f, i) => <p key={i}>{f}</p>)}
          </div>
        </div>
      </section>

      <section className="fl-challenges container">
        <h2 className="fl-h2">{t.challengesTitle}</h2>
        <div className="fl-ch-grid">
          <div className="fl-ch-row">
            <StatCard {...(t.challengeCards?.[0] || {})} />
            <figure className="fl-ch-photo"><img src={challenge1} alt={alts.challenge1} loading="lazy" decoding="async" /></figure>
          </div>
          <div className="fl-ch-row">
            <figure className="fl-ch-photo"><img src={challenge2} alt={alts.challenge2} loading="lazy" decoding="async" /></figure>
            <StatCard {...(t.challengeCards?.[1] || {})} />
          </div>
        </div>
      </section>

      <section className="fl-value container">
        <img className="fl-value-img" src={coreValue} alt={alts.coreValue} loading="lazy" decoding="async" />
      </section>

      <section className="fl-impact container">
        <div className="fl-impact-grid">
          {impacts.map((it) => (
            <div className={it.mid ? 'fl-impact-col fl-impact-col--mid' : 'fl-impact-col'} key={it.num}>
              <p className="fl-impact-num">{it.num}</p>
              <h3 className="fl-impact-title">{it.title}</h3>
              <p className="fl-impact-text">{it.text}</p>
              <div className="fl-impact-card">
                <span className="fl-impact-bar fl-impact-bar--tall" style={{ background: it.color }} />
                <span className="fl-impact-bar fl-impact-bar--thin" style={{ background: it.color }} />
                <span className="fl-impact-glass" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="fl-font container">
        <div className="fl-font-head">
          <h2 className="fl-font-title">{lines(t.fontTitle)}</h2>
          <span className="fl-font-tag">{t.fontTag}</span>
        </div>
        <div className="fl-font-cats">
          <span>{lines(t.fontCats?.[0])}</span>
          <span>{lines(t.fontCats?.[1])}</span>
          <span className="fl-font-cat-right">{lines(t.fontCats?.[2])}</span>
        </div>
        <div className="fl-font-display">
          <span className="fl-font-label">Oak Sans</span>
          <span className="fl-font-aa">
            <span className="a-fill">A</span><span className="a-outline">a</span>
          </span>
        </div>
        <div className="fl-font-bottom">
          <div className="fl-font-weights">
            <span>Light</span>
            <span>Regular</span>
            <span>Medium</span>
          </div>
          <p className="fl-font-glyphs">{'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@€£$&*})({§?'}</p>
        </div>
      </section>

      <section className="fl-colors container">
        <div className="fl-font-head">
          <h2 className="fl-font-title">{lines(t.colorsTitle)}</h2>
          <span className="fl-font-tag">{t.colorsTag}</span>
        </div>
        <div className="fl-colors-row">
          {COLOR_SWATCHES.map((c, i) => (
            <div
              className={i === 0 ? 'fl-swatch fl-swatch--wide' : 'fl-swatch'}
              key={i}
              style={{ background: c.bg }}
            >
              <span className="fl-swatch-name">{c.name}</span>
              <span className="fl-swatch-hex">{c.hex}</span>
            </div>
          ))}
        </div>
        <div className="fl-colors-ramp">
          {COLOR_RAMP.map((c) => (
            <span key={c} style={{ background: c }} />
          ))}
        </div>
      </section>

      <section className="fl-icons container">
        <div className="fl-font-head">
          <h2 className="fl-font-title">{lines(t.iconTitle)}</h2>
          <span className="fl-font-tag">{t.iconTag}</span>
        </div>

        <div className="fl-icons-flat">
          <div className="fl-icons-mono">
            {MONO_ICONS.map((src, i) => (
              <span className="fl-icon-cell" key={i}><img src={src} alt="" /></span>
            ))}
          </div>
          <div className="fl-icons-duo">
            {DUO_ICONS.map((src, i) => (
              <span className="fl-icon-cell" key={i}><img src={src} alt="" /></span>
            ))}
          </div>
        </div>

        <div className="fl-icons-3d">
          <div className="fl-3d-featured">
            <img src={icon3dFeatured} alt={alts.icon3d} loading="lazy" decoding="async" />
          </div>
          <div className="fl-3d-grid">
            {ICONS_3D.map((src, i) => (
              <div className="fl-3d-tile" key={i}>
                <img src={src} alt="" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fl-complib container">
        <div className="fl-font-head">
          <h2 className="fl-font-title">{lines(t.componentTitle)}</h2>
          <span className="fl-font-tag">{t.componentTag}</span>
        </div>
        <ComponentLibrary />
      </section>

      <section className="fl-pagedisp">
        <PageDisplay />
      </section>

      <section className="fl-productpages">
        <ProductPages />
      </section>

      <section className="fl-otherpages">
        <OtherPages />
      </section>

      <section className="fl-vi">
        <img src={viBrand} alt={alts.viBrand} loading="lazy" decoding="async" />
      </section>

      <section className="fl-ending">
        <img src={endingOffice} alt={alts.endingOffice} loading="lazy" decoding="async" />
        <img src={endingPhone} alt={alts.endingPhone} loading="lazy" decoding="async" />
      </section>
    </main>
  )
}
