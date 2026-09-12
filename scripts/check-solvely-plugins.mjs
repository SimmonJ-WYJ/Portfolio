import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const [page, styles] = await Promise.all([
  readFile(new URL('../src/components/SolvelyPluginsPage.jsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/SolvelyPluginsPage.css', import.meta.url), 'utf8'),
])

// The page's copy lives in src/i18n/copy/solvelyPlugins.js, with Chinese as the
// source language. Flatten its zh block into one string — `**bold**` rendered
// as <strong> — so the Figma-copy assertions below keep checking the exact
// wording without depending on where it is stored.
const { default: copy } = await import('../src/i18n/copy/solvelyPlugins.js')
const flatten = (v) =>
  Array.isArray(v) ? v.map(flatten).join('\n')
  : v && typeof v === 'object' ? Object.values(v).map(flatten).join('\n')
  : String(v ?? '')
const copyZh = flatten(copy.zh).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')

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
assert.match(copyZh, /核心功能引导/,
  'The Figma module title must be preserved.')
assert.match(copyZh, /用户第一次接触插件时，并不熟悉产品入口和操作方式。首次体验的目标不是一次介绍所有功能，而是帮助用户完成安装、打开插件，并顺利进入第一次核心操作让用户尽快建立产品认知。我们将首次路径设计为：安装插件 → 打开侧边栏 → 进入 Onboarding → 理解核心操作 → 准备完成。第一次任务将安装、打开插件和首次引导连接成一条连续路径，减少用户安装完成后不知道下一步该做什么的问题/,
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
assert.match(copyZh, /将首次体验自然带入真实学习场景/,
  'Canvas-entry title must preserve the Figma copy.')
assert.match(copyZh, /页面嗅探功能会识别用户已经访问过的 Canvas 页面，并在 Onboarding 最后一步生成快捷入口。插件通过嗅探功能自动识别课程环境，一键链接Canvas学习平台，让用户从功能演示自然进入真实任务。/,
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
assert.match(copyZh, /让操作跟随用户任务，而不是让用户适应 AI/,
  'Task-first title must preserve the Figma copy.')
assert.match(copyZh, /当用户进入 Canvas quiz 后，我基于当前页面上下文直接提供任务入口，避免用户再经历打开插件、选择功能、输入 Prompt 的额外步骤；同时将逐题重复提交整合为一次连续的批量处理，并通过侧边栏保留原始题目上下文，减少页面切换和重复操作，让 AI 更自然地成为当前任务的一部分。/,
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
assert.match(copyZh, /灵活处理临时问题/,
  'Screenshot-solve title must preserve the Figma copy.')
assert.match(copyZh, /除了结构化的 Canvas Quiz，用户也经常只需要解决页面中的某一道题。因此保留了更加灵活的截图解题方式：用户只需框选当前内容，即可直接在侧边栏获得答案，让非结构化问题也能保持低成本的操作路径。/,
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
assert.match(copyZh, /从答案到题目理解和追问/,
  'Core-process main title must preserve the Figma copy.')
assert.match(copyZh, /学习任务中，用户得到答案后往往还需要确认结果、理解过程或进一步追问。因此我没有把结果设计成一次性的输出，而是围绕「结果 → 解释 → 继续探索」组织后续交互，让用户可以在当前上下文中继续完成整个学习过程。/,
  'Core-process main body must preserve the Figma copy verbatim.')
assert.match(copyZh, /快速获得核心结果[\s\S]*优先展示当前任务最重要的信息，让用户第一时间确认结果。[\s\S]*比较结果并继续追问[\s\S]*用户可以直接围绕当前题目继续提问或切换模型比较结果，不需要重新提交内容与建立上下文。[\s\S]*进一步理解过程[\s\S]*需要深入理解时，再展开 Explanation 与详细分析，避免所有信息同时出现造成阅读负担。/,
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
assert.match(copyZh, /建立稳定的信息结构/,
  'Stable-structure title must preserve the Figma copy.')
assert.match(copyZh, /随着功能和场景不断增加，我将插件保持为稳定的三层结构：顶部承载全局控制，中间根据当前页面动态呈现任务和 AI 结果，底部保持输入与持续交互。这样无论用户处在 Canvas、YouTube 还是 PDF 中，内容虽然变化，但核心操作位置与信息层级始终一致。/,
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

assert.match(page, /useMediaVisibility\(commercialVideoRef, \{ autoplay: true \}\)/,
  'Commercial-timing video must use visibility-aware autoplay.')
assert.match(page, /<section className="sp-commercial-timing">[\s\S]*<img src=\{firstUseLaptopShell\} alt="" className="sp-commercial-timing-shell" \/>[\s\S]*<video[\s\S]*ref=\{commercialVideoRef\}[\s\S]*src=\{commercial\}[\s\S]*autoPlay[\s\S]*muted[\s\S]*loop[\s\S]*playsInline[\s\S]*preload="metadata"/,
  'Commercial-timing showcase must play the supplied MP4 inside the Figma laptop shell.')
assert.match(copyZh, /先体验核心价值，再触发付费转化/,
  'Commercial-timing title must preserve the Figma copy.')
assert.match(copyZh, /首次体验阶段如果过早出现付费墙，会在用户还没有理解产品价值之前打断任务。因此我将商业化节点放在核心体验之后，让用户先真正完成解题、总结或追问，在持续需求形成后再进入订阅流程。/,
  'Commercial-timing body must preserve the Figma copy verbatim.')
assert.match(styles, /\.sp-commercial-timing-stage\s*\{[\s\S]*aspect-ratio:\s*1220\s*\/\s*580[\s\S]*background:\s*#eef1f5[\s\S]*border-radius:\s*32px/,
  'Commercial-timing stage must preserve Figma’s 1220×580 canvas, color, and corner radius.')
assert.match(styles, /\.sp-commercial-timing-shell\s*\{[\s\S]*left:\s*9\.508%[\s\S]*top:\s*8\.103%[\s\S]*width:\s*80\.984%/,
  'Commercial-timing laptop shell must preserve Figma placement.')
assert.match(styles, /\.sp-commercial-timing-video-window\s*\{[\s\S]*left:\s*16\.803%[\s\S]*top:\s*13\.448%[\s\S]*width:\s*66\.393%[\s\S]*aspect-ratio:\s*810\s*\/\s*502/,
  'Commercial-timing video window must match Figma’s 810×502 screen region.')
assert.match(styles, /\.sp-commercial-timing-video\s*\{[\s\S]*width:\s*100%[\s\S]*height:\s*auto[\s\S]*transform:\s*translateY\(-3\.35%\)/,
  'Commercial-timing video must retain its full width while cropping only the source black header.')

assert.match(page, /import moreScenariosYoutube from '\.\.\/assets\/solvely-plugins\/more-scenarios-youtube\.png'/,
  'More-scenarios showcase must import the Figma YouTube source image.')
assert.match(page, /import moreScenariosGmail from '\.\.\/assets\/solvely-plugins\/more-scenarios-gmail\.png'/,
  'More-scenarios showcase must import the Figma Gmail source image.')
assert.match(page, /import moreScenariosCanvas from '\.\.\/assets\/solvely-plugins\/more-scenarios-canvas\.png'/,
  'More-scenarios showcase must import the Figma Canvas source image.')
assert.match(page, /import moreScenariosPdf from '\.\.\/assets\/solvely-plugins\/more-scenarios-pdf\.png'/,
  'More-scenarios showcase must import the Figma PDF source image.')
assert.match(page, /<section className="sp-more-scenarios">[\s\S]*src=\{moreScenariosYoutube\}[\s\S]*src=\{moreScenariosGmail\}[\s\S]*src=\{moreScenariosCanvas\}[\s\S]*src=\{moreScenariosPdf\}/,
  'More-scenarios showcase must render all four Figma static panels.')
assert.match(copyZh, /从 Canvas 扩展到更多场景/,
  'More-scenarios title must preserve the Figma copy.')
assert.match(copyZh, /Canvas 验证了一个关键方向：相比要求用户不断告诉 AI 自己在做什么，更有效的方式是让产品读取当前上下文，并围绕当前任务提供操作。因此后续扩展并不是简单增加功能，而是将同一套交互模型（识别当前内容 → 提供对应任务 → AI 读取上下文 → 原地返回结果 → 支持继续交互）复用到更多高频场景。/,
  'More-scenarios body must preserve the Figma copy verbatim.')
assert.match(styles, /\.sp-more-scenarios-stage\s*\{[\s\S]*aspect-ratio:\s*1220\s*\/\s*668[\s\S]*background:\s*#eef1f5[\s\S]*border-radius:\s*32px/,
  'More-scenarios stage must preserve Figma’s 1220×668 canvas, color, and corner radius.')
assert.match(styles, /\.sp-more-scenarios-youtube\s*\{[\s\S]*left:\s*4\.426%[\s\S]*top:\s*0\.299%[\s\S]*width:\s*45%[\s\S]*height:\s*45\.659%/,
  'YouTube panel must preserve Figma placement.')
assert.match(styles, /\.sp-more-scenarios-gmail\s*\{[\s\S]*left:\s*52\.049%[\s\S]*top:\s*-0\.749%[\s\S]*width:\s*45\.082%[\s\S]*height:\s*46\.707%/,
  'Gmail panel must preserve Figma placement.')
assert.match(styles, /\.sp-more-scenarios-canvas\s*\{[\s\S]*left:\s*4\.426%[\s\S]*top:\s*48\.802%[\s\S]*width:\s*45%[\s\S]*height:\s*46\.707%[\s\S]*overflow:\s*hidden/,
  'Canvas panel must retain its Figma frame and crop behavior.')
assert.match(styles, /\.sp-more-scenarios-canvas img\s*\{[\s\S]*top:\s*-14\.32%[\s\S]*height:\s*114\.33%/,
  'Canvas image must retain Figma’s upward crop.')
assert.match(styles, /\.sp-more-scenarios-pdf\s*\{[\s\S]*left:\s*52\.049%[\s\S]*top:\s*49\.85%[\s\S]*width:\s*45\.082%[\s\S]*height:\s*45\.659%/,
  'PDF panel must preserve Figma placement.')

assert.match(page, /import youtubeSummaryMain from '\.\.\/assets\/solvely-plugins\/youtube-summary-main\.png'/,
  'YouTube-summary showcase must import the Figma main page image.')
assert.match(page, /import youtubeSummaryPrompt from '\.\.\/assets\/solvely-plugins\/youtube-summary-prompt\.png'/,
  'YouTube-summary showcase must import the Figma summary-generation image.')
assert.match(page, /import youtubeSummaryGenerated from '\.\.\/assets\/solvely-plugins\/youtube-summary-generated\.png'/,
  'YouTube-summary showcase must import the Figma generated-summary image.')
assert.match(page, /<section className="sp-youtube-summary">[\s\S]*src=\{youtubeSummaryMain\}[\s\S]*src=\{youtubeSummaryPrompt\}[\s\S]*src=\{youtubeSummaryGenerated\}/,
  'YouTube-summary showcase must render all Figma static images.')
assert.match(copyZh, /YouTube 视频总结，不离开视频，也能快速理解内容/,
  'YouTube-summary title must preserve the Figma copy.')
assert.match(copyZh, /在长视频学习场景中，用户最需要的是快速理解内容结构并定位重点。插件读取当前视频上下文后，在侧边栏直接生成摘要与关键节点，用户可以围绕当前视频继续提问，而无需离开播放页面重新整理信息。/,
  'YouTube-summary body must preserve the Figma copy verbatim.')
assert.match(styles, /\.sp-youtube-summary-stage\s*\{[\s\S]*aspect-ratio:\s*1220\s*\/\s*525[\s\S]*background:\s*#eef1f5[\s\S]*border-radius:\s*32px/,
  'YouTube-summary stage must preserve Figma’s 1220×525 canvas, color, and corner radius.')
assert.match(styles, /\.sp-youtube-summary-main\s*\{[\s\S]*left:\s*3\.852%[\s\S]*top:\s*5\.714%[\s\S]*width:\s*71\.803%[\s\S]*height:\s*96\.571%[\s\S]*border-radius:\s*6px/,
  'YouTube main panel must preserve Figma placement and crop frame.')
assert.match(styles, /\.sp-youtube-summary-prompt\s*\{[\s\S]*left:\s*76\.967%[\s\S]*top:\s*5\.714%[\s\S]*width:\s*19\.18%[\s\S]*height:\s*25\.333%/,
  'YouTube summary-generation panel must preserve Figma placement.')
assert.match(styles, /\.sp-youtube-summary-generated\s*\{[\s\S]*left:\s*76\.967%[\s\S]*top:\s*34\.286%[\s\S]*width:\s*19\.262%[\s\S]*height:\s*65\.714%/,
  'YouTube generated-summary panel must preserve Figma placement.')

assert.match(page, /import pdfContextReader from '\.\.\/assets\/solvely-plugins\/pdf-context-reader\.png'/,
  'PDF-context showcase must import the Figma PDF-reader image.')
assert.match(page, /import pdfContextSidebar from '\.\.\/assets\/solvely-plugins\/pdf-context-sidebar\.png'/,
  'PDF-context showcase must import the Figma context-sidebar image.')
assert.match(page, /<section className="sp-pdf-context">[\s\S]*src=\{pdfContextReader\}[\s\S]*src=\{pdfContextFlow\}[\s\S]*src=\{pdfContextSidebar\}/,
  'PDF-context showcase must render the reader, sidebar, and Figma flow arrow.')
assert.match(copyZh, /让当前文档直接成为 AI 上下文/,
  'PDF-context title must preserve the Figma copy.')
assert.match(copyZh, /阅读 PDF 时，用户无需重新上传文件或解释自己正在阅读什么，当前文档会直接进入对话上下文，用户可以围绕文档进行总结、解释、解题和自由提问，让 AI 能力自然延续到长文档阅读场景。/,
  'PDF-context body must preserve the Figma copy verbatim.')
assert.match(styles, /\.sp-pdf-context-stage\s*\{[\s\S]*aspect-ratio:\s*1220\s*\/\s*525[\s\S]*background:\s*#eef1f5[\s\S]*border-radius:\s*32px/,
  'PDF-context stage must preserve Figma’s 1220×525 canvas, color, and corner radius.')
assert.match(styles, /\.sp-pdf-context-reader\s*\{[\s\S]*left:\s*4\.754%[\s\S]*top:\s*5\.714%[\s\S]*width:\s*72\.295%[\s\S]*height:\s*88\.762%[\s\S]*border-radius:\s*6px/,
  'PDF reader must preserve Figma placement and crop frame.')
assert.match(styles, /\.sp-pdf-context-reader img\s*\{[\s\S]*top:\s*-15\.11%[\s\S]*height:\s*122\.93%/,
  'PDF reader image must preserve Figma’s upward crop.')
assert.match(styles, /\.sp-pdf-context-sidebar\s*\{[\s\S]*left:\s*78\.443%[\s\S]*top:\s*5\.714%[\s\S]*width:\s*16\.803%[\s\S]*height:\s*88\.952%[\s\S]*border-radius:\s*6px/,
  'PDF context sidebar must preserve Figma placement and crop frame.')
assert.match(styles, /\.sp-pdf-context-flow\s*\{[\s\S]*left:\s*67\.951%[\s\S]*top:\s*8\.762%[\s\S]*width:\s*10\.492%[\s\S]*height:\s*33\.905%/,
  'PDF context flow arrow must preserve Figma placement.')

assert.match(page, /const wordSelectVideoRef = useRef\(null\)/,
  'Selected-text showcase must define a dedicated video ref.')
assert.match(page, /useMediaVisibility\(wordSelectVideoRef, \{ autoplay: true \}\)/,
  'Selected-text video must autoplay when it enters the viewport.')
assert.match(page, /<section className="sp-selected-text">[\s\S]*ref=\{wordSelectVideoRef\}[\s\S]*src=\{wordSelect\}[\s\S]*autoPlay[\s\S]*muted[\s\S]*loop[\s\S]*playsInline[\s\S]*preload="metadata"/,
  'Selected-text showcase must render the supplied MP4 as muted looping inline media.')
assert.match(copyZh, /在用户当前网页位置直接提供帮助/,
  'Selected-text title must preserve the Figma copy.')
assert.match(copyZh, /对于普通网页，用户的需求往往来自某一段具体内容，因此我将操作入口直接放到选区附近。用户划选内容后即可调用解释、总结或提问，减少视线在正文与侧边栏之间反复移动，让交互尽可能贴近当前任务焦点。/,
  'Selected-text body must preserve the Figma copy verbatim.')
assert.match(styles, /\.sp-selected-text-stage\s*\{[\s\S]*aspect-ratio:\s*1220\s*\/\s*525[\s\S]*background:\s*#eef1f5[\s\S]*border-radius:\s*32px/,
  'Selected-text stage must preserve Figma’s 1220×525 canvas, color, and corner radius.')
assert.match(styles, /\.sp-selected-text-video-window\s*\{[\s\S]*left:\s*16\.885%[\s\S]*top:\s*10\.286%[\s\S]*width:\s*66\.23%[\s\S]*height:\s*95\.048%[\s\S]*border-radius:\s*12px[\s\S]*overflow:\s*hidden/,
  'Selected-text video window must preserve Figma placement and crop frame.')
assert.match(styles, /\.sp-selected-text-video\s*\{[\s\S]*transform:\s*translateY\(-3\.35%\)/,
  'Selected-text video must crop the source black header.')

assert.match(page, /import gmailReplyMain from '\.\.\/assets\/solvely-plugins\/gmail-reply-main\.png'/,
  'Gmail reply showcase must import the supplied high-resolution Gmail surface.')
assert.match(page, /<section className="sp-gmail-reply">[\s\S]*<img[\s\S]*src=\{gmailReplyMain\}[\s\S]*className="sp-gmail-reply-main"/,
  'Gmail reply stage must render the supplied Gmail surface as its base layer.')
assert.match(page, /<svg\s+className="sp-gmail-reply-flow"[\s\S]*viewBox="0 0 66 5\.7735"[\s\S]*preserveAspectRatio="none"[\s\S]*fill="#FF9292"[\s\S]*<\/svg>/,
  'Connector arrow must stay an inline vector, never a raster asset.')
assert.match(copyZh, /Gmail 邮件一键回复，读懂上下文再起草/,
  'Gmail reply title must preserve the Figma copy.')
assert.match(copyZh, /在邮件场景中，插件读取当前邮件内容与对话上下文后生成回复草稿，用户可以编辑并确认后再写入邮件。/,
  'Gmail reply body must preserve the Figma copy verbatim.')
assert.match(styles, /\.sp-gmail-reply-stage\s*\{[\s\S]*aspect-ratio:\s*1220\s*\/\s*525[\s\S]*overflow:\s*hidden[\s\S]*background:\s*#eef1f5[\s\S]*border-radius:\s*32px/,
  'Gmail reply stage must preserve Figma’s 1220×525 canvas, crop, color, and corner radius.')
assert.match(styles, /\.sp-gmail-reply-main\s*\{[\s\S]*left:\s*13\.852%[\s\S]*top:\s*8%[\s\S]*width:\s*72\.295%[\s\S]*height:\s*92%/,
  'Gmail surface must sit at its Figma placement, flush with the stage’s cropped lower edge.')
assert.match(styles, /\.sp-gmail-reply-flow\s*\{[\s\S]*left:\s*47\.049%[\s\S]*top:\s*68\.784%[\s\S]*width:\s*5\.41%[\s\S]*height:\s*1\.1%/,
  'Connector arrow must centre on the Figma y=364 baseline between both cards.')

assert.match(page, /import dialogDetailCrop from '\.\.\/assets\/solvely-plugins\/dialog-detail-crop\.png'/,
  'Dialog-detail showcase must import the crop card.')
assert.match(page, /import dialogDetailPdf from '\.\.\/assets\/solvely-plugins\/dialog-detail-pdf\.png'/,
  'Dialog-detail showcase must import the PDF card.')
assert.match(page, /import dialogDetailSummarize from '\.\.\/assets\/solvely-plugins\/dialog-detail-summarize\.png'/,
  'Dialog-detail showcase must import the summarize card.')
assert.match(page, /import dialogDetailQuiz from '\.\.\/assets\/solvely-plugins\/dialog-detail-quiz\.png'/,
  'Dialog-detail showcase must import the generate-quiz card.')
assert.match(page, /<section className="sp-dialog-detail">[\s\S]*src=\{dialogDetailCrop\}[\s\S]*src=\{dialogDetailPdf\}[\s\S]*src=\{dialogDetailSummarize\}[\s\S]*src=\{dialogDetailQuiz\}/,
  'Dialog-detail stage must render the four cards in Figma’s left-to-right order.')
assert.match(copyZh, /其他关于AI对话流的一些细节优化/,
  'Dialog-detail title must preserve the Figma copy.')
assert.match(copyZh, /内容区进一步解决AI 结果应该如何被理解。我们围绕信息获取、过程理解和结果判断，重新组织不同类型的生成内容。/,
  'Dialog-detail body must preserve the Figma copy verbatim.')
assert.match(styles, /\.sp-dialog-detail-stage\s*\{[\s\S]*aspect-ratio:\s*1220\s*\/\s*580[\s\S]*overflow:\s*hidden[\s\S]*background:\s*#eef1f5[\s\S]*border-radius:\s*32px/,
  'Dialog-detail stage must use Figma’s taller 1220×580 canvas with the shared colour and radius.')
assert.match(styles, /\.sp-dialog-detail-crop\s*\{[\s\S]*left:\s*3\.852%[\s\S]*top:\s*6\.034%[\s\S]*width:\s*22\.377%[\s\S]*height:\s*88\.276%/,
  'Crop card must preserve its Figma placement.')
assert.match(styles, /\.sp-dialog-detail-pdf\s*\{[\s\S]*left:\s*27\.049%[\s\S]*top:\s*6\.034%[\s\S]*width:\s*22\.459%[\s\S]*height:\s*88\.276%/,
  'PDF card must preserve its Figma placement.')
assert.match(styles, /\.sp-dialog-detail-summarize\s*\{[\s\S]*left:\s*50\.328%[\s\S]*top:\s*5\.862%[\s\S]*width:\s*22\.459%[\s\S]*height:\s*88\.276%/,
  'Summarize card must keep Figma’s one-pixel-higher top offset.')
assert.match(styles, /\.sp-dialog-detail-quiz\s*\{[\s\S]*left:\s*73\.607%[\s\S]*top:\s*6\.034%[\s\S]*width:\s*22\.459%[\s\S]*height:\s*88\.276%/,
  'Generate-quiz card must preserve its Figma placement.')

assert.match(page, /<section className="sp-section sp-review">[\s\S]*<h2 className="sp-section-title">\{t\.reviewTitle\}<\/h2>/,
  'Review section must reuse the shared section typography and read its title from copy.')
assert.match(copyZh, /项目复盘/,
  'Review title must preserve the Figma copy.')
assert.match(copyZh, /<strong>Onboarding 的目标并不是让用户完整了解产品<\/strong>/,
  'Review must keep Figma’s first inline emphasis.')
assert.match(copyZh, /<strong>初创公司中设计流程是灵活的<\/strong>/,
  'Review must keep Figma’s second inline emphasis.')
assert.match(copyZh, /<strong>核心任务建立最短价值路径<\/strong>/,
  'Review must keep Figma’s third inline emphasis.')
assert.match(copyZh, /而是帮助用户尽快完成一次真实任务。因此后续设计将功能介绍进一步收敛，并把首次体验更直接地连接到 Canvas 等实际场景，让用户从「知道产品能做什么」更快进入「真正使用产品」。/,
  'Review paragraph one must preserve the Figma copy verbatim.')
assert.match(copyZh, /那种完美的“理想”流程并非总是适用。需要做的是在不牺牲质量的前提下，以最快的速度完成工作。/,
  'Review paragraph two must keep Figma’s curly quotes verbatim.')
assert.match(copyZh, /再通过真实使用持续验证；与此同时，一套好的交互模型也不应该依赖不断增加新的界面，而应该能够随着新的内容和场景自然扩展。/,
  'Review paragraph three must preserve the Figma copy verbatim.')
assert.match(styles, /\.sp-review \.sp-section-text p \+ p\s*\{[^}]*margin-top:\s*26px/,
  'Review must add its paragraph rhythm in scope, leaving the shared section rules untouched.')
assert.match(styles, /\.sp-section-text p\s*\{[^}]*margin:\s*0/,
  'The shared paragraph rule must stay unchanged for the existing sections.')

assert.match(page, /import solvelyIp from '\.\.\/assets\/solvely-plugins\/solvely-ip\.webp'/,
  'CTA mascot must load the optimised animated WebP, never the 13MB source GIF.')
assert.match(page, /<section className="sp-cta">[\s\S]*<img src=\{solvelyIp\}/,
  'CTA must render the Solvely mascot.')
assert.match(copyZh, /感谢阅读，如果你想了解更多，欢迎与我交流。/,
  'CTA body must preserve the Figma copy verbatim.')
assert.match(copyZh, /同时也期待您点击下方按钮/,
  'CTA body second line must preserve the Figma copy verbatim.')
assert.match(copyZh, /欢迎下载我们的插件/,
  'CTA button label must preserve the Figma copy.')
assert.match(page, /const PLUGIN_DOWNLOAD_URL =\s*\n?\s*'https:\/\/chromewebstore\.google\.com\/detail\/solvelyai-ai-homework-tut\/aedglnfjjccpifohekdeoogffomjcikm'/,
  'CTA must point at the Chrome Web Store listing, with no locale or utm parameters.')
assert.match(page, /<a\s+className="sp-cta-btn"[\s\S]*target="_blank"[\s\S]*rel="noopener noreferrer"[\s\S]*data-cursor="link"/,
  'CTA button must open the store safely in a new tab and use the site’s custom-cursor hover affordance.')
assert.match(styles, /\.sp-cta\s*\{[^}]*background:\s*#eef1f5[^}]*border-radius:\s*32px/,
  'CTA must be Figma’s tinted rounded band.')
assert.doesNotMatch(styles, /\.sp-cta\s*\{[^}]*border-top/,
  'CTA must not keep the unused scaffolding’s divider rule.')
assert.match(styles, /\.sp-cta-btn\s*\{[^}]*padding:\s*13px\s+21px[^}]*background:\s*#007aff[^}]*border-radius:\s*12px[^}]*text-decoration:\s*underline/,
  'CTA button must match Figma’s 186×52 pill with underlined label.')

assert.match(page, /const t = useCopy\('solvelyPlugins'\)/,
  'Page must read its copy through useCopy so the EN/中文 toggle applies.')
assert.doesNotMatch(page, /<LangToggle/,
  'Detail pages carry no language toggle; the choice is made on the homepage and persisted.')
assert.match(page, /<a href="\/" className="case-back" data-cursor="link" data-cursor-label="Home">[\s\S]*<span>\{t\.back\}<\/span>/,
  'Page must offer the shared back-to-home control.')
assert.match(styles, /\.case-back\s*\{/,
  'Page stylesheet must style the shared back-to-home control.')
assert.match(page, /<Rich text=\{/,
  'Emphasised copy must render through <Rich>, never as hardcoded <strong> text.')

console.log('Solvely Plugins onboarding-video checks passed.')
