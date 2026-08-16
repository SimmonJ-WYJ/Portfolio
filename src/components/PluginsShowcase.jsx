import { useCopy } from '../i18n/LanguageContext.jsx'
import './PluginsShowcase.css'

// Flow images
import onboardingLight from '../assets/solvely/plugins/flows/onboarding-light.png'
import onboardingDark from '../assets/solvely/plugins/flows/onboarding-dark.png'
import firstSolve from '../assets/solvely/plugins/flows/first-solve.png'
import solutionBar from '../assets/solvely/plugins/flows/solution-bar.png'
import solverToastLight from '../assets/solvely/plugins/flows/solver-toast-light.png'
import solverToastDark from '../assets/solvely/plugins/flows/solver-toast-dark.png'

function OwnershipStatement() {
  const t = useCopy('solvely')

  return (
    <section className="plugins-ownership">
      <div className="plugins-ownership-inner">
        <h2 className="plugins-ownership-title">{t.pluginsOwnershipTitle}</h2>
        <p className="plugins-ownership-statement">{t.pluginsOwnershipStatement}</p>
      </div>
    </section>
  )
}

function FlowSection({ number, title, subtitle, images, decision, rationale, comparison }) {
  return (
    <div className="plugins-flow">
      <div className="plugins-flow-header">
        <span className="plugins-flow-number">{number}</span>
        <div className="plugins-flow-titles">
          <h3 className="plugins-flow-title">{title}</h3>
          <p className="plugins-flow-subtitle">{subtitle}</p>
        </div>
      </div>

      <div className={`plugins-flow-screens ${comparison ? 'plugins-flow-screens--comparison' : ''}`}>
        {images.map((img, i) => (
          <div key={i} className="plugins-flow-screen">
            <img src={img.src} alt={img.alt} loading="lazy" />
            {img.label && <span className="plugins-flow-screen-label">{img.label}</span>}
          </div>
        ))}
      </div>

      <div className="plugins-flow-decision">
        <h4 className="plugins-flow-decision-title">
          <span className="plugins-flow-decision-icon">💡</span>
          {decision}
        </h4>
        <p className="plugins-flow-decision-rationale">{rationale}</p>
      </div>
    </div>
  )
}

export default function PluginsShowcase() {
  const t = useCopy('solvely')

  const flows = [
    {
      number: '01',
      title: t.pluginsFlow1Title,
      subtitle: t.pluginsFlow1Subtitle,
      images: [
        { src: onboardingLight, alt: 'Onboarding - Light Mode', label: 'Light Mode' },
        { src: onboardingDark, alt: 'Onboarding - Dark Mode', label: 'Dark Mode' },
      ],
      decision: t.pluginsFlow1Decision,
      rationale: t.pluginsFlow1Rationale,
      comparison: true,
    },
    {
      number: '02',
      title: t.pluginsFlow2Title,
      subtitle: t.pluginsFlow2Subtitle,
      images: [
        { src: firstSolve, alt: 'First solve experience' },
        { src: solutionBar, alt: 'Solution display interface' },
      ],
      decision: t.pluginsFlow2Decision,
      rationale: t.pluginsFlow2Rationale,
      comparison: false,
    },
    {
      number: '03',
      title: t.pluginsFlow3Title,
      subtitle: t.pluginsFlow3Subtitle,
      images: [
        { src: solverToastLight, alt: 'Solver toast - Light Mode', label: 'Light Mode' },
        { src: solverToastDark, alt: 'Solver toast - Dark Mode', label: 'Dark Mode' },
      ],
      decision: t.pluginsFlow3Decision,
      rationale: t.pluginsFlow3Rationale,
      comparison: true,
    },
  ]

  return (
    <div className="plugins-showcase">
      <OwnershipStatement />

      <section className="plugins-flows">
        <h2 className="plugins-flows-title">{t.pluginsFlowsTitle}</h2>
        {flows.map((flow) => (
          <FlowSection key={flow.number} {...flow} />
        ))}
      </section>
    </div>
  )
}
