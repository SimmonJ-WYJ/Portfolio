import './LearningsSection.css'

export default function LearningsSection({ learningsTitle, learnings, nextStepsTitle, nextSteps }) {
  return (
    <section className="learnings-section">
      <div className="learnings-container">
        <div className="learnings-block">
          <h2 className="learnings-title">{learningsTitle}</h2>
          <div className="learnings-grid">
            {learnings.map((learning, i) => (
              <div key={i} className="learning-card">
                <div className="learning-number" aria-hidden="true">{learning.number}</div>
                <h3 className="learning-title">{learning.title}</h3>
                <p className="learning-text">{learning.text}</p>
              </div>
            ))}
          </div>
        </div>

        {nextSteps && nextSteps.length > 0 && (
          <div className="nextsteps-block">
            <h2 className="nextsteps-title">{nextStepsTitle}</h2>
            <ul className="nextsteps-list">
              {nextSteps.map((step, i) => (
                <li key={i} className="nextsteps-item">
                  <span className="nextsteps-bullet" aria-hidden="true">→</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
