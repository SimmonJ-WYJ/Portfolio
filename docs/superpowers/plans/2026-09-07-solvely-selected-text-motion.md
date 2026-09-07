# Solvely Selected-text Motion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 Figma `262:12743` 的网页划词动效模块加入 Solvely 案例页并发布。

**Architecture:** 复用已有的 `滑词.mp4` 和 `useMediaVisibility`，在 `SolvelyPluginsPage` 中加入独立 section。CSS 通过固定 1220 × 525 舞台及百分比视频窗口坐标，精确复刻 Figma 的裁切关系。

**Tech Stack:** React、CSS、Vite、Node 断言检查、GitHub Git Data API。

## Global Constraints

- 仅加入网页划词模块、断言和记录。
- 不新增依赖；保留 Figma 的标题、正文、舞台、裁切和圆角。
- 发布前运行 `npm run check:solvely-plugins` 与 `npm run build`，并核对本地和线上画面。

---

### Task 1: 先写回归断言

**Files:**
- Modify: `scripts/check-solvely-plugins.mjs`

- [ ] **Step 1: 写入失败断言。**
- [ ] **Step 2: 运行 `npm run check:solvely-plugins`，确认断言在尚未实现的模块处失败。**

### Task 2: 实现网页划词动效

**Files:**
- Modify: `src/components/SolvelyPluginsPage.jsx`
- Modify: `src/components/SolvelyPluginsPage.css`

- [ ] **Step 1: 添加视频 ref 和滚入视区自动播放行为。**
- [ ] **Step 2: 添加独立 section、真实 MP4、原稿文案和 3.35% 顶部裁切。**
- [ ] **Step 3: 运行 `npm run check:solvely-plugins && npm run build`。**

### Task 3: 视觉与线上核对

- [ ] **Step 1: 在 `http://127.0.0.1:5174/solvely-plugins` 核对视频、裁切和文案。**
- [ ] **Step 2: 推送 `main`，等待 Vercel 提交状态为 `success`。**
- [ ] **Step 3: 在 `https://www.simmonj.com/solvely-plugins` 核对生产版。**
