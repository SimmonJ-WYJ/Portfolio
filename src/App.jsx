import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useMediaVisibility } from './components/useMediaVisibility.js'
import heroLoop from './assets/hero/hero-loop.mp4'
import heroPoster from './assets/hero/hero-poster.webp'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Cursor from './components/Cursor.jsx'
import Loader from './components/Loader.jsx'
import RouteFallback from './components/RouteFallback.jsx'
import LangToggle from './components/LangToggle.jsx'
import { useCopy } from './i18n/LanguageContext.jsx'
import Rich from './i18n/Rich.jsx'
import { TextHoverEffect } from './components/TextHoverEffect.jsx'
import { useLenis } from './components/useLenis.js'

const FreeleapsPage = lazy(() => import('./components/FreeleapsPage.jsx'))
const SolvelyPage = lazy(() => import('./components/SolvelyPage.jsx'))
const SolvelyPluginsPage = lazy(() => import('./components/SolvelyPluginsPage.jsx'))
const WawawriterPage = lazy(() => import('./components/WawawriterPage.jsx'))
const WindpopPage = lazy(() => import('./components/WindpopPage.jsx'))
const AsciPage = lazy(() => import('./components/AsciPage.jsx'))
const OvermindPage = lazy(() => import('./components/OvermindPage.jsx'))
const MetrologyPage = lazy(() => import('./components/MetrologyPage.jsx'))
const HomeContent = lazy(() => import('./components/HomeContent.jsx'))

const detailRoutes = {
  '/freeleaps': FreeleapsPage,
  '/solvely': SolvelyPage,
  '/solvely-plugins': SolvelyPluginsPage,
  '/wawawriter': WawawriterPage,
  '/windpop': WindpopPage,
  '/asci': AsciPage,
  '/overmind': OvermindPage,
  '/metrology': MetrologyPage,
}

// Project cover images (used as the showcase cards).
const coverModules = import.meta.glob('./assets/covers/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  import: 'default',
})
// Per-project metadata, keyed by the cover filename slug. Product names stay in
// their original form in both languages; a project without a product name
// carries a `titleZh` for the Chinese view. Descriptions come from src/i18n/copy.
const PROJECT_META = {
  ASCI: { title: 'ASCI', link: '/asci' },
  Freeleaps: { title: 'Freeleaps', link: '/freeleaps' },
  Solvely: { title: 'Solvely AI', link: '/solvely' },
  'solvely-plugins': { title: 'Solvely Plugin', link: '/solvely-plugins' },
  Wawawriter: { title: 'Wawa Writer', link: '/wawawriter' },
  Windpop: { title: 'Windpop', link: '/windpop' },
  overmind: { title: 'OVERMIND', link: '/overmind' },
  metrology: { title: 'Metrology Platform', titleZh: '安全生产计量管理平台', link: '/metrology' },
}
// Showcase order, left to right. A cover whose slug is not listed goes last.
const COVER_ORDER = ['solvely-plugins', 'Solvely', 'ASCI', 'Wawawriter', 'metrology', 'overmind', 'Freeleaps', 'Windpop']
const coverSlug = (k) => k.split('/').pop().replace(/\.[^.]+$/, '').replace(/[\d_]+$/, '')
const coverRank = (k) => { const i = COVER_ORDER.indexOf(coverSlug(k)); return i === -1 ? COVER_ORDER.length : i }
const coverItems = Object.keys(coverModules)
  .sort((a, b) => coverRank(a) - coverRank(b) || a.localeCompare(b))
  .map((k) => {
    const slug = coverSlug(k)
    const meta = PROJECT_META[slug] || {}
    return {
      src: coverModules[k],
      fit: 'cover',
      slug,
      title: meta.title || slug,
      titleZh: meta.titleZh,
      link: meta.link || '#work',
    }
  })

/* ---------- Scroll reveal (IntersectionObserver) ---------- */
function useReveal(route) {
  useEffect(() => {
    const reveal = (root = document) => {
      root.querySelectorAll?.('.reveal:not(.in)').forEach((element) => observer.observe(element))
    }

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal:not(.in)').forEach((element) => element.classList.add('in'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('in')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0 })

    reveal()
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (node.nodeType !== Node.ELEMENT_NODE) return
        if (node.matches?.('.reveal:not(.in)')) observer.observe(node)
        reveal(node)
      }))
    })
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutations.disconnect()
      observer.disconnect()
    }
  }, [route])
}

/* ---------- Magnetic wrapper ---------- */
function Magnetic({ children, strength = 0.35, className = '', ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - (r.left + r.width / 2)
      const y = e.clientY - (r.top + r.height / 2)
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }
    const onLeave = () => { el.style.transform = 'translate(0,0)' }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])
  return (
    <div ref={ref} className={className} style={{ transition: 'transform .35s cubic-bezier(0.62,0.05,0.01,0.99)' }} {...rest}>
      {children}
    </div>
  )
}

/* ---------- Nav ---------- */
// Two floating glass capsules: the mark + name on the left, section links and
// the language switch on the right. The nav is fixed over both the dark hero
// and the light sections below, so it tints itself by what is underneath:
// dark glass while the hero is under it, light glass once `.after-hero` has
// scrolled up past it.
function useNavTone() {
  const [tone, setTone] = useState('dark')
  useEffect(() => {
    let raf = 0
    const check = () => {
      raf = 0
      const after = document.querySelector('.after-hero')
      if (!after) return
      setTone(after.getBoundingClientRect().top < 44 ? 'light' : 'dark')
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    check()
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return tone
}

function Nav() {
  const c = useCopy('common')
  const tone = useNavTone()
  const links = [
    { href: '#work', label: c.nav?.work },
    { href: '#about', label: c.nav?.about },
    { href: '#contact', label: c.nav?.contact },
  ]
  return (
    <nav className="nav" data-tone={tone}>
      {/* Liquid glass for the capsules: a small displacement map refracts
          whatever scrolls beneath. Browsers without url() backdrop filters
          keep the frosted fallback declared in the CSS. */}
      <svg className="nav-glass-defs" aria-hidden="true" focusable="false">
        <filter id="nav-liquid" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.02 0.03" numOctaves="2" seed="3" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="1.5" result="soft" />
          <feDisplacementMap in="SourceGraphic" in2="soft" scale="14" xChannelSelector="R" yChannelSelector="G" result="warp" />
          <feGaussianBlur in="warp" stdDeviation="3" />
        </filter>
      </svg>
      <a href="#top" className="nav-capsule nav-brand" data-cursor="link" data-cursor-label={c.home} aria-label={c.home}>
        <span className="nav-mark"><img src="/logo.png" alt={c.logoAlt} /></span>
        <span className="nav-name">SimmonJ</span>
      </a>
      <div className="nav-capsule nav-actions">
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} data-cursor="link">{l.label}</a>
          ))}
        </div>
        <span className="nav-sep" aria-hidden="true" />
        <LangToggle variant="nav" />
      </div>
    </nav>
  )
}

/* ---------- Hero ---------- */
function Hero({ ready }) {
  const reduceMotion = useReducedMotion()
  const heroVideoRef = useRef(null)
  // Start 0.5s after the loader finishes from the poster's own frame (2s), play
  // once, and hold on the 7s frame.
  // Once held, any later play() — from a tab switch or the browser resuming
  // media — is caught and paused again. Before the start, the poster shows.
  useEffect(() => {
    const v = heroVideoRef.current
    if (!v || reduceMotion || !ready) return undefined
    const START_DELAY = 500
    const POSTER_AT = 2    // the poster is this frame; seek here so play continues from it
    const HOLD_AT = 7
    let held = false
    let started = false
    const seekToPoster = () => { if (!started && v.currentTime < POSTER_AT) v.currentTime = POSTER_AT }
    if (v.readyState >= 1) seekToPoster()
    else v.addEventListener('loadedmetadata', seekToPoster, { once: true })
    const onTime = () => {
      if (held || v.currentTime < HOLD_AT) return
      held = true
      v.pause()
      v.currentTime = HOLD_AT
    }
    const onPlay = () => { if (held || !started) v.pause() }
    v.addEventListener('timeupdate', onTime)
    v.addEventListener('play', onPlay)
    const timer = setTimeout(() => {
      started = true
      seekToPoster()
      v.play().catch(() => {})
    }, START_DELAY)
    return () => {
      clearTimeout(timer)
      v.removeEventListener('timeupdate', onTime)
      v.removeEventListener('play', onPlay)
      v.removeEventListener('loadedmetadata', seekToPoster)
    }
  }, [reduceMotion, ready])
  const t = useCopy('home')
  const rise = (delay) => ({
    initial: { opacity: 0, y: 28 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  })
  return (
    <section className="hero hero-card-wrap" id="top">
      {/* Inset rounded card, after the Superpower hero: an atmospheric loop
          fills the frame and the copy sits left-centre. */}
      <div className="hero-card">
        {/* Full-bleed loop behind the copy; a left scrim keeps the text legible
            when the particle burst sweeps across. Reduced-motion users get the poster. */}
        {reduceMotion ? (
          <img className="hero-media" src={heroPoster} alt="" aria-hidden="true" loading="eager" decoding="async" fetchpriority="high" />
        ) : (
          <video
            ref={heroVideoRef}
            className="hero-media"
            src={heroLoop}
            poster={heroPoster}
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        )}
        <div className="hero-scrim" aria-hidden="true" />

        <div className="hero-content">
          <motion.p className="hero-eyebrow" {...rise(0.15)}>
            {t.heroEyebrow}
          </motion.p>
          <motion.h1 className="hero-title" {...rise(0.25)}>{t.heroTitle}</motion.h1>
          <motion.div className="hero-lede" {...rise(0.35)}>
            {(t.heroLede || []).map((line, i) => (
              <p key={i}><Rich text={line} /></p>
            ))}
          </motion.div>
          <motion.div className="hero-ctas" {...rise(0.45)}>
            <a href="#work" className="hero-btn hero-btn--solid" data-cursor="link">{t.heroCta}</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Showreel modal ---------- */
function Reel({ open, onClose }) {
  const c = useCopy('common')
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!open || !v) return
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    v.addEventListener('play', onPlay)
    v.addEventListener('pause', onPause)
    // opening the modal is a user gesture, so this usually autoplays (with sound)
    v.play().catch(() => {})
    return () => { v.removeEventListener('play', onPlay); v.removeEventListener('pause', onPause) }
  }, [open])

  const togglePlay = (e) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          data-cursor="link" data-cursor-label={c.close}
          style={{ position: 'fixed', inset: 0, zIndex: 8000, background: 'rgba(10,9,7,0.92)', display: 'grid', placeItems: 'center', padding: 'var(--pad)' }}
        >
          <motion.div
            initial={{ scale: 0.92, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.62, 0.05, 0.01, 0.99] }}
            onClick={togglePlay}
            data-cursor="media"
            data-cursor-label={playing ? c.pause : c.play}
            style={{ position: 'relative', width: 'min(1100px, 100%)', aspectRatio: '16/9', borderRadius: 10, overflow: 'hidden',
              background: '#000', display: 'grid', placeItems: 'center' }}
          >
            <video
              ref={videoRef}
              src="/showreel.mp4"
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000', pointerEvents: 'none' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ---------- App ---------- */
export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [reel, setReel] = useState(false)
  const [route, setRoute] = useState(() => (typeof window !== 'undefined' ? window.location.pathname : '/'))

  useLenis(loaded || route !== '/', route)
  useReveal(route)

  // Route changes replace the page in-place. Reset after React commits the new
  // page so every project detail opens at its actual top, including popstate.
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0))
    return () => window.cancelAnimationFrame(frame)
  }, [route])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', (!loaded && route === '/') || reel)
  }, [loaded, route, reel])

  // lightweight client routing for internal "/..." links + browser back/forward
  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    let scrollFrame = 0

    const onClick = (e) => {
      const a = e.target.closest('a[href^="/"]')
      if (!a) return
      const href = a.getAttribute('href')
      if (a.target === '_blank' || href.startsWith('//')) return
      e.preventDefault()
      if (href !== window.location.pathname) {
        window.history.pushState({}, '', href)
        setRoute(href)
        window.scrollTo(0, 0)
      }
    }
    const onPop = () => {
      setRoute(window.location.pathname)
      window.scrollTo(0, 0)
      scrollFrame = window.requestAnimationFrame(() => window.scrollTo(0, 0))
    }
    document.addEventListener('click', onClick)
    window.addEventListener('popstate', onPop)
    return () => {
      window.cancelAnimationFrame(scrollFrame)
      window.history.scrollRestoration = previousScrollRestoration
      document.removeEventListener('click', onClick)
      window.removeEventListener('popstate', onPop)
    }
  }, [])

  const navigate = (path) => {
    window.history.pushState({}, '', path)
    setRoute(path)
    window.scrollTo(0, 0)
  }

  const DetailPage = detailRoutes[route]
  if (DetailPage) {
    return (
      <>
        <Cursor />
        <Suspense fallback={<RouteFallback />}>
          <DetailPage />
        </Suspense>
      </>
    )
  }

  return (
    <>
      <Cursor />
      {!loaded && <Loader onDone={() => setLoaded(true)} />}

      <Nav />
      <main>
        <Hero ready={loaded} />
        <Suspense fallback={<div className="home-content-fallback" aria-hidden="true" />}>
          <HomeContent coverItems={coverItems} />
        </Suspense>
      </main>

      <Reel open={reel} onClose={() => setReel(false)} />
    </>
  )
}
