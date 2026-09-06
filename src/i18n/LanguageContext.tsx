import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import { translations, type Lang, type Translation } from './translations'

const STORAGE_KEY = 'rs-lang'

interface LanguageValue {
  lang: Lang
  dir: 'ltr' | 'rtl'
  t: Translation
  setLang: (lang: Lang) => void
  toggle: () => void
}

const LanguageContext = createContext<LanguageValue | null>(null)

/**
 * Picks the opening language from the device/browser language.
 * A previously saved choice always wins.
 */
function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'ar' || saved === 'en') return saved
  } catch {
    /* localStorage unavailable — fall through to device detection */
  }

  const candidates = [
    ...(typeof navigator !== 'undefined' && Array.isArray(navigator.languages)
      ? navigator.languages
      : []),
    typeof navigator !== 'undefined' ? navigator.language : '',
  ].filter(Boolean)

  return candidates.some((l) => l.toLowerCase().startsWith('ar')) ? 'ar' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  const dir = translations[lang].meta.dir

  /* Keep <html lang> and <html dir> in sync for screen readers and RTL layout */
  useEffect(() => {
    const html = document.documentElement
    html.lang = lang
    html.dir = dir
    html.classList.toggle('lang-ar', lang === 'ar')
  }, [lang, dir])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* Saving the preference is best-effort only */
    }
  }, [])

  const toggle = useCallback(() => {
    setLang(lang === 'en' ? 'ar' : 'en')
  }, [lang, setLang])

  return (
    <LanguageContext.Provider
      value={{ lang, dir, t: translations[lang], setLang, toggle }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LanguageValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
