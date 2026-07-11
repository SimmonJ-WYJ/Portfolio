import { readdir, readFile, stat } from 'node:fs/promises'
import { gzipSync } from 'node:zlib'
import path from 'node:path'

const assetsDir = path.resolve('dist/assets')
const files = (await readdir(assetsDir)).filter((file) => file.endsWith('.js'))
const rows = await Promise.all(files.map(async (file) => {
  const fullPath = path.join(assetsDir, file)
  const source = await readFile(fullPath)
  return { file, raw: (await stat(fullPath)).size, gzip: gzipSync(source).length }
}))

rows.sort((a, b) => b.raw - a.raw)
for (const row of rows) {
  console.log(`${row.file}\t${Math.round(row.raw / 1024)} KB\t${Math.round(row.gzip / 1024)} KB gzip`)
}

const routeNames = ['FreeleapsPage', 'SolvelyPage', 'WawawriterPage', 'WindpopPage', 'AsciPage']
const missingRoutes = routeNames.filter((name) => !rows.some((row) => row.file.includes(name)))
if (missingRoutes.length) {
  throw new Error(`Missing lazy route chunks: ${missingRoutes.join(', ')}`)
}

const entry = rows.find((row) => row.file.startsWith('index-'))
if (!entry) throw new Error('Vite entry chunk not found')
if (entry.gzip > 900 * 1024) {
  throw new Error(`Entry gzip size ${entry.gzip} exceeds 900 KB`)
}
