import './FreeleapsPageDisplay.css'
import mockup from '../assets/freeleaps/pagedisplay/mockup.png'
import cta3d from '../assets/freeleaps/pagedisplay/cta-3d.png'
import avatarAlice from '../assets/freeleaps/pagedisplay/avatar-alice.png'
import avatarJane from '../assets/freeleaps/pagedisplay/avatar-jane.png'
import avatarMark from '../assets/freeleaps/pagedisplay/avatar-mark.png'
import rolePatent from '../assets/freeleaps/pagedisplay/role-patent.png'
import roleRecruiter from '../assets/freeleaps/pagedisplay/role-recruiter.png'

const Arrow = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
)

function Testimonial({ variant, avatar, name, role, quote, metricLabel, metricValue }) {
  return (
    <div className={`pd-card pd-card--${variant}`}>
      <div className="pd-card-head">
        <img className="pd-avatar" src={avatar} alt={name} />
        <div className="pd-id">
          <span className="pd-name">{name}</span>
          <span className="pd-role">{role}</span>
        </div>
      </div>
      <p className="pd-quote">{quote}</p>
      <div className="pd-divider" />
      <div className="pd-metric">
        <span className="pd-metric-label">{metricLabel}</span>
        <span className="pd-metric-value">{metricValue}<span className="pd-metric-arrow">{Arrow}</span></span>
      </div>
    </div>
  )
}

export default function PageDisplay() {
  return (
    <div className="pd-inner">
      <span className="pd-scroll" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
      </span>

      <div className="fl-font-head pd-head">
        <h2 className="fl-font-title">Page<br />Display</h2>
        <span className="fl-font-tag">Simple / Consistent</span>
      </div>

      <div className="pd-stage">
        <img className="pd-mockup" src={mockup} alt="Freeleaps public page" />
        <div className="pd-roles" aria-hidden="true">
          <img src={rolePatent} alt="" />
          <img src={roleRecruiter} alt="" />
        </div>
      </div>

      <h3 className="pd-stories">Thousands of <span>Success</span> Stories</h3>

      <div className="pd-wall">
        <Testimonial variant="white" avatar={avatarAlice} name="Alice" role="Frontend Developer"
          quote="“As a frontend developer, I doubled my income by completing UI designs on the platform and also received long-term collaboration offers.”"
          metricLabel="monthly income" metricValue="$2,700" />
        <Testimonial variant="blue" avatar={avatarJane} name="Jane Cooper" role="Illustrator"
          quote="“After 40+ projects here, I doubled my income! The more projects I completed, the better my skills and client feedback, leading to significant income growth.”"
          metricLabel="monthly income" metricValue="$2,700" />
        <Testimonial variant="blue" avatar={avatarMark} name="Mark" role="Social Media Manager"
          quote="“As a social media manager, I grew a startup's followers by 300% and built my own team, gaining valuable experience in both growth and team management.”"
          metricLabel="follower growth" metricValue="134%" />
        <Testimonial variant="white" avatar={avatarMark} name="Mark" role="Social Media Manager"
          quote="“As a social media manager, I grew a startup's followers by 300% and built my own team, gaining valuable experience in both growth and team management.”"
          metricLabel="follower growth" metricValue="300%" />
      </div>

      <div className="pd-cta">
        <div className="pd-cta-text">
          <p className="pd-cta-title">Sign Up Today<br />Get 3 Free Proposal Credits.</p>
          <button className="pd-cta-btn">Register Now</button>
        </div>
        <img className="pd-cta-img" src={cta3d} alt="" />
      </div>
    </div>
  )
}
