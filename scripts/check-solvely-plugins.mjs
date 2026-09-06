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

assert.match(page, /useMediaVisibility\(screenshotSolveVideoRef, \{ autoplay: true \}\)/,
  'Screenshot-solve video must use visibility-aware autoplay.')
assert.match(page, /<section className="sp-screenshot-solve">[\s\S]*<img src=\{firstUseLaptopShell\} alt="" className="sp-screenshot-solve-shell" \/>[\s\S]*<video[\s\S]*ref=\{screenshotSolveVideoRef\}[\s\S]*src=\{screenshot\}[\s\S]*autoPlay[\s\S]*muted[\s\S]*loop[\s\S]*playsInline[\s\S]*preload="metadata"/,
  'Screenshot-solve showcase must play the supplied MP4 inside the Figma laptop screen.')
assert.match(page, /灵活处理临时问题/,
  'Screenshot-solve title must preserve the Figma copy.')
assert.match(page, /除了结构化的 Canvas Quiz，用户也经常只需要解决页面中的某一道题。因此保留了更加灵活的截图解题方式：用户只需框选当前内容，即可直接在侧边栏获得答案，让非结构化问题也能保持低成本的操作路径。/,
  'Screenshot-solve body must preserve the Figma copy verbatim.')
assert.match(styles, /\.sp-screenshot-solve-stage\s*\{[\s\S]*background:\s*#eef1f5[\s\S]*border-radius:\s*32px/,
  'Screenshot-solve stage must preserve the Figma canvas color and corner radius.')
assert.match(styles, /\.sp-screenshot-solve-video-window\s*\{[\s\S]*left:\s*16\.803%[\s\S]*top:\s*13\.589%[\s\S]*width:\s*66\.393%[\s\S]*aspect-ratio:\s*810\s*\/\s*492/,
  'Screenshot-solve video window must match Figma’s 810×492 screen region.')
assert.match(styles, /\.sp-screenshot-solve-video-window video\s*\{[\s\S]*width:\s*100%[\s\S]*height:\s*auto[\s\S]*transform:\s*translateY\(-3\.35%\)/,
  'Screenshot-solve video must retain its full width while cropping only the source top black band.')

assert.match(page, /useMediaVisibility\(coreProcessVideoRef, \{ autoplay: true \}\)/,
  'Core-process video must use visibility-aware autoplay.')
assert.match(page, /<section className="sp-core-process">[\s\S]*<img src=\{firstUseLaptopShell\} alt="" className="sp-core-process-shell" \/>[\s\S]*<video[\s\S]*ref=\{coreProcessVideoRef\}[\s\S]*src=\{coreProcess\}[\s\S]*autoPlay[\s\S]*muted[\s\S]*loop[\s\S]*playsInline[\s\S]*preload="metadata"/,
  'Core-process showcase must play the supplied MP4 inside the Figma laptop screen.')
assert.match(page, /从答案到题目理解和追问/,
  'Core-process main title must preserve the Figma copy.')
assert.match(page, /学习任务中，用户得到答案后往往还需要确认结果、理解过程或进一步追问。因此我没有把结果设计成一次性的输出，而是围绕「结果 → 解释 → 继续探索」组织后续交互，让用户可以在当前上下文中继续完成整个学习过程。/,
  'Core-process main body must preserve the Figma copy verbatim.')
assert.match(page, /快速获得核心结果[\s\S]*优先展示当前任务最重要的信息，让用户第一时间确认结果。[\s\S]*比较结果并继续追问[\s\S]*用户可以直接围绕当前题目继续提问或切换模型比较结果，不需要重新提交内容与建立上下文。[\s\S]*进一步理解过程[\s\S]*需要深入理解时，再展开 Explanation 与详细分析，避免所有信息同时出现造成阅读负担。/,
  'Core-process supporting Figma copy must preserve its four text blocks and order.')
assert.match(styles, /\.sp-core-process-stage\s*\{[\s\S]*aspect-ratio:\s*1220\s*\/\s*580[\s\S]*background:\s*#eef1f5[\s\S]*border-radius:\s*32px/,
  'Core-process stage must preserve Figma’s 1220×580 canvas, color, and corner radius.')
assert.match(styles, /\.sp-core-process-video-window\s*\{[\s\S]*left:\s*16\.803%[\s\S]*top:\s*13\.448%[\s\S]*width:\s*66\.393%[\s\S]*aspect-ratio:\s*810\s*\/\s*508/,
  'Core-process video window must match Figma’s 810×508 screen region.')
assert.match(styles, /\.sp-core-process-video-window video\s*\{[\s\S]*width:\s*100%[\s\S]*height:\s*auto[\s\S]*transform:\s*translateY\(-3\.35%\)/,
  'Core-process video must retain its full width while cropping only the source top black band.')

assert.match(page, /import stableEntry from '\.\.\/assets\/solvely-plugins\/stable-structure-entry\.png'/,
  'Stable-structure showcase must import the original Figma entry image.')
assert.match(page, /import stableAnswer from '\.\.\/assets\/solvely-plugins\/stable-structure-answer\.png'/,
  'Stable-structure showcase must import the original Figma answer image.')
assert.match(page, /import stableSummary from '\.\.\/assets\/solvely-plugins\/stable-structure-summary\.png'/,
  'Stable-structure showcase must import the original Figma summary image.')
assert.match(page, /import stableFlowArrow from '\.\.\/assets\/solvely-plugins\/stable-structure-flow\.svg'/,
  'Stable-structure showcase must import the original long Figma SVG arrow.')
assert.match(page, /import stableShortArrow from '\.\.\/assets\/solvely-plugins\/stable-structure-short-arrow\.svg'/,
  'Stable-structure showcase must import the original short Figma SVG arrow.')
assert.match(page, /<section className="sp-stable-structure">[\s\S]*src=\{stableEntry\}[\s\S]*src=\{stableAnswer\}[\s\S]*src=\{stableSummary\}[\s\S]*src=\{stableFlowArrow\}[\s\S]*src=\{stableShortArrow\}/,
  'Stable-structure showcase must render all Figma panels and both source SVG arrows.')
assert.match(page, /建立稳定的信息结构/,
  'Stable-structure title must preserve the Figma copy.')
assert.match(page, /随着功能和场景不断增加，我将插件保持为稳定的三层结构：顶部承载全局控制，中间根据当前页面动态呈现任务和 AI 结果，底部保持输入与持续交互。这样无论用户处在 Canvas、YouTube 还是 PDF 中，内容虽然变化，但核心操作位置与信息层级始终一致。/,
  'Stable-structure body must preserve the Figma copy verbatim.')
assert.match(styles, /\.sp-stable-structure-stage\s*\{[\s\S]*aspect-ratio:\s*1220\s*\/\s*580[\s\S]*background:\s*#eef1f5[\s\S]*border-radius:\s*32px/,
  'Stable-structure stage must preserve Figma’s 1220×580 canvas, color, and corner radius.')
assert.match(styles, /\.sp-stable-structure-panel\s*\{[\s\S]*top:\s*10%[\s\S]*width:\s*20\.902%[\s\S]*height:\s*83\.448%[\s\S]*border-radius:\s*10px/,
  'Stable-structure panels must retain Figma’s 255×484 geometry and radius.')
assert.match(styles, /\.sp-stable-structure-entry\s*\{[\s\S]*left:\s*14\.344%[\s\S]*\.sp-stable-structure-answer\s*\{[\s\S]*left:\s*39\.508%[\s\S]*\.sp-stable-structure-summary\s*\{[\s\S]*left:\s*64\.672%/,
  'Stable-structure panels must preserve Figma’s left-to-right positions.')
assert.match(styles, /\.sp-stable-structure-flow-arrow\s*\{[\s\S]*left:\s*18\.702%[\s\S]*top:\s*3\.276%[\s\S]*width:\s*56\.953%[\s\S]*height:\s*44\.397%/,
  'Stable-structure flow arrow must retain Figma’s original SVG placement.')
assert.match(styles, /\.sp-stable-structure-short-arrow\s*\{[\s\S]*left:\s*28\.852%[\s\S]*top:\s*44\.31%[\s\S]*width:\s*10\.492%[\s\S]*height:\s*0\.995%/,
  'Stable-structure short arrow must retain Figma’s original SVG placement.')

console.log('Solvely Plugins onboarding-video checks passed.')
