import { useEffect, useRef } from 'react'
import Hls from 'hls.js'
import { useMotionValue } from 'framer-motion'
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react'
import ScrollReveal from './ScrollReveal'
import AsciProjects from './AsciProjects'
import { ZoomParallax } from './ZoomParallax'
import imacScene from '../assets/asci/imac.png'
import asciLogo from '../assets/asci/asci-logo.svg'
import './AsciPage.css'

// iMac 屏幕内容区在 imac.png 中的位置(占整图比例,探测所得)
const SCR = { left: 0.1540, top: 0.1492, width: 0.6927, height: 0.5331 }
const STORY_VIDEO_SRC =
  'https://stream.mux.com/01yW6GoUz01OTXk5w1Rt1MHkJWlCGIwj46SUONJZ4DJUE.m3u8'
const STORY_TEXT =
  'Research today is often fragmented across disconnected tools, inconsistent workflows, and difficult-to-verify processes. Researchers spend valuable time managing information instead of advancing ideas, while evidence, analysis, and conclusions become increasingly separated from one another. ASCI brings every stage of the research process into a single connected environment, making knowledge easier to discover, methods easier to standardize, and results easier to reproduce.'

const PARALLAX_MEDIA = [
  { src: '/asci/parallax-1.mp4', alt: 'ASCI parallax clip 1' }, // center — video
  { src: '/asci/parallax-2.png', alt: 'ASCI parallax image 2' },
  { src: '/asci/parallax-3.png', alt: 'ASCI parallax image 3' },
  { src: '/asci/parallax-4.png', alt: 'ASCI parallax image 4' },
  { src: '/asci/parallax-5.png', alt: 'ASCI parallax image 5' },
  { src: '/asci/parallax-6.png', alt: 'ASCI parallax image 6' },
  { src: '/asci/parallax-7.png', alt: 'ASCI parallax image 7' },
]

export default function AsciPage() {
  const heroRef = useRef(null)
  const deviceRef = useRef(null)
  const storyRef = useRef(null)
  const curtainRef = useRef(null)
  const videoRef = useRef(null)
  // Brightening progress (0 → 1) for the gradient-scroll text, driven by the
  // section scroll once the curtain has reached fullscreen.
  const brightenMV = useMotionValue(0)

  // Story background is a Mux HLS source: hls.js (Chrome/desktop) with native
  // HLS fallback (iOS Safari).
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    let hls
    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true })
      hls.loadSource(STORY_VIDEO_SRC)
      hls.attachMedia(video)
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = STORY_VIDEO_SRC
    }
    return () => { if (hls) hls.destroy() }
  }, [])

  // Camera pull-back: start inside the display, then reveal the complete iMac.
  // The interface and device are one scene, so there is no visual hand-off.
  useEffect(() => {
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
    let camera = null

    const measure = () => {
      const hero = heroRef.current
      const device = deviceRef.current
      if (!hero || !device) return

      const vpW = window.innerWidth
      const vpH = window.innerHeight
      const ratio = 1448 / 1086
      const stageW = Math.max(vpW, vpH * ratio)
      const stageH = stageW / ratio
      const screenL = SCR.left * stageW
      const screenT = SCR.top * stageH
      const screenW = SCR.width * stageW
      const screenH = SCR.height * stageH
      const startScale = Math.max(vpW / screenW, vpH / screenH)

      device.style.width = `${stageW}px`
      device.style.height = `${stageH}px`
      camera = {
        startScale,
        startX: (vpW - screenW * startScale) / 2 - screenL * startScale,
        startY: (vpH - screenH * startScale) / 2 - screenT * startScale,
        endX: (vpW - stageW) / 2,
        endY: (vpH - stageH) / 2,
      }
      update()
    }

    const update = () => {
      const hero = heroRef.current
      const device = deviceRef.current
      if (!hero || !device || !camera) return
      const total = hero.offsetHeight - window.innerHeight
      const raw = total > 0 ? clamp(-hero.getBoundingClientRect().top / total, 0, 1) : 1
      const p = raw * raw * (3 - 2 * raw)
      const scale = camera.startScale + (1 - camera.startScale) * p
      const x = camera.startX + (camera.endX - camera.startX) * p
      const y = camera.startY + (camera.endY - camera.startY) * p
      device.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) {
      const hero = heroRef.current
      if (hero) hero.classList.add('is-reduced-motion')
    }
    measure()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', measure)
    }
  }, [])

  // Scroll-linked chapter transition. Every value is derived from the current
  // scroll position, so reversing the wheel reverses the full narrative.
  useEffect(() => {
    const story = storyRef.current
    const curtain = curtainRef.current
    const video = videoRef.current
    if (!story || !curtain) return

    const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value))
    const smoothstep = (value) => value * value * (3 - 2 * value)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Scroll budget split into three phases (fractions of the section range):
    //   0      → CURTAIN_END   : video curtain slides up to fullscreen
    //   BRIGHT_START → BRIGHT_END : text brightens letter-by-letter
    //   BRIGHT_END → 1         : fully lit, page releases to keep scrolling
    const CURTAIN_END = 0.3
    const BRIGHT_START = 0.32
    const BRIGHT_END = 0.9

    if (reducedMotion) {
      curtain.style.transform = 'translate3d(0, 0, 0)'
      brightenMV.set(1)
      if (video) video.play?.().catch(() => {})
      return
    }

    let raf = 0
    let playing = false

    const render = () => {
      raf = 0
      const total = story.offsetHeight - window.innerHeight
      const progress = total > 0
        ? clamp(-story.getBoundingClientRect().top / total)
        : 1

      // Phase 1 — curtain reveals the video up to fullscreen.
      const cover = smoothstep(clamp(progress / CURTAIN_END))
      curtain.style.transform = `translate3d(0, ${(1 - cover) * 100}%, 0)`

      // Phase 2 — once fullscreen, scrolling brightens the text.
      const bright = clamp((progress - BRIGHT_START) / (BRIGHT_END - BRIGHT_START))
      brightenMV.set(bright)

      // Video plays only after it has moved to fullscreen; reversing back
      // above the threshold pauses it again.
      if (video) {
        const shouldPlay = cover >= 0.999
        if (shouldPlay && !playing) {
          playing = true
          video.play?.().catch(() => {})
        } else if (!shouldPlay && playing) {
          playing = false
          video.pause?.()
        }
      }
    }

    const requestRender = () => {
      if (!raf) raf = window.requestAnimationFrame(render)
    }

    window.addEventListener('scroll', requestRender, { passive: true })
    window.addEventListener('resize', requestRender)
    render()
    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('scroll', requestRender)
      window.removeEventListener('resize', requestRender)
    }
  }, [brightenMV])

  return (
    <main className="asci">
      <a href="/" className="case-back asci-back" data-cursor="link" data-cursor-label="Home">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        <span>Back</span>
      </a>

      {/* One continuous scene: the camera starts inside the display and pulls back. */}
      <section className="asci-hero" ref={heroRef}>
        <div className="asci-hero-sticky">
          <div className="asci-device" ref={deviceRef}>
          <img className="asci-imac" src={imacScene} alt="ASCI 在 iMac 上的展示" loading="eager" decoding="async" fetchpriority="high" />
            <div className="asci-device-screen">
              <div className="asci-hero-bg" aria-hidden="true">
                <Shader style={{ width: '100%', height: '100%' }}>
                  <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
                  <ChromaFlow
                    baseColor="#ffffff"
                    downColor="#9ca3af"
                    leftColor="#9ca3af"
                    rightColor="#9ca3af"
                    upColor="#9ca3af"
                    momentum={13}
                    radius={3.5}
                  />
                  <FlutedGlass
                    aberration={0.61}
                    angle={31}
                    frequency={8}
                    highlight={0.12}
                    highlightSoftness={0}
                    lightAngle={-90}
                    refraction={4}
                    shape="rounded"
                    softness={1}
                    speed={0.15}
                  />
                  <FilmGrain strength={0.05} />
                </Shader>
              </div>
              <div className="asci-hero-stage">
                <nav className="asci-product-nav" aria-label="ASCI product navigation">
                  <img className="asci-product-logo" src={asciLogo} alt="ASCI" />
                  <div className="asci-product-links">
                    <span>Core Features</span>
                    <span>Data Ownership</span>
                    <span>Agent Fleet</span>
                    <span>Pain Points</span>
                    <span>FAQ</span>
                  </div>
                  <button className="asci-product-download" type="button">
                    <span>Download</span>
                  </button>
                </nav>
                <div className="asci-hero-inner">
                  <div className="asci-hero-brand" aria-label="ASCI">
                    <span>ASCI · Agent Research Workspace</span>
                  </div>
                  <h1 className="asci-hero-title">
                    Multi-agent collaboration, taking you from literature search to a finished review.
                  </h1>
                  <button className="asci-hero-download" type="button">
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="asci-story" ref={storyRef} aria-label="Research challenges">
        <div className="asci-story-sticky">
          <div className="asci-story-curtain" ref={curtainRef}>
            <video
              className="asci-story-video"
              ref={videoRef}
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
            <div className="asci-story-scrim" aria-hidden="true" />
            <div className="asci-story-copy">
              <ScrollReveal
                text={STORY_TEXT}
                progress={brightenMV}
                baseOpacity={0.1}
                blurStrength={8}
                baseRotation={4}
                enableBlur
              />
            </div>
          </div>
        </div>
      </section>

      {/* Third screen: ported from axion-studio's "核心特性" section. */}
      <AsciProjects />

      {/* Fourth screen: scroll-driven zoom parallax (center video + image tiles). */}
      <ZoomParallax media={PARALLAX_MEDIA} />

    </main>
  )
}
