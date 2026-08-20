// Solvely AI case study. Product name stays "Solvely AI" in both languages.
// PAIN_QUOTES, FLOW_PILLS, WRITER_FEATURES, MORE_FEATURES, FEATURES, and
// VIBE_CARDS are positional arrays — icons/images/avatars stay in the component.
export default {
  en: {
    // Hero section - Sagar-style tagline and impact
    heroTagline: 'AI-Powered Learning Assistant',
    heroSubtitle: 'Bringing instant homework help to 2M+ students through a lightweight browser extension',
    heroMetrics: [
      { value: '2M+', label: 'Active Users' },
      { value: '4.8★', label: 'App Store Rating' },
      { value: '156%', label: 'Sign-up Growth' },
    ],

    // Hero meta
    client: 'Solvely AI',
    role: 'Lead Product Designer',
    timeline: '2023 - 2024',
    team: '3 Designers, 8 Engineers, 2 PMs',

    // Pain point quotes (aligned with avatars in component)
    painQuotes: [
      { name: 'Jane Cooper', role: 'High School Student' },
      { name: 'Kevin', role: 'College Student' },
      { name: 'Emma', role: 'International Student' },
    ],

    // Overview section - Challenge/Solution/Impact
    overviewTitle: 'Project Overview',
    challenge: {
      title: 'The Challenge',
      text: 'Students waste 40% of their study time context-switching between learning platforms and search engines. This fragmented experience hurts retention and increases cognitive load. Through 47 user interviews and analysis of 10K+ support tickets, we identified the core friction points in the student learning journey.',
    },
    solution: {
      title: 'The Solution',
      text: 'A Chrome extension that brings AI assistance directly into the learning flow — no tab switching, no copy-paste. Select any text on any website, get instant explanations powered by GPT-4. We made AI help feel like magic, not work.',
    },
    impact: {
      title: 'The Impact',
      metrics: [
        { icon: '✓', text: '156% increase in trial sign-ups' },
        { icon: '✓', text: '2M+ active users in 8 months' },
        { icon: '✓', text: '4.8/5 rating with 12K+ reviews' },
        { icon: '✓', text: '67% reduction in support tickets' },
      ],
    },

    painTitle: 'Understanding the Pain Points',

    // Logic & Design
    logicTitle: 'Design Logic',
    logicBody: 'While analyzing the existing workflow, I found a large number of if/else conditions. The system uses different prompts to identify user inputs, and the backend then generates the appropriate essay format. I structured the design around this workflow to define the process and interface more clearly.',
    logicHighlight: 'define the process and interface more clearly.',

    // Solution section - Extension
    solutionExtensionTitle: 'Solvely Extension',
    solutionExtensionBody: 'The Solvely browser extension is your smart learning companion, available wherever you study online.',
    solutionExtensionBold: 'It helps you stay focused — no more switching tabs or losing momentum.',

    painTitle: 'Understanding the Pain Points',

    // Four feature cards (aligned with icons in component)
    features: [
      {
        title: 'Homework Help',
        text: 'Instant solutions for any problem — from K-12 to graduate level. Snap, ask, learn.',
      },
      {
        title: 'Quiz Maker',
        text: 'Turn any material into practice tests in 30 seconds. Auto-graded, fully customized.',
      },
      {
        title: 'Essay Writer',
        text: 'From rough draft to polished essay — with real citations. Beat writer\'s block.',
      },
      {
        title: 'AI Note Taker',
        text: 'Record lectures, get structured notes. Ask questions about your own content.',
      },
    ],

    solutionTitle: 'The Solution: Browser Extension',
    solutionText: 'A lightweight Chrome extension that brings AI assistance directly into your learning workflow, without tab switching or context loss.',

    commentsTitle: 'What Users Are Saying',

    onboardingTitle: 'Seamless Onboarding',
    onboardingSteps: [
      { label: 'Install', text: 'One-click installation from Chrome Web Store' },
      { label: 'Activate', text: 'Pin the extension and grant permissions' },
      { label: 'Start Learning', text: 'Select text anywhere to get instant help' },
    ],

    resultsTitle: 'Impact & Results',

    bffTitle: 'Your Best Friend Forever',
    bffText: 'Solvely learns your style and adapts to your needs, becoming more helpful over time.',

    sourceTitle: 'Trusted Sources',
    sourceText: 'Every answer is backed by verified academic sources and citations.',

    memberTitle: 'Premium Membership',
    memberText: 'Unlock unlimited questions, priority support, and advanced features.',

    moreTitle: 'More Features',
    moreFeatures: [
      {
        num: '01',
        title: 'Quiz Maker',
        text: 'Turn study materials into auto-graded quizzes. Instant feedback, ideal for test prep.',
      },
      {
        num: '02',
        title: 'Essay Writer',
        text: 'Well-researched essays with real citations — from outline to final draft.',
      },
      {
        num: '03',
        title: 'AI Note Taker',
        text: 'Transcribe lectures into organized notes. Ask questions, get answers from your content.',
      },
    ],

    adaptsTitle: 'Adapts to You',
    adaptsLight: 'Light Mode',
    adaptsDark: 'Dark Mode',

    logicTitle: 'Design Logic',
    logicBody: 'Every interaction is designed to minimize friction and maximize learning momentum. From the floating widget to the results panel, each component serves a clear purpose in the student\'s workflow.',

    writerTitle: 'AI Writing Suite',
    writerFeatures: [
      {
        title: 'AI Autocomplete',
        body: 'Overcome writer\'s block with smart suggestions. Start typing, AI completes your thought.',
      },
      {
        title: 'Citation Generator',
        body: 'APA, MLA, Harvard, Chicago, IEEE — accurate citations in one click.',
      },
      {
        title: 'Instant Rewrite',
        body: 'Transform rough paragraphs into polished prose. One click, zero effort.',
      },
    ],

    ainoteTitle: 'AI Note Taker',
    ainoteText: 'Record lectures, meetings, or study sessions. Solvely transcribes and structures your notes automatically.',

    lectureTitle: 'Lecture Mode',
    lectureText: 'Optimized for long-form content, with timestamps and speaker detection.',

    quizTitle: 'Smart Quiz Generator',
    quizText: 'Turn any material into practice questions.',
    quizVibes: 'Choose Your Vibe',

    // Design principles
    principlesTitle: 'Design Principles',
    principles: [
      {
        number: '01',
        title: 'Zero-friction access',
        text: 'AI help should feel like magic, not work. No app switching, no copy-paste.',
      },
      {
        number: '02',
        title: 'Contextual intelligence',
        text: 'Answers tailored to what the student is reading, not generic responses.',
      },
      {
        number: '03',
        title: 'Progressive disclosure',
        text: 'Show features as students need them. Avoid overwhelming with options.',
      },
    ],

    // Results & validation
    resultsTitle: 'Measurable Impact',
    resultMetrics: [
      {
        icon: '📈',
        category: 'User Growth',
        value: '+190%',
        detail: '2M → 5.8M active users',
      },
      {
        icon: '💰',
        category: 'Revenue',
        value: '+186%',
        detail: '$420K → $1.2M MRR',
      },
      {
        icon: '⭐',
        category: 'Satisfaction',
        value: '4.8/5',
        detail: '4.2 → 4.8 App Store rating',
      },
      {
        icon: '⏱️',
        category: 'Efficiency',
        value: '-61%',
        detail: '28min → 11min avg. session',
      },
    ],

    businessImpactTitle: 'Business Impact',
    businessImpact: [
      'Reduced customer acquisition cost by 34%',
      'Increased premium conversion rate from 6% to 14%',
      'Featured on App Store "Top Educational Apps"',
      'Reduced support ticket volume by 67%',
    ],

    // Key learnings
    learningsTitle: 'Key Learnings',
    learnings: [
      {
        number: '01',
        title: 'Speed matters more than perfection',
        text: 'We launched the MVP in 4 weeks. User feedback guided 80% of subsequent features. Waiting for "perfect" would have cost us the market window.',
      },
      {
        number: '02',
        title: 'AI needs guardrails',
        text: 'Initial version had hallucination issues affecting trust. We implemented citation verification that increased accuracy from 76% to 94%.',
      },
      {
        number: '03',
        title: 'Students need privacy',
        text: 'Anonymous mode was our #1 requested feature. Students feared judgment for asking "basic" questions. Privacy drove adoption.',
      },
    ],

    nextStepsTitle: 'What\'s Next',
    nextSteps: [
      'Expanding to mobile apps (iOS/Android)',
      'Multilingual support for international students',
      'Integration with popular LMS platforms (Canvas, Blackboard)',
      'Voice input for hands-free learning',
    ],

    // Alt text for images
    alts: {
      hero: 'Solvely AI product showcase',
      painKevin: 'Student Kevin testimonial',
      painEmma: 'Student Emma testimonial',
      painJane: 'Student Jane testimonial',
      sampleQ: 'Sample question interface',
      tcIcon: 'Trust and credibility icon',
      extensionInstalled: 'Extension installed notification',
      p5Quiz: 'Quiz maker interface',
      p5Essay: 'Essay writer interface',
      p5Note: 'AI note taker interface',
      adaptsDarklight: 'Dark and light mode comparison',
      logicFlow: 'User flow diagram',
      logicCollage: 'Design system collage',
      writerLaptop: 'Writer interface on laptop',
      writerToolbar: 'Writing toolbar',
      writerAutocomplete: 'AI autocomplete demo',
      writerLibrary: 'Citation library',
      writerRewrite: 'Rewrite feature',
      ainoteScene: 'AI note taker scene',
      ainoteWindow: 'Note taker window',
      lecturePhones: 'Lecture mode on mobile',
      quizDecks: 'Quiz card decks',
      specFont: 'Typography specification',
      specColor: 'Color specification',
    },
  },
  zh: {
    // Hero section - Sagar-style tagline and impact
    heroTagline: 'AI 学习助手',
    heroSubtitle: '通过轻量级浏览器插件，为 200 万+学生提供即时作业帮助',
    heroMetrics: [
      { value: '200万+', label: '活跃用户' },
      { value: '4.8★', label: 'App Store 评分' },
      { value: '156%', label: '注册增长' },
    ],

    // Hero meta
    client: 'Solvely AI',
    role: '主设计师',
    timeline: '2023 - 2024',
    team: '3 名设计师，8 名工程师，2 名产品经理',

    // Overview section - Challenge/Solution/Impact
    overviewTitle: '项目概览',
    challenge: {
      title: '挑战',
      text: '学生将 40% 的学习时间浪费在学习平台和搜索引擎之间的切换上。这种碎片化的体验损害了记忆留存，增加了认知负担。通过 47 次用户访谈和对 10,000+ 支持工单的分析，我们识别出学生学习旅程中的核心摩擦点。',
    },
    solution: {
      title: '解决方案',
      text: '一个 Chrome 扩展，将 AI 辅助直接融入学习流程 — 无需切换标签页，无需复制粘贴。在任何网站上选中任何文本，即可获得由 GPT-4 驱动的即时解释。我们让 AI 帮助感觉像魔法，而非额外的工作。',
    },
    impact: {
      title: '影响',
      metrics: [
        { icon: '✓', text: '试用注册量增长 156%' },
        { icon: '✓', text: '8 个月内达到 200 万+活跃用户' },
        { icon: '✓', text: '4.8/5 评分，12,000+ 评价' },
        { icon: '✓', text: '支持工单减少 67%' },
      ],
    },

    // Hero meta
    client: 'Solvely AI',
    role: '主设计师',
    timeline: '2023 - 2024',
    team: '3 名设计师，8 名工程师，2 名产品经理',

    // Intro section - optimized
    introYear: '2025',
    introQuote: 'Solvely 将 AI 学习辅助直接融入你的工作流程 — 无需切换应用，保持学习动力。',
    introQuoteMuted: '从即时作业帮助到 AI 笔记和论文写作，学习更聪明所需的一切。',

    // Meta section - project details
    metaOverviewTitle: '概览',
    metaProjectTitle: '项目',
    metaOverview: '该平台通过个性化 AI 工具、自动总结的材料和实时问答来提升学习效率。它适应每个学生的学习节奏，让学习更具互动性、更高效、更愉快。',
    metaProject: [
      '项目 / Solvely',
      '类别 / AI 学习平台，教育科技',
      '地点 / 美国旧金山',
      '日期 / 2025',
    ],

    // Flow section - how I work
    flowTitle: '我的工作方式',
    flowIntro: '我阅读数据，围绕它塑造 UX，在 Dify 中验证流程，然后将规格交付给开发团队。',

    painTitle: '理解痛点',

    features: [
      {
        title: '作业帮助',
        text: '即时解答任何问题 — 从 K-12 到研究生阶段。拍照、提问、学习。',
      },
      {
        title: '测验生成器',
        text: '30 秒将任何材料转化为练习测试。自动评分，完全定制。',
      },
      {
        title: '论文写作',
        text: '从草稿到精致论文 — 带真实引用。克服写作障碍。',
      },
      {
        title: 'AI 笔记助手',
        text: '录制讲座，获得结构化笔记。对你自己的内容提问。',
      },
    ],

    solutionTitle: '解决方案：浏览器扩展',
    solutionText: '一款轻量级 Chrome 扩展，将 AI 辅助直接融入学习工作流程，无需切换标签页或丢失上下文。',

    commentsTitle: '用户评价',

    onboardingTitle: '无缝上手',
    onboardingSteps: [
      { label: '安装', text: '从 Chrome 网上应用店一键安装' },
      { label: '激活', text: '固定扩展并授予权限' },
      { label: '开始学习', text: '在任何地方选中文本即可获得即时帮助' },
    ],

    resultsTitle: '影响与成果',

    bffTitle: '你的好朋友',
    bffText: 'Solvely 学习你的风格并适应你的需求，随着时间推移变得更加有用。',

    sourceTitle: '可信来源',
    sourceText: '每个答案都有经过验证的学术来源和引用支持。',

    memberTitle: '高级会员',
    memberText: '解锁无限问题、优先支持和高级功能。',

    moreTitle: '更多功能',
    moreFeatures: [
      {
        num: '01',
        title: '测验生成器',
        text: '将学习材料转化为自动评分测验。即时反馈，非常适合备考。',
      },
      {
        num: '02',
        title: '论文写作',
        text: '有充分研究支持、带真实引用的论文 — 从大纲到最终稿。',
      },
      {
        num: '03',
        title: 'AI 笔记助手',
        text: '将讲座转录为有序笔记。提问，从你的内容中获得答案。',
      },
    ],

    adaptsTitle: '适应你',
    adaptsLight: '浅色模式',
    adaptsDark: '深色模式',

    logicTitle: '设计逻辑',
    logicBody: '每个交互都旨在最小化摩擦、最大化学习动力。从浮动小部件到结果面板，每个组件在学生的工作流程中都有明确的目的。',

    writerTitle: 'AI 写作套件',
    writerFeatures: [
      {
        title: 'AI 自动补全',
        body: '用智能建议克服写作障碍。开始打字，AI 完成你的想法。',
      },
      {
        title: '引用生成器',
        body: 'APA、MLA、Harvard、Chicago、IEEE — 一键生成准确引用。',
      },
      {
        title: '即时重写',
        body: '将粗糙的段落转化为精致的文字。一键完成，零工作量。',
      },
    ],

    ainoteTitle: 'AI 笔记助手',
    ainoteText: '记录讲座、会议或学习会话。Solvely 自动转录并结构化你的笔记。',

    lectureTitle: '讲座模式',
    lectureText: '针对长篇内容优化，带有时间戳和说话人检测。',

    quizTitle: '智能测验生成器',
    quizText: '将任何材料转化为练习题。',
    quizVibes: '选择你的风格',

    // Design principles
    principlesTitle: '设计原则',
    principles: [
      {
        number: '01',
        title: '零摩擦访问',
        text: 'AI 帮助应该像魔法一样，而不是额外的工作。无需切换应用，无需复制粘贴。',
      },
      {
        number: '02',
        title: '上下文智能',
        text: '根据学生正在阅读的内容定制答案，而不是通用回复。',
      },
      {
        number: '03',
        title: '渐进式展示',
        text: '在学生需要时显示功能。避免用过多选项让人不知所措。',
      },
    ],

    // Results & validation
    resultsTitle: '可衡量的影响',
    resultMetrics: [
      {
        icon: '📈',
        category: '用户增长',
        value: '+190%',
        detail: '200 万 → 580 万活跃用户',
      },
      {
        icon: '💰',
        category: '收入',
        value: '+186%',
        detail: '$42 万 → $120 万 MRR',
      },
      {
        icon: '⭐',
        category: '满意度',
        value: '4.8/5',
        detail: '4.2 → 4.8 App Store 评分',
      },
      {
        icon: '⏱️',
        category: '效率',
        value: '-61%',
        detail: '28 分钟 → 11 分钟平均会话',
      },
    ],

    businessImpactTitle: '商业影响',
    businessImpact: [
      '客户获取成本降低 34%',
      '高级转化率从 6% 提升至 14%',
      '入选 App Store "顶级教育应用"',
      '支持工单量减少 67%',
    ],

    // Key learnings
    learningsTitle: '关键收获',
    learnings: [
      {
        number: '01',
        title: '速度比完美更重要',
        text: '我们在 4 周内推出了 MVP。用户反馈指导了后续 80% 的功能。等待"完美"会让我们失去市场窗口。',
      },
      {
        number: '02',
        title: 'AI 需要护栏',
        text: '初始版本存在幻觉问题，影响信任。我们实施了引用验证，将准确性从 76% 提升到 94%。',
      },
      {
        number: '03',
        title: '学生需要隐私',
        text: '匿名模式是我们第一大需求功能。学生害怕因为问"基础"问题而被评判。隐私驱动了采用率。',
      },
    ],

    nextStepsTitle: '下一步',
    nextSteps: [
      '扩展到移动应用（iOS/Android）',
      '为国际学生提供多语言支持',
      '集成主流 LMS 平台（Canvas、Blackboard）',
      '语音输入实现免手操作学习',
    ],

    alts: {
      hero: 'Solvely AI 产品展示',
      painKevin: '学生 Kevin 评价',
      painEmma: '学生 Emma 评价',
      painJane: '学生 Jane 评价',
      sampleQ: '示例问题界面',
      tcIcon: '信任与可信度图标',
      extensionInstalled: '扩展安装通知',
      p5Quiz: '测验生成器界面',
      p5Essay: '论文写作界面',
      p5Note: 'AI 笔记助手界面',
      adaptsDarklight: '深色和浅色模式对比',
      logicFlow: '用户流程图',
      logicCollage: '设计系统拼贴',
      writerLaptop: '笔记本上的写作界面',
      writerToolbar: '写作工具栏',
      writerAutocomplete: 'AI 自动补全演示',
      writerLibrary: '引用库',
      writerRewrite: '重写功能',
      ainoteScene: 'AI 笔记助手场景',
      ainoteWindow: '笔记助手窗口',
      lecturePhones: '手机讲座模式',
      quizDecks: '测验卡组',
      specFont: '字体规范',
      specColor: '颜色规范',
    },
  },
}
