// Windpop brand case study.
//
// missionBody is an array of segments rather than a string: the page highlights
// parts of the paragraph in blue, so each segment carries its own `bl` flag and
// the component renders them in order.
const windpop = {
  en: {
    sectionLabels: { logo: 'LOGO DESIGN', type: 'TYPEFACE DESIGN', font: 'FONT' },
    process: [
      { hours: '24 hours', title: 'Research', tags: ['Industry', 'User research', 'Brand positioning'] },
      { hours: '48 hours', title: 'Discovery', tags: ['Moodboard', 'Keywords', 'Logo Sketches'] },
      { hours: '87 hours', title: 'Solution', tags: ['Applications', 'Refinement', 'Finalized VI System'] },
    ],
    missionTitle: ['WINDPOP', 'MISSION'],
    missionBody: [
      { text: 'Windpop is an investing firm focusing on ' },
      { text: 'exploring early ideas and incubating them to be an operatable product prototype', bl: true },
      { text: ' which can be further invested in by other investors. We are particularly looking for ideas that ' },
      { text: 'redefine the user experiences of the existing product', bl: true },
      { text: ' run by big companies with simplification and reduction in a way that the product becomes accessible for more people. We do this because we believe technology should not be monopolized by a few entities who use it to make profit for their stakeholders primarily. Instead, technology should be open to all people and accessible to everyone. Windpop’s mission is to ' },
      { text: 'make technology accessible to more people.', bl: true },
    ],
    missionTags: ['Explore Ideas Early', 'Redefine Experience', 'Tech for Everyone'],
    logoBody:
      'Windpop’s vision is expressed through a mix of abstract and concrete forms: using small units like seeds to symbolize early ideas, reshaping them into new forms to redefine products, and letting them spread outward to represent inclusive technology, just like dandelion seeds drifting in the wind and carrying our vision of openness and sharing.',
    logoFeats: [
      { title: 'Smallest unit', sub: 'Early exploration' },
      { title: 'Wind scatters seeds', sub: 'Spreading inclusive technology' },
      { title: 'Redefine', sub: 'Break down and restructure' },
      { title: 'Dandelion imagery', sub: 'A vision of shared technology' },
    ],
    typeBody:
      'Using trapezoidal negative space at the corners of the letters creates a distinctive texture, enhances brand recognition, and aligns seamlessly with the logo.',
    fontTitle: 'Inter family',
    fontSub: 'Headings + Subheadings + Body Copy',
    fontBody:
      'Inter is a modern, highly readable sans-serif with flexible weights and global language support, making it ideal for consistent use across all brand touchpoints. Its neutral yet approachable style aligns with Windpop’s vision of redefining experiences and making technology accessible to everyone.',
    fontGlyphs: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789!',
    alts: {
      hero: 'Windpop — Explore Ideas Early · Redefine Experience · Tech for Everyone',
      logoDiagram: 'Windpop logo construction — radial dandelion geometry',
      typeSpec: 'Windpop type specification — ascender / x-height / baseline / descender',
      logoUsage: 'Windpop logo usage — vertical, standalone and horizontal lockups with do/don’t examples',
      gradient: 'Windpop gradient palette — light and dark gradients',
      colorUse: 'Windpop logo colour application — on white, dark, blue and gradient backgrounds',
      logoBlue: 'Windpop logo on a blue gradient background',
      fontWeights: 'Inter weights 400 / 500 / 600 / 700',
      favicon: 'Windpop favicon in use — notification card and browser tab',
      laptop: 'Windpop Capital — website mockup on a laptop',
      logoBlue2: 'Windpop logo on a blue gradient background',
      stationery: 'Windpop brand collateral — letterhead, business card, envelope',
      idCard: 'Windpop ID card',
      billboard: 'Windpop billboard — Invest in Tomorrow’s Ideas, Today.',
    },
  },
  zh: {
    sectionLabels: { logo: '标志设计', type: '字体设计', font: '字体' },
    process: [
      { hours: '24 小时', title: '调研', tags: ['行业研究', '用户研究', '品牌定位'] },
      { hours: '48 小时', title: '探索', tags: ['情绪板', '关键词', '标志草图'] },
      { hours: '87 小时', title: '落地', tags: ['应用场景', '细节打磨', 'VI 系统定稿'] },
    ],
    missionTitle: ['WINDPOP', '使命'],
    missionBody: [
      { text: 'Windpop 是一家投资机构，专注于' },
      { text: '发掘早期想法，并把它们孵化成可运转的产品原型', bl: true },
      { text: '，让后续投资者能够接力投入。我们尤其关注那些能够' },
      { text: '重新定义大公司现有产品体验', bl: true },
      { text: '的想法——通过简化与删减，让产品能被更多人用上。我们这样做，是因为我们相信技术不该被少数机构垄断、只为自己的股东创造利润。技术应该向所有人开放，人人都能触达。Windpop 的使命，就是' },
      { text: '让技术被更多人用上。', bl: true },
    ],
    missionTags: ['尽早发掘想法', '重新定义体验', '技术属于每个人'],
    logoBody:
      'Windpop 的愿景通过抽象与具象的结合来表达：用种子这样的最小单元象征早期的想法，把它们重塑为新的形态以重新定义产品，再让它们向外扩散，代表普惠的技术——就像蒲公英的种子随风飘散，带着我们关于开放与共享的愿景。',
    logoFeats: [
      { title: '最小单元', sub: '早期探索' },
      { title: '风带走种子', sub: '普惠技术的扩散' },
      { title: '重新定义', sub: '拆解与重构' },
      { title: '蒲公英意象', sub: '共享技术的愿景' },
    ],
    typeBody:
      '在字母转角处使用梯形负空间，形成独特的质感，强化品牌识别，并与标志形成一致的语言。',
    fontTitle: 'Inter 字体家族',
    fontSub: '标题 + 副标题 + 正文',
    fontBody:
      'Inter 是一款现代、易读性极高的无衬线字体，字重灵活并支持多语言，适合在所有品牌触点上保持一致。它中性而不冷淡的气质，与 Windpop 重新定义体验、让技术触达每个人的愿景相契合。',
    fontGlyphs: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789!',
    alts: {
      hero: 'Windpop — 尽早发掘想法 · 重新定义体验 · 技术属于每个人',
      logoDiagram: 'Windpop 标志构成 — 蒲公英放射几何',
      typeSpec: 'Windpop 字体规范 — Ascender / X-Height / Baseline / Descender',
      logoUsage: 'Windpop 标志用法 — 垂直/单独/水平排列与正误示例',
      gradient: 'Windpop 渐变色板 — Light / Dark Gradient',
      colorUse: 'Windpop 标志配色应用 — 白底/深底/蓝底/渐变底',
      logoBlue: 'Windpop 标志 — 蓝色渐变背景',
      fontWeights: 'Inter 字重 400 / 500 / 600 / 700',
      favicon: 'Windpop favicon 应用 — 通知卡片与浏览器标签',
      laptop: 'Windpop Capital — 笔记本网站样机',
      logoBlue2: 'Windpop 标志 — 蓝色渐变背景',
      stationery: 'Windpop 品牌物料 — 信纸 / 名片 / 信封',
      idCard: 'Windpop 工牌 — ID Card',
      billboard: 'Windpop 广告牌 — Invest in Tomorrow’s Ideas, Today.',
    },
  },
}

export default windpop
