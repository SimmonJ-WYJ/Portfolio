# Solvely「从 Canvas 扩展到更多场景」实施计划

> Execute this plan with the existing Portfolio workspace. Do not change unrelated showcase modules.

1. 扩展 `scripts/check-solvely-plugins.mjs`，先断言新模块的四张静态资源、原稿文案与 Figma 几何；运行检查并确认其在实现前失败。
2. 将 Figma 导出的 YouTube、Gmail、Canvas、PDF 原图放入 `src/assets/solvely-plugins/`，在 `SolvelyPluginsPage.jsx` 添加独立模块，并在 CSS 中实现 1220 × 668 拼贴舞台和 Canvas 的原稿裁切。
3. 运行模块检查和生产构建，并在本地 `5174` 页面目视对照 Figma；仅在用户确认后再提交与部署。

