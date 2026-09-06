# Solvely Screenshot-Solve Showcase Design

## Goal

Add the Figma “灵活处理临时问题” module immediately after the Canvas quiz module on `/solvely-plugins`, using the supplied `截屏解题.mp4` as the real, visibility-aware autoplaying content.

## Fixed Figma reference

- File: `y5i9X74zl66wfFNfGpMIAC`
- Node: `262:12686` (`Feature showcase`)
- Section: 1220 × 694 px; stage: 1220 × 574 px; `#eef1f5`; 32 px radius.
- Laptop shell: x=116, y=47, 988 × 659 px.
- Video viewport: x=205, y=78, 810 × 492 px.
- Title: `灵活处理临时问题`
- Body: `除了结构化的 Canvas Quiz，用户也经常只需要解决页面中的某一道题。因此保留了更加灵活的截图解题方式：用户只需框选当前内容，即可直接在侧边栏获得答案，让非结构化问题也能保持低成本的操作路径。`

## Behaviour and visual constraints

- Reuse the existing Figma-verified laptop shell without cropping its horizontal width.
- Reuse `src/assets/solvely-plugins/截屏解题.mp4`, which is byte-identical to the supplied desktop MP4.
- Autoplay only while visible, muted, looping and inline.
- Source footage has a 36 px black header; preserve full video width and shift upward by 3.35% inside the 810 × 492 viewport to remove only that source header.
- At mobile widths, keep the stage responsive with a 20 px radius and 16 px copy.
