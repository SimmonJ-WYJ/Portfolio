# Solvely Commercial Timing Static Showcase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Render Figma’s static commercial-timing showcase using the original 3324 × 2160 product-state image.

**Architecture:** Add the Figma PNG to the Solvely asset directory, reuse `firstUseLaptopShell`, and compose the result in a scoped section after the existing stable-structure module. CSS establishes the measured 1220/580 stage and 810/502 clipped viewport. The project static check protects original asset use, copy and geometry.

**Tech Stack:** React, CSS, Vite, Figma-exported PNG, Node `assert` static checks.

## Global Constraints

- Do not render a video or recreate product UI for this section.
- Use the original Figma still image and laptop shell.
- Preserve Figma stage, viewport, title and body exactly.

---

### Task 1: Create the regression check before implementation

**Files:**
- Modify: `scripts/check-solvely-plugins.mjs`

**Interfaces:**
- Consumes: `commercialTimingStill`, `.sp-commercial-timing` JSX and CSS.
- Produces: a non-zero check until the Figma static section is present.

- [ ] **Step 1: Write failing assertions**

Require the original PNG import, shared laptop shell, a static `img` inside `.sp-commercial-timing-image-window`, exact title/body, 1220/580 stage, 810/502 viewport and -3.35% header crop.

- [ ] **Step 2: Verify red test**

Run: `npm run check:solvely-plugins`

Expected: `AssertionError` identifying the absent commercial-timing showcase.

- [ ] **Step 3: Add original asset and minimal layout**

Copy the Figma raw PNG to `src/assets/solvely-plugins/commercial-timing-static.png`, import it, append the section after `.sp-stable-structure`, and add scoped desktop/mobile CSS using exact Figma geometry.

- [ ] **Step 4: Verify green check and build**

Run: `npm run check:solvely-plugins && npm run build`

Expected: static check success and Vite production build success.

### Task 2: Visual verification and release

**Files:**
- Verify: `src/components/SolvelyPluginsPage.jsx`
- Verify: `src/components/SolvelyPluginsPage.css`

- [ ] **Step 1: Inspect local output**

Open `/solvely-plugins` and compare shell, static image crop, stage and copy to Figma node `262:12714`.

- [ ] **Step 2: Publish and verify deployment**

Publish source, CSS, check, documents and PNG to `SimmonJ-WYJ/Portfolio` `main` with message `feat: add commercial timing showcase`; verify the commit status is `success` and inspect the live route.
