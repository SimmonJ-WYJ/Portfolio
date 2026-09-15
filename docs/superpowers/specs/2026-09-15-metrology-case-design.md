# 安全生产计量管理平台案例页 — 设计说明

> 来源：设计画布 https://claude.ai/artifact/TFjANys6t3BhEcKfwGyxmM（v1789484979）
> 路由：`/metrology`
> 版式：与 Solvely Plugins 案例页一致（`SolvelyPluginsPage.css` 的取值）

## 结构

Hero（#eef1f5，左文案右 3D 图）→ 角色 / 客户 / 平台 → 标题 + 背景 + 成果卡 → 项目背景（饼图）→ 立项阶段（现场照片）→ 用户体验地图 → 需求分析（韦恩图）→ 明确设计目标（四张卡）→ 内容分级（层级图、看板、表格）→ 高价值数据（仪表盘、表格框架）→ 提升操作效率（物流卡片 + 四个交互）→ 增强多角色异步协同（24 栅格、色彩、字体）→ 设计结果验证（三条指标）。

## 约束

- 客户脱敏：只写「某头部酒企」，不出现品牌与香型名。
- 文案：中文为原稿，英文为翻译；关键词、规范数值、界面截图内文字两种语言一致。
- 图片：Keynote 原稿导出，≤ 1400px 宽、JPEG；hero 为透明底 WebP；封面 658×492。
- 响应式：1320 / 1024 / 768 / 480 四档；体验地图在窄屏内横向滚动，其余网格逐级折成单列；页面不得出现横向溢出。
- 首页 Selected Work 新增封面卡片，链到 `/metrology`；其余卡片不动。

## 验收

- `npm run check:i18n`（中英键对齐、页面无硬编码 CJK）、`npm run build`
- 1440 / 390 两档预览，`document.documentElement.scrollWidth === innerWidth`
