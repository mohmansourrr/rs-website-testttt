import { Languages } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

interface Props {
  tone?: 'light' | 'dark'
  className?: string
}

/** EN ⇄ العربية switch. Announces the language it will switch *to*. */
export default function LanguageToggle({ tone = 'dark', className = '' }: Props) {
  const { t, toggle, lang } = useLang()

  const toneCls =
    tone === 'light'
      ? 'border-cream/30 text-cream hover:bg-cream hover:text-ink'
      : 'border-ink/25 text-ink hover:bg-ink hover:text-cream'

  return (
    <button
      type="button"
      onClick={toggle}
      lang={lang === 'en' ? 'ar' : 'en'}
      className={`inline-flex items-center gap-2 border-2 px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors min-h-[44px] ${toneCls} ${className}`}
      aria-label={
        lang === 'en' ? 'Switch language to Arabic' : 'التبديل إلى اللغة الإنجليزية'
      }
    >
      <Languages size={15} aria-hidden="true" />
      <span>{t.meta.switchTo}</span>
    </button>
  )
}
