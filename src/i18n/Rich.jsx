import { Fragment } from 'react'
import { parseRich } from './rich.js'

// Renders a copy string that may contain `**bold**` spans. Segments are
// emitted as plain text nodes and <strong> elements — never as HTML — so the
// translator can write emphasis inline without any risk of injection.
export default function Rich({ text }) {
  return parseRich(text).map((s, i) =>
    s.bold ? <strong key={i}>{s.text}</strong> : <Fragment key={i}>{s.text}</Fragment>,
  )
}
