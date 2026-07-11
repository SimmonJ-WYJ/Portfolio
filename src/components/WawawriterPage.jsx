import { useEffect } from 'react'
import './WawawriterPage.css'
import heroLaptop from '../assets/wawa/hero/laptop.png'
import s01Comp from '../assets/wawa/s01/comp.png'
import s5After from '../assets/wawa/s5/after.png'
import s5Before from '../assets/wawa/s5/before.png'
import s5Stats from '../assets/wawa/s5/stats.png'
import s6Before from '../assets/wawa/s6/before.png'
import s6After from '../assets/wawa/s6/after.png'
import s6Chart1 from '../assets/wawa/s6/chart1.png'
import s6Chart2 from '../assets/wawa/s6/chart2.png'
import endIpad from '../assets/wawa/end/ipad.jpg'

const COLOR_SWATCHES = [
  { bg: '#cbdcdb', fg: '#346553' },
  { bg: '#346553', fg: '#cbdcdb' },
  { bg: '#1dbe6b', fg: '#c5fac4' },
  { bg: '#c5fac4', fg: '#346553' },
]

const USER_GROUPS = [
  { name: '新用户', bold: '需要引导', sub: '熟悉产品' },
  { name: '低频用户', bold: '偶尔写作', sub: '想提高效率' },
  { name: '高频用户', bold: '高产写作', sub: '经常上传作品' },
]

const META = [
  {
    title: '行业', sub: '多模态AI产品',
    icon: (<svg viewBox="0 0 24 24" fill="none"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z" fill="#0bb861" /></svg>),
  },
  {
    title: '服务', sub: 'UI/UX 设计/开发',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#0bb861" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 8l-4 4 4 4M15 8l4 4-4 4" /></svg>),
  },
  {
    title: '团队配置', sub: '设计师+产品+开发',
    icon: (<svg viewBox="0 0 24 24" fill="#0bb861"><circle cx="8" cy="8" r="2.4" /><circle cx="16" cy="8" r="2.4" /><circle cx="12" cy="15" r="2.4" /></svg>),
  },
  {
    title: '时间周期', sub: '2 周',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#0bb861" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M4 9h16M8 3v4M16 3v4" /></svg>),
  },
]

export default function WawawriterPage() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const SELECTOR = ['.ww-hero img', '.ww-meta-col', '.ww-s01-head', '.ww-s01-text', '.ww-s01-comp', '.ww-s2-title', '.ww-s2-card', '.ww-s3-card', '.ww-s4-weights', '.ww-s4-aa', '.ww-s4-glyphs', '.ww-s5-title', '.ww-s5-shots', '.ww-s5-opt', '.ww-s5-stat', '.ww-s5-bars', '.ww-s6-top', '.ww-s6-shots', '.ww-s6-sol', '.ww-s6-charts', '.ww-s7-ipad'].join(', ')
    const items = Array.from(document.querySelectorAll(SELECTOR))
    const counts = new Map()
    items.forEach((el) => {
      el.classList.add('ww-anim')
      const p = el.parentElement
      const i = counts.get(p) || 0
      counts.set(p, i + 1)
      el.style.transitionDelay = Math.min(i, 8) * 120 + 'ms'
    })
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('ww-anim-in'); io.unobserve(e.target) } })
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main className="wawa">
      <a href="/" className="case-back" data-cursor="link" data-cursor-label="Home">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
        <span>Back</span>
      </a>

      <section className="ww-hero">
        <img src={heroLaptop} alt="蛙蛙写作 — 首页样机" loading="eager" decoding="async" fetchpriority="high" />
      </section>

      <section className="ww-meta">
        <div className="ww-meta-inner">
          {META.map((m) => (
            <div className="ww-meta-col" key={m.title}>
              <span className="ww-meta-ic">{m.icon}</span>
              <h3>{m.title}</h3>
              <p>{m.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ww-s01 ww-board">
        <div className="ww-s01-stage">
          <h2 className="ww-s01-head">首页改版<br />项目背景</h2>
          <p className="ww-s01-text">在过去的一年时间里，页面上有很多为了解决当时问题的设计细节调整，并没有系统的设计规划，导致很多体验细节设计不合理且未能彻底解决存在的问题。</p>
          <img className="ww-s01-comp" src={s01Comp} alt="改版前后对比" loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="ww-s2 ww-board">
        <div className="ww-s2-inner">
          <h2 className="ww-s2-title">用户群体</h2>
          <div className="ww-s2-cards">
            {USER_GROUPS.map((g) => (
              <div className="ww-s2-card" key={g.name}>
                <div className="ww-s2-circle"><span>{g.name}</span></div>
                <div className="ww-s2-cap"><b>{g.bold}</b><span>{g.sub}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ww-s3 ww-board">
        <div className="ww-s3-inner">
          <div className="ww-s3-grid">
            {COLOR_SWATCHES.map((c, i) => (
              <div className="ww-s3-card" key={i} style={{ background: c.bg, color: c.fg }}>
                <span className="ww-s3-hex">CBDCDB</span>
                <span className="ww-s3-name">Wawa Green</span>
                <span className="ww-s3-dot" style={{ background: c.fg }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ww-s4 ww-board">
        <div className="ww-s4-stage">
          <div className="ww-s4-weights">
            <span>Light</span>
            <span>Regular</span>
            <span>Medium</span>
          </div>
          <p className="ww-s4-glyphs">{'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@€£$&*})({§?'}</p>
          <span className="ww-s4-aa">Aa</span>
          <span className="ww-s4-pill ww-s4-pill--1">PingFang SC</span>
          <span className="ww-s4-pill ww-s4-pill--2">PingFang SC</span>
        </div>
      </section>

      <section className="ww-s5 ww-board">
        <div className="ww-s5-inner">
          <h2 className="ww-s5-title">营销层模块<br />优化</h2>
          <div className="ww-s5-shots">
            <div className="ww-s5-shot ww-s5-shot--before">
              <span className="ww-pill ww-pill--gray">Before</span>
              <img src={s5Before} alt="改版前营销模块" loading="lazy" decoding="async" />
            </div>
            <div className="ww-s5-shot ww-s5-shot--after">
              <span className="ww-pill ww-pill--green">After</span>
              <img src={s5After} alt="改版后营销模块" loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="ww-s5-opt">
            <h3>优化内容：</h3>
            <ul>
              <li>使用更贴切的视觉元素进行功能展示</li>
              <li>精简 Banner 营销位，减少干扰</li>
            </ul>
          </div>
          <div className="ww-s5-stat">
            <span className="ww-s5-num">65%<i>↑</i></span>
            <span className="ww-s5-cap">功能点击率从 6.3% → 12.5%</span>
          </div>
        </div>
        <img className="ww-s5-bars" src={s5Stats} alt="转化数据：注册转化率 +35%，营销页点击率 +40%，订阅付费转化率 +63%" loading="lazy" decoding="async" />
      </section>

      <section className="ww-s6 ww-board">
        <div className="ww-s6-inner">
          <div className="ww-s6-top">
            <h2 className="ww-s6-title">写作编辑器<br />板块迭代</h2>
            <div className="ww-s6-problem">
              <h3>问题：</h3>
              <ul>
                <li>内容展开时打断思路</li>
                <li>占用编辑区过大</li>
                <li>入口不突出，作者难以找到</li>
              </ul>
            </div>
          </div>
          <div className="ww-s6-shots">
            <div className="ww-s6-shot ww-s6-shot--before">
              <span className="ww-pill ww-pill--gray">Before</span>
              <img src={s6Before} alt="改版前编辑器" loading="lazy" decoding="async" />
            </div>
            <div className="ww-s6-shot ww-s6-shot--after">
              <span className="ww-pill ww-pill--green">After</span>
              <img src={s6After} alt="改版后编辑器" loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="ww-s6-sol">
            <h3>解决方案：</h3>
            <ul>
              <li>降低背景干扰，突出编辑区</li>
              <li>角色单独放入侧板块，便于对照</li>
              <li>保持编辑区纯净，增强模块独特性</li>
            </ul>
          </div>
          <div className="ww-s6-charts">
            <img src={s6Chart1} alt="改版前后对比：模版使用率 35%→80%，写作时间节省 15%→38%" loading="lazy" decoding="async" />
            <img src={s6Chart2} alt="人均生成字数 +72.9%" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="ww-s7 ww-board">
        <img className="ww-s7-ipad" src={endIpad} alt="蛙蛙写作 iPad 端" loading="lazy" decoding="async" />
      </section>
    </main>
  )
}
