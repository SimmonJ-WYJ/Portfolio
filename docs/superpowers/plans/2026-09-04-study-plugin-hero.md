# Study Plugin Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Study Plugin as the first homepage work item and create a faithful, responsive `/study-plugin` hero while preserving the existing Solvely route.

**Architecture:** Keep the current Vite/React client router and cover metadata pipeline. Add one focused page component with its own CSS and repository-owned raster assets; make ordering explicit after the cover glob is mapped so filename sorting cannot move Study Plugin away from the first position.

**Tech Stack:** React 18, Vite 5, JavaScript, CSS, Node.js verification script

## Global Constraints

- Keep `/solvely` and every existing project entry unchanged.
- Use `/study-plugin` as the new independent route.
- Use the wide supplied screenshot for the homepage cover and the complete supplied screenshot for the hero.
- Match Figma node `262:12636`: `#eef1f5`, 1440 by 739 reference hero, 988 by 659 visual at x 226 and y 160, clipped at the hero boundary.
- Implement only the first-screen hero and the existing Back control pattern.
- Add no third-party dependencies.
- Do not deploy or publish in this pass.

---

### Task 1: Add an explicit first-position project entry and route contract

**Files:**
- Create: `scripts/check-study-plugin.mjs`
- Create: `src/assets/covers/StudyPlugin.jpg`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: the existing `coverModules`, `PROJECT_META`, `detailRoutes`, and `HorizontalShowcase` item contract `{ src, title, description, link }`.
- Produces: a first `coverItems` entry with `title: 'Study Plugin'`, `link: '/study-plugin'`, plus a lazy route component registered at `/study-plugin`.

- [ ] **Step 1: Write the failing source contract check**

Create `scripts/check-study-plugin.mjs` with Node assertions that read `src/App.jsx` and verify the lazy import, route, metadata, and explicit first-position ordering. It must also confirm that `/solvely` remains present and that both committed image assets exist.

```js
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')

assert.match(app, /const StudyPluginPage = lazy\(\(\) => import\('\.\/components\/StudyPluginPage\.jsx'\)\)/)
assert.match(app, /'\/study-plugin': StudyPluginPage/)
assert.match(app, /StudyPlugin:\s*\{[^}]*title:\s*'Study Plugin'[^}]*link:\s*'\/study-plugin'/s)
assert.match(app, /\.sort\(\(a, b\) => Number\(b\.includes\('StudyPlugin'\)\) - Number\(a\.includes\('StudyPlugin'\)\) \|\| a\.localeCompare\(b\)\)/)
assert.match(app, /'\/solvely': SolvelyPage/)
assert.ok(existsSync(new URL('../src/assets/covers/StudyPlugin.jpg', import.meta.url)))
assert.ok(existsSync(new URL('../src/assets/study-plugin/hero.png', import.meta.url)))

console.log('Study Plugin source contract OK')
```

- [ ] **Step 2: Run the check to verify it fails**

Run: `node scripts/check-study-plugin.mjs`

Expected: FAIL because Study Plugin is not yet registered and its assets do not exist.

- [ ] **Step 3: Add the cover asset and App wiring**

Convert the supplied wide PNG to high-quality JPEG at `src/assets/covers/StudyPlugin.jpg`. In `src/App.jsx`, add:

```js
const StudyPluginPage = lazy(() => import('./components/StudyPluginPage.jsx'))

const detailRoutes = {
  '/study-plugin': StudyPluginPage,
  // existing routes remain below
}

const PROJECT_META = {
  StudyPlugin: {
    title: 'Study Plugin',
    description: 'A browser learning assistant designed around the student’s active study context.',
    link: '/study-plugin',
  },
  // existing metadata remains below
}
```

Update cover sorting so Study Plugin is always first:

```js
const coverItems = Object.keys(coverModules)
  .sort((a, b) => Number(b.includes('StudyPlugin')) - Number(a.includes('StudyPlugin')) || a.localeCompare(b))
  .map((k) => {
    const slug = k.split('/').pop().replace(/\.[^.]+$/, '').replace(/[\d_]+$/, '')
    const meta = PROJECT_META[slug] || {}
    return { src: coverModules[k], title: meta.title || slug, description: meta.description, link: meta.link || '#work' }
  })
```

- [ ] **Step 4: Run the contract check**

Run: `node scripts/check-study-plugin.mjs`

Expected: it may still fail only on the missing hero page/asset until Task 2 is complete; route, metadata, order, Solvely preservation, and cover assertions pass.

### Task 2: Build the responsive Figma-matched hero

**Files:**
- Create: `src/assets/study-plugin/hero.png`
- Create: `src/components/StudyPluginPage.jsx`
- Create: `src/components/StudyPluginPage.css`
- Modify: `scripts/check-study-plugin.mjs`

**Interfaces:**
- Consumes: `/study-plugin` from `detailRoutes` and the local `hero.png` asset.
- Produces: default React component `StudyPluginPage`, containing `.study-plugin`, `.study-plugin-back`, `.study-plugin-hero`, and `.study-plugin-hero-image`.

- [ ] **Step 1: Extend the failing contract check for page semantics**

Append assertions that confirm the page imports the hero asset and CSS, exposes a homepage Back link, has descriptive image alt text, and that CSS contains the Figma reference geometry plus a mobile breakpoint.

```js
const page = readFileSync(new URL('../src/components/StudyPluginPage.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/components/StudyPluginPage.css', import.meta.url), 'utf8')

assert.match(page, /import heroImage from '\.\.\/assets\/study-plugin\/hero\.png'/)
assert.match(page, /href="\/"/)
assert.match(page, /alt="Solvely browser study assistant shown on a laptop"/)
assert.match(css, /background:\s*#eef1f5/)
assert.match(css, /aspect-ratio:\s*1440\s*\/\s*739/)
assert.match(css, /width:\s*68\.611111%/)
assert.match(css, /left:\s*15\.694444%/)
assert.match(css, /top:\s*21\.65088%/)
assert.match(css, /@media \(max-width: 700px\)/)
```

- [ ] **Step 2: Run the check to verify the page contract fails**

Run: `node scripts/check-study-plugin.mjs`

Expected: FAIL because the page component and CSS are not present yet.

- [ ] **Step 3: Add the source hero and component**

Copy the supplied complete PNG unchanged to `src/assets/study-plugin/hero.png`. Create `StudyPluginPage.jsx`:

```jsx
import heroImage from '../assets/study-plugin/hero.png'
import './StudyPluginPage.css'

export default function StudyPluginPage() {
  return (
    <main className="study-plugin">
      <a href="/" className="study-plugin-back" data-cursor="link" data-cursor-label="Home">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
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
          fetchPriority="high"
        />
      </section>
    </main>
  )
}
```

Create `StudyPluginPage.css` with the Figma-derived geometry and responsive behavior:

```css
.study-plugin {
  min-height: 100vh;
  background: #eef1f5;
  color: #141a21;
  font-family: 'Inter', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif;
}

.study-plugin-back {
  position: fixed;
  top: clamp(16px, 2.5vw, 28px);
  left: clamp(16px, 2.5vw, 28px);
  z-index: 10;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px 10px 14px;
  border-radius: 999px;
  background: rgba(17, 16, 14, 0.85);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  backdrop-filter: blur(8px);
}

.study-plugin-hero {
  position: relative;
  width: 100%;
  aspect-ratio: 1440 / 739;
  overflow: hidden;
  background: #eef1f5;
}

.study-plugin-hero-image {
  position: absolute;
  left: 15.694444%;
  top: 21.65088%;
  width: 68.611111%;
  height: auto;
  display: block;
  animation: study-plugin-enter 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes study-plugin-enter {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 700px) {
  .study-plugin-hero { min-height: 100svh; aspect-ratio: auto; }
  .study-plugin-hero-image {
    top: 18%;
    left: 50%;
    width: min(150vw, 900px);
    max-width: none;
    transform: translateX(-50%);
  }
  @keyframes study-plugin-enter {
    from { opacity: 0; transform: translate(-50%, 16px); }
    to { opacity: 1; transform: translate(-50%, 0); }
  }
}

@media (prefers-reduced-motion: reduce) {
  .study-plugin-hero-image { animation: none; }
}
```

- [ ] **Step 4: Run source and production verification**

Run: `node scripts/check-study-plugin.mjs && npm run build && npm run check:bundle && git diff --check`

Expected: source contract prints `Study Plugin source contract OK`; both Vite builds complete successfully; bundle check passes; no whitespace errors.

- [ ] **Step 5: Verify routes visually**

Run `npm run dev -- --host 127.0.0.1` and inspect desktop 1440px and a narrow mobile viewport:

- `/` shows Study Plugin first and keeps Solvely present.
- `/study-plugin` matches the Figma cool-gray hero, image placement, clipping, and Back navigation.
- `/solvely` still renders its original case study.
- Browser console contains no route, asset, or React errors.

- [ ] **Step 6: Commit implementation**

```bash
git add src/App.jsx src/components/StudyPluginPage.jsx src/components/StudyPluginPage.css src/assets/covers/StudyPlugin.jpg src/assets/study-plugin/hero.png scripts/check-study-plugin.mjs
git commit -m "feat: add Study Plugin case study hero"
```
