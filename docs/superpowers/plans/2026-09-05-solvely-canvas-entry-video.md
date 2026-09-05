# Solvely Canvas Entry Video Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the Figma Canvas-entry showcase immediately after core onboarding, using the supplied MP4 as a visibility-aware autoplaying laptop-screen video.

**Architecture:** Extend the existing `SolvelyPluginsPage` with a second media ref and a single independent `sp-canvas-entry` section. Reuse the already-exported Figma laptop shell; only the 810×493 screen viewport contains the Canvas MP4 and hides its source top black band.

**Tech Stack:** React, Vite, plain CSS, Node static assertion script.

## Global Constraints

- Preserve the Figma frame `262:12672`: 1220×574, `#eef1f5`, 32px radius.
- Preserve Figma title and body copy verbatim.
- Video window position must be x=205, y=78, w=810, h=493 within the 1220×574 stage.
- The MP4 must autoplay only while visible, muted, looped, and inline.

---

### Task 1: Lock Figma requirements with a static regression check

**Files:**
- Modify: `scripts/check-solvely-plugins.mjs`

**Interfaces:**
- Consumes: text from `src/components/SolvelyPluginsPage.jsx` and `src/components/SolvelyPluginsPage.css`.
- Produces: `npm run check:solvely-plugins` failure until the Canvas module exists.

- [ ] **Step 1: Write the failing test**

Add assertions requiring `canvasEntryVideoRef`, `useMediaVisibility(canvasEntryVideoRef, { autoplay: true })`, `seamlessLogin`, the exact Chinese title/body, and `.sp-canvas-entry-video-window` using `aspect-ratio: 810 / 493`.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run check:solvely-plugins`

Expected: assertion failure that the Canvas-entry video module is missing.

- [ ] **Step 3: Write minimal implementation**

Do not implement in this task; Task 2 supplies the production code.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run check:solvely-plugins`

Expected: pass after Task 2.

### Task 2: Add the Figma Canvas-entry showcase

**Files:**
- Modify: `src/components/SolvelyPluginsPage.jsx`
- Modify: `src/components/SolvelyPluginsPage.css`

**Interfaces:**
- Consumes: `firstUseLaptopShell`, `seamlessLogin`, `useMediaVisibility`.
- Produces: `<section className="sp-canvas-entry">` after `.sp-onboarding`.

- [ ] **Step 1: Confirm the regression check is failing**

Run: `npm run check:solvely-plugins`

Expected: failure from Task 1 before component code is added.

- [ ] **Step 2: Write minimal implementation**

Add a `canvasEntryVideoRef`; pass it to `useMediaVisibility`. Add the Figma shell and video viewport after onboarding, with the exact copy. In CSS, translate the Figma geometry to percentage placement: shell 9.508%/8.188%/80.984%; viewport 16.803%/13.589%/66.393%, with the 810/493 ratio and `translateY(-3.35%)` to remove the MP4 source’s top black band.

- [ ] **Step 3: Run test to verify it passes**

Run: `npm run check:solvely-plugins`

Expected: `Solvely Plugins onboarding-video checks passed.`

- [ ] **Step 4: Build and deploy**

Run: `npm run build`, then create a GitHub commit from the changed files and fast-forward `main`. Confirm the GitHub deployment status for that SHA is `success`.
