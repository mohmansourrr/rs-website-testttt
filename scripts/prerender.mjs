/**
 * Writes real HTML for each language.
 *
 * Vite emits dist/index.html as an empty shell; this fills it in with markup
 * rendered from the same components the browser runs, so a crawler reads the
 * whole page without executing JavaScript. English is written to /, Arabic to
 * /ar/, and each declares the other via hreflang.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://rsstainless.com'

const { render } = await import(resolve(root, 'dist-ssr/entry-server.js'))

/** Per-language head content. The Arabic page needs Arabic metadata, or it is
 *  an Arabic page advertising itself in English. */
const PAGES = [
  {
    lang: 'en',
    out: 'dist/index.html',
    url: `${SITE}/`,
    title: "RS for Stainless Industrial Co. | Egypt's Full-Service Stainless Steel Centre",
    description:
      "RS for Stainless Industrial Co. — Egypt's full-service stainless steel processing and supply centre. Sheets, coils, pipes, tubes, bars and angles. Cutting, slitting, polishing and finishing since 2007.",
    ogLocale: 'en_EG',
  },
  {
    lang: 'ar',
    out: 'dist/ar/index.html',
    url: `${SITE}/ar/`,
    title: 'أر.أس لصناعه الاستانلس | مركز مصر لخدمات الاستانلس ستيل',
    description:
      'أر.أس لصناعه الاستانلس — مركز متخصص في معالجة وتجهيز وتوريد الاستانلس ستيل في مصر: ألواح ولفائف ومواسير وأنابيب وقضبان وزوايا. التقطيع والقص الطولي والتلميع والتشطيب منذ ٢٠٠٧.',
    ogLocale: 'ar_EG',
  },
]

const shell = readFileSync(resolve(root, 'dist/index.html'), 'utf8')

/** Replace a tag's content, or leave the document untouched if it is absent. */
const swap = (html, pattern, replacement) =>
  pattern.test(html) ? html.replace(pattern, replacement) : html

for (const page of PAGES) {
  const { html: body, dir } = render(page.lang)
  let out = shell

  // The document's own language, which is also what the client hydrates from.
  out = out.replace('<html lang="en">', `<html lang="${page.lang}" dir="${dir}">`)

  // Metadata in the page's own language.
  out = swap(out, /<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`)
  out = swap(
    out,
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta name="description" content="${page.description}" />`
  )
  out = swap(
    out,
    /<meta property="og:title" content="[\s\S]*?" \/>/,
    `<meta property="og:title" content="${page.title}" />`
  )
  out = swap(
    out,
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta property="og:description" content="${page.description}" />`
  )
  out = swap(
    out,
    /<meta property="og:url" content="[\s\S]*?" \/>/,
    `<meta property="og:url" content="${page.url}" />`
  )
  out = swap(
    out,
    /<meta property="og:locale" content="[\s\S]*?" \/>/,
    `<meta property="og:locale" content="${page.ogLocale}" />`
  )
  out = swap(
    out,
    /<link rel="canonical" href="[\s\S]*?" \/>/,
    `<link rel="canonical" href="${page.url}" />`
  )

  // Each language points at the other, so neither is treated as duplicate.
  const alternates = [
    `    <link rel="alternate" hreflang="en" href="${SITE}/" />`,
    `    <link rel="alternate" hreflang="ar" href="${SITE}/ar/" />`,
    `    <link rel="alternate" hreflang="x-default" href="${SITE}/" />`,
  ].join('\n')
  out = out.replace('  </head>', `${alternates}\n  </head>`)

  // Absolute asset URLs: /ar/ is a directory deeper, so "./favicon.png" would
  // resolve to /ar/favicon.png and 404.
  out = out.replace(/(href|src)="\.\//g, '$1="/')

  // The rendered markup itself.
  out = out.replace('<div id="root"></div>', `<div id="root">${body}</div>`)

  const target = resolve(root, page.out)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, out)

  const words = body
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length
  console.log(`${page.out.padEnd(22)} ${page.lang}  dir=${dir}  ${words} words  ${(out.length / 1024).toFixed(0)} KB`)
}
