# Solvely Plugins laptop-framed onboarding video Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Match Figma node `262:12667` by presenting the first-use MP4 inside the original laptop frame, with the lower portion deliberately clipped by the module stage.

**Architecture:** `SolvelyPluginsPage` continues to own the module and its `useMediaVisibility` video reference. A downloaded Figma laptop-shell PNG sits below a precisely positioned video window; the enclosing stage is the sole crop boundary.

**Tech Stack:** React 18, Vite 5, CSS, Node static regression checks.

## Global Constraints

- Keep the title and Chinese body copy verbatim.
- Keep the stage at a 1220 × 574 ratio, `#eef1f5`, and 32px radius on desktop.
- Place the laptop shell at 116/1220 left, 47/574 top, 988/1220 wide, and 659/574 high.
- Place the video window at 205/1220 left, 78/574 top, 810/1220 wide, and 518/574 high.
- Preserve the MP4 width with `height: auto`; shift it upward by 3.35% to remove only its source black top band.
- The video remains muted, looping, inline, metadata-preloaded, and visibility-autoplayed.

---

### Task 1: Build the Figma-framed media composition

**Files:**
- Create: `src/assets/solvely-plugins/first-use-laptop-shell.png`
- Modify: `src/components/SolvelyPluginsPage.jsx`
- Modify: `src/components/SolvelyPluginsPage.css`
- Modify: `scripts/check-solvely-plugins.mjs`

**Interfaces:**
- Consumes: the existing `firstUseVideoRef`, `useMediaVisibility(firstUseVideoRef, { autoplay: true })`, and `firstUse` MP4 import.
- Produces: `.sp-onboarding-shell` and `.sp-onboarding-video-window`, each positioned against `.sp-onboarding-stage`.

- [ ] **Step 1: Replace the regression assertion with the desired frame composition**

```js
assert.match(page, /import firstUseLaptopShell from '.\/\.\/assets\/solvely-plugins\/first-use-laptop-shell\.png'/)
assert.match(page, /<img src=\{firstUseLaptopShell\} alt="" className="sp-onboarding-shell" \/>/)
assert.match(page, /<div className="sp-onboarding-video-window">[\s\S]*<video/)
assert.match(styles, /\.sp-onboarding-shell\s*\{[\s\S]*left:\s*9\.508%[\s\S]*top:\s*8\.188%/)
assert.match(styles, /\.sp-onboarding-video-window\s*\{[\s\S]*left:\s*16\.803%[\s\S]*top:\s*13\.589%[\s\S]*aspect-ratio:\s*810\s*\/\s*518/)
```

- [ ] **Step 2: Run the check and confirm it fails**

Run: `npm run check:solvely-plugins`

Expected: `AssertionError` because the shell asset and nested video window do not yet exist.

- [ ] **Step 3: Download the exact Figma laptop-shell asset and render the nested composition**

```jsx
<div className="sp-onboarding-stage">
  <img src={firstUseLaptopShell} alt="" className="sp-onboarding-shell" />
  <div className="sp-onboarding-video-window">
    <video ref={firstUseVideoRef} src={firstUse} autoPlay muted loop playsInline preload="metadata" />
  </div>
</div>
```

```css
.sp-onboarding-stage { position: relative; overflow: hidden; }
.sp-onboarding-shell { left: 9.508%; top: 8.188%; width: 80.984%; }
.sp-onboarding-video-window { left: 16.803%; top: 13.589%; width: 66.393%; aspect-ratio: 810 / 518; overflow: hidden; }
.sp-onboarding-video-window video { width: 100%; height: auto; transform: translateY(-3.35%); }
```

- [ ] **Step 4: Run focused and production verification**

Run: `npm run check:solvely-plugins && npm run build`

Expected: `Solvely Plugins onboarding-video checks passed.` followed by Vite `built`.

- [ ] **Step 5: Verify local and production output**

Open `/solvely-plugins`, inspect that the black laptop frame remains visible around the playing MP4, and verify that the stage crops the excess lower 132px. Commit the verified file set to `main` and confirm the production deployment reports success.
