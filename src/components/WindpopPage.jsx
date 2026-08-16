import { Fragment, useEffect } from 'react'
import { useCopy } from '../i18n/LanguageContext.jsx'
import LangToggle from './LangToggle.jsx'
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

// Positional icon lists; the matching text lives in src/i18n/copy/windpop.js.
const WP_FEAT_ICONS = [wpLic1, wpLic2, wpLic3, wpLic4]
const WP_PROCESS_ICONS = [IcSearch, IcAtom, IcShapes]

export default function WindpopPage() {
  const c = useCopy('common')
  const t = useCopy('windpop')
  const alts = t.alts || {}

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
      <LangToggle variant="float" />
      <a href="/" className="case-back" data-cursor="link" data-cursor-label={c.home}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        <span>{c.back}</span>
      </a>

      <section className="wp-hero">
        <img src={wpHero} alt={alts.hero} loading="eager" decoding="async" fetchpriority="high" />
      </section>

      <section className="wp-proc">
        <div className="wp-proc-inner">
          {(t.process || []).map((col, i) => (
            <div className="wp-pcol" key={i}>
              <div className="wp-pc-top">
                <span className="wp-pc-ic">{WP_PROCESS_ICONS[i]}</span>
                <span className="wp-pc-hours">{col.hours}</span>
              </div>
              <h2 className="wp-pc-title">{col.title}</h2>
              <div className="wp-pc-tags">
                {col.tags.map((tag) => <span className="wp-pc-tag" key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wp-mission">
        <div className="wp-mission-stage">
          <img className="wp-m-wm" src={wpMissionWm} alt="" aria-hidden="true" />
          <h2 className="wp-m-title">
            {(t.missionTitle || []).map((line, i) => (
              <Fragment key={i}>{i > 0 && <br />}{line}</Fragment>
            ))}
          </h2>
          <p className="wp-m-body">
            {(t.missionBody || []).map((seg, i) =>
              seg.bl ? <span className="wp-bl" key={i}>{seg.text}</span> : seg.text,
            )}
          </p>
          <div className="wp-m-tags">
            {(t.missionTags || []).map((tag, i) => (
              <Fragment key={tag}>{i > 0 && <i />}<span>{tag}</span></Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="wp-logo">
        <div className="wp-logo-inner">
          <span className="wp-sec-label"><i className="wp-sec-dot" />{t.sectionLabels?.logo}</span>
          <div className="wp-logo-grid">
            <div className="wp-logo-left">
              <p className="wp-logo-body">{t.logoBody}</p>
              <div className="wp-logo-feats">
                {(t.logoFeats || []).map((f, i) => (
                  <div className="wp-feat" key={f.title}>
                    <img src={WP_FEAT_ICONS[i]} alt="" />
                    <span className="wp-feat-tx"><b>{f.title} /</b><span>{f.sub}</span></span>
                  </div>
                ))}
              </div>
            </div>
            <div className="wp-logo-right">
              <img src={wpLogoDiagram} alt={alts.logoDiagram} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section className="wp-type">
        <div className="wp-type-inner">
          <span className="wp-sec-label"><i className="wp-sec-dot" />{t.sectionLabels?.type}</span>
          <p className="wp-type-body">{t.typeBody}</p>
          <img className="wp-type-spec" src={wpTypeSpec} alt={alts.typeSpec} loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpLogoUsage} alt={alts.logoUsage} loading="lazy" decoding="async" />
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpGradient} alt={alts.gradient} loading="lazy" decoding="async" />
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpColorUse} alt={alts.colorUse} loading="lazy" decoding="async" />
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpLogoBlue} alt={alts.logoBlue} loading="lazy" decoding="async" />
      </section>

      <section className="wp-font">
        <div className="wp-font-grid">
          <div className="wp-font-left">
            <span className="wp-sec-label"><i className="wp-sec-dot" />{t.sectionLabels?.font}</span>
            <h2 className="wp-font-title">{t.fontTitle}</h2>
            <hr className="wp-font-rule" />
            <p className="wp-font-sub">{t.fontSub}</p>
            <p className="wp-font-body">{t.fontBody}</p>
            <p className="wp-font-glyphs">{t.fontGlyphs}</p>
          </div>
          <img className="wp-font-weights" src={wpFontWeights} alt={alts.fontWeights} loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpFavicon} alt={alts.favicon} loading="lazy" decoding="async" />
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpLaptop} alt={alts.laptop} loading="lazy" decoding="async" />
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpLogoBlue2} alt={alts.logoBlue2} loading="lazy" decoding="async" />
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpStationery} alt={alts.stationery} loading="lazy" decoding="async" />
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpIdCard} alt={alts.idCard} loading="lazy" decoding="async" />
      </section>

      <section className="wp-grad">
        <img className="wp-grad-img" src={wpBillboard} alt={alts.billboard} loading="lazy" decoding="async" />
      </section>
    </main>
  )
}
