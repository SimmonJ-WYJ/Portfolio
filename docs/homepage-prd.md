# simmonj.com 首页 PRD

> 版本：v2.1（2026-09-14）
> 范围：首页（`/`）——Hero、关于我 / 核心能力、Selected Work、Contact
> 状态：对应 PR #12（`feat/home-light`），叠加 PR #11（`feat/homepage-copy`）
> 定位：Product Designer · 8 年经验，近年聚焦 AI 产品

---

## 1. 目标

首页需要在 10 秒内让访问者（招聘方 / 团队负责人）明白三件事：

1. Simmon 是谁——一名以"解决问题"而非"画界面"为核心的产品设计师
2. 他怎么工作——五个可被真实项目支撑的核心能力
3. 他在找什么——AI Product Designer / Product Designer 机会

三句被锁定的核心文案（改动需同步 `scripts/check-home.mjs`）：

| 位置 | 中文 | English |
|---|---|---|
| Hero | 从复杂问题中，找到清晰的产品解法。 | Turning complex problems into clear product solutions. |
| About | 我更关注问题是如何被定义和解决的。 | I care about how problems are framed and solved. |
| Contact | 期待加入一个认真做产品的团队。 | Looking for the next team to build great products with. |

## 2. 信息架构

```
Hero（深色，视频）
└─ 关于我 / 核心能力（浅色，液态玻璃，滚动叙事 → 五个关键词）
   └─ Selected Work（浅色，横向滚动，内容不变）
      └─ Contact / 页脚（米白）
```

- Hero 之外全部为浅色底（`--bg #fff` / `--bg-2 #f4f3f0`，墨色 `--ink #16140f`）
- 导航固定顶部，`mix-blend-mode: difference`，深浅区自动反色
- 全站中英切换（`localStorage: portfolio:lang`，默认 en）；中英文各自成文，不逐字互译

## 3. 文案

### 3.1 Hero

| 元素 | 中文 | English |
|---|---|---|
| 眉标 | PRODUCT DESIGNER · 8 YEARS EXPERIENCE | 同左 |
| 标题（加粗） | 从复杂问题中，找到清晰的产品解法。 | Turning complex problems into clear product solutions. |
| 正文 1 | 我是 Simmon，一名拥有 8 年经验的产品设计师。 | I’m Simmon, a product designer with 8 years of experience. |
| 正文 2 | 过去的工作覆盖 AI、SaaS 和企业级产品。近几年，我主要专注于 AI 产品，从早期产品定义、核心体验设计，到验证、上线和持续迭代。 | My work spans AI, SaaS, and enterprise products. In recent years, I’ve focused primarily on AI products — from early product definition and core experience design to validation, launch, and iteration. |
| 正文 3 | 我的工作不只是完成界面，而是理解用户需求、业务目标和技术能力之间的关系，并把它们转化为能够真正落地的产品体验。 | My role goes beyond designing interfaces. I look at how user needs, business goals, and technical capabilities come together, and turn them into product experiences that can actually ship. |
| CTA | View my work ↓（锚到 `#work`） | 同左 |

- 三行正文紧排，行与行之间无空行
- 不放数字 / 数据条，不放第二个按钮

### 3.2 关于我 / 核心能力

| 元素 | 中文 | English |
|---|---|---|
| 小标题 | 关于我 / 核心能力 | ABOUT / CORE CAPABILITIES |
| 标题 | 我更关注问题是如何被定义和解决的。 | I care about how problems are framed and solved. |

五个能力块，每块 2–3 句 + 收尾关键词（关键词中英文均为英文，即最终态）：

**PRODUCT THINKING**
- 中：当一个产品体验出现问题时，我通常不会直接从界面开始。／我会先理解用户想完成什么、业务希望解决什么，以及现有产品为什么没有做到。通过用户反馈、行为数据和核心流程，找到真正影响体验的问题，再判断什么值得优先解决。
- En: When a product experience isn’t working, I rarely start with the interface. / I first try to understand what users are trying to accomplish, what the business needs to achieve, and why the current product is getting in the way. I use user feedback, behavioral data, and core journeys to identify the real problem before deciding what deserves to be solved first.

**AI-NATIVE**
- 中：对于 AI 产品，我更关心的不是"在哪里加入 AI"，而是它能不能真正完成用户的任务。／我会先理解模型的能力与边界，通过 Workflow 和 Prototype 验证关键场景，再决定 AI 应该如何进入产品、什么时候出现，以及用户应该如何与它协作。
- En: With AI products, I’m less interested in simply “adding AI” and more interested in whether it can actually help users complete a task. / I explore the model’s capabilities and limitations, validate critical workflows through prototypes, and then define how AI should enter the product — what it should do, when it should appear, and how people should interact with it.

**DATA-DRIVEN**
- 中：设计上线并不意味着工作结束。／我会继续通过用户行为、漏斗和关键指标判断设计是否真正改善了体验，并用这些结果验证之前的判断。／对我来说，数据不是展示设计成果的方式，而是发现问题和持续迭代的一部分。
- En: Shipping a design isn’t the end of the process. / I continue to look at user behavior, funnels, and key product metrics to understand whether the experience actually improved. / For me, data isn’t just a way to present results. It’s part of how I identify problems, validate decisions, and keep improving the product.

**0 → 1**
- 中：很多我参与的产品，都开始于一个还没有完全成型的阶段。／可能只有一个方向、一组用户需求，或者一项新的技术能力。／我习惯从这种模糊状态开始，逐步定义核心场景、产品结构和关键流程，并把它推进到第一版真正能够被用户使用的产品。
- En: Much of my work begins before the product is fully defined. / Sometimes there’s only a direction, a set of user needs, or a new technical capability. / I’m comfortable starting from that ambiguity, defining the core use cases, product structure, and key workflows, and turning them into the first experience real users can actually use.

**END-TO-END**
- 中：从产品梳理、信息架构、用户流程和交互，到视觉、Prototype、研发协作以及上线后的持续迭代，我通常都会参与其中。／我关注的不只是设计稿有没有完成，而是设计能不能被正确实现，产品最终有没有解决原本的问题。
- En: My work often spans product thinking, information architecture, user flows, interaction design, interface design, prototyping, engineering collaboration, and iteration after launch. / I care not only about whether the design is finished, but whether it is implemented well and actually solves the problem we started with.

最终滚动态只保留：**PRODUCT THINKING / AI-NATIVE / DATA-DRIVEN / 0 → 1 / END-TO-END**

已移除的旧关键词：USER-CENTERED、SCALABLE（泛化，任何设计师都能说）。

### 3.3 Selected Work

沿用线上现状，不改：项目名称、顺序、描述、图片 / 视频、卡片样式、排版、横向滚动交互。标题 `SELECTED WORK` / `精选作品`，副标 `Drag or scroll to explore` / `拖动或滚动浏览`。

### 3.4 Contact / 页脚

| 元素 | 中文 | English |
|---|---|---|
| 大按钮（打开联系卡） | GET IN TOUCH ↗ | 同左 |
| 波浪分割线 | — | — |
| 左侧小标签 | 求职期望 | What I’m looking for |
| 右侧标题 | 期待加入一个认真做产品的团队。 | Looking for the next team to build great products with. |
| 右侧第 1 行 | 目前我正在寻找 AI Product Designer / Product Designer 相关机会。 | I’m currently exploring opportunities as an AI Product Designer / Product Designer. |
| 右侧第 2 行 | 我希望继续参与 AI、复杂产品和 0→1 产品的设计与落地，也期待加入一个重视产品质量、用户体验和长期价值的团队。 | I’d like to keep working on AI, complex products, and 0→1 challenges — and join a team that cares deeply about product quality, user experience, and long-term impact. |

- Logo 墙已删除
- 联系卡（纯文字弹层）：标题 `Let’s talk`；Email `simmonjmax@163.com`（mailto）、Phone（tel）、Social `@simmonjmax`

## 4. 交互与动效

### 4.1 Hero 视频
- 全出血视频铺满内嵌圆角卡片（24px 圆角，卡片外 12px 黑边），左侧渐变压暗保证文字可读
- Loader 结束 0.5s 后从海报帧（2s 处）开始播放，播到 7s 暂停并定格；标签页切回等触发的再次播放一律拦下
- `prefers-reduced-motion`：只显示海报图
- 文案以 0.15s 递增的延迟依次上浮进入

### 4.2 关于我 / 核心能力（滚动叙事）
区块高 300vh，内部舞台 sticky 100vh；`p` 为区块内滚动进度 0→1。

| 阶段 | 进度 | 行为 |
|---|---|---|
| 滑入 | 区块顶部从视口底 → 视口顶 | 整屏液态玻璃从 30% → 100% 不透明；下面钉住的 Hero 透过玻璃可见并被折射 |
| 完整叙事 | p ≈ 0–0.1 | 玻璃 100% 白，标题 + 五块文案完整可读；项目图几乎不可见 |
| 正文淡出 | p ≈ 0.1–0.58 | 标题、小标题、每行正文按阅读顺序错峰淡出（平滑曲线） |
| 关键词飞行 | p ≈ 0.46–0.86 | 五个关键词从段尾位置平移 + 放大到屏幕中央纵向堆叠 |
| 最终态 | p ≥ 0.86 | 只剩五个大字（92px 上限），项目图在后方缓慢上浮 |

- 飞行的是最终大字本身（原生 92px 渲染，静止时缩小到段尾占位处），落地时 transform 归零——同一节点、无切换、无跳动、完全清晰
- 项目图：五张封面交替左右、按不同速度视差上浮，透明度随进度 0.05 → 0.6
- 液态玻璃：`backdrop-filter: url(#sm-liquid)`（SVG 湍流 + 位移映射）+ `saturate(1.4) brightness(1.04)`，叠一道斜向高光；不支持的浏览器退回 `blur(10px) saturate(1.4)`
- 静态回退（`prefers-reduced-motion` 或视口 ≤ 860px）：区块不再 sticky，白底、文案纵向堆叠、关键词留在段尾，不做玻璃 / 飞行 / 项目图

### 4.3 其他
- 页脚 `GET IN TOUCH` 点击打开联系卡；箭头 hover 位移
- 页面元素 `.reveal` 进入视口时上浮显现
- 自定义光标（`data-cursor="link"`），Lenis 平滑滚动

## 5. 视觉规范

- 高对比黑白：Hero 深色，其余浅色；不用渐变作核心视觉，不用"AI 蓝紫"
- 字体：Schibsted Grotesk（标题 / 关键词 / 按钮）、Inter（正文）
- Hero 标题 600 字重，`clamp(34px, 4vw, 64px)`；能力区标题 400 字重；最终关键词 600 字重 `clamp(34px, 6vw, 92px)`
- 页脚大按钮 `clamp(44px, 9.4vw, 180px)`，`GET IN TOUCH` 桌面端保持一行
- 留白充足，排版以 Typography 为主；图片只服务于案例与叙事

## 6. 技术实现索引

| 内容 | 文件 |
|---|---|
| 首页全部文案（en / zh） | `src/i18n/copy/home.js` |
| Hero（视频逻辑、文案渲染） | `src/App.jsx` → `Hero`，样式 `src/styles.css` |
| 关于我 / 核心能力（滚动叙事、玻璃、飞行） | `src/components/StudioManifesto.jsx` / `.css` |
| Selected Work | `src/components/HorizontalShowcase.jsx` / `.css` |
| 页脚 + 联系卡 | `src/components/HomeContent.jsx`、`ContactCard.jsx`、`WavePath.css` |
| 语言切换 | `src/i18n/LanguageContext.jsx`、`LangToggle.jsx` |
| 回归检查 | `npm run check:home`（文案结构 + 三句锁定文案）、`npm run check:i18n`（中英键对齐、无硬编码 CJK） |

## 7. 验收标准

**文案**
- [ ] Hero 10 秒内能读出定位；三句锁定文案与本文一致
- [ ] 五个关键词均有对应正文支撑；中英文各自通顺，不是互译
- [ ] 切换语言后所有可见文字随之切换（关键词、`GET IN TOUCH`、眉标、`View my work ↓` 除外——按设计保持英文）

**交互**
- [ ] 能力区完成"完整叙事 → 淡出 → 飞行 → 五个大字"的连续过程，落地无跳动、字体清晰
- [ ] 滑入时能透过玻璃看到 Hero，贴顶后完全不透明
- [ ] 移动端 / 减少动效模式使用静态回退，文字完整可读
- [ ] Hero 视频 7s 定格，不循环，不因切换标签重播

**工程**
- [ ] `npm run check:i18n`、`npm run check:home`、`npm run build` 通过
- [ ] Selected Work 与合并前 diff 为零

## 8. 待定 / 后续

- `index.html` 的 `<title>` 仍为 "Product Manager / Designer"，与新定位不一致，待改
- `@simmonjmax` 尚未挂链接（平台未定）
- Safari 对 `url()` backdrop-filter 支持不全，液态玻璃在 Safari 会退回磨砂——是否需要 Safari 专用方案待观察
