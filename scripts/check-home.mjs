import assert from 'node:assert/strict'

// Homepage copy v2 — Hero → About / Core Capabilities → Selected Work → Contact.
const { default: home } = await import('../src/i18n/copy/home.js')

// The final scroll state is English in both languages.
const FINAL_KEYWORDS = ['PRODUCT THINKING', 'AI-NATIVE', 'DATA-DRIVEN', '0 → 1', 'END-TO-END']

// The three lines the author asked to lock in.
const LOCKED = {
  zh: { heroTitle: '从复杂问题中，找到清晰的产品解法。', capTitle: '我更关注问题是如何被定义和解决的。', contactHeadline: '期待加入一个认真做产品的团队。' },
  en: { heroTitle: 'Turning complex problems into clear product solutions.', capTitle: 'I care about how problems are framed and solved.', contactHeadline: 'Looking for the next team to build great products with.' },
}

for (const lang of ['en', 'zh']) {
  const t = home[lang]

  // Hero: eyebrow, one-line title, three supporting lines, a single CTA, no numbers.
  assert.equal(t.heroEyebrow, 'PRODUCT DESIGNER · 8 YEARS EXPERIENCE', `${lang}: hero eyebrow.`)
  assert.equal(t.heroTitle, LOCKED[lang].heroTitle, `${lang}: hero title is the locked line.`)
  assert.equal(t.heroLede.length, 3, `${lang}: three supporting lines.`)
  assert.equal(t.heroCta, 'View my work ↓', `${lang}: single hero CTA.`)
  for (const dead of ['heroCta2', 'heroStats', 'heroTitleWords', 'heroCopy', 'heroName', 'howTitle', 'howLines', 'manifesto', 'manifestoKeywords', 'philosophyTitle']) {
    assert.ok(!(dead in t), `${lang}: ${dead} removed.`)
  }

  // About / Core Capabilities: title + five blocks, each closing on its keyword.
  assert.equal(t.capTitle, LOCKED[lang].capTitle, `${lang}: capabilities title is the locked line.`)
  assert.deepEqual(t.capabilities.map((b) => b.keyword), FINAL_KEYWORDS, `${lang}: five keywords in order.`)
  for (const block of t.capabilities) {
    assert.ok(block.lines.length >= 2 && block.lines.length <= 3, `${lang}: ${block.keyword} has 2–3 lines.`)
    assert.ok(block.lines.every((l) => l.trim().length > 0), `${lang}: ${block.keyword} has no empty lines.`)
  }

  // Contact
  assert.equal(t.contactHeadline, LOCKED[lang].contactHeadline, `${lang}: contact headline is the locked line.`)
  assert.equal(t.contactBody.length, 2, `${lang}: two contact lines.`)
  assert.equal(t.footerTitle, 'GET IN TOUCH', `${lang}: footer CTA.`)
}

// The old single-paragraph manifesto tokenizer is gone with the old copy shape.
await assert.rejects(import('../src/components/manifestoTokens.js'), 'manifestoTokens.js removed.')

console.log('home checks passed.')
