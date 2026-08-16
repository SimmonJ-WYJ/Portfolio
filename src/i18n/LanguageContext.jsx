import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import COPY from './copy/index.js'

// Site-wide language state. English is the default; the visitor's choice is
// remembered in localStorage and mirrored onto <html lang> so the CJK font
// fallback stack in styles.css can key off it.
const STORAGE_KEY = 'portfolio:lang'
export const LANGS = ['en', 'zh']

const LanguageContext = createContext({ lang: 'en', setLang: () => {}, toggle: () => {} })

function readStoredLang() {
  if (typeof window === 'undefined') return 'en'
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved && LANGS.includes(saved)) return saved
  } catch {
    // localStorage can throw in private browsing modes — fall back to default.
  }
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore write failures; the toggle still works for this session
    }
  }, [lang])

  const setLang = useCallback((next) => {
    if (LANGS.includes(next)) setLangState(next)
  }, [])
  const toggle = useCallback(() => setLangState((prev) => (prev === 'en' ? 'zh' : 'en')), [])

  const value = useMemo(() => ({ lang, setLang, toggle }), [lang, setLang, toggle])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  return useContext(LanguageContext)
}

// Returns the copy block for one page in the active language, falling back to
// English for any page that has not been translated yet.
export function useCopy(page) {
  const { lang } = useLang()
  const block = COPY[page]
  if (!block) return {}
  return block[lang] || block.en || {}
}
