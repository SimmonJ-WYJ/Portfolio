# Solvely Core Process Video Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Render the Figma answer-to-understanding module with `Core function process.mp4` as real visibility-aware autoplaying media.

**Architecture:** Extend `SolvelyPluginsPage` with an isolated fourth laptop-video module. It reuses the established laptop shell and media hook; scoped CSS captures node `262:12706` dimensions; the static project check prevents copy, autoplay, or crop regressions.

**Tech Stack:** React, CSS, Vite, Node `assert` static checks.

## Global Constraints

- Keep all four Figma text blocks verbatim and ordered.
- Use the existing byte-identical `Core function process.mp4` asset.
- Render stage 1220/580 and video viewport 810/508 with full-width footage.
- Crop only the black video header using `translateY(-3.35%)`.

---

### Task 1: Create an executable Figma regression check

**Files:**
- Modify: `scripts/check-solvely-plugins.mjs`

**Interfaces:**
- Consumes: the planned `coreProcessVideoRef`, `.sp-core-process` JSX and CSS.
- Produces: a non-zero check until the entire Figma module exists.

- [ ] **Step 1: Write the failing test**

Add Node assertions for the visibility hook; `coreProcess` video with autoplay-safe attributes; the shared shell; all four exact Figma text blocks; stage color/radius; x/y/width viewport ratios; 810/508 aspect ratio; and upward black-header crop.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run check:solvely-plugins`

Expected: `AssertionError` describing the missing core-process module.

- [ ] **Step 3: Write the minimal JSX and CSS implementation**

Add ref and observer, append the feature after `.sp-screenshot-solve`, then add `.sp-core-process` CSS with stage, shell, 810/508 viewport, original copy hierarchy and existing mobile rules.

- [ ] **Step 4: Run all static and build checks**

Run: `npm run check:solvely-plugins && npm run build`

Expected: static check success followed by a Vite production build.

### Task 2: Verify the live feature and publish

**Files:**
- Verify: `src/components/SolvelyPluginsPage.jsx`
- Verify: `src/components/SolvelyPluginsPage.css`

- [ ] **Step 1: Inspect local visual output**

Open `/solvely-plugins`; verify the entire shell width, absent black header, active footage, 580 px stage visual proportion and all copy.

- [ ] **Step 2: Publish verified files**

Publish source, CSS, check and design documents to `SimmonJ-WYJ/Portfolio` `main` with commit message `feat: add core process showcase`.

- [ ] **Step 3: Verify Vercel deployment**

Run: `gh api repos/SimmonJ-WYJ/Portfolio/commits/<commit>/status --jq '.state'` and inspect `https://www.simmonj.com/solvely-plugins`.

Expected: `success` and rendered online module.
