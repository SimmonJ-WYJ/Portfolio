# Portfolio Performance Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce initial JavaScript, offscreen animation work, and unnecessary media loading while preserving the portfolio's current visual design and interactions exactly.

**Architecture:** Keep the existing pathname-based React router and split case-study pages with `React.lazy`. Extract the homepage content below the Hero into a lazy module, replace global frame polling with observers, and give videos and continuous animation loops visibility-aware lifecycles. Native browser loading primitives remain the default; no new runtime dependencies are introduced.

**Tech Stack:** React 18, Vite 5, JavaScript/JSX, CSS, native `IntersectionObserver`, native media APIs.

## Global Constraints

- Visual design, layout, copy, interaction behavior, animation timing, and content must remain unchanged.
- Do not remove animations or intentional effects.
- Do not recompress, resize, convert, or replace image and video assets.
- Do not migrate frameworks or replace the existing lightweight router.
- Do not add analytics, monitoring services, or runtime dependencies.
- Preserve direct access, internal navigation, browser history, and scroll reset for `/`, `/freeleaps`, `/solvely`, `/wawawriter`, `/windpop`, and `/asci`.

---

## File Structure

- Create `scripts/check-bundle.mjs`: deterministic build-manifest assertions and bundle size reporting.
- Create `src/components/HomeContent.jsx`: current homepage content below the Hero, loaded as one route-local chunk.
- Create `src/components/RouteFallback.jsx`: neutral viewport-sized suspense fallback using existing colors.
- Create `src/components/useMediaVisibility.js`: reusable autoplay video pause/resume lifecycle.
- Modify `src/App.jsx`: lazy route imports, homepage suspense boundary, observer-based reveal logic.
- Modify `src/styles.css`: neutral suspense fallback and stable homepage deferred boundary styles.
- Modify `src/components/Cursor.jsx`: suspend the cursor frame loop when hidden or the document is hidden.
- Modify `src/components/useLenis.js`: suspend smooth-scroll frames while the document is hidden.
- Modify `src/components/Marquee.jsx` and `src/components/LogoCloud.jsx`: account for document visibility in existing viewport pausing.
- Modify `src/components/SolvelyPage.jsx`, `src/components/AsciPage.jsx`, and `src/components/ZoomParallax.jsx`: visibility-aware video loading and playback.
- Modify case-study page components containing eager below-the-fold images: add native lazy loading and async decoding without changing sources or markup geometry.
- Modify `package.json`: expose the bundle check through `npm run check:bundle`.

---

### Task 1: Add A Deterministic Bundle Baseline Gate

**Files:**
- Create: `scripts/check-bundle.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: Vite output in `dist/assets` after `npm run build`.
- Produces: `npm run check:bundle`, which prints JS chunks and fails when no route chunks exist or the largest entry bundle exceeds 900 KB gzip.

- [ ] **Step 1: Create the bundle checker**

Create `scripts/check-bundle.mjs`:

```js
import { readdir, readFile, stat } from 'node:fs/promises'
import { gzipSync } from 'node:zlib'
import path from 'node:path'

const assetsDir = path.resolve('dist/assets')
const files = (await readdir(assetsDir)).filter((file) => file.endsWith('.js'))
const rows = await Promise.all(files.map(async (file) => {
  const fullPath = path.join(assetsDir, file)
  const source = await readFile(fullPath)
  return { file, raw: (await stat(fullPath)).size, gzip: gzipSync(source).length }
}))

rows.sort((a, b) => b.raw - a.raw)
for (const row of rows) {
  console.log(`${row.file}\t${Math.round(row.raw / 1024)} KB\t${Math.round(row.gzip / 1024)} KB gzip`)
}

const routeNames = ['FreeleapsPage', 'SolvelyPage', 'WawawriterPage', 'WindpopPage', 'AsciPage']
const missingRoutes = routeNames.filter((name) => !rows.some((row) => row.file.includes(name)))
if (missingRoutes.length) {
  throw new Error(`Missing lazy route chunks: ${missingRoutes.join(', ')}`)
}

const entry = rows.find((row) => row.file.startsWith('index-'))
if (!entry) throw new Error('Vite entry chunk not found')
if (entry.gzip > 900 * 1024) {
  throw new Error(`Entry gzip size ${entry.gzip} exceeds 900 KB`)
}
```

- [ ] **Step 2: Add the package script**

Add this entry to `package.json` scripts:

```json
"check:bundle": "npm run build && node scripts/check-bundle.mjs"
```

- [ ] **Step 3: Run the checker before route splitting and verify the expected failure**

Run: `npm run check:bundle`

Expected: build succeeds, then the script fails with `Missing lazy route chunks` because all case-study pages are still synchronous.

- [ ] **Step 4: Commit the baseline gate**

```bash
git add package.json scripts/check-bundle.mjs
git commit -m "Add portfolio bundle performance gate"
```

---

### Task 2: Split Every Case-Study Route

**Files:**
- Create: `src/components/RouteFallback.jsx`
- Modify: `src/App.jsx`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: the existing `route` pathname state in `App`.
- Produces: lazy components named `FreeleapsPage`, `SolvelyPage`, `WawawriterPage`, `WindpopPage`, and `AsciPage`; `RouteFallback` provides the suspense placeholder.

- [ ] **Step 1: Create the neutral route fallback**

Create `src/components/RouteFallback.jsx`:

```jsx
export default function RouteFallback() {
  return <div className="route-fallback" aria-label="Loading page" />
}
```

Add to `src/styles.css`:

```css
.route-fallback {
  min-height: 100svh;
  background: #0a0a0f;
}
```

- [ ] **Step 2: Replace synchronous case-study imports with lazy imports**

Change the React import in `src/App.jsx` to include `lazy` and `Suspense`, remove the five synchronous page imports, and define:

```jsx
const FreeleapsPage = lazy(() => import('./components/FreeleapsPage.jsx'))
const SolvelyPage = lazy(() => import('./components/SolvelyPage.jsx'))
const WawawriterPage = lazy(() => import('./components/WawawriterPage.jsx'))
const WindpopPage = lazy(() => import('./components/WindpopPage.jsx'))
const AsciPage = lazy(() => import('./components/AsciPage.jsx'))
```

Import `RouteFallback` synchronously because it is tiny and required during every route transition.

- [ ] **Step 3: Add one route renderer instead of five duplicated branches**

Inside `App`, replace the five route `if` blocks with:

```jsx
const detailRoutes = {
  '/freeleaps': FreeleapsPage,
  '/solvely': SolvelyPage,
  '/wawawriter': WawawriterPage,
  '/windpop': WindpopPage,
  '/asci': AsciPage,
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
```

Define `detailRoutes` at module scope after the lazy declarations so it is not recreated on render.

- [ ] **Step 4: Verify route chunks and direct route rendering**

Run: `npm run check:bundle`

Expected: PASS; output includes one JS file containing each of the five page names, and the `index-*` gzip size remains below 900 KB.

Run against the active dev server:

```bash
for route in / /freeleaps /solvely /wawawriter /windpop /asci; do
  curl -fsS -o /dev/null "http://127.0.0.1:5174$route"
done
```

Expected: exit code 0.

- [ ] **Step 5: Commit route splitting**

```bash
git add src/App.jsx src/components/RouteFallback.jsx src/styles.css
git commit -m "Lazy load portfolio case studies"
```

---

### Task 3: Split Homepage Content Below The Hero

**Files:**
- Create: `src/components/HomeContent.jsx`
- Modify: `src/App.jsx`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: `coverItems` and `LOGO_ITEMS` from `App` through props.
- Produces: default component `HomeContent({ coverItems, logoItems })` containing the existing `StudioManifesto`, Work, and Footer output.

- [ ] **Step 1: Extract the exact current below-Hero markup**

Create `src/components/HomeContent.jsx` with the existing `Work` and `Footer` markup moved unchanged from `App.jsx`:

```jsx
import { useState } from 'react'
import ContactCard from './ContactCard.jsx'
import HorizontalShowcase from './HorizontalShowcase.jsx'
import LogoCloud from './LogoCloud.jsx'
import StudioManifesto from './StudioManifesto.jsx'
import WavePath from './WavePath.jsx'
import { cases } from '../data.js'

function Work({ coverItems }) {
  return (
    <HorizontalShowcase
      title="My Creative Projects"
      subtitle="A collection of ideas, interfaces, and product experiences shaped through design thinking."
      items={coverItems.length ? coverItems : cases}
    />
  )
}

function Footer({ logoItems }) {
  const [contact, setContact] = useState(false)
  return (
    <footer className="footer" id="contact">
      <ContactCard open={contact} onClose={() => setContact(false)} />
      <div className="container">
        <h2 className="cta-big reveal">
          <a href="#contact" data-cursor="link" data-cursor-label="Contact"
            onClick={(event) => { event.preventDefault(); setContact((open) => !open) }}>
            Work together
            <span className="cta-arrow">
              <svg width="0.7em" height="0.7em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8" /></svg>
            </span>
          </a>
        </h2>
      </div>
      <div className="footer-art">
        <WavePath className="footer-art-wave" />
        <div className="footer-art-text">
          <p className="footer-art-label">Creative Approach</p>
          <p className="footer-art-desc">Exploring the space between creativity and technology. Creating thoughtful experiences through design, AI, and modern digital craftsmanship.</p>
        </div>
      </div>
      <div className="footer-logos"><LogoCloud items={logoItems} /></div>
    </footer>
  )
}

export default function HomeContent({ coverItems, logoItems }) {
  return (
    <div className="after-hero">
      <StudioManifesto covers={coverItems} />
      <Work coverItems={coverItems} />
      <Footer logoItems={logoItems} />
    </div>
  )
}
```

- [ ] **Step 2: Lazy-load the extracted homepage module**

Remove the moved component imports and definitions from `src/App.jsx`, add:

```jsx
const HomeContent = lazy(() => import('./components/HomeContent.jsx'))
```

Replace the existing `.after-hero` block with:

```jsx
<Suspense fallback={<div className="home-content-fallback" aria-hidden="true" />}>
  <HomeContent coverItems={coverItems} logoItems={LOGO_ITEMS} />
</Suspense>
```

Add a stable fallback to `src/styles.css`:

```css
.home-content-fallback {
  min-height: 100svh;
  background: var(--bg, #0a0a0f);
}
```

The browser will request this chunk immediately after the synchronous Hero render. Do not add a timer because it could create a visible delay during fast scrolling.

- [ ] **Step 3: Verify the homepage chunk and visual DOM landmarks**

Run: `npm run check:bundle`

Expected: PASS and output includes `HomeContent-*`; entry gzip size is smaller than the result from Task 2.

Open `/` and verify the DOM still contains `.after-hero`, `.footer`, and `#contact` after the lazy module resolves.

- [ ] **Step 4: Commit homepage splitting**

```bash
git add src/App.jsx src/components/HomeContent.jsx src/styles.css
git commit -m "Split homepage content from initial bundle"
```

---

### Task 4: Remove Continuous Offscreen Frame Work

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/components/Cursor.jsx`
- Modify: `src/components/useLenis.js`
- Modify: `src/components/Marquee.jsx`
- Modify: `src/components/LogoCloud.jsx`

**Interfaces:**
- Consumes: browser `IntersectionObserver`, `visibilitychange`, and existing `.reveal` elements.
- Produces: identical visible animations with no reveal polling and no hidden-tab cursor, Lenis, marquee, or logo-cloud frames.

- [ ] **Step 1: Replace `useReveal` frame polling with one observer**

Replace the existing `useReveal` body in `src/App.jsx` with:

```jsx
function useReveal(route) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal:not(.in)')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('in'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('in')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0 })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [route])
}
```

Call it as `useReveal(route)`. The route dependency ensures newly mounted case-study content is observed.

- [ ] **Step 2: Suspend Cursor frames when no visual update is useful**

In `Cursor.jsx`, track `pageVisible` and `pointerVisible` in local effect variables. Start the frame loop only after pointer movement and while the page is visible. Stop it on `mouseleave` and `visibilitychange`, preserving the same interpolation and transform code when active.

Use this scheduling shape inside the existing effect:

```jsx
let raf = 0
let pointerVisible = false
let pageVisible = !document.hidden

const loop = () => {
  pos.current.x += (target.current.x - pos.current.x) * 0.18
  pos.current.y += (target.current.y - pos.current.y) * 0.18
  if (dotRef.current) {
    dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`
  }
  raf = pointerVisible && pageVisible ? requestAnimationFrame(loop) : 0
}
const start = () => {
  if (raf === 0 && pointerVisible && pageVisible) raf = requestAnimationFrame(loop)
}
const stop = () => {
  if (raf !== 0) cancelAnimationFrame(raf)
  raf = 0
}
```

`onMove` sets `pointerVisible = true` and calls `start`; `onLeave` sets it false and calls `stop`; `visibilitychange` updates `pageVisible` and starts or stops accordingly.

- [ ] **Step 3: Suspend Lenis frames when the document is hidden**

In `useLenis.js`, replace unconditional frame scheduling with `start`, `stop`, and a `visibilitychange` handler using the same pattern as Cursor. Keep the existing Lenis options and anchor behavior unchanged. Remove the visibility listener during cleanup before destroying Lenis.

- [ ] **Step 4: Complete visibility handling in marquee components**

`Marquee.jsx` and `LogoCloud.jsx` already pause when offscreen but do not react when the tab becomes hidden while intersecting. Add a `pageVisible` variable and `visibilitychange` listener that updates `visible = intersecting && !document.hidden`, starts when true, and cancels/reset `raf` when false. Preserve current speed, direction, transforms, and observer thresholds.

- [ ] **Step 5: Verify build and absence of reveal polling**

Run:

```bash
npm run build
rg -n "querySelectorAll\('.reveal:not\(.in\)'\)|getBoundingClientRect" src/App.jsx
```

Expected: build passes; `useReveal` contains no `requestAnimationFrame` or `getBoundingClientRect` call.

- [ ] **Step 6: Commit animation lifecycle work**

```bash
git add src/App.jsx src/components/Cursor.jsx src/components/useLenis.js src/components/Marquee.jsx src/components/LogoCloud.jsx
git commit -m "Pause inactive portfolio animations"
```

---

### Task 5: Make Autoplay Video Loading Visibility-Aware

**Files:**
- Create: `src/components/useMediaVisibility.js`
- Modify: `src/components/SolvelyPage.jsx`
- Modify: `src/components/AsciPage.jsx`
- Modify: `src/components/ZoomParallax.jsx`

**Interfaces:**
- Consumes: a React video ref and `{ autoplay?: boolean }` options.
- Produces: `useMediaVisibility(videoRef, { autoplay: true })`, pausing offscreen media and resuming it when visible.

- [ ] **Step 1: Create the reusable media visibility hook**

Create `src/components/useMediaVisibility.js`:

```js
import { useEffect } from 'react'

export function useMediaVisibility(ref, { autoplay = false } = {}) {
  useEffect(() => {
    const media = ref.current
    if (!media || !('IntersectionObserver' in window)) return undefined

    let wasPlaying = autoplay || !media.paused
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !document.hidden) {
        if (wasPlaying) media.play().catch(() => {})
      } else {
        wasPlaying = wasPlaying || !media.paused
        media.pause()
      }
    }, { rootMargin: '160px 0px', threshold: 0.01 })

    const onVisibility = () => {
      if (document.hidden) {
        wasPlaying = wasPlaying || !media.paused
        media.pause()
      }
    }

    observer.observe(media)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [ref, autoplay])
}
```

- [ ] **Step 2: Apply the hook to Solvely autoplay videos**

In `SolvelyPage.jsx`, create refs for the existing autoplay videos, call `useMediaVisibility(ref, { autoplay: true })`, attach the refs, and keep `autoPlay`, `muted`, `loop`, and `playsInline`. Keep `preload="metadata"` for both videos.

- [ ] **Step 3: Reduce eager loading in ASCI and ZoomParallax videos**

For below-the-fold videos in `AsciPage.jsx` and `ZoomParallax.jsx`, replace `preload="auto"` with `preload="metadata"`. Attach refs and `useMediaVisibility` only to videos that currently autoplay; do not alter click-controlled or modal playback semantics.

- [ ] **Step 4: Verify video source reachability and production build**

Run:

```bash
npm run build
curl -fsSI http://127.0.0.1:5174/solvely/onboarding.mp4
curl -fsSI http://127.0.0.1:5174/asci/parallax-1.mp4
```

Expected: build passes and both requests return HTTP 200 with `Content-Type: video/mp4`.

- [ ] **Step 5: Commit video lifecycle work**

```bash
git add src/components/useMediaVisibility.js src/components/SolvelyPage.jsx src/components/AsciPage.jsx src/components/ZoomParallax.jsx
git commit -m "Defer offscreen portfolio video work"
```

---

### Task 6: Apply Native Image Loading Priorities

**Files:**
- Modify: `src/components/SolvelyPage.jsx`
- Modify: `src/components/FreeleapsPage.jsx`
- Modify: `src/components/WawawriterPage.jsx`
- Modify: `src/components/WindpopPage.jsx`
- Modify: `src/components/AsciPage.jsx`
- Modify: `src/components/FreeleapsPageDisplay.jsx`
- Modify: `src/components/FreeleapsProductPages.jsx`
- Modify: `src/components/AsciProjects.jsx`

**Interfaces:**
- Consumes: existing `<img>` elements and unchanged image URLs.
- Produces: eager/high-priority route hero images and lazy/asynchronously decoded below-the-fold images.

- [ ] **Step 1: Mark each route's LCP image explicitly**

On the primary first-viewport image in each case-study page, add:

```jsx
loading="eager" decoding="async" fetchPriority="high"
```

Do not apply high priority to logos, icons, decorative overlays, or more than one raster image per route.

- [ ] **Step 2: Mark remaining raster content below the first viewport**

For below-the-fold content images that do not already specify loading behavior, add:

```jsx
loading="lazy" decoding="async"
```

For existing lazy images, add only `decoding="async"`. Do not modify SVG icon loading, CSS backgrounds, image sources, alt text, class names, or DOM order.

- [ ] **Step 3: Verify attribute coverage and build**

Run:

```bash
npm run build
rg -n "<img" src/components/{SolvelyPage,FreeleapsPage,WawawriterPage,WindpopPage,AsciPage,FreeleapsPageDisplay,FreeleapsProductPages,AsciProjects}.jsx
```

Expected: build passes; each route has exactly one `fetchPriority="high"`; below-the-fold raster images have `loading="lazy" decoding="async"`.

- [ ] **Step 4: Commit image loading work**

```bash
git add src/components/SolvelyPage.jsx src/components/FreeleapsPage.jsx src/components/WawawriterPage.jsx src/components/WindpopPage.jsx src/components/AsciPage.jsx src/components/FreeleapsPageDisplay.jsx src/components/FreeleapsProductPages.jsx src/components/AsciProjects.jsx
git commit -m "Tune portfolio image loading priorities"
```

---

### Task 7: Final Bundle And Browser Regression Verification

**Files:**
- Modify only if verification finds a scoped regression in files already listed above.

**Interfaces:**
- Consumes: all previous task outputs and the running Vite site.
- Produces: verified performance comparison and unchanged visual behavior.

- [ ] **Step 1: Run the complete build and bundle gate**

Run: `npm run check:bundle`

Expected: PASS; route chunks and `HomeContent` chunk are listed; initial entry gzip is materially below the original 713 KB baseline and below the 900 KB safety ceiling.

- [ ] **Step 2: Verify all direct routes over HTTP**

Run:

```bash
for route in / /freeleaps /solvely /wawawriter /windpop /asci; do
  curl -fsS -o /dev/null "http://127.0.0.1:5174$route" || exit 1
done
```

Expected: exit code 0.

- [ ] **Step 3: Verify browser behavior at desktop viewport**

Using the in-app browser at the existing desktop viewport:

- Open every direct route and confirm no console errors.
- Navigate from homepage cards into each available case study and use browser back.
- Confirm the loader, Hero, menu, cursor, smooth scroll, reveal animations, showreel, contact interaction, and route scroll reset remain unchanged.
- On `/solvely`, confirm both autoplay videos play when visible, pause offscreen, and resume without layout movement.
- Confirm image boxes do not shift when lazy-loaded assets resolve.

- [ ] **Step 4: Inspect final working tree and diff**

Run:

```bash
git status -sb
git diff --check
git log --oneline -8
```

Expected: no uncommitted implementation changes, no whitespace errors, and one focused commit per task.

- [ ] **Step 5: Record final metrics in the handoff**

Report the original and final entry raw/gzip sizes, emitted route chunks, validation commands, and any existing Vite large-chunk warnings. Do not claim media byte reduction because source compression is outside scope.
