// Solvely Plugins case study — /solvely-plugins
//
// Chinese is the source language for this page: every zh string below is the
// author's original copy, moved verbatim out of SolvelyPluginsPage.jsx. The
// English is a translation of it. Inline emphasis uses `**bold**`; see
// src/i18n/rich.js. Multi-paragraph and multi-line fields are arrays.
export default {
  en: {
    back: 'Back',
    metaRoleLabel: 'Role',
    metaRoleValue: 'Product Designer',
    metaPlatformLabel: 'Platform',
    metaPlatformValue: 'Browser Extension',

    title: 'Solvely Browser Extension: Building an AI Study Assistant from 0 to 1',
    intro: [
      'On the extension team, I owned product design for the Solvely browser extension from 0 to 1. The goal was to turn Solvely from a standalone AI tool into a study assistant that lives inside the places students actually learn.',
      "The core objective wasn't more features. It was letting the AI recognise what the student is looking at and offer solving, summarising, explaining and follow-up questions right there — without breaking their flow.",
      'I designed the complete experience: the core usage path, onboarding, the Canvas scenario, how AI results are structured, and how the model extends to new scenarios.',
    ],

    resultsTitle: 'Outcomes',
    results: [
      '**300K+ active users** across North American universities',
      'Rated **[4.6]** on the Chrome Web Store, with reviews like "saves me so much time" and "feels like having a private tutor"',
      'Automatic scene detection **removed** the need to switch manually between **study material** and **AI tools**',
      'Fits into the workflows students already have, across **Canvas, YouTube and reading material**',
      'Used widely for **understanding coursework, homework help and research** — making AI assistance effortless',
      'High engagement: students use the extension **more than 3 times** per study session',
    ],

    problemTitle: 'The Problem',
    problemBody:
      "Students' learning material is scattered across Canvas, online question banks, YouTube, PDFs and the open web. When they hit a problem, they typically copy the content, switch to a standalone AI tool, rebuild the context, then return to the original page to carry on. The constant switching breaks their rhythm — and because the AI can't see what they're actually studying, its answers drift generic and off-target.",

    solutionTitle: 'Our Solution',
    solution: [
      'We turned Solvely from a standalone web tool into a browser study assistant that understands the current page. The extension identifies where the content comes from and what it is, shows plainly which context the AI is reading, and then offers the right actions for **Canvas**, **YouTube**, **Gmail** or **PDF**. Students can solve, summarise or ask right on the page; results are organised into answer, key points and step-by-step reasoning, with context preserved for follow-ups. No more bouncing between pages or re-describing the problem — "**recognise content → start a task → understand the result → keep asking**" all happens inside one study session.',
      'So the heart of this design was never adding more AI features. It was shortening the path from **"seeing the material"** to **"getting AI help"**, and making that experience feel native in every learning scenario.',
    ],

    onboardingTitle: 'Core Feature Onboarding',
    onboardingBody:
      "A first-time user doesn't yet know where the product lives or how to operate it. The goal of the first run isn't to introduce every feature at once — it's to get them installed, into the extension, and through one core action so they build a mental model fast. We designed the first path as: install → open the sidebar → enter onboarding → grasp the core action → ready. Chaining installation, opening and first-run guidance into one continuous path removes the classic \"installed it… now what?\" dead end.",

    canvasEntryTitle: 'Carrying the First Run into a Real Study Scenario',
    canvasEntryBody:
      'Page sniffing recognises Canvas pages the user has already visited and turns them into a shortcut on the last onboarding step. By detecting the course environment automatically and linking to Canvas in one click, the extension moves the user from a feature demo straight into a real task.',

    taskFirstTitle: 'Let Actions Follow the Task, Not the Other Way Round',
    taskFirstBody:
      'Once a user opens a Canvas quiz, I surface the task entry directly from the page context — no opening the extension, picking a feature and typing a prompt. Repeated per-question submissions are consolidated into one continuous batch, and the sidebar keeps the original question context, cutting page switches and repeat work so the AI becomes a natural part of the task at hand.',

    screenshotSolveTitle: 'Handling Ad-hoc Questions Flexibly',
    screenshotSolveBody:
      'Beyond structured Canvas quizzes, users often just need one question on the page answered. So I kept a more flexible screenshot-to-solve path: draw a box around the content and the answer appears in the sidebar — keeping the cost of unstructured questions just as low.',

    coreProcessTitle: 'From Answer to Understanding and Follow-up',
    coreProcessBody:
      'In a study task, getting the answer is rarely the end — users need to confirm it, understand the working, or ask further. So rather than treating the result as a one-shot output, I organised what follows around "result → explanation → keep exploring", letting the user complete the whole learning loop without leaving the context.',
    coreProcessSteps: [
      { title: 'Get the core result fast', body: 'Lead with what matters most for the current task so the user can confirm the result immediately.' },
      { title: 'Compare and keep asking', body: 'Users can ask follow-ups on the same question or switch models to compare answers — no resubmitting, no rebuilding context.' },
      { title: 'Go deeper when needed', body: "The full Explanation and detailed analysis unfold only on request, so the reader isn't hit with everything at once." },
    ],

    stableStructureTitle: 'A Stable Information Structure',
    stableStructureBody:
      'As features and scenarios multiplied, I held the extension to a stable three-layer structure: global controls on top, task and AI results rendered dynamically for the current page in the middle, input and ongoing interaction at the bottom. Whether the user is in Canvas, YouTube or a PDF, the content changes but the position of core actions and the information hierarchy never do.',

    commercialTimingTitle: 'Deliver the Core Value First, Then Convert',
    commercialTimingBody:
      'A paywall that appears too early in the first run interrupts the task before the user has understood what the product is worth. So I placed the monetisation moment after the core experience — let them actually solve, summarise or ask first, and bring in the subscription flow once a recurring need has formed.',

    moreScenariosTitle: 'From Canvas to More Scenarios',
    moreScenariosBody:
      "Canvas validated a key direction: rather than asking users to keep telling the AI what they're doing, it's far more effective for the product to read the current context and offer actions around the task. So expansion wasn't about bolting on features — it was reusing one interaction model (recognise the content → offer the matching task → AI reads the context → return the result in place → support further interaction) across more high-frequency scenarios.",

    youtubeSummaryTitle: 'YouTube Summaries: Understand the Video Without Leaving It',
    youtubeSummaryBody:
      "In long-form video learning, what users need most is to grasp the structure quickly and find the key moments. The extension reads the current video's context and generates a summary with key timestamps right in the sidebar, so users can keep asking about the video without leaving the player to reorganise their notes.",

    pdfContextTitle: "Make the Current Document the AI's Context",
    pdfContextBody:
      "When reading a PDF, users don't need to re-upload the file or explain what they're looking at — the current document flows straight into the conversation context. They can summarise, explain, solve and ask freely around it, extending the AI naturally into long-document reading.",

    selectedTextTitle: 'Help Right Where the User Is on the Page',
    selectedTextBody:
      "On ordinary web pages, the user's need usually starts from one specific passage, so I put the actions right next to the selection. Highlight some text and you can explain, summarise or ask on the spot — less eye travel between the body and the sidebar, and the interaction stays as close as possible to the task's focus.",

    gmailReplyTitle: 'One-tap Gmail Replies That Read the Thread First',
    gmailReplyBody:
      "In email, the extension reads the current message and the thread's context before drafting a reply, which the user can edit and confirm before it's written into the message.",

    dialogDetailTitle: 'Further Refinements to the AI Conversation Flow',
    dialogDetailBody:
      'The content area goes further on how AI results should be understood. Organised around gathering information, following the process and judging the outcome, we restructured the different kinds of generated content.',

    reviewTitle: 'Project Retrospective',
    review: [
      'Reflection: after the first release, I gradually realised that **the goal of onboarding isn\'t to give users a complete understanding of the product** — it\'s to get them through one real task as fast as possible. Later iterations pared the feature introductions right back and connected the first run more directly to real scenarios like Canvas, so users move from "knowing what it can do" to "actually using it" much sooner.',
      'Also, **design process at a startup is flexible**. The perfect "ideal" process doesn\'t always apply. What matters is getting the work done at the fastest pace that doesn\'t sacrifice quality.',
      "This project also reshaped how I think about 0→1 product design: early on there's no complete data and no settled answers, so design has to **build the shortest path to value around the core task** first, then keep validating through real use. At the same time, a good interaction model shouldn't depend on endlessly adding new screens — it should scale naturally with new content and new scenarios.",
    ],

    ctaBody: ["Thanks for reading. If you'd like to know more, I'd love to talk.", 'And do tap the button below.'],
    ctaButton: 'Download the Extension',

    alts: {
      hero: 'Solvely Browser Extension',
      target: 'Target',
      videoOnboarding: 'Solvely first-use onboarding flow',
      videoCanvasEntry: 'Solvely Canvas entry flow',
      videoTaskFirst: 'Solvely task-first Canvas quiz flow',
      videoScreenshotSolve: 'Solvely screenshot solve flow',
      videoCoreProcess: 'Solvely answer understanding flow',
      videoCommercial: 'Solvely commercial conversion flow',
      videoSelectedText: 'Solvely selected-text assistance flow',
      stableEntry: 'Solvely entry actions',
      stableAnswer: 'Solvely answer and explanation',
      stableSummary: 'Solvely summary result',
      moreYoutube: 'Solvely YouTube summary',
      moreGmail: 'Solvely Gmail reply assistance',
      moreCanvas: 'Solvely Canvas text selection',
      morePdf: 'Solvely PDF assistance',
      youtubeMain: 'YouTube video with Solvely summary entry',
      youtubePrompt: 'Solvely generate video summary',
      youtubeGenerated: 'Solvely generated video summary',
      pdfReader: 'PDF reader with Solvely actions',
      pdfSidebar: 'Solvely PDF context sidebar',
      gmailMain: "Gmail thread with Solvely AI Reply summarising the sender's intent and drafting a reply",
      dialogCrop: 'Solvely sidebar solving a cropped screenshot',
      dialogPdf: 'Solvely sidebar solving a question from a PDF',
      dialogSummarize: 'Solvely sidebar summarising a web page',
      dialogQuiz: 'Solvely sidebar generating a quiz',
      mascot: 'Solvely mascot',
    },
  },

  zh: {
    back: '返回',
    metaRoleLabel: '角色',
    metaRoleValue: '产品设计师',
    metaPlatformLabel: '平台',
    metaPlatformValue: '浏览器插件端',

    title: 'Solvely 浏览器插件：从0到1构建AI学习助手',
    intro: [
      '在插件小组中，我负责 Solvely 浏览器插件从 0 到 1 的产品设计。我们希望将 Solvely 从一个独立的 AI 工具，转变为能够直接进入用户学习场景的 AI 学习助手。',
      '核心目标不是增加更多功能，而是让 AI 能够识别用户正在浏览的内容，并在不打断学习流程的情况下，直接提供解题、总结、解释与追问能力。',
      '我负责从核心使用路径、Onboarding、Canvas 场景、AI 结果结构到跨场景扩展的完整体验设计。',
    ],

    resultsTitle: '成果',
    results: [
      '在北美大学中拥有**300K+ 活跃用户**',
      'Chrome 网上应用店评分 **[4.6] 分**，反馈包括"节省了很多时间"和"感觉像有一个私人导师"',
      '自动场景检测**消除了**在**学习内容**和 **AI 工具之间**手动切换的需求',
      '无缝集成到学生现有的学习流程中，覆盖 **Canvas、YouTube 和阅读材料**',
      '广泛用于**课程理解、作业帮助和研究**——让 AI 帮助变得毫不费力',
      '高参与度，学生在每次学习时使用插件次数**超过3次以上**',
    ],

    problemTitle: '问题陈述',
    problemBody:
      '学生的学习内容分散在 Canvas、在线题库、YouTube、PDF 和网页中。当用户遇到问题时，往往需要复制内容、切换到独立 AI 工具、重新补充上下文，再返回原页面继续学习。频繁切换不仅打断学习节奏，也让 AI 无法理解用户当前正在学习的具体内容，导致回答泛化且偏离实际问题。',

    solutionTitle: '我们的解决方案',
    solution: [
      '我们将 Solvely 从独立的 Web 工具转化为能够理解当前页面的浏览器学习助手。插件自动识别页面来源与内容，并明确展示 AI 正在读取的上下文，再根据 **Canvas**、**YouTube**、**Gmail** 或 **PDF** 等场景提供对应操作。用户可以在当前页面直接完成解题、总结或提问，结果以答案、要点与分步解析进行组织，并保留上下文支持继续追问。整个过程无需反复切换页面或重新描述问题，使"**识别内容—发起任务—理解结果—继续追问**"在同一学习场景中完成。',
      '因此，这次设计的核心并不是增加更多 AI 功能，而是缩短学生从**"看到学习内容"**到**"获得 AI 帮助"**的路径，并让这套体验能够自然融入不同学习场景。',
    ],

    onboardingTitle: '核心功能引导',
    onboardingBody:
      '用户第一次接触插件时，并不熟悉产品入口和操作方式。首次体验的目标不是一次介绍所有功能，而是帮助用户完成安装、打开插件，并顺利进入第一次核心操作让用户尽快建立产品认知。我们将首次路径设计为：安装插件 → 打开侧边栏 → 进入 Onboarding → 理解核心操作 → 准备完成。第一次任务将安装、打开插件和首次引导连接成一条连续路径，减少用户安装完成后不知道下一步该做什么的问题',

    canvasEntryTitle: '将首次体验自然带入真实学习场景',
    canvasEntryBody:
      '页面嗅探功能会识别用户已经访问过的 Canvas 页面，并在 Onboarding 最后一步生成快捷入口。插件通过嗅探功能自动识别课程环境，一键链接Canvas学习平台，让用户从功能演示自然进入真实任务。',

    taskFirstTitle: '让操作跟随用户任务，而不是让用户适应 AI',
    taskFirstBody:
      '当用户进入 Canvas quiz 后，我基于当前页面上下文直接提供任务入口，避免用户再经历打开插件、选择功能、输入 Prompt 的额外步骤；同时将逐题重复提交整合为一次连续的批量处理，并通过侧边栏保留原始题目上下文，减少页面切换和重复操作，让 AI 更自然地成为当前任务的一部分。',

    screenshotSolveTitle: '灵活处理临时问题',
    screenshotSolveBody:
      '除了结构化的 Canvas Quiz，用户也经常只需要解决页面中的某一道题。因此保留了更加灵活的截图解题方式：用户只需框选当前内容，即可直接在侧边栏获得答案，让非结构化问题也能保持低成本的操作路径。',

    coreProcessTitle: '从答案到题目理解和追问',
    coreProcessBody:
      '学习任务中，用户得到答案后往往还需要确认结果、理解过程或进一步追问。因此我没有把结果设计成一次性的输出，而是围绕「结果 → 解释 → 继续探索」组织后续交互，让用户可以在当前上下文中继续完成整个学习过程。',
    coreProcessSteps: [
      { title: '快速获得核心结果', body: '优先展示当前任务最重要的信息，让用户第一时间确认结果。' },
      { title: '比较结果并继续追问', body: '用户可以直接围绕当前题目继续提问或切换模型比较结果，不需要重新提交内容与建立上下文。' },
      { title: '进一步理解过程', body: '需要深入理解时，再展开 Explanation 与详细分析，避免所有信息同时出现造成阅读负担。' },
    ],

    stableStructureTitle: '建立稳定的信息结构',
    stableStructureBody:
      '随着功能和场景不断增加，我将插件保持为稳定的三层结构：顶部承载全局控制，中间根据当前页面动态呈现任务和 AI 结果，底部保持输入与持续交互。这样无论用户处在 Canvas、YouTube 还是 PDF 中，内容虽然变化，但核心操作位置与信息层级始终一致。',

    commercialTimingTitle: '先体验核心价值，再触发付费转化',
    commercialTimingBody:
      '首次体验阶段如果过早出现付费墙，会在用户还没有理解产品价值之前打断任务。因此我将商业化节点放在核心体验之后，让用户先真正完成解题、总结或追问，在持续需求形成后再进入订阅流程。',

    moreScenariosTitle: '从 Canvas 扩展到更多场景',
    moreScenariosBody:
      'Canvas 验证了一个关键方向：相比要求用户不断告诉 AI 自己在做什么，更有效的方式是让产品读取当前上下文，并围绕当前任务提供操作。因此后续扩展并不是简单增加功能，而是将同一套交互模型（识别当前内容 → 提供对应任务 → AI 读取上下文 → 原地返回结果 → 支持继续交互）复用到更多高频场景。',

    youtubeSummaryTitle: 'YouTube 视频总结，不离开视频，也能快速理解内容',
    youtubeSummaryBody:
      '在长视频学习场景中，用户最需要的是快速理解内容结构并定位重点。插件读取当前视频上下文后，在侧边栏直接生成摘要与关键节点，用户可以围绕当前视频继续提问，而无需离开播放页面重新整理信息。',

    pdfContextTitle: '让当前文档直接成为 AI 上下文',
    pdfContextBody:
      '阅读 PDF 时，用户无需重新上传文件或解释自己正在阅读什么，当前文档会直接进入对话上下文，用户可以围绕文档进行总结、解释、解题和自由提问，让 AI 能力自然延续到长文档阅读场景。',

    selectedTextTitle: '在用户当前网页位置直接提供帮助',
    selectedTextBody:
      '对于普通网页，用户的需求往往来自某一段具体内容，因此我将操作入口直接放到选区附近。用户划选内容后即可调用解释、总结或提问，减少视线在正文与侧边栏之间反复移动，让交互尽可能贴近当前任务焦点。',

    gmailReplyTitle: 'Gmail 邮件一键回复，读懂上下文再起草',
    gmailReplyBody: '在邮件场景中，插件读取当前邮件内容与对话上下文后生成回复草稿，用户可以编辑并确认后再写入邮件。',

    dialogDetailTitle: '其他关于AI对话流的一些细节优化',
    dialogDetailBody: '内容区进一步解决AI 结果应该如何被理解。我们围绕信息获取、过程理解和结果判断，重新组织不同类型的生成内容。',

    reviewTitle: '项目复盘',
    review: [
      '反思：第一版上线后，我逐渐意识到，**Onboarding 的目标并不是让用户完整了解产品**，而是帮助用户尽快完成一次真实任务。因此后续设计将功能介绍进一步收敛，并把首次体验更直接地连接到 Canvas 等实际场景，让用户从「知道产品能做什么」更快进入「真正使用产品」。',
      '此外，在**初创公司中设计流程是灵活的**。那种完美的“理想”流程并非总是适用。需要做的是在不牺牲质量的前提下，以最快的速度完成工作。',
      '这个项目也让我重新理解了 0→1 产品设计：早期并不存在完整数据和确定答案，设计需要先围绕**核心任务建立最短价值路径**，再通过真实使用持续验证；与此同时，一套好的交互模型也不应该依赖不断增加新的界面，而应该能够随着新的内容和场景自然扩展。',
    ],

    ctaBody: ['感谢阅读，如果你想了解更多，欢迎与我交流。', '同时也期待您点击下方按钮'],
    ctaButton: '欢迎下载我们的插件',

    alts: {
      hero: 'Solvely 浏览器插件',
      target: '目标',
      videoOnboarding: 'Solvely 首次使用引导流程',
      videoCanvasEntry: 'Solvely 进入 Canvas 流程',
      videoTaskFirst: 'Solvely Canvas 测验任务优先流程',
      videoScreenshotSolve: 'Solvely 截图解题流程',
      videoCoreProcess: 'Solvely 答案理解流程',
      videoCommercial: 'Solvely 商业化转化流程',
      videoSelectedText: 'Solvely 划词辅助流程',
      stableEntry: 'Solvely 入口操作',
      stableAnswer: 'Solvely 答案与解释',
      stableSummary: 'Solvely 总结结果',
      moreYoutube: 'Solvely YouTube 总结',
      moreGmail: 'Solvely Gmail 回复辅助',
      moreCanvas: 'Solvely Canvas 划词选择',
      morePdf: 'Solvely PDF 辅助',
      youtubeMain: '带有 Solvely 总结入口的 YouTube 视频',
      youtubePrompt: 'Solvely 生成视频总结',
      youtubeGenerated: 'Solvely 生成的视频总结',
      pdfReader: '带有 Solvely 操作的 PDF 阅读器',
      pdfSidebar: 'Solvely PDF 上下文侧边栏',
      gmailMain: 'Gmail 邮件线程中 Solvely AI Reply 正在总结发件人意图并起草回复',
      dialogCrop: 'Solvely 侧边栏正在解答截图题目',
      dialogPdf: 'Solvely 侧边栏正在解答 PDF 中的题目',
      dialogSummarize: 'Solvely 侧边栏正在总结网页',
      dialogQuiz: 'Solvely 侧边栏正在生成测验',
      mascot: 'Solvely 吉祥物',
    },
  },
}
