import heroImage from '../assets/study-plugin/hero.png'
import './StudyPluginPage.css'

export default function StudyPluginPage() {
  return (
    <main className="study-plugin">
      <a href="/" className="study-plugin-back" data-cursor="link" data-cursor-label="Home">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        <span>Back</span>
      </a>

      <section className="study-plugin-hero" aria-label="Study Plugin case study">
        <img
          className="study-plugin-hero-image"
          src={heroImage}
          alt="Solvely browser study assistant shown on a laptop"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
      </section>
    </main>
  )
}
