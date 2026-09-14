// Homepage copy — v1.0, per docs/superpowers/specs/2026-09-14-homepage-copy-spec-{en,zh}.md
//
// en and zh are each written in their own voice; they carry the same meaning
// but are not word-for-word translations of each other.
//
// manifesto: one paragraph. Every entry in manifestoKeywords must appear
// verbatim in it — the tokenizer (manifestoTokens.js) splits on spaces, marks
// the first occurrence of each keyword and migrates it into the final stack.
// The zh paragraph is therefore authored with spaces between phrases.
// `**bold**` is allowed in heroLede / howLines / philosophyLines / contactBody.
const home = {
  en: {
    heroEyebrow: 'AI PRODUCT DESIGNER · 8 YEARS OF EXPERIENCE',
    heroTitle: 'I turn complex AI capabilities into products people can actually use.',
    heroLede: [
      'I’m Simmon, a product designer with 8 years of experience.',
      'In recent years, I’ve been focused on AI products across research, education, and writing — helping take products from early ideas to shipped experiences.',
      'I care about more than how an interface looks.',
      'I care about **why we’re building it, and whether people will actually use it.**',
    ],
    heroCta: 'View my work ↓',
    heroCta2: 'Get in touch',
    heroStats: [
      { figure: '8 years', caption: 'Product design experience' },
      { figure: '3+ AI products', caption: 'Designed and shipped from 0 → 1' },
      { figure: '30% → 60%', caption: 'Onboarding completion' },
      { figure: '300 → 800', caption: 'DAU after product improvements' },
    ],
    heroScroll: 'SCROLL',

    howLabel: 'How I work',
    howTitle: 'I usually don’t start with the interface.',
    howLines: [
      'Before opening Figma, I want to understand what’s actually going wrong.',
      'Where are people dropping off?',
      'Why does the current flow feel difficult?',
      'Is it an interaction problem, a product problem, or is the AI simply not capable enough yet?',
      'I use user feedback, product analytics, and funnels to find those problems.',
      'For AI features, I often prototype the workflow first to see whether the model can actually complete the task before turning it into a product experience.',
      'Once the idea works, I move into interaction, interface, and implementation.',
      '**Understand → Test → Design → Ship → Learn.**',
      'That’s how I approach product design today.',
    ],

    manifestoLabel: 'Core capabilities',
    manifestoKeywords: ['PRODUCT THINKING', 'AI-NATIVE', 'DATA-DRIVEN', '0 → 1', 'END-TO-END'],
    manifesto:
      'I start by understanding the product — what people are trying to do, where they get stuck, and whether we’re solving the right problem. ' +
      'That’s PRODUCT THINKING. ' +
      'With AI products, I often prototype the workflow before designing the interface, testing what the model can actually do. ' +
      'That’s how I work AI-NATIVE. ' +
      'I use user behavior, funnels, and product metrics to find problems and validate whether changes actually work. ' +
      'I prefer being DATA-DRIVEN over relying on assumptions. ' +
      'Most of my recent work has started while the product was still taking shape. ' +
      'I’m comfortable going from an early idea to the first real product — 0 → 1. ' +
      'And I stay involved from product definition and interaction design through interface, prototyping, engineering collaboration, and iteration. ' +
      'That’s END-TO-END.',

    reelLabel: 'Selected work',
    reelTitle: 'SELECTED WORK',
    reelHint: 'Drag or scroll to explore',

    philosophyLabel: 'Philosophy',
    philosophyTitle: [
      'I don’t care much about how many screens I make.',
      'I care about what gets better because of them.',
    ],
    philosophyLines: [
      'Sometimes the answer is redesigning a flow.',
      'Sometimes it’s removing a step.',
      'Sometimes it means changing the feature entirely.',
      'And with AI products, sometimes the best design decision is:',
      '**don’t build it yet.**',
      'Good product design isn’t just about executing requirements.',
      'It’s about figuring out:',
      '**what is actually worth building.**',
    ],

    contactHeadline: 'If you think we might be a good fit, feel free to reach out.',
    contactBody: [
      'I’m always interested in AI, complex products, 0 → 1 challenges, and new ways people interact with technology.',
      'If you’re working on a problem that isn’t obvious,',
    ],
    footerTitle: 'LET’S TALK',
    footerLabel: 'AI Product Design · 0 → 1 · UX · Shanghai',
    footerCta: 'Work together',
    footerEmail: 'simmonjmax@163.com',
    footerRights: 'All rights reserved.',
    contactEyebrow: 'Get in touch',
    contactTitle: 'Let’s talk',
    contactLabels: { email: 'Email', phone: 'Phone', social: 'Social' },
    contactClose: 'Close',
  },
  zh: {
    heroEyebrow: 'AI 产品设计师 · 8 年产品设计经验',
    heroTitle: '我把复杂的 AI 能力，变成真正好用的产品。',
    heroLede: [
      '我是 Simmon，一名拥有 8 年经验的产品设计师。',
      '这几年我主要专注于 AI 产品，参与并主导过 AI 科研、AI 教育、AI 写作等产品从 0 到 1 的设计。',
      '我不只关心界面长什么样，更关心一件事：',
      '**这个功能为什么要做，以及用户到底会不会用。**',
    ],
    heroCta: '查看我的作品 ↓',
    heroCta2: '联系我',
    heroStats: [
      { figure: '8 年', caption: '产品设计经验' },
      { figure: '3+ 款 AI 产品', caption: '从 0 到 1 参与设计与落地' },
      { figure: '30% → 60%', caption: '新用户引导完成率' },
      { figure: '300 → 800', caption: '产品改版后的 DAU' },
    ],
    heroScroll: '向下滚动',

    howLabel: '工作方式',
    howTitle: '我通常不会从画界面开始。',
    howLines: [
      '在打开 Figma 之前，我会先弄清楚问题到底发生在哪里。',
      '用户在哪一步离开？',
      '现有流程为什么不好用？',
      '这是交互问题、产品问题，还是 AI 本身的能力还没有达到预期？',
      '我会结合用户反馈、埋点和漏斗数据定位问题。',
      '对于 AI 功能，我也会先搭建简单的 AI Workflow 或 Prototype，验证模型能不能真正完成这个任务，再决定产品应该怎么设计。',
      '验证之后，才进入交互、界面和最终落地。',
      '**找到问题 → 验证方向 → 设计体验 → 推动上线 → 再看数据。**',
      '这是我现在做产品设计最常用的方式。',
    ],

    manifestoLabel: '核心能力',
    manifestoKeywords: ['产品思维', 'AI 原生', '数据驱动', '0 → 1', '全链路落地'],
    manifesto:
      '我会先理解产品本身： 用户到底想完成什么、 问题发生在哪里， 以及我们是不是 真的在解决正确的问题。 这是我的 产品思维。 ' +
      '做 AI 产品时， 我经常会在设计界面之前 先把 AI Workflow 跑通， 看看模型到底能不能 完成这个任务。 这是我理解的 AI 原生。 ' +
      '我也会通过用户行为、 漏斗和产品数据 发现问题， 并继续验证 设计是否真的有效， 而不是只凭感觉判断。 这是 数据驱动。 ' +
      '最近几年， 我参与的很多项目 都是在产品 还没有完全成型的时候 开始的。 我习惯从一个模糊的想法开始， 一直做到第一个 真正能被用户使用的产品—— 0 → 1。 ' +
      '从产品定义、 交互、 界面、 Prototype， 到研发协作 和上线后的持续迭代， 我通常都会参与其中。 这是我的 全链路落地 能力。',

    reelLabel: '精选作品',
    reelTitle: '精选作品',
    reelHint: '拖动或滚动浏览',

    philosophyLabel: '产品观',
    philosophyTitle: ['我不太在意做了多少页面。', '我更在意最后解决了什么问题。'],
    philosophyLines: [
      '有时候答案是重新设计一个流程。',
      '有时候是删掉一个步骤。',
      '有时候是重新定义整个功能。',
      '对于 AI 产品，有时候最重要的设计决定甚至是：',
      '**现在先不要做。**',
      '因为好的产品设计，不只是把需求做出来。',
      '而是判断：',
      '**什么才真正值得被做出来。**',
    ],

    contactHeadline: '如果你觉得我们可能适合合作，欢迎联系。',
    contactBody: ['我对 AI、复杂产品、0 → 1 和新的产品交互方式一直很感兴趣。', '如果你也正在解决一个不那么简单的问题，'],
    footerTitle: 'LET’S TALK',
    footerLabel: 'AI Product Design · 0 → 1 · UX · Shanghai',
    footerCta: '合作联系',
    footerEmail: 'simmonjmax@163.com',
    footerRights: '保留所有权利。',
    contactEyebrow: '联系我',
    contactTitle: 'Let’s talk',
    contactLabels: { email: '邮箱', phone: '电话', social: '社交' },
    contactClose: '关闭',
  },
}

export default home
