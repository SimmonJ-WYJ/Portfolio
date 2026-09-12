// Solvely AI case study — /solvely
//
// English is the source language for this page: every en string below is the
// author's original copy, moved verbatim out of SolvelyPage.jsx. The Chinese is
// a translation of it.
//
// Deliberately NOT in this file — kept identical in both languages inside the
// component, because they depict the product itself rather than narrate the
// design: the sidebar mockups (Generate quiz / Summarize cards, the Grok
// article and TechCrunch link, the geometry question), the product's own
// landing-page blocks ("Your AI Study BFF", "More Than Just Problem-Solving",
// "Adapts to Your Own Study Schedule"), and the real user comments quoted
// verbatim from the store.
export default {
  en: {
    back: 'Back',
    year: '2025',

    heroQuote: {
      lead: 'Solvely is an all-in-one AI study platform,',
      muted: 'offering everything from homework explanations to AI-powered note-taking and YouTube summaries,',
      tail: 'every feature you need.',
    },
    features: [
      { title: 'Homework Help', text: 'Accurately solve any homework problem, from K-12 to graduate level' },
      { title: 'Quiz Maker', text: 'Transform text into a helpful and fully customized online quiz in just a few minutes' },
      { title: 'Essay Writer', text: 'Works with you to create well-researched essays and overcome writer’s block' },
      { title: 'AI Note Taker', text: 'Transcribe class audio into structured notes, with AI-powered Q&A based on your content' },
    ],

    metaOverview: 'Overview',
    metaProject: 'Project',
    overviewBody:
      'The platform enhances study efficiency through personalized AI tools, automatically summarized materials, and real-time Q&A. It adapts to each student’s learning pace, making studying more interactive, efficient, and enjoyable.',
    metaFacts: ['Project / Solvely', 'Category / AI Study Platform, EdTech', 'Location / San Francisco, US', 'Date / 2025'],

    flowTitle: 'How I work',
    flowIntro: 'I read the data, shape the UX around it, validate the flow in Dify, then ship the spec to development.',
    flowStages: ['Data', 'Design', 'Delivery'],
    flowPills: ['Data Analysis', 'User Insight', 'UX Design', 'Dify Validation', 'Design Output', 'Dev Handoff'],

    painTitle: 'User Pain Points',
    painQuotes: [
      {
        name: 'Jane Cooper', role: 'High School Student',
        parts: [
          { t: '“When I run into a tough question,', gray: true },
          { t: ' I have to switch tabs to search for the answer ', gray: false },
          { t: '— it totally breaks my study flow.”', gray: true },
        ],
      },
      {
        name: 'Kevin', role: 'College Student',
        parts: [
          { t: '“While researching, I keep jumping between pages just to understand one concept', gray: false },
          { t: ' — it’s tiring and inefficient.”', gray: true },
        ],
      },
      {
        name: 'Emma', role: 'International Student',
        parts: [
          { t: '“', gray: false },
          { t: 'Reading English materials is hard. ', gray: true },
          { t: 'I’m constantly copying and pasting into translators, and it makes learning feel fragmented.”', gray: false },
        ],
      },
    ],

    logicTitle: 'Logic Flow Design',
    logicBody:
      'While analyzing the existing workflow, I found a large number of if/else conditions. The system uses different prompts to identify user inputs, and the backend then generates the appropriate essay format. I structured the design around this workflow to ',
    logicHighlight: 'define the process and interface more clearly.',

    extensionTitle: 'Solvely Extension',
    extensionBody: 'The Solvely browser extension is your smart learning companion, available wherever you study online.',
    extensionTagline: 'It helps you stay focused',
    extensionTail: ' — no more switching tabs or losing momentum.',

    onboardingTitle: 'Onboarding Iteration Design',
    onboardingProblemTitle: 'Problem Identification',
    onboardingProblems: [
      'Over 60% of new users skipped the onboarding process.',
      'Core feature visibility was low, with an average click rate below 25%.',
    ],
    onboardingBefore: 'Before',
    onboardingBeforeText: 'The onboarding uses animation effects, but it fails to motivate users to complete the entire onboarding flow.',
    onboardingAfter: 'After',
    onboardingAfterText:
      'We adopted an interactive onboarding approach after conducting multiple rounds of feasibility testing with the frontend team, effectively reducing implementation costs.',
    onboardingStrategyTitle: 'Iteration Strategy',
    onboardingStrategies: [
      'Introduced interactive onboarding with click prompts and real-time feedback.',
      'Used visual focus and subtle animations to highlight key actions.',
      'Redesigned onboarding into step-by-step guidance to sustain user engagement.',
    ],
    resultsTitle: 'Results & Validation',
    resultsLegend: ['Core feature click-through', 'Next-day user retention improved', 'Development efficiency increased'],

    sourceIntro: [
      'The input feature accepts content from multiple sources — web pages, PDFs, and text.',
      'The system automatically detects the content type and generates the most relevant learning actions, such as:',
    ],
    sourceCapabilities: [
      'Extracting questions from web pages and generating quizzes',
      'Summarizing long articles automatically',
      'Recognizing academic content from PDFs and creating questions',
    ],
    sourceOutcome: 'Users can complete the entire learning process in one click without manual setup.',

    memberTitle: 'Member Page',
    memberBackgroundLabel: 'Background',
    memberBackground: 'Users lost interest in the membership page after generating multiple answers, leading to a low conversion rate.',
    memberSolutionLabel: 'Solution',
    memberSolutions: [
      'Triggered membership popup after 5+ generations.',
      'Used Gaussian blur to highlight the paywall.',
      'Added a blurred preview to encourage curiosity and clicks.',
    ],
    memberCtr: ['Click-through rate', 'increased from 5.6% → 7.1%'],

    writerTitle: 'Writer',
    writerSub: ['Providing writing support', 'for university students across the world'],
    writerBody:
      'By analyzing the AI workflow and prompt logic, users can simply input a title and format to generate high-quality, professional essays. The workflow and interaction design were refined to ensure a smooth and intuitive writing experience.',
    writerFeatures: [
      { title: 'AI Autocomplete', body: "Starting from a blank page, smart autocomplete helps you overcome writer's block and effortlessly enhances your writing process." },
      { title: 'In-text Citations', body: 'Create accurate citations in APA, MLA, Harvard, Chicago, or IEEE style.' },
      { title: 'Paraphrase and Rewrite', body: 'Solvely allows you to rewrite a paragraph with just one click. Our editing feature is designed to be lightweight and intelligent, helping you save time.' },
    ],

    aiNoteTitle: 'AI Note',
    aiNoteSub: 'Best AI Note Taker for Students',
    aiNoteBody:
      'From recording and transcription to intelligent summarization and insight generation, every lecture and piece of course content is transformed into concise, structured, and easy-to-read notes, enabling you to quickly review key concepts, organize information effortlessly, strengthen long-term retention, and study more effectively with the support of AI-powered learning assistance.',

    quizTitle: 'AI Quiz Generator',
    quizSub: 'Personalized learning made easy with an AI quiz generator.',
    quizBody: 'Use Solvely AI to transform text into a comprehensive quiz in seconds, complete with answers and explanations.',
    quizVibeTitle: 'Quiz Vibe Selector',
    quizVibeGoal: 'Goal: Make quiz setup more engaging and intuitive.',
    quizVibeLogicLabel: 'Design Logic:',
    quizVibeLogic: [
      'Use expressive characters and colors to represent difficulty levels — from CHILL (easy) to SAVAGE SOLVI (hard).',
      'Match each vibe with a clear quiz length (5–20 questions).',
    ],

    moreFeatures: [
      { title: 'Quiz Maker', text: 'Turn your learning materials or goals into auto-graded quizzes with instant feedback, ideal for test preparation.' },
      { title: 'Essay Writer', text: 'Create fully developed essays with real citations.' },
      { title: 'AI Note', text: 'Transcribe class audio into structured notes, with AI-powered Q&A based on your content.' },
    ],

    commentsTitle: ['Real Comments from', 'Students and Parents'],

    alts: {
      hero: 'Solvely — take a picture and get instant homework help',
      logicFlow: 'Logic flow diagram — if/else conditions mapping inputs to essay outputs',
      extensionVideo: 'Solvely extension — select your question area',
      onboardingBefore: 'Onboarding — before',
      onboardingVideo: 'Onboarding interaction demo',
      memberPaywall: 'Solvely membership paywall',
      bffCapture: 'Solvely capture',
      bffThinking: 'Solvely thinking',
      bffAnswer: 'Solvely answer',
      bffAnswers: 'Solvely answers',
      adapts: 'Solvely — light and dark mode AI homework helper',
      writerLaptop: 'Solvely Writer in a laptop',
      writerToolbar: 'Writer editor toolbar',
      writerScreens: 'Solvely Writer workflow screens',
      lecture: 'Generate AI notes from your live lectures',
      lectureMobile: 'Your AI Lecture Assistant — mobile app screens',
      quizDecks: 'Solvely quiz decks and study modes',
      quizVibe: 'Pick your quiz vibe',
      specFont: 'Font Specification — Website Typography',
      specColor: 'Color Specification',
    },
  },

  zh: {
    back: '返回',
    year: '2025',

    heroQuote: {
      lead: 'Solvely 是一个一站式 AI 学习平台，',
      muted: '从作业讲解、AI 笔记到 YouTube 视频总结，',
      tail: '你需要的功能都在这里。',
    },
    features: [
      { title: '作业辅导', text: '精准解答从 K-12 到研究生阶段的任何作业题' },
      { title: '测验生成', text: '几分钟内把文本变成一份实用且完全可定制的在线测验' },
      { title: '论文写作', text: '与你协作完成有据可查的论文，突破写作瓶颈' },
      { title: 'AI 笔记', text: '把课堂录音转写成结构化笔记，并基于你的内容进行 AI 问答' },
    ],

    metaOverview: '概览',
    metaProject: '项目',
    overviewBody:
      '平台通过个性化 AI 工具、自动整理的学习资料和实时问答提升学习效率，并适配每位学生的学习节奏，让学习更互动、更高效、也更有乐趣。',
    metaFacts: ['项目 / Solvely', '类别 / AI 学习平台，教育科技', '地点 / 美国旧金山', '日期 / 2025'],

    flowTitle: '我的工作方式',
    flowIntro: '我从数据出发，围绕数据塑造体验，在 Dify 中验证流程，再把设计规范交付开发。',
    flowStages: ['数据', '设计', '交付'],
    flowPills: ['数据分析', '用户洞察', 'UX 设计', 'Dify 验证', '设计产出', '开发交接'],

    painTitle: '用户痛点',
    painQuotes: [
      {
        name: 'Jane Cooper', role: '高中生',
        parts: [
          { t: '“遇到难题的时候，', gray: true },
          { t: '我得切到别的标签页去搜答案', gray: false },
          { t: '——学习状态一下就断了。”', gray: true },
        ],
      },
      {
        name: 'Kevin', role: '大学生',
        parts: [
          { t: '“做研究时，为了弄懂一个概念我要在好几个页面之间来回跳', gray: false },
          { t: '——又累又低效。”', gray: true },
        ],
      },
      {
        name: 'Emma', role: '留学生',
        parts: [
          { t: '“', gray: false },
          { t: '读英文材料很吃力。', gray: true },
          { t: '我一直在往翻译工具里复制粘贴，学习变得支离破碎。”', gray: false },
        ],
      },
    ],

    logicTitle: '逻辑流程设计',
    logicBody:
      '在分析现有工作流时，我发现了大量 if/else 条件判断。系统用不同的 prompt 识别用户输入，后端再生成对应的论文格式。我围绕这条工作流来组织设计，',
    logicHighlight: '让流程和界面定义得更清晰。',

    extensionTitle: 'Solvely 浏览器插件',
    extensionBody: 'Solvely 浏览器插件是你的智能学习伙伴，无论在哪里在线学习都随时可用。',
    extensionTagline: '帮你保持专注',
    extensionTail: '——不再切换标签页，也不再丢失节奏。',

    onboardingTitle: 'Onboarding 迭代设计',
    onboardingProblemTitle: '问题识别',
    onboardingProblems: [
      '超过 60% 的新用户跳过了引导流程。',
      '核心功能曝光度低，平均点击率不足 25%。',
    ],
    onboardingBefore: '改版前',
    onboardingBeforeText: '引导使用了动画效果，却没能推动用户走完整个引导流程。',
    onboardingAfter: '改版后',
    onboardingAfterText:
      '在与前端团队进行多轮可行性测试后，我们采用了可交互的引导方式，有效降低了实现成本。',
    onboardingStrategyTitle: '迭代策略',
    onboardingStrategies: [
      '引入带点击提示和实时反馈的交互式引导。',
      '用视觉焦点和轻量动效突出关键操作。',
      '把引导重新设计为分步指引，维持用户投入。',
    ],
    resultsTitle: '结果与验证',
    resultsLegend: ['核心功能点击率', '次日留存提升', '开发效率提升'],

    sourceIntro: [
      '输入功能支持多种来源的内容——网页、PDF 和文本。',
      '系统会自动识别内容类型，并生成最相关的学习操作，例如：',
    ],
    sourceCapabilities: [
      '从网页中提取题目并生成测验',
      '自动总结长文章',
      '识别 PDF 中的学术内容并出题',
    ],
    sourceOutcome: '用户无需手动配置，一键即可完成整个学习流程。',

    memberTitle: '会员页',
    memberBackgroundLabel: '背景',
    memberBackground: '用户在多次生成答案后对会员页失去兴趣，导致转化率偏低。',
    memberSolutionLabel: '方案',
    memberSolutions: [
      '在生成 5 次以上后触发会员弹窗。',
      '用高斯模糊突出付费墙。',
      '增加模糊预览，激发好奇心与点击。',
    ],
    memberCtr: ['点击率', '从 5.6% 提升至 7.1%'],

    writerTitle: 'Writer',
    writerSub: ['为全球大学生', '提供写作支持'],
    writerBody:
      '通过分析 AI 工作流和 prompt 逻辑，用户只需输入标题和格式，就能生成高质量的专业论文。工作流与交互设计经过打磨，确保写作体验流畅直观。',
    writerFeatures: [
      { title: 'AI 自动补全', body: '从一页空白开始，智能补全帮你突破写作瓶颈，轻松推进写作过程。' },
      { title: '文内引用', body: '按 APA、MLA、Harvard、Chicago 或 IEEE 格式生成准确的引用。' },
      { title: '改写与重述', body: 'Solvely 让你一键改写一个段落。编辑功能被设计得轻量而智能，帮你节省时间。' },
    ],

    aiNoteTitle: 'AI 笔记',
    aiNoteSub: '最适合学生的 AI 笔记工具',
    aiNoteBody:
      '从录音、转写到智能总结与洞察生成，每一堂课、每一份课程内容都被转化为简洁、结构化、易读的笔记，让你快速回顾核心概念、轻松整理信息、强化长期记忆，并在 AI 学习助手的支持下更高效地学习。',

    quizTitle: 'AI 测验生成器',
    quizSub: '用 AI 测验生成器，让个性化学习变得简单。',
    quizBody: '用 Solvely AI 在几秒内把文本变成一份完整的测验，附带答案和解析。',
    quizVibeTitle: '测验风格选择器',
    quizVibeGoal: '目标：让测验设置更有趣、更直观。',
    quizVibeLogicLabel: '设计逻辑：',
    quizVibeLogic: [
      '用富有表现力的角色和色彩表示难度等级——从 CHILL（简单）到 SAVAGE SOLVI（困难）。',
      '为每种风格匹配明确的题量（5–20 题）。',
    ],

    moreFeatures: [
      { title: '测验生成', text: '把学习资料或目标变成自动批改、即时反馈的测验，是备考的理想工具。' },
      { title: '论文写作', text: '生成结构完整、引用真实的论文。' },
      { title: 'AI 笔记', text: '把课堂录音转写成结构化笔记，并基于你的内容进行 AI 问答。' },
    ],

    commentsTitle: ['来自学生和家长的', '真实评价'],

    alts: {
      hero: 'Solvely —— 拍张照片，即刻获得作业帮助',
      logicFlow: '逻辑流程图 —— if/else 条件把输入映射到论文输出',
      extensionVideo: 'Solvely 插件 —— 框选你的题目区域',
      onboardingBefore: '引导流程 —— 改版前',
      onboardingVideo: '引导交互演示',
      memberPaywall: 'Solvely 会员付费墙',
      bffCapture: 'Solvely 拍照',
      bffThinking: 'Solvely 思考中',
      bffAnswer: 'Solvely 答案',
      bffAnswers: 'Solvely 答案列表',
      adapts: 'Solvely —— 浅色与深色模式的 AI 作业助手',
      writerLaptop: '笔记本电脑上的 Solvely Writer',
      writerToolbar: 'Writer 编辑器工具栏',
      writerScreens: 'Solvely Writer 工作流界面',
      lecture: '从现场课堂生成 AI 笔记',
      lectureMobile: '你的 AI 课堂助手 —— 移动端界面',
      quizDecks: 'Solvely 测验卡组与学习模式',
      quizVibe: '选择你的测验风格',
      specFont: '字体规范 —— 网站排版',
      specColor: '色彩规范',
    },
  },
}
