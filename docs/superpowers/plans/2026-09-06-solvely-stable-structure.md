# Solvely Stable Information Structure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Render Figma’s three-state static sidebar flow with original image and SVG assets.

**Architecture:** Store the Figma source images and vectors under `src/assets/solvely-plugins`, then compose them inside a local `sp-stable-structure` section. CSS preserves the Figma coordinate system as percentages relative to a 1220/580 stage. The existing Node static check validates source asset use, arrow SVG use, geometry and exact copy.

**Tech Stack:** React, CSS, Vite, Figma-exported PNG/SVG assets, Node `assert` static checks.

## Global Constraints

- Use original Figma PNG and SVG assets only; do not recreate or rasterize arrows.
- Keep the stage at 1220/580 and all three images at 255/484 source proportions.
- Retain original Figma text verbatim.

---

### Task 1: Establish a failing regression check

**Files:**
- Modify: `scripts/check-solvely-plugins.mjs`

**Interfaces:**
- Consumes: planned imports `stableEntry`, `stableAnswer`, `stableSummary`, `stableFlowArrow`, `stableShortArrow`; `.sp-stable-structure` JSX and CSS.
- Produces: a non-zero check until original images, SVG arrows, layout, and copy are present.

- [ ] **Step 1: Write test assertions**

Add assertions requiring the five source imports; the three image elements and two arrow image elements; exact title/body; 1220/580 stage; x/y/width/height geometry of all panels; 10 px panel radii; and the two Figma arrow positions.

- [ ] **Step 2: Verify red test**

Run: `npm run check:solvely-plugins`

Expected: `AssertionError` for missing stable-structure section.

- [ ] **Step 3: Add assets and minimal implementation**

Copy Figma’s three high-resolution source PNGs and two exported SVGs to `src/assets/solvely-plugins`. Import and render them in a section after `.sp-core-process`, with scoped position styles matching every Figma measurement.

- [ ] **Step 4: Verify green test and production build**

Run: `npm run check:solvely-plugins && npm run build`

Expected: static check succeeds and Vite completes the production build.

### Task 2: Verify composition and publish

**Files:**
- Verify: `src/components/SolvelyPluginsPage.jsx`
- Verify: `src/components/SolvelyPluginsPage.css`

- [ ] **Step 1: Inspect the local route**

Open `/solvely-plugins`, scroll to the new section and compare image order, two pink Figma SVG arrows, stage shape, title and copy with node `262:12747`.

- [ ] **Step 2: Publish exact assets and source**

Publish source, CSS, static check, two documents, three PNGs and two SVGs to `SimmonJ-WYJ/Portfolio` `main` with message `feat: add stable structure showcase`.

- [ ] **Step 3: Verify deployment**

Run: `gh api repos/SimmonJ-WYJ/Portfolio/commits/<commit>/status --jq '.state'` and inspect the deployed route.

Expected: `success` and all three panels plus both SVG arrows render online.
