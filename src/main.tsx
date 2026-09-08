import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import type { Lang } from './i18n/translations'

const root = document.getElementById('root')!

/* The pre-rendered page states its language on <html>; starting from the same
   value is what keeps hydration from tearing. */
const served = document.documentElement.lang === 'ar' ? 'ar' : 'en'
const tree = (
  <StrictMode>
    <App initialLang={served as Lang} />
  </StrictMode>
)

/* A pre-rendered page arrives with markup already in place: attach to it rather
   than discarding and re-creating the DOM. Falls back to a plain render if the
   shell is empty, so `vite dev` still works. */
if (root.hasChildNodes()) {
  hydrateRoot(root, tree)
} else {
  createRoot(root).render(tree)
}
