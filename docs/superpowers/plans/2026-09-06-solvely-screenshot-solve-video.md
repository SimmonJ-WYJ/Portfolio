# Solvely Screenshot-Solve Video Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Render the Figma screenshot-solve showcase with its supplied MP4 as real visibility-aware autoplaying media.

**Architecture:** Extend `SolvelyPluginsPage` with a fourth self-contained Figma showcase. Reuse the established laptop shell and `useMediaVisibility` hook, while CSS expresses the new node’s exact proportional geometry. The existing static Node assertion script guards the rendered structure, copy, crop and responsive styling.

**Tech Stack:** React, CSS, Vite, Node `assert` static checks.

## Global Constraints

- Preserve the Figma title and body exactly.
- Use `截屏解题.mp4` as media; do not substitute an image.
- Use the exact 1220 × 574 stage and 810 × 492 video viewport proportions.
- Preserve full video width; crop only the recording’s 36 px black top band with `translateY(-3.35%)`.

---

### Task 1: Lock the Figma section into regression checks

**Files:**
- Modify: `scripts/check-solvely-plugins.mjs`

**Interfaces:**
- Consumes: the future `screenshotSolveVideoRef`, `.sp-screenshot-solve` JSX, and CSS selectors.
- Produces: an executable check which exits non-zero until the section is implemented.

- [ ] **Step 1: Write the failing test**

Add assertions requiring `useMediaVisibility(screenshotSolveVideoRef, { autoplay: true })`, a `.sp-screenshot-solve` section containing the shared shell and `<video ref={screenshotSolveVideoRef} src={screenshot} autoPlay muted loop playsInline preload="metadata">`, exact Figma copy, the `#eef1f5`/32 px stage, 16.803%/13.589%/66.393% viewport geometry, 810/492 ratio, and `translateY(-3.35%)` crop rule.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run check:solvely-plugins`

Expected: failure naming the missing screenshot-solve behaviour.

- [ ] **Step 3: Write minimal implementation**

Complete Task 2 only after the check is red.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run check:solvely-plugins`

Expected: `Solvely Plugins onboarding-video checks passed.`

### Task 2: Render the screenshot-solve module

**Files:**
- Modify: `src/components/SolvelyPluginsPage.jsx`
- Modify: `src/components/SolvelyPluginsPage.css`

**Interfaces:**
- Consumes: existing `screenshot` asset import, `firstUseLaptopShell`, `useMediaVisibility`, and Task 1 assertions.
- Produces: `.sp-screenshot-solve` with autoplaying real footage and responsive Figma geometry.

- [ ] **Step 1: Add the ref and observer**

Add `const screenshotSolveVideoRef = useRef(null)` and `useMediaVisibility(screenshotSolveVideoRef, { autoplay: true })` beside the existing showcase refs.

- [ ] **Step 2: Add the exact JSX**

Append the screenshot-solve section immediately after `.sp-task-first`. Render `firstUseLaptopShell` below a video sourced from `screenshot` and retain all autoplay-safe attributes. Use the exact title and body in the design specification.

- [ ] **Step 3: Add exact CSS geometry**

Add a 1220/574 stage; shell at 9.508%/8.188%/80.984%; video viewport at 16.803%/13.589%/66.393%, ratio 810/492; video width 100%, auto height, and `translateY(-3.35%)`. Include the section in existing mobile selector groups.

- [ ] **Step 4: Verify checks and production build**

Run: `npm run check:solvely-plugins && npm run build`

Expected: static check passes and Vite reports a successful production build.

### Task 3: Verify rendered result and publish

**Files:**
- Verify: `src/components/SolvelyPluginsPage.jsx`
- Verify: `src/components/SolvelyPluginsPage.css`

- [ ] **Step 1: Inspect the local route**

Open `/solvely-plugins`, scroll to the fourth showcase, and verify the full laptop width, the absent source black header, exact copy, and active video frame.

- [ ] **Step 2: Commit through the repository Git Data API**

Publish the changed source, stylesheet, test and design documents to `SimmonJ-WYJ/Portfolio` `main` with message `feat: add screenshot solve showcase`.

- [ ] **Step 3: Verify deployment**

Run: `gh api repos/SimmonJ-WYJ/Portfolio/commits/<commit>/status --jq '.state'`

Expected: `success`; then inspect the production route at `https://www.simmonj.com/solvely-plugins`.
