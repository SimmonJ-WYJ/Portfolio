# Homepage Copy v1.0 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把 `docs/superpowers/specs/2026-09-14-homepage-copy-spec-{en,zh}.md` 的首页文案与信息架构落到线上首页：Hero → Numbers → How I Work → Core Capabilities → Selected Work（不动）→ Contact。

**Architecture:** 所有文案集中在 `src/i18n/copy/home.js`（en / zh 各自成文，不逐字互译）。Hero 与 Numbers 沿用 `App.jsx` 的 `Hero`；Core Capabilities 沿用 `StudioManifesto`（关键词分词器抽到 `manifestoTokens.js`，支持 `0 → 1`）；How I Work 为新的纯文案小节 `HomeIntro.jsx`（Philosophy 板块已决定不做）；Contact 复用 `Footer`。

**Tech Stack:** React、CSS、Vite、Node 断言检查。

## Global Constraints

- Selected Work 区块内容、顺序、样式、交互一律不改。
- 不新增依赖、不新增图片资源。
- 数据只用 spec 里给出的四个数字，与案例页保持一致。
- 发布前运行 `npm run check:i18n`、`npm run check:home` 与 `npm run build`。

---

### Task 1: 先写回归断言

**Files:**
- Create: `scripts/check-home.mjs`
- Modify: `scripts/check-i18n.mjs`（把首页组件加入无硬编码 CJK 检查）
- Modify: `package.json`（`check:home`）

- [ ] **Step 1: 断言五个关键词在 en / zh 的 manifesto 里都能被分词器各命中一次（含 `0 → 1`）。**
- [ ] **Step 2: 断言 Hero、Numbers、How I Work、Contact 的关键文案存在且不含旧的空话关键词。**
- [ ] **Step 3: 运行 `npm run check:home`，确认失败。**

### Task 2: 分词器与文案

**Files:**
- Create: `src/components/manifestoTokens.js`
- Modify: `src/components/StudioManifesto.jsx`、`src/components/StudioManifesto.css`
- Modify: `src/i18n/copy/home.js`

- [ ] **Step 1: `buildTokens` 抽出为独立模块，`core()` 保留数字与 `→`。**
- [ ] **Step 2: 按 spec 重写 `home.js`；删除 `heroCopy` / `heroName` / 轮换词等死键。**

### Task 3: Hero 与 Numbers

**Files:**
- Modify: `src/App.jsx`、`src/styles.css`

- [ ] **Step 1: 标题改为一句话（去掉轮换），支持多段 lede 与 `**加粗**`。**
- [ ] **Step 2: 数字条改为 4 组「数字 + 说明」。**

### Task 4: How I Work、Contact

**Files:**
- Create: `src/components/HomeIntro.jsx`、`src/components/HomeSections.css`
- Modify: `src/components/HomeContent.jsx`

- [ ] **Step 1: How I Work 小节接入 `HomeContent`。**
- [ ] **Step 2: Footer 换成 Contact 文案与页脚标签。**

### Task 5: 验证

- [ ] `npm run check:i18n && npm run check:home && npm run build`
- [ ] 本地预览 en / zh 两种语言截图。
