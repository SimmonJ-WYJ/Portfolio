// Freeleaps case study — /freeleaps
//
// English is the source language for this page: every en string below is the
// author's original copy, moved verbatim out of FreeleapsPage.jsx and its
// section components. The Chinese is a translation of it.
//
// Deliberately NOT in this file — kept identical in both languages inside the
// components, because they depict the Freeleaps product itself rather than
// narrate the design: the component-library mock UI (Submit / Cancel / Deploy…),
// the testimonial cards and sign-up CTA on the page-display mockup, the type
// specimen (Oak Sans, Light / Regular / Medium, the glyph string) and the colour
// swatch names and hex values.
export default {
  en: {
    back: 'Back',

    metaDesc: 'Software development collaboration platform, adaptive design',
    metaBrand: ['Freefission', 'UX / UI / Develop'],
    metaYear: '2024',

    disciplines: [
      { title: 'UX Design', hours: '48 hours', pills: ['User Flow', 'Wireframing', 'Storyboard Creation'] },
      { title: 'UI Design', hours: '87 hours', pills: ['Interface Design', 'Library', 'Clickable Prototype'] },
      { title: 'Development', hours: '160 hours', pills: ['Frontend', 'Backend', 'Function Testing & Optimization'] },
    ],

    introLead: 'Freeleaps is a software platform that helps clients and freelancers finish projects faster and safer.',
    projectFacts: [
      'Project Name / Freeleaps',
      'Industry / Platform',
      'Platform Type / Web',
      'Year / 2024',
      'Tools / Figma, AIGC',
    ],
    overviewTitle: 'Project Overview',
    overviewFacts: [
      'Type / Software collaboration platform',
      'Connects / Clients & Freelancers',
      'Features / Posting · Matching · Tracking · Payments',
      'Benefits / Secure developer income · Improve client efficiency',
    ],

    challengesTitle: 'The Challenges We Solve',
    challengeCards: [
      { pill: 'Over 90%', title: 'Freelancers', big: '90%', text: 'Struggle to find quality clients, often underpaid for workloads far beyond their expectations.' },
      { pill: 'About 1/2', title: 'Clients', big: '1/2', text: 'Want access to top developers at fair prices to bring their technical visions to life.' },
    ],

    impacts: [
      { title: 'Freelancers’ Income Growth', text: 'Freelancers want transparent fees and fewer extra costs. Freeleaps’ “zero commission” policy maximizes earnings.' },
      { title: 'Developers Get Accurate Matching', text: 'Other platforms often struggle with poor matching. Freeleaps uses smart algorithms to greatly improve task matching efficiency.' },
      { title: 'Clients Face Fewer Delays & Rework', text: 'Miscommunication often causes delays or rework. Freeleaps offers efficient collaboration tools and real-time tracking to cut risks and mistakes.' },
    ],

    fontTitle: ['Font', 'Specification'],
    fontTag: 'Clear / Readable',
    fontCats: [['UX / UI Design'], ['Saas', 'System'], ['Design', 'System', 'Backstage']],

    colorsTitle: ['Colors', 'Specification'],
    colorsTag: 'Branded / Harmony',

    iconTitle: ['Icon', 'Specification'],
    iconTag: 'Recognizable',

    componentTitle: ['Component', 'Library'],
    componentTag: 'Recognizable',

    pageDisplayTitle: ['Page', 'Display'],
    pageDisplayTag: 'Simple / Consistent',

    contractTitle: 'Contract Page',
    contractInfo: [
      { title: 'Key Information', lines: ['Display core contract details, including publisher, contractor, and acceptance date.'] },
      { title: 'Highlights', lines: ['❶ Detailed view on the right with clear information hierarchy.', '❷ Visualized milestone payments reduce communication costs.'] },
    ],
    issuesTitle: 'Issues Page',
    issuesChartCaption: 'clearly show issue trends',
    issuesInfo: [
      { title: 'Design Features', lines: ['Data visualization: line charts clearly show issue trends.', 'Collaboration integration: issues can be linked to project group chat to improve communication efficiency.'] },
    ],

    otherPagesTitle: ['Display On', 'Other Pages'],
    otherPagesTag: 'Consistent / Efficient',
    otherPagesCaption: 'Only display some pages',

    alts: {
      hero: 'Freeleaps product hero',
      logo: 'Freeleaps',
      challenge1: 'A freelancer overwhelmed at work',
      challenge2: 'A client frustrated at work',
      coreValue: 'Core Platform Value — Freeleaps connects Freelancers, Clients and Developers',
      icon3d: 'Freeleaps 3D icon',
      viBrand: 'Freeleaps brand identity mockup',
      endingOffice: 'Freeleaps team at work',
      endingPhone: 'Freeleaps mobile app',
      pageMockup: 'Freeleaps public page',
      contractPage: 'Contract page',
      issuesPage: 'Issues page',
      issuesChart: 'Issue trends chart',
    },
  },

  zh: {
    back: '返回',

    metaDesc: '软件开发协作平台，自适应设计',
    metaBrand: ['Freefission', 'UX / UI / 开发'],
    metaYear: '2024',

    disciplines: [
      { title: 'UX 设计', hours: '48 小时', pills: ['用户流程', '线框图', '故事板'] },
      { title: 'UI 设计', hours: '87 小时', pills: ['界面设计', '组件库', '可交互原型'] },
      { title: '开发', hours: '160 小时', pills: ['前端', '后端', '功能测试与优化'] },
    ],

    introLead: 'Freeleaps 是一个帮助客户与自由职业者更快、更安全地完成项目的软件平台。',
    projectFacts: [
      '项目名称 / Freeleaps',
      '行业 / 平台',
      '平台类型 / Web',
      '年份 / 2024',
      '工具 / Figma、AIGC',
    ],
    overviewTitle: '项目概览',
    overviewFacts: [
      '类型 / 软件协作平台',
      '连接 / 客户与自由职业者',
      '功能 / 发布 · 匹配 · 跟踪 · 支付',
      '价值 / 保障开发者收入 · 提升客户效率',
    ],

    challengesTitle: '我们解决的问题',
    challengeCards: [
      { pill: '超过 90%', title: '自由职业者', big: '90%', text: '难以找到优质客户，工作量常远超预期却报酬偏低。' },
      { pill: '约 1/2', title: '客户', big: '1/2', text: '希望以合理的价格找到顶尖开发者，把技术构想落地。' },
    ],

    impacts: [
      { title: '自由职业者收入增长', text: '自由职业者希望费用透明、额外成本更少。Freeleaps 的“零佣金”政策最大化收益。' },
      { title: '开发者获得精准匹配', text: '其他平台常面临匹配不佳的问题。Freeleaps 使用智能算法大幅提升任务匹配效率。' },
      { title: '客户减少延期与返工', text: '沟通不畅常导致延期或返工。Freeleaps 提供高效协作工具和实时跟踪，降低风险和错误。' },
    ],

    fontTitle: ['字体', '规范'],
    fontTag: '清晰 / 易读',
    fontCats: [['UX / UI 设计'], ['SaaS', '系统'], ['设计', '系统', '后台']],

    colorsTitle: ['色彩', '规范'],
    colorsTag: '品牌感 / 和谐',

    iconTitle: ['图标', '规范'],
    iconTag: '易识别',

    componentTitle: ['组件', '库'],
    componentTag: '易识别',

    pageDisplayTitle: ['页面', '展示'],
    pageDisplayTag: '简洁 / 一致',

    contractTitle: '合同页',
    contractInfo: [
      { title: '关键信息', lines: ['展示合同核心信息，包括发布方、承接方与验收日期。'] },
      { title: '亮点', lines: ['❶ 右侧详情视图，信息层级清晰。', '❷ 里程碑付款可视化，降低沟通成本。'] },
    ],
    issuesTitle: '问题页',
    issuesChartCaption: '清晰呈现问题趋势',
    issuesInfo: [
      { title: '设计特点', lines: ['数据可视化：折线图清晰呈现问题趋势。', '协作整合：问题可关联到项目群聊，提升沟通效率。'] },
    ],

    otherPagesTitle: ['其他页面', '展示'],
    otherPagesTag: '一致 / 高效',
    otherPagesCaption: '仅展示部分页面',

    alts: {
      hero: 'Freeleaps 产品主图',
      logo: 'Freeleaps',
      challenge1: '不堪重负的自由职业者',
      challenge2: '备受挫折的客户',
      coreValue: '平台核心价值 —— Freeleaps 连接自由职业者、客户与开发者',
      icon3d: 'Freeleaps 3D 图标',
      viBrand: 'Freeleaps 品牌形象样机',
      endingOffice: 'Freeleaps 团队工作场景',
      endingPhone: 'Freeleaps 移动端应用',
      pageMockup: 'Freeleaps 公开页面',
      contractPage: '合同页',
      issuesPage: '问题页',
      issuesChart: '问题趋势图',
    },
  },
}
