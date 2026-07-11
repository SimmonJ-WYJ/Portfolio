# Portfolio Performance Optimization Design

## Goal

Improve initial loading, route transitions, scrolling, and media playback across the portfolio without changing its visual design, interaction model, copy, animation timing, or content.

## Current Baseline

- The production entry bundle is approximately 2.4 MB before gzip and 713 KB after gzip.
- Every case-study component is imported synchronously by `src/App.jsx`, so homepage visitors download code for all detail pages.
- The built site is approximately 114 MB because it contains multiple high-resolution images and videos.
- The homepage reveal utility runs a continuous `requestAnimationFrame` loop and repeatedly calls `getBoundingClientRect` until all reveal elements have appeared.
- Several animation and smooth-scroll components maintain independent animation loops.
- Some below-the-fold media uses eager loading or `preload="auto"` even when it is not visible.

These measurements are optimization baselines, not hard budgets for source media because media recompression is outside this project phase.

## Scope

### Included

- Route-level JavaScript and CSS code splitting.
- Deferred loading for homepage content below the first viewport.
- Visibility-aware animation lifecycle management.
- Replacement of continuous reveal scanning with `IntersectionObserver`.
- Image loading priority, lazy-loading, and asynchronous decoding improvements.
- Video preload, playback, and viewport visibility improvements.
- Build-output analysis and before/after verification.

### Excluded

- Visual redesign, layout changes, copy changes, or interaction changes.
- Removal of animations or intentional effects.
- Bulk image conversion, resizing, or quality changes.
- Video recompression or transcoding.
- Framework migration or replacement of the existing lightweight router.
- New analytics, monitoring services, or third-party runtime dependencies.

## Architecture

### Route Boundaries

Keep the existing pathname-based router, but load each case-study page through `React.lazy` and `Suspense`. The homepage remains the synchronous entry route. Each of the following routes receives an independent code chunk:

- `/freeleaps`
- `/solvely`
- `/wawawriter`
- `/windpop`
- `/asci`

The loading fallback must preserve the current page background and occupy the viewport without introducing a new visible loading design. Route navigation, browser history, scroll reset, and cursor behavior remain unchanged.

### Homepage Loading Boundary

The Hero, navigation, loader, and global interaction shell remain in the initial bundle. Homepage sections below the first viewport are separated into lazy boundaries and requested shortly before they approach the viewport. A small reusable viewport-defer component will own this behavior and reserve stable layout space to prevent content shift.

The implementation must avoid delaying content after a fast scroll. The observer root margin should start loading content before it becomes visible, and the fallback dimensions must match the existing section geometry closely enough to avoid measurable layout jumps.

### Animation Lifecycle

Animation behavior remains visually identical while visible. Work is suspended when it cannot contribute to the rendered result:

- Replace the global reveal polling loop with one `IntersectionObserver` that adds the existing `in` class and unobserves completed elements.
- Components with animation-frame loops must stop scheduling frames when their DOM region is outside the viewport or when `document.visibilityState` is not `visible`.
- Existing pointer and scroll effects keep their current response while active.
- Existing reduced-motion behavior, where present, remains intact; this phase does not introduce a different visual mode.
- Shared listeners remain passive where appropriate and are removed during component cleanup.

### Image Strategy

Images in the first viewport of each route remain eager and receive high fetch priority where they are the likely Largest Contentful Paint candidate. Below-the-fold images use native lazy loading and asynchronous decoding.

Every updated image keeps its existing source, dimensions, aspect ratio, alt text, and CSS. The work must not alter image quality or choose a different asset.

### Video Strategy

Videos keep their existing controls, autoplay, muted state, loop behavior, and presentation. Loading and playback become visibility-aware:

- Modal-only showreel media is requested only when the modal is opened.
- Below-the-fold autoplay videos use metadata or no preload instead of automatic full download.
- Autoplay videos pause after leaving the viewport and resume after re-entering it when they were not manually paused.
- The ASCI parallax video and Solvely onboarding videos retain their exact source files and aspect ratios.

## Components And Responsibilities

- `src/App.jsx`: route selection, lazy route boundaries, shared suspense fallback, homepage shell.
- `src/components/DeferredSection.jsx`: one-purpose observer boundary for loading below-the-fold homepage modules before visibility.
- `src/components/useInViewport.js`: reusable visibility signal for animation and media lifecycle control where an existing component does not already implement one.
- Existing animated components: adopt the shared visibility signal only where they currently run continuously while offscreen.
- Existing case-study components: add loading priority and video lifecycle attributes without changing markup structure beyond what performance behavior requires.
- `vite.config.js`: add deterministic chunk grouping only if route-level lazy imports alone leave large shared runtime chunks that materially reduce caching or initial-load performance.

No new runtime dependency is required.

## Data And Event Flow

1. The browser loads the homepage entry shell and first-viewport assets.
2. Case-study modules remain unrequested until their route is selected.
3. Below-the-fold homepage boundaries begin importing shortly before entering the viewport.
4. Intersection observers activate reveal, animation, and media work only when relevant.
5. Route navigation updates pathname state exactly as it does today, then `Suspense` displays a neutral full-page fallback until the selected case-study chunk resolves.
6. Browser back and forward navigation preserve the current manual scroll-reset behavior.

## Failure Handling

- A route import failure must not leave a transparent or visually broken page; the suspense fallback retains the site background.
- Native lazy-loading remains an enhancement. Content must still load in browsers that eagerly fetch images.
- If `IntersectionObserver` is unavailable, deferred sections and reveal content render immediately rather than remaining hidden.
- Video `play()` rejection is handled silently, matching current autoplay behavior, while leaving the media visible and playable.

## Verification

### Functional

- Open `/`, `/freeleaps`, `/solvely`, `/wawawriter`, `/windpop`, and `/asci` directly.
- Navigate between homepage and case studies with internal links and browser back/forward.
- Confirm scroll reset, menu, cursor, showreel, and every existing animation still behave as before.
- Confirm autoplay videos pause offscreen and resume onscreen without a visible restart or layout shift.

### Build And Bundle

- Run `npm run build` successfully.
- Confirm Vite emits separate chunks for each case-study route.
- Compare the initial JS chunk against the current baseline of approximately 2.4 MB raw and 713 KB gzip.
- Confirm the initial route no longer contains the code for every case-study component.

### Browser Performance

- Confirm there are no console errors on all routes.
- Confirm below-the-fold images are not fetched before they approach the viewport where browser behavior supports native lazy loading.
- Confirm continuous animation loops stop when the document is hidden and offscreen component loops stop where applicable.
- Perform desktop visual comparison at the current portfolio target viewport and verify no layout, spacing, typography, color, or animation-timing regressions.

## Acceptance Criteria

- Existing visual appearance and interactions are unchanged.
- Every case-study route is emitted as a separate lazy-loaded chunk.
- Initial homepage JavaScript is materially smaller than the current baseline.
- The reveal system performs no continuous frame-by-frame layout scan.
- Below-the-fold videos no longer preload their full media automatically.
- Offscreen continuous animations and autoplay videos do not consume active frame or playback work.
- All routes build, open directly, and navigate correctly without console errors.
