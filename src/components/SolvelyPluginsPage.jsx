import { useEffect, useRef } from 'react'
import './SolvelyPluginsPage.css'
import { useMediaVisibility } from './useMediaVisibility.js'

// Import hero image
import heroImage from '../assets/solvely-plugins/feature-hero.png'
import targetIcon from '../assets/solvely-plugins/target-icon.svg'
import firstUseLaptopShell from '../assets/solvely-plugins/first-use-laptop-shell.png'

// Import videos
import coreProcess from '../assets/solvely-plugins/Core function process.mp4'
import canvasSolver from '../assets/solvely-plugins/Canvas solver.mp4'
import screenshot from '../assets/solvely-plugins/截屏解题.mp4'
import wordSelect from '../assets/solvely-plugins/滑词.mp4'
import firstUse from '../assets/solvely-plugins/用户首次进入核心功能使用.mp4'
import seamlessLogin from '../assets/solvely-plugins/登录后无缝继续流程.mp4'
import taskFirst from '../assets/solvely-plugins/嗅探一键解题.mp4'
import commercial from '../assets/solvely-plugins/Commercial.mp4'
import solvelyIpGif from '../assets/solvely-plugins/Solvely ip.gif'

export default function SolvelyPluginsPage() {
  const firstUseVideoRef = useRef(null)
  const canvasEntryVideoRef = useRef(null)
  const taskFirstVideoRef = useRef(null)
  const screenshotSolveVideoRef = useRef(null)
  const coreProcessVideoRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useMediaVisibility(firstUseVideoRef, { autoplay: true })
  useMediaVisibility(canvasEntryVideoRef, { autoplay: true })
  useMediaVisibility(taskFirstVideoRef, { autoplay: true })
  useMediaVisibility(screenshotSolveVideoRef, { autoplay: true })
  useMediaVisibility(coreProcessVideoRef, { autoplay: true })

  return (
    <div className="sp-page">
      {/* Hero Section - Only the laptop image */}
      <section className="sp-hero">
        <div className="sp-hero-content">
          <img src={heroImage} alt="Solvely Browser Extension" className="sp-hero-img" />
        </div>
      </section>

      {/* Main Content */}
      <div className="sp-main">

        {/* Project Meta - Outside hero, on white background */}
        <div className="sp-meta">
          <div className="sp-meta-group">
            <div className="sp-meta-label">角色</div>
            <div className="sp-meta-value"><strong>产品设计师</strong></div>
          </div>
          <div className="sp-meta-group">
            <div className="sp-meta-label">平台</div>
            <div className="sp-meta-value"><strong>浏览器插件端</strong></div>
          </div>
        </div>

        {/* Title and Introduction */}
        <section className="sp-intro">
          <h1 className="sp-title">Solvely 浏览器插件：从0到1构建AI学习助手</h1>

          <div className="sp-intro-text">
            <p>在插件小组中，我负责 Solvely 浏览器插件从 0 到 1 的产品设计。我们希望将 Solvely 从一个独立的 AI 工具，转变为能够直接进入用户学习场景的 AI 学习助手。</p>
            <p>核心目标不是增加更多功能，而是让 AI 能够识别用户正在浏览的内容，并在不打断学习流程的情况下，直接提供解题、总结、解释与追问能力。</p>
            <p>我负责从核心使用路径、Onboarding、Canvas 场景、AI 结果结构到跨场景扩展的完整体验设计。</p>
          </div>

          {/* Results Card */}
          <div className="sp-results">
            <div className="sp-results-header">
              <span className="sp-results-title">成果</span>
              <img src={targetIcon} alt="Target" className="sp-results-icon" />
            </div>
            <ul className="sp-results-list">
              <li>在北美大学中拥有<strong>300K+ 活跃用户</strong></li>
              <li>Chrome 网上应用店评分 <strong>[4.6] 分</strong>，反馈包括"节省了很多时间"和"感觉像有一个私人导师"</li>
              <li>自动场景检测<strong>消除了</strong>在<strong>学习内容</strong>和 <strong>AI 工具之间</strong>手动切换的需求</li>
              <li>无缝集成到学生现有的学习流程中，覆盖 <strong>Canvas、YouTube 和阅读材料</strong></li>
              <li>广泛用于<strong>课程理解、作业帮助和研究</strong>——让 AI 帮助变得毫不费力</li>
              <li>高参与度，学生在每次学习时使用插件次数<strong>超过3次以上</strong></li>
            </ul>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="sp-section">
          <h2 className="sp-section-title">问题陈述</h2>
          <div className="sp-section-text">
            <p>学生的学习内容分散在 Canvas、在线题库、YouTube、PDF 和网页中。当用户遇到问题时，往往需要复制内容、切换到独立 AI 工具、重新补充上下文，再返回原页面继续学习。频繁切换不仅打断学习节奏，也让 AI 无法理解用户当前正在学习的具体内容，导致回答泛化且偏离实际问题。</p>
          </div>
        </section>

        {/* Solution */}
        <section className="sp-section">
          <h2 className="sp-section-title">我们的解决方案</h2>
          <div className="sp-section-text">
            <p>我们将 Solvely 从独立的 Web 工具转化为能够理解当前页面的浏览器学习助手。插件自动识别页面来源与内容，并明确展示 AI 正在读取的上下文，再根据 <strong>Canvas</strong>、<strong>YouTube</strong>、<strong>Gmail</strong> 或 <strong>PDF</strong> 等场景提供对应操作。用户可以在当前页面直接完成解题、总结或提问，结果以答案、要点与分步解析进行组织，并保留上下文支持继续追问。整个过程无需反复切换页面或重新描述问题，使"<strong>识别内容—发起任务—理解结果—继续追问</strong>"在同一学习场景中完成。</p>
            <p>因此，这次设计的核心并不是增加更多 AI 功能，而是缩短学生从<strong>"看到学习内容"</strong>到<strong>"获得 AI 帮助"</strong>的路径，并让这套体验能够自然融入不同学习场景。</p>
          </div>
        </section>

        {/* Core onboarding — Figma's second-screen module */}
        <section className="sp-onboarding">
          <div className="sp-onboarding-stage">
            <img src={firstUseLaptopShell} alt="" className="sp-onboarding-shell" />
            <div className="sp-onboarding-video-window">
              <video
                ref={firstUseVideoRef}
                src={firstUse}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Solvely first-use onboarding flow"
              />
            </div>
          </div>
          <div className="sp-onboarding-copy">
            <h2 className="sp-onboarding-title">核心功能引导</h2>
            <p>用户第一次接触插件时，并不熟悉产品入口和操作方式。首次体验的目标不是一次介绍所有功能，而是帮助用户完成安装、打开插件，并顺利进入第一次核心操作让用户尽快建立产品认知。我们将首次路径设计为：安装插件 → 打开侧边栏 → 进入 Onboarding → 理解核心操作 → 准备完成。第一次任务将安装、打开插件和首次引导连接成一条连续路径，减少用户安装完成后不知道下一步该做什么的问题</p>
          </div>
        </section>

        {/* Canvas entry — Figma feature showcase */}
        <section className="sp-canvas-entry">
          <div className="sp-canvas-entry-stage">
            <img src={firstUseLaptopShell} alt="" className="sp-canvas-entry-shell" />
            <div className="sp-canvas-entry-video-window">
              <video
                ref={canvasEntryVideoRef}
                src={seamlessLogin}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Solvely Canvas entry flow"
              />
            </div>
          </div>
          <div className="sp-canvas-entry-copy">
            <h2 className="sp-canvas-entry-title">将首次体验自然带入真实学习场景</h2>
            <p>页面嗅探功能会识别用户已经访问过的 Canvas 页面，并在 Onboarding 最后一步生成快捷入口。插件通过嗅探功能自动识别课程环境，一键链接Canvas学习平台，让用户从功能演示自然进入真实任务。</p>
          </div>
        </section>

        {/* Task-first Canvas quiz handling — Figma feature showcase */}
        <section className="sp-task-first">
          <div className="sp-task-first-stage">
            <img src={firstUseLaptopShell} alt="" className="sp-task-first-shell" />
            <div className="sp-task-first-video-window">
              <video
                ref={taskFirstVideoRef}
                src={taskFirst}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Solvely task-first Canvas quiz flow"
              />
            </div>
          </div>
          <div className="sp-task-first-copy">
            <h2 className="sp-task-first-title">让操作跟随用户任务，而不是让用户适应 AI</h2>
            <p>当用户进入 Canvas quiz 后，我基于当前页面上下文直接提供任务入口，避免用户再经历打开插件、选择功能、输入 Prompt 的额外步骤；同时将逐题重复提交整合为一次连续的批量处理，并通过侧边栏保留原始题目上下文，减少页面切换和重复操作，让 AI 更自然地成为当前任务的一部分。</p>
          </div>
        </section>

        {/* Screenshot solve — Figma feature showcase */}
        <section className="sp-screenshot-solve">
          <div className="sp-screenshot-solve-stage">
            <img src={firstUseLaptopShell} alt="" className="sp-screenshot-solve-shell" />
            <div className="sp-screenshot-solve-video-window">
              <video
                ref={screenshotSolveVideoRef}
                src={screenshot}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Solvely screenshot solve flow"
              />
            </div>
          </div>
          <div className="sp-screenshot-solve-copy">
            <h2 className="sp-screenshot-solve-title">灵活处理临时问题</h2>
            <p>除了结构化的 Canvas Quiz，用户也经常只需要解决页面中的某一道题。因此保留了更加灵活的截图解题方式：用户只需框选当前内容，即可直接在侧边栏获得答案，让非结构化问题也能保持低成本的操作路径。</p>
          </div>
        </section>

        {/* Answer understanding — Figma feature showcase */}
        <section className="sp-core-process">
          <div className="sp-core-process-stage">
            <img src={firstUseLaptopShell} alt="" className="sp-core-process-shell" />
            <div className="sp-core-process-video-window">
              <video
                ref={coreProcessVideoRef}
                src={coreProcess}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Solvely answer understanding flow"
              />
            </div>
          </div>
          <div className="sp-core-process-copy">
            <h2 className="sp-core-process-title">从答案到题目理解和追问</h2>
            <p>学习任务中，用户得到答案后往往还需要确认结果、理解过程或进一步追问。因此我没有把结果设计成一次性的输出，而是围绕「结果 → 解释 → 继续探索」组织后续交互，让用户可以在当前上下文中继续完成整个学习过程。</p>
            <h3>快速获得核心结果</h3>
            <p>优先展示当前任务最重要的信息，让用户第一时间确认结果。</p>
            <h3>比较结果并继续追问</h3>
            <p>用户可以直接围绕当前题目继续提问或切换模型比较结果，不需要重新提交内容与建立上下文。</p>
            <h3>进一步理解过程</h3>
            <p>需要深入理解时，再展开 Explanation 与详细分析，避免所有信息同时出现造成阅读负担。</p>
          </div>
        </section>

      </div>
    </div>
  )
}
