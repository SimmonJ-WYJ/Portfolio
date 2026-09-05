import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const [page, styles] = await Promise.all([
  readFile(new URL('../src/components/SolvelyPluginsPage.jsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/SolvelyPluginsPage.css', import.meta.url), 'utf8'),
])

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
assert.match(styles, /\.sp-onboarding-video-window\s*\{[\s\S]*left:\s*16\.803%[\s\S]*top:\s*13\.589%[\s\S]*width:\s*66\.393%[\s\S]*aspect-ratio:\s*810\s*\/\s*536/,
  'The video window must align to the Figma laptop screen.')

console.log('Solvely Plugins onboarding-video checks passed.')
