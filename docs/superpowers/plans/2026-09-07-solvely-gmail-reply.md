# Solvely Gmail Reply Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 Figma `262:12730` 的 Gmail 邮件一键回复模块加入 Solvely 案例页并发布。

**Architecture:** 沿用 `sp-pdf-context` 的多图层舞台范式，在 `SolvelyPluginsPage` 中加入独立静态 section。CSS 通过固定 1220 × 525 舞台及百分比图层坐标，精确复刻 Figma 的裁切与叠放关系。

**Tech Stack:** React、CSS、Vite、Node 断言检查。

## Global Constraints

- 仅加入 Gmail 回复模块、断言和记录。
- 不新增依赖；保留 Figma 的标题、正文、舞台、裁切和圆角。
- 发布前运行 `npm run check:solvely-plugins` 与 `npm run build`，并核对本地画面。

---

### Task 1: 先写回归断言

**Files:**
- Modify: `scripts/check-solvely-plugins.mjs`

- [ ] **Step 1: 写入失败断言。**
- [ ] **Step 2: 运行 `npm run check:solvely-plugins`，确认断言在尚未实现的模块处失败。**

### Task 2: 实现 Gmail 回复模块

**Files:**
- Modify: `src/components/SolvelyPluginsPage.jsx`
- Modify: `src/components/SolvelyPluginsPage.css`

- [ ] **Step 1: 导入三张位图与箭头 SVG。**
- [ ] **Step 2: 在划词模块之后加入独立 section、原稿文案与图层叠放。**
- [ ] **Step 3: 运行 `npm run check:solvely-plugins && npm run build`。**

### Task 3: 视觉核对

- [ ] **Step 1: 在 `http://localhost:5174/solvely-plugins` 核对图层位置、裁切和文案。**
- [ ] **Step 2: 与 Figma `262:12730` 截图逐项比对。**
