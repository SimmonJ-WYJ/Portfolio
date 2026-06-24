import './FreeleapsProductPages.css'
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
  return (
    <div className="pp-inner">
      {/* Contract Page */}
      <h2 className="pp-h">Contract Page</h2>
      <div className="pp-row">
        <img className="pp-mock" src={contractPage} alt="Contract page" />
        <div className="pp-col">
          <Info title="Key Information">
            <p>Display core contract details, including publisher, contractor, and acceptance date.</p>
          </Info>
          <Info title="Highlights">
            <p>❶ Detailed view on the right with clear information hierarchy.</p>
            <p>❷ Visualized milestone payments reduce communication costs.</p>
          </Info>
        </div>
      </div>

      {/* Issues Page */}
      <h2 className="pp-h pp-h--issues">Issues Page</h2>
      <div className="pp-row">
        <div className="pp-col pp-col--narrow">
          <Info title="Design Features">
            <p>Data visualization: line charts clearly show issue trends.</p>
            <p>Collaboration integration: issues can be linked to project group chat to improve communication efficiency.</p>
          </Info>
        </div>
        <img className="pp-mock pp-mock--issues" src={issuesPage} alt="Issues page" />
      </div>

      {/* trend chart */}
      <div className="pp-chart-row">
        <img className="pp-chart" src={chartBig} alt="Issue trends chart" />
        <p className="pp-chart-text">clearly show issue trends</p>
      </div>
      <img className="pp-chart-sliver" src={chartSliver} alt="" />
    </div>
  )
}
