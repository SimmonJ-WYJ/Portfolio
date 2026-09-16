// 蛙蛙写作 (Wawa Writer) — homepage redesign case study.
// zh is the original deck copy; en is a native rewrite of the same content.
// Lists are positional: the component decides layout, the text lives here.
// `**bold**` marks the emphasised span (rendered with <Rich>).
const wawawriter = {
  en: {
    back: 'Back',
    meta: [
      { label: 'Industry', value: 'Multimodal AI product' },
      { label: 'Service', value: 'UI/UX design & build' },
      { label: 'Team', value: 'Designer + PM + engineering' },
      { label: 'Timeline', value: '2 weeks' },
    ],
    title: 'Wawa Writer',
    lede: 'Continuation, book breakdown, expansion and rewriting for creators — with generation quality you can rely on.',
    headline: 'Covering **many creative scenarios**, so content creation is simpler, more precise and more efficient',
    tags: ['Multi-chapter', 'Book breakdown', 'Script creation', 'Promo video'],
    resultsTitle: 'Outcomes',
    results: [
      '**Sign-ups up 30%↑**',
      '**Homepage bounce rate down 50%↓**',
      '**Time on page up 36%↑**',
      '**Book-breakdown usage up 230%↑**',
    ],

    bgTitle: 'Homepage redesign: background',
    bgIntro:
      'The Wawa Writer homepage is the most important step in a user’s first experience of AI. Its job is to help every user discover the AI features that interest them.',
    bgGroupsLead: 'There are three main user groups:',
    bgGroups: [
      '1. New users: have never used AI writing and are trying it for the first time in Wawa Writer',
      '2. Low-frequency writers: exploring more practical writing software to improve their own efficiency',
      '3. High-frequency writers: write 2,000+ characters a day and upload at least one manuscript to the platform every month',
    ],
    bgHistory:
      'Over the past year the page accumulated design tweaks made to solve whatever problem was urgent at the time. With no systematic design plan, many experience details ended up poorly considered and the underlying problems were never really fixed.',
    before: 'Before',
    after: 'After',

    noticeTitle: 'Top notice bar',
    noticeIntro:
      'Guide users unobtrusively toward the features we want them to try, and change how the notice bar works so it gets read for longer.',
    noticeLeftTitle: 'Targeted marketing copy',
    noticeLeftLead: 'New users: low-cost incentives',
    noticeLeftItems: [
      'Welcome! Wawa has prepared 50,000 characters of AI credit for you — **invite friends** or **check in daily** to earn xxx more characters',
      'Welcome! Wawa has prepared a 3-day free VIP trial for you — **invite friends** or **check in daily** to claim xxx more days',
      'Welcome! Your VIP trial has 1 day left — buy now for the xxx promotional price! **Invite friends** or **check in daily** to claim xxx more days',
    ],
    noticeRightTitle: 'Second-purchase entry for paying users',
    noticeRightLead: 'Existing subscribers: show value, upsell as expiry approaches',
    noticeRightItems: [
      'Good morning, Wawa xxxxx! As an unlimited annual member, Wawa has already generated 35,000 characters for you! **Invite friends** to add even more',
      'Good morning, Wawa xxxxx! Wawa has already generated 35,000 characters for you! Your annual pass has 28 days left — **renew now** for 70% off!',
    ],

    mktTitle: 'Marketing layer: multiple modules',
    mktIntro:
      'When a system carries many AI features, a clear layout and guided interactions keep the experience consistent and orderly. Each distinctive feature gets its own icon and a short description — the book-breakdown feature, for example, uses a distinctive book icon to convey precise recognition, so users can quickly find the AI feature they need. On the banner, 3D icons carry the promotional feel: the area shrinks while the visuals compensate for the lost real estate.',
    mktLeftTitle: 'More fitting visual elements to present each feature',
    mktLeftItems: [
      'Mixing the AI feature modules in with everything else limited what users understood — the nature of the AI entry points did not come across',
      'The banner slot was too heavy and skewed toward promotion. For an AI tool, features should lead: users try the new feature first and renew afterwards, so the slot shrinks and the marketing tone eases',
      'Let users try features first and see clearly which AI capabilities we offer, then pay — letting the model’s quality speak for itself',
    ],
    mktRightTitle: 'Banner slot visuals',

    worksTitle: 'Works showcase layer',
    worksIntro:
      'Strengthen how novel information is shown and converted, and surface more of the user’s works. Remove the original bots and concentrate on the novel-writing AI features to emphasise the novel vertical.',
    problemsTitle: 'Problems in the old version',
    solutionsTitle: 'Solution',
    worksProblems: [
      'Novel writing did not stand out; the workspace did not centre the novel vertical',
      'The data showed bot writing brought little conversion',
      'Our audience and ad spend centre on novel writing, so users who landed and could not see the content below bounced more',
    ],
    worksSolutions: [
      'Shrink the banner slot to reduce competing focal points',
      'Give the works list prominence — no cards, a grey ground',
      'Show richer info cards and add more AI features',
      'Move the remaining bots into the sidebar, focusing on the vertical’s core users',
    ],

    gainTitle: 'Results of the homepage redesign',
    gainText:
      'After the redesign, sign-ups **rose 30%↑**, homepage bounce rate **fell 50%↓**, time on page **rose 36%↑** and book-breakdown usage **rose 230%↑**.',

    editorTitle: 'Writing editor iteration',
    editorIntro:
      'The editor is the core of a writing tool, and the product stance is “author first, AI assists” — so its features and interactions had to be redesigned around the author.',
    editorProblems: [
      'Opening the story settings easily broke the writer’s train of thought',
      'Once open, the story settings took up too much of the editing area',
      'Story settings are the input for AI generation, yet the entry point was easy to miss and authors often could not find it',
    ],
    editorSolutions: [
      'Reduced background noise and visual clutter so the editing area stands out',
      'Split the story settings into steps and moved characters into a right-hand panel, so authors can compare character traits side by side while editing their lines and actions',
      'Returned the editor to its purpose: nothing but the manuscript in the editing area, giving the module a clearer identity',
    ],

    guideTitle: 'Story-settings onboarding',
    guideIntro: 'After entering the editor, authors get step-by-step guidance introducing its AI features.',

    othersTitle: 'Other pages',

    alts: {
      hero: 'Wawa Writer — the new homepage on a laptop',
      homeBefore: 'Homepage before the redesign',
      homeAfter: 'Homepage after the redesign',
      noticeBefore: 'Old notice bar',
      noticeAfter: 'New notice bar',
      bannerCards: 'Banner slot cards with 3D icons',
      mktBefore: 'Marketing modules before',
      mktAfter: 'Marketing modules after',
      worksBefore: 'Works list before',
      worksAfter: 'Works list after',
      homeNew: 'The redesigned homepage',
      editorBefore: 'Editor before the redesign',
      editorAfter: 'Editor after the redesign',
      guide: 'Story-settings onboarding step',
      others: 'Other pages of Wawa Writer',
    },
  },
  zh: {
    back: '返回',
    meta: [
      { label: '行业', value: '多模态AI产品' },
      { label: '服务', value: 'UI/UX 设计/开发' },
      { label: '团队配置', value: '设计师+产品+开发' },
      { label: '时间周期', value: '2 周' },
    ],
    title: '蛙蛙写作',
    lede: '为创作者提供续写、拆书、扩写、改写等服务，保证文章的生成质量',
    headline: '涵盖**多种创作场景**，让内容创作更简单、更精准、更高效',
    tags: ['多章节', '拆书', '创建剧本', '推文视频'],
    resultsTitle: '成果',
    results: ['**注册率提升 30%↑**', '**首页跳出率减少 50%↓**', '**页面停留时长增加 36%↑**', '**拆书使用率增加 230%↑**'],

    bgTitle: '首页改版项目背景',
    bgIntro: '蛙蛙写作的首页是用户体验AI过程中最重要的环节，这个页面的使命是帮助每一个用户发现令用户自己感兴趣的AI功能。',
    bgGroupsLead: '主要用户群体有以下三种:',
    bgGroups: [
      '1、新用户：完全没有使用过AI写作的用户，首次进入蛙蛙写作使用AI写作产品',
      '2、低频率写作用户：探索更加实用的写作软件，提高自己的写作效率',
      '3、高频率写作用户：每日码字在2000字以上的用户，每个月至少有一个稿件上传到写作平台',
    ],
    bgHistory: '在过去的一年时间里，页面上有很多为了解决当时问题的设计细节调整，并没有系统的设计规划，导致很多体验细节设计不合理且未能彻底解决存在的问题。',
    before: 'Before',
    after: 'After',

    noticeTitle: '顶部公告栏更改',
    noticeIntro: '通过潜移默化的引导方式，吸引用户体验我们想要去体验的功能，更改通知栏交互方式增加阅读时效',
    noticeLeftTitle: '营销文案精准投放',
    noticeLeftLead: '新用户：低成本利好吸引',
    noticeLeftItems: [
      '欢迎您，蛙蛙为您准备了50000字AI创作额度，**邀请好友**或**每日签到**可获得xxx字',
      '欢迎您，蛙蛙为您准备了3天的的VIP免费试用，**邀请好友**或**每日签到**可领取xxx天',
      '欢迎您，VIP试用仅剩余1天，现在购买可享xxx活动价！**邀请好友**或**每日签到**可领取xxx天',
    ],
    noticeRightTitle: '付费用户二次付费入口',
    noticeRightLead: '已购用户：价值感、临近到期时加购',
    noticeRightItems: [
      '早上好 蛙蛙xxxxx！无限字数的尊贵年卡用户，蛙蛙已累计为您生成3.5万字的创作了！**邀请好友**可为您增加更多字数',
      '早上好 蛙蛙xxxxx！蛙蛙已累计为您生成3，5万字创作！您的年卡天数还有28天，**现在续订**可享3折哦！',
    ],

    mktTitle: '营销层多板块更改',
    mktIntro:
      '在设计承载多种 AI 功能的系统时，可通过清晰的界面布局和操作引导来保证体验统一、有秩序。对于功能差异性特色，为每个独特功能设计专属图标和简要说明。例如，拆书功能，用独特的书籍图标展示其精准识别的特性，让用户能便捷地找到所需 AI 功能增加阅读效率。在banner上采用3D图标突出运营视觉感，在缩小面积的同时，用视觉弥补视野问题',
    mktLeftTitle: '使用更多贴切的视觉元素进行功能展示',
    mktLeftItems: [
      '不同AI功能导购模块与其他功能放在一起用户认知有限，无法表达AI功能入口的特点',
      'Banner营销位过重，侧运营，但对于AI工具类软件，应该重功能，体验新功能后再达到续费效果，因此缩小面积，减少营销氛围',
      '优先体验功能，让用户清晰知道我们目前的AI功能有哪些，体验后进行付费，彰显我们模型侧良好的体验感',
    ],
    mktRightTitle: 'Banner营销位视觉展示',

    worksTitle: '作品展示层更改',
    worksIntro: '增强小说信息展示转换功能，展示更多作品功能。并删除原有的机器人bot，集中展示垂类小说写作AI功能强调小说垂类品类',
    problemsTitle: '旧版问题',
    solutionsTitle: '解决方案',
    worksProblems: [
      '小说写作不够突出，没有突出小说垂类为主体的工作台信息',
      '从数据上来看机器人写作带来的转化率不高',
      '用户群体以及投流方向以小说写作为主，导致用户进入页面后有限看到下方内容后造成跳出率增加',
    ],
    worksSolutions: [
      '将banner营销位占用面积减少，减少视觉焦点',
      '作品列表突出展示，无card，有灰底',
      '更多信息卡片展示，加入多种AI展示功能',
      '将更多机器人bot，展示到侧边栏中，集中展示垂类受益用户',
    ],

    gainTitle: '首页改版最终收益',
    gainText: '通过此次改版注册率**提升30%↑**，首页跳出率**减少50%↓**，页面停留时长**增加36%↑**，拆书使用率**增加230%↑**',

    editorTitle: '写作编辑器板块迭代',
    editorIntro: '写作编辑器作为写作工具类平台的核心功能，需要以人为主AI为辅助的产品定调，因此功能和交互需要以作者为主体进行改版',
    editorProblems: ['打开故事设定时容易造成思维阻断', '故事设定打开后导致编辑区域占用面积过大', '故事设定作为AI生成的前置内容，但入口并不突出，作者经常无法找到'],
    editorSolutions: [
      '背景降噪，减少视觉杂点，突出编辑区域',
      '讲故事设定分布填写，并将角色单独放入右侧板块，充分考虑作者需要左右对照查看人物特点，并编辑对应的人物台词和举动',
      '回归编辑器属性，将编辑区域不加入任何除编辑文稿意外的任何入口，增加板块独特性',
    ],

    guideTitle: '故事设定引导页',
    guideIntro: '作者进入编辑页面后增加分布式引导功能，介绍编辑器中的AI功能',

    othersTitle: '其他页面',

    alts: {
      hero: '蛙蛙写作 — 笔记本上的新版首页',
      homeBefore: '改版前首页',
      homeAfter: '改版后首页',
      noticeBefore: '旧版公告栏',
      noticeAfter: '新版公告栏',
      bannerCards: '采用 3D 图标的 Banner 营销位卡片',
      mktBefore: '改版前营销模块',
      mktAfter: '改版后营销模块',
      worksBefore: '改版前作品列表',
      worksAfter: '改版后作品列表',
      homeNew: '改版后的首页',
      editorBefore: '改版前编辑器',
      editorAfter: '改版后编辑器',
      guide: '故事设定引导步骤',
      others: '蛙蛙写作的其他页面',
    },
  },
}

export default wawawriter
