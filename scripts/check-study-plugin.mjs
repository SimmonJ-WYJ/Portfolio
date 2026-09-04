import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const pageUrl = new URL('../src/components/StudyPluginPage.jsx', import.meta.url)
const cssUrl = new URL('../src/components/StudyPluginPage.css', import.meta.url)

assert.match(app, /const StudyPluginPage = lazy\(\(\) => import\('\.\/components\/StudyPluginPage\.jsx'\)\)/)
assert.match(app, /'\/study-plugin': StudyPluginPage/)
assert.match(app, /StudyPlugin:\s*\{[^}]*title:\s*'Study Plugin'[^}]*link:\s*'\/study-plugin'/s)
assert.match(app, /\.sort\(\(a, b\) => Number\(b\.includes\('StudyPlugin'\)\) - Number\(a\.includes\('StudyPlugin'\)\) \|\| a\.localeCompare\(b\)\)/)
assert.match(app, /'\/solvely': SolvelyPage/)
assert.ok(existsSync(new URL('../src/assets/covers/StudyPlugin.jpg', import.meta.url)))
assert.ok(existsSync(new URL('../src/assets/study-plugin/hero.png', import.meta.url)))
assert.ok(existsSync(pageUrl), 'Study Plugin page component is missing')
assert.ok(existsSync(cssUrl), 'Study Plugin page stylesheet is missing')

const page = readFileSync(pageUrl, 'utf8')
const css = readFileSync(cssUrl, 'utf8')

assert.match(page, /import heroImage from '\.\.\/assets\/study-plugin\/hero\.png'/)
assert.match(page, /href="\/"/)
assert.match(page, /alt="Solvely browser study assistant shown on a laptop"/)
assert.match(page, /fetchpriority="high"/)
assert.doesNotMatch(page, /fetchPriority=/)
assert.match(css, /background:\s*#eef1f5/)
assert.match(css, /aspect-ratio:\s*1440\s*\/\s*739/)
assert.match(css, /width:\s*68\.611111%/)
assert.match(css, /left:\s*15\.694444%/)
assert.match(css, /top:\s*21\.65088%/)
assert.match(css, /@media \(max-width: 700px\)/)

console.log('Study Plugin source contract OK')
