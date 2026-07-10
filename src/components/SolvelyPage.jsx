import { useEffect } from 'react'
import './SolvelyPage.css'
import heroImg from '../assets/solvely/hero.jpg'
import icHomework from '../assets/solvely/icons/homework.svg'
import icQuiz from '../assets/solvely/icons/quiz.svg'
import icEssay from '../assets/solvely/icons/essay.svg'
import icNote from '../assets/solvely/icons/note.svg'
import avKevin from '../assets/solvely/pain/kevin.png'
import avEmma from '../assets/solvely/pain/emma.png'
import avJane from '../assets/solvely/pain/jane.png'
import cmCheight from '../assets/solvely/comments/cheight.jpg'
import cmTheyloveeety from '../assets/solvely/comments/theyloveeety.jpg'
import cmEthan from '../assets/solvely/comments/ethan.jpg'
import cmJacob from '../assets/solvely/comments/jacob.jpg'
import cmEffie from '../assets/solvely/comments/effie.jpg'
import cmAidan from '../assets/solvely/comments/aidan.jpg'
import cmMichael from '../assets/solvely/comments/michael.jpg'
import cmJordan from '../assets/solvely/comments/jordan.jpg'
import cmSophia from '../assets/solvely/comments/sophia.jpg'
import cmDeandre from '../assets/solvely/comments/deandre.jpg'
import colorRamp1 from '../assets/solvely/colors/ramp1.png'
import colorRamp2 from '../assets/solvely/colors/ramp2.png'
import colorRamp3 from '../assets/solvely/colors/ramp3.png'
import colorRamp4 from '../assets/solvely/colors/ramp4.png'
import memberPhone from '../assets/solvely/member/phone.png'
import bffDeco from '../assets/solvely/bff/deco-left.png'
import bffCamera from '../assets/solvely/bff/p-camera.png'
import bffAnswer from '../assets/solvely/bff/p-answer.png'
import bffThinking from '../assets/solvely/bff/p-thinking.png'
import bffAnswer3 from '../assets/solvely/bff/p-answer3.png'
import onbSolver from '../assets/solvely/onboarding/solver.png'
import onbInstalled from '../assets/solvely/solution/ext-installed.png'
import onbStep2 from '../assets/solvely/solution/ext-step2.png'
import sampleQ from '../assets/solvely/p2/sample-q.png'
import tcIcon from '../assets/solvely/p2/tc.png'
import p5Quiz from '../assets/solvely/p5/quiz.png'
import p5Essay from '../assets/solvely/p5/essay.png'
import p5Note from '../assets/solvely/p5/note.png'
import adaptsShot from '../assets/solvely/adapts/darklight.png'
import logicFlow from '../assets/solvely/logic/flow.png'
import logicCollage from '../assets/solvely/logic/collage.png'
import wLaptop from '../assets/solvely/writer/laptop.png'
import wToolbar from '../assets/solvely/writer/toolbar.png'
import wAutocomplete from '../assets/solvely/writer/autocomplete.png'
import wLibrary from '../assets/solvely/writer/library.png'
import wRewrite from '../assets/solvely/writer/rewrite.png'
import aiScene from '../assets/solvely/ainote/scene.png'
import aiWindow from '../assets/solvely/ainote/window.png'
import lecturePhones from '../assets/solvely/lecture/phones.png'
import quizDecks from '../assets/solvely/quiz/decks.png'
import qvPhone from '../assets/solvely/quiz/cards/phone.png'
import qvChill from '../assets/solvely/quiz/cards/chill.png'
import qvSolid from '../assets/solvely/quiz/cards/solid.png'
import qvSpicy from '../assets/solvely/quiz/cards/spicy.png'
import qvSavage from '../assets/solvely/quiz/cards/savage.png'
import qvQ5 from '../assets/solvely/quiz/cards/q5.png'
import qvQ10 from '../assets/solvely/quiz/cards/q10.png'
import qvQ15 from '../assets/solvely/quiz/cards/q15.png'
import qvQ20 from '../assets/solvely/quiz/cards/q20.png'

const VIBE_CARDS = [qvChill, qvSolid, qvSpicy, qvSavage, qvQ5, qvQ10, qvQ15, qvQ20]

const IcBook = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5Z" /><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H19v3H6.5A2.5 2.5 0 0 1 4 20.5Z" /></svg>
)
const IcDoc = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>
)
const IcPdf = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M6 2h8l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" opacity="0.25" /><text x="12" y="16" fontSize="6.5" fontWeight="700" textAnchor="middle" fill="#fff">PDF</text></svg>
)

// pain-point quotes: parts marked gray render muted (#848484), rest dark
const PAIN_QUOTES = [
  {
    align: 'left', avatar: avJane, name: 'Jane Cooper', role: 'High School Student',
    parts: [
      { t: '“When I run into a tough question,', gray: true },
      { t: ' I have to switch tabs to search for the answer ', gray: false },
      { t: '— it totally breaks my study flow.”', gray: true },
    ],
  },
  {
    align: 'right', avatar: avKevin, name: 'Kevin', role: 'College Student',
    parts: [
      { t: '“While researching, I keep jumping between pages just to understand one concept', gray: false },
      { t: ' — it’s tiring and inefficient.”', gray: true },
    ],
  },
  {
    align: 'left', avatar: avEmma, name: 'Emma', role: 'International Student',
    parts: [
      { t: '“', gray: false },
      { t: 'Reading English materials is hard. ', gray: true },
      { t: 'I’m constantly copying and pasting into translators, and it makes learning feel fragmented.”', gray: false },
    ],
  },
]

// process timeline pills (positioned as % of the 1220×666 chart box)
const FLOW_PILLS = [
  { label: 'Data Analysis', solid: false, left: '16%', top: '43%', width: '18%' },
  { label: 'User Insight', solid: true, left: '20%', top: '56%', width: '17%' },
  { label: 'UX Design', solid: true, left: '47%', top: '43%', width: '14%' },
  { label: 'Dify Validation', solid: false, left: '45%', top: '56%', width: '20%' },
  { label: 'Design Output', solid: true, left: '66%', top: '43%', width: '18%' },
  { label: 'Dev Handoff', solid: false, left: '68%', top: '56%', width: '16%' },
]

const COLOR_CARDS = [
  { bg: '#007AFF', text: '#fbfcfc', sub: 'rgba(255,255,255,0.7)', label: '#fff', hex: '007AFF', name: 'Blue 1', title: 'Main Foundation', ramp: colorRamp1 },
  { bg: '#655AFF', text: '#efedff', sub: 'rgba(255,255,255,0.7)', label: '#fff', hex: 'CBDCDB', name: 'Purple', title: 'Complemwntary Colors', ramp: colorRamp2 },
  { bg: '#F0F2F4', text: '#111', sub: '#848484', label: '#141821', hex: 'F0F2F4', name: 'White', title: 'Neutral Colors', ramp: colorRamp3 },
  { bg: '#141821', text: '#fbfcfc', sub: 'rgba(255,255,255,0.7)', label: '#fff', hex: '141821', name: 'Black', title: 'Gray Colors', ramp: colorRamp4 },
]

const WRITER_FEATURES = [
  { side: 'left-media', img: wAutocomplete, title: 'AI Autocomplete', body: "Starting from a blank page, smart autocomplete helps you overcome writer's block and effortlessly enhances your writing process." },
  { side: 'right-media', img: wLibrary, title: 'In-text Citations', body: 'Accurately cite in APA, MLA, Harvard, Chicago, or IEEE style.' },
  { side: 'left-media', img: wRewrite, title: 'Paraphrase and Rewrite', body: 'Solvely allows you to rewrite a paragraph with just one click. Our editing feature is designed to be lightweight and intelligent, helping you save time.' },
]

const MORE_FEATURES = [
  { num: '01', title: 'Quiz Maker', text: 'Turn your learning materials or goals into quizzes: auto-graded, instant feedback, ideal for test prep', img: p5Quiz, rev: false },
  { num: '02', title: 'Essay Writer', text: 'Get fully-developed essays with real citations', img: p5Essay, rev: true },
  { num: '03', title: 'AI note', text: 'Transcribe class audio to text and notes, with AI Q&A support based on notes', img: p5Note, rev: false },
]

const FEATURES = [
  { icon: icHomework, border: 'rgba(20,132,255,0.16)', title: 'Homework Help', text: 'Accurately solve any homework problem, from K-12 to graduate level' },
  { icon: icQuiz, border: 'rgba(253,131,35,0.16)', title: 'Quiz Maker', text: 'Transform text into a helpful and fully customized online quiz in just a few minutes' },
  { icon: icEssay, border: 'rgba(0,175,0,0.16)', title: 'Essay Writer', text: "Work with you to create an essay with accurate information, easing writer's block" },
  { icon: icNote, border: 'rgba(135,101,255,0.16)', title: 'AI Note Taker', text: 'Transcribe class audio to text and notes, with AI Q&A support based on notes' },
]

export default function SolvelyPage() {
  // scroll-reveal: fade/slide modules, images and text blocks in with a stagger
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const SELECTOR = ['.sv-hero img', '.sv-quote', '.sv-feat', '.sv-meta', '.sv-flow-box', '.sv-pain-title', '.sv-pain-q', '.sv-sol-head', '.sv-sol-shot', '.sv-comments-title', '.sv-onb-title', '.sv-onb-block', '.sv-onb-step', '.sv-onb-step3', '.sv-results-title', '.sv-bubbles', '.sv-leg', '.sv-font-left', '.sv-font-aa', '.sv-font-bar', '.sv-colors-title', '.sv-col-card', '.sv-bff-head', '.sv-bff-main', '.sv-source-text', '.sv-card', '.sv-member-title', '.sv-member-panel', '.sv-more-title', '.sv-more-row', '.sv-adapts-title', '.sv-adapts-card', '.sv-logic-title', '.sv-logic-body', '.sv-logic-flow', '.sv-logic-collage', '.sv-writer-laptop', '.sv-writer-head', '.sv-writer-toolbar', '.sv-wt-row', '.sv-ainote-head', '.sv-ainote-window', '.sv-lecture-img', '.sv-quiz-head', '.sv-quiz-decks', '.sv-quiz-vibe'].join(', ')
    const items = Array.from(document.querySelectorAll(SELECTOR))
    const counts = new Map()
    items.forEach((el) => {
      el.classList.add('sv-anim')
      const p = el.parentElement
      const i = counts.get(p) || 0
      counts.set(p, i + 1)
      el.style.transitionDelay = Math.min(i, 9) * 140 + 'ms'
    })
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('sv-anim-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    items.forEach((el) => io.observe(el))

    // puzzle-assemble: each comment card slides into place from a varied direction
    let wio
    const wall = document.querySelector('.sv-wall')
    if (wall) {
      const cells = Array.from(wall.querySelectorAll('.cell'))
      const dirs = [
        'translate(-90px, 0)', 'translate(90px, 0)', 'translate(0, -70px)', 'translate(0, 70px)',
        'translate(-70px, -50px)', 'translate(70px, 60px)', 'scale(0.82)', 'translate(60px, -50px)',
        'translate(-60px, 50px)', 'translate(0, 90px)',
      ]
      cells.forEach((c, i) => {
        c.style.opacity = '0'
        c.style.transform = dirs[i % dirs.length]
        c.style.transition = 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)'
        c.style.transitionDelay = Math.min(i, 12) * 90 + 'ms'
        c.style.willChange = 'opacity, transform'
      })
      wio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              cells.forEach((c) => { c.style.opacity = '1'; c.style.transform = 'none' })
              wio.unobserve(e.target)
            }
          })
        },
        { threshold: 0.15 },
      )
      wio.observe(wall)
    }

    return () => { io.disconnect(); if (wio) wio.disconnect() }
  }, [])

  return (
    <main className="sv">
      <a href="/" className="case-back" data-cursor="link" data-cursor-label="Home">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        <span>Back</span>
      </a>

      <section className="sv-hero">
        <img src={heroImg} alt="Solvely — take a picture and get instant homework help" />
      </section>

      <section className="sv-intro">
        <span className="sv-year">2024</span>
        <div className="sv-intro-inner">
          <p className="sv-quote">
            <span className="sv-q">“</span>Solvely is a all-in-one AI study platform,{' '}
            <span className="sv-muted">homework explanation until AI note summary, Youtube Summary,</span>{' '}
            everything function do you want.”
          </p>
          <div className="sv-features">
            {FEATURES.map((f) => (
              <div className="sv-feat" key={f.title}>
                <div className="sv-feat-top">
                  <span className="sv-feat-ic" style={{ borderColor: f.border }}><img src={f.icon} alt="" /></span>
                  <h3 className="sv-feat-title">{f.title}</h3>
                </div>
                <p className="sv-feat-text">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="sv-meta">
            <div className="sv-meta-grid sv-meta-head">
              <span>Overview</span>
              <span>Project</span>
            </div>
            <div className="sv-meta-line" />
            <div className="sv-meta-grid sv-meta-body">
              <p>The platform enhances study efficiency through personalized AI tools, auto-summarized materials, and real-time Q&amp;A. It adapts to each student’s learning pace, making studying more interactive, efficient, and enjoyable.</p>
              <p>
                Project / Solvely<br />
                Category / AI Study Platform, EdTech<br />
                Location / San Francisco, US<br />
                Date / 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sv-flow container">
        <h2 className="sv-flow-title">How I work</h2>
        <p className="sv-flow-intro">I read the data, shape the UX around it, validate the flow in Dify, then ship the spec to development.</p>
        <div className="sv-flow-box">
          <div className="sv-flow-heads">
            <span>Data</span>
            <span>Design</span>
            <span>Delivery</span>
          </div>
          <div className="sv-flow-lines">
            {Array.from({ length: 7 }).map((_, i) => <span key={i} className="sv-flow-line" />)}
          </div>
          {FLOW_PILLS.map((p) => (
            <span
              key={p.label}
              className={p.solid ? 'sv-flow-pill sv-flow-pill--solid' : 'sv-flow-pill'}
              style={{ left: p.left, top: p.top, width: p.width }}
            >
              {p.label}
            </span>
          ))}
        </div>
      </section>

      <section className="sv-pain container">
        <h2 className="sv-pain-title">User Pain Points</h2>
        <div className="sv-pain-quotes">
          {PAIN_QUOTES.map((q) => (
            <div className={q.align === 'right' ? 'sv-pain-q sv-pain-q--right' : 'sv-pain-q sv-pain-q--left'} key={q.name}>
              <blockquote>
                {q.parts.map((p, i) => (
                  <span key={i} className={p.gray ? 'sv-pain-gray' : undefined}>{p.t}</span>
                ))}
              </blockquote>
              <div className="sv-chip"><img src={q.avatar} alt={q.name} /><span><b>{q.name}</b><i>{q.role}</i></span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="sv-solution container">
        <div className="sv-sol-head">
          <h2 className="sv-sol-title">Solution</h2>
          <p className="sv-sol-body">
            Solvely Extension is your smart learning companion built into the browser.<br />
            <b>It helps you stay focused</b> — no more switching tabs or losing momentum.
          </p>
        </div>
        <div className="sv-sol-shots">
          <video
            className="sv-sol-shot"
            src="/solvely/ext-demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Solvely extension — select your question area"
          />
        </div>
      </section>

      <section className="sv-comments container">
        <h2 className="sv-comments-title">Real Comments from<br /><span>Students and Parents</span></h2>
        <div className="sv-wall">
          <div className="wc">
            <div className="wr wr--s">
              <div className="cell cell--lg tc"><span className="tc-user">@Joshua Blackburn</span><p className="tc-quote">Easily solves and explains college level calculus. Gives all the steps and explanations for free.</p></div>
              <div className="cell cell--sm"><img src={cmCheight} alt="" loading="lazy" /></div>
            </div>
            <div className="wr wr--t">
              <div className="stack">
                <div className="cell"><img src={cmTheyloveeety} alt="" loading="lazy" /></div>
                <div className="cell"><img src={cmEthan} alt="" loading="lazy" /></div>
              </div>
              <div className="cell cell--lg"><img src={cmJacob} alt="" loading="lazy" /></div>
            </div>
            <div className="wr wr--s">
              <div className="cell cell--sm"><img src={cmEffie} alt="" loading="lazy" /></div>
              <div className="cell cell--lg tc"><span className="tc-user">@Slimshadddy</span><p className="tc-quote">It is exactly the way my professor is teaching it and I might actually pass pre-calc!</p></div>
            </div>
          </div>
          <div className="wc">
            <div className="wr wr--s">
              <div className="cell cell--lg"><img src={cmAidan} alt="" loading="lazy" /></div>
              <div className="cell cell--sm"><img src={cmMichael} alt="" loading="lazy" /></div>
            </div>
            <div className="wr wr--s">
              <div className="cell cell--sm"><img src={cmJordan} alt="" loading="lazy" /></div>
              <div className="cell cell--lg tc"><span className="tc-user">@AlexOnCamous</span><p className="tc-quote">I’ve never been good at math so this helps me check behind my son.</p></div>
            </div>
            <div className="wr wr--t">
              <div className="cell cell--sm"><img src={cmSophia} alt="" loading="lazy" /></div>
              <div className="cell cell--lg"><img src={cmDeandre} alt="" loading="lazy" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sv-onb">
        <div className="sv-onb-inner">
          <h2 className="sv-onb-title">Onboarding Iteration Design</h2>
          <div className="sv-onb-block">
            <h3>Problem Identification</h3>
            <ul>
              <li>Over 60% of new users skipped the onboarding process.</li>
              <li>Core feature visibility was low, with an average click rate below 25%.</li>
            </ul>
          </div>

          <div className="sv-onb-step">
            <img className="sv-onb-mock" src={onbInstalled} alt="Onboarding — before" loading="lazy" />
            <div className="sv-onb-note">
              <span className="sv-onb-pill">←&nbsp;Before</span>
              <p>The onboarding uses animation effects, but it fails to motivate users to complete the entire onboarding flow.</p>
            </div>
          </div>
          <div className="sv-onb-arrow" aria-hidden="true">▼</div>
          <div className="sv-onb-step">
            <img className="sv-onb-mock" src={onbSolver} alt="Onboarding — step 1" loading="lazy" />
            <div className="sv-onb-note">
              <span className="sv-onb-pill sv-onb-pill--blue">←&nbsp;Before</span>
              <p>We adopted an interactive onboarding approach and started the design after multiple rounds of feasibility checks with the frontend team, which helped effectively reduce implementation costs.</p>
            </div>
          </div>
          <div className="sv-onb-step3">
            <img className="sv-onb-mock" src={onbStep2} alt="Onboarding — step 2" loading="lazy" />
          </div>

          <div className="sv-onb-block sv-onb-block--strategy">
            <h3>Iteration Strategy</h3>
            <ul>
              <li>Introduced interactive onboarding with click prompts and real-time feedback.</li>
              <li>Used visual focus and subtle animations to highlight key actions.</li>
              <li>Redesigned onboarding into step-by-step guidance to sustain user engagement.</li>
            </ul>
          </div>

          <div className="sv-results">
            <h2 className="sv-results-title">Results &amp; Validation</h2>
            <div className="sv-bubbles">
              <span className="sv-bub sv-bub--1">↑68%</span>
              <span className="sv-bub sv-bub--2">↑30%</span>
              <span className="sv-bub sv-bub--3">↑22%</span>
            </div>
            <div className="sv-legend">
              <div className="sv-leg"><span className="sv-dot sv-dot--1" />Core feature click-through<b>68%<i>↑</i></b></div>
              <div className="sv-leg"><span className="sv-dot sv-dot--2" />Next-day user retention improved<b>30%<i>↑</i></b></div>
              <div className="sv-leg"><span className="sv-dot sv-dot--3" />Development efficiency increased<b>22%<i>↑</i></b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sv-font container">
        <div className="sv-font-grid">
          <div className="sv-font-left">
            <h2 className="sv-font-title">Font Specification</h2>
            <span className="sv-font-pill">Typography</span>
            <h3 className="sv-font-web">Website Typography</h3>
            <p className="sv-font-glyphs">{'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@€£$&*})({§?'}</p>
          </div>
          <div className="sv-font-aa">
            <span className="sv-aa-guide sv-aa-guide--top" />
            <span className="sv-aa-guide sv-aa-guide--bottom" />
            <span className="sv-aa-guide sv-aa-guide--left" />
            <span className="sv-aa-letters">Aa</span>
          </div>
        </div>
        <div className="sv-font-bar">
          <span className="sv-font-inter">Inter</span>
          <span className="sv-font-weights">Light&nbsp;&nbsp;&nbsp;Regular&nbsp;&nbsp;Medium&nbsp;&nbsp;Semibold</span>
        </div>
      </section>

      <section className="sv-colors container">
        <h2 className="sv-colors-title">Colors Specification</h2>
        <div className="sv-colors-grid">
          {COLOR_CARDS.map((c) => (
            <div className="sv-col-card" key={c.name} style={{ background: c.bg, color: c.text }}>
              <div className="sv-col-meta">
                <span className="sv-col-hex">{c.hex}</span>
                <span className="sv-col-name" style={{ color: c.sub }}>{c.name}</span>
              </div>
              <img className="sv-col-ramp" src={c.ramp} alt="" loading="lazy" />
              <span className="sv-col-label" style={{ color: c.label }}>{c.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sv-source">
        <div className="sv-source-inner">
        <div className="sv-source-text">
          <p className="sv-muted">
            The input feature supports multiple sources — web pages, PDFs, and text.<br />
            The system automatically detects the content type and generates the most relevant learning actions, such as:
          </p>
          <ul className="sv-source-list">
            <li>Extracting questions from web pages and generating quizzes</li>
            <li>Summarizing long articles automatically</li>
            <li>Recognizing academic content from PDFs and creating questions</li>
          </ul>
          <p>Users can complete the entire learning process in one click without manual setup.</p>
        </div>
        <div className="sv-cards">
          <div className="sv-cards-col">
            <div className="sv-card">
              <div className="sv-card-head">{IcBook}<span>Generate quiz</span></div>
              <div className="sv-card-img"><img src={sampleQ} alt="" loading="lazy" /></div>
            </div>
            <div className="sv-card">
              <div className="sv-card-head">{IcBook}<span>Generate quiz</span></div>
              <div className="sv-card-row">
                <span className="sv-badge sv-badge--pdf">{IcPdf}</span>
                <span className="sv-card-meta"><b>Algebra2025-01-24</b><i>PDF</i></span>
              </div>
            </div>
          </div>
          <div className="sv-cards-col">
            <div className="sv-card">
              <div className="sv-card-head">{IcBook}<span>Generate quiz</span></div>
              <p className="sv-card-text">While Musk didn’t say exactly what improvements to look for, he’d previously declared that xAI (which built Grok) would retrain the chatbot after it had been trained on “far too much garbage”</p>
            </div>
            <div className="sv-card">
              <div className="sv-card-head">{IcDoc}<span>Summarize</span></div>
              <div className="sv-card-row">
                <span className="sv-badge"><img src={tcIcon} alt="" /></span>
                <span className="sv-card-meta"><b className="sv-clip">pow‘Improved’ Grok criticizes Democrats and Hollywood’s ‘Jewish executives’</b><i className="sv-clip">https://techcrunch.com/2025/07/06/improved-grok-criticizes…</i></span>
              </div>
            </div>
          </div>
          <div className="sv-cards-col">
            <div className="sv-card">
              <div className="sv-card-head">{IcBook}<span>Generate quiz</span></div>
              <p className="sv-card-line">Use the figure shown. ABLBC and BD bisects &lt;ABC. Use the figure shown. ABLBC and BD bi…</p>
              <div className="sv-card-img"><img src={sampleQ} alt="" loading="lazy" /></div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="sv-member container">
        <h2 className="sv-member-title">Member Page</h2>
        <div className="sv-member-panel">
          <img className="sv-member-phone" src={memberPhone} alt="Solvely membership paywall" loading="lazy" />
          <div className="sv-member-text">
            <div className="sv-mb-block">
              <span className="sv-mb-label">Background</span>
              <p>Users lost interest in the membership page after multiple question generations, leading to low conversion</p>
            </div>
            <div className="sv-mb-block">
              <span className="sv-mb-label">Solution</span>
              <ul>
                <li>Triggered membership popup after 5+ generations.</li>
                <li>Used Gaussian blur to highlight the paywall.</li>
                <li>Added “blurred preview” to boost curiosity and clicks.</li>
              </ul>
            </div>
            <div className="sv-member-stat">
              <span className="sv-mb-ctr">Click-through rate<br />increased from 5.6% → 7.1%</span>
              <span className="sv-mb-pct">27%<i>↑</i></span>
            </div>
          </div>
        </div>
      </section>

      <section className="sv-bff">
        <img className="sv-bff-deco" src={bffDeco} alt="" aria-hidden="true" />
        <div className="sv-bff-inner">
        <div className="sv-bff-head">
          <h2 className="sv-bff-title">Solvely<br /><span>Your AI Study BFF</span></h2>
          <p className="sv-bff-body1"><span className="sv-bff-hl">Stuck on a problem?</span> Snap a picture or type it in—no judgment here-and let Solvely break it down step by step so you actually understand.</p>
        </div>
        <div className="sv-bff-main">
          <img className="sv-bff-camera" src={bffCamera} alt="Solvely capture" loading="lazy" />
          <div className="sv-bff-right">
            <p className="sv-bff-body2">Perfect for any level, from Baby Math 101 to those advanced courses you pretend don’t exist. Ditch the stress, level up your grades, and get more time for, well... everything else.</p>
            <div className="sv-bff-sols">
              <img src={bffThinking} alt="Solvely thinking" loading="lazy" />
              <img src={bffAnswer} alt="Solvely answer" loading="lazy" />
              <img src={bffAnswer3} alt="Solvely answers" loading="lazy" />
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="sv-more container">
        <h2 className="sv-more-title"><span className="sv-more-blue">More</span> Than<br />Just Problem-Solving</h2>
        <div className="sv-more-rows">
          {MORE_FEATURES.map((f) => (
            <div className={f.rev ? 'sv-more-row sv-more-row--rev' : 'sv-more-row'} key={f.num}>
              <div className="sv-more-text">
                <span className="sv-more-num">{f.num}</span>
                <h3 className="sv-more-name">{f.title}</h3>
                <p className="sv-more-desc">{f.text}</p>
              </div>
              <div className="sv-more-shot"><img src={f.img} alt={f.title} loading="lazy" /></div>
            </div>
          ))}
        </div>
      </section>

      <section className="sv-adapts container">
        <h2 className="sv-adapts-title">Adapts to Your Own<br /><span>Study Schedule</span></h2>
        <div className="sv-adapts-card">
          <img className="sv-adapts-shot" src={adaptsShot} alt="Solvely — light and dark mode AI homework helper" loading="lazy" />
        </div>
      </section>

      <section className="sv-logic">
        <div className="sv-logic-inner">
          <h2 className="sv-logic-title">Logic Flow Design</h2>
          <p className="sv-logic-body">Based on the existing workflow analysis, I found a large number of if/else conditions. From a design perspective, the logic identifies user inputs through different prompts, then the backend generates the corresponding essay format. The design layer was structured around this workflow to <span className="sv-logic-hl">define the process and interface more clearly.</span></p>
          <img className="sv-logic-flow" src={logicFlow} alt="Logic flow diagram — if/else conditions mapping inputs to essay outputs" loading="lazy" />
        </div>
        <img className="sv-logic-collage" src={logicCollage} alt="Essay generation flow — Let's write and Full Essay screens" loading="lazy" />
      </section>

      <section className="sv-writer">
        <img className="sv-writer-laptop" src={wLaptop} alt="Solvely Writer in a laptop" loading="lazy" />
        <div className="sv-writer-inner">
          <div className="sv-writer-head">
            <h2 className="sv-writer-title">Writer</h2>
            <p className="sv-writer-sub">Providing writing support<br />for university students across the world</p>
            <p className="sv-writer-body">By analyzing the AI workflow and prompt logic, users can simply input a title and format to generate high-quality, professional essays. The workflow and interaction design were refined to ensure a smooth and intuitive writing experience.</p>
          </div>
          <img className="sv-writer-toolbar" src={wToolbar} alt="Writer editor toolbar" loading="lazy" />
          <div className="sv-writer-timeline">
            {WRITER_FEATURES.map((f) => (
              <div className={`sv-wt-row sv-wt-row--${f.side}`} key={f.title}>
                <span className="sv-wt-dot" aria-hidden="true" />
                <div className="sv-wt-media"><img src={f.img} alt={f.title} loading="lazy" /></div>
                <div className="sv-wt-text">
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sv-ainote">
        <div className="sv-ainote-stage">
          <img className="sv-ainote-scene" src={aiScene} alt="" loading="lazy" />
          <div className="sv-ainote-head">
            <h2 className="sv-ainote-title">AI note</h2>
            <p className="sv-ainote-sub">Best AI Note Taker for Students</p>
            <p className="sv-ainote-body">From recording and transcription to intelligent summarization and insight generation, every lecture and piece of course content is transformed into concise, structured, and easy-to-read notes, enabling you to quickly review key concepts, organize information effortlessly, strengthen long-term retention, and study more effectively with the support of AI-powered learning assistance.</p>
          </div>
          <img className="sv-ainote-window" src={aiWindow} alt="Generate AI notes from your live lectures" loading="lazy" />
        </div>
      </section>

      <section className="sv-lecture">
        <img className="sv-lecture-img" src={lecturePhones} alt="Your AI Lecture Assistant — mobile app screens" loading="lazy" />
      </section>

      <section className="sv-quiz container">
        <div className="sv-quiz-head">
          <h2 className="sv-quiz-title">AI Quiz Generator</h2>
          <p className="sv-quiz-sub">Personalized learning made easy by AI Quiz Generator</p>
          <p className="sv-quiz-body">Use Solvely AI to transform text into a comprehensive quiz in seconds, filled with answers and explanations</p>
        </div>
        <img className="sv-quiz-decks" src={quizDecks} alt="Solvely quiz decks and study modes" loading="lazy" />
        <div className="sv-quiz-vibe">
          <img className="sv-qv-phone" src={qvPhone} alt="Pick your quiz vibe" loading="lazy" />
          <div className="sv-qv-text">
            <h3>Quiz Vibe Selector</h3>
            <p>Goal: Make quiz setup more engaging and intuitive.<br />Design Logic:</p>
            <ul>
              <li>Use expressive characters and colors to represent difficulty levels — from CHILL (easy) to SAVAGE SOLVI (hard).</li>
              <li>Match each vibe with a clear quiz length (5–20 questions).</li>
            </ul>
          </div>
          <div className="sv-qv-cards">
            {VIBE_CARDS.map((c, i) => (
              <img key={i} src={c} alt="" loading="lazy" />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
