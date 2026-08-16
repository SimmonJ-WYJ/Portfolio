import './ResultsSection.css'

export default function ResultsSection({ title, metrics, businessImpactTitle, businessImpact }) {
  return (
    <section className="results-section">
      <div className="results-container">
        <h2 className="results-title">{title}</h2>

        <div className="results-metrics">
          {metrics.map((metric, i) => (
            <div key={i} className="results-metric">
              <div className="results-metric-icon" aria-hidden="true">{metric.icon}</div>
              <div className="results-metric-category">{metric.category}</div>
              <div className="results-metric-value">{metric.value}</div>
              <div className="results-metric-detail">{metric.detail}</div>
            </div>
          ))}
        </div>

        {businessImpact && businessImpact.length > 0 && (
          <div className="results-business">
            <h3 className="results-business-title">{businessImpactTitle}</h3>
            <ul className="results-business-list">
              {businessImpact.map((item, i) => (
                <li key={i} className="results-business-item">
                  <span className="results-business-bullet" aria-hidden="true">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
