# Solvely Commercial Timing Video Design

## Goal

Replace the commercial-timing module's static product image with the supplied `Commercial.mp4` while preserving the approved Figma composition, dimensions, crop, title, and body copy.

## Interaction

- The module continues to use the existing 1220 × 580 light-gray stage, laptop shell, and 810 × 502 inner screen window.
- `Commercial.mp4` is muted, inline, and loops after it becomes visible in the viewport.
- The existing `useMediaVisibility` hook starts playback when the module enters view and pauses it when it leaves, matching the previous video modules.
- The source recording's 3.35% black top band remains cropped; no horizontal crop or layout change is introduced.

## Boundaries

- Keep the current Chinese title and paragraph verbatim.
- Reuse the repository's original `src/assets/solvely-plugins/Commercial.mp4`; do not generate, transcode, or alter the recording.
- Remove only the now-unused static-image import and static-image selector. The Figma shell, window geometry, responsive spacing, and surrounding modules remain unchanged.

## Verification

- The source check must require the video import, the dedicated visibility ref/hook, video attributes, and unchanged stage/window geometry.
- `npm run check:solvely-plugins` and `npm run build` must pass.
- Local and deployed visual checks must confirm the animated content appears inside the same laptop frame without its black source header.
