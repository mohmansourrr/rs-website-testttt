import { useRef, useState } from 'react'
import { Layers, CircleDot, Minus, Palette } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import Photo from './Photo'

const ICONS = [Layers, CircleDot, Minus, Palette]

export default function Products() {
  const { t, dir } = useLang()
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const range = t.products.range
  const product = range[active]

  /* Arrow-key navigation across the product cards, mirrored for RTL. */
  const onKeyDown = (e: React.KeyboardEvent) => {
    const forward = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight'
    const back = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft'
    let next = active
    if (e.key === forward || e.key === 'ArrowDown') next = (active + 1) % range.length
    else if (e.key === back || e.key === 'ArrowUp') next = (active - 1 + range.length) % range.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = range.length - 1
    else return
    e.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="products" className="bg-cream-200 py-20 lg:py-28" aria-labelledby="products-h">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal mb-12 grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="section-label mb-3">
              <span className="h-px w-8 bg-rust-500" aria-hidden="true" />
              {t.products.label}
            </p>
            <h2 id="products-h" className="section-heading">
              {t.products.heading}
            </h2>
            <span className="rule mt-5 mb-7" aria-hidden="true" />
            <p className="lede mb-3">{t.products.lead}</p>
            <p className="body-text">{t.products.intro}</p>
          </div>
          <div className="lg:col-span-5">
            <Photo
              name="slitting"
              alt={t.images.slitting}
              caption={t.captions.slitting}
              ratio="aspect-[16/9]"
            />
          </div>
        </div>

        {/* Product range — each card selects its own specifications */}
        <div className="reveal mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h3 className="u-display text-ink text-lg">{t.products.rangeTitle}</h3>
          <p className="text-[12px] font-semibold uppercase tracking-wider text-muted-light">
            {t.products.selectHint}
          </p>
        </div>

        <div
          role="tablist"
          aria-label={t.products.rangeTitle}
          onKeyDown={onKeyDown}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 reveal"
        >
          {range.map((p, i) => {
            const Icon = ICONS[i] ?? Layers
            const selected = i === active
            return (
              <button
                key={p.name}
                ref={(el) => { tabRefs.current[i] = el }}
                type="button"
                role="tab"
                id={`product-tab-${i}`}
                aria-selected={selected}
                aria-controls="product-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                /* No `reveal` here: this className changes on selection, and a
                   React re-render would wipe the `is-visible` class that the
                   scroll observer sets on the DOM. The tablist carries it. */
                className={`text-start p-6 border-2 transition-colors ${
                  selected
                    ? 'bg-ink border-ink'
                    : 'bg-cream-100 border-ink/10 hover:border-rust-500'
                }`}
              >
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center mb-5 transition-colors ${
                    selected ? 'bg-rust-600' : 'bg-ink'
                  }`}
                  aria-hidden="true"
                >
                  <Icon size={18} className={selected ? 'text-white' : 'text-rust-400'} />
                </span>
                <span
                  className={`block font-bold text-[15px] leading-snug mb-2 ${
                    selected ? 'text-cream' : 'text-ink'
                  }`}
                >
                  {p.name}
                </span>
                <span
                  className={`block text-[13px] leading-relaxed ${
                    selected ? 'text-muted-dark' : 'text-muted-light'
                  }`}
                >
                  {p.desc}
                </span>
              </button>
            )
          })}
        </div>

        {/* Specifications for the selected product */}
        <div
          id="product-panel"
          role="tabpanel"
          aria-labelledby={`product-tab-${active}`}
          tabIndex={0}
          className="grid lg:grid-cols-12 gap-8 lg:gap-10 reveal"
        >
          <div className="lg:col-span-7">
            <h3 className="u-display text-ink text-lg mb-5">
              {t.products.specTitle} — {product.name}
            </h3>
            <div className="overflow-x-auto border-2 border-ink/10 bg-cream-100">
              <table className="spec-table">
                <caption>
                  {t.products.specTitle} — {product.name}
                </caption>
                <thead>
                  <tr>
                    <th scope="col">{t.products.specParameter}</th>
                    <th scope="col">{t.products.specValue}</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="u-display text-ink text-lg mb-5">{t.products.gradesTitle}</h3>
            <ul className="flex flex-wrap gap-2">
              {product.grades.map((g) => (
                <li
                  key={g}
                  className="bg-rust-600 text-white text-[13px] font-bold px-4 py-2.5 min-w-[62px] text-center"
                >
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Available processing — polishing, finishing and colouring */}
        <div className="mt-10 grid lg:grid-cols-12 reveal">
          <div className="lg:col-span-4">
            <Photo
              name="polishing"
              alt={t.images.polishing}
              caption={t.captions.polishing}
              captionStyle="overlay"
              ratio="aspect-[4/3] lg:aspect-auto lg:h-full"
              className="h-full"
            />
          </div>
          <div className="lg:col-span-8 bg-ink p-7 sm:p-9">
            <h3 className="u-display text-cream text-lg mb-1">{t.products.processingTitle}</h3>
            <span className="rule mt-4 mb-6" aria-hidden="true" />
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              {t.products.processing.map((p) => (
                <li key={p} className="text-cream text-sm font-bold flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 bg-rust-500 shrink-0" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
