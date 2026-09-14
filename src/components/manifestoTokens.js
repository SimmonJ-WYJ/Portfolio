// Tokenizer shared by StudioManifesto and scripts/check-home.mjs.
//
// Greedily mark the first occurrence of each keyword. Phrase keywords
// (e.g. "PRODUCT THINKING", "0 → 1") span several space-separated words and
// stay one node. The Chinese paragraph is authored with spaces between phrases
// so it tokenizes through the same path; `core` therefore keeps CJK codepoints
// as well as latin, digits and the arrow, dropping only punctuation.
export function buildTokens(paragraph, keywords) {
  const core = (s) => s.replace(/[^A-Za-z0-9一-鿿→-]/g, '').toUpperCase()
  const words = paragraph.split(' ')
  const used = new Set()
  const tokens = []
  for (let i = 0; i < words.length; i += 1) {
    const ki = keywords.findIndex(
      (kw, k) => !used.has(k) && kw.split(' ').every((part, j) => core(words[i + j] || '') === part),
    )
    if (ki !== -1) {
      const parts = keywords[ki].split(' ')
      used.add(ki)
      tokens.push({ text: words.slice(i, i + parts.length).join(' '), core: keywords[ki], isKeyword: true, ki })
      i += parts.length - 1
    } else {
      tokens.push({ text: words[i], core: core(words[i]), isKeyword: false, ki: -1 })
    }
  }
  return tokens
}
