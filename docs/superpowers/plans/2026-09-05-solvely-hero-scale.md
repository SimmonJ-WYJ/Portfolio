# Solvely Hero Laptop Scale Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enlarge the desktop hero laptop while preserving its complete image.

**Architecture:** Change only the desktop max-width of the hero content. The existing responsive selectors continue to replace the desktop padding at narrower breakpoints.

**Tech Stack:** React, plain CSS, Node static assertion script.

## Global Constraints

- Desktop hero maximum width is exactly 1640px.
- The hero image uses `width: 100%` and `height: auto`.
- No mobile or tablet responsive rule changes.

---

### Task 1: Lock and implement the desktop scale

**Files:**
- Modify: `scripts/check-solvely-plugins.mjs`
- Modify: `src/components/SolvelyPluginsPage.css`

**Interfaces:**
- Consumes: `.sp-hero-content` and `.sp-hero-img` CSS selectors.
- Produces: a 1640px centred desktop hero image without crop rules.

- [ ] **Step 1: Write the failing test**

Add this assertion to `scripts/check-solvely-plugins.mjs`:

```js
assert.match(styles, /\.sp-hero-content\s*\{[\s\S]*max-width:\s*1640px[\s\S]*margin:\s*0\s+auto[\s\S]*padding:\s*0\s+110px/)
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run check:solvely-plugins`

Expected: `AssertionError` because the existing desktop max-width is 1440px.

- [ ] **Step 3: Write minimal implementation**

Replace the `.sp-hero-content` `max-width` declaration with:

```css
max-width: 1640px;
```

- [ ] **Step 4: Run test and build**

Run: `npm run check:solvely-plugins && npm run build`

Expected: static checks and production build succeed.
