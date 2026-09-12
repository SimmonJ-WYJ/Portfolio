// Minimal inline markup for copy strings: `**text**` marks a bold span.
// Kept deliberately tiny — bold is the only emphasis the case-study copy uses,
// and authoring `**…**` in a plain string is far easier for a translator than
// hand-writing JSX segments. No HTML is ever parsed or injected.

/**
 * Split a copy string into ordered segments.
 * @param {string | undefined | null} input
 * @returns {{ text: string, bold: boolean }[]}
 */
export function parseRich(input) {
  if (!input) return []
  const parts = String(input).split('**')
  // `split` alternates plain / bold / plain … so an even count means the last
  // marker never closed. Fold it back in literally instead of losing text.
  if (parts.length % 2 === 0) {
    const tail = parts.pop()
    parts[parts.length - 1] += '**' + tail
  }
  return parts
    .map((text, i) => ({ text, bold: i % 2 === 1 }))
    .filter((s) => s.text !== '')
}
