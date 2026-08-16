// Homepage copy: hero, manifesto, reel and footer.
//
// manifesto: authored in UPPERCASE for en (the section renders as-is) and with
// spaces between phrases for zh so the shared tokenizer can split it. Every
// entry in manifestoKeywords must appear verbatim in the paragraph — the
// tokenizer marks the first occurrence of each and migrates it into the stack.
const home = {
  en: {
    heroTitleTop: 'Product',
    heroTitleBottom: 'designer',
    heroCopy: 'I believe great design isn\'t about creating interfaces—it\'s about solving the right problems. Every design decision should begin with understanding users, be validated by data, and ultimately create value for both people and the business.',
    heroEyebrow: 'PRODUCT DESIGNER',
    heroName: 'SIMMON',
    heroLede:
      'A product designer who builds from strategy to launch — turning complex systems into interfaces people understand.',
    heroCta: 'See selected work',
    heroScroll: 'SCROLL',
    manifestoLabel: 'Studio manifesto',
    manifestoKeywords: [
      'PRODUCT THINKING',
      'AI-NATIVE',
      'DATA-DRIVEN',
      'END-TO-END',
      'USER-CENTERED',
      'SCALABLE',
    ],
    manifesto:
      "I'M SIMMON — A PRODUCT DESIGNER WITH 8 YEARS OF EXPERIENCE BUILDING PRODUCTS FROM STRATEGY TO LAUNCH. " +
      "I BELIEVE GREAT DESIGN ISN'T ABOUT CREATING BEAUTIFUL INTERFACES — IT'S ABOUT SOLVING THE RIGHT PROBLEMS. " +
      'EVERY PROJECT STAYS USER-CENTERED: UNDERSTANDING PEOPLE, DEFINING THE PRODUCT DIRECTION, AND VALIDATING IDEAS BEFORE A SINGLE SCREEN IS DESIGNED. ' +
      'MY APPROACH COMBINES PRODUCT THINKING, DATA-DRIVEN DECISION MAKING, AI-NATIVE WORKFLOWS, AND END-TO-END DESIGN EXECUTION. ' +
      'FROM INFORMATION ARCHITECTURE AND INTERACTION DESIGN TO POLISHED INTERFACES AND DEVELOPER COLLABORATION, I TRANSFORM COMPLEX SYSTEMS INTO INTUITIVE EXPERIENCES — SIMPLE TO USE, SCALABLE TO GROW, AND MEANINGFUL FOR BOTH USERS AND BUSINESSES. ' +
      "TO ME, DESIGN DOESN'T END AT LAUNCH. THE BEST PRODUCTS ARE SHAPED THROUGH CONTINUOUS LEARNING, ITERATION, AND MEASURABLE OUTCOMES.",
    reelLabel: 'Selected work',
    reelTitle: 'SELECTED WORK',
    reelHint: 'Drag or scroll to explore',
    footerTitle: "LET'S BUILD SOMETHING",
    footerLabel: 'Creative Approach',
    footerDesc: 'Exploring the space between creativity and technology. Creating thoughtful experiences through design, AI, and modern digital craftsmanship.',
    footerCta: 'Work together',
    footerEmail: 'simmonjmax@163.com',
    footerRights: 'All rights reserved.',
  },
  zh: {
    heroTitleTop: 'Product',
    heroTitleBottom: 'designer',
    heroCopy: '我相信优秀的设计不在于创建界面，而在于解决正确的问题。每个设计决策都应该从理解用户开始，通过数据验证，最终为用户和企业创造价值。',
    heroEyebrow: '产品设计师',
    heroName: 'SIMMON',
    heroLede: '一名从策略到上线全程参与的产品设计师，把复杂系统变成人人看得懂的界面。',
    heroCta: '查看精选作品',
    heroScroll: '向下滚动',
    manifestoLabel: '设计理念',
    manifestoKeywords: ['产品思维', 'AI 原生', '数据驱动', '端到端', '以用户为中心', '可扩展'],
    manifesto:
      '我是 SIMMON， 一名拥有 八年经验 的产品设计师， 从策略到上线 完整地构建产品。 ' +
      '我相信 优秀的设计 不在于 做出好看的界面， 而在于 解决正确的问题。 ' +
      '每个项目都 以用户为中心： 先理解真实的人， 定义产品方向， 在画下第一个界面之前 验证想法。 ' +
      '我的方法 融合了 产品思维、 数据驱动 的决策、 AI 原生 的工作流， 以及 端到端 的设计执行。 ' +
      '从信息架构、 交互设计， 到精细的界面 与研发协作， 我把复杂系统 转化为直觉式的体验—— 用起来简单， 可扩展 地成长， 对用户和业务 都真正有价值。 ' +
      '对我来说， 设计不会在上线时结束。 最好的产品 来自持续的学习、 迭代 与可衡量的结果。',
    reelLabel: '精选作品',
    reelTitle: '精选作品',
    reelHint: '拖动或滚动浏览',
    footerTitle: '一起做点东西',
    footerLabel: '创意方法',
    footerDesc: '探索创意与技术的交汇。通过设计、AI 和现代数字工艺创造深思熟虑的体验。',
    footerCta: '合作联系',
    footerEmail: 'simmonjmax@163.com',
    footerRights: '保留所有权利。',
  },
}

export default home
