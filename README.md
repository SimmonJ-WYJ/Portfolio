# OPENSCI Portfolio

个人作品集网站，包含 ASCI、Freeleaps、Solvely、Wawa Writer 和 Windpop 项目详情页。

## 本地开发

环境要求：Node.js 18 或更高版本。

```bash
npm ci
npm run dev
```

开发服务器默认运行在 `http://localhost:5173`。

## 生产构建与本地预览

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

预览地址为 `http://127.0.0.1:4173`，构建产物位于 `dist/`。

## 目录结构

```text
public/             直接提供的静态文件
src/assets/         项目图片、字体和品牌资源
src/components/     页面组件与样式
src/App.jsx         页面入口与路由分发
src/data.js         站点内容数据
src/styles.css      全局样式
```

`node_modules/`、`dist/` 和本机部署状态不会提交到项目中。
