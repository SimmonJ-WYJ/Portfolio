# Solvely YouTube Summary Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 Figma `262:12722` 的 YouTube 视频总结展示模块加入 Solvely 案例页并发布。

**Architecture:** 使用 Figma 的三个原始静态图和两个导出 SVG 箭头，独立封装为现有 `SolvelyPluginsPage` 中的一个 section。CSS 以相对百分比保留 1220px 原稿比例，移动端整体缩放。

**Tech Stack:** React、CSS、Vite、Node 断言检查、GitHub Git Data API。

## Global Constraints

- 仅修改 YouTube 总结模块及其验证、资产和记录。
- 保留 Figma 标题、正文、裁切、32px 舞台圆角和 6px 主画面圆角。
- 无需新增依赖；通过 `npm run check:solvely-plugins`、`npm run build` 和线上视觉核对后发布。

---

### Task 1: 定义可回归验证

**Files:**
- Modify: `scripts/check-solvely-plugins.mjs`

**Interfaces:**
- Consumes: `SolvelyPluginsPage.jsx` 的 `sp-youtube-summary` section 与 `SolvelyPluginsPage.css`。
- Produces: 对资源、原稿文案与几何的静态检查。

- [ ] **Step 1: 写入失败断言**

```js
assert.match(page, /<section className="sp-youtube-summary">[\s\S]*src=\{youtubeSummaryMain\}[\s\S]*src=\{youtubeSummaryPrompt\}[\s\S]*src=\{youtubeSummaryGenerated\}/)
assert.match(styles, /\.sp-youtube-summary-stage\s*\{[\s\S]*aspect-ratio:\s*1220\s*\/\s*525[\s\S]*border-radius:\s*32px/)
```

- [ ] **Step 2: 运行失败检查**

Run: `npm run check:solvely-plugins`

Expected: `AssertionError`，指出 YouTube 总结模块尚未实现。

### Task 2: 实现 Figma 静态展示

**Files:**
- Create: `src/assets/solvely-plugins/youtube-summary-main.png`
- Create: `src/assets/solvely-plugins/youtube-summary-prompt.png`
- Create: `src/assets/solvely-plugins/youtube-summary-generated.png`
- Create: `src/assets/solvely-plugins/youtube-summary-flow.svg`
- Create: `src/assets/solvely-plugins/youtube-summary-down-arrow.svg`
- Modify: `src/components/SolvelyPluginsPage.jsx`
- Modify: `src/components/SolvelyPluginsPage.css`

**Interfaces:**
- Consumes: Figma `262:12722` exported raw assets.
- Produces: `sp-youtube-summary` 版块和响应式布局。

- [ ] **Step 1: 下载原稿资源并导入**

```jsx
import youtubeSummaryMain from '../assets/solvely-plugins/youtube-summary-main.png'
import youtubeSummaryPrompt from '../assets/solvely-plugins/youtube-summary-prompt.png'
import youtubeSummaryGenerated from '../assets/solvely-plugins/youtube-summary-generated.png'
```

- [ ] **Step 2: 加入舞台、流程箭头与原稿文案**

```jsx
<section className="sp-youtube-summary">
  <div className="sp-youtube-summary-stage">...</div>
  <div className="sp-youtube-summary-copy">...</div>
</section>
```

- [ ] **Step 3: 运行通过检查与生产构建**

Run: `npm run check:solvely-plugins && npm run build`

Expected: 两个命令退出码为 0。

### Task 3: 视觉与发布核对

**Files:**
- No additional source files.

- [ ] **Step 1: 在 `http://127.0.0.1:5174/solvely-plugins` 目视核对完整舞台、裁切、箭头、标题和正文。**
- [ ] **Step 2: 提交到 `main` 并等待 Vercel status 为 `success`。**
- [ ] **Step 3: 打开 `https://www.simmonj.com/solvely-plugins`，核对生产版画面。**

