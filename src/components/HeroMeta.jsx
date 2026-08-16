import './HeroMeta.css'

export default function HeroMeta({ tagline, subtitle, metrics, role, timeline, team }) {
  return (
    <section className="hero-meta">
      <div className="hero-meta-container">
        {tagline && (
          <div className="hero-meta-header">
            <h1 className="hero-meta-tagline">{tagline}</h1>
            {subtitle && <p className="hero-meta-subtitle">{subtitle}</p>}
          </div>
        )}

        {metrics && metrics.length > 0 && (
          <div className="hero-meta-metrics">
            {metrics.map((metric, i) => (
              <div key={i} className="hero-meta-metric">
                <div className="hero-meta-metric-value">{metric.value}</div>
                <div className="hero-meta-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {(role || timeline || team) && (
          <div className="hero-meta-details">
            {role && (
              <div className="hero-meta-detail">
                <span className="hero-meta-detail-label">Role</span>
                <span className="hero-meta-detail-value">{role}</span>
              </div>
            )}
            {timeline && (
              <div className="hero-meta-detail">
                <span className="hero-meta-detail-label">Timeline</span>
                <span className="hero-meta-detail-value">{timeline}</span>
              </div>
            )}
            {team && (
              <div className="hero-meta-detail">
                <span className="hero-meta-detail-label">Team</span>
                <span className="hero-meta-detail-value">{team}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
