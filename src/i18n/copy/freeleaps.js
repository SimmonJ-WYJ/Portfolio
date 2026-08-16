// Freeleaps freelance platform case study. The three discipline cards have
// positional lists for icons/hours/pills. IMPACTS, COLOR_SWATCHES, and icon
// grids stay in the component; the text lives here.
export default {
  en: {
    // Meta section (top of page)
    client: 'Freeleaps',
    role: 'Lead Product Designer',
    timeline: '6 months (2023)',
    scope: 'Full product design, UX research, design system',

    // Three discipline cards (positioned by icon order in component)
    disciplines: [
      {
        title: 'UX Design',
        hours: '48 hours',
        pills: ['User Flow', 'Wireframing', 'Storyboard Creation'],
      },
      {
        title: 'UI Design',
        hours: '87 hours',
        pills: ['Interface Design', 'Library', 'Clickable Prototype'],
      },
      {
        title: 'Development',
        hours: '160 hours',
        pills: ['Frontend', 'Backend', 'Function Testing & Optimization'],
      },
    ],

    // Impact stats (big numbers with context)
    impacts: [
      {
        title: 'Freelancers\' Income Growth',
        text: 'Freelancers want transparent fees and fewer extra costs. Freeleaps\' "zero commission" policy maximizes earnings.',
      },
      {
        title: 'Developers Get Accurate Matching',
        text: 'Other platforms often struggle with poor matching. Freeleaps uses smart algorithms to greatly improve task matching efficiency.',
      },
      {
        title: 'Clients Face Fewer Delays & Rework',
        text: 'Miscommunication often causes delays or rework. Freeleaps offers efficient collaboration tools and real-time tracking to cut risks and mistakes.',
      },
    ],

    // Color section labels
    colorBrandTitle: 'Brand Colors',
    colorNeutralTitle: 'Neutral Ramp',

    // Stats cards
    stats: [
      {
        pill: 'User Research',
        title: '127 interviews',
        text: 'Conducted in-depth interviews with freelancers and clients to understand pain points in existing platforms.',
        big: '127',
      },
      {
        pill: 'Market Analysis',
        title: '8 competitors mapped',
        text: 'Analyzed strengths and weaknesses of major freelance platforms to identify differentiation opportunities.',
        big: '8',
      },
      {
        pill: 'Design Iterations',
        title: '43 prototypes tested',
        text: 'Rapid prototyping and user testing cycles to refine the core workflows and interaction patterns.',
        big: '43',
      },
    ],

    // Section headers
    challengeTitle: 'The Challenge',
    challengeText: 'Traditional freelance platforms suffer from high fees, poor matching, and fragmented communication. Our challenge was to create a platform that addresses these pain points while remaining sustainable.',

    designSystemTitle: 'Design System',
    designSystemText: 'Built a comprehensive component library and design tokens to ensure consistency across the product.',

    iconSystemTitle: '3D Icon System',
    iconSystemText: 'Created a cohesive 3D icon language that brings warmth and personality to the interface.',

    monoIconsTitle: 'Monochrome Icons',
    duoIconsTitle: 'Duotone Icons',

    // Alt text
    alts: {
      hero: 'Freeleaps platform hero image',
      challenge1: 'Challenge illustration 1',
      challenge2: 'Challenge illustration 2',
      viBrand: 'Visual identity and branding',
      coreValue: 'Core value proposition',
      endingOffice: 'Office scene',
      endingPhone: 'Mobile app on phone',
      icon3dFeatured: 'Featured 3D icon',
    },
  },
  zh: {
    client: 'Freeleaps',
    role: '主设计师',
    timeline: '6 个月（2023）',
    scope: '全产品设计、用户研究、设计系统',

    disciplines: [
      {
        title: 'UX 设计',
        hours: '48 小时',
        pills: ['用户流程', '线框图', '故事板'],
      },
      {
        title: 'UI 设计',
        hours: '87 小时',
        pills: ['界面设计', '组件库', '可交互原型'],
      },
      {
        title: '开发',
        hours: '160 小时',
        pills: ['前端', '后端', '功能测试与优化'],
      },
    ],

    impacts: [
      {
        title: '自由职业者收入增长',
        text: '自由职业者希望费用透明、额外成本更少。Freeleaps 的"零佣金"政策最大化收益。',
      },
      {
        title: '开发者获得精准匹配',
        text: '其他平台常面临匹配不佳的问题。Freeleaps 使用智能算法大幅提升任务匹配效率。',
      },
      {
        title: '客户减少延期与返工',
        text: '沟通不畅常导致延期或返工。Freeleaps 提供高效协作工具和实时跟踪，降低风险和错误。',
      },
    ],

    colorBrandTitle: '品牌色',
    colorNeutralTitle: '中性色阶',

    stats: [
      {
        pill: '用户研究',
        title: '127 次访谈',
        text: '与自由职业者和客户进行深度访谈，了解现有平台的痛点。',
        big: '127',
      },
      {
        pill: '市场分析',
        title: '8 个竞品分析',
        text: '分析主要自由职业平台的优劣势，识别差异化机会。',
        big: '8',
      },
      {
        pill: '设计迭代',
        title: '43 个原型测试',
        text: '快速原型与用户测试循环，优化核心工作流程和交互模式。',
        big: '43',
      },
    ],

    challengeTitle: '挑战',
    challengeText: '传统自由职业平台存在高费用、匹配差、沟通碎片化等问题。我们的挑战是创建一个既能解决这些痛点又可持续的平台。',

    designSystemTitle: '设计系统',
    designSystemText: '构建了全面的组件库和设计令牌，确保产品的一致性。',

    iconSystemTitle: '3D 图标系统',
    iconSystemText: '创建了统一的 3D 图标语言，为界面带来温暖和个性。',

    monoIconsTitle: '单色图标',
    duoIconsTitle: '双色图标',

    alts: {
      hero: 'Freeleaps 平台首屏图',
      challenge1: '挑战插图 1',
      challenge2: '挑战插图 2',
      viBrand: '视觉识别与品牌',
      coreValue: '核心价值主张',
      endingOffice: '办公场景',
      endingPhone: '手机应用界面',
      icon3dFeatured: '特色 3D 图标',
    },
  },
}
