import { Fragment, useEffect } from 'react'
import { useCopy } from '../i18n/LanguageContext.jsx'
import LangToggle from './LangToggle.jsx'
import './WawawriterPage.css'
import heroLaptop from '../assets/wawa/hero/laptop.png'
import s01Comp from '../assets/wawa/s01/comp.png'
import s5After from '../assets/wawa/s5/after.png'
import s5Before from '../assets/wawa/s5/before.png'
import s5Stats from '../assets/wawa/s5/stats.png'
import s6Before from '../assets/wawa/s6/before.png'
import s6After from '../assets/wawa/s6/after.png'
import s6Chart1 from '../assets/wawa/s6/chart1.png'
import s6Chart2 from '../assets/wawa/s6/chart2.png'
import endIpad from '../assets/wawa/end/ipad.jpg'

const COLOR_SWATCHES = [
  { bg: '#cbdcdb', fg: '#346553' },
  { bg: '#346553', fg: '#cbdcdb' },
  { bg: '#1dbe6b', fg: '#c5fac4' },
  { bg: '#c5fac4', fg: '#346553' },
]

// Positional icon list; the matching text lives in src/i18n/copy/wawawriter.js.
const META_ICONS = [
  (<svg viewBox="0 0 24 24" fill="none"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z" fill="#0bb861" /></svg>),
  (<svg viewBox="0 0 24 24" fill="none" stroke="#0bb861" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 8l-4 4 4 4M15 8l4 4-4 4" /></svg>),
  (<svg viewBox="0 0 24 24" fill="#0bb861"><circle cx="8" cy="8" r="2.4" /><circle cx="16" cy="8" r="2.4" /><circle cx="12" cy="15" r="2.4" /></svg>),
  (<svg viewBox="0 0 24 24" fill="none" stroke="#0bb861" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M4 9h16M8 3v4M16 3v4" /></svg>),
]

export default function WawawriterPage() {
  const c = useCopy('common')
  const t = useCopy('wawawriter')
  const alts = t.alts || {}

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const SELECTOR = ['.ww-hero img', '.ww-meta-col', '.ww-s01-head', '.ww-s01-text', '.ww-s01-comp', '.ww-s2-title', '.ww-s2-card', '.ww-s3-card', '.ww-s4-weights', '.ww-s4-aa', '.ww-s4-glyphs', '.ww-s5-title', '.ww-s5-shots', '.ww-s5-opt', '.ww-s5-stat', '.ww-s5-bars', '.ww-s6-top', '.ww-s6-shots', '.ww-s6-sol', '.ww-s6-charts', '.ww-s7-ipad'].join(', ')
    const items = Array.from(document.querySelectorAll(SELECTOR))
    const counts = new Map()
    items.forEach((el) => {
      el.classList.add('ww-anim')
      const p = el.parentElement
      const i = counts.get(p) || 0
      counts.set(p, i + 1)
      el.style.transitionDelay = Math.min(i, 8) * 120 + 'ms'
    })
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('ww-anim-in'); io.unobserve(e.target) } })
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main className="wawa">
      <LangToggle variant="float" />
      <a href="/" className="case-back" data-cursor="link" data-cursor-label={c.home}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
        <span>{c.back}</span>
      </a>

      <section className="ww-hero">
        <img src={heroLaptop} alt={alts.hero} loading="eager" decoding="async" fetchpriority="high" />
      </section>

      <section className="ww-meta">
        <div className="ww-meta-inner">
          {(t.meta || []).map((m, i) => (
            <div className="ww-meta-col" key={m.title}>
              <span className="ww-meta-ic">{META_ICONS[i]}</span>
              <h3>{m.title}</h3>
              <p>{m.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ww-s01 ww-board">
        <div className="ww-s01-stage">
          <h2 className="ww-s01-head">{(t.bgTitle || []).map((l, i) => (<Fragment key={i}>{i > 0 && <br />}{l}</Fragment>))}</h2>
          <p className="ww-s01-text">{t.bgText}</p>
          <img className="ww-s01-comp" src={s01Comp} alt={alts.compare} loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="ww-s2 ww-board">
        <div className="ww-s2-inner">
          <h2 className="ww-s2-title">{t.userGroupsTitle}</h2>
          <div className="ww-s2-cards">
            {(t.userGroups || []).map((g) => (
              <div className="ww-s2-card" key={g.name}>
                <div className="ww-s2-circle"><span>{g.name}</span></div>
                <div className="ww-s2-cap"><b>{g.bold}</b><span>{g.sub}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ww-s3 ww-board">
        <div className="ww-s3-inner">
          <div className="ww-s3-grid">
            {COLOR_SWATCHES.map((c, i) => (
              <div className="ww-s3-card" key={i} style={{ background: c.bg, color: c.fg }}>
                <span className="ww-s3-hex">CBDCDB</span>
                <span className="ww-s3-name">{t.swatchName}</span>
                <span className="ww-s3-dot" style={{ background: c.fg }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ww-s4 ww-board">
        <div className="ww-s4-stage">
          <div className="ww-s4-weights">
            <span>Light</span>
            <span>Regular</span>
            <span>Medium</span>
          </div>
          <p className="ww-s4-glyphs">{'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@€£$&*})({§?'}</p>
          <span className="ww-s4-aa">Aa</span>
          <span className="ww-s4-pill ww-s4-pill--1">PingFang SC</span>
          <span className="ww-s4-pill ww-s4-pill--2">PingFang SC</span>
        </div>
      </section>

      <section className="ww-s5 ww-board">
        <div className="ww-s5-inner">
          <h2 className="ww-s5-title">{(t.marketingTitle || []).map((l, i) => (<Fragment key={i}>{i > 0 && <br />}{l}</Fragment>))}</h2>
          <div className="ww-s5-shots">
            <div className="ww-s5-shot ww-s5-shot--before">
              <span className="ww-pill ww-pill--gray">Before</span>
              <img src={s5Before} alt={alts.before5} loading="lazy" decoding="async" />
            </div>
            <div className="ww-s5-shot ww-s5-shot--after">
              <span className="ww-pill ww-pill--green">After</span>
              <img src={s5After} alt={alts.after5} loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="ww-s5-opt">
            <h3>{t.optimizeTitle}</h3>
            <ul>
              {(t.optimize || []).map((li) => <li key={li}>{li}</li>)}
            </ul>
          </div>
          <div className="ww-s5-stat">
            <span className="ww-s5-num">{t.statNum}<i>↑</i></span>
            <span className="ww-s5-cap">{t.statCap}</span>
          </div>
        </div>
        <img className="ww-s5-bars" src={s5Stats} alt={alts.stats5} loading="lazy" decoding="async" />
      </section>

      <section className="ww-s6 ww-board">
        <div className="ww-s6-inner">
          <div className="ww-s6-top">
            <h2 className="ww-s6-title">{(t.editorTitle || []).map((l, i) => (<Fragment key={i}>{i > 0 && <br />}{l}</Fragment>))}</h2>
            <div className="ww-s6-problem">
              <h3>{t.problemTitle}</h3>
              <ul>
                {(t.problem || []).map((li) => <li key={li}>{li}</li>)}
              </ul>
            </div>
          </div>
          <div className="ww-s6-shots">
            <div className="ww-s6-shot ww-s6-shot--before">
              <span className="ww-pill ww-pill--gray">Before</span>
              <img src={s6Before} alt={alts.before6} loading="lazy" decoding="async" />
            </div>
            <div className="ww-s6-shot ww-s6-shot--after">
              <span className="ww-pill ww-pill--green">After</span>
              <img src={s6After} alt={alts.after6} loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="ww-s6-sol">
            <h3>{t.solutionTitle}</h3>
            <ul>
              {(t.solution || []).map((li) => <li key={li}>{li}</li>)}
            </ul>
          </div>
          <div className="ww-s6-charts">
            <img src={s6Chart1} alt={alts.chart1} loading="lazy" decoding="async" />
            <img src={s6Chart2} alt={alts.chart2} loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="ww-s7 ww-board">
        <img className="ww-s7-ipad" src={endIpad} alt={alts.ipad} loading="lazy" decoding="async" />
      </section>
    </main>
  )
}
