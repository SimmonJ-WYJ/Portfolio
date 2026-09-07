# Solvely PDF Context Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 Figma `262:12737` 的 PDF 上下文展示模块加入 Solvely 案例页并发布。

**Architecture:** 采用 Figma 导出的 PDF 浏览器静态图、插件侧栏静态图和红色 SVG 连接箭头，在现有 `SolvelyPluginsPage` 中形成一个独立 section。CSS 以 1220 × 525 的百分比坐标复刻画面和裁切。

**Tech Stack:** React、CSS、Vite、Node 断言检查、GitHub Git Data API。

## Global Constraints

- 仅加入 PDF 上下文模块、其资源、断言和记录。
- 不新增依赖；保留 Figma 的标题、正文、裁切和圆角。
- 发布前运行 `npm run check:solvely-plugins` 与 `npm run build`，并核对本地和线上画面。

---

### Task 1: 先写回归断言

**Files:**
- Modify: `scripts/check-solvely-plugins.mjs`

- [ ] **Step 1: 写入失败断言**

```js
assert.match(page, /<section className="sp-pdf-context">[\s\S]*src=\{pdfContextReader\}[\s\S]*src=\{pdfContextSidebar\}/)
assert.match(styles, /\.sp-pdf-context-stage\s*\{[\s\S]*aspect-ratio:\s*1220\s*\/\s*525[\s\S]*border-radius:\s*32px/)
```

- [ ] **Step 2: 运行断言并确认失败**

Run: `npm run check:solvely-plugins`

Expected: `AssertionError` 指向尚未实现的 PDF 上下文模块。

### Task 2: 实现静态 PDF 上下文展示

**Files:**
- Create: `src/assets/solvely-plugins/pdf-context-reader.png`
- Create: `src/assets/solvely-plugins/pdf-context-sidebar.png`
- Create: `src/assets/solvely-plugins/pdf-context-flow.svg`
- Modify: `src/components/SolvelyPluginsPage.jsx`
- Modify: `src/components/SolvelyPluginsPage.css`

- [ ] **Step 1: 导入 Figma 原始资源**

```jsx
import pdfContextReader from '../assets/solvely-plugins/pdf-context-reader.png'
import pdfContextSidebar from '../assets/solvely-plugins/pdf-context-sidebar.png'
import pdfContextFlow from '../assets/solvely-plugins/pdf-context-flow.svg'
```

- [ ] **Step 2: 添加独立 section、原稿裁切、箭头与文案**

```jsx
<section className="sp-pdf-context">
  <div className="sp-pdf-context-stage">...</div>
  <div className="sp-pdf-context-copy">...</div>
</section>
```

- [ ] **Step 3: 验证通过并构建**

Run: `npm run check:solvely-plugins && npm run build`

Expected: 两条命令退出码均为 0。

### Task 3: 视觉与线上核对

**Files:**
- No additional source files.

- [ ] **Step 1: 在 `http://127.0.0.1:5174/solvely-plugins` 核对 PDF 画面、侧栏、箭头与文案。**
- [ ] **Step 2: 推送 `main`，等待 Vercel 提交状态为 `success`。**
- [ ] **Step 3: 在 `https://www.simmonj.com/solvely-plugins` 核对生产版。**

