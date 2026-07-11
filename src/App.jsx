import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Cursor from './components/Cursor.jsx'
import Loader from './components/Loader.jsx'
import Grainient from './components/Grainient.jsx'
import { FallingPattern } from './components/FallingPattern.jsx'
import CircularText from './components/CircularText.jsx'
import FlowingMenu from './components/FlowingMenu.jsx'
import RouteFallback from './components/RouteFallback.jsx'
import AnimatedTextCycle from './components/AnimatedTextCycle.jsx'
import logoNvidia from './assets/logos/nvidia-wordmark-light.svg'
import logoSupabase from './assets/logos/supabase_wordmark_light.svg'
import logoOpenai from './assets/logos/openai_wordmark_light.svg'
import logoTurso from './assets/logos/turso-wordmark-light.svg'
import logoVercel from './assets/logos/vercel_wordmark.svg'
import logoGithub from './assets/logos/github_wordmark_light.svg'
import logoClaude from './assets/logos/claude-ai-wordmark-icon_light.svg'
import logoClerk from './assets/logos/clerk-wordmark-light.svg'
import logoFigma from './assets/logos/figma.svg'
import logoGodaddy from './assets/logos/godaddy.svg'

// Brand logos for the footer carousel (self-hosted from svgl.app — placeholder set).
const LOGO_ITEMS = [
  { src: logoFigma, alt: 'Figma', name: 'Figma' },
  { src: logoGodaddy, alt: 'GoDaddy' },
  { src: logoNvidia, alt: 'Nvidia' },
  { src: logoSupabase, alt: 'Supabase' },
  { src: logoOpenai, alt: 'OpenAI' },
  { src: logoTurso, alt: 'Turso' },
  { src: logoVercel, alt: 'Vercel' },
  { src: logoGithub, alt: 'GitHub' },
  { src: logoClaude, alt: 'Claude' },
  { src: logoClerk, alt: 'Clerk' },
]
import { TextHoverEffect } from './components/TextHoverEffect.jsx'
import { useLenis } from './components/useLenis.js'

const FreeleapsPage = lazy(() => import('./components/FreeleapsPage.jsx'))
const SolvelyPage = lazy(() => import('./components/SolvelyPage.jsx'))
const WawawriterPage = lazy(() => import('./components/WawawriterPage.jsx'))
const WindpopPage = lazy(() => import('./components/WindpopPage.jsx'))
const AsciPage = lazy(() => import('./components/AsciPage.jsx'))
const HomeContent = lazy(() => import('./components/HomeContent.jsx'))

const detailRoutes = {
  '/freeleaps': FreeleapsPage,
  '/solvely': SolvelyPage,
  '/wawawriter': WawawriterPage,
  '/windpop': WindpopPage,
  '/asci': AsciPage,
}

// Project cover images (used as the showcase cards).
const coverModules = import.meta.glob('./assets/covers/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  import: 'default',
})
// Per-project metadata, keyed by the cover filename slug.
const PROJECT_META = {
  ASCI: { title: 'ASCI', description: 'AI-native platform for scientists — multi-agent workflows from literature to review.', link: '/asci' },
  Freeleaps: { title: 'Freeleaps', description: 'Global talent platform connecting developers with opportunities.', link: '/freeleaps' },
  Solvely: { title: 'Solvely AI', description: 'AI education tools, ranked top-10 on the US App Store.', link: '/solvely' },
  Wawawriter: { title: 'Wawa Writer', description: 'AI long-form writing studio built for creators.', link: '/wawawriter' },
  Windpop: { title: 'Windpop', description: 'AI creative-writing product — end-to-end UX & growth.', link: '/windpop' },
  数云: { title: '数云 Shuyun', description: 'Consumer-centric commercial intelligence platform.' },
}
const coverItems = Object.keys(coverModules)
  .sort()
  .map((k) => {
    const slug = k.split('/').pop().replace(/\.[^.]+$/, '').replace(/[\d_]+$/, '')
    const meta = PROJECT_META[slug] || {}
    return { src: coverModules[k], title: meta.title || slug, description: meta.description, link: meta.link || '#work' }
  })

// Full-screen flowing-menu entries. Images reuse the project covers for the marquee.
const menuItems = [
  { link: '#top', text: 'Hero', image: coverItems[0]?.src },
  { link: '#work', text: 'Work', image: coverItems[1]?.src },
  { link: '#contact', text: 'Contact', image: coverItems[3]?.src },
]

/* ---------- Scroll reveal (IntersectionObserver) ---------- */
function useReveal() {
  useEffect(() => {
    // rAF loop reads layout each frame and reveals elements as they enter the
    // viewport. Independent of scroll events / IntersectionObserver, so it works
    // reliably across all environments. Stops itself once everything is revealed.
    let raf = 0
    const loop = () => {
      const trigger = window.innerHeight * 0.9
      const remaining = document.querySelectorAll('.reveal:not(.in)')
      remaining.forEach((el) => {
        if (el.getBoundingClientRect().top < trigger) el.classList.add('in')
      })
      if (document.querySelectorAll('.reveal:not(.in)').length > 0) {
        raf = requestAnimationFrame(loop)
      } else {
        raf = 0
      }
    }
    raf = requestAnimationFrame(loop)
    return () => { if (raf) cancelAnimationFrame(raf) }
  }, [])
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
function Nav({ onMenu }) {
  return (
    <nav className="nav">
      <a href="#top" className="brand" data-cursor="link" data-cursor-label="Home" aria-label="Home">
        <img src="/logo.png" alt="Logo" className="brand-logo" />
      </a>
      <div className="nav-actions">
        <button className="menu-btn" data-cursor="link" onClick={onMenu} aria-label="Open menu">
          Menu
          <span className="bars"><span /><span /></span>
        </button>
      </div>
    </nav>
  )
}

/* ---------- Full-screen flowing menu ---------- */
function MenuOverlay({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const handleMenuItemClick = (event) => {
    const href = event.currentTarget.getAttribute('href')
    if (!href?.startsWith('#')) {
      onClose()
      return
    }

    event.preventDefault()
    event.stopPropagation()
    onClose()

    // Wait for the overlay's scroll lock to be removed before starting the
    // smooth movement to the selected homepage section.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const target = document.querySelector(href)
        if (!target) return
        let top = 0
        if (href !== '#top') {
          let element = target
          while (element) {
            top += element.offsetTop
            element = element.offsetParent
          }
        }
        window.scrollTo({ top, behavior: 'smooth' })
      })
    })
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="menu-overlay"
          initial={{ clipPath: 'circle(0% at 100% 0%)' }}
          animate={{ clipPath: 'circle(150% at 100% 0%)' }}
          exit={{ clipPath: 'circle(0% at 100% 0%)' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          // close when any menu link is clicked (anchor scroll is handled by Lenis)
          onClick={(e) => { if (e.target.closest('a')) onClose() }}
        >
          <FlowingMenu
            items={menuItems}
            speed={15}
            bgColor="#0a0a0f"
            textColor="#ffffff"
            marqueeBgColor="#ffffff"
            marqueeTextColor="#0a0a0f"
            borderColor="rgba(255,255,255,0.18)"
            onItemClick={handleMenuItemClick}
            closeLabel="Close"
            onClose={onClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ---------- Hero ---------- */
function Hero({ ready, onReel }) {
  return (
    <section className="hero" id="top">
      <div className="hero-grainient" aria-hidden="true">
        <FallingPattern color="#ffffff" backgroundColor="#000000" duration={150} density={1} blurIntensity="16px" brightness={2.4} />
      </div>
      <motion.div
        className="hero-intro"
        initial={{ opacity: 0, y: 50 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <h1 className="hero-cycle-headline">
          Hello, I'm{' '}
          <span className="hero-cycle-word">Product&nbsp;</span>
          <AnimatedTextCycle
            words={['Engineer', 'Manager', 'Designer']}
            interval={2200}
            className="hero-cycle-word"
          />
        </h1>
      </motion.div>
      <div className="container hero-content">
        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="hero-reel">
            <Magnetic strength={0.4}>
              <div className="reel-wrap">
                <div className="reel-ring-pos">
                  <CircularText className="reel-ring" text="RECENT*WORK*SHOWREEL*" spinDuration={18} onHover="speedUp" />
                </div>
                <button className="reel-btn" data-cursor="media" data-cursor-label="Watch" onClick={onReel}>
                  recent
                </button>
              </div>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- Showreel modal ---------- */
function Reel({ open, onClose }) {
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
          data-cursor="link" data-cursor-label="Close"
          style={{ position: 'fixed', inset: 0, zIndex: 8000, background: 'rgba(10,9,7,0.92)', display: 'grid', placeItems: 'center', padding: 'var(--pad)' }}
        >
          <motion.div
            initial={{ scale: 0.92, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.62, 0.05, 0.01, 0.99] }}
            onClick={togglePlay}
            data-cursor="media"
            data-cursor-label={playing ? 'Pause' : 'Play'}
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
  const [menu, setMenu] = useState(false)
  const [route, setRoute] = useState(() => (typeof window !== 'undefined' ? window.location.pathname : '/'))

  useLenis(loaded || route !== '/', route)
  useReveal()

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
    document.body.classList.toggle('no-scroll', (!loaded && route === '/') || reel || menu)
  }, [loaded, route, reel, menu])

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

      <Nav onMenu={() => setMenu(true)} />
      <main>
        <Hero ready={loaded} onReel={() => setReel(true)} />
        <Suspense fallback={<div className="home-content-fallback" aria-hidden="true" />}>
          <HomeContent coverItems={coverItems} logoItems={LOGO_ITEMS} />
        </Suspense>
      </main>

      <Reel open={reel} onClose={() => setReel(false)} />
      <MenuOverlay open={menu} onClose={() => setMenu(false)} />
    </>
  )
}
