// Homepage copy — v2 (2026-09-14). en and zh are each written in their own
// voice; they carry the same meaning but are not word-for-word translations.
//
// capabilities: the About / Core Capabilities scroll section. Each block is a
// few short lines followed by its capability keyword; on scroll the lines
// dissolve and the five keywords migrate into a centred stack. The keywords
// are English in both languages — that is the final on-screen state.
// `**bold**` is allowed in heroLede / contactBody.
const home = {
  en: {
    heroEyebrow: 'PRODUCT DESIGNER · 8 YEARS EXPERIENCE',
    heroTitle: 'Turning complex problems into clear product solutions.',
    heroLede: [
      'I’m Simmon, a product designer with 8 years of experience.',
      'My work spans AI, SaaS, and enterprise products. In recent years, I’ve focused primarily on AI products — from early product definition and core experience design to validation, launch, and iteration.',
      'My role goes beyond designing interfaces. I look at how user needs, business goals, and technical capabilities come together, and turn them into product experiences that can actually ship.',
    ],
    heroCta: 'View my work ↓',
    heroScroll: 'SCROLL',

    capLabel: 'ABOUT / CORE CAPABILITIES',
    capTitle: 'I care about how problems are framed and solved.',
    capabilities: [
      {
        keyword: 'PRODUCT THINKING',
        lines: [
          'When a product experience isn’t working, I rarely start with the interface.',
          'I first try to understand what users are trying to accomplish, what the business needs to achieve, and why the current product is getting in the way. I use user feedback, behavioral data, and core journeys to identify the real problem before deciding what deserves to be solved first.',
        ],
      },
      {
        keyword: 'AI-NATIVE',
        lines: [
          'With AI products, I’m less interested in simply “adding AI” and more interested in whether it can actually help users complete a task.',
          'I explore the model’s capabilities and limitations, validate critical workflows through prototypes, and then define how AI should enter the product — what it should do, when it should appear, and how people should interact with it.',
        ],
      },
      {
        keyword: 'DATA-DRIVEN',
        lines: [
          'Shipping a design isn’t the end of the process.',
          'I continue to look at user behavior, funnels, and key product metrics to understand whether the experience actually improved.',
          'For me, data isn’t just a way to present results. It’s part of how I identify problems, validate decisions, and keep improving the product.',
        ],
      },
      {
        keyword: '0 → 1',
        lines: [
          'Much of my work begins before the product is fully defined.',
          'Sometimes there’s only a direction, a set of user needs, or a new technical capability.',
          'I’m comfortable starting from that ambiguity, defining the core use cases, product structure, and key workflows, and turning them into the first experience real users can actually use.',
        ],
      },
      {
        keyword: 'END-TO-END',
        lines: [
          'My work often spans product thinking, information architecture, user flows, interaction design, interface design, prototyping, engineering collaboration, and iteration after launch.',
          'I care not only about whether the design is finished, but whether it is implemented well and actually solves the problem we started with.',
        ],
      },
    ],

    reelLabel: 'Selected work',
    reelTitle: 'SELECTED WORK',
    reelHint: 'Drag or scroll to explore',

    contactHeadline: 'Looking for the next team to build great products with.',
    contactBody: [
      'I’m currently exploring opportunities as an AI Product Designer / Product Designer.',
      'I’d like to keep working on AI, complex products, and 0→1 challenges — and join a team that cares deeply about product quality, user experience, and long-term impact.',
    ],
    footerTitle: 'GET IN TOUCH',
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
    heroEyebrow: 'PRODUCT DESIGNER · 8 YEARS EXPERIENCE',
    heroTitle: '从复杂问题中，找到清晰的产品解法。',
    heroLede: [
      '我是 Simmon，一名拥有 8 年经验的产品设计师。',
      '过去的工作覆盖 AI、SaaS 和企业级产品。近几年，我主要专注于 AI 产品，从早期产品定义、核心体验设计，到验证、上线和持续迭代。',
      '我的工作不只是完成界面，而是理解用户需求、业务目标和技术能力之间的关系，并把它们转化为能够真正落地的产品体验。',
    ],
    heroCta: 'View my work ↓',
    heroScroll: '向下滚动',

    capLabel: 'ABOUT / CORE CAPABILITIES',
    capTitle: '我更关注问题是如何被定义和解决的。',
    capabilities: [
      {
        keyword: 'PRODUCT THINKING',
        lines: [
          '当一个产品体验出现问题时，我通常不会直接从界面开始。',
          '我会先理解用户想完成什么、业务希望解决什么，以及现有产品为什么没有做到。通过用户反馈、行为数据和核心流程，找到真正影响体验的问题，再判断什么值得优先解决。',
        ],
      },
      {
        keyword: 'AI-NATIVE',
        lines: [
          '对于 AI 产品，我更关心的不是“在哪里加入 AI”，而是它能不能真正完成用户的任务。',
          '我会先理解模型的能力与边界，通过 Workflow 和 Prototype 验证关键场景，再决定 AI 应该如何进入产品、什么时候出现，以及用户应该如何与它协作。',
        ],
      },
      {
        keyword: 'DATA-DRIVEN',
        lines: [
          '设计上线并不意味着工作结束。',
          '我会继续通过用户行为、漏斗和关键指标判断设计是否真正改善了体验，并用这些结果验证之前的判断。',
          '对我来说，数据不是展示设计成果的方式，而是发现问题和持续迭代的一部分。',
        ],
      },
      {
        keyword: '0 → 1',
        lines: [
          '很多我参与的产品，都开始于一个还没有完全成型的阶段。',
          '可能只有一个方向、一组用户需求，或者一项新的技术能力。',
          '我习惯从这种模糊状态开始，逐步定义核心场景、产品结构和关键流程，并把它推进到第一版真正能够被用户使用的产品。',
        ],
      },
      {
        keyword: 'END-TO-END',
        lines: [
          '从产品梳理、信息架构、用户流程和交互，到视觉、Prototype、研发协作以及上线后的持续迭代，我通常都会参与其中。',
          '我关注的不只是设计稿有没有完成，而是设计能不能被正确实现，产品最终有没有解决原本的问题。',
        ],
      },
    ],

    reelLabel: '精选作品',
    reelTitle: '精选作品',
    reelHint: '拖动或滚动浏览',

    contactHeadline: '期待加入一个认真做产品的团队。',
    contactBody: [
      '目前我正在寻找 AI Product Designer / Product Designer 相关机会。',
      '我希望继续参与 AI、复杂产品和 0→1 产品的设计与落地，也期待加入一个重视产品质量、用户体验和长期价值的团队。',
    ],
    footerTitle: 'GET IN TOUCH',
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
