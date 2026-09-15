import { useEffect } from 'react'
import './MetrologyPage.css'
import { useCopy } from '../i18n/LanguageContext.jsx'
import Rich from '../i18n/Rich.jsx'

// Hero illustration + product screens
import heroLaptop from '../assets/metrology/hero-laptop.webp'
import uiDashboard from '../assets/metrology/ui-dashboard.jpg'
import uiParcel from '../assets/metrology/ui-parcel.jpg'
import uiParcelHover from '../assets/metrology/ui-parcel-hover.jpg'
import uiTrucks from '../assets/metrology/ui-trucks.jpg'
import uiLoad from '../assets/metrology/ui-load.jpg'
import uiDrag from '../assets/metrology/ui-drag.jpg'
import uiLongpress from '../assets/metrology/ui-longpress.jpg'
import uiGuide from '../assets/metrology/ui-guide.jpg'
import gauge35 from '../assets/metrology/gauge-35.jpg'
import gauge70 from '../assets/metrology/gauge-70.jpg'
import gauge80 from '../assets/metrology/gauge-80.jpg'
import west56 from '../assets/metrology/west-56.jpg'
import west76 from '../assets/metrology/west-76.jpg'
import west89 from '../assets/metrology/west-89.jpg'

// Field research photos
import photoCrush from '../assets/metrology/photo-crush.jpg'
import photoForklift from '../assets/metrology/photo-forklift.jpg'
import photoHoist from '../assets/metrology/photo-hoist.jpg'
import photoJarTop from '../assets/metrology/photo-jar-top.jpg'
import photoScalePerson from '../assets/metrology/photo-scale-person.jpg'
import photoScale2 from '../assets/metrology/photo-scale-2.jpg'
import photoTruck from '../assets/metrology/photo-truck.jpg'
import photoKneel from '../assets/metrology/photo-kneel.jpg'
import photoGate from '../assets/metrology/photo-gate.jpg'
import photoScale1 from '../assets/metrology/photo-scale-1.jpg'
import photoCellar1 from '../assets/metrology/photo-cellar-1.jpg'
import photoCellar2 from '../assets/metrology/photo-cellar-2.jpg'
import photoCloth from '../assets/metrology/photo-cloth.jpg'
import photoCloth2 from '../assets/metrology/photo-cloth-2.jpg'
import photoPits from '../assets/metrology/photo-pits.jpg'
import photoMash from '../assets/metrology/photo-mash.jpg'

// Colours from the project's own brand book; the UI screenshots carry them too.
const BLUE = '#346BFE'
const DANGER = '#FB3541'
const WARN = '#FF8F28'
const OK = '#0DAAA1'
const PROBLEM_COLORS = [BLUE, OK, WARN]

const GOAL_ICONS = [
  <path key="rocket" d="M5 19l4-4M14 4l6 6-8 8-6-6 8-8zM4 20l1-5 4 4-5 1z" />,
  <path key="gem" d="M6 3h12l4 6-10 12L2 9l4-6zM2 9h20M9 3l3 6 3-6" />,
  <path key="book" d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4V4zM20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7V4z" />,
  <g key="share"><circle cx="12" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><path d="M12 7v4M12 11l-6 6M12 11l6 6" /></g>,
]

function Point({ title, text }) {
  return (
    <div className="mt-point">
      <div className="mt-point-head">
        <span className="mt-point-dot" aria-hidden="true" />
        <span className="mt-point-title">{title}</span>
      </div>
      {text ? <p className="mt-point-text">{text}</p> : null}
    </div>
  )
}

function StageCopy({ title, text }) {
  return (
    <div className="mt-stage-copy">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function Shot({ src, alt }) {
  return <img className="mt-shot" src={src} alt={alt || ''} loading="lazy" decoding="async" />
}

export default function MetrologyPage() {
  const t = useCopy('metrology')
  const alts = t.alts || {}

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const approvalPhotos = [photoCrush, photoForklift, photoHoist, photoJarTop]
  const cellarPhotos = [photoCellar1, photoCellar2, photoCloth, photoCloth2, photoPits, photoMash]
  const effShots = [uiLoad, uiDrag, uiLongpress, uiGuide]
  const effAlts = [alts.load, alts.drag, alts.longpress, alts.guide]

  return (
    <div className="mt-page">
      <a href="/" className="case-back" data-cursor="link" data-cursor-label="Home">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        <span>{t.back}</span>
      </a>

      {/* Hero — laptop mockup on the grey band, deck cut by the band's edge (same as Solvely Plugins) */}
      <section className="mt-hero">
        <div className="mt-hero-content">
          <img className="mt-hero-img" src={heroLaptop} alt={alts.hero} loading="eager" decoding="async" fetchpriority="high" />
        </div>
      </section>

      <div className="mt-main">
        {/* Meta */}
        <div className="mt-meta">
          {[[t.metaRoleLabel, t.metaRoleValue], [t.metaClientLabel, t.metaClientValue], [t.metaPlatformLabel, t.metaPlatformValue]].map(([label, value]) => (
            <div className="mt-meta-group" key={label}>
              <div className="mt-meta-label">{label}</div>
              <div className="mt-meta-value">{value}</div>
            </div>
          ))}
        </div>

        {/* Title, intro, outcomes */}
        <section className="mt-intro">
          <h1 className="mt-title">{t.title}</h1>
          <div className="mt-intro-text">
            {(t.intro || []).map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="mt-results">
            <div className="mt-results-header">
              <span className="mt-results-title">{t.resultsTitle}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007aff" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="#007aff" />
              </svg>
            </div>
            <ul className="mt-results-list">
              {(t.results || []).map((r, i) => <li key={i}><Rich text={r} /></li>)}
            </ul>
          </div>
        </section>

        {/* Background */}
        <section className="mt-section">
          <h2 className="mt-section-title">{t.bgTitle}</h2>
          <div className="mt-stage">
            <div className="mt-pies">
              {(t.bgPies || []).map((pie) => (
                <div className="mt-pie" key={pie.caption}>
                  <div className="mt-pie-disc" style={{ background: `conic-gradient(${BLUE} 0 ${pie.pct}%, #7fe0cf ${pie.pct}% 100%)` }}>
                    <span>{pie.pct}%</span>
                  </div>
                  <div className="mt-pie-legend">{pie.legend}</div>
                  <div className="mt-pie-caption">{pie.caption}</div>
                </div>
              ))}
            </div>
          </div>
          <StageCopy title={t.bgCopyTitle} text={t.bgCopy} />
        </section>

        {/* Project approval */}
        <section className="mt-section">
          <h2 className="mt-section-title">{t.approvalTitle}</h2>
          <div className="mt-section-text"><p>{t.approvalIntro}</p></div>
          <div className="mt-stage">
            <div className="mt-photos mt-photos--4">
              {approvalPhotos.map((src, i) => (
                <figure className="mt-photo" key={i}>
                  <img src={src} alt={alts.photo} loading="lazy" decoding="async" />
                  <figcaption>{t.approvalPhotos?.[i]}</figcaption>
                </figure>
              ))}
            </div>
          </div>
          <StageCopy title={t.approvalCopyTitle} text={t.approvalCopy} />
          <div className="mt-section-text mt-section-text--gap"><p>{t.approvalIntro2}</p></div>
          <div className="mt-stage">
            <div className="mt-photos mt-photos--3">
              <figure className="mt-photo">
                <img src={photoScalePerson} alt={alts.photo} loading="lazy" decoding="async" />
                <figcaption>{t.scalePhotos?.[0]}</figcaption>
              </figure>
              <figure className="mt-photo">
                <img src={photoScale2} alt={alts.photo} loading="lazy" decoding="async" />
                <figcaption>{t.scalePhotos?.[1]}</figcaption>
              </figure>
              <figure className="mt-photo">
                <div className="mt-photo-quad">
                  {[photoTruck, photoKneel, photoGate, photoScale1].map((src, i) => (
                    <img key={i} src={src} alt={alts.photo} loading="lazy" decoding="async" />
                  ))}
                </div>
                <figcaption>{t.scalePhotos?.[2]}</figcaption>
              </figure>
            </div>
            <div className="mt-photos mt-photos--cellar">
              {cellarPhotos.map((src, i) => (
                <img key={i} src={src} alt={alts.photo} loading="lazy" decoding="async" />
              ))}
            </div>
          </div>
          <StageCopy title={t.cellarCopyTitle} text={t.cellarCopy} />
        </section>

        {/* Experience map */}
        <section className="mt-section">
          <h2 className="mt-section-title">{t.journeyTitle}</h2>
          <div className="mt-stage mt-stage--tight">
            <div className="mt-journey-scroll">
              <div className="mt-journey">
                <div className="mt-journey-row">
                  <div className="mt-journey-label">{t.journeyRows?.phase}</div>
                  <div className="mt-journey-phases">
                    {(t.journeyPhases || []).map((p, i) => (
                      <div className="mt-journey-phase" key={p} style={{ flex: [1, 2, 1.4][i] }}>{p}</div>
                    ))}
                  </div>
                </div>
                <div className="mt-journey-row">
                  <div className="mt-journey-label">{t.journeyRows?.behavior}</div>
                  <div className="mt-journey-behaviors">
                    {(t.journeyBehaviors || []).map((col, i) => (
                      <div className="mt-journey-col" key={i}>
                        {col.map((step) => <span className="mt-journey-box" key={step}>{step}</span>)}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-journey-row">
                  <div className="mt-journey-label">{t.journeyRows?.problem}</div>
                  <div className="mt-journey-problems">
                    {(t.journeyProblems || []).map((group, i) => (
                      <div className="mt-journey-group" key={group.title}>
                        <div className="mt-journey-group-title" style={{ borderColor: PROBLEM_COLORS[i] }}>{group.title}</div>
                        <div className="mt-journey-chips">
                          {group.items.map((item) => <span className="mt-journey-chip" key={item}>{item}</span>)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-journey-row">
                  <div className="mt-journey-label">{t.journeyRows?.solution}</div>
                  <div className="mt-journey-solutions">
                    {(t.journeySolutions || []).map((s) => <span className="mt-journey-box mt-journey-box--white" key={s}>{s}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <StageCopy title={t.journeyCopyTitle} text={t.journeyCopy} />
        </section>

        {/* Needs analysis */}
        <section className="mt-section">
          <h2 className="mt-section-title">{t.needsTitle}</h2>
          <div className="mt-stage">
            <div className="mt-needs">
              <div className="mt-venn" aria-hidden="true">
                {(t.venn || []).map((label, i) => (
                  <div className={`mt-venn-circle mt-venn-circle--${i + 1}`} key={label}>{label}</div>
                ))}
              </div>
              <div className="mt-needs-copy">
                <h3 className="mt-needs-headline"><Rich text={t.needsHeadline} /></h3>
                <div className="mt-points">
                  {(t.needsPoints || []).map((p) => <Point key={p.title} title={p.title} text={p.text} />)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design goals */}
        <section className="mt-section">
          <h2 className="mt-section-title">{t.goalsTitle}</h2>
          <div className="mt-goals">
            {(t.goals || []).map((g, i) => (
              <div className="mt-goal" key={g.title}>
                <span className="mt-goal-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{GOAL_ICONS[i]}</svg>
                </span>
                <div className="mt-goal-title">{g.title}</div>
                <div className="mt-goal-text">{g.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tiered content */}
        <section className="mt-section">
          <h2 className="mt-section-title">{t.contentTitle}</h2>
          <div className="mt-point-lead"><Point title={t.layersPoint?.title} text={t.layersPoint?.text} /></div>
          <div className="mt-stage">
            <div className="mt-layers">
              <div className="mt-layers-list">
                <span className="mt-layers-rule" aria-hidden="true" />
                <div>{(t.layers || []).map((l) => <div className="mt-layers-item" key={l}>{l}</div>)}</div>
              </div>
              <div className="mt-layers-stack" aria-hidden="true">
                <div className="mt-layers-plate mt-layers-plate--1" />
                <div className="mt-layers-plate mt-layers-plate--2" />
                <div className="mt-layers-plate mt-layers-plate--3" />
                <div className="mt-layers-plate mt-layers-plate--4" />
              </div>
            </div>
          </div>
          <div className="mt-point-lead mt-point-lead--gap"><Point title={t.dashboardPoint} /></div>
          <div className="mt-stage">
            <div className="mt-split mt-split--shot-left">
              <Shot src={uiDashboard} alt={alts.dashboard} />
              <div className="mt-points">
                {(t.dashboardPoints || []).map((p) => <Point key={p.title} title={p.title} text={p.text} />)}
              </div>
            </div>
          </div>
          <div className="mt-point-lead mt-point-lead--gap"><Point title={t.tablePoint} /></div>
          <div className="mt-stage">
            <div className="mt-split mt-split--shot-right">
              <div className="mt-points">
                {(t.tablePoints || []).map((p) => <Point key={p.title} title={p.title} text={p.text} />)}
              </div>
              <Shot src={uiParcel} alt={alts.parcel} />
            </div>
          </div>
        </section>

        {/* High-value data */}
        <section className="mt-section">
          <h2 className="mt-section-title">{t.dataTitle}</h2>
          <div className="mt-point-lead"><Point title={t.chartsPoint?.title} text={t.chartsPoint?.text} /></div>
          <div className="mt-stage">
            <div className="mt-cards3">
              {[gauge35, gauge70, gauge80].map((src, i) => <Shot key={i} src={src} alt={alts.gauge} />)}
            </div>
            <div className="mt-cards3 mt-cards3--gap">
              {[west56, west76, west89].map((src, i) => <Shot key={i} src={src} alt={alts.west} />)}
            </div>
          </div>
          <StageCopy title={t.chartsCopyTitle} text={t.chartsCopy} />
          <div className="mt-point-lead mt-point-lead--gap"><Point title={t.tableFramePoint?.title} text={t.tableFramePoint?.text} /></div>
          <div className="mt-stage">
            <div className="mt-split mt-split--shot-right">
              <div>
                <div className="mt-colblocks" aria-hidden="true">
                  {(t.colBlocks || []).map((label, i) => (
                    <div className={`mt-colblock mt-colblock--${i + 1}`} key={label} style={{ color: PROBLEM_COLORS[[0, 2, 1][i]] }}>
                      <span className="mt-colblock-title">{label}</span>
                      <span className="mt-colblock-dot" />
                      <span className="mt-colblock-box" />
                    </div>
                  ))}
                </div>
                <Point title={t.hoverPoint?.title} text={t.hoverPoint?.text} />
              </div>
              <Shot src={uiParcelHover} alt={alts.parcelHover} />
            </div>
          </div>
        </section>

        {/* Operating efficiency */}
        <section className="mt-section">
          <h2 className="mt-section-title">{t.efficiencyTitle}</h2>
          <div className="mt-point-lead"><Point title={t.efficiencyPoint?.title} text={t.efficiencyPoint?.text} /></div>
          <div className="mt-stage">
            <Shot src={uiTrucks} alt={alts.trucks} />
          </div>
          <StageCopy title={t.trucksCopyTitle} text={t.trucksCopy} />
          <div className="mt-eff-grid">
            {(t.effItems || []).map((item, i) => (
              <div className="mt-eff-item" key={item.title}>
                <Point title={item.title} text={item.text} />
                <div className="mt-eff-shot"><Shot src={effShots[i]} alt={effAlts[i]} /></div>
              </div>
            ))}
          </div>
        </section>

        {/* Multi-role collaboration */}
        <section className="mt-section">
          <h2 className="mt-section-title">{t.synergyTitle}</h2>
          <div className="mt-point-lead"><Point title={t.gridPoint?.title} text={t.gridPoint?.text} /></div>
          <div className="mt-stage">
            <div className="mt-grid24" aria-hidden="true">
              <div className="mt-grid24-side">
                <span className="mt-grid24-logo" />
                {[0, 1, 2, 3, 4].map((i) => <span className="mt-grid24-nav" key={i} />)}
              </div>
              <div className="mt-grid24-body">
                <div className="mt-grid24-cols">
                  {Array.from({ length: 24 }, (_, i) => <span key={i} />)}
                </div>
                <div className="mt-grid24-width"><span /> {t.gridLabels?.width} <span /></div>
                <div className="mt-grid24-tags">
                  <span>{t.gridLabels?.gutter}</span><span>{t.gridLabels?.column}</span><span>{t.gridLabels?.margin}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-point-lead mt-point-lead--gap"><Point title={t.colorPoint?.title} text={t.colorPoint?.text} /></div>
          <div className="mt-stage">
            <div className="mt-swatches">
              {(t.swatches || []).map((s, i) => (
                <div className="mt-swatch" key={s.name}>
                  <span className={`mt-swatch-fill mt-swatch-fill--${i + 1}`} />
                  <span className="mt-swatch-name">{s.name}</span>
                  <span className="mt-swatch-value">{s.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-color-tables">
              {[[t.grayTitle, t.grayRows], [t.blueTitle, t.blueRows]].map(([title, rows]) => (
                <div className="mt-color-table" key={title}>
                  <div className="mt-color-table-title">{title}</div>
                  <div className="mt-color-row mt-color-row--head">
                    {(t.colorHeaders || []).map((h) => <span key={h}>{h}</span>)}
                  </div>
                  {(rows || []).map(([name, hex, usage]) => (
                    <div className="mt-color-row" key={name}>
                      <span>{name}</span><span>{hex}</span><span>{usage}</span>
                      <span className="mt-color-sample" style={{ background: hex }} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-point-lead mt-point-lead--gap"><Point title={t.fontPoint?.title} text={t.fontPoint?.text} /></div>
          <div className="mt-stage">
            <div className="mt-fonts">
              <div className="mt-font-card">
                <div className="mt-font-card-title">{t.fontFamilyTitle}</div>
                <div className="mt-font-card-note">{t.fontFamilyNote}</div>
                <div className="mt-font-families">
                  {(t.fontFamilies || []).map((f) => (
                    <div className="mt-font-family" key={f.family + f.label}>
                      <span className="mt-font-glyph">{f.glyph}</span>
                      <span className="mt-font-family-label">{f.label} · {f.family}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-font-card">
                <div className="mt-font-card-title">{t.fontSizesTitle}</div>
                <div className="mt-font-row mt-font-row--head">
                  {(t.fontHeaders || []).map((h) => <span key={h}>{h}</span>)}
                </div>
                {(t.fontSizes || []).map((f) => (
                  <div className="mt-font-row" key={f.size}>
                    <span className="mt-font-example" style={{ fontSize: f.size }}>{f.size}px semibold Gray 7</span>
                    <span>{f.size}px Semibold / {f.lh}px</span>
                    <span>{f.usage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results verification */}
        <section className="mt-section mt-section--last">
          <h2 className="mt-section-title">{t.verifyTitle}</h2>
          <div className="mt-stage">
            <div className="mt-split mt-split--shot-right">
              <div>
                <Point title={t.verifyPoint?.title} text={t.verifyPoint?.text} />
                <div className="mt-bars">
                  {(t.bars || []).map((b, i) => (
                    <div className={`mt-bar mt-bar--${i + 1}`} key={b.label}>
                      <span>{b.label}</span>
                      <span className="mt-bar-value">
                        {b.pct}%
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d={b.up ? 'M12 19V5M5 12l7-7 7 7' : 'M12 5v14M5 12l7 7 7-7'} />
                        </svg>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-collage">
                {[[uiDashboard, alts.dashboard], [uiTrucks, alts.trucks], [uiLoad, alts.load], [uiParcelHover, alts.parcelHover]].map(([src, alt], i) => (
                  <Shot key={i} src={src} alt={alt} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
