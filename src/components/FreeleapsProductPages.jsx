import './FreeleapsProductPages.css'
import { useCopy } from '../i18n/LanguageContext.jsx'
import contractPage from '../assets/freeleaps/productpages/contract-page.png'
import issuesPage from '../assets/freeleaps/productpages/issues-page.png'
import chartBig from '../assets/freeleaps/productpages/chart-big.png'
import chartSliver from '../assets/freeleaps/productpages/chart-sliver.png'

function Info({ title, children }) {
  return (
    <div className="pp-info">
      <div className="pp-info-head"><span className="pp-dot" />{title}</div>
      <div className="pp-info-body">{children}</div>
    </div>
  )
}

export default function ProductPages() {
  const t = useCopy('freeleaps')
  const alts = t.alts || {}
  const infoBlocks = (blocks) => (blocks || []).map((b, i) => (
    <Info key={i} title={b.title}>
      {(b.lines || []).map((l, j) => <p key={j}>{l}</p>)}
    </Info>
  ))
  return (
    <div className="pp-inner">
      {/* Contract Page */}
      <h2 className="pp-h">{t.contractTitle}</h2>
      <div className="pp-row">
        <img className="pp-mock" src={contractPage} alt={alts.contractPage} loading="lazy" decoding="async" />
        <div className="pp-col">
          {infoBlocks(t.contractInfo)}
        </div>
      </div>

      {/* Issues Page */}
      <h2 className="pp-h pp-h--issues">{t.issuesTitle}</h2>
      <div className="pp-row">
        <div className="pp-col pp-col--narrow">
          {infoBlocks(t.issuesInfo)}
        </div>
        <img className="pp-mock pp-mock--issues" src={issuesPage} alt={alts.issuesPage} loading="lazy" decoding="async" />
      </div>

      {/* trend chart */}
      <div className="pp-chart-row">
        <img className="pp-chart" src={chartBig} alt={alts.issuesChart} loading="lazy" decoding="async" />
        <p className="pp-chart-text">{t.issuesChartCaption}</p>
      </div>
      <img className="pp-chart-sliver" src={chartSliver} alt="" loading="lazy" decoding="async" />
    </div>
  )
}
