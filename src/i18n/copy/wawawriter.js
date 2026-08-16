// 蛙蛙写作 (Wawa Writer) case study. `meta`, `userGroups`, `optimize`,
// `problem` and `solution` are positional lists — the icons and swatch colours
// stay in the component, the text lives here.
const wawawriter = {
  en: {
    meta: [
      { title: 'Industry', sub: 'Multimodal AI product' },
      { title: 'Service', sub: 'UI/UX design & build' },
      { title: 'Team', sub: 'Designer + PM + engineering' },
      { title: 'Timeline', sub: '2 weeks' },
    ],
    bgTitle: ['Homepage redesign', 'project background'],
    bgText:
      'Over the past year the page accumulated design tweaks made to solve whatever problem was urgent at the time. With no systematic design plan, many experience details ended up poorly considered and the underlying problems were never really fixed.',
    userGroupsTitle: 'User groups',
    userGroups: [
      { name: 'New users', bold: 'Need guidance', sub: 'getting to know the product' },
      { name: 'Low-frequency', bold: 'Occasional writing', sub: 'want to work faster' },
      { name: 'High-frequency', bold: 'Prolific writing', sub: 'upload work regularly' },
    ],
    swatchName: 'Wawa Green',
    marketingTitle: ['Marketing module', 'optimisation'],
    optimizeTitle: 'What changed:',
    optimize: [
      'More fitting visual elements to present each feature',
      'Trimmed the banner marketing slot to reduce distraction',
    ],
    statNum: '65%',
    statCap: 'Feature click-through rose from 6.3% → 12.5%',
    editorTitle: ['Writing editor', 'iteration'],
    problemTitle: 'Problems:',
    problem: [
      'Expanding content broke the writer’s train of thought',
      'Took up too much of the editing area',
      'The entry point was easy to miss',
    ],
    solutionTitle: 'Solution:',
    solution: [
      'Reduced background noise so the editing area stands out',
      'Moved characters into their own side panel for easy reference',
      'Kept the editing area clean and made each module more distinct',
    ],
    alts: {
      hero: 'Wawa Writer — homepage mockup',
      compare: 'Before and after the redesign',
      before5: 'Marketing module before the redesign',
      after5: 'Marketing module after the redesign',
      stats5:
        'Conversion data: sign-up conversion +35%, marketing page click-through +40%, paid subscription conversion +63%',
      before6: 'Editor before the redesign',
      after6: 'Editor after the redesign',
      chart1: 'Before/after: template usage 35%→80%, writing time saved 15%→38%',
      chart2: 'Words generated per user +72.9%',
      ipad: 'Wawa Writer on iPad',
    },
  },
  zh: {
    meta: [
      { title: '行业', sub: '多模态AI产品' },
      { title: '服务', sub: 'UI/UX 设计/开发' },
      { title: '团队配置', sub: '设计师+产品+开发' },
      { title: '时间周期', sub: '2 周' },
    ],
    bgTitle: ['首页改版', '项目背景'],
    bgText:
      '在过去的一年时间里，页面上有很多为了解决当时问题的设计细节调整，并没有系统的设计规划，导致很多体验细节设计不合理且未能彻底解决存在的问题。',
    userGroupsTitle: '用户群体',
    userGroups: [
      { name: '新用户', bold: '需要引导', sub: '熟悉产品' },
      { name: '低频用户', bold: '偶尔写作', sub: '想提高效率' },
      { name: '高频用户', bold: '高产写作', sub: '经常上传作品' },
    ],
    swatchName: 'Wawa Green',
    marketingTitle: ['营销层模块', '优化'],
    optimizeTitle: '优化内容：',
    optimize: ['使用更贴切的视觉元素进行功能展示', '精简 Banner 营销位，减少干扰'],
    statNum: '65%',
    statCap: '功能点击率从 6.3% → 12.5%',
    editorTitle: ['写作编辑器', '板块迭代'],
    problemTitle: '问题：',
    problem: ['内容展开时打断思路', '占用编辑区过大', '入口不突出，作者难以找到'],
    solutionTitle: '解决方案：',
    solution: ['降低背景干扰，突出编辑区', '角色单独放入侧板块，便于对照', '保持编辑区纯净，增强模块独特性'],
    alts: {
      hero: '蛙蛙写作 — 首页样机',
      compare: '改版前后对比',
      before5: '改版前营销模块',
      after5: '改版后营销模块',
      stats5: '转化数据：注册转化率 +35%，营销页点击率 +40%，订阅付费转化率 +63%',
      before6: '改版前编辑器',
      after6: '改版后编辑器',
      chart1: '改版前后对比：模版使用率 35%→80%，写作时间节省 15%→38%',
      chart2: '人均生成字数 +72.9%',
      ipad: '蛙蛙写作 iPad 端',
    },
  },
}

export default wawawriter
