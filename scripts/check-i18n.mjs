import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'

// ---------------------------------------------------------------------------
// 1. Rich-text parser: `**bold**` markup inside copy strings.
// ---------------------------------------------------------------------------
const { parseRich } = await import('../src/i18n/rich.js')

const seg = (text, bold = false) => ({ text, bold })

assert.deepEqual(parseRich('plain'), [seg('plain')],
  'Plain text must come back as a single non-bold segment.')
assert.deepEqual(parseRich('a **b** c'), [seg('a '), seg('b', true), seg(' c')],
  'A bold span in the middle must split into three segments.')
assert.deepEqual(parseRich('**lead** rest'), [seg('lead', true), seg(' rest')],
  'A leading bold span must not produce an empty first segment.')
assert.deepEqual(parseRich('x **y**'), [seg('x '), seg('y', true)],
  'A trailing bold span must not produce an empty last segment.')
assert.deepEqual(parseRich('a **b** c **d** e'),
  [seg('a '), seg('b', true), seg(' c '), seg('d', true), seg(' e')],
  'Multiple bold spans must each be isolated.')
assert.deepEqual(parseRich('在**初创公司中设计流程是灵活的**。'),
  [seg('在'), seg('初创公司中设计流程是灵活的', true), seg('。')],
  'CJK text must split without relying on word boundaries.')
assert.deepEqual(parseRich('odd ** marker'), [seg('odd ** marker')],
  'An unmatched marker must be kept literally rather than dropping text.')
assert.deepEqual(parseRich(''), [], 'Empty input must yield no segments.')
assert.deepEqual(parseRich(undefined), [], 'Missing input must yield no segments.')

// ---------------------------------------------------------------------------
// 2. Every copy module must expose the same keys in en and zh.
// ---------------------------------------------------------------------------
const copyDir = new URL('../src/i18n/copy/', import.meta.url)
const modules = (await readdir(copyDir)).filter((f) => f.endsWith('.js') && f !== 'index.js')
for (const file of modules) {
  const { default: block } = await import(new URL(file, copyDir))
  const en = Object.keys(block.en ?? {}).sort()
  const zh = Object.keys(block.zh ?? {}).sort()
  assert.deepEqual(zh, en, `${file}: zh keys must mirror en keys exactly.`)
}

// ---------------------------------------------------------------------------
// 3. Pages wired to useCopy must not carry hardcoded CJK copy in their JSX.
// ---------------------------------------------------------------------------
const WIRED = [
  'SolvelyPluginsPage.jsx',
  'SolvelyPage.jsx',
  'FreeleapsPage.jsx',
  'AsciPage.jsx',
]
for (const name of WIRED) {
  const src = await readFile(new URL(`../src/components/${name}`, import.meta.url), 'utf8')
  assert.match(src, /useCopy\(/, `${name} must read its copy through useCopy.`)
  // Strip comments and import lines before scanning: explanatory notes may stay
  // in Chinese, and several video assets have Chinese filenames.
  const code = src
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/^import .*$/gm, '')
  const cjk = code.match(/[一-鿿]/g)
  assert.equal(cjk, null,
    `${name} still hardcodes ${cjk?.length ?? 0} CJK character(s); move that copy into src/i18n/copy.`)
}

console.log('i18n checks passed.')
