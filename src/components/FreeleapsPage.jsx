import { useEffect } from 'react'
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
const DISCIPLINES = [
  { icon: iconUx, title: 'UX Design', hours: '48 hours', pills: ['User Flow', 'Wireframing', 'Storyboard Creation'] },
  { icon: iconUi, title: 'UI Design', hours: '87 hours', pills: ['Interface Design', 'Library', 'Clickable Prototype'] },
  { icon: iconDev, title: 'Development', hours: '160 hours', pills: ['Frontend', 'Backend', 'Function Testing & Optimization'] },
]

// staggered impact stats — big % + copy + a frosted-glass-over-bars graphic
const IMPACTS = [
  {
    num: '95%', color: '#2353f8',
    title: 'Freelancers’ Income Growth',
    text: 'Freelancers want transparent fees and fewer extra costs. Freeleaps’ “zero commission” policy maximizes earnings.',
  },
  {
    num: '67%', color: '#9bbeff', mid: true,
    title: 'Developers Get Accurate Matching',
    text: 'Other platforms often struggle with poor matching. Freeleaps uses smart algorithms to greatly improve task matching efficiency.',
  },
  {
    num: '39%', color: '#3b67ff',
    title: 'Clients Face Fewer Delays & Rework',
    text: 'Miscommunication often causes delays or rework. Freeleaps offers efficient collaboration tools and real-time tracking to cut risks and mistakes.',
  },
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
        <span>Back</span>
      </a>

      <section className="fl-hero container">
        <div className="fl-hero-frame">
          <img className="fl-hero-img" src={heroImg} alt="Freeleaps product hero" loading="eager" decoding="async" fetchpriority="high" />
          <div className="fl-hero-bar">
            <img className="fl-logo" src={freeleapsLogo} alt="Freeleaps" />
            <div className="fl-meta">
              <span className="fl-meta-desc">Software development collaboration platform, adaptive design</span>
              <span>Freefission<br />UX / UI / Develop</span>
              <span>2024</span>
            </div>
          </div>
        </div>
      </section>

      <section className="fl-disciplines container">
        {DISCIPLINES.map((d) => (
          <Discipline key={d.title} {...d} />
        ))}
      </section>

      <section className="fl-intro container">
        <p className="fl-intro-lead">
          Freeleaps is a software platform that helps clients and freelancers finish projects faster and safer.
        </p>
        <div className="fl-intro-meta">
          <div className="fl-intro-col">
            <p className="fl-strong">Project Name / Freeleaps</p>
            <p>Industry / Platform</p>
            <p>Platform Type / Web</p>
            <p>Year / 2024</p>
            <p>Tools / Figma, AIGC</p>
          </div>
          <div className="fl-intro-col">
            <p className="fl-strong">Project Overview</p>
            <p>Type / Software collaboration platform</p>
            <p>Connects / Clients &amp; Freelancers</p>
            <p>Features / Posting · Matching · Tracking · Payments</p>
            <p>Benefits / Secure developer income · Improve client efficiency</p>
          </div>
        </div>
      </section>

      <section className="fl-challenges container">
        <h2 className="fl-h2">The Challenges We Solve</h2>
        <div className="fl-ch-grid">
          <div className="fl-ch-row">
            <StatCard pill="Over 90%" title="Freelancers" big="90%"
              text="Struggle to find quality clients, often underpaid for workloads far beyond their expectations." />
            <figure className="fl-ch-photo"><img src={challenge1} alt="A freelancer overwhelmed at work" loading="lazy" decoding="async" /></figure>
          </div>
          <div className="fl-ch-row">
            <figure className="fl-ch-photo"><img src={challenge2} alt="A client frustrated at work" loading="lazy" decoding="async" /></figure>
            <StatCard pill="About 1/2" title="Clients" big="1/2"
              text="Want access to top developers at fair prices to bring their technical visions to life." />
          </div>
        </div>
      </section>

      <section className="fl-value container">
        <img className="fl-value-img" src={coreValue} alt="Core Platform Value — Freeleaps connects Freelancers, Clients and Developers" loading="lazy" decoding="async" />
      </section>

      <section className="fl-impact container">
        <div className="fl-impact-grid">
          {IMPACTS.map((it) => (
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
          <h2 className="fl-font-title">Font<br />Specification</h2>
          <span className="fl-font-tag">Clear / Readable</span>
        </div>
        <div className="fl-font-cats">
          <span>UX / UI Design</span>
          <span>Saas<br />System</span>
          <span className="fl-font-cat-right">Design<br />System<br />Backstage</span>
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
          <h2 className="fl-font-title">Colors<br />Specification</h2>
          <span className="fl-font-tag">Branded / Harmony</span>
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
          <h2 className="fl-font-title">Icon<br />Specification</h2>
          <span className="fl-font-tag">Recognizable</span>
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
            <img src={icon3dFeatured} alt="Freeleaps 3D icon" loading="lazy" decoding="async" />
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
          <h2 className="fl-font-title">Component<br />Library</h2>
          <span className="fl-font-tag">Recognizable</span>
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
        <img src={viBrand} alt="Freeleaps brand identity mockup" loading="lazy" decoding="async" />
      </section>

      <section className="fl-ending">
        <img src={endingOffice} alt="Freeleaps team at work" loading="lazy" decoding="async" />
        <img src={endingPhone} alt="Freeleaps mobile app" loading="lazy" decoding="async" />
      </section>
    </main>
  )
}
