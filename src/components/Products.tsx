import { Layers, CircleDot, Minus, Triangle } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import Photo from './Photo'

const ICONS = [Layers, CircleDot, Minus, Triangle]

export default function Products() {
  const { t } = useLang()

  return (
    <section id="products" className="bg-cream-200 py-20 lg:py-28" aria-labelledby="products-h">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal mb-12">
          <p className="section-label mb-3">
            <span className="h-px w-8 bg-rust-500" aria-hidden="true" />
            {t.products.label}
          </p>
          <h2 id="products-h" className="section-heading">
            {t.products.heading}
          </h2>
          <span className="rule mt-5 mb-7" aria-hidden="true" />
          <p className="lede mb-3">{t.products.lead}</p>
          <p className="body-text max-w-2xl">{t.products.intro}</p>
        </div>

        {/* Product range */}
        <h3 className="u-display text-ink text-lg mb-5 reveal">{t.products.rangeTitle}</h3>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {t.products.range.map((p, i) => {
            const Icon = ICONS[i] ?? Layers
            return (
              <li
                key={p.name}
                className={`bg-cream-100 border-2 border-ink/10 p-6 transition-colors hover:border-rust-500 reveal reveal-d${i + 1}`}
              >
                <span
                  className="inline-flex h-11 w-11 items-center justify-center bg-ink mb-5"
                  aria-hidden="true"
                >
                  <Icon size={18} className="text-rust-400" />
                </span>
                <h4 className="text-ink font-bold text-[15px] leading-snug mb-2">{p.name}</h4>
                <p className="text-[13px] leading-relaxed text-muted-light">{p.desc}</p>
              </li>
            )
          })}
        </ul>

        {/* Specifications + grades */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-7 reveal">
            <h3 className="u-display text-ink text-lg mb-5">{t.products.specTitle}</h3>
            <div className="overflow-x-auto border-2 border-ink/10 bg-cream-100">
              <table className="spec-table">
                <caption>{t.products.specTitle}</caption>
                <thead>
                  <tr>
                    <th scope="col">{t.products.specParameter}</th>
                    <th scope="col">{t.products.specValue}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.products.specs.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8 reveal reveal-d2">
            {/* Grades */}
            <div>
              <h3 className="u-display text-ink text-lg mb-5">{t.products.gradesTitle}</h3>
              <ul className="flex flex-wrap gap-2">
                {t.products.grades.map((g) => (
                  <li
                    key={g}
                    className="bg-rust-600 text-white text-[13px] font-bold px-4 py-2.5 min-w-[62px] text-center"
                  >
                    {g}
                  </li>
                ))}
              </ul>
            </div>

            {/* Slitting line photograph */}
            <Photo name="slitting" alt={t.images.slitting} ratio="aspect-[16/9]" />
          </div>
        </div>

        {/* Available processing — polishing, finishing and colouring */}
        <div className="mt-8 grid lg:grid-cols-12 reveal">
          <div className="lg:col-span-4">
            <Photo
              name="polishing"
              alt={t.images.polishing}
              ratio="aspect-[4/3] lg:aspect-auto lg:h-full"
              className="h-full"
            />
          </div>
          <div className="lg:col-span-8 bg-ink p-7 sm:p-9">
            <h3 className="u-display text-cream text-lg mb-1">
              {t.products.processingTitle}
            </h3>
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
