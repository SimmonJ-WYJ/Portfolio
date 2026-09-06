import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const [page, styles] = await Promise.all([
  readFile(new URL('../src/components/SolvelyPluginsPage.jsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/SolvelyPluginsPage.css', import.meta.url), 'utf8'),
])

assert.match(styles, /\.sp-hero-content\s*\{[\s\S]*max-width:\s*1640px[\s\S]*margin:\s*0\s+auto[\s\S]*padding:\s*0\s+110px/,
  'Desktop hero must use the approved 1640px centred canvas.')
assert.match(styles, /\.sp-hero-img\s*\{[\s\S]*width:\s*100%[\s\S]*height:\s*auto/,
  'Hero laptop must preserve its full image proportion without cropping.')

assert.match(page, /useMediaVisibility\(firstUseVideoRef, \{ autoplay: true \}\)/,
  'First-use video must use visibility-aware autoplay.')
assert.match(page, /import firstUseLaptopShell from '\.\.\/assets\/solvely-plugins\/first-use-laptop-shell\.png'/,
  'Core onboarding must import the Figma laptop-shell layer.')
assert.match(page, /<img src=\{firstUseLaptopShell\} alt="" className="sp-onboarding-shell" \/>/,
  'Core onboarding must render the Figma laptop shell below the video.')
assert.match(page, /<div className="sp-onboarding-video-window">[\s\S]*<video[\s\S]*src=\{firstUse\}[\s\S]*autoPlay[\s\S]*muted[\s\S]*loop[\s\S]*playsInline[\s\S]*preload="metadata"/,
  'Core onboarding must render the first-use MP4 inside its laptop screen window.')
assert.match(page, /核心功能引导/,
  'The Figma module title must be preserved.')
assert.match(page, /用户第一次接触插件时，并不熟悉产品入口和操作方式。首次体验的目标不是一次介绍所有功能，而是帮助用户完成安装、打开插件，并顺利进入第一次核心操作让用户尽快建立产品认知。我们将首次路径设计为：安装插件 → 打开侧边栏 → 进入 Onboarding → 理解核心操作 → 准备完成。第一次任务将安装、打开插件和首次引导连接成一条连续路径，减少用户安装完成后不知道下一步该做什么的问题/,
  'The Figma body copy must be preserved verbatim.')
assert.match(styles, /\.sp-onboarding-stage\s*\{[\s\S]*background:\s*#eef1f5[\s\S]*border-radius:\s*32px/,
  'The onboarding stage must preserve the Figma canvas color and corner radius.')
assert.match(styles, /\.sp-onboarding-stage\s*\{[\s\S]*position:\s*relative[\s\S]*overflow:\s*hidden/,
  'The stage must crop the laptop shell at its lower edge.')
assert.match(styles, /\.sp-onboarding-shell\s*\{[\s\S]*left:\s*9\.508%[\s\S]*top:\s*8\.188%[\s\S]*width:\s*80\.984%/,
  'The laptop shell must retain its Figma placement.')
assert.match(styles, /\.sp-onboarding-video-window\s*\{[\s\S]*left:\s*16\.803%[\s\S]*top:\s*13\.589%[\s\S]*width:\s*66\.393%[\s\S]*aspect-ratio:\s*810\s*\/\s*518/,
  'The video window must align to the Figma laptop screen.')
assert.match(styles, /\.sp-onboarding-video-window video\s*\{[\s\S]*width:\s*100%[\s\S]*height:\s*auto[\s\S]*transform:\s*translateY\(-3\.35%\)/,
  'The video must preserve its full width and crop only its source black top band.')

assert.match(page, /useMediaVisibility\(canvasEntryVideoRef, \{ autoplay: true \}\)/,
  'Canvas-entry video must use visibility-aware autoplay.')
assert.match(page, /<section className="sp-canvas-entry">[\s\S]*<img src=\{firstUseLaptopShell\} alt="" className="sp-canvas-entry-shell" \/>[\s\S]*<video[\s\S]*ref=\{canvasEntryVideoRef\}[\s\S]*src=\{seamlessLogin\}[\s\S]*autoPlay[\s\S]*muted[\s\S]*loop[\s\S]*playsInline[\s\S]*preload="metadata"/,
  'Canvas entry must render the supplied MP4 inside its Figma laptop screen window.')
assert.match(page, /将首次体验自然带入真实学习场景/,
  'Canvas-entry title must preserve the Figma copy.')
assert.match(page, /页面嗅探功能会识别用户已经访问过的 Canvas 页面，并在 Onboarding 最后一步生成快捷入口。插件通过嗅探功能自动识别课程环境，一键链接Canvas学习平台，让用户从功能演示自然进入真实任务。/,
  'Canvas-entry body copy must preserve the Figma copy verbatim.')
assert.match(styles, /\.sp-canvas-entry-stage\s*\{[\s\S]*background:\s*#eef1f5[\s\S]*border-radius:\s*32px/,
  'Canvas-entry stage must preserve the Figma canvas color and corner radius.')
assert.match(styles, /\.sp-canvas-entry-video-window\s*\{[\s\S]*left:\s*16\.803%[\s\S]*top:\s*13\.589%[\s\S]*width:\s*66\.393%[\s\S]*aspect-ratio:\s*810\s*\/\s*496/,
  'Canvas-entry video window must match Figma’s current 810×496 screen region.')
assert.match(styles, /\.sp-canvas-entry-video-window video\s*\{[\s\S]*width:\s*100%[\s\S]*height:\s*108\.87%[\s\S]*transform:\s*translateY\(-3\.43%\)/,
  'Canvas-entry video must remove both its source black header and white footer without side cropping.')

assert.match(page, /import taskFirst from '\.\.\/assets\/solvely-plugins\/嗅探一键解题\.mp4'/,
  'Task-first showcase must import the supplied screen recording.')
assert.match(page, /useMediaVisibility\(taskFirstVideoRef, \{ autoplay: true \}\)/,
  'Task-first video must use visibility-aware autoplay.')
assert.match(page, /<section className="sp-task-first">[\s\S]*<img src=\{firstUseLaptopShell\} alt="" className="sp-task-first-shell" \/>[\s\S]*<video[\s\S]*ref=\{taskFirstVideoRef\}[\s\S]*src=\{taskFirst\}[\s\S]*autoPlay[\s\S]*muted[\s\S]*loop[\s\S]*playsInline[\s\S]*preload="metadata"/,
  'Task-first showcase must play the supplied MP4 inside the Figma laptop screen.')
assert.match(page, /让操作跟随用户任务，而不是让用户适应 AI/,
  'Task-first title must preserve the Figma copy.')
assert.match(page, /当用户进入 Canvas quiz 后，我基于当前页面上下文直接提供任务入口，避免用户再经历打开插件、选择功能、输入 Prompt 的额外步骤；同时将逐题重复提交整合为一次连续的批量处理，并通过侧边栏保留原始题目上下文，减少页面切换和重复操作，让 AI 更自然地成为当前任务的一部分。/,
  'Task-first body must preserve the Figma copy verbatim.')
assert.match(styles, /\.sp-task-first-stage\s*\{[\s\S]*background:\s*#eef1f5[\s\S]*border-radius:\s*32px/,
  'Task-first stage must preserve the Figma canvas color and corner radius.')
assert.match(styles, /\.sp-task-first-video-window\s*\{[\s\S]*left:\s*16\.803%[\s\S]*top:\s*13\.589%[\s\S]*width:\s*66\.393%[\s\S]*aspect-ratio:\s*810\s*\/\s*496/,
  'Task-first video window must match Figma’s 810×496 screen region.')
assert.match(styles, /\.sp-task-first-video-window video\s*\{[\s\S]*width:\s*100%[\s\S]*height:\s*auto[\s\S]*transform:\s*translateY\(-3\.35%\)/,
  'Task-first video must retain its full width while cropping only the source top black band.')

console.log('Solvely Plugins onboarding-video checks passed.')
