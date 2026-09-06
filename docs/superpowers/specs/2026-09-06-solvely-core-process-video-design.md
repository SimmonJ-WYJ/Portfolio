# Solvely Core Process Video Showcase Design

## Goal

Add the Figma “从答案到题目理解和追问” module after the screenshot-solve showcase on `/solvely-plugins`, playing the supplied `Core function process.mp4` when the module is visible.

## Fixed Figma reference

- File: `y5i9X74zl66wfFNfGpMIAC`
- Node: `262:12706` (`Feature showcase`)
- Stage: 1220 × 580 px, `#eef1f5`, 32 px radius.
- Laptop shell: x=116, y=47, 988 × 659 px.
- Video viewport: x=205, y=78, 810 × 508 px.
- Main title: `从答案到题目理解和追问`
- Main body: `学习任务中，用户得到答案后往往还需要确认结果、理解过程或进一步追问。因此我没有把结果设计成一次性的输出，而是围绕「结果 → 解释 → 继续探索」组织后续交互，让用户可以在当前上下文中继续完成整个学习过程。`
- Supporting Figma copy: `快速获得核心结果` / `优先展示当前任务最重要的信息，让用户第一时间确认结果。`; `比较结果并继续追问` / `用户可以直接围绕当前题目继续提问或切换模型比较结果，不需要重新提交内容与建立上下文。`; `进一步理解过程` / `需要深入理解时，再展开 Explanation 与详细分析，避免所有信息同时出现造成阅读负担。`

## Behaviour and visual constraints

- The supplied desktop MP4 and project asset are byte-identical; reuse the committed asset.
- Use `useMediaVisibility`, `autoPlay`, `muted`, `loop`, `playsInline`, and `preload="metadata"`.
- Keep the 1660 × 1080 recording’s full width and translate it up by 3.35% to remove its 36 px black header.
- Preserve the Figma shell placement, stage clipping, text order and 18 px/1.8 text rhythm. At mobile widths, stage radius is 20 px and copy uses 16 px text.
