import './OverviewSection.css'

export default function OverviewSection({ challenge, solution, impact }) {
  return (
    <section className="overview-section">
      <div className="overview-container">
        <div className="overview-card overview-card--challenge">
          <h2 className="overview-card-title">{challenge.title}</h2>
          <p className="overview-card-text">{challenge.text}</p>
        </div>

        <div className="overview-divider" aria-hidden="true" />

        <div className="overview-card overview-card--solution">
          <h2 className="overview-card-title">{solution.title}</h2>
          <p className="overview-card-text">{solution.text}</p>
        </div>

        <div className="overview-divider" aria-hidden="true" />

        <div className="overview-card overview-card--impact">
          <h2 className="overview-card-title">{impact.title}</h2>
          <ul className="overview-impact-list">
            {impact.metrics.map((metric, i) => (
              <li key={i} className="overview-impact-item">
                <span className="overview-impact-icon" aria-hidden="true">{metric.icon}</span>
                <span className="overview-impact-text">{metric.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
