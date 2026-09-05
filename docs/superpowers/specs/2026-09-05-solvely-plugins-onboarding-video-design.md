# Solvely Plugins onboarding video design

## Confirmed scope

Implement the existing Figma “核心功能引导” module in the live `/solvely-plugins` page. This is not a new section and it is not a Figma edit.

## Visual and content constraints

- Keep the Figma module order: it follows “我们的解决方案”.
- Preserve its 1220px-wide, `#EEF1F5`, 32px-radius visual stage and its centered visual presentation.
- Render `src/assets/solvely-plugins/用户首次进入核心功能使用.mp4` in that stage instead of a static image.
- Preserve the confirmed title and body copy exactly.

## Interaction constraints

- When the visual enters the viewport, the video starts automatically.
- It is muted, loops, plays inline, and pauses when outside the observed viewport or when the document is hidden.
- No controls are added; the video remains presentation content.
- The stage remains responsive without cropping the MP4’s UI.
