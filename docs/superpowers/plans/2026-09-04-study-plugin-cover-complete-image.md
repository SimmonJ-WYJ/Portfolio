# Study Plugin Complete Cover Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show the full Study Plugin hero image in the first homepage work card, including the metric icons and copy at its top edge.

**Architecture:** Reuse the existing full-resolution hero asset for the Study Plugin item only. Pass a per-item fit mode into the shared horizontal showcase so this card uses `object-fit: contain` on its matching light-grey background; all other project cards retain their existing cover behavior.

**Tech Stack:** React, Vite, CSS, Node assertion script.

## Global Constraints

- Study Plugin remains the first Selected Work item and continues to link to `/study-plugin`.
- The card must show the entire 3:2 asset without cropping the top statistics.
- Other project card image fitting remains `cover`.

---

### Task 1: Reuse the complete hero asset in the work card

**Files:**
- Modify: `scripts/check-study-plugin.mjs`
- Modify: `src/App.jsx`
- Modify: `src/components/HorizontalShowcase.jsx`
- Modify: `src/components/HorizontalShowcase.css`

**Interfaces:**
- Consumes: `src/assets/study-plugin/hero.png`
- Produces: a Study Plugin `coverItems` entry with `fit: 'contain'`, interpreted by `HsCard`.

- [ ] **Step 1: Write the failing source-contract assertions**

```js
assert.match(app, /import studyPluginCover from '.\\/assets\\/study-plugin\\/hero\\.png'/)
assert.match(app, /src: slug === 'StudyPlugin' \? studyPluginCover : coverModules\[k\]/)
assert.match(showcase, /hs-card-media--\\$\\{item\.fit \|\| 'cover'\\}/)
assert.match(showcaseCss, /\\.hs-card-media--contain img \{[^}]*object-fit: contain/s)
```

- [ ] **Step 2: Run the source-contract test to verify it fails**

Run: `node scripts/check-study-plugin.mjs`

Expected: failure because the homepage currently uses `StudyPlugin.jpg` and all cards use `object-fit: cover`.

- [ ] **Step 3: Implement the smallest targeted source change**

```js
import studyPluginCover from './assets/study-plugin/hero.png'
return {
  src: slug === 'StudyPlugin' ? studyPluginCover : coverModules[k],
  fit: slug === 'StudyPlugin' ? 'contain' : 'cover',
}
```

```css
.hs-card-media--contain { background: #eef1f5; }
.hs-card-media--contain img { object-fit: contain; }
```

- [ ] **Step 4: Run source and production build verification**

Run: `node scripts/check-study-plugin.mjs && npm run check:bundle && git diff --check`

Expected: source contract succeeds, build succeeds, and no whitespace errors are reported.

- [ ] **Step 5: Verify browser output and publish**

Run: inspect `/` and `/study-plugin` at desktop width, commit the correction, push `main`, then verify the live homepage card order and the live detail URL.

