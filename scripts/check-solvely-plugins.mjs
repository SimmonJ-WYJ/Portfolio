import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const [page, styles] = await Promise.all([
  readFile(new URL('../src/components/SolvelyPluginsPage.jsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/SolvelyPluginsPage.css', import.meta.url), 'utf8'),
])

assert.match(page, /useMediaVisibility\(firstUseVideoRef, \{ autoplay: true \}\)/,
  'First-use video must use visibility-aware autoplay.')
assert.match(page, /<section className="sp-onboarding">[\s\S]*<video[\s\S]*src=\{firstUse\}[\s\S]*autoPlay[\s\S]*muted[\s\S]*loop[\s\S]*playsInline[\s\S]*preload="metadata"/,
  'Core onboarding must render the first-use MP4 as an inline, muted looping video.')
assert.match(page, /核心功能引导/,
  'The Figma module title must be preserved.')
assert.match(page, /用户第一次接触插件时，并不熟悉产品入口和操作方式。首次体验的目标不是一次介绍所有功能，而是帮助用户完成安装、打开插件，并顺利进入第一次核心操作让用户尽快建立产品认知。我们将首次路径设计为：安装插件 → 打开侧边栏 → 进入 Onboarding → 理解核心操作 → 准备完成。第一次任务将安装、打开插件和首次引导连接成一条连续路径，减少用户安装完成后不知道下一步该做什么的问题/,
  'The Figma body copy must be preserved verbatim.')
assert.match(styles, /\.sp-onboarding-stage\s*\{[\s\S]*background:\s*#eef1f5[\s\S]*border-radius:\s*32px/,
  'The onboarding stage must preserve the Figma canvas color and corner radius.')

console.log('Solvely Plugins onboarding-video checks passed.')
