import { renderToString } from 'react-dom/server'
import App from './App'
import { translations, type Lang } from './i18n/translations'

/**
 * Renders the page to HTML at build time, once per language, so a crawler is
 * served the full content instead of an empty shell.
 */
export function render(lang: Lang) {
  const html = renderToString(<App initialLang={lang} />)
  const t = translations[lang]
  return { html, dir: t.meta.dir }
}
