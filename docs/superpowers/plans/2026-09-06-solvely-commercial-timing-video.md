# Solvely Commercial Timing Video Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the commercial-timing static image with visibility-aware playback of the supplied commercial recording.

**Architecture:** `SolvelyPluginsPage.jsx` owns the new video ref, hook registration, and `<video>` element. `SolvelyPluginsPage.css` keeps the Figma screen-window geometry unchanged and moves the existing source-header crop rule from the static image selector to the video selector. The existing source-check script guards the contract.

**Tech Stack:** React, Vite, CSS, native HTML video, Node assertions.

## Global Constraints

- Reuse `src/assets/solvely-plugins/Commercial.mp4` exactly.
- Preserve the current 1220 / 580 stage, 810 / 502 screen window, 3.35% top crop, Figma title, and Figma body copy.
- Follow existing `useMediaVisibility(ref, { autoplay: true })` behavior.

---

### Task 1: Lock the commercial-video contract before changing markup

**Files:**
- Modify: `scripts/check-solvely-plugins.mjs:128-143`
- Test: `scripts/check-solvely-plugins.mjs`

**Interfaces:**
- Consumes: source strings from `SolvelyPluginsPage.jsx` and `SolvelyPluginsPage.css`.
- Produces: failing assertions that require `commercialVideoRef`, `Commercial.mp4`, visibility-aware video playback, and the existing Figma screen geometry.

- [ ] **Step 1: Replace static-image assertions with video assertions**

```js
assert.match(page, /useMediaVisibility\\(commercialVideoRef, \\{ autoplay: true \\}\\)/)
assert.match(page, /<section className="sp-commercial-timing">[\\s\\S]*ref=\\{commercialVideoRef\\}[\\s\\S]*src=\\{commercial\\}[\\s\\S]*autoPlay[\\s\\S]*muted[\\s\\S]*loop[\\s\\S]*playsInline[\\s\\S]*preload="metadata"/)
assert.match(styles, /\\.sp-commercial-timing-video\\s*\\{[\\s\\S]*width:\\s*100%[\\s\\S]*height:\\s*auto[\\s\\S]*transform:\\s*translateY\\(-3\\.35%\\)/)
```

- [ ] **Step 2: Run the source check and confirm it fails because the video ref and element do not yet exist**

Run: `npm run check:solvely-plugins`

Expected: `AssertionError` mentioning commercial video visibility-aware autoplay.

### Task 2: Replace the static image with the commercial recording

**Files:**
- Modify: `src/components/SolvelyPluginsPage.jsx:14-45,248-260`
- Modify: `src/components/SolvelyPluginsPage.css:612-627`
- Test: `scripts/check-solvely-plugins.mjs`

**Interfaces:**
- Consumes: existing `commercial` video import, `firstUseLaptopShell`, and `useMediaVisibility`.
- Produces: a video-driven commercial-timing module with the same outer layout.

- [ ] **Step 1: Add the dedicated ref and register it with the existing visibility hook**

```jsx
const commercialVideoRef = useRef(null)
useMediaVisibility(commercialVideoRef, { autoplay: true })
```

- [ ] **Step 2: Replace the static `<img>` with the native video contract**

```jsx
<video
  ref={commercialVideoRef}
  src={commercial}
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  aria-label="Solvely commercial conversion flow"
/>
```

- [ ] **Step 3: Move the existing crop rule to `.sp-commercial-timing-video` without changing width, height, or translateY values**

```css
.sp-commercial-timing-video {
  display: block;
  width: 100%;
  height: auto;
  transform: translateY(-3.35%);
}
```

- [ ] **Step 4: Run source check and production build**

Run: `npm run check:solvely-plugins && npm run build`

Expected: source check prints `Solvely Plugins onboarding-video checks passed.` and Vite exits with code 0.

### Task 3: Visual and delivery verification

**Files:**
- Verify: `http://127.0.0.1:5174/solvely-plugins`
- Verify: `https://www.simmonj.com/solvely-plugins`

**Interfaces:**
- Consumes: built page and deployment status for the pushed commit.
- Produces: evidence that the video animates in the preserved frame on local and production URLs.

- [ ] **Step 1: Scroll the local page to the commercial module and verify the recording fills the existing screen window without a black top band.**

- [ ] **Step 2: Commit the changed JSX, CSS, source check, and two documentation files using GitHub's Git Data API.**

- [ ] **Step 3: Wait for the commit status to report `success`, then repeat the commercial-module visual check on production.**
