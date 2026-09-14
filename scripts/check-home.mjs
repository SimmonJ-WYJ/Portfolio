import assert from 'node:assert/strict'

// Homepage copy v1.0 — see docs/superpowers/specs/2026-09-14-homepage-copy-spec-{en,zh}.md
const { default: home } = await import('../src/i18n/copy/home.js')
const { buildTokens } = await import('../src/components/manifestoTokens.js')

const FINAL_KEYWORDS = {
  en: ['PRODUCT THINKING', 'AI-NATIVE', 'DATA-DRIVEN', '0 → 1', 'END-TO-END'],
  zh: ['产品思维', 'AI 原生', '数据驱动', '0 → 1', '全链路落地'],
}

for (const lang of ['en', 'zh']) {
  const t = home[lang]

  // Hero + numbers
  assert.equal(typeof t.heroTitle, 'string', `${lang}: heroTitle is a single headline string.`)
  assert.ok(!('heroTitleWords' in t) && !('heroCopy' in t) && !('heroName' in t),
    `${lang}: dead hero keys removed.`)
  assert.ok(Array.isArray(t.heroLede) && t.heroLede.length >= 3, `${lang}: heroLede is a list of short lines.`)
  assert.ok(t.heroLede.at(-1).includes('**'), `${lang}: the last hero line carries the bold emphasis.`)
  assert.equal(t.heroStats.length, 4, `${lang}: four proof numbers.`)
  assert.deepEqual(t.heroStats.map((s) => s.figure), ['8', '3+', '30% → 60%', '300 → 800'].map((f, i) =>
    lang === 'en' ? ['8 years', '3+ AI products', '30% → 60%', '300 → 800'][i] : ['8 年', '3+ 款 AI 产品', '30% → 60%', '300 → 800'][i]),
    `${lang}: proof numbers match the spec.`)

  // How I work
  assert.ok(t.howTitle, `${lang}: How I Work has a title.`)
  assert.ok(Array.isArray(t.howLines) && t.howLines.some((l) => l.includes('**')),
    `${lang}: How I Work ends with the bold process line.`)

  // Core capabilities — every final keyword must tokenize exactly once
  assert.deepEqual(t.manifestoKeywords, FINAL_KEYWORDS[lang], `${lang}: five final capability keywords.`)
  const tokens = buildTokens(t.manifesto, t.manifestoKeywords)
  const hits = tokens.filter((tok) => tok.isKeyword).map((tok) => tok.core)
  assert.deepEqual([...hits].sort(), [...t.manifestoKeywords].sort(),
    `${lang}: every keyword must appear verbatim in the manifesto so the tokenizer can lift it.`)
  for (const banned of ['USER-CENTERED', 'SCALABLE', '以用户为中心', '可扩展']) {
    assert.ok(!t.manifesto.includes(banned), `${lang}: "${banned}" removed from the manifesto.`)
  }

  // Contact (the Philosophy section was dropped)
  assert.ok(!('philosophyTitle' in t), `${lang}: no Philosophy copy.`)
  assert.ok(t.contactHeadline && Array.isArray(t.contactBody), `${lang}: contact headline + body.`)
  assert.equal(t.footerLabel, 'AI Product Design · 0 → 1 · UX · Shanghai', `${lang}: footer label per spec.`)
  assert.ok(!('footerDesc' in t), `${lang}: footerDesc template copy removed.`)
}

// The English body is authored in sentence case; keywords stay uppercase inline.
assert.notEqual(home.en.manifesto, home.en.manifesto.toUpperCase(), 'en manifesto is no longer shouted.')

console.log('home checks passed.')
