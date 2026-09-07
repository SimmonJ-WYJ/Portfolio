# Solvely Review + CTA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 Figma `262:12647` 与 `264:12769` 两个收尾模块加入 Solvely 案例页，完成整页。

**Architecture:** 复盘模块复用既有 `.sp-section` 排版，仅作用域内补段间距。CTA 复用仓库中已存在但未被使用的 `.sp-cta*` 脚手架与 `Solvely ip.gif`，并按原稿改写背景、间距与按钮尺寸。

**Tech Stack:** React、CSS、Vite、Node 断言检查。

## Global Constraints

- 仅加入这两个模块、断言和记录。
- 不新增依赖、不新增资源文件。
- 不得修改共享的 `.sp-section-title` / `.sp-section-text` 基础规则，避免影响已验证的既有小节。
- 发布前运行 `npm run check:solvely-plugins` 与 `npm run build`。

---

### Task 1: 先写回归断言

**Files:**
- Modify: `scripts/check-solvely-plugins.mjs`

- [ ] **Step 1: 写入失败断言，覆盖复盘文案与三处加粗、CTA 背景与按钮尺寸。**
- [ ] **Step 2: 运行 `npm run check:solvely-plugins`，确认断言失败。**

### Task 2: 实现项目复盘

**Files:**
- Modify: `src/components/SolvelyPluginsPage.jsx`
- Modify: `src/components/SolvelyPluginsPage.css`

- [ ] **Step 1: 加入 `sp-section sp-review` 小节与三段原稿文案。**
- [ ] **Step 2: 仅在 `.sp-review` 作用域内补段间距。**

### Task 3: 实现下载 CTA

**Files:**
- Modify: `src/components/SolvelyPluginsPage.jsx`
- Modify: `src/components/SolvelyPluginsPage.css`

- [ ] **Step 1: 启用既有的 `solvelyIpGif` import，加入 CTA 小节。**
- [ ] **Step 2: 按原稿改写 `.sp-cta` 背景、圆角、间距与按钮尺寸。**
- [ ] **Step 3: 运行 `npm run check:solvely-plugins && npm run build`。**

### Task 4: 视觉核对与收尾

- [ ] **Step 1: 在 `http://localhost:5174/solvely-plugins` 核对两屏。**
- [ ] **Step 2: 与 Figma 截图做像素级 diff。**
- [ ] **Step 3: 向作者确认下载按钮的目标链接后填入。**
