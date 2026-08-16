import { LANGS, useLang } from '../i18n/LanguageContext.jsx'

const LABELS = { en: 'EN', zh: '中文' }
const ARIA = { en: 'Switch language', zh: '切换语言' }

// Two-state language switch. `variant="nav"` sits inline in the homepage nav;
// `variant="float"` pins itself top-right on project detail pages, which have
// no shared nav of their own.
export default function LangToggle({ variant = 'nav' }) {
  const { lang, setLang } = useLang()

  return (
    <div
      className={`lang-toggle lang-toggle--${variant}`}
      role="group"
      aria-label={ARIA[lang]}
    >
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          className={`lang-toggle__btn${code === lang ? ' is-active' : ''}`}
          aria-pressed={code === lang}
          data-cursor="link"
          onClick={() => setLang(code)}
        >
          {LABELS[code]}
        </button>
      ))}
    </div>
  )
}
