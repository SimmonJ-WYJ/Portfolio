# Solvely Plugins onboarding video design

## Confirmed scope

Implement the existing Figma “核心功能引导” module in the live `/solvely-plugins` page. This is not a new section and it is not a Figma edit.

## Visual and content constraints

- Keep the Figma module order: it follows “我们的解决方案”.
- Preserve its 1220 × 574px, `#EEF1F5`, 32px-radius visual stage and its `overflow: hidden` crop.
- Render the Figma laptop-shell layer at `left: 116px`, `top: 47px`, `width: 988px`, and `height: 659px`. It deliberately exceeds the stage by 132px so its lower area is only partially revealed.
- Render `src/assets/solvely-plugins/用户首次进入核心功能使用.mp4` in the laptop's internal screen window at `left: 205px`, `top: 78px`, `width: 810px`, and `height: 518px`. The video must not replace the laptop shell.
- Preserve the full video width; do not use `object-fit: cover`. Translate the video upward by its 36px source black top band (17.6px at the 810px display width) so the visible frame begins at the browser's pink tab bar.
- Preserve the confirmed title and body copy exactly.

## Interaction constraints

- When the visual enters the viewport, the video starts automatically.
- It is muted, loops, plays inline, and pauses when outside the observed viewport or when the document is hidden.
- No controls are added; the video remains presentation content.
- The stage remains responsive without cropping the MP4’s UI.
