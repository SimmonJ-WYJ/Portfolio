# Solvely Dialog Detail Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 Figma `262:12755` 的 AI 对话流细节优化模块加入 Solvely 案例页并发布。

**Architecture:** 沿用 `sp-gmail-reply` 的舞台范式，在 `SolvelyPluginsPage` 中加入独立静态 section。舞台改用 1220 × 580 比例，四张卡片以百分比绝对定位复刻 Figma 坐标。

**Tech Stack:** React、CSS、Vite、Node 断言检查。

## Global Constraints

- 仅加入本模块、断言和记录。
- 不新增依赖；保留 Figma 的标题、正文、舞台比例和圆角。
- 发布前运行 `npm run check:solvely-plugins` 与 `npm run build`，并核对本地画面。

---

### Task 1: 先写回归断言

**Files:**
- Modify: `scripts/check-solvely-plugins.mjs`

- [ ] **Step 1: 写入失败断言，锁定 1220/580 舞台与四张卡片坐标。**
- [ ] **Step 2: 运行 `npm run check:solvely-plugins`，确认断言在尚未实现的模块处失败。**

### Task 2: 实现四卡模块

**Files:**
- Modify: `src/components/SolvelyPluginsPage.jsx`
- Modify: `src/components/SolvelyPluginsPage.css`

- [ ] **Step 1: 导入四张卡片位图。**
- [ ] **Step 2: 在 Gmail 回复模块之后加入独立 section 与原稿文案。**
- [ ] **Step 3: 运行 `npm run check:solvely-plugins && npm run build`。**

### Task 3: 视觉核对

- [ ] **Step 1: 在 `http://localhost:5174/solvely-plugins` 核对卡片位置与文案。**
- [ ] **Step 2: 与 Figma `262:12755` 截图做像素级 diff。**

### Task 4: 替换高清资源

- [ ] **Step 1: 收到设计方 3 倍导出后覆盖同名文件。**
- [ ] **Step 2: 重跑断言与构建，确认几何未变。**
