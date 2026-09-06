# Solvely Task-First Video Showcase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the Figma task-first Canvas quiz showcase with the supplied MP4 as a visibility-aware laptop-screen recording.

**Architecture:** Add one local video asset, an independent media ref, and one `sp-task-first` section after `sp-canvas-entry`. The section reuses the existing exact Figma laptop-shell image and does not alter prior showcases.

**Tech Stack:** React, Vite, plain CSS, Node static assertions.

## Global Constraints

- Preserve Figma node `262:12679` and its 1220×574 stage.
- Video window must be x=205, y=78, w=810, h=496.
- Keep the source full-width and crop only the source top black band.
- Preserve the exact supplied Chinese heading and body.

---

### Task 1: Add a failing Figma regression check

**Files:**
- Modify: `scripts/check-solvely-plugins.mjs`

**Interfaces:**
- Consumes: source and CSS text.
- Produces: a failing `npm run check:solvely-plugins` until the video module exists.

- [ ] **Step 1: Write the failing test**

Assert that the page imports `嗅探一键解题.mp4`, uses `taskFirstVideoRef` with `useMediaVisibility`, renders the `sp-task-first` video, preserves the exact copy, and declares a `810 / 496` video window at 16.803%/13.589%.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run check:solvely-plugins`

Expected: an assertion error because `taskFirstVideoRef` is absent.

### Task 2: Add the real recording and Figma section

**Files:**
- Create: `src/assets/solvely-plugins/嗅探一键解题.mp4`
- Modify: `src/components/SolvelyPluginsPage.jsx`
- Modify: `src/components/SolvelyPluginsPage.css`

**Interfaces:**
- Consumes: provided MP4, `firstUseLaptopShell`, `useMediaVisibility`.
- Produces: the task-first section immediately after Canvas entry.

- [ ] **Step 1: Copy the provided video asset**

Copy `/Users/simmonj/Desktop/Design Files/Portfolio/Video/嗅探一键解题.mp4` to `src/assets/solvely-plugins/嗅探一键解题.mp4` without transcoding.

- [ ] **Step 2: Implement the section**

Add `taskFirstVideoRef`, its visibility hook, and a section with video attributes `autoPlay`, `muted`, `loop`, `playsInline`, and `preload="metadata"`. Add stage/shell/window CSS matching the Figma coordinates and `translateY(-3.35%)` crop.

- [ ] **Step 3: Verify and deploy**

Run: `npm run check:solvely-plugins && npm run build`

Expected: static checks and Vite production build pass, then GitHub deployment for the new commit reports `success`.
