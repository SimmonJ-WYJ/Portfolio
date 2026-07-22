import { useEffect } from 'react'
import './OvermindPage.css'

// Design sections exported from Figma, ordered by filename (s01…s35).
const sectionModules = import.meta.glob('../assets/overmind/s*.webp', { eager: true, import: 'default' })
const sectionImages = Object.keys(sectionModules).sort().map((key) => sectionModules[key])

// tone = placeholder background shown while the image loads
const SECTIONS = [
  { alt: 'OVERMIND 项目管理平台 — 产品主视觉', tone: 'blue' },
  { alt: 'Project background 项目背景 — 管理细化项目流程', tone: 'light' },
  { alt: 'Experience maps 用户体验地图', tone: 'light' },
  { alt: 'Design purpose 设计目标 — 三大 Objective 与关键结果', tone: 'dark' },
  { alt: 'Objective 1 路径简化增加效率 — KR1 缩短操作路径:个人工作台', tone: 'light' },
  { alt: 'Objective 1 — KR1 高效的操作路径 before/now 与常用功能前置', tone: 'dark' },
  { alt: 'Objective 1 — KR2 提升容器效率:整合表格信息层级、选用子弹图', tone: 'light' },
  { alt: 'Objective 1 — KR2 抽屉弹窗优化查看方式', tone: 'light' },
  { alt: 'Objective 1 — KR2 视觉降噪阅读减负:希克定律与操作栏缩纳', tone: 'light' },
  { alt: 'Objective 1 — KR2 里程碑评级子弹图 before/now', tone: 'light' },
  { alt: 'Objective 2 内容分级让阅读更高效 — 优化表格框架', tone: 'light' },
  { alt: 'Objective 2 — 自定义筛选条件', tone: 'light' },
  { alt: 'Objective 2 — 调拨高频视觉动线 before/now', tone: 'light' },
  { alt: 'Objective 2 — 克制设计降低干扰:信息降噪', tone: 'light' },
  { alt: 'Objective 2 — 文字字号、行高与间距规范', tone: 'light' },
  { alt: 'Objective 2 — 按钮样式三风格对比', tone: 'light' },
  { alt: 'Objective 2 — 人员排期模块克制设计 before/now', tone: 'light' },
  { alt: 'Objective 3 提升合作效率 — 24 栅格化工作台', tone: 'blue' },
  { alt: 'Objective 3 — 页面 XYZ 四层级划分', tone: 'light' },
  { alt: '图标设计规范 — TAB 导航与功能图标', tone: 'blue' },
  { alt: 'Objective 3 — 弹窗自适应高度规范', tone: 'blue' },
  { alt: 'Objective 3 — 组件库分类体系', tone: 'light' },
  { alt: 'Objective 3 — 组件库涵盖场景达 83%', tone: 'light' },
  { alt: '用户反馈验证和提升 — 业务效率数据', tone: 'light' },
  { alt: 'Font Specification — Website Typography 字体规范', tone: 'light' },
  { alt: 'Color Specification — 颜色规范', tone: 'light' },
]

export default function OvermindPage() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const items = Array.from(document.querySelectorAll('.om-sec:not(:first-of-type)'))
    items.forEach((el) => el.classList.add('om-anim'))
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('om-anim-in'); io.unobserve(e.target) } })
    }, { threshold: 0.08 })
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main className="om">
      <a href="/" className="case-back" data-cursor="link" data-cursor-label="Home">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        <span>Back</span>
      </a>

      {SECTIONS.map((s, i) => (
        <section className={`om-sec om-${s.tone}`} key={s.alt}>
          <img
            src={sectionImages[i]}
            alt={s.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            fetchpriority={i === 0 ? 'high' : undefined}
          />
        </section>
      ))}
    </main>
  )
}
