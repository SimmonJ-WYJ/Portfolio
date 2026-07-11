import { useEffect } from 'react'
import './WindpopPage.css'
import wpHero from '../assets/windpop/hero/hero.jpg'
import wpMissionWm from '../assets/windpop/mission/watermark.png'
import wpLogoDiagram from '../assets/windpop/logo/diagram.png'
import wpLic1 from '../assets/windpop/logo/ic1.png'
import wpLic2 from '../assets/windpop/logo/ic2.png'
import wpLic3 from '../assets/windpop/logo/ic3.png'
import wpLic4 from '../assets/windpop/logo/ic4.png'
import wpTypeSpec from '../assets/windpop/type/windpop-spec.png'
import wpGradient from '../assets/windpop/gradient/palette.jpg'
import wpColorUse from '../assets/windpop/coloruse/usage.jpg'
import wpLogoBlue from '../assets/windpop/logoblue/logo-blue.jpg'
import wpFontWeights from '../assets/windpop/font/weights.png'
import wpFavicon from '../assets/windpop/favicon/favicon.jpg'
import wpLaptop from '../assets/windpop/laptop/laptop.jpg'
import wpLogoBlue2 from '../assets/windpop/logoblue2/logo-blue2.jpg'
import wpStationery from '../assets/windpop/stationery/stationery.jpg'
import wpIdCard from '../assets/windpop/idcard/idcard.jpg'
import wpBillboard from '../assets/windpop/billboard/billboard.jpg'
import wpLogoUsage from '../assets/windpop/logousage/logousage.jpg'

const IcSearch = (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#111" strokeWidth="1.6" strokeLinecap="round"><circle cx="10.5" cy="10.5" r="6" /><line x1="15" y1="15" x2="20" y2="20" /></svg>
)
const IcAtom = (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#111" strokeWidth="1.4"><circle cx="12" cy="12" r="1.6" fill="#111" stroke="none" /><ellipse cx="12" cy="12" rx="10" ry="4.4" /><ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(120 12 12)" /></svg>
)
const IcShapes = (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#111" strokeWidth="1.4"><path d="M8 3.5l3 5H5l3-5Z" /><circle cx="17" cy="6" r="2.6" /><rect x="13.6" y="13.4" width="6" height="6" rx="1" /><rect x="4.6" y="13.4" width="6" height="6" rx="1" /></svg>
)

const WP_LOGO_FEATS = [
  { icon: wpLic1, title: 'Smallest unit', sub: 'Early exploration' },
  { icon: wpLic2, title: 'Wind scatters seeds', sub: 'Spreading inclusive technology' },
  { icon: wpLic3, title: 'Redefine', sub: 'Break down and restructure' },
  { icon: wpLic4, title: 'Dandelion imagery', sub: 'A vision of shared technology' },
]

const WP_PROCESS = [
  { icon: IcSearch, hours: '24 hours', title: 'Research', tags: ['Industry', 'User research', 'Brand positioning'] },
  { icon: IcAtom, hours: '48 hours', title: 'Discovery', tags: ['Moodboard', 'Keywords', 'Logo Sketches'] },
  { icon: IcShapes, hours: '87 hours', title: 'Solution', tags: ['Applications', 'Refinement', 'Finalized VI System'] },
]

export default function WindpopPage() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const SELECTOR = ['.wp-hero img', '.wp-pcol', '.wp-m-title', '.wp-m-body', '.wp-m-tags', '.wp-sec-label', '.wp-logo-body', '.wp-feat', '.wp-logo-right', '.wp-type-body', '.wp-type-spec', '.wp-grad-img', '.wp-font-left', '.wp-font-weights'].join(', ')
    const items = Array.from(document.querySelectorAll(SELECTOR))
    items.forEach((el) => el.classList.add('wp-anim'))
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('wp-anim-in'); io.unobserve(e.target) } })
    }, { threshold: 0.12 })
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main className="wp">
      <a href="/" className="case-back" data-cursor="link" data-cursor-label="Home">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        <span>Back</span>
      </a>

      <section className="wp-hero">
        <img src={wpHero} alt="Windpop — Explore Ideas Early · Redefine Experience · Tech for Everyone" loading="eager" decoding="async" fetchpriority="high" />
      </section>

      <section className="wp-proc">
        <div className="wp-proc-inner">
          {WP_PROCESS.map((c) => (
            <div className="wp-pcol" key={c.title}>
              <div className="wp-pc-top">
                <span className="wp-pc-ic">{c.icon}</span>
                <span className="wp-pc-hours">{c.hours}</span>
              </div>
              <h2 className="wp-pc-title">{c.title}</h2>
              <div className="wp-pc-tags">
                {c.tags.map((t) => <span className="wp-pc-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wp-mission">
        <div className="wp-mission-stage">
          <img className="wp-m-wm" src={wpMissionWm} alt="" aria-hidden="true" />
          <h2 className="wp-m-title">WINDPOP<br />MISSION</h2>
          <p className="wp-m-body">
            Windpop is an investing firm focusing on <span className="wp-bl">exploring early ideas and incubating them to be an operatable product prototype</span> which can be further invested in by other investors. We are particularly looking for ideas that <span className="wp-bl">redefine the user experiences of the existing product</span> run by big companies with simplification and reduction in a way that the product becomes accessible for more people. We do this because we believe technology should not be monopolized by a few entities who use it to make profit for their stakeholders primarily. Instead, technology should be open to all people and accessible to everyone. Windpop’s mission is to <span className="wp-bl">make technology accessible to more people.</span>
          </p>
          <div className="wp-m-tags">
            <span>Explore Ideas Early</span>
            <i />
            <span>Redefine Experience</span>
            <i />
            <span>Tech for Everyone</span>
          </div>
        </div>
      </section>

      <section className="wp-logo">
        <div className="wp-logo-inner">
          <span className="wp-sec-label"><i className="wp-sec-dot" />LOGO DESIGN</span>
          <div className="wp-logo-grid">
            <div className="wp-logo-left">
              <p className="wp-logo-body">Windpop’s vision is expressed through a mix of abstract and concrete forms: using small units like seeds to symbolize early ideas, reshaping them into new forms to redefine products, and letting them spread outward to represent inclusive technology, just like dandelion seeds drifting in the wind and carrying our vision of openness and sharing.</p>
              <div className="wp-logo-feats">
                {WP_LOGO_FEATS.map((f) => (
                  <div className="wp-feat" key={f.title}>
                    <img src={f.icon} alt="" />
                    <span className="wp-feat-tx"><b>{f.title} /</b><span>{f.sub}</span></span>
                  </div>
                ))}
              </div>
            </div>
            <div className="wp-logo-right">
              <img src={wpLogoDiagram} alt="Windpop 标志构成 — 蒲公英放射几何" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section className="wp-type">
        <div className="wp-type-inner">
          <span className="wp-sec-label"><i className="wp-sec-dot" />TYPEFACE DESIGN</span>
          <p className="wp-type-body">Using trapezoidal negative space at the corners of the letters creates a distinctive texture, enhances brand recognition, and aligns seamlessly with the logo.</p>
          <img className="wp-type-spec" src={wpTypeSpec} alt="Windpop 字体规范 — Ascender / X-Height / Baseline / Descender" loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpLogoUsage} alt="Windpop 标志用法 — 垂直/单独/水平排列与正误示例" loading="lazy" decoding="async" />
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpGradient} alt="Windpop 渐变色板 — Light / Dark Gradient" loading="lazy" decoding="async" />
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpColorUse} alt="Windpop 标志配色应用 — 白底/深底/蓝底/渐变底" loading="lazy" decoding="async" />
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpLogoBlue} alt="Windpop 标志 — 蓝色渐变背景" loading="lazy" decoding="async" />
      </section>

      <section className="wp-font">
        <div className="wp-font-grid">
          <div className="wp-font-left">
            <span className="wp-sec-label"><i className="wp-sec-dot" />FONT</span>
            <h2 className="wp-font-title">Inter family</h2>
            <hr className="wp-font-rule" />
            <p className="wp-font-sub">Headings + Subheadings + Body Copy</p>
            <p className="wp-font-body">Inter is a modern, highly readable sans-serif with flexible weights and global language support, making it ideal for consistent use across all brand touchpoints. Its neutral yet approachable style aligns with Windpop’s vision of redefining experiences and making technology accessible to everyone.</p>
            <p className="wp-font-glyphs">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789!</p>
          </div>
          <img className="wp-font-weights" src={wpFontWeights} alt="Inter 字重 400 / 500 / 600 / 700" loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpFavicon} alt="Windpop favicon 应用 — 通知卡片与浏览器标签" loading="lazy" decoding="async" />
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpLaptop} alt="Windpop Capital — 笔记本网站样机" loading="lazy" decoding="async" />
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpLogoBlue2} alt="Windpop 标志 — 蓝色渐变背景" loading="lazy" decoding="async" />
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpStationery} alt="Windpop 品牌物料 — 信纸 / 名片 / 信封" loading="lazy" decoding="async" />
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpIdCard} alt="Windpop 工牌 — ID Card" loading="lazy" decoding="async" />
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpBillboard} alt="Windpop 广告牌 — Invest in Tomorrow’s Ideas, Today." loading="lazy" decoding="async" />
      </section>
    </main>
  )
}
