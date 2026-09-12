import { Fragment, useEffect, useRef } from 'react'
import './SolvelyPluginsPage.css'
import { useMediaVisibility } from './useMediaVisibility.js'
import { useCopy } from '../i18n/LanguageContext.jsx'
import Rich from '../i18n/Rich.jsx'

// Import hero image
import heroImage from '../assets/solvely-plugins/feature-hero.png'
import targetIcon from '../assets/solvely-plugins/target-icon.svg'
import firstUseLaptopShell from '../assets/solvely-plugins/first-use-laptop-shell.png'
import stableEntry from '../assets/solvely-plugins/stable-structure-entry.png'
import stableAnswer from '../assets/solvely-plugins/stable-structure-answer.png'
import stableSummary from '../assets/solvely-plugins/stable-structure-summary.png'
import stableFlowArrow from '../assets/solvely-plugins/stable-structure-flow.svg'
import stableShortArrow from '../assets/solvely-plugins/stable-structure-short-arrow.svg'
import moreScenariosYoutube from '../assets/solvely-plugins/more-scenarios-youtube.png'
import moreScenariosGmail from '../assets/solvely-plugins/more-scenarios-gmail.png'
import moreScenariosCanvas from '../assets/solvely-plugins/more-scenarios-canvas.png'
import moreScenariosPdf from '../assets/solvely-plugins/more-scenarios-pdf.png'
import youtubeSummaryMain from '../assets/solvely-plugins/youtube-summary-main.png'
import youtubeSummaryPrompt from '../assets/solvely-plugins/youtube-summary-prompt.png'
import youtubeSummaryGenerated from '../assets/solvely-plugins/youtube-summary-generated.png'
import youtubeSummaryFlow from '../assets/solvely-plugins/youtube-summary-flow.svg'
import youtubeSummaryDownArrow from '../assets/solvely-plugins/youtube-summary-down-arrow.svg'
import pdfContextReader from '../assets/solvely-plugins/pdf-context-reader.png'
import pdfContextSidebar from '../assets/solvely-plugins/pdf-context-sidebar.png'
import pdfContextFlow from '../assets/solvely-plugins/pdf-context-flow.svg'
import gmailReplyMain from '../assets/solvely-plugins/gmail-reply-main.png'
import dialogDetailCrop from '../assets/solvely-plugins/dialog-detail-crop.png'
import dialogDetailPdf from '../assets/solvely-plugins/dialog-detail-pdf.png'
import dialogDetailSummarize from '../assets/solvely-plugins/dialog-detail-summarize.png'
import dialogDetailQuiz from '../assets/solvely-plugins/dialog-detail-quiz.png'

// Import videos
import coreProcess from '../assets/solvely-plugins/Core function process.mp4'
import canvasSolver from '../assets/solvely-plugins/Canvas solver.mp4'
import screenshot from '../assets/solvely-plugins/截屏解题.mp4'
import wordSelect from '../assets/solvely-plugins/滑词.mp4'
import firstUse from '../assets/solvely-plugins/用户首次进入核心功能使用.mp4'
import seamlessLogin from '../assets/solvely-plugins/登录后无缝继续流程.mp4'
import taskFirst from '../assets/solvely-plugins/嗅探一键解题.mp4'
import commercial from '../assets/solvely-plugins/Commercial.mp4'
// Animated WebP re-encoded from the 13MB source GIF: same 84 frames at 40ms and
// the same alpha, at the 400px the 133px mascot needs on a 3x display.
import solvelyIp from '../assets/solvely-plugins/solvely-ip.webp'

// Chrome Web Store listing. The author's link carried `hl=en-US` and a
// `utm_source=ext_sidebar` tag copied from the extension's own sidebar; both are
// dropped so the store follows the visitor's locale and traffic is not
// misattributed to the extension.
const PLUGIN_DOWNLOAD_URL =
  'https://chromewebstore.google.com/detail/solvelyai-ai-homework-tut/aedglnfjjccpifohekdeoogffomjcikm'

export default function SolvelyPluginsPage() {
  const t = useCopy('solvelyPlugins')
  const alts = t.alts || {}
  const firstUseVideoRef = useRef(null)
  const canvasEntryVideoRef = useRef(null)
  const taskFirstVideoRef = useRef(null)
  const screenshotSolveVideoRef = useRef(null)
  const coreProcessVideoRef = useRef(null)
  const commercialVideoRef = useRef(null)
  const wordSelectVideoRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useMediaVisibility(firstUseVideoRef, { autoplay: true })
  useMediaVisibility(canvasEntryVideoRef, { autoplay: true })
  useMediaVisibility(taskFirstVideoRef, { autoplay: true })
  useMediaVisibility(screenshotSolveVideoRef, { autoplay: true })
  useMediaVisibility(coreProcessVideoRef, { autoplay: true })
  useMediaVisibility(commercialVideoRef, { autoplay: true })
  useMediaVisibility(wordSelectVideoRef, { autoplay: true })

  return (
    <div className="sp-page">
      <a href="/" className="case-back" data-cursor="link" data-cursor-label="Home">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        <span>{t.back}</span>
      </a>
      {/* Hero Section - Only the laptop image */}
      <section className="sp-hero">
        <div className="sp-hero-content">
          <img src={heroImage} alt={alts.hero} className="sp-hero-img" />
        </div>
      </section>

      {/* Main Content */}
      <div className="sp-main">

        {/* Project Meta - Outside hero, on white background */}
        <div className="sp-meta">
          <div className="sp-meta-group">
            <div className="sp-meta-label">{t.metaRoleLabel}</div>
            <div className="sp-meta-value"><strong>{t.metaRoleValue}</strong></div>
          </div>
          <div className="sp-meta-group">
            <div className="sp-meta-label">{t.metaPlatformLabel}</div>
            <div className="sp-meta-value"><strong>{t.metaPlatformValue}</strong></div>
          </div>
        </div>

        {/* Title and Introduction */}
        <section className="sp-intro">
          <h1 className="sp-title">{t.title}</h1>

          <div className="sp-intro-text">
            {(t.intro || []).map((p, i) => <p key={i}>{p}</p>)}
          </div>

          {/* Results Card */}
          <div className="sp-results">
            <div className="sp-results-header">
              <span className="sp-results-title">{t.resultsTitle}</span>
              <img src={targetIcon} alt={alts.target} className="sp-results-icon" />
            </div>
            <ul className="sp-results-list">
              {(t.results || []).map((r, i) => <li key={i}><Rich text={r} /></li>)}
            </ul>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="sp-section">
          <h2 className="sp-section-title">{t.problemTitle}</h2>
          <div className="sp-section-text">
            <p>{t.problemBody}</p>
          </div>
        </section>

        {/* Solution */}
        <section className="sp-section">
          <h2 className="sp-section-title">{t.solutionTitle}</h2>
          <div className="sp-section-text">
            {(t.solution || []).map((p, i) => <p key={i}><Rich text={p} /></p>)}
          </div>
        </section>

        {/* Core onboarding — Figma's second-screen module */}
        <section className="sp-onboarding">
          <div className="sp-onboarding-stage">
            <img src={firstUseLaptopShell} alt="" className="sp-onboarding-shell" />
            <div className="sp-onboarding-video-window">
              <video
                ref={firstUseVideoRef}
                src={firstUse}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={alts.videoOnboarding}
              />
            </div>
          </div>
          <div className="sp-onboarding-copy">
            <h2 className="sp-onboarding-title">{t.onboardingTitle}</h2>
            <p>{t.onboardingBody}</p>
          </div>
        </section>

        {/* Canvas entry — Figma feature showcase */}
        <section className="sp-canvas-entry">
          <div className="sp-canvas-entry-stage">
            <img src={firstUseLaptopShell} alt="" className="sp-canvas-entry-shell" />
            <div className="sp-canvas-entry-video-window">
              <video
                ref={canvasEntryVideoRef}
                src={seamlessLogin}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={alts.videoCanvasEntry}
              />
            </div>
          </div>
          <div className="sp-canvas-entry-copy">
            <h2 className="sp-canvas-entry-title">{t.canvasEntryTitle}</h2>
            <p>{t.canvasEntryBody}</p>
          </div>
        </section>

        {/* Task-first Canvas quiz handling — Figma feature showcase */}
        <section className="sp-task-first">
          <div className="sp-task-first-stage">
            <img src={firstUseLaptopShell} alt="" className="sp-task-first-shell" />
            <div className="sp-task-first-video-window">
              <video
                ref={taskFirstVideoRef}
                src={taskFirst}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={alts.videoTaskFirst}
              />
            </div>
          </div>
          <div className="sp-task-first-copy">
            <h2 className="sp-task-first-title">{t.taskFirstTitle}</h2>
            <p>{t.taskFirstBody}</p>
          </div>
        </section>

        {/* Screenshot solve — Figma feature showcase */}
        <section className="sp-screenshot-solve">
          <div className="sp-screenshot-solve-stage">
            <img src={firstUseLaptopShell} alt="" className="sp-screenshot-solve-shell" />
            <div className="sp-screenshot-solve-video-window">
              <video
                ref={screenshotSolveVideoRef}
                src={screenshot}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={alts.videoScreenshotSolve}
              />
            </div>
          </div>
          <div className="sp-screenshot-solve-copy">
            <h2 className="sp-screenshot-solve-title">{t.screenshotSolveTitle}</h2>
            <p>{t.screenshotSolveBody}</p>
          </div>
        </section>

        {/* Answer understanding — Figma feature showcase */}
        <section className="sp-core-process">
          <div className="sp-core-process-stage">
            <img src={firstUseLaptopShell} alt="" className="sp-core-process-shell" />
            <div className="sp-core-process-video-window">
              <video
                ref={coreProcessVideoRef}
                src={coreProcess}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={alts.videoCoreProcess}
              />
            </div>
          </div>
          <div className="sp-core-process-copy">
            <h2 className="sp-core-process-title">{t.coreProcessTitle}</h2>
            <p>{t.coreProcessBody}</p>
            {(t.coreProcessSteps || []).map((st, i) => (
              <Fragment key={i}>
                <h3>{st.title}</h3>
                <p>{st.body}</p>
              </Fragment>
            ))}
          </div>
        </section>

        {/* Stable information structure — Figma feature showcase */}
        <section className="sp-stable-structure">
          <div className="sp-stable-structure-stage">
            <img src={stableEntry} alt={alts.stableEntry} className="sp-stable-structure-panel sp-stable-structure-entry" />
            <img src={stableAnswer} alt={alts.stableAnswer} className="sp-stable-structure-panel sp-stable-structure-answer" />
            <img src={stableSummary} alt={alts.stableSummary} className="sp-stable-structure-panel sp-stable-structure-summary" />
            <img src={stableFlowArrow} alt="" className="sp-stable-structure-flow-arrow" />
            <img src={stableShortArrow} alt="" className="sp-stable-structure-short-arrow" />
          </div>
          <div className="sp-stable-structure-copy">
            <h2 className="sp-stable-structure-title">{t.stableStructureTitle}</h2>
            <p>{t.stableStructureBody}</p>
          </div>
        </section>

        {/* Commercial timing — Figma feature showcase */}
        <section className="sp-commercial-timing">
          <div className="sp-commercial-timing-stage">
            <img src={firstUseLaptopShell} alt="" className="sp-commercial-timing-shell" />
            <div className="sp-commercial-timing-video-window">
              <video
                ref={commercialVideoRef}
                src={commercial}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={alts.videoCommercial}
                className="sp-commercial-timing-video"
              />
            </div>
          </div>
          <div className="sp-commercial-timing-copy">
            <h2 className="sp-commercial-timing-title">{t.commercialTimingTitle}</h2>
            <p>{t.commercialTimingBody}</p>
          </div>
        </section>

        {/* More scenarios — Figma feature showcase */}
        <section className="sp-more-scenarios">
          <div className="sp-more-scenarios-stage">
            <img src={moreScenariosYoutube} alt={alts.moreYoutube} className="sp-more-scenarios-panel sp-more-scenarios-youtube" />
            <img src={moreScenariosGmail} alt={alts.moreGmail} className="sp-more-scenarios-panel sp-more-scenarios-gmail" />
            <div className="sp-more-scenarios-canvas">
              <img src={moreScenariosCanvas} alt={alts.moreCanvas} />
            </div>
            <img src={moreScenariosPdf} alt={alts.morePdf} className="sp-more-scenarios-panel sp-more-scenarios-pdf" />
          </div>
          <div className="sp-more-scenarios-copy">
            <h2 className="sp-more-scenarios-title">{t.moreScenariosTitle}</h2>
            <p>{t.moreScenariosBody}</p>
          </div>
        </section>

        {/* YouTube summary — Figma feature showcase */}
        <section className="sp-youtube-summary">
          <div className="sp-youtube-summary-stage">
            <div className="sp-youtube-summary-main">
              <img src={youtubeSummaryMain} alt={alts.youtubeMain} />
            </div>
            <img src={youtubeSummaryPrompt} alt={alts.youtubePrompt} className="sp-youtube-summary-prompt" />
            <img src={youtubeSummaryGenerated} alt={alts.youtubeGenerated} className="sp-youtube-summary-generated" />
            <img src={youtubeSummaryFlow} alt="" className="sp-youtube-summary-flow" />
            <img src={youtubeSummaryDownArrow} alt="" className="sp-youtube-summary-down-arrow" />
          </div>
          <div className="sp-youtube-summary-copy">
            <h2 className="sp-youtube-summary-title">{t.youtubeSummaryTitle}</h2>
            <p>{t.youtubeSummaryBody}</p>
          </div>
        </section>

        {/* PDF context — Figma feature showcase */}
        <section className="sp-pdf-context">
          <div className="sp-pdf-context-stage">
            <div className="sp-pdf-context-reader">
              <img src={pdfContextReader} alt={alts.pdfReader} />
            </div>
            <img src={pdfContextFlow} alt="" className="sp-pdf-context-flow" />
            <div className="sp-pdf-context-sidebar">
              <img src={pdfContextSidebar} alt={alts.pdfSidebar} />
            </div>
          </div>
          <div className="sp-pdf-context-copy">
            <h2 className="sp-pdf-context-title">{t.pdfContextTitle}</h2>
            <p>{t.pdfContextBody}</p>
          </div>
        </section>

        {/* Selected-text assistance — Figma feature showcase */}
        <section className="sp-selected-text">
          <div className="sp-selected-text-stage">
            <div className="sp-selected-text-video-window">
              <video
                ref={wordSelectVideoRef}
                src={wordSelect}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={alts.videoSelectedText}
                className="sp-selected-text-video"
              />
            </div>
          </div>
          <div className="sp-selected-text-copy">
            <h2 className="sp-selected-text-title">{t.selectedTextTitle}</h2>
            <p>{t.selectedTextBody}</p>
          </div>
        </section>

        {/* Gmail one-tap reply — Figma feature showcase */}
        <section className="sp-gmail-reply">
          <div className="sp-gmail-reply-stage">
            <img
              src={gmailReplyMain}
              alt={alts.gmailMain}
              className="sp-gmail-reply-main"
            />
            {/* Connector between the intent card and the reply draft — Figma Vector 2719 */}
            <svg
              className="sp-gmail-reply-flow"
              viewBox="0 0 66 5.7735"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M66 2.88675L61 0V5.7735L66 2.88675ZM0 2.88677C0 4.35953 1.19391 5.55343 2.66667 5.55343C4.13943 5.55343 5.33333 4.35953 5.33333 2.88677C5.33333 1.41401 4.13943 0.220099 2.66667 0.220099C1.19391 0.220099 0 1.41401 0 2.88677ZM2.66667 2.88677L2.66667 3.38677L61.5 3.38675V2.88675V2.38675L2.66667 2.38677L2.66667 2.88677Z"
                fill="#FF9292"
              />
            </svg>
          </div>
          <div className="sp-gmail-reply-copy">
            <h2 className="sp-gmail-reply-title">{t.gmailReplyTitle}</h2>
            <p>{t.gmailReplyBody}</p>
          </div>
        </section>

        {/* AI dialog-flow refinements — Figma feature showcase */}
        <section className="sp-dialog-detail">
          <div className="sp-dialog-detail-stage">
            <img src={dialogDetailCrop} alt={alts.dialogCrop} className="sp-dialog-detail-crop" />
            <img src={dialogDetailPdf} alt={alts.dialogPdf} className="sp-dialog-detail-pdf" />
            <img src={dialogDetailSummarize} alt={alts.dialogSummarize} className="sp-dialog-detail-summarize" />
            <img src={dialogDetailQuiz} alt={alts.dialogQuiz} className="sp-dialog-detail-quiz" />
          </div>
          <div className="sp-dialog-detail-copy">
            <h2 className="sp-dialog-detail-title">{t.dialogDetailTitle}</h2>
            <p>{t.dialogDetailBody}</p>
          </div>
        </section>

        {/* Project review — Figma closing section */}
        <section className="sp-section sp-review">
          <h2 className="sp-section-title">{t.reviewTitle}</h2>
          <div className="sp-section-text">
            {(t.review || []).map((p, i) => <p key={i}><Rich text={p} /></p>)}
          </div>
        </section>

        {/* Download CTA — Figma closing section */}
        <section className="sp-cta">
          <img src={solvelyIp} alt={alts.mascot} className="sp-cta-logo" />
          <p className="sp-cta-text">
            {(t.ctaBody || []).map((line, i) => (
              <Fragment key={i}>{i > 0 && <br />}{line}</Fragment>
            ))}
          </p>
          <a
            className="sp-cta-btn"
            href={PLUGIN_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
          >
            {t.ctaButton}
          </a>
        </section>

      </div>
    </div>
  )
}
