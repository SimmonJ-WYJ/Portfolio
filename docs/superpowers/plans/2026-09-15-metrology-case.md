# 安全生产计量管理平台案例页 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 按 `docs/superpowers/specs/2026-09-15-metrology-case-design.md` 把设计画布落成站内案例页 `/metrology`，并在首页作品区新增入口。

**Architecture:** 文案集中在 `src/i18n/copy/metrology.js`（en / zh）；页面 `src/components/MetrologyPage.jsx` + `MetrologyPage.css`（`mt-` 前缀，取值对齐 Solvely Plugins）；图片放 `src/assets/metrology/`；封面 `src/assets/covers/metrology658_492.jpg` 由 `App.jsx` 的 `PROJECT_META` 接上路由。

**Tech Stack:** React、CSS、Vite、Node 断言检查。

### Task 1: 文案与资源
- [x] 从画布导出图片并压缩到 `src/assets/metrology/`；生成封面。
- [x] 写 `metrology.js`，注册到 `copy/index.js`。

### Task 2: 页面
- [x] `MetrologyPage.jsx` 按 spec 的结构渲染；`MetrologyPage.css` 复用 Solvely Plugins 的规格并补四档断点。
- [x] `App.jsx` 加路由与封面元数据。

### Task 3: 验证
- [x] `MetrologyPage.jsx` 加入 `check-i18n` 的无硬编码 CJK 列表。
- [x] `npm run check:i18n && npm run build`；1440 / 390 预览，无横向溢出。
