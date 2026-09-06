# Solvely Task-First Video Showcase Design

## Goal

Add the Figma `262:12679` showcase after the Canvas-entry module, using the supplied `嗅探一键解题.mp4` as the real screen recording.

## Figma Geometry

- Stage: 1220×574, `#eef1f5`, 32px radius, overflow clipped.
- Laptop shell: x=116, y=47, w=988, h=659; reuse the exact existing Figma shell asset.
- Video: x=205, y=78, w=810, h=496; the Figma content frame’s white trailing area sits below the 574px stage and is not visible.
- Crop only the source’s top black band; preserve the full width of the recording.

## Content and Behaviour

- Heading: `让操作跟随用户任务，而不是让用户适应 AI`.
- Body: `当用户进入 Canvas quiz 后，我基于当前页面上下文直接提供任务入口，避免用户再经历打开插件、选择功能、输入 Prompt 的额外步骤；同时将逐题重复提交整合为一次连续的批量处理，并通过侧边栏保留原始题目上下文，减少页面切换和重复操作，让 AI 更自然地成为当前任务的一部分。`
- The muted MP4 loops inline and plays only when its viewport is visible.
